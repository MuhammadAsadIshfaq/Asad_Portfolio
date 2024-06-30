import SocialMediaIcons from "../components/SocialMediaIcons";
import DATA from "../constants";

const Footer = () => {
  return (
    <footer className=" bg-yellow p-8 ">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-black text-center ">
            {DATA.header.name}{" "}
          </p>
          {/* <p className="font-playfair text-md text-black">
            ©2022 DURRANI. All Rights Reserved.
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
