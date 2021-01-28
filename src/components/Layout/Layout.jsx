import React from 'react';
import s from './Layout.module.css'
console.log(s);

const Layout = ({ id = 1, title = 'eqweqeqewe', descr = 'qweqwee', urlBg, colorBg }) => (
    <section className={s.root} id={id}>
    <div className={s.wrapper}>
        <article>
            <div className={s.title}>
                <h3>{title}</h3>
                <span className={s.seporator}></span>
            </div>
            <div className={s.descr, s.full}>
                <p>{descr}</p>
            </div>
        </article>
    </div>
</section>
);


export default Layout;
