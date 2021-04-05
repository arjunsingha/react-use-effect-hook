import React, {useState, useEffect} from 'react';

const HookMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(()=>{ // calls this useEffect only once by passing empty array as 2nd parameter
        console.log('Use Effect Called');
        window.addEventListener('mousemove', logMousePosition);

        return ()=>{
            console.log('Component unmounting code!!');
            window.removeEventListener("mousemove", logMousePosition);
        }
    },[])

    const logMousePosition = (e) =>{
        console.log('Mouse event');
        setX(e.clientX);
        setY(e.clientY);
    }

    return ( 
    <div>
        Hooks - x : {x} y : {y}
    </div> 
    );
}
 
export default HookMouse;