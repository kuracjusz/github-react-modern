import React, { Fragment } from 'react'

export const Spinner = ({spinner}) => {
    return <Fragment>
        <img src={spinner} alt="Loading..." style={{width: '200px', margin: 'auto', display: 'block'}}/>
    </Fragment>
}