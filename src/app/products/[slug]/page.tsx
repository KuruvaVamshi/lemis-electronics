import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { PRODUCTS, Product } from "@/data/products";
import { COMPANY_INFO } from "@/lib/constants";
import ProductDetailClient from "./ProductDetailClient";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) {
    return {
      title: "Product Not Found | Lemis Electronics",
    };
  }

  return {
    title: `${product.name} Manufacturer & Supplier | Lemis Electronics`,
    description: product.shortDesc,
    keywords: [
      product.name,
      `${product.name} manufacturer`,
      `${product.name} supplier`,
      `${product.name} bulk price`,
      product.category,
      "Lemis Electronics",
    ],
    openGraph: {
      title: `${product.name} | Lemis Electronics`,
      description: product.shortDesc,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
