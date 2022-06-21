import { Variants } from 'framer-motion';

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
}

function WorkTile({ variants, widthDelay }: WorkTileProps) {
    return (
        <WorkTileContainer variants={variants}>
            <WorkTileHeader>
                <WorkTitle>SOFTWARE DEVELOPER</WorkTitle>
                <WorkHeaderDetails>
                    <WorkHeaderDetail>@ REDspace Inc.</WorkHeaderDetail>
                    <WorkHeaderDetail>April 2021 - April 2022</WorkHeaderDetail>
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
                {[1, 2, 3].map(() => (
                    <WorkDetail>
                        <PointIcon />
                        TEST 12 12 fjsdiofjdsf dfj fpdsfjodf fhdsiof sdf
                        dfdkofdsfdsfdsklf fds fhdhfdksf sf dnsklfdhsf sdfsdhf
                    </WorkDetail>
                ))}
            </WorkDetailsContainer>
        </WorkTileContainer>
    );
}

export default WorkTile;
