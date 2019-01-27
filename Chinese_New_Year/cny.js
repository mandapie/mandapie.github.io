const scroll = document.getElementById("scroll");
const end_scroll = document.getElementById("end-scroll");
const end_scroll_rod = document.getElementById("end-scroll-rod");
const min = 0, max = 14;
const messages = ["新年快乐<br>Happy New Year", "恭贺新禧<br>万事如意<br>Happy New Year, All the Best",
    "新想事成<br>May Your Wishes Come True", "福禄寿<br>Happiness, Prosperity, Longevity",
    "猪年大吉<br>Wish You Luck in the Year of the PIG", "恭喜发财<br>May You be Happy and Prosperous",
    "年年有余<br>Surplus Year After Year", "大吉大利<br>Lots of Luck and Prosperity",
    "招财进宝<br>May Treasures Fill Your Home", "岁岁平安<br>Peace All Year Round",
    "事业成功<br>家庭美满<br>Wishing a Successful Carrer, Happy Family", "财源广进<br>May Money and Treasures be Plentiful",
    "马到成功<br>Wishing You Every Success", "祝吉星高照<br>May You Come into a Good Fortune"];
var words = document.getElementById("words");

function ani() {
    var timeout = 0;

    if (scroll.classList.contains("scroll-down-animation")) {
        closeScroll();
        timeout = 1050;
    }

    setTimeout(function () {
        openScroll();
    }, timeout);
}

function closeScroll() {
    scroll.classList.remove("scroll-down-animation");
    end_scroll.classList.remove("end-scroll-down-animation");
    end_scroll_rod.classList.remove("end-scroll-rod-down-animation");

    scroll.classList.add("scroll-up-animation");
    end_scroll.classList.add("end-scroll-up-animation");
    end_scroll_rod.classList.add("end-scroll-rod-up-animation");

    setTimeout(function () {
        words.innerHTML = "";
    }, 500);
}

function openScroll() {
    scroll.classList.remove("scroll-up-animation");
    end_scroll.classList.remove("end-scroll-up-animation");
    end_scroll_rod.classList.remove("end-scroll-rod-up-animation");

    scroll.classList.add("scroll-down-animation");
    end_scroll.classList.add("end-scroll-down-animation");
    end_scroll_rod.classList.add("end-scroll-rod-down-animation");

    var index = Math.floor(Math.random() * (max - min)) + min;
    
    setTimeout(function () {
        words.innerHTML = messages[index];
    }, 300);
}