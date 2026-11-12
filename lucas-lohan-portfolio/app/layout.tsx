import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const title = "Lucas Lohan | Desenvolvedor em Formação";
const description =
  "Conheça Lucas Lohan, estudante de Desenvolvimento de Sistemas, seus projetos, tecnologias e portfólio profissional.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website", locale: "pt_BR" },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = {
  themeColor: "#111820",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
