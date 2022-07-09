import React from 'react'

export const Footer = () => {
    let footStyle={
        position: "relative",
        top: "70vh",
        width: "100%"
    }
  return (
    <footer className='bg-dark text-light py-3' style={footStyle}>
        <p className='text-center'>
            Copyright &copy; Chirag
        </p>
    </footer>
  )
}
