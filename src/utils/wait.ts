// Creates an async timer that can be used for mocking time on requests.
export function wait(time: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}
