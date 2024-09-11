import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './team7.css'

const Team7 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="team7-max-width thq-section-max-width">
        <div className="team7-section-title">
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="team7-text46 thq-body-small">
                  Join our team and make a difference in your career!
                </span>
              </Fragment>
            )}
          </span>
          <div className="team7-content10">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="team7-text41 thq-heading-2">Meet our team</h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content2 ?? (
                <Fragment>
                  <p className="team7-text49 thq-body-large">
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
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="team7-content11">
          <div className="team7-card1">
            <img
              alt={props.member1Alt}
              src={props.member1Src}
              className="team7-placeholder-image1 thq-img-ratio-1-1 thq-img-round"
            />
            <div className="team7-content12">
              <div className="team7-title1">
                <span>
                  {props.member1 ?? (
                    <Fragment>
                      <span className="team7-text35 thq-body-small">
                        John Doe
                      </span>
                    </Fragment>
                  )}
                </span>
                <span>
                  {props.member1Job ?? (
                    <Fragment>
                      <span className="team7-text34 thq-body-small">
                        Cybersecurity Specialist
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <span>
                {props.member1Content ?? (
                  <Fragment>
                    <span className="team7-text58 thq-body-small">
                      John is a certified cybersecurity professional with over
                      10 years of experience in the field.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="team7-social-icons1">
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
          <div className="team7-card2">
            <img
              alt={props.member2Alt}
              src={props.member2Src}
              className="team7-placeholder-image2 thq-img-ratio-1-1 thq-img-round"
            />
            <div className="team7-content13">
              <div className="team7-title2">
                <span>
                  {props.member2 ?? (
                    <Fragment>
                      <span className="team7-text54 thq-body-small">
                        Jane Smith
                      </span>
                    </Fragment>
                  )}
                </span>
                <span>
                  {props.member2Job ?? (
                    <Fragment>
                      <span className="team7-text40 thq-body-small">
                        Network Security Analyst
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <span>
                {props.member2Content ?? (
                  <Fragment>
                    <span className="team7-text47 thq-body-small">
                      Jane has a strong background in network security and has
                      worked on various projects securing computer networks.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="team7-social-icons2">
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
          <div className="team7-card3">
            <img
              alt={props.member3Alt}
              src={props.member3Src}
              className="team7-placeholder-image3 thq-img-ratio-1-1 thq-img-round"
            />
            <div className="team7-content14">
              <div className="team7-title3">
                <span>
                  {props.member3 ?? (
                    <Fragment>
                      <span className="team7-text39 thq-body-small">
                        Alex Johnson
                      </span>
                    </Fragment>
                  )}
                </span>
                <span>
                  {props.member3Job ?? (
                    <Fragment>
                      <span className="team7-text57 thq-body-small">
                        Ethical Hacker
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <span>
                {props.member3Content ?? (
                  <Fragment>
                    <span className="team7-text44 thq-body-small">
                      Alex is a skilled ethical hacker who has conducted
                      penetration testing for multiple organizations.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="team7-social-icons3">
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
          <div className="team7-card4">
            <img
              alt={props.member4Alt}
              src={props.member4Src}
              className="team7-placeholder-image4 thq-img-ratio-1-1 thq-img-round"
            />
            <div className="team7-content15">
              <div className="team7-title4">
                <span>
                  {props.member4 ?? (
                    <Fragment>
                      <span className="team7-text48 thq-body-small">
                        Emily Brown
                      </span>
                    </Fragment>
                  )}
                </span>
                <span>
                  {props.member4Job ?? (
                    <Fragment>
                      <span className="team7-text42 thq-body-small">
                        Security Researcher
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <span>
                {props.member4Content ?? (
                  <Fragment>
                    <span className="team7-text56 thq-body-small">
                      Emily&apos;s research focuses on emerging threats in
                      cybersecurity and developing innovative solutions.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="team7-social-icons4">
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
          <div className="team7-card5">
            <img
              alt={props.member5Alt}
              src={props.member5Src}
              className="team7-placeholder-image5 thq-img-ratio-1-1 thq-img-round"
            />
            <div className="team7-content16">
              <div className="team7-title5">
                <span>
                  {props.member5 ?? (
                    <Fragment>
                      <span className="team7-text55 thq-body-small">
                        Michael Lee
                      </span>
                    </Fragment>
                  )}
                </span>
                <span>
                  {props.member5Job ?? (
                    <Fragment>
                      <span className="team7-text61 thq-body-small">
                        Cybersecurity Consultant
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <span>
                {props.member5Content ?? (
                  <Fragment>
                    <span className="team7-text43 thq-body-small">
                      Michael provides expert consultancy services to businesses
                      to enhance their cybersecurity posture.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="team7-social-icons5">
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
          <div className="team7-card6">
            <img
              alt={props.member6Alt}
              src={props.member6Src}
              className="team7-placeholder-image6 thq-img-ratio-1-1 thq-img-round"
            />
            <div className="team7-content17">
              <div className="team7-title6">
                <span>
                  {props.member6 ?? (
                    <Fragment>
                      <span className="team7-text45 thq-body-small">
                        Sarah Wilson
                      </span>
                    </Fragment>
                  )}
                </span>
                <span>
                  {props.member6Job ?? (
                    <Fragment>
                      <span className="team7-text53 thq-body-small">
                        Incident Response Manager
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <span>
                {props.member6Content ?? (
                  <Fragment>
                    <span className="team7-text59 thq-body-small">
                      Sarah leads incident response teams to effectively handle
                      and mitigate cybersecurity incidents.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="team7-social-icons6">
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
        <div className="team7-content18">
          <div className="team7-content19">
            <h2>
              {props.heading2 ?? (
                <Fragment>
                  <h2 className="team7-text60 thq-heading-2">We’re hiring!</h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.content3 ?? (
                <Fragment>
                  <span className="team7-text36 thq-body-small">
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
              )}
            </span>
          </div>
          <button className="team7-button thq-button-filled">
            <span>
              {props.actionContent ?? (
                <Fragment>
                  <span className="team7-text52 thq-body-small">
                    Open positions
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Team7.defaultProps = {
  member1Job: undefined,
  member3Src:
    'https://images.unsplash.com/photo-1678594143074-d56c55d7e166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTk4MTY1NHw&ixlib=rb-4.0.3&q=80&w=1080',
  member4Alt: 'Emily Brown - Security Researcher',
  member1: undefined,
  content3: undefined,
  member3: undefined,
  member2Job: undefined,
  heading1: undefined,
  member2Alt: 'Jane Smith - Network Security Analyst',
  member4Job: undefined,
  member5Content: undefined,
  member4Src:
    'https://images.unsplash.com/photo-1622446555437-bd11e97ae93f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTk4MTY1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  member3Content: undefined,
  member6: undefined,
  member1Src:
    'https://images.unsplash.com/photo-1518518873111-6ca469aa4560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTk4MTY1NHw&ixlib=rb-4.0.3&q=80&w=1080',
  member1Alt: 'John Doe - Cybersecurity Specialist',
  content1: undefined,
  member2Content: undefined,
  member6Src:
    'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTk4MTY1NHw&ixlib=rb-4.0.3&q=80&w=1080',
  member4: undefined,
  content2: undefined,
  actionContent: undefined,
  member5Src:
    'https://images.unsplash.com/photo-1622314873267-d44e38cdd652?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTk4MTY1NHw&ixlib=rb-4.0.3&q=80&w=1080',
  member3Alt: 'Alex Johnson - Ethical Hacker',
  member6Job: undefined,
  member2Src:
    'https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTk4MTY1NHw&ixlib=rb-4.0.3&q=80&w=1080',
  member2: undefined,
  member5Alt: 'Michael Lee - Cybersecurity Consultant',
  member5: undefined,
  member4Content: undefined,
  member3Job: undefined,
  member1Content: undefined,
  member6Content: undefined,
  heading2: undefined,
  member6Alt: 'Sarah Wilson - Incident Response Manager',
  member5Job: undefined,
}

Team7.propTypes = {
  member1Job: PropTypes.element,
  member3Src: PropTypes.string,
  member4Alt: PropTypes.string,
  member1: PropTypes.element,
  content3: PropTypes.element,
  member3: PropTypes.element,
  member2Job: PropTypes.element,
  heading1: PropTypes.element,
  member2Alt: PropTypes.string,
  member4Job: PropTypes.element,
  member5Content: PropTypes.element,
  member4Src: PropTypes.string,
  member3Content: PropTypes.element,
  member6: PropTypes.element,
  member1Src: PropTypes.string,
  member1Alt: PropTypes.string,
  content1: PropTypes.element,
  member2Content: PropTypes.element,
  member6Src: PropTypes.string,
  member4: PropTypes.element,
  content2: PropTypes.element,
  actionContent: PropTypes.element,
  member5Src: PropTypes.string,
  member3Alt: PropTypes.string,
  member6Job: PropTypes.element,
  member2Src: PropTypes.string,
  member2: PropTypes.element,
  member5Alt: PropTypes.string,
  member5: PropTypes.element,
  member4Content: PropTypes.element,
  member3Job: PropTypes.element,
  member1Content: PropTypes.element,
  member6Content: PropTypes.element,
  heading2: PropTypes.element,
  member6Alt: PropTypes.string,
  member5Job: PropTypes.element,
}

export default Team7
