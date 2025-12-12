import React from "react";
import HostCard from "../components/HostCard";
import "./Background.css";
import anuProfile from "../assets/anu_profile_ww.JPG";
import dannyProfile from "../assets/danny_profile.jpg";
import danielProfile from "../assets/daniel_prof.jpg";

function Background() {
  return (
    <div className="background-page">
      <div className="page-hero">
        <h1 className="page-title fade-up">Meet Your Hosts</h1>
      </div>

      <section className="section">
        <div className="host-grid">
          <HostCard
            name="Anuhea Tao"
            bio="Anu is a current senior at U-M studying robotics engineering. She is a huge fan of musical theatre and will be the loudest hooter and holler-er of any auditorium. She begun her podcast career as of November 2025, making this her first podcast that will be seen by public eyes. Her qualifications include loudness of voice, clarity in speech, and out of the box ideas."
            image={anuProfile}
          />
          <HostCard
            name="Daniel Soden"
            bio="The cheekiest little bugger."
            image={dannyProfile}
          />
          <HostCard
            name="Daniel Bernstein"
            bio="The cheeky little bugger."
            image={danielProfile}
          />
        </div>
      </section>
      <section className="section section-alt">
        <h2 className="page-title">Credits & Bibliography</h2>
        <div className="credits">
          <div className="credits-section">
            <h3 className="credits-heading">Films</h3>
            <p>
              <em>West Side Story</em> (1961)
            </p>
            <p>Directed by Robert Wise and Jerome Robbins</p>
            <p style={{ marginTop: "1rem" }}>
              <em>West Side Story</em> (2021)
            </p>
            <p>Directed by Steven Spielberg</p>
          </div>

          <div className="credits-section">
            <h3 className="credits-heading">Sources</h3>
            <ul>
              <li>
                Cook, Michael. "The Queer Origin Story & Roots Of 'West Side
                Story' Are Revealed." <em>Instinct Magazine</em>, 8 Dec. 2021,{" "}
                <a
                  href="https://instinctmagazine.com/the-queer-origin-story-roots-of-west-side-story-are-revealed/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://instinctmagazine.com/the-queer-origin-story-roots-of-west-side-story-are-revealed/
                </a>
                .
              </li>
              <li>
                LaFontaine, David. "Inside West Side Story."{" "}
                <em>The Gay & Lesbian Review</em>, Nov.–Dec. 2017,{" "}
                <a
                  href="https://glreview.org/article/inside-west-side-story/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://glreview.org/article/inside-west-side-story/
                </a>
                . Accessed 11 Dec. 2025.
              </li>
              <li>
                Lenker, Maureen Lee. "West Side Story Stars Ariana DeBose and
                Rita Moreno Open Up About Anita's Attempted Sexual Assault."{" "}
                <em>Entertainment Weekly</em>, 11 Dec. 2021,{" "}
                <a
                  href="https://ew.com/movies/ariana-debose-rita-moreno-anita-sexual-assault/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ew.com/movies/ariana-debose-rita-moreno-anita-sexual-assault/
                </a>
                .
              </li>
              <li>
                Mazzeo, Esme. "Rita Moreno Says the Attempted-Rape Scene in
                'West Side Story' Opened Back Up 'All of Those Scars' From Her
                Own Sexual Assault." <em>Business Insider</em>, 29 Nov. 2021,{" "}
                <a
                  href="https://www.businessinsider.com/rita-moreno-rape-scene-west-side-story-sexual-assault-2021-11"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.businessinsider.com/rita-moreno-rape-scene-west-side-story-sexual-assault-2021-11
                </a>
                .
              </li>
              <li>
                National Women's History Alliance. "Detailed Timeline."{" "}
                <em>National Women's History Alliance</em>,{" "}
                <a
                  href="https://nationalwomenshistoryalliance.org/resources/womens-rights-movement/detailed-timeline/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://nationalwomenshistoryalliance.org/resources/womens-rights-movement/detailed-timeline/
                </a>
                . Accessed 11 Dec. 2025.
              </li>
              <li>
                Paredez, Deborah. "'Queer for Uncle Sam': Anita's Latina Diva
                Citizenship in West Side Story." <em>Latino Studies</em>, vol.
                12, no. 3, Sept. 2014, pp. 332–52. DOI.org (Crossref),{" "}
                <a
                  href="https://doi.org/10.1057/lst.2014.46"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.1057/lst.2014.46
                </a>
                .
              </li>
              <li>
                "West Side Story (1961 Film)." <em>Wikipedia</em>, 19 Nov. 2025.
                Wikipedia,{" "}
                <a
                  href="https://en.wikipedia.org/w/index.php?title=West_Side_Story_(1961_film)&oldid=1323130126"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://en.wikipedia.org/w/index.php?title=West_Side_Story_(1961_film)&oldid=1323130126
                </a>
                .
              </li>
              <li>
                "West Side Story (2021 Film)." <em>Wikipedia</em>, 24 Nov. 2025.
                Wikipedia,{" "}
                <a
                  href="https://en.wikipedia.org/w/index.php?title=West_Side_Story_(2021_film)&oldid=1323872349"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://en.wikipedia.org/w/index.php?title=West_Side_Story_(2021_film)&oldid=1323872349
                </a>
                .
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Background;
