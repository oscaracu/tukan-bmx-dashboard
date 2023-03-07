import selectOptions from "models/selectOptions";
import { useState } from "react";
import GraphOptions from "./graphOptions";
import TableOptions from "./tableOptions";

function Form({ ...props }) {

    const [visualizationType, setVisualizationType] = useState(0);

    const seriesOptions = props.seriesOptions.map((option: selectOptions, index: number) => <option key={index} value={option.value}>{option.label}</option>);

    let extraOptions;

    // Temporary props for extraOptions

    const tempProps = {
        typeOptions: [
            { value: "type1", label: "Graph type 1" },
            { value: "type2", label: "Graph type 2" },
            { value: "type3", label: "Graph type 3" }
        ],
        formatOptions: [
            { value: "fotmat1", label: "Format 1" },
            { value: "fotmat2", label: "Format 2" },
            { value: "fotmat3", label: "Format 3" }
        ]
    }

    if (visualizationType === 0) {
        extraOptions = <TableOptions formatOptions={tempProps.formatOptions} />
    } else {
        extraOptions = <GraphOptions typeOptions={tempProps.typeOptions} />
    }

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
                    <input type="radio" name="visualization-type" id="table" value="table" defaultChecked onClick={() => setVisualizationType(0)} /><label htmlFor="table">Table</label><input type="radio" name="visualization-type" id="graph" value="graph" onClick={() => setVisualizationType(1)} /><label htmlFor="graph">Graph</label>
                </fieldset>
                <label htmlFor="init-date">Initial date</label><input type="date" name="init-date" id="init-date" />
                <label htmlFor="end-date">End date</label><input type="date" name="end-date" id="end-date" />
                {extraOptions}

            </form>
        </>
    );
}

export default Form;