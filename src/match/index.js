var check = ["044", "451"],
    data = ["343", "333", "044", "123", "444", "555"];

var res = check.filter(function (n) { return !this.has(n) }, new Set(data));

console.log(res);