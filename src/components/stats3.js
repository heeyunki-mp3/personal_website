import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats3.css'

const Stats3 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="stats3-max-width thq-section-max-width">
        <div className="stats3-container2">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="stats3-text20 thq-heading-2">
                  Business value of teleportHQ
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="stats3-text22 thq-body-small">
                  Our results in numbers
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="stats3-container3">
          <div className="stats3-container4">
            <h2>
              {props.stat1 ?? (
                <Fragment>
                  <h2 className="stats3-text18 thq-heading-2">99%</h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.stat1Description ?? (
                <Fragment>
                  <span className="stats3-text25 thq-body-small">
                    Customer satisfaction
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="stats3-container5">
            <h2>
              {props.stat2 ?? (
                <Fragment>
                  <h2 className="stats3-text19 thq-heading-2">44%</h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.stat2Description ?? (
                <Fragment>
                  <span className="stats3-text26 thq-body-small">
                    Active users
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="stats3-container6">
            <h2>
              {props.stat3 ?? (
                <Fragment>
                  <h2 className="stats3-text23 thq-heading-2">99%</h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.stat3Description ?? (
                <Fragment>
                  <span className="stats3-text21 thq-body-small">
                    Customer satisfaction
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="stats3-container7">
            <h2>
              {props.stat4 ?? (
                <Fragment>
                  <h2 className="stats3-text27 thq-heading-2">44%</h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.stat4Description ?? (
                <Fragment>
                  <span className="stats3-text24 thq-body-small">
                    Active users
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats3.defaultProps = {
  stat1: undefined,
  stat2: undefined,
  heading1: undefined,
  stat3Description: undefined,
  content1: undefined,
  stat3: undefined,
  stat4Description: undefined,
  stat1Description: undefined,
  stat2Description: undefined,
  stat4: undefined,
}

Stats3.propTypes = {
  stat1: PropTypes.element,
  stat2: PropTypes.element,
  heading1: PropTypes.element,
  stat3Description: PropTypes.element,
  content1: PropTypes.element,
  stat3: PropTypes.element,
  stat4Description: PropTypes.element,
  stat1Description: PropTypes.element,
  stat2Description: PropTypes.element,
  stat4: PropTypes.element,
}

export default Stats3
