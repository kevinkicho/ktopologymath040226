import shutil
import os

src_dir = r"C:\Users\kevin\.gemini\antigravity\brain\f98e13d9-3279-4d56-a430-2250e0d0936e"
dest_dir = r"c:\Users\kevin\OneDrive\Desktop\ktopologymath040226\icons"

files = [
    ("icon_fixed_128x128_1775610251529.png", "icon128.png"),
    ("icon_fixed_48x48_1775610252518.png", "icon48.png"),
    ("icon_fixed_16x16_1775610253506.png", "icon16.png")
]

for src_name, dest_name in files:
    src_path = os.path.join(src_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    try:
        shutil.copy2(src_path, dest_path)
        print(f"Successfully copied {src_name} to {dest_name}")
    except Exception as e:
        print(f"Error copying {src_name}: {e}")
