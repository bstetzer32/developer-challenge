import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Layout = ({ children, data }) => (
    <div>

    </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`