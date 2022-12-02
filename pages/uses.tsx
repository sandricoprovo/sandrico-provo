import React from 'react';

import { GearSection } from '../src/components/containers/Gear';
import { HeroSection } from '../src/components/containers/HeroSection';
import { GearList } from '../src/components/gearList/GearList';
import { GearPhoto } from '../src/components/gearList/GearPhoto';
import { Head } from '../src/components/Head';
import {
    BodyText,
    Header1,
    Highlighted,
} from '../src/components/shared/typography';
import { gear } from '../src/content/gear';

function UsesPage() {
    return (
        <>
            <Head title="Sandrico Provo - /uses" />
            <HeroSection>
                <Header1 shouldMotion>/uses</Header1>
                <BodyText shouldMotion>
                    This page is dedicated to detailing all of the{' '}
                    <Highlighted accent>
                        gear, apps, and other essentials
                    </Highlighted>{' '}
                    that I use to get my work done and stay productive. It’s
                    really just <Highlighted accent>for fun</Highlighted>! If
                    you’ve seen me use something and are curious about what it
                    is, you will most likely find it here. If not, feel free to
                    reach out to me on Twitter and ask 😄.
                </BodyText>
            </HeroSection>
            <GearPhoto />
            <GearSection>
                {gear.list.map((list) => (
                    <GearList key={list.label.toLowerCase()} gear={list} />
                ))}
            </GearSection>
        </>
    );
}

export default UsesPage;
