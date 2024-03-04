"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

interface DirectionAwareHoverProps {
  imageUrl: string;
  className?: string;
  title: string;
  subtitle: string;
}

export function DirectionAwareHoverDemo(props: DirectionAwareHoverProps) {
  // const imageUrl = "/images/profilePicDiego.png";
  return (
    <div className="h-[30rem] relative flex items-center justify-center">
      <DirectionAwareHover imageUrl={props.imageUrl}>
        <p className="font-bold text-xl">{props.title}</p>
        <p className="font-normal text-sm">{props.subtitle}</p>
      </DirectionAwareHover>
    </div>
  );
}
