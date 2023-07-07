import React, { useState } from "react";
import styles from "./Nav.module.css";
import { IoIosArrowBack } from "react-icons/io";

export function Nav({ filters, backArrow, arrowOnClick }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.filter}>
      <nav className={styles.nav}>
        {backArrow && (
          <a
            href="#"
            className={`${styles.backArrow} ${styles.arrowStyle}`}
            onClick={arrowOnClick}
          >
            <IoIosArrowBack />
          </a>
        )}
        {filters.map((filter, index) => (
          <a
            key={index}
            href={filter.link}
            className={index === activeIndex ? styles.active : ""}
            onClick={() => handleClick(index)}
            style={{ maxWidth: filter.maxWidth }}
          >
            {filter.name}
          </a>
        ))}
      </nav>
    </div>
  );
}
