import PropTypes from 'prop-types'

function Button({children, version, isDisabled, type}) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version : 'primary',
    type : 'button',
    isDisabled : false,
}

Button.propTypes = {
    version : PropTypes.string,
    type : PropTypes.string.isRequired,
    isDisabled : PropTypes.bool.isRequired,
    children : PropTypes.node.isRequired,
}
export default Button