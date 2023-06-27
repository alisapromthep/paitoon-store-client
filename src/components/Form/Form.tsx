import {Box, TextField} from '@mui/material';


interface FormProps{
    fields: {label: string; name: string;} []; 
}

const Form: React.FC<FormProps> = ({fields}) => {
    return (
        <Box>
            {
                fields.map((field,i)=>(
                    <TextField
                    key={i}
                    label={field.label}
                    name={field.name}
                    />
                ))
            }
        </Box>
    )
}

export default Form