import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero7.css'

const Hero7 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="hero7-max-width thq-section-max-width">
        <div className="hero7-content">
          <h1>
            {props.heading1 ?? (
              <Fragment>
                <h1 className="hero7-text4 thq-heading-1">
                  Empowering Companies Through Cybersecurity Solutions
                </h1>
              </Fragment>
            )}
          </h1>
          <p>
            {props.content1 ?? (
              <Fragment>
                <p className="hero7-text3 thq-body-large">
                  Welcome to our professional organization dedicated to
                  providing high-impact business services in cybersecurity,
                  computer networks, and research. We are here to help companies
                  tackle security challenges and thrive in the digital world.
                </p>
              </Fragment>
            )}
          </p>
          <div className="hero7-actions">
            <div className="hero7-container1"></div>
            <div className="hero7-container2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero7.defaultProps = {
  content1: undefined,
  heading1: undefined,
}

Hero7.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Hero7
