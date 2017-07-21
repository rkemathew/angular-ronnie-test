 /*!
 * Chartwell Web V. 1.1 - June 2011
 * Copyright (c) 2011 TK TYPE
 *
 * Licensing: http://www.tktype.com/chartwell.php
 * Documentation: http://www.tktype.com/chartwell-web.php
 */

/*!
 * With the help of
 *
 * isFontFaceSupported() script
 * Copyright (c) Diego Perini
 * via http://paulirish.com/2009/font-face-feature-detection/
 *
 * getElementsByClassName() script
 * Developed by Robert Nyman, http://www.robertnyman.com
 * Code/licensing: http://code.google.com/p/getelementsbyclassname/
 */
var isFontFaceSupported = function() {
    var b, o = document, y = o.head || o.getElementsByTagName("head")[0] || docElement, r = o.createElement("style"), o = o.implementation || {hasFeature: function() {
            return !1
        }};
    r.type = "text/css";
    y.insertBefore(r, y.firstChild);
    b = r.sheet || r.styleSheet;
    return (o.hasFeature("CSS2", "") ? function(g) {
        if (!b || !g)
            return !1;
        var h = !1;
        try {
            b.insertRule(g, 0), h = !/unknown/i.test(b.cssRules[0].cssText), b.deleteRule(b.cssRules.length - 1)
        } catch (i) {
        }
        return h
    } : function(g) {
        if (!b || !g)
            return !1;
        b.cssText = g;
        return b.cssText.length !==
        0 && !/unknown/i.test(b.cssText) && b.cssText.replace(/\r+|\n+/g, "").indexOf(g.split(" ")[0]) === 0
    })('@font-face { font-family: "font"; src: "font.ttf"; }')
}(), tkcw_run_count = {pies: 0,bars: 0,lines: 0};
function chartwell(b) {
    if (isFontFaceSupported) {
        var o = function(a, b, c) {
            var e = [];
            b == null && (b = document);
            c == null && (c = "*");
            b = b.getElementsByTagName(c);
            c = b.length;
            a = RegExp("(^|\\s)" + a + "(\\s|$)");
            for (j = d = 0; d < c; d++)
                a.test(b[d].className) && (e[j] = b[d], j++);
            return e
        }, y = function() {
            var a = !1, b;
            b = -1;
            navigator.appName == "Microsoft Internet Explorer" && /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) != null && (b = parseFloat(RegExp.$1));
            b > -1 && (a = b >= 9 ? !1 : !0);
            return a
        }(), r = function(a, b, c) {
            var b = document.getElementsByTagName("head")[0],
            d = document.createElement("style");
            d.setAttribute("type", "text/css");
            y ? (tkcw_run_count.lines == 0 && tkcw_run_count.bars == 0 && tkcw_run_count.pies == 0 && (document.getElementsByTagName("body")[0].innerHTML += "<div id='cw-lines-styles' style='display:none;'>&nbsp;</div><div id='cw-pies-styles' style='display:none;'>&nbsp;</div><div id='cw-bars-styles' style='display:none;'>&nbsp;</div>"), c == "lines" ? document.getElementById("cw-lines-styles").innerHTML += "<style type='text/css'>" + a + "</style>" : c == "bars" ? document.getElementById("cw-bars-styles").innerHTML +=
            "<style type='text/css'>" + a + "</style>" : c == "pies" && (document.getElementById("cw-pies-styles").innerHTML += "<style type='text/css'>" + a + "</style>")) : (d.appendChild(document.createTextNode(a)), b.appendChild(d))
        }, g, h, i, e, c, k, d, l, q, u, a, x, s, t, n, v, z = "", m, B = h = q = "on", f = "fonts";
        m = "span";
        v = "";
        var p, D = i = "", A = "on";
        span_class = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"];
        var C = function(a,
        b) {
            a == 0 ? g = b.innerHTML : (D = o("cw-raw-data", b), g = D[0].innerHTML);
            z = g
        }, w = function(a, b) {
            for (var c = o("chartwell-" + a), d = 0; d <= c.length - 1; ) {
                var e = o("cw-graph", c[d]), f = o("cw-raw-data", c[d]), g = "block";
                m == "span" && (g = "block");
                if (b == "off")
                    var h = g, g = "none";
                else
                    h = "none";
                f[0].style.display = h;
                for (f = 0; f <= e.length - 1; )
                    e[f].style.display = g, f++;
                d++
            }
        };
        if (typeof b != "undefined") {
            if (typeof b.pies != "undefined")
                q = b.pies;
            if (typeof b.bars != "undefined")
                h = b.bars;
            if (typeof b.lines != "undefined")
                B = b.lines;
            if (typeof b.font_path != "undefined")
                f =
                b.font_path, f = f.replace("http://", "x");
            if (typeof b.wrap != "undefined")
                m = b.wrap;
            if (typeof b.separator != "undefined")
                v = b.separator;
            if (typeof b.auto_styles != "undefined")
                A = b.auto_styles
        }
        if (h == "on") {
            n = o("chartwell-bars");
            b = n.length - 1;
            if (b >= 0) {
                g = "";
                h = 0;
                for (i = 1; h <= b; ) {
                    C(tkcw_run_count.bars, n[h]);
                    c = [];
                    g = g.replace(/^\s*/, "").replace(/\s*$/, "");
                    c.space_split = g.split(" ");
                    num_graphs = c.space_split.length - 1;
                    num_graphs_count = 0;
                    k = "";
                    for (e = l = d = 0; num_graphs_count <= num_graphs; ) {
                        k += "<" + m + ' class="cw-bars-graph-' + span_class[num_graphs_count +
                        1] + ' cw-graph">';
                        c.plus_split = c.space_split[num_graphs_count].split("+");
                        u = c.plus_split.length - 1;
                        for (d = e = 0; d <= u; )
                            e = parseInt(c.plus_split[d], 10), isNaN(c.plus_split[d]) ? c.plus_split[d].indexOf("=") != -1 && (c.plus_split[d] = c.plus_split[d].replace(/\=/g, ""), e = parseInt(c.plus_split[d], 10), p = e + 57344, k += '<span class="cw-value-slice' + span_class[d + 1] + '">' + String.fromCharCode(p) + "</span>", a = "yes") : (p = e + 57344, k += '<span class="cw-value-slice' + span_class[d + 1] + '">' + String.fromCharCode(p) + "</span>"), d++;
                        a == "yes" && (k += '<span class="cw-bars-top">\ue3ea</span>');
                        a = "no";
                        k += v + "</" + m + ">";
                        num_graphs_count++
                    }
                    i = "<" + m + ' class="cw-raw-data">' + z + "</" + m + ">";
                    n[h].innerHTML = k + i;
                    h++
                }
            }
            tkcw_run_count.bars == 0 && A == "on" ? r("@font-face{font-family:'ChartwellBars-Web';src:url('" + f + "/chartwell-pies-web.eot');src:url('" + f + "/chartwell-pies-web.eot?#iefix') format('eot'),url('" + f + "/chartwell-pies-web.woff') format('woff'),url('" + f + "/chartwell-pies-web.ttf') format('truetype'),url('" + f + "/chartwell-pies-web.svg#webfontPfT60VSA') format('svg');font-weight:normal;font-style:normal}.cw-graph{-webkit-text-size-adjust: 100%;-ms-text-size-adjust: none;}.chartwell-bars {font-family: ChartwellBars-Web, helvetica, sans-serif;}.cw-raw-data{display:none;}",
            n[0], "bars") : w("bars", "on");
            tkcw_run_count.bars = 1
        } else if (tkcw_run_count.bars == 1)
            w("bars", "off"), tkcw_run_count.bars = 2;
        if (q == "on") {
            n = o("chartwell-pies");
            b = n.length - 1;
            if (b >= 0) {
                a = [];
                a.A = "\uf3bd";
                a.B = "\uf3be";
                a.C = "\uf3bf";
                a.D = "\uf3c0";
                a.E = "\uf3c1";
                a.F = "\uf3c2";
                a.G = "\uf3c3";
                a.H = "\uf3c4";
                a.I = "\uf3c5";
                a.J = "\uf3c6";
                a.K = "\uf3c7";
                a.L = "\uf3c8";
                a.M = "\uf3c9";
                a.N = "\uf3ca";
                a.O = "\uf3cb";
                a.P = "\uf3cc";
                a.Q = "\uf3cd";
                a.R = "\uf3ce";
                a.S = "\uf3cf";
                a.T = "\uf3d0";
                a.U = "\uf3d1";
                a.V = "\uf3d2";
                a.W = "\uf3d3";
                a.X = "\uf3d4";
                a.Y = "\uf3d5";
                a.Z = "\uf3d6";
                a.a = "\uf3d7";
                a.b = "\uf3d8";
                a.c = "\uf3d9";
                a.d = "\uf3da";
                a.e = "\uf3db";
                a.f = "\uf3dc";
                a.g = "\uf3dd";
                a.h = "\uf3de";
                a.i = "\uf3df";
                a.j = "\uf3e0";
                a.k = "\uf3e1";
                a.l = "\uf3e2";
                a.m = "\uf3e3";
                a.n = "\uf3e4";
                a.o = "\uf3e5";
                a.p = "\uf3e6";
                a.q = "\uf3e7";
                a.r = "\uf3e8";
                a.s = "\uf3e9";
                a.t = "\uf3ea";
                a.u = "\uf3eb";
                a.v = "\uf3ec";
                a.w = "\uf3ed";
                a.x = "\uf3ee";
                a.y = "\uf3ef";
                a.z = "\uf3f0";
                g = "";
                h = 0;
                for (i = 1; h <= b; ) {
                    C(tkcw_run_count.pies, n[h]);
                    current_pie_total = 0;
                    c = [];
                    g = g.replace(/^\s*/, "").replace(/\s*$/, "");
                    c.space_split = g.split(" ");
                    num_graphs =
                    c.space_split.length - 1;
                    num_graphs_count = 0;
                    k = "";
                    i = 1;
                    l = d = 0;
                    q = "";
                    s = e = 0;
                    for (x = "no"; num_graphs_count <= num_graphs; ) {
                        k += "<" + m + ' class="cw-pies-graph-' + span_class[num_graphs_count + 1] + ' cw-graph">';
                        c.plus_split = c.space_split[num_graphs_count].split("+");
                        u = c.plus_split.length - 1;
                        i = 1;
                        l = d = 0;
                        q = "";
                        for (e = 0; d <= u; ) {
                            e = parseInt(c.plus_split[d], 10);
                            e >= 101 && (e = 100);
                            if (isNaN(c.plus_split[d]))
                                for (k += '<span class="cw-pies-counter' + q + '">' + a[c.plus_split[d]] + "</span>"; s > 0; )
                                    c.space_split[num_graphs_count + s] += "+" + c.plus_split[d],
                                    s--;
                            else
                                l + e > 100 || x == "yes" ? (t += e, x == "yes" && t <= 100 ? c.space_split[num_graphs_count + s] += "+" + c.plus_split[d] : (s++, c.space_split.splice(num_graphs_count + s, 0, c.plus_split[d]), t = e, num_graphs++), x = "yes") : (p = l * 101 - (1 + l) * (l / 2) + e + 57344 - 1, p == 57344 && (p = 62449), k += '<span class="cw-value-slice' + span_class[i] + q + '">' + String.fromCharCode(p) + "</span>", q = " cw-pies-center", l += e, i++);
                            d++
                        }
                        k += v + "</" + m + ">";
                        x = "no";
                        s = 0;
                        num_graphs_count++
                    }
                    i = "<" + m + ' class="cw-raw-data">' + z + "</" + m + ">";
                    n[h].innerHTML = k + i;
                    h++
                }
            }
            tkcw_run_count.pies == 0 &&
            A == "on" ? r("@font-face{font-family:'ChartwellPies-Web';src:url('" + f + "/chartwell-pies-web.eot');src:url('" + f + "/chartwell-pies-web.eot?#iefix') format('eot'),url('" + f + "/chartwell-pies-web.woff') format('woff'),url('" + f + "/chartwell-pies-web.ttf') format('truetype'),url('" + f + "/chartwell-pies-web.svg#webfontjsvkp4eJ') format('svg');font-weight:normal;font-style:normal}.cw-graph{-webkit-text-size-adjust: 100%;-ms-text-size-adjust: none;}.chartwell-pies {font-family: ChartwellPies-Web, helvetica, sans-serif;}.cw-pies-center{ margin-left:-1em;}.cw-raw-data{display:none;}",
            n[0], "pies") : w("pies", "on");
            tkcw_run_count.pies = 1
        } else if (tkcw_run_count.pies == 1)
            w("pies", "off"), tkcw_run_count.pies = 2;
        if (B == "on") {
            n = o("chartwell-lines");
            b = n.length - 1;
            if (b >= 0) {
                g = "";
                h = 0;
                for (i = 1; h <= b; ) {
                    C(tkcw_run_count.lines, n[h]);
                    c = [];
                    g = g.replace(/^\s*/, "").replace(/\s*$/, "");
                    c.space_split = g.split(" ");
                    num_graphs = c.space_split.length - 1;
                    num_graphs_count = 0;
                    k = "";
                    for (e = l = d = 0; num_graphs_count <= num_graphs; ) {
                        k += "<" + m + ' class="cw-lines-graph-' + span_class[num_graphs_count + 1] + ' cw-graph">';
                        c.plus_split = c.space_split[num_graphs_count].split("+");
                        u = c.plus_split.length - 1;
                        e = 0;
                        l = c.plus_split[0];
                        l >= 101 && (l = 100);
                        for (i = d = 1; d <= u; )
                            e = parseInt(c.plus_split[d], 10), isNaN(c.plus_split[d]) || (e >= 55 ? (e >= 101 && (e = 100), p = (e - 55) * 101 + parseInt(l, 10) + 57344, t = "cw-value-slice" + span_class[i], k += '<span class="' + t + ' chartwell-lines-supplement">' + String.fromCharCode(p) + "</span>") : (p = e * 101 + parseInt(l, 10) + 57344, t = "cw-value-slice" + span_class[i], k += e == 0 && l == 0 ? '<span class="' + t + '">&#62905;</span>' : '<span class="' + t + '">' + String.fromCharCode(p) + "</span>"), l = e), i++, d++;
                        k += v + "</" + m + ">";
                        num_graphs_count++
                    }
                    i = "<" + m + ' class="cw-raw-data">' + z + "</" + m + ">";
                    n[h].innerHTML = k + i;
                    h++
                }
            }
            tkcw_run_count.lines == 0 && A == "on" ? r("@font-face{font-family:'ChartwellLines-Web1';src:url('" + f + "/chartwell-lines-web1.eot');src:url('" + f + "/chartwell-lines-web1.eot?#iefix') format('eot'),url('" + f + "/chartwell-lines-web1.woff') format('woff'),url('" + f + "/chartwell-lines-web1.ttf') format('truetype'),url('" + f + "/chartwell-lines-web1.svg#webfontFj7iSXzQ') format('svg');font-weight:normal;font-style:normal}@font-face{font-family:'ChartwellLines-Web2';src:url('" +
            f + "/chartwell-lines-web2.eot');src:url('" + f + "/chartwell-lines-web2.eot?#iefix') format('eot'),url('" + f + "/chartwell-lines-web2.woff') format('woff'),url('" + f + "/chartwell-lines-web2.ttf') format('truetype'),url('" + f + "/chartwell-lines-web2.svg#webfont8wiMObuq') format('svg');font-weight:normal;font-style:normal}.chartwell-lines {font-family: ChartwellLines-Web1, helvetica, sans-serif; }.chartwell-lines-supplement {font-family: ChartwellLines-Web2, helvetica, sans-serif;}.cw-graph{-webkit-text-size-adjust: 100%;-ms-text-size-adjust: none;}.cw-raw-data{display:none;}",
            n[0], "lines") : w("lines", "on");
            tkcw_run_count.lines = 1
        } else if (tkcw_run_count.lines == 1)
            w("lines", "off"), tkcw_run_count.lines = 2;
        m = "span";
        v = "";
        h = B = q = "on";
        f = "fonts"
    }
}
;
