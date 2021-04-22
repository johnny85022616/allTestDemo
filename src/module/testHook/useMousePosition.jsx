import { useState, useEffect } from 'react'

export const useMousePosition = () => {
    const [position, setPosition] = useState({x: 0, y: 0 })
    const updateMouse = (e) => {
        // setPosition({ x: e.clientX, y: e.clientY })
        // setPosition((preState)=>{return Object.assign({},preState,{ x: e.clientX, y: e.clientY });})
        setPosition(prevState => {
            return {...prevState, ...{ x: e.clientX, y: e.clientY }};
          });
    }
    document.addEventListener('mousemove', updateMouse)
    useEffect(() => {
        
        return () => {
            document.removeEventListener('mousemove', updateMouse)
        }
    })
    return position
}

