import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  AnimOnScroll,
  Footer,
  Hero2,
  Landing,
  TextImg,
} from 'Components/export';
import SEO from 'Components/seo.js';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import '../../global.css';
import { Clef } from '../svg/Clef';

const IndexPage = () => {
  let width = 0;
  if (typeof window !== 'undefined') {
    const { innerWidth } = window;
    width = innerWidth;
  }
  const data = useStaticQuery(graphql`
    {
      a: file(relativePath: { eq: "freeTime.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      b: file(relativePath: { eq: "insidePiano.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      c: file(relativePath: { eq: "pianoCloseLook.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      d: file(relativePath: { eq: "luxuryPiano.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      e: file(relativePath: { eq: "pianoOutSide.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      f: file(relativePath: { eq: "pianoMotherWithChild.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const hero1freeTime = getImage(data.a);
  const hero1insidePiano = getImage(data.b);
  const hero2img1 = getImage(data.c);
  const hero2img2 = getImage(data.d);
  const hero2img3 = getImage(data.e);
  const hero2img4 = getImage(data.f);

  return (
    <>
      <SEO />
      <Landing containerStyles="" />
      <Clef />

      <main id="mainContent" className=" flex flex-col">
        {hero2img1 && hero2img2 && hero2img3 && hero2img4 && (
          <Hero2
            img1={hero2img1}
            img2={hero2img2}
            img3={hero2img3}
            img4={hero2img4}
            textWidth="70%"
            containerStyles="padding-Y-3-6rem"
          />
        )}
        <div className="bg-gradient-to-b from-[#fafdfd] via-[#edf2ff] to-[#e7eefd]">
          {hero1freeTime && (
            <AnimOnScroll>
              <TextImg
                headerText="Pár slov o mne"
                paragraphText="Mojim najväčším hobby sa za posledných 5 rokov stalo fotenie. Podarilo sa mi dosiahnuť prvenstvá či už v slovenských, ale aj medzinárodných súťažiach. Najlepšie fotky sú prezentované na voľne dostupných dočasných výstavách či múzeách."
                img={hero1freeTime}
                alt="Vo voľnom čase"
                imgStyle="max-w-[25rem]"
                id="aboutMe"
                containerStyles="padding-Y-3-6rem "
              />
            </AnimOnScroll>
          )}

          {hero1insidePiano && (
            <AnimOnScroll>
              <TextImg
                reversed
                headerText="Vzdelanie"
                paragraphText="Vyštudoval som odbornú školu v Hradci Králové. Stal som sa tam mechanikom hudobných nástrojov, naučil sa opraviť klavír správne tak, aby fungoval najbližšie roky."
                img={hero1insidePiano}
                alt="Vnútro klavíru"
                imgStyle="max-w-[25rem]"
                id="education"
                containerStyles="padding-Y-3-6rem "
              />
            </AnimOnScroll>
          )}
        </div>
      </main>
      <Footer />
      {/* Fixed round Phone button */}
      {width < 640 && (
        <div
          onClick={() => window.open('tel:+421905405802', '_self')}
          className="fixed bottom-5 right-5 z-50 flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-[#dfe4ed]"
        >
          <FontAwesomeIcon
            size="lg"
            className="flex text-[#17303b]"
            icon={faPhone}
          />
        </div>
      )}
    </>
  );
};

export default IndexPage;
