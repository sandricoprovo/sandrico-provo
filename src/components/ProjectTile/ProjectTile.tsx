import mockStackList from '../../mock/mockStackList';
import { useToggle } from '../../hooks/useToggle';
import { truncateText } from '../../utils/truncateText';
import { GitHubIcon, ExternalLinkIcon } from '../Icons';

import {
    ProjectTileContainer,
    ProjectTileHeader,
    ProjectTitle,
    ProjectDetailsContainer,
    ProjectDescription,
    ProjectBottomBar,
    IconsContainer,
    StackPill,
    DetailsToggle,
} from './styles';

// interface ProjectTileProps {}

const descriptionVariant = {
    initial: { opacity: 1, y: '40%' },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.08, 0.82, 0.17, 1],
        },
    },
};

function ProjectTile() {
    const [showDescription, setShowDescription] = useToggle(false);
    const mockDescription =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    return (
        // Add background img to top lvl div below
        <ProjectTileContainer>
            {/* Header */}
            <ProjectTileHeader>
                <ProjectTitle>ESlint+Prettier Config</ProjectTitle>
                {mockStackList.map((stack) => (
                    <StackPill key={stack}>{stack}</StackPill>
                ))}
            </ProjectTileHeader>
            {/* Details */}
            <ProjectDetailsContainer>
                <ProjectDescription
                    variants={descriptionVariant}
                    initial="initial"
                    animate={!showDescription ? 'initial' : 'animate'}
                >
                    {!showDescription
                        ? truncateText(mockDescription, 40)
                        : mockDescription}
                </ProjectDescription>
                {/* Bottom Row */}
                <ProjectBottomBar>
                    <IconsContainer>
                        <GitHubIcon href="https://sandricoprovo.dev" />
                        <ExternalLinkIcon href="https://sandricoprovo.dev" />
                    </IconsContainer>
                    <DetailsToggle onClick={setShowDescription}>
                        {!showDescription ? 'More' : 'Less'}
                    </DetailsToggle>
                </ProjectBottomBar>
            </ProjectDetailsContainer>
        </ProjectTileContainer>
    );
}

export default ProjectTile;
