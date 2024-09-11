import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Timeline4 from '../components/timeline4'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Remarkable template</title>
        <meta property="og:title" content="Remarkable template" />
      </Helmet>
      <header className="home-header">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-branding1">
            <span className="home-text10">Heeyun Kim</span>
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M128 128h768v768h-768z"></path>
            </svg>
            <span className="home-text11">Portfolio</span>
          </div>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav className="home-links1">
              <button className="home-button1 button">
                <Link to="/about" className="home-navlink1">
                  About me
                </Link>
              </button>
              <button className="home-button2 button">
                <Link to="/research" className="home-navlink2">
                  Research
                </Link>
              </button>
              <button className="home-button3 button">
                <span>Academic Course Works</span>
              </button>
              <button className="home-button4 button">Menu</button>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <img
              alt="image"
              src="/group%202084%5B1%5D.svg"
              className="home-hamburger"
            />
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-top">
              <div className="home-branding2">
                <span className="home-text13">Remarkable</span>
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M128 128h768v768h-768z"></path>
                </svg>
                <span className="home-text14">Remarkable</span>
              </div>
              <div data-thq="thq-close-menu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="home-links2">
              <button className="home-button5 button">
                <span>Our offers</span>
              </button>
              <button className="home-button6 button">
                <span>Get a fast quote</span>
              </button>
              <button className="home-button7 button">Menu</button>
            </nav>
            <div className="home-social-bar">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon16">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon18">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon20">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon22">
                <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="home-icon24">
                <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
              </svg>
            </div>
          </div>
        </header>
      </header>
      <header className="home-hero">
        <div className="home-content1">
          <h1 className="home-title">
            <span>
              Hi,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>This is </span>
            <span>
              Heeyun
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
          </h1>
          <span className="home-description">
            <span>
              I am an enthusiastic researcher and engineer at Columbia
              University dedicated to crafting a solution to security
              challenges.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              I am in my senior year of undergraduate study, majoring in
              Computer Science with a minor in Entrepreneurship and Innovation.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <img alt="image" src="/line-300w.png" className="home-image10" />
        </div>
        <div className="home-image11">
          <img
            alt="image"
            src="/hero%20%231-1500w.png"
            className="home-image12"
          />
          <img
            alt="image"
            src="/hero%20%232-1500w.png"
            className="home-image13"
          />
        </div>
      </header>
      <section className="home-mission1">
        <h2 className="home-text26">
          <span>
            My research experience in analyzing attack patterns with Honeypots
            and developing Firewall rules for IoT devices has been driven by a
            deep passion for
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text28">Cybersecurity</span>
          <span>
            {' '}
            and
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text30">Computer</span>
          <span className="home-text31">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text32">Networks</span>
          <span>
            . I’ve recently developed a strong interest in studies in
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text34">HCI</span>
          <span>
            {' '}
            and
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text36">Privacy</span>
        </h2>
        <Link to="/research" className="home-navlink3 button">
          <span className="home-text37">More about my research</span>
        </Link>
      </section>
      <section className="home-partners">
        <div className="home-content2">
          <h2 className="home-text38">Projects</h2>
          <p className="home-text39">Some projects.</p>
        </div>
        <div className="home-partners-desktop">
          <div className="home-column1">
            <div className="home-partner10 partner-container">
              <img
                alt="image"
                src="/vector%5B1%5D.svg"
                className="partner-image"
              />
            </div>
            <div className="partner-container">
              <img
                alt="image"
                src="/group%202108.svg"
                className="partner-image"
              />
            </div>
            <div className="partner-container">
              <img
                alt="image"
                src="/vector%5B2%5D.svg"
                className="partner-image"
              />
            </div>
          </div>
          <div className="home-column2">
            <div className="partner-container">
              <img
                alt="image"
                src="/group%202107.svg"
                className="partner-image"
              />
            </div>
            <div className="home-partner14 partner-container">
              <span className="home-text40">🍯</span>
            </div>
            <div className="partner-container">
              <img
                alt="image"
                src="/vector%5B4%5D.svg"
                className="partner-image"
              />
            </div>
            <div className="partner-container">
              <img
                alt="image"
                src="/group%202110.svg"
                className="partner-image"
              />
            </div>
          </div>
          <div className="home-column3">
            <div className="partner-container">
              <img
                alt="image"
                src="/group%202111.svg"
                className="partner-image"
              />
            </div>
            <div className="partner-container">
              <img
                alt="image"
                src="/group%202108.svg"
                className="partner-image"
              />
            </div>
            <div className="partner-container">
              <img
                alt="image"
                src="/vector%5B5%5D.svg"
                className="partner-image"
              />
            </div>
            <div className="partner-container">
              <img
                alt="image"
                src="/vector%5B1%5D.svg"
                className="partner-image"
              />
            </div>
            <div className="partner-container">
              <img
                alt="image"
                src="/group%202108.svg"
                className="partner-image"
              />
            </div>
          </div>
          <div className="home-column4">
            <div className="partner-container">
              <img
                alt="image"
                src="/vector%5B2%5D.svg"
                className="partner-image"
              />
            </div>
            <div className="partner-container">
              <img
                alt="image"
                src="/group%202110.svg"
                className="partner-image"
              />
            </div>
            <div className="partner-container">
              <img
                alt="image"
                src="/group%202107.svg"
                className="partner-image"
              />
            </div>
            <div className="partner-container">
              <img
                alt="image"
                src="/vector%5B3%5D.svg"
                className="partner-image"
              />
            </div>
          </div>
        </div>
        <div className="home-partners-mobile">
          <div className="home-row">
            <div className="partner-container">
              <img
                alt="image"
                src="/group%202108.svg"
                className="partner-image"
              />
            </div>
            <div className="partner-container">
              <img
                alt="image"
                src="/group%202111.svg"
                className="partner-image"
              />
            </div>
            <div className="partner-container">
              <img
                alt="image"
                src="/vector%5B5%5D.svg"
                className="partner-image"
              />
            </div>
            <div className="partner-container">
              <img
                alt="image"
                src="/vector%5B4%5D.svg"
                className="partner-image"
              />
            </div>
          </div>
          <div className="home-column5">
            <div className="partner-container">
              <img
                alt="image"
                src="/vector%5B1%5D.svg"
                className="partner-image"
              />
            </div>
            <div className="partner-container">
              <img
                alt="image"
                src="/vector%5B3%5D.svg"
                className="partner-image"
              />
            </div>
            <div className="partner-container">
              <img
                alt="image"
                src="/vector%5B4%5D.svg"
                className="partner-image"
              />
            </div>
            <div className="partner-container">
              <img
                alt="image"
                src="/group%202107.svg"
                className="partner-image"
              />
            </div>
          </div>
          <div className="home-column6">
            <div className="partner-container">
              <img
                alt="image"
                src="/group%202111.svg"
                className="partner-image"
              />
            </div>
            <div className="partner-container">
              <img
                alt="image"
                src="/group%202108.svg"
                className="partner-image"
              />
            </div>
            <div className="partner-container">
              <img
                alt="image"
                src="/group%202110.svg"
                className="partner-image"
              />
            </div>
            <div className="partner-container">
              <img
                alt="image"
                src="/vector%5B1%5D.svg"
                className="partner-image"
              />
            </div>
          </div>
          <div className="home-column7">
            <div className="partner-container">
              <img
                alt="image"
                src="/vector%5B2%5D.svg"
                className="partner-image"
              />
            </div>
            <div className="partner-container">
              <img
                alt="image"
                src="/vector%5B3%5D.svg"
                className="partner-image"
              />
            </div>
            <div className="partner-container">
              <img
                alt="image"
                src="/vector%5B4%5D.svg"
                className="partner-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-improve">
        <div className="home-heading">
          <h2 className="home-text41">TA/CA experience</h2>
          <p className="home-text42">
            <span className="home-text43">
              [COMS 4119] Computer Networks (S24)
            </span>
            <br className="home-text44"></br>
            <span className="home-text45">[</span>
            <span>COMS 4181] </span>
            <span className="home-text47">Security 1 (F24)</span>
            <br className="home-text48"></br>
            <span className="home-text49">
              [COMS 4186] Malware Analysis &amp; Reverse Eng. (F24)
            </span>
            <br className="home-text50"></br>
            <span className="home-text51">
              [COMS 3261] Computer Science Theory (S23, Su24)
            </span>
            <br className="home-text52"></br>
            <br className="home-text53"></br>
            <br></br>
          </p>
        </div>
      </section>
      <Timeline4
        date1={
          <Fragment>
            <span className="home-text55 thq-heading-3">January 2018</span>
          </Fragment>
        }
        date2={
          <Fragment>
            <span className="home-text56 thq-heading-3">
              June 2023 - Current
            </span>
          </Fragment>
        }
        date3={
          <Fragment>
            <span className="home-text57 thq-heading-3">
              September 2022 - May 2024
            </span>
          </Fragment>
        }
        date4={
          <Fragment>
            <span className="home-text58 thq-heading-3">
              July 2023 – September 2023
            </span>
          </Fragment>
        }
        date41={
          <Fragment>
            <span className="home-text59 thq-heading-3">
              March 2022 – March 2023
            </span>
          </Fragment>
        }
        title1={
          <Fragment>
            <span className="home-text60 thq-heading-2">Work Experience</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text61 thq-body-small">
              Some experiences in my interests
            </span>
          </Fragment>
        }
        card1Content={
          <Fragment>
            <span className="home-text62 sub-header thq-body-small">
              The Cybersecurity Training Program was officially launched,
              offering courses on various aspects of cybersecurity.
            </span>
          </Fragment>
        }
        card1Heading={
          <Fragment>
            <span className="home-text63 thq-heading-3">
              Internet Real Time Lab
            </span>
          </Fragment>
        }
        card2Content={
          <Fragment>
            <span className="home-text64 thq-body-small">
              Our team presented groundbreaking research at the International
              Cybersecurity Conference, showcasing our expertise.
            </span>
          </Fragment>
        }
        card2Heading={
          <Fragment>
            <span className="home-text65 thq-heading-3">
              Distributed Network Analysis Lab
            </span>
          </Fragment>
        }
        card3Content={
          <Fragment>
            <span className="home-text66 thq-body-small">
              We reached a significant milestone of having over 10,000 members
              in our cybersecurity community.
            </span>
          </Fragment>
        }
        card3Heading={
          <Fragment>
            <span className="home-text67 thq-heading-3">
              Columbia Engineering Deans Office
            </span>
          </Fragment>
        }
        card4Content={
          <Fragment>
            <span className="home-text68 thq-body-small">
              Introducing a specialized course focusing on advanced networking
              concepts and technologies.
            </span>
          </Fragment>
        }
        card4Heading={
          <Fragment>
            <span className="home-text69 thq-heading-3">
              Omphalos Lifesciences Inc
            </span>
          </Fragment>
        }
        card1Content1={
          <Fragment>
            <span className="home-text70 thq-body-small">
              The Cybersecurity Training Program was officially launched,
              offering courses on various aspects of cybersecurity.
            </span>
          </Fragment>
        }
        card1Content2={
          <Fragment>
            <span className="home-text71 sub-header thq-body-small">
              Research Assistant
            </span>
          </Fragment>
        }
        card4Content1={
          <Fragment>
            <span className="home-text72 thq-body-small">
              Introducing a specialized course focusing on advanced networking
              concepts and technologies.
            </span>
          </Fragment>
        }
        card4Heading1={
          <Fragment>
            <span className="home-text73 thq-heading-3">ClaraLabs</span>
          </Fragment>
        }
        card1Content21={
          <Fragment>
            <span className="home-text74 sub-header thq-body-small">
              <span>Program Assistant</span>
              <br></br>
            </span>
          </Fragment>
        }
        card1Content211={
          <Fragment>
            <span className="home-text77 sub-header thq-body-small">
              <span>Business Director</span>
              <br></br>
            </span>
          </Fragment>
        }
        card1Content212={
          <Fragment>
            <span className="home-text80 sub-header thq-body-small">
              <span>Program Assistant</span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Timeline4>
      <section className="home-mission2">
        <div className="home-content3">
          <cite className="home-quote">
            “Remarkable is a professional organization aliquip ex ea commodo
            consequat duis aute irure dolor in reprehenderit aute”
          </cite>
          <div className="home-author">
            <img
              alt="image"
              src="/foto-sushi-ocow8-uiajk-unsplash%20%5B1%5D%201-200h.png"
              className="home-avatar"
            />
            <div className="home-details">
              <span className="home-name">
                Michael Beltford,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-origin">founder Clean Tech</span>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
      <div>
        <div className="home-container3">
          <Script
            html={`<style>
    .partner-container:hover .partner-image{
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(75deg) brightness(101%) contrast(102%);
    }
</style>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
