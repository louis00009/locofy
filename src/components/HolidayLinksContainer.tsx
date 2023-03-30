import { FunctionComponent } from "react";
import styles from "./HolidayLinksContainer.module.css";

const HolidayLinksContainer: FunctionComponent = () => {
  return (
    <div className={styles.recommendedHolidaysContainer}>
      <div className={styles.recTitle}>
        <b className={styles.recommendedHolidays}>Recommended Holidays</b>
        <a className={styles.viewAllHolidaysParent} href="#">
          <div className={styles.viewAllHolidays}>View all holidays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright8.svg"
          />
        </a>
      </div>
      <div className={styles.recCardsContainer}>
        <button className={styles.recCard1}>
          <img
            className={styles.unsplash5mv818tzxeoIcon}
            alt=""
            src="/unsplash5mv818tzxeo1@2x.png"
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
            src="/unsplashj82dskoxvy8@2x.png"
          />
          <div className={styles.holidayDetails}>
            <div className={styles.recTitle}>
              <div className={styles.baliParent}>
                <div className={styles.bali}>Switzerland</div>
                <div className={styles.d3n}>6D5N</div>
              </div>
              <div className={styles.div1}>$900</div>
            </div>
          </div>
        </button>
        <button className={styles.recCard3}>
          <img
            className={styles.unsplash5mv818tzxeoIcon}
            alt=""
            src="/unsplash4ezkckxolre@2x.png"
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
            src="/unsplashuyqmxhjr3ne@2x.png"
          />
          <div className={styles.holidayDetails}>
            <div className={styles.recTitle}>
              <div className={styles.baliParent}>
                <div className={styles.bali}>Palawan</div>
                <div className={styles.d3n}>4D3N</div>
              </div>
              <div className={styles.div3}>$789</div>
            </div>
          </div>
        </button>
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllHolidays1}>View all holidays</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright9.svg" />
      </div>
    </div>
  );
};

export default HolidayLinksContainer;
