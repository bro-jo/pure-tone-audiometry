webpackHotUpdate("static/development/pages/ta2.js",{

/***/ "./pages/ta2.tsx":
/*!***********************!*\
  !*** ./pages/ta2.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _src_components_text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/text */ "./src/components/text.tsx");
/* harmony import */ var _src_components_box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/components/box */ "./src/components/box.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);










var _jsxFileName = "/Users/bro/project/pure-tone-audiometry/pages/ta2.tsx";





var PAN_LEFT = -1;
var PAN_RIGHT = 1;
var CANDIDATE_FREQUENCIES = [250, 500, 1000, 2000, 4000, 8000];
var CANDIDATE_GAIN = [0.001, 0.002, 0.003, 0.004, 0.006, 0.01];
var GAIN_MAX_VALUE = CANDIDATE_GAIN[CANDIDATE_GAIN.length - 1];
var Pan;

(function (Pan) {
  Pan["Left"] = "Left";
  Pan["Right"] = "Right";
})(Pan || (Pan = {}));

var Ta1 =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Ta1, _React$Component);

  function Ta1() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Ta1);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Ta1)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "audioContextHistory", []);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      isSideChanged: false,
      step: 1,
      isFinished: false,
      frequency: undefined,
      pan: undefined,
      volume: undefined,
      results: [],
      shouldBlockButton: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Ta1, [{
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
      this.panNode.pan.value = PAN_LEFT;
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
          var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(context) {
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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
      var pan = Math.random() < 0.5 ? PAN_LEFT : PAN_RIGHT;
      var volume = this.getRandomGain();
      this.setState({
        frequency: frequency,
        pan: pan,
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
      this.panNode.pan.value = pan;
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
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_src_components_box__WEBPACK_IMPORTED_MODULE_13__["CustomContainer"], {
          className: "my-3 p-3 bg-white",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
          className: "col-sm-12 mb-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_src_components_text__WEBPACK_IMPORTED_MODULE_12__["Title"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        }, "\uAC80\uC0AC\uAC00", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "text-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }, "\uC885\uB8CC"), "\uB418\uC5C8\uC2B5\uB2C8\uB2E4.", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        })))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
          className: "col-sm-12 mb-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("pre", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(this.state.results, null, 2))))));
      }

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_src_components_box__WEBPACK_IMPORTED_MODULE_13__["CustomContainer"], {
        className: "my-3 p-3 bg-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        className: "col-sm-12 mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_src_components_text__WEBPACK_IMPORTED_MODULE_12__["Title"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "text-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, "\uC5B4\uB290 \uCABD \uADC0"), "\uC5D0\uC11C \uB4E4\uB9AC\uC2DC\uB098\uC694?", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      })), "#", this.state.step)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        className: "col-sm-12 mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["ProgressBar"], {
        now: this.state.step,
        min: 0,
        max: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_src_components_box__WEBPACK_IMPORTED_MODULE_13__["ButtonBox"], {
        className: "align-items-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        className: "col-12 mt-2 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        className: "btn-block",
        disabled: this.state.shouldBlockButton,
        onClick: function onClick() {
          return _this3.handleNothing();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, "\uB4E4\uB9AC\uC9C0 \uC54A\uC74C")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        className: "col-12 mt-2 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        className: "btn-block",
        disabled: this.state.shouldBlockButton,
        onClick: function onClick() {
          return _this3.handleLeft();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, "\uC67C\uCABD")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        className: "col-12 mt-2 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        className: "btn-block",
        disabled: this.state.shouldBlockButton,
        onClick: function onClick() {
          return _this3.handleRight();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "\uC624\uB978\uCABD")))));
    }
  }, {
    key: "saveResult",
    value: function saveResult(_ref2) {
      var choice = _ref2.choice;
      this.setState(function (prevState) {
        var resultOfCurrentStep = {
          frequency: prevState.frequency,
          pan: prevState.pan,
          volume: prevState.volume,
          correct: prevState.isSideChanged ? prevState.pan !== choice : prevState.pan === choice
        };
        return {
          results: prevState.results.concat([resultOfCurrentStep])
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

      if (step === 20) {
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
      }, 2000);
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

      if (step === 1) {
        next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/wrong?msg=들리지%20않음');
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

      if (step === 1) {
        this.setState({
          isSideChanged: false,
          step: 2,
          shouldBlockButton: true
        });
        setTimeout(function () {
          return _this6.startAudio();
        }, 1000);
        setTimeout(function () {
          return _this6.setState({
            shouldBlockButton: false
          });
        }, 2000);
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

      if (step === 1) {
        this.setState({
          isSideChanged: true,
          step: 2,
          shouldBlockButton: true
        });
        setTimeout(function () {
          return _this7.startAudio();
        }, 1000);
        setTimeout(function () {
          return _this7.setState({
            shouldBlockButton: false
          });
        }, 2000);
        return;
      }

      this.saveResult({
        choice: Pan.Right
      });
      this.goToNextSound();
    }
  }]);

  return Ta1;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Ta1);

/***/ })

})
//# sourceMappingURL=ta2.js.60e09337220060ea072e.hot-update.js.map