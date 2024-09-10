"use client";

import { ThemeProvider } from "next-themes";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function ClientWrapper({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <NavBar />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
