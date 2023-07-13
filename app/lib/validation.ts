interface ValidateFormProps {
    name: string;
    value: string;
    setError: (val: string) => void;
    error: string;
}

const regex = {
    email: /^[^\d\$%@\*\(\)\-\#\!\^\_][\w]+@[a-z-A-Z]{3,10}\.[a-zA-Z]{2,5}(\.[a-zA-Z]{2,5})?$/ig,
    text: /^[\w]+$/ig
}

export function validateForm({ name, value, setError, error }: ValidateFormProps) {
    if(name === "email" && !regex.email.exec(value) && (!value.includes("@") || !value.includes(".")))
        setError(error);
    else if(name !== "email" && !regex.text.exec(value) && !value)
        setError(error);
    else
        setError("");
}