import Form from '../Form/Form';

interface PurchaseFormProp{
    handleChange: (event: React.ChangeEvent<HTMLInputElement>)=>void;
}


const PurchaseForm:React.FC<PurchaseFormProp> = ({handleChange}) => {

    const fields = [
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
    return (
        <>
            {fields.map((_input, i) => (
                <Form
                key={i}
                fields = {fields}
                handleChange = {handleChange}
                />
            ))}
        </>
    )
}

export default PurchaseForm