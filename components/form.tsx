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

    const fieldsetStyles = "p-1 mt-2";
    const legendStyles = "text-center text-sky-800 text-lg font-medium";
    const radioContainerStyles = "flex flex-row justify-center gap-2 text-md";
    const dateInputsStyles = "flex flex-col justify-center items-center";

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
            <option key={index} value={option.value} className="whitespace-nowrap overflow-hidden overflow-ellipsis w-full">
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
        <div className="p-5 w-full md:max-w-md bg-slate-200 rounded-lg">
            <h1 className="text-xl font-semibold text-center text-sky-900">{props.formTitle}</h1>
            <p data-testid="form-description" className="text-center mb-4">{props.description}</p>

            <Formik
                initialValues={formInitialValues}
                onSubmit={(values) => {
                    props.submitHandle(values);
                }}
            >
                <FormikForm data-testid="form">
                    <label htmlFor="title" className="hidden">Title</label>
                    <Field type="text" name="title" id="title" placeholder="Title" className="w-full p-2" />
                    <fieldset data-testid="language-fieldset" className={fieldsetStyles}>
                        <legend className={legendStyles}>Language</legend>
                        <div className={radioContainerStyles}>
                            <Field type="radio" name="language" id="english" value="english" onClick={() => setCurrentLanguage("english")} />
                            <label htmlFor="english">English</label>
                            <Field type="radio" name="language" id="spanish" value="spanish" onClick={() => setCurrentLanguage("spanish")} />
                            <label htmlFor="spanish">Spanish</label>
                        </div>
                    </fieldset>
                    <label htmlFor="series" className="text-lg text-sky-900 font-medium text-center w-full block">Choose a data series</label>
                    <Field
                        as="select"
                        name="series"
                        id="series"
                        data-testid="series-select"
                        className="overflow-hidden overflow-ellipsis w-full block p-2"
                    >
                        {seriesOptions}
                    </Field>
                    <div className="mt-3 flex flex-row justify-center text-center gap-2">
                        <div className={dateInputsStyles}>
                            <label htmlFor="initDate">Initial date</label>
                            <Field type="date" name="initDate" id="initDate" className="p-2" />
                        </div>
                        <div className={dateInputsStyles}>
                            <label htmlFor="endDate">End date</label>
                            <Field type="date" name="endDate" id="endDate" className="p-2" />
                        </div>
                    </div>

                    <fieldset data-testid="visualization-fieldset" className={fieldsetStyles}>
                        <legend className={legendStyles}>Choose type of visualization</legend>
                        <div className={radioContainerStyles}>
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
                        </div>
                    </fieldset>
                    {extraOptions}
                    <div className="text-center m-1 p-1">

                        <Button
                            clickHandle={props.clickHandle}
                            testId="cancel-btn"
                            btnType="button"
                        ><div className="py-2 px-3 bg-red-800 text-lg text-white font-medium hover:bg-red-900 rounded-md mx-2 min-w-[100px]">
                                Cancel
                            </div>
                        </Button>
                        {props.data ? (
                            <Button testId="save-btn" btnType="submit">
                                <div className="py-2 px-3 bg-sky-800 text-lg text-white font-medium hover:bg-sky-900 rounded-md mx-2 min-w-[100px]">
                                    Save
                                </div>
                            </Button>
                        ) : (
                            <Button testId="generate-btn" btnType="submit">
                                <div className="py-2 px-3 bg-sky-800 text-lg text-white font-medium hover:bg-sky-900 rounded-md mx-2 min-w-[100px]">

                                    Generate
                                </div>
                            </Button>
                        )}
                    </div>
                </FormikForm>
            </Formik>
        </div>
    );
}

export default Form;
