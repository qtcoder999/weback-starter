const { gotoBottom, sleep, removeSelectors } = require("../utils/utils");
const { CSS_SELECTOR: { group, remove } } = require("./constants/constants");
const { clickMoreButton, getTotalGroupMemberCount, grabInfo, getInfo } = require("./utils/utils");

console.clear();
console.log("Group info")

let totalGroupMemberCount = getTotalGroupMemberCount();
console.log("totalGroupMemberCount", totalGroupMemberCount);
console.log("getInfo().length", getInfo().length);

try {
    clickMoreButton();
    grabInfo();
}
catch (e) { }

(async function () {

    while ((totalGroupMemberCount - 2) !== getInfo().length) {
        grabInfo();
        gotoBottom(group);
        await sleep(3000);
        console.log(getInfo().length);
    }

    console.log(getInfo());

})();

