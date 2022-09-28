import React from 'react';

import { Head } from '../src/components/Head/Head';
import { Hero } from '../src/components/Hero';

function Projects() {
    return (
        <>
            <Head title="Sandrico Provo - Projects" />
            <Hero
                header={{
                    overline: 'My',
                    lineOne: 'Wo',
                    lineTwo: 'rks.',
                }}
            />
        </>
    );
}

export default Projects;
