import React from 'react';
import s from './Header.module.css'
console.log(s);

const Header = ({ title = 'qweqweqwe', descr = 'qweqweqwe121212', }) => (
    <header class={s.root}>
        <div class={s.forest}></div>
        <div class={s.container}>
            <h1>{title}</h1>
            <p>{descr}</p>
        </div>
    </header>
);


export default Header;
