export const metadata = {
  title: "Amazon Deals",
  description: "Top Amazon Deals & Bestseller",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
