import { FunctionComponent, useState, useCallback } from "react";
import MatterhornPopup from "../components/MatterhornPopup";
import PortalPopup from "../components/PortalPopup";
import Header from "../components/Header";
import LosAngelesContainer from "../components/LosAngelesContainer";
import HotelResultsContainer from "../components/HotelResultsContainer";
import WeeklyUpdatesContainer from "../components/WeeklyUpdatesContainer";
import styles from "./HotelsPage.module.css";

const HotelsPage: FunctionComponent = () => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.hotelsPage}>
        <Header />
        <LosAngelesContainer />
        <HotelResultsContainer />
        <WeeklyUpdatesContainer
          imageDimensions="/newsletter-section-background@2x.png"
          imageId="/logo.svg"
          imageDimensionId="/social-icons.svg"
        />
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HotelsPage;
