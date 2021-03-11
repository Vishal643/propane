import React from "react";
import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoRss } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";

const GridFooter = () => {
  const FooterContainer = styled.div`
    width: 80%;
    display: grid;
    grid-column-gap: 50px;
    padding: 15px;
    margin-left: 7%;
    border-bottom: 1px dotted black;

    li {
      list-style-type: none;
      padding: 10px;
      font-size: 11px;
    }
    h6 {
      margin-left: 12px;
      margin-left: 50px;
    }
    @font-face {
      font-family: "Montserrat", sans-serif;
      src: url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
    }
    li:hover {
      cursor: pointer;
    }
  `;

  const FooterContainer1 = styled.div`
    /* border: 1px solid; */
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
  `;

  const FooterContainer2 = styled.div`
    /* border: 1px solid; */
    grid-column: 2;
    grid-row: 1 / span 2;
  `;

  const FooterContainer3 = styled.div`
    /* border: 1px solid; */
    grid-column: 3;
    grid-row: 1 / span 2;
  `;

  const FooterContainer4 = styled.div`
    /* border: 1px solid; */
    grid-column: 1 / span 1;
    grid-row: 5;
  `;
  const FooterContainer5 = styled.div`
    /* border: 1px solid; */
    grid-column: 2 / span 1;
    grid-row: 3;
  `;

  const FooterContainer6 = styled.div`
    /* border: 1px solid; */
    grid-column: 3 / span 1;
    grid-row: 3;
  `;

  const FooterContainer7 = styled.div`
    /* border: 1px solid; */
    grid-column: 1 / span 1;
    grid-row: 3;
  `;

  const FooterContainer8 = styled.div`
    /* border: 1px solid; */
    grid-column: 2 / span 1;
    grid-row: 5;
  `;

  const FooterContainer9 = styled.div`
    /* border: 1px solid; */
    grid-column: 3 / span 1;
    grid-row: 5;
  `;

  return (
    <>
      <FooterContainer>
        <FooterContainer1>
          <div style={{ float: "left", width: "50%" }}>
            <img
              src="https://static.toiimg.com/photo/71215965.cms"
              alt="TOI"
              style={{ width: "", height: "60px", marginLeft: "50px" }}
            />

            <ul>
              <li>About us </li>
              <li> Create Your Own Ad</li>
              <li>Terms of Use and Griveance Predressal Policy</li>
              <li>Privacy policy</li>
              <li>Advertise with us</li>
              <li>RSS </li>
            </ul>
          </div>
          <div
            style={{
              float: "left",
              width: "50%",
              marginTop: "60px",
            }}
          >
            <ul>
              <li>Newsletter</li>
              <li>Feedback</li>
              <li>ePaper</li>
              <li>Sitemap</li>
              <li>Archives</li>
            </ul>
          </div>
        </FooterContainer1>
        <FooterContainer2>
          <div style={{ float: "left", width: "50%" }}>
            <h6>POPULAR CATEGORY</h6>
            <ul>
              <li>Headlines</li>
              <li>Sports News</li>
              <li>Business News</li>
              <li>India News</li>
              <li>World News</li>
            </ul>
          </div>
          <div style={{ float: "left", width: "50%", marginTop: "40px" }}>
            <ul>
              <li>Bollywood News</li>
              <li>Health & Fitness tips</li>
              <li>Indian TV Shows</li>
              <li>Celebrity Photos</li>
              <li>Archives</li>
            </ul>
          </div>
        </FooterContainer2>
        <FooterContainer3>
          <div style={{ float: "left" }}>
            <h6>HOT ON THE WEB</h6>
            <ul>
              <li>Sonam Kapoor</li>
              <li>Early Signs Of Diabetes</li>
              <li>Ankita Lokhande</li>
              <li>Zodiac Arranged Marriage</li>
              <li>Celebrities Newborn Babies</li>
            </ul>
          </div>
          <div style={{ marginTop: "40px", float: "left" }}>
            <ul>
              <li>Rubina Dilaik</li>
              <li>Weight Loss Side Effects</li>
              <li>Bollywood Celebrites</li>
              <li>Coronavirus DIfestive Issues</li>
              <li>Upcoming Bollywood Biopics</li>
            </ul>
          </div>
        </FooterContainer3>
        <FooterContainer4>
          <div style={{ height: "50px" }}>
            <h6>FOLLOW US ON </h6>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
              <FaFacebookF
                style={{
                  width: "40px",
                  height: "30px",
                  padding: "5px",
                  borderRadius: "30px",
                  border: "1px solid",
                }}
              />
              <AiOutlineTwitter
                style={{
                  width: "40px",
                  height: "30px",
                  padding: "5px",
                  borderRadius: "30px",
                  border: "1px solid",
                }}
              />
              <IoLogoRss
                style={{
                  width: "40px",
                  height: "30px",
                  padding: "5px",
                  borderRadius: "30px",
                  border: "1px solid",
                }}
              />
              <IoLogoYoutube
                style={{
                  width: "40px",
                  height: "30px",
                  padding: "5px",
                  borderRadius: "30px",
                  border: "1px solid",
                }}
              />
            </div>
          </div>
        </FooterContainer4>
        <FooterContainer5>
          <div style={{ float: "left" }}>
            <h6>TOP TRENDS</h6>
            <ul>
              <li>West Bengal opinion poll 2021</li>
              <li>Delhi budget 2021</li>
              <li>Tamil Nadu opinion poll 2021</li>
              <li>Coronovirus India update live</li>
              <li>Ola Electric Scooters</li>
              <li>TimesNow opinion poll</li>
              <li>OTP not coming</li>
              <li> JEE Mains Result</li>
              <li> Assam opinion polls</li>
            </ul>
          </div>
          <div style={{ marginTop: "40px", float: "left" }}>
            <ul>
              <li>Thane lockdown</li>
              <li>Covid 19 vaccine India</li>
              <li>IPL 2021 Schedule</li>
              <li>IPL Auction 2021 players</li>
              <li>Farmers protest in India</li>
              <li>Coronavirus Cases</li>
              <li>News</li>
              <li>Step by Step Pizza Recipe</li>
              <li>Horoscpe today</li>
            </ul>
          </div>
        </FooterContainer5>
        <FooterContainer6>
          <div style={{ float: "left" }}>
            <h6>TREDING TOPICS</h6>
            <ul>
              <li>Gangabai Kathiawadi</li>
              <li>Tollywood Memorable Women</li>
              <li>Kushi Kappor</li>
              <li>Mumma Surveen Chawla</li>
              <li>Ranbit Kapoor</li>
              <li>Kareena kappor</li>
              <li>Bhediya</li>
              <li>Navya Naveli Nanda</li>
            </ul>
          </div>
          <div style={{ float: "left", marginTop: "30px" }}>
            <ul>
              <li>Kangana Ranaut</li>
              <li>Katrina Kaif</li>
              <li>Flipkart Big Saving Days Sale</li>
              <li>Amazon App Quiz</li>
              <li>Flipkart Quiz</li>
              <li>Samsung Galaxy F62 Launch</li>
              <li>5G iPhone</li>
              <li>Amazon under 1000</li>
              <li>Rucksacks under 1000</li>
            </ul>
          </div>
        </FooterContainer6>
        <FooterContainer7>
          <div style={{ float: "left" }}>
            <h6>OTHER TIMES GROUP NEWS SITES</h6>
            <ul>
              <li>The Economics Times</li>
              <li>Hindi Economic Times</li>
              <li>Navharat Times</li>
              <li>Maharashtra Times</li>
              <li>Vijaya Karnataka</li>
              <li>Telugu Samayam</li>
              <li>Tamil Samayam</li>
              <li>Malayalam Smayam</li>
              <li>Ei Samay</li>
            </ul>
          </div>
          <div style={{ marginTop: "40px", float: "left" }}>
            <ul>
              <li>I am Gujarat</li>
              <li>Times Now</li>
              <li>Times Now Hindi</li>
              <li>TimesPoints</li>
              <li>Indiatimes</li>
              <li>Brans Capital</li>
              <li>Education Times</li>
              <li>Times Food</li>
              <li>Miss Kyra</li>
            </ul>
          </div>
        </FooterContainer7>
        <FooterContainer8>
          <div style={{ float: "left" }}>
            <h6>LIVING AND ENTERTAINMENT</h6>
            <ul>
              <li>iDiva</li>
              <li>MensXP.com</li>
              <li>Femina</li>
              <li>ETimes</li>
            </ul>
          </div>
          <div style={{ marginTop: "40px", float: "left" }}>
            <ul>
              <li>Filmfare</li>
              <li>Online Songs</li>
              <li>TV</li>
              <li>Lifestyle</li>
            </ul>
          </div>
        </FooterContainer8>
        <FooterContainer9>
          <div style={{ float: "left" }}>
            <h6>SERVICES</h6>
            <ul>
              <li>iDiva</li>
              <li>MensXP.com</li>
              <li>Femina</li>
              <li>ETimes</li>
            </ul>
          </div>
          <div style={{ marginTop: "40px", float: "left" }}>
            <ul>
              <li>Filmfare</li>
              <li>Online Songs</li>
              <li>TV</li>
              <li>Lifestyle</li>
            </ul>
          </div>
        </FooterContainer9>
      </FooterContainer>

      {/* <hr /> */}
      <div
        style={{
          color: "#666",
          fontSize: "11px",
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        Copyright © 2021 Bennett, Coleman & Co. Ltd. All rights reserved. For
        reprint rights: Times Syndication Service
      </div>
    </>
  );
};

export default GridFooter;
