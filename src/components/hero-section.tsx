import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroHeader } from "./header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="pb-15 pt-20 md:pb-15 lg:pb-15 lg:pt-20">
            <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-start">
              <div className="mx-auto max-w-3xl text-center lg:ml-0 lg:w-7/12 lg:text-left">
                <h1
                  className="mt-2 max-w-none pb-2 bg-gradient-to-r from-sky-700 via-emerald-600 to-teal-500 bg-clip-text text-balance font-extrabold 
                tracking-tight text-transparent text-[clamp(2.25rem,5.2vw,3.9rem)] leading-[1.08] md:whitespace-nowrap lg:mt-16 dark:from-sky-400 dark:via-emerald-300
                 dark:to-teal-200"
                >
                  <span>Lo natural sabe mejor</span>
                </h1>
                <p className="mt-4 max-w-2xl lg:max-w-3xl text-[1.15rem] leading-8 text-justify hyphens-auto">
                  En AREVIMA, llevamos la frescura del mar directamente a tu
                  mesa. Trabajamos con productos naturales y orgánicos,
                  elaborados con procesos artesanales que conservan todo el
                  sabor y la calidad del océano. Nuestro producto estrella es la
                  pinchagua curtida, pero también ofrecemos una amplia variedad
                  de delicias marinas como camarón, langostino, picudo y dorado,
                  seleccionados de manera cuidadosa para garantizar frescura y
                  sabor incomparables. Porque lo natural no solo se nota… ¡se
                  disfruta!
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-5 text-base">
                    <Link href="#link">
                      <span className="text-nowrap">Nuestros productos</span>
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="px-5 text-base"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Haz tu pedido ahora</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div
                className="order-first mx-auto w-full max-w-[260px] overflow-hidden rounded-2xl border border-black/5 shadow-xl shadow-black/10 ring-1 ring-black/5
               dark:border-white/10 dark:ring-white/10 lg:order-last lg:max-w-[300px]"
              >
                <Image
                  className="h-full w-full object-cover transition-transform duration-500 will-change-transform hover:scale-[1.03]"
                  src="/portada.jpeg"
                  alt="Producto destacado"
                  height={600}
                  width={450}
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background pt--0">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">
                  Sabor auténtico que nace en el mar
                </p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nvidia.svg"
                      alt="Nvidia Logo"
                      height="20"
                      width="auto"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/column.svg"
                      alt="Column Logo"
                      height="16"
                      width="auto"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nvidia.svg"
                      alt="Nvidia Logo"
                      height="20"
                      width="auto"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/column.svg"
                      alt="Column Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
