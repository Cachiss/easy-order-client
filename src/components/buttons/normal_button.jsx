const Button = ({content='', background = '', textColor, ...props}) => {
  
  return (
    <button type="button" style={{"backgroundColor": {background}, "borderRadius": "50px", "color": textColor, "textTransform": "initial", "fontFamily": ""}}>
      {content}
    </button>
  )
}

export default Button