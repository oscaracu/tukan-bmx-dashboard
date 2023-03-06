function GraphOptions({ ...props }) {
    return (<>
        <fieldset data-testid="graph-options-fieldset">
            <legend>Graph options</legend>
        </fieldset>
        <select name="graph-options" id="graph-options" data-testid="graph-options"></select>
        <label htmlFor="color">Color</label><input type="color" name="color" id="color" />
    </>);
}

export default GraphOptions;