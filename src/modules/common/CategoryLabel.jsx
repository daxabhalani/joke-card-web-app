import React from 'react'
import '../../assets/css/home.css'

export default function CategoryLabel({ category, color }) {
    return (
        <span className="social-jokes" style={{backgroundColor:color}}>{category}</span>
    )
}