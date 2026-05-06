import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

function Contact() {
  const [isDarkMode, background] = useOutletContext();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    (function () {
      emailjs.init("BvKb-DqK-R2-kV6M5");
    })();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      await window.emailjs.send("compro", "template_xww8tra", {
        from_name: `${formData.firstName} ${formData.lastName}`,
        to_email: "rifkylovanto@gmail.com",
        from_email: formData.email,
        message: formData.message,
      });
      setSubmitStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`h-screen flex items-center justify-center isolate px-6 py-24 sm:py-32 lg:px-8 ${isDarkMode}`}>
      <form onSubmit={handleSubmit} className="mx-auto mt-2 max-w-xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact</h2>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-16">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstName"
                id="first-name"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-2 px-3.5 py-2 text-gray-800 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="last-name"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-2 px-3.5 py-2 text-gray-800 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-2 px-3.5 py-2 text-gray-800 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-2 px-3.5 py-2 text-gray-800 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 resize-none"
                placeholder="Your message..."
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          {submitStatus === "success" && (
            <div className="mb-4 p-4 rounded-md bg-green-50 border border-green-200">
              <p className="text-green-800 text-sm">Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}
          {submitStatus === "error" && (
            <div className="mb-4 p-4 rounded-md bg-red-50 border border-red-200">
              <p className="text-red-800 text-sm">Failed to send message. Please try again.</p>
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Let's talk"}
          </button>
        </div>
      </form>
      {background}
    </div>
  );
}

export default Contact;
