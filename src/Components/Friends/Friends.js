import React from 'react'
import {  useHistory } from 'react-router-dom'

const Friends = (props) => {
    
    const { name , email, id, address : {street} } = props.friend;

    const firendStyle = {
        border : "1px solid purple",
        margin : "20px",
        padding : "20px",
        borderRadius : "20px",
        cursor : "pointer"
    }

    let history = useHistory();

    const handleClick = (id) => {
        history.push(`/user/detail/${id}`)
    }

    return (
        <div style={firendStyle}>
            <h1>Name : {name} </h1>
            <h1>Email : {email} </h1>
            <h1>Address : {street} </h1>
            {/* <Link to={`/user/detail/${id}`}>
                <button style={{cursor: 'pointer'}}>More Details</button>
            </Link> */}
            <button onClick={() => handleClick(id)} >Show info</button>
            <br/>
        </div>
    )
}

export default Friends;
