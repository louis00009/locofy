import { FunctionComponent } from "react";
import WeeklyUpdatesContainer from "./WeeklyUpdatesContainer";
import styles from "./NewsletterContainer.module.css";

const NewsletterContainer: FunctionComponent = () => {
  return (
    <div className={styles.footerSection}>
      <WeeklyUpdatesContainer
        imageDimensions="/newsletter-section-background1@2x.png"
        imageId="/logo1.svg"
        imageDimensionId="/social-icons1.svg"
      />
    </div>
  );
};

export default NewsletterContainer;
