export const metadata = {
  title: "GBUS — Google Business Update Services",
  description: "Fix your listings. Grow your reviews. Win local search.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 text-neutral-900">{children}</body>
    </html>
  );
}
