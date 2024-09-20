import "./globals.css";
import Header from "./components/header/Header";

export const metadata = {
  title: "CEMA",
  description: "Civil Engineering Manual Assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-mint">
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
