import React from 'react'
import BasketProvider from './context/BasketContext'

const MainLayout = ({ children }) => {
    return (
        <BasketProvider>
            {children}
        </BasketProvider>
    )
}

export default MainLayout