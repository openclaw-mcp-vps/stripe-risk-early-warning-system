import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe Risk Early Warning System — Get Alerts Before Stripe Suspends Your Account",
  description: "Monitor your Stripe account health metrics and transaction patterns to predict potential account suspensions before they happen."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2cd65991-403c-4047-af72-893d2341bc3a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
