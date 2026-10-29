import type { Metadata, Viewport } from "next";
import { Cinzel, Poppins } from "next/font/google";
import { siteConfig } from "@/lib/config";
import "./globals.css";
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-cinzel",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Quinterotatuador — Carlos Quintero · Tatuajes personalizados",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  robots:
    process.env.QT_REVIEW !== "false"
      ? { index: false, follow: false }
      : { index: true, follow: true },
  icons: { icon: "/images/brand/logo-oficial.png" },
  openGraph: {
    title: "Quinterotatuador · Tu historia, en la piel",
    description: siteConfig.description,
    url: "/",
    locale: "es_VE",
    type: "website",
    images: [
      {
        url: "/images/portfolio/leon-rosa-valor.jpg",
        width: 961,
        height: 1280,
        alt: "León y rosa · Obra de Carlos Quintero",
      },
    ],
  },
};
export const viewport: Viewport = { themeColor: "#0b0b0b" };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={cinzel.variable + " " + poppins.variable}>
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.artist,
              jobTitle: "Tatuador",
              url: siteConfig.url,
              sameAs: [siteConfig.instagram],
            }),
          }}
        />
      </body>
    </html>
  );
}
