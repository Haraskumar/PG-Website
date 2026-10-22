import pymupdf
import json, os, sys

sys.stdout.reconfigure(encoding='utf-8')

root = r'E:\PG PHOTO'
pdf_files = [
    r'Luxra Boys PG 1\LUXORA PG ALL PHOTO PDF..pdf',
    r'Luxra Boys PG 1\LUXORA PG PHOTO ALL ROOM\📍 LUXORA PG.pdf',
    r'Sorath Boys Pg and Office\Sorath Boys PG 1\SORATH BOYS PG 1.pdf',
    r'Sorath Boys Pg and Office\Sorath Boys PG 3\SORATH BOYS PG 3.pdf'
]

for rel in pdf_files:
    full_path = os.path.join(root, rel)
    print(f"\n==========================================")
    print(f"PDF: {rel}")
    doc = pymupdf.open(full_path)
    print(f"Page count: {len(doc)}")
    for pno in range(len(doc)):
        page = doc[pno]
        text = page.get_text().strip().replace('\n', ' ')
        img_list = page.get_images()
        print(f"  Page {pno+1}: text='{text[:60]}' | images={len(img_list)}")
        for img_idx, img in enumerate(img_list):
            xref = img[0]
            base_img = doc.extract_image(xref)
            print(f"    Img {img_idx+1}: xref={xref}, ext={base_img['ext']}, dim={base_img['width']}x{base_img['height']}, bytes={len(base_img['image'])}")
    doc.close()
