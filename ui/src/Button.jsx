import React from 'react'

const Button = ({ 
  text = 'Button',
  className = '',
  onClick,
  ...props 
}) => {
  
  
  return (
    <button
      className={`px-4 py-2 rounded cursor-pointer ${className}`}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  )
}

export default Button