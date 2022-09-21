import React, { useEffect } from 'react';

import { Head } from '../src/components/Head';

function Home() {
    useEffect(() => {
        document.querySelector('body')?.classList.add('theme-default');
    }, []);

    return (
        <>
            <Head title="Sandrico Provo - Software Developer" />
            <h1 className="header-1">Header</h1>
        </>
    );
}

export default Home;
