import "./globals.css";
import Header from "./components/header/Header";

export const metadata = {
  title: "Askitect - A Civil Engineering AI",
  description: "Civil Engineering Manual Assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-sand-100 text-black">
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
