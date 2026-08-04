import { memo } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Star,
    Wheat,
    ShoppingBag,
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
        name: "Kolapi Rice",
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

function Products() {
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

                    {products.map((product, index) => (

                             <TiltCard
                           key={product.id}
                           className="group overflow-hidden rounded-[24px] sm:rounded-[30px] bg-white shadow-xl border border-slate-100"
                               >
                            {/* Image Container */}
                            <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-slate-100">
                               <motion.div
    animate={{
        x: ["-180%", "250%"],
    }}
    transition={{
        repeat: Infinity,
        duration: 3,
        ease: "linear",
    }}
    className="
    absolute
    inset-y-0
    left-0
    w-16
    rotate-12
    bg-white/30
    blur-md
    "
/>
                               <motion.img
    src={product.image}
    alt={product.name}
    loading="lazy"
    decoding="async"
    whileHover={{
        scale: 1.12,
        rotate: -2,
    }}
    transition={{
        duration: .5,
    }}
    className="mx-auto h-64 sm:h-72 object-contain"
/>

                                {/* Gradient overlay for contrast */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 opacity-80" />

                                {/* Price / Category Badge */}
                                <div className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-bold text-slate-800 shadow-md border border-white/40">
                                    {product.price}
                                </div>
                            </div>

                            {/* Body */}

                            <div className="p-5 sm:p-7">

                                <div className="flex items-center gap-1.5 sm:gap-2">

                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star
                                            key={i}
                                            size={15}
                                            fill="#FFD700"
                                            color="#FFD700"
                                        />
                                    ))}

                                </div>

                                <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-bold text-slate-900">
                                    {product.name}
                                </h3>

                                <p className="mt-2 sm:mt-4 text-slate-500 text-sm sm:text-base leading-6 sm:leading-7">
                                    {product.description}
                                </p>

                                <div className="mt-6 sm:mt-8 flex items-center justify-between">

                                    <div className="flex items-center gap-2">

                                        <Wheat
                                            className="text-green-700 w-5 h-5 sm:w-6 sm:h-6"
                                        />

                                        <span className="font-semibold text-xs sm:text-sm text-slate-800">
                                            100% Pure
                                        </span>

                                    </div>

                                    <motion.button
                                        whileHover={{
                                            scale: 1.1,
                                        }}
                                        whileTap={{
                                            scale: .9,
                                        }}
                                        className="rounded-full bg-green-700 p-2.5 sm:p-3 text-white cursor-pointer"
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
        </section>
    );
}

export default memo(Products);