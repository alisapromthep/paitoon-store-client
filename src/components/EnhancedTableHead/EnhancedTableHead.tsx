
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';


const EnhancedTableHead = () => {
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

export default EnhancedTableHead;