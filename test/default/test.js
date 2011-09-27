var test = require('testling');

test('hello world', function (t) {
    t.plan(3);
    t.createWindow('http://71.198.76.38:8082/', function (win) {
        t.ok(Boolean(win), 'window object is not null');
        t.equal(win.document.title, 'socket.io test');
        
        var elem = win.document.getElementById('result');
        elem.onchange = function () {
            t.equal(elem.value, 'hello world!');
            t.end();
        };
    });
});
