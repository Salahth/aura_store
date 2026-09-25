import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aura Store",
  description: "كل ما يحتاجه طلاب الإقامة من إلكترونيات واكسسوارات في مكان واحد. اكتشفوا أحدث المنتجات بأسعار مغرية وعروض استثنائية، واطلبوا ما يناسبكم بسهولة وبضغطة زر دون عناء البحث أو التنقل. لا تفوّتوا الفرصة واستفيدوا من عروضنا قبل نفاد المنتجات",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
