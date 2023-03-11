import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form as FormikForm,
    Field,
    FieldProps,
    useFormikContext,
} from "formik";
import selectOptions from "models/selectOptions";

function GraphOptions({ ...props }) {

    // const { values } = useFormikContext();

    const typeOptions = props.typeOptions.map(
        (option: selectOptions, index: number) => (
            <option key={index} value={option.value}>
                {option.label}
            </option>
        )
    );

    return (
        <>
            <fieldset data-testid="graph-options-fieldset">
                <legend>Graph options</legend>
                <Field as="select" name="graphType" id="graphType" data-testid="graphType">
                    {typeOptions}
                </Field>
                <label htmlFor="color">Color</label>
                <Field type="color" name="color" id="color" />
            </fieldset>
        </>
    );
}

export default GraphOptions;
