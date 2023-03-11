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
} from "formik";
import { FormValues } from "../models/FormValues";
import uniqid from "uniqid";

function Form({ ...props }) {

    const firstOption = props.seriesOptions[0] ? props.seriesOptions[0].value : "";

    const formInitialValues: FormValues = props.data
        ? props.data
        : {
            id: uniqid(),
            title: "",
            language: "english",
            series: firstOption,
            visualizationType: "table",
            initDate: "",
            endDate: "",
            decimals: 0,
            dateFormat: "",
            graphType: "",
            color: "#27ae60",
        };

    const [visualizationType, setVisualizationType] = useState(
        formInitialValues.visualizationType
    );
    const [currentLanguage, setCurrentLanguage] = useState(
        formInitialValues.language
    );

    const seriesOptions = props.seriesOptions.map(
        (option: selectOptions, index: number) => (
            <option key={index} value={option.value}>
                {currentLanguage === "english" ? option.label : option.label_es}
            </option>
        )
    );

    let extraOptions;

    if (visualizationType === "table") {
        extraOptions = <TableOptions formatOptions={props.formatOptions} />;
    } else {
        extraOptions = <GraphOptions typeOptions={props.typeOptions} />;
    }

    return (
        <>
            <h1>{props.formTitle}</h1>
            <p data-testid="form-description">{props.description}</p>

            <Formik
                initialValues={formInitialValues}
                onSubmit={(values) => {
                    props.submitHandle(values);
                }}
            >
                <FormikForm data-testid="form">
                    <label htmlFor="title">Title</label>
                    <Field type="text" name="title" id="title" />
                    <fieldset data-testid="language-fieldset">
                        <legend>Language</legend>
                        <Field type="radio" name="language" id="english" value="english" onClick={() => setCurrentLanguage("english")} />
                        <label htmlFor="english">English</label>
                        <Field type="radio" name="language" id="spanish" value="spanish" onClick={() => setCurrentLanguage("spanish")} />
                        <label htmlFor="spanish">Spanish</label>
                    </fieldset>
                    <label htmlFor="series">Choose a data series</label>
                    <Field
                        as="select"
                        name="series"
                        id="series"
                        data-testid="series-select"
                    >
                        {seriesOptions}
                    </Field>
                    <fieldset data-testid="visualization-fieldset">
                        <legend>Choose type of visualization</legend>
                        <Field
                            type="radio"
                            name="visualizationType"
                            id="table"
                            value="table"
                            onClick={() => setVisualizationType("table")}
                        />
                        <label htmlFor="table">Table</label>
                        <Field
                            type="radio"
                            name="visualizationType"
                            id="graph"
                            value="graph"
                            onClick={() => setVisualizationType("graph")}
                        />
                        <label htmlFor="graph">Graph</label>
                    </fieldset>
                    <label htmlFor="initDate">Initial date</label>
                    <Field type="date" name="initDate" id="initDate" />
                    <label htmlFor="endDate">End date</label>
                    <Field type="date" name="endDate" id="endDate" />
                    {extraOptions}
                    <Button
                        clickHandle={props.clickHandle}
                        text="Cancel"
                        testId="cancel-btn"
                        btnType="button"
                    />
                    {props.data ? (
                        <Button text="Save" testId="save-btn" btnType="submit" />
                    ) : (
                        <Button text="Generate" testId="generate-btn" btnType="submit" />
                    )}
                </FormikForm>
            </Formik>
        </>
    );
}

export default Form;
