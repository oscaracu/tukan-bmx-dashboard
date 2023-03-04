function Form({...props}) {
    return ( 
    <>
    <h1>{props.formTitle}</h1>
    <p data-testid="form-description">{props.description}</p>
    <form data-testid="form">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
    </form>
    </>
     );
}

export default Form;