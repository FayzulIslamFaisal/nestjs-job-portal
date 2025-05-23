/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Job
 *
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>;
/**
 * Model Company
 *
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>;
/**
 * Model Application
 *
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>;
/**
 * Model Favorite
 *
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
    STUDENT: 'STUDENT';
    TEACHER: 'TEACHER';
    ADMIN: 'ADMIN';
    RECRUITER: 'RECRUITER';
  };

  export type Role = (typeof Role)[keyof typeof Role];

  export const applicationStatus: {
    PENDING: 'PENDING';
    ACCEPTED: 'ACCEPTED';
    REJECTED: 'REJECTED';
  };

  export type applicationStatus =
    (typeof applicationStatus)[keyof typeof applicationStatus];
}

export type Role = $Enums.Role;

export const Role: typeof $Enums.Role;

export type applicationStatus = $Enums.applicationStatus;

export const applicationStatus: typeof $Enums.applicationStatus;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number },
  ): $Utils.JsPromise<R>;

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(
    command: Prisma.InputJsonObject,
  ): Prisma.PrismaPromise<Prisma.JsonObject>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Jobs
   * const jobs = await prisma.job.findMany()
   * ```
   */
  get job(): Prisma.JobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Applications
   * const applications = await prisma.application.findMany()
   * ```
   */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Favorites
   * const favorites = await prisma.favorite.findMany()
   * ```
   */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    Job: 'Job';
    Company: 'Company';
    Application: 'Application';
    Favorite: 'Favorite';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'user' | 'job' | 'company' | 'application' | 'favorite';
      txIsolationLevel: never;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>;
        fields: Prisma.JobFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[];
          };
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$JobPayload>;
          };
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateJob>;
          };
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>;
            result: $Utils.Optional<JobGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.JobFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.JobAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.JobCountArgs<ExtArgs>;
            result: $Utils.Optional<JobCountAggregateOutputType> | number;
          };
        };
      };
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>;
        fields: Prisma.CompanyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[];
          };
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.CompanyFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.CompanyAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>;
        fields: Prisma.ApplicationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
          };
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
          };
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[];
          };
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
          };
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
          };
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
          };
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>;
          };
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateApplication>;
          };
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ApplicationGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.ApplicationFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.ApplicationAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<ApplicationCountAggregateOutputType>
              | number;
          };
        };
      };
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>;
        fields: Prisma.FavoriteFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>;
          };
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>;
          };
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[];
          };
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>;
          };
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>;
          };
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>;
          };
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>;
          };
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFavorite>;
          };
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FavoriteGroupByOutputType>[];
          };
          findRaw: {
            args: Prisma.FavoriteFindRawArgs<ExtArgs>;
            result: JsonObject;
          };
          aggregateRaw: {
            args: Prisma.FavoriteAggregateRawArgs<ExtArgs>;
            result: JsonObject;
          };
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>;
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject;
          result: Prisma.JsonObject;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    job?: JobOmit;
    company?: CompanyOmit;
    application?: ApplicationOmit;
    favorite?: FavoriteOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Company: number;
    Application: number;
    Favorite: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    Company?: boolean | UserCountOutputTypeCountCompanyArgs;
    Application?: boolean | UserCountOutputTypeCountApplicationArgs;
    Favorite?: boolean | UserCountOutputTypeCountFavoriteArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CompanyWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ApplicationWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoriteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FavoriteWhereInput;
  };

  /**
   * Count Type JobCountOutputType
   */

  export type JobCountOutputType = {
    Application: number;
    Favorite: number;
  };

  export type JobCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    Application?: boolean | JobCountOutputTypeCountApplicationArgs;
    Favorite?: boolean | JobCountOutputTypeCountFavoriteArgs;
  };

  // Custom InputTypes
  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the JobCountOutputType
     */
    select?: JobCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountApplicationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ApplicationWhereInput;
  };

  /**
   * JobCountOutputType without action
   */
  export type JobCountOutputTypeCountFavoriteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FavoriteWhereInput;
  };

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    Job: number;
  };

  export type CompanyCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    Job?: boolean | CompanyCountOutputTypeCountJobArgs;
  };

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountJobArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    fullName: string | null;
    phoneNumber: string | null;
    profileBio: string | null;
    role: $Enums.Role | null;
    profileResume: string | null;
    profileResumeOriginalName: string | null;
    profileCompanyId: string | null;
    profilePhoto: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    fullName: string | null;
    phoneNumber: string | null;
    profileBio: string | null;
    role: $Enums.Role | null;
    profileResume: string | null;
    profileResumeOriginalName: string | null;
    profileCompanyId: string | null;
    profilePhoto: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    password: number;
    fullName: number;
    phoneNumber: number;
    profileBio: number;
    role: number;
    profileSkills: number;
    profileResume: number;
    profileResumeOriginalName: number;
    profileCompanyId: number;
    profilePhoto: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    fullName?: true;
    phoneNumber?: true;
    profileBio?: true;
    role?: true;
    profileResume?: true;
    profileResumeOriginalName?: true;
    profileCompanyId?: true;
    profilePhoto?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    fullName?: true;
    phoneNumber?: true;
    profileBio?: true;
    role?: true;
    profileResume?: true;
    profileResumeOriginalName?: true;
    profileCompanyId?: true;
    profilePhoto?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    fullName?: true;
    phoneNumber?: true;
    profileBio?: true;
    role?: true;
    profileSkills?: true;
    profileResume?: true;
    profileResumeOriginalName?: true;
    profileCompanyId?: true;
    profilePhoto?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    password: string;
    fullName: string;
    phoneNumber: string;
    profileBio: string | null;
    role: $Enums.Role;
    profileSkills: string[];
    profileResume: string | null;
    profileResumeOriginalName: string | null;
    profileCompanyId: string | null;
    profilePhoto: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password?: boolean;
      fullName?: boolean;
      phoneNumber?: boolean;
      profileBio?: boolean;
      role?: boolean;
      profileSkills?: boolean;
      profileResume?: boolean;
      profileResumeOriginalName?: boolean;
      profileCompanyId?: boolean;
      profilePhoto?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      Company?: boolean | User$CompanyArgs<ExtArgs>;
      Application?: boolean | User$ApplicationArgs<ExtArgs>;
      Favorite?: boolean | User$FavoriteArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    password?: boolean;
    fullName?: boolean;
    phoneNumber?: boolean;
    profileBio?: boolean;
    role?: boolean;
    profileSkills?: boolean;
    profileResume?: boolean;
    profileResumeOriginalName?: boolean;
    profileCompanyId?: boolean;
    profilePhoto?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'email'
    | 'password'
    | 'fullName'
    | 'phoneNumber'
    | 'profileBio'
    | 'role'
    | 'profileSkills'
    | 'profileResume'
    | 'profileResumeOriginalName'
    | 'profileCompanyId'
    | 'profilePhoto'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    Company?: boolean | User$CompanyArgs<ExtArgs>;
    Application?: boolean | User$ApplicationArgs<ExtArgs>;
    Favorite?: boolean | User$FavoriteArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      Company: Prisma.$CompanyPayload<ExtArgs>[];
      Application: Prisma.$ApplicationPayload<ExtArgs>[];
      Favorite: Prisma.$FavoritePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        password: string;
        fullName: string;
        phoneNumber: string;
        profileBio: string | null;
        role: $Enums.Role;
        profileSkills: string[];
        profileResume: string | null;
        profileResumeOriginalName: string | null;
        profileCompanyId: string | null;
        profilePhoto: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    Company<T extends User$CompanyArgs<ExtArgs> = {}>(
      args?: Subset<T, User$CompanyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CompanyPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    Application<T extends User$ApplicationArgs<ExtArgs> = {}>(
      args?: Subset<T, User$ApplicationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ApplicationPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    Favorite<T extends User$FavoriteArgs<ExtArgs> = {}>(
      args?: Subset<T, User$FavoriteArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$FavoritePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
    readonly fullName: FieldRef<'User', 'String'>;
    readonly phoneNumber: FieldRef<'User', 'String'>;
    readonly profileBio: FieldRef<'User', 'String'>;
    readonly role: FieldRef<'User', 'Role'>;
    readonly profileSkills: FieldRef<'User', 'String[]'>;
    readonly profileResume: FieldRef<'User', 'String'>;
    readonly profileResumeOriginalName: FieldRef<'User', 'String'>;
    readonly profileCompanyId: FieldRef<'User', 'String'>;
    readonly profilePhoto: FieldRef<'User', 'String'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User findRaw
   */
  export type UserFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * User.Company
   */
  export type User$CompanyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    where?: CompanyWhereInput;
    orderBy?:
      | CompanyOrderByWithRelationInput
      | CompanyOrderByWithRelationInput[];
    cursor?: CompanyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * User.Application
   */
  export type User$ApplicationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    where?: ApplicationWhereInput;
    orderBy?:
      | ApplicationOrderByWithRelationInput
      | ApplicationOrderByWithRelationInput[];
    cursor?: ApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * User.Favorite
   */
  export type User$FavoriteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
    where?: FavoriteWhereInput;
    orderBy?:
      | FavoriteOrderByWithRelationInput
      | FavoriteOrderByWithRelationInput[];
    cursor?: FavoriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null;
    _avg: JobAvgAggregateOutputType | null;
    _sum: JobSumAggregateOutputType | null;
    _min: JobMinAggregateOutputType | null;
    _max: JobMaxAggregateOutputType | null;
  };

  export type JobAvgAggregateOutputType = {
    salary: number | null;
    positionType: number | null;
  };

  export type JobSumAggregateOutputType = {
    salary: number | null;
    positionType: number | null;
  };

  export type JobMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    location: string | null;
    salary: number | null;
    jobType: string | null;
    experienceLevel: string | null;
    positionType: number | null;
    companyId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type JobMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    location: string | null;
    salary: number | null;
    jobType: string | null;
    experienceLevel: string | null;
    positionType: number | null;
    companyId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type JobCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    requirements: number;
    location: number;
    salary: number;
    jobType: number;
    experienceLevel: number;
    positionType: number;
    companyId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type JobAvgAggregateInputType = {
    salary?: true;
    positionType?: true;
  };

  export type JobSumAggregateInputType = {
    salary?: true;
    positionType?: true;
  };

  export type JobMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    location?: true;
    salary?: true;
    jobType?: true;
    experienceLevel?: true;
    positionType?: true;
    companyId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type JobMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    location?: true;
    salary?: true;
    jobType?: true;
    experienceLevel?: true;
    positionType?: true;
    companyId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type JobCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    requirements?: true;
    location?: true;
    salary?: true;
    jobType?: true;
    experienceLevel?: true;
    positionType?: true;
    companyId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type JobAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Jobs
     **/
    _count?: true | JobCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: JobAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: JobSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: JobMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: JobMaxAggregateInputType;
  };

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
    [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>;
  };

  export type JobGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: JobWhereInput;
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[];
    by: JobScalarFieldEnum[] | JobScalarFieldEnum;
    having?: JobScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JobCountAggregateInputType | true;
    _avg?: JobAvgAggregateInputType;
    _sum?: JobSumAggregateInputType;
    _min?: JobMinAggregateInputType;
    _max?: JobMaxAggregateInputType;
  };

  export type JobGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    requirements: string[];
    location: string;
    salary: number;
    jobType: string;
    experienceLevel: string;
    positionType: number;
    companyId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: JobCountAggregateOutputType | null;
    _avg: JobAvgAggregateOutputType | null;
    _sum: JobSumAggregateOutputType | null;
    _min: JobMinAggregateOutputType | null;
    _max: JobMaxAggregateOutputType | null;
  };

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> & {
        [P in keyof T & keyof JobGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], JobGroupByOutputType[P]>
          : GetScalarType<T[P], JobGroupByOutputType[P]>;
      }
    >
  >;

  export type JobSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      requirements?: boolean;
      location?: boolean;
      salary?: boolean;
      jobType?: boolean;
      experienceLevel?: boolean;
      positionType?: boolean;
      companyId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      company?: boolean | CompanyDefaultArgs<ExtArgs>;
      Application?: boolean | Job$ApplicationArgs<ExtArgs>;
      Favorite?: boolean | Job$FavoriteArgs<ExtArgs>;
      _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['job']
  >;

  export type JobSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    requirements?: boolean;
    location?: boolean;
    salary?: boolean;
    jobType?: boolean;
    experienceLevel?: boolean;
    positionType?: boolean;
    companyId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type JobOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'title'
    | 'description'
    | 'requirements'
    | 'location'
    | 'salary'
    | 'jobType'
    | 'experienceLevel'
    | 'positionType'
    | 'companyId'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['job']
  >;
  export type JobInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>;
    Application?: boolean | Job$ApplicationArgs<ExtArgs>;
    Favorite?: boolean | Job$FavoriteArgs<ExtArgs>;
    _count?: boolean | JobCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $JobPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Job';
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>;
      Application: Prisma.$ApplicationPayload<ExtArgs>[];
      Favorite: Prisma.$FavoritePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string;
        requirements: string[];
        location: string;
        salary: number;
        jobType: string;
        experienceLevel: string;
        positionType: number;
        companyId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['job']
    >;
    composites: {};
  };

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> =
    $Result.GetResult<Prisma.$JobPayload, S>;

  type JobCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<JobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JobCountAggregateInputType | true;
  };

  export interface JobDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Job'];
      meta: { name: 'Job' };
    };
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(
      args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(
      args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(
      args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(
      args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     *
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     *
     */
    findMany<T extends JobFindManyArgs>(
      args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     *
     */
    create<T extends JobCreateArgs>(
      args: SelectSubset<T, JobCreateArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends JobCreateManyArgs>(
      args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     *
     */
    delete<T extends JobDeleteArgs>(
      args: SelectSubset<T, JobDeleteArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends JobUpdateArgs>(
      args: SelectSubset<T, JobUpdateArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends JobDeleteManyArgs>(
      args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends JobUpdateManyArgs>(
      args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(
      args: SelectSubset<T, JobUpsertArgs<ExtArgs>>,
    ): Prisma__JobClient<
      $Result.GetResult<
        Prisma.$JobPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Jobs that matches the filter.
     * @param {JobFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const job = await prisma.job.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: JobFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Job.
     * @param {JobAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const job = await prisma.job.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: JobAggregateRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
     **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends JobAggregateArgs>(
      args: Subset<T, JobAggregateArgs>,
    ): Prisma.PrismaPromise<GetJobAggregateType<T>>;

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetJobGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Job model
     */
    readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CompanyDefaultArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      | $Result.GetResult<
          Prisma.$CompanyPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    Application<T extends Job$ApplicationArgs<ExtArgs> = {}>(
      args?: Subset<T, Job$ApplicationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ApplicationPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    Favorite<T extends Job$FavoriteArgs<ExtArgs> = {}>(
      args?: Subset<T, Job$FavoriteArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$FavoritePayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Job model
   */
  interface JobFieldRefs {
    readonly id: FieldRef<'Job', 'String'>;
    readonly title: FieldRef<'Job', 'String'>;
    readonly description: FieldRef<'Job', 'String'>;
    readonly requirements: FieldRef<'Job', 'String[]'>;
    readonly location: FieldRef<'Job', 'String'>;
    readonly salary: FieldRef<'Job', 'Float'>;
    readonly jobType: FieldRef<'Job', 'String'>;
    readonly experienceLevel: FieldRef<'Job', 'String'>;
    readonly positionType: FieldRef<'Job', 'Int'>;
    readonly companyId: FieldRef<'Job', 'String'>;
    readonly createdAt: FieldRef<'Job', 'DateTime'>;
    readonly updatedAt: FieldRef<'Job', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput;
  };

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput;
  };

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jobs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * Job findMany
   */
  export type JobFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jobs.
     */
    skip?: number;
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * Job create
   */
  export type JobCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>;
  };

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[];
  };

  /**
   * Job update
   */
  export type JobUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>;
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput;
  };

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>;
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput;
    /**
     * Limit how many Jobs to update.
     */
    limit?: number;
  };

  /**
   * Job upsert
   */
  export type JobUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput;
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>;
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>;
  };

  /**
   * Job delete
   */
  export type JobDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput;
  };

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput;
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number;
  };

  /**
   * Job findRaw
   */
  export type JobFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Job aggregateRaw
   */
  export type JobAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Job.Application
   */
  export type Job$ApplicationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    where?: ApplicationWhereInput;
    orderBy?:
      | ApplicationOrderByWithRelationInput
      | ApplicationOrderByWithRelationInput[];
    cursor?: ApplicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * Job.Favorite
   */
  export type Job$FavoriteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
    where?: FavoriteWhereInput;
    orderBy?:
      | FavoriteOrderByWithRelationInput
      | FavoriteOrderByWithRelationInput[];
    cursor?: FavoriteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[];
  };

  /**
   * Job without action
   */
  export type JobDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
  };

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    location: string | null;
    website: string | null;
    logo: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    location: string | null;
    website: string | null;
    logo: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    location: number;
    website: number;
    logo: number;
    userId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    location?: true;
    website?: true;
    logo?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    location?: true;
    website?: true;
    logo?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    location?: true;
    website?: true;
    logo?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Companies to fetch.
     */
    orderBy?:
      | CompanyOrderByWithRelationInput
      | CompanyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type CompanyGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CompanyWhereInput;
    orderBy?:
      | CompanyOrderByWithAggregationInput
      | CompanyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: CompanyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    location: string | null;
    website: string | null;
    logo: string | null;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CompanyGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
        }
      >
    >;

  export type CompanySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      location?: boolean;
      website?: boolean;
      logo?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      Job?: boolean | Company$JobArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type CompanySelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    location?: boolean;
    website?: boolean;
    logo?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type CompanyOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'name'
    | 'description'
    | 'location'
    | 'website'
    | 'logo'
    | 'userId'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['company']
  >;
  export type CompanyInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    Job?: boolean | Company$JobArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $CompanyPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Company';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      Job: Prisma.$JobPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        location: string | null;
        website: string | null;
        logo: string | null;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type CompanyGetPayload<
    S extends boolean | null | undefined | CompanyDefaultArgs,
  > = $Result.GetResult<Prisma.$CompanyPayload, S>;

  type CompanyCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface CompanyDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Company'];
      meta: { name: 'Company' };
    };
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(
      args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(
      args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CompanyFindManyArgs>(
      args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     */
    create<T extends CompanyCreateArgs>(
      args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CompanyCreateManyArgs>(
      args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     */
    delete<T extends CompanyDeleteArgs>(
      args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CompanyUpdateArgs>(
      args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CompanyDeleteManyArgs>(
      args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CompanyUpdateManyArgs>(
      args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(
      args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>,
    ): Prisma__CompanyClient<
      $Result.GetResult<
        Prisma.$CompanyPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Companies that matches the filter.
     * @param {CompanyFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const company = await prisma.company.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CompanyFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Company.
     * @param {CompanyAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const company = await prisma.company.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(
      args?: CompanyAggregateRawArgs,
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetCompanyGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Company model
     */
    readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    Job<T extends Company$JobArgs<ExtArgs> = {}>(
      args?: Subset<T, Company$JobArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$JobPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<'Company', 'String'>;
    readonly name: FieldRef<'Company', 'String'>;
    readonly description: FieldRef<'Company', 'String'>;
    readonly location: FieldRef<'Company', 'String'>;
    readonly website: FieldRef<'Company', 'String'>;
    readonly logo: FieldRef<'Company', 'String'>;
    readonly userId: FieldRef<'Company', 'String'>;
    readonly createdAt: FieldRef<'Company', 'DateTime'>;
    readonly updatedAt: FieldRef<'Company', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput;
  };

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput;
  };

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Companies to fetch.
     */
    orderBy?:
      | CompanyOrderByWithRelationInput
      | CompanyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Companies to fetch.
     */
    orderBy?:
      | CompanyOrderByWithRelationInput
      | CompanyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Companies to fetch.
     */
    orderBy?:
      | CompanyOrderByWithRelationInput
      | CompanyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * Company create
   */
  export type CompanyCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>;
  };

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[];
  };

  /**
   * Company update
   */
  export type CompanyUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>;
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput;
  };

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>;
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput;
    /**
     * Limit how many Companies to update.
     */
    limit?: number;
  };

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput;
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>;
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>;
  };

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput;
  };

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput;
    /**
     * Limit how many Companies to delete.
     */
    limit?: number;
  };

  /**
   * Company findRaw
   */
  export type CompanyFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Company aggregateRaw
   */
  export type CompanyAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Company.Job
   */
  export type Company$JobArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null;
    where?: JobWhereInput;
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[];
    cursor?: JobWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[];
  };

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null;
  };

  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null;
    _min: ApplicationMinAggregateOutputType | null;
    _max: ApplicationMaxAggregateOutputType | null;
  };

  export type ApplicationMinAggregateOutputType = {
    id: string | null;
    applicantId: string | null;
    jobId: string | null;
    status: $Enums.applicationStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ApplicationMaxAggregateOutputType = {
    id: string | null;
    applicantId: string | null;
    jobId: string | null;
    status: $Enums.applicationStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ApplicationCountAggregateOutputType = {
    id: number;
    applicantId: number;
    jobId: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ApplicationMinAggregateInputType = {
    id?: true;
    applicantId?: true;
    jobId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ApplicationMaxAggregateInputType = {
    id?: true;
    applicantId?: true;
    jobId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ApplicationCountAggregateInputType = {
    id?: true;
    applicantId?: true;
    jobId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ApplicationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applications to fetch.
     */
    orderBy?:
      | ApplicationOrderByWithRelationInput
      | ApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Applications
     **/
    _count?: true | ApplicationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ApplicationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ApplicationMaxAggregateInputType;
  };

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> =
    {
      [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateApplication[P]>
        : GetScalarType<T[P], AggregateApplication[P]>;
    };

  export type ApplicationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ApplicationWhereInput;
    orderBy?:
      | ApplicationOrderByWithAggregationInput
      | ApplicationOrderByWithAggregationInput[];
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum;
    having?: ApplicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApplicationCountAggregateInputType | true;
    _min?: ApplicationMinAggregateInputType;
    _max?: ApplicationMaxAggregateInputType;
  };

  export type ApplicationGroupByOutputType = {
    id: string;
    applicantId: string;
    jobId: string;
    status: $Enums.applicationStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: ApplicationCountAggregateOutputType | null;
    _min: ApplicationMinAggregateOutputType | null;
    _max: ApplicationMaxAggregateOutputType | null;
  };

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ApplicationGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof ApplicationGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>;
        }
      >
    >;

  export type ApplicationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      applicantId?: boolean;
      jobId?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      applicant?: boolean | UserDefaultArgs<ExtArgs>;
      job?: boolean | JobDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['application']
  >;

  export type ApplicationSelectScalar = {
    id?: boolean;
    applicantId?: boolean;
    jobId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ApplicationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'applicantId' | 'jobId' | 'status' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['application']
  >;
  export type ApplicationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    applicant?: boolean | UserDefaultArgs<ExtArgs>;
    job?: boolean | JobDefaultArgs<ExtArgs>;
  };

  export type $ApplicationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Application';
    objects: {
      applicant: Prisma.$UserPayload<ExtArgs>;
      job: Prisma.$JobPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        applicantId: string;
        jobId: string;
        status: $Enums.applicationStatus;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['application']
    >;
    composites: {};
  };

  type ApplicationGetPayload<
    S extends boolean | null | undefined | ApplicationDefaultArgs,
  > = $Result.GetResult<Prisma.$ApplicationPayload, S>;

  type ApplicationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    ApplicationFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ApplicationCountAggregateInputType | true;
  };

  export interface ApplicationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Application'];
      meta: { name: 'Application' };
    };
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(
      args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(
      args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     *
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ApplicationFindManyArgs>(
      args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     *
     */
    create<T extends ApplicationCreateArgs>(
      args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ApplicationCreateManyArgs>(
      args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     *
     */
    delete<T extends ApplicationDeleteArgs>(
      args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ApplicationUpdateArgs>(
      args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(
      args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ApplicationUpdateManyArgs>(
      args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(
      args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>,
    ): Prisma__ApplicationClient<
      $Result.GetResult<
        Prisma.$ApplicationPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Applications that matches the filter.
     * @param {ApplicationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const application = await prisma.application.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ApplicationFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Application.
     * @param {ApplicationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const application = await prisma.application.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(
      args?: ApplicationAggregateRawArgs,
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
     **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ApplicationAggregateArgs>(
      args: Subset<T, ApplicationAggregateArgs>,
    ): Prisma.PrismaPromise<GetApplicationAggregateType<T>>;

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetApplicationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Application model
     */
    readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    applicant<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    job<T extends JobDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, JobDefaultArgs<ExtArgs>>,
    ): Prisma__JobClient<
      | $Result.GetResult<
          Prisma.$JobPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<'Application', 'String'>;
    readonly applicantId: FieldRef<'Application', 'String'>;
    readonly jobId: FieldRef<'Application', 'String'>;
    readonly status: FieldRef<'Application', 'applicationStatus'>;
    readonly createdAt: FieldRef<'Application', 'DateTime'>;
    readonly updatedAt: FieldRef<'Application', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput;
  };

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput;
  };

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applications to fetch.
     */
    orderBy?:
      | ApplicationOrderByWithRelationInput
      | ApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applications to fetch.
     */
    orderBy?:
      | ApplicationOrderByWithRelationInput
      | ApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Applications to fetch.
     */
    orderBy?:
      | ApplicationOrderByWithRelationInput
      | ApplicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Applications.
     */
    skip?: number;
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[];
  };

  /**
   * Application create
   */
  export type ApplicationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>;
  };

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[];
  };

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>;
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput;
  };

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Applications.
     */
    data: XOR<
      ApplicationUpdateManyMutationInput,
      ApplicationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput;
    /**
     * Limit how many Applications to update.
     */
    limit?: number;
  };

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput;
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>;
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>;
  };

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput;
  };

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput;
    /**
     * Limit how many Applications to delete.
     */
    limit?: number;
  };

  /**
   * Application findRaw
   */
  export type ApplicationFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Application aggregateRaw
   */
  export type ApplicationAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null;
  };

  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null;
    _min: FavoriteMinAggregateOutputType | null;
    _max: FavoriteMaxAggregateOutputType | null;
  };

  export type FavoriteMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    jobId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type FavoriteMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    jobId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type FavoriteCountAggregateOutputType = {
    id: number;
    userId: number;
    jobId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type FavoriteMinAggregateInputType = {
    id?: true;
    userId?: true;
    jobId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type FavoriteMaxAggregateInputType = {
    id?: true;
    userId?: true;
    jobId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type FavoriteCountAggregateInputType = {
    id?: true;
    userId?: true;
    jobId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type FavoriteAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Favorites to fetch.
     */
    orderBy?:
      | FavoriteOrderByWithRelationInput
      | FavoriteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Favorites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Favorites
     **/
    _count?: true | FavoriteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FavoriteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FavoriteMaxAggregateInputType;
  };

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
    [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>;
  };

  export type FavoriteGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FavoriteWhereInput;
    orderBy?:
      | FavoriteOrderByWithAggregationInput
      | FavoriteOrderByWithAggregationInput[];
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum;
    having?: FavoriteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FavoriteCountAggregateInputType | true;
    _min?: FavoriteMinAggregateInputType;
    _max?: FavoriteMaxAggregateInputType;
  };

  export type FavoriteGroupByOutputType = {
    id: string;
    userId: string;
    jobId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: FavoriteCountAggregateOutputType | null;
    _min: FavoriteMinAggregateOutputType | null;
    _max: FavoriteMaxAggregateOutputType | null;
  };

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<FavoriteGroupByOutputType, T['by']> & {
          [P in keyof T & keyof FavoriteGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>;
        }
      >
    >;

  export type FavoriteSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      jobId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      job?: boolean | JobDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['favorite']
  >;

  export type FavoriteSelectScalar = {
    id?: boolean;
    userId?: boolean;
    jobId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type FavoriteOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'userId' | 'jobId' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['favorite']
  >;
  export type FavoriteInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    job?: boolean | JobDefaultArgs<ExtArgs>;
  };

  export type $FavoritePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Favorite';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      job: Prisma.$JobPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        jobId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['favorite']
    >;
    composites: {};
  };

  type FavoriteGetPayload<
    S extends boolean | null | undefined | FavoriteDefaultArgs,
  > = $Result.GetResult<Prisma.$FavoritePayload, S>;

  type FavoriteCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FavoriteCountAggregateInputType | true;
  };

  export interface FavoriteDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Favorite'];
      meta: { name: 'Favorite' };
    };
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(
      args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>,
    ): Prisma__FavoriteClient<
      $Result.GetResult<
        Prisma.$FavoritePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(
      args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__FavoriteClient<
      $Result.GetResult<
        Prisma.$FavoritePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(
      args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>,
    ): Prisma__FavoriteClient<
      $Result.GetResult<
        Prisma.$FavoritePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__FavoriteClient<
      $Result.GetResult<
        Prisma.$FavoritePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     *
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FavoriteFindManyArgs>(
      args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FavoritePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     *
     */
    create<T extends FavoriteCreateArgs>(
      args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>,
    ): Prisma__FavoriteClient<
      $Result.GetResult<
        Prisma.$FavoritePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FavoriteCreateManyArgs>(
      args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     *
     */
    delete<T extends FavoriteDeleteArgs>(
      args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>,
    ): Prisma__FavoriteClient<
      $Result.GetResult<
        Prisma.$FavoritePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FavoriteUpdateArgs>(
      args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>,
    ): Prisma__FavoriteClient<
      $Result.GetResult<
        Prisma.$FavoritePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(
      args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FavoriteUpdateManyArgs>(
      args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(
      args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>,
    ): Prisma__FavoriteClient<
      $Result.GetResult<
        Prisma.$FavoritePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Favorites that matches the filter.
     * @param {FavoriteFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const favorite = await prisma.favorite.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FavoriteFindRawArgs): Prisma.PrismaPromise<JsonObject>;

    /**
     * Perform aggregation operations on a Favorite.
     * @param {FavoriteAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const favorite = await prisma.favorite.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(
      args?: FavoriteAggregateRawArgs,
    ): Prisma.PrismaPromise<JsonObject>;

    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
     **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends FavoriteAggregateArgs>(
      args: Subset<T, FavoriteAggregateArgs>,
    ): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>;

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetFavoriteGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Favorite model
     */
    readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    job<T extends JobDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, JobDefaultArgs<ExtArgs>>,
    ): Prisma__JobClient<
      | $Result.GetResult<
          Prisma.$JobPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly id: FieldRef<'Favorite', 'String'>;
    readonly userId: FieldRef<'Favorite', 'String'>;
    readonly jobId: FieldRef<'Favorite', 'String'>;
    readonly createdAt: FieldRef<'Favorite', 'DateTime'>;
    readonly updatedAt: FieldRef<'Favorite', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput;
  };

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput;
  };

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Favorites to fetch.
     */
    orderBy?:
      | FavoriteOrderByWithRelationInput
      | FavoriteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Favorites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[];
  };

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Favorites to fetch.
     */
    orderBy?:
      | FavoriteOrderByWithRelationInput
      | FavoriteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Favorites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[];
  };

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Favorites to fetch.
     */
    orderBy?:
      | FavoriteOrderByWithRelationInput
      | FavoriteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Favorites.
     */
    skip?: number;
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[];
  };

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>;
  };

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[];
  };

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>;
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput;
  };

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<
      FavoriteUpdateManyMutationInput,
      FavoriteUncheckedUpdateManyInput
    >;
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput;
    /**
     * Limit how many Favorites to update.
     */
    limit?: number;
  };

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput;
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>;
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>;
  };

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput;
  };

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput;
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number;
  };

  /**
   * Favorite findRaw
   */
  export type FavoriteFindRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Favorite aggregateRaw
   */
  export type FavoriteAggregateRawArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue;
  };

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    password: 'password';
    fullName: 'fullName';
    phoneNumber: 'phoneNumber';
    profileBio: 'profileBio';
    role: 'role';
    profileSkills: 'profileSkills';
    profileResume: 'profileResume';
    profileResumeOriginalName: 'profileResumeOriginalName';
    profileCompanyId: 'profileCompanyId';
    profilePhoto: 'profilePhoto';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const JobScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    requirements: 'requirements';
    location: 'location';
    salary: 'salary';
    jobType: 'jobType';
    experienceLevel: 'experienceLevel';
    positionType: 'positionType';
    companyId: 'companyId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type JobScalarFieldEnum =
    (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    location: 'location';
    website: 'website';
    logo: 'logo';
    userId: 'userId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type CompanyScalarFieldEnum =
    (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const ApplicationScalarFieldEnum: {
    id: 'id';
    applicantId: 'applicantId';
    jobId: 'jobId';
    status: 'status';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type ApplicationScalarFieldEnum =
    (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum];

  export const FavoriteScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    jobId: 'jobId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type FavoriteScalarFieldEnum =
    (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Role'
  >;

  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Role[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'applicationStatus'
   */
  export type EnumapplicationStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'applicationStatus'>;

  /**
   * Reference to a field of type 'applicationStatus[]'
   */
  export type ListEnumapplicationStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'applicationStatus[]'>;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    password?: StringFilter<'User'> | string;
    fullName?: StringFilter<'User'> | string;
    phoneNumber?: StringFilter<'User'> | string;
    profileBio?: StringNullableFilter<'User'> | string | null;
    role?: EnumRoleFilter<'User'> | $Enums.Role;
    profileSkills?: StringNullableListFilter<'User'>;
    profileResume?: StringNullableFilter<'User'> | string | null;
    profileResumeOriginalName?: StringNullableFilter<'User'> | string | null;
    profileCompanyId?: StringNullableFilter<'User'> | string | null;
    profilePhoto?: StringNullableFilter<'User'> | string | null;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
    Company?: CompanyListRelationFilter;
    Application?: ApplicationListRelationFilter;
    Favorite?: FavoriteListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    fullName?: SortOrder;
    phoneNumber?: SortOrder;
    profileBio?: SortOrder;
    role?: SortOrder;
    profileSkills?: SortOrder;
    profileResume?: SortOrder;
    profileResumeOriginalName?: SortOrder;
    profileCompanyId?: SortOrder;
    profilePhoto?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    Company?: CompanyOrderByRelationAggregateInput;
    Application?: ApplicationOrderByRelationAggregateInput;
    Favorite?: FavoriteOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      password?: StringFilter<'User'> | string;
      fullName?: StringFilter<'User'> | string;
      phoneNumber?: StringFilter<'User'> | string;
      profileBio?: StringNullableFilter<'User'> | string | null;
      role?: EnumRoleFilter<'User'> | $Enums.Role;
      profileSkills?: StringNullableListFilter<'User'>;
      profileResume?: StringNullableFilter<'User'> | string | null;
      profileResumeOriginalName?: StringNullableFilter<'User'> | string | null;
      profileCompanyId?: StringNullableFilter<'User'> | string | null;
      profilePhoto?: StringNullableFilter<'User'> | string | null;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeFilter<'User'> | Date | string;
      Company?: CompanyListRelationFilter;
      Application?: ApplicationListRelationFilter;
      Favorite?: FavoriteListRelationFilter;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    fullName?: SortOrder;
    phoneNumber?: SortOrder;
    profileBio?: SortOrder;
    role?: SortOrder;
    profileSkills?: SortOrder;
    profileResume?: SortOrder;
    profileResumeOriginalName?: SortOrder;
    profileCompanyId?: SortOrder;
    profilePhoto?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    password?: StringWithAggregatesFilter<'User'> | string;
    fullName?: StringWithAggregatesFilter<'User'> | string;
    phoneNumber?: StringWithAggregatesFilter<'User'> | string;
    profileBio?: StringNullableWithAggregatesFilter<'User'> | string | null;
    role?: EnumRoleWithAggregatesFilter<'User'> | $Enums.Role;
    profileSkills?: StringNullableListFilter<'User'>;
    profileResume?: StringNullableWithAggregatesFilter<'User'> | string | null;
    profileResumeOriginalName?:
      | StringNullableWithAggregatesFilter<'User'>
      | string
      | null;
    profileCompanyId?:
      | StringNullableWithAggregatesFilter<'User'>
      | string
      | null;
    profilePhoto?: StringNullableWithAggregatesFilter<'User'> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[];
    OR?: JobWhereInput[];
    NOT?: JobWhereInput | JobWhereInput[];
    id?: StringFilter<'Job'> | string;
    title?: StringFilter<'Job'> | string;
    description?: StringFilter<'Job'> | string;
    requirements?: StringNullableListFilter<'Job'>;
    location?: StringFilter<'Job'> | string;
    salary?: FloatFilter<'Job'> | number;
    jobType?: StringFilter<'Job'> | string;
    experienceLevel?: StringFilter<'Job'> | string;
    positionType?: IntFilter<'Job'> | number;
    companyId?: StringFilter<'Job'> | string;
    createdAt?: DateTimeFilter<'Job'> | Date | string;
    updatedAt?: DateTimeFilter<'Job'> | Date | string;
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>;
    Application?: ApplicationListRelationFilter;
    Favorite?: FavoriteListRelationFilter;
  };

  export type JobOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    requirements?: SortOrder;
    location?: SortOrder;
    salary?: SortOrder;
    jobType?: SortOrder;
    experienceLevel?: SortOrder;
    positionType?: SortOrder;
    companyId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    company?: CompanyOrderByWithRelationInput;
    Application?: ApplicationOrderByRelationAggregateInput;
    Favorite?: FavoriteOrderByRelationAggregateInput;
  };

  export type JobWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: JobWhereInput | JobWhereInput[];
      OR?: JobWhereInput[];
      NOT?: JobWhereInput | JobWhereInput[];
      title?: StringFilter<'Job'> | string;
      description?: StringFilter<'Job'> | string;
      requirements?: StringNullableListFilter<'Job'>;
      location?: StringFilter<'Job'> | string;
      salary?: FloatFilter<'Job'> | number;
      jobType?: StringFilter<'Job'> | string;
      experienceLevel?: StringFilter<'Job'> | string;
      positionType?: IntFilter<'Job'> | number;
      companyId?: StringFilter<'Job'> | string;
      createdAt?: DateTimeFilter<'Job'> | Date | string;
      updatedAt?: DateTimeFilter<'Job'> | Date | string;
      company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>;
      Application?: ApplicationListRelationFilter;
      Favorite?: FavoriteListRelationFilter;
    },
    'id'
  >;

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    requirements?: SortOrder;
    location?: SortOrder;
    salary?: SortOrder;
    jobType?: SortOrder;
    experienceLevel?: SortOrder;
    positionType?: SortOrder;
    companyId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: JobCountOrderByAggregateInput;
    _avg?: JobAvgOrderByAggregateInput;
    _max?: JobMaxOrderByAggregateInput;
    _min?: JobMinOrderByAggregateInput;
    _sum?: JobSumOrderByAggregateInput;
  };

  export type JobScalarWhereWithAggregatesInput = {
    AND?:
      | JobScalarWhereWithAggregatesInput
      | JobScalarWhereWithAggregatesInput[];
    OR?: JobScalarWhereWithAggregatesInput[];
    NOT?:
      | JobScalarWhereWithAggregatesInput
      | JobScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Job'> | string;
    title?: StringWithAggregatesFilter<'Job'> | string;
    description?: StringWithAggregatesFilter<'Job'> | string;
    requirements?: StringNullableListFilter<'Job'>;
    location?: StringWithAggregatesFilter<'Job'> | string;
    salary?: FloatWithAggregatesFilter<'Job'> | number;
    jobType?: StringWithAggregatesFilter<'Job'> | string;
    experienceLevel?: StringWithAggregatesFilter<'Job'> | string;
    positionType?: IntWithAggregatesFilter<'Job'> | number;
    companyId?: StringWithAggregatesFilter<'Job'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Job'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Job'> | Date | string;
  };

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[];
    OR?: CompanyWhereInput[];
    NOT?: CompanyWhereInput | CompanyWhereInput[];
    id?: StringFilter<'Company'> | string;
    name?: StringFilter<'Company'> | string;
    description?: StringNullableFilter<'Company'> | string | null;
    location?: StringNullableFilter<'Company'> | string | null;
    website?: StringNullableFilter<'Company'> | string | null;
    logo?: StringNullableFilter<'Company'> | string | null;
    userId?: StringFilter<'Company'> | string;
    createdAt?: DateTimeFilter<'Company'> | Date | string;
    updatedAt?: DateTimeFilter<'Company'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    Job?: JobListRelationFilter;
  };

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    website?: SortOrder;
    logo?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    Job?: JobOrderByRelationAggregateInput;
  };

  export type CompanyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: CompanyWhereInput | CompanyWhereInput[];
      OR?: CompanyWhereInput[];
      NOT?: CompanyWhereInput | CompanyWhereInput[];
      name?: StringFilter<'Company'> | string;
      description?: StringNullableFilter<'Company'> | string | null;
      location?: StringNullableFilter<'Company'> | string | null;
      website?: StringNullableFilter<'Company'> | string | null;
      logo?: StringNullableFilter<'Company'> | string | null;
      userId?: StringFilter<'Company'> | string;
      createdAt?: DateTimeFilter<'Company'> | Date | string;
      updatedAt?: DateTimeFilter<'Company'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      Job?: JobListRelationFilter;
    },
    'id'
  >;

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    website?: SortOrder;
    logo?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: CompanyCountOrderByAggregateInput;
    _max?: CompanyMaxOrderByAggregateInput;
    _min?: CompanyMinOrderByAggregateInput;
  };

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?:
      | CompanyScalarWhereWithAggregatesInput
      | CompanyScalarWhereWithAggregatesInput[];
    OR?: CompanyScalarWhereWithAggregatesInput[];
    NOT?:
      | CompanyScalarWhereWithAggregatesInput
      | CompanyScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Company'> | string;
    name?: StringWithAggregatesFilter<'Company'> | string;
    description?: StringNullableWithAggregatesFilter<'Company'> | string | null;
    location?: StringNullableWithAggregatesFilter<'Company'> | string | null;
    website?: StringNullableWithAggregatesFilter<'Company'> | string | null;
    logo?: StringNullableWithAggregatesFilter<'Company'> | string | null;
    userId?: StringWithAggregatesFilter<'Company'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Company'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Company'> | Date | string;
  };

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[];
    OR?: ApplicationWhereInput[];
    NOT?: ApplicationWhereInput | ApplicationWhereInput[];
    id?: StringFilter<'Application'> | string;
    applicantId?: StringFilter<'Application'> | string;
    jobId?: StringFilter<'Application'> | string;
    status?:
      | EnumapplicationStatusFilter<'Application'>
      | $Enums.applicationStatus;
    createdAt?: DateTimeFilter<'Application'> | Date | string;
    updatedAt?: DateTimeFilter<'Application'> | Date | string;
    applicant?: XOR<UserScalarRelationFilter, UserWhereInput>;
    job?: XOR<JobScalarRelationFilter, JobWhereInput>;
  };

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder;
    applicantId?: SortOrder;
    jobId?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    applicant?: UserOrderByWithRelationInput;
    job?: JobOrderByWithRelationInput;
  };

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ApplicationWhereInput | ApplicationWhereInput[];
      OR?: ApplicationWhereInput[];
      NOT?: ApplicationWhereInput | ApplicationWhereInput[];
      applicantId?: StringFilter<'Application'> | string;
      jobId?: StringFilter<'Application'> | string;
      status?:
        | EnumapplicationStatusFilter<'Application'>
        | $Enums.applicationStatus;
      createdAt?: DateTimeFilter<'Application'> | Date | string;
      updatedAt?: DateTimeFilter<'Application'> | Date | string;
      applicant?: XOR<UserScalarRelationFilter, UserWhereInput>;
      job?: XOR<JobScalarRelationFilter, JobWhereInput>;
    },
    'id'
  >;

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder;
    applicantId?: SortOrder;
    jobId?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ApplicationCountOrderByAggregateInput;
    _max?: ApplicationMaxOrderByAggregateInput;
    _min?: ApplicationMinOrderByAggregateInput;
  };

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?:
      | ApplicationScalarWhereWithAggregatesInput
      | ApplicationScalarWhereWithAggregatesInput[];
    OR?: ApplicationScalarWhereWithAggregatesInput[];
    NOT?:
      | ApplicationScalarWhereWithAggregatesInput
      | ApplicationScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Application'> | string;
    applicantId?: StringWithAggregatesFilter<'Application'> | string;
    jobId?: StringWithAggregatesFilter<'Application'> | string;
    status?:
      | EnumapplicationStatusWithAggregatesFilter<'Application'>
      | $Enums.applicationStatus;
    createdAt?: DateTimeWithAggregatesFilter<'Application'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Application'> | Date | string;
  };

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[];
    OR?: FavoriteWhereInput[];
    NOT?: FavoriteWhereInput | FavoriteWhereInput[];
    id?: StringFilter<'Favorite'> | string;
    userId?: StringFilter<'Favorite'> | string;
    jobId?: StringFilter<'Favorite'> | string;
    createdAt?: DateTimeFilter<'Favorite'> | Date | string;
    updatedAt?: DateTimeFilter<'Favorite'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    job?: XOR<JobScalarRelationFilter, JobWhereInput>;
  };

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    jobId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
    job?: JobOrderByWithRelationInput;
  };

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: FavoriteWhereInput | FavoriteWhereInput[];
      OR?: FavoriteWhereInput[];
      NOT?: FavoriteWhereInput | FavoriteWhereInput[];
      userId?: StringFilter<'Favorite'> | string;
      jobId?: StringFilter<'Favorite'> | string;
      createdAt?: DateTimeFilter<'Favorite'> | Date | string;
      updatedAt?: DateTimeFilter<'Favorite'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      job?: XOR<JobScalarRelationFilter, JobWhereInput>;
    },
    'id'
  >;

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    jobId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: FavoriteCountOrderByAggregateInput;
    _max?: FavoriteMaxOrderByAggregateInput;
    _min?: FavoriteMinOrderByAggregateInput;
  };

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?:
      | FavoriteScalarWhereWithAggregatesInput
      | FavoriteScalarWhereWithAggregatesInput[];
    OR?: FavoriteScalarWhereWithAggregatesInput[];
    NOT?:
      | FavoriteScalarWhereWithAggregatesInput
      | FavoriteScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Favorite'> | string;
    userId?: StringWithAggregatesFilter<'Favorite'> | string;
    jobId?: StringWithAggregatesFilter<'Favorite'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Favorite'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Favorite'> | Date | string;
  };

  export type UserCreateInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phoneNumber: string;
    profileBio?: string | null;
    role?: $Enums.Role;
    profileSkills?: UserCreateprofileSkillsInput | string[];
    profileResume?: string | null;
    profileResumeOriginalName?: string | null;
    profileCompanyId?: string | null;
    profilePhoto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Company?: CompanyCreateNestedManyWithoutUserInput;
    Application?: ApplicationCreateNestedManyWithoutApplicantInput;
    Favorite?: FavoriteCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phoneNumber: string;
    profileBio?: string | null;
    role?: $Enums.Role;
    profileSkills?: UserCreateprofileSkillsInput | string[];
    profileResume?: string | null;
    profileResumeOriginalName?: string | null;
    profileCompanyId?: string | null;
    profilePhoto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Company?: CompanyUncheckedCreateNestedManyWithoutUserInput;
    Application?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    profileBio?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    profileSkills?: UserUpdateprofileSkillsInput | string[];
    profileResume?: NullableStringFieldUpdateOperationsInput | string | null;
    profileResumeOriginalName?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    profileCompanyId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Company?: CompanyUpdateManyWithoutUserNestedInput;
    Application?: ApplicationUpdateManyWithoutApplicantNestedInput;
    Favorite?: FavoriteUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    profileBio?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    profileSkills?: UserUpdateprofileSkillsInput | string[];
    profileResume?: NullableStringFieldUpdateOperationsInput | string | null;
    profileResumeOriginalName?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    profileCompanyId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Company?: CompanyUncheckedUpdateManyWithoutUserNestedInput;
    Application?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    Favorite?: FavoriteUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phoneNumber: string;
    profileBio?: string | null;
    role?: $Enums.Role;
    profileSkills?: UserCreateprofileSkillsInput | string[];
    profileResume?: string | null;
    profileResumeOriginalName?: string | null;
    profileCompanyId?: string | null;
    profilePhoto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    profileBio?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    profileSkills?: UserUpdateprofileSkillsInput | string[];
    profileResume?: NullableStringFieldUpdateOperationsInput | string | null;
    profileResumeOriginalName?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    profileCompanyId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    profileBio?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    profileSkills?: UserUpdateprofileSkillsInput | string[];
    profileResume?: NullableStringFieldUpdateOperationsInput | string | null;
    profileResumeOriginalName?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    profileCompanyId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobCreateInput = {
    id?: string;
    title: string;
    description: string;
    requirements?: JobCreaterequirementsInput | string[];
    location: string;
    salary: number;
    jobType: string;
    experienceLevel: string;
    positionType: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    company: CompanyCreateNestedOneWithoutJobInput;
    Application?: ApplicationCreateNestedManyWithoutJobInput;
    Favorite?: FavoriteCreateNestedManyWithoutJobInput;
  };

  export type JobUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    requirements?: JobCreaterequirementsInput | string[];
    location: string;
    salary: number;
    jobType: string;
    experienceLevel: string;
    positionType: number;
    companyId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Application?: ApplicationUncheckedCreateNestedManyWithoutJobInput;
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutJobInput;
  };

  export type JobUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    requirements?: JobUpdaterequirementsInput | string[];
    location?: StringFieldUpdateOperationsInput | string;
    salary?: FloatFieldUpdateOperationsInput | number;
    jobType?: StringFieldUpdateOperationsInput | string;
    experienceLevel?: StringFieldUpdateOperationsInput | string;
    positionType?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: CompanyUpdateOneRequiredWithoutJobNestedInput;
    Application?: ApplicationUpdateManyWithoutJobNestedInput;
    Favorite?: FavoriteUpdateManyWithoutJobNestedInput;
  };

  export type JobUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    requirements?: JobUpdaterequirementsInput | string[];
    location?: StringFieldUpdateOperationsInput | string;
    salary?: FloatFieldUpdateOperationsInput | number;
    jobType?: StringFieldUpdateOperationsInput | string;
    experienceLevel?: StringFieldUpdateOperationsInput | string;
    positionType?: IntFieldUpdateOperationsInput | number;
    companyId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Application?: ApplicationUncheckedUpdateManyWithoutJobNestedInput;
    Favorite?: FavoriteUncheckedUpdateManyWithoutJobNestedInput;
  };

  export type JobCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    requirements?: JobCreaterequirementsInput | string[];
    location: string;
    salary: number;
    jobType: string;
    experienceLevel: string;
    positionType: number;
    companyId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type JobUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    requirements?: JobUpdaterequirementsInput | string[];
    location?: StringFieldUpdateOperationsInput | string;
    salary?: FloatFieldUpdateOperationsInput | number;
    jobType?: StringFieldUpdateOperationsInput | string;
    experienceLevel?: StringFieldUpdateOperationsInput | string;
    positionType?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    requirements?: JobUpdaterequirementsInput | string[];
    location?: StringFieldUpdateOperationsInput | string;
    salary?: FloatFieldUpdateOperationsInput | number;
    jobType?: StringFieldUpdateOperationsInput | string;
    experienceLevel?: StringFieldUpdateOperationsInput | string;
    positionType?: IntFieldUpdateOperationsInput | number;
    companyId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CompanyCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    location?: string | null;
    website?: string | null;
    logo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutCompanyInput;
    Job?: JobCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    location?: string | null;
    website?: string | null;
    logo?: string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Job?: JobUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    logo?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCompanyNestedInput;
    Job?: JobUpdateManyWithoutCompanyNestedInput;
  };

  export type CompanyUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    logo?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Job?: JobUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type CompanyCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    location?: string | null;
    website?: string | null;
    logo?: string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    logo?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CompanyUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    logo?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicationCreateInput = {
    id?: string;
    status?: $Enums.applicationStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicant: UserCreateNestedOneWithoutApplicationInput;
    job: JobCreateNestedOneWithoutApplicationInput;
  };

  export type ApplicationUncheckedCreateInput = {
    id?: string;
    applicantId: string;
    jobId: string;
    status?: $Enums.applicationStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ApplicationUpdateInput = {
    status?:
      | EnumapplicationStatusFieldUpdateOperationsInput
      | $Enums.applicationStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: UserUpdateOneRequiredWithoutApplicationNestedInput;
    job?: JobUpdateOneRequiredWithoutApplicationNestedInput;
  };

  export type ApplicationUncheckedUpdateInput = {
    applicantId?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumapplicationStatusFieldUpdateOperationsInput
      | $Enums.applicationStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicationCreateManyInput = {
    id?: string;
    applicantId: string;
    jobId: string;
    status?: $Enums.applicationStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ApplicationUpdateManyMutationInput = {
    status?:
      | EnumapplicationStatusFieldUpdateOperationsInput
      | $Enums.applicationStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicationUncheckedUpdateManyInput = {
    applicantId?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumapplicationStatusFieldUpdateOperationsInput
      | $Enums.applicationStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FavoriteCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutFavoriteInput;
    job: JobCreateNestedOneWithoutFavoriteInput;
  };

  export type FavoriteUncheckedCreateInput = {
    id?: string;
    userId: string;
    jobId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type FavoriteUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutFavoriteNestedInput;
    job?: JobUpdateOneRequiredWithoutFavoriteNestedInput;
  };

  export type FavoriteUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FavoriteCreateManyInput = {
    id?: string;
    userId: string;
    jobId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type FavoriteUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FavoriteUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    jobId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
    isSet?: boolean;
  };

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type CompanyListRelationFilter = {
    every?: CompanyWhereInput;
    some?: CompanyWhereInput;
    none?: CompanyWhereInput;
  };

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput;
    some?: ApplicationWhereInput;
    none?: ApplicationWhereInput;
  };

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput;
    some?: FavoriteWhereInput;
    none?: FavoriteWhereInput;
  };

  export type CompanyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    fullName?: SortOrder;
    phoneNumber?: SortOrder;
    profileBio?: SortOrder;
    role?: SortOrder;
    profileSkills?: SortOrder;
    profileResume?: SortOrder;
    profileResumeOriginalName?: SortOrder;
    profileCompanyId?: SortOrder;
    profilePhoto?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    fullName?: SortOrder;
    phoneNumber?: SortOrder;
    profileBio?: SortOrder;
    role?: SortOrder;
    profileResume?: SortOrder;
    profileResumeOriginalName?: SortOrder;
    profileCompanyId?: SortOrder;
    profilePhoto?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    fullName?: SortOrder;
    phoneNumber?: SortOrder;
    profileBio?: SortOrder;
    role?: SortOrder;
    profileResume?: SortOrder;
    profileResumeOriginalName?: SortOrder;
    profileCompanyId?: SortOrder;
    profilePhoto?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
    isSet?: boolean;
  };

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput;
    isNot?: CompanyWhereInput;
  };

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    requirements?: SortOrder;
    location?: SortOrder;
    salary?: SortOrder;
    jobType?: SortOrder;
    experienceLevel?: SortOrder;
    positionType?: SortOrder;
    companyId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type JobAvgOrderByAggregateInput = {
    salary?: SortOrder;
    positionType?: SortOrder;
  };

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    salary?: SortOrder;
    jobType?: SortOrder;
    experienceLevel?: SortOrder;
    positionType?: SortOrder;
    companyId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    salary?: SortOrder;
    jobType?: SortOrder;
    experienceLevel?: SortOrder;
    positionType?: SortOrder;
    companyId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type JobSumOrderByAggregateInput = {
    salary?: SortOrder;
    positionType?: SortOrder;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type JobListRelationFilter = {
    every?: JobWhereInput;
    some?: JobWhereInput;
    none?: JobWhereInput;
  };

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    website?: SortOrder;
    logo?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    website?: SortOrder;
    logo?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    website?: SortOrder;
    logo?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EnumapplicationStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.applicationStatus
      | EnumapplicationStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.applicationStatus[]
      | ListEnumapplicationStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.applicationStatus[]
      | ListEnumapplicationStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumapplicationStatusFilter<$PrismaModel>
      | $Enums.applicationStatus;
  };

  export type JobScalarRelationFilter = {
    is?: JobWhereInput;
    isNot?: JobWhereInput;
  };

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder;
    applicantId?: SortOrder;
    jobId?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder;
    applicantId?: SortOrder;
    jobId?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder;
    applicantId?: SortOrder;
    jobId?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EnumapplicationStatusWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.applicationStatus
        | EnumapplicationStatusFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.applicationStatus[]
        | ListEnumapplicationStatusFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.applicationStatus[]
        | ListEnumapplicationStatusFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumapplicationStatusWithAggregatesFilter<$PrismaModel>
        | $Enums.applicationStatus;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumapplicationStatusFilter<$PrismaModel>;
      _max?: NestedEnumapplicationStatusFilter<$PrismaModel>;
    };

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    jobId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    jobId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    jobId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserCreateprofileSkillsInput = {
    set: string[];
  };

  export type CompanyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          CompanyCreateWithoutUserInput,
          CompanyUncheckedCreateWithoutUserInput
        >
      | CompanyCreateWithoutUserInput[]
      | CompanyUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CompanyCreateOrConnectWithoutUserInput
      | CompanyCreateOrConnectWithoutUserInput[];
    createMany?: CompanyCreateManyUserInputEnvelope;
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[];
  };

  export type ApplicationCreateNestedManyWithoutApplicantInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutApplicantInput,
          ApplicationUncheckedCreateWithoutApplicantInput
        >
      | ApplicationCreateWithoutApplicantInput[]
      | ApplicationUncheckedCreateWithoutApplicantInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutApplicantInput
      | ApplicationCreateOrConnectWithoutApplicantInput[];
    createMany?: ApplicationCreateManyApplicantInputEnvelope;
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
  };

  export type FavoriteCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          FavoriteCreateWithoutUserInput,
          FavoriteUncheckedCreateWithoutUserInput
        >
      | FavoriteCreateWithoutUserInput[]
      | FavoriteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FavoriteCreateOrConnectWithoutUserInput
      | FavoriteCreateOrConnectWithoutUserInput[];
    createMany?: FavoriteCreateManyUserInputEnvelope;
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
  };

  export type CompanyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          CompanyCreateWithoutUserInput,
          CompanyUncheckedCreateWithoutUserInput
        >
      | CompanyCreateWithoutUserInput[]
      | CompanyUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CompanyCreateOrConnectWithoutUserInput
      | CompanyCreateOrConnectWithoutUserInput[];
    createMany?: CompanyCreateManyUserInputEnvelope;
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[];
  };

  export type ApplicationUncheckedCreateNestedManyWithoutApplicantInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutApplicantInput,
          ApplicationUncheckedCreateWithoutApplicantInput
        >
      | ApplicationCreateWithoutApplicantInput[]
      | ApplicationUncheckedCreateWithoutApplicantInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutApplicantInput
      | ApplicationCreateOrConnectWithoutApplicantInput[];
    createMany?: ApplicationCreateManyApplicantInputEnvelope;
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
  };

  export type FavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          FavoriteCreateWithoutUserInput,
          FavoriteUncheckedCreateWithoutUserInput
        >
      | FavoriteCreateWithoutUserInput[]
      | FavoriteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FavoriteCreateOrConnectWithoutUserInput
      | FavoriteCreateOrConnectWithoutUserInput[];
    createMany?: FavoriteCreateManyUserInputEnvelope;
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
    unset?: boolean;
  };

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
  };

  export type UserUpdateprofileSkillsInput = {
    set?: string[];
    push?: string | string[];
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type CompanyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          CompanyCreateWithoutUserInput,
          CompanyUncheckedCreateWithoutUserInput
        >
      | CompanyCreateWithoutUserInput[]
      | CompanyUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CompanyCreateOrConnectWithoutUserInput
      | CompanyCreateOrConnectWithoutUserInput[];
    upsert?:
      | CompanyUpsertWithWhereUniqueWithoutUserInput
      | CompanyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: CompanyCreateManyUserInputEnvelope;
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[];
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[];
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[];
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[];
    update?:
      | CompanyUpdateWithWhereUniqueWithoutUserInput
      | CompanyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | CompanyUpdateManyWithWhereWithoutUserInput
      | CompanyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[];
  };

  export type ApplicationUpdateManyWithoutApplicantNestedInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutApplicantInput,
          ApplicationUncheckedCreateWithoutApplicantInput
        >
      | ApplicationCreateWithoutApplicantInput[]
      | ApplicationUncheckedCreateWithoutApplicantInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutApplicantInput
      | ApplicationCreateOrConnectWithoutApplicantInput[];
    upsert?:
      | ApplicationUpsertWithWhereUniqueWithoutApplicantInput
      | ApplicationUpsertWithWhereUniqueWithoutApplicantInput[];
    createMany?: ApplicationCreateManyApplicantInputEnvelope;
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    update?:
      | ApplicationUpdateWithWhereUniqueWithoutApplicantInput
      | ApplicationUpdateWithWhereUniqueWithoutApplicantInput[];
    updateMany?:
      | ApplicationUpdateManyWithWhereWithoutApplicantInput
      | ApplicationUpdateManyWithWhereWithoutApplicantInput[];
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
  };

  export type FavoriteUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          FavoriteCreateWithoutUserInput,
          FavoriteUncheckedCreateWithoutUserInput
        >
      | FavoriteCreateWithoutUserInput[]
      | FavoriteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FavoriteCreateOrConnectWithoutUserInput
      | FavoriteCreateOrConnectWithoutUserInput[];
    upsert?:
      | FavoriteUpsertWithWhereUniqueWithoutUserInput
      | FavoriteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: FavoriteCreateManyUserInputEnvelope;
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    update?:
      | FavoriteUpdateWithWhereUniqueWithoutUserInput
      | FavoriteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | FavoriteUpdateManyWithWhereWithoutUserInput
      | FavoriteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[];
  };

  export type CompanyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          CompanyCreateWithoutUserInput,
          CompanyUncheckedCreateWithoutUserInput
        >
      | CompanyCreateWithoutUserInput[]
      | CompanyUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CompanyCreateOrConnectWithoutUserInput
      | CompanyCreateOrConnectWithoutUserInput[];
    upsert?:
      | CompanyUpsertWithWhereUniqueWithoutUserInput
      | CompanyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: CompanyCreateManyUserInputEnvelope;
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[];
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[];
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[];
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[];
    update?:
      | CompanyUpdateWithWhereUniqueWithoutUserInput
      | CompanyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | CompanyUpdateManyWithWhereWithoutUserInput
      | CompanyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[];
  };

  export type ApplicationUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutApplicantInput,
          ApplicationUncheckedCreateWithoutApplicantInput
        >
      | ApplicationCreateWithoutApplicantInput[]
      | ApplicationUncheckedCreateWithoutApplicantInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutApplicantInput
      | ApplicationCreateOrConnectWithoutApplicantInput[];
    upsert?:
      | ApplicationUpsertWithWhereUniqueWithoutApplicantInput
      | ApplicationUpsertWithWhereUniqueWithoutApplicantInput[];
    createMany?: ApplicationCreateManyApplicantInputEnvelope;
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    update?:
      | ApplicationUpdateWithWhereUniqueWithoutApplicantInput
      | ApplicationUpdateWithWhereUniqueWithoutApplicantInput[];
    updateMany?:
      | ApplicationUpdateManyWithWhereWithoutApplicantInput
      | ApplicationUpdateManyWithWhereWithoutApplicantInput[];
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
  };

  export type FavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          FavoriteCreateWithoutUserInput,
          FavoriteUncheckedCreateWithoutUserInput
        >
      | FavoriteCreateWithoutUserInput[]
      | FavoriteUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | FavoriteCreateOrConnectWithoutUserInput
      | FavoriteCreateOrConnectWithoutUserInput[];
    upsert?:
      | FavoriteUpsertWithWhereUniqueWithoutUserInput
      | FavoriteUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: FavoriteCreateManyUserInputEnvelope;
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    update?:
      | FavoriteUpdateWithWhereUniqueWithoutUserInput
      | FavoriteUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | FavoriteUpdateManyWithWhereWithoutUserInput
      | FavoriteUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[];
  };

  export type JobCreaterequirementsInput = {
    set: string[];
  };

  export type CompanyCreateNestedOneWithoutJobInput = {
    create?: XOR<
      CompanyCreateWithoutJobInput,
      CompanyUncheckedCreateWithoutJobInput
    >;
    connectOrCreate?: CompanyCreateOrConnectWithoutJobInput;
    connect?: CompanyWhereUniqueInput;
  };

  export type ApplicationCreateNestedManyWithoutJobInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutJobInput,
          ApplicationUncheckedCreateWithoutJobInput
        >
      | ApplicationCreateWithoutJobInput[]
      | ApplicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutJobInput
      | ApplicationCreateOrConnectWithoutJobInput[];
    createMany?: ApplicationCreateManyJobInputEnvelope;
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
  };

  export type FavoriteCreateNestedManyWithoutJobInput = {
    create?:
      | XOR<
          FavoriteCreateWithoutJobInput,
          FavoriteUncheckedCreateWithoutJobInput
        >
      | FavoriteCreateWithoutJobInput[]
      | FavoriteUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | FavoriteCreateOrConnectWithoutJobInput
      | FavoriteCreateOrConnectWithoutJobInput[];
    createMany?: FavoriteCreateManyJobInputEnvelope;
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
  };

  export type ApplicationUncheckedCreateNestedManyWithoutJobInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutJobInput,
          ApplicationUncheckedCreateWithoutJobInput
        >
      | ApplicationCreateWithoutJobInput[]
      | ApplicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutJobInput
      | ApplicationCreateOrConnectWithoutJobInput[];
    createMany?: ApplicationCreateManyJobInputEnvelope;
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
  };

  export type FavoriteUncheckedCreateNestedManyWithoutJobInput = {
    create?:
      | XOR<
          FavoriteCreateWithoutJobInput,
          FavoriteUncheckedCreateWithoutJobInput
        >
      | FavoriteCreateWithoutJobInput[]
      | FavoriteUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | FavoriteCreateOrConnectWithoutJobInput
      | FavoriteCreateOrConnectWithoutJobInput[];
    createMany?: FavoriteCreateManyJobInputEnvelope;
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
  };

  export type JobUpdaterequirementsInput = {
    set?: string[];
    push?: string | string[];
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type CompanyUpdateOneRequiredWithoutJobNestedInput = {
    create?: XOR<
      CompanyCreateWithoutJobInput,
      CompanyUncheckedCreateWithoutJobInput
    >;
    connectOrCreate?: CompanyCreateOrConnectWithoutJobInput;
    upsert?: CompanyUpsertWithoutJobInput;
    connect?: CompanyWhereUniqueInput;
    update?: XOR<
      XOR<
        CompanyUpdateToOneWithWhereWithoutJobInput,
        CompanyUpdateWithoutJobInput
      >,
      CompanyUncheckedUpdateWithoutJobInput
    >;
  };

  export type ApplicationUpdateManyWithoutJobNestedInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutJobInput,
          ApplicationUncheckedCreateWithoutJobInput
        >
      | ApplicationCreateWithoutJobInput[]
      | ApplicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutJobInput
      | ApplicationCreateOrConnectWithoutJobInput[];
    upsert?:
      | ApplicationUpsertWithWhereUniqueWithoutJobInput
      | ApplicationUpsertWithWhereUniqueWithoutJobInput[];
    createMany?: ApplicationCreateManyJobInputEnvelope;
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    update?:
      | ApplicationUpdateWithWhereUniqueWithoutJobInput
      | ApplicationUpdateWithWhereUniqueWithoutJobInput[];
    updateMany?:
      | ApplicationUpdateManyWithWhereWithoutJobInput
      | ApplicationUpdateManyWithWhereWithoutJobInput[];
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
  };

  export type FavoriteUpdateManyWithoutJobNestedInput = {
    create?:
      | XOR<
          FavoriteCreateWithoutJobInput,
          FavoriteUncheckedCreateWithoutJobInput
        >
      | FavoriteCreateWithoutJobInput[]
      | FavoriteUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | FavoriteCreateOrConnectWithoutJobInput
      | FavoriteCreateOrConnectWithoutJobInput[];
    upsert?:
      | FavoriteUpsertWithWhereUniqueWithoutJobInput
      | FavoriteUpsertWithWhereUniqueWithoutJobInput[];
    createMany?: FavoriteCreateManyJobInputEnvelope;
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    update?:
      | FavoriteUpdateWithWhereUniqueWithoutJobInput
      | FavoriteUpdateWithWhereUniqueWithoutJobInput[];
    updateMany?:
      | FavoriteUpdateManyWithWhereWithoutJobInput
      | FavoriteUpdateManyWithWhereWithoutJobInput[];
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[];
  };

  export type ApplicationUncheckedUpdateManyWithoutJobNestedInput = {
    create?:
      | XOR<
          ApplicationCreateWithoutJobInput,
          ApplicationUncheckedCreateWithoutJobInput
        >
      | ApplicationCreateWithoutJobInput[]
      | ApplicationUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | ApplicationCreateOrConnectWithoutJobInput
      | ApplicationCreateOrConnectWithoutJobInput[];
    upsert?:
      | ApplicationUpsertWithWhereUniqueWithoutJobInput
      | ApplicationUpsertWithWhereUniqueWithoutJobInput[];
    createMany?: ApplicationCreateManyJobInputEnvelope;
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[];
    update?:
      | ApplicationUpdateWithWhereUniqueWithoutJobInput
      | ApplicationUpdateWithWhereUniqueWithoutJobInput[];
    updateMany?:
      | ApplicationUpdateManyWithWhereWithoutJobInput
      | ApplicationUpdateManyWithWhereWithoutJobInput[];
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
  };

  export type FavoriteUncheckedUpdateManyWithoutJobNestedInput = {
    create?:
      | XOR<
          FavoriteCreateWithoutJobInput,
          FavoriteUncheckedCreateWithoutJobInput
        >
      | FavoriteCreateWithoutJobInput[]
      | FavoriteUncheckedCreateWithoutJobInput[];
    connectOrCreate?:
      | FavoriteCreateOrConnectWithoutJobInput
      | FavoriteCreateOrConnectWithoutJobInput[];
    upsert?:
      | FavoriteUpsertWithWhereUniqueWithoutJobInput
      | FavoriteUpsertWithWhereUniqueWithoutJobInput[];
    createMany?: FavoriteCreateManyJobInputEnvelope;
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[];
    update?:
      | FavoriteUpdateWithWhereUniqueWithoutJobInput
      | FavoriteUpdateWithWhereUniqueWithoutJobInput[];
    updateMany?:
      | FavoriteUpdateManyWithWhereWithoutJobInput
      | FavoriteUpdateManyWithWhereWithoutJobInput[];
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutCompanyInput = {
    create?: XOR<
      UserCreateWithoutCompanyInput,
      UserUncheckedCreateWithoutCompanyInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput;
    connect?: UserWhereUniqueInput;
  };

  export type JobCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<JobCreateWithoutCompanyInput, JobUncheckedCreateWithoutCompanyInput>
      | JobCreateWithoutCompanyInput[]
      | JobUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutCompanyInput
      | JobCreateOrConnectWithoutCompanyInput[];
    createMany?: JobCreateManyCompanyInputEnvelope;
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
  };

  export type JobUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<JobCreateWithoutCompanyInput, JobUncheckedCreateWithoutCompanyInput>
      | JobCreateWithoutCompanyInput[]
      | JobUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutCompanyInput
      | JobCreateOrConnectWithoutCompanyInput[];
    createMany?: JobCreateManyCompanyInputEnvelope;
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
  };

  export type UserUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<
      UserCreateWithoutCompanyInput,
      UserUncheckedCreateWithoutCompanyInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput;
    upsert?: UserUpsertWithoutCompanyInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCompanyInput,
        UserUpdateWithoutCompanyInput
      >,
      UserUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type JobUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<JobCreateWithoutCompanyInput, JobUncheckedCreateWithoutCompanyInput>
      | JobCreateWithoutCompanyInput[]
      | JobUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutCompanyInput
      | JobCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | JobUpsertWithWhereUniqueWithoutCompanyInput
      | JobUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: JobCreateManyCompanyInputEnvelope;
    set?: JobWhereUniqueInput | JobWhereUniqueInput[];
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[];
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    update?:
      | JobUpdateWithWhereUniqueWithoutCompanyInput
      | JobUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | JobUpdateManyWithWhereWithoutCompanyInput
      | JobUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[];
  };

  export type JobUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<JobCreateWithoutCompanyInput, JobUncheckedCreateWithoutCompanyInput>
      | JobCreateWithoutCompanyInput[]
      | JobUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?:
      | JobCreateOrConnectWithoutCompanyInput
      | JobCreateOrConnectWithoutCompanyInput[];
    upsert?:
      | JobUpsertWithWhereUniqueWithoutCompanyInput
      | JobUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: JobCreateManyCompanyInputEnvelope;
    set?: JobWhereUniqueInput | JobWhereUniqueInput[];
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[];
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[];
    update?:
      | JobUpdateWithWhereUniqueWithoutCompanyInput
      | JobUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?:
      | JobUpdateManyWithWhereWithoutCompanyInput
      | JobUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutApplicationInput = {
    create?: XOR<
      UserCreateWithoutApplicationInput,
      UserUncheckedCreateWithoutApplicationInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutApplicationInput;
    connect?: UserWhereUniqueInput;
  };

  export type JobCreateNestedOneWithoutApplicationInput = {
    create?: XOR<
      JobCreateWithoutApplicationInput,
      JobUncheckedCreateWithoutApplicationInput
    >;
    connectOrCreate?: JobCreateOrConnectWithoutApplicationInput;
    connect?: JobWhereUniqueInput;
  };

  export type EnumapplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.applicationStatus;
  };

  export type UserUpdateOneRequiredWithoutApplicationNestedInput = {
    create?: XOR<
      UserCreateWithoutApplicationInput,
      UserUncheckedCreateWithoutApplicationInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutApplicationInput;
    upsert?: UserUpsertWithoutApplicationInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutApplicationInput,
        UserUpdateWithoutApplicationInput
      >,
      UserUncheckedUpdateWithoutApplicationInput
    >;
  };

  export type JobUpdateOneRequiredWithoutApplicationNestedInput = {
    create?: XOR<
      JobCreateWithoutApplicationInput,
      JobUncheckedCreateWithoutApplicationInput
    >;
    connectOrCreate?: JobCreateOrConnectWithoutApplicationInput;
    upsert?: JobUpsertWithoutApplicationInput;
    connect?: JobWhereUniqueInput;
    update?: XOR<
      XOR<
        JobUpdateToOneWithWhereWithoutApplicationInput,
        JobUpdateWithoutApplicationInput
      >,
      JobUncheckedUpdateWithoutApplicationInput
    >;
  };

  export type UserCreateNestedOneWithoutFavoriteInput = {
    create?: XOR<
      UserCreateWithoutFavoriteInput,
      UserUncheckedCreateWithoutFavoriteInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteInput;
    connect?: UserWhereUniqueInput;
  };

  export type JobCreateNestedOneWithoutFavoriteInput = {
    create?: XOR<
      JobCreateWithoutFavoriteInput,
      JobUncheckedCreateWithoutFavoriteInput
    >;
    connectOrCreate?: JobCreateOrConnectWithoutFavoriteInput;
    connect?: JobWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutFavoriteNestedInput = {
    create?: XOR<
      UserCreateWithoutFavoriteInput,
      UserUncheckedCreateWithoutFavoriteInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutFavoriteInput;
    upsert?: UserUpsertWithoutFavoriteInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutFavoriteInput,
        UserUpdateWithoutFavoriteInput
      >,
      UserUncheckedUpdateWithoutFavoriteInput
    >;
  };

  export type JobUpdateOneRequiredWithoutFavoriteNestedInput = {
    create?: XOR<
      JobCreateWithoutFavoriteInput,
      JobUncheckedCreateWithoutFavoriteInput
    >;
    connectOrCreate?: JobCreateOrConnectWithoutFavoriteInput;
    upsert?: JobUpsertWithoutFavoriteInput;
    connect?: JobWhereUniqueInput;
    update?: XOR<
      XOR<
        JobUpdateToOneWithWhereWithoutFavoriteInput,
        JobUpdateWithoutFavoriteInput
      >,
      JobUncheckedUpdateWithoutFavoriteInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
    isSet?: boolean;
  };

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
    isSet?: boolean;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
    isSet?: boolean;
  };

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumRoleFilter<$PrismaModel>;
    _max?: NestedEnumRoleFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedEnumapplicationStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.applicationStatus
      | EnumapplicationStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.applicationStatus[]
      | ListEnumapplicationStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.applicationStatus[]
      | ListEnumapplicationStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumapplicationStatusFilter<$PrismaModel>
      | $Enums.applicationStatus;
  };

  export type NestedEnumapplicationStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.applicationStatus
      | EnumapplicationStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.applicationStatus[]
      | ListEnumapplicationStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.applicationStatus[]
      | ListEnumapplicationStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumapplicationStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.applicationStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumapplicationStatusFilter<$PrismaModel>;
    _max?: NestedEnumapplicationStatusFilter<$PrismaModel>;
  };

  export type CompanyCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    location?: string | null;
    website?: string | null;
    logo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Job?: JobCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    location?: string | null;
    website?: string | null;
    logo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Job?: JobUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type CompanyCreateOrConnectWithoutUserInput = {
    where: CompanyWhereUniqueInput;
    create: XOR<
      CompanyCreateWithoutUserInput,
      CompanyUncheckedCreateWithoutUserInput
    >;
  };

  export type CompanyCreateManyUserInputEnvelope = {
    data: CompanyCreateManyUserInput | CompanyCreateManyUserInput[];
  };

  export type ApplicationCreateWithoutApplicantInput = {
    id?: string;
    status?: $Enums.applicationStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    job: JobCreateNestedOneWithoutApplicationInput;
  };

  export type ApplicationUncheckedCreateWithoutApplicantInput = {
    id?: string;
    jobId: string;
    status?: $Enums.applicationStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ApplicationCreateOrConnectWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput;
    create: XOR<
      ApplicationCreateWithoutApplicantInput,
      ApplicationUncheckedCreateWithoutApplicantInput
    >;
  };

  export type ApplicationCreateManyApplicantInputEnvelope = {
    data:
      | ApplicationCreateManyApplicantInput
      | ApplicationCreateManyApplicantInput[];
  };

  export type FavoriteCreateWithoutUserInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    job: JobCreateNestedOneWithoutFavoriteInput;
  };

  export type FavoriteUncheckedCreateWithoutUserInput = {
    id?: string;
    jobId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput;
    create: XOR<
      FavoriteCreateWithoutUserInput,
      FavoriteUncheckedCreateWithoutUserInput
    >;
  };

  export type FavoriteCreateManyUserInputEnvelope = {
    data: FavoriteCreateManyUserInput | FavoriteCreateManyUserInput[];
  };

  export type CompanyUpsertWithWhereUniqueWithoutUserInput = {
    where: CompanyWhereUniqueInput;
    update: XOR<
      CompanyUpdateWithoutUserInput,
      CompanyUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      CompanyCreateWithoutUserInput,
      CompanyUncheckedCreateWithoutUserInput
    >;
  };

  export type CompanyUpdateWithWhereUniqueWithoutUserInput = {
    where: CompanyWhereUniqueInput;
    data: XOR<
      CompanyUpdateWithoutUserInput,
      CompanyUncheckedUpdateWithoutUserInput
    >;
  };

  export type CompanyUpdateManyWithWhereWithoutUserInput = {
    where: CompanyScalarWhereInput;
    data: XOR<
      CompanyUpdateManyMutationInput,
      CompanyUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type CompanyScalarWhereInput = {
    AND?: CompanyScalarWhereInput | CompanyScalarWhereInput[];
    OR?: CompanyScalarWhereInput[];
    NOT?: CompanyScalarWhereInput | CompanyScalarWhereInput[];
    id?: StringFilter<'Company'> | string;
    name?: StringFilter<'Company'> | string;
    description?: StringNullableFilter<'Company'> | string | null;
    location?: StringNullableFilter<'Company'> | string | null;
    website?: StringNullableFilter<'Company'> | string | null;
    logo?: StringNullableFilter<'Company'> | string | null;
    userId?: StringFilter<'Company'> | string;
    createdAt?: DateTimeFilter<'Company'> | Date | string;
    updatedAt?: DateTimeFilter<'Company'> | Date | string;
  };

  export type ApplicationUpsertWithWhereUniqueWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput;
    update: XOR<
      ApplicationUpdateWithoutApplicantInput,
      ApplicationUncheckedUpdateWithoutApplicantInput
    >;
    create: XOR<
      ApplicationCreateWithoutApplicantInput,
      ApplicationUncheckedCreateWithoutApplicantInput
    >;
  };

  export type ApplicationUpdateWithWhereUniqueWithoutApplicantInput = {
    where: ApplicationWhereUniqueInput;
    data: XOR<
      ApplicationUpdateWithoutApplicantInput,
      ApplicationUncheckedUpdateWithoutApplicantInput
    >;
  };

  export type ApplicationUpdateManyWithWhereWithoutApplicantInput = {
    where: ApplicationScalarWhereInput;
    data: XOR<
      ApplicationUpdateManyMutationInput,
      ApplicationUncheckedUpdateManyWithoutApplicantInput
    >;
  };

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
    OR?: ApplicationScalarWhereInput[];
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[];
    id?: StringFilter<'Application'> | string;
    applicantId?: StringFilter<'Application'> | string;
    jobId?: StringFilter<'Application'> | string;
    status?:
      | EnumapplicationStatusFilter<'Application'>
      | $Enums.applicationStatus;
    createdAt?: DateTimeFilter<'Application'> | Date | string;
    updatedAt?: DateTimeFilter<'Application'> | Date | string;
  };

  export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput;
    update: XOR<
      FavoriteUpdateWithoutUserInput,
      FavoriteUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      FavoriteCreateWithoutUserInput,
      FavoriteUncheckedCreateWithoutUserInput
    >;
  };

  export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput;
    data: XOR<
      FavoriteUpdateWithoutUserInput,
      FavoriteUncheckedUpdateWithoutUserInput
    >;
  };

  export type FavoriteUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteScalarWhereInput;
    data: XOR<
      FavoriteUpdateManyMutationInput,
      FavoriteUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[];
    OR?: FavoriteScalarWhereInput[];
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[];
    id?: StringFilter<'Favorite'> | string;
    userId?: StringFilter<'Favorite'> | string;
    jobId?: StringFilter<'Favorite'> | string;
    createdAt?: DateTimeFilter<'Favorite'> | Date | string;
    updatedAt?: DateTimeFilter<'Favorite'> | Date | string;
  };

  export type CompanyCreateWithoutJobInput = {
    id?: string;
    name: string;
    description?: string | null;
    location?: string | null;
    website?: string | null;
    logo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutCompanyInput;
  };

  export type CompanyUncheckedCreateWithoutJobInput = {
    id?: string;
    name: string;
    description?: string | null;
    location?: string | null;
    website?: string | null;
    logo?: string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CompanyCreateOrConnectWithoutJobInput = {
    where: CompanyWhereUniqueInput;
    create: XOR<
      CompanyCreateWithoutJobInput,
      CompanyUncheckedCreateWithoutJobInput
    >;
  };

  export type ApplicationCreateWithoutJobInput = {
    id?: string;
    status?: $Enums.applicationStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    applicant: UserCreateNestedOneWithoutApplicationInput;
  };

  export type ApplicationUncheckedCreateWithoutJobInput = {
    id?: string;
    applicantId: string;
    status?: $Enums.applicationStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ApplicationCreateOrConnectWithoutJobInput = {
    where: ApplicationWhereUniqueInput;
    create: XOR<
      ApplicationCreateWithoutJobInput,
      ApplicationUncheckedCreateWithoutJobInput
    >;
  };

  export type ApplicationCreateManyJobInputEnvelope = {
    data: ApplicationCreateManyJobInput | ApplicationCreateManyJobInput[];
  };

  export type FavoriteCreateWithoutJobInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutFavoriteInput;
  };

  export type FavoriteUncheckedCreateWithoutJobInput = {
    id?: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type FavoriteCreateOrConnectWithoutJobInput = {
    where: FavoriteWhereUniqueInput;
    create: XOR<
      FavoriteCreateWithoutJobInput,
      FavoriteUncheckedCreateWithoutJobInput
    >;
  };

  export type FavoriteCreateManyJobInputEnvelope = {
    data: FavoriteCreateManyJobInput | FavoriteCreateManyJobInput[];
  };

  export type CompanyUpsertWithoutJobInput = {
    update: XOR<
      CompanyUpdateWithoutJobInput,
      CompanyUncheckedUpdateWithoutJobInput
    >;
    create: XOR<
      CompanyCreateWithoutJobInput,
      CompanyUncheckedCreateWithoutJobInput
    >;
    where?: CompanyWhereInput;
  };

  export type CompanyUpdateToOneWithWhereWithoutJobInput = {
    where?: CompanyWhereInput;
    data: XOR<
      CompanyUpdateWithoutJobInput,
      CompanyUncheckedUpdateWithoutJobInput
    >;
  };

  export type CompanyUpdateWithoutJobInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    logo?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCompanyNestedInput;
  };

  export type CompanyUncheckedUpdateWithoutJobInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    logo?: NullableStringFieldUpdateOperationsInput | string | null;
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicationUpsertWithWhereUniqueWithoutJobInput = {
    where: ApplicationWhereUniqueInput;
    update: XOR<
      ApplicationUpdateWithoutJobInput,
      ApplicationUncheckedUpdateWithoutJobInput
    >;
    create: XOR<
      ApplicationCreateWithoutJobInput,
      ApplicationUncheckedCreateWithoutJobInput
    >;
  };

  export type ApplicationUpdateWithWhereUniqueWithoutJobInput = {
    where: ApplicationWhereUniqueInput;
    data: XOR<
      ApplicationUpdateWithoutJobInput,
      ApplicationUncheckedUpdateWithoutJobInput
    >;
  };

  export type ApplicationUpdateManyWithWhereWithoutJobInput = {
    where: ApplicationScalarWhereInput;
    data: XOR<
      ApplicationUpdateManyMutationInput,
      ApplicationUncheckedUpdateManyWithoutJobInput
    >;
  };

  export type FavoriteUpsertWithWhereUniqueWithoutJobInput = {
    where: FavoriteWhereUniqueInput;
    update: XOR<
      FavoriteUpdateWithoutJobInput,
      FavoriteUncheckedUpdateWithoutJobInput
    >;
    create: XOR<
      FavoriteCreateWithoutJobInput,
      FavoriteUncheckedCreateWithoutJobInput
    >;
  };

  export type FavoriteUpdateWithWhereUniqueWithoutJobInput = {
    where: FavoriteWhereUniqueInput;
    data: XOR<
      FavoriteUpdateWithoutJobInput,
      FavoriteUncheckedUpdateWithoutJobInput
    >;
  };

  export type FavoriteUpdateManyWithWhereWithoutJobInput = {
    where: FavoriteScalarWhereInput;
    data: XOR<
      FavoriteUpdateManyMutationInput,
      FavoriteUncheckedUpdateManyWithoutJobInput
    >;
  };

  export type UserCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phoneNumber: string;
    profileBio?: string | null;
    role?: $Enums.Role;
    profileSkills?: UserCreateprofileSkillsInput | string[];
    profileResume?: string | null;
    profileResumeOriginalName?: string | null;
    profileCompanyId?: string | null;
    profilePhoto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Application?: ApplicationCreateNestedManyWithoutApplicantInput;
    Favorite?: FavoriteCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phoneNumber: string;
    profileBio?: string | null;
    role?: $Enums.Role;
    profileSkills?: UserCreateprofileSkillsInput | string[];
    profileResume?: string | null;
    profileResumeOriginalName?: string | null;
    profileCompanyId?: string | null;
    profilePhoto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Application?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput;
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCompanyInput,
      UserUncheckedCreateWithoutCompanyInput
    >;
  };

  export type JobCreateWithoutCompanyInput = {
    id?: string;
    title: string;
    description: string;
    requirements?: JobCreaterequirementsInput | string[];
    location: string;
    salary: number;
    jobType: string;
    experienceLevel: string;
    positionType: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Application?: ApplicationCreateNestedManyWithoutJobInput;
    Favorite?: FavoriteCreateNestedManyWithoutJobInput;
  };

  export type JobUncheckedCreateWithoutCompanyInput = {
    id?: string;
    title: string;
    description: string;
    requirements?: JobCreaterequirementsInput | string[];
    location: string;
    salary: number;
    jobType: string;
    experienceLevel: string;
    positionType: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Application?: ApplicationUncheckedCreateNestedManyWithoutJobInput;
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutJobInput;
  };

  export type JobCreateOrConnectWithoutCompanyInput = {
    where: JobWhereUniqueInput;
    create: XOR<
      JobCreateWithoutCompanyInput,
      JobUncheckedCreateWithoutCompanyInput
    >;
  };

  export type JobCreateManyCompanyInputEnvelope = {
    data: JobCreateManyCompanyInput | JobCreateManyCompanyInput[];
  };

  export type UserUpsertWithoutCompanyInput = {
    update: XOR<
      UserUpdateWithoutCompanyInput,
      UserUncheckedUpdateWithoutCompanyInput
    >;
    create: XOR<
      UserCreateWithoutCompanyInput,
      UserUncheckedCreateWithoutCompanyInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCompanyInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCompanyInput,
      UserUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type UserUpdateWithoutCompanyInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    profileBio?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    profileSkills?: UserUpdateprofileSkillsInput | string[];
    profileResume?: NullableStringFieldUpdateOperationsInput | string | null;
    profileResumeOriginalName?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    profileCompanyId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Application?: ApplicationUpdateManyWithoutApplicantNestedInput;
    Favorite?: FavoriteUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutCompanyInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    profileBio?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    profileSkills?: UserUpdateprofileSkillsInput | string[];
    profileResume?: NullableStringFieldUpdateOperationsInput | string | null;
    profileResumeOriginalName?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    profileCompanyId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Application?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
    Favorite?: FavoriteUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type JobUpsertWithWhereUniqueWithoutCompanyInput = {
    where: JobWhereUniqueInput;
    update: XOR<
      JobUpdateWithoutCompanyInput,
      JobUncheckedUpdateWithoutCompanyInput
    >;
    create: XOR<
      JobCreateWithoutCompanyInput,
      JobUncheckedCreateWithoutCompanyInput
    >;
  };

  export type JobUpdateWithWhereUniqueWithoutCompanyInput = {
    where: JobWhereUniqueInput;
    data: XOR<
      JobUpdateWithoutCompanyInput,
      JobUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type JobUpdateManyWithWhereWithoutCompanyInput = {
    where: JobScalarWhereInput;
    data: XOR<
      JobUpdateManyMutationInput,
      JobUncheckedUpdateManyWithoutCompanyInput
    >;
  };

  export type JobScalarWhereInput = {
    AND?: JobScalarWhereInput | JobScalarWhereInput[];
    OR?: JobScalarWhereInput[];
    NOT?: JobScalarWhereInput | JobScalarWhereInput[];
    id?: StringFilter<'Job'> | string;
    title?: StringFilter<'Job'> | string;
    description?: StringFilter<'Job'> | string;
    requirements?: StringNullableListFilter<'Job'>;
    location?: StringFilter<'Job'> | string;
    salary?: FloatFilter<'Job'> | number;
    jobType?: StringFilter<'Job'> | string;
    experienceLevel?: StringFilter<'Job'> | string;
    positionType?: IntFilter<'Job'> | number;
    companyId?: StringFilter<'Job'> | string;
    createdAt?: DateTimeFilter<'Job'> | Date | string;
    updatedAt?: DateTimeFilter<'Job'> | Date | string;
  };

  export type UserCreateWithoutApplicationInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phoneNumber: string;
    profileBio?: string | null;
    role?: $Enums.Role;
    profileSkills?: UserCreateprofileSkillsInput | string[];
    profileResume?: string | null;
    profileResumeOriginalName?: string | null;
    profileCompanyId?: string | null;
    profilePhoto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Company?: CompanyCreateNestedManyWithoutUserInput;
    Favorite?: FavoriteCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutApplicationInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phoneNumber: string;
    profileBio?: string | null;
    role?: $Enums.Role;
    profileSkills?: UserCreateprofileSkillsInput | string[];
    profileResume?: string | null;
    profileResumeOriginalName?: string | null;
    profileCompanyId?: string | null;
    profilePhoto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Company?: CompanyUncheckedCreateNestedManyWithoutUserInput;
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutApplicationInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutApplicationInput,
      UserUncheckedCreateWithoutApplicationInput
    >;
  };

  export type JobCreateWithoutApplicationInput = {
    id?: string;
    title: string;
    description: string;
    requirements?: JobCreaterequirementsInput | string[];
    location: string;
    salary: number;
    jobType: string;
    experienceLevel: string;
    positionType: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    company: CompanyCreateNestedOneWithoutJobInput;
    Favorite?: FavoriteCreateNestedManyWithoutJobInput;
  };

  export type JobUncheckedCreateWithoutApplicationInput = {
    id?: string;
    title: string;
    description: string;
    requirements?: JobCreaterequirementsInput | string[];
    location: string;
    salary: number;
    jobType: string;
    experienceLevel: string;
    positionType: number;
    companyId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Favorite?: FavoriteUncheckedCreateNestedManyWithoutJobInput;
  };

  export type JobCreateOrConnectWithoutApplicationInput = {
    where: JobWhereUniqueInput;
    create: XOR<
      JobCreateWithoutApplicationInput,
      JobUncheckedCreateWithoutApplicationInput
    >;
  };

  export type UserUpsertWithoutApplicationInput = {
    update: XOR<
      UserUpdateWithoutApplicationInput,
      UserUncheckedUpdateWithoutApplicationInput
    >;
    create: XOR<
      UserCreateWithoutApplicationInput,
      UserUncheckedCreateWithoutApplicationInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutApplicationInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutApplicationInput,
      UserUncheckedUpdateWithoutApplicationInput
    >;
  };

  export type UserUpdateWithoutApplicationInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    profileBio?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    profileSkills?: UserUpdateprofileSkillsInput | string[];
    profileResume?: NullableStringFieldUpdateOperationsInput | string | null;
    profileResumeOriginalName?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    profileCompanyId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Company?: CompanyUpdateManyWithoutUserNestedInput;
    Favorite?: FavoriteUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutApplicationInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    profileBio?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    profileSkills?: UserUpdateprofileSkillsInput | string[];
    profileResume?: NullableStringFieldUpdateOperationsInput | string | null;
    profileResumeOriginalName?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    profileCompanyId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Company?: CompanyUncheckedUpdateManyWithoutUserNestedInput;
    Favorite?: FavoriteUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type JobUpsertWithoutApplicationInput = {
    update: XOR<
      JobUpdateWithoutApplicationInput,
      JobUncheckedUpdateWithoutApplicationInput
    >;
    create: XOR<
      JobCreateWithoutApplicationInput,
      JobUncheckedCreateWithoutApplicationInput
    >;
    where?: JobWhereInput;
  };

  export type JobUpdateToOneWithWhereWithoutApplicationInput = {
    where?: JobWhereInput;
    data: XOR<
      JobUpdateWithoutApplicationInput,
      JobUncheckedUpdateWithoutApplicationInput
    >;
  };

  export type JobUpdateWithoutApplicationInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    requirements?: JobUpdaterequirementsInput | string[];
    location?: StringFieldUpdateOperationsInput | string;
    salary?: FloatFieldUpdateOperationsInput | number;
    jobType?: StringFieldUpdateOperationsInput | string;
    experienceLevel?: StringFieldUpdateOperationsInput | string;
    positionType?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: CompanyUpdateOneRequiredWithoutJobNestedInput;
    Favorite?: FavoriteUpdateManyWithoutJobNestedInput;
  };

  export type JobUncheckedUpdateWithoutApplicationInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    requirements?: JobUpdaterequirementsInput | string[];
    location?: StringFieldUpdateOperationsInput | string;
    salary?: FloatFieldUpdateOperationsInput | number;
    jobType?: StringFieldUpdateOperationsInput | string;
    experienceLevel?: StringFieldUpdateOperationsInput | string;
    positionType?: IntFieldUpdateOperationsInput | number;
    companyId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Favorite?: FavoriteUncheckedUpdateManyWithoutJobNestedInput;
  };

  export type UserCreateWithoutFavoriteInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phoneNumber: string;
    profileBio?: string | null;
    role?: $Enums.Role;
    profileSkills?: UserCreateprofileSkillsInput | string[];
    profileResume?: string | null;
    profileResumeOriginalName?: string | null;
    profileCompanyId?: string | null;
    profilePhoto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Company?: CompanyCreateNestedManyWithoutUserInput;
    Application?: ApplicationCreateNestedManyWithoutApplicantInput;
  };

  export type UserUncheckedCreateWithoutFavoriteInput = {
    id?: string;
    email: string;
    password: string;
    fullName: string;
    phoneNumber: string;
    profileBio?: string | null;
    role?: $Enums.Role;
    profileSkills?: UserCreateprofileSkillsInput | string[];
    profileResume?: string | null;
    profileResumeOriginalName?: string | null;
    profileCompanyId?: string | null;
    profilePhoto?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Company?: CompanyUncheckedCreateNestedManyWithoutUserInput;
    Application?: ApplicationUncheckedCreateNestedManyWithoutApplicantInput;
  };

  export type UserCreateOrConnectWithoutFavoriteInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutFavoriteInput,
      UserUncheckedCreateWithoutFavoriteInput
    >;
  };

  export type JobCreateWithoutFavoriteInput = {
    id?: string;
    title: string;
    description: string;
    requirements?: JobCreaterequirementsInput | string[];
    location: string;
    salary: number;
    jobType: string;
    experienceLevel: string;
    positionType: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    company: CompanyCreateNestedOneWithoutJobInput;
    Application?: ApplicationCreateNestedManyWithoutJobInput;
  };

  export type JobUncheckedCreateWithoutFavoriteInput = {
    id?: string;
    title: string;
    description: string;
    requirements?: JobCreaterequirementsInput | string[];
    location: string;
    salary: number;
    jobType: string;
    experienceLevel: string;
    positionType: number;
    companyId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Application?: ApplicationUncheckedCreateNestedManyWithoutJobInput;
  };

  export type JobCreateOrConnectWithoutFavoriteInput = {
    where: JobWhereUniqueInput;
    create: XOR<
      JobCreateWithoutFavoriteInput,
      JobUncheckedCreateWithoutFavoriteInput
    >;
  };

  export type UserUpsertWithoutFavoriteInput = {
    update: XOR<
      UserUpdateWithoutFavoriteInput,
      UserUncheckedUpdateWithoutFavoriteInput
    >;
    create: XOR<
      UserCreateWithoutFavoriteInput,
      UserUncheckedCreateWithoutFavoriteInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutFavoriteInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutFavoriteInput,
      UserUncheckedUpdateWithoutFavoriteInput
    >;
  };

  export type UserUpdateWithoutFavoriteInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    profileBio?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    profileSkills?: UserUpdateprofileSkillsInput | string[];
    profileResume?: NullableStringFieldUpdateOperationsInput | string | null;
    profileResumeOriginalName?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    profileCompanyId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Company?: CompanyUpdateManyWithoutUserNestedInput;
    Application?: ApplicationUpdateManyWithoutApplicantNestedInput;
  };

  export type UserUncheckedUpdateWithoutFavoriteInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    fullName?: StringFieldUpdateOperationsInput | string;
    phoneNumber?: StringFieldUpdateOperationsInput | string;
    profileBio?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    profileSkills?: UserUpdateprofileSkillsInput | string[];
    profileResume?: NullableStringFieldUpdateOperationsInput | string | null;
    profileResumeOriginalName?:
      | NullableStringFieldUpdateOperationsInput
      | string
      | null;
    profileCompanyId?: NullableStringFieldUpdateOperationsInput | string | null;
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Company?: CompanyUncheckedUpdateManyWithoutUserNestedInput;
    Application?: ApplicationUncheckedUpdateManyWithoutApplicantNestedInput;
  };

  export type JobUpsertWithoutFavoriteInput = {
    update: XOR<
      JobUpdateWithoutFavoriteInput,
      JobUncheckedUpdateWithoutFavoriteInput
    >;
    create: XOR<
      JobCreateWithoutFavoriteInput,
      JobUncheckedCreateWithoutFavoriteInput
    >;
    where?: JobWhereInput;
  };

  export type JobUpdateToOneWithWhereWithoutFavoriteInput = {
    where?: JobWhereInput;
    data: XOR<
      JobUpdateWithoutFavoriteInput,
      JobUncheckedUpdateWithoutFavoriteInput
    >;
  };

  export type JobUpdateWithoutFavoriteInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    requirements?: JobUpdaterequirementsInput | string[];
    location?: StringFieldUpdateOperationsInput | string;
    salary?: FloatFieldUpdateOperationsInput | number;
    jobType?: StringFieldUpdateOperationsInput | string;
    experienceLevel?: StringFieldUpdateOperationsInput | string;
    positionType?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: CompanyUpdateOneRequiredWithoutJobNestedInput;
    Application?: ApplicationUpdateManyWithoutJobNestedInput;
  };

  export type JobUncheckedUpdateWithoutFavoriteInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    requirements?: JobUpdaterequirementsInput | string[];
    location?: StringFieldUpdateOperationsInput | string;
    salary?: FloatFieldUpdateOperationsInput | number;
    jobType?: StringFieldUpdateOperationsInput | string;
    experienceLevel?: StringFieldUpdateOperationsInput | string;
    positionType?: IntFieldUpdateOperationsInput | number;
    companyId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Application?: ApplicationUncheckedUpdateManyWithoutJobNestedInput;
  };

  export type CompanyCreateManyUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    location?: string | null;
    website?: string | null;
    logo?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ApplicationCreateManyApplicantInput = {
    id?: string;
    jobId: string;
    status?: $Enums.applicationStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type FavoriteCreateManyUserInput = {
    id?: string;
    jobId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CompanyUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    logo?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Job?: JobUpdateManyWithoutCompanyNestedInput;
  };

  export type CompanyUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    logo?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Job?: JobUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type CompanyUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    logo?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicationUpdateWithoutApplicantInput = {
    status?:
      | EnumapplicationStatusFieldUpdateOperationsInput
      | $Enums.applicationStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: JobUpdateOneRequiredWithoutApplicationNestedInput;
  };

  export type ApplicationUncheckedUpdateWithoutApplicantInput = {
    jobId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumapplicationStatusFieldUpdateOperationsInput
      | $Enums.applicationStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicationUncheckedUpdateManyWithoutApplicantInput = {
    jobId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumapplicationStatusFieldUpdateOperationsInput
      | $Enums.applicationStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FavoriteUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    job?: JobUpdateOneRequiredWithoutFavoriteNestedInput;
  };

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    jobId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FavoriteUncheckedUpdateManyWithoutUserInput = {
    jobId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicationCreateManyJobInput = {
    id?: string;
    applicantId: string;
    status?: $Enums.applicationStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type FavoriteCreateManyJobInput = {
    id?: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ApplicationUpdateWithoutJobInput = {
    status?:
      | EnumapplicationStatusFieldUpdateOperationsInput
      | $Enums.applicationStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: UserUpdateOneRequiredWithoutApplicationNestedInput;
  };

  export type ApplicationUncheckedUpdateWithoutJobInput = {
    applicantId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumapplicationStatusFieldUpdateOperationsInput
      | $Enums.applicationStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ApplicationUncheckedUpdateManyWithoutJobInput = {
    applicantId?: StringFieldUpdateOperationsInput | string;
    status?:
      | EnumapplicationStatusFieldUpdateOperationsInput
      | $Enums.applicationStatus;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FavoriteUpdateWithoutJobInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutFavoriteNestedInput;
  };

  export type FavoriteUncheckedUpdateWithoutJobInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FavoriteUncheckedUpdateManyWithoutJobInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type JobCreateManyCompanyInput = {
    id?: string;
    title: string;
    description: string;
    requirements?: JobCreaterequirementsInput | string[];
    location: string;
    salary: number;
    jobType: string;
    experienceLevel: string;
    positionType: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type JobUpdateWithoutCompanyInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    requirements?: JobUpdaterequirementsInput | string[];
    location?: StringFieldUpdateOperationsInput | string;
    salary?: FloatFieldUpdateOperationsInput | number;
    jobType?: StringFieldUpdateOperationsInput | string;
    experienceLevel?: StringFieldUpdateOperationsInput | string;
    positionType?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Application?: ApplicationUpdateManyWithoutJobNestedInput;
    Favorite?: FavoriteUpdateManyWithoutJobNestedInput;
  };

  export type JobUncheckedUpdateWithoutCompanyInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    requirements?: JobUpdaterequirementsInput | string[];
    location?: StringFieldUpdateOperationsInput | string;
    salary?: FloatFieldUpdateOperationsInput | number;
    jobType?: StringFieldUpdateOperationsInput | string;
    experienceLevel?: StringFieldUpdateOperationsInput | string;
    positionType?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    Application?: ApplicationUncheckedUpdateManyWithoutJobNestedInput;
    Favorite?: FavoriteUncheckedUpdateManyWithoutJobNestedInput;
  };

  export type JobUncheckedUpdateManyWithoutCompanyInput = {
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    requirements?: JobUpdaterequirementsInput | string[];
    location?: StringFieldUpdateOperationsInput | string;
    salary?: FloatFieldUpdateOperationsInput | number;
    jobType?: StringFieldUpdateOperationsInput | string;
    experienceLevel?: StringFieldUpdateOperationsInput | string;
    positionType?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
