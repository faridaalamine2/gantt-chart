/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateEndDate, formatDate } from "../../utilities/utilityFunctions";
import { addTask, editTask } from "../../redux/tasksSlice";
import Input from "./Input";
import useTaskValidation from "../../hooks/useTaskValidation";
import { openDialog } from "../../redux/dialogSlice";
const inputs = [
    { name: "title", label: "Title", type: "text" },
    { name: "startDate", label: "Start date", type: "date" },
    { name: "endDate", label: "End date", type: "date", disabled: true },
    { name: "duration", label: "Duration", type: "number" },
    { name: "color", label: "Color", className: "color-input", type: "color" },
];

function TaskForm({ closeDialog, data, projectId }) {
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState(() => {
        return data ? data : generateDefaultValues();
    });
    const [validationMessages, validate] = useTaskValidation();

    const checkErrors = () => {
        const messages = Object.values(validationMessages);
        for (let i = 0; i < messages.length; i++) {
            if (messages[i]) {
                return true;
            }
        }
        return false;
    };

    const handleDelete = () => {
        dispatch(openDialog({ action: "confirm", data: { taskId: data?.id } }));
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkErrors()) return;
        if (!data) dispatch(addTask({ ...formValues, projectId }));
        else dispatch(editTask({ ...formValues, projectId }));
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
        <form className="new-task-form" onSubmit={handleSubmit}>
            <div className="inputs">
                {renderInputs}
                {data && (
                    <div className="delete-button" onClick={handleDelete}>
                        delete this task
                    </div>
                )}
            </div>
            <div className="buttons">
                <button className="save">Save</button>
                <div className="cancel" onClick={closeDialog}>
                    cancel
                </div>
            </div>
        </form>
    );
}

function generateDefaultValues() {
    const today = new Date();
    const endDate = calculateEndDate(today, 1);
    return {
        title: "task",
        startDate: formatDate(today),
        endDate: formatDate(endDate),
        duration: 1,
        color: "#8812ff",
    };
}
export default TaskForm;
