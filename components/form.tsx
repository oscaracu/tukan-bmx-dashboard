import selectOptions from "models/selectOptions";
import { ReactEventHandler, useState } from "react";
import Button from "./button";
import GraphOptions from "./graphOptions";
import TableOptions from "./tableOptions";

function Form({ ...props }) {

    const [visualizationType, setVisualizationType] = useState(0);

    const seriesOptions = props.seriesOptions.map((option: selectOptions, index: number) => <option key={index} value={option.value}>{option.label}</option>);

    let extraOptions;

    if (visualizationType === 0) {
        extraOptions = <TableOptions formatOptions={props.formatOptions} />
    } else {
        extraOptions = <GraphOptions typeOptions={props.typeOptions} />
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.submitHandle();
    }

    return (
        <>
            <h1>{props.formTitle}</h1>
            <p data-testid="form-description">{props.description}</p>
            <form data-testid="form" onSubmit={handleSubmit}>
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
                    <input type="radio" name="visualization-type" id="table" value="table" defaultChecked onClick={() => setVisualizationType(0)} /><label htmlFor="table">Table</label><input type="radio" name="visualization-type" id="graph" value="graph" onClick={() => setVisualizationType(1)} /><label htmlFor="graph">Graph</label>
                </fieldset>
                <label htmlFor="init-date">Initial date</label><input type="date" name="init-date" id="init-date" />
                <label htmlFor="end-date">End date</label><input type="date" name="end-date" id="end-date" />
                {extraOptions}
                <Button clickHandle={props.clickHandle} text="Cancel" testId="cancel-btn" btnType="button" />
                <Button text="Generate" testId="generate-btn" btnType="submit" />


            </form>
        </>
    );
}

export default Form;