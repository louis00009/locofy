import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./BookingContainer.module.css";

type BookingContainerType = {
  flightNumber?: string;
  airlineName?: string;
  flightPrice?: string;
  originAirportCode?: string;
  destinationAirportCode?: string;
  originCity?: string;
  destinationCity?: string;
  flightClass?: string;
  airlineLogoUrl?: string;
  numberOfPassengers?: string;
  flightSearchEngine?: string;
  flightTimeAgo?: string;

  /** Style props */
  propTextAlign?: Property.TextAlign;
};

const BookingContainer: FunctionComponent<BookingContainerType> = ({
  flightNumber,
  airlineName,
  flightPrice,
  originAirportCode,
  destinationAirportCode,
  originCity,
  destinationCity,
  flightClass,
  airlineLogoUrl,
  numberOfPassengers,
  flightSearchEngine,
  flightTimeAgo,
  propTextAlign,
}) => {
  const arrNameStyle: CSS.Properties = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div className={styles.bookingCard}>
      <div className={styles.airlinePrice}>
        <div className={styles.airline}>
          <img className={styles.airlinelogoIcon} alt="" src={flightNumber} />
          <div className={styles.singaporeAirlines}>{airlineName}</div>
        </div>
        <div className={styles.price}>{flightPrice}</div>
      </div>
      <div className={styles.locations}>
        <div className={styles.departure}>
          <div className={styles.depcode}>{originAirportCode}</div>
          <div className={styles.depname}>{destinationAirportCode}</div>
        </div>
        <img className={styles.flightIcon} alt="" src="/flight-icon.svg" />
        <div className={styles.arrival}>
          <div className={styles.depcode}>{originCity}</div>
          <div className={styles.arrname} style={arrNameStyle}>
            {destinationCity}
          </div>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.class}>
          <img className={styles.classIcon} alt="" src="/class-icon.svg" />
          <div className={styles.singaporeAirlines}>{flightClass}</div>
        </div>
        <div className={styles.class}>
          <img className={styles.classIcon} alt="" src={airlineLogoUrl} />
          <div className={styles.singaporeAirlines}>{numberOfPassengers}</div>
        </div>
      </div>
      <div className={styles.provider}>
        <div className={styles.singaporeAirlines}>
          <span>{`Booked on `}</span>
          <span className={styles.expedia}>{flightSearchEngine}</span>
        </div>
        <div className={styles.timeago}>{flightTimeAgo}</div>
      </div>
    </div>
  );
};

export default BookingContainer;
