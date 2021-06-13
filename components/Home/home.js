import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import classes from "./home.module.scss";
import Link from "next/link";
import TopPlace from "./topPlace.js/topPlace";
const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const nextHandler = () => {
    if (index < 2) {
      setIndex((preve) => preve + 1);
    } else {
      setIndex(0);
    }
  };
  const prevHandler = () => {
    if (index >= 1) {
      setIndex((preve) => preve - 1);
    } else {
      setIndex(2);
    }
  };
  return (
    <section className={classes.home}>
      <div>
        <Carousel fade activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className={classes.bgImage}>
              <Image
                src={`/image1.jpg`}
                layout="fill"
                objectFit="cover"
                quality={100}
                loading="eager"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={classes.bgImage}>
              <Image
                src={`/image2.jpg`}
                layout="fill"
                objectFit="cover"
                quality={100}
                loading="eager"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={classes.bgImage}>
              <Image
                src={`/image3.jpg`}
                layout="fill"
                objectFit="cover"
                quality={100}
                loading="eager"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={classes.prev} onClick={prevHandler}>
        <FiChevronLeft />
      </div>
      <div className={classes.next} onClick={nextHandler}>
        <FiChevronRight />
      </div>
      <div className={classes.titleContainer}>
        <div className={classes.title}>Incredible india</div>
        <div className={classes.subtitle}>
          explore the incredible India, diversity of India
        </div>
        <Link href="#explore">
          <a>
            <div className={classes.btn}>Explore India</div>
          </a>
        </Link>
      </div>
      <TopPlace />
    </section>
  );
};

export default Home;
