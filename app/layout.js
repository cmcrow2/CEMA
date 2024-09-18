import "./globals.css";

export const metadata = {
  title: "CEMA",
  description: "Civil Engineering Manual Assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
