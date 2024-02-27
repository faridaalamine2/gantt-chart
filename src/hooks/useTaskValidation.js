import { useState } from "react";
import { useSelector } from "react-redux";

const requiredList = ["title", "duration"];
const messages = {
    required: "Required!",
    outOfProject: "out of project limit!",
};
const useTaskValidation = () => {
    const project = useSelector((state) => state.currentProject.project);
    const projectStartDate = new Date(project.startDate);
    const projectEndDate = new Date(project.endDate);
    const [validationMessages, setValidationMessages] = useState({
        title: "",
        dates: "",
    });
    function getValidationMessage(name, value) {
        if (requiredList.includes(name) && (value === "" || value == 0))
            return messages.required;
        else if (name === "startDate" && new Date(value) < projectStartDate)
            return messages.outOfProject;
        else if (name === "endDate" && new Date(value) > projectEndDate)
            return messages.outOfProject;
        return "";
    }
    function validate(name, value) {
        const validationMessage = getValidationMessage(name, value);
        setValidationMessages((prev) => ({
            ...prev,
            [name]: validationMessage,
        }));
    }
    return [validationMessages, validate];
};

export default useTaskValidation;
