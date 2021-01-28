import React from 'react';
import s from './Footer.module.css'
console.log(s);

const Footer = () => (
    <footer>
    <div class={s.wrapper}>
        <h3>THANKS FOR VISITING</h3>
        <p>© 2021 #ReactMarathon.</p>
    </div>
</footer>
);


export default Footer;
