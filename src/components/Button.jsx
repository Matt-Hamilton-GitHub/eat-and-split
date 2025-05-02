import React from 'react'

const Button = ({children, onClick}) => {
  return (
    <button className="btn-select" onClick={onClick}>{children}</button>
  )
}

export default Button