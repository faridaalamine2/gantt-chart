import { useState } from "react";
const requiredList = ["title", "duration"];
const messages = {
    required: "Required!",
    tooTight: "Project too tight!",
    inPast: "Project can't be in the past!",
};
const useProjectValidation = () => {
    const [validationMessages, setValidationMessages] = useState({
        title: "",
        endDate: "",
        duration: "",
    });
    function getValidationMessage(name, value) {
        if (requiredList.includes(name) && (value === "" || value == 0))
            return messages.required;
        else if (name === "duration" && Number(value) <= 60)
            return messages.tooTight;
        else if (name === "endDate") {
            const today = new Date();
            const endDate = new Date(value);
            if (endDate <= today) return messages.inPast;
        }
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
export default useProjectValidation;
