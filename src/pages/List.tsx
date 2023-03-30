import { FunctionComponent } from "react";
import styles from "./List.module.css";

const List: FunctionComponent = () => {
  return (
    <div className={styles.list}>
      <div className={styles.menuitem}>
        <div className={styles.option}>Singapore - Changi (LAX)</div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.option}>
          Ninoy Aquiono International Airport (NAIA
        </div>
      </div>
      <div className={styles.menuitem1}>
        <div className={styles.option}>Mactan International Airport (MIA)</div>
      </div>
      <div className={styles.menuitem1}>
        <div className={styles.option}>Clark International Airport (CIA)</div>
      </div>
      <div className={styles.menuitem3}>
        <div className={styles.option}>Charles de Gaulle Airport (CGA)</div>
      </div>
    </div>
  );
};

export default List;
