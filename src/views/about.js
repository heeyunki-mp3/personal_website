import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Hero8 from '../components/hero8'
import Timeline4 from '../components/timeline4'
import Stats3 from '../components/stats3'
import Logos2 from '../components/logos2'
import Testimonial6 from '../components/testimonial6'
import Team7 from '../components/team7'
import Footer from '../components/footer'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Remarkable template</title>
        <meta property="og:title" content="About - Remarkable template" />
      </Helmet>
      <header className="about-header">
        <header data-thq="thq-navbar" className="about-navbar-interactive">
          <div className="about-branding1">
            <span className="about-text10">Heeyun Kim</span>
            <svg viewBox="0 0 1024 1024" className="about-icon10">
              <path d="M128 128h768v768h-768z"></path>
            </svg>
            <span className="about-text11">Portfolio</span>
          </div>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="about-desktop-menu"
          >
            <nav className="about-links1">
              <button className="about-button1 button">
                <span>About me</span>
              </button>
              <button className="about-button2 button">
                <Link to="/research" className="about-navlink">
                  Research
                </Link>
              </button>
              <button className="about-button3 button">
                <span>Academic Course Works</span>
              </button>
              <button className="about-button4 button">Menu</button>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="about-burger-menu">
            <img
              alt="image"
              src="/group%202084%5B1%5D.svg"
              className="about-hamburger"
            />
          </div>
          <div data-thq="thq-mobile-menu" className="about-mobile-menu">
            <div className="about-top">
              <div className="about-branding2">
                <span className="about-text14">Remarkable</span>
                <svg viewBox="0 0 1024 1024" className="about-icon12">
                  <path d="M128 128h768v768h-768z"></path>
                </svg>
                <span className="about-text15">Remarkable</span>
              </div>
              <div data-thq="thq-close-menu" className="about-menu-close">
                <svg viewBox="0 0 1024 1024" className="about-icon14">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="about-links2">
              <button className="about-button5 button">
                <span>Our offers</span>
              </button>
              <button className="about-button6 button">
                <span>Get a fast quote</span>
              </button>
              <button className="about-button7 button">Menu</button>
            </nav>
            <div className="about-social-bar">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="about-icon16"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="about-icon18"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="about-icon20"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="about-icon22"
              >
                <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="about-icon24">
                <path d="M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z"></path>
              </svg>
            </div>
          </div>
        </header>
      </header>
      <Hero8
        action1={
          <Fragment>
            <span className="about-text18 thq-body-small">Explore more</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text19 thq-body-small">Join now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text20 thq-body-large">
              Empowering you with knowledge and skills
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text21 thq-heading-1">Time to know me</span>
          </Fragment>
        }
      ></Hero8>
      <Timeline4
        date1={
          <Fragment>
            <span className="about-text22 thq-heading-3">
              January 2024 - Current
            </span>
          </Fragment>
        }
        date2={
          <Fragment>
            <span className="about-text23 thq-heading-3">
              June 2023 - Current
            </span>
          </Fragment>
        }
        date3={
          <Fragment>
            <span className="about-text24 thq-heading-3">
              September 2022 - May 2024
            </span>
          </Fragment>
        }
        date4={
          <Fragment>
            <span className="about-text25 thq-heading-3">
              July 2023 – September 2023
            </span>
          </Fragment>
        }
        date41={
          <Fragment>
            <span className="about-text26 thq-heading-3">
              March 2022 – March 2023
            </span>
          </Fragment>
        }
        title1={
          <Fragment>
            <span className="about-text27 thq-heading-2">Work Experience</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text28 thq-body-small">
              Some experiences in my interests
            </span>
          </Fragment>
        }
        card1Content={
          <Fragment>
            <span className="about-text29 sub-header thq-body-small">
              Research Assistant
            </span>
          </Fragment>
        }
        card1Heading={
          <Fragment>
            <span className="about-text30 thq-heading-3">
              Internet Real Time Lab
            </span>
          </Fragment>
        }
        card2Content={
          <Fragment>
            <span className="about-text31 thq-body-small">
              Our team presented groundbreaking research at the International
              Cybersecurity Conference, showcasing our expertise.
            </span>
          </Fragment>
        }
        card2Heading={
          <Fragment>
            <span className="about-text32 thq-heading-3">
              Distributed Network Analysis Lab
            </span>
          </Fragment>
        }
        card3Content={
          <Fragment>
            <span className="about-text33 thq-body-small">
              We reached a significant milestone of having over 10,000 members
              in our cybersecurity community.
            </span>
          </Fragment>
        }
        card3Heading={
          <Fragment>
            <span className="about-text34 thq-heading-3">
              Columbia Engineering Deans Office
            </span>
          </Fragment>
        }
        card4Content={
          <Fragment>
            <span className="about-text35 thq-body-small">
              Introducing a specialized course focusing on advanced networking
              concepts and technologies.
            </span>
          </Fragment>
        }
        card4Heading={
          <Fragment>
            <span className="about-text36 thq-heading-3">
              Omphalos Lifesciences Inc
            </span>
          </Fragment>
        }
        card1Content1={
          <Fragment>
            <span className="about-text37 thq-body-small">
              The Cybersecurity Training Program was officially launched,
              offering courses on various aspects of cybersecurity.
            </span>
          </Fragment>
        }
        card1Content2={
          <Fragment>
            <span className="about-text38 sub-header thq-body-small">
              Research Assistant
            </span>
          </Fragment>
        }
        card4Content1={
          <Fragment>
            <span className="about-text39 thq-body-small">
              Introducing a specialized course focusing on advanced networking
              concepts and technologies.
            </span>
          </Fragment>
        }
        card4Heading1={
          <Fragment>
            <span className="about-text40 thq-heading-3">ClaraLabs</span>
          </Fragment>
        }
        card1Content21={
          <Fragment>
            <span className="about-text41 sub-header thq-body-small">
              <span>Program Assistant</span>
              <br></br>
            </span>
          </Fragment>
        }
        card1Content211={
          <Fragment>
            <span className="about-text44 sub-header thq-body-small">
              <span>Business Director</span>
              <br></br>
            </span>
          </Fragment>
        }
        card1Content212={
          <Fragment>
            <span className="about-text47 sub-header thq-body-small">
              <span>Program Assistant</span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Timeline4>
      <Stats3
        stat1={
          <Fragment>
            <span className="about-text50 thq-heading-2">99%</span>
          </Fragment>
        }
        stat2={
          <Fragment>
            <span className="about-text51 thq-heading-2">44%</span>
          </Fragment>
        }
        stat3={
          <Fragment>
            <span className="about-text52 thq-heading-2">99%</span>
          </Fragment>
        }
        stat4={
          <Fragment>
            <span className="about-text53 thq-heading-2">44%</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text54 thq-body-small">
              Our results in numbers
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text55 thq-heading-2">
              Business value of teleportHQ
            </span>
          </Fragment>
        }
        stat1Description={
          <Fragment>
            <span className="about-text56 thq-body-small">
              Customer satisfaction
            </span>
          </Fragment>
        }
        stat2Description={
          <Fragment>
            <span className="about-text57 thq-body-small">Active users</span>
          </Fragment>
        }
        stat3Description={
          <Fragment>
            <span className="about-text58 thq-body-small">
              Customer satisfaction
            </span>
          </Fragment>
        }
        stat4Description={
          <Fragment>
            <span className="about-text59 thq-body-small">Active users</span>
          </Fragment>
        }
      ></Stats3>
      <Logos2
        heading1={
          <Fragment>
            <span className="about-text60 thq-heading-2">Our Partners</span>
          </Fragment>
        }
      ></Logos2>
      <Testimonial6
        review1={
          <Fragment>
            <span className="about-text61 thq-body-large">
              I have greatly benefited from the training provided on this
              platform. The content is top-notch and the instructors are highly
              knowledgeable.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="about-text62 thq-body-large">
              Being a member of this community has opened up new opportunities
              for me in the field of cybersecurity. I highly recommend it to
              anyone looking to advance their career.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="about-text63 thq-body-large">
              Attending the events organized by this platform has been a
              game-changer for me. The insights gained have been invaluable for
              enhancing our organization&apos;s security measures.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="about-text64 thq-body-large">
              The blog posts here are always up-to-date with the latest trends
              and threats in cybersecurity. It&apos;s my go-to resource for
              staying informed.
            </span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="about-text65 thq-body-small">John Smith</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="about-text66 thq-body-small">Emily Johnson</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="about-text67 thq-body-small">Michael Lee</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="about-text68 thq-body-small">Sarah Adams</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="about-text69 thq-body-small">
              Cybersecurity Analyst
            </span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="about-text70 thq-body-small">
              Network Engineer
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="about-text71 thq-body-small">IT Manager</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="about-text72 thq-body-small">
              Security Researcher
            </span>
          </Fragment>
        }
      ></Testimonial6>
      <Team7
        member1={
          <Fragment>
            <span className="about-text73 thq-body-small">John Doe</span>
          </Fragment>
        }
        member2={
          <Fragment>
            <span className="about-text74 thq-body-small">Jane Smith</span>
          </Fragment>
        }
        member3={
          <Fragment>
            <span className="about-text75 thq-body-small">Alex Johnson</span>
          </Fragment>
        }
        member4={
          <Fragment>
            <span className="about-text76 thq-body-small">Emily Brown</span>
          </Fragment>
        }
        member5={
          <Fragment>
            <span className="about-text77 thq-body-small">Michael Lee</span>
          </Fragment>
        }
        member6={
          <Fragment>
            <span className="about-text78 thq-body-small">Sarah Wilson</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text79 thq-body-small">
              Join our team and make a difference in your career!
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-text80 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="about-text83 thq-body-small">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text86 thq-heading-2">Meet our team</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="about-text87 thq-heading-2">We’re hiring!</span>
          </Fragment>
        }
        member1Job={
          <Fragment>
            <span className="about-text88 thq-body-small">
              Cybersecurity Specialist
            </span>
          </Fragment>
        }
        member2Job={
          <Fragment>
            <span className="about-text89 thq-body-small">
              Network Security Analyst
            </span>
          </Fragment>
        }
        member3Job={
          <Fragment>
            <span className="about-text90 thq-body-small">Ethical Hacker</span>
          </Fragment>
        }
        member4Job={
          <Fragment>
            <span className="about-text91 thq-body-small">
              Security Researcher
            </span>
          </Fragment>
        }
        member5Job={
          <Fragment>
            <span className="about-text92 thq-body-small">
              Cybersecurity Consultant
            </span>
          </Fragment>
        }
        member6Job={
          <Fragment>
            <span className="about-text93 thq-body-small">
              Incident Response Manager
            </span>
          </Fragment>
        }
        actionContent={
          <Fragment>
            <span className="about-text94 thq-body-small">Open positions</span>
          </Fragment>
        }
        member1Content={
          <Fragment>
            <span className="about-text95 thq-body-small">
              John is a certified cybersecurity professional with over 10 years
              of experience in the field.
            </span>
          </Fragment>
        }
        member2Content={
          <Fragment>
            <span className="about-text96 thq-body-small">
              Jane has a strong background in network security and has worked on
              various projects securing computer networks.
            </span>
          </Fragment>
        }
        member3Content={
          <Fragment>
            <span className="about-text97 thq-body-small">
              Alex is a skilled ethical hacker who has conducted penetration
              testing for multiple organizations.
            </span>
          </Fragment>
        }
        member4Content={
          <Fragment>
            <span className="about-text98 thq-body-small">
              Emily&apos;s research focuses on emerging threats in cybersecurity
              and developing innovative solutions.
            </span>
          </Fragment>
        }
        member5Content={
          <Fragment>
            <span className="about-text99 thq-body-small">
              Michael provides expert consultancy services to businesses to
              enhance their cybersecurity posture.
            </span>
          </Fragment>
        }
        member6Content={
          <Fragment>
            <span className="about-text100 thq-body-small">
              Sarah leads incident response teams to effectively handle and
              mitigate cybersecurity incidents.
            </span>
          </Fragment>
        }
      ></Team7>
      <Footer></Footer>
    </div>
  )
}

export default About
