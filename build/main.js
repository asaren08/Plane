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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Canvas/GlCanvas.ts":
/*!********************************!*\
  !*** ./src/Canvas/GlCanvas.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// キャンバスクラス
var GlCanvas = /** @class */ (function () {
    // コンストラクタ
    // @param width 幅
    // @param height 高さ
    function GlCanvas(width, height) {
        this.canvas = this.getCanvasContext(width, height);
        this.gl = this.getGlContext();
        this.frameBuffer = this.gl.createFramebuffer();
    }
    // キャンバスコンテキストを取得する    
    // @param width 幅
    // @param height 高さ
    GlCanvas.prototype.getCanvasContext = function (width, height) {
        var cnvs = document.getElementById('canvas');
        cnvs.width = width;
        cnvs.height = height;
        return cnvs;
    };
    // glコンテキストを取得する
    GlCanvas.prototype.getGlContext = function () {
        var gl = this.canvas.getContext("experimental-webgl", { preserveDrawingBuffer: true });
        if (!gl) { // コンテキストを取得できなかったとき
            return null;
        }
        this.initGlContext(gl);
        return gl;
    };
    // glコンテキストを初期化する
    GlCanvas.prototype.initGlContext = function (gl) {
        gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
    };
    // キャンバスを取得する
    GlCanvas.prototype.getCanvas = function () {
        return this.canvas;
    };
    // glコンテキストを取得する
    GlCanvas.prototype.getGL = function () {
        return this.gl;
    };
    // フレームバッファを取得する
    GlCanvas.prototype.getFrameBuffer = function () {
        return this.frameBuffer;
    };
    // キャンバスサイズを設定する
    // @param width 幅
    // @param height 高さ
    GlCanvas.prototype.setCanvasSize = function (width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
    };
    return GlCanvas;
}());
exports.GlCanvas = GlCanvas;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GlCanvas_1 = __webpack_require__(/*! ./Canvas/GlCanvas */ "./src/Canvas/GlCanvas.ts");
// 実行関数
function main() {
    var canvas = new GlCanvas_1.GlCanvas(512, 512);
}
main();


/***/ })

/******/ });
//# sourceMappingURL=main.js.map