import os, re

base = r'C:\Users\kevin\OneDrive\Desktop\ktopologymath040226'
import glob
files = sorted(glob.glob(os.path.join(base, '[0-9]*_*.html')))

for f in files:
    fname = os.path.basename(f)
    with open(f, encoding='utf-8', errors='ignore') as fh:
        content = fh.read()
    
    m = re.search(r'function\s+(switchTab\w*|dmTab)\s*\(', content)
    if not m:
        continue
    func_name = m.group(1)
    start = m.start()
    brace_start = content.index('{', start)
    brace_count = 0
    end = brace_start
    for i in range(brace_start, len(content)):
        if content[i] == '{':
            brace_count += 1
        elif content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                end = i + 1
                break
    func_body = content[start:end]
    
    # Extract the init/start/draw/toggle/render calls after switching
    # Find all callable function invocations
    calls = re.findall(r'\b(init\w+|start\w+|draw\w+|redraw\w+|toggle\w+|schedule\w+|render\w+|resize\w+|redrawTab)\s*\(', func_body)
    calls = list(set(calls))
    
    # Cancel method
    cancel_match = re.search(r'(cancelAll\w*|stopAll\w*|_cancelAll\w*)\s*\(', func_body)
    inline_cancel = bool(re.search(r'cancelAnimationFrame\(', func_body))
    stop_method = bool(re.search(r'\.stop\(\)', func_body))
    
    if cancel_match:
        cancel_detail = cancel_match.group(1)
    elif inline_cancel:
        cancel_detail = 'inline_cancelAnimationFrame'
    elif stop_method:
        cancel_detail = 'stop_methods'
    else:
        cancel_detail = 'NONE'
    
    # Auto-start pattern type
    if re.search(r'toggle\w+Anim\w*', func_body):
        autostart_detail = 'toggleAnim'
    elif re.search(r'initTab\w*', func_body):
        autostart_detail = 'initTab*'
    elif re.search(r'redrawTab\s*\(', func_body):
        autostart_detail = 'redrawTab'
    elif re.search(r'startTab\w*', func_body):
        autostart_detail = 'startTab*'
    elif re.search(r'\bdraw\d+\s*\(', func_body):
        autostart_detail = 'drawN'
    elif re.search(r'\bstart\d+\s*\(', func_body):
        autostart_detail = 'startN'
    elif re.search(r'scheduleLoop\w*', func_body):
        autostart_detail = 'scheduleLoop*'
    elif re.search(r'resize\w+\s*\(', func_body) and re.search(r'render\w+\s*\(', func_body):
        autostart_detail = 'resize+render'
    elif re.search(r'init\w+\s*\(', func_body):
        autostart_detail = 'init*'
    elif re.search(r'\.start\(\)', func_body):
        autostart_detail = '.start()'
    elif re.search(r'render\w+\s*\(', func_body):
        autostart_detail = 'render*'
    else:
        # fallback: look for any function call within if/else blocks
        autostart_detail = 'other:' + ','.join(calls[:5]) if calls else 'none'
    
    print(fname + '|' + func_name + '|' + cancel_detail + '|' + autostart_detail)
