export const findExt = (filename) => {
    const split = filename.split('.');
    return split[split.length - 1];
};
