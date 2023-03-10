import selectOptions from "models/selectOptions";
import { useState } from "react";
import Button from "./button";
import GraphOptions from "./graphOptions";
import TableOptions from "./tableOptions";
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form as FormikForm,
    Field,
    FieldProps,
} from 'formik';

interface FormValues {
    title: string;
    language: string;
    series: string;
    visualizationType: string;
    initDate: string;
    endDate: string;
    decimals: number;
    dateFormat: string;
    grapType: string;
    color: string;

}


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
        props.submitHandle({ seriesTitle: "Title Example 1", data: "Series Data 2" });
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
                    <input type="radio" name="language" id="english" value="english" defaultChecked /><label htmlFor="english">English</label><input type="radio" name="language" id="spanish" value="spanish" /><label htmlFor="spanish">Spanish</label>
                </fieldset>
                <label htmlFor="series">Choose a data series</label>
                <select name="series" id="series" data-testid="series-select">
                    {seriesOptions}
                </select>
                <fieldset data-testid="visualization-fieldset">
                    <legend>Choose type of visualization</legend>
                    <input type="radio" name="visualizationType" id="table" value="table" defaultChecked onClick={() => setVisualizationType(0)} /><label htmlFor="table">Table</label><input type="radio" name="visualizationType" id="graph" value="graph" onClick={() => setVisualizationType(1)} /><label htmlFor="graph">Graph</label>
                </fieldset>
                <label htmlFor="initDate">Initial date</label><input type="date" name="initDate" id="initDate" />
                <label htmlFor="endDate">End date</label><input type="date" name="endDate" id="endDate" />
                {extraOptions}
                <Button clickHandle={props.clickHandle} text="Cancel" testId="cancel-btn" btnType="button" />
                <Button text="Generate" testId="generate-btn" btnType="submit" />


            </form>
        </>
    );
}

export default Form;