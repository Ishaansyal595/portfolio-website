import React from 'react';

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import utils from "../lib/utils";
import { toast } from "sonner";

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      console.log("The Message has been Sent!");
      toast.success("The Message has been Sent!");
    }, 1500);
  };

  return (
    <section className="py-24 px-4 relative bg-secondary/30" id="contact">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-bold text-3xl md:text-4xl mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mx-auto mb-12 max-w-2xl">
          Having a projectv in mind or want to collaborate? Feel free to reach
          out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="justify-center space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:ishaansyal595@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {" "}
                    ishaansyal595@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+917710274988"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {" "}
                    (+91) 7710274988
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    {" "}
                    Rishi Nagar, Ludhiana 141001, Punjab, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connnect With Me</h4>
              <div className="flex space-x-4 justify-center items-center">
                <a href="" target="_blank">
                  <Instagram />
                </a>
                <a href="" target="_blank">
                  <Facebook />
                </a>
                <a href="" target="_blank">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm block font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="text-sm block font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="text-sm block font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  type="text"
                  id="messageg"
                  name="message"
                  required
                  placeholder="Enter your message"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className={utils(
                  "flex justify-center items-center cosmic-button gap-2 w-full"
                )}
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
