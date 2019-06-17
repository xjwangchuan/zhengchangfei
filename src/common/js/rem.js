//简单的移动端适配,前提是设置好meta viewport,不用手动计算dpr
(function (doc){
    var clientWidth = document.documentElement.clientWidth
    doc.documentElement.style.fontSize = clientWidth / 7.5 + 'px';
})(document)

