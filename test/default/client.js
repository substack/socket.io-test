window.onload = function () {
    var socket = io.connect('http://71.198.76.38:9000/');
    socket.on('news', function (news) {
        var elem = document.getElementById('result');
        elem.value = news.toString();
        if (elem.onchange) elem.onchange();
    });
};
