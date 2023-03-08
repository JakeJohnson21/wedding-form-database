import { Slide } from "react-slideshow-image";
import desktopImg from "../../images/desktop-couple.jpg";
import image3 from "../../images/Slideshow/IMG-20220602-WA0002.jpg";
import image4 from "../../images/Slideshow/IMG-20220603-WA0001.jpg";
import image5 from "../../images/Slideshow/IMG-20220603-WA0003.jpg";
import image6 from "../../images/Slideshow/IMG-20220613-WA0002.jpg";
import image7 from "../../images/Slideshow/IMG-20220630-WA0005.jpg";
import image8 from "../../images/Slideshow/IMG-20220630-WA0007.jpg";
import image9 from "../../images/Slideshow/IMG-20220630-WA0008.jpg";
import image10 from "../../images/Slideshow/IMG-20220704-WA0001~2.jpg";
import image11 from "../../images/Slideshow/IMG-20220708-WA0000.jpg";
import image12 from "../../images/Slideshow/IMG-20220708-WA0001.jpg";
import image13 from "../../images/Slideshow/IMG-20220709-WA0003.jpg";
import image14 from "../../images/Slideshow/IMG-20220709-WA0005.jpg";
import image15 from "../../images/Slideshow/IMG-20220724-WA0004.jpg";
import image16 from "../../images/Slideshow/IMG-20220806-WA0011.jpg";
import image17 from "../../images/Slideshow/IMG-20220913-WA0002.jpg";
import image18 from "../../images/Slideshow/IMG-20221107-WA0001.jpg";
import image19 from "../../images/Slideshow/IMG-20221124-WA0002.jpg";
import image20 from "../../images/Slideshow/IMG-20221124-WA0007.jpg";
import image21 from "../../images/Slideshow/IMG-20221218-WA0002.jpg";
import image22 from "../../images/Slideshow/IMG-20230209-WA0027.jpg";
import image23 from "../../images/Slideshow/IMG-20230209-WA0040.jpg";
import image24 from "../../images/Slideshow/IMG-20230209-WA0070.jpg";
import image25 from "../../images/Slideshow/original_c1e3d037-f9e6-4367-b49a-54dab5f4abab_IMG-20220819-WA0001.jpg";
import image26 from "../../images/Slideshow/PXL_20210313_142811772._exported_1552_1615648663343.jpg";
import image27 from "../../images/Slideshow/PXL_20210906_155950513.MP.jpg";
import image28 from "../../images/Slideshow/PXL_20211003_180726665.MP.jpg";
import image29 from "../../images/Slideshow/PXL_20211228_061133231.MP.jpg";
import image30 from "../../images/Slideshow/PXL_20211228_180901825.MP.jpg";
import image31 from "../../images/Slideshow/PXL_20211229_202627436.MP.jpg";
import image32 from "../../images/Slideshow/PXL_20211230_232557073.jpg";
import image33 from "../../images/Slideshow/PXL_20220101_045318232.MP.jpg";
import image34 from "../../images/Slideshow/PXL_20220212_213609311.MP.jpg";
import image35 from "../../images/Slideshow/PXL_20220423_143933753_exported_299_1650750231600.jpg";
import image36 from "../../images/Slideshow/PXL_20220604_123603166.jpg";
import image37 from "../../images/Slideshow/PXL_20220605_084052789.jpg";
import image38 from "../../images/Slideshow/PXL_20220605_095251163.MP.jpg";
import image39 from "../../images/Slideshow/PXL_20220610_081315722.jpg";
import image40 from "../../images/Slideshow/PXL_20220703_123418818.MP.jpg";
import image41 from "../../images/Slideshow/PXL_20220806_195435419.MP.jpg";
import image42 from "../../images/Slideshow/PXL_20220910_193449980.jpg";
import image43 from "../../images/Slideshow/PXL_20221006_224200709.MP.jpg";
import image44 from "../../images/Slideshow/PXL_20221006_234429723.MP.jpg";
import image45 from "../../images/Slideshow/PXL_20221006_235312671.MP.jpg";
import image46 from "../../images/Slideshow/PXL_20221224_234251391.jpg";
import image47 from "../../images/Slideshow/PXL_20221225_135455570.MP.jpg";
import image48 from "../../images/Slideshow/PXL_20230204_165416555.jpg";

const slideImages = [
  desktopImg,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
  image38,
  image39,
  image40,
  image41,
  image42,
  image43,
  image44,
  image45,
  image46,
  image47,
  image48,
];

export const ImageSlideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((image, index) => (
          <div className="each-slide-effect" key={index}>
            <div className="home__image">
              <img src={image} alt={`slideshow image ${index}`} />
              <span>Slide {index}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
