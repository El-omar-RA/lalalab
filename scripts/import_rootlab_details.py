import argparse
import csv
import json
import re
from pathlib import Path


def load_json(path: Path):
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def load_csv_details(path: Path):
    with path.open("r", encoding="utf-8", newline="") as handle:
        reader = csv.DictReader(handle)
        rows = []
        for row in reader:
            current = {key: (value or "").strip() for key, value in row.items()}
            reviews_raw = current.get("reviews") or "[]"
            try:
                current["reviews"] = json.loads(reviews_raw)
            except json.JSONDecodeError:
                current["reviews"] = []

            review_count = current.get("review_count")
            try:
                current["review_count"] = int(review_count)
            except (TypeError, ValueError):
                current["review_count"] = len(current["reviews"])

            rows.append(current)

        return rows


def write_json(path: Path, data):
    with path.open("w", encoding="utf-8") as handle:
        json.dump(data, handle, indent=2, ensure_ascii=False)
        handle.write("\n")


def normalize_link(link: str) -> str:
    return link.replace("/roduct/", "/product/")


def replace_brand(text: str, source: str, target: str) -> str:
    if not text or not source:
        return text
    pattern = re.compile(re.escape(source), flags=re.IGNORECASE)
    return pattern.sub(target, text)


def load_details(path: Path):
    if path.suffix.lower() == ".csv":
        return load_csv_details(path)
    return load_json(path)


def main():
    parser = argparse.ArgumentParser(
        description="Merge Rootlab descriptions and reviews into LalaLab products."
    )
    parser.add_argument(
        "--details",
        default=r"D:\LALALAB\rootlab_products.csv",
        help="Path to rootlab_products CSV/JSON with descriptions",
    )
    parser.add_argument(
        "--products",
        default=Path("src/data/lalalab_products_clean.json"),
        type=Path,
        help="Path to LalaLab products JSON",
    )
    parser.add_argument(
        "--output",
        default=None,
        type=Path,
        help="Optional output path. Defaults to overwriting --products.",
    )
    parser.add_argument(
        "--brand-from",
        default="rootlab",
        help="Brand/source text to replace inside descriptions.",
    )
    parser.add_argument(
        "--brand-to",
        default="LalaLab",
        help="Replacement brand text.",
    )
    parser.add_argument(
        "--skip-brand-replace",
        action="store_true",
        help="Do not replace brand text inside descriptions and names.",
    )
    parser.add_argument(
        "--skip-name-rebrand",
        action="store_true",
        help="Do not rename product name/clean_name when swapping brands.",
    )
    args = parser.parse_args()

    details_path = Path(args.details)
    products_path = args.products
    output_path = args.output or products_path

    if not details_path.exists():
        raise SystemExit(f"Details file not found: {details_path}")
    if not products_path.exists():
        raise SystemExit(f"Products file not found: {products_path}")

    details = load_details(details_path)
    products = load_json(products_path)

    details_by_link = {}
    for item in details:
        link = (item.get("link") or "").strip()
        if link:
            details_by_link[link] = item
            normalized = normalize_link(link)
            if normalized != link:
                details_by_link[normalized] = item

    updated = 0
    missing = 0
    normalized_links = 0
    brand_swapped = 0
    name_rebranded = 0
    replace_brand_text = not args.skip_brand_replace and args.brand_from and args.brand_to
    rebrand_names = replace_brand_text and not args.skip_name_rebrand
    for product in products:
        link = product.get("link")
        normalized_link = normalize_link(link) if link else link
        detail = details_by_link.get(link) or details_by_link.get(normalized_link)
        if not detail:
            missing += 1
            continue

        if link and normalized_link and link != normalized_link:
            product["link"] = normalized_link
            normalized_links += 1

        description = detail.get("description", "") or ""
        reviews = detail.get("reviews") or []
        review_count = detail.get("review_count")
        if review_count is None:
            review_count = len(reviews)

        if replace_brand_text:
            new_description = replace_brand(description, args.brand_from, args.brand_to)
            if new_description != description:
                brand_swapped += 1
            description = new_description

        product["description"] = description
        product["reviews"] = reviews
        product["review_count"] = review_count

        if rebrand_names:
            for key in ("name", "clean_name"):
                if key in product and isinstance(product[key], str):
                    updated_name = replace_brand(
                        product[key], args.brand_from, args.brand_to
                    )
                    if updated_name != product[key]:
                        name_rebranded += 1
                        product[key] = updated_name
        updated += 1

    write_json(output_path, products)

    print(f"Updated products: {updated}")
    print(f"Missing details: {missing}")
    if normalized_links:
        print(f"Fixed product links: {normalized_links}")
    if replace_brand_text:
        print(f"Brand replacements in descriptions: {brand_swapped}")
    if name_rebranded:
        print(f"Brand replacements in names: {name_rebranded}")
    print(f"Output: {output_path}")


if __name__ == "__main__":
    main()
