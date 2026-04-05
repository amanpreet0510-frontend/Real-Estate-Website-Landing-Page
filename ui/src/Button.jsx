import React from 'react'

const Button = ({ 
  text = 'Button',
  className = '',
  onClick,
  ...props 
}) => {
  
  
  return (
    <button
      className={`px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base cursor-pointer ${className}`}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  )
}

export default Button