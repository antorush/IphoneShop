import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { header } from "../data/data";
import Footer from "../components/Footer/Footer";
import { footerData } from "../data/data";
import { Socials } from "../data/data";
const RootLayout = () => {
  return (
    <div>
      <Header items={header} />
      <main>
        <Outlet />
      </main>
      <Footer items={footerData} socials={Socials} />
    </div>
  );
};

export default RootLayout;
