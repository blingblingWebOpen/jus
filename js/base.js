if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

function setDPR() {
    var desWidth = 750;
    var _dpr = (1 / window.devicePixelRatio);
    document.getElementById('viewport').setAttribute('content', 'target-densitydpi=device-dpi,width=750, maximum-scale=' + window.screen.width / 750);
    var iWidth = Math.min(document.documentElement.clientWidth, window.innerWidth);
    //定义1rem宽度
    document.getElementsByTagName('html')[0].style.fontSize = (((100 * iWidth) / desWidth)) + 'px';
}
setDPR();
