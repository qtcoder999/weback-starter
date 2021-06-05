const { gotoBottom, sleep } = require("../utils/utils");
const { CSS_SELECTOR: { group } } = require("./constants/constants");
const { grabInfo, getInfo } = require("./utils/utils");
var stopped = false;

console.clear();
console.log("Message info")

try {
    grabInfo();
}
catch (e) { }

(async function () {

    while (!stopped) {
        grabInfo();
        gotoBottom(group);
        await sleep(3000);
        console.log(getInfo().length);
        console.log(getInfo());
        debugger;
    }

    console.log(getInfo());

})();

