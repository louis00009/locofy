import { FunctionComponent } from "react";
import styles from "./RecommendedHolidaysContainer.module.css";

const RecommendedHolidaysContainer: FunctionComponent = () => {
  return (
    <div className={styles.recommendedHolidaysContainer}>
      <div className={styles.recTitle}>
        <b className={styles.recommendedHolidays}>Recommended Holidays</b>
        <button className={styles.viewAllHolidaysParent}>
          <div className={styles.viewAllHolidays}>View all holidays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright2.svg"
          />
        </button>
      </div>
      <div className={styles.recCardsContainer}>
        <button className={styles.recCard1}>
          <img
            className={styles.unsplash5mv818tzxeoIcon}
            alt=""
            src="/unsplash5mv818tzxeo@2x.png"
          />
          <div className={styles.holidayDetails}>
            <div className={styles.recTitle}>
              <div className={styles.baliParent}>
                <div className={styles.bali}>Bali</div>
                <div className={styles.d3n}>4D3N</div>
              </div>
              <div className={styles.div}>$899</div>
            </div>
          </div>
        </button>
        <button className={styles.recCard1}>
          <img
            className={styles.unsplash5mv818tzxeoIcon}
            alt=""
            src="/switzerlandimage@2x.png"
          />
          <div className={styles.holidayDetails}>
            <div className={styles.recTitle}>
              <div className={styles.baliParent}>
                <div className={styles.bali}>Swiss</div>
                <div className={styles.d3n}>6D5N</div>
              </div>
              <div className={styles.div}>$900</div>
            </div>
          </div>
        </button>
        <button className={styles.recCard3}>
          <img
            className={styles.unsplash5mv818tzxeoIcon}
            alt=""
            src="/boracayimage@2x.png"
          />
          <div className={styles.holidayDetails}>
            <div className={styles.recTitle}>
              <div className={styles.baliParent}>
                <div className={styles.bali}>Boracay</div>
                <div className={styles.d3n}>5D4N</div>
              </div>
              <div className={styles.div}>$699</div>
            </div>
          </div>
        </button>
        <button className={styles.recCard4}>
          <img
            className={styles.unsplash5mv818tzxeoIcon}
            alt=""
            src="/palawanimage@2x.png"
          />
          <div className={styles.holidayDetails}>
            <div className={styles.recTitle}>
              <div className={styles.baliParent}>
                <div className={styles.bali}>Palawan</div>
                <div className={styles.d3n}>4D3N</div>
              </div>
              <div className={styles.div}>$789</div>
            </div>
          </div>
        </button>
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllHolidays1}>View all holidays</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright3.svg" />
      </div>
    </div>
  );
};

export default RecommendedHolidaysContainer;
