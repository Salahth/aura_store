export default function Header() {
  return (
    <header className="text-center pt-10 pb-6 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="flex items-center justify-center gap-2 text-4xl font-extrabold text-primary tracking-tight mb-2">
        <span className="text-3xl">🛍️</span>
        <span>متجر النخبة</span>
      </div>
      <p className="text-base text-slate-500">
        منتجات مختارة
        <span className="text-primary font-bold mx-1">•</span>
        أسعار مناسبة
        <span className="text-primary font-bold mx-1">•</span>
        توصيل متوفر
      </p>
      <div className="w-[60px] h-1 bg-primary rounded mx-auto mt-6 opacity-30" />
    </header>
  );
}