import Container from "../../features/Container/Container";
import logo from "../../assets/icons/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import type { THeader } from "../../types/types";
import favorite from "../../assets/icons/Favorites.svg";
import Cart from "../../assets/icons/Cart.svg";
import User from "../../assets/icons/User.svg";

interface IHeader {
  items: THeader[];
}
const Header: React.FC<IHeader> = ({ items }) => {
  const btns: string[] = [favorite, Cart, User];
  return (
    <header className="py-4 px-8 block relative">
      <Container maxWidth="1440" padding="30">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className="w-[362px] max-w-full">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              className="HeaderInput"
            />
            <button type="button"></button>
          </div>
          <ul className="flex justify-center items-center gap-[52px]">
            {items?.map((item) => (
              <NavLink
                to={
                  item.name == "Home"
                    ? "/"
                    : item.name == "Contact Us"
                      ? `/contact`
                      : `/${item.name}`
                }
                key={item.id}
                className={({ isActive }) => {
                  return isActive
                    ? "text-black transition-all ease-in-out duration-300 delay-75"
                    : "text-black/30 transition-all ease-in-out duration-300 delay-75";
                }}
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
          <div className="flex justify-center items-center gap-6">
            {btns?.map((btn, index) => (
              <button type="button" key={index}>
                <img src={btn} alt={btn} />
              </button>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
