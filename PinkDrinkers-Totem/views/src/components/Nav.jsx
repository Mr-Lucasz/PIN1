import React, { useState } from "react";
import styles from "./Nav.module.css";

export function Nav({ filters }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
      setActiveIndex(index);
    };
  return (
    <div className={styles.filter}>
      <nav className={styles.nav}>
        {filters.map((filter, index) => (
            <a
            key={index}
            href={filter.link}
            className={index === activeIndex ? styles.active : ""}
            onClick={() => handleClick(index)}
          >
            {filter.name}
          </a>
        ))}
      </nav>
    </div>
  );
}