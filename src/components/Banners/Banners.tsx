import playstation from "../../assets/images/PlayStation.png";
import airpods from "../../assets/images/airpodsmax.png";
import macbook from "../../assets/images/MacBookPro.png";
import appleVision from "../../assets/images/appleVision.png";
import CustomBtn from "../../features/CustomBtn/CustomBtn";

const Banners = () => {
  return (
    <section>
      <div className="flex justify-center items-center flex-1 w-full max-h-[600px]">
        <div className="w-1/2 grid grid-cols-2 grid-rows-1">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={`${index == 0 ? "w-full col-span-2" : "col-span-1"} ${index == 2 ? "bg-bannerBgAlter" : ""}`}
            >
              <div
                className={`flex justify-start items-center ${index == 0 ? "gap-1 h-auto pr-12" : "h-[272px] max-h-[272px] gap-4 pr-12"}`}
              >
                <img
                  src={
                    index === 0
                      ? playstation
                      : index == 1
                        ? airpods
                        : appleVision
                  }
                  alt=""
                />
                <div
                  className={`${index == 0 ? "max-w-[340px]" : "max-w-[150px]"}`}
                >
                  <h3
                    className={`font-medium ${index == 0 ? "text-[49px]" : "text-[30px]"} ${index == 0 ? "text-black" : index == 1 ? "text-black" : "text-white"}`}
                  >
                    {index == 0 ? (
                      "Playstation 5"
                    ) : index == 1 ? (
                      <>
                        <span className="font-light">Apple AirPods </span>
                        <span>Max</span>
                      </>
                    ) : (
                      <>
                        <span className="font-light">Apple Vision</span>
                        <span>Pro</span>
                      </>
                    )}
                  </h3>
                  <p className="text-sm text-bannerText leading-6 font-medium">
                    {index == 0
                      ? "Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience."
                      : index == 1
                        ? "Computational audio. Listen, it's powerful"
                        : "An immersive way to experience entertainment"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="block bg-bannerBg w-1/2">
          <div className="pl-[56px] py-12 flex justify-center items-center">
            <div className="block max-w-[360px]">
              <h2 className="text-[64px] leading-[56px] font-semibold">
                <span className="font-thin">Macbook</span> Air
              </h2>
              <p className="font-medium leading-6 text-sm text-bannerText py-4">
                The new 15‑inch MacBook Air makes room for more of what you love
                with a spacious Liquid Retina display.
              </p>
              <CustomBtn>Shop Now</CustomBtn>
            </div>
            <img src={macbook} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banners;
