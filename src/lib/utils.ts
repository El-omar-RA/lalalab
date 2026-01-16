import { PriceInfo } from "@/lib/types";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function toSlug(input: string) {
  const normalized = input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return normalized || "item";
}

export function parsePrice(raw: string, priceMinRaw?: string): PriceInfo {
  const cleaned = raw.replace(/,/g, "");
  const numbers =
    cleaned.match(/\d+(?:\.\d{1,2})?/g)?.map((value) => Number(value)) ?? [];
  const minFromField = priceMinRaw
    ? Number(priceMinRaw.replace(/,/g, ""))
    : undefined;

  const lower = raw.toLowerCase();
  const hasRangeHint =
    /price range|through/.test(lower) || /\d\s*-\s*\d/.test(lower);

  let min: number | undefined;
  let max: number | undefined;
  let isRange = false;

  if (hasRangeHint && numbers.length >= 2) {
    min = Math.min(...numbers);
    max = Math.max(...numbers);
    isRange = true;
  } else if (numbers.length >= 1) {
    min = numbers[numbers.length - 1];
    max = min;
  }

  if (minFromField !== undefined && !Number.isNaN(minFromField)) {
    min = minFromField;
    max = isRange && max !== undefined ? max : minFromField;
  }

  return {
    raw,
    min,
    max,
    isRange,
    parseable: typeof min === "number",
  };
}

export function formatAUD(value: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatPrice(info: PriceInfo) {
  if (!info.parseable || info.min === undefined) {
    return info.raw;
  }
  if (info.isRange) {
    return `From ${formatAUD(info.min)}`;
  }
  return formatAUD(info.min);
}

export function buildQueryString(params: Record<string, string | undefined>) {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      search.set(key, value);
    }
  });
  const query = search.toString();
  return query ? `?${query}` : "";
}