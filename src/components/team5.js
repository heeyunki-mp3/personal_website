import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './team5.css'

const Team5 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="team5-max-width thq-section-max-width">
        <div className="team5-section-title">
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="team5-text32 thq-body-small">
                  Join Our Team Today!
                </span>
              </Fragment>
            )}
          </span>
          <button className="team5-button thq-button-filled">
            <span>
              {props.actionContent ?? (
                <Fragment>
                  <span className="team5-text38 thq-body-small">
                    Open positions
                  </span>
                </Fragment>
              )}
            </span>
          </button>
          <div className="team5-content1">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="team5-text27 thq-heading-2">Meet our team</h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content2 ?? (
                <Fragment>
                  <p className="team5-text31 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="team5-content2">
          <div className="team5-row1">
            <div className="team5-container1">
              <div className="team5-card1">
                <img
                  alt={props.member1Alt}
                  src={props.member1Src}
                  className="team5-placeholder-image1 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="team5-content3">
                  <div className="team5-title1">
                    <span>
                      {props.member1 ?? (
                        <Fragment>
                          <span className="team5-text33 thq-body-small">
                            John Doe
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.member1Job ?? (
                        <Fragment>
                          <span className="team5-text37 thq-body-small">
                            Founder &amp; CEO
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span>
                    {props.member1Content ?? (
                      <Fragment>
                        <span className="team5-text29 thq-body-small">
                          John is a cybersecurity expert with over 10 years of
                          experience in the industry. He founded the company
                          with a vision to help businesses secure their networks
                          and data.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team5-social-icons1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
              <div className="team5-card2">
                <img
                  alt={props.member2Alt}
                  src={props.member2Src}
                  className="team5-placeholder-image2 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="team5-content4">
                  <div className="team5-title2">
                    <span>
                      {props.member2 ?? (
                        <Fragment>
                          <span className="team5-text30 thq-body-small">
                            Jane Smith
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.member2Job ?? (
                        <Fragment>
                          <span className="team5-text35 thq-body-small">
                            Head of Research
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span>
                    {props.member2Content ?? (
                      <Fragment>
                        <span className="team5-text40 thq-body-small">
                          Jane leads our research team, constantly staying ahead
                          of the latest cybersecurity threats and trends to
                          provide cutting-edge solutions for our clients.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team5-social-icons2">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="team5-row2">
            <div className="team5-container2">
              <div className="team5-card3">
                <img
                  alt={props.member3Alt}
                  src={props.member3Src}
                  className="team5-placeholder-image3 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="team5-content5">
                  <div className="team5-title3">
                    <span>
                      {props.member3 ?? (
                        <Fragment>
                          <span className="team5-text41 thq-body-small">
                            Michael Johnson
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.member3Job ?? (
                        <Fragment>
                          <span className="team5-text26 thq-body-small">
                            Network Security Specialist
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span>
                    {props.member3Content ?? (
                      <Fragment>
                        <span className="team5-text36 thq-body-small">
                          Michael is our go-to expert for all things related to
                          network security. With a background in IT, he ensures
                          that our clients&apos; networks are always protected.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team5-social-icons3">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
              <div className="team5-card4">
                <img
                  alt={props.member4Alt}
                  src={props.member4Src}
                  className="team5-placeholder-image4 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="team5-content6">
                  <div className="team5-title4">
                    <span>
                      {props.member4 ?? (
                        <Fragment>
                          <span className="team5-text28 thq-body-small">
                            Emily Brown
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <span>
                      {props.member4Job ?? (
                        <Fragment>
                          <span className="team5-text34 thq-body-small">
                            Events Coordinator
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span>
                    {props.member4Content ?? (
                      <Fragment>
                        <span className="team5-text39 thq-body-small">
                          Emily handles all our events and training sessions,
                          ensuring that everything runs smoothly and that our
                          clients have a valuable experience.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team5-social-icons4">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Team5.defaultProps = {
  member3Job: undefined,
  member3Alt: 'Image of Michael Johnson',
  heading1: undefined,
  member4Alt: 'Image of Emily Brown',
  member4: undefined,
  member4Src:
    'https://images.unsplash.com/photo-1679841797862-cecd64c53970?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDI1NTUzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  member1Alt: 'Image of John Doe',
  member3Src:
    'https://images.unsplash.com/photo-1619165915846-43d3b9445823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDI1NTUzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  member1Content: undefined,
  member2: undefined,
  content2: undefined,
  content1: undefined,
  member1: undefined,
  member2Src:
    'https://images.unsplash.com/photo-1525337132786-5828a43893af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDI1NTUzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  member4Job: undefined,
  member2Job: undefined,
  member1Src:
    'https://images.unsplash.com/photo-1711898387141-6131231e3dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDI1NTUzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  member3Content: undefined,
  member2Alt: 'Image of Jane Smith',
  member1Job: undefined,
  actionContent: undefined,
  member4Content: undefined,
  member2Content: undefined,
  member3: undefined,
}

Team5.propTypes = {
  member3Job: PropTypes.element,
  member3Alt: PropTypes.string,
  heading1: PropTypes.element,
  member4Alt: PropTypes.string,
  member4: PropTypes.element,
  member4Src: PropTypes.string,
  member1Alt: PropTypes.string,
  member3Src: PropTypes.string,
  member1Content: PropTypes.element,
  member2: PropTypes.element,
  content2: PropTypes.element,
  content1: PropTypes.element,
  member1: PropTypes.element,
  member2Src: PropTypes.string,
  member4Job: PropTypes.element,
  member2Job: PropTypes.element,
  member1Src: PropTypes.string,
  member3Content: PropTypes.element,
  member2Alt: PropTypes.string,
  member1Job: PropTypes.element,
  actionContent: PropTypes.element,
  member4Content: PropTypes.element,
  member2Content: PropTypes.element,
  member3: PropTypes.element,
}

export default Team5
