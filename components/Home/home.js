import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import classes from "./home.module.scss";
import Link from "next/link";
import TopPlace from "./topPlace.js/topPlace";
const CardDetails = [
  {
    image:
      "https://images.unsplash.com/photo-1526711657229-e7e080ed7aa1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2066&q=80",
    title: "agra",
    content:
      "The Agra Fort, which was once the lavish residence of the Mughal Emperors of India, showcases immaculate architectural grandeur. Walk through this historic fort and explore its impressive buildings and structures, including the Moti Masjid, Musamman Burj, Diwan-i-Khas, Shahjahani Mahal, and Jahangiri Mahal.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555952238-7d76782b45f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2050&q=80",
    title: "New delhi",
    content:
      "New Delhi is the capital of India and an administrative district of the National Capital Territory of Delhi. New Delhi is the seat of all three branches of the government of India, hosting the Rashtrapati Bhavan, Parliament House, and the Supreme Court of India.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1580581096469-8afb38d3dbd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2031&q=80",
    title: "Mumbai",
    content:
      "Mumbai (previously known as Bombay until 1996) is a natural harbour on the west coast of India, and is the capital city of Maharashtra state. It is India's largest city, and one of the world's most populous cities. It is the financial capital of India and a global city. Many billionaires live there.",
  },
];
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

        <div className={classes.btn}>
          <Link href="#explore">
            <a>Explore India</a>
          </Link>
        </div>
      </div>
      <TopPlace CardDetails={CardDetails} />
    </section>
  );
};

export default Home;
