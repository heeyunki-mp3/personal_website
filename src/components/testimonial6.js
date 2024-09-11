import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial6.css'

const Testimonial6 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial6-max-width thq-section-max-width">
        <div
          data-thq="slider"
          data-loop="true"
          data-autoplay="true"
          data-navigation="true"
          data-pagination="true"
          className="testimonial6-slider1 swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide1 swiper-slide"
            >
              <div className="testimonial6-card1">
                <img
                  alt={props.company1LogoAlt}
                  src={props.company1LogoSrc}
                  className="testimonial6-logo1"
                />
                <p>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial6-text42 thq-body-large">
                        I have greatly benefited from the training provided on
                        this platform. The content is top-notch and the
                        instructors are highly knowledgeable.
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="testimonial6-avatar1">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial6-avatar-image1 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content1">
                    <span>
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial6-text44 thq-body-small">
                            John Smith
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial6-text43 thq-body-small">
                            Cybersecurity Analyst
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial6-card2">
                <img
                  alt={props.company2LogoAlt}
                  src={props.company2LogoSrc}
                  className="testimonial6-logo2"
                />
                <p>
                  {props.review2 ?? (
                    <Fragment>
                      <p className="testimonial6-text40 thq-body-large">
                        Being a member of this community has opened up new
                        opportunities for me in the field of cybersecurity. I
                        highly recommend it to anyone looking to advance their
                        career.
                      </p>
                    </Fragment>
                  )}
                </p>
                <div className="testimonial6-avatar2">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial6-avatar-image2 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content2">
                    <span>
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial6-text49 thq-body-small">
                            Emily Johnson
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial6-text51 thq-body-small">
                            Network Engineer
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide2 swiper-slide"
            >
              <div className="testimonial6-card3">
                <img
                  alt={props.company3LogoAlt}
                  src={props.company3LogoSrc}
                  className="testimonial6-logo3"
                />
                <p>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial6-text46 thq-body-large">
                        Attending the events organized by this platform has been
                        a game-changer for me. The insights gained have been
                        invaluable for enhancing our organization&apos;s
                        security measures.
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="testimonial6-avatar3">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial6-avatar-image3 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content3">
                    <span>
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial6-text50 thq-body-small">
                            Michael Lee
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial6-text41 thq-body-small">
                            IT Manager
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="testimonial6-card4">
                <img
                  alt={props.company4LogoAlt}
                  src={props.company4LogoSrc}
                  className="testimonial6-logo4"
                />
                <p>
                  {props.review4 ?? (
                    <Fragment>
                      <p className="testimonial6-text45 thq-body-large">
                        The blog posts here are always up-to-date with the
                        latest trends and threats in cybersecurity. It&apos;s my
                        go-to resource for staying informed.
                      </p>
                    </Fragment>
                  )}
                </p>
                <div className="testimonial6-avatar4">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial6-avatar-image4 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content4">
                    <span>
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial6-text48 thq-body-small">
                            Sarah Adams
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial6-text47 thq-body-small">
                            Security Researcher
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="testimonial6-slider-pagination1 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
        <div
          data-thq="slider"
          data-loop="true"
          data-autoplay="true"
          data-navigation="true"
          data-pagination="true"
          className="testimonial6-slider2 swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide3 swiper-slide"
            >
              <div className="testimonial6-card5">
                <img
                  alt={props.company1LogoAlt}
                  src={props.company1LogoSrc}
                  className="testimonial6-logo5"
                />
                <span>
                  Choose from our variety of pricing plans, including Basic,
                  Business, and Enterprise subscriptions, each offering a range
                  of features. Start today!
                </span>
                <div className="testimonial6-avatar5">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial6-avatar-image5 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content5">
                    <span>
                      <span>Author Name</span>
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial6-text44 thq-body-small">
                            John Smith
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>Position, Company name</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide4 swiper-slide"
            >
              <div className="testimonial6-card6">
                <img
                  alt={props.company2LogoAlt}
                  src={props.company2LogoSrc}
                  className="testimonial6-logo6"
                />
                <span>
                  Choose from our variety of pricing plans, including Basic,
                  Business, and Enterprise subscriptions, each offering a range
                  of features. Start today!
                </span>
                <div className="testimonial6-avatar6">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial6-avatar-image6 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content6">
                    <span>
                      <span>Author Name</span>
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial6-text49 thq-body-small">
                            Emily Johnson
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>Position, Company name</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide5 swiper-slide"
            >
              <div className="testimonial6-card7">
                <img
                  alt={props.company3LogoAlt}
                  src={props.company3LogoSrc}
                  className="testimonial6-logo7"
                />
                <span>
                  Choose from our variety of pricing plans, including Basic,
                  Business, and Enterprise subscriptions, each offering a range
                  of features. Start today!
                </span>
                <div className="testimonial6-avatar7">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial6-avatar-image7 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content7">
                    <span>
                      <span>Author Name</span>
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial6-text50 thq-body-small">
                            Michael Lee
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      <span>Position, Company name</span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial6-text41 thq-body-small">
                            IT Manager
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonial6-slider-slide6 swiper-slide"
            >
              <div className="testimonial6-card8">
                <img
                  alt={props.company4LogoAlt}
                  src={props.company4LogoSrc}
                  className="testimonial6-logo8"
                />
                <span>
                  Choose from our variety of pricing plans, including Basic,
                  Business, and Enterprise subscriptions, each offering a range
                  of features. Start today!
                </span>
                <div className="testimonial6-avatar8">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial6-avatar-image8 thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial6-avatar-content8">
                    <span>
                      <span>Author Name</span>
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial6-text48 thq-body-small">
                            Sarah Adams
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      <span>Position, Company name</span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial6-text47 thq-body-small">
                            Security Researcher
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="testimonial6-slider-pagination2 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
      </div>
    </div>
  )
}

Testimonial6.defaultProps = {
  author4Src:
    'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTk4MTY1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  company3LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  review2: undefined,
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author3Alt: 'Michael Lee Image',
  company1LogoAlt: 'Company Logo',
  company2LogoAlt: 'Company Logo',
  author3Position: undefined,
  author4Alt: 'Sarah Adams Image',
  author2Alt: 'Emily Johnson Image',
  author2Src:
    'https://images.unsplash.com/photo-1504346466600-714572c4b726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTk4MTY1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  review1: undefined,
  author1Position: undefined,
  author1Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1636041282694-aa4e52370419?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTk4MTY1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1488820098099-8d4a4723a490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTk4MTY1NHw&ixlib=rb-4.0.3&q=80&w=1080',
  review4: undefined,
  company2LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  company4LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  review3: undefined,
  company4LogoAlt: 'Company Logo',
  author4Position: undefined,
  author4Name: undefined,
  author2Name: undefined,
  company3LogoAlt: 'Company Logo',
  author3Name: undefined,
  author2Position: undefined,
  author1Alt: 'John Smith Image',
}

Testimonial6.propTypes = {
  author4Src: PropTypes.string,
  company3LogoSrc: PropTypes.string,
  review2: PropTypes.element,
  company1LogoSrc: PropTypes.string,
  author3Alt: PropTypes.string,
  company1LogoAlt: PropTypes.string,
  company2LogoAlt: PropTypes.string,
  author3Position: PropTypes.element,
  author4Alt: PropTypes.string,
  author2Alt: PropTypes.string,
  author2Src: PropTypes.string,
  review1: PropTypes.element,
  author1Position: PropTypes.element,
  author1Name: PropTypes.element,
  author1Src: PropTypes.string,
  author3Src: PropTypes.string,
  review4: PropTypes.element,
  company2LogoSrc: PropTypes.string,
  company4LogoSrc: PropTypes.string,
  review3: PropTypes.element,
  company4LogoAlt: PropTypes.string,
  author4Position: PropTypes.element,
  author4Name: PropTypes.element,
  author2Name: PropTypes.element,
  company3LogoAlt: PropTypes.string,
  author3Name: PropTypes.element,
  author2Position: PropTypes.element,
  author1Alt: PropTypes.string,
}

export default Testimonial6
