import { Product } from "@/types/product";
import { STORE_WHATSAPP } from "@/data/products";
import { buildWhatsAppUrl, formatPrice } from "@/lib/whatsapp";

interface Props {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: Props) {
  const message = `السلام عليكم، أريد طلب: ${product.name}`;
  const whatsappUrl = buildWhatsAppUrl(STORE_WHATSAPP, message);

  return (
    <div
      className="card-animate rounded-2xl overflow-hidden flex flex-col border border-slate-700/40 transition-all duration-300 hover:-translate-y-1 hover:border-slate-600/60"
      style={{
        animationDelay: `${0.05 * (index + 1)}s`,
        background: "linear-gradient(145deg, #0f1e35 0%, #0a1628 100%)",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* صورة المنتج — بدون شارات */}
      <div className="w-full aspect-[1/1] relative overflow-hidden group">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.12) 0%, transparent 70%), linear-gradient(145deg, #0d1b30 0%, #0a1628 100%)",
          }}
        />
        {product.img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.img}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-5xl text-slate-600 select-none">
            📦
          </div>
        )}
      </div>

      {/* جسم البطاقة */}
      <div className="p-5 pb-6 flex flex-col flex-1 gap-1 text-center">
        <h3 className="text-base font-bold text-white leading-snug min-h-[3em] flex items-center justify-center">
          {product.name}
        </h3>

        <div className="text-lg font-extrabold text-amber-400 tracking-tight mt-2">
          {formatPrice(product.price)}
          <small className="text-sm font-bold text-amber-300 mr-1"> DA</small>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed mt-3 line-clamp-2 min-h-[2.5em]">
          {product.desc}
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
          aria-label={`اطلب ${product.name} عبر واتساب`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span>اطلب الآن عبر واتساب</span>
        </a>
      </div>
    </div>
  );
}
