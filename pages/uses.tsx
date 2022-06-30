import Image from 'next/image';

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
import { usesGearImage, usesGear } from '../src/content/usesGear';

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
                <HeroImageContainer>
                    <Image
                        src={usesGearImage.src}
                        alt={usesGearImage.alt}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={usesGearImage.blurUrl}
                    />
                </HeroImageContainer>
            </HeroContainer>
            <UsesContainer>
                {usesGear.map((gearList) => (
                    <GearContainer>
                        <ListTitle>{gearList.category}</ListTitle>
                        <GearList>
                            {gearList.gear.map((gear) => (
                                <GearListItem>
                                    <PointIcon />
                                    {gear}
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
