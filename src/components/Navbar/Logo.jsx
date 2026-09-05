import { MEDIA } from "../../config/media";

export default function Logo() {
  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="flex items-center gap-3 cursor-pointer select-none"
    >
      {/* Logo */}
      <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex items-center justify-center shrink-0 shadow-lg bg-[#FAF6ED]">
        <img
          src={MEDIA.logo}
          alt="Shree Swami Samarth Rice Mill Logo"
          className="w-full h-full object-cover object-center"
          style={{
            transform: "scale(1.68)",
            transformOrigin: "50% 30%",
          }}
        />
      </div>

      {/* Brand */}
      <div className="leading-tight">
        <h1 className="text-base sm:text-2xl font-black text-shimmer-gold whitespace-nowrap">
          Shree Swami Samarth
        </h1>

        <h2
          className="
            text-[10px] sm:text-sm
            tracking-[2px] sm:tracking-[5px]
            uppercase
            font-semibold
            text-green-700
          "
        >
          Rice Mill
        </h2>
      </div>
    </div>
  );
}