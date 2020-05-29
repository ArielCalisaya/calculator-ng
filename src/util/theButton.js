import React, { useState, useEffect } from 'react';

/*------------------------------------------------
                      Counter
------------------------------------------------*/
export const Button = ({children}) => {

    let isOperator

    isOperator = val => {
        return !isNaN(val) || val === "." || val === "=";
    }

    return(
        <div className={`button ${isOperator (children) ? "" : "operator"}`}>
            {children}
        </div>
    )
}