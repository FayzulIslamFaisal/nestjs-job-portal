"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.JobService = void 0;
var common_1 = require("@nestjs/common");
var JobService = /** @class */ (function () {
    function JobService(prisma) {
        this.prisma = prisma;
    }
    JobService.prototype.createJob = function (postJobDto, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var title, description, requirements, location, salary, jobType, experienceLevel, positionType, companyId, job;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        title = postJobDto.title, description = postJobDto.description, requirements = postJobDto.requirements, location = postJobDto.location, salary = postJobDto.salary, jobType = postJobDto.jobType, experienceLevel = postJobDto.experienceLevel, positionType = postJobDto.positionType, companyId = postJobDto.companyId;
                        return [4 /*yield*/, this.prisma.job.create({
                                data: {
                                    title: title,
                                    description: description,
                                    requirements: requirements,
                                    location: location,
                                    salary: salary,
                                    jobType: jobType,
                                    experienceLevel: experienceLevel,
                                    positionType: positionType,
                                    companyId: companyId,
                                    createdById: userId
                                }
                            })];
                    case 1:
                        job = _a.sent();
                        if (!job) {
                            throw new common_1.BadRequestException('Failed to create job');
                        }
                        return [2 /*return*/, job];
                }
            });
        });
    };
    JobService.prototype.getAllJobs = function (query) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var keyword, location, salary, jobType, salaryRange, jobs;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        keyword = query.keyword, location = query.location, salary = query.salary, jobType = query.jobType;
                        salaryRange = (_a = salary === null || salary === void 0 ? void 0 : salary.split('-')) !== null && _a !== void 0 ? _a : [];
                        if (!(keyword || location || salary || jobType)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.prisma.job.findMany({
                                where: __assign(__assign(__assign(__assign({}, (keyword && {
                                    OR: [
                                        { title: { contains: keyword, mode: 'insensitive' } },
                                        { description: { contains: keyword, mode: 'insensitive' } },
                                    ]
                                })), (location && {
                                    location: { contains: location, mode: 'insensitive' }
                                })), (salaryRange.length === 2 && {
                                    salary: {
                                        gte: parseInt(salaryRange[0], 10),
                                        lte: parseInt(salaryRange[1], 10)
                                    }
                                })), (jobType && {
                                    jobType: { equals: jobType }
                                })),
                                orderBy: {
                                    createdAt: 'desc'
                                },
                                include: {
                                    company: true
                                }
                            })];
                    case 1:
                        jobs = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.prisma.job.findMany({
                            skip: 0,
                            take: 6
                        })];
                    case 3:
                        jobs = _b.sent();
                        _b.label = 4;
                    case 4:
                        if (!jobs || jobs.length === 0) {
                            throw new common_1.NotFoundException('Job not found');
                        }
                        return [2 /*return*/, jobs];
                }
            });
        });
    };
    JobService.prototype.singleJob = function (jobId) {
        return __awaiter(this, void 0, void 0, function () {
            var job;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.job.findFirst({
                            where: { id: jobId },
                            include: {
                                company: true
                            }
                        })];
                    case 1:
                        job = _a.sent();
                        if (!job) {
                            throw new common_1.NotFoundException('Job not found');
                        }
                        return [2 /*return*/, job];
                }
            });
        });
    };
    JobService.prototype.favoriteJob = function (jobId, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var job, favorite;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.favorite.findFirst({
                            where: { jobId: jobId, userId: userId }
                        })];
                    case 1:
                        job = _a.sent();
                        if (job) {
                            throw new common_1.BadRequestException('this job is already favorited');
                        }
                        return [4 /*yield*/, this.prisma.favorite.create({
                                data: {
                                    userId: userId,
                                    jobId: jobId
                                }
                            })];
                    case 2:
                        favorite = _a.sent();
                        if (!favorite) {
                            throw new common_1.BadRequestException('Failed to favorite job');
                        }
                        return [2 /*return*/, favorite];
                }
            });
        });
    };
    JobService.prototype.getfavoritesJob = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var jobs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.favorite.findMany({
                            where: { userId: userId },
                            include: {
                                job: {
                                    include: {
                                        company: true
                                    }
                                }
                            }
                        })];
                    case 1:
                        jobs = _a.sent();
                        if (!jobs || jobs.length === 0) {
                            throw new common_1.NotFoundException('No favorites found');
                        }
                        return [2 /*return*/, jobs];
                }
            });
        });
    };
    JobService.prototype.getJobsByUserId = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var jobs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.job.findMany({
                            where: { createdById: userId },
                            include: {
                                company: true
                            },
                            orderBy: {
                                createdAt: 'desc'
                            }
                        })];
                    case 1:
                        jobs = _a.sent();
                        if (!jobs || jobs.length === 0) {
                            throw new common_1.NotFoundException('No jobs found for this user');
                        }
                        return [2 /*return*/, jobs];
                }
            });
        });
    };
    JobService = __decorate([
        common_1.Injectable()
    ], JobService);
    return JobService;
}());
exports.JobService = JobService;
