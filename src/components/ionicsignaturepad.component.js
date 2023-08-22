"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IonicsignaturepadComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var angular2_signaturepad_1 = require("angular2-signaturepad");
var HTML_TEMPLATE = "\n<ion-row>\n<ion-col style=\"text-align:right;\" class=\"no-padding\">\n<ion-button fill=\"clear\" (click)=\"drawClear()\" style=\"--padding-top: 0; --padding-bottom: 0; --padding-start: 0; --padding-end: 0; --margin-top: 4px; --margin-bottom: 0; --margin-start: 0; --margin-end: 8px;\"><ion-icon slot=\"icon-only\" name=\"close\" color=\"dark\"></ion-icon></ion-button>\n</ion-col>\n</ion-row>\n<signature-pad [options]=\"signaturePadOptions\" id=\"signatureCanvas\" (onBeginEvent)=\"drawStart()\" (onEndEvent)=\"drawComplete()\"></signature-pad>";
var IonicsignaturepadComponent = exports.IonicsignaturepadComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'ion-signaturepad',
            template: HTML_TEMPLATE,
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: IonicsignaturepadComponent,
                    multi: true
                }]
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _signaturePad_decorators;
    var _signaturePad_initializers = [];
    var _set_canvasWidth_decorators;
    var _set_canvasHeight_decorators;
    var _set_backgroundColor_decorators;
    var IonicsignaturepadComponent = _classThis = /** @class */ (function () {
        function IonicsignaturepadComponent_1() {
            this.signaturePad = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _signaturePad_initializers, void 0));
            this.signaturePadOptions = {};
            this.onTouch = function () { };
            this.disabled = false;
            this.signaturePadOptions = {
                minWidth: 2,
                canvasWidth: 800,
                canvasHeight: 240,
                backgroundColor: 'rgb(255,255,255)'
            };
        }
        IonicsignaturepadComponent_1.prototype.ngOnInit = function () {
        };
        IonicsignaturepadComponent_1.prototype.onChange = function (data) {
        };
        Object.defineProperty(IonicsignaturepadComponent_1.prototype, "canvasWidth", {
            set: function (data) {
                this.signaturePadOptions.canvasWidth = data;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(IonicsignaturepadComponent_1.prototype, "canvasHeight", {
            set: function (data) {
                this.signaturePadOptions.canvasHeight = data;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(IonicsignaturepadComponent_1.prototype, "backgroundColor", {
            set: function (data) {
                this.signaturePadOptions.backgroundColor = data;
            },
            enumerable: false,
            configurable: true
        });
        // Allow Angular to set the value on the component
        IonicsignaturepadComponent_1.prototype.writeValue = function (value) {
            this.onChange(value);
        };
        // Save a reference to the change function passed to us by 
        // the Angular form control
        IonicsignaturepadComponent_1.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        // Save a reference to the touched function passed to us by 
        // the Angular form control
        IonicsignaturepadComponent_1.prototype.registerOnTouched = function (fn) {
            this.onTouch = fn;
        };
        // Allow the Angular form control to disable this input
        IonicsignaturepadComponent_1.prototype.setDisabledState = function (disabled) {
            this.disabled = disabled;
        };
        IonicsignaturepadComponent_1.prototype.canvasResize = function () {
            var canvas = document.querySelector('canvas');
            this.signaturePad.set('minWidth', 1);
        };
        IonicsignaturepadComponent_1.prototype.ngAfterViewInit = function () {
            this.signaturePad.clear();
            this.canvasResize();
        };
        IonicsignaturepadComponent_1.prototype.drawStart = function () {
        };
        IonicsignaturepadComponent_1.prototype.drawComplete = function () {
            this.signatureImage = this.signaturePad.toDataURL('image/jpeg', 0.5);
            this.writeValue(this.signatureImage);
        };
        IonicsignaturepadComponent_1.prototype.drawClear = function () {
            this.signaturePad.clear();
            this.signatureImage = null;
            this.writeValue(this.signatureImage);
        };
        return IonicsignaturepadComponent_1;
    }());
    __setFunctionName(_classThis, "IonicsignaturepadComponent");
    (function () {
        _signaturePad_decorators = [(0, core_1.ViewChild)(angular2_signaturepad_1.SignaturePad)];
        _set_canvasWidth_decorators = [(0, core_1.Input)()];
        _set_canvasHeight_decorators = [(0, core_1.Input)()];
        _set_backgroundColor_decorators = [(0, core_1.Input)()];
        __esDecorate(_classThis, null, _set_canvasWidth_decorators, { kind: "setter", name: "canvasWidth", static: false, private: false, access: { has: function (obj) { return "canvasWidth" in obj; }, set: function (obj, value) { obj.canvasWidth = value; } } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _set_canvasHeight_decorators, { kind: "setter", name: "canvasHeight", static: false, private: false, access: { has: function (obj) { return "canvasHeight" in obj; }, set: function (obj, value) { obj.canvasHeight = value; } } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _set_backgroundColor_decorators, { kind: "setter", name: "backgroundColor", static: false, private: false, access: { has: function (obj) { return "backgroundColor" in obj; }, set: function (obj, value) { obj.backgroundColor = value; } } }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _signaturePad_decorators, { kind: "field", name: "signaturePad", static: false, private: false, access: { has: function (obj) { return "signaturePad" in obj; }, get: function (obj) { return obj.signaturePad; }, set: function (obj, value) { obj.signaturePad = value; } } }, _signaturePad_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        IonicsignaturepadComponent = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return IonicsignaturepadComponent = _classThis;
}();
