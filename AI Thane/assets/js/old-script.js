// 1
WebFont.load({
  google: {
    families: ["Roboto Condensed:300,300italic,regular,italic,700"],
  },
});

// 2
!(function (o, c) {
  var n = c.documentElement,
    t = " w-mod-";
  (n.className += t + "js"),
    ("ontouchstart" in o || (o.DocumentTouch && c instanceof DocumentTouch)) &&
      (n.className += t + "touch");
})(window, document);

// 3
