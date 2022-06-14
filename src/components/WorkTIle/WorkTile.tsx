import { LineIcon } from '../Icons';

import {
    WorkTileContainer,
    WorkTitle,
    WorkLocation,
    WorkDuration,
    TimeLineTile,
    WorkTimeLine,
} from './styles';

const lineIconVariant = {
    initial: {
        rotate: 247.5,
    },
};

function WorkTile() {
    return (
        <WorkTileContainer>
            <WorkLocation>REDspace Inc.</WorkLocation>
            <WorkTimeLine>
                <TimeLineTile>
                    <WorkTitle>Software Developer</WorkTitle>
                    <WorkDuration>April 2022 - Present</WorkDuration>
                </TimeLineTile>
                <LineIcon variants={lineIconVariant} initial="initial" />
                <TimeLineTile>
                    <WorkTitle>Jr. Software Developer</WorkTitle>
                    <WorkDuration>May 2021 - April 2022</WorkDuration>
                </TimeLineTile>
                <LineIcon variants={lineIconVariant} initial="initial" />
                <TimeLineTile>
                    <WorkTitle>Intern Software Developer</WorkTitle>
                    <WorkDuration>April 2021 - May 2021</WorkDuration>
                </TimeLineTile>
            </WorkTimeLine>
        </WorkTileContainer>
    );
}

export default WorkTile;
