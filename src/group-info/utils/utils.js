
const { CSS_SELECTOR: { title, more, groupMemberCount } } = require("./constants/constants");

export let info = [];

export function grabInfo() {
    const titles = document.querySelectorAll(title);
    let info = [];

    titles.forEach((value, index) => {

        info.push(value.textContent);

    })

    setInfo(info);
}

export function clickMore() {

    document.querySelector(more).click();

}

export function setInfo(newInfo) {
    info = [...info, newInfo]
    info = removeDuplicates(info)
}

export function getTotalGroupMemberCount() {
    return parseInt(document.querySelector(groupMemberCount).textContent.split(' ')[0])
}