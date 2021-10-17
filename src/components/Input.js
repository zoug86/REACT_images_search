import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../api.js';
import Image from './Image.js';

import '../styles/Input.css';

const Input = () => {

    const [text, setText] = useState('');
    const [hits] = useState(localStorage.getItem('hits') ? JSON.parse(localStorage.getItem('hits')) : []);

    useEffect(() => {

        const getHits = async () => {
            const { data } = await axios.get(`${API_URL}${process.env.REACT_APP_API_KEY}&per_page=200`);
            localStorage.setItem('hits', JSON.stringify(data.hits))
        }
        if (hits.length === 0) {
            getHits();
        }
        console.log('inside useEffect');
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        //const {data} = await axios.get(`https://pixabay.com/api/?key=23880203-66a1971d0d2dcbdcd8de3b2e1&q=${text}&per_page=200`);
        //setImages(data.hits);
        //setText('');
    }
    return (
        <div className='search_input'>
            <div className='container'>
                <form onSubmit={handleSubmit} className='form'>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} className='form_input' placeholder='Search Images' />
                </form>
            </div>
            {text && <Image hits={hits} text={text} />}
        </div>
    )
}

export default Input;
