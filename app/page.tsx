"use client";
import { Header } from '@/components/header';
import Hero from '@/components/home/Hero';
import { LoaderReveal } from '@/components/loader/loadingRevil';

export default function App() {

  return (
    <>
      <LoaderReveal />
      <Header />
      <Hero />
    </>
  );
}
