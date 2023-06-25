import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from './NavBar'
import CryptoTable from "./CryptoTable"

// Site with the current state of cryptocurrencies
const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

const App = () => {
    // state: an array of the cryptocurrencies
    const [crypto, setCrypto] = useState([])

    // Loading of cryptocurrencies
    const loadCrypto = () => {
        axios(url)
            .then((res) => {
                setCrypto(res.data.slice(0,12))
            })
            .catch((error) => {
                console.error('Getting currency Error :', error)
            })
    }

    useEffect(() => {
        loadCrypto()        // Initial loading of cryptocurrencies
    })

    return (
        <div>
            <NavBar onLoad={loadCrypto} crypto={crypto}/>
            <CryptoTable crypto={crypto}/>
        </div>
    )
}

export default App
