import PropTypes from 'prop-types'

const Button = ({color,text}) => {

  const onclick = () => {
    console.log('Clicked')
  }

  return <button
    onClick={onclick} 
    style = {{backgroundColor: color }} 
    className = 'btn'>{text}
  </button>
}

Button.deafaultProps = {    
    color: 'steelblue',
}

Button.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Button