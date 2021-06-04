const { gotoBottom } = require("../utils/utils");
const { CSS_SELECTOR: { group, title } } = require("./constants/constants");
const { clickMoreButton, getTotalGroupMemberCount, grabInfo, getInfo } = require("./utils/utils");

console.clear();
console.log("Group info")

let totalGroupMemberCount = getTotalGroupMemberCount();
console.log("totalGroupMemberCount", totalGroupMemberCount);
console.log("getInfo().length", getInfo().length);

try {
    clickMoreButton();
}
catch (e) { }

while (totalGroupMemberCount !== getInfo().length) {
    grabInfo();
    gotoBottom(group);
}

console.log(getInfo());
