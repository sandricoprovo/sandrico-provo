export const SUBMIT_STATUSES = {
    SUCCEEDED: 'succeeded',
    FAILED: 'failed',
    NONE: 'none',
} as const;

type SubmitStatusKeys = keyof typeof SUBMIT_STATUSES; // Util for mapping
export type SubmitStatusesAvailable = typeof SUBMIT_STATUSES[SubmitStatusKeys];
