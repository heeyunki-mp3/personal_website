import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './logos2.css'

const Logos2 = (props) => {
  return (
    <div className="logos2-container1 thq-section-padding">
      <div className="logos2-max-width thq-section-max-width">
        <h2>
          {props.heading1 ?? (
            <Fragment>
              <h2 className="logos2-text2 thq-heading-2">Our Partners</h2>
            </Fragment>
          )}
        </h2>
        <div className="thq-grid-5">
          <img
            alt={props.logo1Alt}
            src={props.logo1Src}
            className="logos2-logo1 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo2Alt}
            src={props.logo2Src}
            className="logos2-logo2 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo3Alt}
            src={props.logo3Src}
            className="logos2-logo3 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo4Alt}
            src={props.logo4Src}
            className="logos2-logo4 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo5Alt}
            src={props.logo5Src}
            className="logos2-logo5 thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Logos2.defaultProps = {
  logo2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  heading1: undefined,
  logo2Alt: 'Partner 2 Logo',
  logo5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo5Alt: 'Partner 5 Logo',
  logo4Alt: 'Partner 4 Logo',
  logo3Alt: 'Partner 3 Logo',
  logo1Alt: 'Partner 1 Logo',
  logo4Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
}

Logos2.propTypes = {
  logo2Src: PropTypes.string,
  heading1: PropTypes.element,
  logo2Alt: PropTypes.string,
  logo5Src: PropTypes.string,
  logo3Src: PropTypes.string,
  logo5Alt: PropTypes.string,
  logo4Alt: PropTypes.string,
  logo3Alt: PropTypes.string,
  logo1Alt: PropTypes.string,
  logo4Src: PropTypes.string,
  logo1Src: PropTypes.string,
}

export default Logos2
