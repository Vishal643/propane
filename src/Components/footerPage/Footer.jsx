import React from "react";
import styled from "styled-components";

const Footer = () => {
  //   const FooterContainer = styled.div`
  //      border: 1px solid violet;
  //     min-height: 100vh;
  //     display: flex;
  //     flex-direction: column;
  //   `;
  //   const FooterWrapper = styled.div`
  //     border: 1px solid green;
  //     display: flex;
  //     flex-wrap: wrap;
  //   `;
  //   const FooterColumn = styled.div`
  //     border: 1px solid red;
  //     display: flex;
  //     flex-direction: cloumn;
  //   `;
  //   const FooterTitle = styled.div`
  //     border: 1px solid black;
  //   `;
  //   const FooterLink = styled.div`
  //     /* border: 1px solid purple; */
  //   `;

  const FooterWrapper = styled.div`
    border: 1px solid violet;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
     li {
      list-style-type:none;
      padding:10px;
      font-size:11px;
       
    }
    h6{
        margin-left : 10px;
    }
  `;
  const FooterContainer = styled.div`
    /* height: 100px; */
    border: 1px solid #c3c3c3;
    display: flex;
  `;

  const FooterContainterColumn1 = styled.div`
    border: 1px solid green;
    display: flex;
    flex-grow: 1;
  `;
  const FooterContainterColumn2 = styled.div`
    border: 1px solid red;
    display: flex;
    flex-grow: 1;
  `;
  const FooterContainterColumn3 = styled.div`
    border: 1px solid blue;
    display: flex;
    flex-grow: 1;
  `;

  return (
    <FooterWrapper>
      <h1 style={{textAlign:"center"}}> FOOTER CONTAINER </h1>

      {/* first row */}
    
      <FooterContainer>
        <FooterContainterColumn1>
          <div style={{ border: "1px dashed", width: "50%", float: "left" }}>
          <h6>TIMES OF INDIA </h6>
            <ul>
              <li>About us </li>
              <li> Create Your Own Ad</li>
              <li>Terms of Use and Griveance Predressal Policy</li>
              <li>Privacy policy</li>
              <li>Advertise with us</li>
              <li>RSS </li>
            </ul>
          </div>
          <div style={{ marginTop:"50px", border: "1px dashed", width: "50%", float: "left" }}>
            <ul>
              <li>Newsletter</li>
              <li>Feedback</li>
              <li>ePaper</li>
              <li>Sitemap</li>
              <li>Archives</li>
            </ul>
          </div>
        </FooterContainterColumn1>

        <FooterContainterColumn2>
          <div style={{ border: "1px dashed", width: "50%", float: "left" }}>
            <h6>POPULAR CATEGORY</h6>
            <ul>
              <li>Headlines</li>
              <li>Sports News</li>
              <li>Business News</li>
              <li>India News</li>
              <li>World News</li>
            </ul>
           
          </div>
          <div style={{ marginTop:"50px", border: "1px dashed", width: "50%", float: "left" }}>
          <ul>
              <li>Bollywood News</li>
              <li>Health & Fitness tips</li>
              <li>Indian TV Shows</li>
              <li>Celebrity Photos</li>
              <li>Archives</li>
            </ul>
          </div>
        </FooterContainterColumn2>

        <FooterContainterColumn3>
          <div style={{  border: "1px dashed", width: "50%", float: "left" }}>
            <h6>HOT ON THE WEB</h6>
            <ul>
              <li>Sonam Kapoor</li>
              <li>Early Signs Of Diabetes</li>
              <li>Ankita Lokhande</li>
              <li>Zodiac Arranged Marriage</li>
              <li>Celebrities Newborn Babies</li>
            </ul>
          </div>
          <div style={{marginTop:"50px", border: "1px dashed", width: "50%", float: "left" }}>
          <ul>
              <li>Rubina Dilaik</li>
              <li>Weight Loss Side Effects</li>
              <li>Bollywood Celebrites</li>
              <li>Coronavirus DIfestive Issues</li>
              <li>Upcoming Bollywood Biopics</li>
            </ul>
          </div>
        </FooterContainterColumn3>
      </FooterContainer>

      {/* second row */}

      <FooterContainer>
        <FooterContainterColumn1 style ={{height:"100px"}}>
        <div style={{ border: "1px dashed", width: "50%", float: "left", marginLeft :"20px", height:"100px"}}>
            <h6> NEW TOP TRENDS</h6>
            <ul>
              <li>West BEngal opinion poll 2021</li>
              <li>Delhi budget 2021</li>
            
            </ul>
          </div>
          {/* <div style={{marginTop:"50px", border: "1px dashed", width: "50%", float: "left" }}>
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
          </div> */}
        </FooterContainterColumn1>

        <FooterContainterColumn2>
          <div style={{ border: "1px dashed", width: "50%", float: "left" }}>
            <h6>TOP TRENDS</h6>
            <ul>
              <li>West BEngal opinion poll 2021</li>
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
          <div style={{marginTop:"50px", border: "1px dashed", width: "50%", float: "left" }}>
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
        </FooterContainterColumn2>

        <FooterContainterColumn3>
         <div style={{ border: "1px dashed", width: "50%", float: "left" }}> 
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
          <div style={{marginTop:"50px", border: "1px dashed", width: "50%", float: "left" }}>
          
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
        </FooterContainterColumn3>
      </FooterContainer>

      {/* third row */}
      <FooterContainer>
        <FooterContainterColumn1>
        <div style={{ border: "1px dashed", width: "50%", float: "left" }}>
            <h6>OTHES TIMES GROUP NEWS SITES</h6>
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
          <div style={{marginTop:"50px", border: "1px dashed", width: "50%", float: "left" }}>
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
        </FooterContainterColumn1>

        <FooterContainterColumn2>
        <div style={{ border: "1px dashed", width: "50%", float: "left" }}>
            <h6>LIVING AND ENTERTAINMENT</h6>
            <ul>
              <li>iDiva</li>
              <li>MensXP.com</li>
              <li>Femina</li>
              <li>ETimes</li>
            </ul>
          </div>
          <div style={{marginTop:"50px", border: "1px dashed", width: "50%", float: "left" }}>
          <ul>
              <li>Filmfare</li>
              <li>Online Songs</li>
              <li>TV</li>
              <li>Lifestyle</li>
            </ul>
          </div>
        </FooterContainterColumn2>

        <FooterContainterColumn3>
        <div style={{ border: "1px dashed", width: "50%", float: "left" }}>
            <h6>SERVICES</h6>
            <ul>
              <li>iDiva</li>
              <li>MensXP.com</li>
              <li>Femina</li>
              <li>ETimes</li>
            </ul>
          </div>
          <div style={{marginTop:"50px", border: "1px dashed", width: "50%", float: "left" }}>
          <ul>
              <li>Filmfare</li>
              <li>Online Songs</li>
              <li>TV</li>
              <li>Lifestyle</li>
            </ul>
          </div>
        </FooterContainterColumn3>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
