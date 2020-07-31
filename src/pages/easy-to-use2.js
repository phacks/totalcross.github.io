import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LayoutWhyTC from "../components/layout-why-tc";
import NavBarWhyTC from "../components/navbar-why-tc";
import coronaGIF from "../imgs/coronachart.gif";

import styles from "./easy-to-use.module.scss";

const EasyToUse2 = () => {
  const data = useStaticQuery(graphql`
    query {
      lang: file(relativePath: { eq: "src/imgs/lang.png" }) {
        childImageSharp {
          fluid(maxWidth: 370, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      endtoend: file(relativePath: { eq: "src/imgs/endtoend.png" }) {
        childImageSharp {
          fluid(maxWidth: 370, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      responsive: file(relativePath: { eq: "src/imgs/responsive.png" }) {
        childImageSharp {
          fluid(maxWidth: 370, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      anyide: file(relativePath: { eq: "src/imgs/anyide.png" }) {
        childImageSharp {
          fluid(maxWidth: 370, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO
        title="What makes TotalCross easy to use"
        description="TotalCross is easy to use because it allows you to code in a high level language, frees you to code on your favourite IDE, helps you build end to end solutions, and with TotalCross you can build your user interface responsive by default."
      ></SEO>
      <LayoutWhyTC>
        <NavBarWhyTC active="Easy to use" />

        <div className={styles.coronaContainer}>
          <img src={coronaGIF} alt="Corona Chart app" />

          <div className={styles.code}>
            <pre>
              <span style={{ color: "firebrick" }}>{`
  private void `}</span>
              <span style={{ color: "purple" }}>{`fillData()`}</span>
              {` {

    confirmedList.clear();
    recoveredList.clear();
    deathsList.clear();
    `}
              <span
                style={{ color: "grey" }}
              >{`// Getting the information and filling the lists used to fill the CoronaChart`}</span>
              <span style={{ color: "firebrick" }}>{`
    if `}</span>
              {`(!offlineCheck.isChecked())
        response = getCoronavirusData("https://coronavirus-map.p.rapidapi.com/v1/summary/latest", HttpStream.GET);`}
              <span style={{ color: "firebrick" }}>{`
    else`}</span>
              {`
        response = `}
              <span style={{ color: "firebrick" }}>{`new `}</span>
              {`JSONObject(`}
              <span style={{ color: "firebrick" }}>{`new `}</span>
              {`String(Vm.getFile("request.json")));

    JSONObject data = response.getJSONObject("data");
    dates = data.names();
    array = data.toJSONArray(dates);
    `}
              <span style={{ color: "firebrick" }}>{`for `}</span>
              {`(`}
              <span style={{ color: "firebrick" }}>{`int `}</span>
              {`i = 0; i < array.length(); i++) {
        date = dates.getString(i);
        item = array.getJSONObject(i);
        MyDate myDate = `}
              <span style={{ color: "firebrick" }}>{`new `}</span>
              {`MyDate(Integer.parseInt(Convert.remove(date, "-")));
        confirmedList.add(`}
              <span style={{ color: "firebrick" }}>{`new Data`}</span>
              {`<MyDate, Integer>(myDate, item.getInt("total_cases")));
        recoveredList.add(`}
              <span style={{ color: "firebrick" }}>{`new Data`}</span>
              {`<MyDate, Integer>(myDate, item.getInt("recovered")));
        deathsList.add(`}
              <span style={{ color: "firebrick" }}>{`new Data`}</span>
              {`<MyDate, Integer>(myDate, item.getInt("deaths")));
    }

    `}
              <span
                style={{ color: "grey" }}
              >{`// Sorts the data by date;`}</span>
              {`
    Collections.sort(confirmedList, `}
              <span style={{ color: "firebrick" }}>{`new Comparator`}</span>
              {`<`}
              <span style={{ color: "firebrick" }}>{`Data`}</span>
              {`<MyDate, Integer>>() {
                `}
              <span style={{ color: "firebrick" }}>{`
        @Override
        public int`}</span>
              {` `}
              <span style={{ color: "purple" }}>{`compare`}</span>
              {`(Data<MyDate, Integer> o1, Data<MyDate, Integer> o2) {
            return o1.x.compareTo(o2.x);
        }
    });
    Collections.sort(recoveredList, new Comparator<Data<MyDate, Integer>>() {
      `}
              <span style={{ color: "firebrick" }}>{`
        @Override
        public int`}</span>
              {` `}
              <span style={{ color: "purple" }}>{`compare`}</span>
              {`(Data<MyDate, Integer> o1, Data<MyDate, Integer> o2) {
            return o1.x.compareTo(o2.x);
        }
    });
    Collections.sort(deathsList, new Comparator<Data<MyDate, Integer>>() {
      `}
              <span style={{ color: "firebrick" }}>{`
        @Override
        public int`}</span>
              {` `}
              <span style={{ color: "purple" }}>{`compare`}</span>
              {`(Data<MyDate, Integer> o1, Data<MyDate, Integer> o2) {
            return o1.x.compareTo(o2.x);
        }
    });
}
          `}
            </pre>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.rowImage}>
            <Img
              fluid={data.lang.childImageSharp.fluid}
              alt="Illustration of High Level Languages"
              className={styles.image}
            />
            <div className={styles.rowTextBlock}>
              <div className={styles.rowTitle}>High Level Languages</div>
              <div className={styles.rowText}></div>
            </div>
          </div>
          <div className={styles.rowImage}>
            <Img
              fluid={data.anyide.childImageSharp.fluid}
              alt="Illustration of different IDEs"
              className={styles.image}
            />
            <div className={styles.rowTextBlock}>
              <div className={styles.rowTitle}>
                On your <br />
                favorite IDE
              </div>
              <div className={styles.rowText}></div>
            </div>
          </div>
          {/* <div className={styles.rowImage}>
            <Img
              fluid={data.endtoend.childImageSharp.fluid}
              alt="Illustration of End to End applications"
              className={styles.image}
            />
            <div className={styles.rowTextBlock}>
              <div className={styles.rowTitle}>
                Build end-to-end applications
              </div>
              <div className={styles.rowText}></div>
            </div>
          </div> */}
          <div className={styles.rowImage}>
            <Img
              fluid={data.responsive.childImageSharp.fluid}
              alt="Illustration of TotalCross Process"
              className={styles.image}
            />
            <div className={styles.rowTextBlock}>
              <div className={styles.rowTitle}>Responsive</div>
              <div className={styles.rowText}></div>
            </div>
          </div>
        </div>
      </LayoutWhyTC>
    </Layout>
  );
};

export default EasyToUse2;
