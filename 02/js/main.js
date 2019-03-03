;(function() {
    var hourHand = document.querySelector('.hourline');
    var minHand = document.querySelector('.minline');
    var secHand = document.querySelector('.secline');

    function time() {
        var time = new Date()
        var hour = time.getHours()
        var min = time.getMinutes()
        var sec = time.getSeconds()
        console.log(sec)

        //時針度數  小時*360度 / 1圈12個小時  加上  已走分鐘的度數
        var hourdeg = hour * 360 / 12 + min * 360 / (12 * 60);
        //分針度數  分*360度 / 1圈60分鐘  加上  已走秒數的度數
        var mindeg = min * 360 / 60 + sec * 360 / (60 * 60);
        //秒針度數  秒*360度 / 1圈60秒
        var secdeg = sec * 360 / 60

        return [hourdeg, mindeg, secdeg];
    }
    function set() {
        var timedeg = time()
        console.log(timedeg)
        hourHand.style.transform = `translateX(-50%) rotate(${-180 + timedeg[0]}deg)`;
        minHand.style.transform = `translateX(-50%) rotate(${180 + timedeg[1]}deg)`;
        secHand.style.transform = `translateX(-50%) rotate(${180 + timedeg[2]}deg)`;
    }
    // set()
    setInterval(set, 1000);
}())