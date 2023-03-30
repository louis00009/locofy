import { FunctionComponent } from "react";
import { TextField } from "@mui/material";
import SearchContainer from "../components/SearchContainer";
import PopularDestinationsMain from "../components/PopularDestinationsMain";
import HolidayLinksContainer from "../components/HolidayLinksContainer";
import PopularStaysForm from "../components/PopularStaysForm";
import styles from "./CoverFrame.module.css";

const CoverFrame: FunctionComponent = () => {
  return (
    <div className={styles.coverFrame}>
      <div className={styles.coverFrameChild} />
      <img className={styles.coverFrameItem} alt="" src="/group-16@2x.png" />
      <img className={styles.coverFrameInner} alt="" src="/group-17.svg" />
      <div className={styles.madeByTeam}>Made by Team Locofy</div>
      <div className={styles.travelWebsiteWrapper}>
        <div className={styles.travelWebsite}>Travel Website</div>
      </div>
      <div className={styles.homepage}>
        <div className={styles.heroSection}>
          <header className={styles.topHeader}>
            <div className={styles.topContainer}>
              <img
                className={styles.fickleflightLogoIcon}
                alt=""
                src="/fickleflight-logo.svg"
              />
              <div className={styles.navigationRight}>
                <div className={styles.navigationMenu}>
                  <div className={styles.explore}>Explore</div>
                  <div className={styles.search}>Search</div>
                  <div className={styles.hotels}>Hotels</div>
                  <div className={styles.offers}>Offers</div>
                </div>
                <div className={styles.accountSection}>
                  <img
                    className={styles.hamburgerMenuIcon}
                    alt=""
                    src="/notification2.svg"
                  />
                  <img
                    className={styles.notificationBellIcon}
                    alt=""
                    src="/notification3.svg"
                  />
                  <img
                    className={styles.unsplashd1upkifd04aIcon}
                    alt=""
                    src="/top_avatar1@2x.png"
                  />
                </div>
              </div>
            </div>
          </header>
          <SearchContainer />
        </div>
        <div className={styles.homeContents}>
          <div className={styles.upcomingFlightSection}>
            <b className={styles.upcomingFlight}>Upcoming Flight</b>
            <div className={styles.flightDetails}>
              <div className={styles.flightMainContainer}>
                <div className={styles.toAndFrom}>
                  <div className={styles.fromDetails}>
                    <b className={styles.sin}>SIN</b>
                    <div className={styles.singapore}>Singapore</div>
                  </div>
                  <div className={styles.duration}>
                    <b className={styles.h55m}>15H 55M</b>
                    <img
                      className={styles.durationChild}
                      alt=""
                      src="/group-171.svg"
                    />
                  </div>
                  <div className={styles.toDetails}>
                    <b className={styles.lax}>LAX</b>
                    <div className={styles.losAngeles}>Los Angeles</div>
                  </div>
                </div>
                <div className={styles.horizontalLine} />
                <div className={styles.departureDetails}>
                  <div className={styles.departsOn1}>
                    Departs on: 1 May, 08:00 AM
                  </div>
                  <div className={styles.daysToGoContainer}>
                    <b>4 days</b>
                    <span> to go</span>
                  </div>
                </div>
              </div>
              <div className={styles.lineSeparator} />
              <div className={styles.prepareMenu}>
                <div className={styles.prepareForYour}>
                  Prepare for your trip
                </div>
                <div className={styles.tripMenus}>
                  <button className={styles.hotel}>
                    <img
                      className={styles.hotelChild}
                      alt=""
                      src="/group-21.svg"
                    />
                    <div className={styles.hotel1}>Hotel</div>
                  </button>
                  <button className={styles.hotel}>
                    <div className={styles.hotelChild}>
                      <div className={styles.groupChild} />
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group.svg"
                      />
                    </div>
                    <div className={styles.attractions1}>Attractions</div>
                  </button>
                  <button className={styles.hotel}>
                    <img
                      className={styles.hotelChild}
                      alt=""
                      src="/group-211.svg"
                    />
                    <div className={styles.eats1}>Eats</div>
                  </button>
                  <button className={styles.hotel}>
                    <div className={styles.hotelChild}>
                      <div className={styles.groupItem} />
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector11.svg"
                      />
                    </div>
                    <div className={styles.commute1}>Commute</div>
                  </button>
                  <button className={styles.hotel}>
                    <div className={styles.rectangleContainer}>
                      <div className={styles.groupInner} />
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector12.svg"
                      />
                    </div>
                    <div className={styles.taxi1}>Taxi</div>
                  </button>
                  <button className={styles.hotel}>
                    <div className={styles.hotelChild}>
                      <div className={styles.rectangleDiv} />
                      <img
                        className={styles.vectorIcon2}
                        alt=""
                        src="/vector13.svg"
                      />
                    </div>
                    <div className={styles.movies1}>Movies</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <PopularDestinationsMain />
          <HolidayLinksContainer />
          <PopularStaysForm />
        </div>
        <div className={styles.footerSection}>
          <div className={styles.frameDiv}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-186@2x.png"
            />
            <div className={styles.shareYourTravelsForm}>
              <div className={styles.formHeader}>
                <b className={styles.prepareForYour}>
                  subscribe to our newsletter
                </b>
                <b className={styles.formTitle}>Get weekly updates</b>
              </div>
              <div className={styles.form}>
                <div className={styles.formText}>
                  <div className={styles.fillInYour}>
                    Fill in your details to join the party!
                  </div>
                </div>
                <div className={styles.formFields}>
                  <div className={styles.formText}>
                    <TextField
                      className={styles.input}
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Your name"
                      size="medium"
                      margin="none"
                    />
                  </div>
                  <div className={styles.formText}>
                    <TextField
                      className={styles.input}
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Email address"
                      size="medium"
                      margin="none"
                    />
                  </div>
                </div>
                <button className={styles.button}>
                  <div className={styles.unstyledbutton}>
                    <div className={styles.button1}>submit</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <footer className={styles.footer}>
            <div className={styles.fickleflightBio}>
              <img
                className={styles.fickleflightLogoIcon}
                alt=""
                src="/logo3.svg"
              />
              <div className={styles.fickleFlightIs}>
                Fickle Flight is your one-stop travel portal. We offer hassle
                free flight and hotel bookings. We also have all your flight
                needs in you online shop.
              </div>
              <img
                className={styles.socialIcons}
                alt=""
                src="/social-icons3.svg"
              />
            </div>
            <div className={styles.footerChild} />
            <div className={styles.footerLinks}>
              <div className={styles.company}>
                <a className={styles.aboutUs}>About Us</a>
                <div className={styles.company1}>Company</div>
                <div className={styles.news}>News</div>
                <div className={styles.careers}>Careers</div>
                <div className={styles.howWeWork}>How we work</div>
              </div>
              <div className={styles.company}>
                <div className={styles.account}>Account</div>
                <div className={styles.support1}>Support</div>
                <div className={styles.supportCenter}>Support Center</div>
                <div className={styles.faq}>FAQ</div>
                <div className={styles.accessibility}>Accessibility</div>
              </div>
              <div className={styles.more}>
                <div className={styles.covidAdvisory}>Covid Advisory</div>
                <div className={styles.more1}>More</div>
                <div className={styles.airlineFees}>Airline Fees</div>
                <div className={styles.tips}>Tips</div>
                <div className={styles.howWeWork}>Quarantine Rules</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default CoverFrame;
