"use client";

import { useState } from "react";
import { Send, Clock, MapPin, ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if(formData.name.trim() === "" || formData.email.trim() === "" || formData.message.trim() === "") {
    alert("Please fill in all required fields.");
    return;
  }

  try {
    const result = await emailjs.send(
      "service_87oqxqv",     // SERVICE ID
      "template_zlec8wb",    // TEMPLATE ID
      {
        name: formData.name,
        email: formData.email,
        project: formData.project,
        message: formData.message,
      },
      "acHS3qSiF64abjyJI"      // PUBLIC KEY
    );

    console.log(result.text);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      project: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 3000);
  } catch (error) {
    console.error("Email sending failed:", error);
  }
};

  return (
    <section id="contact" className="py-24 bg-dark-50 dark:bg-[#080E1A]">
      <div className="max-w-[700px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title mb-3">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Great</span>
          </h2>
          <p className="text-base text-dark-500 dark:text-dark-400 max-w-[500px] mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Drop me a
            message and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-[12px] font-semibold text-dark-500 uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name..."
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-[12px] font-semibold text-dark-500 uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="Your email..."
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="input-field"
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-[12px] font-semibold text-dark-500 uppercase tracking-wider mb-2">
              Project Type
            </label>
            <select
              value={formData.project}
              onChange={(e) =>
                setFormData({ ...formData, project: e.target.value })
              }
              className="input-field"
            >
              <option value="">Select project type...</option>
              <option value="web">Web Application</option>
              <option value="mobile">Mobile App</option>
              <option value="backend">Backend / API</option>
              <option value="mvp">MVP / Full Product</option>
              <option value="fix">Bug Fix / Code Rescue</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-[12px] font-semibold text-dark-500 uppercase tracking-wider mb-2">
              Message
            </label>
            <textarea
              rows={5}
              required
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="input-field resize-y"
            />
          </div>

          <button
            type="submit"
            disabled={submitted}
            className={`w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 ${
              submitted
                ? "bg-emerald-500 text-white"
                : "btn-primary"
            }`}
          >
            {submitted ? (
              "Message Sent! ✓"
            ) : (
              <>
                Send Message <Send size={16} />
              </>
            )}
          </button>
        </form>

        {/* Quick info */}
        <div className="flex justify-center gap-8 mt-8 flex-wrap">
          {[
            { icon: ArrowUpRight, label: "Upwork", value: "Available for hire" },
            { icon: Clock, label: "Response", value: "< 24 hours" },
            { icon: MapPin, label: "Timezone", value: "Flexible" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-[11px] text-dark-500 uppercase tracking-wider mb-1">
                {item.label}
              </p>
              <p className="text-[14px] font-semibold text-dark-900 dark:text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
