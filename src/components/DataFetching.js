import React, {useState, useEffect} from 'react';
import axios from 'axios';

const DataFetching = () => {
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState('');
    const [userInputId, setUserInputId] = useState('');
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
                console.log(res)
                if(Array.isArray(res.data)){
                    setPosts(res.data);
                }else{
                    var tempPost = [];
                    tempPost.push(res.data);
                    setPosts(tempPost);

                }
                
            }
        )
        .catch((error)=>{
            console.log("Error: "+JSON.strinngify(error))
        })
        
    },[id]);
    return ( 
        <div>
            <input type="text" value={userInputId} onChange={(e)=>setUserInputId(e.target.value)} />
            <button onClick={()=>setId(userInputId)}>Get Post By Id</button> <button onClick={()=>setId("")}>Get All Posts</button> <br />
            <ul>
                {
                    posts.map(post=><li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
     );
}
 
export default DataFetching;