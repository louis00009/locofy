import { FunctionComponent, useState, useCallback } from "react";
import MatterhornPopup from "./MatterhornPopup";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import HotelCardContainer from "./HotelCardContainer";
import styles from "./PopularStaysContainer.module.css";

const PopularStaysContainer: FunctionComponent = () => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);
  const [isMatterhornPopup2Open, setMatterhornPopup2Open] = useState(false);
  const [isMatterhornPopup3Open, setMatterhornPopup3Open] = useState(false);
  const navigate = useNavigate();

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

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className={styles.popularStays}>
        <div className={styles.popularStaysHeader}>
          <div className={styles.popularStaysTitle}>
            <b className={styles.popularStays1}>Popular Stays</b>
          </div>
          <button
            className={styles.viewAllStaysButton}
            onClick={onViewAllStaysButtonClick}
          >
            <div className={styles.viewAllStays}>View all stays</div>
            <img
              className={styles.arrowRightIcon}
              alt=""
              src="/arrowright4.svg"
            />
          </button>
        </div>
        <div className={styles.hotelCards}>
          <HotelCardContainer
            hotelImageId="/unsplashrlwe8f8anoc@2x.png"
            hotelName="Entire bungalow"
            hotelPrice="Matterhorn Suites"
            hotelReviews="$575/night"
            hotelImageUrl="/video2.svg"
            hotelReviewCount="(60 reviews)"
            hotelRating="4.9"
            hotelImageDimensions="/vector7.svg"
            openMatterhornPopup={openMatterhornPopup}
          />
          <HotelCardContainer
            hotelImageId="/unsplashtsn8bpopveo@2x.png"
            hotelName="2-Story beachfront suite"
            hotelPrice="Discovery Shores"
            hotelReviews="$360/night"
            hotelImageUrl="/video3.svg"
            hotelReviewCount="(116 reviews)"
            hotelRating="4.8"
            hotelImageDimensions="/vector8.svg"
            propFlex="1"
            propGap="11px"
            propWidth="37.54%"
            propRight="62.46%"
            openMatterhornPopup={openMatterhornPopup1}
          />
          <HotelCardContainer
            hotelImageId="/unsplashrlwe8f8anoc1@2x.png"
            hotelName="Single deluxe hut"
            hotelPrice="Arctic Hut "
            hotelReviews="$420/night"
            hotelImageUrl="/video3.svg"
            hotelReviewCount="(78 reviews)"
            hotelRating="4.7"
            hotelImageDimensions="/vector9.svg"
            propFlex="1"
            propGap="5px"
            propWidth="37.58%"
            propRight="62.42%"
            openMatterhornPopup={openMatterhornPopup2}
          />
          <HotelCardContainer
            hotelImageId="/unsplashyqrybvxug5q@2x.png"
            hotelName="Deluxe King Room"
            hotelPrice="Lake Louise Inn"
            hotelReviews="$244/night"
            hotelImageUrl="/video2.svg"
            hotelReviewCount="(63 reviews)"
            hotelRating="4.6"
            hotelImageDimensions="/vector10.svg"
            propFlex="unset"
            propGap="11px"
            propWidth="37.54%"
            propRight="62.46%"
            openMatterhornPopup={openMatterhornPopup3}
          />
        </div>
        <div className={styles.mobileViewAllStays}>
          <div className={styles.viewAllStays1}>View all stays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright5.svg"
          />
        </div>
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

export default PopularStaysContainer;
