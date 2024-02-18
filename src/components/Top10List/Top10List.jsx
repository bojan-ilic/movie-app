import React, { Component } from "react";
import Slider from "react-slick";
import Top10Card from "../Top10Card/Top10Card";
import Top10CardMini from "../Top10CardMini/Top10CardMini";
import "./Top10List.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export class Top10List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const top10 = [
      {
        title: "Clarkson's Farm – Season 2",
        category: "Unscripted, Comedy, Documentary",
        year: "16+",
        promoImage:
          "https://m.media-amazon.com/images/S/pv-target-images/419784fb9300306cab5c3e7a2d0064ce95278886928381a3f154f9b56384cac3.jpg",
        miniPreview:
          "https://m.media-amazon.com/images/S/pv-target-images/8a1a5f2f702ce2a4688992991ce83db5b8cba6a2e038891903cbd0a0ff1408ff._UR1920,1080_SX356_FMwebp_.jpg",
      },
      {
        title: "The Legend of Vox Machina - Season 2",
        category: "Comedy, Animation, Fantasy",
        year: "18+",
        promoImage:
          "https://m.media-amazon.com/images/S/pv-target-images/c435323ab0fe1172edc0f4a1f72bb8631d1d575a17286b7a2efdc3ab9c3eff62.jpg",
        miniPreview:
          "https://m.media-amazon.com/images/S/pv-target-images/5fd69a6824fb4d7c95c1cb93023cd1f0a25e2408e507490ab9d6b12be7110e62._UR1920,1080_SX356_FMwebp_.jpg",
      },
      {
        title: "Carnival Row - Season 1",
        category: "Suspense, Fantasy, Drama",
        year: "18+",
        promoImage:
          "https://m.media-amazon.com/images/S/pv-target-images/8b460f86c6dd8a2b280909badfa9ad8457aff4b410cd1777af7a3444d90af778.jpg",
        miniPreview:
          "https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/CRNY_S1/*/COVER_ART/CLEAN/Lantern._UR1920,1080_SX356_FMwebp_.jpg",
      },
      {
        title: "The Boys – Season 3",
        category: "Science Fiction, Comedy, Drama",
        year: "18+",
        promoImage:
          "https://m.media-amazon.com/images/S/pv-target-images/7e683fb416e42da0cc54d97a4493bdd22775044220758f5d658703b67c68ea8f.jpg",
        miniPreview:
          "https://m.media-amazon.com/images/S/pv-target-images/cc1536cb78d1797a1f284e37b2d3f4a4b64f9748f13037b2d7d80764b13a582b._UR1920,1080_SX356_FMwebp_.jpg",
      },
      {
        title: "The Lord of the Rings: The Rings of Power - Season 1",
        category: "Drama, Fantasy, Adventure",
        year: "13+",
        promoImage:
          "https://m.media-amazon.com/images/S/pv-target-images/68125451d565f88d35bfe627f13adeda26556e89723edd132dc649e4d01f4976.jpg",
        miniPreview:
          "https://m.media-amazon.com/images/S/pv-target-images/d192766d1e83bf478887dffe0d48cf9fa80f21eca11099ec42508800dbe011bf._UR1920,1080_SX356_FMwebp_.jpg",
      },
      {
        title: "Reacher – Season 1",
        category: "Suspense, Drama, Action",
        year: "18+",
        promoImage:
          "https://m.media-amazon.com/images/S/pv-target-images/24daad7e3252e192f6665b3e4bae898f2efbc3fa0d8a11f7003de140582f681e.jpg",
        miniPreview:
          "https://m.media-amazon.com/images/S/pv-target-images/d876b1533c30cbe1ed715ea7fd04cdc201d65267cd30d2b2ee85d449ed8b996d._UR1920,1080_SX356_FMwebp_.jpg",
      },
      {
        title: "Star Trek: Picard Season 2",
        category: "Drama",
        year: "16+",
        promoImage:
          "https://m.media-amazon.com/images/S/pv-target-images/c5f13bb6df060189d8c0618b284fd418e8ff8ec8186dfb84d3d17f283b50181a.png",
        miniPreview:
          "https://m.media-amazon.com/images/S/pv-target-images/d5d1640b95b1be882f8122fc81e7f498dfc7f9ae4d97be1c7074a8f9372ebbc1._UR1920,1080_SX356_FMwebp_.jpg",
      },
      {
        title: "The Peripheral - Season 1",
        category: "Science Fiction, Suspense, Drama",
        year: "16+",
        promoImage:
          "https://m.media-amazon.com/images/S/pv-target-images/a354a37d8aa9fec03254e76cfbdbb6bc59277e59e5411d470b47b2fa6fead3f3.jpg",
        miniPreview:
          "https://m.media-amazon.com/images/S/pv-target-images/35a8a566125ccca259ce5aeb3f9e09c10d186d950ac9810b67e04d24fd447dfe._UR1920,1080_SX356_FMwebp_.jpg",
      },
      {
        title: "INVINCIBLE – SEASON 1",
        category: "Science Fiction, Suspense, Drama",
        year: "18+",
        promoImage:
          "https://m.media-amazon.com/images/S/pv-target-images/553813c105a0cad2103f7ef7ed2e8ed96e4966e6c45f46e292e81e1402875d12.jpg",
        miniPreview:
          "https://m.media-amazon.com/images/S/pv-target-images/9f9b22843ffd1c12019a28b39b063d43873bdeaed4ec62bcd70420eae9583ad4._UR1920,1080_SX356_FMwebp_.jpg",
      },
      {
        title: "Hunters – Season 2",
        category: "Suspense, Action, Drama",
        year: "18+",
        promoImage:
          "https://m.media-amazon.com/images/S/pv-target-images/23cb843018c0d1bdae9eed6927e8b31d4be828f7f0c9477feb2010f13c971d73.jpg",
        miniPreview:
          "https://m.media-amazon.com/images/S/pv-target-images/3d20771a0599aa6bb161f311b5515987c288f67cfe8f4c952bc5326bd8f99e0e._UR1920,1080_SX356_FMwebp_.jpg",
      },
    ];

    const settings = {
      // dots: true,
      // infinite: false,
      // autoplay: true,
      arrows: false,
      speed: 5000,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <section className="top-10-list-wrapper">
        <Slider
          {...settings}
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
        >
          {top10.map((movie, movieIndex) => {
            return (
              <Top10Card
                key={movieIndex}
                top10title={movie.title}
                top10category={movie.category}
                top10year={movie.year}
                top10promoImage={movie.promoImage}
              />
            );
          })}
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={6}
          slidesToScroll={5}
          swipeToSlide={true}
          focusOnSelect={true}
          infinite={false}
          nextArrow={<FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>}
          prevArrow={<FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>}
        >
          {top10.map((movie, index) => {
            // for (let i = 1; i < movie.length; i++) {
            return (
              <Top10CardMini
                key={index}
                top10title={movie.title}
                top10promoImage={movie.miniPreview}
                top10number={index + 1}
              />
            );
            // }
          })}
        </Slider>
      </section>
    );
  }
}

export default Top10List;
