! function (l) {
  var e, n = '<svg><symbol id="icon-ai-eye" viewBox="0 0 1024 1024"><path d="M1023.997 511.831c0 99.79-211.129 312.67-511.999 312.67C218.787 824.501 0 615.125 0 511.831c0-103.279 219.73-312.334 511.999-312.334 303.234 0.001 512.071 209.057 511.999 312.335L1023.998 511.831zM512.45 256.529C376.184 256.529 265.72 370.913 265.72 512c0 141.089 110.463 255.471 246.729 255.471 136.307 0 246.774-114.383 246.774-255.471C759.223 370.913 648.756 256.529 512.45 256.529L512.45 256.529zM511.999 348.901c-86.778 0-157.126 72.827-157.126 162.673 0 89.836 70.348 162.677 157.126 162.677s157.097-72.841 157.097-162.677C669.096 421.727 598.776 348.901 511.999 348.901L511.999 348.901z"  ></path></symbol><symbol id="icon-fanhui" viewBox="0 0 1024 1024"><path d="M305.519192 557.640404c-11.636364 0-23.40202-4.39596-32.323232-13.317172-17.842424-17.842424-17.842424-46.674747 0-64.517171L683.830303 69.30101c17.842424-17.842424 46.674747-17.842424 64.517172 0 17.842424 17.842424 17.842424 46.674747 0 64.517172L337.713131 544.323232c-8.921212 8.921212-20.557576 13.317172-32.193939 13.317172z m0 0" fill="" ></path><path d="M715.894949 968.145455c-11.636364 0-23.40202-4.39596-32.323232-13.317172L273.19596 544.323232c-17.842424-17.842424-17.842424-46.674747 0-64.517171 17.842424-17.842424 46.674747-17.842424 64.517171 0l410.505051 410.50505c17.842424 17.842424 17.842424 46.674747 0 64.517172-8.921212 8.921212-20.557576 13.317172-32.323233 13.317172z m0 0" fill="" ></path></symbol></svg>',
    t = (e = document.getElementsByTagName("script"))[e.length - 1].getAttribute("data-injectcss");
  if (t && !l.__iconfont__svg__cssinject__) {
    l.__iconfont__svg__cssinject__ = !0;
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
    } catch (e) {
      console && console.log(e)
    }
  }! function (e) {
    if (document.addEventListener)
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(e, 0);
      else {
        var t = function () {
          document.removeEventListener("DOMContentLoaded", t, !1), e()
        };
        document.addEventListener("DOMContentLoaded", t, !1)
      }
    else document.attachEvent && (o = e, i = l.document, c = !1, (d = function () {
      try {
        i.documentElement.doScroll("left")
      } catch (e) {
        return void setTimeout(d, 50)
      }
      n()
    })(), i.onreadystatechange = function () {
      "complete" == i.readyState && (i.onreadystatechange = null, n())
    });

    function n() {
      c || (c = !0, o())
    }
    var o, i, c, d
  }(function () {
    var e, t;
    (e = document.createElement("div")).innerHTML = n, n = null, (t = e.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", function (e, t) {
      t.firstChild ? function (e, t) {
        t.parentNode.insertBefore(e, t)
      }(e, t.firstChild) : t.appendChild(e)
    }(t, document.body))
  })
}(window);
