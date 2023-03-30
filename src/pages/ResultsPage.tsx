import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchFormContainer from "../components/SearchFormContainer";
import SearchFilterContainer from "../components/SearchFilterContainer";
import FlightInfoContainer from "../components/FlightInfoContainer";
import BookingContainer from "../components/BookingContainer";
import NewsletterContainer from "../components/NewsletterContainer";
import styles from "./ResultsPage.module.css";

const ResultsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFickleflightLogoClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.resultsPage}>
      <header className={styles.topHeader}>
        <div className={styles.topContainer}>
          <button
            className={styles.fickleflightLogo}
            onClick={onFickleflightLogoClick}
          >
            <img className={styles.symbolsIcon} alt="" src="/symbols.svg" />
          </button>
          <div className={styles.navigationRight}>
            <div className={styles.navigationMenu}>
              <div className={styles.explore} onClick={onExploreTextClick}>
                Explore
              </div>
              <button className={styles.search}>Search</button>
              <div className={styles.explore} onClick={onHotelsTextClick}>
                Hotels
              </div>
              <button className={styles.offers}>Offers</button>
            </div>
            <div className={styles.accountSection}>
              <img
                className={styles.hamburgerMenuIcon}
                alt=""
                src="/notification.svg"
              />
              <img
                className={styles.notificationBellIcon}
                alt=""
                src="/notification1.svg"
              />
              <img
                className={styles.unsplashd1upkifd04aIcon}
                alt=""
                src="/top_avatar@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <SearchFormContainer />
      <div className={styles.searchResults}>
        <SearchFilterContainer />
        <div className={styles.resultsSection}>
          <FlightInfoContainer />
          <div className={styles.recentlyBooked}>
            <div className={styles.recentlyBookedTitle}>
              <b className={styles.results}>Recently booked</b>
              <img
                className={styles.recentlyBookedTitleChild}
                alt=""
                src="/vector-21.svg"
              />
            </div>
            <div className={styles.bookingCards}>
              <BookingContainer
                flightNumber="/icon.svg"
                airlineName="Singapore Airlines"
                flightPrice="$1128"
                originAirportCode="SIN"
                destinationAirportCode="Singapore"
                originCity="LAX"
                destinationCity="Los Angeles"
                flightClass="Economy"
                airlineLogoUrl="/calender.svg"
                numberOfPassengers="2 Adults"
                flightSearchEngine="Expedia"
                flightTimeAgo="1s ago!"
              />
              <BookingContainer
                flightNumber="/icon1.svg"
                airlineName="American Airlines"
                flightPrice="$1024"
                originAirportCode="SFO"
                destinationAirportCode="San Francisco"
                originCity="SIN"
                destinationCity="Singapore"
                flightClass="First Class"
                airlineLogoUrl="/calender1.svg"
                numberOfPassengers="1 Adults"
                flightSearchEngine="Kayak"
                flightTimeAgo="2s ago!"
                propTextAlign="right"
              />
              <BookingContainer
                flightNumber="/icon2.svg"
                airlineName="Japan Airlines"
                flightPrice="$2996"
                originAirportCode="PHX"
                destinationAirportCode="Phoenix"
                originCity="DXB"
                destinationCity="Dubai"
                flightClass="Economy"
                airlineLogoUrl="/calender2.svg"
                numberOfPassengers="3 Adults"
                flightSearchEngine="Skyscanner"
                flightTimeAgo="3s ago!"
                propTextAlign="left"
              />
              <div className={styles.showMore}>
                <div className={styles.showMore1}>Show more</div>
                <img className={styles.iconBack} alt="" src="/icon--back.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsletterContainer />
    </div>
  );
};

export default ResultsPage;
