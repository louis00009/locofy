import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./HotelContainer.module.css";

type HotelContainerType = {
  roomDimensions?: string;
  roomType?: string;
  roomPrice?: string;
  roomReviews?: string;
  roomRating?: string;
  roomRatingComparison?: string;
  roomLocation?: string;

  /** Style props */
  propWidth?: Property.Width;
  propRight?: Property.Right;
};

const HotelContainer: FunctionComponent<HotelContainerType> = ({
  roomDimensions,
  roomType,
  roomPrice,
  roomReviews,
  roomRating,
  roomRatingComparison,
  roomLocation,
  propWidth,
  propRight,
}) => {
  const vectorIcon1Style: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  return (
    <div className={styles.hotelCard2}>
      <a className={styles.hotelCard} href="#">
        <img
          className={styles.unsplashtsn8bpopveoIcon}
          alt=""
          src={roomDimensions}
        />
        <div className={styles.stayDetails}>
          <div className={styles.storyBeachfrontSuiteParent}>
            <div className={styles.storyBeachfrontSuite}>{roomType}</div>
            <b className={styles.discoveryShores}>{roomPrice}</b>
            <div className={styles.night}>{roomReviews}</div>
          </div>
        </div>
        <div className={styles.rating}>
          <div className={styles.reviews}>{roomRating}</div>
          <div className={styles.parent}>
            <div className={styles.div}>{roomRatingComparison}</div>
            <img
              className={styles.vectorIcon}
              alt=""
              src={roomLocation}
              style={vectorIcon1Style}
            />
          </div>
        </div>
        <button className={styles.moreDetailsButton}>
          <div className={styles.button}>More details</div>
        </button>
      </a>
    </div>
  );
};

export default HotelContainer;
