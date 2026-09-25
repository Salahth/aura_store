export default function Header() {
  return (
    <header className="text-center pt-10 pb-6 px-4">
      {/* عنوان المتجر */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400 tracking-tight mb-8">
        Aura Store
      </h1>

      {/* صندوق الوصف */}
      <div className="max-w-3xl mx-auto bg-slate-900/40 border border-slate-700/50 rounded-2xl px-6 py-5 backdrop-blur-sm">
        <p className="text-slate-300 text-sm md:text-base leading-relaxed text-center">
          كل ما يحتاجه الطلاب من إلكترونيات واكسسوارات في مكان واحد. اكتشفوا أحدث المنتجات
          بأسعار مصرية وعروض استثنائية، واطلبوا ما يناسبكم بسهولة وبضغطة زر دون عناء البحث أو
          التنقل. لا تفوّتوا الفرصة واستفيدوا من عروضنا قبل نفاد المنتجات
        </p>
      </div>
    </header>
  );
}
