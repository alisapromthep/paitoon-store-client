import { Container } from '@mui/material';
import Heading from '../../components/Heading/Heading';
import InventoryTable from '../../components/InventoryTable/InventoryTable';

const InventoryPage = () => {
    return (
        <Container sx={{marginTop:'6rem'}}>
            <Heading title="Inventory"/>
            <InventoryTable/>
        </Container>
    )
}

export default InventoryPage