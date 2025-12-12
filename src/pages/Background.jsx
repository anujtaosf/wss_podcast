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
            bio="Danny is a senior studying biology on the pre-med track at Michigan. His musical theatre interest began with playing violin in the pit orchestra for his high school, continuing into college through a lucrative podcasting career beginning in November of 2025. With a deep love for music, co-hosting, and tomfoolery, Danny dives even deeper into the intricacies of musicals through Stories from the West Side"
            image={dannyProfile}
          />
          <HostCard
            name="Daniel Bernstein"
            bio="Daniel is a senior at the University of Michigan studying communication and media, with minors in Global Media Studies and Judaic Studies. In his free time, he loves watching baseball, playing board games, and visiting messianic temples. When he grows up, he wants to be emperor of the universe."
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
                Alexandru Ioan Cuza University of Iași, and Veronica Tatiana Popescu. "Updating a Classic: Progressive Hollywood's Take on West Side Story." <em>British and American Studies</em>, vol. 30, May 2024, pp. 125–34. DOI.org (Crossref),{" "}
                <a
                  href="https://doi.org/10.35923/BAS.30.12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.35923/BAS.30.12
                </a>
                .
              </li>
              <li>
                Baber, Katherine. "Un-Gendering 'Somewhere': Women's Agency and Redemption in West Side Story." <em>The Cambridge Companion to West Side Story</em>, edited by Paul R. Laird and Elizabeth A. Wells, 1st ed., Cambridge University Press, 2025, pp. 135–53. DOI.org (Crossref),{" "}
                <a
                  href="https://doi.org/10.1017/9781108784849.009"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.1017/9781108784849.009
                </a>
                .
              </li>
              <li>
                Belgrad, Daniel, and Ying Zhu. "Anybodys 'in and out of the Shadows': The Threshold of Visibility and Queer Orientation in West Side Story." <em>American Studies</em>, vol. 61, no. 4, Dec. 2022, pp. 7–29. DOI.org (Crossref),{" "}
                <a
                  href="https://doi.org/10.1353/ams.2022.a913746"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.1353/ams.2022.a913746
                </a>
                .
              </li>
              <li>
                Butler, Isaac. "How West Side Story's Anybodys Went From Tomboy to Trans Character." <em>Slate</em>, 15 Dec. 2021,{" "}
                <a
                  href="https://slate.com/culture/2021/12/west-side-story-anybodys-2021-movie-trans.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://slate.com/culture/2021/12/west-side-story-anybodys-2021-movie-trans.html
                </a>
                .
              </li>
              <li>
                Cook, Michael. "The Queer Origin Story & Roots Of 'West Side Story' Are Revealed." <em>Instinct Magazine</em>, 8 Dec. 2021,{" "}
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
                "Exploring the Latino Metropolis: West Side Story." <em>Exploring the Latino Metropolis: A Brief Urban Cultural History of US Latinos</em>,{" "}
                <a
                  href="https://scalar.usc.edu/works/latino-metropolis-a-brief-urban-cultural-history-of-us-latinos---1/west-side-story---niece"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://scalar.usc.edu/works/latino-metropolis-a-brief-urban-cultural-history-of-us-latinos---1/west-side-story---niece
                </a>
                .
              </li>
              <li>
                LaFontaine, David. "Inside West Side Story." <em>The Gay & Lesbian Review</em>, Nov.–Dec. 2017,{" "}
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
                Lenker, Maureen Lee. "West Side Story Stars Ariana DeBose and Rita Moreno Open Up About Anita's Attempted Sexual Assault." <em>Entertainment Weekly</em>, 11 Dec. 2021,{" "}
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
                Mazzeo, Esme. "Rita Moreno Says the Attempted-Rape Scene in 'West Side Story' Opened Back Up 'All of Those Scars' From Her Own Sexual Assault." <em>Business Insider</em>, 29 Nov. 2021,{" "}
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
                National Women's History Alliance. "Detailed Timeline." <em>National Women's History Alliance</em>,{" "}
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
                Negrón-Muntaner, Frances. "Feeling Pretty." <em>Social Text</em>, vol. 18, no. 2, 2000, pp. 83–106. DOI.org (Crossref),{" "}
                <a
                  href="https://doi.org/10.1215/01642472-18-2_63-83"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.1215/01642472-18-2_63-83
                </a>
                .
              </li>
              <li>
                Oja, Carol J. "West Side Story and The Music Man: Whiteness, Immigration, and Race in the US during the Late 1950s." <em>Studies in Musical Theatre</em>, vol. 3, no. 1, Aug. 2009, pp. 13–30. DOI.org (Crossref),{" "}
                <a
                  href="https://doi.org/10.1386/smt.3.1.13_1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.1386/smt.3.1.13_1
                </a>
                .
              </li>
              <li>
                Paredez, Deborah. "'Queer for Uncle Sam': Anita's Latina Diva Citizenship in West Side Story." <em>Latino Studies</em>, vol. 12, no. 3, Sept. 2014, pp. 332–52. DOI.org (Crossref),{" "}
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
                "Spielberg's 'Rican Reparations: 'West Side Story' Resurrecting a Place for Us." <em>The Latinx Project at NYU</em>,{" "}
                <a
                  href="https://www.latinxproject.nyu.edu/intervenxions/spielbergs-rican-reparations-west-side-story-resurrecting-a-place-for-us"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.latinxproject.nyu.edu/intervenxions/spielbergs-rican-reparations-west-side-story-resurrecting-a-place-for-us
                </a>
                .
              </li>
              <li>
                Thorsen, Christine. "'When You're a Jet.'" <em>The Discovery Orchestra</em>, 8 Oct. 2013,{" "}
                <a
                  href="https://discoveryorchestra.org/when-youre-a-jet-%c2%9d/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://discoveryorchestra.org/when-youre-a-jet-%c2%9d/
                </a>
                .
              </li>
              <li>
                Wells, Elizabeth A. "The Real Gang History of New York." <em>The Cambridge Companion to West Side Story</em>, edited by Paul R. Laird and Elizabeth A. Wells, 1st ed., Cambridge University Press, 2025, pp. 198–212. DOI.org (Crossref),{" "}
                <a
                  href="https://doi.org/10.1017/9781108784849.013"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://doi.org/10.1017/9781108784849.013
                </a>
                .
              </li>
              <li>
                Wells, Elizabeth Anne. <em>West Side Story: Cultural Perspectives on an American Musical</em>. Scarecrow Press, 2011.
              </li>
              <li>
                "West Side Story." <em>Wikipedia</em>, 6 Dec. 2025. Wikipedia,{" "}
                <a
                  href="https://en.wikipedia.org/w/index.php?title=West_Side_Story&oldid=1326032934"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://en.wikipedia.org/w/index.php?title=West_Side_Story&oldid=1326032934
                </a>
                .
              </li>
              <li>
                "West Side Story (1961 Film)." <em>Wikipedia</em>, 19 Nov. 2025. Wikipedia,{" "}
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
                "West Side Story (2021 Film)." <em>Wikipedia</em>, 24 Nov. 2025. Wikipedia,{" "}
                <a
                  href="https://en.wikipedia.org/w/index.php?title=West_Side_Story_(2021_film)&oldid=1323872349"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://en.wikipedia.org/w/index.php?title=West_Side_Story_(2021_film)&oldid=1323872349
                </a>
                .
              </li>
              <li>
                "« West Side Story » then and now: the representation of Puerto Rican immigrants in the 1961 film and the 2021 remake." <em>Anglais</em>,{" "}
                <a
                  href="https://cle.ens-lyon.fr/anglais/arts/cinema/west-side-story-then-and-now-the-representation-of-puerto-rican-immigrants-in-the-1961-film-and-the-2021-remake"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://cle.ens-lyon.fr/anglais/arts/cinema/west-side-story-then-and-now-the-representation-of-puerto-rican-immigrants-in-the-1961-film-and-the-2021-remake
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
