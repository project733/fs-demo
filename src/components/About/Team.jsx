
import { ScrollIntoView } from "../../hooks/ScrollIntoView";
import bio_execs from "./bio_execs.json";
import bio_advisory from "./bio_advisory.json";

import styles from "./Team.module.scss";

export const Team = () => {
  const scrollToBio = (id) => {
    const bioElement = document.getElementById(`bio-${id}`);

    let allElements = Array.from(document.querySelectorAll(".container li"));
        for (let element of allElements) {
          element.classList.remove("open");
        }
    if (bioElement) {
      bioElement.classList.add("open");
      bioElement.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  };

  const toggleClose = (e) => {
    e.stopPropagation();
    let allElements = Array.from(document.querySelectorAll('.container li'));
    for (let element of allElements) {
      element.classList.remove('open');
    }
  };

  // const toggleOpen = (e) => {
  //   if (!e.currentTarget.classList.contains("open")) {
  //     e.currentTarget.scrollTo({ block: 'center', behavior: "smooth" });

  //     let allElements = Array.from(document.querySelectorAll('.container li'));
  //     for (let element of allElements) {
  //       element.classList.remove("open");
  //     }
  //     e.currentTarget.classList.remove("closed");
  //     e.currentTarget.classList.add("open");
  //   }
  // };

  // const toggleClose = (e) => {
  //   e.stopPropagation();
  //   let allElements = Array.from(document.querySelectorAll('.container li'));
  //   for (let element of allElements) {
  //     element.classList.remove('open');
  //   }
  // };

  return (
    <div className="container">
      <div className={styles.team}>
        <h1>Executive Team</h1>
        <ul id="execs" className={styles.execs}>
          {bio_execs.map((exec) => (
            <li key={exec.id} id={`bio-${exec.id}`} onClick={() => scrollToBio(exec.id)}>
              <div>
                <div className={styles.details}>
                  <h3>
                    {exec.name}, <span>{exec.title}</span>
                  </h3>
                  <p>{exec.desc}</p>
                </div>
                <img src={exec.imgSrc} alt={`${exec.name}, ${exec.title}`} />
              </div>
              <button className="closedetails" onClick={toggleClose}>Close Bio</button>
            </li>
          ))}
        </ul>
      </div>
      <ScrollIntoView>
        <div className={styles.team}>
          <h2>Advisory Members</h2>
          <ul id="advisory" className={styles.advisory}>
            {bio_advisory.map((advisory) => (
              <li key={advisory.id} id={`bio-${advisory.id}`} onClick={() => scrollToBio(advisory.id)}>
                <div>
                  <div className={styles.details}>
                    <h3>
                      {advisory.name}, <span>{advisory.title}</span>
                    </h3>
                    <p>{advisory.desc}</p>
                  </div>
                  <img src={advisory.imgSrc} alt={`${advisory.name}, ${advisory.title}`} />
                </div>
                <button className="closedetails" onClick={toggleClose}>Close</button>
              </li>
            ))}
          </ul>
        </div>
      </ScrollIntoView>
    </div>
  );
};
