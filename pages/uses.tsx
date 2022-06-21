import Page from '../src/components/Page';
import {
    HeroContainer,
    HeroTitle,
    HeroDescription,
    HeroImageContainer,
    UsesContainer,
    GearContainer,
    ListTitle,
    GearList,
    GearListItem,
} from '../src/components/UsesPage/styles';
import WavyText from '../src/components/WaveFadeInText';
import { PointIcon } from '../src/components/Icons';

function UsesPage() {
    return (
        <Page gap={4} marginend={4}>
            <HeroContainer>
                <HeroTitle>
                    <WavyText text="/uses" delay={0.2} duration={0.18} replay />
                </HeroTitle>
                <HeroDescription>
                    This page is dedicated to detailing all of the gear, apps,
                    and other essentials that I use to get my work done and stay
                    productive. It’s really just for fun! If you’ve seen me use
                    something and are curious about what it is, you will most
                    likely find it here. If not, feel free to reach out to me on
                    Twitter and ask 😄.
                </HeroDescription>
                <HeroImageContainer>IMAGE</HeroImageContainer>
            </HeroContainer>
            <UsesContainer>
                {[1, 2, 3].map(() => (
                    <GearContainer>
                        <ListTitle>Hardware</ListTitle>
                        <GearList>
                            {[1, 2, 3].map(() => (
                                <GearListItem>
                                    <PointIcon />
                                    TEST
                                </GearListItem>
                            ))}
                        </GearList>
                    </GearContainer>
                ))}
            </UsesContainer>
        </Page>
    );
}

export default UsesPage;
