import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import { siteMetadata } from '../../../gatsby-config'

class Profile extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    const title = 'Profile'
    return (
      <div>
        <Helmet
          title={`${title} | ${get(siteMetadata, 'title')}`}
          meta={[
            { name: 'twitter:card', content: 'summary' },
            {
              name: 'twitter:site',
              content: `@${get(siteMetadata, 'twitter')}`,
            },
            { property: 'og:title', content: title },
            { property: 'og:type', content: 'website' },
            {
              property: 'og:description',
              content: get(siteMetadata, 'description'),
            },
            {
              property: 'og:url',
              content: `${get(siteMetadata, 'siteUrl')}/profile`,
            },
            {
              property: 'og:image',
              content: `${get(siteMetadata, 'siteUrl')}/img/profile.jpeg`,
            },
          ]}
        />
        <section className="text-center">
          <div className="container">
            <img
              src={pathPrefix + '/img/profile.jpeg'}
              alt="YixuanXu"
              className="rounded-circle mx-auto d-block"
              width="120px"
            />
            <h1>YixuanXu</h1>
            <div className="lead text-muted">
              <a href="#">yixuanxu94@gmail.com</a>
            </div>
          </div>
        </section>

        <section id="features" className="bg-primary text-white text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">SKIL</h2>
                <hr className="border-white" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="HTML"
                >
                  <i className="devicon-html5-plain " data-emergence="hidden" />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="CSS"
                >
                  <i className="devicon-css3-plain" data-emergence="hidden" />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="JavaScript"
                >
                  <i
                    className="devicon-javascript-plain"
                    data-emergence="hidden"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="React.js"
                >
                  <i
                    className="devicon-react-plain-wordmark"
                    data-emergence="hidden"
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Python"
                >
                  <i className="devicon-python-plain" data-emergence="hidden" />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Django"
                >
                  <i className="devicon-django-plain" data-emergence="hidden" />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="MySQL"
                >
                  <i
                    className="devicon-mysql-plain-wordmark"
                    data-emergence="hidden"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="MongoDB"
                >
                  <i
                    className="devicon-mongodb-plain-wordmark"
                    data-emergence="hidden"
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Git"
                >
                  <i className="devicon-vim-plain" data-emergence="hidden" />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Git"
                >
                  <i className="devicon-git-plain" data-emergence="hidden" />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Docker"
                >
                  <i className="devicon-docker-plain" data-emergence="hidden" />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Docker"
                >
                  <i
                    className="devicon-ubuntu-plain-wordmark"
                    data-emergence="hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">Education</h2>
                <hr className="border-primary" />
                <ul className="list-group">
                  <li className="list-group-item active ">
                    2013-2015, Xi'an Jiaotong-Liverpool University, BEng,
                    COMPUTER SCIENCE AND TECHNOLOGY
                  </li>
                  <li className="list-group-item active">
                    2015-2017, University of Liverpool, BEng, COMPUTER SCIENCE
                    AND ELECTRONIC ENGINEERING
                  </li>
                  <li className="list-group-item active">
                    2017-2018, University of Southampton, Msc, DATA SCIENCE
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-8" />
            </div>
          </div>
        </section>

        <section
          className="bg-primary text-white text-center color-inverse"
          id="concept"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">Experiences and projects</h2>
                <hr className="border-white" />
              </div>
            </div>
          </div>
          <div className="container" />
        </section>
      </div>
    )
  }
}

export default Profile
