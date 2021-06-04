import { removeDuplicates } from "../../utils/utils";

const { CSS_SELECTOR: { title, more, groupMemberCount } } = require("../constants/constants");

export let info = [];

export function grabInfo() {
    const titles = document.querySelectorAll(title);
    let info = [];

    titles.forEach((value, index) => {

        info.push(value.textContent);

    })

    setInfo(info);
}

export function clickMoreButton() {
    try {
        document.querySelector(more).click();
    }
    catch (e) { console.log(e) }
}

export function setInfo(newInfo) {
    info = [...info, ...newInfo]
    info = removeDuplicates(info)
}

export function getInfo() {
    return info
}

export function getTotalGroupMemberCount() {
    try {

        const memberCount = parseInt(document.querySelector(groupMemberCount).textContent.split(' ')[0]);
        console.log("Member count : ", memberCount);
        return parseInt(memberCount);
    }
    catch (e) {
        console.log(e)
    }
}