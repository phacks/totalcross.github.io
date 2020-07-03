import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Carousel } from "react-bootstrap";

import styles from "./carousel-team.module.scss";

const CarouselTeam = () => {
  const data = useStaticQuery(graphql`
    query {
      bruno: file(relativePath: { eq: "src/imgs/team/bruno.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      armando: file(relativePath: { eq: "src/imgs/team/armando.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      italo: file(relativePath: { eq: "src/imgs/team/italo.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      nathalie: file(relativePath: { eq: "src/imgs/team/nathalie.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      iaggo: file(relativePath: { eq: "src/imgs/team/iaggo.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      andrea: file(relativePath: { eq: "src/imgs/team/andrea.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      daniel: file(relativePath: { eq: "src/imgs/team/daniel.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ricardo: file(relativePath: { eq: "src/imgs/team/ricardo.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lucasroque: file(relativePath: { eq: "src/imgs/team/lucasroque.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      patrick: file(relativePath: { eq: "src/imgs/team/patrick.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      allan: file(relativePath: { eq: "src/imgs/team/allan.png" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const team1 = [
    {
      name: "Bruno Muniz",
      position: "CEO",
      img: data.bruno.childImageSharp.fixed,
    },
    {
      name: "Armando Cristino",
      position: "CFO",
      img: data.armando.childImageSharp.fixed,
    },
  ];
  const team2 = [
    {
      name: "Italo Yeltsin",
      position: "Tech Leader",
      img: data.italo.childImageSharp.fixed,
    },
    {
      name: "Nathalie Risbakk",
      position: "Front End Developer",
      img: data.nathalie.childImageSharp.fixed,
    },
  ];
  const team3 = [
    {
      name: "Iaggo Quezado",
      position: "Developer",
      img: data.iaggo.childImageSharp.fixed,
    },
    {
      name: "Andrea Oliveira",
      position: "Researcher",
      img: data.andrea.childImageSharp.fixed,
    },
  ];
  const team4 = [
    {
      name: "Daniel Valente",
      position: "Project Manager",
      img: data.daniel.childImageSharp.fixed,
    },
    {
      name: "Ricardo Braga",
      position: "Developer",
      img: data.ricardo.childImageSharp.fixed,
    },
  ];
  const team5 = [
    {
      name: "Lucas Roque",
      position: "Full Stack Developer",
      img: data.lucasroque.childImageSharp.fixed,
    },
    {
      name: "Patrick Martins",
      position: "Developer",
      img: data.patrick.childImageSharp.fixed,
    },
  ];
  const team6 = [
    {
      name: "Allan César",
      position: "Developer",
      img: data.allan.childImageSharp.fixed,
    },
  ];

  const teamA = [
    {
      name: "Bruno Muniz",
      position: "CEO",
      img: data.bruno.childImageSharp.fixed,
    },
    {
      name: "Armando Cristino",
      position: "CFO",
      img: data.armando.childImageSharp.fixed,
    },
    {
      name: "Italo Yeltsin",
      position: "Tech Leader",
      img: data.italo.childImageSharp.fixed,
    },
    {
      name: "Nathalie Risbakk",
      position: "Front End Developer",
      img: data.nathalie.childImageSharp.fixed,
    },
    {
      name: "Iaggo Quezado",
      position: "Developer",
      img: data.iaggo.childImageSharp.fixed,
    },
    {
      name: "Andrea Oliveira",
      position: "Researcher",
      img: data.andrea.childImageSharp.fixed,
    },
  ];
  const teamB = [
    {
      name: "Daniel Valente",
      position: "Project Manager",
      img: data.daniel.childImageSharp.fixed,
    },
    {
      name: "Ricardo Braga",
      position: "Developer",
      img: data.ricardo.childImageSharp.fixed,
    },
    {
      name: "Lucas Roque",
      position: "Full Stack Developer",
      img: data.lucasroque.childImageSharp.fixed,
    },
    {
      name: "Patrick Martins",
      position: "Developer",
      img: data.patrick.childImageSharp.fixed,
    },
    {
      name: "Allan César",
      position: "Developer",
      img: data.allan.childImageSharp.fixed,
    },
  ];

  return (
    <div>
      {/* Carousel for Desktop*/}
      <Carousel className={styles.carouselContainer} interval="3000">
        <Carousel.Item>
          <div className={styles.carouselRow}>
            {teamA.map((member) => {
              return (
                <div className={styles.teamMemberCard}>
                  <Img
                    className={styles.teamMemberImage}
                    fixed={member.img}
                    alt={member.name}
                  />
                  <div className={styles.teamMemberName}>
                    {member.name} <br />
                    <span className={styles.teamMemberPos}>
                      {member.position}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.carouselRow}>
            {teamB.map((member) => (
              <div className={styles.teamMemberCard}>
                <Img
                  className={styles.teamMemberImage}
                  fixed={member.img}
                  alt={member.name}
                />
                <div className={styles.teamMemberName}>
                  {member.name} <br />{" "}
                  <span className={styles.teamMemberPos}>
                    {member.position}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
      {/* Carousel for Mobile */}
      <Carousel className={styles.carouselContainerMobile}>
        <Carousel.Item>
          <div className={styles.carouselRow}>
            {team1.map((member) => (
              <div className={styles.teamMemberCard}>
                <Img
                  className={styles.teamMemberImage}
                  fixed={member.img}
                  alt={member.name}
                />
                <div className={styles.teamMemberName}>
                  {member.name} <br />{" "}
                  <span className={styles.teamMemberPos}>
                    {member.position}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.carouselRow}>
            {team2.map((member) => (
              <div className={styles.teamMemberCard}>
                <Img
                  className={styles.teamMemberImage}
                  fixed={member.img}
                  alt={member.name}
                />
                <div className={styles.teamMemberName}>
                  {member.name} <br />{" "}
                  <span className={styles.teamMemberPos}>
                    {member.position}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.carouselRow}>
            {team3.map((member) => (
              <div className={styles.teamMemberCard}>
                <Img
                  className={styles.teamMemberImage}
                  fixed={member.img}
                  alt={member.name}
                />
                <div className={styles.teamMemberName}>
                  {member.name} <br />{" "}
                  <span className={styles.teamMemberPos}>
                    {member.position}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.carouselRow}>
            {team4.map((member) => (
              <div className={styles.teamMemberCard}>
                <Img
                  className={styles.teamMemberImage}
                  fixed={member.img}
                  alt={member.name}
                />
                <div className={styles.teamMemberName}>
                  {member.name} <br />{" "}
                  <span className={styles.teamMemberPos}>
                    {member.position}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.carouselRow}>
            {team5.map((member) => (
              <div className={styles.teamMemberCard}>
                <Img
                  className={styles.teamMemberImage}
                  fixed={member.img}
                  alt={member.name}
                />
                <div className={styles.teamMemberName}>
                  {member.name} <br />{" "}
                  <span className={styles.teamMemberPos}>
                    {member.position}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.carouselRow}>
            {team6.map((member) => (
              <div className={styles.teamMemberCard}>
                <Img
                  className={styles.teamMemberImage}
                  fixed={member.img}
                  alt={member.name}
                />
                <div className={styles.teamMemberName}>
                  {member.name} <br />{" "}
                  <span className={styles.teamMemberPos}>
                    {member.position}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselTeam;
