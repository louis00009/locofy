import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./HotelCardContainer.module.css";

type HotelCardContainerType = {
  hotelImageId?: string;
  hotelName?: string;
  hotelPrice?: string;
  hotelReviews?: string;
  hotelImageUrl?: string;
  hotelReviewCount?: string;
  hotelRating?: string;
  hotelImageDimensions?: string;

  /** Style props */
  propFlex?: Property.Flex;
  propGap?: Property.Gap;
  propWidth?: Property.Width;
  propRight?: Property.Right;

  /** Action props */
  openMatterhornPopup?: () => void;
};

const HotelCardContainer: FunctionComponent<HotelCardContainerType> = ({
  hotelImageId,
  hotelName,
  hotelPrice,
  hotelReviews,
  hotelImageUrl,
  hotelReviewCount,
  hotelRating,
  hotelImageDimensions,
  propFlex,
  propGap,
  propWidth,
  propRight,
  openMatterhornPopup,
}) => {
  const stayDetailsStyle: CSS.Properties = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
    };
  }, [propFlex, propGap]);

  const vectorIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  return (
    <div className={styles.hotelCard1}>
      <div className={styles.hotelCard}>
        <img
          className={styles.matterhornSuitesImage}
          alt=""
          src={hotelImageId}
        />
        <div className={styles.stayDetails} style={stayDetailsStyle}>
          <div className={styles.stayDetailsRows}>
            <div className={styles.entireBungalow}>{hotelName}</div>
            <b className={styles.matterhornSuites}>{hotelPrice}</b>
            <div className={styles.night}>{hotelReviews}</div>
          </div>
          <img
            className={styles.videoIcon}
            alt=""
            src={hotelImageUrl}
            onClick={openMatterhornPopup}
          />
        </div>
        <div className={styles.rating}>
          <div className={styles.reviews}>{hotelReviewCount}</div>
          <div className={styles.parent}>
            <div className={styles.div}>{hotelRating}</div>
            <img
              className={styles.vectorIcon}
              alt=""
              src={hotelImageDimensions}
              style={vectorIconStyle}
            />
          </div>
        </div>
        <button className={styles.moreDetailsButton}>
          <div className={styles.button}>More details</div>
        </button>
      </div>
    </div>
  );
};

export default HotelCardContainer;
