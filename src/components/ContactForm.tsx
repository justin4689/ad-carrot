import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {
      name: "",
      email: "",
      message: "",
    };
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const validationErrors = validate();

  if (
    validationErrors.name ||
    validationErrors.email ||
    validationErrors.message
  ) {
    setErrors(validationErrors);
    return;
  }

  setErrors({ name: "", email: "", message: "" });
  setIsSending(true);

  emailjs
    .send(
      "service_pwe23x3",
      "template_66cwrzr",
      formData,
      "4P4yFFnqDL4eK-ZhD",
    )
    .then(() => {

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.log(error);
      toast.error("Failed to send message.");
    })
    .finally(() => {
      setIsSending(false);
    });
};
  return (
    <section className="bg-stone-50 p-4" id="contact">
      <Toaster />
      <h2
        className="my-8  text-center text-4xl font-semibold tracking-tight
      "
      >
        Let's Connect{" "}
      </h2>
<form
  className="mx-auto mb-20 lg:max-w-3xl"
  onSubmit={handleSubmit}
>

  {/* NAME + EMAIL */}
  <div className="mb-4 flex gap-4">
    
    <div className="w-full lg:w-1/2">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full rounded-lg border border-emerald-950 px-3 py-2 text-sm"
      />
      {errors.name && (
        <p className="text-sm text-red-500">{errors.name}</p>
      )}
    </div>

    <div className="w-full lg:w-1/2">
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full rounded-lg border border-emerald-950 px-3 py-2 text-sm"
      />
      {errors.email && (
        <p className="text-sm text-red-500">{errors.email}</p>
      )}
    </div>

  </div>

  {/* MESSAGE */}
  <div className="mb-4">
    <textarea
      name="message"
      placeholder="Your Message"
      rows={5}
      value={formData.message}
      onChange={handleChange}
      className="w-full rounded-lg border border-emerald-950 px-3 py-2 text-sm"
    />
    {errors.message && (
      <p className="text-sm text-red-500">{errors.message}</p>
    )}
  </div>

  {/* BUTTON */}
  <button
    disabled={isSending}
    className={`w-full rounded bg-emerald-950 px-4 py-3 text-sm font-semibold text-orange-50 hover:bg-emerald-900 ${
      isSending ? "opacity-50 cursor-not-allowed" : ""
    }`}

    type="submit"
  >
    <div className="flex items-center justify-center gap-2">
      {isSending ? "Sending..." : "Send"}
      <FiSend />
    </div>
  </button>

</form>
    </section>
  );
};

export default ContactForm;
