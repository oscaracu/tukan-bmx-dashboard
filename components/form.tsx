import selectOptions from "models/selectOptions";

function Form({ ...props }) {


    const seriesOptions = props.seriesOptions.map((option: selectOptions, index: number) => <option key={index} value={option.value}>{option.label}</option>);

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
                <fieldset data-testid="visualization-fieldset">
                    <legend>Choose type of visualization</legend>
                    <input type="radio" name="visualization-type" id="table" value="table" /><label htmlFor="table">Table</label><input type="radio" name="visualization-type" id="graph" value="graph" /><label htmlFor="graph">Graph</label>
                </fieldset>
                <label htmlFor="init-date">Initial date</label><input type="date" name="init-date" id="init-date" />
                <label htmlFor="end-date">End date</label><input type="date" name="end-date" id="end-date" />


            </form>
        </>
    );
}

export default Form;