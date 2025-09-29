"use client";
import Feature from '@/components/home/Feature';
import { Header } from '@/components/home/header';
import Hero from '@/components/home/Hero';
import { LoaderReveal } from '@/components/loader/loadingRevil';

export default function App() {

  return (
    <>
      <LoaderReveal />
      <Header />
      <Hero />
      <Feature />
    </>
  );
}
