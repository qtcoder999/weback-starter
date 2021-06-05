export function removeDuplicates(info) {
    return [...new Set(info)]
}

export function gotoBottom(selector) {
    const element = document.querySelector(selector);
    element.scrollTop = element.scrollTop + 1000;
}

export function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}

export const removeSelectors = selectorArray => {

    selectorArray &&
        selectorArray.map(singleSelection => {
            const selection = document.querySelector(singleSelection);
            if (selection) {


                document.querySelector(singleSelection).remove();
                console.log("Ads removed");
            }
        });
};