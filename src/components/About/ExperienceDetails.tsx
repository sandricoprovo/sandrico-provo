import React from 'react';
import styled from 'styled-components';
import { IWorkExperience } from '../../types/WorkExperience';

const Container = styled.div`
    --ctn-spacer-lg: 56px;
    min-width: 350px;
    max-width: 600px;
    color: var(--clr-white);
    background-color: var(--clr-main-700);
    padding: 32px 21px;

    & > div:nth-of-type(1) {
        margin-bottom: 16px;

        & > h3 {
            font-family: var(--font-header);
            font-size: var(--font-md);
            letter-spacing: 2px;
            margin-bottom: 8px;
        }

        & > p {
            font-family: var(--font-display);
            font-size: var(--font-md);
            letter-spacing: 2px;

            & > a {
                position: relative;
                color: var(--clr-accent);
                text-decoration: none;

                &::after {
                    content: '';
                    position: absolute;
                    width: 0%;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: var(--clr-accent);
                    transition: width 0.3s cubic-bezier(0.79, 0.14, 0.15, 0.86);
                }

                @media (hover: hover) {
                    cursor: pointer;

                    &:hover::after {
                        width: 100%;
                    }
                }
            }
        }
    }

    & > p:nth-of-type(1) {
        font-family: var(--font-body);
        font-size: var(--font-base);
        margin-bottom: var(--ctn-spacer-lg);
        line-height: 180%;
    }

    & > ul {
        width: 100%;
        padding-left: 14px;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 16px;

        & > li {
            list-style: square;
            list-style-position: outside;
            line-height: 180%;
        }

        margin-bottom: var(--ctn-spacer-lg);
    }

    & > div:nth-of-type(2) {
        & > p {
            font-family: var(--font-display);
            font-size: var(--font-base);
            letter-spacing: 2px;
            margin-bottom: calc(var(--ctn-spacer-lg) * 0.7);
        }

        & > ul {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;

            & > li {
                line-height: 180%;
            }
        }
    }

    @media (min-width: 575px) {
        padding: 32px 64px;
    }
`;

interface ExperienceDetailsProps {
    experience: IWorkExperience;
}

export function ExperienceDetails({ experience }: ExperienceDetailsProps) {
    return (
        <Container>
            <div>
                <h3>{experience.jobTitle}</h3>
                <p>
                    {experience.companyLink ? (
                        <a
                            title={experience.companyName}
                            href={experience.companyLink}
                            rel="noopener noreferrer"
                            target="_Blank"
                        >
                            @ {experience.companyName}
                        </a>
                    ) : (
                        <>@ {experience.companyName}</>
                    )}
                </p>
            </div>
            <p>{experience.timeline}</p>
            <ul>
                {experience.details.map((detail) => (
                    <li key={detail.slice(0, 5)}>{detail}</li>
                ))}
            </ul>
            {experience.previousRoles && (
                <div>
                    <p>Previous Roles</p>
                    <ul>
                        {experience.previousRoles.map((role) => (
                            <li key={role.slice(0, 5)}>{role}</li>
                        ))}
                    </ul>
                </div>
            )}
        </Container>
    );
}
