import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Phones = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const loadPhone = data.data.data; 
            const phoneData = loadPhone.map(phone => {
                const splitPhone = phone.slug.split('-');
                const price = splitPhone[1];
                const singlePhone = {
                    name: phone.phone_name,
                    price: price
                }
                return singlePhone
            })
            setPhones(phoneData)
            })
    }, [])
    return (
        <div>
            {
                console.log(phones)
            }
        </div>
    );
};

export default Phones;