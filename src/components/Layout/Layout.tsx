import { LayoutContainer } from './styles';

function Layout({ children }) {
    return (
        <LayoutContainer className="theme--light">{children}</LayoutContainer>
    );
}

export default Layout;
