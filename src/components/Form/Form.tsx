
interface FormProps{
    fields: {label: string; name: string; type: string} [];
    onSubmit: (data: Record<string, string>) => void; 
}

const Form = () => {
    return (
        <div>Form</div>
    )
}

export default Form