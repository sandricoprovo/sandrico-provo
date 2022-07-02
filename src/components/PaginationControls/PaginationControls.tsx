import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
} from '../Icons';

import { PaginationContainer, PaginationPosition } from './styles';

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
        currentPosition: number;
        total: number;
    };
    handlers: {
        moveToNext: () => void;
        moveToPrevious: () => void;
        moveToStart: () => void;
        moveToEnd: () => void;
    };
}

function PaginationControls({
    state: { isLastInList, isStartInList, currentPosition, total },
    handlers: { moveToEnd, moveToNext, moveToPrevious, moveToStart },
}: PaginationControlProps) {
    return (
        <PaginationContainer
            variants={paginationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <ChevronLeftIcon disabled={isStartInList} onClick={moveToStart} />
            <ArrowLeftIcon disabled={isStartInList} onClick={moveToPrevious} />
            <PaginationPosition>{`${currentPosition} / ${total}`}</PaginationPosition>
            <ArrowRightIcon disabled={isLastInList} onClick={moveToNext} />
            <ChevronRightIcon disabled={isLastInList} onClick={moveToEnd} />
        </PaginationContainer>
    );
}

export default PaginationControls;
