import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { header } from "../data/data";

const RootLayout = () => {
  return (
    <div>
      <Header items={header} />
      <main>
        <Outlet />
      </main>
      <footer>&copy 2026</footer>
    </div>
  );
};

export default RootLayout;
