import React from 'react';

function Icon ({ icon, link, isMobile }) {

    const openLink = (url) => {
        window.open(url , '_blank');
    }

    return(
        <button style={{backgroundColor: 'transparent', border:'none'}} 
                onClick={()=> openLink(link)}>
            <img src={icon} alt='icon'/>
        </button>
    )
}

export default Icon;