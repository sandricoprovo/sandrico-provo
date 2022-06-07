import { MenuBtn as MenuIcon } from './styles';

interface MenuBtnProps {
    onClickHandler: () => void;
}

function MenuBtn({ onClickHandler }: MenuBtnProps) {
    return (
        <MenuIcon onClick={onClickHandler}>
            <span />
            <span />
            <span />
        </MenuIcon>
    );
}

export default MenuBtn;
