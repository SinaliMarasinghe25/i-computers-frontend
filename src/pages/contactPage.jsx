import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../components/loader";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function submitForm(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast.error("Please fill all fields.");
      return;
    }

    setSending(true);
    try {
      await axios.post(import.meta.env.VITE_BACKEND_URL + "/contact", {
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
      });

      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.log(err);
      toast.error("Failed to send message. Try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="w-full min-h-[calc(100vh-100px)] bg-primary">
      {sending && <Loader />}

      {/* Hero */}
      <div className="w-full bg-accent text-primary">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
            Contact Us
          </h1>
          <p className="text-primary/90 mt-3 max-w-2xl">
            Questions about products, repairs, or orders? Send us a message and
            we’ll reply soon.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left side */}
        <div className="space-y-5">

          <div className="bg-[#F7F4EC] rounded-2xl p-6 border border-secondary/10 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 text-accent">
              <FiPhone className="text-xl" />
              <h2 className="text-lg font-semibold text-secondary">Phone</h2>
            </div>
            <p className="text-secondary/80 mt-2">+94 11 245 348</p>
            <p className="text-sm text-secondary/60 mt-1">
              Mon–Sat • 9.00 AM – 6.00 PM
            </p>
          </div>

          <div className="bg-[#F7F4EC] rounded-2xl p-6 border border-secondary/10 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 text-accent">
              <FiMail className="text-xl" />
              <h2 className="text-lg font-semibold text-secondary">Email</h2>
            </div>
            <p className="text-secondary/80 mt-2">
              icomputers2001@gmail.com
            </p>
            <p className="text-sm text-secondary/60 mt-1">
              We usually respond within 24 hours.
            </p>
          </div>

          <div className="bg-[#F7F4EC] rounded-2xl p-6 border border-secondary/10 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3 text-accent">
              <FiMapPin className="text-xl" />
              <h2 className="text-lg font-semibold text-secondary">Location</h2>
            </div>
            <p className="text-secondary/80 mt-2">
              Negombo, Sri Lanka
            </p>
          </div>

          <div className="bg-[#F7F4EC] rounded-2xl overflow-hidden border border-secondary/10 shadow-md hover:shadow-xl transition-all duration-300">
            <iframe
              title="map"
              className="w-full h-[260px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Negombo%20Sri%20Lanka&output=embed"
            />
          </div>

        </div>

        {/* Right side – Form */}
        <div className="bg-[#F7F4EC] rounded-2xl p-7 border border-secondary/10 shadow-md hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold text-secondary">
            Send a Message
          </h2>
          <p className="text-secondary/60 mt-1">
            Fill the form and we’ll get back to you.
          </p>

          <form onSubmit={submitForm} className="mt-6 space-y-4">
            <div>
              <label className="text-sm text-secondary/70">
                Your Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 px-4 py-3 rounded-xl bg-primary border border-secondary/20 outline-none focus:border-accent"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-sm text-secondary/70">
                Your Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full mt-1 px-4 py-3 rounded-xl bg-primary border border-secondary/20 outline-none focus:border-accent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="text-sm text-secondary/70">
                Subject
              </label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full mt-1 px-4 py-3 rounded-xl bg-primary border border-secondary/20 outline-none focus:border-accent"
                placeholder="Product inquiry / Repair / Order issue"
              />
            </div>

            <div>
              <label className="text-sm text-secondary/70">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full mt-1 px-4 py-3 rounded-xl bg-primary border border-secondary/20 outline-none focus:border-accent"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full py-3 rounded-xl bg-accent text-primary font-bold hover:bg-accent/90 transition disabled:opacity-60"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}