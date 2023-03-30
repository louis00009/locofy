import { FunctionComponent } from "react";
import BookingOptionsCard from "./BookingOptionsCard";
import styles from "./SearchFilterContainer.module.css";

const SearchFilterContainer: FunctionComponent = () => {
  return (
    <div className={styles.searchFilters}>
      <div className={styles.resultsSummary}>
        <div className={styles.resultsParent}>
          <div className={styles.results}>10 out of 177 Results</div>
          <img className={styles.frameChild} alt="" src="/vector-2.svg" />
        </div>
      </div>
      <BookingOptionsCard results="Stops" />
      <BookingOptionsCard
        results="Booking Options"
        propWidth="221px"
        propWidth1="189.03px"
      />
      <BookingOptionsCard
        results="Flight Experience"
        propWidth="310.8px"
        propWidth1="198.04px"
      />
      <img className={styles.frameChild} alt="" src="/vector-2.svg" />
      <BookingOptionsCard
        results="Airlines"
        propWidth="181px"
        propWidth1="87.77px"
      />
    </div>
  );
};

export default SearchFilterContainer;
