import argparse
import json
from pathlib import Path


def load_json(path: Path):
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def write_json(path: Path, data):
    with path.open("w", encoding="utf-8") as handle:
        json.dump(data, handle, indent=2, ensure_ascii=False)
        handle.write("\n")


def main():
    parser = argparse.ArgumentParser(
        description="Merge Rootlab descriptions and reviews into LalaLab products."
    )
    parser.add_argument(
        "--details",
        default=r"D:\cursor crawl\rootlab_products_with_details.json",
        help="Path to rootlab_products_with_details.json",
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
    args = parser.parse_args()

    details_path = Path(args.details)
    products_path = args.products
    output_path = args.output or products_path

    if not details_path.exists():
        raise SystemExit(f"Details file not found: {details_path}")
    if not products_path.exists():
        raise SystemExit(f"Products file not found: {products_path}")

    details = load_json(details_path)
    products = load_json(products_path)

    details_by_link = {}
    for item in details:
        link = item.get("link")
        if link:
            details_by_link[link] = item

    updated = 0
    missing = 0
    for product in products:
        link = product.get("link")
        detail = details_by_link.get(link)
        if not detail:
            missing += 1
            continue

        description = detail.get("description", "") or ""
        reviews = detail.get("reviews") or []
        review_count = detail.get("review_count")
        if review_count is None:
            review_count = len(reviews)

        product["description"] = description
        product["reviews"] = reviews
        product["review_count"] = review_count
        updated += 1

    write_json(output_path, products)

    print(f"Updated products: {updated}")
    print(f"Missing details: {missing}")
    print(f"Output: {output_path}")


if __name__ == "__main__":
    main()
