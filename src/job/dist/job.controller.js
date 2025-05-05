"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.JobController = void 0;
var common_1 = require("@nestjs/common");
var jwt_auth_guard_1 = require("src/auth/jwt-auth.guard");
var JobController = /** @class */ (function () {
    function JobController(jobService) {
        this.jobService = jobService;
    }
    JobController.prototype.postJob = function (postJobDto, req) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, job;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = req.user.id;
                        return [4 /*yield*/, this.jobService.createJob(postJobDto, userId)];
                    case 1:
                        job = _a.sent();
                        return [2 /*return*/, {
                                statusCode: 201,
                                status: 'success',
                                message: 'Job created successfully',
                                result: job
                            }];
                }
            });
        });
    };
    JobController.prototype.getAllJobs = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var jobs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.jobService.getAllJobs(query)];
                    case 1:
                        jobs = _a.sent();
                        return [2 /*return*/, {
                                statusCode: 200,
                                status: 'success',
                                message: 'Jobs fetched successfully',
                                results: jobs
                            }];
                }
            });
        });
    };
    JobController.prototype.getSingleJob = function (jobId) {
        return __awaiter(this, void 0, void 0, function () {
            var job;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.jobService.singleJob(jobId)];
                    case 1:
                        job = _a.sent();
                        return [2 /*return*/, {
                                statusCode: 200,
                                status: 'success',
                                message: 'Job fetched successfully',
                                result: job
                            }];
                }
            });
        });
    };
    JobController.prototype.favoriteJobByUserId = function (jobId, req) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, job;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = req.user.id;
                        return [4 /*yield*/, this.jobService.favoriteJob(jobId, userId)];
                    case 1:
                        job = _a.sent();
                        return [2 /*return*/, {
                                statusCode: 200,
                                status: 'success',
                                message: 'Job favorited successfully',
                                result: job
                            }];
                }
            });
        });
    };
    JobController.prototype.getFavorites = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, jobs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = req.user.id;
                        return [4 /*yield*/, this.jobService.getfavoritesJob(userId)];
                    case 1:
                        jobs = _a.sent();
                        return [2 /*return*/, {
                                statusCode: 200,
                                status: 'success',
                                message: 'Favorites fetched successfully',
                                results: jobs
                            }];
                }
            });
        });
    };
    JobController.prototype.getJobsByUserId = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, jobs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = req.user.id;
                        return [4 /*yield*/, this.jobService.getJobsByUserId(userId)];
                    case 1:
                        jobs = _a.sent();
                        return [2 /*return*/, {
                                statusCode: 200,
                                status: "success",
                                message: "Jobs fetched successfully",
                                results: jobs
                            }];
                }
            });
        });
    };
    __decorate([
        common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
        common_1.Post('create'),
        __param(0, common_1.Body()), __param(1, common_1.Req())
    ], JobController.prototype, "postJob");
    __decorate([
        common_1.Get('/all'),
        __param(0, common_1.Query())
    ], JobController.prototype, "getAllJobs");
    __decorate([
        common_1.Get('/single/:id'),
        __param(0, common_1.Param('id'))
    ], JobController.prototype, "getSingleJob");
    __decorate([
        common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
        common_1.Post('/favorite/:id'),
        __param(0, common_1.Param('id')), __param(1, common_1.Req())
    ], JobController.prototype, "favoriteJobByUserId");
    __decorate([
        common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
        common_1.Get('/favorites'),
        __param(0, common_1.Req())
    ], JobController.prototype, "getFavorites");
    __decorate([
        common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
        common_1.Post("/admin"),
        __param(0, common_1.Req())
    ], JobController.prototype, "getJobsByUserId");
    JobController = __decorate([
        common_1.Controller('job')
    ], JobController);
    return JobController;
}());
exports.JobController = JobController;
