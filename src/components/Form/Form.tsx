import {Box, TextField} from '@mui/material';


interface FormProps{
    fields: {label: string; name: string;} []; 
    handleChange: (event: React.ChangeEvent<HTMLInputElement>)=>void;
}

const Form: React.FC<FormProps> = ({fields, handleChange}) => {
    return (
        <Box>
            {
                fields.map((field,i)=>(
                    <TextField
                    key={i}
                    label={field.label}
                    name={field.name}
                    onChange={handleChange}
                    />
                ))
            }
        </Box>
    )
}

export default Form