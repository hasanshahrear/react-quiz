import React from 'react'
import classes from '../styles/Illustration.module.css'

const Illustration = ({ url }) => {
    return (
        <div className={classes.illustration}>
            <img src={url} alt="" />
        </div>
    )
}

export default Illustration