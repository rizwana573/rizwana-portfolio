import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString()
      });
      form.reset();
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      alert("❌ Submission failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <section id="contact" className="max-w-screen-md mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl font-bold text-[#fc815ce] mt-10 mb-8">Contact Me</h2>
      <p className="mb-8">Got a project or collaboration in mind? Drop me a message!</p>

      <form id="contact-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="max-w-lg mx-auto p-6 rounded-2xl shadow-lg theme-bg grid gap-4 bg-gray-200 transition-colors duration-300 space-y-4" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden"><label>Don’t fill this out if you're human: <input name="bot-field" /></label></p>

        <input name="name" type="text" placeholder="Your Name" required className="p-3 rounded-lg border bg-color-gray-900 text-black focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300" />
        <input name="email" type="email" placeholder="Your Email" required className="p-3 rounded-lg border bg-color-gray-900 text-black focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-300" />
        <textarea name="message" placeholder="Your Message" rows="4" required className="p-3 rounded-lg bg-transparent border bg-color-gray-900 text-black focus:border-[#fc815ce] focus:ring-2 focus:ring-[#fc815ce] outline-none"></textarea>
        <button type="submit" className="cursor-pointer px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 text-white font-bold transition-all duration-300 hover:scale-105">Send Message</button>
      </form>

      {sent && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 shadow-2xl text-center max-w-md">
            <h3 className="text-2xl font-bold mb-4 text-green-600">✅ Message Sent!</h3>
            <p className="text-gray-700">Thanks for reaching out. I'll get back to you soon.</p>
            <button onClick={() => setSent(false)} className="cursor-pointer mt-6 px-5 py-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 text-white font-bold rounded-lg hover:scale-105 transition-all">Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
