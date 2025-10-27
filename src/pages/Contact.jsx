import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("http://localhost:1337/api/contact-forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: formData, // Strapi expects data inside "data" object
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Something went wrong. Try again later.");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center py-16 px-4">
      <h1 className="text-5xl font-bold mb-12 text-gray-800 text-center">
        Contact Me
      </h1>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-base-100 shadow-xl rounded-2xl p-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="input input-bordered w-full text-black"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="input input-bordered w-full text-black"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Message</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="textarea textarea-bordered w-full h-32 text-black"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-600 text-center mt-2">
                ✅ Message sent successfully!
              </p>
            )}
            {error && <p className="text-red-600 text-center mt-2">{error}</p>}
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-base-300 rounded-xl p-8 flex flex-col justify-center space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Contact Info</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-primary" />
              <p>Helsinki, Finland</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-primary" />
              <p>+358 40 123 4567</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-primary" />
              <p>user@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
