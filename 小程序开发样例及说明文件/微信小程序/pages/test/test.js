var a = 0, t = 0, e = 0, s = 0;
var result1="";
Page({
    anglex: function(t) {
        a = t.detail.value;
    },
    angley: function(a) {
        t = a.detail.value;
    },
    anglexx: function(a) {
        e = a.detail.value;
    },
    angleyy: function(a) {
        s = a.detail.value;
    },
    data: {
        angleyy: "",
        angley: "",
        anglex: "",
        anglexx: "",
        result: "0",
        r: "0",
     
    },
    adddata: function() {
    
        if (parseFloat(e) == parseFloat(a) && (parseFloat(s) == parseFloat(t) && this.setData({
            result: "两点重合，坐标方位角为任意值！",
          r: Math.sqrt((parseFloat(e) - parseFloat(a)) * (parseFloat(e) - parseFloat(a)) + (parseFloat(s) - parseFloat(t)) * (parseFloat(s) - parseFloat(t))).toFixed(5)
        }), parseFloat(s) > parseFloat(t) && this.setData({
          r: Math.sqrt((parseFloat(e) - parseFloat(a)) * (parseFloat(e) - parseFloat(a)) + (parseFloat(s) - parseFloat(t)) * (parseFloat(s) - parseFloat(t))).toFixed(5),
            result: "90°0′0″"
        }), parseFloat(s) < parseFloat(t) && this.setData({
          r: Math.sqrt((parseFloat(e) - parseFloat(a)) * (parseFloat(e) - parseFloat(a)) + (parseFloat(s) - parseFloat(t)) * (parseFloat(s) - parseFloat(t))).toFixed(5),
            result: "270°0′0″"
        })), parseFloat(e) > parseFloat(a)) {
            if (parseFloat(s) > parseFloat(t)) {
                var l = parseFloat(e) - parseFloat(a), r = (parseFloat(s) - parseFloat(t)) / l, o = 60 * ((n = 60 * ((p = Math.atan(r) * (180 / Math.PI)) - (F = parseInt(p)))) - (i = parseInt(n)));
                this.setData({
                  r: Math.sqrt((parseFloat(e) - parseFloat(a)) * (parseFloat(e) - parseFloat(a)) + (parseFloat(s) - parseFloat(t)) * (parseFloat(s) - parseFloat(t))).toFixed(5),
                    result: F + "°" + i + "′" + o.toFixed(4) + "″"
                });
            }
            if (parseFloat(s) == parseFloat(t) && this.setData({
              r: Math.sqrt((parseFloat(e) - parseFloat(a)) * (parseFloat(e) - parseFloat(a)) + (parseFloat(s) - parseFloat(t)) * (parseFloat(s) - parseFloat(t))).toFixed(5),
                result: "00°0′0″"
            }), parseFloat(s) < parseFloat(t)) {
                l = parseFloat(e) - parseFloat(a), r = (parseFloat(s) - parseFloat(t)) / l, o = 60 * ((n = 60 * ((p = (Math.atan(-r) + 3 * Math.PI / 2) * (180 / Math.PI)) - (F = parseInt(p)))) - (i = parseInt(n)));
                this.setData({
                  r: Math.sqrt((parseFloat(e) - parseFloat(a)) * (parseFloat(e) - parseFloat(a)) + (parseFloat(s) - parseFloat(t)) * (parseFloat(s) - parseFloat(t))).toFixed(5),
                    result: F + "°" + i + "′" + o.toFixed(4) + "″"
                });
            }
        }
        if (parseFloat(e) < parseFloat(a)) {
            if (parseFloat(s) > parseFloat(t)) {
                l = parseFloat(e) - parseFloat(a), r = (parseFloat(s) - parseFloat(t)) / l, o = 60 * ((n = 60 * ((p = (Math.atan(-r) + Math.PI / 2) * (180 / Math.PI)) - (F = parseInt(p)))) - (i = parseInt(n)));
                this.setData({
                  r: Math.sqrt((parseFloat(e) - parseFloat(a)) * (parseFloat(e) - parseFloat(a)) + (parseFloat(s) - parseFloat(t)) * (parseFloat(s) - parseFloat(t))).toFixed(5),
                    result: F + "°" + i + "′" + o.toFixed(4) + "″"
                });
            }
            if (parseFloat(s) == parseFloat(t) && this.setData({
              r: Math.sqrt((parseFloat(e) - parseFloat(a)) * (parseFloat(e) - parseFloat(a)) + (parseFloat(s) - parseFloat(t)) * (parseFloat(s) - parseFloat(t))).toFixed(5),
                result: "180°0′0″"
            }), parseFloat(s) < parseFloat(t)) {
                var p, F, n, i;
                l = parseFloat(e) - parseFloat(a), r = (parseFloat(s) - parseFloat(t)) / l, o = 60 * ((n = 60 * ((p = (Math.atan(r) + Math.PI) * (180 / Math.PI)) - (F = parseInt(p)))) - (i = parseInt(n)));
                this.setData({
                    result: F + "°" + i + "′" + o.toFixed(4) + "″",
                  r: Math.sqrt((parseFloat(e) - parseFloat(a)) * (parseFloat(e) - parseFloat(a)) + (parseFloat(s) - parseFloat(t)) * (parseFloat(s) - parseFloat(t))).toFixed(5)

                });
            }
        }
    },
  
});