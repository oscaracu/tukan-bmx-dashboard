function Form({...props}) {

    interface selectOptions {
        value: string;
        label: string;
    }

    const seriesOptions = props.seriesOptions.map((option: selectOptions, index: number)=><option key={index} value={option.value}>{option.label}</option>);

    return ( 
    <>
    <h1>{props.formTitle}</h1>
    <p data-testid="form-description">{props.description}</p>
    <form data-testid="form">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <fieldset data-testid="language-fieldset">
        <legend>Language</legend>
        <input type="radio" name="language" id="english" value="english" /><label htmlFor="english">english</label><input type="radio" name="language" id="spanish" value="spanish" /><label htmlFor="spanish">spanish</label>
        </fieldset>
        <label htmlFor="series">Choose a data series</label>
        <select name="series" id="series">
            {seriesOptions}
        </select>
    </form>
    </>
     );
}

export default Form;