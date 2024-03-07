import { BarChart } from "./BarChart";
import { BrandTiles } from "../Brands/Tiles";
import { ScrollIntoView } from "../../hooks/ScrollIntoView";

import styles from "./About.module.scss";

export const About = () => {
  return (
    <div className="container">
      <section className={styles.values}>
        <ul>
          <li>
            <h3>Vision</h3>
            <p>Me ac Exuere'd perltum obligatorio gestarum legere.</p>
          </li>
          <li>
            <h3>Mission</h3>
            <p>
              Ex ad e anteposuerit necessitatem odit senectus proponendo,
              septembris eum entrepreneurship ad nec laborum at sit amplissima
              at institutionis, symbolum sequela nam aequaliter est invitati
              louor te eum diutius.
            </p>
          </li>
          <li>
            <h3>Culture</h3>
            <p>
              Nam toties at velit unde qui dissimillimas nam elucidationem te
              quo zelose. Se volumen cum pectore aut quaedam eu nunc in, est
              posuere ea eius in. Ex non quam parata et cum apprecando sed eum
              bannis venenatis typi apponemus te sem offensam sonini.
            </p>
          </li>
        </ul>
      </section>
      <ScrollIntoView>
        <section className={styles.section}>
          <div className={styles.about}>
            <h1>Who We Are</h1>
            <h3>Simple financial services for All.</h3>
            <p>
              Sem arcu 90 eaque, HAC Testantur sem quod consolari Proposui
              oppressus eum sustinere nisi me profligatur at qui partinuculam
              sparsim fames; nec quisquis aut nomine sem lectores accelerare
              quam te pede solenni, typi te imperia per ut ea.
            </p>
            <p>
              Typi periculose id Directi Gloriosa, Gradivi, Argenti, non Morsum,
              ea unde vero 65 complices desiderabilem sint naturom ultimus nisi
              a duis augue id obstinatus sinistris voluptatibus enim custodes
              arcui et iriure provocatus seuuntur.
            </p>
            <p>
              Sed reclamente modi caedis cras 50 error et imponere republicae si
              est doloremque si est Augue'e novembris. Importunas, fremilut
              kopenhagen nec w meritorius putatur te suspicione rem fuga dignos
              me mi moderni eum effectu nisl v hominem purus ut tincidunt
              munditiem.
            </p>
            <p className={styles.ourteam}>
              <a href="/fs-demo/about-us/our-team">Learn about Our Team</a>
            </p>
          </div>
          <div className={styles.chart}>
            <BarChart />
          </div>
        </section>
        <section>
          <div className={styles.services}>
            <h2>Our Services</h2>
            <ul>
              <li>
                <p>Cras Mentis Eaque</p>
              </li>
              <li>
                <p>Advcrsis Instantanee</p>
              </li>
              <li>
                <p>Sunt Postremitatem</p>
              </li>
              <li>
                <p>Absentem Sollemnes</p>
              </li>
              <li>
                <p>Autem Assumenda</p>
              </li>
              <li>
                <p>Quos Hibernorum</p>
              </li>
              <li>
                <p>Sunt Cognominum</p>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <BrandTiles />
        </section>
      </ScrollIntoView>
    </div>
  );
};
