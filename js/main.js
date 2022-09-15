/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/section/section-map.js":
/*!**************************************************!*\
  !*** ./src/js/components/section/section-map.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

ymaps.ready(function () {
  var marker = document.querySelector('.map-marker');
  if (!marker) return;
  var map = new ymaps.Map('map', {
    center: [59.948194, 30.356644],
    zoom: 12,
    controls: []
  });
  var squareLayout = ymaps.templateLayoutFactory.createClass(marker.outerHTML);
  var squarePlacemark = new ymaps.Placemark([59.928194, 30.346644], {}, {
    iconLayout: squareLayout,
    iconShape: {
      type: 'Rectangle',
      coordinates: [[34, 100], [300, 500]]
    }
  });
  map.geoObjects.add(squarePlacemark);
});

/***/ }),

/***/ "./src/js/components/section/section-progress.js":
/*!*******************************************************!*\
  !*** ./src/js/components/section/section-progress.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  // Progress
  var button = document.querySelector('.js-progress-set-value');
  var progressValue = document.querySelector('.js-progress-value');

  if (button && progressValue) {
    button.addEventListener('click', function (e) {
      var oldValue = parseInt(progressValue.innerText.replace(/[^0-9]/g, ""));
      var value = parseInt(e.target.innerText.replace(/[^0-9]/g, ""));
      if (value > 100) value = 100;
      progressValue.style.width = "".concat(value, "%");
      console.log(oldValue);
      animateValue(oldValue, value, 400);
    });
  }

  var animateValue = function animateValue(start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function () {
      current += increment;
      progressValue.innerHTML = "".concat(current, " %");

      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }; // Collapsed text


  var collapsed = document.querySelector('.js-collapsed');
  var collapsedBtn = document.querySelector('.js-collapsed-more-btn');

  if (collapsed && collapsedBtn) {
    collapsedBtn.addEventListener('click', function () {
      var oldBtnText = collapsedBtn.innerText;
      var newBtnText = collapsedBtn.dataset.title;
      collapsedBtn.dataset.title = oldBtnText;
      collapsedBtn.innerText = newBtnText;
      collapsed.classList.toggle('collapsed-text--full');
    });
  }
})();

/***/ }),

/***/ "./src/js/components/section/section-slider.js":
/*!*****************************************************!*\
  !*** ./src/js/components/section/section-slider.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");


(function () {
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.slider__box', {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"]],
    slidesPerView: 2.75,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: '.slider__pagination',
      type: 'bullets',
      bulletClass: 'slider__bullet',
      bulletActiveClass: 'slider__bullet--current',
      clickable: true
    },
    navigation: {
      nextEl: '.slider__nav-button--next',
      prevEl: '.slider__nav-button--prev'
    },
    breakpoints: {
      320: {
        slidesPerView: 2.5,
        spaceBetween: 16
      },
      769: {
        spaceBetween: 22
      },
      1281: {
        slidesPerView: 2.75,
        spaceBetween: 30
      }
    }
  });
})();

/***/ }),

/***/ "./src/js/components/select.js":
/*!*************************************!*\
  !*** ./src/js/components/select.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var selectList = document.querySelectorAll('.select');
  if (!selectList.length) return;
  selectList.forEach(function (select) {
    var field = select.querySelector('.select__field');
    select.addEventListener('click', function (e) {
      e.stopPropagation();
      select.classList.toggle('select--opened');
    });
    var elemList = select.querySelectorAll('.select__list-elem');
    elemList.forEach(function (elem) {
      elem.addEventListener('click', function () {
        field.value = elem.innerHTML;
      });
    });
  });
  document.addEventListener('click', function () {
    selectList.forEach(function (select) {
      select.classList.remove('select--opened');
    });
  });
})();

/***/ }),

/***/ "./src/js/components/to-top.js":
/*!*************************************!*\
  !*** ./src/js/components/to-top.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var toToButton = document.querySelector('.js-to-top');
  if (!toToButton) return;

  var smoothScroll = function smoothScroll() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
      window.requestAnimationFrame(smoothScroll);
      window.scrollTo(0, currentScroll - currentScroll / 20);
    }
  };

  toToButton.addEventListener('click', smoothScroll);
})();

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/select */ "./src/js/components/select.js");
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_section_section_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/section/section-slider */ "./src/js/components/section/section-slider.js");
/* harmony import */ var _components_section_section_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/section/section-progress */ "./src/js/components/section/section-progress.js");
/* harmony import */ var _components_section_section_progress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_section_section_progress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_section_section_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/section/section-map */ "./src/js/components/section/section-map.js");
/* harmony import */ var _components_section_section_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_section_section_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_to_top__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/to-top */ "./src/js/components/to-top.js");
/* harmony import */ var _components_to_top__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_to_top__WEBPACK_IMPORTED_MODULE_4__);






/***/ })

/******/ });
//# sourceMappingURL=main.js.map