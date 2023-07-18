import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Convite Digital",
  description:
    "Torne seu evento memorável desde o primeiro momento com convites digitais interativos e personalizados. Nossa plataforma intuitiva oferece uma maneira fácil e conveniente de criar, enviar e gerenciar convites para todos os tipos de eventos. De festas de aniversário a casamentos, conferências a eventos corporativos, nossos convites digitais destacam-se pela sua beleza, funcionalidade e interatividade.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-PT">
      <body className={inter.className}>
        <ThemeProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
