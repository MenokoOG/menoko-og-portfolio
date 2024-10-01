"use client";
import { useRef, useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        )
        .then(
          (result) => {
            setSuccess(true);
            setError(false);
            console.log(result.text);

            setFormData({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setError(true);
            setSuccess(false);
            console.log("Error sending email:", error.text);
          }
        );
    }
  };

  return (
    <section className="bg-opacity-70 p-8 rounded-lg mx-auto flex flex-wrap items-center">
      <div className="container mx-auto">
        <div className="contact bg-base-100 dark:bg-gray-800 shadow-xl p-8 rounded-lg">
          <div className="contactText">
            <h1 className="text-3xl font-bold text-blue-600 dark:text-white mb-6">
              Let&apos;s Work Together
            </h1>
            <div className="item mb-4 text-gray-600 dark:text-gray-400">
              <h2 className="text-xl font-semibold">Mail</h2>
              <span>jefftkddan@gmail.com</span>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="p-4 border-2 border-gray-300 rounded-lg dark:bg-gray-900 dark:border-gray-600 dark:text-white"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-4 border-2 border-gray-300 rounded-lg dark:bg-gray-900 dark:border-gray-600 dark:text-white"
            />

            <textarea
              name="message"
              rows={10}
              placeholder="Feel free to give your feedback or collaborate on projects!"
              value={formData.message}
              onChange={handleChange}
              className="p-4 border-2 border-gray-300 rounded-lg dark:bg-gray-900 dark:border-gray-600 dark:text-white"
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
            >
              Submit
            </button>

            {error && (
              <p className="text-red-600">
                Error sending message, please try again.
              </p>
            )}
            {success && (
              <p className="text-green-600">Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
