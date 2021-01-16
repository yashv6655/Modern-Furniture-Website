import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="About" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="about img" />
        <article>
          <div className="title">
            <h2>About Us</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            ducimus accusamus aut itaque temporibus iste sed maiores dolore, quo
            dolores, harum ratione maxime? Tempora quo atque cupiditate
            aspernatur asperiores ex illum dolorum dignissimos harum adipisci
            non laudantium impedit iure ipsa omnis praesentium assumenda
            perspiciatis officiis eius nihil nobis earum possimus, sapiente
            natus! Maxime harum ullam accusamus dignissimos inventore optio ex,
            nostrum vero voluptates provident placeat ea eum repellendus, quae
            veniam corrupti excepturi? Animi, quidem molestias! Consequuntur
            aliquid nemo sint commodi, eum cumque, soluta dolor pariatur illum
            officia quia fugit ex, eligendi repudiandae libero ea voluptatibus
            voluptatum molestiae? Praesentium, commodi consectetur.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
