import os, sys
from PIL import Image

sys.stdout.reconfigure(encoding='utf-8')
root = r'E:\PG PHOTO'

whatsapp_dir = os.path.join(root, 'Sorath Boys Pg and Office')
for f in sorted(os.listdir(whatsapp_dir)):
    fp = os.path.join(whatsapp_dir, f)
    if os.path.isfile(fp):
        with Image.open(fp) as im:
            print(f"{f}: format={im.format}, size={im.size}, mode={im.mode}")
