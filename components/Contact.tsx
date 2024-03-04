import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Github } from "lucide-react";

function Contact() {
  return (
    <main className="flex flex-col md:flex md:flex-row md:justify-between md:items-center mb-40">
      <section className="flex flex-col space-y-6">
        {/* <h3 className="font-medium text-md text-[#1F1F1F] dark:text-zinc-200 flex-shrink-0">
          Socials
        </h3> */}
        <div className="flex flex-row space-x-4 group:hover:cursor-pointer">
          <div>
            <Link
              href="https://www.instagram.com/dgarciaob/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <Instagram className="text-slate-400 hover:text-black dark:hover:text-white" />
              </button>
            </Link>
          </div>
          <div>
            <Link
              href="https://www.linkedin.com/in/diego-garcia-obando/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <Linkedin className="text-slate-400 hover:text-black dark:hover:text-white" />
              </button>
            </Link>
          </div>
          <div>
            <Link
              href="https://twitter.com/garciadiego9708"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <Twitter className="text-slate-400 hover:text-black dark:hover:text-white" />
              </button>
            </Link>
          </div>
          <div>
            <Link
              href="https://github.com/dgarciaob"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <Github className="text-slate-400 hover:text-black dark:hover:text-white" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
