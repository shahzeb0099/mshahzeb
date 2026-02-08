"use client";

import { useState } from "react";

export default function ContactUsPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setSuccess(false);
        setMessage(data.message || "Something went wrong");
      } else {
        setSuccess(true);
        setMessage(data.message);
        setTimeout(() => setMessage(""), 3000); // Clear success message after 5 seconds
        form.reset(); // Clear form fields on success
        // e.currentTarget.reset();
      }
    } catch (err) {
      console.error(err);
      setSuccess(false);
      setMessage("Something went wrong");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-gray-800 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Your name"
            required
            className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white"
          />

          <input
            name="email"
            type="email"
            placeholder="Your email"
            required
            className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Contact number"
            required
            className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white"
          />

          <textarea
            name="message"
            placeholder="Your message"
            required
            rows={4}
            className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white"
          />

          <button
            disabled={loading}
            className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center ${
              success ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
