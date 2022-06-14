import { LinkedInIcon, GitHubIcon, TwitterIcon, CopyRightIcon } from '../Icons';
import { ContactBtn } from '../Buttons/Buttons';

import {
    FooterContainer,
    FooterHeader,
    FooterBottomBar,
    FooterCopyRight,
    FooterCopyRightBar,
    FooterIcons,
    FooterContent,
} from './styles';

function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterHeader>
                    Lets Work Together<span style={{ color: 'white' }}>.</span>
                </FooterHeader>
                <ContactBtn />
            </FooterContent>
            <FooterBottomBar>
                <FooterIcons>
                    <GitHubIcon
                        href="https://sandricoprovo.dev"
                        hoverclr="white"
                    />
                    <LinkedInIcon
                        href="https://sandricoprovo.dev"
                        hoverclr="white"
                    />
                    <TwitterIcon
                        href="https://sandricoprovo.dev"
                        hoverclr="white"
                    />
                </FooterIcons>
                <FooterCopyRightBar>
                    <FooterCopyRight>2018 - 2022</FooterCopyRight>
                    <CopyRightIcon size="1rem" hoverclr="white" />
                    <FooterCopyRight>Sandrico Provo</FooterCopyRight>
                </FooterCopyRightBar>
            </FooterBottomBar>
        </FooterContainer>
    );
}

export default Footer;
