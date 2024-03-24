import "@/assets/styles/globals.css";

export const metadata = {
  title: "ProperyPulse | Find The Prefect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find propeties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default MainLayout;
