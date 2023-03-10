import selectOptions from "models/selectOptions";

function GraphOptions({ ...props }) {

    const typeOptions = props.typeOptions.map((option: selectOptions, index: number) => <option key={index} value={option.value}>{option.label}</option>);

    return (<>
        <fieldset data-testid="graph-options-fieldset">
            <legend>Graph options</legend>
            <select name="graphType" id="graphType" data-testid="graphType">
                {typeOptions}
            </select>
            <label htmlFor="color">Color</label><input type="color" name="color" id="color" />
        </fieldset>
    </>);
}

export default GraphOptions;