import PropTypes from 'prop-types' /// impt
function Header({text, bgColor, textColor}) { /// rfce
    // const backGroundColor = 'red';
    // const fontColor = 'blue';
    // const headerStyle = {backgroundColor : backGroundColor, color:fontColor};
  return (
        <header style={{textAlign: 'center', backgroundColor : bgColor, color:textColor}}>
            <div className='container'>
            <h1>{text}</h1>
            </div>
        </header>
  )
}
Header.defaultProps = {
    text : 'Default Header',
    bgColor : 'rgba(0,0,0,0.4)',
    textColor : '#fffc52',
}
Header.prototype = {
    text : PropTypes.string,
}
export default Header
