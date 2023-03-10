import selectOptions from "models/selectOptions";

function TableOptions({ ...props }) {

    const formatOptions = props.formatOptions.map((option: selectOptions, index: number) => <option key={index} value={option.value}>{option.label}</option>);

    return (<>
        <fieldset data-testid="table-options-fieldset">
            <legend>Table options</legend>
            <label htmlFor="decimals">Decimals</label><input type="number" name="decimals" id="decimals" />
            <label htmlFor="dateFormat">Date format</label><select name="dateFormat" id="dateFormat" data-testid="dateFormat">
                {formatOptions}
            </select>
        </fieldset></>);
}

export default TableOptions;