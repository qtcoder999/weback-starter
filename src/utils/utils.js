export function removeDuplicates(info) {
    return [...new Set(info)]
}

export function gotoBottom(selector) {
    const element = document.querySelector(selector);
    // element.scrollIntoView(false)
    element.scrollTop += 10;
}