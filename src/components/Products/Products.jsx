import { memo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    Star,
    Wheat,
    ShoppingBag,
    Maximize2,
    X,
    ZoomIn,
    ZoomOut,
} from "lucide-react";
import TiltCard from "../common/TiltCard";
import { MEDIA } from "../../config/media";


const categories = [
    { id: "all", label: "All Varieties", count: 8 },
    { id: "basmati", label: "Basmati Specials", count: 2 },
    { id: "staple", label: "Daily Staples", count: 3 },
    { id: "aged", label: "Aged Reserve", count: 2 },
    { id: "export", label: "Export Quality", count: 2 },
];

const products = [
    {
        id: 1,
        name: "Basmati Rice",
        category: "basmati",
        image: MEDIA.products.basmati,
        description:
            "King of fragrance, extra long slender grains that elongate up to 2x when cooked.",
        price: "Premium",
        grain: "Extra Long Grain",
        aging: "Naturally Aged",
        tag: "Royal Aroma",
        color: "from-amber-500 to-yellow-400",
    },
    {
        id: 2,
        name: "Indrayani (New)",
        category: "staple",
        image: MEDIA.products.indrayani,
        description:
            "Signature aromatic Maharashtra staple, rich authentic flavor and tender soft texture.",
        price: "Best Seller",
        grain: "Medium Soft Grain",
        aging: "Fresh Harvest",
        tag: "Daily Essential",
        color: "from-emerald-600 to-green-400",
    },
    {
        id: 3,
        name: "Kolam Rice",
        category: "staple",
        image: MEDIA.products.kolam,
        description:
            "Tiny slender grains with subtle natural aroma, perfect for daily khichdi and dal-chawal.",
        price: "Popular",
        grain: "Medium Slender",
        aging: "Year Aged",
        tag: "Light & Easy",
        color: "from-sky-600 to-cyan-400",
    },
    {
        id: 4,
        name: "Kolpi Rice",
        category: "export",
        image: MEDIA.products.kolapi,
        description:
            "Silky double-polished grains, naturally processed and moisture-controlled for long shelf life.",
        price: "Export",
        grain: "Fine Polished",
        aging: "Sortex Cleaned",
        tag: "Export Certified",
        color: "from-emerald-600 to-teal-400",
    },
    {
        id: 5,
        name: "Indrayani (Old)",
        category: "aged",
        image: MEDIA.products.indrayani,
        description:
            "Aged to perfection for non-sticky fluffiness and distinct deep aroma prized by connoisseurs.",
        price: "Premium",
        grain: "Aged Medium Grain",
        aging: "18+ Months Aged",
        tag: "Vintage Reserve",
        color: "from-amber-600 to-yellow-500",
    },
    {
        id: 6,
        name: "Jeera 1008 (New)",
        category: "staple",
        image: MEDIA.products.jeera,
        description:
            "Cumin-sized slender grain with quick cooking time, light digestion, and immaculate polish.",
        price: "Popular",
        grain: "Slender Micro Grain",
        aging: "Current Crop",
        tag: "Quick Cooking",
        color: "from-cyan-600 to-teal-400",
    },
    {
        id: 7,
        name: "Jeera 1008 (Old)",
        category: "aged",
        image: MEDIA.products.jeera,
        description:
            "Specially cured vintage Jeera grain that cooks separate, non-sticky and fluffy every time.",
        price: "Best Seller",
        grain: "Fine Slender Grain",
        aging: "Aged 2 Years",
        tag: "Non-Sticky",
        color: "from-yellow-600 to-amber-500",
    },
    {
        id: 8,
        name: "Basmati Steam Rice",
        category: "basmati",
        image: MEDIA.products.basmati,
        description:
            "Steam-cured extra long basmati with high elongation ratio, formulated for biryanis & banquets.",
        price: "Export",
        grain: "Steam Long Grain",
        aging: "Steam Processed",
        tag: "Biryani Special",
        color: "from-green-700 to-emerald-500",
    },
];

function Products({ onOpenQuote }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isZoomed, setIsZoomed] = useState(false);
    const [activeTab, setActiveTab] = useState("all");

    const filteredProducts = activeTab === "all"
        ? products
        : products.filter(p => p.category === activeTab || (activeTab === "export" && (p.price === "Export" || p.category === "export")));

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setSelectedProduct(null);
                setIsZoomed(false);
            }
        };
        if (selectedProduct) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedProduct]);

    return (
        <section
            id="products"
            className="relative overflow-hidden bg-gradient-to-b from-[#fcfbf6] via-white to-[#fcfbf6] py-20 sm:py-28 scroll-mt-24"
        >
            {/* Ambient Background Lights */}
            <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-emerald-200/25 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-amber-200/25 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/80 backdrop-blur-sm px-4 py-1.5 shadow-xs mb-3 sm:mb-4">
                        <Wheat className="w-4 h-4 text-emerald-700" />
                        <span className="font-semibold uppercase tracking-[3px] sm:tracking-[4px] text-emerald-800 text-[11px] sm:text-xs">
                            Sortex Cleaned & Certified
                        </span>
                    </div>

                    <h2 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                        Premium Quality{" "}
                        <span className="text-shimmer-green block sm:inline">
                            Rice Collection
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
                        Processed with advanced Japanese Sortex milling technology, ensuring pristine purity, consistent grain size, and natural farm-fresh fragrance in every bag.
                    </p>

                    {/* Filter Tabs */}
                    <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 p-1.5 rounded-2xl bg-slate-100/80 max-w-2xl mx-auto backdrop-blur-sm border border-slate-200/70">
                        {categories.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                                        isActive ? "text-emerald-900" : "text-slate-600 hover:text-slate-900"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="productActiveTab"
                                            transition={{ type: "spring", stiffness: 450, damping: 35 }}
                                            className="absolute inset-0 bg-white rounded-xl shadow-sm border border-emerald-100"
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center gap-1.5">
                                        {tab.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Cards Grid with AnimatePresence */}
                <motion.div
                    layout
                    className="mt-10 sm:mt-14 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.94 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.94 }}
                                transition={{ duration: 0.35 }}
                            >
                                <TiltCard
                                    className="group h-full flex flex-col justify-between overflow-hidden rounded-[26px] bg-white shadow-xl hover:shadow-2xl border border-slate-200/70 transition-all duration-300 hover:border-emerald-300"
                                >
                                    {/* Attractive Showcase Box with Full Mode Zoom */}
                                    <div className="p-3 sm:p-3.5 pb-0">
                                        <div
                                            onClick={() => {
                                                setSelectedProduct(product);
                                                setIsZoomed(false);
                                            }}
                                            className="group/box relative h-68 sm:h-76 w-full overflow-hidden rounded-[22px] bg-gradient-to-b from-stone-100 via-slate-50 to-slate-100 border border-slate-200/80 shadow-[inset_0_2px_8px_rgba(0,0,0,0.03)] cursor-pointer transition-all duration-300 group-hover:border-green-300/80 group-hover:shadow-[0_10px_25px_rgba(34,197,94,0.08)]"
                                        >
                                            {/* Full Mode Zoomed Product Image */}
                                            <motion.img
                                                src={product.image}
                                                alt={product.name}
                                                width={500}
                                                height={500}
                                                loading="lazy"
                                                decoding="async"
                                                whileHover={{
                                                    scale: 1.12,
                                                }}
                                                transition={{
                                                    duration: 0.45,
                                                    ease: "easeOut",
                                                }}
                                                className="w-full h-full object-cover object-center transition-transform duration-500"
                                            />

                                            {/* Subtle Shimmer Ray */}
                                            <motion.div
                                                animate={{
                                                    x: ["-180%", "250%"],
                                                }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 4,
                                                    ease: "linear",
                                                }}
                                                className="hidden md:block absolute inset-y-0 left-0 w-20 rotate-12 bg-white/40 blur-md pointer-events-none"
                                            />

                                            {/* Full View Hover Pill */}
                                            <div className="absolute inset-0 bg-slate-900/15 opacity-0 group-hover/box:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                                <span className="flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-slate-800 shadow-xl transform translate-y-2 group-hover/box:translate-y-0 transition-transform duration-300 border border-slate-200">
                                                    <Maximize2 size={13} className="text-emerald-700" />
                                                    Inspect Bag
                                                </span>
                                            </div>

                                            {/* Status Badge */}
                                            <div className="absolute right-3 top-3 z-20 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-slate-800 shadow-sm border border-slate-200/80 flex items-center gap-1.5 pointer-events-none">
                                                <span className={`h-2 w-2 rounded-full ${
                                                    product.price === 'Best Seller' ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]' :
                                                    product.price === 'Export' ? 'bg-emerald-600 shadow-[0_0_8px_rgba(5,150,105,0.6)]' :
                                                    product.price === 'Premium' ? 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]' :
                                                    'bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.6)]'
                                                }`} />
                                                {product.price}
                                            </div>

                                            {/* Grain Tag Badge Top-Left */}
                                            <div className="absolute left-3 top-3 z-20 rounded-md bg-emerald-900/80 backdrop-blur-md px-2 py-0.5 text-[10px] font-semibold text-emerald-100 shadow-xs border border-emerald-700/50">
                                                {product.tag}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-5 pt-4 flex flex-col flex-grow justify-between">
                                        <div>
                                            {/* Rating & Grain Spec */}
                                            <div className="flex items-center justify-between gap-2">
                                                <div className="flex items-center gap-1">
                                                    {[1, 2, 3, 4, 5].map((i) => (
                                                        <Star
                                                            key={i}
                                                            size={13}
                                                            fill="#FFD700"
                                                            color="#FFD700"
                                                        />
                                                    ))}
                                                    <span className="text-[11px] font-bold text-slate-500 ml-1">5.0</span>
                                                </div>
                                                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                                                    {product.aging}
                                                </span>
                                            </div>

                                            {/* Product Title */}
                                            <h3 className="mt-2 text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1">
                                                {product.name}
                                            </h3>

                                            {/* Grain Spec Badge */}
                                            <div className="mt-1 text-[11px] text-slate-500 flex items-center gap-1">
                                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-300" />
                                                <span>{product.grain}</span>
                                            </div>

                                            {/* Description */}
                                            <p className="mt-2 text-slate-500 text-xs leading-5 line-clamp-2 min-h-[40px]">
                                                {product.description}
                                            </p>
                                        </div>

                                        {/* Bottom Action Footer */}
                                        <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100">
                                            <div className="flex items-center gap-1.5 text-slate-600">
                                                <Wheat className="text-emerald-700 w-3.5 h-3.5" />
                                                <span className="font-semibold text-xs text-slate-700">
                                                    100% Pure
                                                </span>
                                            </div>

                                            <motion.button
                                                onClick={onOpenQuote}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                aria-label={`Get quote for ${product.name}`}
                                                className="flex items-center gap-1.5 rounded-full bg-emerald-700 hover:bg-emerald-800 px-3.5 py-1.5 text-white text-xs font-bold cursor-pointer shadow-sm transition-colors"
                                            >
                                                <span>Inquire</span>
                                                <ArrowRight size={13} />
                                            </motion.button>
                                        </div>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Bottom Bulk Order Banner */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="mt-16 sm:mt-24 overflow-hidden rounded-[28px] sm:rounded-[40px] bg-gradient-to-r from-green-700 via-green-600 to-green-500 p-6 sm:p-12 text-white shadow-2xl"
                >

                    <div className="flex flex-col items-center justify-between gap-6 sm:gap-10 lg:flex-row text-center lg:text-left">

                        <div>

                            <h2 className="text-2xl sm:text-4xl font-black">
                                Looking for Bulk Orders?
                            </h2>

                            <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-green-100">
                                Contact us today for wholesale pricing,
                                export orders and customized packaging.
                            </p>

                        </div>

                        <motion.button
                            onClick={onOpenQuote}
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: .95,
                            }}
                            className="flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 sm:px-8 sm:py-4 font-bold text-green-700 cursor-pointer shadow-lg shrink-0"
                        >
                            <ShoppingBag size={20} />

                            Request Quotation

                        </motion.button>

                    </div>

                </motion.div>

            </div>

            {/* Full Mode Lightbox Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => {
                            setSelectedProduct(null);
                            setIsZoomed(false);
                        }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-3xl w-full bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 shadow-2xl overflow-hidden"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => {
                                    setSelectedProduct(null);
                                    setIsZoomed(false);
                                }}
                                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors shadow-sm cursor-pointer"
                                aria-label="Close full view"
                            >
                                <X size={20} />
                            </button>

                            {/* Top Info */}
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                                    {selectedProduct.price}
                                </span>
                                {selectedProduct.grain && (
                                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                                        {selectedProduct.grain}
                                    </span>
                                )}
                                {selectedProduct.aging && (
                                    <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold border border-amber-200/60">
                                        {selectedProduct.aging}
                                    </span>
                                )}
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                                {selectedProduct.name}
                            </h3>
                            <p className="mt-1 text-slate-500 text-sm sm:text-base">
                                {selectedProduct.description}
                            </p>

                            {/* Interactive Full Mode Showcase Container */}
                            <div className="relative mt-5 h-80 sm:h-[440px] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-stone-100 via-slate-50 to-slate-100 border border-slate-200/80 flex items-center justify-center p-4">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.95)_0%,_rgba(248,250,252,0.6)_60%,_rgba(241,245,249,0.3)_100%)] pointer-events-none" />

                                <motion.img
                                    animate={{
                                        scale: isZoomed ? 1.5 : 1,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                    src={selectedProduct.image}
                                    alt={selectedProduct.name}
                                    className={`relative z-10 max-h-full max-w-full object-contain drop-shadow-2xl cursor-pointer ${
                                        isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                                    }`}
                                    onClick={() => setIsZoomed(!isZoomed)}
                                />

                                {/* Zoom In / Zoom Out Toggle Control */}
                                <button
                                    onClick={() => setIsZoomed(!isZoomed)}
                                    className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-slate-800 shadow-md border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors"
                                    aria-label="Toggle zoom scale"
                                >
                                    {isZoomed ? (
                                        <>
                                            <ZoomOut size={14} className="text-green-700" />
                                            <span>Zoom Out</span>
                                        </>
                                    ) : (
                                        <>
                                            <ZoomIn size={14} className="text-green-700" />
                                            <span>Click to Zoom</span>
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Footer Actions */}
                            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                                <div className="flex items-center gap-2 text-slate-600 text-sm">
                                    <Wheat className="text-green-700 w-5 h-5" />
                                    <span className="font-semibold">Export Quality • Double Polished</span>
                                </div>

                                <button
                                    onClick={() => {
                                        setSelectedProduct(null);
                                        setIsZoomed(false);
                                        onOpenQuote?.();
                                    }}
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-green-700 hover:bg-green-800 px-6 py-3 font-bold text-white text-sm shadow-lg transition-all cursor-pointer"
                                >
                                    <ShoppingBag size={18} />
                                    Request Quote for this Product
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default memo(Products);