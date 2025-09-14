
type ClassName = string | Record<string, boolean | string | undefined> | undefined

export const classNames = (...args: ClassName[]) => {
    return args
    .filter(arg => arg !== undefined)
    .flatMap(arg => {
    if (typeof arg === "string") {
        return arg;
    }
    return Object.entries(arg)
        .filter(([_, value]) => value)
        .map(([key]) => key);
    })
    .join(" ");
}