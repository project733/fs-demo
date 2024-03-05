import { BrandTiles } from "../Brands/Tiles";
import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <div className="container">
      <section>
        <div className={styles.block}>
          <h2>Contact Us</h2>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20862.35923455297!2d-123.16835512879192!3d49.18547832310339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54860b348627a39b%3A0xba68ccac86348084!2sVancouver%20International%20Airport!5e0!3m2!1sen!2sca!4v1709576896451!5m2!1sen!2sca"
          width="100%"
          height="250"
          frameborder="0"
          style={{ border: "0px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title={"xyzlocation"}
        ></iframe>
        <div className={styles.block}>
          <h3>XYZ FINANCIAL GROUP INC.</h3>
        </div>
        <div className={`${styles.block} ${styles.contact}`}>
          <div>
            <p>
              #600-90101 Quis Cedere Protegere,
              <br /> Sensus, EX EUM CUM, Cursus.
            </p>
            <p>
              Phone/Fax: (999) 999-9999
              <br /> Toll Free: <a href="tel:19999999999">1-999-999-9999</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto: info@xyzfinancialgroup.ca">
                info@xyzfinancialgroup.ca
              </a>
            </p>
          </div>
          <div>
            <p>For investment Enquiries please contact:</p>
            <p>Investor Relations</p>
            <p>
              Phone: <a href="tel:19999999999">1-999-999-9999</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:invest@xyzfinancialgroup.ca">
                invest@xyzfinancialgroup.ca
              </a>
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
