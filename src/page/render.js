const $ = require('jquery');
const Tools = require('./../util/tools');
const instanceCounter = require('./../util/counter');

// 素数高亮颜色
const colors = ["#f26395", "#62efab", "#ef7658", "#ffe868", "#80e3f7", "#d781f9"];
const divArrs = [];

// 获取随机颜色
function getRandomColor() {
    return colors[Tools.getRandomInt(0, colors.length - 1)];
}
// 优化渲染，去掉透明度为0的元素
function removeDivEle(divArrs) {
    for (let i = 0; i < divArrs.length; i++) {
        const $ele = divArrs[i];
        // console.log($ele.css('opacity'));
        if ($ele.css('opacity') == 0) {
            $ele.remove();
            divArrs.splice(i, 1);
            i--;
        }
    }
}

// 负责页面渲染
class Render {
    counter = instanceCounter();
    constructor() {
        this.init();
    }
    init() {
        this.getDom();
        this.counter.start();
        this.counter.oncreateend = num => {
            removeDivEle(divArrs);
            const $span = $('<span>').text(num);
            const $div = $('<div>').text(num).addClass('fixed-center');
            divArrs.push($div);
            this.$FixedCenter.text(num);
            if (Tools.isPrime(num)) {
                const color = getRandomColor();
                $span.css('color', color);
                $div.css('color', color);
            }
            this.$NumContainer.append($span);
            $('body').append($div);
            // 重新渲染，让$div默认值为0
            $div.offset();

            $div.css('opacity', '0').css('transform', `translate(${Tools.getRandomInt(-300,300)}px,${Tools.getRandomInt(-300,300)}px)`);
            // console.log(divArrs);
        };
    }
    getDom() {
        this.$NumContainer = $('.num-container');
        this.$FixedCenter = $('.fixed-center');
    }
}
module.exports = function instanceRender() {
    return new Render();
}