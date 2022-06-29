import styled from 'styled-components';

export const HeroContainer = styled.section`
    width: 100%;
    margin-block-start: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const HeroTitle = styled.div`
    font-family: var(--font-secondary);
    font-size: var(--font-900);
    line-height: 120%;
    font-style: italic;
    font-weight: 900;
`;

export const HeroSubTitle = styled.span`
    margin-inline-end: 1rem;
    font-family: var(--font-primary-sb);
    font-size: var(--font-600);
    line-height: 140%;
    font-style: italic;
    font-weight: 700;
`;

export const HeroDescription = styled.p`
    font-family: var(--font-primary);
    font-size: var(--font-400);
    font-weight: 400;
    line-height: 180%;
    max-width: 100ch;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

export const FormContainer = styled.div`
    width: 100%;
    max-width: 800px;
    padding-block-end: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
`;

export const FormHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ContactForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 1rem;
`;

export const FormLabel = styled.label`
    position: relative;
    font-family: var(--font-primary);
    font-size: var(--font-400);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    & > span {
        position: absolute;
        background-color: white;
        pointer-events: none;
        top: 28%;
        left: 2%;
        text-align: left;
        padding-inline: 0.5rem;
        color: var(--clr-text-faded);
        transition: top 350ms var(--fadeUp-bezier),
            color 350ms var(--fadeUp-bezier) 200ms;
    }
`;

export const FormInput = styled.input`
    width: 100%;
    padding: 1.25rem 0.9rem;
    font-family: var(--font-primary);
    font-size: var(--font-400);
    line-height: 120%;
    color: var(--clr-text);
    border: 2px solid var(--clr-text);
    border-radius: 5px;
    margin-block-end: 1rem;
    transition: color 200ms var(--underline-bezier);

    &:focus + span,
    &:valid + span {
        top: -8%;
        color: var(--clr-text);
    }
`;

export const FormTextArea = styled.textarea`
    width: 100%;
    border-radius: 4px;
    padding: 1.25rem 0.9rem;
    font-family: var(--font-primary);
    font-size: var(--font-400);
    line-height: 180%;
    color: var(--clr-text);
    border: 2px solid var(--clr-text);
    border-radius: 5px;
    transition: color 200ms var(--underline-bezier);

    & + span {
        top: 8%;
    }

    &:focus + span,
    &:valid + span {
        top: -4%;
        color: var(--clr-text);
    }
`;
