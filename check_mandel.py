import os, re
f = os.path.join(r'C:\Users\kevin\OneDrive\Desktop\ktopologymath040226', '03_mandelbrot.html')
c = open(f, encoding='utf-8', errors='ignore').read()
dmTabStart = c.index('function dmTab')
bc = 0
bs = c.index('{', dmTabStart)
for i in range(bs, len(c)):
    if c[i] == '{': bc += 1
    elif c[i] == '}':
        bc -= 1
        if bc == 0:
            dmTabEnd = i + 1
            break
dmTabBody = c[dmTabStart:dmTabEnd]
print('dmTab calls _cancelAllAnims:', '_cancelAllAnims' in dmTabBody)
print('dmTab calls cancelAnimationFrame:', 'cancelAnimationFrame' in dmTabBody)
tabs = re.findall(r'class="dm-tab', c)
print('Number of dm-tab buttons:', len(tabs))
print('Auto-start patterns in dmTab:', bool(re.search(r'orbitAnimDraw|runBoxCount|rayDraw|renderBifurc|bifurcInitClick', dmTabBody)))
