"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.ApplicationService = void 0;
var common_1 = require("@nestjs/common");
var ApplicationService = /** @class */ (function () {
    function ApplicationService(prisma) {
        this.prisma = prisma;
    }
    ApplicationService.prototype.applyJob = function (userId, jobId) {
        return __awaiter(this, void 0, void 0, function () {
            var existApplicant, job, newApplication;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!jobId) {
                            throw new common_1.NotFoundException("Job Id Required");
                        }
                        return [4 /*yield*/, this.prisma.application.findFirst({
                                where: {
                                    jobId: jobId,
                                    applicantId: userId
                                }
                            })];
                    case 1:
                        existApplicant = _a.sent();
                        if (existApplicant) {
                            throw new common_1.BadRequestException("You Have already Applied for this Job");
                        }
                        return [4 /*yield*/, this.prisma.job.findUnique({
                                where: {
                                    id: jobId
                                }
                            })];
                    case 2:
                        job = _a.sent();
                        if (!job) {
                            throw new common_1.BadRequestException("Job Not Found");
                        }
                        return [4 /*yield*/, this.prisma.application.create({
                                data: {
                                    jobId: jobId,
                                    applicantId: userId
                                }
                            })];
                    case 3:
                        newApplication = _a.sent();
                        return [2 /*return*/, newApplication];
                }
            });
        });
    };
    ApplicationService.prototype.getAppliedJob = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var applicants;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.application.findMany({
                            where: { applicantId: userId },
                            orderBy: {
                                createdAt: "desc"
                            },
                            include: {
                                job: { include: { company: true } }
                            }
                        })];
                    case 1:
                        applicants = _a.sent();
                        if (!applicants || (applicants === null || applicants === void 0 ? void 0 : applicants.length) === 0) {
                            throw new common_1.NotFoundException();
                        }
                        return [2 /*return*/, applicants];
                }
            });
        });
    };
    ApplicationService.prototype.getApplicants = function (jobId) {
        return __awaiter(this, void 0, void 0, function () {
            var job;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.job.findUnique({
                            where: {
                                id: jobId
                            },
                            include: {
                                applications: {
                                    orderBy: { createdAt: "desc" },
                                    include: {
                                        applicant: true
                                    }
                                }
                            }
                        })];
                    case 1:
                        job = _a.sent();
                        if (!job) {
                            throw new common_1.NotFoundException();
                        }
                        return [2 /*return*/, job];
                }
            });
        });
    };
    ApplicationService.prototype.updatedStatus = function (id, updateStatusDto) {
        return __awaiter(this, void 0, void 0, function () {
            var status, application, updateapplication;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        status = updateStatusDto.status;
                        return [4 /*yield*/, this.prisma.application.findUnique({
                                where: {
                                    id: id
                                }
                            })];
                    case 1:
                        application = _a.sent();
                        if (!application) {
                            throw new common_1.NotFoundException();
                        }
                        return [4 /*yield*/, this.prisma.application.update({
                                where: {
                                    id: id
                                },
                                data: {
                                    status: status
                                }
                            })];
                    case 2:
                        updateapplication = _a.sent();
                        return [2 /*return*/, updateapplication];
                }
            });
        });
    };
    ApplicationService = __decorate([
        common_1.Injectable()
    ], ApplicationService);
    return ApplicationService;
}());
exports.ApplicationService = ApplicationService;
