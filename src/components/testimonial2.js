import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial2.css'

const Testimonial2 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial2-max-width thq-section-max-width">
        <div className="testimonial2-stars">
          <svg viewBox="0 0 1024 1024" className="thq-icon-small">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="thq-icon-small">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="thq-icon-small">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="thq-icon-small">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="thq-icon-small">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
        </div>
        <p>
          {props.review1 ?? (
            <Fragment>
              <p className="testimonial2-text4 thq-body-large">
                We have been working with this team for years and their
                expertise in cybersecurity has been invaluable to our
                company&apos;s success.
              </p>
            </Fragment>
          )}
        </p>
        <div className="testimonial2-avatar">
          <img
            alt={props.author1Alt}
            src={props.author1Src}
            className="testimonial2-avatar-image thq-img-ratio-1-1 thq-img-round"
          />
          <div className="testimonial2-avatar-content">
            <span>
              {props.author1Name ?? (
                <Fragment>
                  <span className="testimonial2-text6 thq-body-small">
                    John Smith
                  </span>
                </Fragment>
              )}
            </span>
            <span>
              {props.author1Position ?? (
                <Fragment>
                  <span className="testimonial2-text5 thq-body-small">
                    CEO of Tech Solutions Inc.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <img
            alt={props.company1LogoAlt}
            src={props.company1LogoSrc}
            className="testimonial2-logo"
          />
        </div>
      </div>
    </div>
  )
}

Testimonial2.defaultProps = {
  review1: undefined,
  author1Position: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDI1NTUzN3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'John Smith - CEO of Tech Solutions Inc.',
  company1LogoAlt: 'Tech Solutions Inc. logo',
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author1Name: undefined,
}

Testimonial2.propTypes = {
  review1: PropTypes.element,
  author1Position: PropTypes.element,
  author1Src: PropTypes.string,
  author1Alt: PropTypes.string,
  company1LogoAlt: PropTypes.string,
  company1LogoSrc: PropTypes.string,
  author1Name: PropTypes.element,
}

export default Testimonial2
