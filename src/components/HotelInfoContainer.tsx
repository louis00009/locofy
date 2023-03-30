import { FunctionComponent } from "react";
import styles from "./HotelInfoContainer.module.css";

type HotelInfoContainerType = {
  roomDimensions?: string;
  roomType?: string;
  hotelName?: string;
  roomPrice?: string;
  roomReviews?: string;
  roomReviewCount?: string;
  roomRating?: string;
  roomId?: string;
};

const HotelInfoContainer: FunctionComponent<HotelInfoContainerType> = ({
  roomDimensions,
  roomType,
  hotelName,
  roomPrice,
  roomReviews,
  roomReviewCount,
  roomRating,
  roomId,
}) => {
  return (
    <div className={styles.hotelCard1}>
      <a className={styles.hotelCard} href="#">
        <img
          className={styles.unsplashhhrfsdwxxusIcon}
          alt=""
          src={roomDimensions}
        />
        <div className={styles.stayDetails}>
          <div className={styles.entireBungalowParent}>
            <div className={styles.entireBungalow}>{roomType}</div>
            <b className={styles.matterhornSuites}>{hotelName}</b>
            <div className={styles.night}>{roomPrice}</div>
          </div>
          <img className={styles.videoIcon} alt="" src={roomReviews} />
        </div>
        <div className={styles.rating}>
          <div className={styles.reviews}>{roomReviewCount}</div>
          <div className={styles.parent}>
            <div className={styles.div}>{roomRating}</div>
            <img className={styles.vectorIcon} alt="" src={roomId} />
          </div>
        </div>
        <button className={styles.moreDetailsButton}>
          <div className={styles.button}>More details</div>
        </button>
      </a>
    </div>
  );
};

export default HotelInfoContainer;
