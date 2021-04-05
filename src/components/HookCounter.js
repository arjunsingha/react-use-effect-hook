import React, {useState, useEffect} from 'react';

const HookCounter = () => {
    const [count, setCount] = useState(0);
    // const [name, setName] = useState('');
    useEffect(()=>{ // use effect hook is called after every render call, this depeds on the count variable update only
        // console.log("Updating title:"+name);
        // document.title = `You clicked ${count} times`
        setCount(count => count + 1);
        //setCount((prev)=> prev + 1);
    },[])
    return ( 
        <div>
            This is count {count}
            {/* <input type="text" 
                value={name} 
                onChange={ e => {
                    setName(e.target.value);
                }}/>
            <button onClick={()=>setCount(count+1)}>Clicked {count} times</button> */}
            <p></p>
        </div>
     );
}
 
export default HookCounter;