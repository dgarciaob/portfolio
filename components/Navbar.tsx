"use client";

import React, { useState } from "react";
import { paths } from "@/constants/path";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function Navbar() {
  const [activePath, setActivePath] = useState("Home");

  const handleActivePath = (path: string) => {
    setActivePath(path);
  };

  return (
    <motion.nav
      className="flex items-center justify-center py-4 selection:bg-green-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-zinc-100/90 shadow-md rounded-3xl px-8 py-2 flex flex-row space-x-6">
        {paths.map((path) => {
          return (
            <Link
              key={path.name}
              href={path.path}
              className={cn(
                "text-muted-foreground hover:font-semibold hover:text-black transition duration-700",
                activePath === path.name && "font-semibold text-black"
              )}
              onClick={() => handleActivePath(path.name)}
            >
              {path.name}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}

export default Navbar;
