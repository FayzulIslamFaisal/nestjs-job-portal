'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
exports.__esModule = true;
exports.UpdateCompanyDto = exports.RegisterCompanyDto = void 0;
var class_validator_1 = require('class-validator');
var RegisterCompanyDto = /** @class */ (function () {
  function RegisterCompanyDto() {}
  __decorate(
    [class_validator_1.IsNotEmpty(), class_validator_1.IsString()],
    RegisterCompanyDto.prototype,
    'name',
  );
  __decorate(
    [class_validator_1.IsString(), class_validator_1.IsOptional()],
    RegisterCompanyDto.prototype,
    'description',
  );
  __decorate(
    [class_validator_1.IsOptional(), class_validator_1.IsUrl()],
    RegisterCompanyDto.prototype,
    'website',
  );
  __decorate(
    [class_validator_1.IsOptional(), class_validator_1.IsString()],
    RegisterCompanyDto.prototype,
    'location',
  );
  __decorate(
    [class_validator_1.IsOptional(), class_validator_1.IsString()],
    RegisterCompanyDto.prototype,
    'logo',
  );
  return RegisterCompanyDto;
})();
exports.RegisterCompanyDto = RegisterCompanyDto;
var UpdateCompanyDto = /** @class */ (function () {
  function UpdateCompanyDto() {}
  __decorate(
    [class_validator_1.IsOptional(), class_validator_1.IsString()],
    UpdateCompanyDto.prototype,
    'name',
  );
  __decorate(
    [class_validator_1.IsOptional(), class_validator_1.IsString()],
    UpdateCompanyDto.prototype,
    'description',
  );
  __decorate(
    [class_validator_1.IsOptional(), class_validator_1.IsUrl()],
    UpdateCompanyDto.prototype,
    'website',
  );
  __decorate(
    [class_validator_1.IsOptional(), class_validator_1.IsString()],
    UpdateCompanyDto.prototype,
    'location',
  );
  __decorate(
    [class_validator_1.IsOptional(), class_validator_1.IsString()],
    UpdateCompanyDto.prototype,
    'logo',
  );
  return UpdateCompanyDto;
})();
exports.UpdateCompanyDto = UpdateCompanyDto;
