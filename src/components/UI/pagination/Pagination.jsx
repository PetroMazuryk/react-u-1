import {getPagesArray} from "../../../utils/pages";

import styles from "./Pagination.module.css";

const Pagination = ({totalPages, page, changePage}) => {
  const pagesArray = getPagesArray(totalPages);

  return (
    <div className={styles.pageWrapper}>
      {pagesArray.map((p) => (
        <span
          key={p}
          onClick={() => changePage(p)}
          className={
            page === p ? `${styles.page} ${styles.pageCurrent}` : styles.page
          }
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
