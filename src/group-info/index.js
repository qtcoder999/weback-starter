const { CSS_SELECTOR: { group, title } } = require("./constants/constants");
const { gotoBottom, clickMore, getTotalGroupMemberCount } = require("./utils/utils");

console.log("Group info")

    (function () {
        let totalGroupMemberCount = getTotalGroupMemberCount();
        let groupMembers = [];

        clickMore();

        while (totalGroupMemberCount === groupMembers.length) {

            gotoBottom(group);
            grabInfo();

        }

    })