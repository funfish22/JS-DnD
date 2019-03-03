'use strict';

// ;(function(){
//     var inner = document.querySelector('.inner')
//     // var bTitle = ''
//     var bTitle = '<div class="col-4 mb-4"><div class="line"></div><h1 class="title">九九乘法表</h1><p class="subtitle">MULTIPLICATION CHART</p><div class="line"></div></div >'

//     for(var i=2; i<10; i++){
//         bTitle += '<div class="col-4 border mb-4"><div class="numInner"><h2 class="num__title">'+ i +'</h2>'

//         for(var j=1; j<10; j++){
//             total =+ i + ' x ' + j +'＝' + i*j
//             bTitle += '<p class="num__p">'+ i +' × '+ j +' ＝ '+ i*j +'</p>'

//             // innerTotal.textContent = total
//         }
//         bTitle += '</div></div>'
//         inner.innerHTML = bTitle
//     }
// }())


;(function () {
    var inner = document.querySelector('.inner');
    // var bTitle = ''
    var box = document.createElement('div');
    box.setAttribute('class', 'col-4 mb-4');

    inner.appendChild(box).innerHTML = '\n        <div class="line"></div>\n        <h1 class="title">\u4E5D\u4E5D\u4E58\u6CD5\u8868</h1>\n        <p class="subtitle">MULTIPLICATION CHART</p>\n        <div class="line"></div>\n    ';

    for (var i = 2; i < 10; i++) {
        var ul = document.createElement('ul');
        var li = document.createElement('li');
        var box2 = document.createElement('div');
        box2.setAttribute('class', 'col-4 border mb-4');
        ul.setAttribute('class', 'numInner');
        li.setAttribute('class', 'num__p');
        li.textContent = i;
        ul.appendChild(li);
        box2.appendChild(ul);

        for (var j = 1; j < 10; j++) {
            var li = document.createElement('li');
            li.setAttribute('class', 'num__p');
            li.textContent = i + ' \xD7 ' + j + ' = ' + i * j;
            ul.appendChild(li);
        }

        inner.appendChild(box2);
    }
})();

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});
//# sourceMappingURL=main-dist.js.map