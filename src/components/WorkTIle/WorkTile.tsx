import { Variants } from 'framer-motion';

import { WorkExperience } from '../../types/WorkExperience';
import { PointIcon } from '../Icons';

import {
    WorkTileContainer,
    WorkTileHeader,
    WorkTitle,
    WorkHeaderDetail,
    WorkHeaderDetails,
    WorkDetailsContainer,
    WorkDetail,
} from './styles';

interface WorkTileProps {
    variants: Variants;
    widthDelay: number;
    experience: WorkExperience;
}

function WorkTile({ variants, widthDelay, experience }: WorkTileProps) {
    return (
        <WorkTileContainer variants={variants}>
            <WorkTileHeader>
                <WorkTitle>{experience.title.toUpperCase()}</WorkTitle>
                <WorkHeaderDetails>
                    <WorkHeaderDetail>@ {experience.company}</WorkHeaderDetail>
                    <WorkHeaderDetail>{experience.timeFrame}</WorkHeaderDetail>
                </WorkHeaderDetails>
            </WorkTileHeader>
            <WorkDetailsContainer
                initial={{ y: '100%' }}
                animate={{
                    y: '0%',
                    transition: {
                        duration: 0.2,
                        delay: widthDelay,
                    },
                }}
                whileHover={{
                    y: [0, 10, 0],
                    transition: {
                        duration: 0.3,
                    },
                }}
            >
                {experience.details.map((detail, index) => (
                    <WorkDetail key={`${detail}_${index}`}>
                        <PointIcon />
                        {detail}
                    </WorkDetail>
                ))}
            </WorkDetailsContainer>
        </WorkTileContainer>
    );
}

export default WorkTile;
