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
        cy.get('[data-test-id=EXPTAB-2]').click();
        cy.contains("Below is a list of projects I've built.");

        // Tabs back to Experience list & checks content.
        cy.get('[data-test-id=EXPTAB-1]').click();
        cy.contains(
            "Below you'll find a list of places I've worked professionally and some notable achievements I made while there."
        );
    });
});
