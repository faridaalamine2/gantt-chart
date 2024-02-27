/* eslint-disable react/prop-types */
import { useState } from "react";
import { calculateEndDate, formatDate } from "../../utilities/utilityFunctions";
import { useDispatch } from "react-redux";
import {
    addProject,
    deleteProject,
    editProject,
} from "../../redux/projectsSlice";
import Input from "./Input";
import useProjectValidation from "../../hooks/useProjectValidation";
import { openDialog } from "../../redux/dialogSlice";

const inputs = [
    { name: "title", label: "Title", type: "text" },
    { name: "startDate", label: "Start date", type: "date" },
    { name: "endDate", label: "End date", type: "date", disabled: true },
    { name: "duration", label: "Duration", type: "number" },
];

function ProjectForm({ closeDialog, data }) {
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState(() => {
        return data ? data : generateDefaultValues();
    });
    const [validationMessages, validate] = useProjectValidation();

    const checkErrors = () => {
        const messages = Object.values(validationMessages);
        for (let i = 0; i < messages.length; i++) {
            if (messages[i]) {
                return true;
            }
        }
        return false;
    };
    const handleFormChange = (name, value, endDate) => {
        validate(name, value);
        if (endDate) validate("endDate", endDate);
        setFormValues((prev) => {
            const newValues = { ...prev, [name]: value };
            if (endDate) newValues.endDate = endDate;
            return newValues;
        });
    };

    const handleDelete = () => {
        dispatch(
            openDialog({ action: "confirm", data: { projectId: data?.id } })
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkErrors()) return;
        if (!data) dispatch(addProject(formValues));
        else dispatch(editProject(formValues));
        closeDialog();
    };
    const renderInputs = inputs.map((input, i) => {
        return (
            <Input
                inputInfo={input}
                formValues={formValues}
                validationMessage={validationMessages[input.name]}
                handleFormChange={handleFormChange}
                key={i}
            />
        );
    });
    return (
        <form className="new-project-form" onSubmit={handleSubmit}>
            <div className="inputs">
                {renderInputs}
                {data && (
                    <div className="delete-button" onClick={handleDelete}>
                        delete this project
                    </div>
                )}
            </div>
            <div className="buttons">
                <button className="save" disabled={checkErrors()}>
                    Save
                </button>
                <div className="cancel" onClick={closeDialog}>
                    cancel
                </div>
            </div>
        </form>
    );
}

function generateDefaultValues() {
    const today = new Date();
    const duration = 62;
    const endDate = calculateEndDate(today, duration);

    return {
        title: "project",
        startDate: formatDate(today),
        endDate: formatDate(endDate),
        duration,
    };
}
export default ProjectForm;
