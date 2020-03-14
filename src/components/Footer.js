import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; <b>Social Media: <a href="https://www.linkedin.com/in/enzocoglitore/">LinkedIn</a>. <a href="https://www.twitter.com/coglitore_enzo">twitter.</a> </b><a href="https://www.instagram.com/enzocog"><b>Instagram.</b></a> </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
