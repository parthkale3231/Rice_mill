import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Package, User, Phone, MapPin, MessageSquare } from "lucide-react";

const OWNER_WHATSAPP = "918605194211";

export default function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    riceVariety: "Basmati Steam Rice",
    quantity: "",
    location: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const messageText = `*Bulk Rice Quote Request* 🌾\n\n` +
      `*Name:* ${formData.name || 'N/A'}\n` +
      `*Phone:* ${formData.phone || 'N/A'}\n` +
      `*Variety:* ${formData.riceVariety}\n` +
      `*Quantity:* ${formData.quantity ? formData.quantity + ' Tons' : 'N/A'}\n` +
      `*City:* ${formData.location || 'N/A'}\n` +
      `${formData.message ? '*Message:* ' + formData.message : ''}`;

    const whatsappUrl = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(messageText)}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-8 shadow-2xl z-10 border border-slate-100 dark:bg-slate-900 dark:border-slate-800"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 sm:right-5 sm:top-5 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition dark:bg-slate-800 dark:text-slate-400 cursor-pointer"
            >
              <X size={18} />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                  Opening WhatsApp...
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Redirecting your quote request to Shree Swami Samarth Rice Mill owner on WhatsApp.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="mb-6">
                  <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-green-700 dark:bg-green-900/40 dark:text-green-400">
                    Bulk Order Inquiry
                  </span>
                  <h2 className="mt-2 text-3xl font-black text-slate-900 dark:text-white">
                    Get Best Price Quote
                  </h2>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Direct wholesale rates from Shree Swami Samarth Rice Mill owner.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-slate-800 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-slate-800 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-1">
                        Quantity (Tons)
                      </label>
                      <div className="relative">
                        <Package className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
                        <input
                          type="number"
                          required
                          placeholder="e.g. 10"
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-slate-800 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-1">
                        Rice Variety
                      </label>
                      <select
                        value={formData.riceVariety}
                        onChange={(e) => setFormData({ ...formData, riceVariety: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-800 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100 bg-white dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                      >
                        <option>Basmati Steam Rice</option>
                        <option>Indrayani (New)</option>
                        <option>Indrayani (Old)</option>
                        <option>Kolam Premium</option>
                        <option>Kolapi Rice</option>
                        <option>Jeera 1008 (New)</option>
                        <option>Jeera 1008 (Old)</option>
                        <option>Other / Custom Bulk</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-1">
                        Delivery City
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
                        <input
                          type="text"
                          placeholder="Mumbai, Pune..."
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-slate-800 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-1">
                      Additional Details
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-3.5 text-slate-400" size={18} />
                      <input
                        type="text"
                        placeholder="Any special packing or requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 pl-11 pr-4 py-2.5 text-slate-800 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-700 to-green-600 py-3.5 font-bold text-white shadow-lg hover:from-green-800 hover:to-green-700 transition cursor-pointer"
                  >
                    <span>Send Quote via WhatsApp</span>
                    <Send size={18} />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
