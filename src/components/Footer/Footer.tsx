import { Link } from "react-router-dom";
import Container from "../../features/Container/Container";
import type { FooterSection, TSocial } from "../../types/types";
import logo from "../../assets/icons/Logo2.svg";

interface FooterProps {
  items: FooterSection[];
  socials: TSocial[];
}

const Footer: React.FC<FooterProps> = ({ items, socials }) => {
  return (
    <footer className="block relative py-[104px] bg-black w-full">
      <Container maxWidth="1600" padding="30">
        <div className="flex justify-center items-start flex-col">
          <div className="flex justify-between items-start mb-4 w-full">
            <div className="block max-w-[384px]">
              <Link to={"/"}>
                <img src={logo} alt="" />
              </Link>
              <p className="footerText font-medium leading-[170%] pt-6">
                We are a residential interior design firm located in Portland.
                Our boutique-studio offers more than
              </p>
            </div>
            <div className="flex justify-start items-center max-w-[623px] gap-8">
              {items.map((list, index) => (
                <ul
                  key={index}
                  className="flex justify-center items-start flex-col gap-2"
                >
                  <h3 className="font-semibold text-white text-sizePrimary">
                    {list.title}
                  </h3>
                  {list.links?.map((item) => (
                    <Link
                      to={item.href}
                      key={item.id}
                      className="footerText leading-8 font-normal"
                    >
                      {item.title}
                    </Link>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <ul id="socials" className="flex justify-center gap-9 items-center">
            {socials?.map((social) => (
              <Link to={"/"}>
                <img src={social.icon} alt={social.name} />
              </Link>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
