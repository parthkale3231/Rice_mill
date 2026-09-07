import { MEDIA_URL } from "./config";

export const MEDIA = {
  intrologo: `${MEDIA_URL}/images/logo.webp`,
  logo: `${MEDIA_URL}/images/converted.webp`,
  hero: {
    video: `${MEDIA_URL}/videos/hero.mp4`,
    ricebag: `${MEDIA_URL}/images/ricebag.webp`,
    ricebag1: `${MEDIA_URL}/images/ricebag1.webp`,
  },
  about: {
    factory: `${MEDIA_URL}/images/about/factory.webp`,
  },
  products: {
    basmati: `${MEDIA_URL}/images/products/basamati.webp`,
    indrayani: `${MEDIA_URL}/images/Indrayani.webp`,
    kolam: `${MEDIA_URL}/images/products/kolam.webp`,
    kolapi: `${MEDIA_URL}/images/products/kolapi.webp`,
    jeera: `${MEDIA_URL}/images/products/jeera.webp`,
  },
  gallery: [
    { id: 1, image: `${MEDIA_URL}/images/gallery/1.webp`, title: "Rice Processing Unit" },
    { id: 2, image: `${MEDIA_URL}/images/gallery/2.webp`, title: "Modern Machinery" },
    { id: 3, image: `${MEDIA_URL}/images/gallery/3.webp`, title: "Premium Rice" },
    { id: 4, image: `${MEDIA_URL}/images/gallery/4.webp`, title: "Packaging" },
    { id: 5, image: `${MEDIA_URL}/images/gallery/5.webp`, title: "Export Loading" },
    { id: 6, image: `${MEDIA_URL}/images/gallery/6.webp`, title: "Warehouse" },
  ],
  process: {
    farmSelection: `${MEDIA_URL}/images/process/farm_selection.webp`,
    clean: `${MEDIA_URL}/images/process/clean.webp`,
    milling: `${MEDIA_URL}/images/process/3.webp`,
    testing: `${MEDIA_URL}/images/process/testing.webp`,
  },
};
