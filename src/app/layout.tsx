
import NavBar from "@/components/ui/Navbar";
import "./globals.css";

export const metadata = {
  title: "Dine Market",
  description: "Ecommerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" max-w-full max-h-full px-6 md:px-28">
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
