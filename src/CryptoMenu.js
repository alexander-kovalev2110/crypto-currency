import * as React from 'react'
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import CryptoBalance from "./CryptoBalance"
import CryptoSendEther from "./CryptoSendEther"
import CryptoAlert from "./CryptoAlert"

const CryptoMenu = (props) => {
    const { anchorEl, open, closeMenu, onLoad } = props

    // state to control <Alert> modal window
    const [alertOpen, setAlertOpen] =  React.useState(false)
    const [textMessage, setTextMessage] = React.useState("")                // message text for <Alert>
    const [severityMessage, setSeverityMessage] = React.useState("info")    // kind of message for <Alert>
    const openAlert = (message, severity) => {
        setAlertOpen(true)
        setTextMessage(message)
        setSeverityMessage(severity)
    }
    const closeAlert = () => {
        setAlertOpen(false)
    };

//-----------------------------------------------
    // state to control <BalanceDialog> modal window
    const [dialogOpen, setDialogOpen] = React.useState(false)       // to open/close <Dialog> for balance
    const openDialog = () => {
        setDialogOpen(true)
    }
    const closeDialog = () => {
        setDialogOpen(false)
        closeMenu()        // Close menu
    }

//-----------------------------------------------
    // state to control <SendDialog> modal window
    const [dialog2Open, setDialog2Open] = React.useState(false)       // to open/close <Dialog2> for balance
    const openDialog2 = () => {
        setDialog2Open(true)
    }
    const closeDialog2 = () => {
        setDialog2Open(false)
        closeMenu()        // Close menu
    }
//-----------------------------------------------

    const handleLoad = () => {
        onLoad()            // Load crypto array
        closeMenu()         // Close menu
    }

    // Add cryptocurrencies to a "Favorites" list stored in the local storage of the browser
    const addToFavorites = (crypto) => {
        // Get existing Favorites from local storage
        let favorites = JSON.parse(localStorage.getItem('favorites')) || []
        favorites.push(crypto)         // Add the cryptocurrency to Favorites

        // Save the updated Favorites to local storage
        localStorage.setItem('favorites', JSON.stringify(favorites))

        openAlert("Cryptocurrency added to Favorites!", "success")        // Show success message

        closeMenu()          // Close menu
    }

    return (
        <div>
            <Menu anchorEl={anchorEl} open={open}>
                <MenuItem onClick={handleLoad}>Reload cryptocurrency</MenuItem>
                <MenuItem onClick={() => addToFavorites(props.crypto)}>Add crypto to "Favorites"</MenuItem>
                <MenuItem onClick={openDialog}>Ethereum balance</MenuItem>
                <MenuItem onClick={openDialog2}>Send Ether</MenuItem>
            </Menu>

            <CryptoBalance open={dialogOpen} closeDialog={closeDialog} openAlert={openAlert} />

            <CryptoSendEther open={dialog2Open} closeDialog={closeDialog2} openAlert={openAlert} />

            <CryptoAlert open={alertOpen} text={textMessage} severity={severityMessage} closeAlert={closeAlert}/>
        </div>
    )
}

export default CryptoMenu
