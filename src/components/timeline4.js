import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './timeline4.css'

const Timeline4 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="timeline4-max-width thq-section-max-width">
        <div className="timeline4-container11">
          <h2>
            {props.title1 ?? (
              <Fragment>
                <h2 className="timeline4-text34 thq-heading-2">
                  Work Experience
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="timeline4-text52 thq-body-small">
                  Some experiences in my interests
                </span>
              </Fragment>
            )}
          </span>
          <div className="timeline4-container12"></div>
        </div>
        <div className="timeline4-timeline-container">
          <div className="timeline4-step1">
            <div className="timeline4-container13">
              <div className="timeline4-container14"></div>
              <div className="timeline4-progress01"></div>
            </div>
            <div className="timeline4-container15">
              <h3>
                {props.date1 ?? (
                  <Fragment>
                    <h3 className="timeline4-text33 thq-heading-3">
                      January 2024 - Current
                    </h3>
                  </Fragment>
                )}
              </h3>
              <h3>
                {props.card1Heading ?? (
                  <Fragment>
                    <h3 className="timeline4-text36 thq-heading-3">
                      Internet Real Time Lab
                    </h3>
                  </Fragment>
                )}
              </h3>
              <span>
                {props.card1Content ?? (
                  <Fragment>
                    <span className="timeline4-text44 sub-header thq-body-small">
                      Research Assistant
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.card1Content1 ?? (
                  <Fragment>
                    <span className="timeline4-text45 thq-body-small">
                      The Cybersecurity Training Program was officially
                      launched, offering courses on various aspects of
                      cybersecurity.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="timeline4-container16"></div>
            </div>
          </div>
          <div className="timeline4-step2">
            <div className="timeline4-container17">
              <div className="timeline4-container18"></div>
              <div className="timeline4-progress02"></div>
            </div>
            <div className="timeline4-container19">
              <h3>
                {props.date2 ?? (
                  <Fragment>
                    <h3 className="timeline4-text38 thq-heading-3">
                      June 2023 - Current
                    </h3>
                  </Fragment>
                )}
              </h3>
              <h3>
                {props.card2Heading ?? (
                  <Fragment>
                    <h3 className="timeline4-text39 thq-heading-3">
                      Distributed Network Analysis Lab
                    </h3>
                  </Fragment>
                )}
              </h3>
              <span>
                {props.card1Content2 ?? (
                  <Fragment>
                    <span className="timeline4-text49 sub-header thq-body-small">
                      Research Assistant
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.card2Content ?? (
                  <Fragment>
                    <span className="timeline4-text43 thq-body-small">
                      Our team presented groundbreaking research at the
                      International Cybersecurity Conference, showcasing our
                      expertise.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="timeline4-container20"></div>
            </div>
          </div>
          <div className="timeline4-step3">
            <div className="timeline4-container21">
              <div className="timeline4-container22"></div>
              <div className="timeline4-progress03"></div>
            </div>
            <div className="timeline4-container23">
              <h3>
                {props.date3 ?? (
                  <Fragment>
                    <h3 className="timeline4-text32 thq-heading-3">
                      September 2022 - May 2024
                    </h3>
                  </Fragment>
                )}
              </h3>
              <h3>
                {props.card3Heading ?? (
                  <Fragment>
                    <h3 className="timeline4-text54 thq-heading-3">
                      Columbia Engineering Deans Office
                    </h3>
                  </Fragment>
                )}
              </h3>
              <span>
                {props.card1Content21 ?? (
                  <Fragment>
                    <span className="timeline4-text40 sub-header thq-body-small">
                      <span>Program Assistant</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.card3Content ?? (
                  <Fragment>
                    <span className="timeline4-text51 thq-body-small">
                      We reached a significant milestone of having over 10,000
                      members in our cybersecurity community.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="timeline4-container24"></div>
            </div>
          </div>
          <div className="timeline4-step41">
            <div className="timeline4-container25">
              <div className="timeline4-container26"></div>
              <div className="timeline4-progress04"></div>
            </div>
            <div className="timeline4-container27">
              <h3>
                {props.date4 ?? (
                  <Fragment>
                    <h3 className="timeline4-text37 thq-heading-3">
                      July 2023 – September 2023
                    </h3>
                  </Fragment>
                )}
              </h3>
              <h3>
                {props.card4Heading ?? (
                  <Fragment>
                    <h3 className="timeline4-text53 thq-heading-3">
                      Omphalos Lifesciences Inc
                    </h3>
                  </Fragment>
                )}
              </h3>
              <span>
                {props.card1Content211 ?? (
                  <Fragment>
                    <span className="timeline4-text57 sub-header thq-body-small">
                      <span>Business Director</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.card4Content ?? (
                  <Fragment>
                    <span className="timeline4-text35 thq-body-small">
                      Introducing a specialized course focusing on advanced
                      networking concepts and technologies.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="timeline4-container28"></div>
            </div>
          </div>
          <div className="timeline4-step42">
            <div className="timeline4-container29">
              <div className="timeline4-container30"></div>
              <div className="timeline4-progress05"></div>
            </div>
            <div className="timeline4-container31">
              <h3>
                {props.date41 ?? (
                  <Fragment>
                    <h3 className="timeline4-text55 thq-heading-3">
                      March 2022 – March 2023
                    </h3>
                  </Fragment>
                )}
              </h3>
              <h3>
                {props.card4Heading1 ?? (
                  <Fragment>
                    <h3 className="timeline4-text56 thq-heading-3">
                      ClaraLabs
                    </h3>
                  </Fragment>
                )}
              </h3>
              <span>
                {props.card1Content212 ?? (
                  <Fragment>
                    <span className="timeline4-text46 sub-header thq-body-small">
                      <span>Program Assistant</span>
                      <br></br>
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.card4Content1 ?? (
                  <Fragment>
                    <span className="timeline4-text50 thq-body-small">
                      Introducing a specialized course focusing on advanced
                      networking concepts and technologies.
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="timeline4-container32"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Timeline4.defaultProps = {
  date3: undefined,
  date1: undefined,
  title1: undefined,
  card4Content: undefined,
  card1Heading: undefined,
  date4: undefined,
  date2: undefined,
  card2Heading: undefined,
  card1Content21: undefined,
  card2Content: undefined,
  card1Content: undefined,
  card1Content1: undefined,
  card1Content212: undefined,
  card1Content2: undefined,
  card4Content1: undefined,
  card3Content: undefined,
  content1: undefined,
  card4Heading: undefined,
  card3Heading: undefined,
  date41: undefined,
  card4Heading1: undefined,
  card1Content211: undefined,
}

Timeline4.propTypes = {
  date3: PropTypes.element,
  date1: PropTypes.element,
  title1: PropTypes.element,
  card4Content: PropTypes.element,
  card1Heading: PropTypes.element,
  date4: PropTypes.element,
  date2: PropTypes.element,
  card2Heading: PropTypes.element,
  card1Content21: PropTypes.element,
  card2Content: PropTypes.element,
  card1Content: PropTypes.element,
  card1Content1: PropTypes.element,
  card1Content212: PropTypes.element,
  card1Content2: PropTypes.element,
  card4Content1: PropTypes.element,
  card3Content: PropTypes.element,
  content1: PropTypes.element,
  card4Heading: PropTypes.element,
  card3Heading: PropTypes.element,
  date41: PropTypes.element,
  card4Heading1: PropTypes.element,
  card1Content211: PropTypes.element,
}

export default Timeline4
