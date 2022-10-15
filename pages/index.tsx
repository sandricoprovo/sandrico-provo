import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import setup1 from '../public/images/setup-1.jpeg';
import { myInfo } from '../src/content/myInfo';

import { Head } from '../src/components/Head/Head';
import { Hero } from '../src/components/Hero/Hero';
import { ProjectsContainer } from '../src/components/Projects/ProjectsContainer';
import { projectsList } from '../src/content/projects';
import { ProjectFull } from '../src/components/Projects';
import { ProjectsHeader } from '../src/components/Projects/ProjectsHeader';
import { WorkExperience } from '../src/components/WorkExperience/WorkExperience';
import { MyStory } from '../src/components/MyStory/MyStory';
import { DetailBlock } from '../src/components/DetailBlock';
import { DetailsBlockContainer } from '../src/components/Projects/DetailsBlockContainer';

const ImageContainer = styled.section`
    position: relative;
    width: 100vw;
    height: 50vh;
    margin-bottom: var(--spacing-margin);

    & > div {
        position: relative;
        height: 100%;
    }
`;

function Home() {
    return (
        <>
            <Head title="Sandrico Provo - Software Engineer" />
            <Hero
                overline="Hey, I'm Sandrico. I'm a"
                header="Software Engineer"
            />
            <ImageContainer>
                <div>
                    <Image
                        src={setup1.src}
                        priority
                        layout="fill"
                        objectFit="cover"
                        quality={95}
                        alt="My setup including the monitor, laptop, desk map, docking station, mouse and other items."
                    />
                </div>
            </ImageContainer>
            <ProjectsContainer>
                <ProjectsHeader overline="Check Out My" header="Projects" />
                {projectsList.map((project) => (
                    <ProjectFull key={project.name} project={project} />
                ))}
            </ProjectsContainer>
            <MyStory />
            <DetailsBlockContainer>
                <DetailBlock
                    label="Education"
                    listDirection="column"
                    list={myInfo.education}
                />
                <DetailBlock
                    label="Skills"
                    listDirection="row"
                    list={myInfo.techSkills}
                />
            </DetailsBlockContainer>
            <WorkExperience />
        </>
    );
}

export default Home;
