import { useState } from 'react';

import { MenuBtn as MenuIcon } from './styles';

interface MenuBtnProps {
    onClickHandler: () => void;
}

function MenuBtn({ onClickHandler }: MenuBtnProps) {
    const [isNavOpen, setIsNavOpen] = useState(false); // Used to change color

    function handleNavClick() {
        setIsNavOpen(!isNavOpen);
        onClickHandler();
    }

    return (
        <MenuIcon
            open={isNavOpen}
            onClick={handleNavClick}
            initial={{ opacity: 0, y: '50%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.35,
                delay: 0.4,
                ease: [0.08, 0.82, 0.17, 1],
            }}
        >
            <span />
            <span />
            <span />
        </MenuIcon>
    );
}

export default MenuBtn;
