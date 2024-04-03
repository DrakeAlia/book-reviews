"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/animation/index";

export default function Hero() {
  return (
    // <div className="container relative p-16">
    //   <PageHeader>
    //     <PageHeaderHeading>BookBlend</PageHeaderHeading>
    //     <PageHeaderDescription>
    //       Welcome to BookBlend, where you can write a review and rate a books
    //       that you have read. Sign in or sign up to get started
    //     </PageHeaderDescription>
    //   </PageHeader>
    // </div>
    <LazyMotion features={domAnimation}>
      <m.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="my-14 flex items-center justify-center"
      >
        <div className="container relative p-28">
          <m.h1
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-4xl font-bold text-center md:text-6xl"
          >
            Welcome to BookBlend!
          </m.h1>
          <m.h2
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="my-1 text-2xl text-center font-semibold text-primary md:text-4xl"
          >
            Write a review and rate a book
          </m.h2>
          <m.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="mt-3 text-lg text-center text-muted-foreground md:text-xl"
          >
            Sign In to start writing reviews and rating your favorite books.
          </m.p>
        </div>
      </m.div>
    </LazyMotion>
  );
}
