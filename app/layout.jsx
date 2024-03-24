import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "ProperyPulse | Find The Prefect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find propeties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <NavBar />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
