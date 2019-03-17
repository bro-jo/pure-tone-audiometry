webpackHotUpdate("static/development/pages/ta2.js",{

/***/ "./pages/ta2.tsx":
/*!***********************!*\
  !*** ./pages/ta2.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _src_components_text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/text */ "./src/components/text.tsx");
/* harmony import */ var _src_components_box__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/box */ "./src/components/box.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);









var _jsxFileName = "/Users/bro/project/pure-tone-audiometry/pages/ta2.tsx";





var PAN_LEFT_VALUE = -0.9;
var PAN_RIGHT_VALUE = 0.9;
var CANDIDATE_FREQUENCIES = [250, 500, 1000, 2000, 4000, 8000];
var CANDIDATE_GAIN = [0.001, 0.002, 0.003, 0.004, 0.006, 0.01];
var GAIN_MAX_VALUE = CANDIDATE_GAIN[CANDIDATE_GAIN.length - 1];
var MAX_STEPS = 5;
var Pan;

(function (Pan) {
  Pan["Left"] = "Left";
  Pan["Right"] = "Right";
})(Pan || (Pan = {}));

var Ta1 =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Ta1, _React$Component);

  function Ta1() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Ta1);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Ta1)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "audioContextHistory", []);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      isSideChanged: false,
      step: 0,
      isFinished: false,
      frequency: undefined,
      panValue: undefined,
      volume: undefined,
      results: [],
      shouldBlockButton: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Ta1, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log('componentDidMount');
      this.initAudio();
      setTimeout(function () {
        try {
          _this2.oscillator.stop();
        } catch (e) {
          console.warn(e);
        }

        _this2.oscillator.start();
      }, 300);
    }
  }, {
    key: "initAudio",
    value: function initAudio() {
      var W = window;
      this.audioContext = new (W.AudioContext || W.webkitAudioContext)();
      this.audioContextHistory.push(this.audioContext);
      this.oscillator = this.audioContext.createOscillator();
      this.gainNode = this.audioContext.createGain();
      this.panNode = this.audioContext.createStereoPanner();
      this.oscillator.type = 'sine';
      this.oscillator.frequency.value = 440;
      this.oscillator.connect(this.panNode);
      this.panNode.connect(this.gainNode);
      this.panNode.pan.value = PAN_LEFT_VALUE;
      this.oscillator.connect(this.gainNode);
      this.gainNode.connect(this.audioContext.destination);
      this.gainNode.gain.value = GAIN_MAX_VALUE;
      console.log('this.gainNode.gain.value', this.gainNode.gain.value);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('componentWillUnmount');

      try {
        this.gainNode.gain.value = 0;
        this.panNode.pan.value = 0;
        this.oscillator.disconnect();
        this.audioContext.close();
      } catch (err) {
        console.error('stopAudio error');
      } finally {
        this.stopAudio();
      }
    }
  }, {
    key: "getRandomGain",
    value: function getRandomGain() {
      return CANDIDATE_GAIN[Math.floor(Math.random() * (CANDIDATE_GAIN.length - 2))];
    }
  }, {
    key: "getRandomFrequency",
    value: function getRandomFrequency() {
      return CANDIDATE_FREQUENCIES[Math.floor(Math.random() * CANDIDATE_FREQUENCIES.length)];
    }
  }, {
    key: "stopAudio",
    value: function stopAudio() {
      try {
        this.audioContextHistory.map(
        /*#__PURE__*/
        function () {
          var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return context.close();

                  case 3:
                    _context.next = 7;
                    break;

                  case 5:
                    _context.prev = 5;
                    _context.t0 = _context["catch"](0);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[0, 5]]);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      } catch (err) {
        console.error('stopAudio error');
      }

      try {
        // this.audioContextHistory.forEach(async () => await ());
        this.gainNode.gain.value = 0;
        this.oscillator.disconnect();
        this.audioContext.close();
        this.audioContext = null;
        this.gainNode = null;
        this.panNode = null;
      } catch (err) {
        console.error('stopAudio error');
      }
    }
  }, {
    key: "startAudio",
    value: function startAudio() {
      var W = window;
      var frequency = this.getRandomFrequency();
      var panValue = Math.random() < 0.5 ? PAN_LEFT_VALUE : PAN_RIGHT_VALUE;
      var volume = this.getRandomGain();
      this.setState({
        frequency: frequency,
        panValue: panValue,
        volume: volume
      });
      this.audioContext = new (W.AudioContext || W.webkitAudioContext)();
      this.audioContextHistory.push(this.audioContext);
      this.oscillator = this.audioContext.createOscillator();
      this.gainNode = this.audioContext.createGain();
      this.panNode = this.audioContext.createStereoPanner();
      this.oscillator.type = 'sine';
      this.oscillator.frequency.value = frequency;
      this.oscillator.connect(this.panNode);
      this.panNode.connect(this.gainNode);
      this.panNode.pan.value = panValue;
      this.oscillator.connect(this.gainNode);
      this.gainNode.connect(this.audioContext.destination);
      this.gainNode.gain.value = volume;
      console.log('this.oscillator.frequency.value ', this.oscillator.frequency.value);
      console.log('this.panNode.pan.value', this.panNode.pan.value);
      console.log('this.gainNode.gain.value', this.gainNode.gain.value);
      this.oscillator.start();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.isFinished) {
        var correctCount = this.state.results.filter(function (r) {
          return r.correct;
        }).length;
        var percent = Math.floor(correctCount / this.state.results.length * 100);
        console.log('this.state.results.filter(r => r.correct).length', this.state.results.filter(function (r) {
          return r.correct;
        }).length);
        console.log('this.state.results.length', this.state.results.length);
        console.log('percent', percent);
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_src_components_box__WEBPACK_IMPORTED_MODULE_12__["CustomContainer"], {
          className: "my-3 p-3 bg-white",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
          className: "col-sm-12 mb-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_src_components_text__WEBPACK_IMPORTED_MODULE_11__["Title"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }, "\uAC80\uC0AC\uAC00", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          className: "text-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, "\uC885\uB8CC"), "\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }), "\uAF2D ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          className: "text-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }, "\uBCFC\uB968\uC744 \uB2E4\uC2DC \uB0AE\uCDB0\uC8FC\uC138\uC694")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
          className: "col-sm-12 mb-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Table"], {
          striped: true,
          bordered: true,
          hover: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("thead", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }, "#"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        }, "\uC8FC\uD30C\uC218"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        }, "\uC18C\uB9AC \uD06C\uAE30"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          },
          __self: this
        }, "\uBC29\uD5A5"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          __self: this
        }, "O/X"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, this.state.results.map(function (_ref2, i) {
          var frequency = _ref2.frequency,
              volume = _ref2.volume,
              pan = _ref2.pan,
              correct = _ref2.correct;
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 202
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203
            },
            __self: this
          }, i), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 204
            },
            __self: this
          }, frequency), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 205
            },
            __self: this
          }, volume), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 206
            },
            __self: this
          }, pan), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("td", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 207
            },
            __self: this
          }, correct ? 'O' : 'X'));
        }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Alert"], {
          variant: percent >= 90 ? 'success' : percent >= 80 ? 'warning' : 'danger',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }, correctCount, "\uAC1C \uB9DE\uCD94\uC168\uB124\uC694.\xA0", percent > 90 ? '정상' : percent > 80 ? '주의' : '위험', " \uB2E8\uACC4 \uC785\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
          className: "justify-content-end",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
          className: "col-sm-8 mb-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_src_components_text__WEBPACK_IMPORTED_MODULE_11__["Guidance"], {
          className: "ml-3 mt-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: this
        }, "* \uAC04\uB2E8\uD55C \uCCAD\uB825 \uD14C\uC2A4\uD2B8\uC5D0 \uB3C4\uC6C0\uC744 \uC8FC\uB294 \uBCF4\uC870 \uD14C\uC2A4\uD2B8\uC774\uBA70, \uC804\uBB38\uC801\uC778 ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          className: "text-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          },
          __self: this
        }, "\uC758\uB8CC\uD589\uC704\uB97C \uB300\uCCB4\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."))))))));
      }

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_src_components_box__WEBPACK_IMPORTED_MODULE_12__["CustomContainer"], {
        className: "my-3 p-3 bg-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        className: "col-sm-12 mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_src_components_text__WEBPACK_IMPORTED_MODULE_11__["Title"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "text-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, "\uC5B4\uB290 \uCABD \uADC0"), "\uC5D0\uC11C \uB4E4\uB9AC\uC2DC\uB098\uC694?", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      })), "#", this.state.step)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        className: "col-sm-12 mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ProgressBar"], {
        now: this.state.step,
        min: 0,
        max: MAX_STEPS + 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_src_components_box__WEBPACK_IMPORTED_MODULE_12__["ButtonBox"], {
        className: "align-items-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        className: "col-12 mt-2 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        className: "btn-block",
        disabled: this.state.shouldBlockButton,
        onClick: function onClick() {
          return _this3.handleNothing();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, "\uB4E4\uB9AC\uC9C0 \uC54A\uC74C")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        className: "col-12 mt-2 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        className: "btn-block",
        disabled: this.state.shouldBlockButton,
        onClick: function onClick() {
          return _this3.handleLeft();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, "\uC67C\uCABD")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        className: "col-12 mt-2 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        className: "btn-block",
        disabled: this.state.shouldBlockButton,
        onClick: function onClick() {
          return _this3.handleRight();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, "\uC624\uB978\uCABD")))));
    }
  }, {
    key: "saveResult",
    value: function saveResult(_ref3) {
      var choice = _ref3.choice;
      this.setState(function (prevState) {
        var pan = prevState.panValue < 0 ? Pan.Left : Pan.Right;
        console.log('prevState.pan', pan);
        console.log('choice', choice);
        console.log('prevState.pan === choice', pan === choice);
        var resultOfCurrentStep = {
          frequency: prevState.frequency,
          pan: pan,
          volume: prevState.volume,
          correct: prevState.isSideChanged ? pan !== choice : pan === choice
        };
        var results = prevState.results.concat([resultOfCurrentStep]);
        results.sort(function (e1, e2) {
          return e1.frequency - e2.frequency;
        });
        return {
          results: results
        };
      });
    }
  }, {
    key: "goToNextSound",
    value: function goToNextSound() {
      var _this4 = this;

      var step = this.state.step;
      this.setState({
        shouldBlockButton: true
      });

      if (step === MAX_STEPS) {
        this.finishTest();
        return;
      }

      this.setState(function (prevState) {
        return {
          step: prevState.step + 1
        };
      });
      setTimeout(function () {
        return _this4.startAudio();
      }, 1000);
      setTimeout(function () {
        return _this4.setState({
          shouldBlockButton: false
        });
      }, 1500);
    }
  }, {
    key: "finishTest",
    value: function finishTest() {
      var _this5 = this;

      this.setState({
        isFinished: true
      });
      setTimeout(function () {
        return _this5.stopAudio();
      }, 500);
    }
  }, {
    key: "handleNothing",
    value: function handleNothing() {
      var step = this.state.step;
      this.stopAudio();

      if (step === 0) {
        next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push('/wrong?msg=들리지%20않음');
        return;
      }

      this.saveResult({
        choice: undefined
      });
      this.goToNextSound();
    }
  }, {
    key: "handleLeft",
    value: function handleLeft() {
      var _this6 = this;

      var step = this.state.step;
      this.stopAudio();

      if (step === 0) {
        this.setState({
          isSideChanged: false,
          step: 1,
          shouldBlockButton: true
        });
        setTimeout(function () {
          return _this6.startAudio();
        }, 1000);
        setTimeout(function () {
          return _this6.setState({
            shouldBlockButton: false
          });
        }, 1500);
        return;
      }

      this.saveResult({
        choice: Pan.Left
      });
      this.goToNextSound();
    }
  }, {
    key: "handleRight",
    value: function handleRight() {
      var _this7 = this;

      var step = this.state.step;
      this.stopAudio();

      if (step === 0) {
        this.setState({
          isSideChanged: true,
          step: 1,
          shouldBlockButton: true
        });
        setTimeout(function () {
          return _this7.startAudio();
        }, 1000);
        setTimeout(function () {
          return _this7.setState({
            shouldBlockButton: false
          });
        }, 1500);
        return;
      }

      this.saveResult({
        choice: Pan.Right
      });
      this.goToNextSound();
    }
  }]);

  return Ta1;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Ta1);

/***/ })

})
//# sourceMappingURL=ta2.js.9ecbe7594f23217b07b9.hot-update.js.map