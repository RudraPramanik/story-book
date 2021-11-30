import React, { HTMLAttributes,ReactNode} from 'react'

interface Props extends HTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    varient: 'primary' | 'secondary'
}

export const Btn = ({children, varient, ...props}: Props)=>{
    return(
        <button {...props}
               style={{ backgroundColor: varient ==='primary' ? 'blue' : 'red', color:'white'}}>
            {children}
        </button>
    )
}