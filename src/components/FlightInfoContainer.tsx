import { FunctionComponent } from "react";
import FlightContainer from "./FlightContainer";
import styles from "./FlightInfoContainer.module.css";

const FlightInfoContainer: FunctionComponent = () => {
  return (
    <div className={styles.flightCards}>
      <div className={styles.results}>10 out of 177 Results</div>
      <FlightContainer
        flightDetails="/turkish.svg"
        airlineName="Turkish Airlines"
        departureTime="11:35 PM"
        flightDuration="33H 10M, 1-stop"
        arrivalTime="4:45 PM"
        flightPrice="S$ 723"
      />
      <div className={styles.flightCard}>
        <div className={styles.airlineSection}>
          <img className={styles.siaIcon} alt="" src="/sia.svg" />
          <div className={styles.singaporeAirlines}>Singapore Airlines</div>
        </div>
        <div className={styles.flightDetailsSection}>
          <div className={styles.departureDetails}>
            <div className={styles.am}>8:45 PM</div>
            <div className={styles.sin}>SIN</div>
          </div>
          <div className={styles.flightduration}>
            <img className={styles.flighticon} alt="" src="/flighticon.svg" />
            <div className={styles.h55mNonStop}>15H 10M, 2-stops</div>
          </div>
          <div className={styles.arrivalDetails}>
            <div className={styles.am}>7:55 PM</div>
            <div className={styles.sin1}>LAX</div>
          </div>
        </div>
        <div className={styles.priceSection}>
          <img
            className={styles.priceSectionChild}
            alt=""
            src="/vector-1.svg"
          />
          <b className={styles.s730}>S$ 900</b>
        </div>
      </div>
      <FlightContainer
        flightDetails="/japan.svg"
        airlineName="Japan Airlines"
        departureTime="8:20 PM"
        flightDuration="17H 30M, 1-stop"
        arrivalTime="9:50 PM"
        flightPrice="S$ 859"
        propTransform="scale(0.8)"
      />
      <FlightContainer
        flightDetails="/ana.svg"
        airlineName="ANA"
        departureTime="6:35 PM"
        flightDuration="19H 15M, 1-stop"
        arrivalTime="9:50 PM"
        flightPrice="S$ 936"
        propTransform="scale(0.8)"
      />
      <FlightContainer
        flightDetails="/americanairlines.svg"
        airlineName="American Airlines"
        departureTime="8:20 PM"
        flightDuration="17H 30M, 1-stop"
        arrivalTime="9:50 PM"
        flightPrice="S$ 936"
        propTransform="unset"
      />
      <FlightContainer
        flightDetails="/turkish.svg"
        airlineName="Turkish Airlines"
        departureTime="11:35 PM"
        flightDuration="33H 10M, 1-stop"
        arrivalTime="4:45 PM"
        flightPrice="S$ 673"
        propTransform="unset"
      />
      <FlightContainer
        flightDetails="/japan1.svg"
        airlineName="Japan Airlines"
        departureTime="10:25 PM"
        flightDuration="26H 45M, 1-stop"
        arrivalTime="9:10 AM"
        flightPrice="S$ 859"
        propTransform="scale(0.8)"
      />
      <div className={styles.primaryButton}>
        <div className={styles.primaryButtonChild} />
        <div className={styles.searchFlights}>Show more results</div>
      </div>
    </div>
  );
};

export default FlightInfoContainer;
