import Headerr_top from "./Header-top/Header-top";
import Header_mid from "./Header-mid/Header-mid";
import Header_bottom from "./Header-bottom/Header-bottom";

const Header = () => {
  return (
    <>
      <div className="relative h-max pb-36 w-full bg-cover bg-fixed bg-[url('/hero-bg.jpg')]">
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10">
          <Headerr_top />
          <Header_mid />
          <Header_bottom />
        </div>
      </div>
    </>
  );
};

export default Header;
