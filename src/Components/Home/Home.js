import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Friends from '../Friends/Friends';
 
const Home = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {    
      const fethedData = async () =>{
        try {
          const res = await axios.get('https://jsonplaceholder.typicode.com/users/')
          const data = res.data;
          setFriends(data);
          console.log(data);
  
        } catch (error) {
            console.log(error);
        }
      }
      fethedData();
    },[])
  
    return (
        <div>
            <h1>Friends : {friends.length} </h1>
            {
            friends.map((friend) => <Friends friend={friend}/>)
            }    
        </div>
    )
}

export default Home;
