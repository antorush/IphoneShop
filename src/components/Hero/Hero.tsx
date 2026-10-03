import Container from "../../features/Container/Container";
import iphones from "../../assets/images/Iphones.png";
import CustomBtn from "../../features/CustomBtn/CustomBtn";

const Hero = () => {
  return (
    <section className="HeroBg relative">
      <Container maxWidth="1600" padding="30">
        <div className="block">
          <div className="py-[160px] block relative z-30 max-w-[714px]">
            <h3 className="Heading3 text-white opacity-40">Pro.Beyond.</h3>
            <h1 className="Heading1 text-white my-6">
              <span className="font-thin">Iphone 14 </span>Pro
            </h1>
            <p className="text opacity-40 text-white mb-6">
              Created to change everything for the better. For everyone
            </p>
            <CustomBtn>Shop Now</CustomBtn>
          </div>
          <img
            src={iphones}
            alt=""
            className="absolute right-[160px] bottom-0 z-20"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
