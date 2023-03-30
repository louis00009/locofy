import { FunctionComponent, useMemo } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import CSS, { Property } from "csstype";
import styles from "./BookingOptionsCard.module.css";

type BookingOptionsCardType = {
  results?: string;

  /** Style props */
  propWidth?: Property.Width;
  propWidth1?: Property.Width;
};

const BookingOptionsCard: FunctionComponent<BookingOptionsCardType> = ({
  results,
  propWidth,
  propWidth1,
}) => {
  const stopsStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const resultsStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.stops} style={stopsStyle}>
      <b className={styles.results} style={resultsStyle}>
        {results}
      </b>
      <FormControlLabel
        className={styles.component1formcheckbox}
        label="1 Stop"
        labelPlacement="end"
        control={<Checkbox size="medium" />}
      />
      <FormControlLabel
        className={styles.component1formcheckbox1}
        label="2 Stops"
        labelPlacement="end"
        control={<Checkbox size="medium" />}
      />
    </div>
  );
};

export default BookingOptionsCard;
