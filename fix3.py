import re, os, glob

base = r'C:\Users\kevin\OneDrive\Desktop\ktopologymath040226'
files = sorted(glob.glob(os.path.join(base, '*.html')))
exclude = ['01_complex_explorer.html', 'index.html', 'analytics.html', 'graph.html', 'paths.html', 'render_pwa_icons.html', 'graph3d.html', 'glossary.py', 'fix_sliders.py', 'check_dup.py', 'check2.py', 'check3.py']
files = [f for f in files if os.path.basename(f) not in exclude]

fixes = {}

for fpath in files:
    fname = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8') as fh:
        content = fh.read()
    original = content
    file_fixes = []
    
    lines = content.split('\n')
    new_lines = []
    gs_idx = 0  # globalSpeed counter
    
    for i, line in enumerate(lines):
        new_line = line
        
        # Check if this line has a globalSpeed slider that was changed to nextElementSibling
        # but the display element is NOT the next sibling of the input
        if 'this.nextElementSibling.textContent' in line and 'globalSpeed' in line and 'oninput' in line:
            # This is a globalSpeed slider with nextElementSibling - we need to check structure
            # Look at surrounding lines to determine if nextElementSibling works
            prev_line = lines[i-1] if i > 0 else ''
            next_line = lines[i+1] if i+1 < len(lines) else ''
            
            # Check pattern: label before input, span inside label
            # Pattern: <label>...<span id="globalSpeedValN">0.10</span>x</label>\n<input...nextElementSibling...>
            if '<label>' in prev_line and 'globalSpeedVal' in prev_line:
                # nextElementSibling won't work - need to use getElementById with unique ID
                # Find what globalSpeedVal ID is in the prev_line
                gsv_match = re.search(r'id="globalSpeedVal(\d*)"', prev_line)
                if gsv_match:
                    gsv_num = gsv_match.group(1)
                    gsv_id = f'globalSpeedVal{gsv_num}' if gsv_num else 'globalSpeedVal'
                    # Also find the globalSpeedN id
                    gs_match = re.search(r'id="globalSpeed(\d*)"', line)
                    gs_num_str = gs_match.group(1) if gs_match else ''
                    gs_id = f'globalSpeed{gs_num_str}' if gs_num_str else 'globalSpeed'
                    # Replace nextElementSibling with getElementById
                    new_line = line.replace(
                        'this.nextElementSibling.textContent=(+this.value).toFixed(2)+\'x\'',
                        f'document.getElementById(\'{gsv_id}\').textContent=(+this.value).toFixed(2)+\'x\''
                    )
                    file_fixes.append(f'Reverted globalSpeed{gs_num_str} slider to getElementById("{gsv_id}")')
            
            # Check pattern: span after input on separate line
            elif '<span' in next_line and 'globalSpeedVal' in next_line:
                # nextElementSibling DOES work - keep it
                pass
            
            # Check pattern: div wrapper (ctrl-group)
            elif '<div' in prev_line and 'ctrl-group' in prev_line:
                # input is inside div, display span is outside - nextElementSibling won't work
                # Check if there's a span after the closing div
                # Find the globalSpeedVal ID
                gsv_match = re.search(r'id="globalSpeedVal(\d*)"', next_line) if i+1 < len(lines) else None
                if not gsv_match and i+2 < len(lines):
                    gsv_match = re.search(r'id="globalSpeedVal(\d*)"', lines[i+2])
                if gsv_match:
                    gsv_num = gsv_match.group(1)
                    gsv_id = f'globalSpeedVal{gsv_num}'
                    new_line = line.replace(
                        'this.nextElementSibling.textContent=(+this.value).toFixed(2)+\'x\'',
                        f'document.getElementById(\'{gsv_id}\').textContent=(+this.value).toFixed(2)+\'x\''
                    )
                    file_fixes.append(f'Reverted globalSpeedN slider (div-wrapped) to getElementById')
        
        new_lines.append(new_line)
    
    content = '\n'.join(new_lines)
    
    if content != original:
        with open(fpath, 'w', encoding='utf-8') as fh:
            fh.write(content)
        fixes[fname] = file_fixes
        print(f"FIXED: {fname}")
        for fc in file_fixes:
            print(f"  - {fc}")

if not fixes:
    print("No files needed fixing")
else:
    print(f"\nTotal files fixed: {len(fixes)}")