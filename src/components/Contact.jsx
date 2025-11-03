
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";


export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);

    emailjs
      .sendForm(
        "service_r8qr04m",    
        "template_hlth0yt",   
        formRef.current,
        "1lLVOd6xQAqq3YnPu"        
      )
      .then(
        (result) => {
          setSending(false);
          toast.success("Message sent — I got it. Thank you!", {
            position: "top-right",
            autoClose: 3500,
            hideProgressBar: false,
          });
          formRef.current.reset();
        },
        (error) => {
          setSending(false);
          toast.error("Oops — failed to send. Try again.", {
            position: "top-right",
            autoClose: 4500,
          });
          console.error("EmailJS error:", error.text || error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full px-6 py-16 bg-gradient-to-b from-[#0b1220] via-[#0b0820] to-[#06050a] text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: Info boxes */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold">Contact</h2>
          <p className="text-gray-400">
            Want to collaborate or have a question? Hit me up — I usually reply within 24–48 hours.
          </p>

          <div className="flex flex-col gap-4 mt-6">
            <div className="flex items-center gap-4 bg-[#0b0f14] border border-[#122034] rounded-xl p-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#08131a] text-cyan-300 text-lg">
                <FaEnvelope />
              </div>
              <div>
                <div className="text-sm text-gray-300">Email</div>
                <div className="text-sm font-medium">rohangupta10702@gmail.com</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#0b0f14] border border-[#122034] rounded-xl p-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#08131a] text-cyan-300 text-lg">
                <FaPhoneAlt />
              </div>
              <div>
                <div className="text-sm text-gray-300">Phone</div>
                <div className="text-sm font-medium">+91 7319976099</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#0b0f14] border border-[#122034] rounded-xl p-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-[#08131a] text-cyan-300 text-lg">
                <FaMapMarkerAlt />
              </div>
              <div>
                <div className="text-sm text-gray-300">Location</div>
                <div className="text-sm font-medium">Bangalore, India</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-[#07101a] border border-[#122033] rounded-2xl p-6 sm:p-8">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-xs text-gray-300 mb-1">Your name</span>
                  <input
                    name="name"
                    required
                    placeholder="Your full name"
                    className="bg-[#061018] border border-[#101827] rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-xs text-gray-300 mb-1">Your email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="bg-[#061018] border border-[#101827] rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </label>
              </div>

              <label className="flex flex-col">
                <span className="text-xs text-gray-300 mb-1">Subject</span>
                <input
                  name="subject"
                  placeholder="Message subject"
                  className="bg-[#061018] border border-[#101827] rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-xs text-gray-300 mb-1">Message</span>
                <textarea
                  name="message"
                  required
                  rows="6"
                  placeholder="Write your message..."
                  className="bg-[#061018] border border-[#101827] rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 resize-none"
                />
              </label>

              <div className="flex items-center gap-4 mt-2">
                <button
                  type="submit"
                  disabled={sending}
                  className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                    sending
                      ? "bg-cyan-400/30 text-white cursor-not-allowed"
                      : "bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/25"
                  }`}
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>

                <div className="text-sm text-gray-400">
                  Or email me directly at <span className="text-cyan-300">rohangupta10702@gmail.com</span>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Toast container */}
      <ToastContainer />

      <div className="h-8" />
    </section>
  );
}
