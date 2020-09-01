import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const UserDetail = () => {

    const [userDetail , setUserDetail] = useState({});

    const {name , email, phone, website, username, address, company  } = userDetail;

    console.log(userDetail.address);


    let {userId} = useParams();

    useEffect(() => {
        const userFetchData = async () => {
            try {
                const url = `https://jsonplaceholder.typicode.com/users/${userId}`
                const res = await axios.get(url)
                const data = res.data;
                setUserDetail(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        userFetchData();
        
    }, [])


    return (
        <div>
            <h3>This is User detail page {userId} </h3>
            <h1>Name : {name} </h1>
            <h1>Phone : {phone} </h1>
            <h1>Email : {email} </h1>
            <h1>Website : {website} </h1>
            <h1>Username : {username} </h1>
            {
            userDetail.address &&  <h1>Street : {address.street} </h1>,
            userDetail.company &&  <h1>Company : {company.name} </h1>
            }
        </div>
    )
}

export default UserDetail;
