import { useState, memo } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Globe,
  Share2,
  MessageCircle,
} from "lucide-react";

function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const text = `*New Website Message* 🌾\n\n` +
      `*Name:* ${contactData.name || 'N/A'}\n` +
      `*Email:* ${contactData.email || 'N/A'}\n` +
      `*Phone:* ${contactData.phone || 'N/A'}\n` +
      `*Message:* ${contactData.message || 'Hello, I would like to make an inquiry.'}`;

    window.open(`https://wa.me/918605194211?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FCFBF6] py-16 sm:py-24 lg:py-28"
    >
      {/* Background */}

      <div className="absolute -left-32 top-0 h-[250px] w-[250px] sm:h-[450px] sm:w-[450px] rounded-full bg-green-300/20 blur-2xl sm:blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-[250px] w-[250px] sm:h-[450px] sm:w-[450px] rounded-full bg-yellow-300/20 blur-2xl sm:blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[4px] sm:tracking-[6px] text-green-700 text-xs sm:text-base">
            Contact Us
          </p>

          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
            Let's Work{" "}
            <span className="block text-shimmer-green">
              Together
            </span>
          </h2>

          <p className="mx-auto mt-4 sm:mt-8 max-w-3xl text-base sm:text-lg leading-7 sm:leading-9 text-slate-600">
            Have a question or looking for wholesale rice supply?
            We'd love to hear from you.
          </p>
        </motion.div>

        <div className="mt-12 sm:mt-20 grid gap-6 sm:gap-10 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >

            {[
              {
                icon: Phone,
                title: "Phone",
                value: "+91 8605194211",
              },
              {
                icon: Mail,
                title: "Email",
                value: "info@ricesamarth.com",
              },
              {
                icon: MapPin,
                title: "Address",
                value: "Shree Swami Samarth Rice Mill, Ghoti-Shirdi Rd, Maharashtra",
              },
              {
                icon: Clock,
                title: "Working Hours",
                value: "Mon - Sat : 9 AM - 7 PM",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  whileHover={{
                    x: 10,
                  }}
                  key={item.title}
                  className="flex items-center gap-4 sm:gap-5 rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-6 shadow-xl border border-slate-100"
                >
                  <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-700 to-green-500 text-white shrink-0">
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg sm:text-xl text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs sm:text-sm text-slate-500">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Social */}

            <div className="flex gap-3 sm:gap-4 pt-4 sm:pt-6">

              {[Globe, Share2, MessageCircle].map(
                (Icon, i) => (
                  <motion.button
                    key={i}
                    whileHover={{
                      y: -5,
                      scale: 1.1,
                    }}
                    className="rounded-full bg-green-700 p-3 sm:p-4 text-white shadow-md cursor-pointer"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.button>
                )
              )}

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            onSubmit={handleContactSubmit}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[28px] sm:rounded-[40px] bg-white p-6 sm:p-10 shadow-2xl border border-slate-100"
          >

            <div className="grid gap-4 sm:gap-6">

              <input
                type="text"
                required
                placeholder="Full Name"
                value={contactData.name}
                onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                className="rounded-xl sm:rounded-2xl border border-slate-200 p-3.5 sm:p-4 outline-none focus:border-green-700 text-slate-800 text-sm sm:text-base"
              />

              <input
                type="email"
                required
                placeholder="Email Address"
                value={contactData.email}
                onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                className="rounded-xl sm:rounded-2xl border border-slate-200 p-3.5 sm:p-4 outline-none focus:border-green-700 text-slate-800 text-sm sm:text-base"
              />

              <input
                type="tel"
                required
                placeholder="Phone Number"
                value={contactData.phone}
                onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                className="rounded-xl sm:rounded-2xl border border-slate-200 p-3.5 sm:p-4 outline-none focus:border-green-700 text-slate-800 text-sm sm:text-base"
              />

              <textarea
                rows="4"
                required
                placeholder="Message"
                value={contactData.message}
                onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                className="rounded-xl sm:rounded-2xl border border-slate-200 p-3.5 sm:p-4 outline-none focus:border-green-700 text-slate-800 text-sm sm:text-base"
              />

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: .95,
                }}
                className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-green-700 to-green-500 py-3.5 sm:py-4 font-bold text-white cursor-pointer shadow-lg text-sm sm:text-base"
              >
                <Send size={18} />

                Send Message via WhatsApp
              </motion.button>

            </div>

          </motion.form>

        </div>

        {/* Google Map */}

        <motion.div
          initial={{
            opacity:0,
            y:50,
          }}
          whileInView={{
            opacity:1,
            y:0,
          }}
          viewport={{
            once:true,
          }}
          className="mt-12 sm:mt-20 overflow-hidden rounded-[28px] sm:rounded-[40px] shadow-2xl border border-slate-100"
        >
          <iframe
            title="location"
            src="https://maps.google.com/maps?q=19.8303446,73.8598079&hl=en&z=16&output=embed"
            className="h-[300px] sm:h-[500px] w-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </motion.div>

      </div>
    </section>
  );
}

export default memo(Contact);