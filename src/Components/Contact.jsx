import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wh1pr7k", // Replace with your EmailJS Service ID
        "template_fq0j0wk", // Replace with your EmailJS Template ID
        form.current,
        "IX16ilsPjgmfPmtNq" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto p-6 mt-16 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
      <label className="block text-sm font-medium text-gray-700">Name</label>
      <input
        type="text"
        name="user_name"
        required
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />

      <label className="block text-sm font-medium text-gray-700 mt-4">Email</label>
      <input
        type="email"
        name="user_email"
        required
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />

      <label className="block text-sm font-medium text-gray-700 mt-4">Message</label>
      <textarea
        name="message"
        rows="5"
        required
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      ></textarea>

      <input
        type="submit"
        value="Send"
        className="mt-4 w-full bg-[#433878] text-white py-2 px-4 rounded-md hover:bg-[#7E60BF] transition"
      />
    </form>
  );
};

export default Contact;
