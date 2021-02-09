"use strict";

//page setup
(function () {
  var $ = function $(e) {
    return document.querySelector(e);
  };

  var $a = function $a(e) {
    return document.querySelectorAll(e);
  }; //apply theme


  function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.querySelector('body').className = themeName;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = $a('.toggle-switch')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var s = _step.value;
        s.checked = themeName === 'theme-dark' ? true : false;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
    } else {
      setTheme('theme-dark');
    }
  }

  function stickNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("navbar-fixed");
    } else {
      navbar.classList.remove("navbar-fixed");
    }
  }

  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
  } else {
    setTheme('theme-light');
  }

  window.addEventListener('scroll', function () {
    return stickNavbar();
  }, {
    passive: true
  });
  var navbar = $('#navbar-fixed');
  var sticky = navbar.offsetTop;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = $a('.toggle-switch')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var s = _step2.value;
      s.addEventListener("change", function () {
        return toggleTheme();
      });
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var linkMenu = $('#nav-links').cloneNode(true);
  $('#sidenav').children[0].appendChild(linkMenu);
  M.Sidenav.init($('#sidenav'));
})();