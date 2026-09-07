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


const products = [
    {
        id: 1,
        name: "Basmati Rice",
        image: MEDIA.products.basmati,
        description:
            "Premium long grain aromatic basmati rice.",
        price: "Premium",
        color: "from-yellow-500 to-orange-400",
    },
    {
        id: 2,
        name: "Indrayani(New)",
        image: MEDIA.products.indrayani,
        description:
            "Soft texture, perfect for everyday meals.",
        price: "Best Seller",
        color: "from-green-600 to-green-400",
    },
    {
        id: 3,
        name: "Kolam Rice",
        image: MEDIA.products.kolam,
        description:
            "Medium grain rice with rich taste.",
        price: "Popular",
        color: "from-sky-600 to-cyan-400",
    },
    {
        id: 4,
        name: "Kolpi Rice",
        image: MEDIA.products.kolapi,
        description:
            "Naturally processed export quality rice.",
        price: "Export",
        color: "from-emerald-600 to-lime-400",
    },
    {
        id: 5,
        name: "Indrayani(Old)",
        image: MEDIA.products.indrayani,
        description:
            "Aged premium grain with fragrant aroma.",
        price: "Premium",
        color: "from-amber-600 to-yellow-500",
    },
    {
        id: 6,
        name: "Jeera 1008(New)",
        image: MEDIA.products.jeera,
        description:
            "Slender grain ideal for daily cooking.",
        price: "Popular",
        color: "from-cyan-600 to-teal-400",
    },
    {
        id: 7,
        name: "Jeera 1008(Old)",
        image: MEDIA.products.jeera,
        description:
            "Aged fine grain rice with non-sticky texture.",
        price: "Best Seller",
        color: "from-yellow-600 to-amber-500",
    },
    {
        id: 8,
        name: "Basmati Steam Rice",
        image: MEDIA.products.basmati,
        description:
            "Extra long steam basmati for biryani & pulav.",
        price: "Export",
        color: "from-green-700 to-emerald-500",
    },
];

function Products({ onOpenQuote }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isZoomed, setIsZoomed] = useState(false);

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
            className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-28"
        >
            <div className="absolute left-[-100px] top-0 h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] rounded-full bg-green-200/20 blur-2xl sm:blur-3xl" />

            <div className="absolute right-[-100px] bottom-0 h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] rounded-full bg-yellow-200/20 blur-2xl sm:blur-3xl" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="font-semibold uppercase tracking-[4px] sm:tracking-[6px] text-green-700 text-xs sm:text-base">
                        Our Products
                    </p>

                    <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
                        Premium Quality

                        <span className="block text-shimmer-green">

                            Rice Collection

                        </span>
                    </h2>

                    <p className="mx-auto mt-4 sm:mt-8 max-w-3xl text-base sm:text-lg leading-7 sm:leading-9 text-slate-600">
                        We manufacture premium quality rice using
                        advanced milling technology and hygienic
                        processing.
                    </p>
                </motion.div>

                {/* Cards */}

                <div className="mt-12 sm:mt-20 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">

                    {products.map((product) => (

                        <TiltCard
                            key={product.id}
                            className="group overflow-hidden rounded-[24px] sm:rounded-[30px] bg-white shadow-xl border border-slate-100"
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

                                    {/* Subtle Ambient Shimmer */}
                                    <motion.div
                                        animate={{
                                            x: ["-180%", "250%"],
                                        }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 4,
                                            ease: "linear",
                                        }}
                                        className="hidden md:block absolute inset-y-0 left-0 w-20 rotate-12 bg-white/30 blur-md pointer-events-none"
                                    />

                                    {/* Full Mode Zoom Badge Overlay on Hover */}
                                    <div className="absolute inset-0 bg-black/15 opacity-0 group-hover/box:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                        <span className="flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-slate-800 shadow-lg transform translate-y-2 group-hover/box:translate-y-0 transition-transform duration-300">
                                            <Maximize2 size={13} className="text-green-700" />
                                            Full View
                                        </span>
                                    </div>

                                    {/* Price / Category Badge */}
                                    <div className="absolute right-3 top-3 z-20 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-[11px] sm:text-xs font-bold text-slate-800 shadow-sm border border-slate-200/80 flex items-center gap-1.5 pointer-events-none">
                                        <span className={`h-2 w-2 rounded-full ${
                                            product.price === 'Best Seller' ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]' :
                                            product.price === 'Export' ? 'bg-emerald-600 shadow-[0_0_8px_rgba(5,150,105,0.6)]' :
                                            product.price === 'Premium' ? 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]' :
                                            'bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.6)]'
                                        }`} />
                                        {product.price}
                                    </div>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-5 sm:p-6 pt-4 sm:pt-5">
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star
                                            key={i}
                                            size={15}
                                            fill="#FFD700"
                                            color="#FFD700"
                                        />
                                    ))}
                                    <span className="text-xs font-semibold text-slate-500 ml-1">5.0</span>
                                </div>

                                <h3 className="mt-3 text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-green-700 transition-colors">
                                    {product.name}
                                </h3>

                                <p className="mt-2 text-slate-500 text-sm leading-6 min-h-[48px]">
                                    {product.description}
                                </p>

                                <div className="mt-5 sm:mt-6 flex items-center justify-between pt-3 border-t border-slate-100">
                                    <div className="flex items-center gap-1.5 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
                                        <Wheat className="text-green-700 w-4 h-4" />
                                        <span className="font-semibold text-xs text-green-800">
                                            100% Pure
                                        </span>
                                    </div>

                                    <motion.button
                                        onClick={onOpenQuote}
                                        whileHover={{
                                            scale: 1.1,
                                        }}
                                        whileTap={{
                                            scale: .9,
                                        }}
                                        aria-label={`Get quote for ${product.name}`}
                                        className="rounded-full bg-green-700 p-2.5 sm:p-3 text-white cursor-pointer shadow-md hover:bg-green-800 transition-colors"
                                    >
                                        <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                                    </motion.button>
                                </div>
                            </div>

                        </TiltCard>

                    ))}

                </div>

                {/* Bottom Banner */}

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
                                <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold border border-green-200">
                                    {selectedProduct.price}
                                </span>
                                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                                    100% Pure Organic
                                </span>
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