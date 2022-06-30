import { LinkedInIcon, GitHubIcon, TwitterIcon, CopyRightIcon } from '../Icons';
import { ContactBtn } from '../Buttons/Buttons';
import { professionalLinks } from '../../content/workExperience';

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
                        href={professionalLinks.github}
                        hoverclr="white"
                    />
                    <LinkedInIcon
                        href={professionalLinks.linkedIn}
                        hoverclr="white"
                    />
                    <TwitterIcon
                        href={professionalLinks.twitter}
                        hoverclr="white"
                    />
                </FooterIcons>
                <FooterCopyRightBar>
                    <FooterCopyRight>
                        2018 - {new Date().getFullYear()}
                    </FooterCopyRight>
                    <CopyRightIcon size="1rem" hoverclr="white" />
                    <FooterCopyRight>Sandrico Provo</FooterCopyRight>
                </FooterCopyRightBar>
            </FooterBottomBar>
        </FooterContainer>
    );
}

export default Footer;
