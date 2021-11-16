// 控制数字生成器开始和暂停
const { counter } = require('./render')();
let flag = true;
window.onclick = function() {
    if (flag) {
        counter.stop();
        flag = false;
    } else {
        counter.start();
        flag = true;
    }
};