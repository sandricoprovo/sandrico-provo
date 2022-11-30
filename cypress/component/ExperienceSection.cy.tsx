import { ExperienceSection } from '../../src/components/experiences/ExperienceSection';

describe('ExperienceSection.cy.ts', () => {
    beforeEach(() => {
        cy.mount(<ExperienceSection />);
    });

    it('Shows experience list on load', () => {
        cy.contains(
            "Below you'll find a list of places I've worked professionally and some notable achievements I made while there."
        );
    });

    it('Moving between tabs', () => {
        // Tabs to Projects tab & checks content.
        cy.get(':nth-child(2) > .Tab__TabStyled-sc-262b70b4-0').click();
        cy.contains("Below is a list of projects I've built.");

        // Tabs back to Experience list & checks content.
        cy.get(':nth-child(1) > .Tab__TabStyled-sc-262b70b4-0').click();
        cy.contains(
            "Below you'll find a list of places I've worked professionally and some notable achievements I made while there."
        );
    });

    it('Clicking to Project card links', () => {
        // Tabs to Projects tab & checks content.
        cy.get(':nth-child(2) > .Tab__TabStyled-sc-262b70b4-0').click();
        // Moves to external website
        cy.get('[href="https://www.sandricoprovo.dev/"]').click();
    });
});
