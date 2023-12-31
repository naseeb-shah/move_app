import Header from "@/components/Header";
import "./globals.css";
import Providers from "@/app/Providers";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "IMDB CLone",
  description: "By Techinfoyt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "black" }}>
        <Providers>
          <Header />

          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
