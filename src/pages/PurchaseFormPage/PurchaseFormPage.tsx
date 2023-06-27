import { Container, Typography, TextField, Button } from "@mui/material";
import Heading from "../../components/Heading/Heading";
import Form from '../../components/Form/Form';


const PurchaseFormPage = () => {

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

    }

    const fields = [
        {label: 'date',
        name:'date'
        },
        {label: 'product name',
        name:'productName'
        },
        {label: 'quantity',
        name:'quantity'
        },
        {label: 'unit price',
        name:'unitPrice'
        },
        {label: 'total price',
        name:'totalPrice'
        }
    ]


    return (
        <Container
        sx={{
            marginTop: '6rem',
        }}
        >
            <Heading title='Purchase Form'/>
            <form onSubmit={handleSubmit}>
                {/* <Button>
                    <Typography>Add New</Typography>
                </Button> */}
                <Form
                fields={fields}
                />
                <Button>
                    <Typography> + Add</Typography>
                </Button>


            </form>
        </Container>
    )
}

export default PurchaseFormPage