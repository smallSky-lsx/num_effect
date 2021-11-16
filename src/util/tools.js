/**
 * 工具类：
 */
module.exports = {
    // 获取指定范围的随机整数，取值范围为：[min, max]
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    // 判断一个整数是否是素数
    isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num >= 2;
    }
};