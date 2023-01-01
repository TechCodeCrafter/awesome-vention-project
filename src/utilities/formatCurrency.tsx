// A formatter for Canadian dollar currency values
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "CAD",
  style: "currency",
});

// Formats a number as Canadian dollar currency using the CURRENCY_FORMATTER
export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
