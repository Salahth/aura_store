export function buildWhatsAppUrl(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function formatPrice(price: number): string {
  return price.toLocaleString("en-US");
}