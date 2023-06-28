import { Container, Typography, TextField, Button } from "@mui/material";
import { useState } from 'react';
import Heading from "../../components/Heading/Heading";
import Form from '../../components/Form/Form';

interface ProductInfo {
    date: string;
    productName: string;
    supplier: string;
    invoice: string;
    order: string;
    bonus: number;
    discount: number;
    netPrice: number;
    unitPrice: number;
    paymentMethod: string;
    paid: boolean;
}


const PurchaseFormPage: React.FC = () => {

    const product:ProductInfo = {
            date: '',
            productName: '',
            supplier: '',
            invoice: '',
            order: '',
            bonus: 0,
            discount: 0,
            netPrice: 0,
            unitPrice: 0,
            paymentMethod: '',
            paid: false,
        };

        const fields = [
            {label: 'date',
            name:'date'
            },
            {label: 'product name',
            name:'productName'
            },
            {label: 'supplier',
            name:'supplier'
            },
            {label: 'invoice',
            name:'invoice'},
            {label: 'order',
            name:'order'},
            {label: 'bonus',
            name:'bonus'},
            {label: 'discount',
            name:'discount'},
            {label: 'unit price',
            name:'unitPrice'
            },
            {label: 'net price',
            name:'netPrice'
            },
            {label: 'payment method',
            name:'paymentMethod'},
            {label: 'paid',
            name:'paid'},
        ]
    
    const [currProduct, setCurrProduct] = useState<ProductInfo>(product);
    const [allProducts, setAllProducts] = useState<ProductInfo[]>([])
    const [inputFields, setInputFields] = useState([[fields]])

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
    }

    const handleChange = (event:{ target: HTMLInputElement}) =>{
        const {name, value} = event.target;
        setCurrProduct((prev)=>({
            ...prev,
            [name]: value
    }));
    };

    const handleAdd = (event:React.SyntheticEvent) => {
        event.preventDefault();
        setAllProducts(prev => ({
            ...prev,
            currProduct
        }))

        setInputFields( prev => [...prev, [fields]])
    };

    console.log(inputFields)


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

                {inputFields.map((_input, i) => (
                    <Form
                    key={i}
                    fields = {fields}
                    handleChange = {handleChange}
                    />
                ))}
                <Button onClick={handleAdd}>
                    <Typography> + Add</Typography>
                </Button>
            </form>
        </Container>
    )
}

export default PurchaseFormPage