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

export function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
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