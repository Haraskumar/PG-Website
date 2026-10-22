import os, shutil, hashlib, json, sys
import pymupdf

sys.stdout.reconfigure(encoding='utf-8')

src_root = r'E:\PG PHOTO'
dest_work = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'asset-work')

os.makedirs(os.path.join(dest_work, 'originals'), exist_ok=True)
os.makedirs(os.path.join(dest_work, 'extracted'), exist_ok=True)
os.makedirs(os.path.join(dest_work, 'selected'), exist_ok=True)
os.makedirs(os.path.join(dest_work, 'enhanced'), exist_ok=True)
os.makedirs(os.path.join(dest_work, 'reports'), exist_ok=True)

# Copy originals preserving tree
print("Copying originals to asset-work/originals...")
copied_count = 0
for dirpath, dirnames, filenames in os.walk(src_root):
    rel_dir = os.path.relpath(dirpath, src_root)
    target_dir = os.path.join(dest_work, 'originals', rel_dir) if rel_dir != '.' else os.path.join(dest_work, 'originals')
    os.makedirs(target_dir, exist_ok=True)
    for f in filenames:
        src_file = os.path.join(dirpath, f)
        dest_file = os.path.join(target_dir, f)
        if not os.path.exists(dest_file):
            shutil.copy2(src_file, dest_file)
            copied_count += 1

print(f"Copied {copied_count} files into asset-work/originals.")

# Now extract embedded images from all PDFs
pdf_records = []
print("\nExtracting images from PDFs...")

for dirpath, _, filenames in os.walk(os.path.join(dest_work, 'originals')):
    for f in filenames:
        if f.lower().endswith('.pdf'):
            pdf_path = os.path.join(dirpath, f)
            rel_pdf = os.path.relpath(pdf_path, os.path.join(dest_work, 'originals'))
            pdf_folder_name = os.path.splitext(f)[0].replace(' ', '_').replace('.', '_').replace('📍', 'pin')
            out_pdf_dir = os.path.join(dest_work, 'extracted', pdf_folder_name)
            os.makedirs(out_pdf_dir, exist_ok=True)

            doc = pymupdf.open(pdf_path)
            extracted_in_this_pdf = 0
            for pno in range(len(doc)):
                page = doc[pno]
                img_list = page.get_images()
                for idx, img in enumerate(img_list):
                    xref = img[0]
                    base_img = doc.extract_image(xref)
                    img_bytes = base_img["image"]
                    img_ext = base_img["ext"]
                    img_w = base_img["width"]
                    img_h = base_img["height"]
                    
                    # Generate filename
                    img_name = f"page_{pno+1:02d}_img_{idx+1:02d}_xref{xref}.{img_ext}"
                    out_img_path = os.path.join(out_pdf_dir, img_name)
                    with open(out_img_path, 'wb') as img_out:
                        img_out.write(img_bytes)

                    h = hashlib.sha256(img_bytes).hexdigest()
                    pdf_records.append({
                        'pdf': rel_pdf,
                        'page': pno + 1,
                        'index': idx + 1,
                        'xref': xref,
                        'width': img_w,
                        'height': img_h,
                        'format': img_ext,
                        'size_bytes': len(img_bytes),
                        'sha256': h,
                        'saved_path': os.path.relpath(out_img_path, dest_work)
                    })
                    extracted_in_this_pdf += 1
            doc.close()
            print(f"  Extracted {extracted_in_this_pdf} images from {rel_pdf}")

with open(os.path.join(dest_work, 'reports', 'pdf_extractions.json'), 'w', encoding='utf-8') as out_f:
    json.dump(pdf_records, out_f, indent=2)

print(f"\nTotal extracted images: {len(pdf_records)}. Saved to reports/pdf_extractions.json")
