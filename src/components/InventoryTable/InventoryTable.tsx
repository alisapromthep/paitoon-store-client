import productData from '../../data/productData.json';
import {Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';


const InventoryTable = () => {
    const tableHeading:string[] = ["id", "code", "type", "product name", "brand", "package", "size", "min" , "max", "active"]; 

    return (
        <>
            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox">
                    </TableCell>
                    {
                        tableHeading.map((heading,i)=> (
                            <TableCell
                            key={i}
                            >
                                {heading}
                            </TableCell>
                        ))
                    }
                </TableRow>
            </TableHead>
        </>
    )
}

export default InventoryTable;