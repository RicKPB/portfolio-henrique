import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-henrique-swart.vercel.app"),

  title: {
    default: "Henrique Papeschi | Software & Automation Developer",
    template: "%s | Henrique Papeschi",
  },

  description:
    "Portfólio de Henrique Papeschi, desenvolvedor de software e automação focado em criar soluções práticas, sistemas desktop e automações de processos.",

  keywords: [
    "Henrique Papeschi",
    "Software Developer",
    "Automation Developer",
    "Desenvolvedor Python",
    "Automação com Python",
    "Selenium",
    "Tkinter",
    "Portfólio de Desenvolvimento",
  ],

  authors: [
    {
      name: "Henrique Papeschi",
    },
  ],

  creator: "Henrique Papeschi",

  openGraph: {
    title: "Henrique Papeschi | Software & Automation Developer",
    description:
      "Desenvolvendo sistemas, automatizando processos e transformando problemas reais em soluções através da tecnologia.",
    url: "https://portfolio-henrique-swart.vercel.app",
    siteName: "Henrique Papeschi Portfolio",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Henrique Papeschi | Software & Automation Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Henrique Papeschi | Software & Automation Developer",
    description:
      "Desenvolvimento de software, automação de processos e soluções práticas com tecnologia.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}