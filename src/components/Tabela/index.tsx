import { Paper, Table, TableCell, TableHead, TableRow, TableBody } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";

function Tabela() {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="tabela-customizada">
                    <TableHead>
                        <TableRow>
                            <TableCell>Data</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component = "th" scope="row">22/03/2023</TableCell>
                            <TableCell>20:30</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Tabela;