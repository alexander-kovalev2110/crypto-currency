import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CryptoMenu from "./CryptoMenu"

const NavBar = (props) => {

    // state to control <Menu> modal window
    const [anchorEl, setAnchorEl] = React.useState(null)
    const menuOpen = Boolean(anchorEl)
    const openMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const closeMenu = () => {
        setAnchorEl(null)
    }
//------------------------------------------------

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Cryptocurrency Tracker
                    </Typography>
                    <Button color="inherit" onClick={openMenu}>
                        Crypto menu
                    </Button>
                </Toolbar>
            </AppBar>

            <CryptoMenu anchorEl={anchorEl} open={menuOpen} closeMenu={closeMenu} onLoad={props.onLoad}/>
        </div>
    )
}

export default NavBar
