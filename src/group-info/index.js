const { gotoBottom, sleep } = require("../utils/utils");
const { CSS_SELECTOR: { group, title } } = require("./constants/constants");
const { clickMoreButton, getTotalGroupMemberCount, grabInfo, getInfo } = require("./utils/utils");

console.clear();
console.log("Group info")

let totalGroupMemberCount = getTotalGroupMemberCount();
console.log("totalGroupMemberCount", totalGroupMemberCount);
console.log("getInfo().length", getInfo().length);

try {
    grabInfo();
    clickMoreButton();
}
catch (e) { }

(async function () {

    while (totalGroupMemberCount !== getInfo().length) {
        grabInfo();
        gotoBottom(group);
        await sleep(2000);
        console.log(getInfo().length);
    }

    console.log(getInfo());

})();

