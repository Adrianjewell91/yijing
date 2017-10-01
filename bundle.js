/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function() {
  const width = 500;
  const height = 500;

  const canvasEl = document.getElementById("myCanvas");

  canvasEl.width = width;
  canvasEl.height = height;

  const ctx = canvasEl.getContext("2d");

  let gua = [0,1,0,0,1,1];

  gua.forEach((el,i) => {
    if (el === 1) {
      drawYang("black", ctx, (width/4),100+(i*40));
    } else {
      drawYin("black", ctx, (width/4),100+(i*40));
    }
  });
});

  function drawYin(color, ctx, x, y) {
    ctx.fillStyle = color;
    ctx.fillRect(x,y,100,20);
    ctx.fillRect(x+150,y,100,20);
  }

  function drawYang(color, ctx, x,y) {
    ctx.fillStyle = color;
    ctx.fillRect(x,y,250,20);
  }

  function shuffle(a) {
    for (let i=a.length; i; i--) {
      let j = Math.floor(Math.random()*i);
      [a[j],a[i-1]] = [a[i-1],a[j]];
    }
    return a;
  }


/***/ })
/******/ ]);