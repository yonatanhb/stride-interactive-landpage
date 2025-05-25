"use client";
import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!form.name || !form.email || !form.message) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (!validateEmail(form.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (form.message.length > 500) {
      setErrorMessage("Message cannot exceed 500 characters.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://us-central1-dust-of-war.cloudfunctions.net/sendContactEmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        setSuccessMessage("Your message has been sent successfully!");
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => {
          setSuccessMessage("");
        }, 6000);
      } else {
        setErrorMessage("Failed to send your message. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full h-[523px] lg:h-[523px] md:h-[450px] bg-cover bg-center"
      style={{ backgroundImage: "url(/pic5.png)" }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(360deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 69.85%)",
        }}
      />

      {/* Main Content Container */}
      <div className="relative w-full h-full max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between h-full py-8 lg:py-12">
          {/* Left Side - Title */}
          <div className="flex-1 mb-8 lg:mb-0 lg:pr-8">
            <h2 className="font-squada font-normal text-3xl lg:text-[67.5px] leading-[113.96%] uppercase text-white">
              LET&apos;S BUILD THE <br />
              FUTURE OF <br />
              COMBAT <br />
              SIMULATION
            </h2>
          </div>

          {/* Right Side - Form and Contact */}
          <div className="flex-1 lg:max-w-[500px] w-full">
            {/* Contact us Title */}
            <h3 className="font-['Georama'] font-semibold text-base lg:text-[19.2px] leading-[150%] text-center tracking-[0.15em] text-[#EFEFEF] mb-4">
              contact us
            </h3>

            {/* Decorative Line */}
            <div className="w-full h-[1px] bg-gray-400 opacity-50 mb-6" />

            {/* Form */}
            <form className="space-y-3 mb-8" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-3">
                <Input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="NAME"
                  className="flex-1 h-[36px] bg-[rgba(255,255,255,0.22)] rounded-[4px] px-[10px] py-[6px] font-['Georama'] font-semibold text-[16px] leading-[150%] text-white placeholder-white/70 placeholder:text-center placeholder:tracking-[0.15em] placeholder:[font-variant:small-caps] focus:ring-1 focus:ring-white/50"
                />
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="EMAIL"
                  className="flex-1 h-[36px] bg-[rgba(255,255,255,0.22)] rounded-[4px] px-[10px] py-[6px] font-['Georama'] font-semibold text-[16px] leading-[150%] text-white placeholder-white/70 placeholder:text-center placeholder:tracking-[0.15em] placeholder:[font-variant:small-caps] focus:ring-1 focus:ring-white/50"
                />
              </div>
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="MESSAGE"
                className="w-full h-[102px] bg-[rgba(255,255,255,0.22)] rounded-[4px] px-[10px] py-[6px] font-['Georama'] font-semibold text-[16px] leading-[150%] text-white placeholder-white/70 placeholder:text-left placeholder:pt-1 placeholder:tracking-[0.15em] placeholder:[font-variant:small-caps] resize-none focus:ring-1 focus:ring-white/50"
                rows={3}
              />
              <Button
                type="submit"
                className="w-full h-[36px] bg-[rgba(255,255,255,0.4)] border border-[#E3E3E3] rounded-[4px] font-['Georama'] font-semibold text-[16px] leading-[150%] text-center tracking-[0.15em] text-white uppercase hover:bg-[rgba(255,255,255,0.6)] disabled:opacity-70"
                disabled={loading}
              >
                {loading ? "SENDING..." : "SEND"}
              </Button>
            </form>

            {/* Contact Info */}
            <div className="text-white font-['Georama'] font-light text-lg lg:text-[24px] leading-[120%] tracking-[0.05em] space-y-3">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-4 flex-shrink-0"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                  <path d="M3.6 9h16.8" />
                  <path d="M3.6 15h16.8" />
                  <path d="M11.5 3a17 17 0 0 0 0 18" />
                  <path d="M12.5 3a17 17 0 0 1 0 18" />
                </svg>
                <a
                  href="https://DustOfWar.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  DustOfWar.net
                </a>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-4 flex-shrink-0"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 11v5" />
                  <path d="M8 8v.01" />
                  <path d="M12 16v-5" />
                  <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                  <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 flex-shrink-0"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                  <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                  <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
                  <path d="M7 16.5c3.5 1 6.5 1 10 0" />
                </svg>
                <span>Dust of War</span>
              </div>
              <div className="flex items-center">
                <MailIcon className="w-6 h-6 mr-4 flex-shrink-0" />
                <span>Itailevin@DustOfWar.net</span>
              </div>
              {errorMessage && (
                <div className="text-red-400 text-sm pt-1 font-bold">
                  {errorMessage}
                </div>
              )}
              {successMessage && (
                <div className="text-green-400 text-sm pt-1 font-bold">
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
