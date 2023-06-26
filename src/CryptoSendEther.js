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

const infura_project_id = 'e9d73543aef54a9fa358d7f7ac526198'        //  just an example for testing

const CryptoSendEther = (props) => {
    const { open, closeDialog, openAlert } = props

    async function sendEther(projectId, fromAddress, toAddress, privateKey, amount) {
        try {
            // Create a web3 instance connected to the Goerli testnet
            const web3 = new Web3(`https://goerli.infura.io/v3/${projectId}`)

            // Get the account object from the private key
            const account = web3.eth.accounts.privateKeyToAccount(privateKey)

            // Unlock the sender's account
            await web3.eth.personal.unlockAccount(fromAddress, '', 600)

            // Create the transaction object
            const txObject = {
                from: fromAddress,
                to: toAddress,
                value: web3.utils.toWei(amount.toString(), 'ether'),
            }

            // Sign the transaction with the sender's private key
            const signedTx = await account.signTransaction(txObject)

            // Send the signed transaction
            const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)

            console.log('Transaction Hash:', receipt.transactionHash)
            console.log('Transaction Successful!')
            openAlert("Transaction Successful!", "success")
        } catch (error) {
            console.error('Transaction Failed:', error)
            openAlert("Transaction Failed", "error")
        }

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
                    id={"from"}
                    label={"From Address"}
                    type={"text"}
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id={"to"}
                    label={"To Address"}
                    type={"text"}
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id={"key"}
                    label={"Private Key"}
                    type={"text"}
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id={"amount"}
                    label={"Amount"}
                    type={"text"}
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => sendEther(document.getElementById("id").value,
                                            document.getElementById("from").value,
                                            document.getElementById("to").value,
                                            document.getElementById("key").value,
                                            document.getElementById("amount").value
                )}>Submit</Button>
            </DialogActions>
        </Dialog>
    )
}

export default CryptoSendEther
