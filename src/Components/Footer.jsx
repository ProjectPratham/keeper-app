import React from 'react';


function Footer(){
    var year=new Date().getFullYear();
    return <footer>
        <p>copyright ⓒ {year}</p>
    </footer>
};

export default Footer