import os, sys
from PIL import Image

sys.stdout.reconfigure(encoding='utf-8')
root = r'E:\PG PHOTO'

for sub in ['Luxra Girls PG 1', 'Sorath Girls PG 1', r'Sorath Boys Pg and Office\Office']:
    print(f"\n=== {sub} ===")
    d = os.path.join(root, sub)
    for f in sorted(os.listdir(d)):
        fp = os.path.join(d, f)
        if os.path.isfile(fp):
            with Image.open(fp) as im:
                print(f"  {f}: size={im.size}, format={im.format}")
