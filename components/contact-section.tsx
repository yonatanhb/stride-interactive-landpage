"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!form.name || !form.email || !form.subject || !form.message) {
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
        setForm({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
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
    <section className="relative w-[1440px] h-[523px]">
      {/* Background Image - pic5 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pic5.png"
          alt="Desert terrain with vehicle"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 z-10 relative h-full flex items-center">
        <div className="flex flex-col md:flex-row w-full">
          <div className="md:w-1/2 mb-10 md:mb-0 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              LET&apos;S BUILD THE FUTURE OF COMBAT SIMULATION
            </h2>
            <p className="text-lg mb-4">
              Join us in creating the next generation of tactical simulation
              experiences. Whether you&apos;re a developer, military expert, or
              enthusiast, we want to hear from you.
            </p>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <div className="bg-black/70 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="bg-gray-800 border-gray-700 text-white"
                    rows={4}
                  />
                </div>

                {errorMessage && (
                  <div className="text-red-400 text-sm">{errorMessage}</div>
                )}
                {successMessage && (
                  <div className="text-green-400 text-sm">{successMessage}</div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-200"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
