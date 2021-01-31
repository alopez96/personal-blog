import React from 'react';

function Icon ({ icon, link }) {

    const openLink = (url) => {
        window.open(url);
    }

    return(
        <button style={{backgroundColor: 'transparent', border:'none'}} 
                onClick={()=> openLink(link)}>
            <img src={icon} alt='icon'/>
        </button>
    )
}

export default Icon;