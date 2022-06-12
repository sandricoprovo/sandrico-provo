import { useState } from 'react';

import mockTileImage from '../../../public/images/city.jpeg';
import mockStackList from '../../mock/mockStackList';
import { useToggle } from '../../hooks/useToggle';
import { truncateText } from '../../utils/truncateText';
import { wait } from '../../utils/wait';
import { GitHubIcon, ExternalLinkIcon } from '../Icons';

import {
    ProjectTileContainer,
    ProjectTileHeader,
    ProjectTileOverlay,
    ProjectTitle,
    ProjectDetails,
    ProjectDescription,
    ProjectBottomBar,
    StackPill,
    ProjectIcons,
    DetailsToggle,
    ProjectTileImage,
} from './styles';

// interface ProjectTileProps {}

const DESCRIPTION_DELAY = 225;

const overlayVariant = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.1,
            ease: [0.08, 0.82, 0.17, 1],
        },
    },
};
const descriptionVariant = {
    initial: { opacity: 1, y: '40%' },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay: DESCRIPTION_DELAY / 1000,
            ease: [0.08, 0.82, 0.17, 1],
        },
    },
};

function ProjectTile() {
    const [showDescription, setShowDescription] = useToggle(false);
    const mockDescription =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    const [description, setDescription] = useState<string>(
        truncateText(mockDescription, mockDescription.length)
    );

    async function getDescription() {
        if (showDescription) {
            const truncatedDescription = truncateText(
                mockDescription,
                mockDescription.length
            );
            setDescription(truncatedDescription);
        } else {
            // Forces the state update to wait so the overlay has time to fade in.
            await wait(DESCRIPTION_DELAY);
            setDescription(mockDescription);
        }
    }

    return (
        // Add background img to top lvl div below
        <ProjectTileContainer>
            <ProjectTileImage background={mockTileImage.src} />
            <ProjectTileOverlay
                variants={overlayVariant}
                initial="initial"
                animate={!showDescription ? 'initial' : 'animate'}
            />
            <ProjectDescription
                variants={descriptionVariant}
                initial="initial"
                animate={!showDescription ? 'initial' : 'animate'}
            >
                {description}
            </ProjectDescription>
            <ProjectDetails>
                <ProjectTileHeader>
                    <ProjectTitle>ESlint+Prettier Config</ProjectTitle>
                    {mockStackList.map((stack) => (
                        <StackPill key={stack}>{stack}</StackPill>
                    ))}
                </ProjectTileHeader>
                <ProjectBottomBar>
                    <ProjectIcons>
                        <GitHubIcon href="https://sandricoprovo.dev" />
                        <ExternalLinkIcon href="https://sandricoprovo.dev" />
                    </ProjectIcons>
                    <DetailsToggle
                        whileHover={{ y: '-10%' }}
                        onClick={() => {
                            setShowDescription();
                            getDescription();
                        }}
                    >
                        {!showDescription ? 'More' : 'Less'}
                    </DetailsToggle>
                </ProjectBottomBar>
            </ProjectDetails>
        </ProjectTileContainer>
    );
}

export default ProjectTile;
