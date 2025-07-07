import Section_about from "./Section-about";
import Section_features from "./Section-features";
import Section_slider from "./Section-slider";


const About_us = () => {
    return (
      <>
        <div className="max-w-7xl m-auto">
          <Section_about />
          <Section_slider />
          <Section_features />
        </div>
      </>
    );
}
 
export default About_us;