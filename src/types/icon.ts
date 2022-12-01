export interface IconProps {
    title?: string;
    label?: string;
    size?: number;
    color?: string;
    href?: string;
    order?: number;
    animation?: 'infiniteSpin';
    onClick?: () => void;
}
