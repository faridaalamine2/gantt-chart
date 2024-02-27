import { calculateEndDate, formatDate } from "../../utilities/utilityFunctions";

function Input({ inputInfo, formValues, handleFormChange, validationMessage }) {
    const { name, label, type, className, disabled } = inputInfo;

    const handleEndDateChange = (startDate, duration) => {
        const endDate = calculateEndDate(startDate, duration);
        return formatDate(endDate);
    };
    const handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        let endDate;
        if (name === "startDate") {
            const startDate = new Date(value);
            const duration = Number(formValues.duration);
            endDate = handleEndDateChange(startDate, duration);
        } else if (name === "duration") {
            const duration = Number(value);
            if (duration < 0) return;
            const startDate = new Date(formValues.startDate);
            endDate = handleEndDateChange(startDate, duration);
        }
        handleFormChange(name, value, endDate);
    };
    return (
        <div className="input-container">
            <label htmlFor={name}>{label}</label>
            <div className="input">
                <input
                    type={type}
                    className={className}
                    id={name}
                    disabled={disabled}
                    value={formValues[name]}
                    onChange={handleChange}
                />
                <div className="error-message">{validationMessage}</div>
            </div>
        </div>
    );
}

export default Input;
