function Button({...props}) {
    return ( 
    <>
    <button onClick={props.clickHandle}>{props.text}</button>
    </>
     );
}

export default Button;