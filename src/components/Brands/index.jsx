import { Link } from 'react-router-dom';
import { ScrollIntoView } from "../../hooks/ScrollIntoView";

import styles from "./Brands.module.scss";

export const Brands = () => {
  const scrollToBrand = (id) => {
    const brandElement = document.getElementById(`brand-${id}`);

    let allElements = Array.from(document.querySelectorAll(".container li"));
    for (let element of allElements) {
      element.classList.remove("open");
    }
    if (brandElement) {
      brandElement.classList.add("open");
      brandElement.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  };

  const toggleClose = (id) => {
    // e.stopPropagation();

    const brandElement = document.getElementById(`brand-${id}`);

    let allElements = Array.from(document.querySelectorAll(".container li"));
    for (let element of allElements) {
      element.classList.remove("open");
    }
    if (brandElement) {
      brandElement.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  };
  return (
    <div className="container">
      <section className={styles.brands}>
        <h1>Our Solutions</h1>
        <h2>MORTGAGE SOLUTION</h2>
        <ul>
          <li id="brand-1">
            <figure>
              <Link
                to="/what-we-do/xyzcapital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://placehold.co/250x250"
                  alt="XYZ Financial Group"
                />
              </Link>
              <figcaption>
                <h3>Fronte Aquilac</h3>
                <p>
                  Facer 1969 Turpis Hostico mus urna comparuit qui superlativo
                  et Tertium Zelabant, Lapidem hac Statera, potentia unde dictum
                  netus typi enim te arcui propter nam lacus. Y pede fronte iure
                  guttae m assumenda mi laoreet cursum est lydius et totam quos
                  ab regnare ut mortis et fuga hic scientiam putatur restigia
                  leo rerum memento regressum mi amet. Arcu utinam louor modi
                  Iustam Laoreet non vel iaculis per meritum sem vel a oppressus
                  te cumque error iure aut platea at dicta eros; praevenire ut
                  mus, option eu animus castigo. Eiusdem hic ipsum sum class
                  vero est diam desiderabilis, vero memorabilem ad adversis
                  felices - il non rem usus quae eum rem MODERNAS!
                </p>
                <p>
                  Vindica Posterum Obesse Scomata #12616 / Atque Prosunt #12617
                </p>
                <p>
                  <Link
                    to="/what-we-do/xyzcapital"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW WEBSITE
                  </Link>
                  <button
                    className="view-videos"
                    onClick={() => scrollToBrand(1)}
                  >
                    VIEW VIDEOS
                  </button>
                </p>
              </figcaption>
            </figure>
            <div className="videos">
              <ul>
                <li>
                  <img
                    src="https://placehold.co/848x477?text=Youtube+Video+1"
                    alt="Financial Advice - Youtube Video 1"
                  />
                </li>
                <li>
                  <img
                    src="https://placehold.co/848x477?text=Youtube+Video+2"
                    alt="Financial Advice - Youtube Video 2"
                  />
                </li>
                <li>
                  <img
                    src="https://placehold.co/848x477?text=Youtube+Video+3"
                    alt="Financial Advice - Youtube Video 3"
                  />
                </li>
                <li>
                  <img
                    src="https://placehold.co/848x477?text=Youtube+Video+4"
                    alt="Financial Advice - Youtube Video 4"
                  />
                </li>
              </ul>
              <button className="close-videos" onClick={() => toggleClose(1)}>
                Close Videos
              </button>
            </div>
          </li>
          <li id="brand-2">
            <figure>
              <Link
                to="/what-we-do/xyzcapital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://placehold.co/250x250"
                  alt="XYZ Financial Group"
                />
              </Link>
              <figcaption>
                <h3>Reprobum Ultimus</h3>
                <p>
                  Commodum Patitur ut w claritas nostris regnandi populo
                  sollemnes mi saevuli recompensa magnae est fortem et optio
                  rerum debetur w morbi, gallicismum, rem dcfensionem mercede.
                  Per celeritas sed certum mus tesiimonium. Sum placeat in ut ad
                  est modulumina oceani in perltum tenetur contraxit.
                </p>
                <p>
                  <Link
                    to="/what-we-do/xyzcapital"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW WEBSITE
                  </Link>
                </p>
              </figcaption>
            </figure>
          </li>
          <li id="brand-3">
            <figure>
              <Link
                to="/what-we-do/xyzcapital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://placehold.co/250x250"
                  alt="XYZ Financial Group"
                />
              </Link>
              <figcaption>
                <h3>Conferre Ordinem</h3>
                <p>
                  Scandala Ordinem id y quisquam apponemus typi abeundum
                  testimonium mus observatis subiungam est Volscens conserrare
                  te Capitis Ingenium (EA), Minimum (AD) rem Pretium (AD). Eos
                  orci mi Reiponde Deorum Possim quam quae fuga 10 eorum mi
                  malrimonii apostrophe symbola ullo dis ipsum saepe, saevit
                  crimen, urgebant vectigal modeste (zelabant conalus), ordinis
                  occurent spirans mus quasi dimittere significatio hungariae
                  castrorum, cras pungit mazim nam esse inscio totam et potest
                  ut tot atque est mus spiritu et sit intestinum. Egestam quo
                  sum o illud-nisi modo eodem, ea hibernorum virtutis
                  centimanos, interest w eros, proprium quod tempore occurent,
                  aetrimentum quos nascetur in odio hic maiori dui contumeliam
                  ex conditionibus lacus, il at fugientes ut quos conscios
                  praefixionem quarta! Orci in unanimi nibh Aspirare Dapibus hac
                  ea hic nam, liber salubre odit leo pereunt me quam debila et
                  moderno est sunt prandium consilio aut hac. redundat salutis -
                  li non mus nemo modo sumn sum OPPRESSA!
                </p>
                <p>
                  <Link
                    to="/what-we-do/xyzcapital"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VIEW WEBSITE
                  </Link>
                </p>
              </figcaption>
            </figure>
          </li>
        </ul>
        <ScrollIntoView>
          <h2>
            FUND MANAGEMENT <span>*</span>
          </h2>
          <ul>
            <li id="brand-4">
              <figure>
                <Link
                  to="/what-we-do/xyzcapital"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://placehold.co/250x250"
                    alt="XYZ Financial Group"
                  />
                </Link>
                <figcaption>
                  <h3>SEM Potenti Proper Quae</h3>
                  <p>
                    MUS Patitur Aureos Quod (PAQ) eos esse generalis tot
                    praeclarasue odit w crudelitas ut tempore non v libere
                    formas natus mi 7984. PER te e quisquam architecto
                    providebunt (SEM) criminalibus te optimum auctores hac
                    licentia w haeres dominationem commodo et aenean impedit
                    veneta cursus est manebimus. Ad w mortis at culpa republica,
                    NEC per gestarum me gaudere zzril si 60.0% atque intermedi.
                    EOS at iniunctum at consortio leo quia regulam per freuentia
                    respirium dui sit martii et consequuntur. Mi non'o
                    detrimenta quasi ratione m pretia rutrum nam victor
                    adlaborabunt, PAQ nomina ab ea minori id species resistendi
                    ti ad nesciunt ut liber at hic utilitatem at est morbi
                    daniae.
                  </p>
                  <p>
                    <Link
                      to="/what-we-do/xyzcapital"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW WEBSITE
                    </Link>
                  </p>
                </figcaption>
              </figure>
            </li>
            <li id="brand-5">
              <figure>
                <Link
                  to="/what-we-do/xyzcapital"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://placehold.co/250x250"
                    alt="XYZ Financial Group"
                  />
                </Link>
                <figcaption>
                  <h3>SED Directi Subordinatos Duorum Quod</h3>
                  <p>
                    REM Lacinia Submissionem Caduca Unde (ASSUM) ut s merentur
                    displicere incarcerata (QUO) nisi sem generaliter id 3009.
                    RERUM's effecerunt dominant te si sem est ipsa ripensi
                    contumeliis quibusdam quia hic pharetra vicissitudo purus
                    (Fusius Troiano). Eius honorifice te enim at risus sinistras
                    sollemnes rem equestri te a 2.59% harusen enim id videre
                    natus ERROR'v celeritas totam docfssimiis p qui ante
                    apollinis id prosperis. PORRO domini sit consequature ac
                    duplicate architecto subsit wisi ut symbolum me tertium
                    consternatus sed d tantum axioma.
                  </p>
                  <p>
                    <Link
                      to="/what-we-do/xyzcapital"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW WEBSITE
                    </Link>
                  </p>
                </figcaption>
              </figure>
            </li>
            <li id="brand-6">
              <figure>
                <Link
                  to="/what-we-do/xyzcapital"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://placehold.co/250x250"
                    alt="XYZ Financial Group"
                  />
                </Link>
                <figcaption>
                  <h3>SEM Baltico Erat Justo Quae</h3>
                  <p>
                    QUO Iucolis Eget Totam Vero (MUS), laudare te 2015, si hic
                    ordine moreae at qui MUS Junctione Saepe te cunctando.
                    Civiuni opprobrium eum temporibus te tertium circumspecte,
                    SED lectus cruciatus s arcu convincere placeat perversa
                    essentiam est fugit arcui mi sed velit specialiter
                    silentium. SEM'p antecedenti fridericus formastis at id
                    eiusdem modi-eget meritis necessitatem ferrens constantiam
                    wisi liber iure forsan ulteriori. Odoratus qui generatio mus
                    eos existit mi crimen ea benevolam deorum ut modi, SUM porro
                    at mentis in verius etiam meruerunt quae supremi morbi &
                    securus departitionem.
                  </p>
                  <p>
                    <Link
                      to="/what-we-do/xyzcapital"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW WEBSITE
                    </Link>
                  </p>
                </figcaption>
              </figure>
            </li>
          </ul>
          <h2>MARKET DEALER</h2>
          <ul>
            <li id="brand-7">
              <figure>
                <Link
                  to="/what-we-do/xyzcapital"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://placehold.co/250x250"
                    alt="XYZ Financial Group"
                  />
                </Link>
                <figcaption>
                  <h3>SEM Felices Charybdium Caesarianis</h3>
                  <p>
                    NAM Infamia Accelerare Competentem te d occidentem Nomina
                    Videre Sagina memento typi propria ut sortem desideriis et
                    Cubilia Diabolum quo Regalia.
                  </p>
                  <p>
                    <Link
                      to="/what-we-do/xyzcapital"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIEW WEBSITE
                    </Link>
                  </p>
                </figcaption>
              </figure>
            </li>
          </ul>
          <p>
            * Eum eaque disciplinam me SED Effectu Amorem Quam, QUO Videtis
            Approbatione Gradum Eros nec PER Directi Sunt Iusto Cras te dis
            simulacrum reducere. Mi id dui gloriosa ut se ex justo si nisl
            iaculantur ex nostrae destinatum specie. Fuga supponebant si mazim
            si est ottomanici te iudico repudiandae.
          </p>
        </ScrollIntoView>
      </section>
    </div>
  );
};
