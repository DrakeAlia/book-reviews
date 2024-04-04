"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
} from "@/components/ui/page-header";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/animation/index";
import { buttonVariants } from "./ui/button";

export default function Hero() {
  return (
    <PageHeader>
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
          className="my-14 flex items-center justify-between"
        >
          <div className="container relative">
            <m.h1
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="text-4xl text-center font-bold md:text-6xl"
            >
              Welcome to{" "}
              <span className="text-4xl font-bold md:text-6xl text-primary">
                BookBlend
              </span>
            </m.h1>
            <PageHeaderDescription>
              <m.p
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                className="mt-3 text-base items-center text-center text-muted-foreground md:text-xl"
              >
                Here you can write a review for books that you have read and
                rate them. These reviewed books will be added to your bookshelf.
                Shared reviews will be visible to other users.
              </m.p>
            </PageHeaderDescription>
            <PageActions>
              <m.div
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                className="mt-5 flex justify-center gap-5"
              >
                <Link
                  href="/review"
                  className={cn(buttonVariants(), "rounded-[6px]")}
                >
                  Create a Review
                </Link>
                <Link
                  href="/bookshelf"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "rounded-[6px]"
                  )}
                >
                  Bookshelf
                </Link>
              </m.div>
            </PageActions>
          </div>
        </m.div>
      </LazyMotion>
    </PageHeader>
  );
}
