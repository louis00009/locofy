import { FunctionComponent } from "react";
import HotelInfoContainer from "./HotelInfoContainer";
import HotelContainer from "./HotelContainer";
import styles from "./PopularStaysForm.module.css";

const PopularStaysForm: FunctionComponent = () => {
  return (
    <form className={styles.popularStays}>
      <div className={styles.popularStaysHeader}>
        <div className={styles.popularStaysTitle}>
          <b className={styles.popularStays1}>Popular Stays</b>
        </div>
        <a className={styles.viewAllStaysParent} href="#">
          <div className={styles.viewAllStays}>View all stays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright10.svg"
          />
        </a>
      </div>
      <div className={styles.hotelCards}>
        <HotelInfoContainer
          roomDimensions="/unsplashrlwe8f8anoc2@2x.png"
          roomType="Entire bungalow"
          hotelName="Matterhorn Suites"
          roomPrice="$575/night"
          roomReviews="/video4.svg"
          roomReviewCount="(60 reviews)"
          roomRating="4.9"
          roomId="/vector14.svg"
        />
        <HotelContainer
          roomDimensions="/unsplashtsn8bpopveo1@2x.png"
          roomType="2-Story beachfront suite"
          roomPrice="Discovery Shores"
          roomReviews="$360/night"
          roomRating="(116 reviews)"
          roomRatingComparison="4.8"
          roomLocation="/vector15.svg"
        />
        <HotelContainer
          roomDimensions="/unsplashrlwe8f8anoc3@2x.png"
          roomType="Single deluxe hut"
          roomPrice="Arctic Hut "
          roomReviews="$420/night"
          roomRating="(78 reviews)"
          roomRatingComparison="4.7"
          roomLocation="/vector16.svg"
          propWidth="37.58%"
          propRight="62.42%"
        />
        <HotelInfoContainer
          roomDimensions="/unsplashyqrybvxug5q1@2x.png"
          roomType="Deluxe King Room"
          hotelName="Lake Louise Inn"
          roomPrice="$244/night"
          roomReviews="/video5.svg"
          roomReviewCount="(63 reviews)"
          roomRating="4.6"
          roomId="/vector17.svg"
        />
      </div>
      <div className={styles.viewAllStaysGroup}>
        <div className={styles.viewAllStays1}>View all stays</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright11.svg" />
      </div>
    </form>
  );
};

export default PopularStaysForm;
