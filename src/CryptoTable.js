import * as React from 'react'
import { Avatar, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar } from "@mui/material"

const CryptoTable = (props) => {
    const { crypto } = props

    return (
        <div>
            <Toolbar />
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Image</b></TableCell>
                            <TableCell><b>Name</b></TableCell>
                            <TableCell><b>Symbol</b></TableCell>
                            <TableCell><b>Current price</b></TableCell>
                            <TableCell><b>Daily percentage change</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {crypto.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Avatar alt={item.id} src={item.image} sx={{ width: 24, height: 24 }}/>
                                </TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.symbol}</TableCell>
                                <TableCell>{item.current_price}</TableCell>
                                <TableCell>{item.price_change_percentage_24h}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CryptoTable
