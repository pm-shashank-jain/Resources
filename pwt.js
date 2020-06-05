/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["owpbjsChunk"];
/******/ 	window["owpbjsChunk"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		295: 0
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 747);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "internal", function() { return internal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (immutable) */ __webpack_exports__["getUniqueIdentifierStr"] = getUniqueIdentifierStr;
/* harmony export (immutable) */ __webpack_exports__["generateUUID"] = generateUUID;
/* harmony export (immutable) */ __webpack_exports__["getBidIdParameter"] = getBidIdParameter;
/* harmony export (immutable) */ __webpack_exports__["tryAppendQueryString"] = tryAppendQueryString;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseQueryStringParameters", function() { return parseQueryStringParameters; });
/* harmony export (immutable) */ __webpack_exports__["transformAdServerTargetingObj"] = transformAdServerTargetingObj;
/* harmony export (immutable) */ __webpack_exports__["getAdUnitSizes"] = getAdUnitSizes;
/* harmony export (immutable) */ __webpack_exports__["parseSizesInput"] = parseSizesInput;
/* harmony export (immutable) */ __webpack_exports__["parseGPTSingleSizeArray"] = parseGPTSingleSizeArray;
/* harmony export (immutable) */ __webpack_exports__["parseGPTSingleSizeArrayToRtbSize"] = parseGPTSingleSizeArrayToRtbSize;
/* harmony export (immutable) */ __webpack_exports__["getWindowTop"] = getWindowTop;
/* harmony export (immutable) */ __webpack_exports__["getWindowSelf"] = getWindowSelf;
/* harmony export (immutable) */ __webpack_exports__["getWindowLocation"] = getWindowLocation;
/* harmony export (immutable) */ __webpack_exports__["logMessage"] = logMessage;
/* harmony export (immutable) */ __webpack_exports__["logInfo"] = logInfo;
/* harmony export (immutable) */ __webpack_exports__["logWarn"] = logWarn;
/* harmony export (immutable) */ __webpack_exports__["logError"] = logError;
/* harmony export (immutable) */ __webpack_exports__["hasConsoleLogger"] = hasConsoleLogger;
/* harmony export (immutable) */ __webpack_exports__["debugTurnedOn"] = debugTurnedOn;
/* harmony export (immutable) */ __webpack_exports__["createInvisibleIframe"] = createInvisibleIframe;
/* harmony export (immutable) */ __webpack_exports__["getParameterByName"] = getParameterByName;
/* harmony export (immutable) */ __webpack_exports__["isA"] = isA;
/* harmony export (immutable) */ __webpack_exports__["isFn"] = isFn;
/* harmony export (immutable) */ __webpack_exports__["isStr"] = isStr;
/* harmony export (immutable) */ __webpack_exports__["isArray"] = isArray;
/* harmony export (immutable) */ __webpack_exports__["isNumber"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["isPlainObject"] = isPlainObject;
/* harmony export (immutable) */ __webpack_exports__["isBoolean"] = isBoolean;
/* harmony export (immutable) */ __webpack_exports__["isEmpty"] = isEmpty;
/* harmony export (immutable) */ __webpack_exports__["isEmptyStr"] = isEmptyStr;
/* harmony export (immutable) */ __webpack_exports__["_each"] = _each;
/* harmony export (immutable) */ __webpack_exports__["contains"] = contains;
/* harmony export (immutable) */ __webpack_exports__["_map"] = _map;
/* harmony export (immutable) */ __webpack_exports__["hasOwn"] = hasOwn;
/* harmony export (immutable) */ __webpack_exports__["insertElement"] = insertElement;
/* harmony export (immutable) */ __webpack_exports__["triggerPixel"] = triggerPixel;
/* harmony export (immutable) */ __webpack_exports__["callBurl"] = callBurl;
/* harmony export (immutable) */ __webpack_exports__["insertHtmlIntoIframe"] = insertHtmlIntoIframe;
/* harmony export (immutable) */ __webpack_exports__["insertUserSyncIframe"] = insertUserSyncIframe;
/* harmony export (immutable) */ __webpack_exports__["createTrackPixelHtml"] = createTrackPixelHtml;
/* harmony export (immutable) */ __webpack_exports__["createTrackPixelIframeHtml"] = createTrackPixelIframeHtml;
/* harmony export (immutable) */ __webpack_exports__["getValueString"] = getValueString;
/* harmony export (immutable) */ __webpack_exports__["uniques"] = uniques;
/* harmony export (immutable) */ __webpack_exports__["flatten"] = flatten;
/* harmony export (immutable) */ __webpack_exports__["getBidRequest"] = getBidRequest;
/* harmony export (immutable) */ __webpack_exports__["getKeys"] = getKeys;
/* harmony export (immutable) */ __webpack_exports__["getValue"] = getValue;
/* harmony export (immutable) */ __webpack_exports__["getKeyByValue"] = getKeyByValue;
/* harmony export (immutable) */ __webpack_exports__["getBidderCodes"] = getBidderCodes;
/* harmony export (immutable) */ __webpack_exports__["isGptPubadsDefined"] = isGptPubadsDefined;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHighestCpm", function() { return getHighestCpm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOldestHighestCpmBid", function() { return getOldestHighestCpmBid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLatestHighestCpmBid", function() { return getLatestHighestCpmBid; });
/* harmony export (immutable) */ __webpack_exports__["shuffle"] = shuffle;
/* harmony export (immutable) */ __webpack_exports__["adUnitsFilter"] = adUnitsFilter;
/* harmony export (immutable) */ __webpack_exports__["deepClone"] = deepClone;
/* harmony export (immutable) */ __webpack_exports__["inIframe"] = inIframe;
/* harmony export (immutable) */ __webpack_exports__["isSafariBrowser"] = isSafariBrowser;
/* harmony export (immutable) */ __webpack_exports__["replaceAuctionPrice"] = replaceAuctionPrice;
/* harmony export (immutable) */ __webpack_exports__["timestamp"] = timestamp;
/* harmony export (immutable) */ __webpack_exports__["hasDeviceAccess"] = hasDeviceAccess;
/* harmony export (immutable) */ __webpack_exports__["checkCookieSupport"] = checkCookieSupport;
/* harmony export (immutable) */ __webpack_exports__["delayExecution"] = delayExecution;
/* harmony export (immutable) */ __webpack_exports__["groupBy"] = groupBy;
/* harmony export (immutable) */ __webpack_exports__["getDefinedParams"] = getDefinedParams;
/* harmony export (immutable) */ __webpack_exports__["isValidMediaTypes"] = isValidMediaTypes;
/* harmony export (immutable) */ __webpack_exports__["getBidderRequest"] = getBidderRequest;
/* harmony export (immutable) */ __webpack_exports__["getUserConfiguredParams"] = getUserConfiguredParams;
/* harmony export (immutable) */ __webpack_exports__["getOrigin"] = getOrigin;
/* harmony export (immutable) */ __webpack_exports__["getDNT"] = getDNT;
/* harmony export (immutable) */ __webpack_exports__["isAdUnitCodeMatchingSlot"] = isAdUnitCodeMatchingSlot;
/* harmony export (immutable) */ __webpack_exports__["isSlotMatchingAdUnitCode"] = isSlotMatchingAdUnitCode;
/* harmony export (immutable) */ __webpack_exports__["getGptSlotInfoForAdUnitCode"] = getGptSlotInfoForAdUnitCode;
/* harmony export (immutable) */ __webpack_exports__["unsupportedBidderMessage"] = unsupportedBidderMessage;
/* harmony export (immutable) */ __webpack_exports__["isInteger"] = isInteger;
/* harmony export (immutable) */ __webpack_exports__["convertCamelToUnderscore"] = convertCamelToUnderscore;
/* harmony export (immutable) */ __webpack_exports__["cleanObj"] = cleanObj;
/* harmony export (immutable) */ __webpack_exports__["pick"] = pick;
/* harmony export (immutable) */ __webpack_exports__["transformBidderParamKeywords"] = transformBidderParamKeywords;
/* harmony export (immutable) */ __webpack_exports__["convertTypes"] = convertTypes;
/* harmony export (immutable) */ __webpack_exports__["isArrayOfNums"] = isArrayOfNums;
/* harmony export (immutable) */ __webpack_exports__["fill"] = fill;
/* harmony export (immutable) */ __webpack_exports__["chunk"] = chunk;
/* harmony export (immutable) */ __webpack_exports__["getMinValueFromArray"] = getMinValueFromArray;
/* harmony export (immutable) */ __webpack_exports__["getMaxValueFromArray"] = getMaxValueFromArray;
/* harmony export (immutable) */ __webpack_exports__["compareOn"] = compareOn;
/* harmony export (immutable) */ __webpack_exports__["parseQS"] = parseQS;
/* harmony export (immutable) */ __webpack_exports__["formatQS"] = formatQS;
/* harmony export (immutable) */ __webpack_exports__["parseUrl"] = parseUrl;
/* harmony export (immutable) */ __webpack_exports__["buildUrl"] = buildUrl;
/* harmony export (immutable) */ __webpack_exports__["deepEqual"] = deepEqual;
/* harmony export (immutable) */ __webpack_exports__["mergeDeep"] = mergeDeep;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_just_clone__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_just_clone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_just_clone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_deep_equal__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_deep_equal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_deep_equal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_find_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_find_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_includes_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dlv_index_js__ = __webpack_require__(136);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deepAccess", function() { return __WEBPACK_IMPORTED_MODULE_5_dlv_index_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_dset__ = __webpack_require__(137);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deepSetValue", function() { return __WEBPACK_IMPORTED_MODULE_6_dset__["a"]; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable no-console */






var CONSTANTS = __webpack_require__(5);



var tArr = 'Array';
var tStr = 'String';
var tFn = 'Function';
var tNumb = 'Number';
var tObject = 'Object';
var tBoolean = 'Boolean';
var toString = Object.prototype.toString;
var consoleExists = Boolean(window.console);
var consoleLogExists = Boolean(consoleExists && window.console.log);
var consoleInfoExists = Boolean(consoleExists && window.console.info);
var consoleWarnExists = Boolean(consoleExists && window.console.warn);
var consoleErrorExists = Boolean(consoleExists && window.console.error); // this allows stubbing of utility functions that are used internally by other utility functions

var internal = {
  checkCookieSupport: checkCookieSupport,
  createTrackPixelIframeHtml: createTrackPixelIframeHtml,
  getWindowSelf: getWindowSelf,
  getWindowTop: getWindowTop,
  getWindowLocation: getWindowLocation,
  insertUserSyncIframe: insertUserSyncIframe,
  insertElement: insertElement,
  isFn: isFn,
  triggerPixel: triggerPixel,
  logError: logError,
  logWarn: logWarn,
  logMessage: logMessage,
  logInfo: logInfo,
  parseQS: parseQS,
  formatQS: formatQS,
  deepEqual: deepEqual
};
var uniqueRef = {};
var bind = function (a, b) {
  return b;
}.bind(null, 1, uniqueRef)() === uniqueRef ? Function.prototype.bind : function (bind) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    return self.apply(bind, args.concat(Array.prototype.slice.call(arguments)));
  };
};
/* utility method to get incremental integer starting from 1 */

var getIncrementalInteger = function () {
  var count = 0;
  return function () {
    count++;
    return count;
  };
}(); // generate a random string (to be used as a dynamic JSONP callback)


function getUniqueIdentifierStr() {
  return getIncrementalInteger() + Math.random().toString(16).substr(2);
}
/**
 * Returns a random v4 UUID of the form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx,
 * where each x is replaced with a random hexadecimal digit from 0 to f,
 * and y is replaced with a random hexadecimal digit from 8 to b.
 * https://gist.github.com/jed/982883 via node-uuid
 */

function generateUUID(placeholder) {
  return placeholder ? (placeholder ^ _getRandomData() >> placeholder / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, generateUUID);
}
/**
 * Returns random data using the Crypto API if available and Math.random if not
 * Method is from https://gist.github.com/jed/982883 like generateUUID, direct link https://gist.github.com/jed/982883#gistcomment-45104
 */

function _getRandomData() {
  if (window && window.crypto && window.crypto.getRandomValues) {
    return crypto.getRandomValues(new Uint8Array(1))[0] % 16;
  } else {
    return Math.random() * 16;
  }
}

function getBidIdParameter(key, paramsObj) {
  if (paramsObj && paramsObj[key]) {
    return paramsObj[key];
  }

  return '';
}
function tryAppendQueryString(existingUrl, key, value) {
  if (value) {
    return existingUrl + key + '=' + encodeURIComponent(value) + '&';
  }

  return existingUrl;
} // parse a query string object passed in bid params
// bid params should be an object such as {key: "value", key1 : "value1"}
// aliases to formatQS

var parseQueryStringParameters = internal.formatQS; // transform an AdServer targeting bids into a query string to send to the adserver

function transformAdServerTargetingObj(targeting) {
  // we expect to receive targeting for a single slot at a time
  if (targeting && Object.getOwnPropertyNames(targeting).length > 0) {
    return getKeys(targeting).map(function (key) {
      return "".concat(key, "=").concat(encodeURIComponent(getValue(targeting, key)));
    }).join('&');
  } else {
    return '';
  }
}
/**
 * Read an adUnit object and return the sizes used in an [[728, 90]] format (even if they had [728, 90] defined)
 * Preference is given to the `adUnit.mediaTypes.banner.sizes` object over the `adUnit.sizes`
 * @param {object} adUnit one adUnit object from the normal list of adUnits
 * @returns {Array.<number[]>} array of arrays containing numeric sizes
 */

function getAdUnitSizes(adUnit) {
  if (!adUnit) {
    return;
  }

  var sizes = [];

  if (adUnit.mediaTypes && adUnit.mediaTypes.banner && Array.isArray(adUnit.mediaTypes.banner.sizes)) {
    var bannerSizes = adUnit.mediaTypes.banner.sizes;

    if (Array.isArray(bannerSizes[0])) {
      sizes = bannerSizes;
    } else {
      sizes.push(bannerSizes);
    } // TODO - remove this else block when we're ready to deprecate adUnit.sizes for bidders

  } else if (Array.isArray(adUnit.sizes)) {
    if (Array.isArray(adUnit.sizes[0])) {
      sizes = adUnit.sizes;
    } else {
      sizes.push(adUnit.sizes);
    }
  }

  return sizes;
}
/**
 * Parse a GPT-Style general size Array like `[[300, 250]]` or `"300x250,970x90"` into an array of sizes `["300x250"]` or '['300x250', '970x90']'
 * @param  {(Array.<number[]>|Array.<number>)} sizeObj Input array or double array [300,250] or [[300,250], [728,90]]
 * @return {Array.<string>}  Array of strings like `["300x250"]` or `["300x250", "728x90"]`
 */

function parseSizesInput(sizeObj) {
  var parsedSizes = []; // if a string for now we can assume it is a single size, like "300x250"

  if (typeof sizeObj === 'string') {
    // multiple sizes will be comma-separated
    var sizes = sizeObj.split(','); // regular expression to match strigns like 300x250
    // start of line, at least 1 number, an "x" , then at least 1 number, and the then end of the line

    var sizeRegex = /^(\d)+x(\d)+$/i;

    if (sizes) {
      for (var curSizePos in sizes) {
        if (hasOwn(sizes, curSizePos) && sizes[curSizePos].match(sizeRegex)) {
          parsedSizes.push(sizes[curSizePos]);
        }
      }
    }
  } else if (_typeof(sizeObj) === 'object') {
    var sizeArrayLength = sizeObj.length; // don't process empty array

    if (sizeArrayLength > 0) {
      // if we are a 2 item array of 2 numbers, we must be a SingleSize array
      if (sizeArrayLength === 2 && typeof sizeObj[0] === 'number' && typeof sizeObj[1] === 'number') {
        parsedSizes.push(parseGPTSingleSizeArray(sizeObj));
      } else {
        // otherwise, we must be a MultiSize array
        for (var i = 0; i < sizeArrayLength; i++) {
          parsedSizes.push(parseGPTSingleSizeArray(sizeObj[i]));
        }
      }
    }
  }

  return parsedSizes;
} // Parse a GPT style single size array, (i.e [300, 250])
// into an AppNexus style string, (i.e. 300x250)

function parseGPTSingleSizeArray(singleSize) {
  if (isValidGPTSingleSize(singleSize)) {
    return singleSize[0] + 'x' + singleSize[1];
  }
} // Parse a GPT style single size array, (i.e [300, 250])
// into OpenRTB-compatible (imp.banner.w/h, imp.banner.format.w/h, imp.video.w/h) object(i.e. {w:300, h:250})

function parseGPTSingleSizeArrayToRtbSize(singleSize) {
  if (isValidGPTSingleSize(singleSize)) {
    return {
      w: singleSize[0],
      h: singleSize[1]
    };
  }
}

function isValidGPTSingleSize(singleSize) {
  // if we aren't exactly 2 items in this array, it is invalid
  return isArray(singleSize) && singleSize.length === 2 && !isNaN(singleSize[0]) && !isNaN(singleSize[1]);
}

function getWindowTop() {
  return window.top;
}
function getWindowSelf() {
  return window.self;
}
function getWindowLocation() {
  return window.location;
}
/**
 * Wrappers to console.(log | info | warn | error). Takes N arguments, the same as the native methods
 */

function logMessage() {
  if (debugTurnedOn() && consoleLogExists) {
    console.log.apply(console, decorateLog(arguments, 'MESSAGE:'));
  }
}
function logInfo() {
  if (debugTurnedOn() && consoleInfoExists) {
    console.info.apply(console, decorateLog(arguments, 'INFO:'));
  }
}
function logWarn() {
  if (debugTurnedOn() && consoleWarnExists) {
    console.warn.apply(console, decorateLog(arguments, 'WARNING:'));
  }
}
function logError() {
  if (debugTurnedOn() && consoleErrorExists) {
    console.error.apply(console, decorateLog(arguments, 'ERROR:'));
  }
}

function decorateLog(args, prefix) {
  args = [].slice.call(args);
  prefix && args.unshift(prefix);
  args.unshift('display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;');
  args.unshift('%cPrebid');
  return args;
}

function hasConsoleLogger() {
  return consoleLogExists;
}
function debugTurnedOn() {
  return !!__WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getConfig('debug');
}
function createInvisibleIframe() {
  var f = document.createElement('iframe');
  f.id = getUniqueIdentifierStr();
  f.height = 0;
  f.width = 0;
  f.border = '0px';
  f.hspace = '0';
  f.vspace = '0';
  f.marginWidth = '0';
  f.marginHeight = '0';
  f.style.border = '0';
  f.scrolling = 'no';
  f.frameBorder = '0';
  f.src = 'about:blank';
  f.style.display = 'none';
  return f;
}
/*
 *   Check if a given parameter name exists in query string
 *   and if it does return the value
 */

function getParameterByName(name) {
  return parseQS(getWindowLocation().search)[name] || '';
}
/**
 * Return if the object is of the
 * given type.
 * @param {*} object to test
 * @param {String} _t type string (e.g., Array)
 * @return {Boolean} if object is of type _t
 */

function isA(object, _t) {
  return toString.call(object) === '[object ' + _t + ']';
}
function isFn(object) {
  return isA(object, tFn);
}
function isStr(object) {
  return isA(object, tStr);
}
function isArray(object) {
  return isA(object, tArr);
}
function isNumber(object) {
  return isA(object, tNumb);
}
function isPlainObject(object) {
  return isA(object, tObject);
}
function isBoolean(object) {
  return isA(object, tBoolean);
}
/**
 * Return if the object is "empty";
 * this includes falsey, no keys, or no items at indices
 * @param {*} object object to test
 * @return {Boolean} if object is empty
 */

function isEmpty(object) {
  if (!object) return true;

  if (isArray(object) || isStr(object)) {
    return !(object.length > 0);
  }

  for (var k in object) {
    if (hasOwnProperty.call(object, k)) return false;
  }

  return true;
}
/**
 * Return if string is empty, null, or undefined
 * @param str string to test
 * @returns {boolean} if string is empty
 */

function isEmptyStr(str) {
  return isStr(str) && (!str || str.length === 0);
}
/**
 * Iterate object with the function
 * falls back to es5 `forEach`
 * @param {Array|Object} object
 * @param {Function(value, key, object)} fn
 */

function _each(object, fn) {
  if (isEmpty(object)) return;
  if (isFn(object.forEach)) return object.forEach(fn, this);
  var k = 0;
  var l = object.length;

  if (l > 0) {
    for (; k < l; k++) {
      fn(object[k], k, object);
    }
  } else {
    for (k in object) {
      if (hasOwnProperty.call(object, k)) fn.call(this, object[k], k);
    }
  }
}
function contains(a, obj) {
  if (isEmpty(a)) {
    return false;
  }

  if (isFn(a.indexOf)) {
    return a.indexOf(obj) !== -1;
  }

  var i = a.length;

  while (i--) {
    if (a[i] === obj) {
      return true;
    }
  }

  return false;
}
/**
 * Map an array or object into another array
 * given a function
 * @param {Array|Object} object
 * @param {Function(value, key, object)} callback
 * @return {Array}
 */

function _map(object, callback) {
  if (isEmpty(object)) return [];
  if (isFn(object.map)) return object.map(callback);
  var output = [];

  _each(object, function (value, key) {
    output.push(callback(value, key, object));
  });

  return output;
}
function hasOwn(objectToCheck, propertyToCheckFor) {
  if (objectToCheck.hasOwnProperty) {
    return objectToCheck.hasOwnProperty(propertyToCheckFor);
  } else {
    return typeof objectToCheck[propertyToCheckFor] !== 'undefined' && objectToCheck.constructor.prototype[propertyToCheckFor] !== objectToCheck[propertyToCheckFor];
  }
}
;
/*
* Inserts an element(elm) as targets child, by default as first child
* @param {HTMLElement} elm
* @param {HTMLElement} [doc]
* @param {HTMLElement} [target]
* @param {Boolean} [asLastChildChild]
* @return {HTMLElement}
*/

function insertElement(elm, doc, target, asLastChildChild) {
  doc = doc || document;
  var parentEl;

  if (target) {
    parentEl = doc.getElementsByTagName(target);
  } else {
    parentEl = doc.getElementsByTagName('head');
  }

  try {
    parentEl = parentEl.length ? parentEl : doc.getElementsByTagName('body');

    if (parentEl.length) {
      parentEl = parentEl[0];
      var insertBeforeEl = asLastChildChild ? null : parentEl.firstChild;
      return parentEl.insertBefore(elm, insertBeforeEl);
    }
  } catch (e) {}
}
/**
 * Inserts an image pixel with the specified `url` for cookie sync
 * @param {string} url URL string of the image pixel to load
 * @param  {function} [done] an optional exit callback, used when this usersync pixel is added during an async process
 */

function triggerPixel(url, done) {
  var img = new Image();

  if (done && internal.isFn(done)) {
    img.addEventListener('load', done);
    img.addEventListener('error', done);
  }

  img.src = url;
}
function callBurl(_ref) {
  var source = _ref.source,
      burl = _ref.burl;

  if (source === CONSTANTS.S2S.SRC && burl) {
    internal.triggerPixel(burl);
  }
}
/**
 * Inserts an empty iframe with the specified `html`, primarily used for tracking purposes
 * (though could be for other purposes)
 * @param {string} htmlCode snippet of HTML code used for tracking purposes
 */

function insertHtmlIntoIframe(htmlCode) {
  if (!htmlCode) {
    return;
  }

  var iframe = document.createElement('iframe');
  iframe.id = getUniqueIdentifierStr();
  iframe.width = 0;
  iframe.height = 0;
  iframe.hspace = '0';
  iframe.vspace = '0';
  iframe.marginWidth = '0';
  iframe.marginHeight = '0';
  iframe.style.display = 'none';
  iframe.style.height = '0px';
  iframe.style.width = '0px';
  iframe.scrolling = 'no';
  iframe.frameBorder = '0';
  iframe.allowtransparency = 'true';
  internal.insertElement(iframe, document, 'body');
  iframe.contentWindow.document.open();
  iframe.contentWindow.document.write(htmlCode);
  iframe.contentWindow.document.close();
}
/**
 * Inserts empty iframe with the specified `url` for cookie sync
 * @param  {string} url URL to be requested
 * @param  {string} encodeUri boolean if URL should be encoded before inserted. Defaults to true
 * @param  {function} [done] an optional exit callback, used when this usersync pixel is added during an async process
 */

function insertUserSyncIframe(url, done) {
  var iframeHtml = internal.createTrackPixelIframeHtml(url, false, 'allow-scripts allow-same-origin');
  var div = document.createElement('div');
  div.innerHTML = iframeHtml;
  var iframe = div.firstChild;

  if (done && internal.isFn(done)) {
    iframe.addEventListener('load', done);
    iframe.addEventListener('error', done);
  }

  internal.insertElement(iframe, document, 'html', true);
}
;
/**
 * Creates a snippet of HTML that retrieves the specified `url`
 * @param  {string} url URL to be requested
 * @return {string}     HTML snippet that contains the img src = set to `url`
 */

function createTrackPixelHtml(url) {
  if (!url) {
    return '';
  }

  var escapedUrl = encodeURI(url);
  var img = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
  img += '<img src="' + escapedUrl + '"></div>';
  return img;
}
;
/**
 * Creates a snippet of Iframe HTML that retrieves the specified `url`
 * @param  {string} url plain URL to be requested
 * @param  {string} encodeUri boolean if URL should be encoded before inserted. Defaults to true
 * @param  {string} sandbox string if provided the sandbox attribute will be included with the given value
 * @return {string}     HTML snippet that contains the iframe src = set to `url`
 */

function createTrackPixelIframeHtml(url) {
  var encodeUri = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var sandbox = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (!url) {
    return '';
  }

  if (encodeUri) {
    url = encodeURI(url);
  }

  if (sandbox) {
    sandbox = "sandbox=\"".concat(sandbox, "\"");
  }

  return "<iframe ".concat(sandbox, " id=\"").concat(getUniqueIdentifierStr(), "\"\n      frameborder=\"0\"\n      allowtransparency=\"true\"\n      marginheight=\"0\" marginwidth=\"0\"\n      width=\"0\" hspace=\"0\" vspace=\"0\" height=\"0\"\n      style=\"height:0px;width:0px;display:none;\"\n      scrolling=\"no\"\n      src=\"").concat(url, "\">\n    </iframe>");
}
function getValueString(param, val, defaultValue) {
  if (val === undefined || val === null) {
    return defaultValue;
  }

  if (isStr(val)) {
    return val;
  }

  if (isNumber(val)) {
    return val.toString();
  }

  internal.logWarn('Unsuported type for param: ' + param + ' required type: String');
}
function uniques(value, index, arry) {
  return arry.indexOf(value) === index;
}
function flatten(a, b) {
  return a.concat(b);
}
function getBidRequest(id, bidderRequests) {
  if (!id) {
    return;
  }

  var bidRequest;
  bidderRequests.some(function (bidderRequest) {
    var result = __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_find_js___default()(bidderRequest.bids, function (bid) {
      return ['bidId', 'adId', 'bid_id'].some(function (type) {
        return bid[type] === id;
      });
    });

    if (result) {
      bidRequest = result;
    }

    return result;
  });
  return bidRequest;
}
function getKeys(obj) {
  return Object.keys(obj);
}
function getValue(obj, key) {
  return obj[key];
}
/**
 * Get the key of an object for a given value
 */

function getKeyByValue(obj, value) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (obj[prop] === value) {
        return prop;
      }
    }
  }
}
function getBidderCodes() {
  var adUnits = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : owpbjs.adUnits;
  // this could memoize adUnits
  return adUnits.map(function (unit) {
    return unit.bids.map(function (bid) {
      return bid.bidder;
    }).reduce(flatten, []);
  }).reduce(flatten).filter(uniques);
}
function isGptPubadsDefined() {
  if (window.googletag && isFn(window.googletag.pubads) && isFn(window.googletag.pubads().getSlots)) {
    return true;
  }
} // This function will get highest cpm value bid, in case of tie it will return the bid with lowest timeToRespond

var getHighestCpm = getHighestCpmCallback('timeToRespond', function (previous, current) {
  return previous > current;
}); // This function will get the oldest hightest cpm value bid, in case of tie it will return the bid which came in first
// Use case for tie: https://github.com/prebid/Prebid.js/issues/2448

var getOldestHighestCpmBid = getHighestCpmCallback('responseTimestamp', function (previous, current) {
  return previous > current;
}); // This function will get the latest hightest cpm value bid, in case of tie it will return the bid which came in last
// Use case for tie: https://github.com/prebid/Prebid.js/issues/2539

var getLatestHighestCpmBid = getHighestCpmCallback('responseTimestamp', function (previous, current) {
  return previous < current;
});

function getHighestCpmCallback(useTieBreakerProperty, tieBreakerCallback) {
  return function (previous, current) {
    if (previous.cpm === current.cpm) {
      return tieBreakerCallback(previous[useTieBreakerProperty], current[useTieBreakerProperty]) ? current : previous;
    }

    return previous.cpm < current.cpm ? current : previous;
  };
}
/**
 * Fisher–Yates shuffle
 * http://stackoverflow.com/a/6274398
 * https://bost.ocks.org/mike/shuffle/
 * istanbul ignore next
 */


function shuffle(array) {
  var counter = array.length; // while there are elements in the array

  while (counter > 0) {
    // pick a random index
    var index = Math.floor(Math.random() * counter); // decrease counter by 1

    counter--; // and swap the last element with it

    var temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}
function adUnitsFilter(filter, bid) {
  return __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_includes_js___default()(filter, bid && bid.adUnitCode);
}
function deepClone(obj) {
  return __WEBPACK_IMPORTED_MODULE_1_just_clone___default()(obj);
}
function inIframe() {
  try {
    return internal.getWindowSelf() !== internal.getWindowTop();
  } catch (e) {
    return true;
  }
}
function isSafariBrowser() {
  return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent);
}
function replaceAuctionPrice(str, cpm) {
  if (!str) return;
  return str.replace(/\$\{AUCTION_PRICE\}/g, cpm);
}
function timestamp() {
  return new Date().getTime();
}
/**
 * When the deviceAccess flag config option is false, no cookies should be read or set
 * @returns {boolean}
 */

function hasDeviceAccess() {
  return __WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getConfig('deviceAccess') !== false;
}
/**
 * @returns {(boolean|undefined)}
 */

function checkCookieSupport() {
  if (window.navigator.cookieEnabled || !!document.cookie.length) {
    return true;
  }
}
/**
 * Given a function, return a function which only executes the original after
 * it's been called numRequiredCalls times.
 *
 * Note that the arguments from the previous calls will *not* be forwarded to the original function.
 * Only the final call's arguments matter.
 *
 * @param {function} func The function which should be executed, once the returned function has been executed
 *   numRequiredCalls times.
 * @param {int} numRequiredCalls The number of times which the returned function needs to be called before
 *   func is.
 */

function delayExecution(func, numRequiredCalls) {
  if (numRequiredCalls < 1) {
    throw new Error("numRequiredCalls must be a positive number. Got ".concat(numRequiredCalls));
  }

  var numCalls = 0;
  return function () {
    numCalls++;

    if (numCalls === numRequiredCalls) {
      func.apply(this, arguments);
    }
  };
}
/**
 * https://stackoverflow.com/a/34890276/428704
 * @export
 * @param {array} xs
 * @param {string} key
 * @returns {Object} {${key_value}: ${groupByArray}, key_value: {groupByArray}}
 */

function groupBy(xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}
/**
 * Build an object consisting of only defined parameters to avoid creating an
 * object with defined keys and undefined values.
 * @param {Object} object The object to pick defined params out of
 * @param {string[]} params An array of strings representing properties to look for in the object
 * @returns {Object} An object containing all the specified values that are defined
 */

function getDefinedParams(object, params) {
  return params.filter(function (param) {
    return object[param];
  }).reduce(function (bid, param) {
    return _extends(bid, _defineProperty({}, param, object[param]));
  }, {});
}
/**
 * @typedef {Object} MediaTypes
 * @property {Object} banner banner configuration
 * @property {Object} native native configuration
 * @property {Object} video video configuration
 */

/**
 * Validates an adunit's `mediaTypes` parameter
 * @param {MediaTypes} mediaTypes mediaTypes parameter to validate
 * @return {boolean} If object is valid
 */

function isValidMediaTypes(mediaTypes) {
  var SUPPORTED_MEDIA_TYPES = ['banner', 'native', 'video'];
  var SUPPORTED_STREAM_TYPES = ['instream', 'outstream', 'adpod'];
  var types = Object.keys(mediaTypes);

  if (!types.every(function (type) {
    return __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_includes_js___default()(SUPPORTED_MEDIA_TYPES, type);
  })) {
    return false;
  }

  if (mediaTypes.video && mediaTypes.video.context) {
    return __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_array_includes_js___default()(SUPPORTED_STREAM_TYPES, mediaTypes.video.context);
  }

  return true;
}
function getBidderRequest(bidRequests, bidder, adUnitCode) {
  return __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_find_js___default()(bidRequests, function (request) {
    return request.bids.filter(function (bid) {
      return bid.bidder === bidder && bid.adUnitCode === adUnitCode;
    }).length > 0;
  }) || {
    start: null,
    auctionId: null
  };
}
/**
 * Returns user configured bidder params from adunit
 * @param {Object} adUnits
 * @param {string} adUnitCode code
 * @param {string} bidder code
 * @return {Array} user configured param for the given bidder adunit configuration
 */

function getUserConfiguredParams(adUnits, adUnitCode, bidder) {
  return adUnits.filter(function (adUnit) {
    return adUnit.code === adUnitCode;
  }).map(function (adUnit) {
    return adUnit.bids;
  }).reduce(flatten, []).filter(function (bidderData) {
    return bidderData.bidder === bidder;
  }).map(function (bidderData) {
    return bidderData.params || {};
  });
}
/**
 * Returns the origin
 */

function getOrigin() {
  // IE10 does not have this property. https://gist.github.com/hbogs/7908703
  if (!window.location.origin) {
    return window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  } else {
    return window.location.origin;
  }
}
/**
 * Returns Do Not Track state
 */

function getDNT() {
  return navigator.doNotTrack === '1' || window.doNotTrack === '1' || navigator.msDoNotTrack === '1' || navigator.doNotTrack === 'yes';
}

var compareCodeAndSlot = function compareCodeAndSlot(slot, adUnitCode) {
  return slot.getAdUnitPath() === adUnitCode || slot.getSlotElementId() === adUnitCode;
};
/**
 * Returns filter function to match adUnitCode in slot
 * @param {Object} slot GoogleTag slot
 * @return {function} filter function
 */


function isAdUnitCodeMatchingSlot(slot) {
  return function (adUnitCode) {
    return compareCodeAndSlot(slot, adUnitCode);
  };
}
/**
 * Returns filter function to match adUnitCode in slot
 * @param {string} adUnitCode AdUnit code
 * @return {function} filter function
 */

function isSlotMatchingAdUnitCode(adUnitCode) {
  return function (slot) {
    return compareCodeAndSlot(slot, adUnitCode);
  };
}
/**
 * @summary Uses the adUnit's code in order to find a matching gptSlot on the page
 */

function getGptSlotInfoForAdUnitCode(adUnitCode) {
  var matchingSlot;

  if (isGptPubadsDefined()) {
    // find the first matching gpt slot on the page
    matchingSlot = __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_find_js___default()(window.googletag.pubads().getSlots(), isSlotMatchingAdUnitCode(adUnitCode));
  }

  if (matchingSlot) {
    return {
      gptSlot: matchingSlot.getAdUnitPath(),
      divId: matchingSlot.getSlotElementId()
    };
  }

  return {};
}
;
/**
 * Constructs warning message for when unsupported bidders are dropped from an adunit
 * @param {Object} adUnit ad unit from which the bidder is being dropped
 * @param {string} bidder bidder code that is not compatible with the adUnit
 * @return {string} warning message to display when condition is met
 */

function unsupportedBidderMessage(adUnit, bidder) {
  var mediaType = Object.keys(adUnit.mediaTypes || {
    'banner': 'banner'
  }).join(', ');
  return "\n    ".concat(adUnit.code, " is a ").concat(mediaType, " ad unit\n    containing bidders that don't support ").concat(mediaType, ": ").concat(bidder, ".\n    This bidder won't fetch demand.\n  ");
}
/**
 * Checks input is integer or not
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 * @param {*} value
 */

function isInteger(value) {
  if (Number.isInteger) {
    return Number.isInteger(value);
  } else {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
  }
}
/**
 * Converts a string value in camel-case to underscore eg 'placementId' becomes 'placement_id'
 * @param {string} value string value to convert
 */

function convertCamelToUnderscore(value) {
  return value.replace(/(?:^|\.?)([A-Z])/g, function (x, y) {
    return '_' + y.toLowerCase();
  }).replace(/^_/, '');
}
/**
 * Returns a new object with undefined properties removed from given object
 * @param obj the object to clean
 */

function cleanObj(obj) {
  return Object.keys(obj).reduce(function (newObj, key) {
    if (typeof obj[key] !== 'undefined') {
      newObj[key] = obj[key];
    }

    return newObj;
  }, {});
}
/**
 * Create a new object with selected properties.  Also allows property renaming and transform functions.
 * @param obj the original object
 * @param properties An array of desired properties
 */

function pick(obj, properties) {
  if (_typeof(obj) !== 'object') {
    return {};
  }

  return properties.reduce(function (newObj, prop, i) {
    if (typeof prop === 'function') {
      return newObj;
    }

    var newProp = prop;
    var match = prop.match(/^(.+?)\sas\s(.+?)$/i);

    if (match) {
      prop = match[1];
      newProp = match[2];
    }

    var value = obj[prop];

    if (typeof properties[i + 1] === 'function') {
      value = properties[i + 1](value, newObj);
    }

    if (typeof value !== 'undefined') {
      newObj[newProp] = value;
    }

    return newObj;
  }, {});
}
/**
 * Converts an object of arrays (either strings or numbers) into an array of objects containing key and value properties
 * normally read from bidder params
 * eg { foo: ['bar', 'baz'], fizz: ['buzz'] }
 * becomes [{ key: 'foo', value: ['bar', 'baz']}, {key: 'fizz', value: ['buzz']}]
 * @param {Object} keywords object of arrays representing keyvalue pairs
 * @param {string} paramName name of parent object (eg 'keywords') containing keyword data, used in error handling
 */

function transformBidderParamKeywords(keywords) {
  var paramName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'keywords';
  var arrs = [];

  _each(keywords, function (v, k) {
    if (isArray(v)) {
      var values = [];

      _each(v, function (val) {
        val = getValueString(paramName + '.' + k, val);

        if (val || val === '') {
          values.push(val);
        }
      });

      v = values;
    } else {
      v = getValueString(paramName + '.' + k, v);

      if (isStr(v)) {
        v = [v];
      } else {
        return;
      } // unsuported types - don't send a key

    }

    arrs.push({
      key: k,
      value: v
    });
  });

  return arrs;
}
/**
 * Try to convert a value to a type.
 * If it can't be done, the value will be returned.
 *
 * @param {string} typeToConvert The target type. e.g. "string", "number", etc.
 * @param {*} value The value to be converted into typeToConvert.
 */

function tryConvertType(typeToConvert, value) {
  if (typeToConvert === 'string') {
    return value && value.toString();
  } else if (typeToConvert === 'number') {
    return Number(value);
  } else {
    return value;
  }
}

function convertTypes(types, params) {
  Object.keys(types).forEach(function (key) {
    if (params[key]) {
      if (isFn(types[key])) {
        params[key] = types[key](params[key]);
      } else {
        params[key] = tryConvertType(types[key], params[key]);
      } // don't send invalid values


      if (isNaN(params[key])) {
        delete params.key;
      }
    }
  });
  return params;
}
function isArrayOfNums(val, size) {
  return isArray(val) && (size ? val.length === size : true) && val.every(function (v) {
    return isInteger(v);
  });
}
/**
 * Creates an array of n length and fills each item with the given value
 */

function fill(value, length) {
  var newArray = [];

  for (var i = 0; i < length; i++) {
    var valueToPush = isPlainObject(value) ? deepClone(value) : value;
    newArray.push(valueToPush);
  }

  return newArray;
}
/**
 * http://npm.im/chunk
 * Returns an array with *size* chunks from given array
 *
 * Example:
 * ['a', 'b', 'c', 'd', 'e'] chunked by 2 =>
 * [['a', 'b'], ['c', 'd'], ['e']]
 */

function chunk(array, size) {
  var newArray = [];

  for (var i = 0; i < Math.ceil(array.length / size); i++) {
    var start = i * size;
    var end = start + size;
    newArray.push(array.slice(start, end));
  }

  return newArray;
}
function getMinValueFromArray(array) {
  return Math.min.apply(Math, _toConsumableArray(array));
}
function getMaxValueFromArray(array) {
  return Math.max.apply(Math, _toConsumableArray(array));
}
/**
 * This function will create compare function to sort on object property
 * @param {string} property
 * @returns {function} compare function to be used in sorting
 */

function compareOn(property) {
  return function compare(a, b) {
    if (a[property] < b[property]) {
      return 1;
    }

    if (a[property] > b[property]) {
      return -1;
    }

    return 0;
  };
}
function parseQS(query) {
  return !query ? {} : query.replace(/^\?/, '').split('&').reduce(function (acc, criteria) {
    var _criteria$split = criteria.split('='),
        _criteria$split2 = _slicedToArray(_criteria$split, 2),
        k = _criteria$split2[0],
        v = _criteria$split2[1];

    if (/\[\]$/.test(k)) {
      k = k.replace('[]', '');
      acc[k] = acc[k] || [];
      acc[k].push(v);
    } else {
      acc[k] = v || '';
    }

    return acc;
  }, {});
}
function formatQS(query) {
  return Object.keys(query).map(function (k) {
    return Array.isArray(query[k]) ? query[k].map(function (v) {
      return "".concat(k, "[]=").concat(v);
    }).join('&') : "".concat(k, "=").concat(query[k]);
  }).join('&');
}
function parseUrl(url, options) {
  var parsed = document.createElement('a');

  if (options && 'noDecodeWholeURL' in options && options.noDecodeWholeURL) {
    parsed.href = url;
  } else {
    parsed.href = decodeURIComponent(url);
  } // in window.location 'search' is string, not object


  var qsAsString = options && 'decodeSearchAsString' in options && options.decodeSearchAsString;
  return {
    href: parsed.href,
    protocol: (parsed.protocol || '').replace(/:$/, ''),
    hostname: parsed.hostname,
    port: +parsed.port,
    pathname: parsed.pathname.replace(/^(?!\/)/, '/'),
    search: qsAsString ? parsed.search : internal.parseQS(parsed.search || ''),
    hash: (parsed.hash || '').replace(/^#/, ''),
    host: parsed.host || window.location.host
  };
}
function buildUrl(obj) {
  return (obj.protocol || 'http') + '://' + (obj.host || obj.hostname + (obj.port ? ":".concat(obj.port) : '')) + (obj.pathname || '') + (obj.search ? "?".concat(internal.formatQS(obj.search || '')) : '') + (obj.hash ? "#".concat(obj.hash) : '');
}
/**
 * This function compares two objects for checking their equivalence.
 * @param {Object} obj1
 * @param {Object} obj2
 * @returns {boolean}
 */

function deepEqual(obj1, obj2) {
  return __WEBPACK_IMPORTED_MODULE_2_deep_equal___default()(obj1, obj2);
}
function mergeDeep(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (!sources.length) return target;
  var source = sources.shift();

  if (isPlainObject(target) && isPlainObject(source)) {
    for (var key in source) {
      if (isPlainObject(source[key])) {
        if (!target[key]) _extends(target, _defineProperty({}, key, {}));
        mergeDeep(target[key], source[key]);
      } else if (isArray(source[key])) {
        if (!target[key]) {
          _extends(target, _defineProperty({}, key, source[key]));
        } else if (isArray(target[key])) {
          target[key] = target[key].concat(source[key]);
        }
      } else {
        _extends(target, _defineProperty({}, key, source[key]));
      }
    }
  }

  return mergeDeep.apply(void 0, [target].concat(sources));
}

/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony export (immutable) */ __webpack_exports__["registerBidder"] = registerBidder;
/* harmony export (immutable) */ __webpack_exports__["newBidder"] = newBidder;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSyncInner", function() { return registerSyncInner; });
/* harmony export (immutable) */ __webpack_exports__["preloadBidderMappingFile"] = preloadBidderMappingFile;
/* harmony export (immutable) */ __webpack_exports__["getIabSubCategory"] = getIabSubCategory;
/* harmony export (immutable) */ __webpack_exports__["isValid"] = isValid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adapter_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapterManager_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bidfactory_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__userSync_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__native_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__video_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__constants_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__events_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__events_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__events_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_library_fn_array_includes_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_library_fn_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_library_fn_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ajax_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mediaTypes_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__hook_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__storageManager_js__ = __webpack_require__(9);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















var storage = Object(__WEBPACK_IMPORTED_MODULE_14__storageManager_js__["a" /* getCoreStorageManager */])('bidderFactory');
/**
 * This file aims to support Adapters during the Prebid 0.x -> 1.x transition.
 *
 * Prebid 1.x and Prebid 0.x will be in separate branches--perhaps for a long time.
 * This function defines an API for adapter construction which is compatible with both versions.
 * Adapters which use it can maintain their code in master, and only this file will need to change
 * in the 1.x branch.
 *
 * Typical usage looks something like:
 *
 * const adapter = registerBidder({
 *   code: 'myBidderCode',
 *   aliases: ['alias1', 'alias2'],
 *   supportedMediaTypes: ['video', 'native'],
 *   isBidRequestValid: function(paramsObject) { return true/false },
 *   buildRequests: function(bidRequests, bidderRequest) { return some ServerRequest(s) },
 *   interpretResponse: function(oneServerResponse) { return some Bids, or throw an error. }
 * });
 *
 * @see BidderSpec for the full API and more thorough descriptions.
 */

/**
 * @typedef {object} BidderSpec An object containing the adapter-specific functions needed to
 * make a Bidder.
 *
 * @property {string} code A code which will be used to uniquely identify this bidder. This should be the same
 *   one as is used in the call to registerBidAdapter
 * @property {string[]} [aliases] A list of aliases which should also resolve to this bidder.
 * @property {MediaType[]} [supportedMediaTypes]: A list of Media Types which the adapter supports.
 * @property {function(object): boolean} isBidRequestValid Determines whether or not the given bid has all the params
 *   needed to make a valid request.
 * @property {function(BidRequest[], bidderRequest): ServerRequest|ServerRequest[]} buildRequests Build the request to the Server
 *   which requests Bids for the given array of Requests. Each BidRequest in the argument array is guaranteed to have
 *   passed the isBidRequestValid() test.
 * @property {function(ServerResponse, BidRequest): Bid[]} interpretResponse Given a successful response from the Server,
 *   interpret it and return the Bid objects. This function will be run inside a try/catch.
 *   If it throws any errors, your bids will be discarded.
 * @property {function(SyncOptions, ServerResponse[]): UserSync[]} [getUserSyncs] Given an array of all the responses
 *   from the server, determine which user syncs should occur. The argument array will contain every element
 *   which has been sent through to interpretResponse. The order of syncs in this array matters. The most
 *   important ones should come first, since publishers may limit how many are dropped on their page.
 * @property {function(object): object} transformBidParams Updates bid params before creating bid request
 }}
 */

/**
 * @typedef {object} BidRequest
 *
 * @property {string} bidId A string which uniquely identifies this BidRequest in the current Auction.
 * @property {object} params Any bidder-specific params which the publisher used in their bid request.
 */

/**
 * @typedef {object} ServerRequest
 *
 * @property {('GET'|'POST')} method The type of request which this is.
 * @property {string} url The endpoint for the request. For example, "//bids.example.com".
 * @property {string|object} data Data to be sent in the request.
 * @property {object} options Content-Type set in the header of the bid request, overrides default 'text/plain'.
 *   If this is a GET request, they'll become query params. If it's a POST request, they'll be added to the body.
 *   Strings will be added as-is. Objects will be unpacked into query params based on key/value mappings, or
 *   JSON-serialized into the Request body.
 */

/**
 * @typedef {object} ServerResponse
 *
 * @property {*} body The response body. If this is legal JSON, then it will be parsed. Otherwise it'll be a
 *   string with the body's content.
 * @property {{get: function(string): string} headers The response headers.
 *   Call this like `ServerResponse.headers.get("Content-Type")`
 */

/**
 * @typedef {object} Bid
 *
 * @property {string} requestId The specific BidRequest which this bid is aimed at.
 *   This should match the BidRequest.bidId which this Bid targets.
 * @property {string} ad A URL which can be used to load this ad, if it's chosen by the publisher.
 * @property {string} currency The currency code for the cpm value
 * @property {number} cpm The bid price, in US cents per thousand impressions.
 * @property {number} ttl Time-to-live - how long (in seconds) Prebid can use this bid.
 * @property {boolean} netRevenue Boolean defining whether the bid is Net or Gross.  The default is true (Net).
 * @property {number} height The height of the ad, in pixels.
 * @property {number} width The width of the ad, in pixels.
 *
 * @property {object} [native] Object for storing native creative assets
 * @property {object} [video] Object for storing video response data
 * @property {object} [meta] Object for storing bid meta data
 * @property {string} [meta.iabSubCatId] The IAB subcategory ID
 * @property [Renderer] renderer A Renderer which can be used as a default for this bid,
 *   if the publisher doesn't override it. This is only relevant for Outstream Video bids.
 */

/**
 * @typedef {Object} SyncOptions
 *
 * An object containing information about usersyncs which the adapter should obey.
 *
 * @property {boolean} iframeEnabled True if iframe usersyncs are allowed, and false otherwise
 * @property {boolean} pixelEnabled True if image usersyncs are allowed, and false otherwise
 */

/**
 * TODO: Move this to the UserSync module after that PR is merged.
 *
 * @typedef {object} UserSync
 *
 * @property {('image'|'iframe')} type The type of user sync to be done.
 * @property {string} url The URL which makes the sync happen.
 */
// common params for all mediaTypes

var COMMON_BID_RESPONSE_KEYS = ['requestId', 'cpm', 'ttl', 'creativeId', 'netRevenue', 'currency'];
var DEFAULT_REFRESHIN_DAYS = 1;
/**
 * Register a bidder with prebid, using the given spec.
 *
 * If possible, Adapter modules should use this function instead of adapterManager.registerBidAdapter().
 *
 * @param {BidderSpec} spec An object containing the bare-bones functions we need to make a Bidder.
 */

function registerBidder(spec) {
  var mediaTypes = Array.isArray(spec.supportedMediaTypes) ? {
    supportedMediaTypes: spec.supportedMediaTypes
  } : undefined;

  function putBidder(spec) {
    var bidder = newBidder(spec);
    __WEBPACK_IMPORTED_MODULE_1__adapterManager_js__["default"].registerBidAdapter(bidder, spec.code, mediaTypes);
  }

  putBidder(spec);

  if (Array.isArray(spec.aliases)) {
    spec.aliases.forEach(function (alias) {
      __WEBPACK_IMPORTED_MODULE_1__adapterManager_js__["default"].aliasRegistry[alias] = spec.code;
      putBidder(_extends({}, spec, {
        code: alias
      }));
    });
  }
}
/**
 * Make a new bidder from the given spec. This is exported mainly for testing.
 * Adapters will probably find it more convenient to use registerBidder instead.
 *
 * @param {BidderSpec} spec
 */

function newBidder(spec) {
  return _extends(new __WEBPACK_IMPORTED_MODULE_0__adapter_js__["a" /* default */](spec.code), {
    getSpec: function getSpec() {
      return Object.freeze(spec);
    },
    registerSyncs: registerSyncs,
    callBids: function callBids(bidderRequest, addBidResponse, done, ajax, onTimelyResponse, configEnabledCallback) {
      if (!Array.isArray(bidderRequest.bids)) {
        return;
      }

      var adUnitCodesHandled = {};

      function addBidWithCode(adUnitCode, bid) {
        adUnitCodesHandled[adUnitCode] = true;

        if (isValid(adUnitCode, bid, [bidderRequest])) {
          addBidResponse(adUnitCode, bid);
        }
      } // After all the responses have come back, call done() and
      // register any required usersync pixels.


      var responses = [];

      function afterAllResponses() {
        done();
        __WEBPACK_IMPORTED_MODULE_8__events_js___default.a.emit(__WEBPACK_IMPORTED_MODULE_7__constants_json___default.a.EVENTS.BIDDER_DONE, bidderRequest);
        registerSyncs(responses, bidderRequest.gdprConsent, bidderRequest.uspConsent);
      }

      var validBidRequests = bidderRequest.bids.filter(filterAndWarn);

      if (validBidRequests.length === 0) {
        afterAllResponses();
        return;
      }

      var bidRequestMap = {};
      validBidRequests.forEach(function (bid) {
        bidRequestMap[bid.bidId] = bid; // Delete this once we are 1.0

        if (!bid.adUnitCode) {
          bid.adUnitCode = bid.placementCode;
        }
      });
      var requests = spec.buildRequests(validBidRequests, bidderRequest);

      if (!requests || requests.length === 0) {
        afterAllResponses();
        return;
      }

      if (!Array.isArray(requests)) {
        requests = [requests];
      } // Callbacks don't compose as nicely as Promises. We should call done() once _all_ the
      // Server requests have returned and been processed. Since `ajax` accepts a single callback,
      // we need to rig up a function which only executes after all the requests have been responded.


      var onResponse = Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["delayExecution"])(configEnabledCallback(afterAllResponses), requests.length);
      requests.forEach(processRequest);

      function formatGetParameters(data) {
        if (data) {
          return "?".concat(_typeof(data) === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["parseQueryStringParameters"])(data) : data);
        }

        return '';
      }

      function processRequest(request) {
        switch (request.method) {
          case 'GET':
            ajax("".concat(request.url).concat(formatGetParameters(request.data)), {
              success: configEnabledCallback(onSuccess),
              error: onFailure
            }, undefined, _extends({
              method: 'GET',
              withCredentials: true
            }, request.options));
            break;

          case 'POST':
            ajax(request.url, {
              success: configEnabledCallback(onSuccess),
              error: onFailure
            }, typeof request.data === 'string' ? request.data : JSON.stringify(request.data), _extends({
              method: 'POST',
              contentType: 'text/plain',
              withCredentials: true
            }, request.options));
            break;

          default:
            Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logWarn"])("Skipping invalid request from ".concat(spec.code, ". Request type ").concat(request.type, " must be GET or POST"));
            onResponse();
        } // If the server responds successfully, use the adapter code to unpack the Bids from it.
        // If the adapter code fails, no bids should be added. After all the bids have been added, make
        // sure to call the `onResponse` function so that we're one step closer to calling done().


        function onSuccess(response, responseObj) {
          onTimelyResponse(spec.code);

          try {
            response = JSON.parse(response);
          } catch (e) {}
          /* response might not be JSON... that's ok. */
          // Make response headers available for #1742. These are lazy-loaded because most adapters won't need them.


          response = {
            body: response,
            headers: headerParser(responseObj)
          };
          responses.push(response);
          var bids;

          try {
            bids = spec.interpretResponse(response, request);
          } catch (err) {
            Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])("Bidder ".concat(spec.code, " failed to interpret the server's response. Continuing without bids"), null, err);
            onResponse();
            return;
          }

          if (bids) {
            if (Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["isArray"])(bids)) {
              bids.forEach(addBidUsingRequestMap);
            } else {
              addBidUsingRequestMap(bids);
            }
          }

          onResponse(bids);

          function addBidUsingRequestMap(bid) {
            var bidRequest = bidRequestMap[bid.requestId];

            if (bidRequest) {
              // creating a copy of original values as cpm and currency are modified later
              bid.originalCpm = bid.cpm;
              bid.originalCurrency = bid.currency;

              var prebidBid = _extends(Object(__WEBPACK_IMPORTED_MODULE_3__bidfactory_js__["a" /* createBid */])(__WEBPACK_IMPORTED_MODULE_7__constants_json___default.a.STATUS.GOOD, bidRequest), bid);

              addBidWithCode(bidRequest.adUnitCode, prebidBid);
            } else {
              Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logWarn"])("Bidder ".concat(spec.code, " made bid for unknown request ID: ").concat(bid.requestId, ". Ignoring."));
            }
          }

          function headerParser(xmlHttpResponse) {
            return {
              get: responseObj.getResponseHeader.bind(responseObj)
            };
          }
        } // If the server responds with an error, there's not much we can do. Log it, and make sure to
        // call onResponse() so that we're one step closer to calling done().


        function onFailure(err) {
          onTimelyResponse(spec.code);
          Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])("Server call for ".concat(spec.code, " failed: ").concat(err, ". Continuing without bids."));
          onResponse();
        }
      }
    }
  });

  function registerSyncs(responses, gdprConsent, uspConsent) {
    registerSyncInner(spec, responses, gdprConsent, uspConsent);
  }

  function filterAndWarn(bid) {
    if (!spec.isBidRequestValid(bid)) {
      Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logWarn"])("Invalid bid sent to bidder ".concat(spec.code, ": ").concat(JSON.stringify(bid)));
      return false;
    }

    return true;
  }
}
var registerSyncInner = Object(__WEBPACK_IMPORTED_MODULE_13__hook_js__["b" /* hook */])('async', function (spec, responses, gdprConsent, uspConsent) {
  var aliasSyncEnabled = __WEBPACK_IMPORTED_MODULE_2__config_js__["b" /* config */].getConfig('userSync.aliasSyncEnabled');

  if (spec.getUserSyncs && (aliasSyncEnabled || !__WEBPACK_IMPORTED_MODULE_1__adapterManager_js__["default"].aliasRegistry[spec.code])) {
    var filterConfig = __WEBPACK_IMPORTED_MODULE_2__config_js__["b" /* config */].getConfig('userSync.filterSettings');
    var syncs = spec.getUserSyncs({
      iframeEnabled: !!(filterConfig && (filterConfig.iframe || filterConfig.all)),
      pixelEnabled: !!(filterConfig && (filterConfig.image || filterConfig.all))
    }, responses, gdprConsent, uspConsent);

    if (syncs) {
      if (!Array.isArray(syncs)) {
        syncs = [syncs];
      }

      syncs.forEach(function (sync) {
        __WEBPACK_IMPORTED_MODULE_4__userSync_js__["a" /* userSync */].registerSync(sync.type, spec.code, sync.url);
      });
    }
  }
}, 'registerSyncs');
function preloadBidderMappingFile(fn, adUnits) {
  if (!__WEBPACK_IMPORTED_MODULE_2__config_js__["b" /* config */].getConfig('adpod.brandCategoryExclusion')) {
    return fn.call(this, adUnits);
  }

  var adPodBidders = adUnits.filter(function (adUnit) {
    return Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["deepAccess"])(adUnit, 'mediaTypes.video.context') === __WEBPACK_IMPORTED_MODULE_12__mediaTypes_js__["a" /* ADPOD */];
  }).map(function (adUnit) {
    return adUnit.bids.map(function (bid) {
      return bid.bidder;
    });
  }).reduce(__WEBPACK_IMPORTED_MODULE_11__utils_js__["flatten"], []).filter(__WEBPACK_IMPORTED_MODULE_11__utils_js__["uniques"]);
  adPodBidders.forEach(function (bidder) {
    var bidderSpec = __WEBPACK_IMPORTED_MODULE_1__adapterManager_js__["default"].getBidAdapter(bidder);

    if (bidderSpec.getSpec().getMappingFileInfo) {
      var info = bidderSpec.getSpec().getMappingFileInfo();
      var refreshInDays = info.refreshInDays ? info.refreshInDays : DEFAULT_REFRESHIN_DAYS;
      var key = info.localStorageKey ? info.localStorageKey : bidderSpec.getSpec().code;
      var mappingData = storage.getDataFromLocalStorage(key);

      if (!mappingData || Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["timestamp"])() < mappingData.lastUpdated + refreshInDays * 24 * 60 * 60 * 1000) {
        Object(__WEBPACK_IMPORTED_MODULE_10__ajax_js__["a" /* ajax */])(info.url, {
          success: function success(response) {
            try {
              response = JSON.parse(response);
              var mapping = {
                lastUpdated: Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["timestamp"])(),
                mapping: response.mapping
              };
              storage.setDataInLocalStorage(key, JSON.stringify(mapping));
            } catch (error) {
              Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])("Failed to parse ".concat(bidder, " bidder translation mapping file"));
            }
          },
          error: function error() {
            Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])("Failed to load ".concat(bidder, " bidder translation file"));
          }
        });
      }
    }
  });
  fn.call(this, adUnits);
}
Object(__WEBPACK_IMPORTED_MODULE_13__hook_js__["a" /* getHook */])('checkAdUnitSetup').before(preloadBidderMappingFile);
/**
 * Reads the data stored in localstorage and returns iab subcategory
 * @param {string} bidderCode bidderCode
 * @param {string} category bidders category
 */

function getIabSubCategory(bidderCode, category) {
  var bidderSpec = __WEBPACK_IMPORTED_MODULE_1__adapterManager_js__["default"].getBidAdapter(bidderCode);

  if (bidderSpec.getSpec().getMappingFileInfo) {
    var info = bidderSpec.getSpec().getMappingFileInfo();
    var key = info.localStorageKey ? info.localStorageKey : bidderSpec.getBidderCode();
    var data = storage.getDataFromLocalStorage(key);

    if (data) {
      try {
        data = JSON.parse(data);
      } catch (error) {
        Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])("Failed to parse ".concat(bidderCode, " mapping data stored in local storage"));
      }

      return data.mapping[category] ? data.mapping[category] : null;
    }
  }
} // check that the bid has a width and height set

function validBidSize(adUnitCode, bid, bidRequests) {
  if ((bid.width || parseInt(bid.width, 10) === 0) && (bid.height || parseInt(bid.height, 10) === 0)) {
    bid.width = parseInt(bid.width, 10);
    bid.height = parseInt(bid.height, 10);
    return true;
  }

  var adUnit = Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["getBidderRequest"])(bidRequests, bid.bidderCode, adUnitCode);
  var sizes = adUnit && adUnit.bids && adUnit.bids[0] && adUnit.bids[0].sizes;
  var parsedSizes = Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["parseSizesInput"])(sizes); // if a banner impression has one valid size, we assign that size to any bid
  // response that does not explicitly set width or height

  if (parsedSizes.length === 1) {
    var _parsedSizes$0$split = parsedSizes[0].split('x'),
        _parsedSizes$0$split2 = _slicedToArray(_parsedSizes$0$split, 2),
        width = _parsedSizes$0$split2[0],
        height = _parsedSizes$0$split2[1];

    bid.width = parseInt(width, 10);
    bid.height = parseInt(height, 10);
    return true;
  }

  return false;
} // Validate the arguments sent to us by the adapter. If this returns false, the bid should be totally ignored.


function isValid(adUnitCode, bid, bidRequests) {
  function hasValidKeys() {
    var bidKeys = Object.keys(bid);
    return COMMON_BID_RESPONSE_KEYS.every(function (key) {
      return __WEBPACK_IMPORTED_MODULE_9_core_js_library_fn_array_includes_js___default()(bidKeys, key) && !__WEBPACK_IMPORTED_MODULE_9_core_js_library_fn_array_includes_js___default()([undefined, null], bid[key]);
    });
  }

  function errorMessage(msg) {
    return "Invalid bid from ".concat(bid.bidderCode, ". Ignoring bid: ").concat(msg);
  }

  if (!adUnitCode) {
    Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logWarn"])('No adUnitCode was supplied to addBidResponse.');
    return false;
  }

  if (!bid) {
    Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logWarn"])("Some adapter tried to add an undefined bid for ".concat(adUnitCode, "."));
    return false;
  }

  if (!hasValidKeys()) {
    Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])(errorMessage("Bidder ".concat(bid.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.")));
    return false;
  }

  if (bid.mediaType === 'native' && !Object(__WEBPACK_IMPORTED_MODULE_5__native_js__["f" /* nativeBidIsValid */])(bid, bidRequests)) {
    Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])(errorMessage('Native bid missing some required properties.'));
    return false;
  }

  if (bid.mediaType === 'video' && !Object(__WEBPACK_IMPORTED_MODULE_6__video_js__["d" /* isValidVideoBid */])(bid, bidRequests)) {
    Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])(errorMessage("Video bid does not have required vastUrl or renderer property"));
    return false;
  }

  if (bid.mediaType === 'banner' && !validBidSize(adUnitCode, bid, bidRequests)) {
    Object(__WEBPACK_IMPORTED_MODULE_11__utils_js__["logError"])(errorMessage("Banner bids require a width and height"));
    return false;
  }

  return true;
}

/***/ }),

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Renderer;
/* harmony export (immutable) */ __webpack_exports__["c"] = isRendererRequired;
/* harmony export (immutable) */ __webpack_exports__["b"] = executeRenderer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adloader_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find_js__);



var moduleCode = 'outstream';
/**
 * @typedef {object} Renderer
 *
 * A Renderer stores some functions which are used to render a particular Bid.
 * These are used in Outstream Video Bids, returned on the Bid by the adapter, and will
 * be used to render that bid unless the Publisher overrides them.
 */

function Renderer(options) {
  var _this = this;

  var url = options.url,
      config = options.config,
      id = options.id,
      callback = options.callback,
      loaded = options.loaded,
      adUnitCode = options.adUnitCode;
  this.url = url;
  this.config = config;
  this.handlers = {};
  this.id = id; // a renderer may push to the command queue to delay rendering until the
  // render function is loaded by loadExternalScript, at which point the the command
  // queue will be processed

  this.loaded = loaded;
  this.cmd = [];

  this.push = function (func) {
    if (typeof func !== 'function') {
      __WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"]('Commands given to Renderer.push must be wrapped in a function');
      return;
    }

    _this.loaded ? func.call() : _this.cmd.push(func);
  }; // bidders may override this with the `callback` property given to `install`


  this.callback = callback || function () {
    _this.loaded = true;

    _this.process();
  };

  if (!isRendererDefinedOnAdUnit(adUnitCode)) {
    // we expect to load a renderer url once only so cache the request to load script
    Object(__WEBPACK_IMPORTED_MODULE_0__adloader_js__["a" /* loadExternalScript */])(url, moduleCode, this.callback);
  } else {
    __WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"]("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(adUnitCode));
  }
}

Renderer.install = function (_ref) {
  var url = _ref.url,
      config = _ref.config,
      id = _ref.id,
      callback = _ref.callback,
      loaded = _ref.loaded,
      adUnitCode = _ref.adUnitCode;
  return new Renderer({
    url: url,
    config: config,
    id: id,
    callback: callback,
    loaded: loaded,
    adUnitCode: adUnitCode
  });
};

Renderer.prototype.getConfig = function () {
  return this.config;
};

Renderer.prototype.setRender = function (fn) {
  this.render = fn;
};

Renderer.prototype.setEventHandlers = function (handlers) {
  this.handlers = handlers;
};

Renderer.prototype.handleVideoEvent = function (_ref2) {
  var id = _ref2.id,
      eventName = _ref2.eventName;

  if (typeof this.handlers[eventName] === 'function') {
    this.handlers[eventName]();
  }

  __WEBPACK_IMPORTED_MODULE_1__utils_js__["logMessage"]("Prebid Renderer event for id ".concat(id, " type ").concat(eventName));
};
/*
 * Calls functions that were pushed to the command queue before the
 * renderer was loaded by `loadExternalScript`
 */


Renderer.prototype.process = function () {
  while (this.cmd.length > 0) {
    try {
      this.cmd.shift().call();
    } catch (error) {
      __WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"]('Error processing Renderer command: ', error);
    }
  }
};
/**
 * Checks whether creative rendering should be done by Renderer or not.
 * @param {Object} renderer Renderer object installed by adapter
 * @returns {Boolean}
 */


function isRendererRequired(renderer) {
  return !!(renderer && renderer.url);
}
/**
 * Render the bid returned by the adapter
 * @param {Object} renderer Renderer object installed by adapter
 * @param {Object} bid Bid response
 */

function executeRenderer(renderer, bid) {
  renderer.render(bid);
}

function isRendererDefinedOnAdUnit(adUnitCode) {
  var adUnits = owpbjs.adUnits;
  var adUnit = __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find_js___default()(adUnits, function (adUnit) {
    return adUnit.code === adUnitCode;
  });
  return !!(adUnit && adUnit.renderer && adUnit.renderer.url && adUnit.renderer.render);
}

/***/ }),

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(20);
var anObject = __webpack_require__(31);
var getKeys = __webpack_require__(101);

module.exports = __webpack_require__(25) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(102);
var enumBugKeys = __webpack_require__(68);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(32);
var toIObject = __webpack_require__(49);
var arrayIndexOf = __webpack_require__(64)(false);
var IE_PROTO = __webpack_require__(51)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(19).document;
module.exports = document && document.documentElement;


/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(32);
var toObject = __webpack_require__(46);
var IE_PROTO = __webpack_require__(51)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(106);
var global = __webpack_require__(19);
var hide = __webpack_require__(24);
var Iterators = __webpack_require__(33);
var TO_STRING_TAG = __webpack_require__(14)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(41);
var step = __webpack_require__(69);
var Iterators = __webpack_require__(33);
var toIObject = __webpack_require__(49);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(50)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(108);
var validate = __webpack_require__(77);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(110)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(20).f;
var create = __webpack_require__(67);
var redefineAll = __webpack_require__(70);
var ctx = __webpack_require__(27);
var anInstance = __webpack_require__(71);
var forOf = __webpack_require__(42);
var $iterDefine = __webpack_require__(50);
var step = __webpack_require__(69);
var setSpecies = __webpack_require__(109);
var DESCRIPTORS = __webpack_require__(25);
var fastKey = __webpack_require__(76).fastKey;
var validate = __webpack_require__(77);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(19);
var core = __webpack_require__(17);
var dP = __webpack_require__(20);
var DESCRIPTORS = __webpack_require__(25);
var SPECIES = __webpack_require__(14)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(94);
module.exports = __webpack_require__(17).Array.includes;


/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(19);
var $export = __webpack_require__(16);
var meta = __webpack_require__(76);
var fails = __webpack_require__(37);
var hide = __webpack_require__(24);
var redefineAll = __webpack_require__(70);
var forOf = __webpack_require__(42);
var anInstance = __webpack_require__(71);
var isObject = __webpack_require__(18);
var setToStringTag = __webpack_require__(52);
var dP = __webpack_require__(20).f;
var each = __webpack_require__(45)(0);
var DESCRIPTORS = __webpack_require__(25);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(16);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(112)('Set') });


/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(75);
var from = __webpack_require__(113);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(42);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(115)('Set');


/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(16);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(117)('Set');


/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(16);
var aFunction = __webpack_require__(59);
var ctx = __webpack_require__(27);
var forOf = __webpack_require__(42);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(27);
var $export = __webpack_require__(16);
var toObject = __webpack_require__(46);
var call = __webpack_require__(72);
var isArrayIter = __webpack_require__(73);
var toLength = __webpack_require__(40);
var createProperty = __webpack_require__(119);
var getIterFn = __webpack_require__(74);

$export($export.S + $export.F * !__webpack_require__(120)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(20);
var createDesc = __webpack_require__(44);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(88);
module.exports = __webpack_require__(17).Array.find;


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(14)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ 121:
/***/ (function(module, exports) {

module.exports = clone;

/*
  Identical to `just-extend(true, {}, obj1)`

  var arr = [1, 2, 3];
  var subObj = {aa: 1};
  var obj = {a: 3, b: 5, c: arr, d: subObj};
  var objClone = clone(obj);
  arr.push(4);
  subObj.bb = 2;
  obj; // {a: 3, b: 5, c: [1, 2, 3, 4], d: {aa: 1}}  
  objClone; // {a: 3, b: 5, c: [1, 2, 3], d: {aa: 1, bb: 2}}
*/

function clone(obj) {
  var result = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
    // include prototype properties
    var value = obj[key];
    if (value && typeof value == 'object') {
      result[key] = clone(value);
    } else {
      result[key] = value;
    }
  }
  return result;
}


/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

var objectKeys = __webpack_require__(79);
var isArguments = __webpack_require__(124);
var is = __webpack_require__(125);
var isRegex = __webpack_require__(126);
var flags = __webpack_require__(129);
var isDate = __webpack_require__(135);

var getTime = Date.prototype.getTime;

function deepEqual(actual, expected, options) {
  var opts = options || {};

  // 7.1. All identical values are equivalent, as determined by ===.
  if (opts.strict ? is(actual, expected) : actual === expected) {
    return true;
  }

  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {
    return opts.strict ? is(actual, expected) : actual == expected;
  }

  /*
   * 7.4. For all other Object pairs, including Array objects, equivalence is
   * determined by having the same number of owned properties (as verified
   * with Object.prototype.hasOwnProperty.call), the same set of keys
   * (although not necessarily the same order), equivalent values for every
   * corresponding key, and an identical 'prototype' property. Note: this
   * accounts for both named and indexed properties on Arrays.
   */
  // eslint-disable-next-line no-use-before-define
  return objEquiv(actual, expected, opts);
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer(x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
    return false;
  }
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') {
    return false;
  }
  return true;
}

function objEquiv(a, b, opts) {
  /* eslint max-statements: [2, 50] */
  var i, key;
  if (typeof a !== typeof b) { return false; }
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) { return false; }

  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) { return false; }

  if (isArguments(a) !== isArguments(b)) { return false; }

  var aIsRegex = isRegex(a);
  var bIsRegex = isRegex(b);
  if (aIsRegex !== bIsRegex) { return false; }
  if (aIsRegex || bIsRegex) {
    return a.source === b.source && flags(a) === flags(b);
  }

  if (isDate(a) && isDate(b)) {
    return getTime.call(a) === getTime.call(b);
  }

  var aIsBuffer = isBuffer(a);
  var bIsBuffer = isBuffer(b);
  if (aIsBuffer !== bIsBuffer) { return false; }
  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here
    if (a.length !== b.length) { return false; }
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) { return false; }
    }
    return true;
  }

  if (typeof a !== typeof b) { return false; }

  try {
    var ka = objectKeys(a);
    var kb = objectKeys(b);
  } catch (e) { // happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates hasOwnProperty)
  if (ka.length !== kb.length) { return false; }

  // the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  // ~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i]) { return false; }
  }
  // equivalent values for every corresponding key, and ~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) { return false; }
  }

  return true;
}

module.exports = deepEqual;


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(80); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var toStr = Object.prototype.toString;

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return toStr.call(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		toStr.call(value) !== '[object Array]' &&
		toStr.call(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://www.ecma-international.org/ecma-262/6.0/#sec-object.is

var numberIsNaN = function (value) {
	return value !== value;
};

module.exports = function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	}
	if (a === b) {
		return true;
	}
	if (numberIsNaN(a) && numberIsNaN(b)) {
		return true;
	}
	return false;
};



/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(127);
var regexExec = RegExp.prototype.exec;
var gOPD = Object.getOwnPropertyDescriptor;

var tryRegexExecCall = function tryRegexExec(value) {
	try {
		var lastIndex = value.lastIndex;
		value.lastIndex = 0; // eslint-disable-line no-param-reassign

		regexExec.call(value);
		return true;
	} catch (e) {
		return false;
	} finally {
		value.lastIndex = lastIndex; // eslint-disable-line no-param-reassign
	}
};
var toStr = Object.prototype.toString;
var regexClass = '[object RegExp]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isRegex(value) {
	if (!value || typeof value !== 'object') {
		return false;
	}
	if (!hasToStringTag) {
		return toStr.call(value) === regexClass;
	}

	var descriptor = gOPD(value, 'lastIndex');
	var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
	if (!hasLastIndexDataProperty) {
		return false;
	}

	return tryRegexExecCall(value);
};


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(53);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(54);
var callBind = __webpack_require__(130);

var implementation = __webpack_require__(81);
var getPolyfill = __webpack_require__(82);
var shim = __webpack_require__(134);

var flagsBound = callBind(implementation);

define(flagsBound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = flagsBound;


/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getHook; });
/* harmony export (immutable) */ __webpack_exports__["d"] = setupBeforeHookFnOnce;
/* harmony export (immutable) */ __webpack_exports__["c"] = module;
/* harmony export (immutable) */ __webpack_exports__["e"] = submodule;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fun_hooks_no_eval_index_js__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fun_hooks_no_eval_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fun_hooks_no_eval_index_js__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


var hook = __WEBPACK_IMPORTED_MODULE_0_fun_hooks_no_eval_index_js___default()({
  useProxy: false,
  ready: __WEBPACK_IMPORTED_MODULE_0_fun_hooks_no_eval_index_js___default.a.SYNC | __WEBPACK_IMPORTED_MODULE_0_fun_hooks_no_eval_index_js___default.a.ASYNC | __WEBPACK_IMPORTED_MODULE_0_fun_hooks_no_eval_index_js___default.a.QUEUE
});
var getHook = hook.get;
function setupBeforeHookFnOnce(baseFn, hookFn) {
  var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 15;
  var result = baseFn.getHooks({
    hook: hookFn
  });

  if (result.length === 0) {
    baseFn.before(hookFn, priority);
  }
}
function module(name, install) {
  hook('async', function (submodules) {
    submodules.forEach(function (args) {
      return install.apply(void 0, _toConsumableArray(args));
    });
  }, name)([]); // will be queued until hook.ready() called in pbjs.processQueue();
}
function submodule(name) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  getHook(name).before(function (next, modules) {
    modules.push(args);
    next(modules);
  });
}

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(53);

var GetIntrinsic = __webpack_require__(131);

var $Function = GetIntrinsic('%Function%');
var $apply = $Function.apply;
var $call = $Function.call;

module.exports = function callBind() {
	return bind.apply($call, arguments);
};

module.exports.apply = function applyBind() {
	return bind.apply($apply, arguments);
};


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals
	Atomics,
	SharedArrayBuffer,
*/

var undefined;

var $TypeError = TypeError;

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(132)();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var generator; // = function * () {};
var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};
var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};
var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%ArrayPrototype%': Array.prototype,
	'%ArrayProto_entries%': Array.prototype.entries,
	'%ArrayProto_forEach%': Array.prototype.forEach,
	'%ArrayProto_keys%': Array.prototype.keys,
	'%ArrayProto_values%': Array.prototype.values,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': asyncFunction,
	'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
	'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
	'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%Boolean%': Boolean,
	'%BooleanPrototype%': Boolean.prototype,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
	'%Date%': Date,
	'%DatePrototype%': Date.prototype,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%ErrorPrototype%': Error.prototype,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%EvalErrorPrototype%': EvalError.prototype,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
	'%Function%': Function,
	'%FunctionPrototype%': Function.prototype,
	'%Generator%': generator ? getProto(generator()) : undefined,
	'%GeneratorFunction%': generatorFunction,
	'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
	'%Math%': Math,
	'%Number%': Number,
	'%NumberPrototype%': Number.prototype,
	'%Object%': Object,
	'%ObjectPrototype%': Object.prototype,
	'%ObjProto_toString%': Object.prototype.toString,
	'%ObjProto_valueOf%': Object.prototype.valueOf,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
	'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
	'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
	'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
	'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%RangeErrorPrototype%': RangeError.prototype,
	'%ReferenceError%': ReferenceError,
	'%ReferenceErrorPrototype%': ReferenceError.prototype,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%RegExpPrototype%': RegExp.prototype,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%StringPrototype%': String.prototype,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
	'%SyntaxError%': SyntaxError,
	'%SyntaxErrorPrototype%': SyntaxError.prototype,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
	'%TypeError%': $TypeError,
	'%TypeErrorPrototype%': $TypeError.prototype,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
	'%URIError%': URIError,
	'%URIErrorPrototype%': URIError.prototype,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
	'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

var bind = __webpack_require__(53);
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	if (!(name in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}

	return INTRINSICS[name];
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);

	var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
	for (var i = 1; i < parts.length; i += 1) {
		if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, parts[i]);
				if (!allowMissing && !(parts[i] in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				value = desc ? (desc.get || desc.value) : value[parts[i]];
			} else {
				value = value[parts[i]];
			}
		}
	}
	return value;
};


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(133);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)))

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var supportsDescriptors = __webpack_require__(54).supportsDescriptors;
var getPolyfill = __webpack_require__(82);
var gOPD = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var TypeErr = TypeError;
var getProto = Object.getPrototypeOf;
var regex = /a/;

module.exports = function shimFlags() {
	if (!supportsDescriptors || !getProto) {
		throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	var polyfill = getPolyfill();
	var proto = getProto(regex);
	var descriptor = gOPD(proto, 'flags');
	if (!descriptor || descriptor.get !== polyfill) {
		defineProperty(proto, 'flags', {
			configurable: true,
			enumerable: false,
			get: polyfill
		});
	}
	return polyfill;
};


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dlv;
function dlv(obj, key, def, p, undef) {
	key = key.split ? key.split('.') : key;
	for (p = 0; p < key.length; p++) {
		obj = obj ? obj[key[p]] : undef;
	}
	return obj === undef ? def : obj;
}


/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (obj, keys, val) {
	keys.split && (keys=keys.split('.'));
	var i=0, l=keys.length, t=obj, x;
	for (; i < l; ++i) {
		x = t[keys[i]];
		t = t[keys[i]] = (i === l - 1 ? val : (x != null ? x : (!!~keys[i+1].indexOf('.') || !(+keys[i+1] > -1)) ? {} : []));
	}
});


/***/ }),

/***/ 138:
/***/ (function(module, exports) {

/*
* @license MIT
* Fun Hooks v0.9.8
* (c) @snapwich
*/
create.SYNC = 1;
create.ASYNC = 2;
create.QUEUE = 4;

var packageName = "fun-hooks";

function hasProxy() {
  return !!(typeof Proxy === "function" && Proxy.revocable);
}

var defaults = Object.freeze({
  useProxy: true,
  ready: 0
});

var hookableMap = new WeakMap();

// detect incorrectly implemented reduce and if found use polyfill
// https://github.com/prebid/Prebid.js/issues/3576
// polyfill from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
var reduce =
  [1]
    .reduce(function(a, b, c) {
      return [a, b, c];
    }, 2)
    .toString() === "2,1,0"
    ? Array.prototype.reduce
    : function(callback, initial) {
        var o = Object(this);
        var len = o.length >>> 0;
        var k = 0;
        var value;
        if (initial) {
          value = initial;
        } else {
          while (k < len && !(k in o)) {
            k++;
          }
          value = o[k++];
        }
        while (k < len) {
          if (k in o) {
            value = callback(value, o[k], k, o);
          }
          k++;
        }
        return value;
      };

function rest(args, skip) {
  return Array.prototype.slice.call(args, skip);
}

var assign =
  Object.assign ||
  function assign(target) {
    return reduce.call(
      rest(arguments, 1),
      function(target, obj) {
        if (obj) {
          Object.keys(obj).forEach(function(prop) {
            target[prop] = obj[prop];
          });
        }
        return target;
      },
      target
    );
  };

function runAll(queue) {
  var queued;
  // eslint-disable-next-line no-cond-assign
  while ((queued = queue.shift())) {
    queued();
  }
}

function create(config) {
  var hooks = {};
  var postReady = [];

  config = assign({}, defaults, config);

  function dispatch(arg1, arg2) {
    if (typeof arg1 === "function") {
      return hookFn.call(null, "sync", arg1, arg2);
    } else if (typeof arg1 === "string" && typeof arg2 === "function") {
      return hookFn.apply(null, arguments);
    } else if (typeof arg1 === "object") {
      return hookObj.apply(null, arguments);
    }
  }

  var ready;
  if (config.ready) {
    dispatch.ready = function() {
      ready = true;
      runAll(postReady);
    };
  } else {
    ready = true;
  }

  function hookObj(obj, props, objName) {
    var walk = true;
    if (typeof props === "undefined") {
      props = Object.getOwnPropertyNames(obj);
      walk = false;
    }
    var objHooks = {};
    var doNotHook = ["constructor"];
    do {
      props = props.filter(function(prop) {
        return (
          typeof obj[prop] === "function" &&
          !(doNotHook.indexOf(prop) !== -1) &&
          !prop.match(/^_/)
        );
      });
      props.forEach(function(prop) {
        var parts = prop.split(":");
        var name = parts[0];
        var type = parts[1] || "sync";
        if (!objHooks[name]) {
          var fn = obj[name];
          objHooks[name] = obj[name] = hookFn(
            type,
            fn,
            objName ? [objName, name] : undefined
          );
        }
      });
      obj = Object.getPrototypeOf(obj);
    } while (walk && obj);
    return objHooks;
  }

  /**
   * Navigates a string path to return a hookable function.  If not found, creates a placeholder for hooks.
   * @param {(Array<string> | string)} path
   */
  function get(path) {
    var parts = Array.isArray(path) ? path : path.split(".");
    return reduce.call(
      parts,
      function(memo, part, i) {
        var item = memo[part];
        var installed = false;
        if (item) {
          return item;
        } else if (i === parts.length - 1) {
          if (!ready) {
            postReady.push(function() {
              if (!installed) {
                // eslint-disable-next-line no-console
                console.warn(
                  packageName +
                    ": referenced '" +
                    path +
                    "' but it was never created"
                );
              }
            });
          }
          return (memo[part] = newHookable(function(fn) {
            memo[part] = fn;
            installed = true;
          }));
        }
        return (memo[part] = {});
      },
      hooks
    );
  }

  function newHookable(onInstall) {
    var before = [];
    var after = [];
    var generateTrap = function() {};

    var api = {
      before: function(hook, priority) {
        return add.call(this, before, "before", hook, priority);
      },
      after: function(hook, priority) {
        return add.call(this, after, "after", hook, priority);
      },
      getHooks: function(match) {
        var hooks = before.concat(after);
        if (typeof match === "object") {
          hooks = hooks.filter(function(entry) {
            return Object.keys(match).every(function(prop) {
              return entry[prop] === match[prop];
            });
          });
        }
        return assign(hooks, {
          remove: function() {
            hooks.forEach(function(entry) {
              entry.remove();
            });
            return this;
          }
        });
      },
      removeAll: function() {
        return this.getHooks().remove();
      }
    };

    var meta = {
      install: function(type, fn, generate) {
        this.type = type;
        generateTrap = generate;
        generate(before, after);
        onInstall && onInstall(fn);
      }
    };

    // store meta data related to hookable. use `api.after` since `api` reference is not available on our proxy.
    hookableMap.set(api.after, meta);

    return api;

    function add(store, type, hook, priority) {
      var entry = {
        hook: hook,
        type: type,
        priority: priority || 10,
        remove: function() {
          var index = store.indexOf(entry);
          if (index !== -1) {
            store.splice(index, 1);
            generateTrap(before, after);
          }
        }
      };
      store.push(entry);
      store.sort(function(a, b) {
        return b.priority - a.priority;
      });
      generateTrap(before, after);
      return this;
    }
  }

  function hookFn(type, fn, name) {
    // check if function has already been wrapped
    var meta = fn.after && hookableMap.get(fn.after);
    if (meta) {
      if (meta.type !== type) {
        throw packageName + ": recreated hookable with different type";
      } else {
        return fn;
      }
    }

    var hookable = name ? get(name) : newHookable();

    var trap;
    var hookedFn;
    var handlers = {
      get: function(target, prop) {
        return hookable[prop] || Reflect.get.apply(Reflect, arguments);
      }
    };

    if (!ready) {
      postReady.push(setTrap);
    }

    if (config.useProxy && hasProxy()) {
      hookedFn = new Proxy(fn, handlers);
    } else {
      hookedFn = function() {
        return handlers.apply
          ? handlers.apply(fn, this, rest(arguments))
          : fn.apply(this, arguments);
      };
      assign(hookedFn, hookable);
    }

    hookableMap.get(hookedFn.after).install(type, hookedFn, generateTrap);

    return hookedFn;

    // eslint-disable-next-line no-redeclare
    function generateTrap(before, after) {
      var order = [];
      var targetIndex;
      if (before.length || after.length) {
        before.forEach(addToOrder);
        // placeholder for target function wrapper
        targetIndex = order.push(undefined) - 1;
        after.forEach(addToOrder);
        trap = function(target, thisArg, args) {
          var curr = 0;
          var result;
          var callback =
            type === "async" &&
            typeof args[args.length - 1] === "function" &&
            args.pop();
          function bail(value) {
            if (type === "sync") {
              result = value;
            } else if (callback) {
              callback.apply(null, arguments);
            }
          }
          function next(value) {
            if (order[curr]) {
              var args = rest(arguments);
              next.bail = bail;
              args.unshift(next);
              return order[curr++].apply(thisArg, args);
            }
            if (type === "sync") {
              result = value;
            } else if (callback) {
              callback.apply(null, arguments);
            }
          }
          order[targetIndex] = function() {
            var args = rest(arguments, 1);
            if (type === "async" && callback) {
              delete next.bail;
              args.push(next);
            }
            var result = target.apply(thisArg, args);
            if (type === "sync") {
              next(result);
            }
          };
          next.apply(null, args);
          return result;
        };
      } else {
        trap = undefined;
      }
      setTrap();

      function addToOrder(entry) {
        order.push(entry.hook);
      }
    }

    function setTrap() {
      if (
        ready ||
        (type === "sync" && !(config.ready & create.SYNC)) ||
        (type === "async" && !(config.ready & create.ASYNC))
      ) {
        handlers.apply = trap;
      } else if (type === "sync" || !(config.ready & create.QUEUE)) {
        handlers.apply = function() {
          throw packageName + ": hooked function not ready";
        };
      } else {
        handlers.apply = function() {
          var args = arguments;
          postReady.push(function() {
            hookedFn.apply(args[1], args[2]);
          });
        };
      }
    }
  }

  dispatch.get = get;
  return dispatch;
}

/* global module */
module.exports = create;


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(62)('wks');
var uid = __webpack_require__(48);
var Symbol = __webpack_require__(19).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getGlobal;
// if $$PREBID_GLOBAL$$ already exists in global document scope, use it, if not, create the object
// global defination should happen BEFORE imports to avoid global undefined errors.
window.owpbjs = window.owpbjs || {};
window.owpbjs.cmd = window.owpbjs.cmd || [];
window.owpbjs.que = window.owpbjs.que || []; // create a pbjs global pointer

window._pbjsGlobals = window._pbjsGlobals || [];

window._pbjsGlobals.push("owpbjs");

function getGlobal() {
  return window.owpbjs;
}

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(19);
var core = __webpack_require__(17);
var ctx = __webpack_require__(27);
var hide = __webpack_require__(24);
var has = __webpack_require__(32);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ 17:
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 19:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(16);
var $find = __webpack_require__(45)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(41)(KEY);


/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listenMessagesFromCreative;
/* unused harmony export _sendAdToCreative */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__events_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__native_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_json__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__constants_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auctionManager_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Renderer_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js__);
/* Secure Creatives
  Provides support for rendering creatives into cross domain iframes such as SafeFrame to prevent
   access to a publisher page from creative payloads.
 */








var BID_WON = __WEBPACK_IMPORTED_MODULE_2__constants_json__["EVENTS"].BID_WON;
function listenMessagesFromCreative() {
  window.addEventListener('message', receiveMessage, false);
}

function receiveMessage(ev) {
  var key = ev.message ? 'message' : 'data';
  var data = {};

  try {
    data = JSON.parse(ev[key]);
  } catch (e) {
    return;
  }

  if (data && data.adId) {
    var adObject = __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find_js___default()(__WEBPACK_IMPORTED_MODULE_4__auctionManager_js__["a" /* auctionManager */].getBidsReceived(), function (bid) {
      return bid.adId === data.adId;
    });

    if (adObject && data.message === 'Prebid Request') {
      _sendAdToCreative(adObject, data.adServerDomain, ev.source); // save winning bids


      __WEBPACK_IMPORTED_MODULE_4__auctionManager_js__["a" /* auctionManager */].addWinningBid(adObject);
      __WEBPACK_IMPORTED_MODULE_0__events_js___default.a.emit(BID_WON, adObject);
    } // handle this script from native template in an ad server
    // window.parent.postMessage(JSON.stringify({
    //   message: 'Prebid Native',
    //   adId: '%%PATTERN:hb_adid%%'
    // }), '*');


    if (adObject && data.message === 'Prebid Native') {
      if (data.action === 'assetRequest') {
        var message = Object(__WEBPACK_IMPORTED_MODULE_1__native_js__["c" /* getAssetMessage */])(data, adObject);
        ev.source.postMessage(JSON.stringify(message), ev.origin);
        return;
      }

      var trackerType = Object(__WEBPACK_IMPORTED_MODULE_1__native_js__["b" /* fireNativeTrackers */])(data, adObject);

      if (trackerType === 'click') {
        return;
      }

      __WEBPACK_IMPORTED_MODULE_4__auctionManager_js__["a" /* auctionManager */].addWinningBid(adObject);
      __WEBPACK_IMPORTED_MODULE_0__events_js___default.a.emit(BID_WON, adObject);
    }
  }
}

function _sendAdToCreative(adObject, remoteDomain, source) {
  var adId = adObject.adId,
      ad = adObject.ad,
      adUrl = adObject.adUrl,
      width = adObject.width,
      height = adObject.height,
      renderer = adObject.renderer,
      cpm = adObject.cpm; // rendering for outstream safeframe

  if (Object(__WEBPACK_IMPORTED_MODULE_6__Renderer_js__["c" /* isRendererRequired */])(renderer)) {
    Object(__WEBPACK_IMPORTED_MODULE_6__Renderer_js__["b" /* executeRenderer */])(renderer, adObject);
  } else if (adId) {
    resizeRemoteCreative(adObject);
    source.postMessage(JSON.stringify({
      message: 'Prebid Response',
      ad: Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["replaceAuctionPrice"])(ad, cpm),
      adUrl: Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["replaceAuctionPrice"])(adUrl, cpm),
      adId: adId,
      width: width,
      height: height
    }), remoteDomain);
  }
}

function resizeRemoteCreative(_ref) {
  var adId = _ref.adId,
      adUnitCode = _ref.adUnitCode,
      width = _ref.width,
      height = _ref.height;
  // resize both container div + iframe
  ['div', 'iframe'].forEach(function (elmType) {
    // not select element that gets removed after dfp render
    var element = getElementByAdUnit(elmType + ':not([style*="display: none"])');

    if (element) {
      var elementStyle = element.style;
      elementStyle.width = width + 'px';
      elementStyle.height = height + 'px';
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_3__utils_js__["logWarn"])("Unable to locate matching page element for adUnitCode ".concat(adUnitCode, ".  Can't resize it to ad's dimensions.  Please review setup."));
    }
  });

  function getElementByAdUnit(elmType) {
    var id = getElementIdBasedOnAdServer(adId, adUnitCode);
    var parentDivEle = document.getElementById(id);
    return parentDivEle && parentDivEle.querySelector(elmType);
  }

  function getElementIdBasedOnAdServer(adId, adUnitCode) {
    if (window.googletag) {
      return getDfpElementId(adId);
    } else if (window.apntag) {
      return getAstElementId(adUnitCode);
    } else {
      return adUnitCode;
    }
  }

  function getDfpElementId(adId) {
    return __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find_js___default()(window.googletag.pubads().getSlots(), function (slot) {
      return __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find_js___default()(slot.getTargetingKeys(), function (key) {
        return __WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js___default()(slot.getTargeting(key), adId);
      });
    }).getSlotElementId();
  }

  function getAstElementId(adUnitCode) {
    var astTag = window.apntag.getTag(adUnitCode);
    return astTag && astTag.targetId;
  }
}

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export addBidResponseBound */
/* unused harmony export addBidderRequestsBound */
/* unused harmony export enableOverrides */
/* unused harmony export disableOverrides */
/* unused harmony export bidExcluded */
/* unused harmony export bidderExcluded */
/* unused harmony export applyBidOverrides */
/* unused harmony export addBidResponseHook */
/* unused harmony export addBidderRequestsHook */
/* unused harmony export getConfig */
/* harmony export (immutable) */ __webpack_exports__["a"] = sessionLoader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auction_js__ = __webpack_require__(35);



var OVERRIDE_KEY = "owpbjs:debugging";
var addBidResponseBound;
var addBidderRequestsBound;

function logMessage(msg) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logMessage"])('DEBUG: ' + msg);
}

function logWarn(msg) {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])('DEBUG: ' + msg);
}

function addHooks(overrides) {
  addBidResponseBound = addBidResponseHook.bind(overrides);
  __WEBPACK_IMPORTED_MODULE_2__auction_js__["c" /* addBidResponse */].before(addBidResponseBound, 5);
  addBidderRequestsBound = addBidderRequestsHook.bind(overrides);
  __WEBPACK_IMPORTED_MODULE_2__auction_js__["e" /* addBidderRequests */].before(addBidderRequestsBound, 5);
}

function removeHooks() {
  __WEBPACK_IMPORTED_MODULE_2__auction_js__["c" /* addBidResponse */].getHooks({
    hook: addBidResponseBound
  }).remove();
  __WEBPACK_IMPORTED_MODULE_2__auction_js__["e" /* addBidderRequests */].getHooks({
    hook: addBidderRequestsBound
  }).remove();
}

function enableOverrides(overrides) {
  var fromSession = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  __WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].setConfig({
    'debug': true
  });
  removeHooks();
  addHooks(overrides);
  logMessage("bidder overrides enabled".concat(fromSession ? ' from session' : ''));
}
function disableOverrides() {
  removeHooks();
  logMessage('bidder overrides disabled');
}
/**
 * @param {{bidder:string, adUnitCode:string}} overrideObj
 * @param {string} bidderCode
 * @param {string} adUnitCode
 * @returns {boolean}
 */

function bidExcluded(overrideObj, bidderCode, adUnitCode) {
  if (overrideObj.bidder && overrideObj.bidder !== bidderCode) {
    return true;
  }

  if (overrideObj.adUnitCode && overrideObj.adUnitCode !== adUnitCode) {
    return true;
  }

  return false;
}
/**
 * @param {string[]} bidders
 * @param {string} bidderCode
 * @returns {boolean}
 */

function bidderExcluded(bidders, bidderCode) {
  return Array.isArray(bidders) && bidders.indexOf(bidderCode) === -1;
}
/**
 * @param {Object} overrideObj
 * @param {Object} bidObj
 * @param {Object} bidType
 * @returns {Object} bidObj with overridden properties
 */

function applyBidOverrides(overrideObj, bidObj, bidType) {
  return Object.keys(overrideObj).filter(function (key) {
    return ['adUnitCode', 'bidder'].indexOf(key) === -1;
  }).reduce(function (result, key) {
    logMessage("bidder overrides changed '".concat(result.adUnitCode, "/").concat(result.bidderCode, "' ").concat(bidType, ".").concat(key, " from '").concat(result[key], ".js' to '").concat(overrideObj[key], "'"));
    result[key] = overrideObj[key];
    return result;
  }, bidObj);
}
function addBidResponseHook(next, adUnitCode, bid) {
  var overrides = this;

  if (bidderExcluded(overrides.bidders, bid.bidderCode)) {
    logWarn("bidder '".concat(bid.bidderCode, "' excluded from auction by bidder overrides"));
    return;
  }

  if (Array.isArray(overrides.bids)) {
    overrides.bids.forEach(function (overrideBid) {
      if (!bidExcluded(overrideBid, bid.bidderCode, adUnitCode)) {
        applyBidOverrides(overrideBid, bid, 'bidder');
      }
    });
  }

  next(adUnitCode, bid);
}
function addBidderRequestsHook(next, bidderRequests) {
  var overrides = this;
  var includedBidderRequests = bidderRequests.filter(function (bidderRequest) {
    if (bidderExcluded(overrides.bidders, bidderRequest.bidderCode)) {
      logWarn("bidRequest '".concat(bidderRequest.bidderCode, "' excluded from auction by bidder overrides"));
      return false;
    }

    return true;
  });

  if (Array.isArray(overrides.bidRequests)) {
    includedBidderRequests.forEach(function (bidderRequest) {
      overrides.bidRequests.forEach(function (overrideBid) {
        bidderRequest.bids.forEach(function (bid) {
          if (!bidExcluded(overrideBid, bidderRequest.bidderCode, bid.adUnitCode)) {
            applyBidOverrides(overrideBid, bid, 'bidRequest');
          }
        });
      });
    });
  }

  next(includedBidderRequests);
}
function getConfig(debugging) {
  if (!debugging.enabled) {
    disableOverrides();

    try {
      window.sessionStorage.removeItem(OVERRIDE_KEY);
    } catch (e) {}
  } else {
    try {
      window.sessionStorage.setItem(OVERRIDE_KEY, JSON.stringify(debugging));
    } catch (e) {}

    enableOverrides(debugging);
  }
}
__WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getConfig('debugging', function (_ref) {
  var debugging = _ref.debugging;
  return getConfig(debugging);
});
function sessionLoader(storage) {
  var overrides;

  try {
    storage = storage || window.sessionStorage;
    overrides = JSON.parse(storage.getItem(OVERRIDE_KEY));
  } catch (e) {}

  if (overrides) {
    enableOverrides(overrides, true);
  }
}

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BANNER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADPOD; });
/**
 * This file contains the valid Media Types in Prebid.
 *
 * All adapters are assumed to support banner ads. Other media types are specified by Adapters when they
 * register themselves with prebid-core.
 */

/**
 * @typedef {('native'|'video'|'banner')} MediaType
 * @typedef {('adpod')} VideoContext
 */

/** @type MediaType */
var NATIVE = 'native';
/** @type MediaType */

var VIDEO = 'video';
/** @type MediaType */

var BANNER = 'banner';
/** @type VideoContext */

var ADPOD = 'adpod';

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(31);
var IE8_DOM_DEFINE = __webpack_require__(89);
var toPrimitive = __webpack_require__(90);
var dP = Object.defineProperty;

exports.f = __webpack_require__(25) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = detectReferer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRefererInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * The referer detection module attempts to gather referer information from the current page that prebid.js resides in.
 * The information that it tries to collect includes:
 * The detected top url in the nav bar,
 * Whether it was able to reach the top most window (if for example it was embedded in several iframes),
 * The number of iframes it was embedded in if applicable,
 * A list of the domains of each embedded window if applicable.
 * Canonical URL which refers to an HTML link element, with the attribute of rel="canonical", found in the <head> element of your webpage
 */

function detectReferer(win) {
  /**
   * Returns number of frames to reach top from current frame where prebid.js sits
   * @returns {Array} levels
   */
  function getLevels() {
    var levels = walkUpWindows();
    var ancestors = getAncestorOrigins();

    if (ancestors) {
      for (var i = 0, l = ancestors.length; i < l; i++) {
        levels[i].ancestor = ancestors[i];
      }
    }

    return levels;
  }
  /**
   * This function would return a read-only array of hostnames for all the parent frames.
   * win.location.ancestorOrigins is only supported in webkit browsers. For non-webkit browsers it will return undefined.
   * @returns {(undefined|Array)} Ancestor origins or undefined
   */


  function getAncestorOrigins() {
    try {
      if (!win.location.ancestorOrigins) {
        return;
      }

      return win.location.ancestorOrigins;
    } catch (e) {// Ignore error
    }
  }
  /**
   * This function would try to get referer and urls for all parent frames in case of win.location.ancestorOrigins undefined.
   * @param {Array} levels
   * @returns {Object} urls for all parent frames and top most detected referer url
   */


  function getPubUrlStack(levels) {
    var stack = [];
    var defUrl = null;
    var frameLocation = null;
    var prevFrame = null;
    var prevRef = null;
    var ancestor = null;
    var detectedRefererUrl = null;
    var i;

    for (i = levels.length - 1; i >= 0; i--) {
      try {
        frameLocation = levels[i].location;
      } catch (e) {// Ignore error
      }

      if (frameLocation) {
        stack.push(frameLocation);

        if (!detectedRefererUrl) {
          detectedRefererUrl = frameLocation;
        }
      } else if (i !== 0) {
        prevFrame = levels[i - 1];

        try {
          prevRef = prevFrame.referrer;
          ancestor = prevFrame.ancestor;
        } catch (e) {// Ignore error
        }

        if (prevRef) {
          stack.push(prevRef);

          if (!detectedRefererUrl) {
            detectedRefererUrl = prevRef;
          }
        } else if (ancestor) {
          stack.push(ancestor);

          if (!detectedRefererUrl) {
            detectedRefererUrl = ancestor;
          }
        } else {
          stack.push(defUrl);
        }
      } else {
        stack.push(defUrl);
      }
    }

    return {
      stack: stack,
      detectedRefererUrl: detectedRefererUrl
    };
  }
  /**
   * This function returns canonical URL which refers to an HTML link element, with the attribute of rel="canonical", found in the <head> element of your webpage
   * @param {Object} doc document
   */


  function getCanonicalUrl(doc) {
    try {
      var element = doc.querySelector("link[rel='canonical']");

      if (element !== null) {
        return element.href;
      }
    } catch (e) {}

    return null;
  }
  /**
   * Walk up to the top of the window to detect origin, number of iframes, ancestor origins and canonical url
   */


  function walkUpWindows() {
    var acc = [];
    var currentWindow;

    do {
      try {
        currentWindow = currentWindow ? currentWindow.parent : win;

        try {
          var isTop = currentWindow == win.top;
          var refData = {
            referrer: currentWindow.document.referrer || null,
            location: currentWindow.location.href || null,
            isTop: isTop
          };

          if (isTop) {
            refData = _extends(refData, {
              canonicalUrl: getCanonicalUrl(currentWindow.document)
            });
          }

          acc.push(refData);
        } catch (e) {
          acc.push({
            referrer: null,
            location: null,
            isTop: currentWindow == win.top
          });
          Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])('Trying to access cross domain iframe. Continuing without referrer and location');
        }
      } catch (e) {
        acc.push({
          referrer: null,
          location: null,
          isTop: false
        });
        return acc;
      }
    } while (currentWindow != win.top);

    return acc;
  }
  /**
   * Referer info
   * @typedef {Object} refererInfo
   * @property {string} referer detected top url
   * @property {boolean} reachedTop whether prebid was able to walk upto top window or not
   * @property {number} numIframes number of iframes
   * @property {string} stack comma separated urls of all origins
   * @property {string} canonicalUrl canonical URL refers to an HTML link element, with the attribute of rel="canonical", found in the <head> element of your webpage
   */

  /**
   * Get referer info
   * @returns {refererInfo}
   */


  function refererInfo() {
    try {
      var levels = getLevels();
      var numIframes = levels.length - 1;
      var reachedTop = levels[numIframes].location !== null || numIframes > 0 && levels[numIframes - 1].referrer !== null;
      var stackInfo = getPubUrlStack(levels);
      var canonicalUrl;

      if (levels[levels.length - 1].canonicalUrl) {
        canonicalUrl = levels[levels.length - 1].canonicalUrl;
      }

      return {
        referer: stackInfo.detectedRefererUrl,
        reachedTop: reachedTop,
        numIframes: numIframes,
        stack: stackInfo.stack,
        canonicalUrl: canonicalUrl
      };
    } catch (e) {// Ignore error
    }
  }

  return refererInfo;
}
var getRefererInfo = detectReferer(window);

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createBid;
var utils = __webpack_require__(0);
/**
 Required paramaters
 bidderCode,
 height,
 width,
 statusCode
 Optional paramaters
 adId,
 cpm,
 ad,
 adUrl,
 dealId,
 priceKeyString;
 */


function Bid(statusCode, bidRequest) {
  var _bidSrc = bidRequest && bidRequest.src || 'client';

  var _statusCode = statusCode || 0;

  this.bidderCode = bidRequest && bidRequest.bidder || '';
  this.width = 0;
  this.height = 0;
  this.statusMessage = _getStatus();
  this.adId = utils.getUniqueIdentifierStr();
  this.requestId = bidRequest && bidRequest.bidId;
  this.mediaType = 'banner';
  this.source = _bidSrc;

  function _getStatus() {
    switch (_statusCode) {
      case 0:
        return 'Pending';

      case 1:
        return 'Bid available';

      case 2:
        return 'Bid returned empty or error response';

      case 3:
        return 'Bid timed out';
    }
  }

  this.getStatusCode = function () {
    return _statusCode;
  }; // returns the size of the bid creative. Concatenation of width and height by ‘x’.


  this.getSize = function () {
    return this.width + 'x' + this.height;
  };
} // Bid factory function.


function createBid(statusCode, bidRequest) {
  return new Bid(statusCode, bidRequest);
}

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export newAuctionManager */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auctionManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auction_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find_js__);
/**
 * AuctionManager modules is responsible for creating auction instances.
 * This module is the gateway for Prebid core to access auctions.
 * It stores all created instances of auction and can be used to get consolidated values from auction.
 */

/**
 * @typedef {Object} AuctionManager
 *
 * @property {function(): Array} getBidsRequested - returns consolidated bid requests
 * @property {function(): Array} getBidsReceived - returns consolidated bid received
 * @property {function(): Array} getAdUnits - returns consolidated adUnits
 * @property {function(): Array} getAdUnitCodes - returns consolidated adUnitCodes
 * @property {function(): Object} createAuction - creates auction instance and stores it for future reference
 * @property {function(): Object} findBidByAdId - find bid received by adId. This function will be called by $$PREBID_GLOBAL$$.renderAd
 * @property {function(): Object} getStandardBidderAdServerTargeting - returns standard bidder targeting for all the adapters. Refer http://prebid.org/dev-docs/publisher-api-reference.html#module_pbjs.bidderSettings for more details
 */




var CONSTANTS = __webpack_require__(5);
/**
 * Creates new instance of auctionManager. There will only be one instance of auctionManager but
 * a factory is created to assist in testing.
 *
 * @returns {AuctionManager} auctionManagerInstance
 */


function newAuctionManager() {
  var _auctions = [];
  var auctionManager = {};

  auctionManager.addWinningBid = function (bid) {
    var auction = __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find_js___default()(_auctions, function (auction) {
      return auction.getAuctionId() === bid.auctionId;
    });

    if (auction) {
      bid.status = CONSTANTS.BID_STATUS.RENDERED;
      auction.addWinningBid(bid);
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("Auction not found when adding winning bid");
    }
  };

  auctionManager.getAllWinningBids = function () {
    return _auctions.map(function (auction) {
      return auction.getWinningBids();
    }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []);
  };

  auctionManager.getBidsRequested = function () {
    return _auctions.map(function (auction) {
      return auction.getBidRequests();
    }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []);
  };

  auctionManager.getNoBids = function () {
    return _auctions.map(function (auction) {
      return auction.getNoBids();
    }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []);
  };

  auctionManager.getBidsReceived = function () {
    return _auctions.map(function (auction) {
      if (auction.getAuctionStatus() === __WEBPACK_IMPORTED_MODULE_1__auction_js__["a" /* AUCTION_COMPLETED */]) {
        return auction.getBidsReceived();
      }
    }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []).filter(function (bid) {
      return bid;
    });
  };

  auctionManager.getAdUnits = function () {
    return _auctions.map(function (auction) {
      return auction.getAdUnits();
    }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []);
  };

  auctionManager.getAdUnitCodes = function () {
    return _auctions.map(function (auction) {
      return auction.getAdUnitCodes();
    }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []).filter(__WEBPACK_IMPORTED_MODULE_0__utils_js__["uniques"]);
  };

  auctionManager.createAuction = function (_ref) {
    var adUnits = _ref.adUnits,
        adUnitCodes = _ref.adUnitCodes,
        callback = _ref.callback,
        cbTimeout = _ref.cbTimeout,
        labels = _ref.labels,
        auctionId = _ref.auctionId;
    var auction = Object(__WEBPACK_IMPORTED_MODULE_1__auction_js__["k" /* newAuction */])({
      adUnits: adUnits,
      adUnitCodes: adUnitCodes,
      callback: callback,
      cbTimeout: cbTimeout,
      labels: labels,
      auctionId: auctionId
    });

    _addAuction(auction);

    return auction;
  };

  auctionManager.findBidByAdId = function (adId) {
    return __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find_js___default()(_auctions.map(function (auction) {
      return auction.getBidsReceived();
    }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []), function (bid) {
      return bid.adId === adId;
    });
  };

  auctionManager.getStandardBidderAdServerTargeting = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_1__auction_js__["j" /* getStandardBidderSettings */])()[CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING];
  };

  auctionManager.setStatusForBids = function (adId, status) {
    var bid = auctionManager.findBidByAdId(adId);
    if (bid) bid.status = status;

    if (bid && status === CONSTANTS.BID_STATUS.BID_TARGETING_SET) {
      var auction = __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find_js___default()(_auctions, function (auction) {
        return auction.getAuctionId() === bid.auctionId;
      });
      if (auction) auction.setBidTargeting(bid);
    }
  };

  auctionManager.getLastAuctionId = function () {
    return _auctions.length && _auctions[_auctions.length - 1].getAuctionId();
  };

  function _addAuction(auction) {
    _auctions.push(auction);
  }

  return auctionManager;
}
var auctionManager = newAuctionManager();

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(20);
var createDesc = __webpack_require__(44);
module.exports = __webpack_require__(25) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(37)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return nativeAdapters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NATIVE_TARGETING_KEYS; });
/* harmony export (immutable) */ __webpack_exports__["g"] = processNativeAdUnitParams;
/* unused harmony export nativeAdUnit */
/* unused harmony export nativeBidder */
/* unused harmony export hasNonNativeBidder */
/* harmony export (immutable) */ __webpack_exports__["f"] = nativeBidIsValid;
/* harmony export (immutable) */ __webpack_exports__["b"] = fireNativeTrackers;
/* harmony export (immutable) */ __webpack_exports__["d"] = getNativeTargeting;
/* harmony export (immutable) */ __webpack_exports__["c"] = getAssetMessage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_includes_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_includes_js__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




var CONSTANTS = __webpack_require__(5);

var nativeAdapters = [];
var NATIVE_TARGETING_KEYS = Object.keys(CONSTANTS.NATIVE_KEYS).map(function (key) {
  return CONSTANTS.NATIVE_KEYS[key];
});
var IMAGE = {
  image: {
    required: true
  },
  title: {
    required: true
  },
  sponsoredBy: {
    required: true
  },
  clickUrl: {
    required: true
  },
  body: {
    required: false
  },
  icon: {
    required: false
  }
};
var SUPPORTED_TYPES = {
  image: IMAGE
};
/**
 * Recieves nativeParams from an adUnit. If the params were not of type 'type',
 * passes them on directly. If they were of type 'type', translate
 * them into the predefined specific asset requests for that type of native ad.
 */

function processNativeAdUnitParams(params) {
  if (params && params.type && typeIsSupported(params.type)) {
    return SUPPORTED_TYPES[params.type];
  }

  return params;
}
/**
 * Check if the native type specified in the adUnit is supported by Prebid.
 */

function typeIsSupported(type) {
  if (!(type && __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_includes_js___default()(Object.keys(SUPPORTED_TYPES), type))) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])("".concat(type, " nativeParam is not supported"));
    return false;
  }

  return true;
}
/**
 * Helper functions for working with native-enabled adUnits
 * TODO: abstract this and the video helper functions into general
 * adunit validation helper functions
 */


var nativeAdUnit = function nativeAdUnit(adUnit) {
  var mediaType = adUnit.mediaType === 'native';
  var mediaTypes = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnit, 'mediaTypes.native');
  return mediaType || mediaTypes;
};
var nativeBidder = function nativeBidder(bid) {
  return __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_includes_js___default()(nativeAdapters, bid.bidder);
};
var hasNonNativeBidder = function hasNonNativeBidder(adUnit) {
  return adUnit.bids.filter(function (bid) {
    return !nativeBidder(bid);
  }).length;
};
/**
 * Validate that the native assets on this bid contain all assets that were
 * marked as required in the adUnit configuration.
 * @param {Bid} bid Native bid to validate
 * @param {BidRequest[]} bidRequests All bid requests for an auction
 * @return {Boolean} If object is valid
 */

function nativeBidIsValid(bid, bidRequests) {
  var bidRequest = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getBidRequest"])(bid.requestId, bidRequests);

  if (!bidRequest) {
    return false;
  } // all native bid responses must define a landing page url


  if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(bid, 'native.clickUrl')) {
    return false;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(bid, 'native.image')) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(bid, 'native.image.height') || !Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(bid, 'native.image.width')) {
      return false;
    }
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(bid, 'native.icon')) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(bid, 'native.icon.height') || !Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(bid, 'native.icon.width')) {
      return false;
    }
  }

  var requestedAssets = bidRequest.nativeParams;

  if (!requestedAssets) {
    return true;
  }

  var requiredAssets = Object.keys(requestedAssets).filter(function (key) {
    return requestedAssets[key].required;
  });
  var returnedAssets = Object.keys(bid['native']).filter(function (key) {
    return bid['native'][key];
  });
  return requiredAssets.every(function (asset) {
    return __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_includes_js___default()(returnedAssets, asset);
  });
}
/*
 * Native responses may have associated impression or click trackers.
 * This retrieves the appropriate tracker urls for the given ad object and
 * fires them. As a native creatives may be in a cross-origin frame, it may be
 * necessary to invoke this function via postMessage. secureCreatives is
 * configured to fire this function when it receives a `message` of 'Prebid Native'
 * and an `adId` with the value of the `bid.adId`. When a message is posted with
 * these parameters, impression trackers are fired. To fire click trackers, the
 * message should contain an `action` set to 'click'.
 *
 * // Native creative template example usage
 * <a href="%%CLICK_URL_UNESC%%%%PATTERN:hb_native_linkurl%%"
 *    target="_blank"
 *    onclick="fireTrackers('click')">
 *    %%PATTERN:hb_native_title%%
 * </a>
 *
 * <script>
 *   function fireTrackers(action) {
 *     var message = {message: 'Prebid Native', adId: '%%PATTERN:hb_adid%%'};
 *     if (action === 'click') {message.action = 'click';} // fires click trackers
 *     window.parent.postMessage(JSON.stringify(message), '*');
 *   }
 *   fireTrackers(); // fires impressions when creative is loaded
 * </script>
 */

function fireNativeTrackers(message, adObject) {
  var trackers;

  if (message.action === 'click') {
    trackers = adObject['native'] && adObject['native'].clickTrackers;
  } else {
    trackers = adObject['native'] && adObject['native'].impressionTrackers;

    if (adObject['native'] && adObject['native'].javascriptTrackers) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["insertHtmlIntoIframe"])(adObject['native'].javascriptTrackers);
    }
  }

  (trackers || []).forEach(__WEBPACK_IMPORTED_MODULE_0__utils_js__["triggerPixel"]);
  return message.action;
}
/**
 * Gets native targeting key-value pairs
 * @param {Object} bid
 * @return {Object} targeting
 */

function getNativeTargeting(bid, bidReq) {
  var keyValues = {};
  Object.keys(bid['native']).forEach(function (asset) {
    var key = CONSTANTS.NATIVE_KEYS[asset];
    var value = getAssetValue(bid['native'][asset]);
    var sendPlaceholder = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(bidReq, "mediaTypes.native.".concat(asset, ".sendId"));

    if (sendPlaceholder) {
      var placeholder = "".concat(key, ":").concat(bid.adId);
      value = placeholder;
    }

    if (key && value) {
      keyValues[key] = value;
    }
  });
  return keyValues;
}
/**
 * Constructs a message object containing asset values for each of the
 * requested data keys.
 */

function getAssetMessage(data, adObject) {
  var message = {
    message: 'assetResponse',
    adId: data.adId,
    assets: []
  };
  data.assets.forEach(function (asset) {
    var key = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getKeyByValue"])(CONSTANTS.NATIVE_KEYS, asset);
    var value = getAssetValue(adObject.native[key]);
    message.assets.push({
      key: key,
      value: value
    });
  });
  return message;
}
/**
 * Native assets can be a string or an object with a url prop. Returns the value
 * appropriate for sending in adserver targeting or placeholder replacement.
 */

function getAssetValue(value) {
  if (_typeof(value) === 'object' && value.url) {
    return value.url;
  }

  return value;
}

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(59);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 28:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export USERSYNC_DEFAULT_CONFIG */
/* unused harmony export newUserSync */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userSync; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storageManager_js__ = __webpack_require__(9);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var USERSYNC_DEFAULT_CONFIG = {
  syncEnabled: true,
  filterSettings: {
    image: {
      bidders: '*',
      filter: 'include'
    }
  },
  syncsPerBidder: 5,
  syncDelay: 3000,
  auctionDelay: 0
}; // Set userSync default values

__WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].setDefaults({
  'userSync': __WEBPACK_IMPORTED_MODULE_0__utils_js__["deepClone"](USERSYNC_DEFAULT_CONFIG)
});
var storage = Object(__WEBPACK_IMPORTED_MODULE_3__storageManager_js__["a" /* getCoreStorageManager */])('usersync');
/**
 * Factory function which creates a new UserSyncPool.
 *
 * @param {UserSyncDependencies} userSyncDependencies Configuration options and dependencies which the
 *   UserSync object needs in order to behave properly.
 */

function newUserSync(userSyncDependencies) {
  var publicApi = {}; // A queue of user syncs for each adapter
  // Let getDefaultQueue() set the defaults

  var queue = getDefaultQueue(); // Whether or not user syncs have been trigger on this page load for a specific bidder

  var hasFiredBidder = new Set(); // How many bids for each adapter

  var numAdapterBids = {}; // for now - default both to false in case filterSettings config is absent/misconfigured

  var permittedPixels = {
    image: true,
    iframe: false
  }; // Use what is in config by default

  var usConfig = userSyncDependencies.config; // Update if it's (re)set

  __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('userSync', function (conf) {
    // Added this logic for https://github.com/prebid/Prebid.js/issues/4864
    // if userSync.filterSettings does not contain image/all configs, merge in default image config to ensure image pixels are fired
    if (conf.userSync) {
      var fs = conf.userSync.filterSettings;

      if (__WEBPACK_IMPORTED_MODULE_0__utils_js__["isPlainObject"](fs)) {
        if (!fs.image && !fs.all) {
          conf.userSync.filterSettings.image = {
            bidders: '*',
            filter: 'include'
          };
        }
      }
    }

    usConfig = _extends(usConfig, conf.userSync);
  });
  /**
   * @function getDefaultQueue
   * @summary Returns the default empty queue
   * @private
   * @return {object} A queue with no syncs
   */

  function getDefaultQueue() {
    return {
      image: [],
      iframe: []
    };
  }
  /**
   * @function fireSyncs
   * @summary Trigger all user syncs in the queue
   * @private
   */


  function fireSyncs() {
    if (!usConfig.syncEnabled || !userSyncDependencies.browserSupportsCookies) {
      return;
    }

    try {
      // Image pixels
      fireImagePixels(); // Iframe syncs

      loadIframes();
    } catch (e) {
      return __WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"]('Error firing user syncs', e);
    } // Reset the user sync queue


    queue = getDefaultQueue();
  }

  function forEachFire(queue, fn) {
    // Randomize the order of the pixels before firing
    // This is to avoid giving any bidder who has registered multiple syncs
    // any preferential treatment and balancing them out
    __WEBPACK_IMPORTED_MODULE_0__utils_js__["shuffle"](queue).forEach(function (sync) {
      fn(sync);
      hasFiredBidder.add(sync[0]);
    });
  }
  /**
   * @function fireImagePixels
   * @summary Loops through user sync pixels and fires each one
   * @private
   */


  function fireImagePixels() {
    if (!permittedPixels.image) {
      return;
    }

    forEachFire(queue.image, function (sync) {
      var _sync = _slicedToArray(sync, 2),
          bidderName = _sync[0],
          trackingPixelUrl = _sync[1];

      __WEBPACK_IMPORTED_MODULE_0__utils_js__["logMessage"]("Invoking image pixel user sync for bidder: ".concat(bidderName)); // Create image object and add the src url

      __WEBPACK_IMPORTED_MODULE_0__utils_js__["triggerPixel"](trackingPixelUrl);
    });
  }
  /**
   * @function loadIframes
   * @summary Loops through iframe syncs and loads an iframe element into the page
   * @private
   */


  function loadIframes() {
    if (!permittedPixels.iframe) {
      return;
    }

    forEachFire(queue.iframe, function (sync) {
      var _sync2 = _slicedToArray(sync, 2),
          bidderName = _sync2[0],
          iframeUrl = _sync2[1];

      __WEBPACK_IMPORTED_MODULE_0__utils_js__["logMessage"]("Invoking iframe user sync for bidder: ".concat(bidderName)); // Insert iframe into DOM

      __WEBPACK_IMPORTED_MODULE_0__utils_js__["insertUserSyncIframe"](iframeUrl);
    });
  }
  /**
   * @function incrementAdapterBids
   * @summary Increment the count of user syncs queue for the adapter
   * @private
   * @params {object} numAdapterBids The object contain counts for all adapters
   * @params {string} bidder The name of the bidder adding a sync
   * @returns {object} The updated version of numAdapterBids
   */


  function incrementAdapterBids(numAdapterBids, bidder) {
    if (!numAdapterBids[bidder]) {
      numAdapterBids[bidder] = 1;
    } else {
      numAdapterBids[bidder] += 1;
    }

    return numAdapterBids;
  }
  /**
   * @function registerSync
   * @summary Add sync for this bidder to a queue to be fired later
   * @public
   * @params {string} type The type of the sync including image, iframe
   * @params {string} bidder The name of the adapter. e.g. "rubicon"
   * @params {string} url Either the pixel url or iframe url depending on the type
    * @example <caption>Using Image Sync</caption>
   * // registerSync(type, adapter, pixelUrl)
   * userSync.registerSync('image', 'rubicon', 'http://example.com/pixel')
   */


  publicApi.registerSync = function (type, bidder, url) {
    if (hasFiredBidder.has(bidder)) {
      return __WEBPACK_IMPORTED_MODULE_0__utils_js__["logMessage"]("already fired syncs for \"".concat(bidder, "\", ignoring registerSync call"));
    }

    if (!usConfig.syncEnabled || !__WEBPACK_IMPORTED_MODULE_0__utils_js__["isArray"](queue[type])) {
      return __WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"]("User sync type \"".concat(type, "\" not supported"));
    }

    if (!bidder) {
      return __WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"]("Bidder is required for registering sync");
    }

    if (usConfig.syncsPerBidder !== 0 && Number(numAdapterBids[bidder]) >= usConfig.syncsPerBidder) {
      return __WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"]("Number of user syncs exceeded for \"".concat(bidder, "\""));
    }

    var canBidderRegisterSync = publicApi.canBidderRegisterSync(type, bidder);

    if (!canBidderRegisterSync) {
      return __WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"]("Bidder \"".concat(bidder, "\" not permitted to register their \"").concat(type, "\" userSync pixels."));
    } // the bidder's pixel has passed all checks and is allowed to register


    queue[type].push([bidder, url]);
    numAdapterBids = incrementAdapterBids(numAdapterBids, bidder);
  };
  /**
   * @function shouldBidderBeBlocked
   * @summary Check filterSettings logic to determine if the bidder should be prevented from registering their userSync tracker
   * @private
   * @param {string} type The type of the sync; either image or iframe
   * @param {string} bidder The name of the adapter. e.g. "rubicon"
   * @returns {boolean} true => bidder is not allowed to register; false => bidder can register
    */


  function shouldBidderBeBlocked(type, bidder) {
    var filterConfig = usConfig.filterSettings; // apply the filter check if the config object is there (eg filterSettings.iframe exists) and if the config object is properly setup

    if (isFilterConfigValid(filterConfig, type)) {
      permittedPixels[type] = true;
      var activeConfig = filterConfig.all ? filterConfig.all : filterConfig[type];
      var biddersToFilter = activeConfig.bidders === '*' ? [bidder] : activeConfig.bidders;
      var filterType = activeConfig.filter || 'include'; // set default if undefined
      // return true if the bidder is either: not part of the include (ie outside the whitelist) or part of the exclude (ie inside the blacklist)

      var checkForFiltering = {
        'include': function include(bidders, bidder) {
          return !__WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes_js___default()(bidders, bidder);
        },
        'exclude': function exclude(bidders, bidder) {
          return __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes_js___default()(bidders, bidder);
        }
      };
      return checkForFiltering[filterType](biddersToFilter, bidder);
    }

    return false;
  }
  /**
   * @function isFilterConfigValid
   * @summary Check if the filterSettings object in the userSync config is setup properly
   * @private
   * @param {object} filterConfig sub-config object taken from filterSettings
   * @param {string} type The type of the sync; either image or iframe
   * @returns {boolean} true => config is setup correctly, false => setup incorrectly or filterConfig[type] is not present
   */


  function isFilterConfigValid(filterConfig, type) {
    if (filterConfig.all && filterConfig[type]) {
      __WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"]("Detected presence of the \"filterSettings.all\" and \"filterSettings.".concat(type, "\" in userSync config.  You cannot mix \"all\" with \"iframe/image\" configs; they are mutually exclusive."));
      return false;
    }

    var activeConfig = filterConfig.all ? filterConfig.all : filterConfig[type];
    var activeConfigName = filterConfig.all ? 'all' : type; // if current pixel type isn't part of the config's logic, skip rest of the config checks...
    // we return false to skip subsequent filter checks in shouldBidderBeBlocked() function

    if (!activeConfig) {
      return false;
    }

    var filterField = activeConfig.filter;
    var biddersField = activeConfig.bidders;

    if (filterField && filterField !== 'include' && filterField !== 'exclude') {
      __WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"]("UserSync \"filterSettings.".concat(activeConfigName, ".filter\" setting '").concat(filterField, "' is not a valid option; use either 'include' or 'exclude'."));
      return false;
    }

    if (biddersField !== '*' && !(Array.isArray(biddersField) && biddersField.length > 0 && biddersField.every(function (bidderInList) {
      return __WEBPACK_IMPORTED_MODULE_0__utils_js__["isStr"](bidderInList) && bidderInList !== '*';
    }))) {
      __WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"]("Detected an invalid setup in userSync \"filterSettings.".concat(activeConfigName, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders."));
      return false;
    }

    return true;
  }
  /**
   * @function syncUsers
   * @summary Trigger all the user syncs based on publisher-defined timeout
   * @public
   * @params {int} timeout The delay in ms before syncing data - default 0
   */


  publicApi.syncUsers = function () {
    var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (timeout) {
      return setTimeout(fireSyncs, Number(timeout));
    }

    fireSyncs();
  };
  /**
   * @function triggerUserSyncs
   * @summary A `syncUsers` wrapper for determining if enableOverride has been turned on
   * @public
   */


  publicApi.triggerUserSyncs = function () {
    if (usConfig.enableOverride) {
      publicApi.syncUsers();
    }
  };

  publicApi.canBidderRegisterSync = function (type, bidder) {
    if (usConfig.filterSettings) {
      if (shouldBidderBeBlocked(type, bidder)) {
        return false;
      }
    }

    return true;
  };

  return publicApi;
}
var browserSupportsCookies = !__WEBPACK_IMPORTED_MODULE_0__utils_js__["isSafariBrowser"]() && storage.cookiesAreEnabled();
var userSync = newUserSync({
  config: __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('userSync'),
  browserSupportsCookies: browserSupportsCookies
});
/**
 * @typedef {Object} UserSyncDependencies
 *
 * @property {UserSyncConfig} config
 * @property {boolean} browserSupportsCookies True if the current browser supports cookies, and false otherwise.
 */

/**
 * @typedef {Object} UserSyncConfig
 *
 * @property {boolean} enableOverride
 * @property {boolean} syncEnabled
 * @property {int} syncsPerBidder
 * @property {string[]} enabledBidders
 * @property {Object} filterSettings
 */

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(300);
module.exports = __webpack_require__(17).String.includes;


/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RANDOM; });
/* unused harmony export newConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cpmBucketManager_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_find_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_find_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_set_js__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_set_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_set_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_js__ = __webpack_require__(0);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Module for getting and setting Prebid configuration.
 */

/**
 * @typedef {Object} MediaTypePriceGranularity
 *
 * @property {(string|Object)} [banner]
 * @property {(string|Object)} [native]
 * @property {(string|Object)} [video]
 * @property {(string|Object)} [video-instream]
 * @property {(string|Object)} [video-outstream]
 */






var from = __webpack_require__(78);

var utils = __webpack_require__(0);

var CONSTANTS = __webpack_require__(5);

var DEFAULT_DEBUG = utils.getParameterByName(CONSTANTS.DEBUG_MODE).toUpperCase() === 'TRUE';
var DEFAULT_BIDDER_TIMEOUT = 3000;
var DEFAULT_PUBLISHER_DOMAIN = window.location.origin;
var DEFAULT_ENABLE_SEND_ALL_BIDS = true;
var DEFAULT_DISABLE_AJAX_TIMEOUT = false;
var DEFAULT_BID_CACHE = false;
var DEFAULT_DEVICE_ACCESS = true;
var DEFAULT_TIMEOUTBUFFER = 400;
var RANDOM = 'random';
var FIXED = 'fixed';
var VALID_ORDERS = {};
VALID_ORDERS[RANDOM] = true;
VALID_ORDERS[FIXED] = true;
var DEFAULT_BIDDER_SEQUENCE = RANDOM;
var GRANULARITY_OPTIONS = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  AUTO: 'auto',
  DENSE: 'dense',
  CUSTOM: 'custom'
};
var ALL_TOPICS = '*';
/**
 * @typedef {object} PrebidConfig
 *
 * @property {string} cache.url Set a url if we should use prebid-cache to store video bids before adding
 *   bids to the auction. **NOTE** This must be set if you want to use the dfpAdServerVideo module.
 */

function newConfig() {
  var listeners = [];
  var defaults;
  var config;
  var bidderConfig;
  var currBidder = null;

  function resetConfig() {
    defaults = {};
    var newConfig = {
      // `debug` is equivalent to legacy `pbjs.logging` property
      _debug: DEFAULT_DEBUG,

      get debug() {
        return this._debug;
      },

      set debug(val) {
        this._debug = val;
      },

      // default timeout for all bids
      _bidderTimeout: DEFAULT_BIDDER_TIMEOUT,

      get bidderTimeout() {
        return this._bidderTimeout;
      },

      set bidderTimeout(val) {
        this._bidderTimeout = val;
      },

      // domain where prebid is running for cross domain iframe communication
      _publisherDomain: DEFAULT_PUBLISHER_DOMAIN,

      get publisherDomain() {
        return this._publisherDomain;
      },

      set publisherDomain(val) {
        this._publisherDomain = val;
      },

      // calls existing function which may be moved after deprecation
      _priceGranularity: GRANULARITY_OPTIONS.MEDIUM,

      set priceGranularity(val) {
        if (validatePriceGranularity(val)) {
          if (typeof val === 'string') {
            this._priceGranularity = hasGranularity(val) ? val : GRANULARITY_OPTIONS.MEDIUM;
          } else if (utils.isPlainObject(val)) {
            this._customPriceBucket = val;
            this._priceGranularity = GRANULARITY_OPTIONS.CUSTOM;
            utils.logMessage('Using custom price granularity');
          }
        }
      },

      get priceGranularity() {
        return this._priceGranularity;
      },

      _customPriceBucket: {},

      get customPriceBucket() {
        return this._customPriceBucket;
      },

      /**
       * mediaTypePriceGranularity
       * @type {MediaTypePriceGranularity}
       */
      _mediaTypePriceGranularity: {},

      get mediaTypePriceGranularity() {
        return this._mediaTypePriceGranularity;
      },

      set mediaTypePriceGranularity(val) {
        var _this = this;

        this._mediaTypePriceGranularity = Object.keys(val).reduce(function (aggregate, item) {
          if (validatePriceGranularity(val[item])) {
            if (typeof val === 'string') {
              aggregate[item] = hasGranularity(val[item]) ? val[item] : _this._priceGranularity;
            } else if (utils.isPlainObject(val)) {
              aggregate[item] = val[item];
              utils.logMessage("Using custom price granularity for ".concat(item));
            }
          } else {
            utils.logWarn("Invalid price granularity for media type: ".concat(item));
          }

          return aggregate;
        }, {});
      },

      _sendAllBids: DEFAULT_ENABLE_SEND_ALL_BIDS,

      get enableSendAllBids() {
        return this._sendAllBids;
      },

      set enableSendAllBids(val) {
        this._sendAllBids = val;
      },

      _useBidCache: DEFAULT_BID_CACHE,

      get useBidCache() {
        return this._useBidCache;
      },

      set useBidCache(val) {
        this._useBidCache = val;
      },

      /**
       * deviceAccess set to false will disable setCookie, getCookie, hasLocalStorage
       * @type {boolean}
       */
      _deviceAccess: DEFAULT_DEVICE_ACCESS,

      get deviceAccess() {
        return this._deviceAccess;
      },

      set deviceAccess(val) {
        this._deviceAccess = val;
      },

      _bidderSequence: DEFAULT_BIDDER_SEQUENCE,

      get bidderSequence() {
        return this._bidderSequence;
      },

      set bidderSequence(val) {
        if (VALID_ORDERS[val]) {
          this._bidderSequence = val;
        } else {
          utils.logWarn("Invalid order: ".concat(val, ". Bidder Sequence was not set."));
        }
      },

      // timeout buffer to adjust for bidder CDN latency
      _timeoutBuffer: DEFAULT_TIMEOUTBUFFER,

      get timeoutBuffer() {
        return this._timeoutBuffer;
      },

      set timeoutBuffer(val) {
        this._timeoutBuffer = val;
      },

      _disableAjaxTimeout: DEFAULT_DISABLE_AJAX_TIMEOUT,

      get disableAjaxTimeout() {
        return this._disableAjaxTimeout;
      },

      set disableAjaxTimeout(val) {
        this._disableAjaxTimeout = val;
      }

    };

    if (config) {
      callSubscribers(Object.keys(config).reduce(function (memo, topic) {
        if (config[topic] !== newConfig[topic]) {
          memo[topic] = newConfig[topic] || {};
        }

        return memo;
      }, {}));
    }

    config = newConfig;
    bidderConfig = {};

    function hasGranularity(val) {
      return __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_array_find_js___default()(Object.keys(GRANULARITY_OPTIONS), function (option) {
        return val === GRANULARITY_OPTIONS[option];
      });
    }

    function validatePriceGranularity(val) {
      if (!val) {
        utils.logError('Prebid Error: no value passed to `setPriceGranularity()`');
        return false;
      }

      if (typeof val === 'string') {
        if (!hasGranularity(val)) {
          utils.logWarn('Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.');
        }
      } else if (utils.isPlainObject(val)) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__cpmBucketManager_js__["b" /* isValidPriceConfig */])(val)) {
          utils.logError('Invalid custom price value passed to `setPriceGranularity()`');
          return false;
        }
      }

      return true;
    }
  }
  /**
   * Returns base config with bidder overrides (if there is currently a bidder)
   * @private
   */


  function _getConfig() {
    if (currBidder && bidderConfig && utils.isPlainObject(bidderConfig[currBidder])) {
      var currBidderConfig = bidderConfig[currBidder];
      var configTopicSet = new __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_set_js___default.a(Object.keys(config).concat(Object.keys(currBidderConfig)));
      return from(configTopicSet).reduce(function (memo, topic) {
        if (typeof currBidderConfig[topic] === 'undefined') {
          memo[topic] = config[topic];
        } else if (typeof config[topic] === 'undefined') {
          memo[topic] = currBidderConfig[topic];
        } else {
          if (utils.isPlainObject(currBidderConfig[topic])) {
            memo[topic] = Object(__WEBPACK_IMPORTED_MODULE_4__utils_js__["mergeDeep"])({}, config[topic], currBidderConfig[topic]);
          } else {
            memo[topic] = currBidderConfig[topic];
          }
        }

        return memo;
      }, {});
    }

    return _extends({}, config);
  }
  /*
   * Returns configuration object if called without parameters,
   * or single configuration property if given a string matching a configuration
   * property name.  Allows deep access e.g. getConfig('currency.adServerCurrency')
   *
   * If called with callback parameter, or a string and a callback parameter,
   * subscribes to configuration updates. See `subscribe` function for usage.
   */


  function getConfig() {
    if (arguments.length <= 1 && typeof (arguments.length <= 0 ? undefined : arguments[0]) !== 'function') {
      var option = arguments.length <= 0 ? undefined : arguments[0];
      return option ? utils.deepAccess(_getConfig(), option) : _getConfig();
    }

    return subscribe.apply(void 0, arguments);
  }
  /**
   * Internal API for modules (such as prebid-server) that might need access to all bidder config
   */


  function getBidderConfig() {
    return bidderConfig;
  }
  /*
   * Sets configuration given an object containing key-value pairs and calls
   * listeners that were added by the `subscribe` function
   */


  function setConfig(options) {
    if (!utils.isPlainObject(options)) {
      utils.logError('setConfig options must be an object');
      return;
    }

    var topics = Object.keys(options);
    var topicalConfig = {};
    topics.forEach(function (topic) {
      var option = options[topic];

      if (utils.isPlainObject(defaults[topic]) && utils.isPlainObject(option)) {
        option = _extends({}, defaults[topic], option);
      }

      topicalConfig[topic] = config[topic] = option;
    });
    callSubscribers(topicalConfig);
  }
  /**
   * Sets configuration defaults which setConfig values can be applied on top of
   * @param {object} options
   */


  function setDefaults(options) {
    if (!utils.isPlainObject(defaults)) {
      utils.logError('defaults must be an object');
      return;
    }

    _extends(defaults, options); // Add default values to config as well


    _extends(config, options);
  }
  /*
   * Adds a function to a set of listeners that are invoked whenever `setConfig`
   * is called. The subscribed function will be passed the options object that
   * was used in the `setConfig` call. Topics can be subscribed to to only get
   * updates when specific properties are updated by passing a topic string as
   * the first parameter.
   *
   * Returns an `unsubscribe` function for removing the subscriber from the
   * set of listeners
   *
   * Example use:
   * // subscribe to all configuration changes
   * subscribe((config) => console.log('config set:', config));
   *
   * // subscribe to only 'logging' changes
   * subscribe('logging', (config) => console.log('logging set:', config));
   *
   * // unsubscribe
   * const unsubscribe = subscribe(...);
   * unsubscribe(); // no longer listening
   */


  function subscribe(topic, listener) {
    var callback = listener;

    if (typeof topic !== 'string') {
      // first param should be callback function in this case,
      // meaning it gets called for any config change
      callback = topic;
      topic = ALL_TOPICS;
    }

    if (typeof callback !== 'function') {
      utils.logError('listener must be a function');
      return;
    }

    var nl = {
      topic: topic,
      callback: callback
    };
    listeners.push(nl); // save and call this function to remove the listener

    return function unsubscribe() {
      listeners.splice(listeners.indexOf(nl), 1);
    };
  }
  /*
   * Calls listeners that were added by the `subscribe` function
   */


  function callSubscribers(options) {
    var TOPICS = Object.keys(options); // call subscribers of a specific topic, passing only that configuration

    listeners.filter(function (listener) {
      return __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes_js___default()(TOPICS, listener.topic);
    }).forEach(function (listener) {
      listener.callback(_defineProperty({}, listener.topic, options[listener.topic]));
    }); // call subscribers that didn't give a topic, passing everything that was set

    listeners.filter(function (listener) {
      return listener.topic === ALL_TOPICS;
    }).forEach(function (listener) {
      return listener.callback(options);
    });
  }

  function setBidderConfig(config) {
    try {
      check(config);
      config.bidders.forEach(function (bidder) {
        if (!bidderConfig[bidder]) {
          bidderConfig[bidder] = {};
        }

        Object.keys(config.config).forEach(function (topic) {
          var option = config.config[topic];

          if (utils.isPlainObject(option)) {
            bidderConfig[bidder][topic] = _extends({}, bidderConfig[bidder][topic] || {}, option);
          } else {
            bidderConfig[bidder][topic] = option;
          }
        });
      });
    } catch (e) {
      utils.logError(e);
    }

    function check(obj) {
      if (!utils.isPlainObject(obj)) {
        throw 'setBidderConfig bidder options must be an object';
      }

      if (!(Array.isArray(obj.bidders) && obj.bidders.length)) {
        throw 'setBidderConfig bidder options must contain a bidders list with at least 1 bidder';
      }

      if (!utils.isPlainObject(obj.config)) {
        throw 'setBidderConfig bidder options must contain a config object';
      }
    }
  }
  /**
   * Internal functions for core to execute some synchronous code while having an active bidder set.
   */


  function runWithBidder(bidder, fn) {
    currBidder = bidder;

    try {
      return fn();
    } finally {
      currBidder = null;
    }
  }

  function callbackWithBidder(bidder) {
    return function (cb) {
      return function () {
        if (typeof cb === 'function') {
          var _utils$bind;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return runWithBidder(bidder, (_utils$bind = utils.bind).call.apply(_utils$bind, [cb, this].concat(args)));
        } else {
          utils.logWarn('config.callbackWithBidder callback is not a function');
        }
      };
    };
  }

  function getCurrentBidder() {
    return currBidder;
  }

  resetConfig();
  return {
    getCurrentBidder: getCurrentBidder,
    getConfig: getConfig,
    setConfig: setConfig,
    setDefaults: setDefaults,
    resetConfig: resetConfig,
    runWithBidder: runWithBidder,
    callbackWithBidder: callbackWithBidder,
    setBidderConfig: setBidderConfig,
    getBidderConfig: getBidderConfig
  };
}
var config = newConfig();

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadExternalScript;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_array_includes_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);


var _requestCache = {}; // The below list contains modules or vendors whom Prebid allows to load external JS.

var _approvedLoadExternalJSList = ['criteo', 'outstream', 'adagio', 'browsi'];
/**
 * Loads external javascript. Can only be used if external JS is approved by Prebid. See https://github.com/prebid/prebid-js-external-js-template#policy
 * Each unique URL will be loaded at most 1 time.
 * @param {string} url the url to load
 * @param {string} moduleCode bidderCode or module code of the module requesting this resource
 * @param {function} [callback] callback function to be called after the script is loaded.
 */

function loadExternalScript(url, moduleCode, callback) {
  if (!moduleCode || !url) {
    __WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"]('cannot load external script without url and moduleCode');
    return;
  }

  if (!__WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_array_includes_js___default()(_approvedLoadExternalJSList, moduleCode)) {
    __WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"]("".concat(moduleCode, " not whitelisted for loading external JavaScript"));
    return;
  } // only load each asset once


  if (_requestCache[url]) {
    if (callback && typeof callback === 'function') {
      if (_requestCache[url].loaded) {
        // invokeCallbacks immediately
        callback();
      } else {
        // queue the callback
        _requestCache[url].callbacks.push(callback);
      }
    }

    return _requestCache[url].tag;
  }

  _requestCache[url] = {
    loaded: false,
    tag: null,
    callbacks: []
  };

  if (callback && typeof callback === 'function') {
    _requestCache[url].callbacks.push(callback);
  }

  __WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"]("module ".concat(moduleCode, " is loading external JavaScript"));
  return requestResource(url, function () {
    _requestCache[url].loaded = true;

    try {
      for (var i = 0; i < _requestCache[url].callbacks.length; i++) {
        _requestCache[url].callbacks[i]();
      }
    } catch (e) {
      __WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"]('Error executing callback', 'adloader.js:loadExternalScript', e);
    }
  });

  function requestResource(tagSrc, callback) {
    var jptScript = document.createElement('script');
    jptScript.type = 'text/javascript';
    jptScript.async = true;
    _requestCache[url].tag = jptScript;

    if (jptScript.readyState) {
      jptScript.onreadystatechange = function () {
        if (jptScript.readyState === 'loaded' || jptScript.readyState === 'complete') {
          jptScript.onreadystatechange = null;
          callback();
        }
      };
    } else {
      jptScript.onload = function () {
        callback();
      };
    }

    jptScript.src = tagSrc; // add the new script tag to the page

    __WEBPACK_IMPORTED_MODULE_1__utils_js__["insertElement"](jptScript);
    return jptScript;
  }
}
;

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(16);
var context = __webpack_require__(301);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(303)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(302);
var defined = __webpack_require__(39);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(18);
var cof = __webpack_require__(38);
var MATCH = __webpack_require__(14)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(14)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 32:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OUTSTREAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INSTREAM; });
/* unused harmony export videoAdUnit */
/* unused harmony export videoBidder */
/* unused harmony export hasNonVideoBidder */
/* harmony export (immutable) */ __webpack_exports__["d"] = isValidVideoBid;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return checkVideoBidSetup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adapterManager_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hook_js__ = __webpack_require__(13);





var VIDEO_MEDIA_TYPE = 'video';
var OUTSTREAM = 'outstream';
var INSTREAM = 'instream';
/**
 * Helper functions for working with video-enabled adUnits
 */

var videoAdUnit = function videoAdUnit(adUnit) {
  var mediaType = adUnit.mediaType === VIDEO_MEDIA_TYPE;
  var mediaTypes = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepAccess"])(adUnit, 'mediaTypes.video');
  return mediaType || mediaTypes;
};
var videoBidder = function videoBidder(bid) {
  return __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes_js___default()(__WEBPACK_IMPORTED_MODULE_0__adapterManager_js__["default"].videoAdapters, bid.bidder);
};
var hasNonVideoBidder = function hasNonVideoBidder(adUnit) {
  return adUnit.bids.filter(function (bid) {
    return !videoBidder(bid);
  }).length;
};
/**
 * @typedef {object} VideoBid
 * @property {string} adId id of the bid
 */

/**
 * Validate that the assets required for video context are present on the bid
 * @param {VideoBid} bid Video bid to validate
 * @param {BidRequest[]} bidRequests All bid requests for an auction
 * @return {Boolean} If object is valid
 */

function isValidVideoBid(bid, bidRequests) {
  var bidRequest = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["getBidRequest"])(bid.requestId, bidRequests);
  var videoMediaType = bidRequest && Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepAccess"])(bidRequest, 'mediaTypes.video');
  var context = videoMediaType && Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepAccess"])(videoMediaType, 'context'); // if context not defined assume default 'instream' for video bids
  // instream bids require a vast url or vast xml content

  return checkVideoBidSetup(bid, bidRequest, videoMediaType, context);
}
var checkVideoBidSetup = Object(__WEBPACK_IMPORTED_MODULE_4__hook_js__["b" /* hook */])('sync', function (bid, bidRequest, videoMediaType, context) {
  if (!bidRequest || videoMediaType && context !== OUTSTREAM) {
    // xml-only video bids require a prebid cache url
    if (!__WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('cache.url') && bid.vastXml && !bid.vastUrl) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"])("\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with owpbjs.setConfig({ cache: {url: \"...\"} });\n      ");
      return false;
    }

    return !!(bid.vastUrl || bid.vastXml);
  } // outstream bids require a renderer on the bid or pub-defined on adunit


  if (context === OUTSTREAM) {
    return !!(bid.renderer || bidRequest.renderer);
  }

  return true;
}, 'checkVideoBidSetup');

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AUCTION_STARTED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AUCTION_IN_PROGRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUCTION_COMPLETED; });
/* harmony export (immutable) */ __webpack_exports__["k"] = newAuction;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addBidResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return addBidderRequests; });
/* unused harmony export bidsBackCallback */
/* unused harmony export auctionCallbacks */
/* harmony export (immutable) */ __webpack_exports__["g"] = doCallbacksIfTimedout;
/* harmony export (immutable) */ __webpack_exports__["d"] = addBidToAuction;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return callPrebidCache; });
/* unused harmony export getMediaTypeGranularity */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getPriceGranularity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getPriceByGranularity; });
/* harmony export (immutable) */ __webpack_exports__["j"] = getStandardBidderSettings;
/* unused harmony export getKeyValueTargetingPairs */
/* unused harmony export adjustBids */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cpmBucketManager_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__videoCache_js__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Renderer_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__userSync_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hook_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_library_fn_array_find_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_library_fn_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_library_fn_array_find_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__video_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mediaTypes_js__ = __webpack_require__(2);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Module for auction instances.
 *
 * In Prebid 0.x, $$PREBID_GLOBAL$$ had _bidsRequested and _bidsReceived as public properties.
 * Starting 1.0, Prebid will support concurrent auctions. Each auction instance will store private properties, bidsRequested and bidsReceived.
 *
 * AuctionManager will create instance of auction and will store all the auctions.
 *
 */

/**
  * @typedef {Object} AdUnit An object containing the adUnit configuration.
  *
  * @property {string} code A code which will be used to uniquely identify this bidder. This should be the same
  *   one as is used in the call to registerBidAdapter
  * @property {Array.<size>} sizes A list of size for adUnit.
  * @property {object} params Any bidder-specific params which the publisher used in their bid request.
  *   This is guaranteed to have passed the spec.areParamsValid() test.
  */

/**
 * @typedef {Array.<number>} size
 */

/**
 * @typedef {Array.<string>} AdUnitCode
 */

/**
 * @typedef {Object} BidderRequest
 *
 * @property {string} bidderCode - adUnit bidder
 * @property {number} auctionId - random UUID
 * @property {string} bidderRequestId - random string, unique key set on all bidRequest.bids[]
 * @property {Array.<Bid>} bids
 * @property {number} auctionStart - Date.now() at auction start
 * @property {number} timeout - callback timeout
 * @property {refererInfo} refererInfo - referer info object
 * @property {string} [tid] - random UUID (used for s2s)
 * @property {string} [src] - s2s or client (used for s2s)
 */

/**
 * @typedef {Object} BidReceived
 * //TODO add all properties
 */

/**
 * @typedef {Object} Auction
 *
 * @property {function(): string} getAuctionStatus - returns the auction status which can be any one of 'started', 'in progress' or 'completed'
 * @property {function(): AdUnit[]} getAdUnits - return the adUnits for this auction instance
 * @property {function(): AdUnitCode[]} getAdUnitCodes - return the adUnitCodes for this auction instance
 * @property {function(): BidRequest[]} getBidRequests - get all bid requests for this auction instance
 * @property {function(): BidReceived[]} getBidsReceived - get all bid received for this auction instance
 * @property {function(): void} startAuctionTimer - sets the bidsBackHandler callback and starts the timer for auction
 * @property {function(): void} callBids - sends requests to all adapters for bids
 */











var syncUsers = __WEBPACK_IMPORTED_MODULE_6__userSync_js__["a" /* userSync */].syncUsers;

var utils = __webpack_require__(0);

var adapterManager = __webpack_require__(7).default;

var events = __webpack_require__(8);

var CONSTANTS = __webpack_require__(5);

var AUCTION_STARTED = 'started';
var AUCTION_IN_PROGRESS = 'inProgress';
var AUCTION_COMPLETED = 'completed'; // register event for bid adjustment

events.on(CONSTANTS.EVENTS.BID_ADJUSTMENT, function (bid) {
  adjustBids(bid);
});
var MAX_REQUESTS_PER_ORIGIN = 4;
var outstandingRequests = {};
var sourceInfo = {};
var queuedCalls = [];
/**
  * Creates new auction instance
  *
  * @param {Object} requestConfig
  * @param {AdUnit} requestConfig.adUnits
  * @param {AdUnitCode} requestConfig.adUnitCodes
  * @param {function():void} requestConfig.callback
  * @param {number} requestConfig.cbTimeout
  * @param {Array.<string>} requestConfig.labels
  * @param {string} requestConfig.auctionId
  *
  * @returns {Auction} auction instance
  */

function newAuction(_ref) {
  var adUnits = _ref.adUnits,
      adUnitCodes = _ref.adUnitCodes,
      callback = _ref.callback,
      cbTimeout = _ref.cbTimeout,
      labels = _ref.labels,
      auctionId = _ref.auctionId;
  var _adUnits = adUnits;
  var _labels = labels;
  var _adUnitCodes = adUnitCodes;
  var _bidderRequests = [];
  var _bidsReceived = [];
  var _noBids = [];

  var _auctionStart;

  var _auctionEnd;

  var _auctionId = auctionId || utils.generateUUID();

  var _auctionStatus;

  var _callback = callback;

  var _timer;

  var _timeout = cbTimeout;
  var _winningBids = [];

  var _timelyBidders = new Set();

  function addBidRequests(bidderRequests) {
    _bidderRequests = _bidderRequests.concat(bidderRequests);
  }

  function addBidReceived(bidsReceived) {
    _bidsReceived = _bidsReceived.concat(bidsReceived);
  }

  function addNoBid(noBid) {
    _noBids = _noBids.concat(noBid);
  }

  function getProperties() {
    return {
      auctionId: _auctionId,
      timestamp: _auctionStart,
      auctionEnd: _auctionEnd,
      auctionStatus: _auctionStatus,
      adUnits: _adUnits,
      adUnitCodes: _adUnitCodes,
      labels: _labels,
      bidderRequests: _bidderRequests,
      noBids: _noBids,
      bidsReceived: _bidsReceived,
      winningBids: _winningBids,
      timeout: _timeout
    };
  }

  function startAuctionTimer() {
    var timedOut = true;
    var timeoutCallback = executeCallback.bind(null, timedOut);
    var timer = setTimeout(timeoutCallback, _timeout);
    _timer = timer;
  }

  function executeCallback(timedOut, cleartimer) {
    // clear timer when done calls executeCallback
    if (cleartimer) {
      clearTimeout(_timer);
    }

    if (_auctionEnd === undefined) {
      var timedOutBidders = [];

      if (timedOut) {
        utils.logMessage("Auction ".concat(_auctionId, " timedOut"));
        timedOutBidders = getTimedOutBids(_bidderRequests, _timelyBidders);

        if (timedOutBidders.length) {
          events.emit(CONSTANTS.EVENTS.BID_TIMEOUT, timedOutBidders);
        }
      }

      _auctionStatus = AUCTION_COMPLETED;
      _auctionEnd = Date.now();
      events.emit(CONSTANTS.EVENTS.AUCTION_END, getProperties());
      bidsBackCallback(_adUnits, function () {
        try {
          if (_callback != null) {
            var _adUnitCodes2 = _adUnitCodes;

            var bids = _bidsReceived.filter(utils.bind.call(__WEBPACK_IMPORTED_MODULE_0__utils_js__["adUnitsFilter"], this, _adUnitCodes2)).reduce(groupByPlacement, {});

            _callback.apply(owpbjs, [bids, timedOut, _auctionId]);

            _callback = null;
          }
        } catch (e) {
          utils.logError('Error executing bidsBackHandler', null, e);
        } finally {
          // Calling timed out bidders
          if (timedOutBidders.length) {
            adapterManager.callTimedOutBidders(adUnits, timedOutBidders, _timeout);
          } // Only automatically sync if the publisher has not chosen to "enableOverride"


          var userSyncConfig = __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('userSync') || {};

          if (!userSyncConfig.enableOverride) {
            // Delay the auto sync by the config delay
            syncUsers(userSyncConfig.syncDelay);
          }
        }
      });
    }
  }

  function auctionDone() {
    // when all bidders have called done callback atleast once it means auction is complete
    utils.logInfo("Bids Received for Auction with id: ".concat(_auctionId), _bidsReceived);
    _auctionStatus = AUCTION_COMPLETED;
    executeCallback(false, true);
  }

  function onTimelyResponse(bidderCode) {
    _timelyBidders.add(bidderCode);
  }

  function callBids() {
    _auctionStatus = AUCTION_STARTED;
    _auctionStart = Date.now();
    var bidRequests = adapterManager.makeBidRequests(_adUnits, _auctionStart, _auctionId, _timeout, _labels);
    utils.logInfo("Bids Requested for Auction with id: ".concat(_auctionId), bidRequests);

    if (bidRequests.length < 1) {
      utils.logWarn('No valid bid requests returned for auction');
      auctionDone();
    } else {
      addBidderRequests.call({
        dispatch: addBidderRequestsCallback,
        context: this
      }, bidRequests);
    }
  }
  /**
   * callback executed after addBidderRequests completes
   * @param {BidRequest[]} bidRequests
   */


  function addBidderRequestsCallback(bidRequests) {
    var _this = this;

    bidRequests.forEach(function (bidRequest) {
      addBidRequests(bidRequest);
    });
    var requests = {};
    var call = {
      bidRequests: bidRequests,
      run: function run() {
        startAuctionTimer();
        _auctionStatus = AUCTION_IN_PROGRESS;
        events.emit(CONSTANTS.EVENTS.AUCTION_INIT, getProperties());
        var callbacks = auctionCallbacks(auctionDone, _this);
        adapterManager.callBids(_adUnits, bidRequests, function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          addBidResponse.apply({
            dispatch: callbacks.addBidResponse,
            bidderRequest: this
          }, args);
        }, callbacks.adapterDone, {
          request: function request(source, origin) {
            increment(outstandingRequests, origin);
            increment(requests, source);

            if (!sourceInfo[source]) {
              sourceInfo[source] = {
                SRA: true,
                origin: origin
              };
            }

            if (requests[source] > 1) {
              sourceInfo[source].SRA = false;
            }
          },
          done: function done(origin) {
            outstandingRequests[origin]--;

            if (queuedCalls[0]) {
              if (runIfOriginHasCapacity(queuedCalls[0])) {
                queuedCalls.shift();
              }
            }
          }
        }, _timeout, onTimelyResponse);
      }
    };

    if (!runIfOriginHasCapacity(call)) {
      utils.logWarn('queueing auction due to limited endpoint capacity');
      queuedCalls.push(call);
    }

    function runIfOriginHasCapacity(call) {
      var hasCapacity = true;
      var maxRequests = __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('maxRequestsPerOrigin') || MAX_REQUESTS_PER_ORIGIN;
      call.bidRequests.some(function (bidRequest) {
        var requests = 1;
        var source = typeof bidRequest.src !== 'undefined' && bidRequest.src === CONSTANTS.S2S.SRC ? 's2s' : bidRequest.bidderCode; // if we have no previous info on this source just let them through

        if (sourceInfo[source]) {
          if (sourceInfo[source].SRA === false) {
            // some bidders might use more than the MAX_REQUESTS_PER_ORIGIN in a single auction.  In those cases
            // set their request count to MAX_REQUESTS_PER_ORIGIN so the auction isn't permanently queued waiting
            // for capacity for that bidder
            requests = Math.min(bidRequest.bids.length, maxRequests);
          }

          if (outstandingRequests[sourceInfo[source].origin] + requests > maxRequests) {
            hasCapacity = false;
          }
        } // return only used for terminating this .some() iteration early if it is determined we don't have capacity


        return !hasCapacity;
      });

      if (hasCapacity) {
        call.run();
      }

      return hasCapacity;
    }

    function increment(obj, prop) {
      if (typeof obj[prop] === 'undefined') {
        obj[prop] = 1;
      } else {
        obj[prop]++;
      }
    }
  }

  function addWinningBid(winningBid) {
    _winningBids = _winningBids.concat(winningBid);
    adapterManager.callBidWonBidder(winningBid.bidder, winningBid, adUnits);
  }

  function setBidTargeting(bid) {
    adapterManager.callSetTargetingBidder(bid.bidder, bid);
  }

  return {
    addBidReceived: addBidReceived,
    addNoBid: addNoBid,
    executeCallback: executeCallback,
    callBids: callBids,
    addWinningBid: addWinningBid,
    setBidTargeting: setBidTargeting,
    getWinningBids: function getWinningBids() {
      return _winningBids;
    },
    getTimeout: function getTimeout() {
      return _timeout;
    },
    getAuctionId: function getAuctionId() {
      return _auctionId;
    },
    getAuctionStatus: function getAuctionStatus() {
      return _auctionStatus;
    },
    getAdUnits: function getAdUnits() {
      return _adUnits;
    },
    getAdUnitCodes: function getAdUnitCodes() {
      return _adUnitCodes;
    },
    getBidRequests: function getBidRequests() {
      return _bidderRequests;
    },
    getBidsReceived: function getBidsReceived() {
      return _bidsReceived;
    },
    getNoBids: function getNoBids() {
      return _noBids;
    }
  };
}
var addBidResponse = Object(__WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */])('async', function (adUnitCode, bid) {
  this.dispatch.call(this.bidderRequest, adUnitCode, bid);
}, 'addBidResponse');
var addBidderRequests = Object(__WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */])('sync', function (bidderRequests) {
  this.dispatch.call(this.context, bidderRequests);
}, 'addBidderRequests');
var bidsBackCallback = Object(__WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */])('async', function (adUnits, callback) {
  if (callback) {
    callback();
  }
}, 'bidsBackCallback');
function auctionCallbacks(auctionDone, auctionInstance) {
  var outstandingBidsAdded = 0;
  var allAdapterCalledDone = false;
  var bidderRequestsDone = new Set();
  var bidResponseMap = {};

  function afterBidAdded() {
    outstandingBidsAdded--;

    if (allAdapterCalledDone && outstandingBidsAdded === 0) {
      auctionDone();
    }
  }

  function addBidResponse(adUnitCode, bid) {
    var bidderRequest = this;
    bidResponseMap[bid.requestId] = true;
    outstandingBidsAdded++;
    var auctionId = auctionInstance.getAuctionId();
    var bidResponse = getPreparedBidForAuction({
      adUnitCode: adUnitCode,
      bid: bid,
      bidderRequest: bidderRequest,
      auctionId: auctionId
    });

    if (bidResponse.mediaType === 'video') {
      tryAddVideoBid(auctionInstance, bidResponse, bidderRequest, afterBidAdded);
    } else {
      addBidToAuction(auctionInstance, bidResponse);
      afterBidAdded();
    }
  }

  function adapterDone() {
    var bidderRequest = this;
    bidderRequestsDone.add(bidderRequest);
    allAdapterCalledDone = auctionInstance.getBidRequests().every(function (bidderRequest) {
      return bidderRequestsDone.has(bidderRequest);
    });
    bidderRequest.bids.forEach(function (bid) {
      if (!bidResponseMap[bid.bidId]) {
        auctionInstance.addNoBid(bid);
        events.emit(CONSTANTS.EVENTS.NO_BID, bid);
      }
    });

    if (allAdapterCalledDone && outstandingBidsAdded === 0) {
      auctionDone();
    }
  }

  return {
    addBidResponse: addBidResponse,
    adapterDone: adapterDone
  };
}
function doCallbacksIfTimedout(auctionInstance, bidResponse) {
  if (bidResponse.timeToRespond > auctionInstance.getTimeout() + __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('timeoutBuffer')) {
    auctionInstance.executeCallback(true);
  }
} // Add a bid to the auction.

function addBidToAuction(auctionInstance, bidResponse) {
  var bidderRequests = auctionInstance.getBidRequests();
  var bidderRequest = __WEBPACK_IMPORTED_MODULE_8_core_js_library_fn_array_find_js___default()(bidderRequests, function (bidderRequest) {
    return bidderRequest.bidderCode === bidResponse.bidderCode;
  });
  setupBidTargeting(bidResponse, bidderRequest);
  events.emit(CONSTANTS.EVENTS.BID_RESPONSE, bidResponse);
  auctionInstance.addBidReceived(bidResponse);
  doCallbacksIfTimedout(auctionInstance, bidResponse);
} // Video bids may fail if the cache is down, or there's trouble on the network.

function tryAddVideoBid(auctionInstance, bidResponse, bidRequests, afterBidAdded) {
  var addBid = true;
  var bidderRequest = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getBidRequest"])(bidResponse.requestId, [bidRequests]);
  var videoMediaType = bidderRequest && Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(bidderRequest, 'mediaTypes.video');
  var context = videoMediaType && Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(videoMediaType, 'context');

  if (__WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('cache.url') && context !== __WEBPACK_IMPORTED_MODULE_9__video_js__["b" /* OUTSTREAM */]) {
    if (!bidResponse.videoCacheKey) {
      addBid = false;
      callPrebidCache(auctionInstance, bidResponse, afterBidAdded, bidderRequest);
    } else if (!bidResponse.vastUrl) {
      utils.logError('videoCacheKey specified but not required vastUrl for video bid');
      addBid = false;
    }
  }

  if (addBid) {
    addBidToAuction(auctionInstance, bidResponse);
    afterBidAdded();
  }
}

var callPrebidCache = Object(__WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */])('async', function (auctionInstance, bidResponse, afterBidAdded, bidderRequest) {
  Object(__WEBPACK_IMPORTED_MODULE_3__videoCache_js__["b" /* store */])([bidResponse], function (error, cacheIds) {
    if (error) {
      utils.logWarn("Failed to save to the video cache: ".concat(error, ". Video bid must be discarded."));
      doCallbacksIfTimedout(auctionInstance, bidResponse);
    } else {
      if (cacheIds[0].uuid === '') {
        utils.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded.");
        doCallbacksIfTimedout(auctionInstance, bidResponse);
      } else {
        bidResponse.videoCacheKey = cacheIds[0].uuid;

        if (!bidResponse.vastUrl) {
          bidResponse.vastUrl = Object(__WEBPACK_IMPORTED_MODULE_3__videoCache_js__["a" /* getCacheUrl */])(bidResponse.videoCacheKey);
        }

        addBidToAuction(auctionInstance, bidResponse);
        afterBidAdded();
      }
    }
  });
}, 'callPrebidCache'); // Postprocess the bids so that all the universal properties exist, no matter which bidder they came from.
// This should be called before addBidToAuction().

function getPreparedBidForAuction(_ref2) {
  var adUnitCode = _ref2.adUnitCode,
      bid = _ref2.bid,
      bidderRequest = _ref2.bidderRequest,
      auctionId = _ref2.auctionId;
  var start = bidderRequest.start;

  var bidObject = _extends({}, bid, {
    auctionId: auctionId,
    responseTimestamp: Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["timestamp"])(),
    requestTimestamp: start,
    cpm: parseFloat(bid.cpm) || 0,
    bidder: bid.bidderCode,
    adUnitCode: adUnitCode
  });

  bidObject.timeToRespond = bidObject.responseTimestamp - bidObject.requestTimestamp; // Let listeners know that now is the time to adjust the bid, if they want to.
  //
  // CAREFUL: Publishers rely on certain bid properties to be available (like cpm),
  // but others to not be set yet (like priceStrings). See #1372 and #1389.

  events.emit(CONSTANTS.EVENTS.BID_ADJUSTMENT, bidObject); // a publisher-defined renderer can be used to render bids

  var bidReq = bidderRequest.bids && __WEBPACK_IMPORTED_MODULE_8_core_js_library_fn_array_find_js___default()(bidderRequest.bids, function (bid) {
    return bid.adUnitCode == adUnitCode;
  });
  var adUnitRenderer = bidReq && bidReq.renderer;

  if (adUnitRenderer && adUnitRenderer.url) {
    bidObject.renderer = __WEBPACK_IMPORTED_MODULE_4__Renderer_js__["a" /* Renderer */].install({
      url: adUnitRenderer.url
    });
    bidObject.renderer.setRender(adUnitRenderer.render);
  } // Use the config value 'mediaTypeGranularity' if it has been defined for mediaType, else use 'customPriceBucket'


  var mediaTypeGranularity = getMediaTypeGranularity(bid.mediaType, bidReq, __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('mediaTypePriceGranularity'));
  var priceStringsObj = Object(__WEBPACK_IMPORTED_MODULE_1__cpmBucketManager_js__["a" /* getPriceBucketString */])(bidObject.cpm, _typeof(mediaTypeGranularity) === 'object' ? mediaTypeGranularity : __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('customPriceBucket'), __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('currency.granularityMultiplier'));
  bidObject.pbLg = priceStringsObj.low;
  bidObject.pbMg = priceStringsObj.med;
  bidObject.pbHg = priceStringsObj.high;
  bidObject.pbAg = priceStringsObj.auto;
  bidObject.pbDg = priceStringsObj.dense;
  bidObject.pbCg = priceStringsObj.custom;
  return bidObject;
}

function setupBidTargeting(bidObject, bidderRequest) {
  var keyValues;

  if (bidObject.bidderCode && (bidObject.cpm > 0 || bidObject.dealId)) {
    var bidReq = __WEBPACK_IMPORTED_MODULE_8_core_js_library_fn_array_find_js___default()(bidderRequest.bids, function (bid) {
      return bid.adUnitCode === bidObject.adUnitCode;
    });
    keyValues = getKeyValueTargetingPairs(bidObject.bidderCode, bidObject, bidReq);
  } // use any targeting provided as defaults, otherwise just set from getKeyValueTargetingPairs


  bidObject.adserverTargeting = _extends(bidObject.adserverTargeting || {}, keyValues);
}
/**
 * @param {MediaType} mediaType
 * @param {Bid} [bidReq]
 * @param {MediaTypePriceGranularity} [mediaTypePriceGranularity]
 * @returns {(Object|string|undefined)}
 */


function getMediaTypeGranularity(mediaType, bidReq, mediaTypePriceGranularity) {
  if (mediaType && mediaTypePriceGranularity) {
    if (mediaType === __WEBPACK_IMPORTED_MODULE_10__mediaTypes_js__["d" /* VIDEO */]) {
      var context = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(bidReq, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_10__mediaTypes_js__["d" /* VIDEO */], ".context"), 'instream');

      if (mediaTypePriceGranularity["".concat(__WEBPACK_IMPORTED_MODULE_10__mediaTypes_js__["d" /* VIDEO */], "-").concat(context)]) {
        return mediaTypePriceGranularity["".concat(__WEBPACK_IMPORTED_MODULE_10__mediaTypes_js__["d" /* VIDEO */], "-").concat(context)];
      }
    }

    return mediaTypePriceGranularity[mediaType];
  }
}
/**
 * This function returns the price granularity defined. It can be either publisher defined or default value
 * @param {string} mediaType
 * @param {BidRequest} bidReq
 * @returns {string} granularity
 */

var getPriceGranularity = function getPriceGranularity(mediaType, bidReq) {
  // Use the config value 'mediaTypeGranularity' if it has been set for mediaType, else use 'priceGranularity'
  var mediaTypeGranularity = getMediaTypeGranularity(mediaType, bidReq, __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('mediaTypePriceGranularity'));
  var granularity = typeof mediaType === 'string' && mediaTypeGranularity ? typeof mediaTypeGranularity === 'string' ? mediaTypeGranularity : 'custom' : __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('priceGranularity');
  return granularity;
};
/**
 * This function returns a function to get bid price by price granularity
 * @param {string} granularity
 * @returns {function}
 */

var getPriceByGranularity = function getPriceByGranularity(granularity) {
  return function (bid) {
    if (granularity === CONSTANTS.GRANULARITY_OPTIONS.AUTO) {
      return bid.pbAg;
    } else if (granularity === CONSTANTS.GRANULARITY_OPTIONS.DENSE) {
      return bid.pbDg;
    } else if (granularity === CONSTANTS.GRANULARITY_OPTIONS.LOW) {
      return bid.pbLg;
    } else if (granularity === CONSTANTS.GRANULARITY_OPTIONS.MEDIUM) {
      return bid.pbMg;
    } else if (granularity === CONSTANTS.GRANULARITY_OPTIONS.HIGH) {
      return bid.pbHg;
    } else if (granularity === CONSTANTS.GRANULARITY_OPTIONS.CUSTOM) {
      return bid.pbCg;
    }
  };
};
/**
 * @param {string} mediaType
 * @param {string} bidderCode
 * @param {BidRequest} bidReq
 * @returns {*}
 */

function getStandardBidderSettings(mediaType, bidderCode, bidReq) {
  // factory for key value objs
  function createKeyVal(key, value) {
    return {
      key: key,
      val: typeof value === 'function' ? function (bidResponse) {
        return value(bidResponse);
      } : function (bidResponse) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getValue"])(bidResponse, value);
      }
    };
  }

  var TARGETING_KEYS = CONSTANTS.TARGETING_KEYS;
  var granularity = getPriceGranularity(mediaType, bidReq);
  var bidderSettings = owpbjs.bidderSettings;

  if (!bidderSettings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD]) {
    bidderSettings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD] = {};
  }

  if (!bidderSettings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD][CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING]) {
    bidderSettings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD][CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING] = [createKeyVal(TARGETING_KEYS.BIDDER, 'bidderCode'), createKeyVal(TARGETING_KEYS.AD_ID, 'adId'), createKeyVal(TARGETING_KEYS.PRICE_BUCKET, getPriceByGranularity(granularity)), createKeyVal(TARGETING_KEYS.SIZE, 'size'), createKeyVal(TARGETING_KEYS.DEAL, 'dealId'), createKeyVal(TARGETING_KEYS.SOURCE, 'source'), createKeyVal(TARGETING_KEYS.FORMAT, 'mediaType')];
  }

  if (mediaType === 'video') {
    var adserverTargeting = bidderSettings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD][CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING]; // Adding hb_uuid + hb_cache_id

    [TARGETING_KEYS.UUID, TARGETING_KEYS.CACHE_ID].forEach(function (targetingKeyVal) {
      if (typeof __WEBPACK_IMPORTED_MODULE_8_core_js_library_fn_array_find_js___default()(adserverTargeting, function (kvPair) {
        return kvPair.key === targetingKeyVal;
      }) === 'undefined') {
        adserverTargeting.push(createKeyVal(targetingKeyVal, 'videoCacheKey'));
      }
    }); // Adding hb_cache_host

    if (__WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('cache.url') && (!bidderCode || utils.deepAccess(bidderSettings, "".concat(bidderCode, ".sendStandardTargeting")) !== false)) {
      var urlInfo = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["parseUrl"])(__WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('cache.url'));

      if (typeof __WEBPACK_IMPORTED_MODULE_8_core_js_library_fn_array_find_js___default()(adserverTargeting, function (targetingKeyVal) {
        return targetingKeyVal.key === TARGETING_KEYS.CACHE_HOST;
      }) === 'undefined') {
        adserverTargeting.push(createKeyVal(TARGETING_KEYS.CACHE_HOST, function (bidResponse) {
          return utils.deepAccess(bidResponse, "adserverTargeting.".concat(TARGETING_KEYS.CACHE_HOST)) ? bidResponse.adserverTargeting[TARGETING_KEYS.CACHE_HOST] : urlInfo.hostname;
        }));
      }
    }
  }

  return bidderSettings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD];
}
function getKeyValueTargetingPairs(bidderCode, custBidObj, bidReq) {
  if (!custBidObj) {
    return {};
  }

  var keyValues = {};
  var bidderSettings = owpbjs.bidderSettings; // 1) set the keys from "standard" setting or from prebid defaults

  if (bidderSettings) {
    // initialize default if not set
    var standardSettings = getStandardBidderSettings(custBidObj.mediaType, bidderCode, bidReq);
    setKeys(keyValues, standardSettings, custBidObj); // 2) set keys from specific bidder setting override if they exist

    if (bidderCode && bidderSettings[bidderCode] && bidderSettings[bidderCode][CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING]) {
      setKeys(keyValues, bidderSettings[bidderCode], custBidObj);
      custBidObj.sendStandardTargeting = bidderSettings[bidderCode].sendStandardTargeting;
    }
  } // set native key value targeting


  if (custBidObj['native']) {
    keyValues = _extends({}, keyValues, Object(__WEBPACK_IMPORTED_MODULE_2__native_js__["d" /* getNativeTargeting */])(custBidObj, bidReq));
  }

  return keyValues;
}

function setKeys(keyValues, bidderSettings, custBidObj) {
  var targeting = bidderSettings[CONSTANTS.JSON_MAPPING.ADSERVER_TARGETING];
  custBidObj.size = custBidObj.getSize();

  utils._each(targeting, function (kvPair) {
    var key = kvPair.key;
    var value = kvPair.val;

    if (keyValues[key]) {
      utils.logWarn('The key: ' + key + ' is getting ovewritten');
    }

    if (utils.isFn(value)) {
      try {
        value = value(custBidObj);
      } catch (e) {
        utils.logError('bidmanager', 'ERROR', e);
      }
    }

    if ((typeof bidderSettings.suppressEmptyKeys !== 'undefined' && bidderSettings.suppressEmptyKeys === true || key === CONSTANTS.TARGETING_KEYS.DEAL) && ( // hb_deal is suppressed automatically if not set
    utils.isEmptyStr(value) || value === null || value === undefined)) {
      utils.logInfo("suppressing empty key '" + key + "' from adserver targeting");
    } else {
      keyValues[key] = value;
    }
  });

  return keyValues;
}

function adjustBids(bid) {
  var code = bid.bidderCode;
  var bidPriceAdjusted = bid.cpm;
  var bidCpmAdjustment;

  if (owpbjs.bidderSettings) {
    if (code && owpbjs.bidderSettings[code] && typeof owpbjs.bidderSettings[code].bidCpmAdjustment === 'function') {
      bidCpmAdjustment = owpbjs.bidderSettings[code].bidCpmAdjustment;
    } else if (owpbjs.bidderSettings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD] && typeof owpbjs.bidderSettings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment === 'function') {
      bidCpmAdjustment = owpbjs.bidderSettings[CONSTANTS.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment;
    }

    if (bidCpmAdjustment) {
      try {
        bidPriceAdjusted = bidCpmAdjustment(bid.cpm, _extends({}, bid));
      } catch (e) {
        utils.logError('Error during bid adjustment', 'bidmanager.js', e);
      }
    }
  }

  if (bidPriceAdjusted >= 0) {
    bid.cpm = bidPriceAdjusted;
  }
}
/**
 * groupByPlacement is a reduce function that converts an array of Bid objects
 * to an object with placement codes as keys, with each key representing an object
 * with an array of `Bid` objects for that placement
 * @returns {*} as { [adUnitCode]: { bids: [Bid, Bid, Bid] } }
 */

function groupByPlacement(bidsByPlacement, bid) {
  if (!bidsByPlacement[bid.adUnitCode]) {
    bidsByPlacement[bid.adUnitCode] = {
      bids: []
    };
  }

  bidsByPlacement[bid.adUnitCode].bids.push(bid);
  return bidsByPlacement;
}
/**
 * Returns a list of bids that we haven't received a response yet where the bidder did not call done
 * @param {BidRequest[]} bidderRequests List of bids requested for auction instance
 * @param {Set} timelyBidders Set of bidders which responded in time
 *
 * @typedef {Object} TimedOutBid
 * @property {string} bidId The id representing the bid
 * @property {string} bidder The string name of the bidder
 * @property {string} adUnitCode The code used to uniquely identify the ad unit on the publisher's page
 * @property {string} auctionId The id representing the auction
 *
 * @return {Array<TimedOutBid>} List of bids that Prebid hasn't received a response for
 */


function getTimedOutBids(bidderRequests, timelyBidders) {
  var timedOutBids = bidderRequests.map(function (bid) {
    return (bid.bids || []).filter(function (bid) {
      return !timelyBidders.has(bid.bidder);
    });
  }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []).map(function (bid) {
    return {
      bidId: bid.bidId,
      bidder: bid.bidder,
      adUnitCode: bid.adUnitCode,
      auctionId: bid.auctionId
    };
  });
  return timedOutBids;
}

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TARGETING_KEYS */
/* unused harmony export filters */
/* unused harmony export getHighestCpmBidsFromBidPool */
/* unused harmony export sortByDealAndPriceBucketOrCpm */
/* unused harmony export newTargeting */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return targeting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auctionManager_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sizeMapping_js__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mediaTypes_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes_js__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }









var utils = __webpack_require__(0);

var CONSTANTS = __webpack_require__(5);

var pbTargetingKeys = [];
var MAX_DFP_KEYLENGTH = 20;
var TTL_BUFFER = 1000;
var TARGETING_KEYS = Object.keys(CONSTANTS.TARGETING_KEYS).map(function (key) {
  return CONSTANTS.TARGETING_KEYS[key];
}); // return unexpired bids

var isBidNotExpired = function isBidNotExpired(bid) {
  return bid.responseTimestamp + bid.ttl * 1000 + TTL_BUFFER > Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["timestamp"])();
}; // return bids whose status is not set. Winning bids can only have a status of `rendered`.


var isUnusedBid = function isUnusedBid(bid) {
  return bid && (bid.status && !__WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes_js___default()([CONSTANTS.BID_STATUS.RENDERED], bid.status) || !bid.status);
};

var filters = {
  isBidNotExpired: isBidNotExpired,
  isUnusedBid: isUnusedBid
}; // If two bids are found for same adUnitCode, we will use the highest one to take part in auction
// This can happen in case of concurrent auctions
// If adUnitBidLimit is set above 0 return top N number of bids

function getHighestCpmBidsFromBidPool(bidsReceived, highestCpmCallback) {
  var adUnitBidLimit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var bids = [];
  var dealPrioritization = __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('sendBidsControl.dealPrioritization'); // bucket by adUnitcode

  var buckets = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["groupBy"])(bidsReceived, 'adUnitCode'); // filter top bid for each bucket by bidder

  Object.keys(buckets).forEach(function (bucketKey) {
    var bucketBids = [];
    var bidsByBidder = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["groupBy"])(buckets[bucketKey], 'bidderCode');
    Object.keys(bidsByBidder).forEach(function (key) {
      return bucketBids.push(bidsByBidder[key].reduce(highestCpmCallback));
    }); // if adUnitBidLimit is set, pass top N number bids

    if (adUnitBidLimit > 0) {
      bucketBids = dealPrioritization ? bucketBids(sortByDealAndPriceBucketOrCpm(true)) : bucketBids.sort(function (a, b) {
        return b.cpm - a.cpm;
      });
      bids.push.apply(bids, _toConsumableArray(bucketBids.slice(0, adUnitBidLimit)));
    } else {
      bids.push.apply(bids, _toConsumableArray(bucketBids));
    }
  });
  return bids;
}
/**
* A descending sort function that will sort the list of objects based on the following two dimensions:
*  - bids with a deal are sorted before bids w/o a deal
*  - then sort bids in each grouping based on the hb_pb value
* eg: the following list of bids would be sorted like:
*  [{
*    "hb_adid": "vwx",
*    "hb_pb": "28",
*    "hb_deal": "7747"
*  }, {
*    "hb_adid": "jkl",
*    "hb_pb": "10",
*    "hb_deal": "9234"
*  }, {
*    "hb_adid": "stu",
*    "hb_pb": "50"
*  }, {
*    "hb_adid": "def",
*    "hb_pb": "2"
*  }]
*/

function sortByDealAndPriceBucketOrCpm() {
  var useCpm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function (a, b) {
    if (a.adUnitTargeting.hb_deal !== undefined && b.adUnitTargeting.hb_deal === undefined) {
      return -1;
    }

    if (a.adUnitTargeting.hb_deal === undefined && b.adUnitTargeting.hb_deal !== undefined) {
      return 1;
    } // assuming both values either have a deal or don't have a deal - sort by the hb_pb param


    if (useCpm) {
      return b.cpm - a.cpm;
    }

    return b.adUnitTargeting.hb_pb - a.adUnitTargeting.hb_pb;
  };
}
/**
 * @typedef {Object.<string,string>} targeting
 * @property {string} targeting_key
 */

/**
 * @typedef {Object.<string,Object.<string,string[]>[]>[]} targetingArray
 */

function newTargeting(auctionManager) {
  var targeting = {};
  var latestAuctionForAdUnit = {};

  targeting.setLatestAuctionForAdUnit = function (adUnitCode, auctionId) {
    latestAuctionForAdUnit[adUnitCode] = auctionId;
  };

  targeting.resetPresetTargeting = function (adUnitCode, customSlotMatching) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isGptPubadsDefined"])()) {
      var adUnitCodes = getAdUnitCodes(adUnitCode);
      var adUnits = auctionManager.getAdUnits().filter(function (adUnit) {
        return __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes_js___default()(adUnitCodes, adUnit.code);
      });
      window.googletag.pubads().getSlots().forEach(function (slot) {
        var customSlotMatchingFunc = utils.isFn(customSlotMatching) && customSlotMatching(slot);
        pbTargetingKeys.forEach(function (key) {
          // reset only registered adunits
          adUnits.forEach(function (unit) {
            if (unit.code === slot.getAdUnitPath() || unit.code === slot.getSlotElementId() || utils.isFn(customSlotMatchingFunc) && customSlotMatchingFunc(unit.code)) {
              slot.setTargeting(key, null);
            }
          });
        });
      });
    }
  };

  targeting.resetPresetTargetingAST = function (adUnitCode) {
    var adUnitCodes = getAdUnitCodes(adUnitCode);
    adUnitCodes.forEach(function (unit) {
      var astTag = window.apntag.getTag(unit);

      if (astTag && astTag.keywords) {
        var currentKeywords = Object.keys(astTag.keywords);
        var newKeywords = {};
        currentKeywords.forEach(function (key) {
          if (!__WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes_js___default()(pbTargetingKeys, key.toLowerCase())) {
            newKeywords[key] = astTag.keywords[key];
          }
        });
        window.apntag.modifyTag(unit, {
          keywords: newKeywords
        });
      }
    });
  };
  /**
   * checks if bid has targeting set and belongs based on matching ad unit codes
   * @return {boolean} true or false
   */


  function bidShouldBeAddedToTargeting(bid, adUnitCodes) {
    return bid.adserverTargeting && adUnitCodes && (utils.isArray(adUnitCodes) && __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes_js___default()(adUnitCodes, bid.adUnitCode) || typeof adUnitCodes === 'string' && bid.adUnitCode === adUnitCodes);
  }

  ;
  /**
   * Returns targeting for any bids which have deals if alwaysIncludeDeals === true
   */

  function getDealBids(adUnitCodes, bidsReceived) {
    if (__WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('targetingControls.alwaysIncludeDeals') === true) {
      var standardKeys = TARGETING_KEYS.concat(__WEBPACK_IMPORTED_MODULE_2__native_js__["a" /* NATIVE_TARGETING_KEYS */]); // we only want the top bid from bidders who have multiple entries per ad unit code

      var bids = getHighestCpmBidsFromBidPool(bidsReceived, __WEBPACK_IMPORTED_MODULE_0__utils_js__["getHighestCpm"]); // populate targeting keys for the remaining bids if they have a dealId

      return bids.map(function (bid) {
        if (bid.dealId && bidShouldBeAddedToTargeting(bid, adUnitCodes)) {
          return _defineProperty({}, bid.adUnitCode, getTargetingMap(bid, standardKeys.filter(function (key) {
            return typeof bid.adserverTargeting[key] !== 'undefined';
          })));
        }
      }).filter(function (bid) {
        return bid;
      }); // removes empty elements in array
    }

    return [];
  }

  ;
  /**
   * Returns all ad server targeting for all ad units.
   * @param {string=} adUnitCode
   * @return {Object.<string,targeting>} targeting
   */

  targeting.getAllTargeting = function (adUnitCode) {
    var bidsReceived = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getBidsReceived();
    var adUnitCodes = getAdUnitCodes(adUnitCode); // Get targeting for the winning bid. Add targeting for any bids that have
    // `alwaysUseBid=true`. If sending all bids is enabled, add targeting for losing bids.

    var targeting = getWinningBidTargeting(adUnitCodes, bidsReceived).concat(getCustomBidTargeting(adUnitCodes, bidsReceived)).concat(__WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('enableSendAllBids') ? getBidLandscapeTargeting(adUnitCodes, bidsReceived) : getDealBids(adUnitCodes, bidsReceived)); // store a reference of the targeting keys

    targeting.map(function (adUnitCode) {
      Object.keys(adUnitCode).map(function (key) {
        adUnitCode[key].map(function (targetKey) {
          if (pbTargetingKeys.indexOf(Object.keys(targetKey)[0]) === -1) {
            pbTargetingKeys = Object.keys(targetKey).concat(pbTargetingKeys);
          }
        });
      });
    });
    targeting = flattenTargeting(targeting);
    var auctionKeysThreshold = __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('targetingControls.auctionKeyMaxChars');

    if (auctionKeysThreshold) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logInfo"])("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(auctionKeysThreshold, " characters.  Running checks on auction keys..."));
      targeting = filterTargetingKeys(targeting, auctionKeysThreshold);
    } // make sure at least there is a entry per adUnit code in the targetingSet so receivers of SET_TARGETING call's can know what ad units are being invoked


    adUnitCodes.forEach(function (code) {
      if (!targeting[code]) {
        targeting[code] = {};
      }
    });
    return targeting;
  }; // create an encoded string variant based on the keypairs of the provided object
  //  - note this will encode the characters between the keys (ie = and &)


  function convertKeysToQueryForm(keyMap) {
    return Object.keys(keyMap).reduce(function (queryString, key) {
      var encodedKeyPair = "".concat(key, "%3d").concat(encodeURIComponent(keyMap[key]), "%26");
      return queryString += encodedKeyPair;
    }, '');
  }

  function filterTargetingKeys(targeting, auctionKeysThreshold) {
    // read each targeting.adUnit object and sort the adUnits into a list of adUnitCodes based on priorization setting (eg CPM)
    var targetingCopy = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepClone"])(targeting);
    var targetingMap = Object.keys(targetingCopy).map(function (adUnitCode) {
      return {
        adUnitCode: adUnitCode,
        adUnitTargeting: targetingCopy[adUnitCode]
      };
    }).sort(sortByDealAndPriceBucketOrCpm()); // iterate through the targeting based on above list and transform the keys into the query-equivalent and count characters

    return targetingMap.reduce(function (accMap, currMap, index, arr) {
      var adUnitQueryString = convertKeysToQueryForm(currMap.adUnitTargeting); // for the last adUnit - trim last encoded ampersand from the converted query string

      if (index + 1 === arr.length) {
        adUnitQueryString = adUnitQueryString.slice(0, -3);
      } // if under running threshold add to result


      var code = currMap.adUnitCode;
      var querySize = adUnitQueryString.length;

      if (querySize <= auctionKeysThreshold) {
        auctionKeysThreshold -= querySize;
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logInfo"])("AdUnit '".concat(code, "' auction keys comprised of ").concat(querySize, " characters.  Deducted from running threshold; new limit is ").concat(auctionKeysThreshold), targetingCopy[code]);
        accMap[code] = targetingCopy[code];
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logWarn"])("The following keys for adUnitCode '".concat(code, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(querySize, ", the current allotted amount was ").concat(auctionKeysThreshold, ".\n"), targetingCopy[code]);
      }

      if (index + 1 === arr.length && Object.keys(accMap).length === 0) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["logError"])('No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting.');
      }

      return accMap;
    }, {});
  }
  /**
   * Converts targeting array and flattens to make it easily iteratable
   * e.g: Sample input to this function
   * ```
   * [
   *    {
   *      "div-gpt-ad-1460505748561-0": [{"hb_bidder": ["appnexusAst"]}]
   *    },
   *    {
   *      "div-gpt-ad-1460505748561-0": [{"hb_bidder_appnexusAs": ["appnexusAst"]}]
   *    }
   * ]
   * ```
   * Resulting array
   * ```
   * {
   *  "div-gpt-ad-1460505748561-0": {
   *    "hb_bidder": "appnexusAst",
   *    "hb_bidder_appnexusAs": "appnexusAst"
   *  }
   * }
   * ```
   *
   * @param {targetingArray}  targeting
   * @return {Object.<string,targeting>}  targeting
   */


  function flattenTargeting(targeting) {
    var targetingObj = targeting.map(function (targeting) {
      return _defineProperty({}, Object.keys(targeting)[0], targeting[Object.keys(targeting)[0]].map(function (target) {
        return _defineProperty({}, Object.keys(target)[0], target[Object.keys(target)[0]].join(', '));
      }).reduce(function (p, c) {
        return _extends(c, p);
      }, {}));
    }).reduce(function (accumulator, targeting) {
      var key = Object.keys(targeting)[0];
      accumulator[key] = _extends({}, accumulator[key], targeting[key]);
      return accumulator;
    }, {});
    return targetingObj;
  }
  /**
   * Sets targeting for DFP
   * @param {Object.<string,Object.<string,string>>} targetingConfig
   */


  targeting.setTargetingForGPT = function (targetingConfig, customSlotMatching) {
    window.googletag.pubads().getSlots().forEach(function (slot) {
      Object.keys(targetingConfig).filter(customSlotMatching ? customSlotMatching(slot) : Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["isAdUnitCodeMatchingSlot"])(slot)).forEach(function (targetId) {
        return Object.keys(targetingConfig[targetId]).forEach(function (key) {
          var valueArr = targetingConfig[targetId][key].split(',');
          valueArr = valueArr.length > 1 ? [valueArr] : valueArr;
          valueArr.map(function (value) {
            utils.logMessage("Attempting to set key value for slot: ".concat(slot.getSlotElementId(), " key: ").concat(key, " value: ").concat(value));
            return value;
          }).forEach(function (value) {
            slot.setTargeting(key, value);
          });
        });
      });
    });
  };
  /**
   * normlizes input to a `adUnit.code` array
   * @param  {(string|string[])} adUnitCode [description]
   * @return {string[]}     AdUnit code array
   */


  function getAdUnitCodes(adUnitCode) {
    if (typeof adUnitCode === 'string') {
      return [adUnitCode];
    } else if (utils.isArray(adUnitCode)) {
      return adUnitCode;
    }

    return auctionManager.getAdUnitCodes() || [];
  }

  function getBidsReceived() {
    var bidsReceived = auctionManager.getBidsReceived();

    if (!__WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('useBidCache')) {
      bidsReceived = bidsReceived.filter(function (bid) {
        return latestAuctionForAdUnit[bid.adUnitCode] === bid.auctionId;
      });
    }

    bidsReceived = bidsReceived.filter(function (bid) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(bid, 'video.context') !== __WEBPACK_IMPORTED_MODULE_5__mediaTypes_js__["a" /* ADPOD */];
    }).filter(function (bid) {
      return bid.mediaType !== 'banner' || Object(__WEBPACK_IMPORTED_MODULE_4__sizeMapping_js__["c" /* sizeSupported */])([bid.width, bid.height]);
    }).filter(filters.isUnusedBid).filter(filters.isBidNotExpired);
    return getHighestCpmBidsFromBidPool(bidsReceived, __WEBPACK_IMPORTED_MODULE_0__utils_js__["getOldestHighestCpmBid"]);
  }
  /**
   * Returns top bids for a given adUnit or set of adUnits.
   * @param  {(string|string[])} adUnitCode adUnitCode or array of adUnitCodes
   * @return {[type]}            [description]
   */


  targeting.getWinningBids = function (adUnitCode) {
    var bidsReceived = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getBidsReceived();
    var adUnitCodes = getAdUnitCodes(adUnitCode);
    return bidsReceived.filter(function (bid) {
      return __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes_js___default()(adUnitCodes, bid.adUnitCode);
    }).filter(function (bid) {
      return bid.cpm > 0;
    }).map(function (bid) {
      return bid.adUnitCode;
    }).filter(__WEBPACK_IMPORTED_MODULE_0__utils_js__["uniques"]).map(function (adUnitCode) {
      return bidsReceived.filter(function (bid) {
        return bid.adUnitCode === adUnitCode ? bid : null;
      }).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getHighestCpm"]);
    });
  };
  /**
   * @param  {(string|string[])} adUnitCode adUnitCode or array of adUnitCodes
   * Sets targeting for AST
   */


  targeting.setTargetingForAst = function (adUnitCodes) {
    var astTargeting = targeting.getAllTargeting(adUnitCodes);

    try {
      targeting.resetPresetTargetingAST(adUnitCodes);
    } catch (e) {
      utils.logError('unable to reset targeting for AST' + e);
    }

    Object.keys(astTargeting).forEach(function (targetId) {
      return Object.keys(astTargeting[targetId]).forEach(function (key) {
        utils.logMessage("Attempting to set targeting for targetId: ".concat(targetId, " key: ").concat(key, " value: ").concat(astTargeting[targetId][key])); // setKeywords supports string and array as value

        if (utils.isStr(astTargeting[targetId][key]) || utils.isArray(astTargeting[targetId][key])) {
          var keywordsObj = {};
          var regex = /pt[0-9]/;

          if (key.search(regex) < 0) {
            keywordsObj[key.toUpperCase()] = astTargeting[targetId][key];
          } else {
            // pt${n} keys should not be uppercased
            keywordsObj[key] = astTargeting[targetId][key];
          }

          window.apntag.setKeywords(targetId, keywordsObj, {
            overrideKeyValue: true
          });
        }
      });
    });
  };
  /**
   * Get targeting key value pairs for winning bid.
   * @param {string[]}    AdUnit code array
   * @return {targetingArray}   winning bids targeting
   */


  function getWinningBidTargeting(adUnitCodes, bidsReceived) {
    var winners = targeting.getWinningBids(adUnitCodes, bidsReceived);
    var standardKeys = getStandardKeys();
    winners = winners.map(function (winner) {
      return _defineProperty({}, winner.adUnitCode, Object.keys(winner.adserverTargeting).filter(function (key) {
        return typeof winner.sendStandardTargeting === 'undefined' || winner.sendStandardTargeting || standardKeys.indexOf(key) === -1;
      }).reduce(function (acc, key) {
        var targetingValue = [winner.adserverTargeting[key]];

        var targeting = _defineProperty({}, key.substring(0, MAX_DFP_KEYLENGTH), targetingValue);

        if (key === CONSTANTS.TARGETING_KEYS.DEAL) {
          var bidderCodeTargetingKey = "".concat(key, "_").concat(winner.bidderCode).substring(0, MAX_DFP_KEYLENGTH);

          var bidderCodeTargeting = _defineProperty({}, bidderCodeTargetingKey, targetingValue);

          return [].concat(_toConsumableArray(acc), [targeting, bidderCodeTargeting]);
        }

        return [].concat(_toConsumableArray(acc), [targeting]);
      }, []));
    });
    return winners;
  }

  function getStandardKeys() {
    return auctionManager.getStandardBidderAdServerTargeting() // in case using a custom standard key set
    .map(function (targeting) {
      return targeting.key;
    }).concat(TARGETING_KEYS).filter(__WEBPACK_IMPORTED_MODULE_0__utils_js__["uniques"]); // standard keys defined in the library.
  }
  /**
   * Merge custom adserverTargeting with same key name for same adUnitCode.
   * e.g: Appnexus defining custom keyvalue pair foo:bar and Rubicon defining custom keyvalue pair foo:baz will be merged to foo: ['bar','baz']
   *
   * @param {Object[]} acc Accumulator for reducer. It will store updated bidResponse objects
   * @param {Object} bid BidResponse
   * @param {number} index current index
   * @param {Array} arr original array
   */


  function mergeAdServerTargeting(acc, bid, index, arr) {
    function concatTargetingValue(key) {
      return function (currentBidElement) {
        if (!utils.isArray(currentBidElement.adserverTargeting[key])) {
          currentBidElement.adserverTargeting[key] = [currentBidElement.adserverTargeting[key]];
        }

        currentBidElement.adserverTargeting[key] = currentBidElement.adserverTargeting[key].concat(bid.adserverTargeting[key]).filter(__WEBPACK_IMPORTED_MODULE_0__utils_js__["uniques"]);
        delete bid.adserverTargeting[key];
      };
    }

    function hasSameAdunitCodeAndKey(key) {
      return function (currentBidElement) {
        return currentBidElement.adUnitCode === bid.adUnitCode && currentBidElement.adserverTargeting[key];
      };
    }

    Object.keys(bid.adserverTargeting).filter(getCustomKeys()).forEach(function (key) {
      if (acc.length) {
        acc.filter(hasSameAdunitCodeAndKey(key)).forEach(concatTargetingValue(key));
      }
    });
    acc.push(bid);
    return acc;
  }

  function getCustomKeys() {
    var standardKeys = getStandardKeys().concat(__WEBPACK_IMPORTED_MODULE_2__native_js__["a" /* NATIVE_TARGETING_KEYS */]);
    return function (key) {
      return standardKeys.indexOf(key) === -1;
    };
  }

  function truncateCustomKeys(bid) {
    return _defineProperty({}, bid.adUnitCode, Object.keys(bid.adserverTargeting) // Get only the non-standard keys of the losing bids, since we
    // don't want to override the standard keys of the winning bid.
    .filter(getCustomKeys()).map(function (key) {
      return _defineProperty({}, key.substring(0, MAX_DFP_KEYLENGTH), [bid.adserverTargeting[key]]);
    }));
  }
  /**
   * Get custom targeting key value pairs for bids.
   * @param {string[]}    AdUnit code array
   * @return {targetingArray}   bids with custom targeting defined in bidderSettings
   */


  function getCustomBidTargeting(adUnitCodes, bidsReceived) {
    return bidsReceived.filter(function (bid) {
      return __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_includes_js___default()(adUnitCodes, bid.adUnitCode);
    }).map(function (bid) {
      return _extends({}, bid);
    }).reduce(mergeAdServerTargeting, []).map(truncateCustomKeys).filter(function (bid) {
      return bid;
    }); // removes empty elements in array;
  }
  /**
   * Get targeting key value pairs for non-winning bids.
   * @param {string[]}    AdUnit code array
   * @return {targetingArray}   all non-winning bids targeting
   */


  function getBidLandscapeTargeting(adUnitCodes, bidsReceived) {
    var standardKeys = TARGETING_KEYS.concat(__WEBPACK_IMPORTED_MODULE_2__native_js__["a" /* NATIVE_TARGETING_KEYS */]);
    var adUnitBidLimit = __WEBPACK_IMPORTED_MODULE_1__config_js__["b" /* config */].getConfig('sendBidsControl.bidLimit');
    var bids = getHighestCpmBidsFromBidPool(bidsReceived, __WEBPACK_IMPORTED_MODULE_0__utils_js__["getHighestCpm"], adUnitBidLimit); // populate targeting keys for the remaining bids

    return bids.map(function (bid) {
      if (bidShouldBeAddedToTargeting(bid, adUnitCodes)) {
        return _defineProperty({}, bid.adUnitCode, getTargetingMap(bid, standardKeys.filter(function (key) {
          return typeof bid.adserverTargeting[key] !== 'undefined';
        })));
      }
    }).filter(function (bid) {
      return bid;
    }); // removes empty elements in array
  }

  function getTargetingMap(bid, keys) {
    return keys.map(function (key) {
      return _defineProperty({}, "".concat(key, "_").concat(bid.bidderCode).substring(0, MAX_DFP_KEYLENGTH), [bid.adserverTargeting[key]]);
    });
  }

  targeting.isApntagDefined = function () {
    if (window.apntag && utils.isFn(window.apntag.setKeywords)) {
      return true;
    }
  };

  return targeting;
}
var targeting = newTargeting(__WEBPACK_IMPORTED_MODULE_3__auctionManager_js__["a" /* auctionManager */]);

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 38:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 39:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ajax; });
/* harmony export (immutable) */ __webpack_exports__["b"] = ajaxBuilder;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(3);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var utils = __webpack_require__(0);

var XHR_DONE = 4;
/**
 * Simple IE9+ and cross-browser ajax request function
 * Note: x-domain requests in IE9 do not support the use of cookies
 *
 * @param url string url
 * @param callback {object | function} callback
 * @param data mixed data
 * @param options object
 */

var ajax = ajaxBuilder();
function ajaxBuilder() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      request = _ref.request,
      done = _ref.done;

  return function (url, callback, data) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    try {
      var x;
      var method = options.method || (data ? 'POST' : 'GET');
      var parser = document.createElement('a');
      parser.href = url;
      var callbacks = _typeof(callback) === 'object' && callback !== null ? callback : {
        success: function success() {
          utils.logMessage('xhr success');
        },
        error: function error(e) {
          utils.logError('xhr error', null, e);
        }
      };

      if (typeof callback === 'function') {
        callbacks.success = callback;
      }

      x = new window.XMLHttpRequest();

      x.onreadystatechange = function () {
        if (x.readyState === XHR_DONE) {
          if (typeof done === 'function') {
            done(parser.origin);
          }

          var status = x.status;

          if (status >= 200 && status < 300 || status === 304) {
            callbacks.success(x.responseText, x);
          } else {
            callbacks.error(x.statusText, x);
          }
        }
      }; // Disabled timeout temporarily to avoid xhr failed requests. https://github.com/prebid/Prebid.js/issues/2648


      if (!__WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getConfig('disableAjaxTimeout')) {
        x.ontimeout = function () {
          utils.logError('  xhr timeout after ', x.timeout, 'ms');
        };
      }

      if (method === 'GET' && data) {
        var urlInfo = utils.parseUrl(url, options);

        _extends(urlInfo.search, data);

        url = utils.buildUrl(urlInfo);
      }

      x.open(method, url, true); // IE needs timoeut to be set after open - see #1410
      // Disabled timeout temporarily to avoid xhr failed requests. https://github.com/prebid/Prebid.js/issues/2648

      if (!__WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getConfig('disableAjaxTimeout')) {
        x.timeout = timeout;
      }

      if (options.withCredentials) {
        x.withCredentials = true;
      }

      utils._each(options.customHeaders, function (value, header) {
        x.setRequestHeader(header, value);
      });

      if (options.preflight) {
        x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      }

      x.setRequestHeader('Content-Type', options.contentType || 'text/plain');

      if (typeof request === 'function') {
        request(parser.origin);
      }

      if (method === 'POST' && data) {
        x.send(data);
      } else {
        x.send();
      }
    } catch (error) {
      utils.logError('xhr construction', error);
    }
  };
}

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(47);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(416);
module.exports = __webpack_require__(17).Number.isInteger;


/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(16);

$export($export.S, 'Number', { isInteger: __webpack_require__(417) });


/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(18);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(27);
var call = __webpack_require__(72);
var isArrayIter = __webpack_require__(73);
var anObject = __webpack_require__(31);
var toLength = __webpack_require__(40);
var getIterFn = __webpack_require__(74);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPriceBucketString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isValidPriceConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_array_find_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_array_find_js__);


var utils = __webpack_require__(0);

var _defaultPrecision = 2;
var _lgPriceConfig = {
  'buckets': [{
    'max': 5,
    'increment': 0.5
  }]
};
var _mgPriceConfig = {
  'buckets': [{
    'max': 20,
    'increment': 0.1
  }]
};
var _hgPriceConfig = {
  'buckets': [{
    'max': 20,
    'increment': 0.01
  }]
};
var _densePriceConfig = {
  'buckets': [{
    'max': 3,
    'increment': 0.01
  }, {
    'max': 8,
    'increment': 0.05
  }, {
    'max': 20,
    'increment': 0.5
  }]
};
var _autoPriceConfig = {
  'buckets': [{
    'max': 5,
    'increment': 0.05
  }, {
    'max': 10,
    'increment': 0.1
  }, {
    'max': 20,
    'increment': 0.5
  }]
};

function getPriceBucketString(cpm, customConfig) {
  var granularityMultiplier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var cpmFloat = parseFloat(cpm);

  if (isNaN(cpmFloat)) {
    cpmFloat = '';
  }

  return {
    low: cpmFloat === '' ? '' : getCpmStringValue(cpm, _lgPriceConfig, granularityMultiplier),
    med: cpmFloat === '' ? '' : getCpmStringValue(cpm, _mgPriceConfig, granularityMultiplier),
    high: cpmFloat === '' ? '' : getCpmStringValue(cpm, _hgPriceConfig, granularityMultiplier),
    auto: cpmFloat === '' ? '' : getCpmStringValue(cpm, _autoPriceConfig, granularityMultiplier),
    dense: cpmFloat === '' ? '' : getCpmStringValue(cpm, _densePriceConfig, granularityMultiplier),
    custom: cpmFloat === '' ? '' : getCpmStringValue(cpm, customConfig, granularityMultiplier)
  };
}

function getCpmStringValue(cpm, config, granularityMultiplier) {
  var cpmStr = '';

  if (!isValidPriceConfig(config)) {
    return cpmStr;
  }

  var cap = config.buckets.reduce(function (prev, curr) {
    if (prev.max > curr.max) {
      return prev;
    }

    return curr;
  }, {
    'max': 0
  });
  var bucketFloor = 0;
  var bucket = __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_array_find_js___default()(config.buckets, function (bucket) {
    if (cpm > cap.max * granularityMultiplier) {
      // cpm exceeds cap, just return the cap.
      var precision = bucket.precision;

      if (typeof precision === 'undefined') {
        precision = _defaultPrecision;
      }

      cpmStr = (bucket.max * granularityMultiplier).toFixed(precision);
    } else if (cpm <= bucket.max * granularityMultiplier && cpm >= bucketFloor * granularityMultiplier) {
      bucket.min = bucketFloor;
      return bucket;
    } else {
      bucketFloor = bucket.max;
    }
  });

  if (bucket) {
    cpmStr = getCpmTarget(cpm, bucket, granularityMultiplier);
  }

  return cpmStr;
}

function isValidPriceConfig(config) {
  if (utils.isEmpty(config) || !config.buckets || !Array.isArray(config.buckets)) {
    return false;
  }

  var isValid = true;
  config.buckets.forEach(function (bucket) {
    if (!bucket.max || !bucket.increment) {
      isValid = false;
    }
  });
  return isValid;
}

function getCpmTarget(cpm, bucket, granularityMultiplier) {
  var precision = typeof bucket.precision !== 'undefined' ? bucket.precision : _defaultPrecision;
  var increment = bucket.increment * granularityMultiplier;
  var bucketMin = bucket.min * granularityMultiplier; // start increments at the bucket min and then add bucket min back to arrive at the correct rounding
  // note - we're padding the values to avoid using decimals in the math prior to flooring
  // this is done as JS can return values slightly below the expected mark which would skew the price bucket target
  //   (eg 4.01 / 0.01 = 400.99999999999994)
  // min precison should be 2 to move decimal place over.

  var pow = Math.pow(10, precision + 2);
  var cpmToFloor = (cpm * pow - bucketMin * pow) / (increment * pow);
  var cpmTarget = Math.floor(cpmToFloor) * increment + bucketMin; // force to 10 decimal places to deal with imprecise decimal/binary conversions
  //    (for example 0.1 * 3 = 0.30000000000000004)

  cpmTarget = Number(cpmTarget.toFixed(10));
  return cpmTarget.toFixed(precision);
}



/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(27);
var IObject = __webpack_require__(61);
var toObject = __webpack_require__(46);
var toLength = __webpack_require__(40);
var asc = __webpack_require__(91);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(39);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 47:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 48:
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(61);
var defined = __webpack_require__(39);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = {"JSON_MAPPING":{"PL_CODE":"code","PL_SIZE":"sizes","PL_BIDS":"bids","BD_BIDDER":"bidder","BD_ID":"paramsd","BD_PL_ID":"placementId","ADSERVER_TARGETING":"adserverTargeting","BD_SETTING_STANDARD":"standard"},"DEBUG_MODE":"pbjs_debug","STATUS":{"GOOD":1,"NO_BID":2},"CB":{"TYPE":{"ALL_BIDS_BACK":"allRequestedBidsBack","AD_UNIT_BIDS_BACK":"adUnitBidsBack","BID_WON":"bidWon","REQUEST_BIDS":"requestBids"}},"EVENTS":{"AUCTION_INIT":"auctionInit","AUCTION_END":"auctionEnd","BID_ADJUSTMENT":"bidAdjustment","BID_TIMEOUT":"bidTimeout","BID_REQUESTED":"bidRequested","BID_RESPONSE":"bidResponse","NO_BID":"noBid","BID_WON":"bidWon","BIDDER_DONE":"bidderDone","SET_TARGETING":"setTargeting","BEFORE_REQUEST_BIDS":"beforeRequestBids","REQUEST_BIDS":"requestBids","ADD_AD_UNITS":"addAdUnits","AD_RENDER_FAILED":"adRenderFailed"},"AD_RENDER_FAILED_REASON":{"PREVENT_WRITING_ON_MAIN_DOCUMENT":"preventWritingOnMainDocuemnt","NO_AD":"noAd","EXCEPTION":"exception","CANNOT_FIND_AD":"cannotFindAd","MISSING_DOC_OR_ADID":"missingDocOrAdid"},"EVENT_ID_PATHS":{"bidWon":"adUnitCode"},"GRANULARITY_OPTIONS":{"LOW":"low","MEDIUM":"medium","HIGH":"high","AUTO":"auto","DENSE":"dense","CUSTOM":"custom"},"TARGETING_KEYS":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","SOURCE":"hb_source","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_ID":"hb_cache_id","CACHE_HOST":"hb_cache_host"},"NATIVE_KEYS":{"title":"pwt_native_title","body":"pwt_native_body","body2":"pwt_native_body2","privacyLink":"pwt_native_privacy","sponsoredBy":"pwt_native_brand","image":"pwt_native_image","icon":"pwt_native_icon","clickUrl":"pwt_native_linkurl","displayUrl":"pwt_native_displayurl","cta":"pwt_native_cta","rating":"pwt_native_rating","address":"pwt_native_address","downloads":"pwt_native_downloads","likes":"pwt_native_likes","phone":"pwt_native_phone","price":"pwt_native_price","salePrice":"pwt_native_saleprice"},"S2S":{"SRC":"s2s","DEFAULT_ENDPOINT":"https://prebid.adnxs.com/pbs/v1/openrtb2/auction","SYNCED_BIDDERS_KEY":"pbjsSyncs"},"BID_STATUS":{"BID_TARGETING_SET":"targetingSet","RENDERED":"rendered","BID_REJECTED":"bidRejected"},"SUBMODULES_THAT_ALWAYS_REFRESH_ID":{"parrableId":true}}

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(63);
var $export = __webpack_require__(16);
var redefine = __webpack_require__(98);
var hide = __webpack_require__(24);
var Iterators = __webpack_require__(33);
var $iterCreate = __webpack_require__(99);
var setToStringTag = __webpack_require__(52);
var getPrototypeOf = __webpack_require__(104);
var ITERATOR = __webpack_require__(14)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(62)('keys');
var uid = __webpack_require__(48);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(20).f;
var has = __webpack_require__(32);
var TAG = __webpack_require__(14)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(128);

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(79);
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adunitCounter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);

var adUnits = {};

function ensureAdUnit(adunit, bidderCode) {
  var adUnit = adUnits[adunit] = adUnits[adunit] || {
    bidders: {}
  };

  if (bidderCode) {
    return adUnit.bidders[bidderCode] = adUnit.bidders[bidderCode] || {};
  }

  return adUnit;
}

function incrementAdUnitCount(adunit, counter, bidderCode) {
  var adUnit = ensureAdUnit(adunit, bidderCode);
  adUnit[counter] = (adUnit[counter] || 0) + 1;
  return adUnit[counter];
}
/**
 * Increments and returns current Adunit counter
 * @param {string} adunit id
 * @returns {number} current adunit count
 */


function incrementRequestsCounter(adunit) {
  return incrementAdUnitCount(adunit, 'requestsCounter');
}
/**
 * Increments and returns current Adunit requests counter for a bidder
 * @param {string} adunit id
 * @param {string} bidderCode code
 * @returns {number} current adunit bidder requests count
 */


function incrementBidderRequestsCounter(adunit, bidderCode) {
  return incrementAdUnitCount(adunit, 'requestsCounter', bidderCode);
}
/**
 * Increments and returns current Adunit wins counter for a bidder
 * @param {string} adunit id
 * @param {string} bidderCode code
 * @returns {number} current adunit bidder requests count
 */


function incrementBidderWinsCounter(adunit, bidderCode) {
  return incrementAdUnitCount(adunit, 'winsCounter', bidderCode);
}
/**
 * Returns current Adunit counter
 * @param {string} adunit id
 * @returns {number} current adunit count
 */


function getRequestsCounter(adunit) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnits, "".concat(adunit, ".requestsCounter")) || 0;
}
/**
 * Returns current Adunit requests counter for a specific bidder code
 * @param {string} adunit id
 * @param {string} bidder code
 * @returns {number} current adunit bidder requests count
 */


function getBidderRequestsCounter(adunit, bidder) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnits, "".concat(adunit, ".bidders.").concat(bidder, ".requestsCounter")) || 0;
}
/**
 * Returns current Adunit requests counter for a specific bidder code
 * @param {string} adunit id
 * @param {string} bidder code
 * @returns {number} current adunit bidder requests count
 */


function getBidderWinsCounter(adunit, bidder) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["deepAccess"])(adUnits, "".concat(adunit, ".bidders.").concat(bidder, ".winsCounter")) || 0;
}
/**
 * A module which counts how many times an adunit was called
 * @module adunitCounter
 */


var adunitCounter = {
  incrementRequestsCounter: incrementRequestsCounter,
  incrementBidderRequestsCounter: incrementBidderRequestsCounter,
  incrementBidderWinsCounter: incrementBidderWinsCounter,
  getRequestsCounter: getRequestsCounter,
  getBidderRequestsCounter: getBidderRequestsCounter,
  getBidderWinsCounter: getBidderWinsCounter
};


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(190);
module.exports = __webpack_require__(17).Array.findIndex;


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adUnitSetupChecks", function() { return adUnitSetupChecks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAdUnitSetup", function() { return checkAdUnitSetup; });
/* harmony export (immutable) */ __webpack_exports__["executeStorageCallbacks"] = executeStorageCallbacks;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__prebidGlobal_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__secureCreatives_js__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userSync_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__targeting_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hook_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__debugging_js__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_library_fn_array_includes_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_library_fn_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_library_fn_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__adUnits_js__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Renderer_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bidfactory_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__storageManager_js__ = __webpack_require__(9);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @module pbjs */














var owpbjs = Object(__WEBPACK_IMPORTED_MODULE_0__prebidGlobal_js__["a" /* getGlobal */])();

var CONSTANTS = __webpack_require__(5);

var utils = __webpack_require__(0);

var adapterManager = __webpack_require__(7).default;

var events = __webpack_require__(8);

var triggerUserSyncs = __WEBPACK_IMPORTED_MODULE_3__userSync_js__["a" /* userSync */].triggerUserSyncs;
/* private variables */

var _CONSTANTS$EVENTS = CONSTANTS.EVENTS,
    ADD_AD_UNITS = _CONSTANTS$EVENTS.ADD_AD_UNITS,
    BID_WON = _CONSTANTS$EVENTS.BID_WON,
    REQUEST_BIDS = _CONSTANTS$EVENTS.REQUEST_BIDS,
    SET_TARGETING = _CONSTANTS$EVENTS.SET_TARGETING,
    AD_RENDER_FAILED = _CONSTANTS$EVENTS.AD_RENDER_FAILED;
var _CONSTANTS$AD_RENDER_ = CONSTANTS.AD_RENDER_FAILED_REASON,
    PREVENT_WRITING_ON_MAIN_DOCUMENT = _CONSTANTS$AD_RENDER_.PREVENT_WRITING_ON_MAIN_DOCUMENT,
    NO_AD = _CONSTANTS$AD_RENDER_.NO_AD,
    EXCEPTION = _CONSTANTS$AD_RENDER_.EXCEPTION,
    CANNOT_FIND_AD = _CONSTANTS$AD_RENDER_.CANNOT_FIND_AD,
    MISSING_DOC_OR_ADID = _CONSTANTS$AD_RENDER_.MISSING_DOC_OR_ADID;
var eventValidators = {
  bidWon: checkDefinedPlacement
}; // initialize existing debugging sessions if present

Object(__WEBPACK_IMPORTED_MODULE_8__debugging_js__["a" /* sessionLoader */])();
/* Public vars */

owpbjs.bidderSettings = owpbjs.bidderSettings || {}; // let the world know we are loaded

owpbjs.libLoaded = true; // version auto generated from build

owpbjs.version = "v3.18.0";
utils.logInfo("Prebid.js v3.18.0 loaded"); // create adUnit array

owpbjs.adUnits = owpbjs.adUnits || []; // Allow publishers who enable user sync override to trigger their sync

owpbjs.triggerUserSyncs = triggerUserSyncs;

function checkDefinedPlacement(id) {
  var adUnitCodes = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getBidsRequested().map(function (bidSet) {
    return bidSet.bids.map(function (bid) {
      return bid.adUnitCode;
    });
  }).reduce(__WEBPACK_IMPORTED_MODULE_1__utils_js__["flatten"]).filter(__WEBPACK_IMPORTED_MODULE_1__utils_js__["uniques"]);

  if (!utils.contains(adUnitCodes, id)) {
    utils.logError('The "' + id + '" placement is not defined.');
    return;
  }

  return true;
}

function setRenderSize(doc, width, height) {
  if (doc.defaultView && doc.defaultView.frameElement) {
    doc.defaultView.frameElement.width = width;
    doc.defaultView.frameElement.height = height;
  }
}

function validateSizes(sizes, targLength) {
  var cleanSizes = [];

  if (utils.isArray(sizes) && (targLength ? sizes.length === targLength : sizes.length > 0)) {
    // check if an array of arrays or array of numbers
    if (sizes.every(function (sz) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isArrayOfNums"])(sz, 2);
    })) {
      cleanSizes = sizes;
    } else if (Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isArrayOfNums"])(sizes, 2)) {
      cleanSizes.push(sizes);
    }
  }

  return cleanSizes;
}

function validateBannerMediaType(adUnit) {
  var banner = adUnit.mediaTypes.banner;
  var bannerSizes = validateSizes(banner.sizes);

  if (bannerSizes.length > 0) {
    banner.sizes = bannerSizes; // Deprecation Warning: This property will be deprecated in next release in favor of adUnit.mediaTypes.banner.sizes

    adUnit.sizes = bannerSizes;
  } else {
    utils.logError('Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request.');
    delete adUnit.mediaTypes.banner;
  }
}

function validateVideoMediaType(adUnit) {
  var video = adUnit.mediaTypes.video;
  var tarPlayerSizeLen = typeof video.playerSize[0] === 'number' ? 2 : 1;
  var videoSizes = validateSizes(video.playerSize, tarPlayerSizeLen);

  if (videoSizes.length > 0) {
    if (tarPlayerSizeLen === 2) {
      utils.logInfo('Transforming video.playerSize from [640,480] to [[640,480]] so it\'s in the proper format.');
    }

    video.playerSize = videoSizes; // Deprecation Warning: This property will be deprecated in next release in favor of adUnit.mediaTypes.video.playerSize

    adUnit.sizes = videoSizes;
  } else {
    utils.logError('Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request.');
    delete adUnit.mediaTypes.video.playerSize;
  }
}

function validateNativeMediaType(adUnit) {
  var native = adUnit.mediaTypes.native;

  if (native.image && native.image.sizes && !Array.isArray(native.image.sizes)) {
    utils.logError('Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request.');
    delete adUnit.mediaTypes.native.image.sizes;
  }

  if (native.image && native.image.aspect_ratios && !Array.isArray(native.image.aspect_ratios)) {
    utils.logError('Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request.');
    delete adUnit.mediaTypes.native.image.aspect_ratios;
  }

  if (native.icon && native.icon.sizes && !Array.isArray(native.icon.sizes)) {
    utils.logError('Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request.');
    delete adUnit.mediaTypes.native.icon.sizes;
  }
}

var adUnitSetupChecks = {
  validateBannerMediaType: validateBannerMediaType,
  validateVideoMediaType: validateVideoMediaType,
  validateNativeMediaType: validateNativeMediaType,
  validateSizes: validateSizes
};
var checkAdUnitSetup = Object(__WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */])('sync', function (adUnits) {
  return adUnits.filter(function (adUnit) {
    var mediaTypes = adUnit.mediaTypes;

    if (!mediaTypes || Object.keys(mediaTypes).length === 0) {
      utils.logError("Detected adUnit.code '".concat(adUnit.code, "' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed."));
      return false;
    }

    if (mediaTypes.banner) {
      validateBannerMediaType(adUnit);
    }

    if (mediaTypes.video) {
      var video = mediaTypes.video;

      if (video.playerSize) {
        validateVideoMediaType(adUnit);
      }
    }

    if (mediaTypes.native) {
      validateNativeMediaType(adUnit);
    }

    return true;
  });
}, 'checkAdUnitSetup'); /// ///////////////////////////////
//                              //
//    Start Public APIs         //
//                              //
/// ///////////////////////////////

/**
 * This function returns the query string targeting parameters available at this moment for a given ad unit. Note that some bidder's response may not have been received if you call this function too quickly after the requests are sent.
 * @param  {string} [adunitCode] adUnitCode to get the bid responses for
 * @alias module:pbjs.getAdserverTargetingForAdUnitCodeStr
 * @return {Array}  returnObj return bids array
 */

owpbjs.getAdserverTargetingForAdUnitCodeStr = function (adunitCode) {
  utils.logInfo("Invoking owpbjs.getAdserverTargetingForAdUnitCodeStr", arguments); // call to retrieve bids array

  if (adunitCode) {
    var res = owpbjs.getAdserverTargetingForAdUnitCode(adunitCode);
    return utils.transformAdServerTargetingObj(res);
  } else {
    utils.logMessage('Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode');
  }
};
/**
 * This function returns the query string targeting parameters available at this moment for a given ad unit. Note that some bidder's response may not have been received if you call this function too quickly after the requests are sent.
 * @param adUnitCode {string} adUnitCode to get the bid responses for
 * @alias module:pbjs.getAdserverTargetingForAdUnitCode
 * @returns {Object}  returnObj return bids
 */


owpbjs.getAdserverTargetingForAdUnitCode = function (adUnitCode) {
  return owpbjs.getAdserverTargeting(adUnitCode)[adUnitCode];
};
/**
 * returns all ad server targeting for all ad units
 * @return {Object} Map of adUnitCodes and targeting values []
 * @alias module:pbjs.getAdserverTargeting
 */


owpbjs.getAdserverTargeting = function (adUnitCode) {
  utils.logInfo("Invoking owpbjs.getAdserverTargeting", arguments);
  return __WEBPACK_IMPORTED_MODULE_6__targeting_js__["a" /* targeting */].getAllTargeting(adUnitCode);
};

function getBids(type) {
  var responses = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */][type]().filter(utils.bind.call(__WEBPACK_IMPORTED_MODULE_1__utils_js__["adUnitsFilter"], this, __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getAdUnitCodes())); // find the last auction id to get responses for most recent auction only

  var currentAuctionId = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getLastAuctionId();
  return responses.map(function (bid) {
    return bid.adUnitCode;
  }).filter(__WEBPACK_IMPORTED_MODULE_1__utils_js__["uniques"]).map(function (adUnitCode) {
    return responses.filter(function (bid) {
      return bid.auctionId === currentAuctionId && bid.adUnitCode === adUnitCode;
    });
  }).filter(function (bids) {
    return bids && bids[0] && bids[0].adUnitCode;
  }).map(function (bids) {
    return _defineProperty({}, bids[0].adUnitCode, {
      bids: bids
    });
  }).reduce(function (a, b) {
    return _extends(a, b);
  }, {});
}
/**
 * This function returns the bids requests involved in an auction but not bid on
 * @alias module:pbjs.getNoBids
 * @return {Object}            map | object that contains the bidRequests
 */


owpbjs.getNoBids = function () {
  utils.logInfo("Invoking owpbjs.getNoBids", arguments);
  return getBids('getNoBids');
};
/**
 * This function returns the bid responses at the given moment.
 * @alias module:pbjs.getBidResponses
 * @return {Object}            map | object that contains the bidResponses
 */


owpbjs.getBidResponses = function () {
  utils.logInfo("Invoking owpbjs.getBidResponses", arguments);
  return getBids('getBidsReceived');
};
/**
 * Returns bidResponses for the specified adUnitCode
 * @param  {string} adUnitCode adUnitCode
 * @alias module:pbjs.getBidResponsesForAdUnitCode
 * @return {Object}            bidResponse object
 */


owpbjs.getBidResponsesForAdUnitCode = function (adUnitCode) {
  var bids = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getBidsReceived().filter(function (bid) {
    return bid.adUnitCode === adUnitCode;
  });
  return {
    bids: bids
  };
};
/**
 * Set query string targeting on one or more GPT ad units.
 * @param {(string|string[])} adUnit a single `adUnit.code` or multiple.
 * @param {function(object)} customSlotMatching gets a GoogleTag slot and returns a filter function for adUnitCode, so you can decide to match on either eg. return slot => { return adUnitCode => { return slot.getSlotElementId() === 'myFavoriteDivId'; } };
 * @alias module:pbjs.setTargetingForGPTAsync
 */


owpbjs.setTargetingForGPTAsync = function (adUnit, customSlotMatching) {
  utils.logInfo("Invoking owpbjs.setTargetingForGPTAsync", arguments);

  if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isGptPubadsDefined"])()) {
    utils.logError('window.googletag is not defined on the page');
    return;
  } // get our ad unit codes


  var targetingSet = __WEBPACK_IMPORTED_MODULE_6__targeting_js__["a" /* targeting */].getAllTargeting(adUnit); // first reset any old targeting

  __WEBPACK_IMPORTED_MODULE_6__targeting_js__["a" /* targeting */].resetPresetTargeting(adUnit, customSlotMatching); // now set new targeting keys

  __WEBPACK_IMPORTED_MODULE_6__targeting_js__["a" /* targeting */].setTargetingForGPT(targetingSet, customSlotMatching);
  Object.keys(targetingSet).forEach(function (adUnitCode) {
    Object.keys(targetingSet[adUnitCode]).forEach(function (targetingKey) {
      if (targetingKey === 'hb_adid') {
        __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].setStatusForBids(targetingSet[adUnitCode][targetingKey], CONSTANTS.BID_STATUS.BID_TARGETING_SET);
      }
    });
  }); // emit event

  events.emit(SET_TARGETING, targetingSet);
};
/**
 * Set query string targeting on all AST (AppNexus Seller Tag) ad units. Note that this function has to be called after all ad units on page are defined. For working example code, see [Using Prebid.js with AppNexus Publisher Ad Server](http://prebid.org/dev-docs/examples/use-prebid-with-appnexus-ad-server.html).
 * @param  {(string|string[])} adUnitCode adUnitCode or array of adUnitCodes
 * @alias module:pbjs.setTargetingForAst
 */


owpbjs.setTargetingForAst = function (adUnitCodes) {
  utils.logInfo("Invoking owpbjs.setTargetingForAn", arguments);

  if (!__WEBPACK_IMPORTED_MODULE_6__targeting_js__["a" /* targeting */].isApntagDefined()) {
    utils.logError('window.apntag is not defined on the page');
    return;
  }

  __WEBPACK_IMPORTED_MODULE_6__targeting_js__["a" /* targeting */].setTargetingForAst(adUnitCodes); // emit event

  events.emit(SET_TARGETING, __WEBPACK_IMPORTED_MODULE_6__targeting_js__["a" /* targeting */].getAllTargeting());
};

function emitAdRenderFail(_ref2) {
  var reason = _ref2.reason,
      message = _ref2.message,
      bid = _ref2.bid,
      id = _ref2.id;
  var data = {
    reason: reason,
    message: message
  };
  if (bid) data.bid = bid;
  if (id) data.adId = id;
  utils.logError(message);
  events.emit(AD_RENDER_FAILED, data);
}
/**
 * This function will render the ad (based on params) in the given iframe document passed through.
 * Note that doc SHOULD NOT be the parent document page as we can't doc.write() asynchronously
 * @param  {HTMLDocument} doc document
 * @param  {string} id bid id to locate the ad
 * @alias module:pbjs.renderAd
 */


owpbjs.renderAd = function (doc, id) {
  utils.logInfo("Invoking owpbjs.renderAd", arguments);
  utils.logMessage('Calling renderAd with adId :' + id);

  if (doc && id) {
    try {
      // lookup ad by ad Id
      var bid = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].findBidByAdId(id);

      if (bid) {
        // replace macros according to openRTB with price paid = bid.cpm
        bid.ad = utils.replaceAuctionPrice(bid.ad, bid.cpm);
        bid.adUrl = utils.replaceAuctionPrice(bid.adUrl, bid.cpm); // save winning bids

        __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].addWinningBid(bid); // emit 'bid won' event here

        events.emit(BID_WON, bid);
        var height = bid.height,
            width = bid.width,
            ad = bid.ad,
            mediaType = bid.mediaType,
            adUrl = bid.adUrl,
            renderer = bid.renderer;
        var creativeComment = document.createComment("Creative ".concat(bid.creativeId, " served by ").concat(bid.bidder, " Prebid.js Header Bidding"));
        utils.insertElement(creativeComment, doc, 'body');

        if (Object(__WEBPACK_IMPORTED_MODULE_11__Renderer_js__["c" /* isRendererRequired */])(renderer)) {
          Object(__WEBPACK_IMPORTED_MODULE_11__Renderer_js__["b" /* executeRenderer */])(renderer, bid);
        } else if (doc === document && !utils.inIframe() || mediaType === 'video') {
          var message = "Error trying to write ad. Ad render call ad id ".concat(id, " was prevented from writing to the main document.");
          emitAdRenderFail({
            reason: PREVENT_WRITING_ON_MAIN_DOCUMENT,
            message: message,
            bid: bid,
            id: id
          });
        } else if (ad) {
          // will check if browser is firefox and below version 67, if so execute special doc.open()
          // for details see: https://github.com/prebid/Prebid.js/pull/3524
          // TODO remove this browser specific code at later date (when Firefox < 67 usage is mostly gone)
          if (navigator.userAgent && navigator.userAgent.toLowerCase().indexOf('firefox/') > -1) {
            var firefoxVerRegx = /firefox\/([\d\.]+)/;
            var firefoxVer = navigator.userAgent.toLowerCase().match(firefoxVerRegx)[1]; // grabs the text in the 1st matching group

            if (firefoxVer && parseInt(firefoxVer, 10) < 67) {
              doc.open('text/html', 'replace');
            }
          }

          doc.write(ad);
          doc.close();
          setRenderSize(doc, width, height);
          utils.callBurl(bid);
        } else if (adUrl) {
          var iframe = utils.createInvisibleIframe();
          iframe.height = height;
          iframe.width = width;
          iframe.style.display = 'inline';
          iframe.style.overflow = 'hidden';
          iframe.src = adUrl;
          utils.insertElement(iframe, doc, 'body');
          setRenderSize(doc, width, height);
          utils.callBurl(bid);
        } else {
          var _message = "Error trying to write ad. No ad for bid response id: ".concat(id);

          emitAdRenderFail({
            reason: NO_AD,
            message: _message,
            bid: bid,
            id: id
          });
        }
      } else {
        var _message2 = "Error trying to write ad. Cannot find ad by given id : ".concat(id);

        emitAdRenderFail({
          reason: CANNOT_FIND_AD,
          message: _message2,
          id: id
        });
      }
    } catch (e) {
      var _message3 = "Error trying to write ad Id :".concat(id, " to the page:").concat(e.message);

      emitAdRenderFail({
        reason: EXCEPTION,
        message: _message3,
        id: id
      });
    }
  } else {
    var _message4 = "Error trying to write ad Id :".concat(id, " to the page. Missing document or adId");

    emitAdRenderFail({
      reason: MISSING_DOC_OR_ADID,
      message: _message4,
      id: id
    });
  }
};
/**
 * Remove adUnit from the $$PREBID_GLOBAL$$ configuration, if there are no addUnitCode(s) it will remove all
 * @param  {string| Array} adUnitCode the adUnitCode(s) to remove
 * @alias module:pbjs.removeAdUnit
 */


owpbjs.removeAdUnit = function (adUnitCode) {
  utils.logInfo("Invoking owpbjs.removeAdUnit", arguments);

  if (!adUnitCode) {
    owpbjs.adUnits = [];
    return;
  }

  var adUnitCodes;

  if (utils.isArray(adUnitCode)) {
    adUnitCodes = adUnitCode;
  } else {
    adUnitCodes = [adUnitCode];
  }

  adUnitCodes.forEach(function (adUnitCode) {
    for (var i = owpbjs.adUnits.length - 1; i >= 0; i--) {
      if (owpbjs.adUnits[i].code === adUnitCode) {
        owpbjs.adUnits.splice(i, 1);
      }
    }
  });
};
/**
 * @param {Object} requestOptions
 * @param {function} requestOptions.bidsBackHandler
 * @param {number} requestOptions.timeout
 * @param {Array} requestOptions.adUnits
 * @param {Array} requestOptions.adUnitCodes
 * @param {Array} requestOptions.labels
 * @param {String} requestOptions.auctionId
 * @alias module:pbjs.requestBids
 */


owpbjs.requestBids = Object(__WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */])('async', function () {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      bidsBackHandler = _ref3.bidsBackHandler,
      timeout = _ref3.timeout,
      adUnits = _ref3.adUnits,
      adUnitCodes = _ref3.adUnitCodes,
      labels = _ref3.labels,
      auctionId = _ref3.auctionId;

  events.emit(REQUEST_BIDS);
  var cbTimeout = timeout || __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].getConfig('bidderTimeout');
  adUnits = adUnits || owpbjs.adUnits;
  utils.logInfo("Invoking owpbjs.requestBids", arguments);

  if (adUnitCodes && adUnitCodes.length) {
    // if specific adUnitCodes supplied filter adUnits for those codes
    adUnits = adUnits.filter(function (unit) {
      return __WEBPACK_IMPORTED_MODULE_9_core_js_library_fn_array_includes_js___default()(adUnitCodes, unit.code);
    });
  } else {
    // otherwise derive adUnitCodes from adUnits
    adUnitCodes = adUnits && adUnits.map(function (unit) {
      return unit.code;
    });
  }

  adUnits = checkAdUnitSetup(adUnits);
  /*
   * for a given adunit which supports a set of mediaTypes
   * and a given bidder which supports a set of mediaTypes
   * a bidder is eligible to participate on the adunit
   * if it supports at least one of the mediaTypes on the adunit
   */

  adUnits.forEach(function (adUnit) {
    // get the adunit's mediaTypes, defaulting to banner if mediaTypes isn't present
    var adUnitMediaTypes = Object.keys(adUnit.mediaTypes || {
      'banner': 'banner'
    }); // get the bidder's mediaTypes

    var allBidders = adUnit.bids.map(function (bid) {
      return bid.bidder;
    });
    var bidderRegistry = adapterManager.bidderRegistry;
    var s2sConfig = __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].getConfig('s2sConfig');
    var s2sBidders = s2sConfig && s2sConfig.bidders;
    var bidders = s2sBidders ? allBidders.filter(function (bidder) {
      return !__WEBPACK_IMPORTED_MODULE_9_core_js_library_fn_array_includes_js___default()(s2sBidders, bidder);
    }) : allBidders;
    adUnit.transactionId = utils.generateUUID();
    bidders.forEach(function (bidder) {
      var adapter = bidderRegistry[bidder];
      var spec = adapter && adapter.getSpec && adapter.getSpec(); // banner is default if not specified in spec

      var bidderMediaTypes = spec && spec.supportedMediaTypes || ['banner']; // check if the bidder's mediaTypes are not in the adUnit's mediaTypes

      var bidderEligible = adUnitMediaTypes.some(function (type) {
        return __WEBPACK_IMPORTED_MODULE_9_core_js_library_fn_array_includes_js___default()(bidderMediaTypes, type);
      });

      if (!bidderEligible) {
        // drop the bidder from the ad unit if it's not compatible
        utils.logWarn(utils.unsupportedBidderMessage(adUnit, bidder));
        adUnit.bids = adUnit.bids.filter(function (bid) {
          return bid.bidder !== bidder;
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_10__adUnits_js__["a" /* adunitCounter */].incrementBidderRequestsCounter(adUnit.code, bidder);
      }
    });
    __WEBPACK_IMPORTED_MODULE_10__adUnits_js__["a" /* adunitCounter */].incrementRequestsCounter(adUnit.code);
  });

  if (!adUnits || adUnits.length === 0) {
    utils.logMessage('No adUnits configured. No bids requested.');

    if (typeof bidsBackHandler === 'function') {
      // executeCallback, this will only be called in case of first request
      try {
        bidsBackHandler();
      } catch (e) {
        utils.logError('Error executing bidsBackHandler', null, e);
      }
    }

    return;
  }

  var auction = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].createAuction({
    adUnits: adUnits,
    adUnitCodes: adUnitCodes,
    callback: bidsBackHandler,
    cbTimeout: cbTimeout,
    labels: labels,
    auctionId: auctionId
  });
  var adUnitsLen = adUnits.length;

  if (adUnitsLen > 15) {
    utils.logInfo("Current auction ".concat(auction.getAuctionId(), " contains ").concat(adUnitsLen, " adUnits."), adUnits);
  }

  adUnitCodes.forEach(function (code) {
    return __WEBPACK_IMPORTED_MODULE_6__targeting_js__["a" /* targeting */].setLatestAuctionForAdUnit(code, auction.getAuctionId());
  });
  auction.callBids();
});
function executeStorageCallbacks(fn, reqBidsConfigObj) {
  runAll(__WEBPACK_IMPORTED_MODULE_13__storageManager_js__["c" /* storageCallbacks */]);
  fn.call(this, reqBidsConfigObj);

  function runAll(queue) {
    var queued;

    while (queued = queue.shift()) {
      queued();
    }
  }
} // This hook will execute all storage callbacks which were registered before gdpr enforcement hook was added. Some bidders, user id modules use storage functions when module is parsed but gdpr enforcement hook is not added at that stage as setConfig callbacks are yet to be called. Hence for such calls we execute all the stored callbacks just before requestBids. At this hook point we will know for sure that gdprEnforcement module is added or not

owpbjs.requestBids.before(executeStorageCallbacks, 49);
/**
 *
 * Add adunit(s)
 * @param {Array|Object} adUnitArr Array of adUnits or single adUnit Object.
 * @alias module:pbjs.addAdUnits
 */

owpbjs.addAdUnits = function (adUnitArr) {
  utils.logInfo("Invoking owpbjs.addAdUnits", arguments);

  if (utils.isArray(adUnitArr)) {
    owpbjs.adUnits.push.apply(owpbjs.adUnits, adUnitArr);
  } else if (_typeof(adUnitArr) === 'object') {
    owpbjs.adUnits.push(adUnitArr);
  } // emit event


  events.emit(ADD_AD_UNITS);
};
/**
 * @param {string} event the name of the event
 * @param {Function} handler a callback to set on event
 * @param {string} id an identifier in the context of the event
 * @alias module:pbjs.onEvent
 *
 * This API call allows you to register a callback to handle a Prebid.js event.
 * An optional `id` parameter provides more finely-grained event callback registration.
 * This makes it possible to register callback events for a specific item in the
 * event context. For example, `bidWon` events will accept an `id` for ad unit code.
 * `bidWon` callbacks registered with an ad unit code id will be called when a bid
 * for that ad unit code wins the auction. Without an `id` this method registers the
 * callback for every `bidWon` event.
 *
 * Currently `bidWon` is the only event that accepts an `id` parameter.
 */


owpbjs.onEvent = function (event, handler, id) {
  utils.logInfo("Invoking owpbjs.onEvent", arguments);

  if (!utils.isFn(handler)) {
    utils.logError('The event handler provided is not a function and was not set on event "' + event + '".');
    return;
  }

  if (id && !eventValidators[event].call(null, id)) {
    utils.logError('The id provided is not valid for event "' + event + '" and no handler was set.');
    return;
  }

  events.on(event, handler, id);
};
/**
 * @param {string} event the name of the event
 * @param {Function} handler a callback to remove from the event
 * @param {string} id an identifier in the context of the event (see `$$PREBID_GLOBAL$$.onEvent`)
 * @alias module:pbjs.offEvent
 */


owpbjs.offEvent = function (event, handler, id) {
  utils.logInfo("Invoking owpbjs.offEvent", arguments);

  if (id && !eventValidators[event].call(null, id)) {
    return;
  }

  events.off(event, handler, id);
};
/*
 * Wrapper to register bidderAdapter externally (adapterManager.registerBidAdapter())
 * @param  {Function} bidderAdaptor [description]
 * @param  {string} bidderCode [description]
 * @alias module:pbjs.registerBidAdapter
 */


owpbjs.registerBidAdapter = function (bidderAdaptor, bidderCode) {
  utils.logInfo("Invoking owpbjs.registerBidAdapter", arguments);

  try {
    adapterManager.registerBidAdapter(bidderAdaptor(), bidderCode);
  } catch (e) {
    utils.logError('Error registering bidder adapter : ' + e.message);
  }
};
/**
 * Wrapper to register analyticsAdapter externally (adapterManager.registerAnalyticsAdapter())
 * @param  {Object} options [description]
 * @alias module:pbjs.registerAnalyticsAdapter
 */


owpbjs.registerAnalyticsAdapter = function (options) {
  utils.logInfo("Invoking owpbjs.registerAnalyticsAdapter", arguments);

  try {
    adapterManager.registerAnalyticsAdapter(options);
  } catch (e) {
    utils.logError('Error registering analytics adapter : ' + e.message);
  }
};
/**
 * Wrapper to bidfactory.createBid()
 * @param  {string} statusCode [description]
 * @alias module:pbjs.createBid
 * @return {Object} bidResponse [description]
 */


owpbjs.createBid = function (statusCode) {
  utils.logInfo("Invoking owpbjs.createBid", arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_12__bidfactory_js__["a" /* createBid */])(statusCode);
};
/**
 * Enable sending analytics data to the analytics provider of your
 * choice.
 *
 * For usage, see [Integrate with the Prebid Analytics
 * API](http://prebid.org/dev-docs/integrate-with-the-prebid-analytics-api.html).
 *
 * For a list of analytics adapters, see [Analytics for
 * Prebid](http://prebid.org/overview/analytics.html).
 * @param  {Object} config
 * @param {string} config.provider The name of the provider, e.g., `"ga"` for Google Analytics.
 * @param {Object} config.options The options for this particular analytics adapter.  This will likely vary between adapters.
 * @alias module:pbjs.enableAnalytics
 */


owpbjs.enableAnalytics = function (config) {
  if (config && !utils.isEmpty(config)) {
    utils.logInfo("Invoking owpbjs.enableAnalytics for: ", config);
    adapterManager.enableAnalytics(config);
  } else {
    utils.logError("owpbjs.enableAnalytics should be called with option {}");
  }
};
/**
 * @alias module:pbjs.aliasBidder
 */


owpbjs.aliasBidder = function (bidderCode, alias) {
  utils.logInfo("Invoking owpbjs.aliasBidder", arguments);

  if (bidderCode && alias) {
    adapterManager.aliasBidAdapter(bidderCode, alias);
  } else {
    utils.logError('bidderCode and alias must be passed as arguments', "owpbjs.aliasBidder");
  }
};
/**
 * The bid response object returned by an external bidder adapter during the auction.
 * @typedef {Object} AdapterBidResponse
 * @property {string} pbAg Auto granularity price bucket; CPM <= 5 ? increment = 0.05 : CPM > 5 && CPM <= 10 ? increment = 0.10 : CPM > 10 && CPM <= 20 ? increment = 0.50 : CPM > 20 ? priceCap = 20.00.  Example: `"0.80"`.
 * @property {string} pbCg Custom price bucket.  For example setup, see {@link setPriceGranularity}.  Example: `"0.84"`.
 * @property {string} pbDg Dense granularity price bucket; CPM <= 3 ? increment = 0.01 : CPM > 3 && CPM <= 8 ? increment = 0.05 : CPM > 8 && CPM <= 20 ? increment = 0.50 : CPM > 20? priceCap = 20.00.  Example: `"0.84"`.
 * @property {string} pbLg Low granularity price bucket; $0.50 increment, capped at $5, floored to two decimal places.  Example: `"0.50"`.
 * @property {string} pbMg Medium granularity price bucket; $0.10 increment, capped at $20, floored to two decimal places.  Example: `"0.80"`.
 * @property {string} pbHg High granularity price bucket; $0.01 increment, capped at $20, floored to two decimal places.  Example: `"0.84"`.
 *
 * @property {string} bidder The string name of the bidder.  This *may* be the same as the `bidderCode`.  For For a list of all bidders and their codes, see [Bidders' Params](http://prebid.org/dev-docs/bidders.html).
 * @property {string} bidderCode The unique string that identifies this bidder.  For a list of all bidders and their codes, see [Bidders' Params](http://prebid.org/dev-docs/bidders.html).
 *
 * @property {string} requestId The [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) representing the bid request.
 * @property {number} requestTimestamp The time at which the bid request was sent out, expressed in milliseconds.
 * @property {number} responseTimestamp The time at which the bid response was received, expressed in milliseconds.
 * @property {number} timeToRespond How long it took for the bidder to respond with this bid, expressed in milliseconds.
 *
 * @property {string} size The size of the ad creative, expressed in `"AxB"` format, where A and B are numbers of pixels.  Example: `"320x50"`.
 * @property {string} width The width of the ad creative in pixels.  Example: `"320"`.
 * @property {string} height The height of the ad creative in pixels.  Example: `"50"`.
 *
 * @property {string} ad The actual ad creative content, often HTML with CSS, JavaScript, and/or links to additional content.  Example: `"<div id='beacon_-YQbipJtdxmMCgEPHExLhmqzEm' style='position: absolute; left: 0px; top: 0px; visibility: hidden;'><img src='http://aplus-...'/></div><iframe src=\"http://aax-us-east.amazon-adsystem.com/e/is/8dcfcd..." width=\"728\" height=\"90\" frameborder=\"0\" ...></iframe>",`.
 * @property {number} ad_id The ad ID of the creative, as understood by the bidder's system.  Used by the line item's [creative in the ad server](http://prebid.org/adops/send-all-bids-adops.html#step-3-add-a-creative).
 * @property {string} adUnitCode The code used to uniquely identify the ad unit on the publisher's page.
 *
 * @property {string} statusMessage The status of the bid.  Allowed values: `"Bid available"` or `"Bid returned empty or error response"`.
 * @property {number} cpm The exact bid price from the bidder, expressed to the thousandths place.  Example: `"0.849"`.
 *
 * @property {Object} adserverTargeting An object whose values represent the ad server's targeting on the bid.
 * @property {string} adserverTargeting.hb_adid The ad ID of the creative, as understood by the ad server.
 * @property {string} adserverTargeting.hb_pb The price paid to show the creative, as logged in the ad server.
 * @property {string} adserverTargeting.hb_bidder The winning bidder whose ad creative will be served by the ad server.
*/

/**
 * Get all of the bids that have been rendered.  Useful for [troubleshooting your integration](http://prebid.org/dev-docs/prebid-troubleshooting-guide.html).
 * @return {Array<AdapterBidResponse>} A list of bids that have been rendered.
*/


owpbjs.getAllWinningBids = function () {
  return __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getAllWinningBids();
};
/**
 * Get all of the bids that have won their respective auctions.
 * @return {Array<AdapterBidResponse>} A list of bids that have won their respective auctions.
 */


owpbjs.getAllPrebidWinningBids = function () {
  return __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getBidsReceived().filter(function (bid) {
    return bid.status === CONSTANTS.BID_STATUS.BID_TARGETING_SET;
  });
};
/**
 * Get array of highest cpm bids for all adUnits, or highest cpm bid
 * object for the given adUnit
 * @param {string} adUnitCode - optional ad unit code
 * @alias module:pbjs.getHighestCpmBids
 * @return {Array} array containing highest cpm bid object(s)
 */


owpbjs.getHighestCpmBids = function (adUnitCode) {
  return __WEBPACK_IMPORTED_MODULE_6__targeting_js__["a" /* targeting */].getWinningBids(adUnitCode);
};
/**
 * Mark the winning bid as used, should only be used in conjunction with video
 * @typedef {Object} MarkBidRequest
 * @property {string} adUnitCode The ad unit code
 * @property {string} adId The id representing the ad we want to mark
 *
 * @alias module:pbjs.markWinningBidAsUsed
*/


owpbjs.markWinningBidAsUsed = function (markBidRequest) {
  var bids = [];

  if (markBidRequest.adUnitCode && markBidRequest.adId) {
    bids = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getBidsReceived().filter(function (bid) {
      return bid.adId === markBidRequest.adId && bid.adUnitCode === markBidRequest.adUnitCode;
    });
  } else if (markBidRequest.adUnitCode) {
    bids = __WEBPACK_IMPORTED_MODULE_6__targeting_js__["a" /* targeting */].getWinningBids(markBidRequest.adUnitCode);
  } else if (markBidRequest.adId) {
    bids = __WEBPACK_IMPORTED_MODULE_5__auctionManager_js__["a" /* auctionManager */].getBidsReceived().filter(function (bid) {
      return bid.adId === markBidRequest.adId;
    });
  } else {
    utils.logWarn('Inproper usage of markWinningBidAsUsed. It\'ll need an adUnitCode and/or adId to function.');
  }

  if (bids.length > 0) {
    bids[0].status = CONSTANTS.BID_STATUS.RENDERED;
  }
};
/**
 * Get Prebid config options
 * @param {Object} options
 * @alias module:pbjs.getConfig
 */


owpbjs.getConfig = __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].getConfig;
/**
 * Set Prebid config options.
 * (Added in version 0.27.0).
 *
 * `setConfig` is designed to allow for advanced configuration while
 * reducing the surface area of the public API.  For more information
 * about the move to `setConfig` (and the resulting deprecations of
 * some other public methods), see [the Prebid 1.0 public API
 * proposal](https://gist.github.com/mkendall07/51ee5f6b9f2df01a89162cf6de7fe5b6).
 *
 * #### Troubleshooting your configuration
 *
 * If you call `pbjs.setConfig` without an object, e.g.,
 *
 * `pbjs.setConfig('debug', 'true'))`
 *
 * then Prebid.js will print an error to the console that says:
 *
 * ```
 * ERROR: setConfig options must be an object
 * ```
 *
 * If you don't see that message, you can assume the config object is valid.
 *
 * @param {Object} options Global Prebid configuration object. Must be JSON - no JavaScript functions are allowed.
 * @param {string} options.bidderSequence The order in which bidders are called.  Example: `pbjs.setConfig({ bidderSequence: "fixed" })`.  Allowed values: `"fixed"` (order defined in `adUnit.bids` array on page), `"random"`.
 * @param {boolean} options.debug Turn debug logging on/off. Example: `pbjs.setConfig({ debug: true })`.
 * @param {string} options.priceGranularity The bid price granularity to use.  Example: `pbjs.setConfig({ priceGranularity: "medium" })`. Allowed values: `"low"` ($0.50), `"medium"` ($0.10), `"high"` ($0.01), `"auto"` (sliding scale), `"dense"` (like `"auto"`, with smaller increments at lower CPMs), or a custom price bucket object, e.g., `{ "buckets" : [{"min" : 0,"max" : 20,"increment" : 0.1,"cap" : true}]}`.
 * @param {boolean} options.enableSendAllBids Turn "send all bids" mode on/off.  Example: `pbjs.setConfig({ enableSendAllBids: true })`.
 * @param {number} options.bidderTimeout Set a global bidder timeout, in milliseconds.  Example: `pbjs.setConfig({ bidderTimeout: 3000 })`.  Note that it's still possible for a bid to get into the auction that responds after this timeout. This is due to how [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) works in JS: it queues the callback in the event loop in an approximate location that should execute after this time but it is not guaranteed.  For more information about the asynchronous event loop and `setTimeout`, see [How JavaScript Timers Work](https://johnresig.com/blog/how-javascript-timers-work/).
 * @param {string} options.publisherDomain The publisher's domain where Prebid is running, for cross-domain iFrame communication.  Example: `pbjs.setConfig({ publisherDomain: "https://www.theverge.com" })`.
 * @param {Object} options.s2sConfig The configuration object for [server-to-server header bidding](http://prebid.org/dev-docs/get-started-with-prebid-server.html).  Example:
 * @alias module:pbjs.setConfig
 * ```
 * pbjs.setConfig({
 *     s2sConfig: {
 *         accountId: '1',
 *         enabled: true,
 *         bidders: ['appnexus', 'pubmatic'],
 *         timeout: 1000,
 *         adapter: 'prebidServer',
 *         endpoint: 'https://prebid.adnxs.com/pbs/v1/auction'
 *     }
 * })
 * ```
 */

owpbjs.setConfig = __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].setConfig;
owpbjs.setBidderConfig = __WEBPACK_IMPORTED_MODULE_4__config_js__["b" /* config */].setBidderConfig;
owpbjs.que.push(function () {
  return Object(__WEBPACK_IMPORTED_MODULE_2__secureCreatives_js__["a" /* listenMessagesFromCreative */])();
});
/**
 * This queue lets users load Prebid asynchronously, but run functions the same way regardless of whether it gets loaded
 * before or after their script executes. For example, given the code:
 *
 * <script src="url/to/Prebid.js" async></script>
 * <script>
 *   var pbjs = pbjs || {};
 *   pbjs.cmd = pbjs.cmd || [];
 *   pbjs.cmd.push(functionToExecuteOncePrebidLoads);
 * </script>
 *
 * If the page's script runs before prebid loads, then their function gets added to the queue, and executed
 * by prebid once it's done loading. If it runs after prebid loads, then this monkey-patch causes their
 * function to execute immediately.
 *
 * @memberof pbjs
 * @param  {function} command A function which takes no arguments. This is guaranteed to run exactly once, and only after
 *                            the Prebid script has been fully loaded.
 * @alias module:pbjs.cmd.push
 */

owpbjs.cmd.push = function (command) {
  if (typeof command === 'function') {
    try {
      command.call();
    } catch (e) {
      utils.logError('Error processing command :', e.message, e.stack);
    }
  } else {
    utils.logError("Commands written into owpbjs.cmd.push must be wrapped in a function");
  }
};

owpbjs.que.push = owpbjs.cmd.push;

function processQueue(queue) {
  queue.forEach(function (cmd) {
    if (typeof cmd.called === 'undefined') {
      try {
        cmd.call();
        cmd.called = true;
      } catch (e) {
        utils.logError('Error processing command :', 'prebid.js', e);
      }
    }
  });
}
/**
 * @alias module:pbjs.processQueue
 */


owpbjs.processQueue = function () {
  __WEBPACK_IMPORTED_MODULE_7__hook_js__["b" /* hook */].ready();
  processQueue(owpbjs.que);
  processQueue(owpbjs.cmd);
};

/* harmony default export */ __webpack_exports__["default"] = (owpbjs);

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = registerVideoSupport;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__prebidGlobal_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);


var prebid = Object(__WEBPACK_IMPORTED_MODULE_0__prebidGlobal_js__["a" /* getGlobal */])();
/**
 * This file defines the plugin points in prebid-core for AdServer-specific functionality.
 *
 * Its main job is to expose functions for AdServer modules to append functionality to the Prebid public API.
 * For a given Ad Server with name "adServerName", these functions will only change the API in the
 * $$PREBID_GLOBAL$$.adServers[adServerName] namespace.
 */

/**
 * @typedef {Object} CachedVideoBid
 *
 * @property {string} videoCacheId The ID which can be used to retrieve this video from prebid-server.
 *   This is the same ID given to the callback in the videoCache's store function.
 */

/**
 * @function VideoAdUrlBuilder
 *
 * @param {CachedVideoBid} bid The winning Bid which the ad server should show, assuming it beats out
 *   the competition.
 *
 * @param {Object} options Options required by the Ad Server to make a valid AdServer URL.
 *   This object will have different properties depending on the specific ad server supported.
 *   For more information, see the docs inside the ad server module you're supporting.
 *
 * @return {string} A URL which can be passed into the Video player to play an ad.
 */

/**
 * @typedef {Object} VideoSupport
 *
 * @function {VideoAdUrlBuilder} buildVideoAdUrl
 */

/**
 * Enable video support for the Ad Server.
 *
 * @property {string} name The identifying name for this adserver.
 * @property {VideoSupport} videoSupport An object with the functions needed to support video in Prebid.
 */

function registerVideoSupport(name, videoSupport) {
  prebid.adServers = prebid.adServers || {};
  prebid.adServers[name] = prebid.adServers[name] || {};
  Object.keys(videoSupport).forEach(function (key) {
    if (prebid.adServers[name][key]) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])("Attempting to add an already registered function property ".concat(key, " for AdServer ").concat(name, "."));
      return;
    }

    prebid.adServers[name][key] = videoSupport[key];
  });
}

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
var document = __webpack_require__(19).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(38);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(17);
var global = __webpack_require__(19);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(63) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 63:
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(49);
var toLength = __webpack_require__(40);
var toAbsoluteIndex = __webpack_require__(95);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
__webpack_require__(66);
__webpack_require__(105);
__webpack_require__(107);
__webpack_require__(111);
__webpack_require__(114);
__webpack_require__(116);
module.exports = __webpack_require__(17).Set;


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(97)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(50)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(31);
var dPs = __webpack_require__(100);
var enumBugKeys = __webpack_require__(68);
var IE_PROTO = __webpack_require__(51)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(60)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(103).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ 68:
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 69:
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gdprDataHandler", function() { return gdprDataHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uspDataHandler", function() { return uspDataHandler; });
/* harmony export (immutable) */ __webpack_exports__["setS2STestingModule"] = setS2STestingModule;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sizeMapping_js__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__native_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adapters_bidderFactory_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ajax_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hook_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_library_fn_array_find_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_library_fn_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_library_fn_array_find_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__adUnits_js__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__refererDetection_js__ = __webpack_require__(21);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/** @module adaptermanger */












var utils = __webpack_require__(0);

var CONSTANTS = __webpack_require__(5);

var events = __webpack_require__(8);

var s2sTestingModule; // store s2sTesting module if it's loaded

var adapterManager = {};

var _bidderRegistry = adapterManager.bidderRegistry = {};

var _aliasRegistry = adapterManager.aliasRegistry = {};

var _s2sConfig = {};
__WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('s2sConfig', function (config) {
  _s2sConfig = config.s2sConfig;
});
var _analyticsRegistry = {};
/**
 * @typedef {object} LabelDescriptor
 * @property {boolean} labelAll describes whether or not this object expects all labels to match, or any label to match
 * @property {Array<string>} labels the labels listed on the bidder or adUnit
 * @property {Array<string>} activeLabels the labels specified as being active by requestBids
 */

function getBids(_ref) {
  var bidderCode = _ref.bidderCode,
      auctionId = _ref.auctionId,
      bidderRequestId = _ref.bidderRequestId,
      adUnits = _ref.adUnits,
      labels = _ref.labels,
      src = _ref.src;
  return adUnits.reduce(function (result, adUnit) {
    var _resolveStatus = Object(__WEBPACK_IMPORTED_MODULE_1__sizeMapping_js__["b" /* resolveStatus */])(Object(__WEBPACK_IMPORTED_MODULE_1__sizeMapping_js__["a" /* getLabels */])(adUnit, labels), adUnit.mediaTypes, adUnit.sizes),
        active = _resolveStatus.active,
        filteredMediaTypes = _resolveStatus.mediaTypes,
        filterResults = _resolveStatus.filterResults;

    if (!active) {
      utils.logInfo("Size mapping disabled adUnit \"".concat(adUnit.code, "\""));
    } else if (filterResults) {
      utils.logInfo("Size mapping filtered adUnit \"".concat(adUnit.code, "\" banner sizes from "), filterResults.before, 'to ', filterResults.after);
    }

    if (active) {
      result.push(adUnit.bids.filter(function (bid) {
        return bid.bidder === bidderCode;
      }).reduce(function (bids, bid) {
        var nativeParams = adUnit.nativeParams || utils.deepAccess(adUnit, 'mediaTypes.native');

        if (nativeParams) {
          bid = _extends({}, bid, {
            nativeParams: Object(__WEBPACK_IMPORTED_MODULE_2__native_js__["g" /* processNativeAdUnitParams */])(nativeParams)
          });
        }

        bid = _extends({}, bid, Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getDefinedParams"])(adUnit, ['fpd', 'mediaType', 'renderer', 'storedAuctionResponse']));

        var _resolveStatus2 = Object(__WEBPACK_IMPORTED_MODULE_1__sizeMapping_js__["b" /* resolveStatus */])(Object(__WEBPACK_IMPORTED_MODULE_1__sizeMapping_js__["a" /* getLabels */])(bid, labels), filteredMediaTypes),
            active = _resolveStatus2.active,
            mediaTypes = _resolveStatus2.mediaTypes,
            filterResults = _resolveStatus2.filterResults;

        if (!active) {
          utils.logInfo("Size mapping deactivated adUnit \"".concat(adUnit.code, "\" bidder \"").concat(bid.bidder, "\""));
        } else if (filterResults) {
          utils.logInfo("Size mapping filtered adUnit \"".concat(adUnit.code, "\" bidder \"").concat(bid.bidder, "\" banner sizes from "), filterResults.before, 'to ', filterResults.after);
        }

        if (utils.isValidMediaTypes(mediaTypes)) {
          bid = _extends({}, bid, {
            mediaTypes: mediaTypes
          });
        } else {
          utils.logError("mediaTypes is not correctly configured for adunit ".concat(adUnit.code));
        }

        if (active) {
          bids.push(_extends({}, bid, {
            adUnitCode: adUnit.code,
            transactionId: adUnit.transactionId,
            sizes: utils.deepAccess(mediaTypes, 'banner.sizes') || utils.deepAccess(mediaTypes, 'video.playerSize') || [],
            bidId: bid.bid_id || utils.getUniqueIdentifierStr(),
            bidderRequestId: bidderRequestId,
            auctionId: auctionId,
            src: src,
            bidRequestsCount: __WEBPACK_IMPORTED_MODULE_9__adUnits_js__["a" /* adunitCounter */].getRequestsCounter(adUnit.code),
            bidderRequestsCount: __WEBPACK_IMPORTED_MODULE_9__adUnits_js__["a" /* adunitCounter */].getBidderRequestsCounter(adUnit.code, bid.bidder),
            bidderWinsCount: __WEBPACK_IMPORTED_MODULE_9__adUnits_js__["a" /* adunitCounter */].getBidderWinsCounter(adUnit.code, bid.bidder)
          }));
        }

        return bids;
      }, []));
    }

    return result;
  }, []).reduce(__WEBPACK_IMPORTED_MODULE_0__utils_js__["flatten"], []).filter(function (val) {
    return val !== '';
  });
}

var hookedGetBids = Object(__WEBPACK_IMPORTED_MODULE_6__hook_js__["b" /* hook */])('sync', getBids, 'getBids');

function getAdUnitCopyForPrebidServer(adUnits) {
  var adaptersServerSide = _s2sConfig.bidders;
  var adUnitsCopy = utils.deepClone(adUnits);
  adUnitsCopy.forEach(function (adUnit) {
    // filter out client side bids
    adUnit.bids = adUnit.bids.filter(function (bid) {
      return __WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js___default()(adaptersServerSide, bid.bidder) && (!doingS2STesting() || bid.finalSource !== s2sTestingModule.CLIENT);
    }).map(function (bid) {
      bid.bid_id = utils.getUniqueIdentifierStr();
      return bid;
    });
  }); // don't send empty requests

  adUnitsCopy = adUnitsCopy.filter(function (adUnit) {
    return adUnit.bids.length !== 0;
  });
  return adUnitsCopy;
}

function getAdUnitCopyForClientAdapters(adUnits) {
  var adUnitsClientCopy = utils.deepClone(adUnits); // filter out s2s bids

  adUnitsClientCopy.forEach(function (adUnit) {
    adUnit.bids = adUnit.bids.filter(function (bid) {
      return !doingS2STesting() || bid.finalSource !== s2sTestingModule.SERVER;
    });
  }); // don't send empty requests

  adUnitsClientCopy = adUnitsClientCopy.filter(function (adUnit) {
    return adUnit.bids.length !== 0;
  });
  return adUnitsClientCopy;
}

var gdprDataHandler = {
  consentData: null,
  setConsentData: function setConsentData(consentInfo) {
    gdprDataHandler.consentData = consentInfo;
  },
  getConsentData: function getConsentData() {
    return gdprDataHandler.consentData;
  }
};
var uspDataHandler = {
  consentData: null,
  setConsentData: function setConsentData(consentInfo) {
    uspDataHandler.consentData = consentInfo;
  },
  getConsentData: function getConsentData() {
    return uspDataHandler.consentData;
  }
};
adapterManager.makeBidRequests = Object(__WEBPACK_IMPORTED_MODULE_6__hook_js__["b" /* hook */])('sync', function (adUnits, auctionStart, auctionId, cbTimeout, labels) {
  /**
   * emit and pass adunits for external modification
   * @see {@link https://github.com/prebid/Prebid.js/issues/4149|Issue}
   */
  events.emit(CONSTANTS.EVENTS.BEFORE_REQUEST_BIDS, adUnits);
  var bidRequests = [];
  var bidderCodes = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getBidderCodes"])(adUnits);

  if (__WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('bidderSequence') === __WEBPACK_IMPORTED_MODULE_5__config_js__["a" /* RANDOM */]) {
    bidderCodes = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["shuffle"])(bidderCodes);
  }

  var refererInfo = Object(__WEBPACK_IMPORTED_MODULE_10__refererDetection_js__["b" /* getRefererInfo */])();
  var clientBidderCodes = bidderCodes;
  var clientTestAdapters = [];

  if (_s2sConfig.enabled) {
    // if s2sConfig.bidderControl testing is turned on
    if (doingS2STesting()) {
      // get all adapters doing client testing
      var bidderMap = s2sTestingModule.getSourceBidderMap(adUnits);
      clientTestAdapters = bidderMap[s2sTestingModule.CLIENT];
    } // these are called on the s2s adapter


    var adaptersServerSide = _s2sConfig.bidders; // don't call these client side (unless client request is needed for testing)

    clientBidderCodes = bidderCodes.filter(function (elm) {
      return !__WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js___default()(adaptersServerSide, elm) || __WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js___default()(clientTestAdapters, elm);
    });

    var adUnitsContainServerRequests = function adUnitsContainServerRequests(adUnits) {
      return Boolean(__WEBPACK_IMPORTED_MODULE_8_core_js_library_fn_array_find_js___default()(adUnits, function (adUnit) {
        return __WEBPACK_IMPORTED_MODULE_8_core_js_library_fn_array_find_js___default()(adUnit.bids, function (bid) {
          return (bid.bidSource || _s2sConfig.bidderControl && _s2sConfig.bidderControl[bid.bidder]) && bid.finalSource === s2sTestingModule.SERVER;
        });
      }));
    };

    if (isTestingServerOnly() && adUnitsContainServerRequests(adUnits)) {
      clientBidderCodes.length = 0;
    }

    var adUnitsS2SCopy = getAdUnitCopyForPrebidServer(adUnits);
    var tid = utils.generateUUID();
    adaptersServerSide.forEach(function (bidderCode) {
      var bidderRequestId = utils.getUniqueIdentifierStr();
      var bidderRequest = {
        bidderCode: bidderCode,
        auctionId: auctionId,
        bidderRequestId: bidderRequestId,
        tid: tid,
        bids: hookedGetBids({
          bidderCode: bidderCode,
          auctionId: auctionId,
          bidderRequestId: bidderRequestId,
          'adUnits': utils.deepClone(adUnitsS2SCopy),
          labels: labels,
          src: CONSTANTS.S2S.SRC
        }),
        auctionStart: auctionStart,
        timeout: _s2sConfig.timeout,
        src: CONSTANTS.S2S.SRC,
        refererInfo: refererInfo
      };

      if (bidderRequest.bids.length !== 0) {
        bidRequests.push(bidderRequest);
      }
    }); // update the s2sAdUnits object and remove all bids that didn't pass sizeConfig/label checks from getBids()
    // this is to keep consistency and only allow bids/adunits that passed the checks to go to pbs

    adUnitsS2SCopy.forEach(function (adUnitCopy) {
      var validBids = adUnitCopy.bids.filter(function (adUnitBid) {
        return __WEBPACK_IMPORTED_MODULE_8_core_js_library_fn_array_find_js___default()(bidRequests, function (request) {
          return __WEBPACK_IMPORTED_MODULE_8_core_js_library_fn_array_find_js___default()(request.bids, function (reqBid) {
            return reqBid.bidId === adUnitBid.bid_id;
          });
        });
      });
      adUnitCopy.bids = validBids;
    });
    bidRequests.forEach(function (request) {
      request.adUnitsS2SCopy = adUnitsS2SCopy.filter(function (adUnitCopy) {
        return adUnitCopy.bids.length > 0;
      });
    });
  } // client adapters


  var adUnitsClientCopy = getAdUnitCopyForClientAdapters(adUnits);
  clientBidderCodes.forEach(function (bidderCode) {
    var bidderRequestId = utils.getUniqueIdentifierStr();
    var bidderRequest = {
      bidderCode: bidderCode,
      auctionId: auctionId,
      bidderRequestId: bidderRequestId,
      bids: hookedGetBids({
        bidderCode: bidderCode,
        auctionId: auctionId,
        bidderRequestId: bidderRequestId,
        'adUnits': utils.deepClone(adUnitsClientCopy),
        labels: labels,
        src: 'client'
      }),
      auctionStart: auctionStart,
      timeout: cbTimeout,
      refererInfo: refererInfo
    };
    var adapter = _bidderRegistry[bidderCode];

    if (!adapter) {
      utils.logError("Trying to make a request for bidder that does not exist: ".concat(bidderCode));
    }

    if (adapter && bidderRequest.bids && bidderRequest.bids.length !== 0) {
      bidRequests.push(bidderRequest);
    }
  });

  if (gdprDataHandler.getConsentData()) {
    bidRequests.forEach(function (bidRequest) {
      bidRequest['gdprConsent'] = gdprDataHandler.getConsentData();
    });
  }

  if (uspDataHandler.getConsentData()) {
    bidRequests.forEach(function (bidRequest) {
      bidRequest['uspConsent'] = uspDataHandler.getConsentData();
    });
  }

  return bidRequests;
}, 'makeBidRequests');

adapterManager.callBids = function (adUnits, bidRequests, addBidResponse, doneCb, requestCallbacks, requestBidsTimeout, onTimelyResponse) {
  if (!bidRequests.length) {
    utils.logWarn('callBids executed with no bidRequests.  Were they filtered by labels or sizing?');
    return;
  }

  var _bidRequests$reduce = bidRequests.reduce(function (partitions, bidRequest) {
    partitions[Number(typeof bidRequest.src !== 'undefined' && bidRequest.src === CONSTANTS.S2S.SRC)].push(bidRequest);
    return partitions;
  }, [[], []]),
      _bidRequests$reduce2 = _slicedToArray(_bidRequests$reduce, 2),
      clientBidRequests = _bidRequests$reduce2[0],
      serverBidRequests = _bidRequests$reduce2[1];

  if (serverBidRequests.length) {
    // s2s should get the same client side timeout as other client side requests.
    var s2sAjax = Object(__WEBPACK_IMPORTED_MODULE_4__ajax_js__["b" /* ajaxBuilder */])(requestBidsTimeout, requestCallbacks ? {
      request: requestCallbacks.request.bind(null, 's2s'),
      done: requestCallbacks.done
    } : undefined);
    var adaptersServerSide = _s2sConfig.bidders;
    var s2sAdapter = _bidderRegistry[_s2sConfig.adapter];
    var tid = serverBidRequests[0].tid;
    var adUnitsS2SCopy = serverBidRequests[0].adUnitsS2SCopy;

    if (s2sAdapter) {
      var s2sBidRequest = {
        tid: tid,
        'ad_units': adUnitsS2SCopy
      };

      if (s2sBidRequest.ad_units.length) {
        var doneCbs = serverBidRequests.map(function (bidRequest) {
          bidRequest.start = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["timestamp"])();
          return doneCb.bind(bidRequest);
        }); // only log adapters that actually have adUnit bids

        var allBidders = s2sBidRequest.ad_units.reduce(function (adapters, adUnit) {
          return adapters.concat((adUnit.bids || []).reduce(function (adapters, bid) {
            return adapters.concat(bid.bidder);
          }, []));
        }, []);
        utils.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(adaptersServerSide.filter(function (adapter) {
          return __WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js___default()(allBidders, adapter);
        }).join(','))); // fire BID_REQUESTED event for each s2s bidRequest

        serverBidRequests.forEach(function (bidRequest) {
          events.emit(CONSTANTS.EVENTS.BID_REQUESTED, bidRequest);
        }); // make bid requests

        s2sAdapter.callBids(s2sBidRequest, serverBidRequests, function (adUnitCode, bid) {
          var bidderRequest = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["getBidderRequest"])(serverBidRequests, bid.bidderCode, adUnitCode);

          if (bidderRequest) {
            addBidResponse.call(bidderRequest, adUnitCode, bid);
          }
        }, function () {
          return doneCbs.forEach(function (done) {
            return done();
          });
        }, s2sAjax);
      }
    } else {
      utils.logError('missing ' + _s2sConfig.adapter);
    }
  } // handle client adapter requests


  clientBidRequests.forEach(function (bidRequest) {
    bidRequest.start = Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__["timestamp"])(); // TODO : Do we check for bid in pool from here and skip calling adapter again ?

    var adapter = _bidderRegistry[bidRequest.bidderCode];
    utils.logMessage("CALLING BIDDER ======= ".concat(bidRequest.bidderCode));
    events.emit(CONSTANTS.EVENTS.BID_REQUESTED, bidRequest);
    var ajax = Object(__WEBPACK_IMPORTED_MODULE_4__ajax_js__["b" /* ajaxBuilder */])(requestBidsTimeout, requestCallbacks ? {
      request: requestCallbacks.request.bind(null, bidRequest.bidderCode),
      done: requestCallbacks.done
    } : undefined);
    var adapterDone = doneCb.bind(bidRequest);

    try {
      __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].runWithBidder(bidRequest.bidderCode, __WEBPACK_IMPORTED_MODULE_0__utils_js__["bind"].call(adapter.callBids, adapter, bidRequest, addBidResponse.bind(bidRequest), adapterDone, ajax, onTimelyResponse, __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].callbackWithBidder(bidRequest.bidderCode)));
    } catch (e) {
      utils.logError("".concat(bidRequest.bidderCode, " Bid Adapter emitted an uncaught error when parsing their bidRequest"), {
        e: e,
        bidRequest: bidRequest
      });
      adapterDone();
    }
  });
};

function doingS2STesting() {
  return _s2sConfig && _s2sConfig.enabled && _s2sConfig.testing && s2sTestingModule;
}

function isTestingServerOnly() {
  return Boolean(doingS2STesting() && _s2sConfig.testServerOnly);
}

;

function getSupportedMediaTypes(bidderCode) {
  var result = [];
  if (__WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js___default()(adapterManager.videoAdapters, bidderCode)) result.push('video');
  if (__WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js___default()(__WEBPACK_IMPORTED_MODULE_2__native_js__["e" /* nativeAdapters */], bidderCode)) result.push('native');
  return result;
}

adapterManager.videoAdapters = []; // added by adapterLoader for now

adapterManager.registerBidAdapter = function (bidAdaptor, bidderCode) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$supportedMediaT = _ref2.supportedMediaTypes,
      supportedMediaTypes = _ref2$supportedMediaT === void 0 ? [] : _ref2$supportedMediaT;

  if (bidAdaptor && bidderCode) {
    if (typeof bidAdaptor.callBids === 'function') {
      _bidderRegistry[bidderCode] = bidAdaptor;

      if (__WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js___default()(supportedMediaTypes, 'video')) {
        adapterManager.videoAdapters.push(bidderCode);
      }

      if (__WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js___default()(supportedMediaTypes, 'native')) {
        __WEBPACK_IMPORTED_MODULE_2__native_js__["e" /* nativeAdapters */].push(bidderCode);
      }
    } else {
      utils.logError('Bidder adaptor error for bidder code: ' + bidderCode + 'bidder must implement a callBids() function');
    }
  } else {
    utils.logError('bidAdaptor or bidderCode not specified');
  }
};

adapterManager.aliasBidAdapter = function (bidderCode, alias) {
  var existingAlias = _bidderRegistry[alias];

  if (typeof existingAlias === 'undefined') {
    var bidAdaptor = _bidderRegistry[bidderCode];

    if (typeof bidAdaptor === 'undefined') {
      // check if alias is part of s2sConfig and allow them to register if so (as base bidder may be s2s-only)
      var s2sConfig = __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].getConfig('s2sConfig');
      var s2sBidders = s2sConfig && s2sConfig.bidders;

      if (!(s2sBidders && __WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js___default()(s2sBidders, alias))) {
        utils.logError('bidderCode "' + bidderCode + '" is not an existing bidder.', 'adapterManager.aliasBidAdapter');
      } else {
        _aliasRegistry[alias] = bidderCode;
      }
    } else {
      try {
        var newAdapter;
        var supportedMediaTypes = getSupportedMediaTypes(bidderCode); // Have kept old code to support backward compatibilitiy.
        // Remove this if loop when all adapters are supporting bidderFactory. i.e When Prebid.js is 1.0

        if (bidAdaptor.constructor.prototype != Object.prototype) {
          newAdapter = new bidAdaptor.constructor();
          newAdapter.setBidderCode(alias);
        } else {
          var spec = bidAdaptor.getSpec();
          newAdapter = Object(__WEBPACK_IMPORTED_MODULE_3__adapters_bidderFactory_js__["newBidder"])(_extends({}, spec, {
            code: alias
          }));
          _aliasRegistry[alias] = bidderCode;
        }

        adapterManager.registerBidAdapter(newAdapter, alias, {
          supportedMediaTypes: supportedMediaTypes
        });
      } catch (e) {
        utils.logError(bidderCode + ' bidder does not currently support aliasing.', 'adapterManager.aliasBidAdapter');
      }
    }
  } else {
    utils.logMessage('alias name "' + alias + '" has been already specified.');
  }
};

adapterManager.registerAnalyticsAdapter = function (_ref3) {
  var adapter = _ref3.adapter,
      code = _ref3.code;

  if (adapter && code) {
    if (typeof adapter.enableAnalytics === 'function') {
      adapter.code = code;
      _analyticsRegistry[code] = adapter;
    } else {
      utils.logError("Prebid Error: Analytics adaptor error for analytics \"".concat(code, "\"\n        analytics adapter must implement an enableAnalytics() function"));
    }
  } else {
    utils.logError('Prebid Error: analyticsAdapter or analyticsCode not specified');
  }
};

adapterManager.enableAnalytics = function (config) {
  if (!utils.isArray(config)) {
    config = [config];
  }

  utils._each(config, function (adapterConfig) {
    var adapter = _analyticsRegistry[adapterConfig.provider];

    if (adapter) {
      adapter.enableAnalytics(adapterConfig);
    } else {
      utils.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(adapterConfig.provider, "."));
    }
  });
};

adapterManager.getBidAdapter = function (bidder) {
  return _bidderRegistry[bidder];
}; // the s2sTesting module is injected when it's loaded rather than being imported
// importing it causes the packager to include it even when it's not explicitly included in the build


function setS2STestingModule(module) {
  s2sTestingModule = module;
}

function tryCallBidderMethod(bidder, method, param) {
  try {
    var adapter = _bidderRegistry[bidder];
    var spec = adapter.getSpec();

    if (spec && spec[method] && typeof spec[method] === 'function') {
      utils.logInfo("Invoking ".concat(bidder, ".").concat(method));
      __WEBPACK_IMPORTED_MODULE_5__config_js__["b" /* config */].runWithBidder(bidder, __WEBPACK_IMPORTED_MODULE_0__utils_js__["bind"].call(spec[method], spec, param));
    }
  } catch (e) {
    utils.logWarn("Error calling ".concat(method, " of ").concat(bidder));
  }
}

adapterManager.callTimedOutBidders = function (adUnits, timedOutBidders, cbTimeout) {
  timedOutBidders = timedOutBidders.map(function (timedOutBidder) {
    // Adding user configured params & timeout to timeout event data
    timedOutBidder.params = utils.getUserConfiguredParams(adUnits, timedOutBidder.adUnitCode, timedOutBidder.bidder);
    timedOutBidder.timeout = cbTimeout;
    return timedOutBidder;
  });
  timedOutBidders = utils.groupBy(timedOutBidders, 'bidder');
  Object.keys(timedOutBidders).forEach(function (bidder) {
    tryCallBidderMethod(bidder, 'onTimeout', timedOutBidders[bidder]);
  });
};

adapterManager.callBidWonBidder = function (bidder, bid, adUnits) {
  // Adding user configured params to bidWon event data
  bid.params = utils.getUserConfiguredParams(adUnits, bid.adUnitCode, bid.bidder);
  __WEBPACK_IMPORTED_MODULE_9__adUnits_js__["a" /* adunitCounter */].incrementBidderWinsCounter(bid.adUnitCode, bid.bidder);
  tryCallBidderMethod(bidder, 'onBidWon', bid);
};

adapterManager.callSetTargetingBidder = function (bidder, bid) {
  tryCallBidderMethod(bidder, 'onSetTargeting', bid);
};

/* harmony default export */ __webpack_exports__["default"] = (adapterManager);

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(24);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ 71:
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(31);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(33);
var ITERATOR = __webpack_require__(14)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(75);
var ITERATOR = __webpack_require__(14)('iterator');
var Iterators = __webpack_require__(33);
module.exports = __webpack_require__(17).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(57);


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(38);
var TAG = __webpack_require__(14)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(48)('meta');
var isObject = __webpack_require__(18);
var has = __webpack_require__(32);
var setDesc = __webpack_require__(20).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(37)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
__webpack_require__(118);
module.exports = __webpack_require__(17).Array.from;


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(80);

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(123);

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * events.js
 */
var utils = __webpack_require__(0);

var CONSTANTS = __webpack_require__(5);

var slice = Array.prototype.slice;
var push = Array.prototype.push; // define entire events
// var allEvents = ['bidRequested','bidResponse','bidWon','bidTimeout'];

var allEvents = utils._map(CONSTANTS.EVENTS, function (v) {
  return v;
});

var idPaths = CONSTANTS.EVENT_ID_PATHS; // keep a record of all events fired

var eventsFired = [];

module.exports = function () {
  var _handlers = {};
  var _public = {};
  /**
   *
   * @param {String} eventString  The name of the event.
   * @param {Array} args  The payload emitted with the event.
   * @private
   */

  function _dispatch(eventString, args) {
    utils.logMessage('Emitting event for: ' + eventString);
    var eventPayload = args[0] || {};
    var idPath = idPaths[eventString];
    var key = eventPayload[idPath];
    var event = _handlers[eventString] || {
      que: []
    };

    var eventKeys = utils._map(event, function (v, k) {
      return k;
    });

    var callbacks = []; // record the event:

    eventsFired.push({
      eventType: eventString,
      args: eventPayload,
      id: key
    });
    /** Push each specific callback to the `callbacks` array.
     * If the `event` map has a key that matches the value of the
     * event payload id path, e.g. `eventPayload[idPath]`, then apply
     * each function in the `que` array as an argument to push to the
     * `callbacks` array
     * */

    if (key && utils.contains(eventKeys, key)) {
      push.apply(callbacks, event[key].que);
    }
    /** Push each general callback to the `callbacks` array. */


    push.apply(callbacks, event.que);
    /** call each of the callbacks */

    utils._each(callbacks, function (fn) {
      if (!fn) return;

      try {
        fn.apply(null, args);
      } catch (e) {
        utils.logError('Error executing handler:', 'events.js', e);
      }
    });
  }

  function _checkAvailableEvent(event) {
    return utils.contains(allEvents, event);
  }

  _public.on = function (eventString, handler, id) {
    // check whether available event or not
    if (_checkAvailableEvent(eventString)) {
      var event = _handlers[eventString] || {
        que: []
      };

      if (id) {
        event[id] = event[id] || {
          que: []
        };
        event[id].que.push(handler);
      } else {
        event.que.push(handler);
      }

      _handlers[eventString] = event;
    } else {
      utils.logError('Wrong event name : ' + eventString + ' Valid event names :' + allEvents);
    }
  };

  _public.emit = function (event) {
    var args = slice.call(arguments, 1);

    _dispatch(event, args);
  };

  _public.off = function (eventString, handler, id) {
    var event = _handlers[eventString];

    if (utils.isEmpty(event) || utils.isEmpty(event.que) && utils.isEmpty(event[id])) {
      return;
    }

    if (id && (utils.isEmpty(event[id]) || utils.isEmpty(event[id].que))) {
      return;
    }

    if (id) {
      utils._each(event[id].que, function (_handler) {
        var que = event[id].que;

        if (_handler === handler) {
          que.splice(que.indexOf(_handler), 1);
        }
      });
    } else {
      utils._each(event.que, function (_handler) {
        var que = event.que;

        if (_handler === handler) {
          que.splice(que.indexOf(_handler), 1);
        }
      });
    }

    _handlers[eventString] = event;
  };

  _public.get = function () {
    return _handlers;
  };
  /**
   * This method can return a copy of all the events fired
   * @return {Array} array of events fired
   */


  _public.getEvents = function () {
    var arrayCopy = [];

    utils._each(eventsFired, function (value) {
      var newProp = _extends({}, value);

      arrayCopy.push(newProp);
    });

    return arrayCopy;
  };

  return _public;
}();

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $Object = Object;
var $TypeError = TypeError;

module.exports = function flags() {
	if (this != null && this !== $Object(this)) {
		throw new $TypeError('RegExp.prototype.flags getter called on non-object');
	}
	var result = '';
	if (this.global) {
		result += 'g';
	}
	if (this.ignoreCase) {
		result += 'i';
	}
	if (this.multiline) {
		result += 'm';
	}
	if (this.dotAll) {
		result += 's';
	}
	if (this.unicode) {
		result += 'u';
	}
	if (this.sticky) {
		result += 'y';
	}
	return result;
};


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(81);

var supportsDescriptors = __webpack_require__(54).supportsDescriptors;
var $gOPD = Object.getOwnPropertyDescriptor;
var $TypeError = TypeError;

module.exports = function getPolyfill() {
	if (!supportsDescriptors) {
		throw new $TypeError('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	if ((/a/mig).flags === 'gim') {
		var descriptor = $gOPD(RegExp.prototype, 'flags');
		if (descriptor && typeof descriptor.get === 'function' && typeof (/a/).dotAll === 'boolean') {
			return descriptor.get;
		}
	}
	return implementation;
};


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Adapter;
function Adapter(code) {
  var bidderCode = code;

  function setBidderCode(code) {
    bidderCode = code;
  }

  function getBidderCode() {
    return bidderCode;
  }

  function callBids() {}

  return {
    callBids: callBids,
    setBidderCode: setBidderCode,
    getBidderCode: getBidderCode
  };
}

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setSizeConfig */
/* harmony export (immutable) */ __webpack_exports__["a"] = getLabels;
/* harmony export (immutable) */ __webpack_exports__["c"] = sizeSupported;
/* harmony export (immutable) */ __webpack_exports__["b"] = resolveStatus;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes_js__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




var sizeConfig = [];
/**
 * @typedef {object} SizeConfig
 *
 * @property {string} [mediaQuery] A CSS media query string that will to be interpreted by window.matchMedia.  If the
 *  media query matches then the this config will be active and sizesSupported will filter bid and adUnit sizes.  If
 *  this property is not present then this SizeConfig will only be active if triggered manually by a call to
 *  pbjs.setConfig({labels:['label']) specifying one of the labels present on this SizeConfig.
 * @property {Array<Array>} sizesSupported The sizes to be accepted if this SizeConfig is enabled.
 * @property {Array<string>} labels The active labels to match this SizeConfig to an adUnits and/or bidders.
 */

/**
 *
 * @param {Array<SizeConfig>} config
 */

function setSizeConfig(config) {
  sizeConfig = config;
}
__WEBPACK_IMPORTED_MODULE_0__config_js__["b" /* config */].getConfig('sizeConfig', function (config) {
  return setSizeConfig(config.sizeConfig);
});
/**
 * Returns object describing the status of labels on the adUnit or bidder along with labels passed into requestBids
 * @param bidOrAdUnit the bidder or adUnit to get label info on
 * @param activeLabels the labels passed to requestBids
 * @returns {LabelDescriptor}
 */

function getLabels(bidOrAdUnit, activeLabels) {
  if (bidOrAdUnit.labelAll) {
    return {
      labelAll: true,
      labels: bidOrAdUnit.labelAll,
      activeLabels: activeLabels
    };
  }

  return {
    labelAll: false,
    labels: bidOrAdUnit.labelAny,
    activeLabels: activeLabels
  };
}
/**
 * Determines whether a single size is valid given configured sizes
 * @param {Array} size [width, height]
 * @param {Array<SizeConfig>} configs
 * @returns {boolean}
 */

function sizeSupported(size) {
  var configs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : sizeConfig;
  var maps = evaluateSizeConfig(configs);

  if (!maps.shouldFilter) {
    return true;
  }

  return !!maps.sizesSupported[size];
}
/**
 * Resolves the unique set of the union of all sizes and labels that are active from a SizeConfig.mediaQuery match
 * @param {Array<string>} labels Labels specified on adUnit or bidder
 * @param {boolean} labelAll if true, all labels must match to be enabled
 * @param {Array<string>} activeLabels Labels passed in through requestBids
 * @param {object} mediaTypes A mediaTypes object describing the various media types (banner, video, native)
 * @param {Array<Array<number>>} sizes Sizes specified on adUnit (deprecated)
 * @param {Array<SizeConfig>} configs
 * @returns {{labels: Array<string>, sizes: Array<Array<number>>}}
 */

function resolveStatus() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$labels = _ref.labels,
      labels = _ref$labels === void 0 ? [] : _ref$labels,
      _ref$labelAll = _ref.labelAll,
      labelAll = _ref$labelAll === void 0 ? false : _ref$labelAll,
      _ref$activeLabels = _ref.activeLabels,
      activeLabels = _ref$activeLabels === void 0 ? [] : _ref$activeLabels;

  var mediaTypes = arguments.length > 1 ? arguments[1] : undefined;
  var sizes = arguments.length > 2 ? arguments[2] : undefined;
  var configs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : sizeConfig;
  var maps = evaluateSizeConfig(configs);

  if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["isPlainObject"])(mediaTypes)) {
    // add support for deprecated adUnit.sizes by creating correct banner mediaTypes if they don't already exist
    if (sizes) {
      mediaTypes = {
        banner: {
          sizes: sizes
        }
      };
    } else {
      mediaTypes = {};
    }
  } else {
    mediaTypes = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepClone"])(mediaTypes);
  }

  var oldSizes = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepAccess"])(mediaTypes, 'banner.sizes');

  if (maps.shouldFilter && oldSizes) {
    mediaTypes.banner.sizes = oldSizes.filter(function (size) {
      return maps.sizesSupported[size];
    });
  }

  var allMediaTypes = Object.keys(mediaTypes);
  var results = {
    active: allMediaTypes.every(function (type) {
      return type !== 'banner';
    }) || allMediaTypes.some(function (type) {
      return type === 'banner';
    }) && Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["deepAccess"])(mediaTypes, 'banner.sizes.length') > 0 && (labels.length === 0 || !labelAll && (labels.some(function (label) {
      return maps.labels[label];
    }) || labels.some(function (label) {
      return __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes_js___default()(activeLabels, label);
    })) || labelAll && labels.reduce(function (result, label) {
      return !result ? result : maps.labels[label] || __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes_js___default()(activeLabels, label);
    }, true)),
    mediaTypes: mediaTypes
  };

  if (oldSizes && oldSizes.length !== mediaTypes.banner.sizes.length) {
    results.filterResults = {
      before: oldSizes,
      after: mediaTypes.banner.sizes
    };
  }

  return results;
}

function evaluateSizeConfig(configs) {
  return configs.reduce(function (results, config) {
    if (_typeof(config) === 'object' && typeof config.mediaQuery === 'string') {
      var ruleMatch = false; // TODO: (Prebid - 4.0) Remove empty mediaQuery string check. Disallow empty mediaQuery in sizeConfig.
      // Refer: https://github.com/prebid/Prebid.js/pull/4691, https://github.com/prebid/Prebid.js/issues/4810 for more details.

      if (config.mediaQuery === '') {
        ruleMatch = true;
      } else {
        try {
          ruleMatch = Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["getWindowTop"])().matchMedia(config.mediaQuery).matches;
        } catch (e) {
          Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])('Unfriendly iFrame blocks sizeConfig from being correctly evaluated');
          ruleMatch = matchMedia(config.mediaQuery).matches;
        }
      }

      if (ruleMatch) {
        if (Array.isArray(config.sizesSupported)) {
          results.shouldFilter = true;
        }

        ['labels', 'sizesSupported'].forEach(function (type) {
          return (config[type] || []).forEach(function (thing) {
            return results[type][thing] = true;
          });
        });
      }
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["logWarn"])('sizeConfig rule missing required property "mediaQuery"');
    }

    return results;
  }, {
    labels: {},
    sizesSupported: {},
    shouldFilter: false
  });
}

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = store;
/* harmony export (immutable) */ __webpack_exports__["a"] = getCacheUrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajax_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_config_js__ = __webpack_require__(3);
/**
 * This module interacts with the server used to cache video ad content to be restored later.
 * At a high level, the expected workflow goes like this:
 *
 *   - Request video ads from Bidders
 *   - Generate IDs for each valid bid, and cache the key/value pair on the server.
 *   - Return these IDs so that publishers can use them to fetch the bids later.
 *
 * This trickery helps integrate with ad servers, which set character limits on request params.
 */


/**
 * @typedef {object} CacheableUrlBid
 * @property {string} vastUrl A URL which loads some valid VAST XML.
 */

/**
 * @typedef {object} CacheablePayloadBid
 * @property {string} vastXml Some VAST XML which loads an ad in a video player.
 */

/**
 * A CacheableBid describes the types which the videoCache can store.
 *
 * @typedef {CacheableUrlBid|CacheablePayloadBid} CacheableBid
 */

/**
 * Function which wraps a URI that serves VAST XML, so that it can be loaded.
 *
 * @param {string} uri The URI where the VAST content can be found.
 * @param {string} impUrl An impression tracker URL for the delivery of the video ad
 * @return A VAST URL which loads XML from the given URI.
 */

function wrapURI(uri, impUrl) {
  // Technically, this is vulnerable to cross-script injection by sketchy vastUrl bids.
  // We could make sure it's a valid URI... but since we're loading VAST XML from the
  // URL they provide anyway, that's probably not a big deal.
  var vastImp = impUrl ? "<![CDATA[".concat(impUrl, "]]>") : "";
  return "<VAST version=\"3.0\">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[".concat(uri, "]]></VASTAdTagURI>\n        <Impression>").concat(vastImp, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>");
}
/**
 * Wraps a bid in the format expected by the prebid-server endpoints, or returns null if
 * the bid can't be converted cleanly.
 *
 * @param {CacheableBid} bid
 */


function toStorageRequest(bid) {
  var vastValue = bid.vastXml ? bid.vastXml : wrapURI(bid.vastUrl, bid.vastImpUrl);
  /* istanbul ignore next */

  if (window && window.PWT) {
    vastValue = window.PWT.UpdateVastWithTracker(bid, vastValue);
  }

  var payload = {
    type: 'xml',
    value: vastValue,
    ttlseconds: Number(bid.ttl)
  };

  if (__WEBPACK_IMPORTED_MODULE_1__src_config_js__["b" /* config */].getConfig('cache.vasttrack')) {
    payload.bidder = bid.bidder;
    payload.bidid = bid.requestId;
  }

  if (typeof bid.customCacheKey === 'string' && bid.customCacheKey !== '') {
    payload.key = bid.customCacheKey;
  }

  return payload;
}
/**
 * A function which should be called with the results of the storage operation.
 *
 * @callback videoCacheStoreCallback
 *
 * @param {Error} [error] The error, if one occurred.
 * @param {?string[]} uuids An array of unique IDs. The array will have one element for each bid we were asked
 *   to store. It may include null elements if some of the bids were malformed, or an error occurred.
 *   Each non-null element in this array is a valid input into the retrieve function, which will fetch
 *   some VAST XML which can be used to render this bid's ad.
 */

/**
 * A function which bridges the APIs between the videoCacheStoreCallback and our ajax function's API.
 *
 * @param {videoCacheStoreCallback} done A callback to the "store" function.
 * @return {Function} A callback which interprets the cache server's responses, and makes up the right
 *   arguments for our callback.
 */


function shimStorageCallback(done) {
  return {
    success: function success(responseBody) {
      var ids;

      try {
        ids = JSON.parse(responseBody).responses;
      } catch (e) {
        done(e, []);
        return;
      }

      if (ids) {
        done(null, ids);
      } else {
        done(new Error("The cache server didn't respond with a responses property."), []);
      }
    },
    error: function error(statusText, responseBody) {
      done(new Error("Error storing video ad in the cache: ".concat(statusText, ": ").concat(JSON.stringify(responseBody))), []);
    }
  };
}
/**
 * If the given bid is for a Video ad, generate a unique ID and cache it somewhere server-side.
 *
 * @param {CacheableBid[]} bids A list of bid objects which should be cached.
 * @param {videoCacheStoreCallback} [done] An optional callback which should be executed after
 * the data has been stored in the cache.
 */


function store(bids, done) {
  var requestData = {
    puts: bids.map(toStorageRequest)
  };
  Object(__WEBPACK_IMPORTED_MODULE_0__ajax_js__["a" /* ajax */])(__WEBPACK_IMPORTED_MODULE_1__src_config_js__["b" /* config */].getConfig('cache.url'), shimStorageCallback(done), JSON.stringify(requestData), {
    contentType: 'text/plain',
    withCredentials: true
  });
}
function getCacheUrl(id) {
  return "".concat(__WEBPACK_IMPORTED_MODULE_1__src_config_js__["b" /* config */].getConfig('cache.url'), "?uuid=").concat(id);
}

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(16);
var $find = __webpack_require__(45)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(41)(KEY);


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(25) && !__webpack_require__(37)(function () {
  return Object.defineProperty(__webpack_require__(60)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return storageCallbacks; });
/* unused harmony export newStorageManager */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return validateStorageEnforcement; });
/* harmony export (immutable) */ __webpack_exports__["a"] = getCoreStorageManager;
/* harmony export (immutable) */ __webpack_exports__["b"] = getStorageManager;
/* unused harmony export resetData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hook_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes_js__);



var moduleTypeWhiteList = ['core', 'prebid-module'];
var storageCallbacks = [];
/**
 * Storage options
 * @typedef {Object} storageOptions
 * @property {Number=} gvlid - Vendor id
 * @property {string} moduleName - Module name
 * @property {string=} moduleType - Module type, value can be anyone of core or prebid-module
 */

/**
 * Returns list of storage related functions with gvlid, module name and module type in its scope.
 * All three argument are optional here. Below shows the usage of of these
 * - GVL Id: Pass GVL id if you are a vendor
 * - Module name: All modules need to pass module name
 * - Module type: Some modules may need these functions but are not vendor. e.g prebid core files in src and modules like currency.
 * @param {storageOptions} options
 */

function newStorageManager() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      gvlid = _ref.gvlid,
      moduleName = _ref.moduleName,
      moduleType = _ref.moduleType;

  function isValid(cb) {
    if (__WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_includes_js___default()(moduleTypeWhiteList, moduleType)) {
      var result = {
        valid: true
      };
      return cb(result);
    } else {
      var value;
      var hookDetails = {
        hasEnforcementHook: false
      };
      validateStorageEnforcement(gvlid, moduleName, hookDetails, function (result) {
        if (result && result.hasEnforcementHook) {
          value = cb(result);
        } else {
          var _result = {
            hasEnforcementHook: false,
            valid: __WEBPACK_IMPORTED_MODULE_1__utils_js__["hasDeviceAccess"]()
          };
          value = cb(_result);
        }
      });
      return value;
    }
  }
  /**
   * @param {string} key
   * @param {string} value
   * @param {string} [expires='']
   * @param {string} [sameSite='/']
   * @param {string} [domain] domain (e.g., 'example.com' or 'subdomain.example.com').
   * If not specified, defaults to the host portion of the current document location.
   * If a domain is specified, subdomains are always included.
   * Domain must match the domain of the JavaScript origin. Setting cookies to foreign domains will be silently ignored.
   */


  var setCookie = function setCookie(key, value, expires, sameSite, domain, done) {
    var cb = function cb(result) {
      if (result && result.valid) {
        var domainPortion = domain && domain !== '' ? " ;domain=".concat(encodeURIComponent(domain)) : '';
        var expiresPortion = expires && expires !== '' ? " ;expires=".concat(expires) : '';
        var isNone = sameSite != null && sameSite.toLowerCase() == 'none';
        var secure = isNone ? '; Secure' : '';
        document.cookie = "".concat(key, "=").concat(encodeURIComponent(value)).concat(expiresPortion, "; path=/").concat(domainPortion).concat(sameSite ? "; SameSite=".concat(sameSite) : '').concat(secure);
      }
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * @param {string} name
   * @returns {(string|null)}
   */


  var getCookie = function getCookie(name, done) {
    var cb = function cb(result) {
      if (result && result.valid) {
        var m = window.document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]*)\\s*(;|$)');
        return m ? decodeURIComponent(m[2]) : null;
      }

      return null;
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * @returns {boolean}
   */


  var localStorageIsEnabled = function localStorageIsEnabled(done) {
    var cb = function cb(result) {
      if (result && result.valid) {
        try {
          localStorage.setItem('prebid.cookieTest', '1');
          return localStorage.getItem('prebid.cookieTest') === '1';
        } catch (error) {}
      }

      return false;
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * @returns {boolean}
   */


  var cookiesAreEnabled = function cookiesAreEnabled(done) {
    var cb = function cb(result) {
      if (result && result.valid) {
        if (__WEBPACK_IMPORTED_MODULE_1__utils_js__["checkCookieSupport"]()) {
          return true;
        }

        window.document.cookie = 'prebid.cookieTest';
        return window.document.cookie.indexOf('prebid.cookieTest') !== -1;
      }

      return false;
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * @param {string} key
   * @param {string} value
   */


  var setDataInLocalStorage = function setDataInLocalStorage(key, value, done) {
    var cb = function cb(result) {
      if (result && result.valid) {
        window.localStorage.setItem(key, value);
      }
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * @param {string} key
   * @returns {(string|null)}
   */


  var getDataFromLocalStorage = function getDataFromLocalStorage(key, done) {
    var cb = function cb(result) {
      if (result && result.valid) {
        return window.localStorage.getItem(key);
      }

      return null;
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * @param {string} key
   */


  var removeDataFromLocalStorage = function removeDataFromLocalStorage(key, done) {
    var cb = function cb(result) {
      if (result && result.valid) {
        window.localStorage.removeItem(key);
      }
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * @returns {boolean}
   */


  var hasLocalStorage = function hasLocalStorage(done) {
    var cb = function cb(result) {
      if (result && result.valid) {
        try {
          return !!window.localStorage;
        } catch (e) {
          __WEBPACK_IMPORTED_MODULE_1__utils_js__["logError"]('Local storage api disabled');
        }
      }

      return false;
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };
  /**
   * Returns all cookie values from the jar whose names contain the `keyLike`
   * Needs to exist in `utils.js` as it follows the StorageHandler interface defined in live-connect-js. If that module were to be removed, this function can go as well.
   * @param {string} keyLike
   * @return {[]}
   */


  var findSimilarCookies = function findSimilarCookies(keyLike, done) {
    var cb = function cb(result) {
      if (result && result.valid) {
        var all = [];

        if (__WEBPACK_IMPORTED_MODULE_1__utils_js__["hasDeviceAccess"]()) {
          var cookies = document.cookie.split(';');

          while (cookies.length) {
            var cookie = cookies.pop();
            var separatorIndex = cookie.indexOf('=');
            separatorIndex = separatorIndex < 0 ? cookie.length : separatorIndex;
            var cookieName = decodeURIComponent(cookie.slice(0, separatorIndex).replace(/^\s+/, ''));

            if (cookieName.indexOf(keyLike) >= 0) {
              all.push(decodeURIComponent(cookie.slice(separatorIndex + 1)));
            }
          }
        }

        return all;
      }
    };

    if (done && typeof done === 'function') {
      storageCallbacks.push(function () {
        var result = isValid(cb);
        done(result);
      });
    } else {
      return isValid(cb);
    }
  };

  return {
    setCookie: setCookie,
    getCookie: getCookie,
    localStorageIsEnabled: localStorageIsEnabled,
    cookiesAreEnabled: cookiesAreEnabled,
    setDataInLocalStorage: setDataInLocalStorage,
    getDataFromLocalStorage: getDataFromLocalStorage,
    removeDataFromLocalStorage: removeDataFromLocalStorage,
    hasLocalStorage: hasLocalStorage,
    findSimilarCookies: findSimilarCookies
  };
}
/**
 * This hook validates the storage enforcement if gdprEnforcement module is included
 */

var validateStorageEnforcement = Object(__WEBPACK_IMPORTED_MODULE_0__hook_js__["b" /* hook */])('async', function (gvlid, moduleName, hookDetails, callback) {
  callback(hookDetails);
}, 'validateStorageEnforcement');
/**
 * This function returns storage functions to access cookies and localstorage. This function will bypass the gdpr enforcement requirement. Prebid as a software needs to use storage in some scenarios and is not a vendor so GDPR enforcement rules does not apply on Prebid.
 * @param {string} moduleName Module name
 */

function getCoreStorageManager(moduleName) {
  return newStorageManager({
    moduleName: moduleName,
    moduleType: 'core'
  });
}
/**
 * Note: Core modules or Prebid modules like Currency, SizeMapping should use getCoreStorageManager
 * This function returns storage functions to access cookies and localstorage. Bidders and User id modules should import this and use it in their module if needed. GVL ID and Module name are optional param but gvl id is needed for when gdpr enforcement module is used.
 * @param {Number=} gvlid Vendor id
 * @param {string=} moduleName BidderCode or module name
 */

function getStorageManager(gvlid, moduleName) {
  return newStorageManager({
    gvlid: gvlid,
    moduleName: moduleName
  });
}
function resetData() {
  storageCallbacks = [];
}

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(18);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(92);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
var isArray = __webpack_require__(93);
var SPECIES = __webpack_require__(14)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(38);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(16);
var $includes = __webpack_require__(64)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(41)('includes');


/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(47);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 96:
/***/ (function(module, exports) {



/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(47);
var defined = __webpack_require__(39);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(67);
var descriptor = __webpack_require__(44);
var setToStringTag = __webpack_require__(52);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(24)(IteratorPrototype, __webpack_require__(14)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ })

/******/ });

owpbjsChunk([285],{

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(163);


/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", function() { return spec; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_config_js__ = __webpack_require__(3);




var ADG_BIDDER_CODE = 'adgeneration';
var spec = {
  code: ADG_BIDDER_CODE,
  aliases: ['adg'],
  // short code
  supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["b" /* BANNER */], __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["c" /* NATIVE */]],

  /**
   * Determines whether or not the given bid request is valid.
   *
   * @param {BidRequest} bid The bid params to validate.
   * @return boolean True if this is a valid bid, and false otherwise.
   */
  isBidRequestValid: function isBidRequestValid(bid) {
    return !!bid.params.id;
  },

  /**
   * Make a server request from the list of BidRequests.
   *
   * @param {validBidRequests[]} - an array of bids
   * @return ServerRequest Info describing the request to the server.
   */
  buildRequests: function buildRequests(validBidRequests, bidderRequest) {
    var ADGENE_PREBID_VERSION = '1.0.1';
    var serverRequests = [];

    for (var i = 0, len = validBidRequests.length; i < len; i++) {
      var validReq = validBidRequests[i];
      var DEBUG_URL = 'https://api-test.scaleout.jp/adsv/v1';
      var URL = 'https://d.socdm.com/adsv/v1';
      var url = validReq.params.debug ? DEBUG_URL : URL;
      var data = "";
      data = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](data, 'posall', 'SSPLOC');
      var id = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["getBidIdParameter"]('id', validReq.params);
      data = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](data, 'id', id);
      data = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](data, 'sdktype', '0');
      data = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](data, 'hb', 'true');
      data = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](data, 't', 'json3');
      data = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](data, 'transactionid', validReq.transactionId);
      data = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](data, 'sizes', getSizes(validReq));
      data = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](data, 'currency', getCurrencyType());
      data = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](data, 'pbver', "3.18.0");
      data = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](data, 'sdkname', 'prebidjs');
      data = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](data, 'adapterver', ADGENE_PREBID_VERSION); // native以外にvideo等の対応が入った場合は要修正

      if (!validReq.mediaTypes || !validReq.mediaTypes.native) {
        data = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](data, 'imark', '1');
      }

      data = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](data, 'tp', bidderRequest.refererInfo.referer); // remove the trailing "&"

      if (data.lastIndexOf('&') === data.length - 1) {
        data = data.substring(0, data.length - 1);
      }

      serverRequests.push({
        method: 'GET',
        url: url,
        data: data,
        bidRequest: validBidRequests[i]
      });
    }

    return serverRequests;
  },

  /**
   * Unpack the response from the server into a list of bids.
   *
   * @param {ServerResponse} serverResponse A successful response from the server.
   * @param {BidRequest} bidRequests
   * @return {Bid[]} An array of bids which were nested inside the server.
   */
  interpretResponse: function interpretResponse(serverResponse, bidRequests) {
    var body = serverResponse.body;

    if (!body.results || body.results.length < 1) {
      return [];
    }

    var bidRequest = bidRequests.bidRequest;
    var bidResponse = {
      requestId: bidRequest.bidId,
      cpm: body.cpm || 0,
      width: body.w ? body.w : 1,
      height: body.h ? body.h : 1,
      creativeId: body.creativeid || '',
      dealId: body.dealid || '',
      currency: getCurrencyType(),
      netRevenue: true,
      ttl: body.ttl || 10
    };

    if (isNative(body)) {
      bidResponse.native = createNativeAd(body);
      bidResponse.mediaType = __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["c" /* NATIVE */];
    } else {
      // banner
      bidResponse.ad = createAd(body, bidRequest);
    }

    return [bidResponse];
  },

  /**
   * Register the user sync pixels which should be dropped after the auction.
   *
   * @param {SyncOptions} syncOptions Which user syncs are allowed?
   * @param {ServerResponse[]} serverResponses List of server's responses.
   * @return {UserSync[]} The user syncs which should be dropped.
   */
  getUserSyncs: function getUserSyncs(syncOptions, serverResponses) {
    var syncs = [];
    return syncs;
  }
};

function createAd(body, bidRequest) {
  var ad = body.ad;

  if (body.vastxml && body.vastxml.length > 0) {
    ad = "<body><div id=\"apvad-".concat(bidRequest.bidId, "\"></div>").concat(createAPVTag()).concat(insertVASTMethod(bidRequest.bidId, body.vastxml), "</body>");
  }

  ad = appendChildToBody(ad, body.beacon);
  if (removeWrapper(ad)) return removeWrapper(ad);
  return ad;
}

function isNative(body) {
  if (!body) return false;
  return body.native_ad && body.native_ad.assets.length > 0;
}

function createNativeAd(body) {
  var native = {};

  if (body.native_ad && body.native_ad.assets.length > 0) {
    var assets = body.native_ad.assets;

    for (var i = 0, len = assets.length; i < len; i++) {
      switch (assets[i].id) {
        case 1:
          native.title = assets[i].title.text;
          break;

        case 2:
          native.image = {
            url: assets[i].img.url,
            height: assets[i].img.h,
            width: assets[i].img.w
          };
          break;

        case 3:
          native.icon = {
            url: assets[i].img.url,
            height: assets[i].img.h,
            width: assets[i].img.w
          };
          break;

        case 4:
          native.sponsoredBy = assets[i].data.value;
          break;

        case 5:
          native.body = assets[i].data.value;
          break;

        case 6:
          native.cta = assets[i].data.value;
          break;

        case 502:
          native.privacyLink = encodeURIComponent(assets[i].data.value);
          break;
      }
    }

    native.clickUrl = body.native_ad.link.url;
    native.clickTrackers = body.native_ad.link.clicktrackers || [];
    native.impressionTrackers = body.native_ad.imptrackers || [];

    if (body.beaconurl && body.beaconurl != '') {
      native.impressionTrackers.push(body.beaconurl);
    }
  }

  return native;
}

function appendChildToBody(ad, data) {
  return ad.replace(/<\/\s?body>/, "".concat(data, "</body>"));
}

function createAPVTag() {
  var APVURL = 'https://cdn.apvdr.com/js/VideoAd.min.js';
  var apvScript = document.createElement('script');
  apvScript.type = 'text/javascript';
  apvScript.id = 'apv';
  apvScript.src = APVURL;
  return apvScript.outerHTML;
}

function insertVASTMethod(targetId, vastXml) {
  var apvVideoAdParam = {
    s: targetId
  };
  var script = document.createElement("script");
  script.type = 'text/javascript';
  script.innerHTML = "(function(){ new APV.VideoAd(".concat(JSON.stringify(apvVideoAdParam), ").load('").concat(vastXml.replace(/\r?\n/g, ''), "'); })();");
  return script.outerHTML;
}
/**
 *
 * @param ad
 */


function removeWrapper(ad) {
  var bodyIndex = ad.indexOf('<body>');
  var lastBodyIndex = ad.lastIndexOf('</body>');
  if (bodyIndex === -1 || lastBodyIndex === -1) return false;
  return ad.substr(bodyIndex, lastBodyIndex).replace('<body>', '').replace('</body>', '');
}
/**
 * request
 * @param validReq request
 * @returns {?string} 300x250,320x50...
 */


function getSizes(validReq) {
  var sizes = validReq.sizes;
  if (!sizes || sizes.length < 1) return null;
  var sizesStr = '';

  for (var i in sizes) {
    var size = sizes[i];
    if (size.length !== 2) return null;
    sizesStr += "".concat(size[0], "x").concat(size[1], ",");
  }

  if (sizesStr || sizesStr.lastIndexOf(',') === sizesStr.length - 1) {
    sizesStr = sizesStr.substring(0, sizesStr.length - 1);
  }

  return sizesStr;
}
/**
 * @return {?string} USD or JPY
 */


function getCurrencyType() {
  if (__WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('currency.adServerCurrency') && __WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('currency.adServerCurrency').toUpperCase() === 'USD') return 'USD';
  return 'JPY';
}

Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__["registerBidder"])(spec);

/***/ })

},[162]);

owpbjsChunk([258],{

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(232);


/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", function() { return spec; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Renderer_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_adapters_bidderFactory_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_auctionManager_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_find_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_find_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_video_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_storageManager_js__ = __webpack_require__(9);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }











var BIDDER_CODE = 'appnexus';
var URL = 'https://ib.adnxs.com/ut/v3/prebid';
var VIDEO_TARGETING = ['id', 'mimes', 'minduration', 'maxduration', 'startdelay', 'skippable', 'playback_method', 'frameworks'];
var USER_PARAMS = ['age', 'externalUid', 'segments', 'gender', 'dnt', 'language'];
var APP_DEVICE_PARAMS = ['geo', 'device_id']; // appid is collected separately

var DEBUG_PARAMS = ['enabled', 'dongle', 'member_id', 'debug_timeout'];
var NATIVE_MAPPING = {
  body: 'description',
  body2: 'desc2',
  cta: 'ctatext',
  image: {
    serverName: 'main_image',
    requiredParams: {
      required: true
    }
  },
  icon: {
    serverName: 'icon',
    requiredParams: {
      required: true
    }
  },
  sponsoredBy: 'sponsored_by',
  privacyLink: 'privacy_link',
  salePrice: 'saleprice',
  displayUrl: 'displayurl'
};
var SOURCE = 'pbjs';
var MAX_IMPS_PER_REQUEST = 15;
var mappingFileUrl = 'https://acdn.adnxs.com/prebid/appnexus-mapping/mappings.json';
var SCRIPT_TAG_START = '<script';
var VIEWABILITY_URL_START = /\/\/cdn\.adnxs\.com\/v/;
var VIEWABILITY_FILE_NAME = 'trk.js';
var GVLID = 32;
var storage = Object(__WEBPACK_IMPORTED_MODULE_9__src_storageManager_js__["b" /* getStorageManager */])(GVLID, BIDDER_CODE);
var spec = {
  code: BIDDER_CODE,
  gvlid: GVLID,
  aliases: ['appnexusAst', 'brealtime', 'emxdigital', 'pagescience', 'defymedia', 'gourmetads', 'matomy', 'featureforward', 'oftmedia', 'districtm', 'adasta', 'beintoo'],
  supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["b" /* BANNER */], __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["d" /* VIDEO */], __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]],

  /**
   * Determines whether or not the given bid request is valid.
   *
   * @param {object} bid The bid to validate.
   * @return boolean True if this is a valid bid, and false otherwise.
   */
  isBidRequestValid: function isBidRequestValid(bid) {
    return !!(bid.params.placementId || bid.params.member && bid.params.invCode);
  },

  /**
   * Make a server request from the list of BidRequests.
   *
   * @param {BidRequest[]} bidRequests A non-empty list of bid requests which should be sent to the Server.
   * @return ServerRequest Info describing the request to the server.
   */
  buildRequests: function buildRequests(bidRequests, bidderRequest) {
    var tags = bidRequests.map(bidToTag);
    var userObjBid = __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_find_js___default()(bidRequests, hasUserInfo);
    var userObj = {};

    if (__WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('coppa') === true) {
      userObj = {
        'coppa': true
      };
    }

    if (userObjBid) {
      Object.keys(userObjBid.params.user).filter(function (param) {
        return __WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js___default()(USER_PARAMS, param);
      }).forEach(function (param) {
        var uparam = __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["convertCamelToUnderscore"](param);
        userObj[uparam] = userObjBid.params.user[param];
      });
    }

    var appDeviceObjBid = __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_find_js___default()(bidRequests, hasAppDeviceInfo);
    var appDeviceObj;

    if (appDeviceObjBid && appDeviceObjBid.params && appDeviceObjBid.params.app) {
      appDeviceObj = {};
      Object.keys(appDeviceObjBid.params.app).filter(function (param) {
        return __WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js___default()(APP_DEVICE_PARAMS, param);
      }).forEach(function (param) {
        return appDeviceObj[param] = appDeviceObjBid.params.app[param];
      });
    }

    var appIdObjBid = __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_find_js___default()(bidRequests, hasAppId);
    var appIdObj;

    if (appIdObjBid && appIdObjBid.params && appDeviceObjBid.params.app && appDeviceObjBid.params.app.id) {
      appIdObj = {
        appid: appIdObjBid.params.app.id
      };
    }

    var debugObj = {};
    var debugObjParams = {};
    var debugCookieName = 'apn_prebid_debug';
    var debugCookie = storage.getCookie(debugCookieName) || null;

    if (debugCookie) {
      try {
        debugObj = JSON.parse(debugCookie);
      } catch (e) {
        __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["logError"]('AppNexus Debug Auction Cookie Error:\n\n' + e);
      }
    } else {
      var debugBidRequest = __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_find_js___default()(bidRequests, hasDebug);

      if (debugBidRequest && debugBidRequest.debug) {
        debugObj = debugBidRequest.debug;
      }
    }

    if (debugObj && debugObj.enabled) {
      Object.keys(debugObj).filter(function (param) {
        return __WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js___default()(DEBUG_PARAMS, param);
      }).forEach(function (param) {
        debugObjParams[param] = debugObj[param];
      });
    }

    var memberIdBid = __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_find_js___default()(bidRequests, hasMemberId);
    var member = memberIdBid ? parseInt(memberIdBid.params.member, 10) : 0;
    var schain = bidRequests[0].schain;
    var payload = {
      tags: _toConsumableArray(tags),
      user: userObj,
      sdk: {
        source: SOURCE,
        version: "3.18.0"
      },
      schain: schain
    };

    if (member > 0) {
      payload.member_id = member;
    }

    if (appDeviceObjBid) {
      payload.device = appDeviceObj;
    }

    if (appIdObjBid) {
      payload.app = appIdObj;
    }

    if (__WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('adpod.brandCategoryExclusion')) {
      payload.brand_category_uniqueness = true;
    }

    if (debugObjParams.enabled) {
      payload.debug = debugObjParams;
      __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["logInfo"]('AppNexus Debug Auction Settings:\n\n' + JSON.stringify(debugObjParams, null, 4));
    }

    if (bidderRequest && bidderRequest.gdprConsent) {
      // note - objects for impbus use underscore instead of camelCase
      payload.gdpr_consent = {
        consent_string: bidderRequest.gdprConsent.consentString,
        consent_required: bidderRequest.gdprConsent.gdprApplies
      };
    }

    if (bidderRequest && bidderRequest.uspConsent) {
      payload.us_privacy = bidderRequest.uspConsent;
    }

    if (bidderRequest && bidderRequest.refererInfo) {
      var refererinfo = {
        rd_ref: encodeURIComponent(bidderRequest.refererInfo.referer),
        rd_top: bidderRequest.refererInfo.reachedTop,
        rd_ifs: bidderRequest.refererInfo.numIframes,
        rd_stk: bidderRequest.refererInfo.stack.map(function (url) {
          return encodeURIComponent(url);
        }).join(',')
      };
      payload.referrer_detection = refererinfo;
    }

    var hasAdPodBid = __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_find_js___default()(bidRequests, hasAdPod);

    if (hasAdPodBid) {
      bidRequests.filter(hasAdPod).forEach(function (adPodBid) {
        var adPodTags = createAdPodRequest(tags, adPodBid); // don't need the original adpod placement because it's in adPodTags

        var nonPodTags = payload.tags.filter(function (tag) {
          return tag.uuid !== adPodBid.bidId;
        });
        payload.tags = [].concat(_toConsumableArray(nonPodTags), _toConsumableArray(adPodTags));
      });
    }

    var criteoId = __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["deepAccess"](bidRequests[0], "userId.criteoId");

    if (criteoId) {
      var tpuids = [];
      tpuids.push({
        'provider': 'criteo',
        'user_id': criteoId
      });
      payload.tpuids = tpuids;
    }

    var request = formatRequest(payload, bidderRequest);
    return request;
  },

  /**
   * Unpack the response from the server into a list of bids.
   *
   * @param {*} serverResponse A successful response from the server.
   * @return {Bid[]} An array of bids which were nested inside the server.
   */
  interpretResponse: function interpretResponse(serverResponse, _ref) {
    var _this = this;

    var bidderRequest = _ref.bidderRequest;
    serverResponse = serverResponse.body;
    var bids = [];

    if (!serverResponse || serverResponse.error) {
      var errorMessage = "in response for ".concat(bidderRequest.bidderCode, " adapter");

      if (serverResponse && serverResponse.error) {
        errorMessage += ": ".concat(serverResponse.error);
      }

      __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["logError"](errorMessage);
      return bids;
    }

    if (serverResponse.tags) {
      serverResponse.tags.forEach(function (serverBid) {
        var rtbBid = getRtbBid(serverBid);

        if (rtbBid) {
          if (rtbBid.cpm !== 0 && __WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js___default()(_this.supportedMediaTypes, rtbBid.ad_type)) {
            var bid = newBid(serverBid, rtbBid, bidderRequest);
            bid.mediaType = parseMediaType(rtbBid);
            bids.push(bid);
          }
        }
      });
    }

    if (serverResponse.debug && serverResponse.debug.debug_info) {
      var debugHeader = 'AppNexus Debug Auction for Prebid\n\n';
      var debugText = debugHeader + serverResponse.debug.debug_info;
      debugText = debugText.replace(/(<td>|<th>)/gm, '\t') // Tables
      .replace(/(<\/td>|<\/th>)/gm, '\n') // Tables
      .replace(/^<br>/gm, '') // Remove leading <br>
      .replace(/(<br>\n|<br>)/gm, '\n') // <br>
      .replace(/<h1>(.*)<\/h1>/gm, '\n\n===== $1 =====\n\n') // Header H1
      .replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, '\n\n*** $1 ***\n\n') // Headers
      .replace(/(<([^>]+)>)/igm, ''); // Remove any other tags

      __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["logMessage"]('https://console.appnexus.com/docs/understanding-the-debug-auction');
      __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["logMessage"](debugText);
    }

    return bids;
  },

  /**
   * @typedef {Object} mappingFileInfo
   * @property {string} url  mapping file json url
   * @property {number} refreshInDays prebid stores mapping data in localstorage so you can return in how many days you want to update value stored in localstorage.
   * @property {string} localStorageKey unique key to store your mapping json in localstorage
   */

  /**
   * Returns mapping file info. This info will be used by bidderFactory to preload mapping file and store data in local storage
   * @returns {mappingFileInfo}
   */
  getMappingFileInfo: function getMappingFileInfo() {
    return {
      url: mappingFileUrl,
      refreshInDays: 7
    };
  },
  getUserSyncs: function getUserSyncs(syncOptions) {
    if (syncOptions.iframeEnabled) {
      return [{
        type: 'iframe',
        url: 'https://acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html'
      }];
    }
  },
  transformBidParams: function transformBidParams(params, isOpenRtb) {
    params = __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["convertTypes"]({
      'member': 'string',
      'invCode': 'string',
      'placementId': 'number',
      'keywords': __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["transformBidderParamKeywords"]
    }, params);

    if (isOpenRtb) {
      params.use_pmt_rule = typeof params.usePaymentRule === 'boolean' ? params.usePaymentRule : false;

      if (params.usePaymentRule) {
        delete params.usePaymentRule;
      }

      if (isPopulatedArray(params.keywords)) {
        params.keywords.forEach(deleteValues);
      }

      Object.keys(params).forEach(function (paramKey) {
        var convertedKey = __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["convertCamelToUnderscore"](paramKey);

        if (convertedKey !== paramKey) {
          params[convertedKey] = params[paramKey];
          delete params[paramKey];
        }
      });
    }

    return params;
  },

  /**
   * Add element selector to javascript tracker to improve native viewability
   * @param {Bid} bid
   */
  onBidWon: function onBidWon(bid) {
    if (bid.native) {
      reloadViewabilityScriptWithCorrectParameters(bid);
    }
  }
};

function isPopulatedArray(arr) {
  return !!(__WEBPACK_IMPORTED_MODULE_1__src_utils_js__["isArray"](arr) && arr.length > 0);
}

function deleteValues(keyPairObj) {
  if (isPopulatedArray(keyPairObj.value) && keyPairObj.value[0] === '') {
    delete keyPairObj.value;
  }
}

function reloadViewabilityScriptWithCorrectParameters(bid) {
  var viewJsPayload = getAppnexusViewabilityScriptFromJsTrackers(bid.native.javascriptTrackers);

  if (viewJsPayload) {
    var prebidParams = 'pbjs_adid=' + bid.adId + ';pbjs_auc=' + bid.adUnitCode;
    var jsTrackerSrc = getViewabilityScriptUrlFromPayload(viewJsPayload);
    var newJsTrackerSrc = jsTrackerSrc.replace('dom_id=%native_dom_id%', prebidParams); // find iframe containing script tag

    var frameArray = document.getElementsByTagName('iframe'); // boolean var to modify only one script. That way if there are muliple scripts,
    // they won't all point to the same creative.

    var modifiedAScript = false; // first, loop on all ifames

    for (var i = 0; i < frameArray.length && !modifiedAScript; i++) {
      var currentFrame = frameArray[i];

      try {
        // IE-compatible, see https://stackoverflow.com/a/3999191/2112089
        var nestedDoc = currentFrame.contentDocument || currentFrame.contentWindow.document;

        if (nestedDoc) {
          // if the doc is present, we look for our jstracker
          var scriptArray = nestedDoc.getElementsByTagName('script');

          for (var j = 0; j < scriptArray.length && !modifiedAScript; j++) {
            var currentScript = scriptArray[j];

            if (currentScript.getAttribute('data-src') == jsTrackerSrc) {
              currentScript.setAttribute('src', newJsTrackerSrc);
              currentScript.setAttribute('data-src', '');

              if (currentScript.removeAttribute) {
                currentScript.removeAttribute('data-src');
              }

              modifiedAScript = true;
            }
          }
        }
      } catch (exception) {
        // trying to access a cross-domain iframe raises a SecurityError
        // this is expected and ignored
        if (!(exception instanceof DOMException && exception.name === 'SecurityError')) {
          // all other cases are raised again to be treated by the calling function
          throw exception;
        }
      }
    }
  }
}

function strIsAppnexusViewabilityScript(str) {
  var regexMatchUrlStart = str.match(VIEWABILITY_URL_START);
  var viewUrlStartInStr = regexMatchUrlStart != null && regexMatchUrlStart.length >= 1;
  var regexMatchFileName = str.match(VIEWABILITY_FILE_NAME);
  var fileNameInStr = regexMatchFileName != null && regexMatchFileName.length >= 1;
  return str.startsWith(SCRIPT_TAG_START) && fileNameInStr && viewUrlStartInStr;
}

function getAppnexusViewabilityScriptFromJsTrackers(jsTrackerArray) {
  var viewJsPayload;

  if (__WEBPACK_IMPORTED_MODULE_1__src_utils_js__["isStr"](jsTrackerArray) && strIsAppnexusViewabilityScript(jsTrackerArray)) {
    viewJsPayload = jsTrackerArray;
  } else if (__WEBPACK_IMPORTED_MODULE_1__src_utils_js__["isArray"](jsTrackerArray)) {
    for (var i = 0; i < jsTrackerArray.length; i++) {
      var currentJsTracker = jsTrackerArray[i];

      if (strIsAppnexusViewabilityScript(currentJsTracker)) {
        viewJsPayload = currentJsTracker;
      }
    }
  }

  return viewJsPayload;
}

function getViewabilityScriptUrlFromPayload(viewJsPayload) {
  // extracting the content of the src attribute
  // -> substring between src=" and "
  var indexOfFirstQuote = viewJsPayload.indexOf('src="') + 5; // offset of 5: the length of 'src=' + 1

  var indexOfSecondQuote = viewJsPayload.indexOf('"', indexOfFirstQuote);
  var jsTrackerSrc = viewJsPayload.substring(indexOfFirstQuote, indexOfSecondQuote);
  return jsTrackerSrc;
}

function hasPurpose1Consent(bidderRequest) {
  var result = true;

  if (bidderRequest && bidderRequest.gdprConsent) {
    if (bidderRequest.gdprConsent.gdprApplies && bidderRequest.gdprConsent.apiVersion === 2) {
      result = !!(__WEBPACK_IMPORTED_MODULE_1__src_utils_js__["deepAccess"](bidderRequest.gdprConsent, 'vendorData.purpose.consents.1') === true);
    }
  }

  return result;
}

function formatRequest(payload, bidderRequest) {
  var request = [];
  var options = {};

  if (!hasPurpose1Consent(bidderRequest)) {
    options = {
      withCredentials: false
    };
  }

  if (payload.tags.length > MAX_IMPS_PER_REQUEST) {
    var clonedPayload = __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["deepClone"](payload);
    __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["chunk"](payload.tags, MAX_IMPS_PER_REQUEST).forEach(function (tags) {
      clonedPayload.tags = tags;
      var payloadString = JSON.stringify(clonedPayload);
      request.push({
        method: 'POST',
        url: URL,
        data: payloadString,
        bidderRequest: bidderRequest,
        options: options
      });
    });
  } else {
    var payloadString = JSON.stringify(payload);
    request = {
      method: 'POST',
      url: URL,
      data: payloadString,
      bidderRequest: bidderRequest,
      options: options
    };
  }

  return request;
}

function newRenderer(adUnitCode, rtbBid) {
  var rendererOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var renderer = __WEBPACK_IMPORTED_MODULE_0__src_Renderer_js__["a" /* Renderer */].install({
    id: rtbBid.renderer_id,
    url: rtbBid.renderer_url,
    config: rendererOptions,
    loaded: false,
    adUnitCode: adUnitCode
  });

  try {
    renderer.setRender(outstreamRender);
  } catch (err) {
    __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["logWarn"]('Prebid Error calling setRender on renderer', err);
  }

  renderer.setEventHandlers({
    impression: function impression() {
      return __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["logMessage"]('AppNexus outstream video impression event');
    },
    loaded: function loaded() {
      return __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["logMessage"]('AppNexus outstream video loaded event');
    },
    ended: function ended() {
      __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["logMessage"]('AppNexus outstream renderer video event');
      document.querySelector("#".concat(adUnitCode)).style.display = 'none';
    }
  });
  return renderer;
}
/**
 * Unpack the Server's Bid into a Prebid-compatible one.
 * @param serverBid
 * @param rtbBid
 * @param bidderRequest
 * @return Bid
 */


function newBid(serverBid, rtbBid, bidderRequest) {
  var bidRequest = __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["getBidRequest"](serverBid.uuid, [bidderRequest]);
  var bid = {
    requestId: serverBid.uuid,
    cpm: rtbBid.cpm,
    creativeId: rtbBid.creative_id,
    dealId: rtbBid.deal_id,
    currency: 'USD',
    netRevenue: true,
    ttl: 300,
    adUnitCode: bidRequest.adUnitCode,
    appnexus: {
      buyerMemberId: rtbBid.buyer_member_id,
      dealPriority: rtbBid.deal_priority,
      dealCode: rtbBid.deal_code
    }
  };

  if (rtbBid.advertiser_id) {
    bid.meta = _extends({}, bid.meta, {
      advertiserId: rtbBid.advertiser_id
    });
  }

  if (rtbBid.rtb.video) {
    // shared video properties used for all 3 contexts
    _extends(bid, {
      width: rtbBid.rtb.video.player_width,
      height: rtbBid.rtb.video.player_height,
      vastImpUrl: rtbBid.notify_url,
      ttl: 3600
    });

    var videoContext = __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["deepAccess"](bidRequest, 'mediaTypes.video.context');

    switch (videoContext) {
      case __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["a" /* ADPOD */]:
        var iabSubCatId = Object(__WEBPACK_IMPORTED_MODULE_3__src_adapters_bidderFactory_js__["getIabSubCategory"])(bidRequest.bidder, rtbBid.brand_category_id);
        bid.meta = _extends({}, bid.meta, {
          iabSubCatId: iabSubCatId
        });
        var dealTier = rtbBid.deal_priority;
        bid.video = {
          context: __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["a" /* ADPOD */],
          durationSeconds: Math.floor(rtbBid.rtb.video.duration_ms / 1000),
          dealTier: dealTier
        };
        bid.vastUrl = rtbBid.rtb.video.asset_url;
        break;

      case __WEBPACK_IMPORTED_MODULE_8__src_video_js__["b" /* OUTSTREAM */]:
        bid.adResponse = serverBid;
        bid.adResponse.ad = bid.adResponse.ads[0];
        bid.adResponse.ad.video = bid.adResponse.ad.rtb.video;
        bid.vastXml = rtbBid.rtb.video.content;

        if (rtbBid.renderer_url) {
          var videoBid = __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_find_js___default()(bidderRequest.bids, function (bid) {
            return bid.bidId === serverBid.uuid;
          });
          var rendererOptions = __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["deepAccess"](videoBid, 'renderer.options');
          bid.renderer = newRenderer(bid.adUnitCode, rtbBid, rendererOptions);
        }

        break;

      case __WEBPACK_IMPORTED_MODULE_8__src_video_js__["a" /* INSTREAM */]:
        bid.vastUrl = rtbBid.notify_url + '&redir=' + encodeURIComponent(rtbBid.rtb.video.asset_url);
        break;
    }
  } else if (rtbBid.rtb[__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]]) {
    var nativeAd = rtbBid.rtb[__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]]; // setting up the jsTracker:
    // we put it as a data-src attribute so that the tracker isn't called
    // until we have the adId (see onBidWon)

    var jsTrackerDisarmed = rtbBid.viewability.config.replace('src=', 'data-src=');
    var jsTrackers = nativeAd.javascript_trackers;

    if (jsTrackers == undefined) {
      jsTrackers = jsTrackerDisarmed;
    } else if (__WEBPACK_IMPORTED_MODULE_1__src_utils_js__["isStr"](jsTrackers)) {
      jsTrackers = [jsTrackers, jsTrackerDisarmed];
    } else {
      jsTrackers.push(jsTrackerDisarmed);
    }

    bid[__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]] = {
      title: nativeAd.title,
      body: nativeAd.desc,
      body2: nativeAd.desc2,
      cta: nativeAd.ctatext,
      rating: nativeAd.rating,
      sponsoredBy: nativeAd.sponsored,
      privacyLink: nativeAd.privacy_link,
      address: nativeAd.address,
      downloads: nativeAd.downloads,
      likes: nativeAd.likes,
      phone: nativeAd.phone,
      price: nativeAd.price,
      salePrice: nativeAd.saleprice,
      clickUrl: nativeAd.link.url,
      displayUrl: nativeAd.displayurl,
      clickTrackers: nativeAd.link.click_trackers,
      impressionTrackers: nativeAd.impression_trackers,
      javascriptTrackers: jsTrackers
    };

    if (nativeAd.main_img) {
      bid['native'].image = {
        url: nativeAd.main_img.url,
        height: nativeAd.main_img.height,
        width: nativeAd.main_img.width
      };
    }

    if (nativeAd.icon) {
      bid['native'].icon = {
        url: nativeAd.icon.url,
        height: nativeAd.icon.height,
        width: nativeAd.icon.width
      };
    }
  } else {
    _extends(bid, {
      width: rtbBid.rtb.banner.width,
      height: rtbBid.rtb.banner.height,
      ad: rtbBid.rtb.banner.content
    });

    try {
      var url = rtbBid.rtb.trackers[0].impression_urls[0];
      var tracker = __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["createTrackPixelHtml"](url);
      bid.ad += tracker;
    } catch (error) {
      __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["logError"]('Error appending tracking pixel', error);
    }
  }

  return bid;
}

function bidToTag(bid) {
  var tag = {};
  tag.sizes = transformSizes(bid.sizes);
  tag.primary_size = tag.sizes[0];
  tag.ad_types = [];
  tag.uuid = bid.bidId;

  if (bid.params.placementId) {
    tag.id = parseInt(bid.params.placementId, 10);
  } else {
    tag.code = bid.params.invCode;
  }

  tag.allow_smaller_sizes = bid.params.allowSmallerSizes || false;
  tag.use_pmt_rule = bid.params.usePaymentRule || false;
  tag.prebid = true;
  tag.disable_psa = true;

  if (bid.params.reserve) {
    tag.reserve = bid.params.reserve;
  }

  if (bid.params.position) {
    tag.position = {
      'above': 1,
      'below': 2
    }[bid.params.position] || 0;
  }

  if (bid.params.trafficSourceCode) {
    tag.traffic_source_code = bid.params.trafficSourceCode;
  }

  if (bid.params.privateSizes) {
    tag.private_sizes = transformSizes(bid.params.privateSizes);
  }

  if (bid.params.supplyType) {
    tag.supply_type = bid.params.supplyType;
  }

  if (bid.params.pubClick) {
    tag.pubclick = bid.params.pubClick;
  }

  if (bid.params.extInvCode) {
    tag.ext_inv_code = bid.params.extInvCode;
  }

  if (bid.params.externalImpId) {
    tag.external_imp_id = bid.params.externalImpId;
  }

  if (!__WEBPACK_IMPORTED_MODULE_1__src_utils_js__["isEmpty"](bid.params.keywords)) {
    var keywords = __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["transformBidderParamKeywords"](bid.params.keywords);

    if (keywords.length > 0) {
      keywords.forEach(deleteValues);
    }

    tag.keywords = keywords;
  }

  if (bid.mediaType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */] || __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["deepAccess"](bid, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]))) {
    tag.ad_types.push(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]);

    if (tag.sizes.length === 0) {
      tag.sizes = transformSizes([1, 1]);
    }

    if (bid.nativeParams) {
      var nativeRequest = buildNativeRequest(bid.nativeParams);
      tag[__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]] = {
        layouts: [nativeRequest]
      };
    }
  }

  var videoMediaType = __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["deepAccess"](bid, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["d" /* VIDEO */]));
  var context = __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["deepAccess"](bid, 'mediaTypes.video.context');

  if (videoMediaType && context === 'adpod') {
    tag.hb_source = 7;
  } else {
    tag.hb_source = 1;
  }

  if (bid.mediaType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["d" /* VIDEO */] || videoMediaType) {
    tag.ad_types.push(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["d" /* VIDEO */]);
  } // instream gets vastUrl, outstream gets vastXml


  if (bid.mediaType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["d" /* VIDEO */] || videoMediaType && context !== 'outstream') {
    tag.require_asset_url = true;
  }

  if (bid.params.video) {
    tag.video = {}; // place any valid video params on the tag

    Object.keys(bid.params.video).filter(function (param) {
      return __WEBPACK_IMPORTED_MODULE_7_core_js_library_fn_array_includes_js___default()(VIDEO_TARGETING, param);
    }).forEach(function (param) {
      return tag.video[param] = bid.params.video[param];
    });
  }

  if (bid.renderer) {
    tag.video = _extends({}, tag.video, {
      custom_renderer_present: true
    });
  }

  var adUnit = __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_find_js___default()(__WEBPACK_IMPORTED_MODULE_5__src_auctionManager_js__["a" /* auctionManager */].getAdUnits(), function (au) {
    return bid.transactionId === au.transactionId;
  });

  if (adUnit && adUnit.mediaTypes && adUnit.mediaTypes.banner) {
    tag.ad_types.push(__WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["b" /* BANNER */]);
  }

  if (tag.ad_types.length === 0) {
    delete tag.ad_types;
  }

  return tag;
}
/* Turn bid request sizes into ut-compatible format */


function transformSizes(requestSizes) {
  var sizes = [];
  var sizeObj = {};

  if (__WEBPACK_IMPORTED_MODULE_1__src_utils_js__["isArray"](requestSizes) && requestSizes.length === 2 && !__WEBPACK_IMPORTED_MODULE_1__src_utils_js__["isArray"](requestSizes[0])) {
    sizeObj.width = parseInt(requestSizes[0], 10);
    sizeObj.height = parseInt(requestSizes[1], 10);
    sizes.push(sizeObj);
  } else if (_typeof(requestSizes) === 'object') {
    for (var i = 0; i < requestSizes.length; i++) {
      var size = requestSizes[i];
      sizeObj = {};
      sizeObj.width = parseInt(size[0], 10);
      sizeObj.height = parseInt(size[1], 10);
      sizes.push(sizeObj);
    }
  }

  return sizes;
}

function hasUserInfo(bid) {
  return !!bid.params.user;
}

function hasMemberId(bid) {
  return !!parseInt(bid.params.member, 10);
}

function hasAppDeviceInfo(bid) {
  if (bid.params) {
    return !!bid.params.app;
  }
}

function hasAppId(bid) {
  if (bid.params && bid.params.app) {
    return !!bid.params.app.id;
  }

  return !!bid.params.app;
}

function hasDebug(bid) {
  return !!bid.debug;
}

function hasAdPod(bid) {
  return bid.mediaTypes && bid.mediaTypes.video && bid.mediaTypes.video.context === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["a" /* ADPOD */];
}
/**
 * Expand an adpod placement into a set of request objects according to the
 * total adpod duration and the range of duration seconds. Sets minduration/
 * maxduration video property according to requireExactDuration configuration
 */


function createAdPodRequest(tags, adPodBid) {
  var _adPodBid$mediaTypes$ = adPodBid.mediaTypes.video,
      durationRangeSec = _adPodBid$mediaTypes$.durationRangeSec,
      requireExactDuration = _adPodBid$mediaTypes$.requireExactDuration;
  var numberOfPlacements = getAdPodPlacementNumber(adPodBid.mediaTypes.video);
  var maxDuration = __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["getMaxValueFromArray"](durationRangeSec);
  var tagToDuplicate = tags.filter(function (tag) {
    return tag.uuid === adPodBid.bidId;
  });
  var request = __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["fill"].apply(__WEBPACK_IMPORTED_MODULE_1__src_utils_js__, _toConsumableArray(tagToDuplicate).concat([numberOfPlacements]));

  if (requireExactDuration) {
    var divider = Math.ceil(numberOfPlacements / durationRangeSec.length);
    var chunked = __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["chunk"](request, divider); // each configured duration is set as min/maxduration for a subset of requests

    durationRangeSec.forEach(function (duration, index) {
      chunked[index].map(function (tag) {
        setVideoProperty(tag, 'minduration', duration);
        setVideoProperty(tag, 'maxduration', duration);
      });
    });
  } else {
    // all maxdurations should be the same
    request.map(function (tag) {
      return setVideoProperty(tag, 'maxduration', maxDuration);
    });
  }

  return request;
}

function getAdPodPlacementNumber(videoParams) {
  var adPodDurationSec = videoParams.adPodDurationSec,
      durationRangeSec = videoParams.durationRangeSec,
      requireExactDuration = videoParams.requireExactDuration;
  var minAllowedDuration = __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["getMinValueFromArray"](durationRangeSec);
  var numberOfPlacements = Math.floor(adPodDurationSec / minAllowedDuration);
  return requireExactDuration ? Math.max(numberOfPlacements, durationRangeSec.length) : numberOfPlacements;
}

function setVideoProperty(tag, key, value) {
  if (__WEBPACK_IMPORTED_MODULE_1__src_utils_js__["isEmpty"](tag.video)) {
    tag.video = {};
  }

  tag.video[key] = value;
}

function getRtbBid(tag) {
  return tag && tag.ads && tag.ads.length && __WEBPACK_IMPORTED_MODULE_6_core_js_library_fn_array_find_js___default()(tag.ads, function (ad) {
    return ad.rtb;
  });
}

function buildNativeRequest(params) {
  var request = {}; // map standard prebid native asset identifier to /ut parameters
  // e.g., tag specifies `body` but /ut only knows `description`.
  // mapping may be in form {tag: '<server name>'} or
  // {tag: {serverName: '<server name>', requiredParams: {...}}}

  Object.keys(params).forEach(function (key) {
    // check if one of the <server name> forms is used, otherwise
    // a mapping wasn't specified so pass the key straight through
    var requestKey = NATIVE_MAPPING[key] && NATIVE_MAPPING[key].serverName || NATIVE_MAPPING[key] || key; // required params are always passed on request

    var requiredParams = NATIVE_MAPPING[key] && NATIVE_MAPPING[key].requiredParams;
    request[requestKey] = _extends({}, requiredParams, params[key]); // convert the sizes of image/icon assets to proper format (if needed)

    var isImageAsset = !!(requestKey === NATIVE_MAPPING.image.serverName || requestKey === NATIVE_MAPPING.icon.serverName);

    if (isImageAsset && request[requestKey].sizes) {
      var sizes = request[requestKey].sizes;

      if (__WEBPACK_IMPORTED_MODULE_1__src_utils_js__["isArrayOfNums"](sizes) || __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["isArray"](sizes) && sizes.length > 0 && sizes.every(function (sz) {
        return __WEBPACK_IMPORTED_MODULE_1__src_utils_js__["isArrayOfNums"](sz);
      })) {
        request[requestKey].sizes = transformSizes(request[requestKey].sizes);
      }
    }

    if (requestKey === NATIVE_MAPPING.privacyLink) {
      request.privacy_supported = true;
    }
  });
  return request;
}
/**
 * This function hides google div container for outstream bids to remove unwanted space on page. Appnexus renderer creates a new iframe outside of google iframe to render the outstream creative.
 * @param {string} elementId element id
 */


function hidedfpContainer(elementId) {
  var el = document.getElementById(elementId).querySelectorAll("div[id^='google_ads']");

  if (el[0]) {
    el[0].style.setProperty('display', 'none');
  }
}

function outstreamRender(bid) {
  // push to render queue because ANOutstreamVideo may not be loaded yet
  hidedfpContainer(bid.adUnitCode);
  bid.renderer.push(function () {
    window.ANOutstreamVideo.renderAd({
      tagId: bid.adResponse.tag_id,
      sizes: [bid.getSize().split('x')],
      targetId: bid.adUnitCode,
      // target div id to render video
      uuid: bid.adResponse.uuid,
      adResponse: bid.adResponse,
      rendererOptions: bid.renderer.getConfig()
    }, handleOutstreamRendererEvents.bind(null, bid));
  });
}

function handleOutstreamRendererEvents(bid, id, eventName) {
  bid.renderer.handleVideoEvent({
    id: id,
    eventName: eventName
  });
}

function parseMediaType(rtbBid) {
  var adType = rtbBid.ad_type;

  if (adType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["d" /* VIDEO */]) {
    return __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["d" /* VIDEO */];
  } else if (adType === __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */]) {
    return __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["c" /* NATIVE */];
  } else {
    return __WEBPACK_IMPORTED_MODULE_4__src_mediaTypes_js__["b" /* BANNER */];
  }
}

Object(__WEBPACK_IMPORTED_MODULE_3__src_adapters_bidderFactory_js__["registerBidder"])(spec);

/***/ })

},[231]);

owpbjsChunk([255],{

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(240);


/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", function() { return spec; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_adapters_bidderFactory_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find_index_js__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes_js__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @file AudienceNetwork adapter.
 */




var code = 'audienceNetwork';
var currency = 'USD';
var method = 'GET';
var url = 'https://an.facebook.com/v2/placementbid.json';
var supportedMediaTypes = ['banner', 'video'];
var netRevenue = true;
var hbBidder = 'fan';
var ttl = 600;
var videoTtl = 3600;
var platver = "3.18.0";
var platform = '2078522619030089';
var adapterver = '1.3.0';
/**
 * Does this bid request contain valid parameters?
 * @param {Object} bid
 * @returns {Boolean}
 */

var isBidRequestValid = function isBidRequestValid(bid) {
  return _typeof(bid.params) === 'object' && typeof bid.params.placementId === 'string' && bid.params.placementId.length > 0 && Array.isArray(bid.sizes) && bid.sizes.length > 0 && (isFullWidth(bid.params.format) ? bid.sizes.map(flattenSize).some(function (size) {
    return size === '300x250';
  }) : true) && (isValidNonSizedFormat(bid.params.format) || bid.sizes.map(flattenSize).some(isValidSize));
};
/**
 * Flattens a 2-element [W, H] array as a 'WxH' string,
 * otherwise passes value through.
 * @param {Array|String} size
 * @returns {String}
 */


var flattenSize = function flattenSize(size) {
  return Array.isArray(size) && size.length === 2 ? "".concat(size[0], "x").concat(size[1]) : size;
};
/**
 * Expands a 'WxH' string as a 2-element [W, H] array
 * @param {String} size
 * @returns {Array}
 */


var expandSize = function expandSize(size) {
  return size.split('x').map(Number);
};
/**
 * Is this a valid slot size?
 * @param {String} size
 * @returns {Boolean}
 */


var isValidSize = function isValidSize(size) {
  return __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes_js___default()(['300x250', '320x50'], size);
};
/**
 * Is this a valid, non-sized format?
 * @param {String} size
 * @returns {Boolean}
 */


var isValidNonSizedFormat = function isValidNonSizedFormat(format) {
  return __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes_js___default()(['video', 'native'], format);
};
/**
 * Is this a valid size and format?
 * @param {String} size
 * @returns {Boolean}
 */


var isValidSizeAndFormat = function isValidSizeAndFormat(size, format) {
  return isFullWidth(format) && flattenSize(size) === '300x250' || isValidNonSizedFormat(format) || isValidSize(flattenSize(size));
};
/**
 * Find a preferred entry, if any, from an array of valid sizes.
 * @param {Array<String>} acc
 * @param {String} cur
 */


var sortByPreferredSize = function sortByPreferredSize(acc, cur) {
  return cur === '300x250' ? [cur].concat(_toConsumableArray(acc)) : [].concat(_toConsumableArray(acc), [cur]);
};
/**
 * Map any deprecated size/formats to new values.
 * @param {String} size
 * @param {String} format
 */


var mapDeprecatedSizeAndFormat = function mapDeprecatedSizeAndFormat(size, format) {
  return isFullWidth(format) ? ['300x250', null] : [size, format];
};
/**
 * Is this a video format?
 * @param {String} format
 * @returns {Boolean}
 */


var isVideo = function isVideo(format) {
  return format === 'video';
};
/**
 * Is this a fullwidth format?
 * @param {String} format
 * @returns {Boolean}
 */


var isFullWidth = function isFullWidth(format) {
  return format === 'fullwidth';
};
/**
 * Which SDK version should be used for this format?
 * @param {String} format
 * @returns {String}
 */


var sdkVersion = function sdkVersion(format) {
  return isVideo(format) ? '' : '6.0.web';
};
/**
 * Which platform identifier should be used?
 * @param {Array<String>} platforms Possible platform identifiers
 * @returns {String} First valid platform found, or default if none found
 */


var findPlatform = function findPlatform(platforms) {
  return [].concat(_toConsumableArray(platforms.filter(Boolean)), [platform])[0];
};
/**
 * Does the search part of the URL contain "anhb_testmode"
 * and therefore indicate testmode should be used?
 * @returns {String} "true" or "false"
 */


var isTestmode = function isTestmode() {
  return Boolean(window && window.location && typeof window.location.search === 'string' && window.location.search.indexOf('anhb_testmode') !== -1).toString();
};
/**
 * Generate ad HTML for injection into an iframe
 * @param {String} placementId
 * @param {String} format
 * @param {String} bidId
 * @returns {String} HTML
 */


var createAdHtml = function createAdHtml(placementId, format, bidId) {
  var nativeStyle = format === 'native' ? '<script>window.onload=function(){if(parent){var o=document.getElementsByTagName("head")[0];var s=parent.document.getElementsByTagName("style");for(var i=0;i<s.length;i++)o.appendChild(s[i].cloneNode(true));}}</script>' : '';
  var nativeContainer = format === 'native' ? '<div class="thirdPartyRoot"><a class="fbAdLink"><div class="fbAdMedia thirdPartyMediaClass"></div><div class="fbAdSubtitle thirdPartySubtitleClass"></div><div class="fbDefaultNativeAdWrapper"><div class="fbAdCallToAction thirdPartyCallToActionClass"></div><div class="fbAdTitle thirdPartyTitleClass"></div></div></a></div>' : '';
  return "<html>\n  <head>".concat(nativeStyle, "</head>\n  <body>\n    <div style=\"display:none;position:relative;\">\n      <script type=\"text/javascript\" src=\"https://connect.facebook.net/en_US/fbadnw60-tag.js\" async></script>\n      <script type=\"text/javascript\">\n        window.ADNW = window.ADNW || {};\n        window.ADNW.v60 = window.ADNW.v60 || {};\n        window.ADNW.v60.slots = window.ADNW.v60.slots || [];\n        window.ADNW.v60.slots.push({\n          rootElement: document.currentScript.parentElement,\n          placementid: '").concat(placementId, "',\n          format: '").concat(format, "',\n          bidid: '").concat(bidId, "',\n          testmode: false,\n          onAdLoaded: function(rootElement) {\n            console.log('Audience Network [").concat(placementId, "] ad loaded');\n            rootElement.style.display = 'block';\n          },\n          onAdError: function(errorCode, errorMessage) {\n            console.log('Audience Network [").concat(placementId, "] error (' + errorCode + ') ' + errorMessage);\n          }\n        });\n      </script>\n      ").concat(nativeContainer, "\n    </div>\n  </body>\n</html>");
};
/**
 * Convert each bid request to a single URL to fetch those bids.
 * @param {Array} bids - list of bids
 * @param {String} bids[].placementCode - Prebid placement identifier
 * @param {Object} bids[].params
 * @param {String} bids[].params.placementId - Audience Network placement identifier
 * @param {String} bids[].params.platform - Audience Network platform identifier (optional)
 * @param {String} bids[].params.format - Optional format, one of 'video' or 'native' if set
 * @param {Array} bids[].sizes - list of desired advert sizes
 * @param {Array} bids[].sizes[] - Size arrays [h,w]: should include one of [300, 250], [320, 50]
 * @returns {Array<Object>} List of URLs to fetch, plus formats and sizes for later use with interpretResponse
 */


var buildRequests = function buildRequests(bids, bidderRequest) {
  // Build lists of placementids, adformats, sizes and SDK versions
  var placementids = [];
  var adformats = [];
  var sizes = [];
  var sdk = [];
  var platforms = [];
  var requestIds = [];
  bids.forEach(function (bid) {
    return bid.sizes.map(flattenSize).filter(function (size) {
      return isValidSizeAndFormat(size, bid.params.format);
    }).reduce(sortByPreferredSize, []).slice(0, 1).forEach(function (preferredSize) {
      var _mapDeprecatedSizeAnd = mapDeprecatedSizeAndFormat(preferredSize, bid.params.format),
          _mapDeprecatedSizeAnd2 = _slicedToArray(_mapDeprecatedSizeAnd, 2),
          size = _mapDeprecatedSizeAnd2[0],
          format = _mapDeprecatedSizeAnd2[1];

      placementids.push(bid.params.placementId);
      adformats.push(format || size);
      sizes.push(size);
      sdk.push(sdkVersion(format));
      platforms.push(bid.params.platform);
      requestIds.push(bid.bidId);
    });
  }); // Build URL

  var testmode = isTestmode();
  var pageurl = encodeURIComponent(Object(__WEBPACK_IMPORTED_MODULE_1__src_utils_js__["deepAccess"])(bidderRequest, 'refererInfo.canonicalUrl') || Object(__WEBPACK_IMPORTED_MODULE_1__src_utils_js__["deepAccess"])(bidderRequest, 'refererInfo.referer'));
  var platform = findPlatform(platforms);
  var cb = Object(__WEBPACK_IMPORTED_MODULE_1__src_utils_js__["generateUUID"])();
  var search = {
    placementids: placementids,
    adformats: adformats,
    testmode: testmode,
    pageurl: pageurl,
    sdk: sdk,
    adapterver: adapterver,
    platform: platform,
    platver: platver,
    cb: cb
  };
  var video = __WEBPACK_IMPORTED_MODULE_2_core_js_library_fn_array_find_index_js___default()(adformats, isVideo);

  if (video !== -1) {
    var _expandSize = expandSize(sizes[video]);

    var _expandSize2 = _slicedToArray(_expandSize, 2);

    search.playerwidth = _expandSize2[0];
    search.playerheight = _expandSize2[1];
  }

  var data = Object(__WEBPACK_IMPORTED_MODULE_1__src_utils_js__["formatQS"])(search);
  return [{
    adformats: adformats,
    data: data,
    method: method,
    requestIds: requestIds,
    sizes: sizes,
    url: url,
    pageurl: pageurl
  }];
};
/**
 * Convert a server response to a bid response.
 * @param {Object} response - object representing the response
 * @param {Object} response.body - response body, already converted from JSON
 * @param {Object} bidRequests - the original bid requests
 * @param {Array} bidRequest.adformats - list of formats for the original bid requests
 * @param {Array} bidRequest.sizes - list of sizes fot the original bid requests
 * @returns {Array<Object>} A list of bid response objects
 */


var interpretResponse = function interpretResponse(_ref, _ref2) {
  var body = _ref.body;
  var adformats = _ref2.adformats,
      requestIds = _ref2.requestIds,
      sizes = _ref2.sizes,
      pageurl = _ref2.pageurl;
  var _body$bids = body.bids,
      bids = _body$bids === void 0 ? {} : _body$bids;
  return Object.keys(bids) // extract Array of bid responses
  .map(function (placementId) {
    return bids[placementId];
  }) // flatten
  .reduce(function (a, b) {
    return a.concat(b);
  }, []) // transform to bidResponse
  .map(function (bid, i) {
    var fbBidid = bid.bid_id,
        creativeId = bid.placement_id,
        cpm = bid.bid_price_cents;
    var format = adformats[i];

    var _expandSize3 = expandSize(flattenSize(sizes[i])),
        _expandSize4 = _slicedToArray(_expandSize3, 2),
        width = _expandSize4[0],
        height = _expandSize4[1];

    var ad = createAdHtml(creativeId, format, fbBidid);
    var requestId = requestIds[i];
    var bidResponse = {
      // Prebid attributes
      requestId: requestId,
      cpm: cpm / 100,
      width: width,
      height: height,
      ad: ad,
      ttl: ttl,
      creativeId: creativeId,
      netRevenue: netRevenue,
      currency: currency,
      // Audience Network attributes
      hb_bidder: hbBidder,
      fb_bidid: fbBidid,
      fb_format: format,
      fb_placementid: creativeId
    }; // Video attributes

    if (isVideo(format)) {
      bidResponse.mediaType = 'video';
      bidResponse.vastUrl = "https://an.facebook.com/v1/instream/vast.xml?placementid=".concat(creativeId, "&pageurl=").concat(pageurl, "&playerwidth=").concat(width, "&playerheight=").concat(height, "&bidid=").concat(fbBidid);
      bidResponse.ttl = videoTtl;
    }

    return bidResponse;
  });
};
/**
 * Covert bid param types for S2S
 * @param {Object} params bid params
 * @param {Boolean} isOpenRtb boolean to check openrtb2 protocol
 * @return {Object} params bid params
 */


var transformBidParams = function transformBidParams(params, isOpenRtb) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__src_utils_js__["convertTypes"])({
    'placementId': 'string'
  }, params);
};

var spec = {
  code: code,
  supportedMediaTypes: supportedMediaTypes,
  isBidRequestValid: isBidRequestValid,
  buildRequests: buildRequests,
  interpretResponse: interpretResponse,
  transformBidParams: transformBidParams
};
Object(__WEBPACK_IMPORTED_MODULE_0__src_adapters_bidderFactory_js__["registerBidder"])(spec);

/***/ })

},[239]);

owpbjsChunk([226],{

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(298);


/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userCMP", function() { return userCMP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consentTimeout", function() { return consentTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowAuction", function() { return allowAuction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gdprScope", function() { return gdprScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticConsentData", function() { return staticConsentData; });
/* harmony export (immutable) */ __webpack_exports__["requestBidsHook"] = requestBidsHook;
/* harmony export (immutable) */ __webpack_exports__["resetConsentData"] = resetConsentData;
/* harmony export (immutable) */ __webpack_exports__["setConsentConfig"] = setConsentConfig;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_adapterManager_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_string_includes_js__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_string_includes_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_string_includes_js__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * This module adds GDPR consentManagement support to prebid.js.  It interacts with
 * supported CMPs (Consent Management Platforms) to grab the user's consent information
 * and make it available for any GDPR supported adapters to read/pass this information to
 * their system.
 */





var DEFAULT_CMP = 'iab';
var DEFAULT_CONSENT_TIMEOUT = 10000;
var DEFAULT_ALLOW_AUCTION_WO_CONSENT = true;
var userCMP;
var consentTimeout;
var allowAuction;
var gdprScope;
var staticConsentData;
var cmpVersion = 0;
var consentData;
var addedConsentHook = false; // add new CMPs here, with their dedicated lookup function

var cmpCallMap = {
  'iab': lookupIabConsent,
  'static': lookupStaticConsentData
};
/**
 * This function reads the consent string from the config to obtain the consent information of the user.
 * @param {function(string)} cmpSuccess acts as a success callback when the value is read from config; pass along consentObject (string) from CMP
 * @param {function(string)} cmpError acts as an error callback while interacting with the config string; pass along an error message (string)
 * @param {object} hookConfig contains module related variables (see comment in requestBidsHook function)
 */

function lookupStaticConsentData(cmpSuccess, cmpError, hookConfig) {
  cmpSuccess(staticConsentData, hookConfig);
}
/**
 * This function handles interacting with an IAB compliant CMP to obtain the consent information of the user.
 * Given the async nature of the CMP's API, we pass in acting success/error callback functions to exit this function
 * based on the appropriate result.
 * @param {function(string)} cmpSuccess acts as a success callback when CMP returns a value; pass along consentObject (string) from CMP
 * @param {function(string)} cmpError acts as an error callback while interacting with CMP; pass along an error message (string)
 * @param {object} hookConfig contains module related variables (see comment in requestBidsHook function)
 */


function lookupIabConsent(cmpSuccess, cmpError, hookConfig) {
  function findCMP() {
    var f = window;
    var cmpFrame;
    var cmpFunction;

    while (!cmpFrame) {
      try {
        if (typeof f.__tcfapi === 'function' || typeof f.__cmp === 'function') {
          if (typeof f.__tcfapi === 'function') {
            cmpVersion = 2;
            cmpFunction = f.__tcfapi;
          } else {
            cmpVersion = 1;
            cmpFunction = f.__cmp;
          }

          cmpFrame = f;
          break;
        }
      } catch (e) {} // need separate try/catch blocks due to the exception errors thrown when trying to check for a frame that doesn't exist in 3rd party env


      try {
        if (f.frames['__tcfapiLocator']) {
          cmpVersion = 2;
          cmpFrame = f;
          break;
        }
      } catch (e) {}

      try {
        if (f.frames['__cmpLocator']) {
          cmpVersion = 1;
          cmpFrame = f;
          break;
        }
      } catch (e) {}

      if (f === window.top) break;
      f = f.parent;
    }

    return {
      cmpFrame: cmpFrame,
      cmpFunction: cmpFunction
    };
  }

  function v2CmpResponseCallback(tcfData, success) {
    __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"]('Received a response from CMP', tcfData);

    if (success) {
      if (tcfData.eventStatus === 'tcloaded' || tcfData.eventStatus === 'useractioncomplete') {
        cmpSuccess(tcfData, hookConfig);
      } else if (tcfData.eventStatus === 'cmpuishown' && tcfData.tcString && tcfData.purposeOneTreatment === true) {
        cmpSuccess(tcfData, hookConfig);
      }
    } else {
      cmpError('CMP unable to register callback function.  Please check CMP setup.', hookConfig);
    }
  }

  function handleV1CmpResponseCallbacks() {
    var cmpResponse = {};

    function afterEach() {
      if (cmpResponse.getConsentData && cmpResponse.getVendorConsents) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"]('Received all requested responses from CMP', cmpResponse);
        cmpSuccess(cmpResponse, hookConfig);
      }
    }

    return {
      consentDataCallback: function consentDataCallback(consentResponse) {
        cmpResponse.getConsentData = consentResponse;
        afterEach();
      },
      vendorConsentsCallback: function vendorConsentsCallback(consentResponse) {
        cmpResponse.getVendorConsents = consentResponse;
        afterEach();
      }
    };
  }

  var v1CallbackHandler = handleV1CmpResponseCallbacks();
  var cmpCallbacks = {};

  var _findCMP = findCMP(),
      cmpFrame = _findCMP.cmpFrame,
      cmpFunction = _findCMP.cmpFunction;

  if (!cmpFrame) {
    return cmpError('CMP not found.', hookConfig);
  } // to collect the consent information from the user, we perform two calls to the CMP in parallel:
  // first to collect the user's consent choices represented in an encoded string (via getConsentData)
  // second to collect the user's full unparsed consent information (via getVendorConsents)
  // the following code also determines where the CMP is located and uses the proper workflow to communicate with it:
  // check to see if CMP is found on the same window level as prebid and call it directly if so
  // check to see if prebid is in a safeframe (with CMP support)
  // else assume prebid may be inside an iframe and use the IAB CMP locator code to see if CMP's located in a higher parent window. this works in cross domain iframes
  // if the CMP is not found, the iframe function will call the cmpError exit callback to abort the rest of the CMP workflow


  if (__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isFn"](cmpFunction)) {
    __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"]('Detected CMP API is directly accessible, calling it now...');

    if (cmpVersion === 1) {
      cmpFunction('getConsentData', null, v1CallbackHandler.consentDataCallback);
      cmpFunction('getVendorConsents', null, v1CallbackHandler.vendorConsentsCallback);
    } else if (cmpVersion === 2) {
      cmpFunction('addEventListener', cmpVersion, v2CmpResponseCallback);
    }
  } else if (cmpVersion === 1 && inASafeFrame() && typeof window.$sf.ext.cmp === 'function') {
    // this safeframe workflow is only supported with TCF v1 spec; the v2 recommends to use the iframe postMessage route instead (even if you are in a safeframe).
    __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"]('Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now...');
    callCmpWhileInSafeFrame('getConsentData', v1CallbackHandler.consentDataCallback);
    callCmpWhileInSafeFrame('getVendorConsents', v1CallbackHandler.vendorConsentsCallback);
  } else {
    __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"]('Detected CMP is outside the current iframe where Prebid.js is located, calling it now...');

    if (cmpVersion === 1) {
      callCmpWhileInIframe('getConsentData', cmpFrame, v1CallbackHandler.consentDataCallback);
      callCmpWhileInIframe('getVendorConsents', cmpFrame, v1CallbackHandler.vendorConsentsCallback);
    } else if (cmpVersion === 2) {
      callCmpWhileInIframe('addEventListener', cmpFrame, v2CmpResponseCallback);
    }
  }

  function inASafeFrame() {
    return !!(window.$sf && window.$sf.ext);
  }

  function callCmpWhileInSafeFrame(commandName, callback) {
    function sfCallback(msgName, data) {
      if (msgName === 'cmpReturn') {
        var responseObj = commandName === 'getConsentData' ? data.vendorConsentData : data.vendorConsents;
        callback(responseObj);
      }
    } // find sizes from adUnits object


    var adUnits = hookConfig.adUnits;
    var width = 1;
    var height = 1;

    if (Array.isArray(adUnits) && adUnits.length > 0) {
      var sizes = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["getAdUnitSizes"](adUnits[0]);
      width = sizes[0][0];
      height = sizes[0][1];
    }

    window.$sf.ext.register(width, height, sfCallback);
    window.$sf.ext.cmp(commandName);
  }

  function callCmpWhileInIframe(commandName, cmpFrame, moduleCallback) {
    var apiName = cmpVersion === 2 ? '__tcfapi' : '__cmp';
    /* Setup up a __cmp function to do the postMessage and stash the callback.
      This function behaves (from the caller's perspective identicially to the in-frame __cmp call */

    window[apiName] = function (cmd, arg, callback) {
      var callId = Math.random() + '';
      var callName = "".concat(apiName, "Call");

      var msg = _defineProperty({}, callName, {
        command: cmd,
        parameter: arg,
        callId: callId
      });

      if (cmpVersion !== 1) msg[callName].version = cmpVersion;
      cmpCallbacks[callId] = callback;
      cmpFrame.postMessage(msg, '*');
    };
    /** when we get the return message, call the stashed callback */


    window.addEventListener('message', readPostMessageResponse, false); // call CMP

    window[apiName](commandName, null, moduleCallback);

    function readPostMessageResponse(event) {
      var cmpDataPkgName = "".concat(apiName, "Return");
      var json = typeof event.data === 'string' && __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_string_includes_js___default()(event.data, cmpDataPkgName) ? JSON.parse(event.data) : event.data;

      if (json[cmpDataPkgName] && json[cmpDataPkgName].callId) {
        var payload = json[cmpDataPkgName]; // TODO - clean up this logic (move listeners?); we have duplicate messages responses because 2 eventlisteners are active from the 2 cmp requests running in parallel

        if (typeof cmpCallbacks[payload.callId] !== 'undefined') {
          cmpCallbacks[payload.callId](payload.returnValue, payload.success);
        }
      }
    }
  }
}
/**
 * If consentManagement module is enabled (ie included in setConfig), this hook function will attempt to fetch the
 * user's encoded consent string from the supported CMP.  Once obtained, the module will store this
 * data as part of a gdprConsent object which gets transferred to adapterManager's gdprDataHandler object.
 * This information is later added into the bidRequest object for any supported adapters to read/pass along to their system.
 * @param {object} reqBidsConfigObj required; This is the same param that's used in pbjs.requestBids.
 * @param {function} fn required; The next function in the chain, used by hook.js
 */


function requestBidsHook(fn, reqBidsConfigObj) {
  // preserves all module related variables for the current auction instance (used primiarily for concurrent auctions)
  var hookConfig = {
    context: this,
    args: [reqBidsConfigObj],
    nextFn: fn,
    adUnits: reqBidsConfigObj.adUnits || owpbjs.adUnits,
    bidsBackHandler: reqBidsConfigObj.bidsBackHandler,
    haveExited: false,
    timer: null
  }; // in case we already have consent (eg during bid refresh)

  if (consentData) {
    __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"]('User consent information already known.  Pulling internally stored information...');
    return exitModule(null, hookConfig);
  }

  if (!__WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_includes_js___default()(Object.keys(cmpCallMap), userCMP)) {
    __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"]("CMP framework (".concat(userCMP, ") is not a supported framework.  Aborting consentManagement module and resuming auction."));
    return hookConfig.nextFn.apply(hookConfig.context, hookConfig.args);
  }

  cmpCallMap[userCMP].call(this, processCmpData, cmpFailed, hookConfig); // only let this code run if module is still active (ie if the callbacks used by CMPs haven't already finished)

  if (!hookConfig.haveExited) {
    if (consentTimeout === 0) {
      processCmpData(undefined, hookConfig);
    } else {
      hookConfig.timer = setTimeout(cmpTimedOut.bind(null, hookConfig), consentTimeout);
    }
  }
}
/**
 * This function checks the consent data provided by CMP to ensure it's in an expected state.
 * If it's bad, we exit the module depending on config settings.
 * If it's good, then we store the value and exits the module.
 * @param {object} consentObject required; object returned by CMP that contains user's consent choices
 * @param {object} hookConfig contains module related variables (see comment in requestBidsHook function)
 */

function processCmpData(consentObject, hookConfig) {
  function checkV1Data(consentObject) {
    var gdprApplies = consentObject && consentObject.getConsentData && consentObject.getConsentData.gdprApplies;
    return !!(typeof gdprApplies !== 'boolean' || gdprApplies === true && !(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"](consentObject.getConsentData.consentData) && __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isPlainObject"](consentObject.getVendorConsents) && Object.keys(consentObject.getVendorConsents).length > 1));
  }

  function checkV2Data() {
    var gdprApplies = consentObject && consentObject.gdprApplies;
    var tcString = consentObject && consentObject.tcString;
    return !!(typeof gdprApplies !== 'boolean' || gdprApplies === true && !__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"](tcString));
  } // do extra things for static config


  if (userCMP === 'static') {
    cmpVersion = consentObject.getConsentData ? 1 : consentObject.getTCData ? 2 : 0; // remove extra layer in static v2 data object so it matches normal v2 CMP object for processing step

    if (cmpVersion === 2) {
      consentObject = consentObject.getTCData;
    }
  } // determine which set of checks to run based on cmpVersion


  var checkFn = cmpVersion === 1 ? checkV1Data : cmpVersion === 2 ? checkV2Data : null;

  if (__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isFn"](checkFn)) {
    if (checkFn(consentObject)) {
      cmpFailed("CMP returned unexpected value during lookup process.", hookConfig, consentObject);
    } else {
      clearTimeout(hookConfig.timer);
      storeConsentData(consentObject);
      exitModule(null, hookConfig);
    }
  } else {
    cmpFailed('Unable to derive CMP version to process data.  Consent object does not conform to TCF v1 or v2 specs.', hookConfig, consentObject);
  }
}
/**
 * General timeout callback when interacting with CMP takes too long.
 */


function cmpTimedOut(hookConfig) {
  cmpFailed('CMP workflow exceeded timeout threshold.', hookConfig);
}
/**
 * This function contains the controlled steps to perform when there's a problem with CMP.
 * @param {string} errMsg required; should be a short descriptive message for why the failure/issue happened.
 * @param {object} hookConfig contains module related variables (see comment in requestBidsHook function)
 * @param {object} extraArgs contains additional data that's passed along in the error/warning messages for easier debugging
*/


function cmpFailed(errMsg, hookConfig, extraArgs) {
  clearTimeout(hookConfig.timer); // still set the consentData to undefined when there is a problem as per config options

  if (allowAuction) {
    storeConsentData(undefined);
  }

  exitModule(errMsg, hookConfig, extraArgs);
}
/**
 * Stores CMP data locally in module and then invokes gdprDataHandler.setConsentData() to make information available in adaptermanger.js for later in the auction
 * @param {object} cmpConsentObject required; an object representing user's consent choices (can be undefined in certain use-cases for this function only)
 */


function storeConsentData(cmpConsentObject) {
  if (cmpVersion === 1) {
    consentData = {
      consentString: cmpConsentObject ? cmpConsentObject.getConsentData.consentData : undefined,
      vendorData: cmpConsentObject ? cmpConsentObject.getVendorConsents : undefined,
      gdprApplies: cmpConsentObject ? cmpConsentObject.getConsentData.gdprApplies : gdprScope
    };
  } else {
    consentData = {
      consentString: cmpConsentObject ? cmpConsentObject.tcString : undefined,
      vendorData: cmpConsentObject || undefined,
      gdprApplies: cmpConsentObject ? cmpConsentObject.gdprApplies : gdprScope
    };
  }

  consentData.apiVersion = cmpVersion;
  __WEBPACK_IMPORTED_MODULE_2__src_adapterManager_js__["gdprDataHandler"].setConsentData(consentData);
}
/**
 * This function handles the exit logic for the module.
 * While there are several paths in the module's logic to call this function, we only allow 1 of the 3 potential exits to happen before suppressing others.
 *
 * We prevent multiple exits to avoid conflicting messages in the console depending on certain scenarios.
 * One scenario could be auction was canceled due to timeout with CMP being reached.
 * While the timeout is the accepted exit and runs first, the CMP's callback still tries to process the user's data (which normally leads to a good exit).
 * In this case, the good exit will be suppressed since we already decided to cancel the auction.
 *
 * Three exit paths are:
 * 1. good exit where auction runs (CMP data is processed normally).
 * 2. bad exit but auction still continues (warning message is logged, CMP data is undefined and still passed along).
 * 3. bad exit with auction canceled (error message is logged).
 * @param {string} errMsg optional; only to be used when there was a 'bad' exit.  String is a descriptive message for the failure/issue encountered.
 * @param {object} hookConfig contains module related variables (see comment in requestBidsHook function)
 * @param {object} extraArgs contains additional data that's passed along in the error/warning messages for easier debugging
 */


function exitModule(errMsg, hookConfig, extraArgs) {
  if (hookConfig.haveExited === false) {
    hookConfig.haveExited = true;
    var context = hookConfig.context;
    var args = hookConfig.args;
    var nextFn = hookConfig.nextFn;

    if (errMsg) {
      if (allowAuction) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](errMsg + ' Resuming auction without consent data as per consentManagement config.', extraArgs);
        nextFn.apply(context, args);
      } else {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"](errMsg + ' Canceling auction as per consentManagement config.', extraArgs);

        if (typeof hookConfig.bidsBackHandler === 'function') {
          hookConfig.bidsBackHandler();
        } else {
          __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"]('Error executing bidsBackHandler');
        }
      }
    } else {
      nextFn.apply(context, args);
    }
  }
}
/**
 * Simply resets the module's consentData variable back to undefined, mainly for testing purposes
 */


function resetConsentData() {
  consentData = undefined;
  userCMP = undefined;
  cmpVersion = 0;
  __WEBPACK_IMPORTED_MODULE_2__src_adapterManager_js__["gdprDataHandler"].setConsentData(null);
}
/**
 * A configuration function that initializes some module variables, as well as add a hook into the requestBids function
 * @param {{cmp:string, timeout:number, allowAuctionWithoutConsent:boolean, defaultGdprScope:boolean}} config required; consentManagement module config settings; cmp (string), timeout (int), allowAuctionWithoutConsent (boolean)
 */

function setConsentConfig(config) {
  // if `config.gdpr` or `config.usp` exist, assume new config format.
  // else for backward compatability, just use `config`
  config = config.gdpr || config.usp ? config.gdpr : config;

  if (!config || _typeof(config) !== 'object') {
    __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"]('consentManagement config not defined, exiting consent manager');
    return;
  }

  if (__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"](config.cmpApi)) {
    userCMP = config.cmpApi;
  } else {
    userCMP = DEFAULT_CMP;
    __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"]("consentManagement config did not specify cmp.  Using system default setting (".concat(DEFAULT_CMP, ")."));
  }

  if (__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isNumber"](config.timeout)) {
    consentTimeout = config.timeout;
  } else {
    consentTimeout = DEFAULT_CONSENT_TIMEOUT;
    __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"]("consentManagement config did not specify timeout.  Using system default setting (".concat(DEFAULT_CONSENT_TIMEOUT, ")."));
  }

  if (typeof config.allowAuctionWithoutConsent === 'boolean') {
    allowAuction = config.allowAuctionWithoutConsent;
  } else {
    allowAuction = DEFAULT_ALLOW_AUCTION_WO_CONSENT;
    __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"]("consentManagement config did not specify allowAuctionWithoutConsent.  Using system default setting (".concat(DEFAULT_ALLOW_AUCTION_WO_CONSENT, ")."));
  } // if true, then gdprApplies should be set to true


  gdprScope = config.defaultGdprScope === true;
  __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logInfo"]('consentManagement module has been activated...');

  if (userCMP === 'static') {
    if (__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isPlainObject"](config.consentData)) {
      staticConsentData = config.consentData;
      consentTimeout = 0;
    } else {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"]("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.");
    }
  }

  if (!addedConsentHook) {
    owpbjs.requestBids.before(requestBidsHook, 50);
  }

  addedConsentHook = true;
}
__WEBPACK_IMPORTED_MODULE_1__src_config_js__["b" /* config */].getConfig('consentManagement', function (config) {
  return setConsentConfig(config.consentManagement);
});

/***/ })

},[297]);

owpbjsChunk([0],{

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(317);


/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADAPTER_VERSION", function() { return ADAPTER_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_ID_PUBLISHERTAG", function() { return PROFILE_ID_PUBLISHERTAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", function() { return spec; });
/* harmony export (immutable) */ __webpack_exports__["tryGetCriteoFastBid"] = tryGetCriteoFastBid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_adloader_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__ = __webpack_require__(9);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









var GVLID = 91;
var ADAPTER_VERSION = 29;
var BIDDER_CODE = 'criteo';
var CDB_ENDPOINT = 'https://bidder.criteo.com/cdb';
var PROFILE_ID_INLINE = 207;
var PROFILE_ID_PUBLISHERTAG = 185;
var storage = Object(__WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__["b" /* getStorageManager */])(GVLID);
var LOG_PREFIX = 'Criteo: '; // Unminified source code can be found in: https://github.com/Prebid-org/prebid-js-external-js-criteo/blob/master/dist/prod.js

var PUBLISHER_TAG_URL = 'https://static.criteo.net/js/ld/publishertag.prebid.js';
var FAST_BID_PUBKEY_E = 65537;
var FAST_BID_PUBKEY_N = 'ztQYwCE5BU7T9CDM5he6rKoabstXRmkzx54zFPZkWbK530dwtLBDeaWBMxHBUT55CYyboR/EZ4efghPi3CoNGfGWezpjko9P6p2EwGArtHEeS4slhu/SpSIFMjG6fdrpRoNuIAMhq1Z+Pr/+HOd1pThFKeGFr2/NhtAg+TXAzaU=';
/** @type {BidderSpec} */

var spec = {
  code: BIDDER_CODE,
  gvlid: GVLID,
  supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["b" /* BANNER */], __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["d" /* VIDEO */], __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["c" /* NATIVE */]],

  /**
   * @param {object} bid
   * @return {boolean}
   */
  isBidRequestValid: function isBidRequestValid(bid) {
    // either one of zoneId or networkId should be set
    if (!(bid && bid.params && (bid.params.zoneId || bid.params.networkId))) {
      return false;
    } // video media types requires some mandatory params


    if (hasVideoMediaType(bid)) {
      if (!hasValidVideoMediaType(bid)) {
        return false;
      }
    }

    return true;
  },

  /**
   * @param {BidRequest[]} bidRequests
   * @param {*} bidderRequest
   * @return {ServerRequest}
   */
  buildRequests: function buildRequests(bidRequests, bidderRequest) {
    var url;
    var data;

    _extends(bidderRequest, {
      publisherExt: __WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('fpd.context'),
      userExt: __WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('fpd.user'),
      ceh: __WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('criteo.ceh')
    }); // If publisher tag not already loaded try to get it from fast bid


    if (!publisherTagAvailable()) {
      window.Criteo = window.Criteo || {};
      window.Criteo.usePrebidEvents = false;
      tryGetCriteoFastBid(); // Reload the PublisherTag after the timeout to ensure FastBid is up-to-date and tracking done properly

      setTimeout(function () {
        Object(__WEBPACK_IMPORTED_MODULE_0__src_adloader_js__["a" /* loadExternalScript */])(PUBLISHER_TAG_URL, BIDDER_CODE);
      }, bidderRequest.timeout);
    }

    if (publisherTagAvailable()) {
      // eslint-disable-next-line no-undef
      var adapter = new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG, ADAPTER_VERSION, bidRequests, bidderRequest, "3.18.0");
      var enableSendAllBids = __WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('enableSendAllBids');

      if (adapter.setEnableSendAllBids && typeof adapter.setEnableSendAllBids === 'function' && typeof enableSendAllBids === 'boolean') {
        adapter.setEnableSendAllBids(enableSendAllBids);
      }

      url = adapter.buildCdbUrl();
      data = adapter.buildCdbRequest();
    } else {
      var context = buildContext(bidRequests, bidderRequest);
      url = buildCdbUrl(context);
      data = buildCdbRequest(context, bidRequests, bidderRequest);
    }

    if (data) {
      return {
        method: 'POST',
        url: url,
        data: data,
        bidRequests: bidRequests
      };
    }
  },

  /**
   * @param {*} response
   * @param {ServerRequest} request
   * @return {Bid[]}
   */
  interpretResponse: function interpretResponse(response, request) {
    var body = response.body || response;

    if (publisherTagAvailable()) {
      // eslint-disable-next-line no-undef
      var adapter = Criteo.PubTag.Adapters.Prebid.GetAdapter(request);

      if (adapter) {
        return adapter.interpretResponse(body, request);
      }
    }

    var bids = [];

    if (body && body.slots && __WEBPACK_IMPORTED_MODULE_4__src_utils_js__["isArray"](body.slots)) {
      body.slots.forEach(function (slot) {
        var bidRequest = __WEBPACK_IMPORTED_MODULE_5_core_js_library_fn_array_find_js___default()(request.bidRequests, function (b) {
          return b.adUnitCode === slot.impid && (!b.params.zoneId || parseInt(b.params.zoneId) === slot.zoneid);
        });
        var bidId = bidRequest.bidId;
        var bid = {
          requestId: bidId,
          adId: slot.bidId || __WEBPACK_IMPORTED_MODULE_4__src_utils_js__["getUniqueIdentifierStr"](),
          cpm: slot.cpm,
          currency: slot.currency,
          netRevenue: true,
          ttl: slot.ttl || 60,
          creativeId: bidId,
          width: slot.width,
          height: slot.height,
          dealId: slot.dealCode
        };

        if (slot.native) {
          if (bidRequest.params.nativeCallback) {
            bid.ad = createNativeAd(bidId, slot.native, bidRequest.params.nativeCallback);
          } else if (__WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('enableSendAllBids') === true) {
            return;
          } else {
            bid.native = createPrebidNativeAd(slot.native);
            bid.mediaType = __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["c" /* NATIVE */];
          }
        } else if (slot.video) {
          bid.vastUrl = slot.displayurl;
          bid.mediaType = __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["d" /* VIDEO */];
        } else {
          bid.ad = slot.creative;
        }

        bids.push(bid);
      });
    }

    return bids;
  },

  /**
   * @param {TimedOutBid} timeoutData
   */
  onTimeout: function onTimeout(timeoutData) {
    if (publisherTagAvailable()) {
      // eslint-disable-next-line no-undef
      var adapter = Criteo.PubTag.Adapters.Prebid.GetAdapter(timeoutData.auctionId);
      adapter.handleBidTimeout();
    }
  },

  /**
   * @param {Bid} bid
   */
  onBidWon: function onBidWon(bid) {
    if (publisherTagAvailable()) {
      // eslint-disable-next-line no-undef
      var adapter = Criteo.PubTag.Adapters.Prebid.GetAdapter(bid.auctionId);
      adapter.handleBidWon(bid);
    }
  },

  /**
   * @param {Bid} bid
   */
  onSetTargeting: function onSetTargeting(bid) {
    if (publisherTagAvailable()) {
      // eslint-disable-next-line no-undef
      var adapter = Criteo.PubTag.Adapters.Prebid.GetAdapter(bid.auctionId);
      adapter.handleSetTargeting(bid);
    }
  }
};
/**
 * @return {boolean}
 */

function publisherTagAvailable() {
  // eslint-disable-next-line no-undef
  return typeof Criteo !== 'undefined' && Criteo.PubTag && Criteo.PubTag.Adapters && Criteo.PubTag.Adapters.Prebid;
}
/**
 * @param {BidRequest[]} bidRequests
 * @param bidderRequest
 */


function buildContext(bidRequests, bidderRequest) {
  var referrer = '';

  if (bidderRequest && bidderRequest.refererInfo) {
    referrer = bidderRequest.refererInfo.referer;
  }

  var queryString = __WEBPACK_IMPORTED_MODULE_4__src_utils_js__["parseUrl"](referrer).search;
  var context = {
    url: referrer,
    debug: queryString['pbt_debug'] === '1',
    noLog: queryString['pbt_nolog'] === '1',
    amp: false
  };
  bidRequests.forEach(function (bidRequest) {
    if (bidRequest.params.integrationMode === 'amp') {
      context.amp = true;
    }
  });
  return context;
}
/**
 * @param {CriteoContext} context
 * @return {string}
 */


function buildCdbUrl(context) {
  var url = CDB_ENDPOINT;
  url += '?profileId=' + PROFILE_ID_INLINE;
  url += '&av=' + String(ADAPTER_VERSION);
  url += '&wv=' + encodeURIComponent("3.18.0");
  url += '&cb=' + String(Math.floor(Math.random() * 99999999999));

  if (context.amp) {
    url += '&im=1';
  }

  if (context.debug) {
    url += '&debug=1';
  }

  if (context.noLog) {
    url += '&nolog=1';
  }

  return url;
}

function checkNativeSendId(bidRequest) {
  return !(bidRequest.nativeParams && (bidRequest.nativeParams.image && bidRequest.nativeParams.image.sendId !== true || bidRequest.nativeParams.icon && bidRequest.nativeParams.icon.sendId !== true || bidRequest.nativeParams.clickUrl && bidRequest.nativeParams.clickUrl.sendId !== true || bidRequest.nativeParams.displayUrl && bidRequest.nativeParams.displayUrl.sendId !== true || bidRequest.nativeParams.privacyLink && bidRequest.nativeParams.privacyLink.sendId !== true || bidRequest.nativeParams.privacyIcon && bidRequest.nativeParams.privacyIcon.sendId !== true));
}
/**
 * @param {CriteoContext} context
 * @param {BidRequest[]} bidRequests
 * @param bidderRequest
 * @return {*}
 */


function buildCdbRequest(context, bidRequests, bidderRequest) {
  var networkId;
  var request = {
    publisher: {
      url: context.url,
      ext: bidderRequest.publisherExt
    },
    slots: bidRequests.map(function (bidRequest) {
      networkId = bidRequest.params.networkId || networkId;
      var slot = {
        impid: bidRequest.adUnitCode,
        transactionid: bidRequest.transactionId,
        auctionId: bidRequest.auctionId,
        sizes: getBannerSizes(bidRequest)
      };

      if (bidRequest.params.zoneId) {
        slot.zoneid = bidRequest.params.zoneId;
      }

      if (bidRequest.fpd && bidRequest.fpd.context) {
        slot.ext = bidRequest.fpd.context;
      }

      if (bidRequest.params.ext) {
        slot.ext = _extends({}, slot.ext, bidRequest.params.ext);
      }

      if (bidRequest.params.publisherSubId) {
        slot.publishersubid = bidRequest.params.publisherSubId;
      }

      if (bidRequest.params.nativeCallback || __WEBPACK_IMPORTED_MODULE_4__src_utils_js__["deepAccess"](bidRequest, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["c" /* NATIVE */]))) {
        slot.native = true;

        if (!checkNativeSendId(bidRequest)) {
          __WEBPACK_IMPORTED_MODULE_4__src_utils_js__["logWarn"](LOG_PREFIX + 'all native assets containing URL should be sent as placeholders with sendId(icon, image, clickUrl, displayUrl, privacyLink, privacyIcon)');
        }
      }

      if (hasVideoMediaType(bidRequest)) {
        var video = {
          playersizes: getVideoSizes(bidRequest),
          mimes: bidRequest.mediaTypes.video.mimes,
          protocols: bidRequest.mediaTypes.video.protocols,
          maxduration: bidRequest.mediaTypes.video.maxduration,
          api: bidRequest.mediaTypes.video.api
        };
        video.skip = bidRequest.params.video.skip;
        video.placement = bidRequest.params.video.placement;
        video.minduration = bidRequest.params.video.minduration;
        video.playbackmethod = bidRequest.params.video.playbackmethod;
        video.startdelay = bidRequest.params.video.startdelay;
        slot.video = video;
      }

      return slot;
    })
  };

  if (networkId) {
    request.publisher.networkid = networkId;
  }

  request.user = {
    ext: bidderRequest.userExt
  };

  if (bidderRequest && bidderRequest.ceh) {
    request.user.ceh = bidderRequest.ceh;
  }

  if (bidderRequest && bidderRequest.gdprConsent) {
    request.gdprConsent = {};

    if (typeof bidderRequest.gdprConsent.gdprApplies !== 'undefined') {
      request.gdprConsent.gdprApplies = !!bidderRequest.gdprConsent.gdprApplies;
    }

    request.gdprConsent.version = bidderRequest.gdprConsent.apiVersion;

    if (typeof bidderRequest.gdprConsent.consentString !== 'undefined') {
      request.gdprConsent.consentData = bidderRequest.gdprConsent.consentString;
    }
  }

  if (bidderRequest && bidderRequest.uspConsent) {
    request.user.uspIab = bidderRequest.uspConsent;
  }

  return request;
}

function getVideoSizes(bidRequest) {
  return parseSizes(__WEBPACK_IMPORTED_MODULE_4__src_utils_js__["deepAccess"](bidRequest, 'mediaTypes.video.playerSize'));
}

function getBannerSizes(bidRequest) {
  return parseSizes(__WEBPACK_IMPORTED_MODULE_4__src_utils_js__["deepAccess"](bidRequest, 'mediaTypes.banner.sizes') || bidRequest.sizes);
}

function parseSize(size) {
  return size[0] + 'x' + size[1];
}

function parseSizes(sizes) {
  if (Array.isArray(sizes[0])) {
    // is there several sizes ? (ie. [[728,90],[200,300]])
    return sizes.map(function (size) {
      return parseSize(size);
    });
  }

  return [parseSize(sizes)]; // or a single one ? (ie. [728,90])
}

function hasVideoMediaType(bidRequest) {
  if (__WEBPACK_IMPORTED_MODULE_4__src_utils_js__["deepAccess"](bidRequest, 'params.video') === undefined) {
    return false;
  }

  return __WEBPACK_IMPORTED_MODULE_4__src_utils_js__["deepAccess"](bidRequest, 'mediaTypes.video') !== undefined;
}

function hasValidVideoMediaType(bidRequest) {
  var isValid = true;
  var requiredMediaTypesParams = ['mimes', 'playerSize', 'maxduration', 'protocols', 'api'];
  requiredMediaTypesParams.forEach(function (param) {
    if (__WEBPACK_IMPORTED_MODULE_4__src_utils_js__["deepAccess"](bidRequest, 'mediaTypes.video.' + param) === undefined) {
      isValid = false;
      __WEBPACK_IMPORTED_MODULE_4__src_utils_js__["logError"]('Criteo Bid Adapter: mediaTypes.video.' + param + ' is required');
    }
  });
  var requiredParams = ['skip', 'placement', 'playbackmethod'];
  requiredParams.forEach(function (param) {
    if (__WEBPACK_IMPORTED_MODULE_4__src_utils_js__["deepAccess"](bidRequest, 'params.video.' + param) === undefined) {
      isValid = false;
      __WEBPACK_IMPORTED_MODULE_4__src_utils_js__["logError"]('Criteo Bid Adapter: params.video.' + param + ' is required');
    }
  });

  if (isValid) {
    // We do not support long form for now, also we have to check that context & placement are consistent
    if (bidRequest.mediaTypes.video.context == 'instream' && bidRequest.params.video.placement === 1) {
      return true;
    } else if (bidRequest.mediaTypes.video.context == 'outstream' && bidRequest.params.video.placement !== 1) {
      return true;
    }
  }

  return false;
}
/**
 * Create prebid compatible native ad with native payload
 * @param {*} payload
 * @returns prebid native ad assets
 */


function createPrebidNativeAd(payload) {
  return {
    title: payload.products[0].title,
    body: payload.products[0].description,
    sponsoredBy: payload.advertiser.description,
    icon: payload.advertiser.logo,
    image: payload.products[0].image,
    clickUrl: payload.products[0].click_url,
    privacyLink: payload.privacy.optout_click_url,
    privacyIcon: payload.privacy.optout_image_url,
    cta: payload.products[0].call_to_action,
    price: payload.products[0].price,
    impressionTrackers: payload.impression_pixels.map(function (pix) {
      return pix.url;
    })
  };
}
/**
 * @param {string} id
 * @param {*} payload
 * @param {*} callback
 * @return {string}
 */


function createNativeAd(id, payload, callback) {
  // Store the callback and payload in a global object to be later accessed from the creative
  var slotsName = 'criteo_prebid_native_slots';
  window[slotsName] = window[slotsName] || {};
  window[slotsName][id] = {
    callback: callback,
    payload: payload
  }; // The creative is in an iframe so we have to get the callback and payload
  // from the parent window (doesn't work with safeframes)

  return "\n<script type=\"text/javascript\">\nfor (var i = 0; i < 10; ++i) {\n var slots = window.parent.".concat(slotsName, ";\n  if(!slots){continue;}\n  var responseSlot = slots[\"").concat(id, "\"];\n  responseSlot.callback(responseSlot.payload);\n  break;\n}\n</script>");
}

function tryGetCriteoFastBid() {
  try {
    var fastBidStorageKey = 'criteo_fast_bid';
    var hashPrefix = '// Hash: ';
    var fastBidFromStorage = storage.getDataFromLocalStorage(fastBidStorageKey);

    if (fastBidFromStorage !== null) {
      // The value stored must contain the file's encrypted hash as first line
      var firstLineEndPosition = fastBidFromStorage.indexOf('\n');
      var firstLine = fastBidFromStorage.substr(0, firstLineEndPosition).trim();

      if (firstLine.substr(0, hashPrefix.length) !== hashPrefix) {
        __WEBPACK_IMPORTED_MODULE_4__src_utils_js__["logWarn"]('No hash found in FastBid');
        storage.removeDataFromLocalStorage(fastBidStorageKey);
      } else {
        // Remove the hash part from the locally stored value
        var publisherTagHash = firstLine.substr(hashPrefix.length);
        var publisherTag = fastBidFromStorage.substr(firstLineEndPosition + 1);

        if (Object(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__["verify"])(publisherTag, publisherTagHash, FAST_BID_PUBKEY_N, FAST_BID_PUBKEY_E)) {
          __WEBPACK_IMPORTED_MODULE_4__src_utils_js__["logInfo"]('Using Criteo FastBid');
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.text = publisherTag;
          __WEBPACK_IMPORTED_MODULE_4__src_utils_js__["insertElement"](script);
        } else {
          __WEBPACK_IMPORTED_MODULE_4__src_utils_js__["logWarn"]('Invalid Criteo FastBid found');
          storage.removeDataFromLocalStorage(fastBidStorageKey);
        }
      }
    }
  } catch (e) {// Unable to get fast bid
  }
}
Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__["registerBidder"])(spec);

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var jsbnLite_1 = __webpack_require__(319);
var sha256_1 = __webpack_require__(320);
function verify(code, hash, nStrPubKey, ePubKey) {
    var x = new jsbnLite_1.BigInteger(jsbnLite_1.b64toHex(hash));
    var m = new jsbnLite_1.BigInteger(jsbnLite_1.b64toHex(nStrPubKey));
    var r = x.modPowInt(ePubKey, m);
    return jsbnLite_1.removeExtraSymbols(r.toHexString()) === sha256_1.Sha256.hash(code);
}
exports.verify = verify;


/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Bits per digit
var dbits;
// JavaScript engine analysis
var canary = 0xdeadbeefcafe;
var j_lm = ((canary & 0xffffff) == 0xefcafe);
var BigInteger = /** @class */ (function () {
    function BigInteger(a) {
        if (a !== null) {
            this.fromHexString(a);
        }
    }
    BigInteger.prototype.toHexString = function () {
        if (this.s < 0) {
            return "-" + this.negate().toHexString();
        }
        var k = 4;
        var km = (1 << k) - 1;
        var d;
        var m = false;
        var r = "";
        var i = this.t;
        var p = this.DB - (i * this.DB) % k;
        if (i-- > 0) {
            if (p < this.DB && (d = this[i] >> p) > 0) {
                m = true;
                r = int2char(d);
            }
            while (i >= 0) {
                if (p < k) {
                    d = (this[i] & ((1 << p) - 1)) << (k - p);
                    d |= this[--i] >> (p += this.DB - k);
                }
                else {
                    d = (this[i] >> (p -= k)) & km;
                    if (p <= 0) {
                        p += this.DB;
                        --i;
                    }
                }
                if (d > 0) {
                    m = true;
                }
                if (m) {
                    r += int2char(d);
                }
            }
        }
        return m ? r : "0";
    };
    BigInteger.prototype.fromHexString = function (s) {
        if (s === null) {
            return;
        }
        var k = 4;
        this.t = 0;
        this.s = 0;
        var i = s.length;
        var mi = false;
        var sh = 0;
        while (--i >= 0) {
            var x = (k == 8) ? (+s[i]) & 0xff : intAt(s, i);
            if (x < 0) {
                if (s.charAt(i) == "-") {
                    mi = true;
                }
                continue;
            }
            mi = false;
            if (sh == 0) {
                this[this.t++] = x;
            }
            else if (sh + k > this.DB) {
                this[this.t - 1] |= (x & ((1 << (this.DB - sh)) - 1)) << sh;
                this[this.t++] = (x >> (this.DB - sh));
            }
            else {
                this[this.t - 1] |= x << sh;
            }
            sh += k;
            if (sh >= this.DB) {
                sh -= this.DB;
            }
        }
        if (k == 8 && ((+s[0]) & 0x80) != 0) {
            this.s = -1;
            if (sh > 0) {
                this[this.t - 1] |= ((1 << (this.DB - sh)) - 1) << sh;
            }
        }
        this.clamp();
        if (mi) {
            BigInteger.ZERO.subTo(this, this);
        }
    };
    BigInteger.prototype.negate = function () {
        var r = nbi();
        BigInteger.ZERO.subTo(this, r);
        return r;
    };
    BigInteger.prototype.abs = function () {
        return (this.s < 0) ? this.negate() : this;
    };
    BigInteger.prototype.mod = function (a) {
        var r = nbi();
        this.abs().divRemTo(a, null, r);
        if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) {
            a.subTo(r, r);
        }
        return r;
    };
    BigInteger.prototype.copyTo = function (r) {
        for (var i = this.t - 1; i >= 0; --i) {
            r[i] = this[i];
        }
        r.t = this.t;
        r.s = this.s;
    };
    BigInteger.prototype.lShiftTo = function (n, r) {
        var bs = n % this.DB;
        var cbs = this.DB - bs;
        var bm = (1 << cbs) - 1;
        var ds = Math.floor(n / this.DB);
        var c = (this.s << bs) & this.DM;
        for (var i = this.t - 1; i >= 0; --i) {
            r[i + ds + 1] = (this[i] >> cbs) | c;
            c = (this[i] & bm) << bs;
        }
        for (var i = ds - 1; i >= 0; --i) {
            r[i] = 0;
        }
        r[ds] = c;
        r.t = this.t + ds + 1;
        r.s = this.s;
        r.clamp();
    };
    BigInteger.prototype.invDigit = function () {
        if (this.t < 1) {
            return 0;
        }
        var x = this[0];
        if ((x & 1) == 0) {
            return 0;
        }
        var y = x & 3; // y == 1/x mod 2^2
        y = (y * (2 - (x & 0xf) * y)) & 0xf; // y == 1/x mod 2^4
        y = (y * (2 - (x & 0xff) * y)) & 0xff; // y == 1/x mod 2^8
        y = (y * (2 - (((x & 0xffff) * y) & 0xffff))) & 0xffff; // y == 1/x mod 2^16
        // last step - calculate inverse mod DV directly;
        // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
        y = (y * (2 - x * y % this.DV)) % this.DV; // y == 1/x mod 2^dbits
        // we really want the negative inverse, and -DV < y < DV
        return (y > 0) ? this.DV - y : -y;
    };
    BigInteger.prototype.dlShiftTo = function (n, r) {
        var i;
        for (i = this.t - 1; i >= 0; --i) {
            r[i + n] = this[i];
        }
        for (i = n - 1; i >= 0; --i) {
            r[i] = 0;
        }
        r.t = this.t + n;
        r.s = this.s;
    };
    BigInteger.prototype.squareTo = function (r) {
        var x = this.abs();
        var i = r.t = 2 * x.t;
        while (--i >= 0) {
            r[i] = 0;
        }
        for (i = 0; i < x.t - 1; ++i) {
            var c = x.am(i, x[i], r, 2 * i, 0, 1);
            if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
                r[i + x.t] -= x.DV;
                r[i + x.t + 1] = 1;
            }
        }
        if (r.t > 0) {
            r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
        }
        r.s = 0;
        r.clamp();
    };
    BigInteger.prototype.multiplyTo = function (a, r) {
        var x = this.abs();
        var y = a.abs();
        var i = x.t;
        r.t = i + y.t;
        while (--i >= 0) {
            r[i] = 0;
        }
        for (i = 0; i < y.t; ++i) {
            r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
        }
        r.s = 0;
        r.clamp();
        if (this.s != a.s) {
            BigInteger.ZERO.subTo(r, r);
        }
    };
    BigInteger.prototype.divRemTo = function (m, q, r) {
        var pm = m.abs();
        if (pm.t <= 0) {
            return;
        }
        var pt = this.abs();
        if (pt.t < pm.t) {
            if (q != null) {
                q.fromHexString("0");
            }
            if (r != null) {
                this.copyTo(r);
            }
            return;
        }
        if (r == null) {
            r = nbi();
        }
        var y = nbi();
        var ts = this.s;
        var ms = m.s;
        var nsh = this.DB - nbits(pm[pm.t - 1]); // normalize modulus
        if (nsh > 0) {
            pm.lShiftTo(nsh, y);
            pt.lShiftTo(nsh, r);
        }
        else {
            pm.copyTo(y);
            pt.copyTo(r);
        }
        var ys = y.t;
        var y0 = y[ys - 1];
        if (y0 == 0) {
            return;
        }
        var yt = y0 * (1 << this.F1) + ((ys > 1) ? y[ys - 2] >> this.F2 : 0);
        var d1 = this.FV / yt;
        var d2 = (1 << this.F1) / yt;
        var e = 1 << this.F2;
        var i = r.t;
        var j = i - ys;
        var t = (q == null) ? nbi() : q;
        y.dlShiftTo(j, t);
        if (r.compareTo(t) >= 0) {
            r[r.t++] = 1;
            r.subTo(t, r);
        }
        BigInteger.ONE.dlShiftTo(ys, t);
        t.subTo(y, y); // "negative" y so we can replace sub with am later
        while (y.t < ys) {
            y[y.t++] = 0;
        }
        while (--j >= 0) {
            // Estimate quotient digit
            var qd = (r[--i] == y0) ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
            if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) { // Try it out
                y.dlShiftTo(j, t);
                r.subTo(t, r);
                while (r[i] < --qd) {
                    r.subTo(t, r);
                }
            }
        }
        if (q != null) {
            r.drShiftTo(ys, q);
            if (ts != ms) {
                BigInteger.ZERO.subTo(q, q);
            }
        }
        r.t = ys;
        r.clamp();
        if (nsh > 0) {
            r.rShiftTo(nsh, r);
        } // Denormalize remainder
        if (ts < 0) {
            BigInteger.ZERO.subTo(r, r);
        }
    };
    BigInteger.prototype.rShiftTo = function (n, r) {
        r.s = this.s;
        var ds = Math.floor(n / this.DB);
        if (ds >= this.t) {
            r.t = 0;
            return;
        }
        var bs = n % this.DB;
        var cbs = this.DB - bs;
        var bm = (1 << bs) - 1;
        r[0] = this[ds] >> bs;
        for (var i = ds + 1; i < this.t; ++i) {
            r[i - ds - 1] |= (this[i] & bm) << cbs;
            r[i - ds] = this[i] >> bs;
        }
        if (bs > 0) {
            r[this.t - ds - 1] |= (this.s & bm) << cbs;
        }
        r.t = this.t - ds;
        r.clamp();
    };
    BigInteger.prototype.drShiftTo = function (n, r) {
        for (var i = n; i < this.t; ++i) {
            r[i - n] = this[i];
        }
        r.t = Math.max(this.t - n, 0);
        r.s = this.s;
    };
    BigInteger.prototype.subTo = function (a, r) {
        var i = 0;
        var c = 0;
        var m = Math.min(a.t, this.t);
        while (i < m) {
            c += this[i] - a[i];
            r[i++] = c & this.DM;
            c >>= this.DB;
        }
        if (a.t < this.t) {
            c -= a.s;
            while (i < this.t) {
                c += this[i];
                r[i++] = c & this.DM;
                c >>= this.DB;
            }
            c += this.s;
        }
        else {
            c += this.s;
            while (i < a.t) {
                c -= a[i];
                r[i++] = c & this.DM;
                c >>= this.DB;
            }
            c -= a.s;
        }
        r.s = (c < 0) ? -1 : 0;
        if (c < -1) {
            r[i++] = this.DV + c;
        }
        else if (c > 0) {
            r[i++] = c;
        }
        r.t = i;
        r.clamp();
    };
    BigInteger.prototype.clamp = function () {
        var c = this.s & this.DM;
        while (this.t > 0 && this[this.t - 1] == c) {
            --this.t;
        }
    };
    BigInteger.prototype.modPowInt = function (e, m) {
        var z;
        if (e < 256 || m.isEven()) {
            z = new Classic(m);
        }
        else {
            z = new Montgomery(m);
        }
        return this.exp(e, z);
    };
    BigInteger.prototype.exp = function (e, z) {
        if (e > 0xffffffff || e < 1) {
            return BigInteger.ONE;
        }
        var r = nbi();
        var r2 = nbi();
        var g = z.convert(this);
        var i = nbits(e) - 1;
        g.copyTo(r);
        while (--i >= 0) {
            z.sqrTo(r, r2);
            if ((e & (1 << i)) > 0) {
                z.mulTo(r2, g, r);
            }
            else {
                var t = r;
                r = r2;
                r2 = t;
            }
        }
        return z.revert(r);
    };
    BigInteger.prototype.isEven = function () {
        return ((this.t > 0) ? (this[0] & 1) : this.s) == 0;
    };
    BigInteger.prototype.compareTo = function (a) {
        var r = this.s - a.s;
        if (r != 0) {
            return r;
        }
        var i = this.t;
        r = i - a.t;
        if (r != 0) {
            return (this.s < 0) ? -r : r;
        }
        while (--i >= 0) {
            if ((r = this[i] - a[i]) != 0) {
                return r;
            }
        }
        return 0;
    };
    BigInteger.prototype.am1 = function (i, x, w, j, c, n) {
        while (--n >= 0) {
            var v = x * this[i++] + w[j] + c;
            c = Math.floor(v / 0x4000000);
            w[j++] = v & 0x3ffffff;
        }
        return c;
    };
    // am2 avoids a big mult-and-extract completely.
    // Max digit bits should be <= 30 because we do bitwise ops
    // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
    BigInteger.prototype.am2 = function (i, x, w, j, c, n) {
        var xl = x & 0x7fff;
        var xh = x >> 15;
        while (--n >= 0) {
            var l = this[i] & 0x7fff;
            var h = this[i++] >> 15;
            var m = xh * l + h * xl;
            l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
            c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
            w[j++] = l & 0x3fffffff;
        }
        return c;
    };
    // Alternately, set max digit bits to 28 since some
    // browsers slow down when dealing with 32-bit numbers.
    BigInteger.prototype.am3 = function (i, x, w, j, c, n) {
        var xl = x & 0x3fff;
        var xh = x >> 14;
        while (--n >= 0) {
            var l = this[i] & 0x3fff;
            var h = this[i++] >> 14;
            var m = xh * l + h * xl;
            l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
            c = (l >> 28) + (m >> 14) + xh * h;
            w[j++] = l & 0xfffffff;
        }
        return c;
    };
    return BigInteger;
}());
exports.BigInteger = BigInteger;
function nbi() { return new BigInteger(null); }
exports.nbi = nbi;
function nbits(x) {
    var r = 1;
    var t;
    if ((t = x >>> 16) != 0) {
        x = t;
        r += 16;
    }
    if ((t = x >> 8) != 0) {
        x = t;
        r += 8;
    }
    if ((t = x >> 4) != 0) {
        x = t;
        r += 4;
    }
    if ((t = x >> 2) != 0) {
        x = t;
        r += 2;
    }
    if ((t = x >> 1) != 0) {
        x = t;
        r += 1;
    }
    return r;
}
exports.nbits = nbits;
var BI_RC = [];
var rr;
var vv;
rr = "0".charCodeAt(0);
for (vv = 0; vv <= 9; ++vv) {
    BI_RC[rr++] = vv;
}
rr = "a".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) {
    BI_RC[rr++] = vv;
}
rr = "A".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) {
    BI_RC[rr++] = vv;
}
function intAt(s, i) {
    var c = BI_RC[s.charCodeAt(i)];
    return (c == null) ? -1 : c;
}
exports.intAt = intAt;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
function int2char(n) {
    return BI_RM.charAt(n);
}
exports.int2char = int2char;
var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var b64pad = "=";
function b64toHex(s) {
    var ret = "";
    var i;
    var k = 0; // b64 state, 0-3
    var slop = 0;
    for (i = 0; i < s.length; ++i) {
        if (s.charAt(i) == b64pad) {
            break;
        }
        var v = b64map.indexOf(s.charAt(i));
        if (v < 0) {
            continue;
        }
        if (k == 0) {
            ret += int2char(v >> 2);
            slop = v & 3;
            k = 1;
        }
        else if (k == 1) {
            ret += int2char((slop << 2) | (v >> 4));
            slop = v & 0xf;
            k = 2;
        }
        else if (k == 2) {
            ret += int2char(slop);
            ret += int2char(v >> 2);
            slop = v & 3;
            k = 3;
        }
        else {
            ret += int2char((slop << 2) | (v >> 4));
            ret += int2char(v & 0xf);
            k = 0;
        }
    }
    if (k == 1) {
        ret += int2char(slop << 2);
    }
    return ret;
}
exports.b64toHex = b64toHex;
function removeExtraSymbols(s) {
    return s
        .replace(/^1f+00/, "")
        .replace("3031300d060960864801650304020105000420", "");
}
exports.removeExtraSymbols = removeExtraSymbols;
var Classic = /** @class */ (function () {
    function Classic(m) {
        this.m = m;
    }
    // Classic.prototype.convert = cConvert;
    Classic.prototype.convert = function (x) {
        if (x.s < 0 || x.compareTo(this.m) >= 0) {
            return x.mod(this.m);
        }
        else {
            return x;
        }
    };
    // Classic.prototype.revert = cRevert;
    Classic.prototype.revert = function (x) {
        return x;
    };
    // Classic.prototype.reduce = cReduce;
    Classic.prototype.reduce = function (x) {
        x.divRemTo(this.m, null, x);
    };
    // Classic.prototype.mulTo = cMulTo;
    Classic.prototype.mulTo = function (x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
    };
    // Classic.prototype.sqrTo = cSqrTo;
    Classic.prototype.sqrTo = function (x, r) {
        x.squareTo(r);
        this.reduce(r);
    };
    return Classic;
}());
var Montgomery = /** @class */ (function () {
    function Montgomery(m) {
        this.m = m;
        this.mp = m.invDigit();
        this.mpl = this.mp & 0x7fff;
        this.mph = this.mp >> 15;
        this.um = (1 << (m.DB - 15)) - 1;
        this.mt2 = 2 * m.t;
    }
    // Montgomery.prototype.convert = montConvert;
    // xR mod m
    Montgomery.prototype.convert = function (x) {
        var r = nbi();
        x.abs().dlShiftTo(this.m.t, r);
        r.divRemTo(this.m, null, r);
        if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) {
            this.m.subTo(r, r);
        }
        return r;
    };
    // Montgomery.prototype.revert = montRevert;
    // x/R mod m
    Montgomery.prototype.revert = function (x) {
        var r = nbi();
        x.copyTo(r);
        this.reduce(r);
        return r;
    };
    // Montgomery.prototype.reduce = montReduce;
    // x = x/R mod m (HAC 14.32)
    Montgomery.prototype.reduce = function (x) {
        while (x.t <= this.mt2) {
            // pad x so am has enough room later
            x[x.t++] = 0;
        }
        for (var i = 0; i < this.m.t; ++i) {
            // faster way of calculating u0 = x[i]*mp mod DV
            var j = x[i] & 0x7fff;
            var u0 = (j * this.mpl + (((j * this.mph + (x[i] >> 15) * this.mpl) & this.um) << 15)) & x.DM;
            // use am to combine the multiply-shift-add into one call
            j = i + this.m.t;
            x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
            // propagate carry
            while (x[j] >= x.DV) {
                x[j] -= x.DV;
                x[++j]++;
            }
        }
        x.clamp();
        x.drShiftTo(this.m.t, x);
        if (x.compareTo(this.m) >= 0) {
            x.subTo(this.m, x);
        }
    };
    // Montgomery.prototype.mulTo = montMulTo;
    // r = "xy/R mod m"; x,y != r
    Montgomery.prototype.mulTo = function (x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r);
    };
    // Montgomery.prototype.sqrTo = montSqrTo;
    // r = "x^2/R mod m"; x != r
    Montgomery.prototype.sqrTo = function (x, r) {
        x.squareTo(r);
        this.reduce(r);
    };
    return Montgomery;
}());
function nbv(i) {
    var r = nbi();
    r.fromHexString(i.toString());
    return r;
}
exports.nbv = nbv;
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);
if (j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
    BigInteger.prototype.am = BigInteger.prototype.am2;
    dbits = 30;
}
else if (j_lm && (navigator.appName != "Netscape")) {
    BigInteger.prototype.am = BigInteger.prototype.am1;
    dbits = 26;
}
else { // Mozilla/Netscape seems to prefer am3
    BigInteger.prototype.am = BigInteger.prototype.am3;
    dbits = 28;
}
BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = ((1 << dbits) - 1);
BigInteger.prototype.DV = (1 << dbits);
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP;


/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Sha256 = /** @class */ (function () {
    function Sha256() {
    }
    Sha256.hash = function (msg) {
        msg = Sha256.utf8Encode(msg || "");
        var K = [
            0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
            0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
            0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
            0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
            0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
            0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
            0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
            0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
        ];
        var H = [
            0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
        ];
        msg += String.fromCharCode(0x80);
        var l = msg.length / 4 + 2;
        var N = Math.ceil(l / 16);
        var M = new Array(N);
        for (var i = 0; i < N; i++) {
            M[i] = new Array(16);
            for (var j = 0; j < 16; j++) {
                M[i][j] = (msg.charCodeAt(i * 64 + j * 4) << 24) | (msg.charCodeAt(i * 64 + j * 4 + 1) << 16)
                    | (msg.charCodeAt(i * 64 + j * 4 + 2) << 8) | (msg.charCodeAt(i * 64 + j * 4 + 3) << 0);
            }
        }
        var lenHi = ((msg.length - 1) * 8) / Math.pow(2, 32);
        var lenLo = ((msg.length - 1) * 8) >>> 0;
        M[N - 1][14] = Math.floor(lenHi);
        M[N - 1][15] = lenLo;
        for (var i = 0; i < N; i++) {
            var W = new Array(64);
            for (var t = 0; t < 16; t++)
                W[t] = M[i][t];
            for (var t = 16; t < 64; t++) {
                W[t] = (Sha256.q1(W[t - 2]) + W[t - 7] + Sha256.q0(W[t - 15]) + W[t - 16]) >>> 0;
            }
            var a = H[0], b = H[1], c = H[2], d = H[3], e = H[4], f = H[5], g = H[6], h = H[7];
            for (var t = 0; t < 64; t++) {
                var T1 = h + Sha256.z1(e) + Sha256.Ch(e, f, g) + K[t] + W[t];
                var T2 = Sha256.z0(a) + Sha256.Maj(a, b, c);
                h = g;
                g = f;
                f = e;
                e = (d + T1) >>> 0;
                d = c;
                c = b;
                b = a;
                a = (T1 + T2) >>> 0;
            }
            H[0] = (H[0] + a) >>> 0;
            H[1] = (H[1] + b) >>> 0;
            H[2] = (H[2] + c) >>> 0;
            H[3] = (H[3] + d) >>> 0;
            H[4] = (H[4] + e) >>> 0;
            H[5] = (H[5] + f) >>> 0;
            H[6] = (H[6] + g) >>> 0;
            H[7] = (H[7] + h) >>> 0;
        }
        var R = new Array(H.length);
        for (var h = 0; h < H.length; h++)
            R[h] = ('00000000' + H[h].toString(16)).slice(-8);
        return R.join('');
    };
    Sha256.utf8Encode = function (str) {
        try {
            return new TextEncoder().encode(str).reduce(function (prev, curr) { return prev + String.fromCharCode(curr); }, '');
        }
        catch (e) {
            return unescape(encodeURIComponent(str));
        }
    };
    Sha256.ROTR = function (n, x) {
        return (x >>> n) | (x << (32 - n));
    };
    Sha256.z0 = function (x) { return Sha256.ROTR(2, x) ^ Sha256.ROTR(13, x) ^ Sha256.ROTR(22, x); };
    Sha256.z1 = function (x) { return Sha256.ROTR(6, x) ^ Sha256.ROTR(11, x) ^ Sha256.ROTR(25, x); };
    Sha256.q0 = function (x) { return Sha256.ROTR(7, x) ^ Sha256.ROTR(18, x) ^ (x >>> 3); };
    Sha256.q1 = function (x) { return Sha256.ROTR(17, x) ^ Sha256.ROTR(19, x) ^ (x >>> 10); };
    Sha256.Ch = function (x, y, z) { return (x & y) ^ (~x & z); };
    Sha256.Maj = function (x, y, z) { return (x & y) ^ (x & z) ^ (y & z); };
    return Sha256;
}());
exports.Sha256 = Sha256;


/***/ })

},[316]);

owpbjsChunk([177],{

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(414);


/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", function() { return spec; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_mediaTypes_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_find_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_find_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_number_is_integer_js__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_number_is_integer_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_number_is_integer_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_adapters_bidderFactory_js__ = __webpack_require__(1);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







var BIDDER_CODE = 'ix';
var SECURE_BID_URL = 'https://as-sec.casalemedia.com/cygnus';
var SUPPORTED_AD_TYPES = [__WEBPACK_IMPORTED_MODULE_1__src_mediaTypes_js__["b" /* BANNER */], __WEBPACK_IMPORTED_MODULE_1__src_mediaTypes_js__["d" /* VIDEO */]];
var BANNER_ENDPOINT_VERSION = 7.2;
var VIDEO_ENDPOINT_VERSION = 8.1;
var CENT_TO_DOLLAR_FACTOR = 100;
var BANNER_TIME_TO_LIVE = 300;
var VIDEO_TIME_TO_LIVE = 3600; // 1hr

var NET_REVENUE = true;
var PRICE_TO_DOLLAR_FACTOR = {
  JPY: 1
};
var USER_SYNC_URL = 'https://js-sec.indexww.com/um/ixmatch.html';
/**
 * Transform valid bid request config object to banner impression object that will be sent to ad server.
 *
 * @param  {object} bid A valid bid request config object.
 * @return {object}     A impression object that will be sent to ad server.
 */

function bidToBannerImp(bid) {
  var imp = bidToImp(bid);
  imp.banner = {};
  imp.banner.w = bid.params.size[0];
  imp.banner.h = bid.params.size[1];
  imp.banner.topframe = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["inIframe"]() ? 0 : 1;
  return imp;
}
/**
 * Transform valid bid request config object to video impression object that will be sent to ad server.
 *
 * @param  {object} bid A valid bid request config object.
 * @return {object}     A impression object that will be sent to ad server.
 */


function bidToVideoImp(bid) {
  var imp = bidToImp(bid);
  imp.video = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepClone"](bid.params.video);
  imp.video.w = bid.params.size[0];
  imp.video.h = bid.params.size[1];
  var context = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bid, 'mediaTypes.video.context');

  if (context) {
    if (context === 'instream') {
      imp.video.placement = 1;
    } else if (context === 'outstream') {
      imp.video.placement = 4;
    } else {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"]("ix bidder params: video context '".concat(context, "' is not supported"));
    }
  }

  return imp;
}

function bidToImp(bid) {
  var imp = {};
  imp.id = bid.bidId;
  imp.ext = {};
  imp.ext.siteID = bid.params.siteId;

  if (bid.params.hasOwnProperty('id') && (typeof bid.params.id === 'string' || typeof bid.params.id === 'number')) {
    imp.ext.sid = String(bid.params.id);
  } else {
    imp.ext.sid = "".concat(bid.params.size[0], "x").concat(bid.params.size[1]);
  }

  if (bid.params.hasOwnProperty('bidFloor') && bid.params.hasOwnProperty('bidFloorCur')) {
    imp.bidfloor = bid.params.bidFloor;
    imp.bidfloorcur = bid.params.bidFloorCur;
  }

  return imp;
}
/**
 * Parses a raw bid for the relevant information.
 *
 * @param  {object} rawBid   The bid to be parsed.
 * @param  {string} currency Global currency in bid response.
 * @return {object} bid      The parsed bid.
 */


function parseBid(rawBid, currency, bidRequest) {
  var bid = {};

  if (PRICE_TO_DOLLAR_FACTOR.hasOwnProperty(currency)) {
    bid.cpm = rawBid.price / PRICE_TO_DOLLAR_FACTOR[currency];
  } else {
    bid.cpm = rawBid.price / CENT_TO_DOLLAR_FACTOR;
  }

  bid.requestId = rawBid.impid;
  bid.dealId = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](rawBid, 'ext.dealid');
  bid.netRevenue = NET_REVENUE;
  bid.currency = currency;
  bid.creativeId = rawBid.hasOwnProperty('crid') ? rawBid.crid : '-'; // in the event of a video

  if (__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](rawBid, 'ext.vasturl')) {
    bid.vastUrl = rawBid.ext.vasturl;
    bid.width = bidRequest.video.w;
    bid.height = bidRequest.video.h;
    bid.mediaType = __WEBPACK_IMPORTED_MODULE_1__src_mediaTypes_js__["d" /* VIDEO */];
    bid.ttl = VIDEO_TIME_TO_LIVE;
  } else {
    bid.ad = rawBid.adm;
    bid.width = rawBid.w;
    bid.height = rawBid.h;
    bid.mediaType = __WEBPACK_IMPORTED_MODULE_1__src_mediaTypes_js__["b" /* BANNER */];
    bid.ttl = BANNER_TIME_TO_LIVE;
  }

  bid.meta = {};
  bid.meta.networkId = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](rawBid, 'ext.dspid');
  bid.meta.brandId = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](rawBid, 'ext.advbrandid');
  bid.meta.brandName = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](rawBid, 'ext.advbrand');
  return bid;
}
/**
 * Determines whether or not the given object is valid size format.
 *
 * @param  {*}       size The object to be validated.
 * @return {boolean}      True if this is a valid size format, and false otherwise.
 */


function isValidSize(size) {
  return Array.isArray(size) && size.length === 2 && __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_number_is_integer_js___default()(size[0]) && __WEBPACK_IMPORTED_MODULE_4_core_js_library_fn_number_is_integer_js___default()(size[1]);
}
/**
 * Determines whether or not the given size object is an element of the size
 * array.
 *
 * @param  {array}  sizeArray The size array.
 * @param  {object} size      The size object.
 * @return {boolean}          True if the size object is an element of the size array, and false
 *                            otherwise.
 */


function includesSize(sizeArray, size) {
  if (isValidSize(sizeArray)) {
    return sizeArray[0] === size[0] && sizeArray[1] === size[1];
  }

  for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i][0] === size[0] && sizeArray[i][1] === size[1]) {
      return true;
    }
  }

  return false;
}
/**
 * Determines whether or not the given bidFloor parameters are valid.
 *
 * @param  {*}       bidFloor    The bidFloor parameter inside bid request config.
 * @param  {*}       bidFloorCur The bidFloorCur parameter inside bid request config.
 * @return {boolean}             True if this is a valid biFfloor parameters format, and false
 *                               otherwise.
 */


function isValidBidFloorParams(bidFloor, bidFloorCur) {
  var curRegex = /^[A-Z]{3}$/;
  return Boolean(typeof bidFloor === 'number' && typeof bidFloorCur === 'string' && bidFloorCur.match(curRegex));
}
/**
 * Finds the impression with the associated id.
 *
 * @param  {*}      id          Id of the impression.
 * @param  {array}  impressions List of impressions sent in the request.
 * @return {object}             The impression with the associated id.
 */


function getBidRequest(id, impressions) {
  if (!id) {
    return;
  }

  return __WEBPACK_IMPORTED_MODULE_3_core_js_library_fn_array_find_js___default()(impressions, function (imp) {
    return imp.id === id;
  });
}
/**
 * Builds a request object to be sent to the ad server based on bid requests.
 *
 * @param  {array}  validBidRequests A list of valid bid request config objects.
 * @param  {object} bidderRequest    An object containing other info like gdprConsent.
 * @param  {array}  impressions      List of impression objects describing the bids.
 * @param  {array}  version          Endpoint version denoting banner or video.
 * @return {object}                  Info describing the request to the server.
 *
 */


function buildRequest(validBidRequests, bidderRequest, impressions, version) {
  var userEids = []; // Always use secure HTTPS protocol.

  var baseUrl = SECURE_BID_URL; // RTI ids will be included in the bid request if the function getIdentityInfo() is loaded
  // and if the data for the partner exist

  if (window.headertag && typeof window.headertag.getIdentityInfo === 'function') {
    var identityInfo = window.headertag.getIdentityInfo();

    if (identityInfo && _typeof(identityInfo) === 'object') {
      for (var partnerName in identityInfo) {
        if (identityInfo.hasOwnProperty(partnerName)) {
          var response = identityInfo[partnerName];

          if (!response.responsePending && response.data && _typeof(response.data) === 'object' && Object.keys(response.data).length) {
            userEids.push(response.data);
          }
        }
      }
    }
  }

  var r = {}; // Since bidderRequestId are the same for different bid request, just use the first one.

  r.id = validBidRequests[0].bidderRequestId;
  r.imp = impressions;
  r.site = {};
  r.ext = {};
  r.ext.source = 'prebid'; // if an schain is provided, send it along

  if (validBidRequests[0].schain) {
    r.source = {
      ext: {
        schain: validBidRequests[0].schain
      }
    };
  }

  if (userEids.length > 0) {
    r.user = {};
    r.user.eids = userEids;
  }

  if (document.referrer && document.referrer !== '') {
    r.site.ref = document.referrer;
  } // Apply GDPR information to the request if GDPR is enabled.


  if (bidderRequest) {
    if (bidderRequest.gdprConsent) {
      var gdprConsent = bidderRequest.gdprConsent;

      if (gdprConsent.hasOwnProperty('gdprApplies')) {
        r.regs = {
          ext: {
            gdpr: gdprConsent.gdprApplies ? 1 : 0
          }
        };
      }

      if (gdprConsent.hasOwnProperty('consentString')) {
        r.user = r.user || {};
        r.user.ext = {
          consent: gdprConsent.consentString || ''
        };
      }
    }

    if (bidderRequest.uspConsent) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"](r, 'regs.ext.us_privacy', bidderRequest.uspConsent);
    }

    if (bidderRequest.refererInfo) {
      r.site.page = bidderRequest.refererInfo.referer;
    }
  }

  var payload = {}; // Parse additional runtime configs.

  var otherIxConfig = __WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('ix');

  if (otherIxConfig) {
    // Append firstPartyData to r.site.page if firstPartyData exists.
    if (_typeof(otherIxConfig.firstPartyData) === 'object') {
      var firstPartyData = otherIxConfig.firstPartyData;
      var firstPartyString = '?';

      for (var key in firstPartyData) {
        if (firstPartyData.hasOwnProperty(key)) {
          firstPartyString += "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(firstPartyData[key]), "&");
        }
      }

      firstPartyString = firstPartyString.slice(0, -1);
      r.site.page += firstPartyString;
    } // Create t in payload if timeout is configured.


    if (typeof otherIxConfig.timeout === 'number') {
      payload.t = otherIxConfig.timeout;
    }
  } // Use the siteId in the first bid request as the main siteId.


  payload.s = validBidRequests[0].params.siteId;
  payload.v = version;
  payload.r = JSON.stringify(r);
  payload.ac = 'j';
  payload.sd = 1;

  if (version === VIDEO_ENDPOINT_VERSION) {
    payload.nf = 1;
  }

  return {
    method: 'GET',
    url: baseUrl,
    data: payload
  };
}

var spec = {
  code: BIDDER_CODE,
  gvlid: 10,
  aliases: ['indexExchange'],
  supportedMediaTypes: SUPPORTED_AD_TYPES,

  /**
   * Determines whether or not the given bid request is valid.
   *
   * @param  {object}  bid The bid to validate.
   * @return {boolean}     True if this is a valid bid, and false otherwise.
   */
  isBidRequestValid: function isBidRequestValid(bid) {
    if (!isValidSize(bid.params.size)) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"]('ix bidder params: bid size has invalid format.');
      return false;
    }

    if (!includesSize(bid.sizes, bid.params.size)) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"]('ix bidder params: bid size is not included in ad unit sizes.');
      return false;
    }

    if (bid.hasOwnProperty('mediaType') && !__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["contains"](SUPPORTED_AD_TYPES, bid.mediaType)) {
      return false;
    }

    if (bid.hasOwnProperty('mediaTypes') && !(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bid, 'mediaTypes.banner.sizes') || __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bid, 'mediaTypes.video.playerSize'))) {
      return false;
    }

    if (typeof bid.params.siteId !== 'string' && typeof bid.params.siteId !== 'number') {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"]('ix bidder params: siteId must be string or number value.');
      return false;
    }

    var hasBidFloor = bid.params.hasOwnProperty('bidFloor');
    var hasBidFloorCur = bid.params.hasOwnProperty('bidFloorCur');

    if (hasBidFloor || hasBidFloorCur) {
      if (!(hasBidFloor && hasBidFloorCur && isValidBidFloorParams(bid.params.bidFloor, bid.params.bidFloorCur))) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"]('ix bidder params: bidFloor / bidFloorCur parameter has invalid format.');
        return false;
      }
    }

    return true;
  },

  /**
   * Make a server request from the list of BidRequests.
   *
   * @param  {array}  validBidRequests A list of valid bid request config objects.
   * @param  {object} bidderRequest    A object contains bids and other info like gdprConsent.
   * @return {object}                  Info describing the request to the server.
   */
  buildRequests: function buildRequests(validBidRequests, bidderRequest) {
    var reqs = [];
    var bannerImps = [];
    var videoImps = [];
    var validBidRequest = null;

    for (var i = 0; i < validBidRequests.length; i++) {
      validBidRequest = validBidRequests[i];

      if (validBidRequest.mediaType === __WEBPACK_IMPORTED_MODULE_1__src_mediaTypes_js__["d" /* VIDEO */] || __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](validBidRequest, 'mediaTypes.video')) {
        if (validBidRequest.mediaType === __WEBPACK_IMPORTED_MODULE_1__src_mediaTypes_js__["d" /* VIDEO */] || includesSize(validBidRequest.mediaTypes.video.playerSize, validBidRequest.params.size)) {
          videoImps.push(bidToVideoImp(validBidRequest));
        } else {
          __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"]('Bid size is not included in video playerSize');
        }
      }

      if (validBidRequest.mediaType === __WEBPACK_IMPORTED_MODULE_1__src_mediaTypes_js__["b" /* BANNER */] || __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](validBidRequest, 'mediaTypes.banner') || !validBidRequest.mediaType && !validBidRequest.mediaTypes) {
        bannerImps.push(bidToBannerImp(validBidRequest));
      }
    }

    if (bannerImps.length > 0) {
      reqs.push(buildRequest(validBidRequests, bidderRequest, bannerImps, BANNER_ENDPOINT_VERSION));
    }

    if (videoImps.length > 0) {
      reqs.push(buildRequest(validBidRequests, bidderRequest, videoImps, VIDEO_ENDPOINT_VERSION));
    }

    return reqs;
  },

  /**
   * Unpack the response from the server into a list of bids.
   *
   * @param  {object} serverResponse A successful response from the server.
   * @param  {object} bidderRequest  The bid request sent to the server.
   * @return {array}                 An array of bids which were nested inside the server.
   */
  interpretResponse: function interpretResponse(serverResponse, bidderRequest) {
    var bids = [];
    var bid = null;

    if (!serverResponse.hasOwnProperty('body') || !serverResponse.body.hasOwnProperty('seatbid')) {
      return bids;
    }

    var responseBody = serverResponse.body;
    var seatbid = responseBody.seatbid;

    for (var i = 0; i < seatbid.length; i++) {
      if (!seatbid[i].hasOwnProperty('bid')) {
        continue;
      } // Transform rawBid in bid response to the format that will be accepted by prebid.


      var innerBids = seatbid[i].bid;
      var requestBid = JSON.parse(bidderRequest.data.r);

      for (var j = 0; j < innerBids.length; j++) {
        var bidRequest = getBidRequest(innerBids[j].impid, requestBid.imp);
        bid = parseBid(innerBids[j], responseBody.cur, bidRequest);
        bids.push(bid);
      }
    }

    return bids;
  },

  /**
   * Covert bid param types for S2S
   * @param {Object} params bid params
   * @param {Boolean} isOpenRtb boolean to check openrtb2 protocol
   * @return {Object} params bid params
   */
  transformBidParams: function transformBidParams(params, isOpenRtb) {
    return __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["convertTypes"]({
      'siteID': 'number'
    }, params);
  },

  /**
   * Determine which user syncs should occur
   * @param {object} syncOptions
   * @param {array} serverResponses
   * @returns {array} User sync pixels
   */
  getUserSyncs: function getUserSyncs(syncOptions, serverResponses) {
    return syncOptions.iframeEnabled ? [{
      type: 'iframe',
      url: USER_SYNC_URL
    }] : [];
  }
};
Object(__WEBPACK_IMPORTED_MODULE_5__src_adapters_bidderFactory_js__["registerBidder"])(spec);

/***/ })

},[413]);

owpbjsChunk([139],{

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(508);


/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ID_CODE_TO_QUERY_ARG", function() { return USER_ID_CODE_TO_QUERY_ARG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", function() { return spec; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__ = __webpack_require__(2);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var SUPPORTED_AD_TYPES = [__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["b" /* BANNER */], __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["d" /* VIDEO */]];
var BIDDER_CODE = 'openx';
var BIDDER_CONFIG = 'hb_pb';
var BIDDER_VERSION = '3.0.2';
var USER_ID_CODE_TO_QUERY_ARG = {
  britepoolid: 'britepoolid',
  // BritePool ID
  criteoId: 'criteoid',
  // CriteoID
  digitrustid: 'digitrustid',
  // DigiTrust
  id5id: 'id5id',
  // ID5 ID
  idl_env: 'lre',
  // LiveRamp IdentityLink
  lipb: 'lipbid',
  // LiveIntent ID
  netId: 'netid',
  // netID
  parrableid: 'parrableid',
  // Parrable ID
  pubcid: 'pubcid',
  // PubCommon ID
  tdid: 'ttduuid' // The Trade Desk Unified ID

};
var spec = {
  code: BIDDER_CODE,
  gvlid: 69,
  supportedMediaTypes: SUPPORTED_AD_TYPES,
  isBidRequestValid: function isBidRequestValid(bidRequest) {
    var hasDelDomainOrPlatform = bidRequest.params.delDomain || bidRequest.params.platform;

    if (__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["deepAccess"](bidRequest, 'mediaTypes.banner') && hasDelDomainOrPlatform) {
      return !!bidRequest.params.unit || __WEBPACK_IMPORTED_MODULE_2__src_utils_js__["deepAccess"](bidRequest, 'mediaTypes.banner.sizes.length') > 0;
    }

    return !!(bidRequest.params.unit && hasDelDomainOrPlatform);
  },
  buildRequests: function buildRequests(bidRequests, bidderRequest) {
    if (bidRequests.length === 0) {
      return [];
    }

    var requests = [];

    var _partitionByVideoBids = partitionByVideoBids(bidRequests),
        _partitionByVideoBids2 = _slicedToArray(_partitionByVideoBids, 2),
        videoBids = _partitionByVideoBids2[0],
        bannerBids = _partitionByVideoBids2[1]; // build banner requests


    if (bannerBids.length > 0) {
      requests.push(buildOXBannerRequest(bannerBids, bidderRequest));
    } // build video requests


    if (videoBids.length > 0) {
      videoBids.forEach(function (videoBid) {
        requests.push(buildOXVideoRequest(videoBid, bidderRequest));
      });
    }

    return requests;
  },
  interpretResponse: function interpretResponse(_ref, serverRequest) {
    var oxResponseObj = _ref.body;
    var mediaType = getMediaTypeFromRequest(serverRequest);
    return mediaType === __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["d" /* VIDEO */] ? createVideoBidResponses(oxResponseObj, serverRequest.payload) : createBannerBidResponses(oxResponseObj, serverRequest.payload);
  },
  getUserSyncs: function getUserSyncs(syncOptions, responses, gdprConsent, uspConsent) {
    if (syncOptions.iframeEnabled || syncOptions.pixelEnabled) {
      var pixelType = syncOptions.iframeEnabled ? 'iframe' : 'image';
      var url = __WEBPACK_IMPORTED_MODULE_2__src_utils_js__["deepAccess"](responses, '0.body.ads.pixels') || __WEBPACK_IMPORTED_MODULE_2__src_utils_js__["deepAccess"](responses, '0.body.pixels') || generateDefaultSyncUrl(gdprConsent, uspConsent);
      return [{
        type: pixelType,
        url: url
      }];
    }
  },
  transformBidParams: function transformBidParams(params, isOpenRtb) {
    return __WEBPACK_IMPORTED_MODULE_2__src_utils_js__["convertTypes"]({
      'unit': 'string',
      'customFloor': 'number'
    }, params);
  }
};

function generateDefaultSyncUrl(gdprConsent, uspConsent) {
  var url = 'https://u.openx.net/w/1.0/pd';
  var queryParamStrings = [];

  if (gdprConsent) {
    queryParamStrings.push('gdpr=' + (gdprConsent.gdprApplies ? 1 : 0));
    queryParamStrings.push('gdpr_consent=' + encodeURIComponent(gdprConsent.consentString || ''));
  } // CCPA


  if (uspConsent) {
    queryParamStrings.push('us_privacy=' + encodeURIComponent(uspConsent));
  }

  return "".concat(url).concat(queryParamStrings.length > 0 ? '?' + queryParamStrings.join('&') : '');
}

function isVideoRequest(bidRequest) {
  return __WEBPACK_IMPORTED_MODULE_2__src_utils_js__["deepAccess"](bidRequest, 'mediaTypes.video') && !__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["deepAccess"](bidRequest, 'mediaTypes.banner') || bidRequest.mediaType === __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["d" /* VIDEO */];
}

function createBannerBidResponses(oxResponseObj, _ref2) {
  var bids = _ref2.bids,
      startTime = _ref2.startTime;
  var adUnits = oxResponseObj.ads.ad;
  var bidResponses = [];

  for (var i = 0; i < adUnits.length; i++) {
    var adUnit = adUnits[i];
    var adUnitIdx = parseInt(adUnit.idx, 10);
    var bidResponse = {};
    bidResponse.requestId = bids[adUnitIdx].bidId;

    if (adUnit.pub_rev) {
      bidResponse.cpm = Number(adUnit.pub_rev) / 1000;
    } else {
      // No fill, do not add the bidresponse
      continue;
    }

    var creative = adUnit.creative[0];

    if (creative) {
      bidResponse.width = creative.width;
      bidResponse.height = creative.height;
    }

    bidResponse.creativeId = creative.id;
    bidResponse.ad = adUnit.html;

    if (adUnit.deal_id) {
      bidResponse.dealId = adUnit.deal_id;
    } // default 5 mins


    bidResponse.ttl = 300; // true is net, false is gross

    bidResponse.netRevenue = true;
    bidResponse.currency = adUnit.currency; // additional fields to add

    if (adUnit.tbd) {
      bidResponse.tbd = adUnit.tbd;
    }

    bidResponse.ts = adUnit.ts;
    bidResponse.meta = {};

    if (adUnit.brand_id) {
      bidResponse.meta.brandId = adUnit.brand_id;
    }

    if (adUnit.adv_id) {
      bidResponse.meta.dspid = adUnit.adv_id;
    }

    bidResponses.push(bidResponse);
  }

  return bidResponses;
}

function getViewportDimensions(isIfr) {
  var width;
  var height;
  var tWin = window;
  var tDoc = document;
  var docEl = tDoc.documentElement;
  var body;

  if (isIfr) {
    try {
      tWin = window.top;
      tDoc = window.top.document;
    } catch (e) {
      return;
    }

    docEl = tDoc.documentElement;
    body = tDoc.body;
    width = tWin.innerWidth || docEl.clientWidth || body.clientWidth;
    height = tWin.innerHeight || docEl.clientHeight || body.clientHeight;
  } else {
    docEl = tDoc.documentElement;
    width = tWin.innerWidth || docEl.clientWidth;
    height = tWin.innerHeight || docEl.clientHeight;
  }

  return "".concat(width, "x").concat(height);
}

function formatCustomParms(customKey, customParams) {
  var value = customParams[customKey];

  if (__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["isArray"](value)) {
    // if value is an array, join them with commas first
    value = value.join(',');
  } // return customKey=customValue format, escaping + to . and / to _


  return (customKey.toLowerCase() + '=' + value.toLowerCase()).replace('+', '.').replace('/', '_');
}

function partitionByVideoBids(bidRequests) {
  return bidRequests.reduce(function (acc, bid) {
    // Fallback to banner ads if nothing specified
    if (isVideoRequest(bid)) {
      acc[0].push(bid);
    } else {
      acc[1].push(bid);
    }

    return acc;
  }, [[], []]);
}

function getMediaTypeFromRequest(serverRequest) {
  return /avjp$/.test(serverRequest.url) ? __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["d" /* VIDEO */] : __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["b" /* BANNER */];
}

function buildCommonQueryParamsFromBids(bids, bidderRequest) {
  var isInIframe = __WEBPACK_IMPORTED_MODULE_2__src_utils_js__["inIframe"]();
  var defaultParams;
  defaultParams = {
    ju: __WEBPACK_IMPORTED_MODULE_0__src_config_js__["b" /* config */].getConfig('pageUrl') || bidderRequest.refererInfo.referer,
    ch: document.charSet || document.characterSet,
    res: "".concat(screen.width, "x").concat(screen.height, "x").concat(screen.colorDepth),
    ifr: isInIframe,
    tz: new Date().getTimezoneOffset(),
    tws: getViewportDimensions(isInIframe),
    be: 1,
    bc: bids[0].params.bc || "".concat(BIDDER_CONFIG, "_").concat(BIDDER_VERSION),
    dddid: __WEBPACK_IMPORTED_MODULE_2__src_utils_js__["_map"](bids, function (bid) {
      return bid.transactionId;
    }).join(','),
    nocache: new Date().getTime()
  };

  if (bids[0].params.platform) {
    defaultParams.ph = bids[0].params.platform;
  }

  if (bidderRequest.gdprConsent) {
    var gdprConsentConfig = bidderRequest.gdprConsent;

    if (gdprConsentConfig.consentString !== undefined) {
      defaultParams.gdpr_consent = gdprConsentConfig.consentString;
    }

    if (gdprConsentConfig.gdprApplies !== undefined) {
      defaultParams.gdpr = gdprConsentConfig.gdprApplies ? 1 : 0;
    }

    if (__WEBPACK_IMPORTED_MODULE_0__src_config_js__["b" /* config */].getConfig('consentManagement.cmpApi') === 'iab') {
      defaultParams.x_gdpr_f = 1;
    }
  }

  if (bidderRequest && bidderRequest.uspConsent) {
    defaultParams.us_privacy = bidderRequest.uspConsent;
  } // normalize publisher common id


  if (__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["deepAccess"](bids[0], 'crumbs.pubcid')) {
    __WEBPACK_IMPORTED_MODULE_2__src_utils_js__["deepSetValue"](bids[0], 'userId.pubcid', __WEBPACK_IMPORTED_MODULE_2__src_utils_js__["deepAccess"](bids[0], 'crumbs.pubcid'));
  }

  defaultParams = appendUserIdsToQueryParams(defaultParams, bids[0].userId); // supply chain support

  if (bids[0].schain) {
    defaultParams.schain = serializeSupplyChain(bids[0].schain);
  }

  return defaultParams;
}

function appendUserIdsToQueryParams(queryParams, userIds) {
  __WEBPACK_IMPORTED_MODULE_2__src_utils_js__["_each"](userIds, function (userIdObjectOrValue, userIdProviderKey) {
    var key = USER_ID_CODE_TO_QUERY_ARG[userIdProviderKey];

    if (USER_ID_CODE_TO_QUERY_ARG.hasOwnProperty(userIdProviderKey)) {
      switch (userIdProviderKey) {
        case 'digitrustid':
          queryParams[key] = __WEBPACK_IMPORTED_MODULE_2__src_utils_js__["deepAccess"](userIdObjectOrValue, 'data.id');
          break;

        case 'lipb':
          queryParams[key] = userIdObjectOrValue.lipbid;
          break;

        default:
          queryParams[key] = userIdObjectOrValue;
      }
    }
  });

  return queryParams;
}

function serializeSupplyChain(supplyChain) {
  return "".concat(supplyChain.ver, ",").concat(supplyChain.complete, "!").concat(serializeSupplyChainNodes(supplyChain.nodes));
}

function serializeSupplyChainNodes(supplyChainNodes) {
  var supplyChainNodePropertyOrder = ['asi', 'sid', 'hp', 'rid', 'name', 'domain'];
  return supplyChainNodes.map(function (supplyChainNode) {
    return supplyChainNodePropertyOrder.map(function (property) {
      return supplyChainNode[property] || '';
    }).join(',');
  }).join('!');
}

function buildOXBannerRequest(bids, bidderRequest) {
  var customParamsForAllBids = [];
  var hasCustomParam = false;
  var queryParams = buildCommonQueryParamsFromBids(bids, bidderRequest);

  var auids = __WEBPACK_IMPORTED_MODULE_2__src_utils_js__["_map"](bids, function (bid) {
    return bid.params.unit;
  });

  queryParams.aus = __WEBPACK_IMPORTED_MODULE_2__src_utils_js__["_map"](bids, function (bid) {
    return __WEBPACK_IMPORTED_MODULE_2__src_utils_js__["parseSizesInput"](bid.mediaTypes.banner.sizes).join(',');
  }).join('|');
  queryParams.divIds = __WEBPACK_IMPORTED_MODULE_2__src_utils_js__["_map"](bids, function (bid) {
    return encodeURIComponent(bid.adUnitCode);
  }).join(',');

  if (auids.some(function (auid) {
    return auid;
  })) {
    queryParams.auid = auids.join(',');
  }

  if (bids.some(function (bid) {
    return bid.params.doNotTrack;
  })) {
    queryParams.ns = 1;
  }

  if (__WEBPACK_IMPORTED_MODULE_0__src_config_js__["b" /* config */].getConfig('coppa') === true || bids.some(function (bid) {
    return bid.params.coppa;
  })) {
    queryParams.tfcd = 1;
  }

  bids.forEach(function (bid) {
    if (bid.params.customParams) {
      var customParamsForBid = __WEBPACK_IMPORTED_MODULE_2__src_utils_js__["_map"](Object.keys(bid.params.customParams), function (customKey) {
        return formatCustomParms(customKey, bid.params.customParams);
      });

      var formattedCustomParams = window.btoa(customParamsForBid.join('&'));
      hasCustomParam = true;
      customParamsForAllBids.push(formattedCustomParams);
    } else {
      customParamsForAllBids.push('');
    }
  });

  if (hasCustomParam) {
    queryParams.tps = customParamsForAllBids.join(',');
  }

  var customFloorsForAllBids = [];
  var hasCustomFloor = false;
  bids.forEach(function (bid) {
    if (bid.params.customFloor) {
      customFloorsForAllBids.push(Math.round(bid.params.customFloor * 100) / 100 * 1000);
      hasCustomFloor = true;
    } else {
      customFloorsForAllBids.push(0);
    }
  });

  if (hasCustomFloor) {
    queryParams.aumfs = customFloorsForAllBids.join(',');
  }

  var url = queryParams.ph ? "https://u.openx.net/w/1.0/arj" : "https://".concat(bids[0].params.delDomain, "/w/1.0/arj");
  return {
    method: 'GET',
    url: url,
    data: queryParams,
    payload: {
      'bids': bids,
      'startTime': new Date()
    }
  };
}

function buildOXVideoRequest(bid, bidderRequest) {
  var oxVideoParams = generateVideoParameters(bid, bidderRequest);
  var url = oxVideoParams.ph ? "https://u.openx.net/v/1.0/avjp" : "https://".concat(bid.params.delDomain, "/v/1.0/avjp");
  return {
    method: 'GET',
    url: url,
    data: oxVideoParams,
    payload: {
      'bid': bid,
      'startTime': new Date()
    }
  };
}

function generateVideoParameters(bid, bidderRequest) {
  var queryParams = buildCommonQueryParamsFromBids([bid], bidderRequest);
  var oxVideoConfig = __WEBPACK_IMPORTED_MODULE_2__src_utils_js__["deepAccess"](bid, 'params.video') || {};
  var context = __WEBPACK_IMPORTED_MODULE_2__src_utils_js__["deepAccess"](bid, 'mediaTypes.video.context');
  var playerSize = __WEBPACK_IMPORTED_MODULE_2__src_utils_js__["deepAccess"](bid, 'mediaTypes.video.playerSize');
  var width;
  var height; // normalize config for video size

  if (__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["isArray"](bid.sizes) && bid.sizes.length === 2 && !__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["isArray"](bid.sizes[0])) {
    width = parseInt(bid.sizes[0], 10);
    height = parseInt(bid.sizes[1], 10);
  } else if (__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["isArray"](bid.sizes) && __WEBPACK_IMPORTED_MODULE_2__src_utils_js__["isArray"](bid.sizes[0]) && bid.sizes[0].length === 2) {
    width = parseInt(bid.sizes[0][0], 10);
    height = parseInt(bid.sizes[0][1], 10);
  } else if (__WEBPACK_IMPORTED_MODULE_2__src_utils_js__["isArray"](playerSize) && playerSize.length === 2) {
    width = parseInt(playerSize[0], 10);
    height = parseInt(playerSize[1], 10);
  }

  Object.keys(oxVideoConfig).forEach(function (key) {
    if (key === 'openrtb') {
      oxVideoConfig[key].w = width || oxVideoConfig[key].w;
      oxVideoConfig[key].v = height || oxVideoConfig[key].v;
      queryParams[key] = JSON.stringify(oxVideoConfig[key]);
    } else if (!(key in queryParams) && key !== 'url') {
      // only allow video-related attributes
      queryParams[key] = oxVideoConfig[key];
    }
  });
  queryParams.auid = bid.params.unit; // override prebid config with openx config if available

  queryParams.vwd = width || oxVideoConfig.vwd;
  queryParams.vht = height || oxVideoConfig.vht;

  if (context === 'outstream') {
    queryParams.vos = '101';
  }

  if (oxVideoConfig.mimes) {
    queryParams.vmimes = oxVideoConfig.mimes;
  }

  return queryParams;
}

function createVideoBidResponses(response, _ref3) {
  var bid = _ref3.bid,
      startTime = _ref3.startTime;
  var bidResponses = [];

  if (response !== undefined && response.vastUrl !== '' && response.pub_rev !== '') {
    var vastQueryParams = __WEBPACK_IMPORTED_MODULE_2__src_utils_js__["parseUrl"](response.vastUrl).search || {};
    var bidResponse = {};
    bidResponse.requestId = bid.bidId; // default 5 mins

    bidResponse.ttl = 300; // true is net, false is gross

    bidResponse.netRevenue = true;
    bidResponse.currency = response.currency;
    bidResponse.cpm = Number(response.pub_rev) / 1000;
    bidResponse.width = response.width;
    bidResponse.height = response.height;
    bidResponse.creativeId = response.adid;
    bidResponse.vastUrl = response.vastUrl;
    bidResponse.mediaType = __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["d" /* VIDEO */]; // enrich adunit with vast parameters

    response.ph = vastQueryParams.ph;
    response.colo = vastQueryParams.colo;
    response.ts = vastQueryParams.ts;
    bidResponses.push(bidResponse);
  }

  return bidResponses;
}

Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__["registerBidder"])(spec);

/***/ })

},[507]);

owpbjsChunk([123],{

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(547);


/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", function() { return spec; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_config_js__ = __webpack_require__(3);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





var BIDDER_CODE = 'pubmatic';
var LOG_WARN_PREFIX = 'PubMatic: ';
var ENDPOINT = 'https://hbopenbid.pubmatic.com/translator?source=prebid-client';
var USER_SYNC_URL_IFRAME = 'https://ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=';
var USER_SYNC_URL_IMAGE = 'https://image8.pubmatic.com/AdServer/ImgSync?p=';
var DEFAULT_CURRENCY = 'USD';
var AUCTION_TYPE = 1;
var PUBMATIC_DIGITRUST_KEY = 'nFIn8aLzbd';
var PUBMATIC_ALIAS = 'pubmatic2';
var UNDEFINED = undefined;
var DEFAULT_WIDTH = 0;
var DEFAULT_HEIGHT = 0;
var PREBID_NATIVE_HELP_LINK = 'http://prebid.org/dev-docs/show-native-ads.html';
var CUSTOM_PARAMS = {
  'kadpageurl': '',
  // Custom page url
  'gender': '',
  // User gender
  'yob': '',
  // User year of birth
  'lat': '',
  // User location - Latitude
  'lon': '',
  // User Location - Longitude
  'wiid': '',
  // OpenWrap Wrapper Impression ID
  'profId': '',
  // OpenWrap Legacy: Profile ID
  'verId': '' // OpenWrap Legacy: version ID

};
var DATA_TYPES = {
  'NUMBER': 'number',
  'STRING': 'string',
  'BOOLEAN': 'boolean',
  'ARRAY': 'array',
  'OBJECT': 'object'
};
var VIDEO_CUSTOM_PARAMS = {
  'mimes': DATA_TYPES.ARRAY,
  'minduration': DATA_TYPES.NUMBER,
  'maxduration': DATA_TYPES.NUMBER,
  'startdelay': DATA_TYPES.NUMBER,
  'playbackmethod': DATA_TYPES.ARRAY,
  'api': DATA_TYPES.ARRAY,
  'protocols': DATA_TYPES.ARRAY,
  'w': DATA_TYPES.NUMBER,
  'h': DATA_TYPES.NUMBER,
  'battr': DATA_TYPES.ARRAY,
  'linearity': DATA_TYPES.NUMBER,
  'placement': DATA_TYPES.NUMBER,
  'minbitrate': DATA_TYPES.NUMBER,
  'maxbitrate': DATA_TYPES.NUMBER
};
var NATIVE_ASSETS = {
  'TITLE': {
    ID: 1,
    KEY: 'title',
    TYPE: 0
  },
  'IMAGE': {
    ID: 2,
    KEY: 'image',
    TYPE: 0
  },
  'ICON': {
    ID: 3,
    KEY: 'icon',
    TYPE: 0
  },
  'SPONSOREDBY': {
    ID: 4,
    KEY: 'sponsoredBy',
    TYPE: 1
  },
  // please note that type of SPONSORED is also 1
  'BODY': {
    ID: 5,
    KEY: 'body',
    TYPE: 2
  },
  // please note that type of DESC is also set to 2
  'CLICKURL': {
    ID: 6,
    KEY: 'clickUrl',
    TYPE: 0
  },
  'VIDEO': {
    ID: 7,
    KEY: 'video',
    TYPE: 0
  },
  'EXT': {
    ID: 8,
    KEY: 'ext',
    TYPE: 0
  },
  'DATA': {
    ID: 9,
    KEY: 'data',
    TYPE: 0
  },
  'LOGO': {
    ID: 10,
    KEY: 'logo',
    TYPE: 0
  },
  'SPONSORED': {
    ID: 11,
    KEY: 'sponsored',
    TYPE: 1
  },
  // please note that type of SPONSOREDBY is also set to 1
  'DESC': {
    ID: 12,
    KEY: 'data',
    TYPE: 2
  },
  // please note that type of BODY is also set to 2
  'RATING': {
    ID: 13,
    KEY: 'rating',
    TYPE: 3
  },
  'LIKES': {
    ID: 14,
    KEY: 'likes',
    TYPE: 4
  },
  'DOWNLOADS': {
    ID: 15,
    KEY: 'downloads',
    TYPE: 5
  },
  'PRICE': {
    ID: 16,
    KEY: 'price',
    TYPE: 6
  },
  'SALEPRICE': {
    ID: 17,
    KEY: 'saleprice',
    TYPE: 7
  },
  'PHONE': {
    ID: 18,
    KEY: 'phone',
    TYPE: 8
  },
  'ADDRESS': {
    ID: 19,
    KEY: 'address',
    TYPE: 9
  },
  'DESC2': {
    ID: 20,
    KEY: 'desc2',
    TYPE: 10
  },
  'DISPLAYURL': {
    ID: 21,
    KEY: 'displayurl',
    TYPE: 11
  },
  'CTA': {
    ID: 22,
    KEY: 'cta',
    TYPE: 12
  }
};
var NATIVE_ASSET_IMAGE_TYPE = {
  'ICON': 1,
  'LOGO': 2,
  'IMAGE': 3
}; // check if title, image can be added with mandatory field default values

var NATIVE_MINIMUM_REQUIRED_IMAGE_ASSETS = [{
  id: NATIVE_ASSETS.SPONSOREDBY.ID,
  required: true,
  data: {
    type: 1
  }
}, {
  id: NATIVE_ASSETS.TITLE.ID,
  required: true
}, {
  id: NATIVE_ASSETS.IMAGE.ID,
  required: true
}];
var NET_REVENUE = false;
var dealChannelValues = {
  1: 'PMP',
  5: 'PREF',
  6: 'PMPG'
};
var publisherId = 0;
var isInvalidNativeRequest = false;
var NATIVE_ASSET_ID_TO_KEY_MAP = {};
var NATIVE_ASSET_KEY_TO_ASSET_MAP = {}; // loading NATIVE_ASSET_ID_TO_KEY_MAP

__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["_each"](NATIVE_ASSETS, function (anAsset) {
  NATIVE_ASSET_ID_TO_KEY_MAP[anAsset.ID] = anAsset.KEY;
}); // loading NATIVE_ASSET_KEY_TO_ASSET_MAP


__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["_each"](NATIVE_ASSETS, function (anAsset) {
  NATIVE_ASSET_KEY_TO_ASSET_MAP[anAsset.KEY] = anAsset;
});

function _getDomainFromURL(url) {
  var anchor = document.createElement('a');
  anchor.href = url;
  return anchor.hostname;
}

function _parseSlotParam(paramName, paramValue) {
  if (!__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"](paramValue)) {
    paramValue && __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'Ignoring param key: ' + paramName + ', expects string-value, found ' + _typeof(paramValue));
    return UNDEFINED;
  }

  switch (paramName) {
    case 'pmzoneid':
      return paramValue.split(',').slice(0, 50).map(function (id) {
        return id.trim();
      }).join();

    case 'kadfloor':
      return parseFloat(paramValue) || UNDEFINED;

    case 'lat':
      return parseFloat(paramValue) || UNDEFINED;

    case 'lon':
      return parseFloat(paramValue) || UNDEFINED;

    case 'yob':
      return parseInt(paramValue) || UNDEFINED;

    default:
      return paramValue;
  }
}

function _cleanSlot(slotName) {
  if (__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"](slotName)) {
    return slotName.replace(/^\s+/g, '').replace(/\s+$/g, '');
  }

  return '';
}

function _parseAdSlot(bid) {
  bid.params.adUnit = '';
  bid.params.adUnitIndex = '0';
  bid.params.width = 0;
  bid.params.height = 0;
  bid.params.adSlot = _cleanSlot(bid.params.adSlot);
  var slot = bid.params.adSlot;
  var splits = slot.split(':');
  slot = splits[0];

  if (splits.length == 2) {
    bid.params.adUnitIndex = splits[1];
  } // check if size is mentioned in sizes array. in that case do not check for @ in adslot


  splits = slot.split('@');
  bid.params.adUnit = splits[0];

  if (splits.length > 1) {
    // i.e size is specified in adslot, so consider that and ignore sizes array
    splits = splits.length == 2 ? splits[1].split('x') : splits.length == 3 ? splits[2].split('x') : [];

    if (splits.length != 2) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'AdSlot Error: adSlot not in required format');
      return;
    }

    bid.params.width = parseInt(splits[0], 10);
    bid.params.height = parseInt(splits[1], 10);
  } // Case : if Size is present in ad slot as well as in mediaTypes then ???


  if (bid.hasOwnProperty('mediaTypes') && bid.mediaTypes.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["b" /* BANNER */]) && bid.mediaTypes.banner.hasOwnProperty('sizes')) {
    var i = 0;
    var sizeArray = [];

    for (; i < bid.mediaTypes.banner.sizes.length; i++) {
      if (bid.mediaTypes.banner.sizes[i].length === 2) {
        // sizes[i].length will not be 2 in case where size is set as fluid, we want to skip that entry
        sizeArray.push(bid.mediaTypes.banner.sizes[i]);
      }
    }

    bid.mediaTypes.banner.sizes = sizeArray;

    if (bid.mediaTypes.banner.sizes.length >= 1) {
      // set the first size in sizes array in bid.params.width and bid.params.height. These will be sent as primary size.
      // The rest of the sizes will be sent in format array.
      if (!bid.params.width && !bid.params.height) {
        bid.params.width = bid.mediaTypes.banner.sizes[0][0];
        bid.params.height = bid.mediaTypes.banner.sizes[0][1];
        bid.mediaTypes.banner.sizes = bid.mediaTypes.banner.sizes.splice(1, bid.mediaTypes.banner.sizes.length - 1);
      } else if (bid.params.width == bid.mediaTypes.banner.sizes[0][0] && bid.params.height == bid.mediaTypes.banner.sizes[0][1]) {
        bid.mediaTypes.banner.sizes = bid.mediaTypes.banner.sizes.splice(1, bid.mediaTypes.banner.sizes.length - 1);
      }
    }
  }
}

function _initConf(refererInfo) {
  return {
    pageURL: refererInfo && refererInfo.referer ? refererInfo.referer : window.location.href,
    refURL: window.document.referrer
  };
}

function _handleCustomParams(params, conf) {
  if (!conf.kadpageurl) {
    conf.kadpageurl = conf.pageURL;
  }

  var key, value, entry;

  for (key in CUSTOM_PARAMS) {
    if (CUSTOM_PARAMS.hasOwnProperty(key)) {
      value = params[key];

      if (value) {
        entry = CUSTOM_PARAMS[key];

        if (_typeof(entry) === 'object') {
          // will be used in future when we want to process a custom param before using
          // 'keyname': {f: function() {}}
          value = entry.f(value, conf);
        }

        if (__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"](value)) {
          conf[key] = value;
        } else {
          __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'Ignoring param : ' + key + ' with value : ' + CUSTOM_PARAMS[key] + ', expects string-value, found ' + _typeof(value));
        }
      }
    }
  }

  return conf;
}

function _createOrtbTemplate(conf) {
  return {
    id: '' + new Date().getTime(),
    at: AUCTION_TYPE,
    cur: [DEFAULT_CURRENCY],
    imp: [],
    site: {
      page: conf.pageURL,
      ref: conf.refURL,
      publisher: {}
    },
    device: {
      ua: navigator.userAgent,
      js: 1,
      dnt: navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1' || navigator.msDoNotTrack == '1' ? 1 : 0,
      h: screen.height,
      w: screen.width,
      language: navigator.language
    },
    user: {},
    ext: {}
  };
}

function _checkParamDataType(key, value, datatype) {
  var errMsg = 'Ignoring param key: ' + key + ', expects ' + datatype + ', found ' + _typeof(value);

  var functionToExecute;

  switch (datatype) {
    case DATA_TYPES.BOOLEAN:
      functionToExecute = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isBoolean"];
      break;

    case DATA_TYPES.NUMBER:
      functionToExecute = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isNumber"];
      break;

    case DATA_TYPES.STRING:
      functionToExecute = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"];
      break;

    case DATA_TYPES.ARRAY:
      functionToExecute = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"];
      break;
  }

  if (functionToExecute(value)) {
    return value;
  }

  __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + errMsg);
  return UNDEFINED;
}

function _commonNativeRequestObject(nativeAsset, params) {
  var key = nativeAsset.KEY;
  return {
    id: nativeAsset.ID,
    required: params[key].required ? 1 : 0,
    data: {
      type: nativeAsset.TYPE,
      len: params[key].len,
      ext: params[key].ext
    }
  };
}

function _createNativeRequest(params) {
  var nativeRequestObject = {
    assets: []
  };

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      var assetObj = {};

      if (!(nativeRequestObject.assets && nativeRequestObject.assets.length > 0 && nativeRequestObject.assets.hasOwnProperty(key))) {
        switch (key) {
          case NATIVE_ASSETS.TITLE.KEY:
            if (params[key].len || params[key].length) {
              assetObj = {
                id: NATIVE_ASSETS.TITLE.ID,
                required: params[key].required ? 1 : 0,
                title: {
                  len: params[key].len || params[key].length,
                  ext: params[key].ext
                }
              };
            } else {
              __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'Error: Title Length is required for native ad: ' + JSON.stringify(params));
            }

            break;

          case NATIVE_ASSETS.IMAGE.KEY:
            if (params[key].sizes && params[key].sizes.length > 0) {
              assetObj = {
                id: NATIVE_ASSETS.IMAGE.ID,
                required: params[key].required ? 1 : 0,
                img: {
                  type: NATIVE_ASSET_IMAGE_TYPE.IMAGE,
                  w: params[key].w || params[key].width || (params[key].sizes ? params[key].sizes[0] : UNDEFINED),
                  h: params[key].h || params[key].height || (params[key].sizes ? params[key].sizes[1] : UNDEFINED),
                  wmin: params[key].wmin || params[key].minimumWidth || (params[key].minsizes ? params[key].minsizes[0] : UNDEFINED),
                  hmin: params[key].hmin || params[key].minimumHeight || (params[key].minsizes ? params[key].minsizes[1] : UNDEFINED),
                  mimes: params[key].mimes,
                  ext: params[key].ext
                }
              };
            } else {
              __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'Error: Image sizes is required for native ad: ' + JSON.stringify(params));
            }

            break;

          case NATIVE_ASSETS.ICON.KEY:
            if (params[key].sizes && params[key].sizes.length > 0) {
              assetObj = {
                id: NATIVE_ASSETS.ICON.ID,
                required: params[key].required ? 1 : 0,
                img: {
                  type: NATIVE_ASSET_IMAGE_TYPE.ICON,
                  w: params[key].w || params[key].width || (params[key].sizes ? params[key].sizes[0] : UNDEFINED),
                  h: params[key].h || params[key].height || (params[key].sizes ? params[key].sizes[1] : UNDEFINED),
                  ext: params[key].ext
                }
              };
            } else {
              __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'Error: Icon sizes is required for native ad: ' + JSON.stringify(params));
            }

            ;
            break;

          case NATIVE_ASSETS.VIDEO.KEY:
            assetObj = {
              id: NATIVE_ASSETS.VIDEO.ID,
              required: params[key].required ? 1 : 0,
              video: {
                minduration: params[key].minduration,
                maxduration: params[key].maxduration,
                protocols: params[key].protocols,
                mimes: params[key].mimes,
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSETS.EXT.KEY:
            assetObj = {
              id: NATIVE_ASSETS.EXT.ID,
              required: params[key].required ? 1 : 0
            };
            break;

          case NATIVE_ASSETS.LOGO.KEY:
            assetObj = {
              id: NATIVE_ASSETS.LOGO.ID,
              required: params[key].required ? 1 : 0,
              img: {
                type: NATIVE_ASSET_IMAGE_TYPE.LOGO,
                w: params[key].w || params[key].width || (params[key].sizes ? params[key].sizes[0] : UNDEFINED),
                h: params[key].h || params[key].height || (params[key].sizes ? params[key].sizes[1] : UNDEFINED),
                ext: params[key].ext
              }
            };
            break;

          case NATIVE_ASSETS.SPONSOREDBY.KEY:
          case NATIVE_ASSETS.BODY.KEY:
          case NATIVE_ASSETS.RATING.KEY:
          case NATIVE_ASSETS.LIKES.KEY:
          case NATIVE_ASSETS.DOWNLOADS.KEY:
          case NATIVE_ASSETS.PRICE.KEY:
          case NATIVE_ASSETS.SALEPRICE.KEY:
          case NATIVE_ASSETS.PHONE.KEY:
          case NATIVE_ASSETS.ADDRESS.KEY:
          case NATIVE_ASSETS.DESC2.KEY:
          case NATIVE_ASSETS.DISPLAYURL.KEY:
          case NATIVE_ASSETS.CTA.KEY:
            assetObj = _commonNativeRequestObject(NATIVE_ASSET_KEY_TO_ASSET_MAP[key], params);
            break;
        }
      }
    }

    if (assetObj && assetObj.id) {
      nativeRequestObject.assets[nativeRequestObject.assets.length] = assetObj;
    }
  }

  ; // for native image adtype prebid has to have few required assests i.e. title,sponsoredBy, image
  // if any of these are missing from the request then request will not be sent

  var requiredAssetCount = NATIVE_MINIMUM_REQUIRED_IMAGE_ASSETS.length;
  var presentrequiredAssetCount = 0;
  NATIVE_MINIMUM_REQUIRED_IMAGE_ASSETS.forEach(function (ele) {
    var lengthOfExistingAssets = nativeRequestObject.assets.length;

    for (var i = 0; i < lengthOfExistingAssets; i++) {
      if (ele.id == nativeRequestObject.assets[i].id) {
        presentrequiredAssetCount++;
        break;
      }
    }
  });

  if (requiredAssetCount == presentrequiredAssetCount) {
    isInvalidNativeRequest = false;
  } else {
    isInvalidNativeRequest = true;
  }

  return nativeRequestObject;
}

function _createBannerRequest(bid) {
  var sizes = bid.mediaTypes.banner.sizes;
  var format = [];
  var bannerObj;

  if (sizes !== UNDEFINED && __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"](sizes)) {
    bannerObj = {};

    if (!bid.params.width && !bid.params.height) {
      if (sizes.length === 0) {
        // i.e. since bid.params does not have width or height, and length of sizes is 0, need to ignore this banner imp
        bannerObj = UNDEFINED;
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'Error: mediaTypes.banner.size missing for adunit: ' + bid.params.adUnit + '. Ignoring the banner impression in the adunit.');
        return bannerObj;
      } else {
        bannerObj.w = parseInt(sizes[0][0], 10);
        bannerObj.h = parseInt(sizes[0][1], 10);
        sizes = sizes.splice(1, sizes.length - 1);
      }
    } else {
      bannerObj.w = bid.params.width;
      bannerObj.h = bid.params.height;
    }

    if (sizes.length > 0) {
      format = [];
      sizes.forEach(function (size) {
        if (size.length > 1) {
          format.push({
            w: size[0],
            h: size[1]
          });
        }
      });

      if (format.length > 0) {
        bannerObj.format = format;
      }
    }

    bannerObj.pos = 0;
    bannerObj.topframe = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["inIframe"]() ? 0 : 1;
  } else {
    __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'Error: mediaTypes.banner.size missing for adunit: ' + bid.params.adUnit + '. Ignoring the banner impression in the adunit.');
    bannerObj = UNDEFINED;
  }

  return bannerObj;
}

function _createVideoRequest(bid) {
  var videoData = bid.params.video;
  var videoObj;

  if (videoData !== UNDEFINED) {
    videoObj = {};

    for (var key in VIDEO_CUSTOM_PARAMS) {
      if (videoData.hasOwnProperty(key)) {
        videoObj[key] = _checkParamDataType(key, videoData[key], VIDEO_CUSTOM_PARAMS[key]);
      }
    } // read playersize and assign to h and w.


    if (bid.mediaTypes.video.playerSize) {
      if (__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"](bid.mediaTypes.video.playerSize[0])) {
        videoObj.w = parseInt(bid.mediaTypes.video.playerSize[0][0], 10);
        videoObj.h = parseInt(bid.mediaTypes.video.playerSize[0][1], 10);
      } else if (__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isNumber"](bid.mediaTypes.video.playerSize[0])) {
        videoObj.w = parseInt(bid.mediaTypes.video.playerSize[0], 10);
        videoObj.h = parseInt(bid.mediaTypes.video.playerSize[1], 10);
      }
    } else if (bid.mediaTypes.video.w && bid.mediaTypes.video.h) {
      videoObj.w = parseInt(bid.mediaTypes.video.w, 10);
      videoObj.h = parseInt(bid.mediaTypes.video.h, 10);
    } else {
      videoObj = UNDEFINED;
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'Error: Video size params(playersize or w&h) missing for adunit: ' + bid.params.adUnit + ' with mediaType set as video. Ignoring video impression in the adunit.');
      return videoObj;
    }

    if (bid.params.video.hasOwnProperty('skippable')) {
      videoObj.ext = {
        'video_skippable': bid.params.video.skippable ? 1 : 0
      };
    }
  } else {
    videoObj = UNDEFINED;
    __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'Error: Video config params missing for adunit: ' + bid.params.adUnit + ' with mediaType set as video. Ignoring video impression in the adunit.');
  }

  return videoObj;
} // support for PMP deals


function _addPMPDealsInImpression(impObj, bid) {
  if (bid.params.deals) {
    if (__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"](bid.params.deals)) {
      bid.params.deals.forEach(function (dealId) {
        if (__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"](dealId) && dealId.length > 3) {
          if (!impObj.pmp) {
            impObj.pmp = {
              private_auction: 0,
              deals: []
            };
          }

          impObj.pmp.deals.push({
            id: dealId
          });
        } else {
          __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: ' + dealId);
        }
      });
    } else {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'Error: bid.params.deals should be an array of strings.');
    }
  }
}

function _createImpressionObject(bid, conf) {
  var impObj = {};
  var bannerObj;
  var videoObj;
  var nativeObj = {};
  var sizes = bid.hasOwnProperty('sizes') ? bid.sizes : [];
  var mediaTypes = '';
  var format = [];
  impObj = {
    id: bid.bidId,
    tagid: bid.params.hashedKey || bid.params.adUnit || undefined,
    bidfloor: _parseSlotParam('kadfloor', bid.params.kadfloor),
    secure: 1,
    ext: {
      pmZoneId: _parseSlotParam('pmzoneid', bid.params.pmzoneid)
    },
    bidfloorcur: bid.params.currency ? _parseSlotParam('currency', bid.params.currency) : DEFAULT_CURRENCY
  };

  _addPMPDealsInImpression(impObj, bid);

  if (bid.hasOwnProperty('mediaTypes')) {
    for (mediaTypes in bid.mediaTypes) {
      switch (mediaTypes) {
        case __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["b" /* BANNER */]:
          bannerObj = _createBannerRequest(bid);

          if (bannerObj !== UNDEFINED) {
            impObj.banner = bannerObj;
          }

          break;

        case __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["c" /* NATIVE */]:
          nativeObj['request'] = JSON.stringify(_createNativeRequest(bid.nativeParams));

          if (!isInvalidNativeRequest) {
            impObj.native = nativeObj;
          } else {
            __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'Error: Error in Native adunit ' + bid.params.adUnit + '. Ignoring the adunit. Refer to ' + PREBID_NATIVE_HELP_LINK + ' for more details.');
          }

          break;

        case __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["d" /* VIDEO */]:
          videoObj = _createVideoRequest(bid);

          if (videoObj !== UNDEFINED) {
            impObj.video = videoObj;
          }

          break;
      }
    }
  } else {
    // mediaTypes is not present, so this is a banner only impression
    // this part of code is required for older testcases with no 'mediaTypes' to run succesfully.
    bannerObj = {
      pos: 0,
      w: bid.params.width,
      h: bid.params.height,
      topframe: __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["inIframe"]() ? 0 : 1
    };

    if (__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"](sizes) && sizes.length > 1) {
      sizes = sizes.splice(1, sizes.length - 1);
      sizes.forEach(function (size) {
        if (__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"](size) && size.length == 2) {
          format.push({
            w: size[0],
            h: size[1]
          });
        }

        ;
      });
      bannerObj.format = format;
    }

    impObj.banner = bannerObj;
  }

  return impObj.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["b" /* BANNER */]) || impObj.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["c" /* NATIVE */]) || impObj.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["d" /* VIDEO */]) ? impObj : UNDEFINED;
}

function _getDigiTrustObject(key) {
  function getDigiTrustId() {
    var digiTrustUser = window.DigiTrust && (__WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('digiTrustId') || window.DigiTrust.getUser({
      member: key
    }));
    return digiTrustUser && digiTrustUser.success && digiTrustUser.identity || null;
  }

  var digiTrustId = getDigiTrustId(); // Verify there is an ID and this user has not opted out

  if (!digiTrustId || digiTrustId.privacy && digiTrustId.privacy.optout) {
    return null;
  }

  return digiTrustId;
}

function _handleDigitrustId(eids) {
  var digiTrustId = _getDigiTrustObject(PUBMATIC_DIGITRUST_KEY);

  if (digiTrustId !== null) {
    eids.push({
      'source': 'digitru.st',
      'uids': [{
        'id': digiTrustId.id || '',
        'atype': 1,
        'ext': {
          'keyv': parseInt(digiTrustId.keyv) || 0
        }
      }]
    });
  }
}

function _handleTTDId(eids, validBidRequests) {
  var ttdId = null;
  var adsrvrOrgId = __WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('adsrvrOrgId');

  if (__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"](__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](validBidRequests, '0.userId.tdid'))) {
    ttdId = validBidRequests[0].userId.tdid;
  } else if (adsrvrOrgId && __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"](adsrvrOrgId.TDID)) {
    ttdId = adsrvrOrgId.TDID;
  }

  if (ttdId !== null) {
    eids.push({
      'source': 'adserver.org',
      'uids': [{
        'id': ttdId,
        'atype': 1,
        'ext': {
          'rtiPartner': 'TDID'
        }
      }]
    });
  }
}
/**
 * Produces external userid object in ortb 3.0 model.
 */


function _addExternalUserId(eids, value, source, atype) {
  if (__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"](value)) {
    eids.push({
      source: source,
      uids: [{
        id: value,
        atype: atype
      }]
    });
  }
}

function _handleEids(payload, validBidRequests) {
  var eids = [];

  _handleDigitrustId(eids);

  _handleTTDId(eids, validBidRequests);

  var bidRequest = validBidRequests[0];

  if (bidRequest && bidRequest.userId) {
    _addExternalUserId(eids, __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, "userId.pubcid"), 'pubcid.org', 1);

    _addExternalUserId(eids, __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, "userId.digitrustid.data.id"), 'digitru.st', 1);

    _addExternalUserId(eids, __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, "userId.id5id"), 'id5-sync.com', 1);

    _addExternalUserId(eids, __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, "userId.criteoId"), 'criteo.com', 1); // replacing criteoRtus


    _addExternalUserId(eids, __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, "userId.idl_env"), 'liveramp.com', 1);

    _addExternalUserId(eids, __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, "userId.lipb.lipbid"), 'liveintent.com', 1);

    _addExternalUserId(eids, __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, "userId.parrableid"), 'parrable.com', 1);

    _addExternalUserId(eids, __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, "userId.britepoolid"), 'britepool.com', 1);

    _addExternalUserId(eids, __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, "userId.netId"), 'netid.de', 1);

    _addExternalUserId(eids, __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, "userId.firstpartyid"), 'firstpartyid', 1);
  }

  if (eids.length > 0) {
    payload.user.eids = eids;
  }
}

function _checkMediaType(adm, newBid) {
  // Create a regex here to check the strings
  var admStr = '';
  var videoRegex = new RegExp(/VAST\s+version/);

  if (adm.indexOf('span class="PubAPIAd"') >= 0) {
    newBid.mediaType = __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["b" /* BANNER */];
  } else if (videoRegex.test(adm)) {
    newBid.mediaType = __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["d" /* VIDEO */];
  } else {
    try {
      admStr = JSON.parse(adm.replace(/\\/g, ''));

      if (admStr && admStr.native) {
        newBid.mediaType = __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["c" /* NATIVE */];
      }
    } catch (e) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'Error: Cannot parse native reponse for ad response: ' + adm);
    }
  }
}

function _parseNativeResponse(bid, newBid) {
  newBid.native = {};

  if (bid.hasOwnProperty('adm')) {
    var adm = '';

    try {
      adm = JSON.parse(bid.adm.replace(/\\/g, ''));
    } catch (ex) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'Error: Cannot parse native reponse for ad response: ' + newBid.adm);
      return;
    }

    if (adm && adm.native && adm.native.assets && adm.native.assets.length > 0) {
      newBid.mediaType = __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["c" /* NATIVE */];

      for (var i = 0, len = adm.native.assets.length; i < len; i++) {
        switch (adm.native.assets[i].id) {
          case NATIVE_ASSETS.TITLE.ID:
            newBid.native.title = adm.native.assets[i].title && adm.native.assets[i].title.text;
            break;

          case NATIVE_ASSETS.IMAGE.ID:
            newBid.native.image = {
              url: adm.native.assets[i].img && adm.native.assets[i].img.url,
              height: adm.native.assets[i].img && adm.native.assets[i].img.h,
              width: adm.native.assets[i].img && adm.native.assets[i].img.w
            };
            break;

          case NATIVE_ASSETS.ICON.ID:
            newBid.native.icon = {
              url: adm.native.assets[i].img && adm.native.assets[i].img.url,
              height: adm.native.assets[i].img && adm.native.assets[i].img.h,
              width: adm.native.assets[i].img && adm.native.assets[i].img.w
            };
            break;

          case NATIVE_ASSETS.SPONSOREDBY.ID:
          case NATIVE_ASSETS.BODY.ID:
          case NATIVE_ASSETS.LIKES.ID:
          case NATIVE_ASSETS.DOWNLOADS.ID:
          case NATIVE_ASSETS.PRICE:
          case NATIVE_ASSETS.SALEPRICE.ID:
          case NATIVE_ASSETS.PHONE.ID:
          case NATIVE_ASSETS.ADDRESS.ID:
          case NATIVE_ASSETS.DESC2.ID:
          case NATIVE_ASSETS.CTA.ID:
          case NATIVE_ASSETS.RATING.ID:
          case NATIVE_ASSETS.DISPLAYURL.ID:
            newBid.native[NATIVE_ASSET_ID_TO_KEY_MAP[adm.native.assets[i].id]] = adm.native.assets[i].data && adm.native.assets[i].data.value;
            break;
        }
      }

      newBid.native.clickUrl = adm.native.link && adm.native.link.url;
      newBid.native.clickTrackers = adm.native.link && adm.native.link.clicktrackers || [];
      newBid.native.impressionTrackers = adm.native.imptrackers || [];
      newBid.native.jstracker = adm.native.jstracker || [];

      if (!newBid.width) {
        newBid.width = DEFAULT_WIDTH;
      }

      if (!newBid.height) {
        newBid.height = DEFAULT_HEIGHT;
      }
    }
  }
}

function _blockedIabCategoriesValidation(payload, blockedIabCategories) {
  blockedIabCategories = blockedIabCategories.filter(function (category) {
    if (typeof category === 'string') {
      // only strings
      return true;
    } else {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'bcat: Each category should be a string, ignoring category: ' + category);
      return false;
    }
  }).map(function (category) {
    return category.trim();
  }) // trim all
  .filter(function (category, index, arr) {
    // more than 3 charaters length
    if (category.length > 3) {
      return arr.indexOf(category) === index; // unique value only
    } else {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'bcat: Each category should have a value of a length of more than 3 characters, ignoring category: ' + category);
    }
  });

  if (blockedIabCategories.length > 0) {
    __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'bcat: Selected: ', blockedIabCategories);
    payload.bcat = blockedIabCategories;
  }
}

function _handleDealCustomTargetings(payload, dctrArr, validBidRequests) {
  var dctr = '';
  var dctrLen; // set dctr value in site.ext, if present in validBidRequests[0], else ignore

  if (dctrArr.length > 0) {
    if (validBidRequests[0].params.hasOwnProperty('dctr')) {
      dctr = validBidRequests[0].params.dctr;

      if (__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"](dctr) && dctr.length > 0) {
        var arr = dctr.split('|');
        dctr = '';
        arr.forEach(function (val) {
          dctr += val.length > 0 ? val.trim() + '|' : '';
        });
        dctrLen = dctr.length;

        if (dctr.substring(dctrLen, dctrLen - 1) === '|') {
          dctr = dctr.substring(0, dctrLen - 1);
        }

        payload.site.ext = {
          key_val: dctr.trim()
        };
      } else {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'Ignoring param : dctr with value : ' + dctr + ', expects string-value, found empty or non-string value');
      }

      if (dctrArr.length > 1) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits');
      }
    } else {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'dctr value not found in 1st adunit, ignoring values from subsequent adunits');
    }
  }
}

var spec = {
  code: BIDDER_CODE,
  gvlid: 76,
  supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["b" /* BANNER */], __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["d" /* VIDEO */], __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["c" /* NATIVE */]],
  aliases: [PUBMATIC_ALIAS],

  /**
  * Determines whether or not the given bid request is valid. Valid bid request must have placementId and hbid
  *
  * @param {BidRequest} bid The bid params to validate.
  * @return boolean True if this is a valid bid, and false otherwise.
  */
  isBidRequestValid: function isBidRequestValid(bid) {
    if (bid && bid.params) {
      if (!__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"](bid.params.publisherId)) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent for ad unit: ' + JSON.stringify(bid));
        return false;
      } // video ad validation


      if (bid.params.hasOwnProperty('video')) {
        if (!bid.params.video.hasOwnProperty('mimes') || !__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"](bid.params.video.mimes) || bid.params.video.mimes.length === 0) {
          __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'Error: For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:' + JSON.stringify(bid));
          return false;
        }
      }

      return true;
    }

    return false;
  },

  /**
   * Make a server request from the list of BidRequests.
   *
   * @param {validBidRequests[]} - an array of bids
   * @return ServerRequest Info describing the request to the server.
   */
  buildRequests: function buildRequests(validBidRequests, bidderRequest) {
    var refererInfo;

    if (bidderRequest && bidderRequest.refererInfo) {
      refererInfo = bidderRequest.refererInfo;
    }

    var conf = _initConf(refererInfo);

    var payload = _createOrtbTemplate(conf);

    var bidCurrency = '';
    var dctrArr = [];
    var bid;
    var blockedIabCategories = [];
    validBidRequests.forEach(function (originalBid) {
      bid = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepClone"](originalBid);
      bid.params.adSlot = bid.params.adSlot || '';

      _parseAdSlot(bid);

      if (bid.params.hasOwnProperty('video')) {// Nothing to do
      } else {
        // If we have a native mediaType configured alongside banner, its ok if the banner size is not set in width and height
        // The corresponding banner imp object will not be generated, but we still want the native object to be sent, hence the following check
        if (!(bid.hasOwnProperty('mediaTypes') && bid.mediaTypes.hasOwnProperty(__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["c" /* NATIVE */])) && bid.params.width === 0 && bid.params.height === 0) {
          __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'Skipping the non-standard adslot: ', bid.params.adSlot, JSON.stringify(bid));
          return;
        }
      }

      conf.pubId = conf.pubId || bid.params.publisherId;
      conf = _handleCustomParams(bid.params, conf);
      conf.transactionId = bid.transactionId;

      if (bidCurrency === '') {
        bidCurrency = bid.params.currency || UNDEFINED;
      } else if (bid.params.hasOwnProperty('currency') && bidCurrency !== bid.params.currency) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](LOG_WARN_PREFIX + 'Currency specifier ignored. Only one currency permitted.');
      }

      bid.params.currency = bidCurrency; // check if dctr is added to more than 1 adunit

      if (bid.params.hasOwnProperty('dctr') && __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"](bid.params.dctr)) {
        dctrArr.push(bid.params.dctr);
      }

      if (bid.params.hasOwnProperty('bcat') && __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"](bid.params.bcat)) {
        blockedIabCategories = blockedIabCategories.concat(bid.params.bcat);
      }

      var impObj = _createImpressionObject(bid, conf);

      if (impObj) {
        payload.imp.push(impObj);
      }
    });

    if (payload.imp.length == 0) {
      return;
    }

    payload.site.publisher.id = conf.pubId.trim();
    publisherId = conf.pubId.trim();
    payload.ext.wrapper = {};
    payload.ext.wrapper.profile = parseInt(conf.profId) || UNDEFINED;
    payload.ext.wrapper.version = parseInt(conf.verId) || UNDEFINED;
    payload.ext.wrapper.wiid = conf.wiid || UNDEFINED; // eslint-disable-next-line no-undef

    payload.ext.wrapper.wv = "prebid_prebid_3.18.0";
    payload.ext.wrapper.transactionId = conf.transactionId;
    payload.ext.wrapper.wp = 'pbjs';
    payload.user.gender = conf.gender ? conf.gender.trim() : UNDEFINED;
    payload.user.geo = {};
    payload.user.geo.lat = _parseSlotParam('lat', conf.lat);
    payload.user.geo.lon = _parseSlotParam('lon', conf.lon);
    payload.user.yob = _parseSlotParam('yob', conf.yob);
    payload.device.geo = payload.user.geo;
    payload.site.page = conf.kadpageurl.trim() || payload.site.page.trim();
    payload.site.domain = _getDomainFromURL(payload.site.page); // merge the device from config.getConfig('device')

    if (_typeof(__WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('device')) === 'object') {
      payload.device = _extends(payload.device, __WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('device'));
    } // passing transactionId in source.tid


    __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"](payload, 'source.tid', conf.transactionId); // test bids

    if (window.location.href.indexOf('pubmaticTest=true') !== -1) {
      payload.test = 1;
    } // adding schain object


    if (validBidRequests[0].schain) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"](payload, 'source.ext.schain', validBidRequests[0].schain);
    } // Attaching GDPR Consent Params


    if (bidderRequest && bidderRequest.gdprConsent) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"](payload, 'user.ext.consent', bidderRequest.gdprConsent.consentString);
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"](payload, 'regs.ext.gdpr', bidderRequest.gdprConsent.gdprApplies ? 1 : 0);
    } // CCPA


    if (bidderRequest && bidderRequest.uspConsent) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"](payload, 'regs.ext.us_privacy', bidderRequest.uspConsent);
    } // coppa compliance


    if (__WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('coppa') === true) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"](payload, 'regs.coppa', 1);
    }

    _handleDealCustomTargetings(payload, dctrArr, validBidRequests);

    _handleEids(payload, validBidRequests);

    _blockedIabCategoriesValidation(payload, blockedIabCategories); // Note: Do not move this block up
    // if site object is set in Prebid config then we need to copy required fields from site into app and unset the site object


    if (_typeof(__WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('app')) === 'object') {
      payload.app = __WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('app'); // not copying domain from site as it is a derived value from page

      payload.app.publisher = payload.site.publisher;
      payload.app.ext = payload.site.ext || UNDEFINED;
      delete payload.site;
    }

    return {
      method: 'POST',
      url: ENDPOINT,
      data: JSON.stringify(payload)
    };
  },

  /**
   * Unpack the response from the server into a list of bids.
   *
   * @param {*} response A successful response from the server.
   * @return {Bid[]} An array of bids which were nested inside the server.
   */
  interpretResponse: function interpretResponse(response, request) {
    var bidResponses = [];
    var respCur = DEFAULT_CURRENCY;
    var parsedRequest = JSON.parse(request.data);
    var parsedReferrer = parsedRequest.site && parsedRequest.site.ref ? parsedRequest.site.ref : '';

    try {
      var requestData = JSON.parse(request.data);

      if (requestData && requestData.imp && requestData.imp.length > 0) {
        requestData.imp.forEach(function (impData) {
          bidResponses.push({
            requestId: impData.id,
            width: 0,
            height: 0,
            ttl: 300,
            ad: '',
            creativeId: 0,
            netRevenue: NET_REVENUE,
            cpm: 0,
            currency: respCur,
            referrer: parsedReferrer
          });
        });
      }

      if (response.body && response.body.seatbid && __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"](response.body.seatbid)) {
        // Supporting multiple bid responses for same adSize
        respCur = response.body.cur || respCur;
        response.body.seatbid.forEach(function (seatbidder) {
          seatbidder.bid && __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"](seatbidder.bid) && seatbidder.bid.forEach(function (bid) {
            bidResponses.forEach(function (br) {
              if (br.requestId == bid.impid) {
                br.requestId = bid.impid;
                br.cpm = (parseFloat(bid.price) || 0).toFixed(2);
                br.width = bid.w;
                br.height = bid.h;
                br.creativeId = bid.crid || bid.id;
                br.dealId = bid.dealid;
                br.currency = respCur;
                br.netRevenue = NET_REVENUE;
                br.ttl = 300;
                br.referrer = parsedReferrer;
                br.ad = bid.adm;
                br.pm_seat = seatbidder.seat || null;
                br.pm_dspid = bid.ext && bid.ext.dspid ? bid.ext.dspid : null;

                if (requestData.imp && requestData.imp.length > 0) {
                  requestData.imp.forEach(function (req) {
                    if (bid.impid === req.id) {
                      _checkMediaType(bid.adm, br);

                      switch (br.mediaType) {
                        case __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["b" /* BANNER */]:
                          break;

                        case __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["d" /* VIDEO */]:
                          br.width = bid.hasOwnProperty('w') ? bid.w : req.video.w;
                          br.height = bid.hasOwnProperty('h') ? bid.h : req.video.h;
                          br.vastXml = bid.adm;
                          break;

                        case __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["c" /* NATIVE */]:
                          _parseNativeResponse(bid, br);

                          break;
                      }
                    }
                  });
                }

                if (bid.ext && bid.ext.deal_channel) {
                  br['dealChannel'] = dealChannelValues[bid.ext.deal_channel] || null;
                }

                br.meta = {};

                if (bid.ext && bid.ext.dspid) {
                  br.meta.networkId = bid.ext.dspid;
                }

                if (bid.ext && bid.ext.advid) {
                  br.meta.buyerId = bid.ext.advid;
                }

                if (bid.adomain && bid.adomain.length > 0) {
                  br.meta.clickUrl = bid.adomain[0];
                } // adserverTargeting


                if (seatbidder.ext && seatbidder.ext.buyid) {
                  br.adserverTargeting = {
                    'hb_buyid_pubmatic': seatbidder.ext.buyid
                  };
                }
              }
            });
          });
        });
      }
    } catch (error) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"](error);
    }

    return bidResponses;
  },

  /**
   * Register User Sync.
   */
  getUserSyncs: function getUserSyncs(syncOptions, responses, gdprConsent, uspConsent) {
    var syncurl = '' + publisherId; // Attaching GDPR Consent Params in UserSync url

    if (gdprConsent) {
      syncurl += '&gdpr=' + (gdprConsent.gdprApplies ? 1 : 0);
      syncurl += '&gdpr_consent=' + encodeURIComponent(gdprConsent.consentString || '');
    } // CCPA


    if (uspConsent) {
      syncurl += '&us_privacy=' + encodeURIComponent(uspConsent);
    } // coppa compliance


    if (__WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('coppa') === true) {
      syncurl += '&coppa=1';
    }

    if (syncOptions.iframeEnabled) {
      return [{
        type: 'iframe',
        url: USER_SYNC_URL_IFRAME + syncurl
      }];
    } else {
      return [{
        type: 'image',
        url: USER_SYNC_URL_IMAGE + syncurl
      }];
    }
  },

  /**
   * Covert bid param types for S2S
   * @param {Object} params bid params
   * @param {Boolean} isOpenRtb boolean to check openrtb2 protocol
   * @return {Object} params bid params
   */
  transformBidParams: function transformBidParams(params, isOpenRtb) {
    return __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["convertTypes"]({
      'publisherId': 'string',
      'adSlot': 'string'
    }, params);
  }
};
Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__["registerBidder"])(spec);

/***/ })

},[546]);

owpbjsChunk([122],{

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(549);


/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", function() { return spec; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ajax_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_userSync_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_adapters_bidderFactory_js__ = __webpack_require__(1);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







var constants = __webpack_require__(5);

var BIDDER_CODE = 'pubmaticServer';
var ENDPOINT = 'https://ow.pubmatic.com/openrtb/2.5/';
var COOKIE_SYNC = 'https://ow.pubmatic.com/cookie_sync/?sec=1'; // Set sec=1 to identify secure flag changes at server side

var CURRENCY = 'USD';
var AUCTION_TYPE = 1; // PubMaticServer just picking highest bidding bid from the partners configured

var UNDEFINED = undefined;
var IFRAME = 'iframe';
var IMAGE = 'image';
var REDIRECT = 'redirect';
var DEFAULT_VERSION_ID = '0';
var PUBMATIC_DIGITRUST_KEY = 'nFIn8aLzbd';
var CUSTOM_PARAMS = {
  'kadpageurl': '',
  // Custom page url
  'gender': '',
  // User gender
  'yob': '',
  // User year of birth
  'lat': '',
  // User location - Latitude
  'lon': '',
  // User Location - Longitude
  'wiid': '',
  // OpenWrap Wrapper Impression ID
  'profId': '',
  // OpenWrap Legacy: Profile ID
  'verId': '',
  // OpenWrap Legacy: version ID
  'divId': '' // OpenWrap new

};

function logNonStringParam(paramName, paramValue) {
  __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"]('PubMaticServer: Ignoring param : ' + paramName + ' with value : ' + paramValue + ', expects string-value, found ' + _typeof(paramValue));
}

function _parseSlotParam(paramName, paramValue) {
  if (!__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"](paramValue)) {
    paramValue && logNonStringParam(paramName, paramValue);
    return UNDEFINED;
  }

  paramValue = paramValue.trim();

  switch (paramName) {
    case 'pmzoneid':
      return paramValue.split(',').slice(0, 50).map(function (id) {
        return id.trim();
      }).join();

    case 'kadfloor':
      return parseFloat(paramValue) || UNDEFINED;

    case 'lat':
      return parseFloat(paramValue) || UNDEFINED;

    case 'lon':
      return parseFloat(paramValue) || UNDEFINED;

    case 'yob':
      return parseInt(paramValue) || UNDEFINED;

    case 'gender':
    default:
      return paramValue;
  }
}

function _initConf(refererInfo) {
  var conf = {};
  conf.pageURL = refererInfo && refererInfo.referer ? refererInfo.referer : window.location.href;
  conf.refURL = window.document.referrer;
  return conf;
}

function _getDomainFromURL(url) {
  var anchor = document.createElement('a');
  anchor.href = url;
  return anchor.hostname;
}

function _handleCustomParams(params, conf) {
  // istanbul ignore else
  if (!conf.kadpageurl) {
    conf.kadpageurl = conf.pageURL;
  }

  var key, value, entry;

  for (key in CUSTOM_PARAMS) {
    // istanbul ignore else
    if (CUSTOM_PARAMS.hasOwnProperty(key)) {
      value = params[key]; // istanbul ignore else

      if (value) {
        entry = CUSTOM_PARAMS[key];

        if (__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isA"](entry, 'Object')) {
          // will be used in future when we want to process a custom param before using
          // 'keyname': {f: function() {}}
          value = entry.f(value, conf);
        }

        if (__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"](value)) {
          conf[key] = value;
        } else {
          logNonStringParam(key, CUSTOM_PARAMS[key]);
        }
      }
    }
  }

  return conf;
}

function _createOrtbTemplate(conf) {
  return {
    id: '' + new Date().getTime(),
    at: AUCTION_TYPE,
    cur: [CURRENCY],
    imp: [],
    site: {
      page: conf.pageURL,
      ref: conf.refURL,
      publisher: {}
    },
    device: {
      ua: navigator.userAgent,
      js: 1,
      dnt: navigator.doNotTrack == 'yes' || navigator.doNotTrack == '1' || navigator.msDoNotTrack == '1' ? 1 : 0,
      h: screen.height,
      w: screen.width,
      language: navigator.language
    },
    user: {},
    ext: {}
  };
}

function _createImpressionObject(bid, conf) {
  return {
    id: bid.bidId,
    tagid: bid.params.adUnitId,
    bidfloor: _parseSlotParam('kadfloor', bid.params.kadfloor),
    secure: 1,
    banner: {
      pos: 0,
      topframe: __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["inIframe"]() ? 0 : 1,
      format: function () {
        var arr = [];

        for (var i = 0, l = bid.sizes.length; i < l; i++) {
          arr.push({
            w: bid.sizes[i][0],
            h: bid.sizes[i][1]
          });
        }

        return arr.length > 0 ? arr : UNDEFINED;
      }()
    },
    ext: {
      wrapper: {
        div: bid.params.divId
      },
      bidder: {
        pubmatic: {
          pmZoneId: _parseSlotParam('pmzoneid', bid.params.pmzoneid)
        }
      }
    }
  };
}

function mandatoryParamCheck(paramName, paramValue) {
  if (!__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"](paramValue)) {
    __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](BIDDER_CODE + ': ' + paramName + ' is mandatory and it should be a string, , found ' + _typeof(paramValue));
    return false;
  }

  return true;
}

function cookieSyncCallBack(response, XMLReqObj) {
  response = JSON.parse(response); // var userSyncConfig = config.getConfig('userSync.filterSettings');

  var syncOptions = {
    iframeEnabled: true,
    pixelEnabled: true
  };
  var serverResponse; // By default we should sync all bidders irrespective of iframe of image type
  // as OpenWrap doesn't have any feature to disable iframe of image based syncups
  // TODO : In future if we require to have it condition uncomment below code
  // and add condition to check partner if it needs to be synced.
  // if (userSyncConfig) {
  //   syncOptions = {
  //     iframeEnabled: config.getConfig('userSync.filterSettings.iframe') ? config.getConfig('userSync.filterSettings.iframe.filter') == 'include' : false,
  //     pixelEnabled: config.getConfig('userSync.filterSettings.image') ? (config.getConfig('userSync.filterSettings.image.filter') == 'include') : true,
  //   };
  // }
  // Todo: Can fire multiple usersync calls if multiple responses for same adsize found

  if (response.hasOwnProperty('bidder_status')) {
    serverResponse = response.bidder_status;
  }

  serverResponse.forEach(function (bidder) {
    if (bidder.usersync && bidder.usersync.url) {
      if (bidder.usersync.type === IFRAME) {
        if (syncOptions.iframeEnabled) {
          __WEBPACK_IMPORTED_MODULE_2__src_userSync_js__["a" /* userSync */].registerSync(IFRAME, bidder.bidder, bidder.usersync.url);
        } else {
          __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](bidder.bidder + ': Please enable iframe based user sync.');
        }
      } else if (bidder.usersync.type === IMAGE || bidder.usersync.type === REDIRECT) {
        if (syncOptions.pixelEnabled) {
          __WEBPACK_IMPORTED_MODULE_2__src_userSync_js__["a" /* userSync */].registerSync(IMAGE, bidder.bidder, bidder.usersync.url);
        } else {
          __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](bidder.bidder + ': Please enable pixel based user sync.');
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](bidder.bidder + ': Please provide valid user sync type.');
      }

      window.owpbjs.triggerUserSyncs();
    }
  });
}

function logAllErrors(errors) {
  __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["_each"](errors, function (item, key) {
    __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"](key + ':' + item.join(','));
  });
}

function _getDataFromImpArray(impData, id, key) {
  for (var index in impData) {
    if (impData[index].ext.wrapper.div === id) {
      switch (key) {
        case 'requestId':
          return impData[index].id;

        case 'width':
          return impData[index].banner.format[0].w;

        case 'height':
          return impData[index].banner.format[0].h;
      }
    }
  }
}

function _createDummyBids(impData, bidResponses, errorCode, parsedReferrer) {
  var bidMap = window.PWT.bidMap;

  for (var id in bidMap) {
    for (var adapterID in bidMap[id].adapters) {
      if (adapterID !== 'prebid') {
        bidResponses.push({
          requestId: _getDataFromImpArray(impData, id, 'requestId'),
          bidderCode: BIDDER_CODE,
          originalBidder: adapterID,
          pubmaticServerErrorCode: errorCode,
          width: _getDataFromImpArray(impData, id, 'width'),
          height: _getDataFromImpArray(impData, id, 'height'),
          creativeId: 0,
          dealId: '',
          currency: CURRENCY,
          netRevenue: true,
          ttl: 300,
          referrer: parsedReferrer,
          ad: '',
          cpm: 0,
          serverSideResponseTime: errorCode === 3 ? 0 : -1
        });
      }
    }
  }
}

function _getDigiTrustObject(key) {
  function getDigiTrustId() {
    var digiTrustUser = window.DigiTrust && (__WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('digiTrustId') || window.DigiTrust.getUser({
      member: key
    }));
    return digiTrustUser && digiTrustUser.success && digiTrustUser.identity || null;
  }

  var digiTrustId = getDigiTrustId(); // Verify there is an ID and this user has not opted out

  if (!digiTrustId || digiTrustId.privacy && digiTrustId.privacy.optout) {
    return null;
  }

  return digiTrustId;
}

function _handleDigitrustId(eids) {
  var digiTrustId = _getDigiTrustObject(PUBMATIC_DIGITRUST_KEY);

  if (digiTrustId !== null) {
    eids.push({
      'source': 'digitru.st',
      'uids': [{
        'id': digiTrustId.id || '',
        'atype': 1,
        'ext': {
          'keyv': parseInt(digiTrustId.keyv) || 0
        }
      }]
    });
  }
}

function _handleTTDId(eids, validBidRequests) {
  var ttdId = null;
  var adsrvrOrgId = __WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('adsrvrOrgId');

  if (__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"](__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](validBidRequests, '0.userId.tdid'))) {
    ttdId = validBidRequests[0].userId.tdid;
  } else if (adsrvrOrgId && __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"](adsrvrOrgId.TDID)) {
    ttdId = adsrvrOrgId.TDID;
  }

  if (ttdId !== null) {
    eids.push({
      'source': 'adserver.org',
      'uids': [{
        'id': ttdId,
        'atype': 1,
        'ext': {
          'rtiPartner': 'TDID'
        }
      }]
    });
  }
}
/**
 * Produces external userid object in ortb 3.0 model.
 */


function _addExternalUserId(eids, value, source, atype) {
  if (__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"](value)) {
    eids.push({
      source: source,
      uids: [{
        id: value,
        atype: atype
      }]
    });
  }
}

function _handleEids(payload, validBidRequests) {
  var eids = [];

  _handleDigitrustId(eids);

  _handleTTDId(eids, validBidRequests);

  var bidRequest = validBidRequests[0];

  if (bidRequest && bidRequest.userId) {
    _addExternalUserId(eids, __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, "userId.pubcid"), 'pubcid.org', 1);

    _addExternalUserId(eids, __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, "userId.digitrustid.data.id"), 'digitru.st', 1);

    _addExternalUserId(eids, __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, "userId.id5id"), 'id5-sync.com', 1);

    _addExternalUserId(eids, __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, "userId.criteoId"), 'criteo.com', 1); // replacing criteoRtus


    _addExternalUserId(eids, __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, "userId.idl_env"), 'liveramp.com', 1);

    _addExternalUserId(eids, __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, "userId.lipb.lipbid"), 'liveintent.com', 1);

    _addExternalUserId(eids, __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, "userId.parrableid"), 'parrable.com', 1);

    _addExternalUserId(eids, __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, "userId.britepoolid"), 'britepool.com', 1);

    _addExternalUserId(eids, __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, "userId.firstpartyid"), 'firstpartyid', 1);
  }

  if (eids.length > 0) {
    payload.user.ext = {};
    payload.user.ext.eids = eids;
  }
}

var spec = {
  code: BIDDER_CODE,

  /**
  * Determines whether or not the given bid request is valid. Valid bid request must have placementId and hbid
  *
  * @param {BidRequest} bid The bid params to validate.
  * @return boolean True if this is a valid bid, and false otherwise.
  */
  isBidRequestValid: function isBidRequestValid(bid) {
    if (bid && bid.params) {
      return mandatoryParamCheck('publisherId', bid.params.publisherId) && mandatoryParamCheck('adUnitId', bid.params.adUnitId) && mandatoryParamCheck('divId', bid.params.divId) && mandatoryParamCheck('adUnitIndex', bid.params.adUnitIndex);
    }

    return false;
  },

  /**
  * Make a server request from the list of BidRequests.
  *
  * @param {validBidRequests[]} - an array of bids
  * @return ServerRequest Info describing the request to the server.
  */
  buildRequests: function buildRequests(validBidRequests, bidderRequest) {
    var startTime = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["timestamp"]();
    var refererInfo;

    if (bidderRequest && bidderRequest.refererInfo) {
      refererInfo = bidderRequest.refererInfo;
    }

    var conf = _initConf(refererInfo);

    var payload = _createOrtbTemplate(conf);

    window.PWT.owLatency = window.PWT.owLatency || {};

    if (__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isEmpty"](validBidRequests)) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"]('No Valid Bid Request found for given adUnits');
      return;
    }

    validBidRequests.forEach(function (bid) {
      conf.pubId = conf.pubId || bid.params.publisherId;
      conf = _handleCustomParams(bid.params, conf);
      conf.transactionId = bid.transactionId;
      payload.imp.push(_createImpressionObject(bid, conf));
    });
    payload.site.publisher.id = conf.pubId.trim();
    payload.ext.wrapper = {
      profileid: parseInt(conf.profId) || UNDEFINED,
      versionid: parseInt(conf.verId) || parseInt(DEFAULT_VERSION_ID),
      sumry_disable: 0,
      ssauction: 0,
      wp: 'pbjs',
      wv: constants.REPO_AND_VERSION,
      // transactionId: conf.transactionId,
      wiid: conf.wiid || UNDEFINED
    };
    payload.source = {
      tid: conf.transactionId
    };
    payload.user = {
      gender: _parseSlotParam('gender', conf.gender),
      yob: _parseSlotParam('yob', conf.yob),
      geo: {
        lat: _parseSlotParam('lat', conf.lat),
        lon: _parseSlotParam('lon', conf.lon)
      }
    }; // Attaching GDPR Consent Params

    if (bidderRequest && bidderRequest.gdprConsent) {
      payload.user.ext = {
        consent: bidderRequest.gdprConsent.consentString
      };
      payload.regs = {
        ext: {
          gdpr: bidderRequest.gdprConsent.gdprApplies ? 1 : 0
        }
      };
    } // CCPA


    if (bidderRequest && bidderRequest.uspConsent) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"](payload, 'regs.ext.us_privacy', bidderRequest.uspConsent);
    }

    payload.device.geo = payload.user.geo;
    payload.site.page = conf.kadpageurl || payload.site.page;
    payload.site.domain = _getDomainFromURL(payload.site.page);

    if (window.PWT.owLatency.hasOwnProperty(conf.wiid)) {
      window.PWT.owLatency[conf.wiid].startTime = startTime;
    } else {
      window.PWT.owLatency[conf.wiid] = {
        startTime: startTime
      };
    }

    _handleEids(payload, validBidRequests);

    return {
      method: 'POST',
      url: __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["getParameterByName"]('pwtvc') ? ENDPOINT + '?debug=1' : ENDPOINT,
      data: JSON.stringify(payload)
    };
  },

  /**
  * Unpack the response from the server into a list of bids.
  *
  * @param {*} response A successful response from the server.
  * @return {Bid[]} An array of bids which were nested inside the server.
  */
  interpretResponse: function interpretResponse(response, request) {
    var endTime = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["timestamp"]();
    var wiid = JSON.parse(request.data).ext.wrapper.wiid;

    if (window.PWT.owLatency.hasOwnProperty(wiid)) {
      window.PWT.owLatency[wiid].endTime = endTime;
    } else {
      window.PWT.owLatency[wiid] = {
        endTime: endTime
      };
    }

    var bidResponses = [];

    try {
      if (response.body && response.body.seatbid) {
        // Log errors if any present
        var errors = response.body.ext && response.body.ext.errors || {};
        logAllErrors(errors); // Supporting multiple bid responses for same adSize

        var partnerResponseTimeObj = response.body.ext && response.body.ext.responsetimemillis || {};
        var miObj = response.body.ext && response.body.ext.matchedimpression || {};
        var requestData = JSON.parse(request.data);
        var parsedReferrer = requestData.site && requestData.site.ref ? requestData.site.ref : '';
        response.body.seatbid.forEach(function (seatbidder) {
          seatbidder.bid && seatbidder.bid.forEach(function (bid) {
            if (
            /* bid.id !== null && */
            bid.ext.summary) {
              bid.ext.summary.forEach(function (summary, index) {
                var firstSummary = index === 0;
                var newBid = {};

                if (summary.errorCode === 6 || summary.errorCode === 3 || summary.errorCode === 11 || summary.errorCode === 12) {
                  // special handling for error code 6,11,12. Create all dummy bids from request data.
                  // 11: All Partners Throttled, 12 Some Partner Throttled.
                  bidResponses.length === 0 && _createDummyBids(requestData.imp, bidResponses, summary.errorCode, parsedReferrer);
                } else {
                  switch (summary.errorCode) {
                    case undefined:
                      newBid = {
                        requestId: bid.impid,
                        bidderCode: BIDDER_CODE,
                        originalBidder: summary.bidder,
                        pubmaticServerErrorCode: undefined,
                        width: summary.width,
                        height: summary.height,
                        creativeId: firstSummary ? bid.crid || bid.id : bid.id,
                        dealId: firstSummary ? bid.dealid || UNDEFINED : UNDEFINED,
                        currency: CURRENCY,
                        netRevenue: true,
                        ttl: 300,
                        referrer: parsedReferrer,
                        ad: firstSummary ? bid.adm : '',
                        cpm: (parseFloat(summary.bid) || 0).toFixed(2),
                        serverSideResponseTime: partnerResponseTimeObj[summary.bidder] || 0,
                        mi: miObj.hasOwnProperty(summary.bidder) ? miObj[summary.bidder] : UNDEFINED,
                        regexPattern: summary.regex || undefined
                      };

                      if (bid.ext.prebid && bid.ext.prebid.targeting) {
                        newBid.adserverTargeting = bid.ext.prebid.targeting;
                      }

                      break;

                    default:
                      requestData.imp.forEach(function (impObj) {
                        if (impObj.id === bid.impid) {
                          newBid = {
                            requestId: impObj.id,
                            bidderCode: BIDDER_CODE,
                            originalBidder: summary.bidder,
                            pubmaticServerErrorCode: summary.errorCode,
                            width: impObj.banner.format[0].w,
                            height: impObj.banner.format[0].h,
                            creativeId: 0,
                            dealId: '',
                            currency: CURRENCY,
                            netRevenue: true,
                            ttl: 300,
                            referrer: parsedReferrer,
                            ad: '',
                            cpm: 0,
                            serverSideResponseTime: summary.errorCode === 1 || summary.errorCode === 2 || summary.errorCode === 6 ? -1 : summary.errorCode === 5 ? 0 : partnerResponseTimeObj[summary.bidder] || 0,

                            /* errorCodes meaning:
                                1 = GADS_UNMAPPED_SLOT_ERROR
                                2 = GADS_MISSING_CONF_ERROR
                                3 = TIMEOUT_ERROR
                                4 = NO_BID_PREBID_ERROR
                                5 = PARTNER_TIMEDOUT_ERROR
                                6 = INVALID_CONFIGURATION_ERROR
                                7 = NO_GDPR_CONSENT_ERROR
                                500 = API_RESPONSE_ERROR
                                - setting serverSideResponseTime as 0, in cases where partnerResponseTimeObj[summary.bidder] is not available.
                                - setting serverSideResponseTime as -1, in cases where errorCode is 1,2 or 6. In these cases we do not log this bid in logger
                                - explicitly setting serverSideResponseTime = 0, where errorCode is 5, i.e. PARTNER_TIMEDOUT_ERROR
                            */
                            mi: miObj.hasOwnProperty(summary.bidder) ? miObj[summary.bidder] : undefined,
                            regexPattern: summary.regex || undefined
                          };
                        }
                      });
                      break;
                  }

                  bidResponses.push(newBid);
                }
              });
            }
          });
        });
      }
    } catch (error) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"](error);
    }

    return bidResponses;
  },

  /**
  * Register User Sync.
  */
  getUserSyncs: function getUserSyncs(syncOptions, serverResponses, gdprConsent, uspConsent) {
    var urls = [];
    var bidders = __WEBPACK_IMPORTED_MODULE_3__src_config_js__["b" /* config */].getConfig('userSync.enabledBidders');
    var UUID = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["getUniqueIdentifierStr"]();
    var data = {
      uuid: UUID,
      bidders: bidders
    };

    if (gdprConsent) {
      data['gdpr'] = gdprConsent.gdprApplies ? 1 : 0;
      data['gdpr_consent'] = encodeURIComponent(gdprConsent.consentString || '');
    } // CCPA


    if (uspConsent) {
      data['us_privacy'] = encodeURIComponent(uspConsent);
    }

    __WEBPACK_IMPORTED_MODULE_1__src_ajax_js__["a" /* ajax */](COOKIE_SYNC, cookieSyncCallBack, JSON.stringify(data), {
      withCredentials: true
    });
    return urls;
  }
};
Object(__WEBPACK_IMPORTED_MODULE_4__src_adapters_bidderFactory_js__["registerBidder"])(spec);

/***/ })

},[548]);

owpbjsChunk([121],{

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(557);


/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", function() { return spec; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Renderer_js__ = __webpack_require__(10);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint dot-notation:0, quote-props:0 */



var NATIVE_DEFAULTS = {
  TITLE_LEN: 100,
  DESCR_LEN: 200,
  SPONSORED_BY_LEN: 50,
  IMG_MIN: 150,
  ICON_MIN: 50
};
var DEFAULT_BID_TTL = 20;
var DEFAULT_CURRENCY = 'USD';
var DEFAULT_NET_REVENUE = true;
var KNOWN_PARAMS = ['cp', 'ct', 'cf', 'video', 'battr', 'bcat', 'badv', 'bidfloor'];
/**
 * PulsePoint Bid Adapter.
 * Contact: ExchangeTeam@pulsepoint.com
 *
 * Aliases - pulseLite and pulsepointLite are supported for backwards compatibility.
 * Formats - Display/Native/Video formats supported.
 *
 */

var spec = {
  code: 'pulsepoint',
  gvlid: 81,
  aliases: ['pulseLite', 'pulsepointLite'],
  supportedMediaTypes: ['banner', 'native', 'video'],
  isBidRequestValid: function isBidRequestValid(bid) {
    return !!(bid && bid.params && bid.params.cp && bid.params.ct);
  },
  buildRequests: function buildRequests(bidRequests, bidderRequest) {
    var request = {
      id: bidRequests[0].bidderRequestId,
      imp: bidRequests.map(function (slot) {
        return impression(slot);
      }),
      site: site(bidRequests, bidderRequest),
      app: app(bidRequests),
      device: device(),
      bcat: bidRequests[0].params.bcat,
      badv: bidRequests[0].params.badv,
      user: user(bidRequests[0], bidderRequest),
      regs: regs(bidderRequest),
      source: source(bidRequests[0].schain)
    };
    return {
      method: 'POST',
      url: 'https://bid.contextweb.com/header/ortb?src=prebid',
      data: request,
      bidderRequest: bidderRequest
    };
  },
  interpretResponse: function interpretResponse(response, request) {
    return bidResponseAvailable(request, response);
  },
  getUserSyncs: function getUserSyncs(syncOptions) {
    if (syncOptions.iframeEnabled) {
      return [{
        type: 'iframe',
        url: 'https://bh.contextweb.com/visitormatch'
      }];
    } else if (syncOptions.pixelEnabled) {
      return [{
        type: 'image',
        url: 'https://bh.contextweb.com/visitormatch/prebid'
      }];
    }
  },
  transformBidParams: function transformBidParams(params, isOpenRtb) {
    return __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["convertTypes"]({
      'cf': 'string',
      'cp': 'number',
      'ct': 'number'
    }, params);
  }
};
/**
 * Callback for bids, after the call to PulsePoint completes.
 */

function bidResponseAvailable(request, response) {
  var idToImpMap = {};
  var idToBidMap = {};
  var idToSlotConfig = {};
  var bidResponse = response.body; // extract the request bids and the response bids, keyed by impr-id

  var ortbRequest = request.data;
  ortbRequest.imp.forEach(function (imp) {
    idToImpMap[imp.id] = imp;
  });

  if (bidResponse) {
    bidResponse.seatbid.forEach(function (seatBid) {
      return seatBid.bid.forEach(function (bid) {
        idToBidMap[bid.impid] = bid;
      });
    });
  }

  if (request.bidderRequest && request.bidderRequest.bids) {
    request.bidderRequest.bids.forEach(function (bid) {
      idToSlotConfig[bid.bidId] = bid;
    });
  }

  var bids = [];
  Object.keys(idToImpMap).forEach(function (id) {
    if (idToBidMap[id]) {
      var bid = {
        requestId: id,
        cpm: idToBidMap[id].price,
        creative_id: idToBidMap[id].crid,
        creativeId: idToBidMap[id].crid,
        adId: id,
        ttl: idToBidMap[id].exp || DEFAULT_BID_TTL,
        netRevenue: DEFAULT_NET_REVENUE,
        currency: bidResponse.cur || DEFAULT_CURRENCY
      };

      if (idToImpMap[id]['native']) {
        bid['native'] = nativeResponse(idToImpMap[id], idToBidMap[id]);
        bid.mediaType = 'native';
      } else if (idToImpMap[id].video) {
        // for outstream, a renderer is specified
        if (idToSlotConfig[id] && __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](idToSlotConfig[id], 'mediaTypes.video.context') === 'outstream') {
          bid.renderer = outstreamRenderer(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](idToSlotConfig[id], 'renderer.options'), __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](idToBidMap[id], 'ext.outstream'));
        }

        bid.vastXml = idToBidMap[id].adm;
        bid.mediaType = 'video';
        bid.width = idToBidMap[id].w;
        bid.height = idToBidMap[id].h;
      } else {
        bid.ad = idToBidMap[id].adm;
        bid.width = idToBidMap[id].w || idToImpMap[id].banner.w;
        bid.height = idToBidMap[id].h || idToImpMap[id].banner.h;
      }

      bids.push(bid);
    }
  });
  return bids;
}
/**
 * Produces an OpenRTBImpression from a slot config.
 */


function impression(slot) {
  return {
    id: slot.bidId,
    banner: banner(slot),
    'native': nativeImpression(slot),
    tagid: slot.params.ct.toString(),
    video: video(slot),
    bidfloor: slot.params.bidfloor,
    ext: ext(slot)
  };
}
/**
 * Produces an OpenRTB Banner object for the slot given.
 */


function banner(slot) {
  var sizes = parseSizes(slot);
  var size = adSize(slot, sizes);
  return slot.nativeParams || slot.params.video ? null : {
    w: size[0],
    h: size[1],
    battr: slot.params.battr,
    format: sizes
  };
}
/**
 * Produce openrtb format objects based on the sizes configured for the slot.
 */


function parseSizes(slot) {
  var sizes = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](slot, 'mediaTypes.banner.sizes');

  if (sizes && __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"](sizes)) {
    return sizes.filter(function (sz) {
      return __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"](sz) && sz.length === 2;
    }).map(function (sz) {
      return {
        w: sz[0],
        h: sz[1]
      };
    });
  }

  return null;
}
/**
 * Produces an OpenRTB Video object for the slot given
 */


function video(slot) {
  if (slot.params.video) {
    return _extends({}, slot.params.video, {
      battr: slot.params.battr
    });
  }

  return null;
}
/**
 * Unknown params are captured and sent on ext
 */


function ext(slot) {
  var ext = {};
  var knownParamsMap = {};
  KNOWN_PARAMS.forEach(function (value) {
    return knownParamsMap[value] = 1;
  });
  Object.keys(slot.params).forEach(function (key) {
    if (!knownParamsMap[key]) {
      ext[key] = slot.params[key];
    }
  });
  return Object.keys(ext).length > 0 ? {
    prebid: ext
  } : null;
}
/**
 * Sets up the renderer on the bid, for outstream bid responses.
 */


function outstreamRenderer(rendererOptions, outstreamExtOptions) {
  var renderer = __WEBPACK_IMPORTED_MODULE_2__src_Renderer_js__["a" /* Renderer */].install({
    url: outstreamExtOptions.rendererUrl,
    config: {
      defaultOptions: outstreamExtOptions.config,
      rendererOptions: rendererOptions,
      type: outstreamExtOptions.type
    },
    loaded: false
  });
  renderer.setRender(function (bid) {
    bid.renderer.push(function () {
      var config = bid.renderer.getConfig();
      new window.PulsePointOutstreamRenderer().render({
        adUnitCode: bid.adUnitCode,
        vastXml: bid.vastXml,
        type: config.type,
        defaultOptions: config.defaultOptions,
        rendererOptions: rendererOptions
      });
    });
  });
  return renderer;
}
/**
 * Produces an OpenRTB Native object for the slot given.
 */


function nativeImpression(slot) {
  if (slot.nativeParams) {
    var assets = [];
    addAsset(assets, titleAsset(assets.length + 1, slot.nativeParams.title, NATIVE_DEFAULTS.TITLE_LEN));
    addAsset(assets, dataAsset(assets.length + 1, slot.nativeParams.body, 2, NATIVE_DEFAULTS.DESCR_LEN));
    addAsset(assets, dataAsset(assets.length + 1, slot.nativeParams.sponsoredBy, 1, NATIVE_DEFAULTS.SPONSORED_BY_LEN));
    addAsset(assets, imageAsset(assets.length + 1, slot.nativeParams.icon, 1, NATIVE_DEFAULTS.ICON_MIN, NATIVE_DEFAULTS.ICON_MIN));
    addAsset(assets, imageAsset(assets.length + 1, slot.nativeParams.image, 3, NATIVE_DEFAULTS.IMG_MIN, NATIVE_DEFAULTS.IMG_MIN));
    return {
      request: JSON.stringify({
        assets: assets
      }),
      ver: '1.1',
      battr: slot.params.battr
    };
  }

  return null;
}
/**
 * Helper method to add an asset to the assets list.
 */


function addAsset(assets, asset) {
  if (asset) {
    assets.push(asset);
  }
}
/**
 * Produces a Native Title asset for the configuration given.
 */


function titleAsset(id, params, defaultLen) {
  if (params) {
    return {
      id: id,
      required: params.required ? 1 : 0,
      title: {
        len: params.len || defaultLen
      }
    };
  }

  return null;
}
/**
 * Produces a Native Image asset for the configuration given.
 */


function imageAsset(id, params, type, defaultMinWidth, defaultMinHeight) {
  return params ? {
    id: id,
    required: params.required ? 1 : 0,
    img: {
      type: type,
      wmin: params.wmin || defaultMinWidth,
      hmin: params.hmin || defaultMinHeight
    }
  } : null;
}
/**
 * Produces a Native Data asset for the configuration given.
 */


function dataAsset(id, params, type, defaultLen) {
  return params ? {
    id: id,
    required: params.required ? 1 : 0,
    data: {
      type: type,
      len: params.len || defaultLen
    }
  } : null;
}
/**
 * Produces an OpenRTB site object.
 */


function site(bidRequests, bidderRequest) {
  var pubId = bidRequests && bidRequests.length > 0 ? bidRequests[0].params.cp : '0';
  var appParams = bidRequests[0].params.app;

  if (!appParams) {
    return {
      publisher: {
        id: pubId.toString()
      },
      ref: referrer(),
      page: bidderRequest && bidderRequest.refererInfo ? bidderRequest.refererInfo.referer : ''
    };
  }

  return null;
}
/**
 * Produces an OpenRTB App object.
 */


function app(bidderRequest) {
  var pubId = bidderRequest && bidderRequest.length > 0 ? bidderRequest[0].params.cp : '0';
  var appParams = bidderRequest[0].params.app;

  if (appParams) {
    return {
      publisher: {
        id: pubId.toString()
      },
      bundle: appParams.bundle,
      storeurl: appParams.storeUrl,
      domain: appParams.domain
    };
  }

  return null;
}
/**
 * Attempts to capture the referrer url.
 */


function referrer() {
  try {
    return window.top.document.referrer;
  } catch (e) {
    return document.referrer;
  }
}
/**
 * Produces an OpenRTB Device object.
 */


function device() {
  return {
    ua: navigator.userAgent,
    language: navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage
  };
}
/**
 * Safely parses the input given. Returns null on
 * parsing failure.
 */


function parse(rawResponse) {
  try {
    if (rawResponse) {
      return JSON.parse(rawResponse);
    }
  } catch (ex) {
    __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"]('pulsepointLite.safeParse', 'ERROR', ex);
  }

  return null;
}
/**
 * Determines the AdSize for the slot.
 */


function adSize(slot, sizes) {
  if (slot.params.cf) {
    var size = slot.params.cf.toUpperCase().split('X');
    var width = parseInt(slot.params.cw || size[0], 10);
    var height = parseInt(slot.params.ch || size[1], 10);
    return [width, height];
  } else if (sizes && sizes.length > 0) {
    return [sizes[0].w, sizes[0].h];
  }

  return [1, 1];
}
/**
 * Handles the user level attributes and produces
 * an openrtb User object.
 */


function user(bidRequest, bidderRequest) {
  var ext = {};

  if (bidderRequest) {
    if (bidderRequest.gdprConsent) {
      ext.consent = bidderRequest.gdprConsent.consentString;
    }
  }

  if (bidRequest) {
    if (bidRequest.userId) {
      ext.eids = [];
      addExternalUserId(ext.eids, bidRequest.userId.pubcid, 'pubcommon');
      addExternalUserId(ext.eids, bidRequest.userId.britepoolid, 'britepool.com');
      addExternalUserId(ext.eids, bidRequest.userId.criteoId, 'criteo');
      addExternalUserId(ext.eids, bidRequest.userId.idl_env, 'identityLink');
      addExternalUserId(ext.eids, bidRequest.userId.id5id, 'id5-sync.com');
      addExternalUserId(ext.eids, bidRequest.userId.parrableid, 'parrable.com'); // liveintent

      if (bidRequest.userId.lipb && bidRequest.userId.lipb.lipbid) {
        addExternalUserId(ext.eids, bidRequest.userId.lipb.lipbid, 'liveintent.com');
      } // TTD


      addExternalUserId(ext.eids, bidRequest.userId.tdid, 'adserver.org', {
        rtiPartner: 'TDID'
      }); // digitrust

      var digitrustResponse = bidRequest.userId.digitrustid;

      if (digitrustResponse && digitrustResponse.data) {
        var digitrust = {};

        if (digitrustResponse.data.id) {
          digitrust.id = digitrustResponse.data.id;
        }

        if (digitrustResponse.data.keyv) {
          digitrust.keyv = digitrustResponse.data.keyv;
        }

        ext.digitrust = digitrust;
      }
    }
  }

  return {
    ext: ext
  };
}
/**
 * Produces external userid object in ortb 3.0 model.
 */


function addExternalUserId(eids, id, source, uidExt) {
  if (id) {
    var uid = {
      id: id
    };

    if (uidExt) {
      uid.ext = uidExt;
    }

    eids.push({
      source: source,
      uids: [uid]
    });
  }
}
/**
 * Produces the regulations ortb object
 */


function regs(bidderRequest) {
  if (bidderRequest.gdprConsent || bidderRequest.uspConsent) {
    var ext = {}; // GDPR applies attribute (actual consent value is in user object)

    if (bidderRequest.gdprConsent) {
      ext.gdpr = bidderRequest.gdprConsent.gdprApplies ? 1 : 0;
    } // CCPA


    if (bidderRequest.uspConsent) {
      ext.us_privacy = bidderRequest.uspConsent;
    }

    return {
      ext: ext
    };
  }

  return null;
}
/**
 * Creates source object with supply chain
 */


function source(schain) {
  if (schain) {
    return {
      ext: {
        schain: schain
      }
    };
  }

  return null;
}
/**
 * Parses the native response from the Bid given.
 */


function nativeResponse(imp, bid) {
  if (imp['native']) {
    var nativeAd = parse(bid.adm);
    var keys = {};

    if (nativeAd && nativeAd['native'] && nativeAd['native'].assets) {
      nativeAd['native'].assets.forEach(function (asset) {
        keys.title = asset.title ? asset.title.text : keys.title;
        keys.body = asset.data && asset.data.type === 2 ? asset.data.value : keys.body;
        keys.sponsoredBy = asset.data && asset.data.type === 1 ? asset.data.value : keys.sponsoredBy;
        keys.image = asset.img && asset.img.type === 3 ? asset.img.url : keys.image;
        keys.icon = asset.img && asset.img.type === 1 ? asset.img.url : keys.icon;
      });

      if (nativeAd['native'].link) {
        keys.clickUrl = encodeURIComponent(nativeAd['native'].link.url);
      }

      keys.impressionTrackers = nativeAd['native'].imptrackers;
      return keys;
    }
  }

  return null;
}

Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__["registerBidder"])(spec);

/***/ })

},[556]);

owpbjsChunk([104],{

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(599);


/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FASTLANE_ENDPOINT", function() { return FASTLANE_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIDEO_ENDPOINT", function() { return VIDEO_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYNC_ENDPOINT", function() { return SYNC_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", function() { return spec; });
/* harmony export (immutable) */ __webpack_exports__["hasVideoMediaType"] = hasVideoMediaType;
/* harmony export (immutable) */ __webpack_exports__["masSizeOrdering"] = masSizeOrdering;
/* harmony export (immutable) */ __webpack_exports__["determineRubiconVideoSizeId"] = determineRubiconVideoSizeId;
/* harmony export (immutable) */ __webpack_exports__["getPriceGranularity"] = getPriceGranularity;
/* harmony export (immutable) */ __webpack_exports__["hasValidVideoParams"] = hasValidVideoParams;
/* harmony export (immutable) */ __webpack_exports__["hasValidSupplyChainParams"] = hasValidSupplyChainParams;
/* harmony export (immutable) */ __webpack_exports__["encodeParam"] = encodeParam;
/* harmony export (immutable) */ __webpack_exports__["resetUserSync"] = resetUserSync;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_config_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__ = __webpack_require__(2);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





var DEFAULT_INTEGRATION = 'pbjs_lite'; // always use https, regardless of whether or not current page is secure

var FASTLANE_ENDPOINT = 'https://fastlane.rubiconproject.com/a/api/fastlane.json';
var VIDEO_ENDPOINT = 'https://prebid-server.rubiconproject.com/openrtb2/auction';
var SYNC_ENDPOINT = 'https://eus.rubiconproject.com/usync.html';
var GVLID = 52;
var DIGITRUST_PROP_NAMES = {
  FASTLANE: {
    id: 'dt.id',
    keyv: 'dt.keyv',
    pref: 'dt.pref'
  },
  PREBID_SERVER: {
    id: 'id',
    keyv: 'keyv'
  }
};
var sizeMap = {
  1: '468x60',
  2: '728x90',
  5: '120x90',
  8: '120x600',
  9: '160x600',
  10: '300x600',
  13: '200x200',
  14: '250x250',
  15: '300x250',
  16: '336x280',
  17: '240x400',
  19: '300x100',
  31: '980x120',
  32: '250x360',
  33: '180x500',
  35: '980x150',
  37: '468x400',
  38: '930x180',
  39: '750x100',
  40: '750x200',
  41: '750x300',
  42: '2x4',
  43: '320x50',
  44: '300x50',
  48: '300x300',
  53: '1024x768',
  54: '300x1050',
  55: '970x90',
  57: '970x250',
  58: '1000x90',
  59: '320x80',
  60: '320x150',
  61: '1000x1000',
  64: '580x500',
  65: '640x480',
  66: '930x600',
  67: '320x480',
  68: '1800x1000',
  72: '320x320',
  73: '320x160',
  78: '980x240',
  79: '980x300',
  80: '980x400',
  83: '480x300',
  85: '300x120',
  90: '548x150',
  94: '970x310',
  95: '970x100',
  96: '970x210',
  101: '480x320',
  102: '768x1024',
  103: '480x280',
  105: '250x800',
  108: '320x240',
  113: '1000x300',
  117: '320x100',
  125: '800x250',
  126: '200x600',
  144: '980x600',
  145: '980x150',
  152: '1000x250',
  156: '640x320',
  159: '320x250',
  179: '250x600',
  195: '600x300',
  198: '640x360',
  199: '640x200',
  213: '1030x590',
  214: '980x360',
  221: '1x1',
  229: '320x180',
  230: '2000x1400',
  232: '580x400',
  234: '6x6',
  251: '2x2',
  256: '480x820',
  257: '400x600',
  258: '500x200',
  259: '998x200',
  264: '970x1000',
  265: '1920x1080',
  274: '1800x200',
  278: '320x500',
  282: '320x400',
  288: '640x380'
};

__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["_each"](sizeMap, function (item, key) {
  return sizeMap[item] = key;
});

var spec = {
  code: 'rubicon',
  aliases: ['rubicon2'],
  gvlid: GVLID,
  supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["b" /* BANNER */], __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["d" /* VIDEO */]],

  /**
   * @param {object} bid
   * @return boolean
   */
  isBidRequestValid: function isBidRequestValid(bid) {
    if (_typeof(bid.params) !== 'object') {
      return false;
    } // validate account, site, zone have numeric values


    for (var i = 0, props = ['accountId', 'siteId', 'zoneId']; i < props.length; i++) {
      bid.params[props[i]] = parseInt(bid.params[props[i]]);

      if (isNaN(bid.params[props[i]])) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"]('Rubicon: wrong format of accountId or siteId or zoneId.');
        return false;
      }
    }

    var bidFormat = bidType(bid, true); // bidType is undefined? Return false

    if (!bidFormat) {
      return false;
    } else if (bidFormat === 'video') {
      // bidType is video, make sure it has required params
      return hasValidVideoParams(bid);
    } // bidType is banner? return true


    return true;
  },

  /**
   * @param {BidRequest[]} bidRequests
   * @param bidderRequest
   * @return BidRequest[]
   */
  buildRequests: function buildRequests(bidRequests, bidderRequest) {
    // separate video bids because the requests are structured differently
    var requests = [];
    var videoRequests = bidRequests.filter(function (bidRequest) {
      return bidType(bidRequest) === 'video';
    }).map(function (bidRequest) {
      bidRequest.startTime = new Date().getTime();
      var data = {
        id: bidRequest.transactionId,
        test: __WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('debug') ? 1 : 0,
        cur: ['USD'],
        source: {
          tid: bidRequest.transactionId
        },
        tmax: __WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('TTL') || 1000,
        imp: [{
          exp: 300,
          id: bidRequest.adUnitCode,
          secure: 1,
          ext: _defineProperty({}, bidRequest.bidder, bidRequest.params),
          video: __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, 'mediaTypes.video') || {}
        }],
        ext: {
          prebid: {
            cache: {
              vastxml: {
                returnCreative: false // don't return the VAST

              }
            },
            targeting: {
              includewinners: true,
              // includebidderkeys always false for openrtb
              includebidderkeys: false,
              pricegranularity: getPriceGranularity(__WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */])
            }
          }
        }
      }; // Add alias if it is there

      if (bidRequest.bidder !== 'rubicon') {
        data.ext.prebid.aliases = _defineProperty({}, bidRequest.bidder, 'rubicon');
      }

      var bidFloor;

      if (typeof bidRequest.getFloor === 'function' && !__WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('rubicon.disableFloors')) {
        var floorInfo = bidRequest.getFloor({
          currency: 'USD',
          mediaType: 'video',
          size: parseSizes(bidRequest, 'video')
        });
        bidFloor = _typeof(floorInfo) === 'object' && floorInfo.currency === 'USD' && !isNaN(parseInt(floorInfo.floor)) ? parseFloat(floorInfo.floor) : undefined;
      } else {
        bidFloor = parseFloat(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, 'params.floor'));
      }

      if (!isNaN(bidFloor)) {
        data.imp[0].bidfloor = bidFloor;
      } // if value is set, will overwrite with same value


      data.imp[0].ext[bidRequest.bidder].video.size_id = determineRubiconVideoSizeId(bidRequest);
      appendSiteAppDevice(data, bidRequest, bidderRequest);
      addVideoParameters(data, bidRequest);

      var digiTrust = _getDigiTrustQueryParams(bidRequest, 'PREBID_SERVER');

      if (digiTrust) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"](data, 'user.ext.digitrust', digiTrust);
      }

      if (bidderRequest.gdprConsent) {
        // note - gdprApplies & consentString may be undefined in certain use-cases for consentManagement module
        var gdprApplies;

        if (typeof bidderRequest.gdprConsent.gdprApplies === 'boolean') {
          gdprApplies = bidderRequest.gdprConsent.gdprApplies ? 1 : 0;
        }

        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"](data, 'regs.ext.gdpr', gdprApplies);
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"](data, 'user.ext.consent', bidderRequest.gdprConsent.consentString);
      }

      if (bidderRequest.uspConsent) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"](data, 'regs.ext.us_privacy', bidderRequest.uspConsent);
      }

      if (bidRequest.userId && _typeof(bidRequest.userId) === 'object' && (bidRequest.userId.tdid || bidRequest.userId.pubcid || bidRequest.userId.lipb || bidRequest.userId.idl_env)) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"](data, 'user.ext.eids', []);

        if (bidRequest.userId.tdid) {
          data.user.ext.eids.push({
            source: 'adserver.org',
            uids: [{
              id: bidRequest.userId.tdid,
              ext: {
                rtiPartner: 'TDID'
              }
            }]
          });
        }

        if (bidRequest.userId.pubcid) {
          data.user.ext.eids.push({
            source: 'pubcommon',
            uids: [{
              id: bidRequest.userId.pubcid
            }]
          });
        } // support liveintent ID


        if (bidRequest.userId.lipb && bidRequest.userId.lipb.lipbid) {
          data.user.ext.eids.push({
            source: 'liveintent.com',
            uids: [{
              id: bidRequest.userId.lipb.lipbid
            }]
          });
          data.user.ext.tpid = {
            source: 'liveintent.com',
            uid: bidRequest.userId.lipb.lipbid
          };

          if (Array.isArray(bidRequest.userId.lipb.segments) && bidRequest.userId.lipb.segments.length) {
            __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"](data, 'rp.target.LIseg', bidRequest.userId.lipb.segments);
          }
        } // support identityLink (aka LiveRamp)


        if (bidRequest.userId.idl_env) {
          data.user.ext.eids.push({
            source: 'liveramp.com',
            uids: [{
              id: bidRequest.userId.idl_env
            }]
          });
        }
      }

      if (__WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('coppa') === true) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"](data, 'regs.coppa', 1);
      }

      if (bidRequest.schain && hasValidSupplyChainParams(bidRequest.schain)) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"](data, 'source.ext.schain', bidRequest.schain);
      }

      var siteData = _extends({}, bidRequest.params.inventory, __WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('fpd.context'));

      var userData = _extends({}, bidRequest.params.visitor, __WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('fpd.user'));

      if (!__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isEmpty"](siteData) || !__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isEmpty"](userData)) {
        var bidderData = {
          bidders: [bidderRequest.bidderCode],
          config: {
            fpd: {}
          }
        };

        if (!__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isEmpty"](siteData)) {
          bidderData.config.fpd.site = siteData;
        }

        if (!__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isEmpty"](userData)) {
          bidderData.config.fpd.user = userData;
        }

        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"](data, 'ext.prebid.bidderconfig.0', bidderData);
      }
      /**
       * Prebid AdSlot
       * @type {(string|undefined)}
       */


      var pbAdSlot = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, 'fpd.context.pbAdSlot');

      if (typeof pbAdSlot === 'string' && pbAdSlot) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"](data.imp[0].ext, 'context.data.adslot', pbAdSlot);
      } // if storedAuctionResponse has been set, pass SRID


      if (bidRequest.storedAuctionResponse) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"](data.imp[0], 'ext.prebid.storedauctionresponse.id', bidRequest.storedAuctionResponse.toString());
      }

      return {
        method: 'POST',
        url: VIDEO_ENDPOINT,
        data: data,
        bidRequest: bidRequest
      };
    });

    if (__WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('rubicon.singleRequest') !== true) {
      // bids are not grouped if single request mode is not enabled
      requests = videoRequests.concat(bidRequests.filter(function (bidRequest) {
        return bidType(bidRequest) === 'banner';
      }).map(function (bidRequest) {
        var bidParams = spec.createSlotParams(bidRequest, bidderRequest);
        return {
          method: 'GET',
          url: FASTLANE_ENDPOINT,
          data: spec.getOrderedParams(bidParams).reduce(function (paramString, key) {
            var propValue = bidParams[key];
            return __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"](propValue) && propValue !== '' || __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isNumber"](propValue) ? "".concat(paramString).concat(encodeParam(key, propValue), "&") : paramString;
          }, '') + "slots=1&rand=".concat(Math.random()),
          bidRequest: bidRequest
        };
      }));
    } else {
      // single request requires bids to be grouped by site id into a single request
      // note: utils.groupBy wasn't used because deep property access was needed
      var nonVideoRequests = bidRequests.filter(function (bidRequest) {
        return bidType(bidRequest) === 'banner';
      });
      var groupedBidRequests = nonVideoRequests.reduce(function (groupedBids, bid) {
        (groupedBids[bid.params['siteId']] = groupedBids[bid.params['siteId']] || []).push(bid);
        return groupedBids;
      }, {}); // fastlane SRA has a limit of 10 slots

      var SRA_BID_LIMIT = 10; // multiple requests are used if bids groups have more than 10 bids

      requests = videoRequests.concat(Object.keys(groupedBidRequests).reduce(function (aggregate, bidGroupKey) {
        // for each partioned bidGroup, append a bidRequest to requests list
        partitionArray(groupedBidRequests[bidGroupKey], SRA_BID_LIMIT).forEach(function (bidsInGroup) {
          var combinedSlotParams = spec.combineSlotUrlParams(bidsInGroup.map(function (bidRequest) {
            return spec.createSlotParams(bidRequest, bidderRequest);
          })); // SRA request returns grouped bidRequest arrays not a plain bidRequest

          aggregate.push({
            method: 'GET',
            url: FASTLANE_ENDPOINT,
            data: spec.getOrderedParams(combinedSlotParams).reduce(function (paramString, key) {
              var propValue = combinedSlotParams[key];
              return __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isStr"](propValue) && propValue !== '' || __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isNumber"](propValue) ? "".concat(paramString).concat(encodeParam(key, propValue), "&") : paramString;
            }, '') + "slots=".concat(bidsInGroup.length, "&rand=").concat(Math.random()),
            bidRequest: bidsInGroup
          });
        });
        return aggregate;
      }, []));
    }

    return requests;
  },
  getOrderedParams: function getOrderedParams(params) {
    var containsTgV = /^tg_v/;
    var containsTgI = /^tg_i/;
    var orderedParams = ['account_id', 'site_id', 'zone_id', 'size_id', 'alt_size_ids', 'p_pos', 'gdpr', 'gdpr_consent', 'us_privacy', 'rp_schain', 'tpid_tdid', 'tpid_liveintent.com', 'tg_v.LIseg', 'dt.id', 'dt.keyv', 'dt.pref', 'rf', 'p_geo.latitude', 'p_geo.longitude', 'kw'].concat(Object.keys(params).filter(function (item) {
      return containsTgV.test(item);
    })).concat(Object.keys(params).filter(function (item) {
      return containsTgI.test(item);
    })).concat(['tk_flint', 'x_source.tid', 'x_source.pchain', 'p_screen_res', 'rp_floor', 'rp_secure', 'tk_user_key']);
    return orderedParams.concat(Object.keys(params).filter(function (item) {
      return orderedParams.indexOf(item) === -1;
    }));
  },

  /**
   * @summary combines param values from an array of slots into a single semicolon delineated value
   * or just one value if they are all the same.
   * @param {Object[]} aSlotUrlParams - example [{p1: 'foo', p2: 'test'}, {p2: 'test'}, {p1: 'bar', p2: 'test'}]
   * @return {Object} - example {p1: 'foo;;bar', p2: 'test'}
   */
  combineSlotUrlParams: function combineSlotUrlParams(aSlotUrlParams) {
    // if only have params for one slot, return those params
    if (aSlotUrlParams.length === 1) {
      return aSlotUrlParams[0];
    } // reduce param values from all slot objects into an array of values in a single object


    var oCombinedSlotUrlParams = aSlotUrlParams.reduce(function (oCombinedParams, oSlotUrlParams, iIndex) {
      Object.keys(oSlotUrlParams).forEach(function (param) {
        if (!oCombinedParams.hasOwnProperty(param)) {
          oCombinedParams[param] = new Array(aSlotUrlParams.length); // initialize array;
        } // insert into the proper element of the array


        oCombinedParams[param].splice(iIndex, 1, oSlotUrlParams[param]);
      });
      return oCombinedParams;
    }, {}); // convert arrays into semicolon delimited strings

    var re = new RegExp('^([^;]*)(;\\1)+$'); // regex to test for duplication

    Object.keys(oCombinedSlotUrlParams).forEach(function (param) {
      var sValues = oCombinedSlotUrlParams[param].join(';'); // consolidate param values into one value if they are all the same

      var match = sValues.match(re);
      oCombinedSlotUrlParams[param] = match ? match[1] : sValues;
    });
    return oCombinedSlotUrlParams;
  },

  /**
   * @param {BidRequest} bidRequest
   * @param {Object} bidderRequest
   * @returns {Object} - object key values named and formatted as slot params
   */
  createSlotParams: function createSlotParams(bidRequest, bidderRequest) {
    bidRequest.startTime = new Date().getTime();
    var params = bidRequest.params; // use rubicon sizes if provided, otherwise adUnit.sizes

    var parsedSizes = parseSizes(bidRequest, 'banner');

    var _ref = params.latLong || [],
        _ref2 = _slicedToArray(_ref, 2),
        latitude = _ref2[0],
        longitude = _ref2[1];

    var configIntType = __WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('rubicon.int_type');
    var data = {
      'account_id': params.accountId,
      'site_id': params.siteId,
      'zone_id': params.zoneId,
      'size_id': parsedSizes[0],
      'alt_size_ids': parsedSizes.slice(1).join(',') || undefined,
      'rp_floor': (params.floor = parseFloat(params.floor)) > 0.01 ? params.floor : 0.01,
      'rp_secure': '1',
      'tk_flint': "".concat(configIntType || DEFAULT_INTEGRATION, "_v3.18.0"),
      'x_source.tid': bidRequest.transactionId,
      'x_source.pchain': params.pchain,
      'p_screen_res': _getScreenResolution(),
      'tk_user_key': params.userId,
      'p_geo.latitude': isNaN(parseFloat(latitude)) ? undefined : parseFloat(latitude).toFixed(4),
      'p_geo.longitude': isNaN(parseFloat(longitude)) ? undefined : parseFloat(longitude).toFixed(4),
      'tg_fl.eid': bidRequest.code,
      'rf': _getPageUrl(bidRequest, bidderRequest)
    }; // If floors module is enabled and we get USD floor back, send it in rp_hard_floor else undfined

    if (typeof bidRequest.getFloor === 'function' && !__WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('rubicon.disableFloors')) {
      var floorInfo = bidRequest.getFloor({
        currency: 'USD',
        mediaType: 'banner',
        size: '*'
      });
      data['rp_hard_floor'] = _typeof(floorInfo) === 'object' && floorInfo.currency === 'USD' && !isNaN(parseInt(floorInfo.floor)) ? floorInfo.floor : undefined;
    } // add p_pos only if specified and valid
    // For SRA we need to explicitly put empty semi colons so AE treats it as empty, instead of copying the latter value


    data['p_pos'] = params.position === 'atf' || params.position === 'btf' ? params.position : '';

    if (bidRequest.userId) {
      if (bidRequest.userId.tdid) {
        data['tpid_tdid'] = bidRequest.userId.tdid;
      } // support liveintent ID


      if (bidRequest.userId.lipb && bidRequest.userId.lipb.lipbid) {
        data['tpid_liveintent.com'] = bidRequest.userId.lipb.lipbid;

        if (Array.isArray(bidRequest.userId.lipb.segments) && bidRequest.userId.lipb.segments.length) {
          data['tg_v.LIseg'] = bidRequest.userId.lipb.segments.join(',');
        }
      } // support identityLink (aka LiveRamp)


      if (bidRequest.userId.idl_env) {
        data['tpid_liveramp.com'] = bidRequest.userId.idl_env;
      }
    }

    if (bidderRequest.gdprConsent) {
      // add 'gdpr' only if 'gdprApplies' is defined
      if (typeof bidderRequest.gdprConsent.gdprApplies === 'boolean') {
        data['gdpr'] = Number(bidderRequest.gdprConsent.gdprApplies);
      }

      data['gdpr_consent'] = bidderRequest.gdprConsent.consentString;
    }

    if (bidderRequest.uspConsent) {
      data['us_privacy'] = encodeURIComponent(bidderRequest.uspConsent);
    } // visitor properties


    var visitorData = _extends({}, params.visitor, __WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('fpd.user'));

    Object.keys(visitorData).forEach(function (key) {
      if (visitorData[key] != null && key !== 'keywords') {
        data["tg_v.".concat(key)] = _typeof(visitorData[key]) === 'object' && !Array.isArray(visitorData[key]) ? JSON.stringify(visitorData[key]) : visitorData[key].toString(); // initialize array;
      }
    }); // inventory properties

    var inventoryData = _extends({}, params.inventory, __WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('fpd.context'));

    Object.keys(inventoryData).forEach(function (key) {
      if (inventoryData[key] != null && key !== 'keywords') {
        data["tg_i.".concat(key)] = _typeof(inventoryData[key]) === 'object' && !Array.isArray(inventoryData[key]) ? JSON.stringify(inventoryData[key]) : inventoryData[key].toString();
      }
    }); // keywords

    var keywords = (params.keywords || []).concat(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](__WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('fpd.user'), 'keywords') || [], __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](__WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('fpd.context'), 'keywords') || []);
    data.kw = Array.isArray(keywords) && keywords.length ? keywords.join(',') : '';
    /**
     * Prebid AdSlot
     * @type {(string|undefined)}
     */

    var pbAdSlot = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, 'fpd.context.pbAdSlot');

    if (typeof pbAdSlot === 'string' && pbAdSlot) {
      data['tg_i.dfp_ad_unit_code'] = pbAdSlot.replace(/^\/+/, '');
    } // digitrust properties


    var digitrustParams = _getDigiTrustQueryParams(bidRequest, 'FASTLANE');

    _extends(data, digitrustParams);

    if (__WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('coppa') === true) {
      data['coppa'] = 1;
    } // if SupplyChain is supplied and contains all required fields


    if (bidRequest.schain && hasValidSupplyChainParams(bidRequest.schain)) {
      data.rp_schain = spec.serializeSupplyChain(bidRequest.schain);
    }

    return data;
  },

  /**
   * Serializes schain params according to OpenRTB requirements
   * @param {Object} supplyChain
   * @returns {String}
   */
  serializeSupplyChain: function serializeSupplyChain(supplyChain) {
    var supplyChainIsValid = hasValidSupplyChainParams(supplyChain);
    if (!supplyChainIsValid) return '';
    var ver = supplyChain.ver,
        complete = supplyChain.complete,
        nodes = supplyChain.nodes;
    return "".concat(ver, ",").concat(complete, "!").concat(spec.serializeSupplyChainNodes(nodes));
  },

  /**
   * Properly sorts schain object params
   * @param {Array} nodes
   * @returns {String}
   */
  serializeSupplyChainNodes: function serializeSupplyChainNodes(nodes) {
    var nodePropOrder = ['asi', 'sid', 'hp', 'rid', 'name', 'domain'];
    return nodes.map(function (node) {
      return nodePropOrder.map(function (prop) {
        return encodeURIComponent(node[prop] || '');
      }).join(',');
    }).join('!');
  },

  /**
   * @param {*} responseObj
   * @param {BidRequest|Object.<string, BidRequest[]>} bidRequest - if request was SRA the bidRequest argument will be a keyed BidRequest array object,
   * non-SRA responses return a plain BidRequest object
   * @return {Bid[]} An array of bids which
   */
  interpretResponse: function interpretResponse(responseObj, _ref3) {
    var bidRequest = _ref3.bidRequest;
    responseObj = responseObj.body; // check overall response

    if (!responseObj || _typeof(responseObj) !== 'object') {
      return [];
    } // video response from PBS Java openRTB


    if (responseObj.seatbid) {
      var responseErrors = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](responseObj, 'ext.errors.rubicon');

      if (Array.isArray(responseErrors) && responseErrors.length > 0) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"]('Rubicon: Error in video response');
      }

      var bids = [];
      responseObj.seatbid.forEach(function (seatbid) {
        (seatbid.bid || []).forEach(function (bid) {
          var bidObject = {
            requestId: bidRequest.bidId,
            currency: responseObj.cur || 'USD',
            creativeId: bid.crid,
            cpm: bid.price || 0,
            bidderCode: seatbid.seat,
            ttl: 300,
            netRevenue: __WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('rubicon.netRevenue') !== false,
            // If anything other than false, netRev is true
            width: bid.w || __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, 'mediaTypes.video.w') || __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, 'params.video.playerWidth'),
            height: bid.h || __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, 'mediaTypes.video.h') || __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, 'params.video.playerHeight')
          };

          if (bid.id) {
            bidObject.seatBidId = bid.id;
          }

          if (bid.dealid) {
            bidObject.dealId = bid.dealid;
          }

          var serverResponseTimeMs = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](responseObj, 'ext.responsetimemillis.rubicon');

          if (bidRequest && serverResponseTimeMs) {
            bidRequest.serverResponseTimeMs = serverResponseTimeMs;
          }

          if (__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bid, 'ext.prebid.type') === __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["d" /* VIDEO */]) {
            bidObject.mediaType = __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["d" /* VIDEO */];
            var extPrebidTargeting = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bid, 'ext.prebid.targeting'); // If ext.prebid.targeting exists, add it as a property value named 'adserverTargeting'

            if (extPrebidTargeting && _typeof(extPrebidTargeting) === 'object') {
              bidObject.adserverTargeting = extPrebidTargeting;
            } // try to get cache values from 'response.ext.prebid.cache.js'
            // else try 'bid.ext.prebid.targeting' as fallback


            if (bid.ext.prebid.cache && _typeof(bid.ext.prebid.cache.vastXml) === 'object' && bid.ext.prebid.cache.vastXml.cacheId && bid.ext.prebid.cache.vastXml.url) {
              bidObject.videoCacheKey = bid.ext.prebid.cache.vastXml.cacheId;
              bidObject.vastUrl = bid.ext.prebid.cache.vastXml.url;
            } else if (extPrebidTargeting && extPrebidTargeting.hb_uuid && extPrebidTargeting.hb_cache_host && extPrebidTargeting.hb_cache_path) {
              bidObject.videoCacheKey = extPrebidTargeting.hb_uuid; // build url using key and cache host

              bidObject.vastUrl = "https://".concat(extPrebidTargeting.hb_cache_host).concat(extPrebidTargeting.hb_cache_path, "?uuid=").concat(extPrebidTargeting.hb_uuid);
            }

            if (bid.adm) {
              bidObject.vastXml = bid.adm;
            }

            if (bid.nurl) {
              bidObject.vastUrl = bid.nurl;
            }

            if (!bidObject.vastUrl && bid.nurl) {
              bidObject.vastUrl = bid.nurl;
            }
          } else {
            __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"]('Rubicon: video response received non-video media type');
          }

          bids.push(bidObject);
        });
      });
      return bids;
    }

    var ads = responseObj.ads; // video ads array is wrapped in an object

    if (_typeof(bidRequest) === 'object' && !Array.isArray(bidRequest) && bidType(bidRequest) === 'video' && _typeof(ads) === 'object') {
      ads = ads[bidRequest.adUnitCode];
    } // check the ad response


    if (!Array.isArray(ads) || ads.length < 1) {
      return [];
    }

    return ads.reduce(function (bids, ad, i) {
      if (ad.status !== 'ok') {
        return bids;
      } // associate bidRequests; assuming ads matches bidRequest


      var associatedBidRequest = Array.isArray(bidRequest) ? bidRequest[i] : bidRequest;

      if (associatedBidRequest && _typeof(associatedBidRequest) === 'object') {
        var bid = {
          requestId: associatedBidRequest.bidId,
          currency: 'USD',
          creativeId: ad.creative_id || "".concat(ad.network || '', "-").concat(ad.advertiser || ''),
          cpm: ad.cpm || 0,
          dealId: ad.deal,
          ttl: 300,
          // 5 minutes
          netRevenue: __WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('rubicon.netRevenue') !== false,
          // If anything other than false, netRev is true
          rubicon: {
            advertiserId: ad.advertiser,
            networkId: ad.network
          },
          meta: {
            advertiserId: ad.advertiser,
            networkId: ad.network
          }
        };

        if (ad.creative_type) {
          bid.mediaType = ad.creative_type;
        }

        if (ad.creative_type === __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["d" /* VIDEO */]) {
          bid.width = associatedBidRequest.params.video.playerWidth;
          bid.height = associatedBidRequest.params.video.playerHeight;
          bid.vastUrl = ad.creative_depot_url;
          bid.impression_id = ad.impression_id;
          bid.videoCacheKey = ad.impression_id;
        } else {
          bid.ad = _renderCreative(ad.script, ad.impression_id);

          var _sizeMap$ad$size_id$s = sizeMap[ad.size_id].split('x').map(function (num) {
            return Number(num);
          });

          var _sizeMap$ad$size_id$s2 = _slicedToArray(_sizeMap$ad$size_id$s, 2);

          bid.width = _sizeMap$ad$size_id$s2[0];
          bid.height = _sizeMap$ad$size_id$s2[1];
        } // add server-side targeting


        bid.rubiconTargeting = (Array.isArray(ad.targeting) ? ad.targeting : []).reduce(function (memo, item) {
          memo[item.key] = item.values[0];
          return memo;
        }, {
          'rpfl_elemid': associatedBidRequest.adUnitCode
        });
        bids.push(bid);
      } else {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"]("Rubicon: bidRequest undefined at index position:".concat(i), bidRequest, responseObj);
      }

      return bids;
    }, []).sort(function (adA, adB) {
      return (adB.cpm || 0.0) - (adA.cpm || 0.0);
    });
  },
  getUserSyncs: function getUserSyncs(syncOptions, responses, gdprConsent, uspConsent) {
    if (!hasSynced && syncOptions.iframeEnabled) {
      // data is only assigned if params are available to pass to SYNC_ENDPOINT
      var params = '';

      if (gdprConsent && typeof gdprConsent.consentString === 'string') {
        // add 'gdpr' only if 'gdprApplies' is defined
        if (typeof gdprConsent.gdprApplies === 'boolean') {
          params += "?gdpr=".concat(Number(gdprConsent.gdprApplies), "&gdpr_consent=").concat(gdprConsent.consentString);
        } else {
          params += "?gdpr_consent=".concat(gdprConsent.consentString);
        }
      }

      if (uspConsent) {
        params += "".concat(params ? '&' : '?', "us_privacy=").concat(encodeURIComponent(uspConsent));
      }

      hasSynced = true;
      return {
        type: 'iframe',
        url: SYNC_ENDPOINT + params
      };
    }
  },

  /**
   * Covert bid param types for S2S
   * @param {Object} params bid params
   * @param {Boolean} isOpenRtb boolean to check openrtb2 protocol
   * @return {Object} params bid params
   */
  transformBidParams: function transformBidParams(params, isOpenRtb) {
    return __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["convertTypes"]({
      'accountId': 'number',
      'siteId': 'number',
      'zoneId': 'number'
    }, params);
  }
};

function _getScreenResolution() {
  return [window.screen.width, window.screen.height].join('x');
}

function _getDigiTrustQueryParams() {
  var _digiTrustQueryParams;

  var bidRequest = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var endpointName = arguments.length > 1 ? arguments[1] : undefined;

  if (!endpointName || !DIGITRUST_PROP_NAMES[endpointName]) {
    return null;
  }

  var propNames = DIGITRUST_PROP_NAMES[endpointName];

  function getDigiTrustId() {
    var bidRequestDigitrust = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, 'userId.digitrustid.data');

    if (bidRequestDigitrust) {
      return bidRequestDigitrust;
    }

    var digiTrustUser = window.DigiTrust && (__WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('digiTrustId') || window.DigiTrust.getUser({
      member: 'T9QSFKPDN9'
    }));
    return digiTrustUser && digiTrustUser.success && digiTrustUser.identity || null;
  }

  var digiTrustId = getDigiTrustId(); // Verify there is an ID and this user has not opted out

  if (!digiTrustId || digiTrustId.privacy && digiTrustId.privacy.optout) {
    return null;
  }

  var digiTrustQueryParams = (_digiTrustQueryParams = {}, _defineProperty(_digiTrustQueryParams, propNames.id, digiTrustId.id), _defineProperty(_digiTrustQueryParams, propNames.keyv, digiTrustId.keyv), _digiTrustQueryParams);

  if (propNames.pref) {
    digiTrustQueryParams[propNames.pref] = 0;
  }

  return digiTrustQueryParams;
}
/**
 * @param {BidRequest} bidRequest
 * @param bidderRequest
 * @returns {string}
 */


function _getPageUrl(bidRequest, bidderRequest) {
  var pageUrl = __WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('pageUrl');

  if (bidRequest.params.referrer) {
    pageUrl = bidRequest.params.referrer;
  } else if (!pageUrl) {
    pageUrl = bidderRequest.refererInfo.referer;
  }

  return bidRequest.params.secure ? pageUrl.replace(/^http:/i, 'https:') : pageUrl;
}

function _renderCreative(script, impId) {
  return "<html>\n<head><script type='text/javascript'>inDapIF=true;</script></head>\n<body style='margin : 0; padding: 0;'>\n<!-- Rubicon Project Ad Tag -->\n<div data-rp-impression-id='".concat(impId, "'>\n<script type='text/javascript'>").concat(script, "</script>\n</div>\n</body>\n</html>");
}

function parseSizes(bid, mediaType) {
  var params = bid.params;

  if (mediaType === 'video') {
    var size = [];

    if (params.video && params.video.playerWidth && params.video.playerHeight) {
      size = [params.video.playerWidth, params.video.playerHeight];
    } else if (Array.isArray(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bid, 'mediaTypes.video.playerSize')) && bid.mediaTypes.video.playerSize.length === 1) {
      size = bid.mediaTypes.video.playerSize[0];
    } else if (Array.isArray(bid.sizes) && bid.sizes.length > 0 && Array.isArray(bid.sizes[0]) && bid.sizes[0].length > 1) {
      size = bid.sizes[0];
    }

    return size;
  } // deprecated: temp legacy support


  var sizes = [];

  if (Array.isArray(params.sizes)) {
    sizes = params.sizes;
  } else if (typeof __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bid, 'mediaTypes.banner.sizes') !== 'undefined') {
    sizes = mapSizes(bid.mediaTypes.banner.sizes);
  } else if (Array.isArray(bid.sizes) && bid.sizes.length > 0) {
    sizes = mapSizes(bid.sizes);
  } else {
    __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logWarn"]('Rubicon: no sizes are setup or found');
  }

  return masSizeOrdering(sizes);
}
/**
 * @param {Object} data
 * @param bidRequest
 * @param bidderRequest
 */


function appendSiteAppDevice(data, bidRequest, bidderRequest) {
  if (!data) return; // ORTB specifies app OR site

  if (_typeof(__WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('app')) === 'object') {
    data.app = __WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('app');
  } else {
    data.site = {
      page: _getPageUrl(bidRequest, bidderRequest)
    };
  }

  if (_typeof(__WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('device')) === 'object') {
    data.device = __WEBPACK_IMPORTED_MODULE_2__src_config_js__["b" /* config */].getConfig('device');
  } // Add language to site and device objects if there


  if (bidRequest.params.video.language) {
    ['site', 'device'].forEach(function (param) {
      if (data[param]) {
        data[param].content = _extends({
          language: bidRequest.params.video.language
        }, data[param].content);
      }
    });
  }
}
/**
 * @param {Object} data
 * @param {BidRequest} bidRequest
 */


function addVideoParameters(data, bidRequest) {
  if (_typeof(data.imp[0].video) === 'object' && data.imp[0].video.skip === undefined) {
    data.imp[0].video.skip = bidRequest.params.video.skip;
  }

  if (_typeof(data.imp[0].video) === 'object' && data.imp[0].video.skipafter === undefined) {
    data.imp[0].video.skipafter = bidRequest.params.video.skipdelay;
  } // video.pos can already be specified by adunit.mediatypes.video.pos.
  // but if not, it might be specified in the params


  if (_typeof(data.imp[0].video) === 'object' && data.imp[0].video.pos === undefined) {
    if (bidRequest.params.position === 'atf') {
      data.imp[0].video.pos = 1;
    } else if (bidRequest.params.position === 'btf') {
      data.imp[0].video.pos = 3;
    }
  }

  var size = parseSizes(bidRequest, 'video');
  data.imp[0].video.w = size[0];
  data.imp[0].video.h = size[1];
}
/**
 * @param sizes
 * @returns {*}
 */


function mapSizes(sizes) {
  return __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["parseSizesInput"](sizes) // map sizes while excluding non-matches
  .reduce(function (result, size) {
    var mappedSize = parseInt(sizeMap[size], 10);

    if (mappedSize) {
      result.push(mappedSize);
    }

    return result;
  }, []);
}
/**
 * Test if bid has mediaType or mediaTypes set for video.
 * Also makes sure the video object is present in the rubicon bidder params
 * @param {BidRequest} bidRequest
 * @returns {boolean}
 */


function hasVideoMediaType(bidRequest) {
  if (_typeof(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, 'params.video')) !== 'object') {
    return false;
  }

  return typeof __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bidRequest, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["d" /* VIDEO */])) !== 'undefined';
}
/**
 * Determine bidRequest mediaType
 * @param bid the bid to test
 * @param log whether we should log errors/warnings for invalid bids
 * @returns {string|undefined} Returns 'video' or 'banner' if resolves to a type, or undefined otherwise (invalid).
 */

function bidType(bid) {
  var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  // Is it considered video ad unit by rubicon
  if (hasVideoMediaType(bid)) {
    // Removed legacy mediaType support. new way using mediaTypes.video object is now required
    // We require either context as instream or outstream
    if (['outstream', 'instream'].indexOf(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bid, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["d" /* VIDEO */], ".context"))) === -1) {
      if (log) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"]('Rubicon: mediaTypes.video.context must be outstream or instream');
      }

      return;
    } // we require playerWidth and playerHeight to come from one of params.playerWidth/playerHeight or mediaTypes.video.playerSize or adUnit.sizes


    if (parseSizes(bid, 'video').length < 2) {
      if (log) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"]('Rubicon: could not determine the playerSize of the video');
      }

      return;
    }

    if (log) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logMessage"]('Rubicon: making video request for adUnit', bid.adUnitCode);
    }

    return 'video';
  } else {
    // we require banner sizes to come from one of params.sizes or mediaTypes.banner.sizes or adUnit.sizes, in that order
    // if we cannot determine them, we reject it!
    if (parseSizes(bid, 'banner').length === 0) {
      if (log) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"]('Rubicon: could not determine the sizes for banner request');
      }

      return;
    } // everything looks good for banner so lets do it


    if (log) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logMessage"]('Rubicon: making banner request for adUnit', bid.adUnitCode);
    }

    return 'banner';
  }
}

function masSizeOrdering(sizes) {
  var MAS_SIZE_PRIORITY = [15, 2, 9];
  return sizes.sort(function (first, second) {
    // sort by MAS_SIZE_PRIORITY priority order
    var firstPriority = MAS_SIZE_PRIORITY.indexOf(first);
    var secondPriority = MAS_SIZE_PRIORITY.indexOf(second);

    if (firstPriority > -1 || secondPriority > -1) {
      if (firstPriority === -1) {
        return 1;
      }

      if (secondPriority === -1) {
        return -1;
      }

      return firstPriority - secondPriority;
    } // and finally ascending order


    return first - second;
  });
}
function determineRubiconVideoSizeId(bid) {
  // If we have size_id in the bid then use it
  var rubiconSizeId = parseInt(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bid, 'params.video.size_id'));

  if (!isNaN(rubiconSizeId)) {
    return rubiconSizeId;
  } // otherwise 203 for outstream and 201 for instream
  // When this function is used we know it has to be one of outstream or instream


  return __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bid, "mediaTypes.".concat(__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__["d" /* VIDEO */], ".context")) === 'outstream' ? 203 : 201;
}
/**
 * @param {PrebidConfig} config
 * @returns {{ranges: {ranges: Object[]}}}
 */

function getPriceGranularity(config) {
  return {
    ranges: {
      low: [{
        max: 5.00,
        increment: 0.50
      }],
      medium: [{
        max: 20.00,
        increment: 0.10
      }],
      high: [{
        max: 20.00,
        increment: 0.01
      }],
      auto: [{
        max: 5.00,
        increment: 0.05
      }, {
        min: 5.00,
        max: 10.00,
        increment: 0.10
      }, {
        min: 10.00,
        max: 20.00,
        increment: 0.50
      }],
      dense: [{
        max: 3.00,
        increment: 0.01
      }, {
        min: 3.00,
        max: 8.00,
        increment: 0.05
      }, {
        min: 8.00,
        max: 20.00,
        increment: 0.50
      }],
      custom: config.getConfig('customPriceBucket') && config.getConfig('customPriceBucket').buckets
    }[config.getConfig('priceGranularity')]
  };
} // Function to validate the required video params

function hasValidVideoParams(bid) {
  var isValid = true; // incase future javascript changes the string represenation of the array or number classes!

  var arrayType = Object.prototype.toString.call([]);
  var numberType = Object.prototype.toString.call(0); // required params and their associated object type

  var requiredParams = {
    mimes: arrayType,
    protocols: arrayType,
    maxduration: numberType,
    linearity: numberType,
    api: arrayType
  }; // loop through each param and verify it has the correct

  Object.keys(requiredParams).forEach(function (param) {
    if (Object.prototype.toString.call(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bid, 'mediaTypes.video.' + param)) !== requiredParams[param]) {
      isValid = false;
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"]('Rubicon: mediaTypes.video.' + param + ' is required and must be of type: ' + requiredParams[param]);
    }
  });
  return isValid;
}
/**
 * Make sure the required params are present
 * @param {Object} schain
 * @param {Bool}
 */

function hasValidSupplyChainParams(schain) {
  var isValid = false;
  var requiredFields = ['asi', 'sid', 'hp'];
  if (!schain.nodes) return isValid;
  isValid = schain.nodes.reduce(function (status, node) {
    if (!status) return status;
    return requiredFields.every(function (field) {
      return node[field];
    });
  }, true);
  if (!isValid) __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"]('Rubicon: required schain params missing');
  return isValid;
}
/**
 * Creates a URL key value param, encoding the
 * param unless the key is schain
 * @param {String} key
 * @param {String} param
 * @returns {String}
 */

function encodeParam(key, param) {
  if (key === 'rp_schain') return "rp_schain=".concat(param);
  return "".concat(key, "=").concat(encodeURIComponent(param));
}
/**
 * split array into multiple arrays of defined size
 * @param {Array} array
 * @param {number} size
 * @returns {Array}
 */

function partitionArray(array, size) {
  return array.map(function (e, i) {
    return i % size === 0 ? array.slice(i, i + size) : null;
  }).filter(function (e) {
    return e;
  });
}

var hasSynced = false;
function resetUserSync() {
  hasSynced = false;
}
Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__["registerBidder"])(spec);

/***/ })

},[598]);

owpbjsChunk([98],{

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(613);


/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", function() { return spec; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__ = __webpack_require__(1);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var spec = {
  code: 'sekindoUM',
  supportedMediaTypes: ['banner', 'video'],

  /**
   * Determines whether or not the given bid request is valid.
   *
   * @param {BidRequest} bid The bid params to validate.
   * @return boolean True if this is a valid bid, and false otherwise.
   */
  isBidRequestValid: function isBidRequestValid(bid) {
    if (bid.mediaType == 'video' || _typeof(bid.mediaTypes) == 'object' && _typeof(bid.mediaTypes.video) == 'object') {
      if (_typeof(bid.params.video) != 'object' || typeof bid.params.video.playerWidth == 'undefined' || typeof bid.params.video.playerHeight == 'undefined') {
        return false;
      }
    }

    return !!bid.params.spaceId;
  },

  /**
   * Make a server request from the list of BidRequests.
   *
   * @param {validBidRequests[]} - an array of bids
   * @return ServerRequest Info describing the request to the server.
   */
  buildRequests: function buildRequests(validBidRequests, bidderRequest) {
    var pubUrl = null;

    try {
      if (window.top == window) {
        pubUrl = window.location.href;
      } else {
        try {
          pubUrl = window.top.location.href;
        } catch (e2) {
          pubUrl = document.referrer;
        }
      }
    } catch (e1) {}

    return validBidRequests.map(function (bidRequest) {
      var subId = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["getBidIdParameter"]('subId', bidRequest.params);
      var spaceId = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["getBidIdParameter"]('spaceId', bidRequest.params);
      var bidfloor = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["getBidIdParameter"]('bidfloor', bidRequest.params);
      var protocol = document.location.protocol === 'https:' ? 's' : '';
      var queryString = '';
      queryString = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](queryString, 's', spaceId);
      queryString = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](queryString, 'subId', subId);
      queryString = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](queryString, 'pubUrl', pubUrl);
      queryString = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](queryString, 'hbTId', bidRequest.transactionId);
      queryString = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](queryString, 'hbBidId', bidRequest.bidId);
      queryString = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](queryString, 'hbver', '4');
      queryString = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](queryString, 'hbcb', '1'); /// legasy

      queryString = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](queryString, 'dcpmflr', bidfloor);
      queryString = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](queryString, 'protocol', protocol);
      queryString = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](queryString, 'x', bidRequest.params.width);
      queryString = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](queryString, 'y', bidRequest.params.height);

      if (bidderRequest && bidderRequest.gdprConsent) {
        queryString = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](queryString, 'gdprConsent', bidderRequest.gdprConsent.consentString);
        queryString = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](queryString, 'gdpr', bidderRequest.gdprConsent.gdprApplies ? '1' : '0');
      }

      if (bidRequest.mediaType === 'video' || _typeof(bidRequest.mediaTypes) == 'object' && _typeof(bidRequest.mediaTypes.video) == 'object') {
        queryString = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](queryString, 'x', bidRequest.params.playerWidth);
        queryString = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](queryString, 'y', bidRequest.params.playerHeight);

        if (typeof vid_vastType != 'undefined') {
          // eslint-disable-line camelcase
          queryString = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](queryString, 'vid_vastType', bidRequest.params.vid_vastType);
        }

        if (_typeof(bidRequest.mediaTypes) == 'object' && _typeof(bidRequest.mediaTypes.video) == 'object' && typeof bidRequest.mediaTypes.video.context == 'string') {
          queryString = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["tryAppendQueryString"](queryString, 'vid_context', bidRequest.mediaTypes.video.context);
        }
      }

      var endpointUrl = 'https' + '://hb.sekindo.com/live/liveView.php';
      return {
        method: 'GET',
        url: endpointUrl,
        data: queryString
      };
    });
  },

  /**
   * Unpack the response from the server into a list of bids.
   *
   * @param {*} serverResponse A successful response from the server.
   * @return {Bid[]} An array of bids which were nested inside the server.
   */
  interpretResponse: function interpretResponse(serverResponse, bidRequest) {
    if (_typeof(serverResponse) !== 'object') {
      return [];
    }

    var bidResponses = [];
    var bidResponse = {
      requestId: serverResponse.body.id,
      bidderCode: spec.code,
      cpm: serverResponse.body.cpm,
      width: serverResponse.body.width,
      height: serverResponse.body.height,
      creativeId: serverResponse.body.creativeId,
      currency: serverResponse.body.currency,
      netRevenue: serverResponse.body.netRevenue,
      ttl: serverResponse.body.ttl
    };

    if (bidRequest.mediaType == 'video') {
      if (typeof serverResponse.body.vastUrl != 'undefined') {
        bidResponse.vastUrl = serverResponse.body.vastUrl;
      } else {
        bidResponse.vastXml = serverResponse.body.vastXml;
      }
    } else {
      bidResponse.ad = serverResponse.body.ad;
    }

    bidResponses.push(bidResponse);
    return bidResponses;
  }
};
Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__["registerBidder"])(spec);

/***/ })

},[612]);

owpbjsChunk([85],{

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(649);


/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spec", function() { return spec; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_utils_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__ = __webpack_require__(2);



var spec = {
  code: 'sovrn',
  supportedMediaTypes: [__WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["b" /* BANNER */]],

  /**
   * Check if the bid is a valid zone ID in either number or string form
   * @param {object} bid the Sovrn bid to validate
   * @return boolean for whether or not a bid is valid
   */
  isBidRequestValid: function isBidRequestValid(bid) {
    return !!(bid.params.tagid && !isNaN(parseFloat(bid.params.tagid)) && isFinite(bid.params.tagid));
  },

  /**
   * Format the bid request object for our endpoint
   * @param {BidRequest[]} bidRequests Array of Sovrn bidders
   * @return object of parameters for Prebid AJAX request
   */
  buildRequests: function buildRequests(bidReqs, bidderRequest) {
    try {
      var sovrnImps = [];
      var iv;
      var schain;
      var digitrust;

      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["_each"](bidReqs, function (bid) {
        if (!digitrust) {
          var bidRequestDigitrust = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](bid, 'userId.digitrustid.data');

          if (bidRequestDigitrust && (!bidRequestDigitrust.privacy || !bidRequestDigitrust.privacy.optout)) {
            digitrust = {
              id: bidRequestDigitrust.id,
              keyv: bidRequestDigitrust.keyv
            };
          }
        }

        if (bid.schain) {
          schain = schain || bid.schain;
        }

        iv = iv || __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["getBidIdParameter"]('iv', bid.params);
        var bidSizes = bid.mediaTypes && bid.mediaTypes.banner && bid.mediaTypes.banner.sizes || bid.sizes;
        bidSizes = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"](bidSizes) && __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"](bidSizes[0]) ? bidSizes : [bidSizes];
        bidSizes = bidSizes.filter(function (size) {
          return __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["isArray"](size);
        });
        var processedSizes = bidSizes.map(function (size) {
          return {
            w: parseInt(size[0], 10),
            h: parseInt(size[1], 10)
          };
        });
        sovrnImps.push({
          id: bid.bidId,
          banner: {
            format: processedSizes,
            w: 1,
            h: 1
          },
          tagid: String(__WEBPACK_IMPORTED_MODULE_0__src_utils_js__["getBidIdParameter"]('tagid', bid.params)),
          bidfloor: __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["getBidIdParameter"]('bidfloor', bid.params)
        });
      });

      var page = bidderRequest.refererInfo.referer; // clever trick to get the domain

      var domain = __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["parseUrl"](page).hostname;
      var sovrnBidReq = {
        id: __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["getUniqueIdentifierStr"](),
        imp: sovrnImps,
        site: {
          page: page,
          domain: domain
        }
      };

      if (schain) {
        sovrnBidReq.source = {
          ext: {
            schain: schain
          }
        };
      }

      if (bidderRequest.gdprConsent) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"](sovrnBidReq, 'regs.ext.gdpr', +bidderRequest.gdprConsent.gdprApplies);
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"](sovrnBidReq, 'user.ext.consent', bidderRequest.gdprConsent.consentString);
      }

      if (bidderRequest.uspConsent) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"](sovrnBidReq, 'regs.ext.us_privacy', bidderRequest.uspConsent);
      }

      if (digitrust) {
        __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepSetValue"](sovrnBidReq, 'user.ext.digitrust', {
          id: digitrust.id,
          keyv: digitrust.keyv
        });
      }

      var url = "https://ap.lijit.com/rtb/bid?" + "src=prebid_prebid_3.18.0";
      if (iv) url += "&iv=".concat(iv);
      return {
        method: 'POST',
        url: url,
        data: JSON.stringify(sovrnBidReq),
        options: {
          contentType: 'text/plain'
        }
      };
    } catch (e) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"]('Could not build bidrequest, error deatils:', e);
    }
  },

  /**
   * Format Sovrn responses as Prebid bid responses
   * @param {id, seatbid} sovrnResponse A successful response from Sovrn.
   * @return {Bid[]} An array of formatted bids.
  */
  interpretResponse: function interpretResponse(_ref) {
    var _ref$body = _ref.body,
        id = _ref$body.id,
        seatbid = _ref$body.seatbid;

    try {
      var sovrnBidResponses = [];

      if (id && seatbid && seatbid.length > 0 && seatbid[0].bid && seatbid[0].bid.length > 0) {
        seatbid[0].bid.map(function (sovrnBid) {
          sovrnBidResponses.push({
            requestId: sovrnBid.impid,
            cpm: parseFloat(sovrnBid.price),
            width: parseInt(sovrnBid.w),
            height: parseInt(sovrnBid.h),
            creativeId: sovrnBid.crid || sovrnBid.id,
            dealId: sovrnBid.dealid || null,
            currency: 'USD',
            netRevenue: true,
            mediaType: __WEBPACK_IMPORTED_MODULE_2__src_mediaTypes_js__["b" /* BANNER */],
            ad: decodeURIComponent("".concat(sovrnBid.adm, "<img src=\"").concat(sovrnBid.nurl, "\">")),
            ttl: 60
          });
        });
      }

      return sovrnBidResponses;
    } catch (e) {
      __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["logError"]('Could not intrepret bidresponse, error deatils:', e);
    }
  },
  getUserSyncs: function getUserSyncs(syncOptions, serverResponses, gdprConsent, uspConsent) {
    try {
      var tracks = [];

      if (serverResponses && serverResponses.length !== 0) {
        if (syncOptions.iframeEnabled) {
          var iidArr = serverResponses.filter(function (resp) {
            return __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](resp, 'body.ext.iid');
          }).map(function (resp) {
            return resp.body.ext.iid;
          });
          var params = [];

          if (gdprConsent && gdprConsent.gdprApplies && typeof gdprConsent.consentString === 'string') {
            params.push(['gdpr_consent', gdprConsent.consentString]);
          }

          if (uspConsent) {
            params.push(['us_privacy', uspConsent]);
          }

          if (iidArr[0]) {
            params.push(['informer', iidArr[0]]);
            tracks.push({
              type: 'iframe',
              url: 'https://ap.lijit.com/beacon?' + params.map(function (p) {
                return p.join('=');
              }).join('&')
            });
          }
        }

        if (syncOptions.pixelEnabled) {
          serverResponses.filter(function (resp) {
            return __WEBPACK_IMPORTED_MODULE_0__src_utils_js__["deepAccess"](resp, 'body.ext.sync.pixels');
          }).reduce(function (acc, resp) {
            return acc.concat(resp.body.ext.sync.pixels);
          }, []).map(function (pixel) {
            return pixel.url;
          }).forEach(function (url) {
            return tracks.push({
              type: 'image',
              url: url
            });
          });
        }
      }

      return tracks;
    } catch (e) {
      return [];
    }
  }
};
Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__["registerBidder"])(spec);

/***/ })

},[648]);

owpbjs.processQueue();
//# sourceMappingURL=prebid.js.map

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var util = __webpack_require__(1);
	var controller = __webpack_require__(10);
	var bidManager = __webpack_require__(6);
	var CONSTANTS = __webpack_require__(4);
	
	var metaInfo = util.getMetaInfo(window);
	window.PWT = window.PWT || {};
	window.PWT.bidMap = window.PWT.bidMap || {};
	window.PWT.bidIdMap = window.PWT.bidIdMap || {};
	window.PWT.isIframe = window.PWT.isIframe || metaInfo.isInIframe;
	window.PWT.protocol = window.PWT.protocol || metaInfo.protocol;
	window.PWT.secure = window.PWT.secure || metaInfo.secure;
	window.PWT.pageURL = window.PWT.pageURL || metaInfo.pageURL;
	window.PWT.refURL = window.PWT.refURL || metaInfo.refURL;
	window.PWT.isSafeFrame = window.PWT.isSafeFrame || false;
	window.PWT.safeFrameMessageListenerAdded = window.PWT.safeFrameMessageListenerAdded || false;
	// usingDifferentProfileVersion
	window.PWT.udpv = window.PWT.udpv || util.findQueryParamInURL(metaInfo.isIframe ? metaInfo.refURL : metaInfo.pageURL, "pwtv");
	
	util.findQueryParamInURL(metaInfo.isIframe ? metaInfo.refURL : metaInfo.pageURL, "pwtc") && util.enableDebugLog();
	util.findQueryParamInURL(metaInfo.isIframe ? metaInfo.refURL : metaInfo.pageURL, "pwtvc") && util.enableVisualDebugLog();
	
	window.PWT.displayCreative = function(theDocument, bidID){
		util.log("In displayCreative for: " + bidID);
		bidManager.displayCreative(theDocument, bidID);
	};
	
	window.PWT.displayPMPCreative = function(theDocument, values, priorityArray){
		util.log("In displayPMPCreative for: " + values);
		var bidID = util.getBididForPMP(values, priorityArray);
		bidID && bidManager.displayCreative(theDocument, bidID);
	};
	
	window.PWT.sfDisplayCreative = function(theDocument, bidID){
		util.log("In sfDisplayCreative for: " + bidID);
		this.isSafeFrame = true;
		window.parent.postMessage(
			JSON.stringify({
				pwt_type: "1",
				pwt_bidID: bidID,
				pwt_origin: CONSTANTS.COMMON.PROTOCOL+window.location.hostname
			}),
			"*"
		);
	};
	
	window.PWT.sfDisplayPMPCreative = function(theDocument, values, priorityArray){
		util.log("In sfDisplayPMPCreative for: " + values);
		this.isSafeFrame = true;
		window.parent.postMessage(
			JSON.stringify({
				pwt_type: "1",
				pwt_bidID: util.getBididForPMP(values, priorityArray),
				pwt_origin: CONSTANTS.COMMON.PROTOCOL+window.location.hostname
			}),
			"*"
		);
	};
	
	window.PWT.initNativeTrackers = function(theDocument,bidID){
		util.log("In startTrackers for: " + bidID);
		util.addEventListenerForClass(window,"click", CONSTANTS.COMMON.OW_CLICK_NATIVE,bidManager.loadTrackers);
		bidManager.executeTracker(bidID);
	};
	
	window.PWT.getUserIds = function(){
		return util.getUserIds();
	};
	
	window.OWT = {
		notifyCount: 0, // To maintain the id which should be return after externalBidder registered
		externalBidderStatuses: {}
	};
	
	window.OWT.registerExternalBidders = function(divIds) {
		window.OWT.notifyCount++;
	
		util.forEachOnArray(divIds, function (key, divId) {
			util.log("registerExternalBidders: " + divId);
			window.OWT.externalBidderStatuses[divId] = {
				id: window.OWT.notifyCount,
				status: false
			};
		});
	
		return window.OWT.notifyCount;
	};
	
	window.OWT.notifyExternalBiddingComplete = function(notifyId) {
		util.forEachOnObject(window.OWT.externalBidderStatuses, function (key, obj) {
			if(obj && (obj.id === notifyId)) {
				util.log("notify externalBidding complete: " + key);
				window.OWT.externalBidderStatuses[key] = {
					id: obj.id,
					status: true
				};
			}
		});
	};
	
	window.PWT.UpdateVastWithTracker = function(bid, vast){
		return util.UpdateVastWithTracker(bid, vast);
	};
	
	window.PWT.generateDFPURL= function(adUnit,cust_params){
		var dfpurl = "";
		if(!adUnit || !util.isObject(adUnit)) {
			util.logError("An AdUnit should be an Object", adUnit);
		}
		if(adUnit.bidData && adUnit.bidData.wb && adUnit.bidData.kvp){
			adUnit.bid = adUnit.bidData.wb;
			adUnit.bid["adserverTargeting"] = adUnit.bidData.kvp;
		}
		else{
			util.logWarning("No bid found for given adUnit");
			return;
		}
		var params = {
			adUnit: adUnit,
			params: {
				iu: adUnit.adUnitId,
				cust_params: cust_params,
				output: "vast"
			}
		};
		if(adUnit.bid){
			params["bid"] = adUnit.bid;
		}
		dfpurl = window.owpbjs.adServers.dfp.buildVideoUrl(params);
		return dfpurl;
	};
	
	window.PWT.getCustomParamsForDFPVideo = function(customParams, bid){
		return util.getCustomParamsForDFPVideo(customParams, bid);
	};
	
	controller.init(window);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	//todo
	//  pageURL refURL protocol related functions
	// forEachOnArray
	var CONFIG = __webpack_require__(2);
	var CONSTANTS = __webpack_require__(4);
	var BID = __webpack_require__(5);
	var bidManager = __webpack_require__(6);
	
	var debugLogIsEnabled = false;
	
	/* start-test-block */
	exports.debugLogIsEnabled = debugLogIsEnabled;
	/* end-test-block */
	var visualDebugLogIsEnabled = false;
	
	/* start-test-block */
	exports.visualDebugLogIsEnabled = visualDebugLogIsEnabled;
	/* end-test-block */
	var typeArray = "Array";
	var typeString = "String";
	var typeFunction = "Function";
	var typeNumber = "Number";
	var toString = Object.prototype.toString;
	var refThis = this;
	var mediaTypeConfigPerSlot = {};
	exports.mediaTypeConfig = mediaTypeConfigPerSlot;
	
	function isA(object, testForType) {
		return toString.call(object) === "[object " + testForType + "]";
	}
	
	/* start-test-block */
	exports.isA = isA;
	/* end-test-block */
	
	exports.isFunction = function (object) {
		return refThis.isA(object, typeFunction);
	};
	
	exports.isString = function (object) {
		return refThis.isA(object, typeString);
	};
	
	exports.isArray = function (object) {
		return refThis.isA(object, typeArray);
	};
	
	exports.isNumber = function(object) {
		return refThis.isA(object, typeNumber);
	};
	
	exports.isObject = function(object){
		return typeof object === "object" && object !== null;
	};
	
	exports.isOwnProperty = function(theObject, proertyName){
		/* istanbul ignore else */
		if(refThis.isObject(theObject) && theObject.hasOwnProperty){
			return theObject.hasOwnProperty(proertyName);
		}
		return false;
	};
	
	exports.isUndefined = function(object){
		return typeof object === "undefined";
	};
	
	exports.enableDebugLog = function(){
		refThis.debugLogIsEnabled = true;
	};
	
	exports.isDebugLogEnabled = function(){
		return refThis.debugLogIsEnabled;
	};
	
	exports.enableVisualDebugLog = function(){
		refThis.debugLogIsEnabled = true;
		refThis.visualDebugLogIsEnabled = true;
	};
	
	exports.isEmptyObject= function(object){
		return refThis.isObject(object) && Object.keys(object).length === 0;
	};
	
	//todo: move...
	var constDebugInConsolePrependWith = "[OpenWrap] : ";
	var constErrorInConsolePrependWith = "[OpenWrap] : [Error]";
	
	
	exports.log = function(data){
		if( refThis.debugLogIsEnabled && console && this.isFunction(console.log) ){ // eslint-disable-line no-console
			if(this.isString(data)){
				console.log( (new Date()).getTime()+ " : " + constDebugInConsolePrependWith + data ); // eslint-disable-line no-console
			}else{
				console.log(data); // eslint-disable-line no-console
			}
		}
	};
	
	exports.logError = function(data){
		if( refThis.debugLogIsEnabled && console && this.isFunction(console.log) ){ // eslint-disable-line no-console
			if(this.isString(data)){
				console.error( (new Date()).getTime()+ " : " + constDebugInConsolePrependWith + data ); // eslint-disable-line no-console
			}else{
				console.error(data); // eslint-disable-line no-console
			}
		}
	};
	
	exports.logWarning = function(data){
		if( refThis.debugLogIsEnabled && console && this.isFunction(console.log) ){ // eslint-disable-line no-console
			if(this.isString(data)){
				console.warn( (new Date()).getTime()+ " : " + constDebugInConsolePrependWith + data ); // eslint-disable-line no-console
			}else{
				console.warn(data); // eslint-disable-line no-console
			}
		}
	};
	
	exports.error = function(data){
		console.log( (new Date()).getTime()+ " : " + constErrorInConsolePrependWith, data ); // eslint-disable-line no-console
	};
	
	exports.getCurrentTimestampInMs = function(){
		var date = new window.Date();
		return date.getTime();
	};
	
	exports.getCurrentTimestamp = function(){
		var date = new Date();
		return Math.round( date.getTime()/1000 );
	};
	
	var utilGetIncrementalInteger = (function() {
		var count = 0;
		return function() {
			count++;
			return count;
		};
	})();
	
	/* start-test-block */
	exports.utilGetIncrementalInteger = utilGetIncrementalInteger;
	/* end-test-block */
	
	exports.getUniqueIdentifierStr = function() {
		return utilGetIncrementalInteger() + window.Math.random().toString(16).substr(2);
	};
	
	exports.copyKeyValueObject = function(copyTo, copyFrom){
		/* istanbul ignore else */
		if(refThis.isObject(copyTo) && refThis.isObject(copyFrom)){
			var utilRef = refThis;
			refThis.forEachOnObject(copyFrom, function(key, value){
				copyFrom[key] = utilRef.isArray(value) ? value : [value];
				if(utilRef.isOwnProperty(copyTo, key)){
					// copyTo[key].push.apply(copyTo[key], value);
					if (!refThis.isArray(copyTo[key])) {
						var temp = copyTo[key];
						copyTo[key] = [temp];
					}
					copyTo[key].push(value);
				}else{
					copyTo[key] = [value];
				}
			});
		}
	};
	
	exports.getIncrementalInteger = (function() {
		var count = 0;
		return function() {
			count++;
			return count;
		};
	})();
	
	exports.generateUUID = function(){
		var d = new window.Date().getTime(),
	      // todo: this.pageURL ???
			url = window.decodeURIComponent(this.pageURL).toLowerCase().replace(/[^a-z,A-Z,0-9]/gi, ""),
			urlLength = url.length
			;
	
	    //todo: uncomment it,  what abt performance
	    //if(win.performance && this.isFunction(win.performance.now)){
	    //    d += performance.now();
	    //}
	
		var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx-zzzzz".replace(/[xyz]/g, function(c) {
			var r = (d + Math.random()*16)%16 | 0;
			d = Math.floor(d/16);
			var op;
			switch(c){
			case "x":
				op = r;
				break;
			case "z":
				op = url[Math.floor(Math.random()*urlLength)];
				break;
			default:
				op = (r&0x3|0x8);
			}
	
			return op.toString(16);
		});
	
		return uuid;
	};
	
	var macroRegexFlag = "g";
	var constCommonMacroForWidthRegExp = new RegExp(CONSTANTS.MACROS.WIDTH, macroRegexFlag);
	var constCommonMacroForHeightRegExp = new RegExp(CONSTANTS.MACROS.HEIGHT, macroRegexFlag);
	var constCommonMacroForAdUnitIDRegExp = new RegExp(CONSTANTS.MACROS.AD_UNIT_ID, macroRegexFlag);
	var constCommonMacroForAdUnitIndexRegExp = new RegExp(CONSTANTS.MACROS.AD_UNIT_INDEX, macroRegexFlag);
	var constCommonMacroForIntegerRegExp = new RegExp(CONSTANTS.MACROS.INTEGER, macroRegexFlag);
	var constCommonMacroForDivRegExp = new RegExp(CONSTANTS.MACROS.DIV, macroRegexFlag);
	
	exports.generateSlotNamesFromPattern = function(activeSlot, pattern, shouldCheckMappingForVideo){
		var slotNames = [],
			slotName,
			slotNamesObj = {},
			sizeArray,
			sizeArrayLength,
			i
			;
	  	/* istanbul ignore else */
		if(refThis.isObject(activeSlot) && refThis.isFunction(activeSlot.getSizes)){
			sizeArray = activeSlot.getSizes();
			sizeArrayLength = sizeArray.length;
			/* istanbul ignore else */
			if( sizeArrayLength > 0){
				for(i = 0; i < sizeArrayLength; i++){
					/* istanbul ignore else */
					if((sizeArray[i].length == 2 && sizeArray[i][0] && sizeArray[i][1]) || (refThis.isFunction(sizeArray[i].getWidth) && refThis.isFunction(sizeArray[i].getHeight))){
						var adUnitId = refThis.isFunction(activeSlot.getAdUnitID) ? activeSlot.getAdUnitID() : activeSlot.getSlotId().getAdUnitPath();
						var divId = refThis.isFunction(activeSlot.getDivID) ? activeSlot.getDivID() : activeSlot.getSlotId().getDomId();
						var adUnitIndex = refThis.isFunction(activeSlot.getAdUnitIndex) ? activeSlot.getAdUnitIndex() : activeSlot.getSlotId().getId().split("_")[1];
						var width = sizeArray[i][0] || sizeArray[i].getWidth();
						var height = sizeArray[i][1] || sizeArray[i].getHeight();
						slotName = pattern;
						slotName = slotName.replace(constCommonMacroForAdUnitIDRegExp, adUnitId)
	                    .replace(constCommonMacroForAdUnitIndexRegExp, adUnitIndex)
	                    .replace(constCommonMacroForIntegerRegExp, refThis.getIncrementalInteger())
						.replace(constCommonMacroForDivRegExp, divId);
						// .replace(constCommonMacroForWidthRegExp, width)
						// .replace(constCommonMacroForHeightRegExp, height);
						if(shouldCheckMappingForVideo){
							var config = refThis.mediaTypeConfig[divId];
							if(config && config.video){
								slotName = slotName.replace(constCommonMacroForWidthRegExp, "0")
										.replace(constCommonMacroForHeightRegExp, "0");
							}
							else{
								slotName = slotName.replace(constCommonMacroForWidthRegExp, width)
										.replace(constCommonMacroForHeightRegExp, height);
							}
						}
						else{
							slotName = slotName.replace(constCommonMacroForWidthRegExp, width)
									.replace(constCommonMacroForHeightRegExp, height);
						}
						
	                    /* istanbul ignore else */
						if(! refThis.isOwnProperty(slotNamesObj, slotName)){
							slotNamesObj[slotName] = "";
							slotNames.push(slotName);
						}
					}
				}
			}
		}
		return slotNames;
	};
	
	//todo: is it required ?
	exports.checkMandatoryParams = function(object, keys, adapterID){
		var error = false,
			success = true
		;
		/* istanbul ignore else */
		if(!object || !refThis.isObject(object) || refThis.isArray(object)){
			refThis.logWarning(adapterID + "provided object is invalid.");
			return error;
		}
		/* istanbul ignore else */
		if(!refThis.isArray(keys)){
			refThis.logWarning(adapterID + "provided keys must be in an array.");
			return error;
		}
	
		var arrayLength = keys.length;
		/* istanbul ignore else */
		if(arrayLength == 0){
			return success;
		}
	
		// can not change following for loop to refThis.forEachOnArray
		for(var i=0; i<arrayLength; i++){
			/* istanbul ignore else */
			if(!refThis.isOwnProperty(object, keys[i])){
				refThis.logError(adapterID + ": "+keys[i]+", mandatory parameter not present.");
				return error;
			}
		}
	
		return success;
	};
	
	/**
	 * todo:
	 * 		if direct mapping is not found 
	 * 		then look for regex mapping
	 * 			separate function to handle regex mapping
	 * 			kgp: "" // should be filled with whatever value
	 * 			klm: {} // should be filled with records if required else leave it as an empty object {}
	 * 			kgp_rx: "" // regex pattern
	 * 			klm_rx: [
	 * 				{
	 * 					rx: "ABC123*",
	 * 					rx_config: {} // here goes adapyter config
	 * 				}, 
	 * 
	 * 				{
	 * 					rx: "*",
	 * 					rx_config: {}
	 * 				}
	 * 			]
	 */
	
	 /**
	  *  Algo for Regex and Normal Flow
	  * 1. Check for kgp key 
	  *   a). If KGP is present for partner then proceed with old flow and no change in that
	  *   b). If KGP is not present and kgp_rx is present it is regex flow and proceed with regex flow as below
	  * 2. Regex Flow
	  * 	a. Generate KGPV's with kgp as _AU_@_DIV_@_W_x_H_
	  * 	b. Regex Match each KGPV with KLM_rx 
	  * 	c. Get config for the partner 
	  *     d. Send the config to prebid and log the same kgpv in logger
	  * 
	  * Special Case for Pubmatic
	  *  1. In case of regex flow we will have hashed keys which will be sent to translator for matching
	  *  2. These hashed keys could be same for multiple slot on the page and hence need to check how to send it to prebid for 
	  *     identification in prebid resposne.
	  */
	
	exports.forEachGeneratedKey = function(adapterID, adUnits, adapterConfig, impressionID, slotConfigMandatoryParams, activeSlots, handlerFunction, addZeroBids){
		var activeSlotsLength = activeSlots.length,
			keyGenerationPattern = adapterConfig[CONSTANTS.CONFIG.KEY_GENERATION_PATTERN] || adapterConfig[CONSTANTS.CONFIG.REGEX_KEY_GENERATION_PATTERN] || "";
		/* istanbul ignore else */
		if(activeSlotsLength > 0 && keyGenerationPattern.length > 3){
			refThis.forEachOnArray(activeSlots, function(i, activeSlot){
				var generatedKeys = refThis.generateSlotNamesFromPattern( activeSlot, keyGenerationPattern, true);
				if(generatedKeys.length > 0){
					refThis.callHandlerFunctionForMapping(adapterID, adUnits, adapterConfig, impressionID, slotConfigMandatoryParams, generatedKeys, activeSlot, handlerFunction, addZeroBids, keyGenerationPattern);
				} 		
			});
		}
	};
	
	// private
	function callHandlerFunctionForMapping(adapterID, adUnits, adapterConfig, impressionID, slotConfigMandatoryParams, generatedKeys, activeSlot, handlerFunction, addZeroBids,keyGenerationPattern){
		var keyLookupMap = adapterConfig[CONSTANTS.CONFIG.KEY_LOOKUP_MAP] || adapterConfig[CONSTANTS.CONFIG.REGEX_KEY_LOOKUP_MAP] || null,
			kgpConsistsWidthAndHeight = keyGenerationPattern.indexOf(CONSTANTS.MACROS.WIDTH) >= 0 && keyGenerationPattern.indexOf(CONSTANTS.MACROS.HEIGHT) >= 0;
		var isRegexMapping = adapterConfig[CONSTANTS.CONFIG.REGEX_KEY_LOOKUP_MAP] ? true : false;
		var regexPattern = undefined;
		refThis.forEachOnArray(generatedKeys, function(j, generatedKey){
			var keyConfig = null,
				callHandlerFunction = false,
				sizeArray = activeSlot.getSizes()			
				;
	
			if(keyLookupMap == null){
				callHandlerFunction = true;
			}else{
				if(isRegexMapping){ 
					refThis.debugLogIsEnabled && refThis.log(console.time("Time for regexMatching for key " + generatedKey));
					var config = refThis.getConfigFromRegex(keyLookupMap,generatedKey);
					refThis.debugLogIsEnabled && refThis.log(console.timeEnd("Time for regexMatching for key " + generatedKey));
	
					if(config){
						keyConfig = config.config;
						regexPattern = config.regexPattern;
					}
				}
				else{
					keyConfig = keyLookupMap[generatedKey];
				}
				if(!keyConfig){
					refThis.log(adapterID+": "+generatedKey+CONSTANTS.MESSAGES.M8);
				}else if(!refThis.checkMandatoryParams(keyConfig, slotConfigMandatoryParams, adapterID)){
					refThis.log(adapterID+": "+generatedKey+CONSTANTS.MESSAGES.M9);
				}else{
					callHandlerFunction = true;
				}
			}
	
			/* istanbul ignore else */
			if(callHandlerFunction){
	
				/* istanbul ignore else */
				if(addZeroBids == true){
					var bid = BID.createBid(adapterID, generatedKey);
					bid.setDefaultBidStatus(1).setReceivedTime(refThis.getCurrentTimestampInMs());
					bidManager.setBidFromBidder(activeSlot.getDivID(), bid);
					bid.setRegexPattern(regexPattern);
				}
	
				handlerFunction(
					adapterID,
					adUnits,
					adapterConfig,
					impressionID,
					generatedKey,
					kgpConsistsWidthAndHeight,
					activeSlot,
					refThis.getPartnerParams(keyConfig),
					sizeArray[j][0],
					sizeArray[j][1],
					regexPattern
				);
			}
		});
	}
	/* start-test-block */
	exports.callHandlerFunctionForMapping = callHandlerFunctionForMapping;
	/* end-test-block */
	
	exports.resizeWindow = function(theDocument, width, height, divId){
		/* istanbul ignore else */
		if(height && width){
			try{
				var defaultViewFrame = theDocument.defaultView.frameElement;
				var elementArray=[];
				if(divId){
					var adSlot = document.getElementById(divId);
					var adSlot_Div = adSlot.querySelector("div");
					elementArray.push(adSlot_Div);
					elementArray.push(adSlot_Div.querySelector("iframe"));
					defaultViewFrame = adSlot.querySelector("iframe");
				}
				elementArray.push(defaultViewFrame);
				elementArray.forEach(function(ele){
					if(ele){
						ele.width ="" +  width;
						ele.height ="" + height;
						ele.style.width = "" + width + "px";
						ele.style.height = "" + height + "px";
					}
				});
			}catch(e){
				refThis.logError("Creative-Resize; Error in resizing creative");
			} // eslint-disable-line no-empty
		}
	};
	
	exports.writeIframe = function(theDocument, src, width, height, style){
		theDocument.write("<iframe"
	    + " frameborder=\"0\" allowtransparency=\"true\" marginheight=\"0\" marginwidth=\"0\" scrolling=\"no\" width=\""
	    + width  + "\" hspace=\"0\" vspace=\"0\" height=\""
	    + height + "\""
	    + (style ?  " style=\""+ style+"\"" : "" )
	    + " src=\"" + src + "\""
	    + "></ifr" + "ame>");
	};
	
	exports.displayCreative = function(theDocument, bid){
		refThis.resizeWindow(theDocument, bid.width, bid.height);
		if(bid.adHtml){
			if(bid.getAdapterID().toLowerCase() == "appier"){
				bid.adHtml = refThis.replaceAuctionPrice(bid.adHtml, bid.getGrossEcpm());
			}
			theDocument.write(bid.adHtml);
		}else if(bid.adUrl){
			if(bid.getAdapterID().toLowerCase() == "appier"){
				bid.adUrl = refThis.replaceAuctionPrice(bid.adUrl, bid.getGrossEcpm());
			}
			refThis.writeIframe(theDocument, bid.adUrl, bid.width, bid.height, "");
		}else{
			refThis.logError("creative details are not found");
			refThis.logError(bid);
		}
	};
	
	exports.getScreenWidth = function(win){
		var screenWidth = -1;
		win.innerHeight ? (screenWidth = win.innerWidth) : win.document && win.document.documentElement && win.document.documentElement.clientWidth ? (screenWidth = win.document.documentElement.clientWidth) : win.document.body && (screenWidth = win.document.body.clientWidth);
		return screenWidth;
	};
	
	exports.getScreenHeight = function(win){
		var screenHeight = -1;
		win.innerHeight ? (screenHeight = win.innerHeight) : win.document && win.document.documentElement && win.document.documentElement.clientHeight ? (screenHeight = win.document.documentElement.clientHeight) : win.document.body && (screenHeight = win.document.body.clientHeight);
		return screenHeight;
	};
	
	// todo: how about accepting array of arguments to be passed to callback function after key, value, arrayOfArguments
	exports.forEachOnObject = function(theObject, callback){
		/* istanbul ignore else */
		if(!refThis.isObject(theObject)){
			return;
		}
	
		/* istanbul ignore else */
		if(!refThis.isFunction(callback)){
			return;
		}
	
		for(var key in theObject){
			/* istanbul ignore else */
			if(refThis.isOwnProperty(theObject, key)){
				callback(key, theObject[key]);
			}
		}
	};
	
	exports.forEachOnArray = function(theArray, callback){
		/* istanbul ignore else */
		if(!refThis.isArray(theArray)){
			return;
		}
	
		/* istanbul ignore else */
		if(!refThis.isFunction(callback)){
			return;
		}
	
		for(var index=0, arrayLength= theArray.length; index<arrayLength; index++){
			callback(index, theArray[index]);
		}
	};
	
	exports.trim = function(s){
		if(!refThis.isString(s)){
			return s;
		}else{
			return s.replace(/^\s+/g,"").replace(/\s+$/g,"");
		}
	};
	
	exports.getTopFrameOfSameDomain = function(cWin) {
		try {
			/* istanbul ignore else */
			if (cWin.parent.document != cWin.document){
			  return refThis.getTopFrameOfSameDomain(cWin.parent);
			}
		} catch(e) {}
		return cWin;
	};
	
	exports.metaInfo = {};
	
	exports.getMetaInfo = function(cWin){
		var  obj = {}
			, MAX_PAGE_URL_LEN = 512
			, frame
			;
	
		obj.pageURL = "";
		obj.refURL = "";
		obj.protocol = "https://";
		obj.secure = 1;
		obj.isInIframe = refThis.isIframe(cWin);
	
		try{
			frame = refThis.getTopFrameOfSameDomain(cWin);
			obj.refURL = ( frame.refurl || frame.document.referrer || '' ).substr( 0, MAX_PAGE_URL_LEN );
			obj.pageURL = ( frame !== window.top && frame.document.referrer != ""  ? frame.document.referrer : frame.location.href).substr(0, MAX_PAGE_URL_LEN );
	
			obj.protocol = (function(frame){
				/* istanbul ignore else */
				if(frame.location.protocol ===  "http:"){
					obj.secure = 0;
					return "http://";
				}
				obj.secure = 1;
				return "https://";
			})(frame);
	
		}catch(e){}
	
		obj.pageDomain = refThis.getDomainFromURL(obj.pageURL);
	
		refThis.metaInfo = obj;
	
		return obj;
	};
	
	exports.isIframe = function(theWindow){
		try{
			return theWindow.self !== theWindow.top;
		}catch(e){
			return false;
		}
	};
	
	//todo: this function is not used
	exports.findInString = function(theString, find){
		return theString.indexOf(find) >= 0;
	};
	
	exports.findQueryParamInURL = function(url, name){
		return refThis.isOwnProperty(refThis.parseQueryParams(url), name);
	};
	
	exports.parseQueryParams = function(url){
		var parser = refThis.createDocElement(window, 'a');
		parser.href = url;
		var params = {};
	
		/* istanbul ignore else */
		if(parser.search){
			var queryString = parser.search.replace('?', '');
			queryString = queryString.split('&');
			refThis.forEachOnArray(queryString, function(index, keyValue){
				var keyValue = keyValue.split('=');
				var key = keyValue[0] || '';
				var value = keyValue [1] || '';
				params[key] = value;
			});
		}
	
		return params;
	};
	
	exports.createDocElement = function(win, elementName) {
		return win.document.createElement(elementName);
	};
	
	exports.addHookOnFunction = function(theObject, useProto, functionName, newFunction){
		var callMethodOn = theObject;
		theObject = useProto ? theObject.__proto__ : theObject;
		if(refThis.isObject(theObject) && refThis.isFunction(theObject[functionName])){
			var originalFunction = theObject[functionName];
			theObject[functionName] = newFunction(callMethodOn, originalFunction);
		}else{
			refThis.logWarning("in assignNewDefination: oldReference is not a function");
		}
	};
	
	exports.getBididForPMP = function(values, priorityArray){
		values = values.split(',');
	
		var valuesLength = values.length,
			priorityArrayLength = priorityArray.length,
			selectedPMPDeal = '',
			bidID = ''
			;
	
		/* istanbul ignore else */
		if(valuesLength == 0){
			this.log('Error: Unable to find bidID as values array is empty.');
			return;
		}
	
		for(var i = 0; i < priorityArrayLength; i++){
	
			for(var j = 0; j < valuesLength; j++){
				if(values[j].indexOf(priorityArray[i]) >= 0){
					selectedPMPDeal = values[j];
					break;
				}
			}
	
			/* istanbul ignore else */
			if(selectedPMPDeal != ''){
				break;
			}
		}
	
		if(selectedPMPDeal == ''){
			selectedPMPDeal = values[0];
			this.log('No PMP-Deal was found matching PriorityArray, So Selecting first PMP-Deal: '+ selectedPMPDeal);
		}else{
			this.log('Selecting PMP-Deal: '+ selectedPMPDeal);
		}
	
		var temp = selectedPMPDeal.split(CONSTANTS.COMMON.DEAL_KEY_VALUE_SEPARATOR);
		/* istanbul ignore else */
		if(temp.length == 3){
			bidID = temp[2];
		}
	
		/* istanbul ignore else */
		if(!bidID){
			this.log('Error: bidID not found in PMP-Deal: '+ selectedPMPDeal);
			return;
		}
	
		return bidID;
	};
	
	exports.createInvisibleIframe = function() {
		var f = refThis.createDocElement(window, 'iframe');
		f.id = refThis.getUniqueIdentifierStr();
		f.height = 0;
		f.width = 0;
		f.border = '0px';
		f.hspace = '0';
		f.vspace = '0';
		f.marginWidth = '0';
		f.marginHeight = '0';
		f.style.border = '0';
		f.scrolling = 'no';
		f.frameBorder = '0';
		f.src = 'about:self';//todo: test by setting empty src on safari
		f.style = 'display:none';
		return f;
	}
	
	exports.addMessageEventListener = function(theWindow, eventHandler){
		/* istanbul ignore else */
		if(typeof eventHandler !== "function"){
			refThis.log("EventHandler should be a function");
			return false;
		}
	
		if(theWindow.addEventListener){
			theWindow.addEventListener("message", eventHandler, false);
		}else{
			theWindow.attachEvent("onmessage", eventHandler);
		}
		return true;
	};
	
	exports.safeFrameCommunicationProtocol = function(msg){
		try{
			msgData = window.JSON.parse(msg.data);
			/* istanbul ignore else */
			if(!msgData.pwt_type){
				return;
			}
	
			switch(window.parseInt(msgData.pwt_type)){
	
			case 1:
					/* istanbul ignore else */
				if(window.PWT.isSafeFrame){
						return;
					}
	
				var bidDetails = bidManager.getBidById(msgData.pwt_bidID);
					/* istanbul ignore else */
				if(bidDetails){
						var theBid = bidDetails.bid,
							adapterID = theBid.getAdapterID(),
							divID = bidDetails.slotid,
							newMsgData = {
								pwt_type: 2,
								pwt_bid: theBid
							}
							;
						refThis.vLogInfo(divID, {type: 'disp', adapter: adapterID});
						bidManager.executeMonetizationPixel(divID, theBid);
						refThis.resizeWindow(window.document, theBid.width, theBid.height, divID);
						msg.source.postMessage(window.JSON.stringify(newMsgData), msgData.pwt_origin);
					}
				break;
	
			case 2:
					/* istanbul ignore else */
				if(!window.PWT.isSafeFrame){
						return;
					}
	
					/* istanbul ignore else */
				if(msgData.pwt_bid){
						var theBid = msgData.pwt_bid;
						if(theBid.adHtml){
							try{
								var iframe = refThis.createInvisibleIframe(window.document);
								/* istanbul ignore else */
								if(!iframe){
									throw {message: 'Failed to create invisible frame.', name:""};
								}
	
								iframe.setAttribute('width', theBid.width);
	        					iframe.setAttribute('height', theBid.height);
	        					iframe.style = '';
	
								window.document.body.appendChild(iframe);
	
								/* istanbul ignore else */
								if(!iframe.contentWindow){
									throw {message: 'Unable to access frame window.', name:""};
								}
	
								var iframeDoc = iframe.contentWindow.document;
								/* istanbul ignore else */
								if(!iframeDoc){
									throw {message: 'Unable to access frame window document.', name:""};
								}
	
								var content = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><scr' + 'ipt>inDapIF=true;</scr' + 'ipt></head>';
								content += '<body>';
								content += "<script>var $sf = window.parent.$sf;<\/script>";
								content += "<script>setInterval(function(){try{var fr = window.document.defaultView.frameElement;fr.width = window.parent.document.defaultView.innerWidth;fr.height = window.parent.document.defaultView.innerHeight;}catch(e){}}, 200);</script>";
								content += theBid.adHtml;
								content += '</body></html>';
	
								iframeDoc.write(content);
								iframeDoc.close();
	
							}catch(e){
								refThis.logError('Error in rendering creative in safe frame.');
								refThis.log(e);
								refThis.log('Rendering synchronously.');
								refThis.displayCreative(window.document, msgData.pwt_bid);
							}
	
						}else if(theBid.adUrl){
							refThis.writeIframe(window.document, theBid.adUrl, theBid.width, theBid.height, "");
						}else{
							refThis.logWarning("creative details are not found");
							refThis.log(theBid);
						}
					}
				break;
			case 3:
				var bidDetails = bidManager.getBidById(msgData.pwt_bidID);
					/* istanbul ignore else */
				if(bidDetails){
						var theBid = bidDetails.bid,
							adapterID = theBid.getAdapterID(),
							divID = bidDetails.slotid;
						refThis.vLogInfo(divID, {type: 'disp', adapter: adapterID});
						if(msgData.pwt_action && msgData.pwt_action == "imptrackers"){
							bidManager.executeMonetizationPixel(divID, theBid);
						}
						bidManager.fireTracker(theBid,msgData.pwt_action);							
					}
				break;
			}
		}catch(e){}
	};
	
	exports.addMessageEventListenerForSafeFrame = function(theWindow){
		refThis.addMessageEventListener(theWindow, refThis.safeFrameCommunicationProtocol);
	};
	
	//todo: this function is not in use
	exports.getElementLocation = function( el ) {
		var rect,
			x = 0,
			y = 0
			;
	
		if(refThis.isFunction(el.getBoundingClientRect)) {
			rect = el.getBoundingClientRect();
			x 	 = Math.floor(rect.left);
			y 	 = Math.floor(rect.top);
		} else {
			while(el) {
				x += el.offsetLeft;
				y += el.offsetTop;
				el = el.offsetParent;
			}
		}
		return { x: x, y: y	};
	}
	
	exports.createVLogInfoPanel = function(divID, dimensionArray){
		var element,
			infoPanelElement,
			infoPanelElementID,
			doc = window.document
			;
	
		/* istanbul ignore else */
		if(refThis.visualDebugLogIsEnabled){
			element = doc.getElementById(divID);
			/* istanbul ignore else */
			if(element && dimensionArray.length && dimensionArray[0][0] && dimensionArray[0][1]){
				infoPanelElementID = divID + '-pwtc-info';
				/* istanbul ignore else */
				if(!refThis.isUndefined(doc.getElementById(infoPanelElementID))){
					var pos = refThis.getElementLocation(element);
					infoPanelElement = doc.createElement('div');
					infoPanelElement.id = infoPanelElementID;
					infoPanelElement.style = 'position: absolute; /*top: '+pos.y+'px;*/ left: '+pos.x+'px; width: '+dimensionArray[0][0]+'px; height: '+dimensionArray[0][1]+'px; border: 1px solid rgb(255, 204, 52); padding-left: 11px; background: rgb(247, 248, 224) none repeat scroll 0% 0%; overflow: auto; z-index: 9999997; visibility: hidden;opacity:0.9;font-size:13px;font-family:monospace;';
	
					var closeImage = doc.createElement('img');
					closeImage.src = refThis.metaInfo.protocol+"ads.pubmatic.com/AdServer/js/pwt/close.png";
					closeImage.style = 'cursor:pointer; position: absolute; top: 2px; left: '+(pos.x+dimensionArray[0][0]-16-15)+'px; z-index: 9999998;';
					closeImage.title = 'close';
					closeImage.onclick = function(){
						infoPanelElement.style.display = "none";
					};
					infoPanelElement.appendChild(closeImage);
					infoPanelElement.appendChild(doc.createElement('br'));
	
					var text = 'Slot: '+divID+' | ';
					for(var i=0; i<dimensionArray.length; i++){
						text += (i != 0 ? ', ' : '') + dimensionArray[i][0] + 'x' + dimensionArray[i][1];
					}
					infoPanelElement.appendChild(doc.createTextNode(text));
					infoPanelElement.appendChild(doc.createElement('br'));
					element.parentNode.insertBefore(infoPanelElement, element);
				}
			}
		}
	};
	
	exports.realignVLogInfoPanel = function(divID){
		var element,
			infoPanelElement,
			infoPanelElementID,
			doc = window.document
			;
	
		/* istanbul ignore else */
		if(refThis.visualDebugLogIsEnabled){
			element = doc.getElementById(divID);
			/* istanbul ignore else */
			if(element){
				infoPanelElementID = divID + '-pwtc-info';
				infoPanelElement = doc.getElementById(infoPanelElementID);
				/* istanbul ignore else */
				if(infoPanelElement){
					var pos = refThis.getElementLocation(element);
					infoPanelElement.style.visibility = 'visible';
					infoPanelElement.style.left = pos.x + 'px';
					infoPanelElement.style.height = element.clientHeight + 'px';
				}
			}
		}
	};
	
	exports.vLogInfo = function(divID, infoObject){
		var infoPanelElement,
			message,
			doc = window.document
			;
		/* istanbul ignore else */
		if(refThis.visualDebugLogIsEnabled){
			var infoPanelElementID = divID + "-pwtc-info";
			infoPanelElement = doc.getElementById(infoPanelElementID);
			/* istanbul ignore else */
			if( infoPanelElement ){
				switch(infoObject.type){
				case "bid":
					var latency = infoObject.latency;
					var bidDetails = infoObject.bidDetails;
					var currencyMsg = "";
						/* istanbul ignore else */
					if(latency < 0){
							latency = 0;
						}
					if (infoObject.hasOwnProperty("adServerCurrency") && infoObject["adServerCurrency"] !== undefined) {
							if (infoObject.adServerCurrency == 0) {
								currencyMsg = 'USD';
							} else {
								currencyMsg = infoObject.adServerCurrency;
							}
						} else {
							currencyMsg = 'USD';
						}
					message = "Bid: " + infoObject.bidder + (infoObject.s2s ? "(s2s)" : "") + ": " + bidDetails.getNetEcpm() + "(" + bidDetails.getGrossEcpm() + ")" + currencyMsg + " :" + latency + "ms";
						/* istanbul ignore else */
					if(bidDetails.getPostTimeoutStatus()){
							message += ": POST-TIMEOUT";
						}
					break;
	
				case "win-bid":
					var bidDetails = infoObject.bidDetails;
					var currencyMsg = "";
					if (infoObject.hasOwnProperty("adServerCurrency") && infoObject["adServerCurrency"] !== undefined) {
							if (infoObject.adServerCurrency == 0) {
								currencyMsg = 'USD';
							} else {
								currencyMsg = infoObject.adServerCurrency;
							}
						} else {
							currencyMsg = 'USD';
						}
					message = "Winning Bid: " + bidDetails.getAdapterID() + ": " + bidDetails.getNetEcpm() + currencyMsg;
					break;
	
				case "win-bid-fail":
					message = "There are no bids from PWT";
					break;
	
				case "hr":
					message = "----------------------";
					break;
	
				case "disp":
					message = "Displaying creative from "+ infoObject.adapter;
					break;
				}
				infoPanelElement.appendChild(doc.createTextNode(message));
				infoPanelElement.appendChild(doc.createElement("br"));
			}
		}
	};
	
	exports.getExternalBidderStatus = function(divIds) {
		var status = true;
		refThis.forEachOnArray(divIds, function (key, divId) {
			status =  window.OWT.externalBidderStatuses[divId]
								? status && window.OWT.externalBidderStatuses[divId].status
								: status;
		});
		return status;
	};
	
	exports.resetExternalBidderStatus = function(divIds) {
		refThis.forEachOnArray(divIds, function (key, divId) {
			refThis.log("resetExternalBidderStatus: " + divId);
			window.OWT.externalBidderStatuses[divId] = undefined;
		});
	};
	
	exports.ajaxRequest = function(url, callback, data, options) {
		try {
	
			options = options || {};
	
			var x,
				XHR_DONE = 4,				
				ajaxSupport = true,
				method = options.method || (data ? "POST" : "GET")
				;
	
			if(!window.XMLHttpRequest){
				ajaxSupport = false;
			}else{
				x = new window.XMLHttpRequest();
				if(refThis.isUndefined(x.responseType)){
					ajaxSupport = false;
				}
			}
	
			if(!ajaxSupport){
				refThis.log("Ajax is not supported");
				return;
			}
	
			x.onreadystatechange = function (){
				if(x.readyState === XHR_DONE && callback){
					callback(x.responseText, x);
				}
			};
	
			x.open(method, url);
			
			if(options.withCredentials){
				x.withCredentials = true;
			}
	
			if(options.preflight){
				x.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			}
	
			x.setRequestHeader("Content-Type", options.contentType || "text/plain");		
			x.send(method === "POST" && data);
	
		}catch(error){
			refThis.log("Failed in Ajax");
			refThis.log(error);
		}
	};
	
	// Returns mediaTypes for adUnits which are sent to prebid
	exports.getMediaTypeObject = function(sizes, currentSlot){
		var mediaTypeObject = {};
		var slotConfig = CONFIG.getSlotConfiguration();
		if(slotConfig){
			if((slotConfig.configPattern && slotConfig.configPattern.trim() != '') || (slotConfig["configPattern"] = "_AU_")){
				var kgp = slotConfig.configPattern;
				var isVideo = true;
				var isNative = true;
				var isBanner = true;
				var config = undefined;
				var divId = refThis.isFunction(currentSlot.getDivID) ? currentSlot.getDivID() : currentSlot.getSlotId().getDomId();
	
				// TODO: Have to write logic if required in near future to support multiple kgpvs, right now 
				// as we are only supporting div and ad unit, taking the first slot name.
				// Implemented as per code review and discussion. 
	
				var kgpv = refThis.generateSlotNamesFromPattern(currentSlot, kgp, false)[0];
				// Global Default Enable is false then disable each 
				if(refThis.isOwnProperty(slotConfig['config'] ,CONSTANTS.COMMON.DEFAULT)){
					if(slotConfig['config'][CONSTANTS.COMMON.DEFAULT].banner && refThis.isOwnProperty(slotConfig['config'][CONSTANTS.COMMON.DEFAULT].banner, 'enabled') && !slotConfig['config'][CONSTANTS.COMMON.DEFAULT].banner.enabled){
						isBanner =false;
					}
					if(slotConfig['config'][CONSTANTS.COMMON.DEFAULT].native && refThis.isOwnProperty(slotConfig['config'][CONSTANTS.COMMON.DEFAULT].native, 'enabled') && !slotConfig['config'][CONSTANTS.COMMON.DEFAULT].native.enabled){
						isNative =false;
					}
					if(slotConfig['config'][CONSTANTS.COMMON.DEFAULT].video && refThis.isOwnProperty(slotConfig['config'][CONSTANTS.COMMON.DEFAULT].video, 'enabled') &&  !slotConfig['config'][CONSTANTS.COMMON.DEFAULT].video.enabled){
						isVideo =false;
					}
					config = slotConfig["config"][CONSTANTS.COMMON.DEFAULT];
				}
				if(refThis.isOwnProperty(slotConfig['config'], kgpv)){
					config = slotConfig["config"][kgpv];
					refThis.log("Config" + JSON.stringify(config)  +" found for adSlot: " +  JSON.stringify(currentSlot));
				}
				else{
					refThis.log("Considering Default Config for " +  JSON.stringify(currentSlot));
				}
				if(config){
					if(isNative && config.native && (!refThis.isOwnProperty(config.native, 'enabled') || config.native.enabled)){
						if(config.native["config"]){
							mediaTypeObject["native"] = config.native["config"];
						}
						else{
							refThis.logWarning("Native Config will not be considered as no config has been provided for slot" + JSON.stringify(currentSlot) + " or there is no configuration defined in default.");
						}
					}
					if(isVideo && config.video && (!refThis.isOwnProperty(config.video, 'enabled') || config.video.enabled)){
						if(CONFIG.getAdServer() != CONSTANTS.AD_SERVER.DFP){
							if(config.video["config"]){
								mediaTypeObject["video"] = config.video["config"];
							}
							else{
								refThis.logWarning("Video Config will not be considered as no config has been provided for slot" + JSON.stringify(currentSlot) + " or there is no configuration defined in default.");
							}
						}
						else{
							refThis.logWarning("Video Config will not be considered with DFP selected as AdServer.");
						}  
					}
					if(!isBanner ||  (config.banner && (refThis.isOwnProperty(config.banner, 'enabled') && !config.banner.enabled))){
						refThis.mediaTypeConfig[divId] = mediaTypeObject;        
						return mediaTypeObject;
					}
				}
				else{
					refThis.log("Config not found for adSlot: " +  JSON.stringify(currentSlot));
				}
			} else{
				refThis.logWarning("Slot Type not found in config. Please provide slotType in configuration");
			}
		}
		mediaTypeObject["banner"] = {
			sizes: sizes
		};
		refThis.mediaTypeConfig[divId] = mediaTypeObject;
		return mediaTypeObject;
	};
	
	exports.addEventListenerForClass = function(theWindow, theEvent, theClass, eventHandler){
	
		if(typeof eventHandler !== "function"){
			refThis.log("EventHandler should be a function");
			return false;
		}
		var elems = refThis.findElementsByClass(theWindow, theClass);
		if(!theWindow.addEventListener){
			theEvent = "on"+theEvent;
		}
		for (var i = 0; i < elems.length; i++) {
			elems[i].addEventListener(theEvent, eventHandler, true);
		}
		return true;
	};
	 
	exports.findElementsByClass = function(theWindow, theClass){
		return theWindow.document.getElementsByClassName(theClass) || [];
	};
	
	exports.getBidFromEvent = function (theEvent) {
		return (theEvent && theEvent.target && theEvent.target.attributes &&  theEvent.target.attributes[CONSTANTS.COMMON.BID_ID] && theEvent.target.attributes[CONSTANTS.COMMON.BID_ID].value) || "";
	};
	
	exports.getAdFormatFromBidAd = function(ad){
		var format = undefined;
		if(ad && refThis.isString(ad)){
			//TODO: Uncomment below code once video has been implemented 
			try{
				var videoRegex = new RegExp(/VAST\s+version/); 
				if(videoRegex.test(ad)){
					format = CONSTANTS.FORMAT_VALUES.VIDEO;
				}
				else{
					var adStr = JSON.parse(ad.replace(/\\/g, ""));
					if (adStr && adStr.native) {
						format = CONSTANTS.FORMAT_VALUES.NATIVE;
					}
				}
			}
			catch(ex){
				format = CONSTANTS.FORMAT_VALUES.BANNER;
			}
			// }
		}
		return format;
	};
	
	// This common function can be used add hooks for publishers to make changes in flows
	exports.handleHook = function(hookName, arrayOfDataToPass) {
		// Adding a hook for publishers to modify the data we have
		if(refThis.isFunction(window.PWT[hookName])){
			refThis.log('For Hook-name: '+hookName+', calling window.PWT.'+hookName+'function.' );
			window.PWT[hookName].apply(window.PWT, arrayOfDataToPass);
		} 
		// else {
		// 	refThis.log('Hook-name: '+hookName+', window.PWT.'+hookName+' is not a function.' );
		// }
	};
	
	exports.getCurrencyToDisplay = function(){
		var defaultCurrency = CONFIG.getAdServerCurrency();
		if(defaultCurrency == 0){
			defaultCurrency = 'USD';
		}
		if(CONFIG.getAdServerCurrency()){
			if(window[CONSTANTS.COMMON.PREBID_NAMESPACE] && refThis.isFunction(window[CONSTANTS.COMMON.PREBID_NAMESPACE].getConfig)){
				var pbConf = window[CONSTANTS.COMMON.PREBID_NAMESPACE].getConfig();
				if(pbConf && pbConf.currency && pbConf.currency.adServerCurrency){
					return pbConf.currency.adServerCurrency;
				}
			}
		}
		return defaultCurrency;
	};
	
	exports.getConfigFromRegex = function(klmsForPartner, generatedKey){
		// This function will return the config for the partner for specific slot.
		// KGP would always be AU@DIV@WXH
		// KLM would be an array of regex Config and regex pattern pairs where key would be regex pattern to match 
		// and value would be the config for that slot to be considered.
		/* Algo to match regex pattern 
			Start regex parttern matching  pattern -> ["ADUNIT", "DIV", "SIZE"]
			Then match the slot adUnit with pattern 
			if successful the match the div then size
			if all are true then return the config else match the next avaiable pattern
			if none of the pattern match then return the error config not found */
		var rxConfig = null;
		var keys = generatedKey.split("@");
		for (var i = 0; i < klmsForPartner.length; i++) {
			var klmv = klmsForPartner[i];
			var rxPattern = klmv.rx;
			if(keys.length == 3){ // Only execute if generated key length is 3 .
				try{
					if(keys[0].match(new RegExp(rxPattern.AU)) && keys[1].match(new RegExp(rxPattern.DIV)) && keys[2].match(new RegExp(rxPattern.SIZE))){
						rxConfig = {
							config : klmv.rx_config,
							regexPattern : rxPattern.AU + "@" + rxPattern.DIV + "@" + rxPattern.SIZE
						};
						break;
					}
				}
				catch(ex){
					refThis.logError(CONSTANTS.MESSAGES.M27 + JSON.stringify(rxPattern));
				}
			} else {
				refThis.logWarning(CONSTANTS.MESSAGES.M28 + generatedKey);
			}
		}
		return rxConfig;
	};
	
	exports.getUserIdConfiguration = function(){
		var userIdConfs = [];
		refThis.forEachOnObject(CONFIG.getIdentityPartners(),function(parterId, partnerValues){
			userIdConfs.push(refThis.getUserIdParams(partnerValues));
		});
		refThis.log(CONSTANTS.MESSAGES.IDENTITY.M4+ JSON.stringify(userIdConfs));
		return userIdConfs;
	};
	
	exports.clearPreviousTargeting = function(){
		var targetingKeys = window.googletag.pubads().getTargetingKeys();
		if(targetingKeys.indexOf(CONSTANTS.WRAPPER_TARGETING_KEYS.USER_IDS)>-1){
			window.googletag.pubads().clearTargeting(CONSTANTS.WRAPPER_TARGETING_KEYS.USER_IDS);
		}
	};
	
	exports.setUserIdTargeting = function(){
		refThis.clearPreviousTargeting();
		if(window[CONSTANTS.COMMON.PREBID_NAMESPACE] && refThis.isFunction(window[CONSTANTS.COMMON.PREBID_NAMESPACE].getUserIds)){
			var userIds = refThis.getUserIds();
			if(!refThis.isEmptyObject(userIds)){
				refThis.setUserIdToGPT(userIds);
			}
		}else {
			refThis.logWarning(CONSTANTS.MESSAGES.IDENTITY.M1);
			return;
		}
	};
	
	exports.setUserIdToGPT = function(userIds){
		refThis.log(CONSTANTS.MESSAGES.IDENTITY.M2, userIds);
		window.googletag.pubads().setTargeting(CONSTANTS.WRAPPER_TARGETING_KEYS.USER_IDS,JSON.stringify(userIds));
	};
	
	exports.getUserIds = function(){
		return window[CONSTANTS.COMMON.PREBID_NAMESPACE].getUserIds();
	};
	
	exports.getNestedObjectFromArray = function(sourceObject,sourceArray, valueOfLastNode){
		var convertedObject = sourceObject;
		var referenceForNesting = convertedObject;
		for(var i=0;i<sourceArray.length-1;i++){
			if(!referenceForNesting[sourceArray[i]]){
				referenceForNesting[sourceArray[i]] = {};
			}
			referenceForNesting = referenceForNesting[sourceArray[i]];
		}
		referenceForNesting[sourceArray[sourceArray.length-1]] = valueOfLastNode;
		return convertedObject;	
	};
	
	exports.getNestedObjectFromString = function(sourceObject,separator, key, value){
		var splitParams = key.split(separator);
		if(splitParams.length == 1){
			sourceObject[key] = value;
		} else{
			sourceObject = refThis.getNestedObjectFromArray(sourceObject,splitParams,value);
		}
		return sourceObject;
	};
	
	exports.getUserIdParams = function(params){
		var userIdParams= {};
		for(var key in params){
			try{
				if(CONSTANTS.EXCLUDE_IDENTITY_PARAMS.indexOf(key) == -1) {
					if(CONSTANTS.TOLOWERCASE_IDENTITY_PARAMS.indexOf(key)>-1){
						params[key] = params[key].toLowerCase();
					}
					if(CONSTANTS.JSON_VALUE_KEYS.indexOf(key)>-1){
						params[key] = JSON.parse(params[key]);
					}
					userIdParams = refThis.getNestedObjectFromString(userIdParams,".",key,params[key]);
				}
			}
			catch(ex){
				refThis.logWarning(CONSTANTS.MESSAGES.IDENTITY.M3, ex);
			}
		}	
		return userIdParams;
	};
	
	exports.getPartnerParams = function(params){
		var pparams= {};
		for(var key in params){
			try{
				pparams = refThis.getNestedObjectFromString(pparams,".",key,params[key]);
			}
			catch(ex){
				refThis.logWarning(CONSTANTS.MESSAGES.M29, ex);
			}
		}	
		return pparams;
	};
	
	exports.generateMonetizationPixel = function(slotID, theBid){
		var pixelURL = CONFIG.getMonetizationPixelURL(),
			pubId = CONFIG.getPublisherId();
		var netEcpm, grossEcpm, kgpv, bidId, adapterId;
		const isAnalytics = true; // this flag is required to get grossCpm and netCpm in dollars instead of adserver currency
	
		/* istanbul ignore else */
		if(!pixelURL){
			return;
		}
	
		if(refThis.isFunction(theBid.getGrossEcpm)) {
			grossEcpm = theBid.getGrossEcpm(isAnalytics);
		}
		else{
			if(CONFIG.getAdServerCurrency() &&  refThis.isFunction(theBid.getCpmInNewCurrency)){
				grossEcpm = window.parseFloat(theBid.getCpmInNewCurrency(CONSTANTS.COMMON.ANALYTICS_CURRENCY));
			}
			else {
				grossEcpm = theBid.cpm;
			}
		}
		if(refThis.isFunction(theBid.getAdapterID)){
			adapterId = theBid.getAdapterID()
		}
		else{
			adapterId = theBid.bidderCode
		}
		// TODO: Uncomment below code in case hybrid profile is supported 
		// if(adapterId == "pubmaticServer"){
		// 	adapterId = "pubmatic";
		// }
		// Do we need all checks or we can just use one check
		if(refThis.isFunction(theBid.getNetEcpm)) {
			netEcpm = theBid.getNetEcpm(isAnalytics)
		}
		else{
			// else would be executed in case this function is called from prebid for vast updation
			netEcpm = window.parseFloat((grossEcpm * CONFIG.getAdapterRevShare(adapterId)).toFixed(CONSTANTS.COMMON.BID_PRECISION))
		}
		
		if(refThis.isFunction(theBid.getBidID)){
			bidId = theBid.getBidID()
		}
		else{
			bidId = window.PWT.bidMap[slotID].adapters[adapterId].bids[Object.keys(window.PWT.bidMap[slotID].adapters[adapterId].bids)[0]].bidID;
		}
		if(refThis.isFunction(theBid.getKGPV)) {
			kgpv = theBid.getKGPV()
		}
		else {
			kgpv = window.PWT.bidMap[slotID].adapters[adapterId].bids[Object.keys(window.PWT.bidMap[slotID].adapters[adapterId].bids)[0]].kgpv;
		}
	
		pixelURL += "pubid=" + pubId;
		pixelURL += "&purl=" + window.encodeURIComponent(refThis.metaInfo.pageURL);
		pixelURL += "&tst=" + refThis.getCurrentTimestamp();
		pixelURL += "&iid=" + window.encodeURIComponent(window.PWT.bidMap[slotID].getImpressionID());
		pixelURL += "&bidid=" + window.encodeURIComponent(bidId);
		pixelURL += "&pid=" + window.encodeURIComponent(CONFIG.getProfileID());
		pixelURL += "&pdvid=" + window.encodeURIComponent(CONFIG.getProfileDisplayVersionID());
		pixelURL += "&slot=" + window.encodeURIComponent(slotID);
		pixelURL += "&pn=" + window.encodeURIComponent(adapterId);
		pixelURL += "&en=" + window.encodeURIComponent(netEcpm);
		pixelURL += "&eg=" + window.encodeURIComponent(grossEcpm);
		pixelURL += "&kgpv=" + window.encodeURIComponent(kgpv);
	
		return CONSTANTS.COMMON.PROTOCOL + pixelURL;
	};
	
	exports.UpdateVastWithTracker= function(bid, vast){
		try{
			var domParser = new DOMParser();
			var parsedVast = domParser.parseFromString(vast,"application/xml");
			var impEle = parsedVast.createElement("Impression");
			impEle.innerHTML =	"<![CDATA["+ refThis.generateMonetizationPixel(bid.adUnitCode, bid)+"]]>";
			if(parsedVast.getElementsByTagName('Wrapper').length == 1){
				parsedVast.getElementsByTagName('Wrapper')[0].appendChild(impEle);
			}
			else if(parsedVast.getElementsByTagName('InLine').length == 1){
				parsedVast.getElementsByTagName('InLine')[0].appendChild(impEle);
			}
			return new XMLSerializer().serializeToString(parsedVast);
		}
		catch(ex){
			return vast;
		}
	    
	};
	
	exports.getDomainFromURL = function(url){
		var a = window.document.createElement("a");
		a.href = url;
		return a.hostname;
	};
	
	exports.replaceAuctionPrice = function(str, cpm) {
		if (!str) return;
		return str.replace(/\$\{AUCTION_PRICE\}/g, cpm);
	};
	
	exports.getCustomParamsForDFPVideo = function(customParams, bid){
		const adserverTargeting = (bid && bid.adserverTargeting) || {};
		var targetingKeys = {}
		for(var key in adserverTargeting){
			if(refThis.isOwnProperty(adserverTargeting,key)){
				if(refThis.isArray(adserverTargeting[key])){
					targetingKeys[key] = adserverTargeting[key].join();
				} else {
					targetingKeys[key] = adserverTargeting[key];
				}
			}
		}
		var customParams = Object.assign({},
			targetingKeys,
			customParams);
		return customParams;
	};
	
	exports.getDevicePlatform = function(){
		var deviceType = 3;
		try{
			var ua = navigator.userAgent;
			if(ua && refThis.isString(ua) && ua.trim() != ""){
				ua = ua.toLowerCase().trim();
				var isMobileRegExp = new RegExp("(mobi|tablet|ios).*");
				if(ua.match(isMobileRegExp)){
					deviceType=2;
				}
				else{
					deviceType=1;
				}
			}
		}
		catch(ex){
			refThis.logError("Unable to get device platform" , ex);
		}
		return deviceType;
	}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var config = __webpack_require__(3);
	var CONSTANTS = __webpack_require__(4);
	var util = __webpack_require__(1);
	
	var refThis = null;
	
	refThis = this;
	
	exports.getPublisherId = function(){
		return util.trim(config.pwt.pubid) || "0";
	};
	
	exports.getMataDataPattern = function(){
		if(util.isString(config[CONSTANTS.CONFIG.COMMON][CONSTANTS.CONFIG.META_DATA_PATTERN])){
			return config[CONSTANTS.CONFIG.COMMON][CONSTANTS.CONFIG.META_DATA_PATTERN];
		}
		return null;
	};
	
	exports.getSendAllBidsStatus = function(){
		return window.parseInt(config[CONSTANTS.CONFIG.COMMON][CONSTANTS.CONFIG.SEND_ALL_BIDS]) || 0;
	};
	
	exports.getTimeout = function(){
		return window.parseInt(config.pwt.t) || 1000;
	};
	
	exports.getDisableAjaxTimeout = function(){
		var pwt =config.pwt;
		if(util.isOwnProperty(pwt,CONSTANTS.CONFIG.DISABLE_AJAX_TIMEOUT)){
		    return true ==  config.pwt.disableAjaxTimeout;
		}
		return true;
	};
	
	exports.getAdapterRevShare = function(adapterID){
		var adapterConfig = config.adapters;
		if(util.isOwnProperty(adapterConfig[adapterID], CONSTANTS.CONFIG.REV_SHARE)){
			return (1 - window.parseFloat(adapterConfig[adapterID][CONSTANTS.CONFIG.REV_SHARE])/100);
		}
		return 1;
	};
	
	exports.getAdapterThrottle = function(adapterID){
		var adapterConfig = config.adapters;
		if(util.isOwnProperty(adapterConfig[adapterID], CONSTANTS.CONFIG.THROTTLE)){
			return 100 - window.parseFloat(adapterConfig[adapterID][CONSTANTS.CONFIG.THROTTLE]);
		}
		return 0;
	};
	
	exports.isServerSideAdapter = function(adapterID){
		var adapterConfig = config.adapters;
		/* istanbul ignore else */
		if(adapterConfig[adapterID] && util.isOwnProperty(adapterConfig[adapterID], CONSTANTS.CONFIG.SERVER_SIDE_ENABLED)){
			return window.parseInt(adapterConfig[adapterID][CONSTANTS.CONFIG.SERVER_SIDE_ENABLED]) === 1;
		}
		return false;
	};
	
	exports.getAdapterMaskBidsStatus = function(adapterID){
		var adapterConfig = config.adapters;
		var tempSettings = {
			'audienceNetwork': 1
		};
	
		if(util.isOwnProperty(tempSettings, adapterID)){
			return tempSettings[adapterID];
		}
	
		if(util.isOwnProperty(adapterConfig[adapterID], CONSTANTS.CONFIG.MASK_BIDS)){
			return window.parseInt(adapterConfig[adapterID][CONSTANTS.CONFIG.MASK_BIDS]) || 0;
		}
		return 0;
	}
	
	exports.getBidPassThroughStatus = function(adapterID){
		var adapterConfig = config.adapters;
		if(util.isOwnProperty(adapterConfig[adapterID], CONSTANTS.CONFIG.BID_PASS_THROUGH)){
			return window.parseInt(adapterConfig[adapterID][CONSTANTS.CONFIG.BID_PASS_THROUGH]);
		}
		return 0;
	};
	
	exports.getProfileID = function(){
		return util.trim(config.pwt[CONSTANTS.CONFIG.PROFILE_ID]) || "0";
	};
	
	exports.getProfileDisplayVersionID = function(){
		return util.trim(config.pwt[CONSTANTS.CONFIG.PROFILE_VERSION_ID]) || "0";
	};
	
	exports.getAnalyticsPixelURL = function(){
		return config.pwt[CONSTANTS.CONFIG.LOGGER_URL] || false;
	};
	
	exports.getMonetizationPixelURL = function(){
		return config.pwt[CONSTANTS.CONFIG.TRACKER_URL] || false;
	};
	
	exports.forEachAdapter = function(callback){
		util.forEachOnObject(config.adapters, callback);
	};
	
	function addPrebidAdapter(){
		var preBidAdapter = CONSTANTS.COMMON.PARENT_ADAPTER_PREBID;
		if(!util.isOwnProperty(config.adapters, preBidAdapter)){
			var adapterConfig = {};
			adapterConfig[CONSTANTS.CONFIG.REV_SHARE] = "0.0";
			adapterConfig[CONSTANTS.CONFIG.THROTTLE] = "100";
			adapterConfig[CONSTANTS.CONFIG.KEY_GENERATION_PATTERN]	= "_DIV_";
			adapterConfig[CONSTANTS.CONFIG.KEY_LOOKUP_MAP] = {};
			config.adapters[preBidAdapter] = adapterConfig;
		}
	}
	
	exports.getGdpr = function () {
		var gdpr = config[CONSTANTS.CONFIG.COMMON][CONSTANTS.CONFIG.GDPR_CONSENT] || CONSTANTS.CONFIG.DEFAULT_GDPR_CONSENT;
		return gdpr === "1";
	};
	
	exports.getCmpApi = function () {
		return config[CONSTANTS.CONFIG.COMMON][CONSTANTS.CONFIG.GDPR_CMPAPI] || CONSTANTS.CONFIG.DEFAULT_GDPR_CMPAPI;
	};
	
	exports.getGdprTimeout = function() {
		var gdprTimeout = config[CONSTANTS.CONFIG.COMMON][CONSTANTS.CONFIG.GDPR_TIMEOUT];
		return gdprTimeout ? window.parseInt(gdprTimeout) : CONSTANTS.CONFIG.DEFAULT_GDPR_TIMEOUT;
	};
	
	exports.getAwc = function () {
		var awc = config[CONSTANTS.CONFIG.COMMON][CONSTANTS.CONFIG.GDPR_AWC] || CONSTANTS.CONFIG.DEFAULT_GDPR_AWC;
		return awc === "1" ;
	};
	
	/* start-test-block */
	exports.addPrebidAdapter = addPrebidAdapter;
	/* end-test-block */
	
	exports.initConfig = function(){
		refThis.addPrebidAdapter();
	
		var ignoreAdapterLevelParams = {};
		util.forEachOnObject(CONSTANTS.CONFIG, function(key, value){
			ignoreAdapterLevelParams[value] = "";
		});
	
		util.forEachOnObject(config.adapters, function(adapterID, adapterConfig){
			var adapterLevelParams = {};
			util.forEachOnObject(adapterConfig, function(key, value){
				if(!util.isOwnProperty(ignoreAdapterLevelParams, key)){
					adapterLevelParams[ key ] = value;
				}
			});
			util.forEachOnObject(adapterConfig[CONSTANTS.CONFIG.KEY_LOOKUP_MAP], function(kgpv, slotLevelParams){
				util.forEachOnObject(adapterLevelParams, function(key, value){
					slotLevelParams[ key ] = value;
				});
			});
	
			if(adapterID != "pubmatic" && adapterID != "pubmatic2"){
				util.forEachOnObject(adapterConfig[CONSTANTS.CONFIG.REGEX_KEY_LOOKUP_MAP], function(kgpv, slotLevelParams){
					util.forEachOnObject(adapterLevelParams, function(key, value){
						if(util.isOwnProperty(slotLevelParams, "rx_config")){
							slotLevelParams["rx_config"][ key ] = value;
						}
					});
				});
			}
		});
	};
	
	/* Native Configuration */
	
	exports.getNativeConfiguration = function(){
		return config[CONSTANTS.COMMON.NATIVE_MEDIA_TYPE_CONFIG];
	};
	
	exports.getAdServerCurrency = function(){
		return config[CONSTANTS.CONFIG.COMMON][CONSTANTS.COMMON.AD_SERVER_CURRENCY];
	};
	
	exports.isSingleImpressionSettingEnabled = function(){
		return parseInt(config[CONSTANTS.CONFIG.COMMON][CONSTANTS.COMMON.SINGLE_IMPRESSION] || CONSTANTS.CONFIG.DEFAULT_SINGLE_IMPRESSION);
	};
	
	exports.isUserIdModuleEnabled = function(){
		return parseInt(config[CONSTANTS.CONFIG.COMMON][CONSTANTS.COMMON.ENABLE_USER_ID] || CONSTANTS.CONFIG.DEFAULT_USER_ID_MODULE);
	};
	
	exports.getIdentityPartners = function(){
		return config[CONSTANTS.COMMON.IDENTITY_PARTNERS];
	};
	
	exports.isIdentityOnly = function(){
		return parseInt(config[CONSTANTS.CONFIG.COMMON][CONSTANTS.COMMON.IDENTITY_ONLY]|| CONSTANTS.CONFIG.DEFAULT_IDENTITY_ONLY);
	};
	
	exports.getIdentityConsumers = function(){
		return (config[CONSTANTS.CONFIG.COMMON][CONSTANTS.COMMON.IDENTITY_CONSUMERS] || "").toLowerCase();
	};
	
	exports.getSlotConfiguration = function(){
		return config[CONSTANTS.COMMON.SLOT_CONFIG];
	};
	
	exports.getAdServer = function(){
		return config[CONSTANTS.COMMON.ADSERVER];
	};
	exports.getCCPA = function () {
		var ccpa = config[CONSTANTS.CONFIG.COMMON][CONSTANTS.CONFIG.CCPA_CONSENT] || CONSTANTS.CONFIG.DEFAULT_CCPA_CONSENT;
		return ccpa === "1";
	};
	
	exports.getCCPACmpApi = function () {
		return config[CONSTANTS.CONFIG.COMMON][CONSTANTS.CONFIG.CCPA_CMPAPI] || CONSTANTS.CONFIG.DEFAULT_CCPA_CMPAPI;
	};
	
	exports.getCCPATimeout = function() {
		var ccpaTimeout = config[CONSTANTS.CONFIG.COMMON][CONSTANTS.CONFIG.CCPA_TIMEOUT];
		return ccpaTimeout ? window.parseInt(ccpaTimeout) : CONSTANTS.CONFIG.DEFAULT_CCPA_TIMEOUT;
	};
	
	exports.getSchainObject = function(){
		return config[CONSTANTS.CONFIG.COMMON][CONSTANTS.COMMON.SCHAINOBJECT] || {};
	};
	
	exports.isSchainEnabled = function(){
		return window.parseInt(config[CONSTANTS.CONFIG.COMMON][CONSTANTS.COMMON.SCHAIN]) || 0;
	};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	exports.pwt = {
		t: "3000",
		pid: "46",
		gcv: "11",
		pdvid: "4",
		pubid: "9999",
		dataURL: "t.test-domain.com/logger?",
		winURL: "t.test-domain.com/tracker?",
		adserver: "CUSTOM",
		gdpr: "0",
		cmpApi: "iab",
		gdprTimeout: "10000",
		awc: "1",
		disableAjaxTimeout:true,
		adServerCurrency: "INR",
		singleImpression: "1",
		identityEnabled:"0",
		identityConsumers:"EB,TAM,Prebid",
		identityOnly:"0",
		ccpa: "0",
		ccpaCmpApi: "iab",
		ccpaTimeout: "10000",
	};
	
	// singleImpression is used to enable feature of sending single impression for multiple size ad slot earlier there were multiple impression for multiple sizes
	
	exports.adapters = {
		pubmatic: {
			rev_share: "0.0",
			throttle: "100",
			publisherId: "156209",
			kgp: "_DIV_@_W_x_H_:_AUI_"
		},
		audienceNetwork: {
			rev_share: "0.0",
			throttle: "100",
			kgp: "_DIV_",
			klm: {
				"Div_1": {
					placementId: "8801674"
				},
				"Div-2": {
					placementId: "8801685"
				}
			}
		},
		sekindoUM: {
			rev_share: "0.0",
			throttle: "100",
			kgp: "_DIV_",
			klm: {
				"Div_1": {
					spaceId: 14071
				},
				"Div-2": {
					spaceId: 14071
				}
			}
		},
		appnexus: {
			rev_share: "0.0",
			throttle: "100",
			kgp: "_DIV_",
			klm: {
				"Div_1": {
					placementId: "8801674",
					"video.mimes":"",
					"video.minduration":""
				},
				"Div-2": {
					placementId: "8801685"
				}
			}
		},
		pulsepoint: {
			cp: "521732",
			rev_share: "0.0",
			throttle: "100",
			kgp: "_DIV_",
			klm: {
				"Div_1": {
					ct: "76835"
				},
				"Div-2": {
					ct: "147007"
				}
			}
		},
		rubicon: {
			accountId: "10998",
			rev_share: "0.0",
			timeout: "1000",
			throttle: "100",
			pt: 0,
			serverSideEnabled: "0",
			amp: 0,
			video: 0,
			"in-app": 0,
			kgp_rx: "_AU_@_DIV_@_W_x_H_",
			klm_rx: [{
				rx: {
					DIV: ".*",
					AU: "^/43743431/DMDemo",
					SIZE: "728x90"
				},
				rx_config: {
					zoneId: "869224",
					siteId: "178620",
					floor: "0"
				}
			}]
		}
	};
	

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	//todo:
	// remove unnecessary constants
	
	exports.COMMON = {
		"BID_PRECISION": 2,
		"DEAL_KEY_FIRST_PART": "pwtdeal_",
		"DEAL_KEY_VALUE_SEPARATOR": "_-_",
		"PREBID_PREFIX": "PB_",
		"CONFIG": "config",
		"DIV_ID": "divID",
		"PARAMS": "params",
		"SIZES": "sizes",
		"HEIGHT": "height",
		"WIDTH": "width",
		"SLOTS": "slots",
		"KEY_GENERATION_PATTERN_VALUE": "kgpv",
		"KEY_VALUE_PAIRS": "kvp",
		"IMPRESSION_ID": "iid",
		"PARENT_ADAPTER_PREBID": "prebid",
		"ANALYTICS_CURRENCY": "USD",
		"NATIVE_MEDIA_TYPE_CONFIG": "nativeConfig",
		"NATIVE_ONLY": "nativeOnly",
		"OW_CLICK_NATIVE": "openwrap-native-click",
		"BID_ID": "owbidid",
		"AD_SERVER_CURRENCY": "adServerCurrency",
		"SINGLE_IMPRESSION":"singleImpression",
		"PREBID_NAMESPACE": "owpbjs",
		"ENABLE_USER_ID":"identityEnabled",
		"IDENTITY_PARTNERS":"identityPartners",
		"IDENTITY_CONSUMERS": "identityConsumers",
		"IDENTITY_ONLY":"identityOnly",
		"GAM":"eb",
		"TAM":"tam",
		"PREBID":"prebid",	
		"PROTOCOL" : "https://",
		"SLOT_CONFIG": "slotConfig"	,
		"DEFAULT": "default",
		"ADSERVER":"adserver",
		"SCHAINOBJECT":"sChainObj",
		"SCHAIN":"sChain"
	};
	
	exports.CONFIG = {
		"GLOBAL": "global",
		"ADAPTERS": "adapters",
		"COMMON": "pwt",
		"TIMEOUT": "t",
		"KEY_GENERATION_PATTERN": "kgp",
		"REGEX_KEY_GENERATION_PATTERN": "kgp_rx",
		"REGEX_KEY_LOOKUP_MAP": "klm_rx",
		"KEY_LOOKUP_MAP": "klm",
		"SERVER_SIDE_KEY": "sk",
		"PUBLISHER_ID": "pubid",
		"PROFILE_ID": "pid",
		"PROFILE_VERSION_ID": "pdvid",
		"LOGGER_URL": "dataURL",
		"TRACKER_URL": "winURL",
		"REV_SHARE": "rev_share",
		"THROTTLE": "throttle",
		"BID_PASS_THROUGH": "pt",
		"GLOBAL_KEY_VALUE": "gkv",
		"MASK_BIDS": "maksBids",
		"META_DATA_PATTERN": "metaDataPattern",
		"SEND_ALL_BIDS": "sendAllBids",
		"SERVER_SIDE_ENABLED": "serverSideEnabled",
		"GDPR_CONSENT": "gdpr",
		"CONSENT_STRING": "cns",
		"GDPR_CMPAPI": "cmpApi",
		"GDPR_TIMEOUT": "gdprTimeout",
		"GDPR_AWC": "awc",
		"DEFAULT_GDPR_CMPAPI": "iab",
		"DEFAULT_GDPR_TIMEOUT": 10000,
		"DEFAULT_GDPR_AWC": "0",
		"DEFAULT_SINGLE_IMPRESSION": "0",
		"DEFAULT_USER_ID_MODULE": "0",
		"DEFAULT_IDENTITY_ONLY": "0",
		"DEFAULT_GDPR_CONSENT": "0",
		"DISABLE_AJAX_TIMEOUT": "disableAjaxTimeout",
		"CCPA_CONSENT": "ccpa",
		"CCPA_CMPAPI": "ccpaCmpApi",
		"CCPA_TIMEOUT": "ccpaTimeout",
		"DEFAULT_CCPA_CMPAPI": "iab",
		"DEFAULT_CCPA_TIMEOUT": 10000,
		"CACHE_PATH":"/cache",
		"CACHE_URL":"https://ow.pubmatic.com",
		"VIDEO_PARAM":"video"
	};
	
	exports.METADATA_MACROS = {
		"WIDTH": "_W_",
		"HEIGHT": "_H_",
		"PARTNER": "_P_",
		"GROSS_ECPM": "_GE_",
		"NET_ECPM": "_NE_",
		"BID_COUNT": "_BC_",
		"PARTNER_COUNT": "_PC_"
	};
	
	exports.MACROS = {
		"WIDTH": "_W_",
		"HEIGHT": "_H_",
		"AD_UNIT_ID": "_AU_",
		"AD_UNIT_INDEX": "_AUI_",
		"INTEGER": "_I_",
		"DIV": "_DIV_"
	};
	
	exports.SLOT_STATUS = {
		"CREATED": 0,
		"PARTNERS_CALLED": 1,
		"TARGETING_ADDED": 2,
		"DISPLAYED": 3
	};
	
	exports.WRAPPER_TARGETING_KEYS = {
		"BID_ID": "pwtsid",
		"BID_STATUS": "pwtbst",
		"BID_ECPM": "pwtecp",
		"BID_DEAL_ID": "pwtdid",
		"BID_ADAPTER_ID": "pwtpid",
		"BID_SIZE": "pwtsz",
		"PUBLISHER_ID": "pwtpubid",
		"PROFILE_ID": "pwtprofid",
		"PROFILE_VERSION_ID": "pwtverid",
		"META_DATA": "pwtm",
		"PLATFORM_KEY": "pwtplt",
		"USER_IDS":"pwtuid",
		"CACHE_ID":"pwtcid",
		"CACHE_URL":"pwtcurl",
		"CACHE_PATH":"pwtcpath",
	};
	
	exports.IGNORE_PREBID_KEYS = {
		"hb_bidder": 1,
		"hb_adid": 1,
		"hb_pb": 1,
		"hb_size": 1,
		"hb_deal": 1,
		"hb_uuid":1,
		"hb_cache_host":1,
		"hb_cache_id":1
	};
	
	//todo: mention all params here and use accordigly
	exports.LOGGER_PIXEL_PARAMS = {
		"TIMESTAMP": "tst",
		"PAGE_URL": "purl",
		"PAGE_DOMAIN": "orig",
		"TIMEOUT": "to"
	};
	
	exports.MESSAGES = {
		"M1": ": In fetchbids.",
		"M2": ": Throttled.",
		"M3": ": adapter must implement the fetchBids() function.",
		"M4": "BidManager: entry ",
		"M5": ": Callback.",
		"M6": "bidAlreadExists : ",
		"M7": ": Exiting from fetchBids.",
		"M8": ". Config not found, ignored.",
		"M9": ". Config ignored.",
		"M10": "Bid is rejected as ecpm is NULL.",
		"M11": "Bid is rejected as ecpm is NaN: ",
		"M12": "Existing bid ecpm: ",
		"M13": ", is lower than new bid ecpm ",
		"M14": ", so we are replacing bid from partner ",
		"M15": ", is greater than new bid ecpm ",
		"M16": ", so we are not replacing bid from partner ",
		"M17": "Post timeout bid, ignored.",
		"M18": "Bid is selected for partner ",
		"M19": ": Found winning adapterID: ",
		"M20": "Bid is rejected as ecpm is empty string.",
		"M21": ": error in respose handler.",
		"M22": "Bid is rejected as ecpm is <= 0.",
		"M23": "Existing bid is default-bid with zero ecpm, thus replacing it with the new bid from partner ",
		"M24": "Passsed argument is not a bidAdaptor",
		"M25": "Bid details not found for bidID: ",
		"M26": "Currency Module is Activated. Ad Server Currency is: ",
		"M27": "Invalid regex pattern ",
		"M28": "Unable to match regex pattern as kgpv length is not 3",
		"M29": "Unable to parse Partner configuration",
		IDENTITY:{
			M1: "Unable to get User Id from OpenIdentity",
			M2: "Setting UserIds to EB ",
			M3: "Unable to parse User ID configuration",
			M4: "User Id Condiguration Sent to prebid ",
			M5: "Identity only enabled, no need to process. Calling Original function "
		}
	};
	
	exports.PLATFORM_VALUES = {
		"DISPLAY": "display",
		"NATIVE": "native",
		"VIDEO":"video"
	};
	
	exports.FORMAT_VALUES = {
		"BANNER": "banner",
		"VIDEO": "video",
		"NATIVE": "native",
		"OTHER": "other"
	};
	
	exports.HOOKS = {
		"PREBID_SET_CONFIG": "HookForPrebidSetConfig",
		"PREBID_REQUEST_BIDS": "HookForPrebidRequestBids",
		"BID_RECEIVED": "HookForBidReceived",
		"POST_AUCTION_KEY_VALUES": "HookForPostAuctionKeyValues"
	};
	
	exports.SRA_ENABLED_BIDDERS = {
		"rubicon": 1,
		"improvedigital": 2
	};
	
	exports.EXCLUDE_IDENTITY_PARAMS = ["rev_share","timeout","throttle"];
	
	exports.TOLOWERCASE_IDENTITY_PARAMS = ["storage.type"];
	
	exports.JSON_VALUE_KEYS = ["params.clientIdentifier"];
	
	exports.AD_SERVER = {
		"DFP" : "DFP",
		"CUSTOM": "CUSTOM"
	};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var CONFIG = __webpack_require__(2);
	var CONSTANTS = __webpack_require__(4);
	var UTIL = __webpack_require__(1);
	
	function Bid(adapterID, kgpv){
		this.adapterID = adapterID;
		this.kgpv = kgpv;
		this.bidID = UTIL.getUniqueIdentifierStr();
		this.grossEcpm = 0; // one given by bidder
		this.netEcpm = 0; // one after bid adjustment
		this.defaultBid = 0;
		this.adHtml = "";
		this.adUrl = "";
		this.height = 0;
		this.width = 0;
		this.creativeID = ""; //todo, is it needed ?
		this.keyValuePairs = {};
		this.isPostTimeout = false;
		this.receivedTime = 0;
		this.isServerSide = CONFIG.isServerSideAdapter(adapterID) ? 1 : 0;
		this.dealID = "";
		this.dealChannel = "";
		this.isWinningBid = false;
		this.status = 0;
		this.serverSideResponseTime = 0;
		this.mi = undefined;
		this.originalCpm = 0;
		this.originalCurrency = "";
		this.analyticsGrossCpm = 0;
		this.analyticsNetCpm = 0;
		this.native = undefined;
		this.adFormat = undefined;
		this.regexPattern = undefined;
		this.cacheUUID = undefined;
	}
	
	var getNetECPM = function(grossEcpm, adapterID){
		return window.parseFloat((grossEcpm * CONFIG.getAdapterRevShare(adapterID)).toFixed(CONSTANTS.COMMON.BID_PRECISION));
	};
	
	Bid.prototype.setServerSideResponseTime = function (ssResponseTime) {
		this.serverSideResponseTime = ssResponseTime;
	};
	
	Bid.prototype.getServerSideResponseTime = function () {
		return this.serverSideResponseTime;
	};
	
	Bid.prototype.getServerSideStatus = function () {
		return this.isServerSide;
	};
	
	Bid.prototype.setServerSideStatus = function (isServerSide) {
		this.isServerSide = isServerSide;
	};
	
	Bid.prototype.getAdapterID = function(){
		return this.adapterID;
	};
	
	Bid.prototype.getBidID = function(){
		return this.bidID;
	};
	
	Bid.prototype.setGrossEcpm = function(ecpm){
		/* istanbul ignore else */
		if(ecpm === null){
			UTIL.log(CONSTANTS.MESSAGES.M10);
			UTIL.log(this);
			return this;
		}
		/* istanbul ignore else */
		if(UTIL.isString(ecpm)){
			ecpm = ecpm.replace(/\s/g, "");
			/* istanbul ignore else */
			if(ecpm.length === 0){
				UTIL.log(CONSTANTS.MESSAGES.M20);
				UTIL.log(this);
				return this;
			}
		}
	
		/* istanbul ignore else */
		if(window.isNaN(ecpm)){
			UTIL.log(CONSTANTS.MESSAGES.M11+ecpm);
			UTIL.log(this);
			return this;
		}
	
		ecpm = window.parseFloat(ecpm.toFixed(CONSTANTS.COMMON.BID_PRECISION));
	
		this.grossEcpm = ecpm;
		this.netEcpm = getNetECPM(this.grossEcpm, this.getAdapterID());
	
		return this;
	};
	
	Bid.prototype.getGrossEcpm = function(forAnalytics){
		// Check config if currency module is enabled.
		if(CONFIG.getAdServerCurrency() && this.analyticsGrossCpm && forAnalytics){
			return this.analyticsGrossCpm;
		}
		return this.grossEcpm;
	};
	
	Bid.prototype.getNetEcpm = function(forAnalytics){
		if(CONFIG.getAdServerCurrency() && this.analyticsNetCpm && forAnalytics){
			return this.analyticsNetCpm;
		}
		return this.netEcpm;
	};
	
	Bid.prototype.setDefaultBidStatus = function(status){
		this.defaultBid = status;
		return this;
	};
	
	Bid.prototype.getDefaultBidStatus = function(){
		return this.defaultBid;
	};
	
	Bid.prototype.setAdHtml = function(adHtml){
		this.adHtml = adHtml;
		this.setAdFormat(adHtml);
		return this;
	};
	
	Bid.prototype.getAdHtml = function(){
		return this.adHtml;
	};
	
	Bid.prototype.setAdUrl = function(adUrl){
		this.adUrl = adUrl;
		return this;
	};
	
	Bid.prototype.getAdUrl = function(){
		return this.adUrl;
	};
	
	Bid.prototype.setHeight = function(height){
		this.height = height;
		return this;
	};
	
	Bid.prototype.getHeight = function(){
		return this.height;
	};
	
	Bid.prototype.setWidth = function(width){
		this.width = width;
		return this;
	};
	
	Bid.prototype.getWidth = function(){
		return this.width;
	};
	
	Bid.prototype.getKGPV = function(isActualValueRequired){
		if(!isActualValueRequired && this.regexPattern){
			return this.regexPattern;
		}
		return this.kgpv;
	};
	
	Bid.prototype.setKeyValuePair = function(key, value){
		// max length of key is restricted to 20 characters
		this.keyValuePairs[key.substr(0, 20)] = value;
		return this;
	};
	
	Bid.prototype.getKeyValuePairs = function(){
		return this.keyValuePairs;
	};
	
	Bid.prototype.setPostTimeoutStatus = function(){
		this.isPostTimeout = true;
		return this;
	};
	
	Bid.prototype.getPostTimeoutStatus = function(){
		return this.isPostTimeout;
	};
	
	Bid.prototype.setReceivedTime = function(receivedTime){
		this.receivedTime = receivedTime;
		return this;
	};
	
	Bid.prototype.getReceivedTime = function(){
		return this.receivedTime;
	};
	
	Bid.prototype.setDealID = function(dealID){
		/* istanbul ignore else */
		if(dealID){
			this.dealID = dealID;
			this.dealChannel = this.dealChannel || "PMP";
			this.setKeyValuePair(
				CONSTANTS.COMMON.DEAL_KEY_FIRST_PART+this.adapterID,
				this.dealChannel + CONSTANTS.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.dealID + CONSTANTS.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.bidID
			);
		}
		return this;
	};
	
	Bid.prototype.getDealID = function(){
		return this.dealID;
	};
	
	Bid.prototype.setDealChannel = function(dealChannel){
		/* istanbul ignore else */
		if(this.dealID && dealChannel){
			this.dealChannel = dealChannel;
			this.setKeyValuePair(
				CONSTANTS.COMMON.DEAL_KEY_FIRST_PART+this.adapterID,
				this.dealChannel + CONSTANTS.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.dealID + CONSTANTS.COMMON.DEAL_KEY_VALUE_SEPARATOR + this.bidID
			);
		}
		return this;
	};
	
	Bid.prototype.getDealChannel = function(){
		return this.dealChannel;
	};
	
	Bid.prototype.setWinningBidStatus = function(){
		this.isWinningBid = true;
		return this;
	};
	
	Bid.prototype.getWinningBidStatus = function(){
		return this.isWinningBid;
	};
	
	Bid.prototype.setStatus = function(status){
		this.status = status;
		return this;
	};
	
	Bid.prototype.getStatus = function(){
		return this.status;
	};
	
	Bid.prototype.setSendAllBidsKeys = function(){
		this.setKeyValuePair(CONSTANTS.WRAPPER_TARGETING_KEYS.BID_ID+'_'+this.adapterID, this.bidID);
		this.setKeyValuePair(CONSTANTS.WRAPPER_TARGETING_KEYS.BID_STATUS+'_'+this.adapterID, this.getNetEcpm() > 0 ? 1 : 0);
		this.setKeyValuePair(CONSTANTS.WRAPPER_TARGETING_KEYS.BID_ECPM+'_'+this.adapterID, this.getNetEcpm().toFixed(CONSTANTS.COMMON.BID_PRECISION));
		this.setKeyValuePair(CONSTANTS.WRAPPER_TARGETING_KEYS.BID_SIZE+'_'+this.adapterID, this.width + 'x' + this.height);
		if (this.native) {
			var keyValues = this.keyValuePairs;
			var globalThis = this;
			UTIL.forEachOnObject(keyValues, function(key, value) {
				if (key.indexOf("native") >= 0) {
					globalThis.setKeyValuePair(key + "_" + globalThis.adapterID, value);
				}
			});
		}
	};
	
	Bid.prototype.setMi = function(mi){
		this.mi = mi;
		return this;
	};
	
	Bid.prototype.getMi = function(){
		return this.mi;
	};
	
	Bid.prototype.setOriginalCpm = function(originalCpm){
		this.originalCpm = window.parseFloat(originalCpm.toFixed(CONSTANTS.COMMON.BID_PRECISION));
		return this;
	};
	
	Bid.prototype.getOriginalCpm = function(){
		return this.originalCpm;
	};
	
	
	Bid.prototype.setOriginalCurrency = function(originalCurrency){
		this.originalCurrency = originalCurrency;
		return this;
	};
	
	Bid.prototype.getOriginalCurrency = function(){
		return this.originalCurrency;
	};
	
	
	Bid.prototype.setAnalyticsCpm = function(analyticsCpm){
		this.analyticsGrossCpm = window.parseFloat(analyticsCpm.toFixed(CONSTANTS.COMMON.BID_PRECISION));
		this.analyticsNetCpm = getNetECPM(this.analyticsGrossCpm,this.getAdapterID());
		return this;
	};
	
	Bid.prototype.getAnalyticsCpm = function(){
		return this.analyticsGrossCpm;
	};
	
	Bid.prototype.getNative = function(){
		return this.native;
	};
	
	Bid.prototype.setNative = function(native){
		this.native = native;
		return this;
	};
	
	Bid.prototype.getAdFormat = function(){
		return this.adFormat;
	};
	
	Bid.prototype.setAdFormat = function(ad){
		this.adFormat = UTIL.getAdFormatFromBidAd(ad);
		return this;
	};
	
	Bid.prototype.getRegexPattern = function(){
		return this.regexPattern;
	};
	
	Bid.prototype.setRegexPattern = function(pattern){
		this.regexPattern = pattern;
		return this;
	};
	
	Bid.prototype.getcacheUUID = function(){
		return this.cacheUUID;
	};
	
	Bid.prototype.setcacheUUID = function(cacheUUID){
		this.cacheUUID = cacheUUID;
		if(!this.adFormat){
			this.adFormat = CONSTANTS.FORMAT_VALUES.VIDEO;
		}
		return this;
	};
	
	
	// This function is used to update the bid in case of video bid
	// this should only be called if bid is video so that there is no discrepancy in tracker and logger for bid Id
	Bid.prototype.updateBidId = function(slotID){
		if(window.PWT.bidMap[slotID] && window.PWT.bidMap[slotID].adapters && Object.keys(window.PWT.bidMap[slotID].adapters).length>0){
			var bidId = window.PWT.bidMap[slotID].adapters[this.adapterID].bids[Object.keys(window.PWT.bidMap[slotID].adapters[this.adapterID].bids)[0]].bidID;
			if(bidId && this.adFormat == CONSTANTS.FORMAT_VALUES.VIDEO){
				this.bidID = bidId;
			}
		}
		else {
			UTIL.logWarning("Error in Updating BidId. It might be possible singleImpressionEnabled is false");
			console.warn("Setup for video might not be correct. Try setting up Optimize MultiSize AdSlot to true."); // eslint-disable-line no-console
		}
		return this;
	};
	
	/* start-test-block */
	module.exports.Bid = Bid;
	/* end-test-block */
	
	
	exports.createBid = function(adapterID, kgpv){
		return new Bid(adapterID, kgpv);
	};
	
	//todo:
	// add validations


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var CONFIG = __webpack_require__(2);
	var CONSTANTS = __webpack_require__(4);
	var util = __webpack_require__(1);
	var GDPR = __webpack_require__(7);
	var bmEntry = __webpack_require__(8);
	
	var refThis = this;
	
	function createBidEntry(divID){ // TDD, i/o : done
		/* istanbul ignore else */
		if(! util.isOwnProperty(window.PWT.bidMap, divID) ){
			window.PWT.bidMap[divID] = bmEntry.createBMEntry(divID);
		}
	}
	
	/* start-test-block */
	exports.createBidEntry = createBidEntry;
	/* end-test-block */
	
	exports.setSizes = function(divID, slotSizes){ // TDD, i/o : done
		refThis.createBidEntry(divID);
		window.PWT.bidMap[divID].setSizes(slotSizes);
	};
	
	exports.setCallInitTime = function(divID, adapterID){ // TDD, i/o : done
		refThis.createBidEntry(divID);
		window.PWT.bidMap[divID].setAdapterEntry(adapterID);
	};
	
	exports.setAllPossibleBidsReceived = function(divID){
		window.PWT.bidMap[divID].setAllPossibleBidsReceived();
	};
	
	exports.setBidFromBidder = function(divID, bidDetails){ // TDD done
	
		var bidderID = bidDetails.getAdapterID();
		var bidID = bidDetails.getBidID();
		var bidMapEntry = window.PWT.bidMap[divID];
		/* istanbul ignore else */
		if(!util.isOwnProperty(window.PWT.bidMap, divID)){
			util.logWarning("BidManager is not expecting bid for "+ divID +", from " + bidderID);
			return;
		}
	
		var isPostTimeout = (bidMapEntry.getCreationTime()+CONFIG.getTimeout()) < bidDetails.getReceivedTime() ? true : false,
			latency = bidDetails.getReceivedTime() - bidMapEntry.getCreationTime();
	
		refThis.createBidEntry(divID);
	
		util.log("BdManagerSetBid: divID: "+divID+", bidderID: "+bidderID+", ecpm: "+bidDetails.getGrossEcpm() + ", size: " + bidDetails.getWidth()+"x"+bidDetails.getHeight() + ", postTimeout: "+isPostTimeout + ", defaultBid: " + bidDetails.getDefaultBidStatus());
		/* istanbul ignore else */
		if(isPostTimeout === true /*&& !bidDetails.isServerSide*/){
			bidDetails.setPostTimeoutStatus();
		}
	
		var lastBidID = bidMapEntry.getLastBidIDForAdapter(bidderID);
		if(lastBidID != ""){
	
			var lastBid = bidMapEntry.getBid(bidderID, lastBidID), //todo: what if the lastBid is null
				lastBidWasDefaultBid = lastBid.getDefaultBidStatus() === 1
				;
	
			if( lastBidWasDefaultBid || !isPostTimeout){
				/* istanbul ignore else */
				if(lastBidWasDefaultBid){
					util.log(CONSTANTS.MESSAGES.M23 + bidderID);
				}
	
				if( lastBidWasDefaultBid || lastBid.getNetEcpm() < bidDetails.getNetEcpm() ){
					util.log(CONSTANTS.MESSAGES.M12+lastBid.getNetEcpm()+CONSTANTS.MESSAGES.M13+bidDetails.getNetEcpm()+CONSTANTS.MESSAGES.M14 + bidderID);
					refThis.storeBidInBidMap(divID, bidderID, bidDetails, latency);
				}else{
					util.log(CONSTANTS.MESSAGES.M12+lastBid.getNetEcpm()+CONSTANTS.MESSAGES.M15+bidDetails.getNetEcpm()+CONSTANTS.MESSAGES.M16 +  bidderID);
				}
			}else{
				util.log(CONSTANTS.MESSAGES.M17);
			}
		}else{
			util.log(CONSTANTS.MESSAGES.M18 + bidderID);
			refThis.storeBidInBidMap(divID, bidderID, bidDetails, latency);
		}
		if (isPostTimeout) {
	      //explicitly trigger user syncs since its a post timeout bid
	      setTimeout(window[CONSTANTS.COMMON.PREBID_NAMESPACE].triggerUserSyncs, 10);
	    }
	};
	
	function storeBidInBidMap(slotID, adapterID, theBid, latency){ // TDD, i/o : done
	
		// Adding a hook for publishers to modify the bid we have to store
		// we should not call the hook for defaultbids and post-timeout bids
		// Here slotID, adapterID, and latency are read-only and theBid can be modified
		// if(theBid.getDefaultBidStatus() === 0 && theBid.getPostTimeoutStatus() === false){
		// 	util.handleHook(CONSTANTS.HOOKS.BID_RECEIVED, [slotID, adapterID, theBid, latency]);
		// }
	
		window.PWT.bidMap[slotID].setNewBid(adapterID, theBid);
		window.PWT.bidIdMap[theBid.getBidID()] = {
			s: slotID,
			a: adapterID
		};
	
		/* istanbul ignore else */
		if(theBid.getDefaultBidStatus() === 0 && theBid.adapterID !== "pubmaticServer"){
			util.vLogInfo(slotID, {
				type: "bid",
				bidder: adapterID + (CONFIG.getBidPassThroughStatus(adapterID) !== 0 ? '(Passthrough)' : ''),
				bidDetails: theBid,
				latency: latency,
				s2s: CONFIG.isServerSideAdapter(adapterID),
				adServerCurrency: util.getCurrencyToDisplay()
			});
		}
	}
	
	/* start-test-block */
	exports.storeBidInBidMap = storeBidInBidMap;
	/* end-test-block */
	
	exports.resetBid = function(divID, impressionID){ // TDD, i/o : done
		util.vLogInfo(divID, {type: "hr"});
		delete window.PWT.bidMap[divID];
		refThis.createBidEntry(divID);
		window.PWT.bidMap[divID].setImpressionID(impressionID);
	};
	
	function createMetaDataKey(pattern, bmEntry, keyValuePairs){
		var output = "",
			validBidCount = 0,
			partnerCount = 0,
			macros = CONSTANTS.METADATA_MACROS,
			macroRegexFlag = "g";
	
			util.forEachOnObject(bmEntry.adapters, function(adapterID, adapterEntry) {
	        if (adapterEntry.getLastBidID() != "") {
						// If pubmaticServerBidAdapter then don't increase partnerCount
						(adapterID !== "pubmaticServer") && partnerCount++;
						util.forEachOnObject(adapterEntry.bids, function(bidID, theBid) {
					// Description-> adapterID == "pubmatic" && theBid.netEcpm == 0 this check is put because from pubmaticBidAdapter in prebid we are
					// passing zero bid when there are no bid under timout for latency reports and this caused issue to have zero bids in pwtm key
					// so put this check which will not log zero bids for pubmatic. Note : From prebid 1.x onwards we do not get zero bids in case of no bids.
					if(theBid.getDefaultBidStatus() == 1 || theBid.getPostTimeoutStatus() == 1 || theBid.getGrossEcpm() == 0){
	        			return;
	        		}
			        validBidCount++;
			        output += replaceMetaDataMacros(pattern, theBid);
	        	});
	        }
	    });
	
			if(output.length == 0){
	    	output = pattern;
	    }
	    output = output.replace(new RegExp(macros.BID_COUNT, macroRegexFlag), validBidCount);
	    output = output.replace(new RegExp(macros.PARTNER_COUNT, macroRegexFlag), partnerCount);
	    keyValuePairs[CONSTANTS.WRAPPER_TARGETING_KEYS.META_DATA] = encodeURIComponent(output);
	}
	
	/* start-test-block */
	exports.createMetaDataKey = createMetaDataKey;
	/* end-test-block */
	
	function replaceMetaDataMacros(pattern, theBid){
		var macros = CONSTANTS.METADATA_MACROS,
			macroRegexFlag = "g"
		;
		return pattern
			.replace(new RegExp(macros.PARTNER, macroRegexFlag), theBid.getAdapterID())
			.replace(new RegExp(macros.WIDTH, macroRegexFlag), theBid.getWidth())
			.replace(new RegExp(macros.HEIGHT, macroRegexFlag), theBid.getHeight())
			.replace(new RegExp(macros.GROSS_ECPM, macroRegexFlag), theBid.getGrossEcpm())
			.replace(new RegExp(macros.NET_ECPM, macroRegexFlag), theBid.getNetEcpm());
	}
	/* start-test-block */
	exports.replaceMetaDataMacros = replaceMetaDataMacros;
	/* end-test-block */
	
	
	function auctionBids(bmEntry) { // TDD, i/o : done
	    var winningBid = null,
	        keyValuePairs = {};
	
	    util.forEachOnObject(bmEntry.adapters, function(adapterID, adapterEntry) {
	        var obj = refThis.auctionBidsCallBack(adapterID, adapterEntry, keyValuePairs, winningBid);
	        winningBid  = obj.winningBid;
	        keyValuePairs = obj.keyValuePairs;
	    });
	
	    if(CONFIG.getMataDataPattern() !== null){
	    	createMetaDataKey(CONFIG.getMataDataPattern(), bmEntry, keyValuePairs);
	    }	
	    return {
	        wb: winningBid,
	        kvp: keyValuePairs
	    };
	}
	
	/* start-test-block */
	exports.auctionBids = auctionBids;
	/* end-test-block */
	
	function updateNativeTargtingKeys(keyValuePairs) {
		for(var key in keyValuePairs) {
			if (key.indexOf("native") >= 0 && key.split("_").length === 3) {
				delete keyValuePairs[key];
			}
		}
	}
	
	/* start-test-block */
	exports.updateNativeTargtingKeys = updateNativeTargtingKeys;
	/* end-test-block */
	
	
	function auctionBidsCallBack(adapterID, adapterEntry, keyValuePairs, winningBid) { // TDD, i/o : done
		var refThis = this;
	    if (adapterEntry.getLastBidID() != "") {
	        util.forEachOnObject(adapterEntry.bids, function(bidID, theBid) {
	            // do not consider post-timeout bids
	            /* istanbul ignore else */
	            if (theBid.getPostTimeoutStatus() === true) {
	                return { winningBid: winningBid , keyValuePairs: keyValuePairs };
	            }
	
	            /* istanbul ignore else */
				if(theBid.getDefaultBidStatus() !== 1 && CONFIG.getSendAllBidsStatus() == 1){
					theBid.setSendAllBidsKeys();
				}
	
				if (winningBid !== null ) {
					if (winningBid.getNetEcpm() < theBid.getNetEcpm()) {
						// i.e. the current bid is the winning bid, so remove the native keys from keyValuePairs
						refThis.updateNativeTargtingKeys(keyValuePairs);
					} else {
						// i.e. the current bid is not the winning bid, so remove the native keys from theBid.keyValuePairs
						var bidKeyValuePairs = theBid.getKeyValuePairs();
						refThis.updateNativeTargtingKeys(bidKeyValuePairs);
						theBid.keyValuePairs = bidKeyValuePairs;
					}
				}
	            util.copyKeyValueObject(keyValuePairs, theBid.getKeyValuePairs());
	
	            /* istanbul ignore else */
	            if (CONFIG.getBidPassThroughStatus(adapterID) !== 0) {
	                return { winningBid: winningBid , keyValuePairs: keyValuePairs };
	            }
	
	            if (winningBid == null) {
	                winningBid = theBid;
	            } else if (winningBid.getNetEcpm() < theBid.getNetEcpm()) {
	                winningBid = theBid;
	            }
			});
	        return { winningBid: winningBid , keyValuePairs: keyValuePairs };
	    } else {
	    	return { winningBid: winningBid , keyValuePairs: keyValuePairs };
	    }
	}
	
	/* start-test-block */
	exports.auctionBidsCallBack = auctionBidsCallBack;
	/* end-test-block */
	
	exports.getBid = function(divID){ // TDD, i/o : done
	
		var winningBid = null;
		var keyValuePairs = null;
		/* istanbul ignore else */
		if( util.isOwnProperty(window.PWT.bidMap, divID) ){
			var data = refThis.auctionBids(window.PWT.bidMap[divID]);
			winningBid = data.wb;
			keyValuePairs = data.kvp;
	
			window.PWT.bidMap[divID].setAnalyticEnabled();//Analytics Enabled
	
			if(winningBid && winningBid.getNetEcpm() > 0){
				winningBid.setStatus(1);
				winningBid.setWinningBidStatus();
				util.vLogInfo(divID, {
					type: "win-bid",
					bidDetails: winningBid,
					adServerCurrency: util.getCurrencyToDisplay()
				});
			}else{
				util.vLogInfo(divID, {
					type: "win-bid-fail",
				});
			}
		}
	
		return {wb: winningBid, kvp: keyValuePairs};
	};
	
	exports.getBidById = function(bidID) { // TDD, i/o : done
		/* istanbul ignore else */
	    if (!util.isOwnProperty(window.PWT.bidIdMap, bidID)) {
	        util.log(CONSTANTS.MESSAGES.M25 + bidID);
	        return null;
	    }
	
	    var divID = window.PWT.bidIdMap[bidID].s;
	    var adapterID = window.PWT.bidIdMap[bidID].a;
	
	    /* istanbul ignore else */
	    if (util.isOwnProperty(window.PWT.bidMap, divID)) {
	        util.log("BidID: " + bidID + ", DivID: " + divID + CONSTANTS.MESSAGES.M19 + adapterID);
	        var theBid = window.PWT.bidMap[divID].getBid(adapterID, bidID);
	        /* istanbul ignore else */
	        if (theBid == null) {
	            return null;
	        }
	
	        return {
	            bid: theBid,
	            slotid: divID
	        };
	    }
	
	    util.log(CONSTANTS.MESSAGES.M25 + bidID);
	    return null;
	};
	
	
	exports.displayCreative = function(theDocument, bidID){ // TDD, i/o : done
		var bidDetails = refThis.getBidById(bidID);
		/* istanbul ignore else */
		if(bidDetails){
			var theBid = bidDetails.bid,
				divID = bidDetails.slotid
			;
			util.displayCreative(theDocument, theBid);
			util.vLogInfo(divID, {type: 'disp', adapter: theBid.getAdapterID()});
			refThis.executeMonetizationPixel(divID, theBid);
		}
	};
	
	exports.executeAnalyticsPixel = function(){ // TDD, i/o : done
		var outputObj = {
				s: []
			},
			pubId = CONFIG.getPublisherId(),
			// gdprData = GDPR.getUserConsentDataFromLS(),
			// consentString = "",
			pixelURL = CONFIG.getAnalyticsPixelURL(),
			impressionIDMap = {} // impID => slots[]
			;
		/* istanbul ignore else */
		if(!pixelURL){
			return;
		}
	
		pixelURL = CONSTANTS.COMMON.PROTOCOL + pixelURL + "pubid=" + pubId;
	
		outputObj[CONSTANTS.CONFIG.PUBLISHER_ID] = CONFIG.getPublisherId();
		outputObj[CONSTANTS.LOGGER_PIXEL_PARAMS.TIMEOUT] = ""+CONFIG.getTimeout();
		outputObj[CONSTANTS.LOGGER_PIXEL_PARAMS.PAGE_URL] = window.decodeURIComponent(util.metaInfo.pageURL);
		outputObj[CONSTANTS.LOGGER_PIXEL_PARAMS.PAGE_DOMAIN] = util.metaInfo.pageDomain;
		outputObj[CONSTANTS.LOGGER_PIXEL_PARAMS.TIMESTAMP] = util.getCurrentTimestamp();
		outputObj[CONSTANTS.CONFIG.PROFILE_ID] = CONFIG.getProfileID();
		outputObj[CONSTANTS.CONFIG.PROFILE_VERSION_ID] = CONFIG.getProfileDisplayVersionID();
	
		// As discussed we won't be seding gdpr data to logger
		// if (CONFIG.getGdpr()) {
		// 	consentString = gdprData && gdprData.c ? encodeURIComponent(gdprData.c) : "";
	
		// 	outputObj[CONSTANTS.CONFIG.GDPR_CONSENT] = gdprData && gdprData.g;
		// 	outputObj[CONSTANTS.CONFIG.CONSENT_STRING] = consentString;
	
		// 	pixelURL += "&gdEn=" + (CONFIG.getGdpr() ? 1 : 0);
		// }
	
		util.forEachOnObject(window.PWT.bidMap, function (slotID, bmEntry) {
			refThis.analyticalPixelCallback(slotID, bmEntry, impressionIDMap);
		});
		util.forEachOnObject(impressionIDMap, function(impressionID, slots){ /* istanbul ignore next */
			/* istanbul ignore else */
			if(slots.length > 0){
				outputObj.s = slots;
				outputObj[CONSTANTS.COMMON.IMPRESSION_ID] = window.encodeURIComponent(impressionID);
				outputObj.psl = slots.psl;
				outputObj.dvc = { "plt": util.getDevicePlatform()}
				// (new window.Image()).src = pixelURL + "&json=" + window.encodeURIComponent(JSON.stringify(outputObj));
				util.ajaxRequest(pixelURL, function(){}, "json=" + window.encodeURIComponent(JSON.stringify(outputObj)), {
					contentType : "application/x-www-form-urlencoded", // as per https://inside.pubmatic.com:8443/confluence/pages/viewpage.action?spaceKey=Products&title=POST+support+for+logger+in+Wrapper-tracker
					withCredentials : true
				});
			}
		});
	};
	
	exports.executeMonetizationPixel = function(slotID, theBid){ // TDD, i/o : done
		var pixelURL = util.generateMonetizationPixel(slotID,theBid);
		if(!pixelURL){
			return;
		}
		refThis.setImageSrcToPixelURL(pixelURL);
	};
	
	function analyticalPixelCallback(slotID, bmEntry, impressionIDMap) { // TDD, i/o : done
		var startTime = bmEntry.getCreationTime() || 0;
		var pslTime = undefined;
		var impressionID = bmEntry.getImpressionID();
		const isAnalytics = true; // this flag is required to get grossCpm and netCpm in dollars instead of adserver currency
	    /* istanbul ignore else */
	    if (bmEntry.getAnalyticEnabledStatus() && !bmEntry.getExpiredStatus()) {
	        var slotObject = {
	            "sn": slotID,
	            "sz": bmEntry.getSizes(),
	            "ps": []
	        };
	
	        bmEntry.setExpired();
	        impressionIDMap[impressionID] = impressionIDMap[impressionID] || [];
	
	        util.forEachOnObject(bmEntry.adapters, function(adapterID, adapterEntry) {
	        	/* istanbul ignore else */
	            if (CONFIG.getBidPassThroughStatus(adapterID) == 1) {
	                return;
	            }
	
				util.forEachOnObject(adapterEntry.bids, function(bidID, theBid) {
					var endTime = theBid.getReceivedTime();
					if (adapterID === "pubmaticServer") {
						if ((util.isOwnProperty(window.PWT.owLatency, impressionID)) &&
							(util.isOwnProperty(window.PWT.owLatency[impressionID], "startTime")) &&
								(util.isOwnProperty(window.PWT.owLatency[impressionID], "endTime"))) {
							pslTime = (window.PWT.owLatency[impressionID].endTime - window.PWT.owLatency[impressionID].startTime);
						} else {
							pslTime = 0;
							util.log("Logging pubmaticServer latency as 0 for impressionID: " + impressionID);
						}
						util.log("PSL logging: time logged for id " +impressionID+ " is " + pslTime);
						return;
					}
	
					if(CONFIG.getAdapterMaskBidsStatus(adapterID) == 1){
						if(theBid.getWinningBidStatus() === false){
							return;
						}
					}
					/* if serverside adapter and
	                     db == 0 and
	                     getServerSideResponseTime returns -1, it means that server responded with error code 1/2/6
	                     hence do not add entry in logger.
	                     keeping the check for responseTime on -1 since there could be a case where:
							ss status = 1, db status = 0, and responseTime is 0, but error code is 4, i,e. no bid. And for error code 4,
							we want to log the data not skip it.
	                  */
		            if (theBid.getServerSideStatus()) {
		              if (theBid.getDefaultBidStatus() === -1 &&
		                theBid.getServerSideResponseTime() === -1) {
		                return;
		              }
					}
					// Logic : if adapter is pubmatic and bid falls under two condition :
					/**
					 *  1.timeout zero bids
					 *  2.no response from translator
					 * Then we don't log it for pubmatic
					 * Reason : Logging timeout zero bids causing reports to show more zero in comparision to other bidders
					 * Originally we started logging this for latency purposes.
					 * Future Scope : Remove below check to log with appt. value(s)
					*/
					/*istanbul ignore else*/
					if( (adapterID === "pubmatic" || adapterID === "pubmatic2") && (theBid.getDefaultBidStatus() ||  (theBid.getPostTimeoutStatus() && theBid.getGrossEcpm(isAnalytics) == 0))){
						return;
					}
					//todo: take all these key names from constants
	                slotObject["ps"].push({
	                    "pn": adapterID,
	                    "bidid": bidID,
	                    "db": theBid.getDefaultBidStatus(),
	                    "kgpv": theBid.getKGPV(),
	                    "kgpsv": theBid.getKGPV(true),
	                    "psz": theBid.getWidth() + "x" + theBid.getHeight(),
	                    "eg": theBid.getGrossEcpm(isAnalytics),
	                    "en": theBid.getNetEcpm(isAnalytics),
	                    "di": theBid.getDealID(),
	                    "dc": theBid.getDealChannel(),
	                    "l1": theBid.getServerSideStatus() ? theBid.getServerSideResponseTime() : (endTime - startTime),
	                    "l2": 0,
						"ss": theBid.getServerSideStatus(),
	                    "t": theBid.getPostTimeoutStatus() === false ? 0 : 1,
	                    "wb": theBid.getWinningBidStatus() === true ? 1 : 0,
						"mi": theBid.getServerSideStatus() ? theBid.getMi() : undefined,
						"af": theBid.getAdFormat(),
						"ocpm": CONFIG.getAdServerCurrency() ? theBid.getOriginalCpm() : theBid.getGrossEcpm(),
						"ocry": CONFIG.getAdServerCurrency() ? theBid.getOriginalCurrency() : CONSTANTS.COMMON.ANALYTICS_CURRENCY,
					});
	            })
	        });
	
	        impressionIDMap[impressionID].push(slotObject);
			if (pslTime !== undefined) {
				impressionIDMap[impressionID].psl = pslTime;
			}
	    }
	}
	
	/* start-test-block */
	exports.analyticalPixelCallback = analyticalPixelCallback;
	/* end-test-block */
	
	
	
	/**
	 * function which takes url and creates an image and executes them
	 * used to execute trackers
	 * @param {*} pixelURL
	 * @param {*} useProtocol
	 * @returns
	 */
	exports.setImageSrcToPixelURL = function (pixelURL, useProtocol) { // TDD, i/o : done
		var img = new window.Image();
		if(useProtocol != undefined && !useProtocol){
			img.src = pixelURL;
			return;
		}
		if(String(pixelURL).trim().substring(0,8) != CONSTANTS.COMMON.PROTOCOL){
			pixelURL = CONSTANTS.COMMON.PROTOCOL + pixelURL;
		}
		img.src = pixelURL;
	};
	
	
	exports.getAllPartnersBidStatuses = function (bidMaps, divIds) {
		var status = true;
	
		util.forEachOnArray(divIds, function (key, divId) {
			// OLD APPROACH: check if we have got bids per bidder for each slot
			// bidMaps[divId] && util.forEachOnObject(bidMaps[divId].adapters, function (adapterID, adapter) {
			// 	util.forEachOnObject(adapter.bids, function (bidId, theBid) {
			// 		status = status && (theBid.getDefaultBidStatus() === 0);
			// 	});
			// });
			// NEW APPROACH: check allPossibleBidsReceived flag which is set when pbjs.requestBids->bidsBackHandler is executed
			if(bidMaps[divId]){
				status = status && (bidMaps[divId].hasAllPossibleBidsReceived() === true);
			}
		});
		return status;
	};
	
	
	/**
	 * This function is used to execute trackers on event
	 * in case of native. On click of native create element
	 * @param {*} event
	 */
	exports.loadTrackers = function(event){
		var bidId = util.getBidFromEvent(event);
		window.parent.postMessage(
			JSON.stringify({
				pwt_type: "3",
				pwt_bidID: bidId,
				pwt_origin: CONSTANTS.COMMON.PROTOCOL + window.location.hostname,
				pwt_action:"click"
			}),
			"*"
		);
	};
	
	/**
	 * function takes bidID and post a message to parent pwt.js to execute monetization pixels.
	 * @param {*} bidID
	 */
	exports.executeTracker = function(bidID){
		window.parent.postMessage(
			JSON.stringify({
				pwt_type: "3",
				pwt_bidID: bidID,
				pwt_origin: CONSTANTS.COMMON.PROTOCOL + window.location.hostname,
				pwt_action:"imptrackers"
			}),
			"*"
		);
	};
	
	/**
	 * based on action it executes either the clickTrackers or
	 * impressionTrackers and javascriptTrackers.
	 * Javascript trackers is a valid html, urls already wrapped in script tagsand its guidelines can be found at
	 * iab spec document.
	 * @param {*} bidDetails
	 * @param {*} action
	 */
	exports.fireTracker = function(bidDetails, action) {
		var trackers;
	
		if (action === "click") {
			trackers = bidDetails["native"] && bidDetails["native"].clickTrackers;
		} else if(action === "imptrackers") {
			trackers = bidDetails["native"] && bidDetails["native"].impressionTrackers;
			if (bidDetails['native'] && bidDetails['native'].javascriptTrackers) {
				var iframe = util.createInvisibleIframe();
				/* istanbul ignore else */
				if(!iframe){
					throw {message: 'Failed to create invisible frame for native javascript trackers'};
				}
				/* istanbul ignore else */
				if(!iframe.contentWindow){
					throw {message: 'Unable to access frame window for native javascript trackers'};
				}
				window.document.body.appendChild(iframe);
				iframe.contentWindow.document.open();
				iframe.contentWindow.document.write(bidDetails['native'].javascriptTrackers);
				iframe.contentWindow.document.close();
			}
		}
		(trackers || []).forEach(function(url){refThis.setImageSrcToPixelURL(url,false);});
	};
	
	
	// this function generates all satndard key-value pairs for a given bid and setup, set these key-value pairs in an object
	// todo: write unit test cases
	exports.setStandardKeys = function(winningBid, keyValuePairs){
		if (winningBid) {
	        keyValuePairs[ CONSTANTS.WRAPPER_TARGETING_KEYS.BID_ID ] = winningBid.getBidID();
	        keyValuePairs[ CONSTANTS.WRAPPER_TARGETING_KEYS.BID_STATUS ] = winningBid.getStatus();
	        keyValuePairs[ CONSTANTS.WRAPPER_TARGETING_KEYS.BID_ECPM ] = winningBid.getNetEcpm().toFixed(CONSTANTS.COMMON.BID_PRECISION);
	        var dealID = winningBid.getDealID();
	        if(dealID){
	            keyValuePairs[ CONSTANTS.WRAPPER_TARGETING_KEYS.BID_DEAL_ID ] = dealID;
	        }
	        keyValuePairs[ CONSTANTS.WRAPPER_TARGETING_KEYS.BID_ADAPTER_ID ] = winningBid.getAdapterID();
	        keyValuePairs[ CONSTANTS.WRAPPER_TARGETING_KEYS.PUBLISHER_ID ] = CONFIG.getPublisherId();
	        keyValuePairs[ CONSTANTS.WRAPPER_TARGETING_KEYS.PROFILE_ID ] = CONFIG.getProfileID();
	        keyValuePairs[ CONSTANTS.WRAPPER_TARGETING_KEYS.PROFILE_VERSION_ID ] = CONFIG.getProfileDisplayVersionID();
	        keyValuePairs[ CONSTANTS.WRAPPER_TARGETING_KEYS.BID_SIZE ] = winningBid.width + 'x' + winningBid.height;
	        keyValuePairs[ CONSTANTS.WRAPPER_TARGETING_KEYS.PLATFORM_KEY ] = winningBid.getAdFormat() == CONSTANTS.FORMAT_VALUES.VIDEO ? CONSTANTS.PLATFORM_VALUES.VIDEO : (winningBid.getNative() ? CONSTANTS.PLATFORM_VALUES.NATIVE : CONSTANTS.PLATFORM_VALUES.DISPLAY);
			if(winningBid.getAdFormat() == CONSTANTS.FORMAT_VALUES.VIDEO){
				keyValuePairs[ CONSTANTS.WRAPPER_TARGETING_KEYS.CACHE_PATH ] = CONSTANTS.CONFIG.CACHE_PATH;
				keyValuePairs[ CONSTANTS.WRAPPER_TARGETING_KEYS.CACHE_URL ] = CONSTANTS.CONFIG.CACHE_URL;
				keyValuePairs[ CONSTANTS.WRAPPER_TARGETING_KEYS.CACHE_ID ] = winningBid.getcacheUUID();
			}
		} else {
	    	util.logWarning('Not generating key-value pairs as invalid winningBid object passed. WinningBid: ');
	    	util.logWarning(winningBid);
	    }
	}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	var localStorageKey = "OpenWrap";
	var DUMMY_PUB_ID = 909090;
	
	// Adding util here creating cyclic dependecies between the modules so avoided it & added two util function manually
	function isA(object, testForType) {
		return toString.call(object) === "[object " + testForType + "]";
	}
	
	var isFunction = function (object) {
		return isA(object, "Function");
	};
	
	var isLocalStoreEnabled = (function () {
		try {
			return window.localStorage && isFunction(window.localStorage.getItem) && isFunction(window.localStorage.setItem);
		} catch (e) {
			return false;
		}
	})();
	
	/*
		localStorage = {
			localStorageKey : {
				pubID: {
					c: "encoded user consent"
				}
			}
		}
	*/
	
	var setConsentDataInLS = function (pubId, dataType, data, gdprApplies) {
		var pm;
	
		if (!isLocalStoreEnabled) {
			return;
		}
		try {
			pm = window.localStorage.getItem(localStorageKey);
		} catch (e) {}
		if (pm && typeof pm === "string") {
			try {
				pm = JSON.parse(pm);
			} catch (e) {
				pm = {};
			}
		} else {
			pm = {};
		}
		if (pm) {
			if (!pm.hasOwnProperty(pubId)) {
				pm[pubId] = {};
			}
			pm[pubId].t = (new Date()).getTime();
			pm[pubId][dataType] = data;
			if (dataType == "c") {
				pm[pubId]["g"] = gdprApplies ? 1 : 0;
			}
		}
		try {
			window.localStorage.setItem(localStorageKey, JSON.stringify(pm));
		} catch (e) {}
	};
	
	/* start-test-block */
	exports.setConsentDataInLS = setConsentDataInLS;
	/* end-test-block */
	
	exports.isCmpFound = function () {
		return !!window.__cmp;
	};
	
	/**
		* getUserConsentDataFromCMP() method return nothing
		* Here, We try to call get the ConsentData for vendorConsents from CMP using getConsentData() method
		* Once, We get that we will this data in Local Storage againg a dummy ID
		* If CMP is not detected in current document we try to look into upper iframe & fetch the infoa
		*/
	exports.getUserConsentDataFromCMP = function () {
		// Adding dummy pubId to store data against
		var pubId = DUMMY_PUB_ID; //CONFIG.getPublisherId();
		var callId = 0;
		var getConsentDataReq = {
			__cmp: {
				callId: "iframe:" + (++callId),
				command: "getConsentData"
			}
		};
	
		function receiveMessage(event) {
			if (event && event.data && event.data.__cmp && event.data.__cmp.result) {
				var result = event.data.__cmp.result;
	
				if (result && result.consentData) {
					/**
						*	CMP API 1.1 - result is object which includes
						*	  {
						*	     consentData: base64 string,
						*	     gdprApplies: boolean
						*	  }
						*/
					setConsentDataInLS(pubId, "c", result.consentData, result.gdprApplies);
				} else if (typeof result === "string") {
					// CMP API 1.0 - result is base64 consent string
					setConsentDataInLS(pubId, "c", result);
				}
			}
		}
	
		function callCMP() {
			window.__cmp("getConsentData", "vendorConsents", function (result) {
				if (result && result.consentData) {
					setConsentDataInLS(pubId, "c", result.consentData, result.gdprApplies);
				} else if (typeof result === "string") {
					setConsentDataInLS(pubId, "c", result);
				}
			});
		}
	
		if (window.__cmp) {
			if (typeof window.__cmp === "function") {
				callCMP();
			} else {
				setTimeout(function () {
					if (typeof window.__cmp === "function") {
						callCMP();
					}
				}, 500);
			}
		} else {
			// we may be inside an iframe and CMP may exist outside, so we"ll use postMessage to interact with CMP
			window.top.postMessage(getConsentDataReq, "*");
			window.addEventListener("message", receiveMessage);
		}
	};
	
	/**
		* getUserConsentDataFromLS() method return the object { c: "XXX", g: 0/1 }
		* Here c is Consent String We got from CMP APIs
		* & g is gdpr flag i.e. gdprApplies in terms of CMP 1.1 API
		* @return {object} { c: String, g: Number 0/1 }
		*/
	
	exports.getUserConsentDataFromLS = function () {
		// Adding dummy pubId to store data against
		var pubId = DUMMY_PUB_ID;
		var data = {c: "", g: 0};
	
		if (!isLocalStoreEnabled) {
			return data;
		}
		var pm;
	
		try {
			pm = window.localStorage.getItem(localStorageKey);
		} catch (e) {}
		if (pm && typeof pm === "string") {
			try {
				pm = JSON.parse(pm);
			} catch (e) {
				pm = {};
			}
			if (pm.hasOwnProperty(pubId)) {
				var pmRecord = pm[pubId];
	
				if (pmRecord && pmRecord.c && pmRecord.t) {
					// check timestamp of data and current; if older than a day do not use it
					if (pmRecord.t && parseInt(pmRecord.t, 10) > ((new Date()).getTime() - (24 * 60 * 60 * 1000))) {
						data.c = pmRecord.c;
						data.g = pmRecord.g;
					}
				}
			}
		}
		return data;
	};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var CONSTANTS = __webpack_require__(4);
	var util = __webpack_require__(1);
	var AdapterEntry = __webpack_require__(9).AdapterEntry;
	
	function BMEntry(name){
		this.name = name;
		this.sizes = [];
		this.adapters = {};
		this.creationTime = util.getCurrentTimestampInMs();
		this.impressionID = "";
		this.analyticsEnabled = false;
		this.expired = false;
		this.allPossibleBidsReceived = false; // Boolean: this flag will be set to true when Prebid has received all possible bids and Prebid has executed "bidsBackHandler" of pbjs.requestBids
	}
	
	BMEntry.prototype.setExpired = function(){
		this.expired = true;
		return this;
	};
	
	BMEntry.prototype.getExpiredStatus = function(){
		return this.expired;
	};
	
	BMEntry.prototype.setAnalyticEnabled = function(){
		this.analyticsEnabled = true;
		return this;
	};
	
	BMEntry.prototype.getAnalyticEnabledStatus = function(){
		return this.analyticsEnabled;
	};
	
	BMEntry.prototype.setNewBid = function(adapterID, theBid){
		/* istanbul ignore else */
		if(!util.isOwnProperty(this.adapters, adapterID)){
			/* istanbul ignore next */
			this.adapters[adapterID] = new AdapterEntry(adapterID);
		}
		/* istanbul ignore next */
		this.adapters[adapterID].setNewBid(theBid);
	};
	
	BMEntry.prototype.getBid = function(adapterID, bidID){
		/* istanbul ignore else */
		if(util.isOwnProperty(this.adapters, adapterID)){
			return this.adapters[adapterID].getBid(bidID);
		}
	};
	
	BMEntry.prototype.getName = function(){
		return this.name;
	};
	
	BMEntry.prototype.getCreationTime = function(){
		return this.creationTime;
	};
	
	BMEntry.prototype.setImpressionID = function(value){
		this.impressionID = value;
		return this;
	};
	
	BMEntry.prototype.getImpressionID = function(){
		return this.impressionID;
	};
	
	BMEntry.prototype.setSizes = function(sizes){
		this.sizes = sizes;
		return this;
	};
	
	BMEntry.prototype.getSizes = function(){
		return this.sizes;
	};
	
	BMEntry.prototype.setAdapterEntry = function(adapterID){
		/* istanbul ignore else */
		if(!util.isOwnProperty(this.adapters, adapterID)){
			this.adapters[adapterID] = new AdapterEntry(adapterID);
			util.log(CONSTANTS.MESSAGES.M4+this.name + " "+adapterID+" "+this.adapters[adapterID].getCallInitiatedTime());
		}
		return this;
	};
	
	BMEntry.prototype.getLastBidIDForAdapter = function(adapterID){
		/* istanbul ignore else */
		if(util.isOwnProperty(this.adapters, adapterID)){
			return this.adapters[adapterID].getLastBidID();
		}
		return "";
	};
	
	BMEntry.prototype.setAllPossibleBidsReceived = function(){
		this.allPossibleBidsReceived = true;
		return this;
	};
	
	BMEntry.prototype.hasAllPossibleBidsReceived = function(){
		return this.allPossibleBidsReceived;
	};
	
	
	/* start-test-block */
	module.exports.BMEntry = BMEntry;
	/* end-test-block */
	
	exports.createBMEntry = function(name){
		return new BMEntry(name);
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var util = __webpack_require__(1);
	
	function AdapterEntry(adapterID){
		this.adapterID = adapterID;
		this.callInitiatedTime = util.getCurrentTimestampInMs();
		this.bids = {};
		this.lastBidID = "";
	}
	
	AdapterEntry.prototype.getCallInitiatedTime = function(){
		return this.callInitiatedTime;
	};
	
	AdapterEntry.prototype.getLastBidID = function(){
		return this.lastBidID;
	};
	
	AdapterEntry.prototype.getBid = function(bidID){
		/* istanbul ignore else */
		if(util.isOwnProperty(this.bids, bidID)){
			return this.bids[ bidID ];
		}
		return null;
	};
	
	AdapterEntry.prototype.setNewBid = function(theBid){
		delete this.bids[this.lastBidID];
		var bidID = theBid.getBidID();
		this.bids[bidID] = theBid;
		this.lastBidID = bidID;
	}
	
	module.exports.AdapterEntry =  AdapterEntry;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var CONFIG = __webpack_require__(2);
	var CONSTANTS = __webpack_require__(4);
	var util = __webpack_require__(1);
	var bidManager = __webpack_require__(6);
	var GDPR = __webpack_require__(7);
	var adapterManager = __webpack_require__(11);
	var SLOT = __webpack_require__(13);
	
	//ToDo: add a functionality / API to remove extra added wrpper keys
	var wrapperTargetingKeys = {}; // key is div id
	/* start-test-block */
	exports.wrapperTargetingKeys = wrapperTargetingKeys;
	/* end-test-block */
	
	//ToDo: is this required in first phase?
	var slotSizeMapping = {}; // key is div id
	/* start-test-block */
	exports.slotSizeMapping = slotSizeMapping;
	/* end-test-block */
	
	var windowReference = null;
	var refThis = this;
	
	
	function setWindowReference(win) {
		if (util.isObject(win)) {
			windowReference = win;
		}
	}
	/* start-test-block */
	exports.setWindowReference = setWindowReference;
	/* end-test-block */
	
	function getWindowReference() {
		return windowReference;
	}
	/* start-test-block */
	exports.getWindowReference = getWindowReference;
	/* end-test-block */
	
	function getAdUnitIndex(currentGoogleSlot) { // TDD, i/o : done
		var index = 0;
		try {
			var adUnitIndexString = currentGoogleSlot.getSlotId().getId().split("_");
			index = parseInt(adUnitIndexString[adUnitIndexString.length - 1]);
		} catch (ex) {} // eslint-disable-line no-empty
		return index;
	}
	/* start-test-block */
	exports.getAdUnitIndex = getAdUnitIndex;
	/* end-test-block */
	
	// ToDo: this function may not be needed
	function defineWrapperTargetingKey(key) {
		/* istanbul ignore else */
		if (!util.isObject(refThis.wrapperTargetingKeys)) {
			refThis.wrapperTargetingKeys = {};
		}
		refThis.wrapperTargetingKeys[key] = "";
	}
	
	/* start-test-block */
	exports.defineWrapperTargetingKey = defineWrapperTargetingKey;
	/* end-test-block */
	
	function defineWrapperTargetingKeys(object) {
		var output = {};
		util.forEachOnObject(object, function(key, value) {
			output[value] = "";
		});
		return output;
	}
	/* start-test-block */
	exports.defineWrapperTargetingKeys = defineWrapperTargetingKeys;
	/* end-test-block */
	
	function callJsLoadedIfRequired(win) {
		if (util.isObject(win) && util.isObject(win.PWT) && util.isFunction(win.PWT.jsLoaded)) {
			win.PWT.jsLoaded();
			return true;
		}
		return false;
	}
	/* start-test-block */
	exports.callJsLoadedIfRequired = callJsLoadedIfRequired;
	/* end-test-block */
	
	function initSafeFrameListener(theWindow) {
		if (!theWindow.PWT.safeFrameMessageListenerAdded) {
			util.addMessageEventListenerForSafeFrame(theWindow);
			theWindow.PWT.safeFrameMessageListenerAdded = true;
		}
	}
	/* start-test-block */
	exports.initSafeFrameListener = initSafeFrameListener;
	/* end-test-block */
	
	function validateAdUnitObject(anAdUnitObject) {
		if (!util.isObject(anAdUnitObject)) {
			util.logError("An AdUnitObject should be an object", anAdUnitObject);
			return false;
		}
	
		if (!util.isString(anAdUnitObject.code)) {
			util.logError("An AdUnitObject should have a property named code and it should be a string", anAdUnitObject);
			return false;
		}
	
		if (!util.isString(anAdUnitObject.divId)) {
			util.logError("An AdUnitObject should have a property named divId and it should be a string", anAdUnitObject);
			return false;
		}
	
		if (!util.isString(anAdUnitObject.adUnitId)) {
			util.logError("An AdUnitObject should have a property named adUnitId and it should be a string", anAdUnitObject);
			return false;
		}
	
		if (!util.isString(anAdUnitObject.adUnitIndex)) {
			util.logError("An AdUnitObject should have a property named adUnitIndex and it should be a string", anAdUnitObject);
			return false;
		}
	
		if (!util.isObject(anAdUnitObject.mediaTypes)) {
			util.logError("An AdUnitObject should have a property named mediaTypes and it should be an object", anAdUnitObject);
			return false;
		}
	
		if (!util.isObject(anAdUnitObject.mediaTypes.banner) && !util.isObject(anAdUnitObject.mediaTypes.native) && !util.isObject(anAdUnitObject.mediaTypes.video)) {
			util.logError("An anAdUnitObject.mediaTypes should atleast have a property named banner or native or video and it should be an object", anAdUnitObject);
			return false;
		}
	
		if (util.isObject(anAdUnitObject.mediaTypes.banner) && !util.isArray(anAdUnitObject.mediaTypes.banner.sizes)) {
			util.logError("An anAdUnitObject.mediaTypes.banner should have a property named sizes and it should be an array", anAdUnitObject);
			return false;
		}
	
		return true;
	}
	/* start-test-block */
	exports.validateAdUnitObject = validateAdUnitObject;
	/* end-test-block */
	
	function getAdSlotSizesArray(anAdUnitObject) {
		//ToDo: need to habdle fluid sizes
		// ToDo: for now supporting only banner sizes, need to support native as well
		if (anAdUnitObject && anAdUnitObject.mediaTypes){
			if(anAdUnitObject.mediaTypes.banner && util.isArray(anAdUnitObject.mediaTypes.banner.sizes)) {
				return anAdUnitObject.mediaTypes.banner.sizes;
			}
			//TODO : Confirm about the below configuration and correct if needed
			// Commenting below code to remove custom handling of sizes and will be handled using adSlot.sizes
			// Uncommenting and making behaviour same as to have player size or w and h as mandatory.
			if(anAdUnitObject.mediaTypes.video) {
				if(!util.isArray(anAdUnitObject.mediaTypes.video.playerSize) && !(anAdUnitObject.mediaTypes.video.w && anAdUnitObject.mediaTypes.video.h)){
					util.logError("For slot video playersize or w,h is not defined and may not request bids from SSP for this slot. " + JSON.stringify(anAdUnitObject));
					return [];
				}
			}
			if(anAdUnitObject.mediaTypes.native || anAdUnitObject.mediaTypes.video){
				return anAdUnitObject.sizes;
			}
			//TODO : Also handle native only configuration
		}
		return [];
	}
	/* start-test-block */
	exports.getAdSlotSizesArray = getAdSlotSizesArray;
	/* end-test-block */
	
	function findWinningBidAndGenerateTargeting(divId) {
		var data = bidManager.getBid(divId);
		var winningBid = data.wb || null;
		var keyValuePairs = data.kvp || null;
		var ignoreTheseKeys = CONSTANTS.IGNORE_PREBID_KEYS;
	
		/* istanbul ignore else*/
		if (winningBid && winningBid.getNetEcpm() > 0) {
			bidManager.setStandardKeys(winningBid, keyValuePairs);		
		}
	
		// attaching keyValuePairs from adapters
		util.forEachOnObject(keyValuePairs, function(key) {
			/* istanbul ignore else*/
			if (util.isOwnProperty(ignoreTheseKeys, key)) {
				delete keyValuePairs[key];
			}
			refThis.defineWrapperTargetingKey(key);
		});
	
		var wb = null;
		if (winningBid) {
			wb = {};
			wb.adHtml = winningBid.adHtml;
			wb.adapterID = winningBid.adapterID;
			wb.grossEcpm = winningBid.grossEcpm;
			wb.netEcpm = winningBid.netEcpm;
			wb.height = winningBid.height;
			wb.width = winningBid.width;
		}
	
		return {
			wb: wb,
			kvp: keyValuePairs
		};
	}
	
	/* start-test-block */
	exports.findWinningBidAndGenerateTargeting = findWinningBidAndGenerateTargeting;
	/* end-test-block */
	
	/*
		Input: 
			arrayOfAdUnits
				[
					anAdUnitObject
					{
						code: "some-pub-friendly-unique-name", // mandatory
						divId: "div-id-where-slot-will-render", // mandatory
						adUnitId: "ad_unit-id-from-DFP", // mandatory
						adUnitIndex: "ad-unit-index", // necessary in case of PubMatic, can be derrived by our code by simply incrementing used adUnitIds
						mediaTypes: { // mandatory
							banner: { // mandatory in first phase? or atleast one type of mediaTypes should be present
								sizes: [ [300, 250], [300, 300] ] // array of sizes
							}
						}
					}
				]
			callbackFunction
				a function that accepts response
	*/
	function customServerExposedAPI(arrayOfAdUnits, callbackFunction) {
	
		//GDPR.getUserConsentDataFromCMP(); // Commenting this as GDPR will be handled by Prebid and we won't be seding GDPR info to tracker and logger
	
		if (!util.isArray(arrayOfAdUnits)) {
			util.error("First argument to PWT.requestBids API, arrayOfAdUnits is mandatory and it should be an array.");
			callbackFunction(arrayOfAdUnits);
			return;
		}
	
		if (!util.isFunction(callbackFunction)) {
			util.error("Second argument to PWT.requestBids API, callBackFunction is mandatory and it should be a function.");
			return;
		}
	
		var qualifyingSlots = [];
		var mapOfDivToCode = {};
		var qualifyingSlotDivIds = [];
		util.forEachOnArray(arrayOfAdUnits, function(index, anAdUnitObject) {
			if (refThis.validateAdUnitObject(anAdUnitObject)) { // returns true for valid adUnit
				var dmSlotName = anAdUnitObject.code;
				var slot = SLOT.createSlot(dmSlotName);
				// IMPORTANT:: bidManager stores all data at divId level but in custom controller, divId is not mandatory.
				// so we woll set value of code to divId if divId is not present
				// also we will pass array of divId to the bidManager.getAllPartnersBidStatuses API 
				slot.setDivID(anAdUnitObject.divId || dmSlotName);
				slot.setPubAdServerObject(anAdUnitObject);
				slot.setAdUnitID(anAdUnitObject.adUnitId || "");
				slot.setAdUnitIndex(anAdUnitObject.adUnitIndex || 0);
				slot.setSizes(refThis.getAdSlotSizesArray(anAdUnitObject));
				qualifyingSlots.push(slot);
				mapOfDivToCode[slot.getDivID()] = slot.getName();
				qualifyingSlotDivIds.push(slot.getDivID());
				util.createVLogInfoPanel(slot.getDivID(), slot.getSizes());
			}
		});
	
		if (qualifyingSlots.length == 0) {
			util.error("There are no qualifyingSlots, so not calling bidders.");
			callbackFunction(arrayOfAdUnits);
			return;
		}
	
		// calling adapters
		adapterManager.callAdapters(qualifyingSlots);
	
		var posTimeoutTime = Date.now() + CONFIG.getTimeout(); // post timeout condition
		var intervalId = window.setInterval(function() {
			// todo: can we move this code to a function?
			if (bidManager.getAllPartnersBidStatuses(window.PWT.bidMap, qualifyingSlotDivIds) || Date.now() >= posTimeoutTime) {
	
				clearInterval(intervalId);
				// after some time call fire the analytics pixel
				setTimeout(function() {
					bidManager.executeAnalyticsPixel();
				}, 2000);
	
				var winningBids = {}; // object:: { code : response bid or just key value pairs }
				// we should loop on qualifyingSlotDivIds to avoid confusion if two parallel calls are fired to our PWT.requestBids 
				util.forEachOnArray(qualifyingSlotDivIds, function(index, divId) {
					var code = mapOfDivToCode[divId];
					winningBids[code] = refThis.findWinningBidAndGenerateTargeting(divId, code);
					// we need to delay the realignment as we need to do it post creative rendering :)
					// delaying by 1000ms as creative rendering may tke time
					setTimeout(util.realignVLogInfoPanel, 1000, divId);
				});
	
				// for each adUnit in arrayOfAdUnits find the winningBids, we need to return this updated arrayOfAdUnits
				util.forEachOnArray(arrayOfAdUnits, function(index, anAdUnitObject) {
					if (winningBids.hasOwnProperty(anAdUnitObject.code)) {
						anAdUnitObject.bidData = winningBids[anAdUnitObject.code];
					}
				});
	
				callbackFunction(arrayOfAdUnits);
			}
		}, 10); // check every 10 milliseconds if we have all bids or timeout has been happened.
	}
	/* start-test-block */
	exports.customServerExposedAPI = customServerExposedAPI;
	/* end-test-block */
	
	/*
		this function will generate the required config for our APIs
		Input:
			Expects an array of GoogleTagSlots
		Output:
			array of object in required format
	*/
	function generateConfForGPT(arrayOfGPTSlots) {
		var gptConfArray = [];
	
		if (!util.isArray(arrayOfGPTSlots)) {
			util.error("first argument to generateConfForGPT should be an array");
			return gptConfArray;
		}
	
		util.forEachOnArray(arrayOfGPTSlots, function(index, googleSlot) {
			var adUnitId = "";
			var adUnitIndex = "";
			var divId = "";
			var sizes = [];
			var code = "";
	
			if (util.isObject(googleSlot)) {
	
				if (util.isFunction(googleSlot.getAdUnitPath)) {
					adUnitId = googleSlot.getAdUnitPath();
				}
	
				if (util.isFunction(googleSlot.getSlotId)) {
					var slotID = googleSlot.getSlotId();
					adUnitIndex = "" + refThis.getAdUnitIndex(googleSlot);
	
					// TODO: move to GPT specific code to small functions
					/* istanbul ignore else */
					if (slotID && util.isFunction(slotID.getDomId)) {
						divId = slotID.getDomId();
						code = divId;
					}
				}
	
				if (util.isFunction(googleSlot.getSizes)) {
					/*
						The DFP API, googleSlot.getSizes(window.innerWidth, window.innerHeight) upon passing the two arguments, returns applied sizes as per size-mapping.
					 */
					util.forEachOnArray(googleSlot.getSizes(window.innerWidth, window.innerHeight), function(index, sizeObj) {
						/* istanbul ignore else  */
						if (util.isFunction(sizeObj.getWidth) && util.isFunction(sizeObj.getHeight)) {
							sizes.push([sizeObj.getWidth(), sizeObj.getHeight()]);
						} else {
							util.log(divId + ", size object does not have getWidth and getHeight method. Ignoring: ");
							util.log(sizeObj);
						}
					});
				}
			}
	
			gptConfArray.push({
				code: code,
				divId: divId,
				adUnitId: adUnitId,
				adUnitIndex: adUnitIndex,
				mediaTypes: util.getMediaTypeObject(sizes, googleSlot),
				sizes: sizes
			});
		});
	
		return gptConfArray;
	}
	/* start-test-block */
	exports.generateConfForGPT = generateConfForGPT;
	/* end-test-block */
	
	function addKeyValuePairsToGPTSlots(arrayOfAdUnits) {
		if (!util.isArray(arrayOfAdUnits)) {
			util.error("array is expected");
		}
	
		var arrayOfGPTSlots = [];
		if(util.isObject(window.googletag) && util.isFunction(window.googletag.pubads)){
			arrayOfGPTSlots = window.googletag.pubads().getSlots();	
		}
	
		var mapOfDivIdToGoogleSlot = {};
		util.forEachOnArray(arrayOfGPTSlots, function(index, googleSlot) {
			if (util.isFunction(googleSlot.getSlotId)) {
				var slotID = googleSlot.getSlotId();
				if (slotID && util.isFunction(slotID.getDomId)) {
					mapOfDivIdToGoogleSlot[slotID.getDomId()] = googleSlot;
				} else {
					util.error("slotID.getDomId is not a function");
				}
			} else {
				util.error("googleSlot.getSlotId is not a function");
			}
		});
	
		util.forEachOnArray(arrayOfAdUnits, function(index, adUnit) {
			if (util.isOwnProperty(mapOfDivIdToGoogleSlot, adUnit.divId)) {
				var googleSlot = mapOfDivIdToGoogleSlot[adUnit.divId];
				if(util.isObject(adUnit) && util.isObject(adUnit.bidData) && util.isObject(adUnit.bidData.kvp)){
					util.forEachOnObject(adUnit.bidData.kvp, function(key, value) {
						googleSlot.setTargeting(key, [value]);
					});
				}			
			} else {
				util.error("GPT-Slot not found for divId: " + adUnit.divId);
			}
		});
	}
	/* start-test-block */
	exports.addKeyValuePairsToGPTSlots = addKeyValuePairsToGPTSlots;
	/* end-test-block */
	
	function removeKeyValuePairsFromGPTSlots(arrayOfGPTSlots) {    
		//ToDo: need some fail-safe validations/checks
		/* istanbul ignore else */
		util.forEachOnArray(arrayOfGPTSlots, function(index, currentGoogleSlot){
			var targetingMap = {};
			if(util.isFunction(currentGoogleSlot.getTargetingKeys)){
				util.forEachOnArray(currentGoogleSlot.getTargetingKeys(), function(index, key) {
					targetingMap[key] = currentGoogleSlot.getTargeting(key);
				});
			}
			// now clear all targetings
			if(util.isFunction(currentGoogleSlot.clearTargeting)){
				currentGoogleSlot.clearTargeting();
			}
			// now set all settings from backup
			util.forEachOnObject(targetingMap, function(key, value) {
				if (!util.isOwnProperty(refThis.wrapperTargetingKeys, key)) {
					if(util.isFunction(currentGoogleSlot.setTargeting)){
						currentGoogleSlot.setTargeting(key, value);
					}
				}
			});
		});
	}
	
	/* start-test-block */
	exports.removeKeyValuePairsFromGPTSlots = removeKeyValuePairsFromGPTSlots;
	/* end-test-block */
	
	exports.init = function(win) {
		CONFIG.initConfig();
		if (util.isObject(win)) {
			refThis.setWindowReference(win);
			refThis.initSafeFrameListener(win);
			win.PWT.requestBids = refThis.customServerExposedAPI;
			win.PWT.generateConfForGPT = refThis.generateConfForGPT;
			win.PWT.addKeyValuePairsToGPTSlots = addKeyValuePairsToGPTSlots;
			win.PWT.removeKeyValuePairsFromGPTSlots = removeKeyValuePairsFromGPTSlots;
			refThis.wrapperTargetingKeys = refThis.defineWrapperTargetingKeys(CONSTANTS.WRAPPER_TARGETING_KEYS);
			adapterManager.registerAdapters();
			refThis.callJsLoadedIfRequired(win);
			return true;
		} else {
			return false;
		}
	};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var CONFIG = __webpack_require__(2);
	var CONSTANTS = __webpack_require__(4);
	var util = __webpack_require__(1);
	var bidManager = __webpack_require__(6);
	// todo: how we can do it optionally (include only iff required) ?
	var prebid = __webpack_require__(12);
	
	var registeredAdapters = {};
	
	/* start-test-block */
	exports.registeredAdapters = registeredAdapters;
	/* end-test-block */
	
	var refThis = this;
	
	exports.callAdapters = function(activeSlots){	
		var impressionID = util.generateUUID();
		refThis.resetSlots(activeSlots, impressionID);
		refThis.callAdapter(registeredAdapters, activeSlots, impressionID);
	};
	
	function getRandomNumberBelow100(){
		return Math.floor(Math.random()*100);
	}
	
	exports.getRandomNumberBelow100 = getRandomNumberBelow100;
	
	function callAdapter(adapters, slots, impressionID){
		util.forEachOnObject(adapters, function(adapterID, theAdapter){
			//Note: if you have any other parent-adapter like prebid, and 
			//		want to add throttling on the parent-adapters then 
			//		you will need to add throttling logic here as well
			refThis.setInitTimeForSlotsForAdapter(slots, adapterID);
			theAdapter.fB(slots, impressionID);
		});
	}
	
	/* start-test-block */
	exports.callAdapter = callAdapter;
	/* end-test-block */
	
	function resetSlots(slots, impressionID){
		util.forEachOnArray(slots, function(key, slot){
			var divID = slot.getDivID();
			bidManager.resetBid(divID, impressionID);
			bidManager.setSizes(divID, util.generateSlotNamesFromPattern(slot, "_W_x_H_"));
		});
	}
	
	/* start-test-block */
	exports.resetSlots = resetSlots;
	/* end-test-block */
	
	function throttleAdapter(randomNumber, adapterID){
		return !(randomNumber >= CONFIG.getAdapterThrottle(adapterID));
	}
	
	exports.throttleAdapter = throttleAdapter;
	
	function setInitTimeForSlotsForAdapter(slots, adapterID){
		util.forEachOnObject(slots, function(j, slot){
			bidManager.setCallInitTime(slot.getDivID(), adapterID);
		});
	}
	
	exports.setInitTimeForSlotsForAdapter = setInitTimeForSlotsForAdapter;
	
	function registerAdapter(bidAdaptor) {
		if (bidAdaptor) {
			var adapterID = bidAdaptor.ID();
			if (util.isFunction(bidAdaptor.fB)){
				refThis.registeredAdapters[adapterID] = bidAdaptor;
			} else {
				util.log(adapterID + CONSTANTS.MESSAGES.M3);
			}
		} else {
			util.log(CONSTANTS.MESSAGES.M3);
			util.log(bidAdaptor);
		}
	}
	
	/* start-test-block */
	exports.registerAdapter = registerAdapter;
	/* end-test-block */
	
	function registerAdapters(){
		refThis.registerAdapter(prebid.register());
	};
	
	
	exports.registerAdapters = registerAdapters;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		Note:
			Whenever we support a new PB adapter, we need to check if it needs actual sizes to be passed,
				if so we will need to add special handling
			PreBid does not do mandatory parameters checking
	*/
	var CONFIG = __webpack_require__(2);
	var CONSTANTS = __webpack_require__(4);
	var BID = __webpack_require__(5);
	var util = __webpack_require__(1);
	var bidManager = __webpack_require__(6);
	var adapterManager = __webpack_require__(11);
	var CONF = __webpack_require__(3);
	
	var parentAdapterID = CONSTANTS.COMMON.PARENT_ADAPTER_PREBID;
	
	var pbNameSpace = CONSTANTS.COMMON.PREBID_NAMESPACE;
	
	/* start-test-block */
	exports.parentAdapterID = parentAdapterID;
	/* end-test-block */
	var kgpvMap = {};
	
	/* start-test-block */
	exports.kgpvMap = kgpvMap;
	/* end-test-block */
	
	var refThis = this;
	var timeoutForPrebid = CONFIG.getTimeout()-50;
	var onEventAdded = false;
	var isSingleImpressionSettingEnabled = CONFIG.isSingleImpressionSettingEnabled();
	
	/* start-test-block */
	exports.isSingleImpressionSettingEnabled = isSingleImpressionSettingEnabled;
	/* end-test-block */
	
	function transformPBBidToOWBid(bid, kgpv, regexPattern){
		var rxPattern = regexPattern || bid.regexPattern || undefined;
		var theBid = BID.createBid(bid.bidderCode, kgpv);
		var pubmaticServerErrorCode = parseInt(bid.pubmaticServerErrorCode);
	
		theBid.setGrossEcpm(bid.cpm);
		theBid.setDealID(bid.dealId);
		theBid.setDealChannel(bid.dealChannel);
		theBid.setAdHtml(bid.ad || "");
		theBid.setAdUrl(bid.adUrl || "");
		theBid.setWidth(bid.width);
		theBid.setHeight(bid.height);
		theBid.setMi(bid.mi);
		if(bid.native){
			theBid.setNative(bid.native);
		}
		if(rxPattern){
			theBid.setRegexPattern(rxPattern);
		}
		if(bid.mediaType == CONSTANTS.FORMAT_VALUES.VIDEO){
			if(bid.videoCacheKey){
				theBid.setcacheUUID(bid.videoCacheKey);
			}
			theBid.updateBidId(bid.adUnitCode);
		}
		theBid.setReceivedTime(bid.responseTimestamp);
		theBid.setServerSideResponseTime(bid.serverSideResponseTime);
		// Check if currency conversion is enabled or not
		/*istanbul ignore else */
		if(CONFIG.getAdServerCurrency()){
			// if a bidder has same currency as of pbConf.currency.adServerCurrency then Prebid does not set pbBid.originalCurrency and pbBid.originalCurrency value
			// thus we need special handling
			if(!util.isOwnProperty(bid, "originalCpm")){
				bid.originalCpm = bid.cpm;
			}
			if(!util.isOwnProperty(bid, "originalCurrency")){
				bid.originalCurrency = util.getCurrencyToDisplay();
			}
			theBid.setOriginalCpm(window.parseFloat(bid.originalCpm));
			theBid.setOriginalCurrency(bid.originalCurrency);
			if(util.isFunction(bid.getCpmInNewCurrency)){
				theBid.setAnalyticsCpm(window.parseFloat(bid.getCpmInNewCurrency(CONSTANTS.COMMON.ANALYTICS_CURRENCY)));
			} else {
				theBid.setAnalyticsCpm(theBid.getGrossEcpm());
			}
		}
		/*
			errorCodes meaning:
			1 = UNMAPPED_SLOT_ERROR
			2 = MISSING_CONF_ERROR
			3 = TIMEOUT_ERROR
			4 = NO_BID_PREBID_ERROR
			5 = PARTNER_TIMEDOUT_ERROR
			6 = INVALID_CONFIGURATION_ERROR
			7 = NO_GDPR_CONSENT_ERROR
			11 = ALL_PARTNER_THROTTLED
			12 = PARTNER_THROTTLED
			500 = API_RESPONSE_ERROR
		*/
		if(pubmaticServerErrorCode === 1 || pubmaticServerErrorCode === 2 || pubmaticServerErrorCode === 6 || pubmaticServerErrorCode === 11 || pubmaticServerErrorCode === 12) {
			theBid.setDefaultBidStatus(-1);
			theBid.setWidth(0);
			theBid.setHeight(0);
		} else if (pubmaticServerErrorCode === 3 || pubmaticServerErrorCode === 4 || pubmaticServerErrorCode === 5) {
			theBid.setDefaultBidStatus(0);
			/*istanbul ignore else */
			if (theBid.isServerSide === 0) {
				theBid.setPostTimeoutStatus();
			}
		} else {
			pubmaticServerErrorCode && theBid.setDefaultBidStatus(1);
		}
	
		util.forEachOnObject(bid.adserverTargeting, function(key, value){
			if (key !== "hb_format" && key !== "hb_source") {
				theBid.setKeyValuePair(key, value);
			}
		});
		return theBid;
	}
	
	/* start-test-block */
	exports.transformPBBidToOWBid = transformPBBidToOWBid;
	/* end-test-block */
	
	// This function is used to check size for the winning kgpv and if size is different then winning then modify it
	// to have same code for logging and tracking 
	function checkAndModifySizeOfKGPVIfRequired(bid, kgpv){
		var responseObject={
			"responseKGPV" : "",
			"responseRegex": ""
		};
	
		// Logic to find out KGPV for partner for which the bid is recieved.
		// Need to check for No Bid Case.
		kgpv.kgpvs.length > 0 && kgpv.kgpvs.forEach(function(ele){
			/* istanbul ignore else */
			if(bid.bidderCode == ele.adapterID){
				responseObject.responseKGPV = ele.kgpv;
				responseObject.responseRegex = ele.regexPattern;
			}
		});
		var responseIdArray = responseObject.responseKGPV.split("@");
		var sizeIndex = 1;
		var isRegex = false;
		/* istanbul ignore else */
		if(responseIdArray &&  (responseIdArray.length == 2 || ((responseIdArray.length == 3) && (sizeIndex = 2) && (isRegex=true))) && bid.mediaType != "video"){
			var responseIdSize = responseIdArray[sizeIndex];
			var responseIndex = null;
			// Below check if ad unit index is present then ignore it
			// TODO: Confirm it needs to be ignored or not
			/* istanbul ignore else */
			if(responseIdArray[sizeIndex].indexOf(":")>0){
				responseIdSize= responseIdArray[sizeIndex].split(":")[0];
				responseIndex = responseIdArray[sizeIndex].split(":")[1];
			}
			/* istanbul ignore else */
			if(bid.getSize() && bid.getSize() != responseIdSize && (bid.getSize().toUpperCase() != "0X0")){
				// Below check is for size level mapping
				// ex. 300x250@300X250 is KGPV generated for first size but the winning size is 728x90 
				// then new KGPV will be replaced to 728x90@728X90
				/* istanbul ignore else */
				if(responseIdArray[0].toUpperCase() == responseIdSize.toUpperCase()){
					responseIdArray[0] = bid.getSize().toLowerCase();
				}
				if(isRegex){
					responseObject.responseKGPV = responseIdArray[0] + "@" + responseIdArray[1] + "@" +  bid.getSize();
				}
				else{
					responseObject.responseKGPV = responseIdArray[0] + "@" +  bid.getSize();
				}
				// Below check is to make consistent behaviour with ad unit index
				// it again appends index if it was originally present
				if(responseIndex){
					responseObject.responseKGPV = responseObject.responseKGPV + ":" + responseIndex;
				}
			}
		
		}
		return responseObject;
	}
	
	/* start-test-block */
	exports.checkAndModifySizeOfKGPVIfRequired = checkAndModifySizeOfKGPVIfRequired;
	/* end-test-block */
	
	function pbBidStreamHandler(pbBid){
		var responseID = pbBid.adUnitCode || "";
	
		// NEW APPROACH
		//todo: unit-test cases pending
		/* istanbul ignore else */
		if(util.isOwnProperty(refThis.kgpvMap, responseID)){
	
			/**Special Hack for pubmaticServer for tracker/logger kgpv */
			/* istanbul ignore else */
			if(pbBid.bidderCode === 'pubmaticServer'){
				pbBid.bidderCode = pbBid.originalBidder;
			}
	
			// If Single impression is turned on then check and modify kgpv as per bid response size
			/* istanbul ignore else */
			if(refThis.isSingleImpressionSettingEnabled){
				// Assinging kbpv after modifying and will be used for logger and tracker purposes
				// this field will be replaced everytime a bid is received with single impression feature on
				var kgpvAndRegexOfBid = refThis.checkAndModifySizeOfKGPVIfRequired(pbBid,refThis.kgpvMap[responseID]);
				refThis.kgpvMap[responseID].kgpv =kgpvAndRegexOfBid.responseKGPV;
				refThis.kgpvMap[responseID].regexPattern =kgpvAndRegexOfBid.responseRegex;
				// : Put a field Regex Pattern in KGPVMAP so that it can be passed on to the bid and to the logger
				// Something like this refThis.kgpvMap[responseID].regexPattern = pbBid.refThis.kgpvMap[responseID].regexPattern;
	
			}
	
			/*
				- special handling for serverSideEnabled
				- get the actual divId = kgpvMap[ pbBid.adUnitCode ].divID
				- now check if divID @ pbBid.bidderCode @ pbBid.width X pbBid.height exists in kgpvMap
					if yes this is new responseID
				- else check if divID @ pbBid.bidderCode exists in kgpvMap
					if yes this is new responseID
				- else do nothing, log failure
	
				Pros:
					no need of divid and kgpv to be returned in bid from prebid
						no need to add custom keys in Prebid bid object, they might standerdize it in future
			*/
	
			/* istanbul ignore else */
			if(pbBid.bidderCode && CONFIG.isServerSideAdapter(pbBid.bidderCode)){
				var divID = refThis.kgpvMap[responseID].divID;
				if(!refThis.isSingleImpressionSettingEnabled){
					var temp1 = refThis.getPBCodeWithWidthAndHeight(divID, pbBid.bidderCode, pbBid.width, pbBid.height);
					var temp2 = refThis.getPBCodeWithoutWidthAndHeight(divID, pbBid.bidderCode);
	
					if(util.isOwnProperty(refThis.kgpvMap, temp1)){
						responseID = temp1;
					}else if(util.isOwnProperty(refThis.kgpvMap, temp2)){
						responseID = temp2;
					}else{
						util.logWarning("Failed to find kgpv details for S2S-adapter:"+ pbBid.bidderCode);
						return;
					}
				}
				pbBid.ss = CONFIG.isServerSideAdapter(pbBid.bidderCode) ? 1 : 0;
			}
	
			/* istanbul ignore else */
			if(pbBid.bidderCode){
				// Adding a hook for publishers to modify the bid we have to store
				// we should NOT call the hook for defaultbids and post-timeout bids
				//			default bids handled here
				//			timeoutForPrebid check is added to avoid Hook call for post-timeout bids
				// Here slotID, adapterID, and latency are read-only and theBid can be modified
				if(pbBid.timeToRespond < timeoutForPrebid){
					util.handleHook(CONSTANTS.HOOKS.BID_RECEIVED, [refThis.kgpvMap[responseID].divID, pbBid]);
				}			
				bidManager.setBidFromBidder(
					refThis.kgpvMap[responseID].divID,
					refThis.transformPBBidToOWBid(pbBid, refThis.kgpvMap[responseID].kgpv,refThis.kgpvMap[responseID].regexPattern)
				);
			}
		}else{
			util.logWarning("Failed to find pbBid.adUnitCode in kgpvMap, pbBid.adUnitCode:"+ pbBid.adUnitCode);
		}
	}
	
	/* start-test-block */
	exports.pbBidStreamHandler = pbBidStreamHandler;
	/* end-test-block */
	
	// this function is no more used
	function handleBidResponses(bidResponses){
		for(var responseID in bidResponses){
			/* istanbul ignore else */
			if(util.isOwnProperty(bidResponses, responseID) && util.isOwnProperty(refThis.kgpvMap, responseID)){
				var bidObject = bidResponses[responseID];
				var bids = bidObject.bids || [];
	
				for(var i = 0; i<bids.length; i++){
					var bid = bids[i];
					/* istanbul ignore else */
					if(bid.bidderCode){
						bidManager.setBidFromBidder(refThis.kgpvMap[responseID].divID, transformPBBidToOWBid(bid, refThis.kgpvMap[responseID].kgpv));
					}
				}
			}
		}
	}
	
	/* start-test-block */
	exports.handleBidResponses = handleBidResponses;
	/* end-test-block */
	
	function getPBCodeWithWidthAndHeight(divID, adapterID, width, height){
		return divID + "@" + adapterID + "@" + width + "X" + height;
	}
	
	/* start-test-block */
	exports.getPBCodeWithWidthAndHeight = getPBCodeWithWidthAndHeight;
	/* end-test-block */
	
	function getPBCodeWithoutWidthAndHeight(divID, adapterID){
		return divID + "@" + adapterID;
	}
	
	/* start-test-block */
	exports.isAdUnitsCodeContainBidder = isAdUnitsCodeContainBidder;
	/* end-test-block */
	
	function isAdUnitsCodeContainBidder(adUnits, code, adapterID){
		var bidderPresent = false;
		if(util.isOwnProperty(adUnits, code)){
			adUnits[code].bids.forEach(function(bid) {
				if(bid.bidder == adapterID){
					bidderPresent = true;	
				}
			});
		}
		return bidderPresent;
	}
	
	/* start-test-block */
	exports.getPBCodeWithoutWidthAndHeight = getPBCodeWithoutWidthAndHeight;
	/* end-test-block */
	
	function generatedKeyCallback(adapterID, adUnits, adapterConfig, impressionID, generatedKey, kgpConsistsWidthAndHeight, currentSlot, keyConfig, currentWidth, currentHeight,regexPattern){
	
		var code, sizes, divID = currentSlot.getDivID();
		var mediaTypeConfig;
		if(!refThis.isSingleImpressionSettingEnabled){
			if(kgpConsistsWidthAndHeight){
				code = refThis.getPBCodeWithWidthAndHeight(divID, adapterID, currentWidth, currentHeight);
				sizes = [[currentWidth,currentHeight]];
			}else{
				code = refThis.getPBCodeWithoutWidthAndHeight(divID, adapterID);
				sizes = currentSlot.getSizes();	
			}
			refThis.kgpvMap [ code ] = {
				kgpv: generatedKey,
				divID: divID,
				regexPattern:regexPattern
			};
		} else{
			/* This will be executed in case single impression feature is enabled.
			Below statements assign code as div and sizes as all sizes of ad slot
			it generates kgpvmap consisting of kgpvs as property 
			if in kgpv map code exists and kgpv exists then 
				if a adapter with a single kgpv exists in kgpvs then it ignores and returns from this function
				if a adapter does not exist for the code then a entry is being pushed in kgpvs with adapterid and kgpv for the bidder
			 if code does not consists in kgpv object then a entry is made with adapter first calling it.*/
			code = currentSlot.getDivID();
			sizes = currentSlot.getSizes();
			var adapterAlreadyExsistsInKGPVS = false;
			if (refThis.kgpvMap[code] && refThis.kgpvMap[code].kgpvs && refThis.kgpvMap[code].kgpvs.length > 0){
				util.forEachOnArray(refThis.kgpvMap[code].kgpvs, function(idx,kgpv){
					// We want to have one adapter entry for one bidder and one code/adSlot
					/*istanbul ignore else*/
					if(kgpv.adapterID == adapterID){
						adapterAlreadyExsistsInKGPVS = true;
					}
				});
				/*istanbul ignore else*/
				if(adapterAlreadyExsistsInKGPVS && isAdUnitsCodeContainBidder(adUnits, code, adapterID)){
					return;
				}
			}
			else{
				refThis.kgpvMap[code] = {
					kgpvs : [],
					divID: divID
				};
			}
			if(!adapterAlreadyExsistsInKGPVS){
				var kgpv = {
					adapterID: adapterID,
					kgpv:generatedKey,
					regexPattern:regexPattern
				};
				refThis.kgpvMap[code].kgpvs.push(kgpv);
			}
		}
		
		//serverSideEabled: do not add config into adUnits
		if(CONFIG.isServerSideAdapter(adapterID)){
			util.log("Not calling adapter: "+ adapterID + ", for " + generatedKey +", as it is serverSideEnabled.");
			return;
		}
		/* istanbul ignore else */
		if(!util.isOwnProperty(adUnits, code)){
			mediaTypeConfig = util.getMediaTypeObject(sizes, currentSlot);
			//TODO: Remove sizes from below as it will be deprecated soon in prebid
			// Need to check pubmaticServerBidAdapter in our fork after this change.
			adUnits[code] = {
				code: code,
				mediaTypes:mediaTypeConfig ,
				sizes: sizes,
				bids: [],
				divID : divID
			};
		}else if(refThis.isSingleImpressionSettingEnabled){
			if(isAdUnitsCodeContainBidder(adUnits, code, adapterID)){
				return;
			}
		}
	
		// in case there are multiple bidders ,we don't generate the config again but utilize the existing mediatype.
		if(util.isOwnProperty(adUnits, code)){
			mediaTypeConfig = adUnits[code].mediaTypes;
		}
	
		var slotParams = {};
		if(mediaTypeConfig && util.isOwnProperty(mediaTypeConfig,"video") && adapterID != "telaria"){
			slotParams["video"]= mediaTypeConfig.video;
		}
		util.forEachOnObject(keyConfig, function(key, value){
			/* istanbul ignore next */
			slotParams[key] = value;
		});
	
		// Logic : If for slot config for partner video parameter is present then use that
		// else take it from mediaType.video
		if(mediaTypeConfig && util.isOwnProperty(mediaTypeConfig,"video") && adapterID != "telaria"){
			if(util.isOwnProperty(slotParams,"video") && util.isObject(slotParams.video)){
				util.forEachOnObject(mediaTypeConfig.video, function(key, value){
					if(!util.isOwnProperty(slotParams["video"],key)){
						slotParams["video"][key] = value;
					}
				});
			}
			else {
				slotParams["video"]= mediaTypeConfig.video;
			}
		}
		
		//processing for each partner
		switch(adapterID){
	
			//todo: unit-test cases pending
			case "pubmaticServer":
				slotParams["publisherId"] = adapterConfig["publisherId"];
				slotParams["adUnitIndex"] = ''+currentSlot.getAdUnitIndex();
				slotParams["adUnitId"] = currentSlot.getAdUnitID();
				slotParams["divId"] = currentSlot.getDivID();
				slotParams["adSlot"] = generatedKey;
				slotParams["wiid"] = impressionID;
				slotParams["profId"] = CONFIG.getProfileID();
				/* istanbul ignore else*/
				if(window.PWT.udpv){
					slotParams["verId"] = CONFIG.getProfileDisplayVersionID();
				}
				adUnits[ code ].bids.push({	bidder: adapterID, params: slotParams });
				break;
	
			case "pubmatic":
		case "pubmatic2":
				slotParams["publisherId"] = adapterConfig["publisherId"];
			slotParams["adSlot"] = slotParams["slotName"] || generatedKey;
				slotParams["wiid"] = impressionID;
			slotParams["profId"] = adapterID == "pubmatic2"? adapterConfig["profileId"]: CONFIG.getProfileID();
				/* istanbul ignore else*/
			if(adapterID != "pubmatic2" && window.PWT.udpv){
					slotParams["verId"] = CONFIG.getProfileDisplayVersionID();
				}
				adUnits[ code ].bids.push({	bidder: adapterID, params: slotParams });
				break;
			case "pulsepoint":
				util.forEachOnArray(sizes, function(index, size){
					var slotParams = {};
					util.forEachOnObject(keyConfig, function(key, value){
						/* istanbul ignore next */
						slotParams[key] = value;
					});
					slotParams["cf"] = size[0] + "x" + size[1];
					adUnits[ code ].bids.push({	bidder: adapterID, params: slotParams });
				});
				break;
	
			case "adg":
				util.forEachOnArray(sizes, function(index, size){
					var slotParams = {};
					util.forEachOnObject(keyConfig, function(key, value){
						/* istanbul ignore next */
						slotParams[key] = value;
					});
					slotParams["width"] = size[0];
					slotParams["height"] = size[1];
				if(!(refThis.isSingleImpressionSettingEnabled && isAdUnitsCodeContainBidder(adUnits, code, adapterID))){
					adUnits[ code ].bids.push({	bidder: adapterID, params: slotParams });
				}
				});
				break;
	
			case "yieldlab":
				util.forEachOnArray(sizes, function(index, size){
					var slotParams = {};
					util.forEachOnObject(keyConfig, function(key, value){
						/* istanbul ignore next */
						slotParams[key] = value;
					});
					slotParams["adSize"] = size[0] + "x" + size[1];
				if(!(refThis.isSingleImpressionSettingEnabled && isAdUnitsCodeContainBidder(adUnits, code, adapterID))){
					adUnits[ code ].bids.push({	bidder: adapterID, params: slotParams });
				}
				});
				break;
		case "ix":
			case "indexExchange":
			/** Added case ix cause indexExchange bidder has changed its bidder code in server side 
			 * this will have impact in codegen to change its adapter code from indexexchange to ix 
			 * so added a case for the same.
			*/
			
				util.forEachOnArray(sizes, function(index, size) {
					var slotParams = {};
	
					if (keyConfig["siteID"]) {
						slotParams["siteId"] = keyConfig["siteID"];
					}
					slotParams["size"] = size;
					adUnits [code].bids.push({bidder: adapterID, params: slotParams});
				});
				break;
	
			default:
				adUnits[code].bids.push({ bidder: adapterID, params: slotParams });
				break;
		}
	}
	
	/* start-test-block */
	exports.generatedKeyCallback = generatedKeyCallback;
	/* end-test-block */
	
	
	function generatePbConf(adapterID, adapterConfig, activeSlots, adUnits, impressionID){
		util.log(adapterID+CONSTANTS.MESSAGES.M1);
	
		/* istanbul ignore else */
		if(!adapterConfig){
			return;
		}
	
		util.forEachGeneratedKey(
			adapterID,
			adUnits,
			adapterConfig,
			impressionID,
			[],
			activeSlots,
			refThis.generatedKeyCallback,
			// serverSideEabled: do not set default bids as we do not want to throttle them at client-side
			true // !CONFIG.isServerSideAdapter(adapterID)
		);
	}
	
	/* start-test-block */
	exports.generatePbConf = generatePbConf;
	/* end-test-block */
	
	function assignSingleRequestConfigForBidders(prebidConfig){
		util.forEachOnObject(CONSTANTS.SRA_ENABLED_BIDDERS,function(adapterName){
			if(util.isOwnProperty(CONF.adapters, adapterName)){
				prebidConfig[adapterName] = {
					singleRequest : true
				};
			}
		});
	}
	
	exports.assignSingleRequestConfigForBidders = assignSingleRequestConfigForBidders;
	
	function fetchBids(activeSlots, impressionID){
	
		//window.pwtCreatePrebidNamespace(pbNameSpace);
	
		/* istanbul ignore else */
		if(! window[pbNameSpace]){ // todo: move this code to initial state of adhooks
			util.logError("PreBid js is not loaded");
			return;
		}
	
	
		if(util.isFunction(window[pbNameSpace].onEvent)){
			if(!onEventAdded){
				window[pbNameSpace].onEvent('bidResponse', refThis.pbBidStreamHandler);
				onEventAdded = true;
			}		
		} else {
			util.logWarning("PreBid js onEvent method is not available");
			return;
		}
	
		window[pbNameSpace].logging = util.isDebugLogEnabled();
	
		var adUnits = {};// create ad-units for prebid
		var randomNumberBelow100 = adapterManager.getRandomNumberBelow100();
	
		CONFIG.forEachAdapter(function(adapterID, adapterConfig){
			// Assumption: all partners are running through PreBid,
			//				if we add any new parent-adapter, then code changes will be required
			/* istanbul ignore else */
			if(adapterID !== refThis.parentAdapterID){
	
				//serverSideEabled: we do not want to throttle them at client-side
				/* istanbul ignore if */
				if(CONFIG.isServerSideAdapter(adapterID) || adapterManager.throttleAdapter(randomNumberBelow100, adapterID) == false){
					adapterManager.setInitTimeForSlotsForAdapter(activeSlots, adapterID);
					refThis.generatePbConf(adapterID, adapterConfig, activeSlots, adUnits, impressionID);
				}else{
					util.log(adapterID+CONSTANTS.MESSAGES.M2);
				}
			}
		});
	
		// adUnits is object create array from it
		var adUnitsArray = [];
		for(var code in adUnits){
			/* istanbul ignore else */
			if(util.isOwnProperty(adUnits, code)){
				adUnitsArray.push(adUnits[code]);
			}
		}
	
		/* istanbul ignore else */
		if(adUnitsArray.length > 0 && window[pbNameSpace]){
	
			try{
				/* istanbul ignore else */
				//if(util.isFunction(window[pbNameSpace].setBidderSequence)){
				//	window[pbNameSpace].setBidderSequence("random");
				//}
	
				if(util.isFunction(window[pbNameSpace].setConfig) || typeof window[pbNameSpace].setConfig == "function") {
					var prebidConfig = {
						debug: util.isDebugLogEnabled(),
						cache: {
							url: CONSTANTS.CONFIG.CACHE_URL + CONSTANTS.CONFIG.CACHE_PATH
						},
						bidderSequence: "random",
						userSync: {
							enableOverride: true,
							syncsPerBidder: 0,
							filterSettings: {
								iframe: {
									bidders: "*",   // '*' means all bidders
									filter: "include"
								}
							},
							enabledBidders: (function(){
								var arr = [];
								CONFIG.forEachAdapter(function(adapterID){
									arr.push(adapterID);
								});
								return arr;
							})(),
							syncDelay: 2000, //todo: default is 3000 write image pixels 5 seconds after the auction
						},
						disableAjaxTimeout: CONFIG.getDisableAjaxTimeout(),
					};
	
					if (CONFIG.getGdpr()) {
						prebidConfig["consentManagement"] = {};
						prebidConfig["consentManagement"]["gdpr"] = {
							cmpApi: CONFIG.getCmpApi(),
							timeout: CONFIG.getGdprTimeout(),
							allowAuctionWithoutConsent: CONFIG.getAwc()
						};
					}
					if (CONFIG.getCCPA()) {
						if(!prebidConfig["consentManagement"]){
							prebidConfig["consentManagement"] = {};
						}
						prebidConfig["consentManagement"]["usp"] = {
							cmpApi: CONFIG.getCCPACmpApi(),
							timeout: CONFIG.getCCPATimeout(),
						};
					}
					//remove true and implement getCurrency() in config
					// CONFIG.getCurrency()
					if(CONFIG.getAdServerCurrency()){
						// get AdServer currency from Config
						// Log in console 
						util.log(CONSTANTS.MESSAGES.M26 + CONFIG.getAdServerCurrency());
						prebidConfig["currency"] = {
							"adServerCurrency": CONFIG.getAdServerCurrency(), 
							"granularityMultiplier": 1, 
						};
	
					}
					if(CONFIG.isSchainEnabled){
						prebidConfig["schain"] = CONFIG.getSchainObject();
					}
					refThis.assignSingleRequestConfigForBidders(prebidConfig);
					// Adding a hook for publishers to modify the Prebid Config we have generated
					util.handleHook(CONSTANTS.HOOKS.PREBID_SET_CONFIG, [ prebidConfig ]);
	
					if(CONFIG.isUserIdModuleEnabled()){
						prebidConfig["userSync"]["userIds"] = util.getUserIdConfiguration();
					}
	
					window[pbNameSpace].setConfig(prebidConfig);
				}
	
				/* With prebid 2.0.0 it has started using FunHooks library which provides
				   proxy object instead of wrapper function by default so in case of safari and IE 
				   below check of util gives us Object instead of function hence return false and does
				   not work on safari and ie. Introduced one more check of typeof to check for function.
				   This if code is just safe check and may be removed in near future.
				*/
				/* istanbul ignore else */
	
				if(util.isFunction(window[pbNameSpace].requestBids) || typeof window[pbNameSpace].requestBids == "function"){
					
					// Adding a hook for publishers to modify the adUnits we are passing to Prebid
					util.handleHook(CONSTANTS.HOOKS.PREBID_REQUEST_BIDS, [ adUnitsArray ]);
					
					window[pbNameSpace].requestBids({
						adUnits: adUnitsArray,
						// Note: Though we are not doing anything in the bidsBackHandler, it is required by PreBid
						bidsBackHandler: function(bidResponses) {
							util.log("In PreBid bidsBackHandler with bidResponses: ");
							util.log(bidResponses);
							setTimeout(window[pbNameSpace].triggerUserSyncs, 10);
							//refThis.handleBidResponses(bidResponses);						
							// we may not request bids for all slots from Prebid if we do not find mapping for a slot thus looping on activeSlots
							function setPossibleBidRecieved(){
								util.forEachOnArray(activeSlots, function(i, activeSlot){
									bidManager.setAllPossibleBidsReceived(activeSlot.getDivID());
								});
							}
							if(CONFIG.getAdServerCurrency()){
								//Added timeout for issue in GPT should execute dfp as soon as all bids are available
								setTimeout(setPossibleBidRecieved,300);
							}
							else{
								setPossibleBidRecieved();
							}
						},
						timeout: timeoutForPrebid
					});
				} else {
					util.log("PreBid js requestBids function is not available");
					return;
				}
			} catch (e) {
				util.logError("Error occured in calling PreBid.");
				util.logError(e);
			}
		}
	}
	
	/* start-test-block */
	exports.fetchBids = fetchBids;
	/* end-test-block */
	
	
	function getParenteAdapterID() {
		return refThis.parentAdapterID;
	}
	
	function setConfig(){
		if(util.isFunction(window[pbNameSpace].setConfig) || typeof window[pbNameSpace].setConfig == "function") {
			var prebidConfig = {
				debug: util.isDebugLogEnabled(),
				userSync: {
					syncDelay: 2000
				}
			};
	
			if (CONFIG.getGdpr()) {
				prebidConfig["consentManagement"] = {
					cmpApi: CONFIG.getCmpApi(),
					timeout: CONFIG.getGdprTimeout(),
					allowAuctionWithoutConsent: CONFIG.getAwc()
				};
			}
	
			// Adding a hook for publishers to modify the Prebid Config we have generated
			// util.handleHook(CONSTANTS.HOOKS.PREBID_SET_CONFIG, [ prebidConfig ]);
	
			if(CONFIG.isUserIdModuleEnabled()){
				prebidConfig["userSync"]["userIds"] = util.getUserIdConfiguration();
			}
	
			window[pbNameSpace].setConfig(prebidConfig);
			window[pbNameSpace].requestBids([]);
		}
	}
	
	exports.setConfig = setConfig;
	
	/* start-test-block */
	exports.getParenteAdapterID = getParenteAdapterID;
	/* end-test-block */
	
	exports.register = function(){
		return {
			fB: refThis.fetchBids,
			ID: refThis.getParenteAdapterID,
			sC:	refThis.setConfig
		};
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var CONSTANTS = __webpack_require__(4);
	
	function Slot(name){
		this.name = name;
		this.status = CONSTANTS.SLOT_STATUS.CREATED;
		this.divID = "";
		this.adUnitID = "";
		this.adUnitIndex = 0;
		this.sizes = [];
		this.keyValues = {};
		this.arguments = [];
		this.pubAdServerObject = null;
		this.displayFunctionCalled = false;
		this.refreshFunctionCalled = false;	
	}
	
	Slot.prototype.getName = function(){
		return this.name;
	};
	
	Slot.prototype.setStatus = function(status){
		//check is it a valid status
		this.status = status;
		return this;
	};
	
	Slot.prototype.getStatus = function(){
		return this.status;
	};
	
	Slot.prototype.setDivID = function(divID){
		//check is it a valid divID, string
		this.divID = divID;
		return this;
	};
	
	Slot.prototype.getDivID = function(){
		return this.divID;
	};
	
	Slot.prototype.setAdUnitID = function(value){
		//check is it a valid divID, string
		this.adUnitID = value;
		return this;
	};
	
	Slot.prototype.getAdUnitID = function(){
		return this.adUnitID;
	};
	
	Slot.prototype.setAdUnitIndex = function(value){
		//check is it a valid divID, string or number 
		this.adUnitIndex = value;
		return this;
	};
	
	Slot.prototype.getAdUnitIndex = function(){
		return this.adUnitIndex;
	};
	
	Slot.prototype.setSizes = function(value){
		//check is it a valid value, array
		this.sizes = value;
		return this;
	};
	
	Slot.prototype.getSizes = function(){
		return this.sizes;
	};
	
	Slot.prototype.setKeyValue = function(key, value){
		//check is it a valid value, array
		this.keyValues[key] = value;
		return this;
	};
	
	Slot.prototype.setKeyValues = function(value){
		//check is it a valid value, array
		this.keyValues = value;
		return this;
	};
	
	Slot.prototype.getkeyValues = function(){
		return this.keyValues;
	};
	
	Slot.prototype.setArguments = function(value){
		//check is it a valid value, array
		this.arguments = value;
		return this;
	};
	
	Slot.prototype.getArguments = function(){
		return this.arguments;
	};
	
	Slot.prototype.setPubAdServerObject = function(value){
		//check is it a valid value, array
		this.pubAdServerObject = value;
		return this;
	};
	
	Slot.prototype.getPubAdServerObject = function(){
		return this.pubAdServerObject;
	};
	
	Slot.prototype.setDisplayFunctionCalled = function(value){
		this.displayFunctionCalled = value;
		return this;
	};
	
	Slot.prototype.isDisplayFunctionCalled = function(){
		return this.displayFunctionCalled;
	};
	
	Slot.prototype.setRefreshFunctionCalled = function(value){
		this.refreshFunctionCalled = value;
		return this;
	};
	
	Slot.prototype.isRefreshFunctionCalled = function(){
		return this.refreshFunctionCalled;
	};
	
	
	Slot.prototype.updateStatusAfterRendering = function(isRefreshCalled){
		this.status = CONSTANTS.SLOT_STATUS.DISPLAYED;
		this.arguments = [];
		if(isRefreshCalled){
			this.refreshFunctionCalled = false;
		}else{
			this.displayFunctionCalled = false;
		}
	
	};
	
	/* start-test-block */
	module.exports.Slot = Slot;
	/* end-test-block */
	
	exports.createSlot = function(name){
		return new Slot(name);
	};

/***/ })
/******/ ]);
//# sourceMappingURL=owt.js.map
