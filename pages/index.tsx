import React, { useEffect } from 'react';

function Home() {
    useEffect(() => {
        document.querySelector('body')?.classList.add('theme-default');
    }, []);

    return <h1 className="header-1">Header</h1>;
}

export default Home;
