// 计数器
class Counter {
    timerId = null; // 记录定时器
    count = 1; // 当前数字
    oncreateend = null; // 产生数字后的后续操作，由用户自定义
    constructor(speed = 500) {
        this.speed = speed; // 数字产生的速度，没spped毫秒产生一个数字
    }
    // 开始产生数字
    start() {
        clearInterval(this.timerId); // 在开启定时器前，清除之前定时器，避免定时器叠加
        this.timerId = setInterval(() => {
            this.oncreateend && this.oncreateend(this.count);
            this.count++;
        }, this.speed);
    }
    // 停止产生数字
    stop() {
        clearInterval(this.timerId);
    }
}

module.exports = function instanceCounter(speed) {
    return new Counter(speed);
};