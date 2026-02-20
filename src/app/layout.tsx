import type { Metadata } from "next";
import { Inter, Bebas_Neue, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap'
});

const bebas = Bebas_Neue({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-bebas",
  display: 'swap'
});

const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-jetbrains",
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Formatto | O Hub de Soberania Visual do Sudoeste",
  description: "Líder regional em comunicação visual B2B, fachadas em ACM e tecnologia de impressão de elite em Rio Verde, Jataí e Mineiros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-white">
      <body className={`${inter.variable} ${bebas.variable} ${jetbrains.variable} font-sans antialiased text-formatto-dark`}>
        {children}
      </body>
    </html>
  );
}
