import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  return (
    <header className = 'header'>
        <h1>{title}</h1>
        <Button color='green' text='Add'/>
    </header>
  )
}

//defaut props
Header.defaultProps = {
    title: 'Hello'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header