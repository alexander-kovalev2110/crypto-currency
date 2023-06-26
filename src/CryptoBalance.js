import * as React from 'react'
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import DialogContent from "@mui/material/DialogContent"
import TextField from "@mui/material/TextField"
import DialogActions from "@mui/material/DialogActions"
import Button from "@mui/material/Button"
import Web3 from "web3"

//let infura_project_id = 'e9d73543aef54a9fa358d7f7ac526198'        // just an example for testing

const CryptoBalance = (props) => {
    const { open, closeDialog, openAlert } = props

    const balanceWeb3 = (projectId, address) => {
        // Create a web3 instance connected to the Goerli testnet
        const web3 = new Web3(`https://goerli.infura.io/v3/${projectId}`)

        // Reading the balance of an Ethereum address:
        web3.eth.getBalance(address)
            .then(balance => {
                console.log('Balance:', web3.utils.fromWei(balance, 'ether'), 'ETH')
                openAlert(`Ethereum balance of ${address}: ${web3.utils.fromWei(balance, 'ether')} ETH`, "success")
            })
            .catch(error => {
                console.error('Error:', error)
                openAlert("Error getting Ethereum balance", "error")
            })

        closeDialog()           // close Dialog window
    }

    return (
        <Dialog open={open} maxWidth="xs" fullWidth={true}>
            <DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={closeDialog}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[600],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id={"id"}
                    label={"Infura Project Id"}
                    type={"text"}
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id={"adr"}
                    label={"Ethereum address"}
                    type={"text"}
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => balanceWeb3(document.getElementById("id").value,
                    document.getElementById("adr").value)}>Submit</Button>
            </DialogActions>
        </Dialog>
    )
}

export default CryptoBalance
