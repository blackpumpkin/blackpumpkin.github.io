// 樱花飘落 
(function () {
    // 判断是否为主页（匹配 "/" 或 "/index.html"）
    var path = window.location.pathname;
    if (path !== '/' && path !== '/index.html') {
        return; // 不是首页直接退出，不渲染樱花
    }

    // 樱花飘落
    var sakuraCount = 30; // 樱花数量，可自行微调
    var sakuraArray = [];

    function Sakura(x, y, s, r, fn) {
        this.x = x;
        this.y = y;
        this.s = s;
        this.r = r;
        this.fn = fn;
    }

    Sakura.prototype.draw = function (c) {
        c.save();
        var xc = 40 * this.s / 4;
        c.translate(this.x, this.y);
        c.rotate(this.r);
        c.beginPath();
        c.moveTo(0, 0);
        c.bezierCurveTo(xc, -xc, xc * 2, xc, 0, xc * 2);
        c.bezierCurveTo(-xc, xc, -xc, -xc, 0, 0);
        c.fillStyle = "#FFC0CB"; // 樱花颜色（粉色）
        c.fill();
        c.restore();
    };

    Sakura.prototype.update = function () {
        this.x += this.fn.x;
        this.y += this.fn.y;
        this.r += this.fn.r;
        if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight) {
            this.x = Math.random() * window.innerWidth;
            this.y = -10;
            this.r = Math.random() * 360;
        }
    };

    function startSakura() {
        var canvas = document.createElement("canvas");
        canvas.id = "sakura";
        canvas.style.cssText = "position:fixed;top:0;left:0;pointer-events:none;z-index:9999;";
        document.body.appendChild(canvas);
        
        var ctx = canvas.getContext("2d");
        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener("resize", resize);
        resize();

        for (var i = 0; i < sakuraCount; i++) {
            sakuraArray.push(new Sakura(
                Math.random() * canvas.width,
                Math.random() * canvas.height,
                Math.random() + 0.5,
                Math.random() * 360,
                { x: Math.random() - 0.5, y: Math.random() + 1, r: Math.random() * 0.02 }
            ));
        }

        function render() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            sakuraArray.forEach(function (s) {
                s.update();
                s.draw(ctx);
            });
            requestAnimationFrame(render);
        }
        render();
    }

    if (document.readyState === "complete") {
        startSakura();
    } else {
        window.addEventListener("DOMContentLoaded", startSakura);
    }
})();

// 如果开启了 PJAX，页面切换时清除樱花
document.addEventListener('pjax:send', function () {
    var canvas = document.getElementById('sakura');
    if (canvas) {
        canvas.remove();
    }
});