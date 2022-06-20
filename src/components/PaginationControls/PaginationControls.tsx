import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
} from '../Icons';

import { ProjectPagination } from './styles';

const paginationVariants = {
    initial: {
        x: 400,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.475,
            delay: 0.8,
            ease: [0.08, 0.82, 0.17, 1],
        },
    },
    exit: {
        x: 400,
        opacity: 0,
    },
};

interface PaginationControlProps {
    state: {
        isStartInList: boolean;
        isLastInList: boolean;
    };
    handlers: {
        moveToNext: () => void;
        moveToPrevious: () => void;
        moveToStart: () => void;
        moveToEnd: () => void;
    };
}

function PaginationControls({
    state: { isLastInList, isStartInList },
    handlers: { moveToEnd, moveToNext, moveToPrevious, moveToStart },
}: PaginationControlProps) {
    return (
        <ProjectPagination
            variants={paginationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <ChevronLeftIcon disabled={isStartInList} onClick={moveToStart} />
            <ArrowLeftIcon disabled={isStartInList} onClick={moveToPrevious} />
            <ArrowRightIcon disabled={isLastInList} onClick={moveToNext} />
            <ChevronRightIcon disabled={isLastInList} onClick={moveToEnd} />
        </ProjectPagination>
    );
}

export default PaginationControls;
