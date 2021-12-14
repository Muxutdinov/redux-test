import React from 'react'
import { Route,Routes } from 'react-router-dom'

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>Hello people</h1>} />
        </Routes>
    )
}

export default Routers
