import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    subscribe: false,
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : false;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.agree) {
        alert("You must agree to the terms.");
        return;
    }

    const templateParams = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        subject: form.subject,
        message: form.message,
        };

    emailjs
        .send(
        "service_jdioli5",
        "template_dmsznbg",
        templateParams,
        "WyHUiuTfp_3bvlyhx" 
        )
        .then(
        () => {
            alert("Message sent successfully!");
        },
        (error) => {
            console.error(error);
            alert("Failed to send message.");
        }
        );
    };

  return (
    <div className="container py-5">
      {/* HEADER */}
      <div className="text-center mb-5">
        <h2 className="fw-bold" style={{ color: "#2b8b30" }}>
          Send Us a Message
        </h2>
        <p className="text-muted">
          Have a question or need assistance? Fill out the form below and we'll
          get back to you promptly.
        </p>
      </div>

      {/* FORM CARD */}
      <div className="card shadow-sm p-4 border-0 rounded-4">
        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            {/* First Name */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Last Name */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="col-md-6">
              <label className="form-label fw-semibold">
                Phone Number *
              </label>
              <input
                type="text"
                name="phone"
                className="form-control"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Subject */}
            <div className="col-12">
              <label className="form-label fw-semibold">
                Subject *
              </label>
              <select
                name="subject"
                className="form-select"
                value={form.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="prayer">Prayer Request</option>
                <option value="partnership">Partnership</option>
                <option value="support">Support</option>
              </select>
            </div>

            {/* Message */}
            <div className="col-12">
              <label className="form-label fw-semibold">
                Message *
              </label>
              <textarea
                name="message"
                className="form-control"
                rows={5}
                placeholder="Tell us how we can help you..."
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="col-12">
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="subscribe"
                  checked={form.subscribe}
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Subscribe to newsletter for updates and insights
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label">
                  I agree to the{" "}
                  <span className="text-primary">Privacy Policy</span> and{" "}
                  <span className="text-primary">Terms and Conditions</span> *
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-12">
              <button
                type="submit"
                className="btn w-100 py-3 fw-semibold text-white"
                style={{
                  backgroundColor: "#388b2b",
                  borderRadius: "50px",
                }}
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;