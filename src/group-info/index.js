const copy = require("copy-to-clipboard");
const { gotoBottom, sleep } = require("../utils/utils");
const { CSS_SELECTOR: { group, remove } } = require("./constants/constants");
const { clickMoreButton, getTotalGroupMemberCount, grabInfo, getInfo } = require("./utils/utils");

console.clear();
console.log("WhatsApp Group Information")

let totalGroupMemberCount = getTotalGroupMemberCount();

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

    copy(JSON.stringify(getInfo()))

    console.log(getInfo());

})();

