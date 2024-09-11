import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features18.css'

const Features18 = (props) => {
  return (
    <div
      className={`features18-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features18-max-width thq-section-max-width">
        <div className="features18-content1">
          <div className="features18-section-title">
            <span>
              {props.feature1Slogan ?? (
                <Fragment>
                  <span className="features18-text6 thq-body-small">
                    Protecting Your Business
                  </span>
                </Fragment>
              )}
            </span>
            <div className="features18-content2">
              <h2>
                {props.feature1Title ?? (
                  <Fragment>
                    <h2 className="features18-text5 thq-heading-2">
                      Cybersecurity Services
                    </h2>
                  </Fragment>
                )}
              </h2>
              <p>
                {props.feature1Description ?? (
                  <Fragment>
                    <p className="features18-text4 thq-body-large">
                      Our expert team offers cutting-edge cybersecurity
                      solutions to safeguard your business from online threats
                      and data breaches.
                    </p>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="features18-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Features18.defaultProps = {
  feature1ImageAlt: 'Cybersecurity Solutions Image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1582032648806-ef2c978ca7ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDI1NTUzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description: undefined,
  rootClassName: '',
  feature1Title: undefined,
  feature1Slogan: undefined,
}

Features18.propTypes = {
  feature1ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  rootClassName: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1Slogan: PropTypes.element,
}

export default Features18
