import React, {useState, useEffect} from 'react';

const PersonComponent = () => {
    const [person, setPerson] = useState(null);
    useEffect(()=>{
        fetch('https://api.randomuser.me/')
        .then(response => response.json())
        .then((data) => {
            console.log(data.results[0]);
            setPerson(
                data.results[0]
            );
            
        });
        
    }, []);
    return ( 
        <div>
            <div>
                {!person? 'Loading ...':(
                <div>
                    <div>Person Name: {person.name.first} {person.name.last}</div>
                    <div>Person Email: {person.email}</div>
                    <div>Person Gender: {person.gender} </div>
                    <div>Person Address: {person.location.city} {person.location.country}</div>
                    <div><img src={person.picture.medium} /></div>
                </div> 
                )}
                
            </div>
        </div>
     );
}
 
export default PersonComponent;