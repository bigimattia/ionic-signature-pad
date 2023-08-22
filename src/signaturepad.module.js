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
exports.IonicSignaturePadModule = void 0;
var core_1 = require("@angular/core");
var ionicsignaturepad_component_1 = require("./components/ionicsignaturepad.component");
var ionicsignaturepad_provider_1 = require("./providers/ionicsignaturepad.provider");
var angular_1 = require("@ionic/angular");
var angular2_signaturepad_1 = require("angular2-signaturepad");
var IonicSignaturePadModule = exports.IonicSignaturePadModule = function () {
    var _classDecorators = [(0, core_1.NgModule)({
            imports: [
                // Only if you use elements like ion-content, ion-xyz...
                angular_1.IonicModule,
                angular2_signaturepad_1.SignaturePadModule
            ],
            declarations: [
                // declare all components that your module uses
                ionicsignaturepad_component_1.IonicsignaturepadComponent
            ],
            exports: [
                // export the component(s) that you want others to be able to use
                ionicsignaturepad_component_1.IonicsignaturepadComponent
            ]
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var IonicSignaturePadModule = _classThis = /** @class */ (function () {
        function IonicSignaturePadModule_1() {
        }
        IonicSignaturePadModule_1.forRoot = function () {
            return {
                ngModule: IonicSignaturePadModule,
                providers: [ionicsignaturepad_provider_1.IonicsignaturepadProvider]
            };
        };
        return IonicSignaturePadModule_1;
    }());
    __setFunctionName(_classThis, "IonicSignaturePadModule");
    (function () {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        IonicSignaturePadModule = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return IonicSignaturePadModule = _classThis;
}();
