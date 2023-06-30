import { Container, Typography, Button } from "@mui/material";
import {DateField} from '@mui/x-date-pickers';
import { useState } from 'react';
import Heading from "../../components/Heading/Heading";
import Form from '../../components/Form/Form';
import PurchaseForm from '../../components/PurchaseForm/PurchaseForm';


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

    
    const [currProduct, setCurrProduct] = useState<ProductInfo>(product);
    const [allProducts, setAllProducts] = useState<ProductInfo[]>([])
    const [inputFields, setInputFields] = useState([[fields]])
    const [toggle, setToggle] = useState(false);

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log(currProduct,'currproduct');
        setAllProducts(prev => ({
            ...prev,
            currProduct
        }))
        console.log(allProducts);
    }

    const handleChange = (index:number, event:{ target: HTMLInputElement}) =>{
        const {name, value} = event.target;
        const data = [...inputFields];  
        data[index][name] = value;
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
                <DateField label='date'
                onChange={() => handleChange}
                format='YYYY-MM-DD'
                />
                {/* <Button>
                    <Typography>Add New</Typography>
                </Button> */}
                <PurchaseForm
                handleChange={(index: number,event)=>handleChange(index,event)}/>
                <Button onClick={handleAdd}>
                    <Typography> + Add</Typography>
                </Button>
                <Button
                type='submit'
                >Submit</Button>
            </form>
        </Container>
    )
}

export default PurchaseFormPage