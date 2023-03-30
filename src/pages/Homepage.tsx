import { FunctionComponent, useState, useCallback } from "react";
import MatterhornPopup from "../components/MatterhornPopup";
import PortalPopup from "../components/PortalPopup";
import HeroContainer from "../components/HeroContainer";
import UpcomingFlightSectionContainer from "../components/UpcomingFlightSectionContainer";
import PopularDestinationsContainer from "../components/PopularDestinationsContainer";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStaysContainer from "../components/PopularStaysContainer";
import WeeklyUpdatesContainer from "../components/WeeklyUpdatesContainer";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);
  const [isMatterhornPopup2Open, setMatterhornPopup2Open] = useState(false);
  const [isMatterhornPopup3Open, setMatterhornPopup3Open] = useState(false);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const openMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(true);
  }, []);

  const closeMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(false);
  }, []);

  const openMatterhornPopup2 = useCallback(() => {
    setMatterhornPopup2Open(true);
  }, []);

  const closeMatterhornPopup2 = useCallback(() => {
    setMatterhornPopup2Open(false);
  }, []);

  const openMatterhornPopup3 = useCallback(() => {
    setMatterhornPopup3Open(true);
  }, []);

  const closeMatterhornPopup3 = useCallback(() => {
    setMatterhornPopup3Open(false);
  }, []);

  return (
    <>
      <div className={styles.homepage}>
        <HeroContainer />
        <div className={styles.homeContents}>
          <UpcomingFlightSectionContainer />
          <PopularDestinationsContainer />
          <RecommendedHolidaysContainer />
          <PopularStaysContainer />
        </div>
        <WeeklyUpdatesContainer
          imageDimensions="/subscribe-section-background@2x.png"
          imageId="/logo2.svg"
          imageDimensionId="/social-icons2.svg"
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
      {isMatterhornPopup1Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup1}
        >
          <MatterhornPopup onClose={closeMatterhornPopup1} />
        </PortalPopup>
      )}
      {isMatterhornPopup2Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup2}
        >
          <MatterhornPopup onClose={closeMatterhornPopup2} />
        </PortalPopup>
      )}
      {isMatterhornPopup3Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup3}
        >
          <MatterhornPopup onClose={closeMatterhornPopup3} />
        </PortalPopup>
      )}
    </>
  );
};

export default Homepage;
