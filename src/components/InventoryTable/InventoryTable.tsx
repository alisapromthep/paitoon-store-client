import {Box, Paper,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import EnhancedTableHead from '../EnhancedTableHead/EnhancedTableHead';
import productData from '../../data/productData.json';


const InventoryTable = () => {


    return (
        <Box>
            <Paper>
                <EnhancedTableHead/>
                <TableBody>
                    {productData.map((product,i)=>{
                        return(
                            <TableRow key={i}>
                                <TableCell> {i} </TableCell>
                                <TableCell> {product.id} </TableCell>
                                <TableCell> {product.code} </TableCell>
                                <TableCell> {product.type} </TableCell>
                                <TableCell> {product.product} </TableCell>
                                <TableCell> {product.brand} </TableCell>
                                <TableCell> {product.package} </TableCell>
                                <TableCell> {product.size} </TableCell>
                                <TableCell> {product.minprice} </TableCell>
                                <TableCell> {product.maxprice} </TableCell>
                                <TableCell> {product.active ? "Y":"N"} </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Paper>
        </Box>
        
    )
}

export default InventoryTable;