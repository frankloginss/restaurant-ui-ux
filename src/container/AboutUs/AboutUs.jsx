import ScrollButton from "../../components/ScrollButton/ScrollButton";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Garnish is a fast growing brand. Restaurant offers a sophisticated
          dining experience to the customers. The menu takes you on a journey
          through the different regions of Africa subcontinent to present a
          magnificent combination of vibrant dishes <br />
          <br />
          <br />
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img
          src={images.knife}
          alt="about_knife"
          className="imageRotateHorizontal"
        />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          The menu is unique, based on the African philosophy of using natural
          seasonal flavors, enhanced by classic technique and utilizing the
          freshest possible ingredients. Garnish has talented chefs and food
          service professionals who have experience with some of the top
          corporate food service corporations and restaurants.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
    <ScrollButton visibility="hidden" />
  </div>
);

export default AboutUs;
