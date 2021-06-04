export function removeDuplicates(info) {
    return [...new Set(info)]
}

export function gotoBottom(selector) {
    var element = document.querySelector(selector);

    element.scrollTop = element.scrollHeight - element.clientHeight;
}