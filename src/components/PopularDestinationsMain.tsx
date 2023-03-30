import { FunctionComponent } from "react";
import styles from "./PopularDestinationsMain.module.css";

const PopularDestinationsMain: FunctionComponent = () => {
  return (
    <div className={styles.popDestinationsMain}>
      <div className={styles.destinationsTitles}>
        <div className={styles.titleContainer}>
          <b className={styles.planYourNext}>Plan your next trip</b>
          <b className={styles.mostPopularDestinations}>
            Most Popular Destinations
          </b>
        </div>
        <a className={styles.viewAllTop} href="#">
          <div className={styles.viewAllDestinations}>
            View all destinations
          </div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright6.svg"
          />
        </a>
      </div>
      <div className={styles.cardsContainer}>
        <button className={styles.card1}>
          <div className={styles.unsplashnnzkznywhauParent}>
            <img
              className={styles.unsplashnnzkznywhauIcon}
              alt=""
              src="/unsplashnnzkznywhau@2x.png"
            />
            <div className={styles.destinationDetails}>
              <b className={styles.paris}>Paris</b>
              <div className={styles.parent}>
                <div className={styles.div}>$699</div>
                <div className={styles.from}>from</div>
              </div>
            </div>
          </div>
        </button>
        <button className={styles.card1}>
          <div className={styles.unsplashnnzkznywhauParent}>
            <img
              className={styles.unsplashnnzkznywhauIcon}
              alt=""
              src="/unsplashyc8qqp50bda@2x.png"
            />
            <div className={styles.destinationDetails}>
              <b className={styles.paris}>Greece</b>
              <div className={styles.group}>
                <div className={styles.div1}>$1079</div>
                <div className={styles.from1}>from</div>
              </div>
            </div>
          </div>
        </button>
        <button className={styles.card1}>
          <div className={styles.unsplashnnzkznywhauParent}>
            <img
              className={styles.unsplashnnzkznywhauIcon}
              alt=""
              src="/unsplashltnpejwdsay@2x.png"
            />
            <div className={styles.destinationDetails}>
              <b className={styles.paris}>Norway</b>
              <div className={styles.parent}>
                <div className={styles.div}>$895</div>
                <div className={styles.from}>from</div>
              </div>
            </div>
          </div>
        </button>
        <button className={styles.card1}>
          <div className={styles.unsplashnnzkznywhauParent}>
            <img
              className={styles.unsplashnnzkznywhauIcon}
              alt=""
              src="/unsplashm0oiyn5u8zm@2x.png"
            />
            <div className={styles.destinationDetails}>
              <b className={styles.paris}>Tuscany</b>
              <div className={styles.groupDiv}>
                <div className={styles.div3}>$1245</div>
                <div className={styles.from3}>from</div>
              </div>
            </div>
          </div>
        </button>
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllDestinations1}>View all destinations</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright7.svg" />
      </div>
    </div>
  );
};

export default PopularDestinationsMain;
