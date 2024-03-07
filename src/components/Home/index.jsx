import { BrandTiles } from "../Brands/Tiles";

import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div className="container">
      <section>
        <h1 className="visuallyhidden">Home page</h1>
        <ul className={styles.banner}>
          <li>
            <div className={styles.content}>
              <h2>Solutions That Makes Sense</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                et commodo dui. Sed velit turpis, mattis mollis scelerisque
                accumsan, blandit ac orci. Vestibulum cursus mollis risus, in
                vulputate orci pellentesque.
              </p>
            </div>
          </li>
          <li>
            <div className={styles.content}>
              <h2>Setting Up For The Future</h2>
              <p>
                Suspendisse lobortis elit purus, pellentesque tempus ipsum
                condimentum eget. In hac habitasse platea dictumst. Nunc
                interdum maximus purus non porttitor. Praesent auctor orci vel
                lectus ullamcorper dictum. Integer luctus est et erat pretium,
                nec auctor enim ultricies. Morbi eget risus rhoncus, laoreet dui
                vel, tempus justo.
              </p>
            </div>
          </li>
          <li>
            <div className={styles.content}>
              <h2>Guiding With Experience</h2>
              <p>
                Ut velit massa, pharetra ut laoreet in, auctor eu risus. Vivamus
                eu varius arcu, et porttitor nulla. Vestibulum tempus nec libero
                at viverra. Aliquam erat volutpat. Fusce ultricies est ut urna
                ullamcorper consequat.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className={styles.bar}>
        <div className={`bar ${styles.loansfunds}`}>
          <div>
            <h3>Funds Under Our Management:</h3>
            <p>
              $
              <span className={styles.numbers}>
                <span className={styles.numbers__window}>
                  <span
                    className={`${styles.numbers__window__digit} ${styles.numbers__window__digit1}`}
                    data-fake="8395216407"
                  >
                    1
                  </span>
                </span>
              </span>
              .
              <span className={styles.numbers}>
                <span className={styles.numbers__window}>
                  <span
                    className={`${styles.numbers__window__digit} ${styles.numbers__window__digit2}`}
                    data-fake="5207186394"
                  >
                    3
                  </span>
                </span>
              </span>{" "}
              Billion
            </p>
          </div>
          <div>
            <h3>Loans Made to Date:</h3>
            <p>
              $
              <span className={styles.numbers}>
                <span className={styles.numbers__window}>
                  <span
                    className={`${styles.numbers__window__digit} ${styles.numbers__window__digit1}`}
                    data-fake="8642519073"
                  >
                    3
                  </span>
                </span>
              </span>
              .
              <span className={styles.numbers}>
                <span className={styles.numbers__window}>
                  <span
                    className={`${styles.numbers__window__digit} ${styles.numbers__window__digit2}`}
                    data-fake="5207186394"
                  >
                    7
                  </span>
                </span>
              </span>{" "}
              Billion
            </p>
          </div>
        </div>
      </section>
      <section>
        <BrandTiles />
      </section>
    </div>
  );
};
