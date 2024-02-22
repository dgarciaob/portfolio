"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <main className="flex flex-col justify-center items-center text-center mt-40">
      <section className="flex flex-row text-7xl font-extrabold mb-20">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{ yoyo: Infinity, duration: 1 }}
          drag
        >
          4
        </motion.div>
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: -20 }}
          transition={{ yoyo: Infinity, duration: 1 }}
          drag
        >
          0
        </motion.div>
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{ yoyo: Infinity, duration: 1 }}
          drag
        >
          4
        </motion.div>
      </section>
      <h1 className="text-5xl font-medium max-w-3xl">
        Ups! No encontramos lo que estás buscando
      </h1>

      <Link href="/" className="mt-10">
        <button className="text-lg font-medium text-white dark:text-black hover:cursor-pointer bg-[#1f1f1f] dark:bg-white px-8 py-2 rounded-md hover:opacity-80 transition-all duration-200">
          Volver al inicio
        </button>
      </Link>
    </main>
  );
}

export default NotFound;
