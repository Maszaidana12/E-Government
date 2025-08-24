
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Roles
 * 
 */
export type Roles = $Result.DefaultSelection<Prisma.$RolesPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model RT
 * 
 */
export type RT = $Result.DefaultSelection<Prisma.$RTPayload>
/**
 * Model KK
 * 
 */
export type KK = $Result.DefaultSelection<Prisma.$KKPayload>
/**
 * Model Penduduk
 * 
 */
export type Penduduk = $Result.DefaultSelection<Prisma.$PendudukPayload>
/**
 * Model SuratPengajuan
 * 
 */
export type SuratPengajuan = $Result.DefaultSelection<Prisma.$SuratPengajuanPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const JenisKelamin: {
  laki_laki: 'laki_laki',
  perempuan: 'perempuan'
};

export type JenisKelamin = (typeof JenisKelamin)[keyof typeof JenisKelamin]


export const StatusWarga: {
  tetap: 'tetap',
  kontrak: 'kontrak',
  kost: 'kost',
  lainnya: 'lainnya'
};

export type StatusWarga = (typeof StatusWarga)[keyof typeof StatusWarga]


export const GolDarah: {
  A: 'A',
  B: 'B',
  AB: 'AB',
  O: 'O',
  Tidak_Tahu: 'Tidak_Tahu'
};

export type GolDarah = (typeof GolDarah)[keyof typeof GolDarah]


export const StatusPerkawinan: {
  Belum_Kawin: 'Belum_Kawin',
  Kawin: 'Kawin',
  Cerai_Hidup: 'Cerai_Hidup',
  Cerai_Mati: 'Cerai_Mati'
};

export type StatusPerkawinan = (typeof StatusPerkawinan)[keyof typeof StatusPerkawinan]


export const JenisSurat: {
  Surat_Pengantar: 'Surat_Pengantar',
  Surat_Domisili: 'Surat_Domisili',
  Surat_Keterangan: 'Surat_Keterangan',
  Surat_Usaha: 'Surat_Usaha',
  Surat_Pembuatan_KTP: 'Surat_Pembuatan_KTP'
};

export type JenisSurat = (typeof JenisSurat)[keyof typeof JenisSurat]


export const StatusPengajuan: {
  Diajukan: 'Diajukan',
  Diproses: 'Diproses',
  Selesai: 'Selesai',
  Diambil: 'Diambil'
};

export type StatusPengajuan = (typeof StatusPengajuan)[keyof typeof StatusPengajuan]

}

export type JenisKelamin = $Enums.JenisKelamin

export const JenisKelamin: typeof $Enums.JenisKelamin

export type StatusWarga = $Enums.StatusWarga

export const StatusWarga: typeof $Enums.StatusWarga

export type GolDarah = $Enums.GolDarah

export const GolDarah: typeof $Enums.GolDarah

export type StatusPerkawinan = $Enums.StatusPerkawinan

export const StatusPerkawinan: typeof $Enums.StatusPerkawinan

export type JenisSurat = $Enums.JenisSurat

export const JenisSurat: typeof $Enums.JenisSurat

export type StatusPengajuan = $Enums.StatusPengajuan

export const StatusPengajuan: typeof $Enums.StatusPengajuan

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **Roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.RolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rT`: Exposes CRUD operations for the **RT** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RTS
    * const rTS = await prisma.rT.findMany()
    * ```
    */
  get rT(): Prisma.RTDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kK`: Exposes CRUD operations for the **KK** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KKS
    * const kKS = await prisma.kK.findMany()
    * ```
    */
  get kK(): Prisma.KKDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.penduduk`: Exposes CRUD operations for the **Penduduk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Penduduks
    * const penduduks = await prisma.penduduk.findMany()
    * ```
    */
  get penduduk(): Prisma.PendudukDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suratPengajuan`: Exposes CRUD operations for the **SuratPengajuan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuratPengajuans
    * const suratPengajuans = await prisma.suratPengajuan.findMany()
    * ```
    */
  get suratPengajuan(): Prisma.SuratPengajuanDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Roles: 'Roles',
    Admin: 'Admin',
    RT: 'RT',
    KK: 'KK',
    Penduduk: 'Penduduk',
    SuratPengajuan: 'SuratPengajuan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "roles" | "admin" | "rT" | "kK" | "penduduk" | "suratPengajuan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Roles: {
        payload: Prisma.$RolesPayload<ExtArgs>
        fields: Prisma.RolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findFirst: {
            args: Prisma.RolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findMany: {
            args: Prisma.RolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          create: {
            args: Prisma.RolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          createMany: {
            args: Prisma.RolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          update: {
            args: Prisma.RolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          deleteMany: {
            args: Prisma.RolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.RolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      RT: {
        payload: Prisma.$RTPayload<ExtArgs>
        fields: Prisma.RTFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RTFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RTPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RTFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RTPayload>
          }
          findFirst: {
            args: Prisma.RTFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RTPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RTFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RTPayload>
          }
          findMany: {
            args: Prisma.RTFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RTPayload>[]
          }
          create: {
            args: Prisma.RTCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RTPayload>
          }
          createMany: {
            args: Prisma.RTCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RTDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RTPayload>
          }
          update: {
            args: Prisma.RTUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RTPayload>
          }
          deleteMany: {
            args: Prisma.RTDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RTUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RTUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RTPayload>
          }
          aggregate: {
            args: Prisma.RTAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRT>
          }
          groupBy: {
            args: Prisma.RTGroupByArgs<ExtArgs>
            result: $Utils.Optional<RTGroupByOutputType>[]
          }
          count: {
            args: Prisma.RTCountArgs<ExtArgs>
            result: $Utils.Optional<RTCountAggregateOutputType> | number
          }
        }
      }
      KK: {
        payload: Prisma.$KKPayload<ExtArgs>
        fields: Prisma.KKFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KKFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KKPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KKFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KKPayload>
          }
          findFirst: {
            args: Prisma.KKFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KKPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KKFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KKPayload>
          }
          findMany: {
            args: Prisma.KKFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KKPayload>[]
          }
          create: {
            args: Prisma.KKCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KKPayload>
          }
          createMany: {
            args: Prisma.KKCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KKDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KKPayload>
          }
          update: {
            args: Prisma.KKUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KKPayload>
          }
          deleteMany: {
            args: Prisma.KKDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KKUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KKUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KKPayload>
          }
          aggregate: {
            args: Prisma.KKAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKK>
          }
          groupBy: {
            args: Prisma.KKGroupByArgs<ExtArgs>
            result: $Utils.Optional<KKGroupByOutputType>[]
          }
          count: {
            args: Prisma.KKCountArgs<ExtArgs>
            result: $Utils.Optional<KKCountAggregateOutputType> | number
          }
        }
      }
      Penduduk: {
        payload: Prisma.$PendudukPayload<ExtArgs>
        fields: Prisma.PendudukFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PendudukFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendudukPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PendudukFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendudukPayload>
          }
          findFirst: {
            args: Prisma.PendudukFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendudukPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PendudukFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendudukPayload>
          }
          findMany: {
            args: Prisma.PendudukFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendudukPayload>[]
          }
          create: {
            args: Prisma.PendudukCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendudukPayload>
          }
          createMany: {
            args: Prisma.PendudukCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PendudukDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendudukPayload>
          }
          update: {
            args: Prisma.PendudukUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendudukPayload>
          }
          deleteMany: {
            args: Prisma.PendudukDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PendudukUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PendudukUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendudukPayload>
          }
          aggregate: {
            args: Prisma.PendudukAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePenduduk>
          }
          groupBy: {
            args: Prisma.PendudukGroupByArgs<ExtArgs>
            result: $Utils.Optional<PendudukGroupByOutputType>[]
          }
          count: {
            args: Prisma.PendudukCountArgs<ExtArgs>
            result: $Utils.Optional<PendudukCountAggregateOutputType> | number
          }
        }
      }
      SuratPengajuan: {
        payload: Prisma.$SuratPengajuanPayload<ExtArgs>
        fields: Prisma.SuratPengajuanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuratPengajuanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuratPengajuanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuratPengajuanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuratPengajuanPayload>
          }
          findFirst: {
            args: Prisma.SuratPengajuanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuratPengajuanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuratPengajuanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuratPengajuanPayload>
          }
          findMany: {
            args: Prisma.SuratPengajuanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuratPengajuanPayload>[]
          }
          create: {
            args: Prisma.SuratPengajuanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuratPengajuanPayload>
          }
          createMany: {
            args: Prisma.SuratPengajuanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SuratPengajuanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuratPengajuanPayload>
          }
          update: {
            args: Prisma.SuratPengajuanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuratPengajuanPayload>
          }
          deleteMany: {
            args: Prisma.SuratPengajuanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuratPengajuanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SuratPengajuanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuratPengajuanPayload>
          }
          aggregate: {
            args: Prisma.SuratPengajuanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuratPengajuan>
          }
          groupBy: {
            args: Prisma.SuratPengajuanGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuratPengajuanGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuratPengajuanCountArgs<ExtArgs>
            result: $Utils.Optional<SuratPengajuanCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    roles?: RolesOmit
    admin?: AdminOmit
    rT?: RTOmit
    kK?: KKOmit
    penduduk?: PendudukOmit
    suratPengajuan?: SuratPengajuanOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
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
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    admin: number
    rt: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UsersCountOutputTypeCountAdminArgs
    rt?: boolean | UsersCountOutputTypeCountRtArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRtArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RTWhereInput
  }


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    users: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RolesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }


  /**
   * Count Type RTCountOutputType
   */

  export type RTCountOutputType = {
    penduduk: number
  }

  export type RTCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penduduk?: boolean | RTCountOutputTypeCountPendudukArgs
  }

  // Custom InputTypes
  /**
   * RTCountOutputType without action
   */
  export type RTCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RTCountOutputType
     */
    select?: RTCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RTCountOutputType without action
   */
  export type RTCountOutputTypeCountPendudukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendudukWhereInput
  }


  /**
   * Count Type KKCountOutputType
   */

  export type KKCountOutputType = {
    anggota: number
  }

  export type KKCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anggota?: boolean | KKCountOutputTypeCountAnggotaArgs
  }

  // Custom InputTypes
  /**
   * KKCountOutputType without action
   */
  export type KKCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KKCountOutputType
     */
    select?: KKCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KKCountOutputType without action
   */
  export type KKCountOutputTypeCountAnggotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendudukWhereInput
  }


  /**
   * Count Type PendudukCountOutputType
   */

  export type PendudukCountOutputType = {
    surat_pengajuan: number
  }

  export type PendudukCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surat_pengajuan?: boolean | PendudukCountOutputTypeCountSurat_pengajuanArgs
  }

  // Custom InputTypes
  /**
   * PendudukCountOutputType without action
   */
  export type PendudukCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PendudukCountOutputType
     */
    select?: PendudukCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PendudukCountOutputType without action
   */
  export type PendudukCountOutputTypeCountSurat_pengajuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuratPengajuanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    role_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    role_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role_id: number | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role_id: number | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    role_id: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role_id?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role_id?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role_id?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    role_id: number | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role_id?: boolean
    role?: boolean | Users$roleArgs<ExtArgs>
    admin?: boolean | Users$adminArgs<ExtArgs>
    rt?: boolean | Users$rtArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role_id?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "role_id", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | Users$roleArgs<ExtArgs>
    admin?: boolean | Users$adminArgs<ExtArgs>
    rt?: boolean | Users$rtArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      role: Prisma.$RolesPayload<ExtArgs> | null
      admin: Prisma.$AdminPayload<ExtArgs>[]
      rt: Prisma.$RTPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      role_id: number | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends Users$roleArgs<ExtArgs> = {}>(args?: Subset<T, Users$roleArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    admin<T extends Users$adminArgs<ExtArgs> = {}>(args?: Subset<T, Users$adminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rt<T extends Users$rtArgs<ExtArgs> = {}>(args?: Subset<T, Users$rtArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly username: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly role_id: FieldRef<"Users", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.role
   */
  export type Users$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    where?: RolesWhereInput
  }

  /**
   * Users.admin
   */
  export type Users$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    cursor?: AdminWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Users.rt
   */
  export type Users$rtArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RT
     */
    select?: RTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RT
     */
    omit?: RTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RTInclude<ExtArgs> | null
    where?: RTWhereInput
    orderBy?: RTOrderByWithRelationInput | RTOrderByWithRelationInput[]
    cursor?: RTWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RTScalarFieldEnum | RTScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    id: number | null
  }

  export type RolesSumAggregateOutputType = {
    id: number | null
  }

  export type RolesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type RolesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    id?: true
  }

  export type RolesSumAggregateInputType = {
    id?: true
  }

  export type RolesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to aggregate.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type RolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolesWhereInput
    orderBy?: RolesOrderByWithAggregationInput | RolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: RolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: number
    name: string
    description: string | null
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends RolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type RolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    users?: boolean | Roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>



  export type RolesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type RolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["roles"]>
  export type RolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roles"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type RolesGetPayload<S extends boolean | null | undefined | RolesDefaultArgs> = $Result.GetResult<Prisma.$RolesPayload, S>

  type RolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface RolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roles'], meta: { name: 'Roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {RolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolesFindUniqueArgs>(args: SelectSubset<T, RolesFindUniqueArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolesFindUniqueOrThrowArgs>(args: SelectSubset<T, RolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolesFindFirstArgs>(args?: SelectSubset<T, RolesFindFirstArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolesFindFirstOrThrowArgs>(args?: SelectSubset<T, RolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolesFindManyArgs>(args?: SelectSubset<T, RolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {RolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends RolesCreateArgs>(args: SelectSubset<T, RolesCreateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolesCreateManyArgs>(args?: SelectSubset<T, RolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roles.
     * @param {RolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends RolesDeleteArgs>(args: SelectSubset<T, RolesDeleteArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {RolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolesUpdateArgs>(args: SelectSubset<T, RolesUpdateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolesDeleteManyArgs>(args?: SelectSubset<T, RolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolesUpdateManyArgs>(args: SelectSubset<T, RolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {RolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends RolesUpsertArgs>(args: SelectSubset<T, RolesUpsertArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RolesCountArgs>(
      args?: Subset<T, RolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesGroupByArgs} args - Group by arguments.
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
      T extends RolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolesGroupByArgs['orderBy'] }
        : { orderBy?: RolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roles model
   */
  readonly fields: RolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Roles$usersArgs<ExtArgs> = {}>(args?: Subset<T, Roles$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Roles model
   */
  interface RolesFieldRefs {
    readonly id: FieldRef<"Roles", 'Int'>
    readonly name: FieldRef<"Roles", 'String'>
    readonly description: FieldRef<"Roles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Roles findUnique
   */
  export type RolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findUniqueOrThrow
   */
  export type RolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findFirst
   */
  export type RolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findFirstOrThrow
   */
  export type RolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findMany
   */
  export type RolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles create
   */
  export type RolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to create a Roles.
     */
    data: XOR<RolesCreateInput, RolesUncheckedCreateInput>
  }

  /**
   * Roles createMany
   */
  export type RolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roles update
   */
  export type RolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to update a Roles.
     */
    data: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
    /**
     * Choose, which Roles to update.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles updateMany
   */
  export type RolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Roles upsert
   */
  export type RolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The filter to search for the Roles to update in case it exists.
     */
    where: RolesWhereUniqueInput
    /**
     * In case the Roles found by the `where` argument doesn't exist, create a new Roles with this data.
     */
    create: XOR<RolesCreateInput, RolesUncheckedCreateInput>
    /**
     * In case the Roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
  }

  /**
   * Roles delete
   */
  export type RolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter which Roles to delete.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles deleteMany
   */
  export type RolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Roles.users
   */
  export type Roles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Roles without action
   */
  export type RolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    nama_lengkap: string | null
    no_hp: string | null
    alamat: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    nama_lengkap: string | null
    no_hp: string | null
    alamat: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    user_id: number
    nama_lengkap: number
    no_hp: number
    alamat: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    user_id?: true
    nama_lengkap?: true
    no_hp?: true
    alamat?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    user_id?: true
    nama_lengkap?: true
    no_hp?: true
    alamat?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    user_id?: true
    nama_lengkap?: true
    no_hp?: true
    alamat?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    user_id: number | null
    nama_lengkap: string
    no_hp: string | null
    alamat: string | null
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    nama_lengkap?: boolean
    no_hp?: boolean
    alamat?: boolean
    user?: boolean | Admin$userArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    user_id?: boolean
    nama_lengkap?: boolean
    no_hp?: boolean
    alamat?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "nama_lengkap" | "no_hp" | "alamat", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Admin$userArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      nama_lengkap: string
      no_hp: string | null
      alamat: string | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Admin$userArgs<ExtArgs> = {}>(args?: Subset<T, Admin$userArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly user_id: FieldRef<"Admin", 'Int'>
    readonly nama_lengkap: FieldRef<"Admin", 'String'>
    readonly no_hp: FieldRef<"Admin", 'String'>
    readonly alamat: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.user
   */
  export type Admin$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model RT
   */

  export type AggregateRT = {
    _count: RTCountAggregateOutputType | null
    _avg: RTAvgAggregateOutputType | null
    _sum: RTSumAggregateOutputType | null
    _min: RTMinAggregateOutputType | null
    _max: RTMaxAggregateOutputType | null
  }

  export type RTAvgAggregateOutputType = {
    id_rt: number | null
    user_id: number | null
    nomor_rt: number | null
  }

  export type RTSumAggregateOutputType = {
    id_rt: number | null
    user_id: number | null
    nomor_rt: number | null
  }

  export type RTMinAggregateOutputType = {
    id_rt: number | null
    user_id: number | null
    nomor_rt: number | null
    nama_lengkap: string | null
    no_hp: string | null
    alamat: string | null
  }

  export type RTMaxAggregateOutputType = {
    id_rt: number | null
    user_id: number | null
    nomor_rt: number | null
    nama_lengkap: string | null
    no_hp: string | null
    alamat: string | null
  }

  export type RTCountAggregateOutputType = {
    id_rt: number
    user_id: number
    nomor_rt: number
    nama_lengkap: number
    no_hp: number
    alamat: number
    _all: number
  }


  export type RTAvgAggregateInputType = {
    id_rt?: true
    user_id?: true
    nomor_rt?: true
  }

  export type RTSumAggregateInputType = {
    id_rt?: true
    user_id?: true
    nomor_rt?: true
  }

  export type RTMinAggregateInputType = {
    id_rt?: true
    user_id?: true
    nomor_rt?: true
    nama_lengkap?: true
    no_hp?: true
    alamat?: true
  }

  export type RTMaxAggregateInputType = {
    id_rt?: true
    user_id?: true
    nomor_rt?: true
    nama_lengkap?: true
    no_hp?: true
    alamat?: true
  }

  export type RTCountAggregateInputType = {
    id_rt?: true
    user_id?: true
    nomor_rt?: true
    nama_lengkap?: true
    no_hp?: true
    alamat?: true
    _all?: true
  }

  export type RTAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RT to aggregate.
     */
    where?: RTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RTS to fetch.
     */
    orderBy?: RTOrderByWithRelationInput | RTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RTS
    **/
    _count?: true | RTCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RTAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RTSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RTMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RTMaxAggregateInputType
  }

  export type GetRTAggregateType<T extends RTAggregateArgs> = {
        [P in keyof T & keyof AggregateRT]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRT[P]>
      : GetScalarType<T[P], AggregateRT[P]>
  }




  export type RTGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RTWhereInput
    orderBy?: RTOrderByWithAggregationInput | RTOrderByWithAggregationInput[]
    by: RTScalarFieldEnum[] | RTScalarFieldEnum
    having?: RTScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RTCountAggregateInputType | true
    _avg?: RTAvgAggregateInputType
    _sum?: RTSumAggregateInputType
    _min?: RTMinAggregateInputType
    _max?: RTMaxAggregateInputType
  }

  export type RTGroupByOutputType = {
    id_rt: number
    user_id: number | null
    nomor_rt: number
    nama_lengkap: string
    no_hp: string | null
    alamat: string | null
    _count: RTCountAggregateOutputType | null
    _avg: RTAvgAggregateOutputType | null
    _sum: RTSumAggregateOutputType | null
    _min: RTMinAggregateOutputType | null
    _max: RTMaxAggregateOutputType | null
  }

  type GetRTGroupByPayload<T extends RTGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RTGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RTGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RTGroupByOutputType[P]>
            : GetScalarType<T[P], RTGroupByOutputType[P]>
        }
      >
    >


  export type RTSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rt?: boolean
    user_id?: boolean
    nomor_rt?: boolean
    nama_lengkap?: boolean
    no_hp?: boolean
    alamat?: boolean
    user?: boolean | RT$userArgs<ExtArgs>
    penduduk?: boolean | RT$pendudukArgs<ExtArgs>
    _count?: boolean | RTCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rT"]>



  export type RTSelectScalar = {
    id_rt?: boolean
    user_id?: boolean
    nomor_rt?: boolean
    nama_lengkap?: boolean
    no_hp?: boolean
    alamat?: boolean
  }

  export type RTOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_rt" | "user_id" | "nomor_rt" | "nama_lengkap" | "no_hp" | "alamat", ExtArgs["result"]["rT"]>
  export type RTInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | RT$userArgs<ExtArgs>
    penduduk?: boolean | RT$pendudukArgs<ExtArgs>
    _count?: boolean | RTCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RTPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RT"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs> | null
      penduduk: Prisma.$PendudukPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_rt: number
      user_id: number | null
      nomor_rt: number
      nama_lengkap: string
      no_hp: string | null
      alamat: string | null
    }, ExtArgs["result"]["rT"]>
    composites: {}
  }

  type RTGetPayload<S extends boolean | null | undefined | RTDefaultArgs> = $Result.GetResult<Prisma.$RTPayload, S>

  type RTCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RTFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RTCountAggregateInputType | true
    }

  export interface RTDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RT'], meta: { name: 'RT' } }
    /**
     * Find zero or one RT that matches the filter.
     * @param {RTFindUniqueArgs} args - Arguments to find a RT
     * @example
     * // Get one RT
     * const rT = await prisma.rT.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RTFindUniqueArgs>(args: SelectSubset<T, RTFindUniqueArgs<ExtArgs>>): Prisma__RTClient<$Result.GetResult<Prisma.$RTPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RT that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RTFindUniqueOrThrowArgs} args - Arguments to find a RT
     * @example
     * // Get one RT
     * const rT = await prisma.rT.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RTFindUniqueOrThrowArgs>(args: SelectSubset<T, RTFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RTClient<$Result.GetResult<Prisma.$RTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RT that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RTFindFirstArgs} args - Arguments to find a RT
     * @example
     * // Get one RT
     * const rT = await prisma.rT.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RTFindFirstArgs>(args?: SelectSubset<T, RTFindFirstArgs<ExtArgs>>): Prisma__RTClient<$Result.GetResult<Prisma.$RTPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RT that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RTFindFirstOrThrowArgs} args - Arguments to find a RT
     * @example
     * // Get one RT
     * const rT = await prisma.rT.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RTFindFirstOrThrowArgs>(args?: SelectSubset<T, RTFindFirstOrThrowArgs<ExtArgs>>): Prisma__RTClient<$Result.GetResult<Prisma.$RTPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RTFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RTS
     * const rTS = await prisma.rT.findMany()
     * 
     * // Get first 10 RTS
     * const rTS = await prisma.rT.findMany({ take: 10 })
     * 
     * // Only select the `id_rt`
     * const rTWithId_rtOnly = await prisma.rT.findMany({ select: { id_rt: true } })
     * 
     */
    findMany<T extends RTFindManyArgs>(args?: SelectSubset<T, RTFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RTPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RT.
     * @param {RTCreateArgs} args - Arguments to create a RT.
     * @example
     * // Create one RT
     * const RT = await prisma.rT.create({
     *   data: {
     *     // ... data to create a RT
     *   }
     * })
     * 
     */
    create<T extends RTCreateArgs>(args: SelectSubset<T, RTCreateArgs<ExtArgs>>): Prisma__RTClient<$Result.GetResult<Prisma.$RTPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RTS.
     * @param {RTCreateManyArgs} args - Arguments to create many RTS.
     * @example
     * // Create many RTS
     * const rT = await prisma.rT.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RTCreateManyArgs>(args?: SelectSubset<T, RTCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RT.
     * @param {RTDeleteArgs} args - Arguments to delete one RT.
     * @example
     * // Delete one RT
     * const RT = await prisma.rT.delete({
     *   where: {
     *     // ... filter to delete one RT
     *   }
     * })
     * 
     */
    delete<T extends RTDeleteArgs>(args: SelectSubset<T, RTDeleteArgs<ExtArgs>>): Prisma__RTClient<$Result.GetResult<Prisma.$RTPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RT.
     * @param {RTUpdateArgs} args - Arguments to update one RT.
     * @example
     * // Update one RT
     * const rT = await prisma.rT.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RTUpdateArgs>(args: SelectSubset<T, RTUpdateArgs<ExtArgs>>): Prisma__RTClient<$Result.GetResult<Prisma.$RTPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RTS.
     * @param {RTDeleteManyArgs} args - Arguments to filter RTS to delete.
     * @example
     * // Delete a few RTS
     * const { count } = await prisma.rT.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RTDeleteManyArgs>(args?: SelectSubset<T, RTDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RTUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RTS
     * const rT = await prisma.rT.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RTUpdateManyArgs>(args: SelectSubset<T, RTUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RT.
     * @param {RTUpsertArgs} args - Arguments to update or create a RT.
     * @example
     * // Update or create a RT
     * const rT = await prisma.rT.upsert({
     *   create: {
     *     // ... data to create a RT
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RT we want to update
     *   }
     * })
     */
    upsert<T extends RTUpsertArgs>(args: SelectSubset<T, RTUpsertArgs<ExtArgs>>): Prisma__RTClient<$Result.GetResult<Prisma.$RTPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RTCountArgs} args - Arguments to filter RTS to count.
     * @example
     * // Count the number of RTS
     * const count = await prisma.rT.count({
     *   where: {
     *     // ... the filter for the RTS we want to count
     *   }
     * })
    **/
    count<T extends RTCountArgs>(
      args?: Subset<T, RTCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RTCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RTAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RTAggregateArgs>(args: Subset<T, RTAggregateArgs>): Prisma.PrismaPromise<GetRTAggregateType<T>>

    /**
     * Group by RT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RTGroupByArgs} args - Group by arguments.
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
      T extends RTGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RTGroupByArgs['orderBy'] }
        : { orderBy?: RTGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RTGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRTGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RT model
   */
  readonly fields: RTFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RT.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RTClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends RT$userArgs<ExtArgs> = {}>(args?: Subset<T, RT$userArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    penduduk<T extends RT$pendudukArgs<ExtArgs> = {}>(args?: Subset<T, RT$pendudukArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RT model
   */
  interface RTFieldRefs {
    readonly id_rt: FieldRef<"RT", 'Int'>
    readonly user_id: FieldRef<"RT", 'Int'>
    readonly nomor_rt: FieldRef<"RT", 'Int'>
    readonly nama_lengkap: FieldRef<"RT", 'String'>
    readonly no_hp: FieldRef<"RT", 'String'>
    readonly alamat: FieldRef<"RT", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RT findUnique
   */
  export type RTFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RT
     */
    select?: RTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RT
     */
    omit?: RTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RTInclude<ExtArgs> | null
    /**
     * Filter, which RT to fetch.
     */
    where: RTWhereUniqueInput
  }

  /**
   * RT findUniqueOrThrow
   */
  export type RTFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RT
     */
    select?: RTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RT
     */
    omit?: RTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RTInclude<ExtArgs> | null
    /**
     * Filter, which RT to fetch.
     */
    where: RTWhereUniqueInput
  }

  /**
   * RT findFirst
   */
  export type RTFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RT
     */
    select?: RTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RT
     */
    omit?: RTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RTInclude<ExtArgs> | null
    /**
     * Filter, which RT to fetch.
     */
    where?: RTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RTS to fetch.
     */
    orderBy?: RTOrderByWithRelationInput | RTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RTS.
     */
    cursor?: RTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RTS.
     */
    distinct?: RTScalarFieldEnum | RTScalarFieldEnum[]
  }

  /**
   * RT findFirstOrThrow
   */
  export type RTFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RT
     */
    select?: RTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RT
     */
    omit?: RTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RTInclude<ExtArgs> | null
    /**
     * Filter, which RT to fetch.
     */
    where?: RTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RTS to fetch.
     */
    orderBy?: RTOrderByWithRelationInput | RTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RTS.
     */
    cursor?: RTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RTS.
     */
    distinct?: RTScalarFieldEnum | RTScalarFieldEnum[]
  }

  /**
   * RT findMany
   */
  export type RTFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RT
     */
    select?: RTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RT
     */
    omit?: RTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RTInclude<ExtArgs> | null
    /**
     * Filter, which RTS to fetch.
     */
    where?: RTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RTS to fetch.
     */
    orderBy?: RTOrderByWithRelationInput | RTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RTS.
     */
    cursor?: RTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RTS.
     */
    skip?: number
    distinct?: RTScalarFieldEnum | RTScalarFieldEnum[]
  }

  /**
   * RT create
   */
  export type RTCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RT
     */
    select?: RTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RT
     */
    omit?: RTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RTInclude<ExtArgs> | null
    /**
     * The data needed to create a RT.
     */
    data: XOR<RTCreateInput, RTUncheckedCreateInput>
  }

  /**
   * RT createMany
   */
  export type RTCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RTS.
     */
    data: RTCreateManyInput | RTCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RT update
   */
  export type RTUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RT
     */
    select?: RTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RT
     */
    omit?: RTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RTInclude<ExtArgs> | null
    /**
     * The data needed to update a RT.
     */
    data: XOR<RTUpdateInput, RTUncheckedUpdateInput>
    /**
     * Choose, which RT to update.
     */
    where: RTWhereUniqueInput
  }

  /**
   * RT updateMany
   */
  export type RTUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RTS.
     */
    data: XOR<RTUpdateManyMutationInput, RTUncheckedUpdateManyInput>
    /**
     * Filter which RTS to update
     */
    where?: RTWhereInput
    /**
     * Limit how many RTS to update.
     */
    limit?: number
  }

  /**
   * RT upsert
   */
  export type RTUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RT
     */
    select?: RTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RT
     */
    omit?: RTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RTInclude<ExtArgs> | null
    /**
     * The filter to search for the RT to update in case it exists.
     */
    where: RTWhereUniqueInput
    /**
     * In case the RT found by the `where` argument doesn't exist, create a new RT with this data.
     */
    create: XOR<RTCreateInput, RTUncheckedCreateInput>
    /**
     * In case the RT was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RTUpdateInput, RTUncheckedUpdateInput>
  }

  /**
   * RT delete
   */
  export type RTDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RT
     */
    select?: RTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RT
     */
    omit?: RTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RTInclude<ExtArgs> | null
    /**
     * Filter which RT to delete.
     */
    where: RTWhereUniqueInput
  }

  /**
   * RT deleteMany
   */
  export type RTDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RTS to delete
     */
    where?: RTWhereInput
    /**
     * Limit how many RTS to delete.
     */
    limit?: number
  }

  /**
   * RT.user
   */
  export type RT$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * RT.penduduk
   */
  export type RT$pendudukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukInclude<ExtArgs> | null
    where?: PendudukWhereInput
    orderBy?: PendudukOrderByWithRelationInput | PendudukOrderByWithRelationInput[]
    cursor?: PendudukWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendudukScalarFieldEnum | PendudukScalarFieldEnum[]
  }

  /**
   * RT without action
   */
  export type RTDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RT
     */
    select?: RTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RT
     */
    omit?: RTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RTInclude<ExtArgs> | null
  }


  /**
   * Model KK
   */

  export type AggregateKK = {
    _count: KKCountAggregateOutputType | null
    _avg: KKAvgAggregateOutputType | null
    _sum: KKSumAggregateOutputType | null
    _min: KKMinAggregateOutputType | null
    _max: KKMaxAggregateOutputType | null
  }

  export type KKAvgAggregateOutputType = {
    id_kk: number | null
    kepala_keluarga_id: number | null
  }

  export type KKSumAggregateOutputType = {
    id_kk: number | null
    kepala_keluarga_id: number | null
  }

  export type KKMinAggregateOutputType = {
    id_kk: number | null
    no_kk: string | null
    kepala_keluarga_id: number | null
    alamat: string | null
    rt: string | null
    rw: string | null
    kode_pos: string | null
    desa_kelurahan: string | null
    kecamatan: string | null
    kabupaten_kota: string | null
    provinsi: string | null
  }

  export type KKMaxAggregateOutputType = {
    id_kk: number | null
    no_kk: string | null
    kepala_keluarga_id: number | null
    alamat: string | null
    rt: string | null
    rw: string | null
    kode_pos: string | null
    desa_kelurahan: string | null
    kecamatan: string | null
    kabupaten_kota: string | null
    provinsi: string | null
  }

  export type KKCountAggregateOutputType = {
    id_kk: number
    no_kk: number
    kepala_keluarga_id: number
    alamat: number
    rt: number
    rw: number
    kode_pos: number
    desa_kelurahan: number
    kecamatan: number
    kabupaten_kota: number
    provinsi: number
    _all: number
  }


  export type KKAvgAggregateInputType = {
    id_kk?: true
    kepala_keluarga_id?: true
  }

  export type KKSumAggregateInputType = {
    id_kk?: true
    kepala_keluarga_id?: true
  }

  export type KKMinAggregateInputType = {
    id_kk?: true
    no_kk?: true
    kepala_keluarga_id?: true
    alamat?: true
    rt?: true
    rw?: true
    kode_pos?: true
    desa_kelurahan?: true
    kecamatan?: true
    kabupaten_kota?: true
    provinsi?: true
  }

  export type KKMaxAggregateInputType = {
    id_kk?: true
    no_kk?: true
    kepala_keluarga_id?: true
    alamat?: true
    rt?: true
    rw?: true
    kode_pos?: true
    desa_kelurahan?: true
    kecamatan?: true
    kabupaten_kota?: true
    provinsi?: true
  }

  export type KKCountAggregateInputType = {
    id_kk?: true
    no_kk?: true
    kepala_keluarga_id?: true
    alamat?: true
    rt?: true
    rw?: true
    kode_pos?: true
    desa_kelurahan?: true
    kecamatan?: true
    kabupaten_kota?: true
    provinsi?: true
    _all?: true
  }

  export type KKAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KK to aggregate.
     */
    where?: KKWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KKS to fetch.
     */
    orderBy?: KKOrderByWithRelationInput | KKOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KKWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KKS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KKS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KKS
    **/
    _count?: true | KKCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KKAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KKSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KKMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KKMaxAggregateInputType
  }

  export type GetKKAggregateType<T extends KKAggregateArgs> = {
        [P in keyof T & keyof AggregateKK]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKK[P]>
      : GetScalarType<T[P], AggregateKK[P]>
  }




  export type KKGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KKWhereInput
    orderBy?: KKOrderByWithAggregationInput | KKOrderByWithAggregationInput[]
    by: KKScalarFieldEnum[] | KKScalarFieldEnum
    having?: KKScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KKCountAggregateInputType | true
    _avg?: KKAvgAggregateInputType
    _sum?: KKSumAggregateInputType
    _min?: KKMinAggregateInputType
    _max?: KKMaxAggregateInputType
  }

  export type KKGroupByOutputType = {
    id_kk: number
    no_kk: string
    kepala_keluarga_id: number
    alamat: string
    rt: string
    rw: string
    kode_pos: string | null
    desa_kelurahan: string
    kecamatan: string
    kabupaten_kota: string
    provinsi: string
    _count: KKCountAggregateOutputType | null
    _avg: KKAvgAggregateOutputType | null
    _sum: KKSumAggregateOutputType | null
    _min: KKMinAggregateOutputType | null
    _max: KKMaxAggregateOutputType | null
  }

  type GetKKGroupByPayload<T extends KKGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KKGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KKGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KKGroupByOutputType[P]>
            : GetScalarType<T[P], KKGroupByOutputType[P]>
        }
      >
    >


  export type KKSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kk?: boolean
    no_kk?: boolean
    kepala_keluarga_id?: boolean
    alamat?: boolean
    rt?: boolean
    rw?: boolean
    kode_pos?: boolean
    desa_kelurahan?: boolean
    kecamatan?: boolean
    kabupaten_kota?: boolean
    provinsi?: boolean
    kepala_keluarga?: boolean | PendudukDefaultArgs<ExtArgs>
    anggota?: boolean | KK$anggotaArgs<ExtArgs>
    _count?: boolean | KKCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kK"]>



  export type KKSelectScalar = {
    id_kk?: boolean
    no_kk?: boolean
    kepala_keluarga_id?: boolean
    alamat?: boolean
    rt?: boolean
    rw?: boolean
    kode_pos?: boolean
    desa_kelurahan?: boolean
    kecamatan?: boolean
    kabupaten_kota?: boolean
    provinsi?: boolean
  }

  export type KKOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_kk" | "no_kk" | "kepala_keluarga_id" | "alamat" | "rt" | "rw" | "kode_pos" | "desa_kelurahan" | "kecamatan" | "kabupaten_kota" | "provinsi", ExtArgs["result"]["kK"]>
  export type KKInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kepala_keluarga?: boolean | PendudukDefaultArgs<ExtArgs>
    anggota?: boolean | KK$anggotaArgs<ExtArgs>
    _count?: boolean | KKCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $KKPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KK"
    objects: {
      kepala_keluarga: Prisma.$PendudukPayload<ExtArgs>
      anggota: Prisma.$PendudukPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_kk: number
      no_kk: string
      kepala_keluarga_id: number
      alamat: string
      rt: string
      rw: string
      kode_pos: string | null
      desa_kelurahan: string
      kecamatan: string
      kabupaten_kota: string
      provinsi: string
    }, ExtArgs["result"]["kK"]>
    composites: {}
  }

  type KKGetPayload<S extends boolean | null | undefined | KKDefaultArgs> = $Result.GetResult<Prisma.$KKPayload, S>

  type KKCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KKFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KKCountAggregateInputType | true
    }

  export interface KKDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KK'], meta: { name: 'KK' } }
    /**
     * Find zero or one KK that matches the filter.
     * @param {KKFindUniqueArgs} args - Arguments to find a KK
     * @example
     * // Get one KK
     * const kK = await prisma.kK.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KKFindUniqueArgs>(args: SelectSubset<T, KKFindUniqueArgs<ExtArgs>>): Prisma__KKClient<$Result.GetResult<Prisma.$KKPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KK that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KKFindUniqueOrThrowArgs} args - Arguments to find a KK
     * @example
     * // Get one KK
     * const kK = await prisma.kK.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KKFindUniqueOrThrowArgs>(args: SelectSubset<T, KKFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KKClient<$Result.GetResult<Prisma.$KKPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KK that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KKFindFirstArgs} args - Arguments to find a KK
     * @example
     * // Get one KK
     * const kK = await prisma.kK.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KKFindFirstArgs>(args?: SelectSubset<T, KKFindFirstArgs<ExtArgs>>): Prisma__KKClient<$Result.GetResult<Prisma.$KKPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KK that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KKFindFirstOrThrowArgs} args - Arguments to find a KK
     * @example
     * // Get one KK
     * const kK = await prisma.kK.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KKFindFirstOrThrowArgs>(args?: SelectSubset<T, KKFindFirstOrThrowArgs<ExtArgs>>): Prisma__KKClient<$Result.GetResult<Prisma.$KKPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KKS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KKFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KKS
     * const kKS = await prisma.kK.findMany()
     * 
     * // Get first 10 KKS
     * const kKS = await prisma.kK.findMany({ take: 10 })
     * 
     * // Only select the `id_kk`
     * const kKWithId_kkOnly = await prisma.kK.findMany({ select: { id_kk: true } })
     * 
     */
    findMany<T extends KKFindManyArgs>(args?: SelectSubset<T, KKFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KKPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KK.
     * @param {KKCreateArgs} args - Arguments to create a KK.
     * @example
     * // Create one KK
     * const KK = await prisma.kK.create({
     *   data: {
     *     // ... data to create a KK
     *   }
     * })
     * 
     */
    create<T extends KKCreateArgs>(args: SelectSubset<T, KKCreateArgs<ExtArgs>>): Prisma__KKClient<$Result.GetResult<Prisma.$KKPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KKS.
     * @param {KKCreateManyArgs} args - Arguments to create many KKS.
     * @example
     * // Create many KKS
     * const kK = await prisma.kK.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KKCreateManyArgs>(args?: SelectSubset<T, KKCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a KK.
     * @param {KKDeleteArgs} args - Arguments to delete one KK.
     * @example
     * // Delete one KK
     * const KK = await prisma.kK.delete({
     *   where: {
     *     // ... filter to delete one KK
     *   }
     * })
     * 
     */
    delete<T extends KKDeleteArgs>(args: SelectSubset<T, KKDeleteArgs<ExtArgs>>): Prisma__KKClient<$Result.GetResult<Prisma.$KKPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KK.
     * @param {KKUpdateArgs} args - Arguments to update one KK.
     * @example
     * // Update one KK
     * const kK = await prisma.kK.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KKUpdateArgs>(args: SelectSubset<T, KKUpdateArgs<ExtArgs>>): Prisma__KKClient<$Result.GetResult<Prisma.$KKPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KKS.
     * @param {KKDeleteManyArgs} args - Arguments to filter KKS to delete.
     * @example
     * // Delete a few KKS
     * const { count } = await prisma.kK.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KKDeleteManyArgs>(args?: SelectSubset<T, KKDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KKS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KKUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KKS
     * const kK = await prisma.kK.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KKUpdateManyArgs>(args: SelectSubset<T, KKUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KK.
     * @param {KKUpsertArgs} args - Arguments to update or create a KK.
     * @example
     * // Update or create a KK
     * const kK = await prisma.kK.upsert({
     *   create: {
     *     // ... data to create a KK
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KK we want to update
     *   }
     * })
     */
    upsert<T extends KKUpsertArgs>(args: SelectSubset<T, KKUpsertArgs<ExtArgs>>): Prisma__KKClient<$Result.GetResult<Prisma.$KKPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KKS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KKCountArgs} args - Arguments to filter KKS to count.
     * @example
     * // Count the number of KKS
     * const count = await prisma.kK.count({
     *   where: {
     *     // ... the filter for the KKS we want to count
     *   }
     * })
    **/
    count<T extends KKCountArgs>(
      args?: Subset<T, KKCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KKCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KK.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KKAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KKAggregateArgs>(args: Subset<T, KKAggregateArgs>): Prisma.PrismaPromise<GetKKAggregateType<T>>

    /**
     * Group by KK.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KKGroupByArgs} args - Group by arguments.
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
      T extends KKGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KKGroupByArgs['orderBy'] }
        : { orderBy?: KKGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KKGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKKGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KK model
   */
  readonly fields: KKFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KK.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KKClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kepala_keluarga<T extends PendudukDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PendudukDefaultArgs<ExtArgs>>): Prisma__PendudukClient<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    anggota<T extends KK$anggotaArgs<ExtArgs> = {}>(args?: Subset<T, KK$anggotaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KK model
   */
  interface KKFieldRefs {
    readonly id_kk: FieldRef<"KK", 'Int'>
    readonly no_kk: FieldRef<"KK", 'String'>
    readonly kepala_keluarga_id: FieldRef<"KK", 'Int'>
    readonly alamat: FieldRef<"KK", 'String'>
    readonly rt: FieldRef<"KK", 'String'>
    readonly rw: FieldRef<"KK", 'String'>
    readonly kode_pos: FieldRef<"KK", 'String'>
    readonly desa_kelurahan: FieldRef<"KK", 'String'>
    readonly kecamatan: FieldRef<"KK", 'String'>
    readonly kabupaten_kota: FieldRef<"KK", 'String'>
    readonly provinsi: FieldRef<"KK", 'String'>
  }
    

  // Custom InputTypes
  /**
   * KK findUnique
   */
  export type KKFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KK
     */
    select?: KKSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KK
     */
    omit?: KKOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KKInclude<ExtArgs> | null
    /**
     * Filter, which KK to fetch.
     */
    where: KKWhereUniqueInput
  }

  /**
   * KK findUniqueOrThrow
   */
  export type KKFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KK
     */
    select?: KKSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KK
     */
    omit?: KKOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KKInclude<ExtArgs> | null
    /**
     * Filter, which KK to fetch.
     */
    where: KKWhereUniqueInput
  }

  /**
   * KK findFirst
   */
  export type KKFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KK
     */
    select?: KKSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KK
     */
    omit?: KKOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KKInclude<ExtArgs> | null
    /**
     * Filter, which KK to fetch.
     */
    where?: KKWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KKS to fetch.
     */
    orderBy?: KKOrderByWithRelationInput | KKOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KKS.
     */
    cursor?: KKWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KKS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KKS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KKS.
     */
    distinct?: KKScalarFieldEnum | KKScalarFieldEnum[]
  }

  /**
   * KK findFirstOrThrow
   */
  export type KKFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KK
     */
    select?: KKSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KK
     */
    omit?: KKOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KKInclude<ExtArgs> | null
    /**
     * Filter, which KK to fetch.
     */
    where?: KKWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KKS to fetch.
     */
    orderBy?: KKOrderByWithRelationInput | KKOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KKS.
     */
    cursor?: KKWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KKS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KKS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KKS.
     */
    distinct?: KKScalarFieldEnum | KKScalarFieldEnum[]
  }

  /**
   * KK findMany
   */
  export type KKFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KK
     */
    select?: KKSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KK
     */
    omit?: KKOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KKInclude<ExtArgs> | null
    /**
     * Filter, which KKS to fetch.
     */
    where?: KKWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KKS to fetch.
     */
    orderBy?: KKOrderByWithRelationInput | KKOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KKS.
     */
    cursor?: KKWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KKS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KKS.
     */
    skip?: number
    distinct?: KKScalarFieldEnum | KKScalarFieldEnum[]
  }

  /**
   * KK create
   */
  export type KKCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KK
     */
    select?: KKSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KK
     */
    omit?: KKOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KKInclude<ExtArgs> | null
    /**
     * The data needed to create a KK.
     */
    data: XOR<KKCreateInput, KKUncheckedCreateInput>
  }

  /**
   * KK createMany
   */
  export type KKCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KKS.
     */
    data: KKCreateManyInput | KKCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KK update
   */
  export type KKUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KK
     */
    select?: KKSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KK
     */
    omit?: KKOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KKInclude<ExtArgs> | null
    /**
     * The data needed to update a KK.
     */
    data: XOR<KKUpdateInput, KKUncheckedUpdateInput>
    /**
     * Choose, which KK to update.
     */
    where: KKWhereUniqueInput
  }

  /**
   * KK updateMany
   */
  export type KKUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KKS.
     */
    data: XOR<KKUpdateManyMutationInput, KKUncheckedUpdateManyInput>
    /**
     * Filter which KKS to update
     */
    where?: KKWhereInput
    /**
     * Limit how many KKS to update.
     */
    limit?: number
  }

  /**
   * KK upsert
   */
  export type KKUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KK
     */
    select?: KKSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KK
     */
    omit?: KKOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KKInclude<ExtArgs> | null
    /**
     * The filter to search for the KK to update in case it exists.
     */
    where: KKWhereUniqueInput
    /**
     * In case the KK found by the `where` argument doesn't exist, create a new KK with this data.
     */
    create: XOR<KKCreateInput, KKUncheckedCreateInput>
    /**
     * In case the KK was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KKUpdateInput, KKUncheckedUpdateInput>
  }

  /**
   * KK delete
   */
  export type KKDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KK
     */
    select?: KKSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KK
     */
    omit?: KKOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KKInclude<ExtArgs> | null
    /**
     * Filter which KK to delete.
     */
    where: KKWhereUniqueInput
  }

  /**
   * KK deleteMany
   */
  export type KKDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KKS to delete
     */
    where?: KKWhereInput
    /**
     * Limit how many KKS to delete.
     */
    limit?: number
  }

  /**
   * KK.anggota
   */
  export type KK$anggotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukInclude<ExtArgs> | null
    where?: PendudukWhereInput
    orderBy?: PendudukOrderByWithRelationInput | PendudukOrderByWithRelationInput[]
    cursor?: PendudukWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendudukScalarFieldEnum | PendudukScalarFieldEnum[]
  }

  /**
   * KK without action
   */
  export type KKDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KK
     */
    select?: KKSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KK
     */
    omit?: KKOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KKInclude<ExtArgs> | null
  }


  /**
   * Model Penduduk
   */

  export type AggregatePenduduk = {
    _count: PendudukCountAggregateOutputType | null
    _avg: PendudukAvgAggregateOutputType | null
    _sum: PendudukSumAggregateOutputType | null
    _min: PendudukMinAggregateOutputType | null
    _max: PendudukMaxAggregateOutputType | null
  }

  export type PendudukAvgAggregateOutputType = {
    id_penduduk: number | null
    no_rt: number | null
    id_kk: number | null
  }

  export type PendudukSumAggregateOutputType = {
    id_penduduk: number | null
    no_rt: number | null
    id_kk: number | null
  }

  export type PendudukMinAggregateOutputType = {
    id_penduduk: number | null
    nik: string | null
    nama: string | null
    password: string | null
    jenis_kelamin: $Enums.JenisKelamin | null
    tanggal_lahir: Date | null
    alamat: string | null
    no_rt: number | null
    status_warga: $Enums.StatusWarga | null
    id_kk: number | null
    tempat_lahir: string | null
    agama: string | null
    pekerjaan: string | null
    pendidikan_terakhir: string | null
    gol_darah: $Enums.GolDarah | null
    status_perkawinan: $Enums.StatusPerkawinan | null
    tanggal_perkawinan: Date | null
    hubungan_dalam_keluarga: string | null
    kewarganegaraan: string | null
    no_paspor: string | null
    no_kitap: string | null
    nama_ayah: string | null
    nama_ibu: string | null
  }

  export type PendudukMaxAggregateOutputType = {
    id_penduduk: number | null
    nik: string | null
    nama: string | null
    password: string | null
    jenis_kelamin: $Enums.JenisKelamin | null
    tanggal_lahir: Date | null
    alamat: string | null
    no_rt: number | null
    status_warga: $Enums.StatusWarga | null
    id_kk: number | null
    tempat_lahir: string | null
    agama: string | null
    pekerjaan: string | null
    pendidikan_terakhir: string | null
    gol_darah: $Enums.GolDarah | null
    status_perkawinan: $Enums.StatusPerkawinan | null
    tanggal_perkawinan: Date | null
    hubungan_dalam_keluarga: string | null
    kewarganegaraan: string | null
    no_paspor: string | null
    no_kitap: string | null
    nama_ayah: string | null
    nama_ibu: string | null
  }

  export type PendudukCountAggregateOutputType = {
    id_penduduk: number
    nik: number
    nama: number
    password: number
    jenis_kelamin: number
    tanggal_lahir: number
    alamat: number
    no_rt: number
    status_warga: number
    id_kk: number
    tempat_lahir: number
    agama: number
    pekerjaan: number
    pendidikan_terakhir: number
    gol_darah: number
    status_perkawinan: number
    tanggal_perkawinan: number
    hubungan_dalam_keluarga: number
    kewarganegaraan: number
    no_paspor: number
    no_kitap: number
    nama_ayah: number
    nama_ibu: number
    _all: number
  }


  export type PendudukAvgAggregateInputType = {
    id_penduduk?: true
    no_rt?: true
    id_kk?: true
  }

  export type PendudukSumAggregateInputType = {
    id_penduduk?: true
    no_rt?: true
    id_kk?: true
  }

  export type PendudukMinAggregateInputType = {
    id_penduduk?: true
    nik?: true
    nama?: true
    password?: true
    jenis_kelamin?: true
    tanggal_lahir?: true
    alamat?: true
    no_rt?: true
    status_warga?: true
    id_kk?: true
    tempat_lahir?: true
    agama?: true
    pekerjaan?: true
    pendidikan_terakhir?: true
    gol_darah?: true
    status_perkawinan?: true
    tanggal_perkawinan?: true
    hubungan_dalam_keluarga?: true
    kewarganegaraan?: true
    no_paspor?: true
    no_kitap?: true
    nama_ayah?: true
    nama_ibu?: true
  }

  export type PendudukMaxAggregateInputType = {
    id_penduduk?: true
    nik?: true
    nama?: true
    password?: true
    jenis_kelamin?: true
    tanggal_lahir?: true
    alamat?: true
    no_rt?: true
    status_warga?: true
    id_kk?: true
    tempat_lahir?: true
    agama?: true
    pekerjaan?: true
    pendidikan_terakhir?: true
    gol_darah?: true
    status_perkawinan?: true
    tanggal_perkawinan?: true
    hubungan_dalam_keluarga?: true
    kewarganegaraan?: true
    no_paspor?: true
    no_kitap?: true
    nama_ayah?: true
    nama_ibu?: true
  }

  export type PendudukCountAggregateInputType = {
    id_penduduk?: true
    nik?: true
    nama?: true
    password?: true
    jenis_kelamin?: true
    tanggal_lahir?: true
    alamat?: true
    no_rt?: true
    status_warga?: true
    id_kk?: true
    tempat_lahir?: true
    agama?: true
    pekerjaan?: true
    pendidikan_terakhir?: true
    gol_darah?: true
    status_perkawinan?: true
    tanggal_perkawinan?: true
    hubungan_dalam_keluarga?: true
    kewarganegaraan?: true
    no_paspor?: true
    no_kitap?: true
    nama_ayah?: true
    nama_ibu?: true
    _all?: true
  }

  export type PendudukAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penduduk to aggregate.
     */
    where?: PendudukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penduduks to fetch.
     */
    orderBy?: PendudukOrderByWithRelationInput | PendudukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PendudukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penduduks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penduduks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Penduduks
    **/
    _count?: true | PendudukCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PendudukAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PendudukSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendudukMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendudukMaxAggregateInputType
  }

  export type GetPendudukAggregateType<T extends PendudukAggregateArgs> = {
        [P in keyof T & keyof AggregatePenduduk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePenduduk[P]>
      : GetScalarType<T[P], AggregatePenduduk[P]>
  }




  export type PendudukGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendudukWhereInput
    orderBy?: PendudukOrderByWithAggregationInput | PendudukOrderByWithAggregationInput[]
    by: PendudukScalarFieldEnum[] | PendudukScalarFieldEnum
    having?: PendudukScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendudukCountAggregateInputType | true
    _avg?: PendudukAvgAggregateInputType
    _sum?: PendudukSumAggregateInputType
    _min?: PendudukMinAggregateInputType
    _max?: PendudukMaxAggregateInputType
  }

  export type PendudukGroupByOutputType = {
    id_penduduk: number
    nik: string
    nama: string
    password: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date
    alamat: string
    no_rt: number | null
    status_warga: $Enums.StatusWarga | null
    id_kk: number | null
    tempat_lahir: string
    agama: string | null
    pekerjaan: string | null
    pendidikan_terakhir: string | null
    gol_darah: $Enums.GolDarah | null
    status_perkawinan: $Enums.StatusPerkawinan | null
    tanggal_perkawinan: Date | null
    hubungan_dalam_keluarga: string | null
    kewarganegaraan: string | null
    no_paspor: string | null
    no_kitap: string | null
    nama_ayah: string | null
    nama_ibu: string | null
    _count: PendudukCountAggregateOutputType | null
    _avg: PendudukAvgAggregateOutputType | null
    _sum: PendudukSumAggregateOutputType | null
    _min: PendudukMinAggregateOutputType | null
    _max: PendudukMaxAggregateOutputType | null
  }

  type GetPendudukGroupByPayload<T extends PendudukGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendudukGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendudukGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendudukGroupByOutputType[P]>
            : GetScalarType<T[P], PendudukGroupByOutputType[P]>
        }
      >
    >


  export type PendudukSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_penduduk?: boolean
    nik?: boolean
    nama?: boolean
    password?: boolean
    jenis_kelamin?: boolean
    tanggal_lahir?: boolean
    alamat?: boolean
    no_rt?: boolean
    status_warga?: boolean
    id_kk?: boolean
    tempat_lahir?: boolean
    agama?: boolean
    pekerjaan?: boolean
    pendidikan_terakhir?: boolean
    gol_darah?: boolean
    status_perkawinan?: boolean
    tanggal_perkawinan?: boolean
    hubungan_dalam_keluarga?: boolean
    kewarganegaraan?: boolean
    no_paspor?: boolean
    no_kitap?: boolean
    nama_ayah?: boolean
    nama_ibu?: boolean
    rt?: boolean | Penduduk$rtArgs<ExtArgs>
    kk?: boolean | Penduduk$kkArgs<ExtArgs>
    kk_kepala?: boolean | Penduduk$kk_kepalaArgs<ExtArgs>
    surat_pengajuan?: boolean | Penduduk$surat_pengajuanArgs<ExtArgs>
    _count?: boolean | PendudukCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penduduk"]>



  export type PendudukSelectScalar = {
    id_penduduk?: boolean
    nik?: boolean
    nama?: boolean
    password?: boolean
    jenis_kelamin?: boolean
    tanggal_lahir?: boolean
    alamat?: boolean
    no_rt?: boolean
    status_warga?: boolean
    id_kk?: boolean
    tempat_lahir?: boolean
    agama?: boolean
    pekerjaan?: boolean
    pendidikan_terakhir?: boolean
    gol_darah?: boolean
    status_perkawinan?: boolean
    tanggal_perkawinan?: boolean
    hubungan_dalam_keluarga?: boolean
    kewarganegaraan?: boolean
    no_paspor?: boolean
    no_kitap?: boolean
    nama_ayah?: boolean
    nama_ibu?: boolean
  }

  export type PendudukOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_penduduk" | "nik" | "nama" | "password" | "jenis_kelamin" | "tanggal_lahir" | "alamat" | "no_rt" | "status_warga" | "id_kk" | "tempat_lahir" | "agama" | "pekerjaan" | "pendidikan_terakhir" | "gol_darah" | "status_perkawinan" | "tanggal_perkawinan" | "hubungan_dalam_keluarga" | "kewarganegaraan" | "no_paspor" | "no_kitap" | "nama_ayah" | "nama_ibu", ExtArgs["result"]["penduduk"]>
  export type PendudukInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rt?: boolean | Penduduk$rtArgs<ExtArgs>
    kk?: boolean | Penduduk$kkArgs<ExtArgs>
    kk_kepala?: boolean | Penduduk$kk_kepalaArgs<ExtArgs>
    surat_pengajuan?: boolean | Penduduk$surat_pengajuanArgs<ExtArgs>
    _count?: boolean | PendudukCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PendudukPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Penduduk"
    objects: {
      rt: Prisma.$RTPayload<ExtArgs> | null
      kk: Prisma.$KKPayload<ExtArgs> | null
      kk_kepala: Prisma.$KKPayload<ExtArgs> | null
      surat_pengajuan: Prisma.$SuratPengajuanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_penduduk: number
      nik: string
      nama: string
      password: string
      jenis_kelamin: $Enums.JenisKelamin
      tanggal_lahir: Date
      alamat: string
      no_rt: number | null
      status_warga: $Enums.StatusWarga | null
      id_kk: number | null
      tempat_lahir: string
      agama: string | null
      pekerjaan: string | null
      pendidikan_terakhir: string | null
      gol_darah: $Enums.GolDarah | null
      status_perkawinan: $Enums.StatusPerkawinan | null
      tanggal_perkawinan: Date | null
      hubungan_dalam_keluarga: string | null
      kewarganegaraan: string | null
      no_paspor: string | null
      no_kitap: string | null
      nama_ayah: string | null
      nama_ibu: string | null
    }, ExtArgs["result"]["penduduk"]>
    composites: {}
  }

  type PendudukGetPayload<S extends boolean | null | undefined | PendudukDefaultArgs> = $Result.GetResult<Prisma.$PendudukPayload, S>

  type PendudukCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PendudukFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PendudukCountAggregateInputType | true
    }

  export interface PendudukDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Penduduk'], meta: { name: 'Penduduk' } }
    /**
     * Find zero or one Penduduk that matches the filter.
     * @param {PendudukFindUniqueArgs} args - Arguments to find a Penduduk
     * @example
     * // Get one Penduduk
     * const penduduk = await prisma.penduduk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PendudukFindUniqueArgs>(args: SelectSubset<T, PendudukFindUniqueArgs<ExtArgs>>): Prisma__PendudukClient<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Penduduk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PendudukFindUniqueOrThrowArgs} args - Arguments to find a Penduduk
     * @example
     * // Get one Penduduk
     * const penduduk = await prisma.penduduk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PendudukFindUniqueOrThrowArgs>(args: SelectSubset<T, PendudukFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PendudukClient<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penduduk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendudukFindFirstArgs} args - Arguments to find a Penduduk
     * @example
     * // Get one Penduduk
     * const penduduk = await prisma.penduduk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PendudukFindFirstArgs>(args?: SelectSubset<T, PendudukFindFirstArgs<ExtArgs>>): Prisma__PendudukClient<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penduduk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendudukFindFirstOrThrowArgs} args - Arguments to find a Penduduk
     * @example
     * // Get one Penduduk
     * const penduduk = await prisma.penduduk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PendudukFindFirstOrThrowArgs>(args?: SelectSubset<T, PendudukFindFirstOrThrowArgs<ExtArgs>>): Prisma__PendudukClient<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Penduduks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendudukFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Penduduks
     * const penduduks = await prisma.penduduk.findMany()
     * 
     * // Get first 10 Penduduks
     * const penduduks = await prisma.penduduk.findMany({ take: 10 })
     * 
     * // Only select the `id_penduduk`
     * const pendudukWithId_pendudukOnly = await prisma.penduduk.findMany({ select: { id_penduduk: true } })
     * 
     */
    findMany<T extends PendudukFindManyArgs>(args?: SelectSubset<T, PendudukFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Penduduk.
     * @param {PendudukCreateArgs} args - Arguments to create a Penduduk.
     * @example
     * // Create one Penduduk
     * const Penduduk = await prisma.penduduk.create({
     *   data: {
     *     // ... data to create a Penduduk
     *   }
     * })
     * 
     */
    create<T extends PendudukCreateArgs>(args: SelectSubset<T, PendudukCreateArgs<ExtArgs>>): Prisma__PendudukClient<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Penduduks.
     * @param {PendudukCreateManyArgs} args - Arguments to create many Penduduks.
     * @example
     * // Create many Penduduks
     * const penduduk = await prisma.penduduk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PendudukCreateManyArgs>(args?: SelectSubset<T, PendudukCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Penduduk.
     * @param {PendudukDeleteArgs} args - Arguments to delete one Penduduk.
     * @example
     * // Delete one Penduduk
     * const Penduduk = await prisma.penduduk.delete({
     *   where: {
     *     // ... filter to delete one Penduduk
     *   }
     * })
     * 
     */
    delete<T extends PendudukDeleteArgs>(args: SelectSubset<T, PendudukDeleteArgs<ExtArgs>>): Prisma__PendudukClient<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Penduduk.
     * @param {PendudukUpdateArgs} args - Arguments to update one Penduduk.
     * @example
     * // Update one Penduduk
     * const penduduk = await prisma.penduduk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PendudukUpdateArgs>(args: SelectSubset<T, PendudukUpdateArgs<ExtArgs>>): Prisma__PendudukClient<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Penduduks.
     * @param {PendudukDeleteManyArgs} args - Arguments to filter Penduduks to delete.
     * @example
     * // Delete a few Penduduks
     * const { count } = await prisma.penduduk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PendudukDeleteManyArgs>(args?: SelectSubset<T, PendudukDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penduduks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendudukUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Penduduks
     * const penduduk = await prisma.penduduk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PendudukUpdateManyArgs>(args: SelectSubset<T, PendudukUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Penduduk.
     * @param {PendudukUpsertArgs} args - Arguments to update or create a Penduduk.
     * @example
     * // Update or create a Penduduk
     * const penduduk = await prisma.penduduk.upsert({
     *   create: {
     *     // ... data to create a Penduduk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Penduduk we want to update
     *   }
     * })
     */
    upsert<T extends PendudukUpsertArgs>(args: SelectSubset<T, PendudukUpsertArgs<ExtArgs>>): Prisma__PendudukClient<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Penduduks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendudukCountArgs} args - Arguments to filter Penduduks to count.
     * @example
     * // Count the number of Penduduks
     * const count = await prisma.penduduk.count({
     *   where: {
     *     // ... the filter for the Penduduks we want to count
     *   }
     * })
    **/
    count<T extends PendudukCountArgs>(
      args?: Subset<T, PendudukCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendudukCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Penduduk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendudukAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PendudukAggregateArgs>(args: Subset<T, PendudukAggregateArgs>): Prisma.PrismaPromise<GetPendudukAggregateType<T>>

    /**
     * Group by Penduduk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendudukGroupByArgs} args - Group by arguments.
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
      T extends PendudukGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PendudukGroupByArgs['orderBy'] }
        : { orderBy?: PendudukGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PendudukGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendudukGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Penduduk model
   */
  readonly fields: PendudukFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Penduduk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PendudukClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rt<T extends Penduduk$rtArgs<ExtArgs> = {}>(args?: Subset<T, Penduduk$rtArgs<ExtArgs>>): Prisma__RTClient<$Result.GetResult<Prisma.$RTPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    kk<T extends Penduduk$kkArgs<ExtArgs> = {}>(args?: Subset<T, Penduduk$kkArgs<ExtArgs>>): Prisma__KKClient<$Result.GetResult<Prisma.$KKPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    kk_kepala<T extends Penduduk$kk_kepalaArgs<ExtArgs> = {}>(args?: Subset<T, Penduduk$kk_kepalaArgs<ExtArgs>>): Prisma__KKClient<$Result.GetResult<Prisma.$KKPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    surat_pengajuan<T extends Penduduk$surat_pengajuanArgs<ExtArgs> = {}>(args?: Subset<T, Penduduk$surat_pengajuanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuratPengajuanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Penduduk model
   */
  interface PendudukFieldRefs {
    readonly id_penduduk: FieldRef<"Penduduk", 'Int'>
    readonly nik: FieldRef<"Penduduk", 'String'>
    readonly nama: FieldRef<"Penduduk", 'String'>
    readonly password: FieldRef<"Penduduk", 'String'>
    readonly jenis_kelamin: FieldRef<"Penduduk", 'JenisKelamin'>
    readonly tanggal_lahir: FieldRef<"Penduduk", 'DateTime'>
    readonly alamat: FieldRef<"Penduduk", 'String'>
    readonly no_rt: FieldRef<"Penduduk", 'Int'>
    readonly status_warga: FieldRef<"Penduduk", 'StatusWarga'>
    readonly id_kk: FieldRef<"Penduduk", 'Int'>
    readonly tempat_lahir: FieldRef<"Penduduk", 'String'>
    readonly agama: FieldRef<"Penduduk", 'String'>
    readonly pekerjaan: FieldRef<"Penduduk", 'String'>
    readonly pendidikan_terakhir: FieldRef<"Penduduk", 'String'>
    readonly gol_darah: FieldRef<"Penduduk", 'GolDarah'>
    readonly status_perkawinan: FieldRef<"Penduduk", 'StatusPerkawinan'>
    readonly tanggal_perkawinan: FieldRef<"Penduduk", 'DateTime'>
    readonly hubungan_dalam_keluarga: FieldRef<"Penduduk", 'String'>
    readonly kewarganegaraan: FieldRef<"Penduduk", 'String'>
    readonly no_paspor: FieldRef<"Penduduk", 'String'>
    readonly no_kitap: FieldRef<"Penduduk", 'String'>
    readonly nama_ayah: FieldRef<"Penduduk", 'String'>
    readonly nama_ibu: FieldRef<"Penduduk", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Penduduk findUnique
   */
  export type PendudukFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukInclude<ExtArgs> | null
    /**
     * Filter, which Penduduk to fetch.
     */
    where: PendudukWhereUniqueInput
  }

  /**
   * Penduduk findUniqueOrThrow
   */
  export type PendudukFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukInclude<ExtArgs> | null
    /**
     * Filter, which Penduduk to fetch.
     */
    where: PendudukWhereUniqueInput
  }

  /**
   * Penduduk findFirst
   */
  export type PendudukFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukInclude<ExtArgs> | null
    /**
     * Filter, which Penduduk to fetch.
     */
    where?: PendudukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penduduks to fetch.
     */
    orderBy?: PendudukOrderByWithRelationInput | PendudukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penduduks.
     */
    cursor?: PendudukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penduduks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penduduks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penduduks.
     */
    distinct?: PendudukScalarFieldEnum | PendudukScalarFieldEnum[]
  }

  /**
   * Penduduk findFirstOrThrow
   */
  export type PendudukFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukInclude<ExtArgs> | null
    /**
     * Filter, which Penduduk to fetch.
     */
    where?: PendudukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penduduks to fetch.
     */
    orderBy?: PendudukOrderByWithRelationInput | PendudukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penduduks.
     */
    cursor?: PendudukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penduduks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penduduks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penduduks.
     */
    distinct?: PendudukScalarFieldEnum | PendudukScalarFieldEnum[]
  }

  /**
   * Penduduk findMany
   */
  export type PendudukFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukInclude<ExtArgs> | null
    /**
     * Filter, which Penduduks to fetch.
     */
    where?: PendudukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penduduks to fetch.
     */
    orderBy?: PendudukOrderByWithRelationInput | PendudukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Penduduks.
     */
    cursor?: PendudukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penduduks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penduduks.
     */
    skip?: number
    distinct?: PendudukScalarFieldEnum | PendudukScalarFieldEnum[]
  }

  /**
   * Penduduk create
   */
  export type PendudukCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukInclude<ExtArgs> | null
    /**
     * The data needed to create a Penduduk.
     */
    data: XOR<PendudukCreateInput, PendudukUncheckedCreateInput>
  }

  /**
   * Penduduk createMany
   */
  export type PendudukCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Penduduks.
     */
    data: PendudukCreateManyInput | PendudukCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Penduduk update
   */
  export type PendudukUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukInclude<ExtArgs> | null
    /**
     * The data needed to update a Penduduk.
     */
    data: XOR<PendudukUpdateInput, PendudukUncheckedUpdateInput>
    /**
     * Choose, which Penduduk to update.
     */
    where: PendudukWhereUniqueInput
  }

  /**
   * Penduduk updateMany
   */
  export type PendudukUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Penduduks.
     */
    data: XOR<PendudukUpdateManyMutationInput, PendudukUncheckedUpdateManyInput>
    /**
     * Filter which Penduduks to update
     */
    where?: PendudukWhereInput
    /**
     * Limit how many Penduduks to update.
     */
    limit?: number
  }

  /**
   * Penduduk upsert
   */
  export type PendudukUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukInclude<ExtArgs> | null
    /**
     * The filter to search for the Penduduk to update in case it exists.
     */
    where: PendudukWhereUniqueInput
    /**
     * In case the Penduduk found by the `where` argument doesn't exist, create a new Penduduk with this data.
     */
    create: XOR<PendudukCreateInput, PendudukUncheckedCreateInput>
    /**
     * In case the Penduduk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PendudukUpdateInput, PendudukUncheckedUpdateInput>
  }

  /**
   * Penduduk delete
   */
  export type PendudukDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukInclude<ExtArgs> | null
    /**
     * Filter which Penduduk to delete.
     */
    where: PendudukWhereUniqueInput
  }

  /**
   * Penduduk deleteMany
   */
  export type PendudukDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penduduks to delete
     */
    where?: PendudukWhereInput
    /**
     * Limit how many Penduduks to delete.
     */
    limit?: number
  }

  /**
   * Penduduk.rt
   */
  export type Penduduk$rtArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RT
     */
    select?: RTSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RT
     */
    omit?: RTOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RTInclude<ExtArgs> | null
    where?: RTWhereInput
  }

  /**
   * Penduduk.kk
   */
  export type Penduduk$kkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KK
     */
    select?: KKSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KK
     */
    omit?: KKOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KKInclude<ExtArgs> | null
    where?: KKWhereInput
  }

  /**
   * Penduduk.kk_kepala
   */
  export type Penduduk$kk_kepalaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KK
     */
    select?: KKSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KK
     */
    omit?: KKOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KKInclude<ExtArgs> | null
    where?: KKWhereInput
  }

  /**
   * Penduduk.surat_pengajuan
   */
  export type Penduduk$surat_pengajuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuratPengajuan
     */
    select?: SuratPengajuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuratPengajuan
     */
    omit?: SuratPengajuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuratPengajuanInclude<ExtArgs> | null
    where?: SuratPengajuanWhereInput
    orderBy?: SuratPengajuanOrderByWithRelationInput | SuratPengajuanOrderByWithRelationInput[]
    cursor?: SuratPengajuanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuratPengajuanScalarFieldEnum | SuratPengajuanScalarFieldEnum[]
  }

  /**
   * Penduduk without action
   */
  export type PendudukDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penduduk
     */
    select?: PendudukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penduduk
     */
    omit?: PendudukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendudukInclude<ExtArgs> | null
  }


  /**
   * Model SuratPengajuan
   */

  export type AggregateSuratPengajuan = {
    _count: SuratPengajuanCountAggregateOutputType | null
    _avg: SuratPengajuanAvgAggregateOutputType | null
    _sum: SuratPengajuanSumAggregateOutputType | null
    _min: SuratPengajuanMinAggregateOutputType | null
    _max: SuratPengajuanMaxAggregateOutputType | null
  }

  export type SuratPengajuanAvgAggregateOutputType = {
    id_surat: number | null
    id_penduduk: number | null
  }

  export type SuratPengajuanSumAggregateOutputType = {
    id_surat: number | null
    id_penduduk: number | null
  }

  export type SuratPengajuanMinAggregateOutputType = {
    id_surat: number | null
    id_penduduk: number | null
    jenis_surat: $Enums.JenisSurat | null
    keterangan: string | null
    tanggal_pengajuan: Date | null
    tanggal_proses: Date | null
    tanggal_pengambilan: Date | null
    status: $Enums.StatusPengajuan | null
  }

  export type SuratPengajuanMaxAggregateOutputType = {
    id_surat: number | null
    id_penduduk: number | null
    jenis_surat: $Enums.JenisSurat | null
    keterangan: string | null
    tanggal_pengajuan: Date | null
    tanggal_proses: Date | null
    tanggal_pengambilan: Date | null
    status: $Enums.StatusPengajuan | null
  }

  export type SuratPengajuanCountAggregateOutputType = {
    id_surat: number
    id_penduduk: number
    jenis_surat: number
    keterangan: number
    tanggal_pengajuan: number
    tanggal_proses: number
    tanggal_pengambilan: number
    status: number
    _all: number
  }


  export type SuratPengajuanAvgAggregateInputType = {
    id_surat?: true
    id_penduduk?: true
  }

  export type SuratPengajuanSumAggregateInputType = {
    id_surat?: true
    id_penduduk?: true
  }

  export type SuratPengajuanMinAggregateInputType = {
    id_surat?: true
    id_penduduk?: true
    jenis_surat?: true
    keterangan?: true
    tanggal_pengajuan?: true
    tanggal_proses?: true
    tanggal_pengambilan?: true
    status?: true
  }

  export type SuratPengajuanMaxAggregateInputType = {
    id_surat?: true
    id_penduduk?: true
    jenis_surat?: true
    keterangan?: true
    tanggal_pengajuan?: true
    tanggal_proses?: true
    tanggal_pengambilan?: true
    status?: true
  }

  export type SuratPengajuanCountAggregateInputType = {
    id_surat?: true
    id_penduduk?: true
    jenis_surat?: true
    keterangan?: true
    tanggal_pengajuan?: true
    tanggal_proses?: true
    tanggal_pengambilan?: true
    status?: true
    _all?: true
  }

  export type SuratPengajuanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuratPengajuan to aggregate.
     */
    where?: SuratPengajuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuratPengajuans to fetch.
     */
    orderBy?: SuratPengajuanOrderByWithRelationInput | SuratPengajuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuratPengajuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuratPengajuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuratPengajuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuratPengajuans
    **/
    _count?: true | SuratPengajuanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuratPengajuanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuratPengajuanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuratPengajuanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuratPengajuanMaxAggregateInputType
  }

  export type GetSuratPengajuanAggregateType<T extends SuratPengajuanAggregateArgs> = {
        [P in keyof T & keyof AggregateSuratPengajuan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuratPengajuan[P]>
      : GetScalarType<T[P], AggregateSuratPengajuan[P]>
  }




  export type SuratPengajuanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuratPengajuanWhereInput
    orderBy?: SuratPengajuanOrderByWithAggregationInput | SuratPengajuanOrderByWithAggregationInput[]
    by: SuratPengajuanScalarFieldEnum[] | SuratPengajuanScalarFieldEnum
    having?: SuratPengajuanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuratPengajuanCountAggregateInputType | true
    _avg?: SuratPengajuanAvgAggregateInputType
    _sum?: SuratPengajuanSumAggregateInputType
    _min?: SuratPengajuanMinAggregateInputType
    _max?: SuratPengajuanMaxAggregateInputType
  }

  export type SuratPengajuanGroupByOutputType = {
    id_surat: number
    id_penduduk: number
    jenis_surat: $Enums.JenisSurat
    keterangan: string | null
    tanggal_pengajuan: Date | null
    tanggal_proses: Date | null
    tanggal_pengambilan: Date | null
    status: $Enums.StatusPengajuan | null
    _count: SuratPengajuanCountAggregateOutputType | null
    _avg: SuratPengajuanAvgAggregateOutputType | null
    _sum: SuratPengajuanSumAggregateOutputType | null
    _min: SuratPengajuanMinAggregateOutputType | null
    _max: SuratPengajuanMaxAggregateOutputType | null
  }

  type GetSuratPengajuanGroupByPayload<T extends SuratPengajuanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuratPengajuanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuratPengajuanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuratPengajuanGroupByOutputType[P]>
            : GetScalarType<T[P], SuratPengajuanGroupByOutputType[P]>
        }
      >
    >


  export type SuratPengajuanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_surat?: boolean
    id_penduduk?: boolean
    jenis_surat?: boolean
    keterangan?: boolean
    tanggal_pengajuan?: boolean
    tanggal_proses?: boolean
    tanggal_pengambilan?: boolean
    status?: boolean
    penduduk?: boolean | PendudukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suratPengajuan"]>



  export type SuratPengajuanSelectScalar = {
    id_surat?: boolean
    id_penduduk?: boolean
    jenis_surat?: boolean
    keterangan?: boolean
    tanggal_pengajuan?: boolean
    tanggal_proses?: boolean
    tanggal_pengambilan?: boolean
    status?: boolean
  }

  export type SuratPengajuanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_surat" | "id_penduduk" | "jenis_surat" | "keterangan" | "tanggal_pengajuan" | "tanggal_proses" | "tanggal_pengambilan" | "status", ExtArgs["result"]["suratPengajuan"]>
  export type SuratPengajuanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    penduduk?: boolean | PendudukDefaultArgs<ExtArgs>
  }

  export type $SuratPengajuanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuratPengajuan"
    objects: {
      penduduk: Prisma.$PendudukPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_surat: number
      id_penduduk: number
      jenis_surat: $Enums.JenisSurat
      keterangan: string | null
      tanggal_pengajuan: Date | null
      tanggal_proses: Date | null
      tanggal_pengambilan: Date | null
      status: $Enums.StatusPengajuan | null
    }, ExtArgs["result"]["suratPengajuan"]>
    composites: {}
  }

  type SuratPengajuanGetPayload<S extends boolean | null | undefined | SuratPengajuanDefaultArgs> = $Result.GetResult<Prisma.$SuratPengajuanPayload, S>

  type SuratPengajuanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuratPengajuanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuratPengajuanCountAggregateInputType | true
    }

  export interface SuratPengajuanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuratPengajuan'], meta: { name: 'SuratPengajuan' } }
    /**
     * Find zero or one SuratPengajuan that matches the filter.
     * @param {SuratPengajuanFindUniqueArgs} args - Arguments to find a SuratPengajuan
     * @example
     * // Get one SuratPengajuan
     * const suratPengajuan = await prisma.suratPengajuan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuratPengajuanFindUniqueArgs>(args: SelectSubset<T, SuratPengajuanFindUniqueArgs<ExtArgs>>): Prisma__SuratPengajuanClient<$Result.GetResult<Prisma.$SuratPengajuanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SuratPengajuan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuratPengajuanFindUniqueOrThrowArgs} args - Arguments to find a SuratPengajuan
     * @example
     * // Get one SuratPengajuan
     * const suratPengajuan = await prisma.suratPengajuan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuratPengajuanFindUniqueOrThrowArgs>(args: SelectSubset<T, SuratPengajuanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuratPengajuanClient<$Result.GetResult<Prisma.$SuratPengajuanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuratPengajuan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuratPengajuanFindFirstArgs} args - Arguments to find a SuratPengajuan
     * @example
     * // Get one SuratPengajuan
     * const suratPengajuan = await prisma.suratPengajuan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuratPengajuanFindFirstArgs>(args?: SelectSubset<T, SuratPengajuanFindFirstArgs<ExtArgs>>): Prisma__SuratPengajuanClient<$Result.GetResult<Prisma.$SuratPengajuanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuratPengajuan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuratPengajuanFindFirstOrThrowArgs} args - Arguments to find a SuratPengajuan
     * @example
     * // Get one SuratPengajuan
     * const suratPengajuan = await prisma.suratPengajuan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuratPengajuanFindFirstOrThrowArgs>(args?: SelectSubset<T, SuratPengajuanFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuratPengajuanClient<$Result.GetResult<Prisma.$SuratPengajuanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SuratPengajuans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuratPengajuanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuratPengajuans
     * const suratPengajuans = await prisma.suratPengajuan.findMany()
     * 
     * // Get first 10 SuratPengajuans
     * const suratPengajuans = await prisma.suratPengajuan.findMany({ take: 10 })
     * 
     * // Only select the `id_surat`
     * const suratPengajuanWithId_suratOnly = await prisma.suratPengajuan.findMany({ select: { id_surat: true } })
     * 
     */
    findMany<T extends SuratPengajuanFindManyArgs>(args?: SelectSubset<T, SuratPengajuanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuratPengajuanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SuratPengajuan.
     * @param {SuratPengajuanCreateArgs} args - Arguments to create a SuratPengajuan.
     * @example
     * // Create one SuratPengajuan
     * const SuratPengajuan = await prisma.suratPengajuan.create({
     *   data: {
     *     // ... data to create a SuratPengajuan
     *   }
     * })
     * 
     */
    create<T extends SuratPengajuanCreateArgs>(args: SelectSubset<T, SuratPengajuanCreateArgs<ExtArgs>>): Prisma__SuratPengajuanClient<$Result.GetResult<Prisma.$SuratPengajuanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SuratPengajuans.
     * @param {SuratPengajuanCreateManyArgs} args - Arguments to create many SuratPengajuans.
     * @example
     * // Create many SuratPengajuans
     * const suratPengajuan = await prisma.suratPengajuan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuratPengajuanCreateManyArgs>(args?: SelectSubset<T, SuratPengajuanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SuratPengajuan.
     * @param {SuratPengajuanDeleteArgs} args - Arguments to delete one SuratPengajuan.
     * @example
     * // Delete one SuratPengajuan
     * const SuratPengajuan = await prisma.suratPengajuan.delete({
     *   where: {
     *     // ... filter to delete one SuratPengajuan
     *   }
     * })
     * 
     */
    delete<T extends SuratPengajuanDeleteArgs>(args: SelectSubset<T, SuratPengajuanDeleteArgs<ExtArgs>>): Prisma__SuratPengajuanClient<$Result.GetResult<Prisma.$SuratPengajuanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SuratPengajuan.
     * @param {SuratPengajuanUpdateArgs} args - Arguments to update one SuratPengajuan.
     * @example
     * // Update one SuratPengajuan
     * const suratPengajuan = await prisma.suratPengajuan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuratPengajuanUpdateArgs>(args: SelectSubset<T, SuratPengajuanUpdateArgs<ExtArgs>>): Prisma__SuratPengajuanClient<$Result.GetResult<Prisma.$SuratPengajuanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SuratPengajuans.
     * @param {SuratPengajuanDeleteManyArgs} args - Arguments to filter SuratPengajuans to delete.
     * @example
     * // Delete a few SuratPengajuans
     * const { count } = await prisma.suratPengajuan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuratPengajuanDeleteManyArgs>(args?: SelectSubset<T, SuratPengajuanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuratPengajuans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuratPengajuanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuratPengajuans
     * const suratPengajuan = await prisma.suratPengajuan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuratPengajuanUpdateManyArgs>(args: SelectSubset<T, SuratPengajuanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SuratPengajuan.
     * @param {SuratPengajuanUpsertArgs} args - Arguments to update or create a SuratPengajuan.
     * @example
     * // Update or create a SuratPengajuan
     * const suratPengajuan = await prisma.suratPengajuan.upsert({
     *   create: {
     *     // ... data to create a SuratPengajuan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuratPengajuan we want to update
     *   }
     * })
     */
    upsert<T extends SuratPengajuanUpsertArgs>(args: SelectSubset<T, SuratPengajuanUpsertArgs<ExtArgs>>): Prisma__SuratPengajuanClient<$Result.GetResult<Prisma.$SuratPengajuanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SuratPengajuans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuratPengajuanCountArgs} args - Arguments to filter SuratPengajuans to count.
     * @example
     * // Count the number of SuratPengajuans
     * const count = await prisma.suratPengajuan.count({
     *   where: {
     *     // ... the filter for the SuratPengajuans we want to count
     *   }
     * })
    **/
    count<T extends SuratPengajuanCountArgs>(
      args?: Subset<T, SuratPengajuanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuratPengajuanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuratPengajuan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuratPengajuanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuratPengajuanAggregateArgs>(args: Subset<T, SuratPengajuanAggregateArgs>): Prisma.PrismaPromise<GetSuratPengajuanAggregateType<T>>

    /**
     * Group by SuratPengajuan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuratPengajuanGroupByArgs} args - Group by arguments.
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
      T extends SuratPengajuanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuratPengajuanGroupByArgs['orderBy'] }
        : { orderBy?: SuratPengajuanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SuratPengajuanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuratPengajuanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuratPengajuan model
   */
  readonly fields: SuratPengajuanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuratPengajuan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuratPengajuanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    penduduk<T extends PendudukDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PendudukDefaultArgs<ExtArgs>>): Prisma__PendudukClient<$Result.GetResult<Prisma.$PendudukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SuratPengajuan model
   */
  interface SuratPengajuanFieldRefs {
    readonly id_surat: FieldRef<"SuratPengajuan", 'Int'>
    readonly id_penduduk: FieldRef<"SuratPengajuan", 'Int'>
    readonly jenis_surat: FieldRef<"SuratPengajuan", 'JenisSurat'>
    readonly keterangan: FieldRef<"SuratPengajuan", 'String'>
    readonly tanggal_pengajuan: FieldRef<"SuratPengajuan", 'DateTime'>
    readonly tanggal_proses: FieldRef<"SuratPengajuan", 'DateTime'>
    readonly tanggal_pengambilan: FieldRef<"SuratPengajuan", 'DateTime'>
    readonly status: FieldRef<"SuratPengajuan", 'StatusPengajuan'>
  }
    

  // Custom InputTypes
  /**
   * SuratPengajuan findUnique
   */
  export type SuratPengajuanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuratPengajuan
     */
    select?: SuratPengajuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuratPengajuan
     */
    omit?: SuratPengajuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuratPengajuanInclude<ExtArgs> | null
    /**
     * Filter, which SuratPengajuan to fetch.
     */
    where: SuratPengajuanWhereUniqueInput
  }

  /**
   * SuratPengajuan findUniqueOrThrow
   */
  export type SuratPengajuanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuratPengajuan
     */
    select?: SuratPengajuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuratPengajuan
     */
    omit?: SuratPengajuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuratPengajuanInclude<ExtArgs> | null
    /**
     * Filter, which SuratPengajuan to fetch.
     */
    where: SuratPengajuanWhereUniqueInput
  }

  /**
   * SuratPengajuan findFirst
   */
  export type SuratPengajuanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuratPengajuan
     */
    select?: SuratPengajuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuratPengajuan
     */
    omit?: SuratPengajuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuratPengajuanInclude<ExtArgs> | null
    /**
     * Filter, which SuratPengajuan to fetch.
     */
    where?: SuratPengajuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuratPengajuans to fetch.
     */
    orderBy?: SuratPengajuanOrderByWithRelationInput | SuratPengajuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuratPengajuans.
     */
    cursor?: SuratPengajuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuratPengajuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuratPengajuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuratPengajuans.
     */
    distinct?: SuratPengajuanScalarFieldEnum | SuratPengajuanScalarFieldEnum[]
  }

  /**
   * SuratPengajuan findFirstOrThrow
   */
  export type SuratPengajuanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuratPengajuan
     */
    select?: SuratPengajuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuratPengajuan
     */
    omit?: SuratPengajuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuratPengajuanInclude<ExtArgs> | null
    /**
     * Filter, which SuratPengajuan to fetch.
     */
    where?: SuratPengajuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuratPengajuans to fetch.
     */
    orderBy?: SuratPengajuanOrderByWithRelationInput | SuratPengajuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuratPengajuans.
     */
    cursor?: SuratPengajuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuratPengajuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuratPengajuans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuratPengajuans.
     */
    distinct?: SuratPengajuanScalarFieldEnum | SuratPengajuanScalarFieldEnum[]
  }

  /**
   * SuratPengajuan findMany
   */
  export type SuratPengajuanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuratPengajuan
     */
    select?: SuratPengajuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuratPengajuan
     */
    omit?: SuratPengajuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuratPengajuanInclude<ExtArgs> | null
    /**
     * Filter, which SuratPengajuans to fetch.
     */
    where?: SuratPengajuanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuratPengajuans to fetch.
     */
    orderBy?: SuratPengajuanOrderByWithRelationInput | SuratPengajuanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuratPengajuans.
     */
    cursor?: SuratPengajuanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuratPengajuans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuratPengajuans.
     */
    skip?: number
    distinct?: SuratPengajuanScalarFieldEnum | SuratPengajuanScalarFieldEnum[]
  }

  /**
   * SuratPengajuan create
   */
  export type SuratPengajuanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuratPengajuan
     */
    select?: SuratPengajuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuratPengajuan
     */
    omit?: SuratPengajuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuratPengajuanInclude<ExtArgs> | null
    /**
     * The data needed to create a SuratPengajuan.
     */
    data: XOR<SuratPengajuanCreateInput, SuratPengajuanUncheckedCreateInput>
  }

  /**
   * SuratPengajuan createMany
   */
  export type SuratPengajuanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuratPengajuans.
     */
    data: SuratPengajuanCreateManyInput | SuratPengajuanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuratPengajuan update
   */
  export type SuratPengajuanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuratPengajuan
     */
    select?: SuratPengajuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuratPengajuan
     */
    omit?: SuratPengajuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuratPengajuanInclude<ExtArgs> | null
    /**
     * The data needed to update a SuratPengajuan.
     */
    data: XOR<SuratPengajuanUpdateInput, SuratPengajuanUncheckedUpdateInput>
    /**
     * Choose, which SuratPengajuan to update.
     */
    where: SuratPengajuanWhereUniqueInput
  }

  /**
   * SuratPengajuan updateMany
   */
  export type SuratPengajuanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuratPengajuans.
     */
    data: XOR<SuratPengajuanUpdateManyMutationInput, SuratPengajuanUncheckedUpdateManyInput>
    /**
     * Filter which SuratPengajuans to update
     */
    where?: SuratPengajuanWhereInput
    /**
     * Limit how many SuratPengajuans to update.
     */
    limit?: number
  }

  /**
   * SuratPengajuan upsert
   */
  export type SuratPengajuanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuratPengajuan
     */
    select?: SuratPengajuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuratPengajuan
     */
    omit?: SuratPengajuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuratPengajuanInclude<ExtArgs> | null
    /**
     * The filter to search for the SuratPengajuan to update in case it exists.
     */
    where: SuratPengajuanWhereUniqueInput
    /**
     * In case the SuratPengajuan found by the `where` argument doesn't exist, create a new SuratPengajuan with this data.
     */
    create: XOR<SuratPengajuanCreateInput, SuratPengajuanUncheckedCreateInput>
    /**
     * In case the SuratPengajuan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuratPengajuanUpdateInput, SuratPengajuanUncheckedUpdateInput>
  }

  /**
   * SuratPengajuan delete
   */
  export type SuratPengajuanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuratPengajuan
     */
    select?: SuratPengajuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuratPengajuan
     */
    omit?: SuratPengajuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuratPengajuanInclude<ExtArgs> | null
    /**
     * Filter which SuratPengajuan to delete.
     */
    where: SuratPengajuanWhereUniqueInput
  }

  /**
   * SuratPengajuan deleteMany
   */
  export type SuratPengajuanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuratPengajuans to delete
     */
    where?: SuratPengajuanWhereInput
    /**
     * Limit how many SuratPengajuans to delete.
     */
    limit?: number
  }

  /**
   * SuratPengajuan without action
   */
  export type SuratPengajuanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuratPengajuan
     */
    select?: SuratPengajuanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuratPengajuan
     */
    omit?: SuratPengajuanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuratPengajuanInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    role_id: 'role_id'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    nama_lengkap: 'nama_lengkap',
    no_hp: 'no_hp',
    alamat: 'alamat'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const RTScalarFieldEnum: {
    id_rt: 'id_rt',
    user_id: 'user_id',
    nomor_rt: 'nomor_rt',
    nama_lengkap: 'nama_lengkap',
    no_hp: 'no_hp',
    alamat: 'alamat'
  };

  export type RTScalarFieldEnum = (typeof RTScalarFieldEnum)[keyof typeof RTScalarFieldEnum]


  export const KKScalarFieldEnum: {
    id_kk: 'id_kk',
    no_kk: 'no_kk',
    kepala_keluarga_id: 'kepala_keluarga_id',
    alamat: 'alamat',
    rt: 'rt',
    rw: 'rw',
    kode_pos: 'kode_pos',
    desa_kelurahan: 'desa_kelurahan',
    kecamatan: 'kecamatan',
    kabupaten_kota: 'kabupaten_kota',
    provinsi: 'provinsi'
  };

  export type KKScalarFieldEnum = (typeof KKScalarFieldEnum)[keyof typeof KKScalarFieldEnum]


  export const PendudukScalarFieldEnum: {
    id_penduduk: 'id_penduduk',
    nik: 'nik',
    nama: 'nama',
    password: 'password',
    jenis_kelamin: 'jenis_kelamin',
    tanggal_lahir: 'tanggal_lahir',
    alamat: 'alamat',
    no_rt: 'no_rt',
    status_warga: 'status_warga',
    id_kk: 'id_kk',
    tempat_lahir: 'tempat_lahir',
    agama: 'agama',
    pekerjaan: 'pekerjaan',
    pendidikan_terakhir: 'pendidikan_terakhir',
    gol_darah: 'gol_darah',
    status_perkawinan: 'status_perkawinan',
    tanggal_perkawinan: 'tanggal_perkawinan',
    hubungan_dalam_keluarga: 'hubungan_dalam_keluarga',
    kewarganegaraan: 'kewarganegaraan',
    no_paspor: 'no_paspor',
    no_kitap: 'no_kitap',
    nama_ayah: 'nama_ayah',
    nama_ibu: 'nama_ibu'
  };

  export type PendudukScalarFieldEnum = (typeof PendudukScalarFieldEnum)[keyof typeof PendudukScalarFieldEnum]


  export const SuratPengajuanScalarFieldEnum: {
    id_surat: 'id_surat',
    id_penduduk: 'id_penduduk',
    jenis_surat: 'jenis_surat',
    keterangan: 'keterangan',
    tanggal_pengajuan: 'tanggal_pengajuan',
    tanggal_proses: 'tanggal_proses',
    tanggal_pengambilan: 'tanggal_pengambilan',
    status: 'status'
  };

  export type SuratPengajuanScalarFieldEnum = (typeof SuratPengajuanScalarFieldEnum)[keyof typeof SuratPengajuanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UsersOrderByRelevanceFieldEnum: {
    username: 'username',
    email: 'email',
    password: 'password'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const RolesOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type RolesOrderByRelevanceFieldEnum = (typeof RolesOrderByRelevanceFieldEnum)[keyof typeof RolesOrderByRelevanceFieldEnum]


  export const AdminOrderByRelevanceFieldEnum: {
    nama_lengkap: 'nama_lengkap',
    no_hp: 'no_hp',
    alamat: 'alamat'
  };

  export type AdminOrderByRelevanceFieldEnum = (typeof AdminOrderByRelevanceFieldEnum)[keyof typeof AdminOrderByRelevanceFieldEnum]


  export const RTOrderByRelevanceFieldEnum: {
    nama_lengkap: 'nama_lengkap',
    no_hp: 'no_hp',
    alamat: 'alamat'
  };

  export type RTOrderByRelevanceFieldEnum = (typeof RTOrderByRelevanceFieldEnum)[keyof typeof RTOrderByRelevanceFieldEnum]


  export const KKOrderByRelevanceFieldEnum: {
    no_kk: 'no_kk',
    alamat: 'alamat',
    rt: 'rt',
    rw: 'rw',
    kode_pos: 'kode_pos',
    desa_kelurahan: 'desa_kelurahan',
    kecamatan: 'kecamatan',
    kabupaten_kota: 'kabupaten_kota',
    provinsi: 'provinsi'
  };

  export type KKOrderByRelevanceFieldEnum = (typeof KKOrderByRelevanceFieldEnum)[keyof typeof KKOrderByRelevanceFieldEnum]


  export const PendudukOrderByRelevanceFieldEnum: {
    nik: 'nik',
    nama: 'nama',
    password: 'password',
    alamat: 'alamat',
    tempat_lahir: 'tempat_lahir',
    agama: 'agama',
    pekerjaan: 'pekerjaan',
    pendidikan_terakhir: 'pendidikan_terakhir',
    hubungan_dalam_keluarga: 'hubungan_dalam_keluarga',
    kewarganegaraan: 'kewarganegaraan',
    no_paspor: 'no_paspor',
    no_kitap: 'no_kitap',
    nama_ayah: 'nama_ayah',
    nama_ibu: 'nama_ibu'
  };

  export type PendudukOrderByRelevanceFieldEnum = (typeof PendudukOrderByRelevanceFieldEnum)[keyof typeof PendudukOrderByRelevanceFieldEnum]


  export const SuratPengajuanOrderByRelevanceFieldEnum: {
    keterangan: 'keterangan'
  };

  export type SuratPengajuanOrderByRelevanceFieldEnum = (typeof SuratPengajuanOrderByRelevanceFieldEnum)[keyof typeof SuratPengajuanOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'JenisKelamin'
   */
  export type EnumJenisKelaminFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisKelamin'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'StatusWarga'
   */
  export type EnumStatusWargaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusWarga'>
    


  /**
   * Reference to a field of type 'GolDarah'
   */
  export type EnumGolDarahFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GolDarah'>
    


  /**
   * Reference to a field of type 'StatusPerkawinan'
   */
  export type EnumStatusPerkawinanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPerkawinan'>
    


  /**
   * Reference to a field of type 'JenisSurat'
   */
  export type EnumJenisSuratFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisSurat'>
    


  /**
   * Reference to a field of type 'StatusPengajuan'
   */
  export type EnumStatusPengajuanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPengajuan'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    username?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role_id?: IntNullableFilter<"Users"> | number | null
    role?: XOR<RolesNullableScalarRelationFilter, RolesWhereInput> | null
    admin?: AdminListRelationFilter
    rt?: RTListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrderInput | SortOrder
    role?: RolesOrderByWithRelationInput
    admin?: AdminOrderByRelationAggregateInput
    rt?: RTOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    username?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role_id?: IntNullableFilter<"Users"> | number | null
    role?: XOR<RolesNullableScalarRelationFilter, RolesWhereInput> | null
    admin?: AdminListRelationFilter
    rt?: RTListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    username?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    role_id?: IntNullableWithAggregatesFilter<"Users"> | number | null
  }

  export type RolesWhereInput = {
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    id?: IntFilter<"Roles"> | number
    name?: StringFilter<"Roles"> | string
    description?: StringNullableFilter<"Roles"> | string | null
    users?: UsersListRelationFilter
  }

  export type RolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    users?: UsersOrderByRelationAggregateInput
    _relevance?: RolesOrderByRelevanceInput
  }

  export type RolesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    name?: StringFilter<"Roles"> | string
    description?: StringNullableFilter<"Roles"> | string | null
    users?: UsersListRelationFilter
  }, "id">

  export type RolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: RolesCountOrderByAggregateInput
    _avg?: RolesAvgOrderByAggregateInput
    _max?: RolesMaxOrderByAggregateInput
    _min?: RolesMinOrderByAggregateInput
    _sum?: RolesSumOrderByAggregateInput
  }

  export type RolesScalarWhereWithAggregatesInput = {
    AND?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    OR?: RolesScalarWhereWithAggregatesInput[]
    NOT?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Roles"> | number
    name?: StringWithAggregatesFilter<"Roles"> | string
    description?: StringNullableWithAggregatesFilter<"Roles"> | string | null
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    user_id?: IntNullableFilter<"Admin"> | number | null
    nama_lengkap?: StringFilter<"Admin"> | string
    no_hp?: StringNullableFilter<"Admin"> | string | null
    alamat?: StringNullableFilter<"Admin"> | string | null
    user?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    nama_lengkap?: SortOrder
    no_hp?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    user?: UsersOrderByWithRelationInput
    _relevance?: AdminOrderByRelevanceInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    user_id?: IntNullableFilter<"Admin"> | number | null
    nama_lengkap?: StringFilter<"Admin"> | string
    no_hp?: StringNullableFilter<"Admin"> | string | null
    alamat?: StringNullableFilter<"Admin"> | string | null
    user?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }, "id">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    nama_lengkap?: SortOrder
    no_hp?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    user_id?: IntNullableWithAggregatesFilter<"Admin"> | number | null
    nama_lengkap?: StringWithAggregatesFilter<"Admin"> | string
    no_hp?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    alamat?: StringNullableWithAggregatesFilter<"Admin"> | string | null
  }

  export type RTWhereInput = {
    AND?: RTWhereInput | RTWhereInput[]
    OR?: RTWhereInput[]
    NOT?: RTWhereInput | RTWhereInput[]
    id_rt?: IntFilter<"RT"> | number
    user_id?: IntNullableFilter<"RT"> | number | null
    nomor_rt?: IntFilter<"RT"> | number
    nama_lengkap?: StringFilter<"RT"> | string
    no_hp?: StringNullableFilter<"RT"> | string | null
    alamat?: StringNullableFilter<"RT"> | string | null
    user?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    penduduk?: PendudukListRelationFilter
  }

  export type RTOrderByWithRelationInput = {
    id_rt?: SortOrder
    user_id?: SortOrderInput | SortOrder
    nomor_rt?: SortOrder
    nama_lengkap?: SortOrder
    no_hp?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    user?: UsersOrderByWithRelationInput
    penduduk?: PendudukOrderByRelationAggregateInput
    _relevance?: RTOrderByRelevanceInput
  }

  export type RTWhereUniqueInput = Prisma.AtLeast<{
    id_rt?: number
    AND?: RTWhereInput | RTWhereInput[]
    OR?: RTWhereInput[]
    NOT?: RTWhereInput | RTWhereInput[]
    user_id?: IntNullableFilter<"RT"> | number | null
    nomor_rt?: IntFilter<"RT"> | number
    nama_lengkap?: StringFilter<"RT"> | string
    no_hp?: StringNullableFilter<"RT"> | string | null
    alamat?: StringNullableFilter<"RT"> | string | null
    user?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    penduduk?: PendudukListRelationFilter
  }, "id_rt">

  export type RTOrderByWithAggregationInput = {
    id_rt?: SortOrder
    user_id?: SortOrderInput | SortOrder
    nomor_rt?: SortOrder
    nama_lengkap?: SortOrder
    no_hp?: SortOrderInput | SortOrder
    alamat?: SortOrderInput | SortOrder
    _count?: RTCountOrderByAggregateInput
    _avg?: RTAvgOrderByAggregateInput
    _max?: RTMaxOrderByAggregateInput
    _min?: RTMinOrderByAggregateInput
    _sum?: RTSumOrderByAggregateInput
  }

  export type RTScalarWhereWithAggregatesInput = {
    AND?: RTScalarWhereWithAggregatesInput | RTScalarWhereWithAggregatesInput[]
    OR?: RTScalarWhereWithAggregatesInput[]
    NOT?: RTScalarWhereWithAggregatesInput | RTScalarWhereWithAggregatesInput[]
    id_rt?: IntWithAggregatesFilter<"RT"> | number
    user_id?: IntNullableWithAggregatesFilter<"RT"> | number | null
    nomor_rt?: IntWithAggregatesFilter<"RT"> | number
    nama_lengkap?: StringWithAggregatesFilter<"RT"> | string
    no_hp?: StringNullableWithAggregatesFilter<"RT"> | string | null
    alamat?: StringNullableWithAggregatesFilter<"RT"> | string | null
  }

  export type KKWhereInput = {
    AND?: KKWhereInput | KKWhereInput[]
    OR?: KKWhereInput[]
    NOT?: KKWhereInput | KKWhereInput[]
    id_kk?: IntFilter<"KK"> | number
    no_kk?: StringFilter<"KK"> | string
    kepala_keluarga_id?: IntFilter<"KK"> | number
    alamat?: StringFilter<"KK"> | string
    rt?: StringFilter<"KK"> | string
    rw?: StringFilter<"KK"> | string
    kode_pos?: StringNullableFilter<"KK"> | string | null
    desa_kelurahan?: StringFilter<"KK"> | string
    kecamatan?: StringFilter<"KK"> | string
    kabupaten_kota?: StringFilter<"KK"> | string
    provinsi?: StringFilter<"KK"> | string
    kepala_keluarga?: XOR<PendudukScalarRelationFilter, PendudukWhereInput>
    anggota?: PendudukListRelationFilter
  }

  export type KKOrderByWithRelationInput = {
    id_kk?: SortOrder
    no_kk?: SortOrder
    kepala_keluarga_id?: SortOrder
    alamat?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    kode_pos?: SortOrderInput | SortOrder
    desa_kelurahan?: SortOrder
    kecamatan?: SortOrder
    kabupaten_kota?: SortOrder
    provinsi?: SortOrder
    kepala_keluarga?: PendudukOrderByWithRelationInput
    anggota?: PendudukOrderByRelationAggregateInput
    _relevance?: KKOrderByRelevanceInput
  }

  export type KKWhereUniqueInput = Prisma.AtLeast<{
    id_kk?: number
    no_kk?: string
    kepala_keluarga_id?: number
    AND?: KKWhereInput | KKWhereInput[]
    OR?: KKWhereInput[]
    NOT?: KKWhereInput | KKWhereInput[]
    alamat?: StringFilter<"KK"> | string
    rt?: StringFilter<"KK"> | string
    rw?: StringFilter<"KK"> | string
    kode_pos?: StringNullableFilter<"KK"> | string | null
    desa_kelurahan?: StringFilter<"KK"> | string
    kecamatan?: StringFilter<"KK"> | string
    kabupaten_kota?: StringFilter<"KK"> | string
    provinsi?: StringFilter<"KK"> | string
    kepala_keluarga?: XOR<PendudukScalarRelationFilter, PendudukWhereInput>
    anggota?: PendudukListRelationFilter
  }, "id_kk" | "no_kk" | "kepala_keluarga_id">

  export type KKOrderByWithAggregationInput = {
    id_kk?: SortOrder
    no_kk?: SortOrder
    kepala_keluarga_id?: SortOrder
    alamat?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    kode_pos?: SortOrderInput | SortOrder
    desa_kelurahan?: SortOrder
    kecamatan?: SortOrder
    kabupaten_kota?: SortOrder
    provinsi?: SortOrder
    _count?: KKCountOrderByAggregateInput
    _avg?: KKAvgOrderByAggregateInput
    _max?: KKMaxOrderByAggregateInput
    _min?: KKMinOrderByAggregateInput
    _sum?: KKSumOrderByAggregateInput
  }

  export type KKScalarWhereWithAggregatesInput = {
    AND?: KKScalarWhereWithAggregatesInput | KKScalarWhereWithAggregatesInput[]
    OR?: KKScalarWhereWithAggregatesInput[]
    NOT?: KKScalarWhereWithAggregatesInput | KKScalarWhereWithAggregatesInput[]
    id_kk?: IntWithAggregatesFilter<"KK"> | number
    no_kk?: StringWithAggregatesFilter<"KK"> | string
    kepala_keluarga_id?: IntWithAggregatesFilter<"KK"> | number
    alamat?: StringWithAggregatesFilter<"KK"> | string
    rt?: StringWithAggregatesFilter<"KK"> | string
    rw?: StringWithAggregatesFilter<"KK"> | string
    kode_pos?: StringNullableWithAggregatesFilter<"KK"> | string | null
    desa_kelurahan?: StringWithAggregatesFilter<"KK"> | string
    kecamatan?: StringWithAggregatesFilter<"KK"> | string
    kabupaten_kota?: StringWithAggregatesFilter<"KK"> | string
    provinsi?: StringWithAggregatesFilter<"KK"> | string
  }

  export type PendudukWhereInput = {
    AND?: PendudukWhereInput | PendudukWhereInput[]
    OR?: PendudukWhereInput[]
    NOT?: PendudukWhereInput | PendudukWhereInput[]
    id_penduduk?: IntFilter<"Penduduk"> | number
    nik?: StringFilter<"Penduduk"> | string
    nama?: StringFilter<"Penduduk"> | string
    password?: StringFilter<"Penduduk"> | string
    jenis_kelamin?: EnumJenisKelaminFilter<"Penduduk"> | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFilter<"Penduduk"> | Date | string
    alamat?: StringFilter<"Penduduk"> | string
    no_rt?: IntNullableFilter<"Penduduk"> | number | null
    status_warga?: EnumStatusWargaNullableFilter<"Penduduk"> | $Enums.StatusWarga | null
    id_kk?: IntNullableFilter<"Penduduk"> | number | null
    tempat_lahir?: StringFilter<"Penduduk"> | string
    agama?: StringNullableFilter<"Penduduk"> | string | null
    pekerjaan?: StringNullableFilter<"Penduduk"> | string | null
    pendidikan_terakhir?: StringNullableFilter<"Penduduk"> | string | null
    gol_darah?: EnumGolDarahNullableFilter<"Penduduk"> | $Enums.GolDarah | null
    status_perkawinan?: EnumStatusPerkawinanNullableFilter<"Penduduk"> | $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: DateTimeNullableFilter<"Penduduk"> | Date | string | null
    hubungan_dalam_keluarga?: StringNullableFilter<"Penduduk"> | string | null
    kewarganegaraan?: StringNullableFilter<"Penduduk"> | string | null
    no_paspor?: StringNullableFilter<"Penduduk"> | string | null
    no_kitap?: StringNullableFilter<"Penduduk"> | string | null
    nama_ayah?: StringNullableFilter<"Penduduk"> | string | null
    nama_ibu?: StringNullableFilter<"Penduduk"> | string | null
    rt?: XOR<RTNullableScalarRelationFilter, RTWhereInput> | null
    kk?: XOR<KKNullableScalarRelationFilter, KKWhereInput> | null
    kk_kepala?: XOR<KKNullableScalarRelationFilter, KKWhereInput> | null
    surat_pengajuan?: SuratPengajuanListRelationFilter
  }

  export type PendudukOrderByWithRelationInput = {
    id_penduduk?: SortOrder
    nik?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    jenis_kelamin?: SortOrder
    tanggal_lahir?: SortOrder
    alamat?: SortOrder
    no_rt?: SortOrderInput | SortOrder
    status_warga?: SortOrderInput | SortOrder
    id_kk?: SortOrderInput | SortOrder
    tempat_lahir?: SortOrder
    agama?: SortOrderInput | SortOrder
    pekerjaan?: SortOrderInput | SortOrder
    pendidikan_terakhir?: SortOrderInput | SortOrder
    gol_darah?: SortOrderInput | SortOrder
    status_perkawinan?: SortOrderInput | SortOrder
    tanggal_perkawinan?: SortOrderInput | SortOrder
    hubungan_dalam_keluarga?: SortOrderInput | SortOrder
    kewarganegaraan?: SortOrderInput | SortOrder
    no_paspor?: SortOrderInput | SortOrder
    no_kitap?: SortOrderInput | SortOrder
    nama_ayah?: SortOrderInput | SortOrder
    nama_ibu?: SortOrderInput | SortOrder
    rt?: RTOrderByWithRelationInput
    kk?: KKOrderByWithRelationInput
    kk_kepala?: KKOrderByWithRelationInput
    surat_pengajuan?: SuratPengajuanOrderByRelationAggregateInput
    _relevance?: PendudukOrderByRelevanceInput
  }

  export type PendudukWhereUniqueInput = Prisma.AtLeast<{
    id_penduduk?: number
    nik?: string
    AND?: PendudukWhereInput | PendudukWhereInput[]
    OR?: PendudukWhereInput[]
    NOT?: PendudukWhereInput | PendudukWhereInput[]
    nama?: StringFilter<"Penduduk"> | string
    password?: StringFilter<"Penduduk"> | string
    jenis_kelamin?: EnumJenisKelaminFilter<"Penduduk"> | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFilter<"Penduduk"> | Date | string
    alamat?: StringFilter<"Penduduk"> | string
    no_rt?: IntNullableFilter<"Penduduk"> | number | null
    status_warga?: EnumStatusWargaNullableFilter<"Penduduk"> | $Enums.StatusWarga | null
    id_kk?: IntNullableFilter<"Penduduk"> | number | null
    tempat_lahir?: StringFilter<"Penduduk"> | string
    agama?: StringNullableFilter<"Penduduk"> | string | null
    pekerjaan?: StringNullableFilter<"Penduduk"> | string | null
    pendidikan_terakhir?: StringNullableFilter<"Penduduk"> | string | null
    gol_darah?: EnumGolDarahNullableFilter<"Penduduk"> | $Enums.GolDarah | null
    status_perkawinan?: EnumStatusPerkawinanNullableFilter<"Penduduk"> | $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: DateTimeNullableFilter<"Penduduk"> | Date | string | null
    hubungan_dalam_keluarga?: StringNullableFilter<"Penduduk"> | string | null
    kewarganegaraan?: StringNullableFilter<"Penduduk"> | string | null
    no_paspor?: StringNullableFilter<"Penduduk"> | string | null
    no_kitap?: StringNullableFilter<"Penduduk"> | string | null
    nama_ayah?: StringNullableFilter<"Penduduk"> | string | null
    nama_ibu?: StringNullableFilter<"Penduduk"> | string | null
    rt?: XOR<RTNullableScalarRelationFilter, RTWhereInput> | null
    kk?: XOR<KKNullableScalarRelationFilter, KKWhereInput> | null
    kk_kepala?: XOR<KKNullableScalarRelationFilter, KKWhereInput> | null
    surat_pengajuan?: SuratPengajuanListRelationFilter
  }, "id_penduduk" | "nik">

  export type PendudukOrderByWithAggregationInput = {
    id_penduduk?: SortOrder
    nik?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    jenis_kelamin?: SortOrder
    tanggal_lahir?: SortOrder
    alamat?: SortOrder
    no_rt?: SortOrderInput | SortOrder
    status_warga?: SortOrderInput | SortOrder
    id_kk?: SortOrderInput | SortOrder
    tempat_lahir?: SortOrder
    agama?: SortOrderInput | SortOrder
    pekerjaan?: SortOrderInput | SortOrder
    pendidikan_terakhir?: SortOrderInput | SortOrder
    gol_darah?: SortOrderInput | SortOrder
    status_perkawinan?: SortOrderInput | SortOrder
    tanggal_perkawinan?: SortOrderInput | SortOrder
    hubungan_dalam_keluarga?: SortOrderInput | SortOrder
    kewarganegaraan?: SortOrderInput | SortOrder
    no_paspor?: SortOrderInput | SortOrder
    no_kitap?: SortOrderInput | SortOrder
    nama_ayah?: SortOrderInput | SortOrder
    nama_ibu?: SortOrderInput | SortOrder
    _count?: PendudukCountOrderByAggregateInput
    _avg?: PendudukAvgOrderByAggregateInput
    _max?: PendudukMaxOrderByAggregateInput
    _min?: PendudukMinOrderByAggregateInput
    _sum?: PendudukSumOrderByAggregateInput
  }

  export type PendudukScalarWhereWithAggregatesInput = {
    AND?: PendudukScalarWhereWithAggregatesInput | PendudukScalarWhereWithAggregatesInput[]
    OR?: PendudukScalarWhereWithAggregatesInput[]
    NOT?: PendudukScalarWhereWithAggregatesInput | PendudukScalarWhereWithAggregatesInput[]
    id_penduduk?: IntWithAggregatesFilter<"Penduduk"> | number
    nik?: StringWithAggregatesFilter<"Penduduk"> | string
    nama?: StringWithAggregatesFilter<"Penduduk"> | string
    password?: StringWithAggregatesFilter<"Penduduk"> | string
    jenis_kelamin?: EnumJenisKelaminWithAggregatesFilter<"Penduduk"> | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeWithAggregatesFilter<"Penduduk"> | Date | string
    alamat?: StringWithAggregatesFilter<"Penduduk"> | string
    no_rt?: IntNullableWithAggregatesFilter<"Penduduk"> | number | null
    status_warga?: EnumStatusWargaNullableWithAggregatesFilter<"Penduduk"> | $Enums.StatusWarga | null
    id_kk?: IntNullableWithAggregatesFilter<"Penduduk"> | number | null
    tempat_lahir?: StringWithAggregatesFilter<"Penduduk"> | string
    agama?: StringNullableWithAggregatesFilter<"Penduduk"> | string | null
    pekerjaan?: StringNullableWithAggregatesFilter<"Penduduk"> | string | null
    pendidikan_terakhir?: StringNullableWithAggregatesFilter<"Penduduk"> | string | null
    gol_darah?: EnumGolDarahNullableWithAggregatesFilter<"Penduduk"> | $Enums.GolDarah | null
    status_perkawinan?: EnumStatusPerkawinanNullableWithAggregatesFilter<"Penduduk"> | $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: DateTimeNullableWithAggregatesFilter<"Penduduk"> | Date | string | null
    hubungan_dalam_keluarga?: StringNullableWithAggregatesFilter<"Penduduk"> | string | null
    kewarganegaraan?: StringNullableWithAggregatesFilter<"Penduduk"> | string | null
    no_paspor?: StringNullableWithAggregatesFilter<"Penduduk"> | string | null
    no_kitap?: StringNullableWithAggregatesFilter<"Penduduk"> | string | null
    nama_ayah?: StringNullableWithAggregatesFilter<"Penduduk"> | string | null
    nama_ibu?: StringNullableWithAggregatesFilter<"Penduduk"> | string | null
  }

  export type SuratPengajuanWhereInput = {
    AND?: SuratPengajuanWhereInput | SuratPengajuanWhereInput[]
    OR?: SuratPengajuanWhereInput[]
    NOT?: SuratPengajuanWhereInput | SuratPengajuanWhereInput[]
    id_surat?: IntFilter<"SuratPengajuan"> | number
    id_penduduk?: IntFilter<"SuratPengajuan"> | number
    jenis_surat?: EnumJenisSuratFilter<"SuratPengajuan"> | $Enums.JenisSurat
    keterangan?: StringNullableFilter<"SuratPengajuan"> | string | null
    tanggal_pengajuan?: DateTimeNullableFilter<"SuratPengajuan"> | Date | string | null
    tanggal_proses?: DateTimeNullableFilter<"SuratPengajuan"> | Date | string | null
    tanggal_pengambilan?: DateTimeNullableFilter<"SuratPengajuan"> | Date | string | null
    status?: EnumStatusPengajuanNullableFilter<"SuratPengajuan"> | $Enums.StatusPengajuan | null
    penduduk?: XOR<PendudukScalarRelationFilter, PendudukWhereInput>
  }

  export type SuratPengajuanOrderByWithRelationInput = {
    id_surat?: SortOrder
    id_penduduk?: SortOrder
    jenis_surat?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    tanggal_pengajuan?: SortOrderInput | SortOrder
    tanggal_proses?: SortOrderInput | SortOrder
    tanggal_pengambilan?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    penduduk?: PendudukOrderByWithRelationInput
    _relevance?: SuratPengajuanOrderByRelevanceInput
  }

  export type SuratPengajuanWhereUniqueInput = Prisma.AtLeast<{
    id_surat?: number
    AND?: SuratPengajuanWhereInput | SuratPengajuanWhereInput[]
    OR?: SuratPengajuanWhereInput[]
    NOT?: SuratPengajuanWhereInput | SuratPengajuanWhereInput[]
    id_penduduk?: IntFilter<"SuratPengajuan"> | number
    jenis_surat?: EnumJenisSuratFilter<"SuratPengajuan"> | $Enums.JenisSurat
    keterangan?: StringNullableFilter<"SuratPengajuan"> | string | null
    tanggal_pengajuan?: DateTimeNullableFilter<"SuratPengajuan"> | Date | string | null
    tanggal_proses?: DateTimeNullableFilter<"SuratPengajuan"> | Date | string | null
    tanggal_pengambilan?: DateTimeNullableFilter<"SuratPengajuan"> | Date | string | null
    status?: EnumStatusPengajuanNullableFilter<"SuratPengajuan"> | $Enums.StatusPengajuan | null
    penduduk?: XOR<PendudukScalarRelationFilter, PendudukWhereInput>
  }, "id_surat">

  export type SuratPengajuanOrderByWithAggregationInput = {
    id_surat?: SortOrder
    id_penduduk?: SortOrder
    jenis_surat?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    tanggal_pengajuan?: SortOrderInput | SortOrder
    tanggal_proses?: SortOrderInput | SortOrder
    tanggal_pengambilan?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    _count?: SuratPengajuanCountOrderByAggregateInput
    _avg?: SuratPengajuanAvgOrderByAggregateInput
    _max?: SuratPengajuanMaxOrderByAggregateInput
    _min?: SuratPengajuanMinOrderByAggregateInput
    _sum?: SuratPengajuanSumOrderByAggregateInput
  }

  export type SuratPengajuanScalarWhereWithAggregatesInput = {
    AND?: SuratPengajuanScalarWhereWithAggregatesInput | SuratPengajuanScalarWhereWithAggregatesInput[]
    OR?: SuratPengajuanScalarWhereWithAggregatesInput[]
    NOT?: SuratPengajuanScalarWhereWithAggregatesInput | SuratPengajuanScalarWhereWithAggregatesInput[]
    id_surat?: IntWithAggregatesFilter<"SuratPengajuan"> | number
    id_penduduk?: IntWithAggregatesFilter<"SuratPengajuan"> | number
    jenis_surat?: EnumJenisSuratWithAggregatesFilter<"SuratPengajuan"> | $Enums.JenisSurat
    keterangan?: StringNullableWithAggregatesFilter<"SuratPengajuan"> | string | null
    tanggal_pengajuan?: DateTimeNullableWithAggregatesFilter<"SuratPengajuan"> | Date | string | null
    tanggal_proses?: DateTimeNullableWithAggregatesFilter<"SuratPengajuan"> | Date | string | null
    tanggal_pengambilan?: DateTimeNullableWithAggregatesFilter<"SuratPengajuan"> | Date | string | null
    status?: EnumStatusPengajuanNullableWithAggregatesFilter<"SuratPengajuan"> | $Enums.StatusPengajuan | null
  }

  export type UsersCreateInput = {
    username: string
    email: string
    password: string
    role?: RolesCreateNestedOneWithoutUsersInput
    admin?: AdminCreateNestedManyWithoutUserInput
    rt?: RTCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    role_id?: number | null
    admin?: AdminUncheckedCreateNestedManyWithoutUserInput
    rt?: RTUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: RolesUpdateOneWithoutUsersNestedInput
    admin?: AdminUpdateManyWithoutUserNestedInput
    rt?: RTUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    admin?: AdminUncheckedUpdateManyWithoutUserNestedInput
    rt?: RTUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    role_id?: number | null
  }

  export type UsersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RolesCreateInput = {
    name: string
    description?: string | null
    users?: UsersCreateNestedManyWithoutRoleInput
  }

  export type RolesUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    users?: UsersUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RolesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UsersUpdateManyWithoutRoleNestedInput
  }

  export type RolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UsersUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RolesCreateManyInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type RolesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminCreateInput = {
    nama_lengkap: string
    no_hp?: string | null
    alamat?: string | null
    user?: UsersCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    nama_lengkap: string
    no_hp?: string | null
    alamat?: string | null
  }

  export type AdminUpdateInput = {
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminCreateManyInput = {
    id?: number
    user_id?: number | null
    nama_lengkap: string
    no_hp?: string | null
    alamat?: string | null
  }

  export type AdminUpdateManyMutationInput = {
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RTCreateInput = {
    nomor_rt: number
    nama_lengkap: string
    no_hp?: string | null
    alamat?: string | null
    user?: UsersCreateNestedOneWithoutRtInput
    penduduk?: PendudukCreateNestedManyWithoutRtInput
  }

  export type RTUncheckedCreateInput = {
    id_rt?: number
    user_id?: number | null
    nomor_rt: number
    nama_lengkap: string
    no_hp?: string | null
    alamat?: string | null
    penduduk?: PendudukUncheckedCreateNestedManyWithoutRtInput
  }

  export type RTUpdateInput = {
    nomor_rt?: IntFieldUpdateOperationsInput | number
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneWithoutRtNestedInput
    penduduk?: PendudukUpdateManyWithoutRtNestedInput
  }

  export type RTUncheckedUpdateInput = {
    id_rt?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    nomor_rt?: IntFieldUpdateOperationsInput | number
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    penduduk?: PendudukUncheckedUpdateManyWithoutRtNestedInput
  }

  export type RTCreateManyInput = {
    id_rt?: number
    user_id?: number | null
    nomor_rt: number
    nama_lengkap: string
    no_hp?: string | null
    alamat?: string | null
  }

  export type RTUpdateManyMutationInput = {
    nomor_rt?: IntFieldUpdateOperationsInput | number
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RTUncheckedUpdateManyInput = {
    id_rt?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    nomor_rt?: IntFieldUpdateOperationsInput | number
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KKCreateInput = {
    no_kk: string
    alamat: string
    rt: string
    rw: string
    kode_pos?: string | null
    desa_kelurahan: string
    kecamatan: string
    kabupaten_kota: string
    provinsi: string
    kepala_keluarga: PendudukCreateNestedOneWithoutKk_kepalaInput
    anggota?: PendudukCreateNestedManyWithoutKkInput
  }

  export type KKUncheckedCreateInput = {
    id_kk?: number
    no_kk: string
    kepala_keluarga_id: number
    alamat: string
    rt: string
    rw: string
    kode_pos?: string | null
    desa_kelurahan: string
    kecamatan: string
    kabupaten_kota: string
    provinsi: string
    anggota?: PendudukUncheckedCreateNestedManyWithoutKkInput
  }

  export type KKUpdateInput = {
    no_kk?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    rt?: StringFieldUpdateOperationsInput | string
    rw?: StringFieldUpdateOperationsInput | string
    kode_pos?: NullableStringFieldUpdateOperationsInput | string | null
    desa_kelurahan?: StringFieldUpdateOperationsInput | string
    kecamatan?: StringFieldUpdateOperationsInput | string
    kabupaten_kota?: StringFieldUpdateOperationsInput | string
    provinsi?: StringFieldUpdateOperationsInput | string
    kepala_keluarga?: PendudukUpdateOneRequiredWithoutKk_kepalaNestedInput
    anggota?: PendudukUpdateManyWithoutKkNestedInput
  }

  export type KKUncheckedUpdateInput = {
    id_kk?: IntFieldUpdateOperationsInput | number
    no_kk?: StringFieldUpdateOperationsInput | string
    kepala_keluarga_id?: IntFieldUpdateOperationsInput | number
    alamat?: StringFieldUpdateOperationsInput | string
    rt?: StringFieldUpdateOperationsInput | string
    rw?: StringFieldUpdateOperationsInput | string
    kode_pos?: NullableStringFieldUpdateOperationsInput | string | null
    desa_kelurahan?: StringFieldUpdateOperationsInput | string
    kecamatan?: StringFieldUpdateOperationsInput | string
    kabupaten_kota?: StringFieldUpdateOperationsInput | string
    provinsi?: StringFieldUpdateOperationsInput | string
    anggota?: PendudukUncheckedUpdateManyWithoutKkNestedInput
  }

  export type KKCreateManyInput = {
    id_kk?: number
    no_kk: string
    kepala_keluarga_id: number
    alamat: string
    rt: string
    rw: string
    kode_pos?: string | null
    desa_kelurahan: string
    kecamatan: string
    kabupaten_kota: string
    provinsi: string
  }

  export type KKUpdateManyMutationInput = {
    no_kk?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    rt?: StringFieldUpdateOperationsInput | string
    rw?: StringFieldUpdateOperationsInput | string
    kode_pos?: NullableStringFieldUpdateOperationsInput | string | null
    desa_kelurahan?: StringFieldUpdateOperationsInput | string
    kecamatan?: StringFieldUpdateOperationsInput | string
    kabupaten_kota?: StringFieldUpdateOperationsInput | string
    provinsi?: StringFieldUpdateOperationsInput | string
  }

  export type KKUncheckedUpdateManyInput = {
    id_kk?: IntFieldUpdateOperationsInput | number
    no_kk?: StringFieldUpdateOperationsInput | string
    kepala_keluarga_id?: IntFieldUpdateOperationsInput | number
    alamat?: StringFieldUpdateOperationsInput | string
    rt?: StringFieldUpdateOperationsInput | string
    rw?: StringFieldUpdateOperationsInput | string
    kode_pos?: NullableStringFieldUpdateOperationsInput | string | null
    desa_kelurahan?: StringFieldUpdateOperationsInput | string
    kecamatan?: StringFieldUpdateOperationsInput | string
    kabupaten_kota?: StringFieldUpdateOperationsInput | string
    provinsi?: StringFieldUpdateOperationsInput | string
  }

  export type PendudukCreateInput = {
    nik: string
    nama: string
    password: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    alamat: string
    status_warga?: $Enums.StatusWarga | null
    tempat_lahir: string
    agama?: string | null
    pekerjaan?: string | null
    pendidikan_terakhir?: string | null
    gol_darah?: $Enums.GolDarah | null
    status_perkawinan?: $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: Date | string | null
    hubungan_dalam_keluarga?: string | null
    kewarganegaraan?: string | null
    no_paspor?: string | null
    no_kitap?: string | null
    nama_ayah?: string | null
    nama_ibu?: string | null
    rt?: RTCreateNestedOneWithoutPendudukInput
    kk?: KKCreateNestedOneWithoutAnggotaInput
    kk_kepala?: KKCreateNestedOneWithoutKepala_keluargaInput
    surat_pengajuan?: SuratPengajuanCreateNestedManyWithoutPendudukInput
  }

  export type PendudukUncheckedCreateInput = {
    id_penduduk?: number
    nik: string
    nama: string
    password: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    alamat: string
    no_rt?: number | null
    status_warga?: $Enums.StatusWarga | null
    id_kk?: number | null
    tempat_lahir: string
    agama?: string | null
    pekerjaan?: string | null
    pendidikan_terakhir?: string | null
    gol_darah?: $Enums.GolDarah | null
    status_perkawinan?: $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: Date | string | null
    hubungan_dalam_keluarga?: string | null
    kewarganegaraan?: string | null
    no_paspor?: string | null
    no_kitap?: string | null
    nama_ayah?: string | null
    nama_ibu?: string | null
    kk_kepala?: KKUncheckedCreateNestedOneWithoutKepala_keluargaInput
    surat_pengajuan?: SuratPengajuanUncheckedCreateNestedManyWithoutPendudukInput
  }

  export type PendudukUpdateInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    status_warga?: NullableEnumStatusWargaFieldUpdateOperationsInput | $Enums.StatusWarga | null
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    pendidikan_terakhir?: NullableStringFieldUpdateOperationsInput | string | null
    gol_darah?: NullableEnumGolDarahFieldUpdateOperationsInput | $Enums.GolDarah | null
    status_perkawinan?: NullableEnumStatusPerkawinanFieldUpdateOperationsInput | $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hubungan_dalam_keluarga?: NullableStringFieldUpdateOperationsInput | string | null
    kewarganegaraan?: NullableStringFieldUpdateOperationsInput | string | null
    no_paspor?: NullableStringFieldUpdateOperationsInput | string | null
    no_kitap?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ayah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ibu?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: RTUpdateOneWithoutPendudukNestedInput
    kk?: KKUpdateOneWithoutAnggotaNestedInput
    kk_kepala?: KKUpdateOneWithoutKepala_keluargaNestedInput
    surat_pengajuan?: SuratPengajuanUpdateManyWithoutPendudukNestedInput
  }

  export type PendudukUncheckedUpdateInput = {
    id_penduduk?: IntFieldUpdateOperationsInput | number
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_rt?: NullableIntFieldUpdateOperationsInput | number | null
    status_warga?: NullableEnumStatusWargaFieldUpdateOperationsInput | $Enums.StatusWarga | null
    id_kk?: NullableIntFieldUpdateOperationsInput | number | null
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    pendidikan_terakhir?: NullableStringFieldUpdateOperationsInput | string | null
    gol_darah?: NullableEnumGolDarahFieldUpdateOperationsInput | $Enums.GolDarah | null
    status_perkawinan?: NullableEnumStatusPerkawinanFieldUpdateOperationsInput | $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hubungan_dalam_keluarga?: NullableStringFieldUpdateOperationsInput | string | null
    kewarganegaraan?: NullableStringFieldUpdateOperationsInput | string | null
    no_paspor?: NullableStringFieldUpdateOperationsInput | string | null
    no_kitap?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ayah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ibu?: NullableStringFieldUpdateOperationsInput | string | null
    kk_kepala?: KKUncheckedUpdateOneWithoutKepala_keluargaNestedInput
    surat_pengajuan?: SuratPengajuanUncheckedUpdateManyWithoutPendudukNestedInput
  }

  export type PendudukCreateManyInput = {
    id_penduduk?: number
    nik: string
    nama: string
    password: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    alamat: string
    no_rt?: number | null
    status_warga?: $Enums.StatusWarga | null
    id_kk?: number | null
    tempat_lahir: string
    agama?: string | null
    pekerjaan?: string | null
    pendidikan_terakhir?: string | null
    gol_darah?: $Enums.GolDarah | null
    status_perkawinan?: $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: Date | string | null
    hubungan_dalam_keluarga?: string | null
    kewarganegaraan?: string | null
    no_paspor?: string | null
    no_kitap?: string | null
    nama_ayah?: string | null
    nama_ibu?: string | null
  }

  export type PendudukUpdateManyMutationInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    status_warga?: NullableEnumStatusWargaFieldUpdateOperationsInput | $Enums.StatusWarga | null
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    pendidikan_terakhir?: NullableStringFieldUpdateOperationsInput | string | null
    gol_darah?: NullableEnumGolDarahFieldUpdateOperationsInput | $Enums.GolDarah | null
    status_perkawinan?: NullableEnumStatusPerkawinanFieldUpdateOperationsInput | $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hubungan_dalam_keluarga?: NullableStringFieldUpdateOperationsInput | string | null
    kewarganegaraan?: NullableStringFieldUpdateOperationsInput | string | null
    no_paspor?: NullableStringFieldUpdateOperationsInput | string | null
    no_kitap?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ayah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ibu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PendudukUncheckedUpdateManyInput = {
    id_penduduk?: IntFieldUpdateOperationsInput | number
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_rt?: NullableIntFieldUpdateOperationsInput | number | null
    status_warga?: NullableEnumStatusWargaFieldUpdateOperationsInput | $Enums.StatusWarga | null
    id_kk?: NullableIntFieldUpdateOperationsInput | number | null
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    pendidikan_terakhir?: NullableStringFieldUpdateOperationsInput | string | null
    gol_darah?: NullableEnumGolDarahFieldUpdateOperationsInput | $Enums.GolDarah | null
    status_perkawinan?: NullableEnumStatusPerkawinanFieldUpdateOperationsInput | $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hubungan_dalam_keluarga?: NullableStringFieldUpdateOperationsInput | string | null
    kewarganegaraan?: NullableStringFieldUpdateOperationsInput | string | null
    no_paspor?: NullableStringFieldUpdateOperationsInput | string | null
    no_kitap?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ayah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ibu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SuratPengajuanCreateInput = {
    jenis_surat: $Enums.JenisSurat
    keterangan?: string | null
    tanggal_pengajuan?: Date | string | null
    tanggal_proses?: Date | string | null
    tanggal_pengambilan?: Date | string | null
    status?: $Enums.StatusPengajuan | null
    penduduk: PendudukCreateNestedOneWithoutSurat_pengajuanInput
  }

  export type SuratPengajuanUncheckedCreateInput = {
    id_surat?: number
    id_penduduk: number
    jenis_surat: $Enums.JenisSurat
    keterangan?: string | null
    tanggal_pengajuan?: Date | string | null
    tanggal_proses?: Date | string | null
    tanggal_pengambilan?: Date | string | null
    status?: $Enums.StatusPengajuan | null
  }

  export type SuratPengajuanUpdateInput = {
    jenis_surat?: EnumJenisSuratFieldUpdateOperationsInput | $Enums.JenisSurat
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengajuan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_proses?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_pengambilan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumStatusPengajuanFieldUpdateOperationsInput | $Enums.StatusPengajuan | null
    penduduk?: PendudukUpdateOneRequiredWithoutSurat_pengajuanNestedInput
  }

  export type SuratPengajuanUncheckedUpdateInput = {
    id_surat?: IntFieldUpdateOperationsInput | number
    id_penduduk?: IntFieldUpdateOperationsInput | number
    jenis_surat?: EnumJenisSuratFieldUpdateOperationsInput | $Enums.JenisSurat
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengajuan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_proses?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_pengambilan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumStatusPengajuanFieldUpdateOperationsInput | $Enums.StatusPengajuan | null
  }

  export type SuratPengajuanCreateManyInput = {
    id_surat?: number
    id_penduduk: number
    jenis_surat: $Enums.JenisSurat
    keterangan?: string | null
    tanggal_pengajuan?: Date | string | null
    tanggal_proses?: Date | string | null
    tanggal_pengambilan?: Date | string | null
    status?: $Enums.StatusPengajuan | null
  }

  export type SuratPengajuanUpdateManyMutationInput = {
    jenis_surat?: EnumJenisSuratFieldUpdateOperationsInput | $Enums.JenisSurat
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengajuan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_proses?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_pengambilan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumStatusPengajuanFieldUpdateOperationsInput | $Enums.StatusPengajuan | null
  }

  export type SuratPengajuanUncheckedUpdateManyInput = {
    id_surat?: IntFieldUpdateOperationsInput | number
    id_penduduk?: IntFieldUpdateOperationsInput | number
    jenis_surat?: EnumJenisSuratFieldUpdateOperationsInput | $Enums.JenisSurat
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengajuan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_proses?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_pengambilan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumStatusPengajuanFieldUpdateOperationsInput | $Enums.StatusPengajuan | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type RolesNullableScalarRelationFilter = {
    is?: RolesWhereInput | null
    isNot?: RolesWhereInput | null
  }

  export type AdminListRelationFilter = {
    every?: AdminWhereInput
    some?: AdminWhereInput
    none?: AdminWhereInput
  }

  export type RTListRelationFilter = {
    every?: RTWhereInput
    some?: RTWhereInput
    none?: RTWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdminOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RTOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolesOrderByRelevanceInput = {
    fields: RolesOrderByRelevanceFieldEnum | RolesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RolesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RolesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type AdminOrderByRelevanceInput = {
    fields: AdminOrderByRelevanceFieldEnum | AdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    nama_lengkap?: SortOrder
    no_hp?: SortOrder
    alamat?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    nama_lengkap?: SortOrder
    no_hp?: SortOrder
    alamat?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    nama_lengkap?: SortOrder
    no_hp?: SortOrder
    alamat?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type PendudukListRelationFilter = {
    every?: PendudukWhereInput
    some?: PendudukWhereInput
    none?: PendudukWhereInput
  }

  export type PendudukOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RTOrderByRelevanceInput = {
    fields: RTOrderByRelevanceFieldEnum | RTOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RTCountOrderByAggregateInput = {
    id_rt?: SortOrder
    user_id?: SortOrder
    nomor_rt?: SortOrder
    nama_lengkap?: SortOrder
    no_hp?: SortOrder
    alamat?: SortOrder
  }

  export type RTAvgOrderByAggregateInput = {
    id_rt?: SortOrder
    user_id?: SortOrder
    nomor_rt?: SortOrder
  }

  export type RTMaxOrderByAggregateInput = {
    id_rt?: SortOrder
    user_id?: SortOrder
    nomor_rt?: SortOrder
    nama_lengkap?: SortOrder
    no_hp?: SortOrder
    alamat?: SortOrder
  }

  export type RTMinOrderByAggregateInput = {
    id_rt?: SortOrder
    user_id?: SortOrder
    nomor_rt?: SortOrder
    nama_lengkap?: SortOrder
    no_hp?: SortOrder
    alamat?: SortOrder
  }

  export type RTSumOrderByAggregateInput = {
    id_rt?: SortOrder
    user_id?: SortOrder
    nomor_rt?: SortOrder
  }

  export type PendudukScalarRelationFilter = {
    is?: PendudukWhereInput
    isNot?: PendudukWhereInput
  }

  export type KKOrderByRelevanceInput = {
    fields: KKOrderByRelevanceFieldEnum | KKOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type KKCountOrderByAggregateInput = {
    id_kk?: SortOrder
    no_kk?: SortOrder
    kepala_keluarga_id?: SortOrder
    alamat?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    kode_pos?: SortOrder
    desa_kelurahan?: SortOrder
    kecamatan?: SortOrder
    kabupaten_kota?: SortOrder
    provinsi?: SortOrder
  }

  export type KKAvgOrderByAggregateInput = {
    id_kk?: SortOrder
    kepala_keluarga_id?: SortOrder
  }

  export type KKMaxOrderByAggregateInput = {
    id_kk?: SortOrder
    no_kk?: SortOrder
    kepala_keluarga_id?: SortOrder
    alamat?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    kode_pos?: SortOrder
    desa_kelurahan?: SortOrder
    kecamatan?: SortOrder
    kabupaten_kota?: SortOrder
    provinsi?: SortOrder
  }

  export type KKMinOrderByAggregateInput = {
    id_kk?: SortOrder
    no_kk?: SortOrder
    kepala_keluarga_id?: SortOrder
    alamat?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    kode_pos?: SortOrder
    desa_kelurahan?: SortOrder
    kecamatan?: SortOrder
    kabupaten_kota?: SortOrder
    provinsi?: SortOrder
  }

  export type KKSumOrderByAggregateInput = {
    id_kk?: SortOrder
    kepala_keluarga_id?: SortOrder
  }

  export type EnumJenisKelaminFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[]
    notIn?: $Enums.JenisKelamin[]
    not?: NestedEnumJenisKelaminFilter<$PrismaModel> | $Enums.JenisKelamin
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumStatusWargaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusWarga | EnumStatusWargaFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusWarga[] | null
    notIn?: $Enums.StatusWarga[] | null
    not?: NestedEnumStatusWargaNullableFilter<$PrismaModel> | $Enums.StatusWarga | null
  }

  export type EnumGolDarahNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.GolDarah | EnumGolDarahFieldRefInput<$PrismaModel> | null
    in?: $Enums.GolDarah[] | null
    notIn?: $Enums.GolDarah[] | null
    not?: NestedEnumGolDarahNullableFilter<$PrismaModel> | $Enums.GolDarah | null
  }

  export type EnumStatusPerkawinanNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPerkawinan | EnumStatusPerkawinanFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusPerkawinan[] | null
    notIn?: $Enums.StatusPerkawinan[] | null
    not?: NestedEnumStatusPerkawinanNullableFilter<$PrismaModel> | $Enums.StatusPerkawinan | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RTNullableScalarRelationFilter = {
    is?: RTWhereInput | null
    isNot?: RTWhereInput | null
  }

  export type KKNullableScalarRelationFilter = {
    is?: KKWhereInput | null
    isNot?: KKWhereInput | null
  }

  export type SuratPengajuanListRelationFilter = {
    every?: SuratPengajuanWhereInput
    some?: SuratPengajuanWhereInput
    none?: SuratPengajuanWhereInput
  }

  export type SuratPengajuanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PendudukOrderByRelevanceInput = {
    fields: PendudukOrderByRelevanceFieldEnum | PendudukOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PendudukCountOrderByAggregateInput = {
    id_penduduk?: SortOrder
    nik?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    jenis_kelamin?: SortOrder
    tanggal_lahir?: SortOrder
    alamat?: SortOrder
    no_rt?: SortOrder
    status_warga?: SortOrder
    id_kk?: SortOrder
    tempat_lahir?: SortOrder
    agama?: SortOrder
    pekerjaan?: SortOrder
    pendidikan_terakhir?: SortOrder
    gol_darah?: SortOrder
    status_perkawinan?: SortOrder
    tanggal_perkawinan?: SortOrder
    hubungan_dalam_keluarga?: SortOrder
    kewarganegaraan?: SortOrder
    no_paspor?: SortOrder
    no_kitap?: SortOrder
    nama_ayah?: SortOrder
    nama_ibu?: SortOrder
  }

  export type PendudukAvgOrderByAggregateInput = {
    id_penduduk?: SortOrder
    no_rt?: SortOrder
    id_kk?: SortOrder
  }

  export type PendudukMaxOrderByAggregateInput = {
    id_penduduk?: SortOrder
    nik?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    jenis_kelamin?: SortOrder
    tanggal_lahir?: SortOrder
    alamat?: SortOrder
    no_rt?: SortOrder
    status_warga?: SortOrder
    id_kk?: SortOrder
    tempat_lahir?: SortOrder
    agama?: SortOrder
    pekerjaan?: SortOrder
    pendidikan_terakhir?: SortOrder
    gol_darah?: SortOrder
    status_perkawinan?: SortOrder
    tanggal_perkawinan?: SortOrder
    hubungan_dalam_keluarga?: SortOrder
    kewarganegaraan?: SortOrder
    no_paspor?: SortOrder
    no_kitap?: SortOrder
    nama_ayah?: SortOrder
    nama_ibu?: SortOrder
  }

  export type PendudukMinOrderByAggregateInput = {
    id_penduduk?: SortOrder
    nik?: SortOrder
    nama?: SortOrder
    password?: SortOrder
    jenis_kelamin?: SortOrder
    tanggal_lahir?: SortOrder
    alamat?: SortOrder
    no_rt?: SortOrder
    status_warga?: SortOrder
    id_kk?: SortOrder
    tempat_lahir?: SortOrder
    agama?: SortOrder
    pekerjaan?: SortOrder
    pendidikan_terakhir?: SortOrder
    gol_darah?: SortOrder
    status_perkawinan?: SortOrder
    tanggal_perkawinan?: SortOrder
    hubungan_dalam_keluarga?: SortOrder
    kewarganegaraan?: SortOrder
    no_paspor?: SortOrder
    no_kitap?: SortOrder
    nama_ayah?: SortOrder
    nama_ibu?: SortOrder
  }

  export type PendudukSumOrderByAggregateInput = {
    id_penduduk?: SortOrder
    no_rt?: SortOrder
    id_kk?: SortOrder
  }

  export type EnumJenisKelaminWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[]
    notIn?: $Enums.JenisKelamin[]
    not?: NestedEnumJenisKelaminWithAggregatesFilter<$PrismaModel> | $Enums.JenisKelamin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisKelaminFilter<$PrismaModel>
    _max?: NestedEnumJenisKelaminFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusWargaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusWarga | EnumStatusWargaFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusWarga[] | null
    notIn?: $Enums.StatusWarga[] | null
    not?: NestedEnumStatusWargaNullableWithAggregatesFilter<$PrismaModel> | $Enums.StatusWarga | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusWargaNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusWargaNullableFilter<$PrismaModel>
  }

  export type EnumGolDarahNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GolDarah | EnumGolDarahFieldRefInput<$PrismaModel> | null
    in?: $Enums.GolDarah[] | null
    notIn?: $Enums.GolDarah[] | null
    not?: NestedEnumGolDarahNullableWithAggregatesFilter<$PrismaModel> | $Enums.GolDarah | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGolDarahNullableFilter<$PrismaModel>
    _max?: NestedEnumGolDarahNullableFilter<$PrismaModel>
  }

  export type EnumStatusPerkawinanNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPerkawinan | EnumStatusPerkawinanFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusPerkawinan[] | null
    notIn?: $Enums.StatusPerkawinan[] | null
    not?: NestedEnumStatusPerkawinanNullableWithAggregatesFilter<$PrismaModel> | $Enums.StatusPerkawinan | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusPerkawinanNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusPerkawinanNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumJenisSuratFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisSurat | EnumJenisSuratFieldRefInput<$PrismaModel>
    in?: $Enums.JenisSurat[]
    notIn?: $Enums.JenisSurat[]
    not?: NestedEnumJenisSuratFilter<$PrismaModel> | $Enums.JenisSurat
  }

  export type EnumStatusPengajuanNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPengajuan | EnumStatusPengajuanFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusPengajuan[] | null
    notIn?: $Enums.StatusPengajuan[] | null
    not?: NestedEnumStatusPengajuanNullableFilter<$PrismaModel> | $Enums.StatusPengajuan | null
  }

  export type SuratPengajuanOrderByRelevanceInput = {
    fields: SuratPengajuanOrderByRelevanceFieldEnum | SuratPengajuanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SuratPengajuanCountOrderByAggregateInput = {
    id_surat?: SortOrder
    id_penduduk?: SortOrder
    jenis_surat?: SortOrder
    keterangan?: SortOrder
    tanggal_pengajuan?: SortOrder
    tanggal_proses?: SortOrder
    tanggal_pengambilan?: SortOrder
    status?: SortOrder
  }

  export type SuratPengajuanAvgOrderByAggregateInput = {
    id_surat?: SortOrder
    id_penduduk?: SortOrder
  }

  export type SuratPengajuanMaxOrderByAggregateInput = {
    id_surat?: SortOrder
    id_penduduk?: SortOrder
    jenis_surat?: SortOrder
    keterangan?: SortOrder
    tanggal_pengajuan?: SortOrder
    tanggal_proses?: SortOrder
    tanggal_pengambilan?: SortOrder
    status?: SortOrder
  }

  export type SuratPengajuanMinOrderByAggregateInput = {
    id_surat?: SortOrder
    id_penduduk?: SortOrder
    jenis_surat?: SortOrder
    keterangan?: SortOrder
    tanggal_pengajuan?: SortOrder
    tanggal_proses?: SortOrder
    tanggal_pengambilan?: SortOrder
    status?: SortOrder
  }

  export type SuratPengajuanSumOrderByAggregateInput = {
    id_surat?: SortOrder
    id_penduduk?: SortOrder
  }

  export type EnumJenisSuratWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisSurat | EnumJenisSuratFieldRefInput<$PrismaModel>
    in?: $Enums.JenisSurat[]
    notIn?: $Enums.JenisSurat[]
    not?: NestedEnumJenisSuratWithAggregatesFilter<$PrismaModel> | $Enums.JenisSurat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisSuratFilter<$PrismaModel>
    _max?: NestedEnumJenisSuratFilter<$PrismaModel>
  }

  export type EnumStatusPengajuanNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPengajuan | EnumStatusPengajuanFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusPengajuan[] | null
    notIn?: $Enums.StatusPengajuan[] | null
    not?: NestedEnumStatusPengajuanNullableWithAggregatesFilter<$PrismaModel> | $Enums.StatusPengajuan | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusPengajuanNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusPengajuanNullableFilter<$PrismaModel>
  }

  export type RolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput
    connect?: RolesWhereUniqueInput
  }

  export type AdminCreateNestedManyWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput> | AdminCreateWithoutUserInput[] | AdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput | AdminCreateOrConnectWithoutUserInput[]
    createMany?: AdminCreateManyUserInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type RTCreateNestedManyWithoutUserInput = {
    create?: XOR<RTCreateWithoutUserInput, RTUncheckedCreateWithoutUserInput> | RTCreateWithoutUserInput[] | RTUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RTCreateOrConnectWithoutUserInput | RTCreateOrConnectWithoutUserInput[]
    createMany?: RTCreateManyUserInputEnvelope
    connect?: RTWhereUniqueInput | RTWhereUniqueInput[]
  }

  export type AdminUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput> | AdminCreateWithoutUserInput[] | AdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput | AdminCreateOrConnectWithoutUserInput[]
    createMany?: AdminCreateManyUserInputEnvelope
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
  }

  export type RTUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RTCreateWithoutUserInput, RTUncheckedCreateWithoutUserInput> | RTCreateWithoutUserInput[] | RTUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RTCreateOrConnectWithoutUserInput | RTCreateOrConnectWithoutUserInput[]
    createMany?: RTCreateManyUserInputEnvelope
    connect?: RTWhereUniqueInput | RTWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type RolesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput
    upsert?: RolesUpsertWithoutUsersInput
    disconnect?: RolesWhereInput | boolean
    delete?: RolesWhereInput | boolean
    connect?: RolesWhereUniqueInput
    update?: XOR<XOR<RolesUpdateToOneWithWhereWithoutUsersInput, RolesUpdateWithoutUsersInput>, RolesUncheckedUpdateWithoutUsersInput>
  }

  export type AdminUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput> | AdminCreateWithoutUserInput[] | AdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput | AdminCreateOrConnectWithoutUserInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutUserInput | AdminUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdminCreateManyUserInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutUserInput | AdminUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutUserInput | AdminUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type RTUpdateManyWithoutUserNestedInput = {
    create?: XOR<RTCreateWithoutUserInput, RTUncheckedCreateWithoutUserInput> | RTCreateWithoutUserInput[] | RTUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RTCreateOrConnectWithoutUserInput | RTCreateOrConnectWithoutUserInput[]
    upsert?: RTUpsertWithWhereUniqueWithoutUserInput | RTUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RTCreateManyUserInputEnvelope
    set?: RTWhereUniqueInput | RTWhereUniqueInput[]
    disconnect?: RTWhereUniqueInput | RTWhereUniqueInput[]
    delete?: RTWhereUniqueInput | RTWhereUniqueInput[]
    connect?: RTWhereUniqueInput | RTWhereUniqueInput[]
    update?: RTUpdateWithWhereUniqueWithoutUserInput | RTUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RTUpdateManyWithWhereWithoutUserInput | RTUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RTScalarWhereInput | RTScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AdminUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput> | AdminCreateWithoutUserInput[] | AdminUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput | AdminCreateOrConnectWithoutUserInput[]
    upsert?: AdminUpsertWithWhereUniqueWithoutUserInput | AdminUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdminCreateManyUserInputEnvelope
    set?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    disconnect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    delete?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    connect?: AdminWhereUniqueInput | AdminWhereUniqueInput[]
    update?: AdminUpdateWithWhereUniqueWithoutUserInput | AdminUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdminUpdateManyWithWhereWithoutUserInput | AdminUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdminScalarWhereInput | AdminScalarWhereInput[]
  }

  export type RTUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RTCreateWithoutUserInput, RTUncheckedCreateWithoutUserInput> | RTCreateWithoutUserInput[] | RTUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RTCreateOrConnectWithoutUserInput | RTCreateOrConnectWithoutUserInput[]
    upsert?: RTUpsertWithWhereUniqueWithoutUserInput | RTUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RTCreateManyUserInputEnvelope
    set?: RTWhereUniqueInput | RTWhereUniqueInput[]
    disconnect?: RTWhereUniqueInput | RTWhereUniqueInput[]
    delete?: RTWhereUniqueInput | RTWhereUniqueInput[]
    connect?: RTWhereUniqueInput | RTWhereUniqueInput[]
    update?: RTUpdateWithWhereUniqueWithoutUserInput | RTUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RTUpdateManyWithWhereWithoutUserInput | RTUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RTScalarWhereInput | RTScalarWhereInput[]
  }

  export type UsersCreateNestedManyWithoutRoleInput = {
    create?: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput> | UsersCreateWithoutRoleInput[] | UsersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRoleInput | UsersCreateOrConnectWithoutRoleInput[]
    createMany?: UsersCreateManyRoleInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput> | UsersCreateWithoutRoleInput[] | UsersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRoleInput | UsersCreateOrConnectWithoutRoleInput[]
    createMany?: UsersCreateManyRoleInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsersUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput> | UsersCreateWithoutRoleInput[] | UsersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRoleInput | UsersCreateOrConnectWithoutRoleInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutRoleInput | UsersUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UsersCreateManyRoleInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutRoleInput | UsersUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutRoleInput | UsersUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput> | UsersCreateWithoutRoleInput[] | UsersUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRoleInput | UsersCreateOrConnectWithoutRoleInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutRoleInput | UsersUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UsersCreateManyRoleInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutRoleInput | UsersUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutRoleInput | UsersUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutAdminInput = {
    create?: XOR<UsersCreateWithoutAdminInput, UsersUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAdminInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneWithoutAdminNestedInput = {
    create?: XOR<UsersCreateWithoutAdminInput, UsersUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAdminInput
    upsert?: UsersUpsertWithoutAdminInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutAdminInput, UsersUpdateWithoutAdminInput>, UsersUncheckedUpdateWithoutAdminInput>
  }

  export type UsersCreateNestedOneWithoutRtInput = {
    create?: XOR<UsersCreateWithoutRtInput, UsersUncheckedCreateWithoutRtInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRtInput
    connect?: UsersWhereUniqueInput
  }

  export type PendudukCreateNestedManyWithoutRtInput = {
    create?: XOR<PendudukCreateWithoutRtInput, PendudukUncheckedCreateWithoutRtInput> | PendudukCreateWithoutRtInput[] | PendudukUncheckedCreateWithoutRtInput[]
    connectOrCreate?: PendudukCreateOrConnectWithoutRtInput | PendudukCreateOrConnectWithoutRtInput[]
    createMany?: PendudukCreateManyRtInputEnvelope
    connect?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
  }

  export type PendudukUncheckedCreateNestedManyWithoutRtInput = {
    create?: XOR<PendudukCreateWithoutRtInput, PendudukUncheckedCreateWithoutRtInput> | PendudukCreateWithoutRtInput[] | PendudukUncheckedCreateWithoutRtInput[]
    connectOrCreate?: PendudukCreateOrConnectWithoutRtInput | PendudukCreateOrConnectWithoutRtInput[]
    createMany?: PendudukCreateManyRtInputEnvelope
    connect?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
  }

  export type UsersUpdateOneWithoutRtNestedInput = {
    create?: XOR<UsersCreateWithoutRtInput, UsersUncheckedCreateWithoutRtInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRtInput
    upsert?: UsersUpsertWithoutRtInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutRtInput, UsersUpdateWithoutRtInput>, UsersUncheckedUpdateWithoutRtInput>
  }

  export type PendudukUpdateManyWithoutRtNestedInput = {
    create?: XOR<PendudukCreateWithoutRtInput, PendudukUncheckedCreateWithoutRtInput> | PendudukCreateWithoutRtInput[] | PendudukUncheckedCreateWithoutRtInput[]
    connectOrCreate?: PendudukCreateOrConnectWithoutRtInput | PendudukCreateOrConnectWithoutRtInput[]
    upsert?: PendudukUpsertWithWhereUniqueWithoutRtInput | PendudukUpsertWithWhereUniqueWithoutRtInput[]
    createMany?: PendudukCreateManyRtInputEnvelope
    set?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    disconnect?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    delete?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    connect?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    update?: PendudukUpdateWithWhereUniqueWithoutRtInput | PendudukUpdateWithWhereUniqueWithoutRtInput[]
    updateMany?: PendudukUpdateManyWithWhereWithoutRtInput | PendudukUpdateManyWithWhereWithoutRtInput[]
    deleteMany?: PendudukScalarWhereInput | PendudukScalarWhereInput[]
  }

  export type PendudukUncheckedUpdateManyWithoutRtNestedInput = {
    create?: XOR<PendudukCreateWithoutRtInput, PendudukUncheckedCreateWithoutRtInput> | PendudukCreateWithoutRtInput[] | PendudukUncheckedCreateWithoutRtInput[]
    connectOrCreate?: PendudukCreateOrConnectWithoutRtInput | PendudukCreateOrConnectWithoutRtInput[]
    upsert?: PendudukUpsertWithWhereUniqueWithoutRtInput | PendudukUpsertWithWhereUniqueWithoutRtInput[]
    createMany?: PendudukCreateManyRtInputEnvelope
    set?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    disconnect?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    delete?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    connect?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    update?: PendudukUpdateWithWhereUniqueWithoutRtInput | PendudukUpdateWithWhereUniqueWithoutRtInput[]
    updateMany?: PendudukUpdateManyWithWhereWithoutRtInput | PendudukUpdateManyWithWhereWithoutRtInput[]
    deleteMany?: PendudukScalarWhereInput | PendudukScalarWhereInput[]
  }

  export type PendudukCreateNestedOneWithoutKk_kepalaInput = {
    create?: XOR<PendudukCreateWithoutKk_kepalaInput, PendudukUncheckedCreateWithoutKk_kepalaInput>
    connectOrCreate?: PendudukCreateOrConnectWithoutKk_kepalaInput
    connect?: PendudukWhereUniqueInput
  }

  export type PendudukCreateNestedManyWithoutKkInput = {
    create?: XOR<PendudukCreateWithoutKkInput, PendudukUncheckedCreateWithoutKkInput> | PendudukCreateWithoutKkInput[] | PendudukUncheckedCreateWithoutKkInput[]
    connectOrCreate?: PendudukCreateOrConnectWithoutKkInput | PendudukCreateOrConnectWithoutKkInput[]
    createMany?: PendudukCreateManyKkInputEnvelope
    connect?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
  }

  export type PendudukUncheckedCreateNestedManyWithoutKkInput = {
    create?: XOR<PendudukCreateWithoutKkInput, PendudukUncheckedCreateWithoutKkInput> | PendudukCreateWithoutKkInput[] | PendudukUncheckedCreateWithoutKkInput[]
    connectOrCreate?: PendudukCreateOrConnectWithoutKkInput | PendudukCreateOrConnectWithoutKkInput[]
    createMany?: PendudukCreateManyKkInputEnvelope
    connect?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
  }

  export type PendudukUpdateOneRequiredWithoutKk_kepalaNestedInput = {
    create?: XOR<PendudukCreateWithoutKk_kepalaInput, PendudukUncheckedCreateWithoutKk_kepalaInput>
    connectOrCreate?: PendudukCreateOrConnectWithoutKk_kepalaInput
    upsert?: PendudukUpsertWithoutKk_kepalaInput
    connect?: PendudukWhereUniqueInput
    update?: XOR<XOR<PendudukUpdateToOneWithWhereWithoutKk_kepalaInput, PendudukUpdateWithoutKk_kepalaInput>, PendudukUncheckedUpdateWithoutKk_kepalaInput>
  }

  export type PendudukUpdateManyWithoutKkNestedInput = {
    create?: XOR<PendudukCreateWithoutKkInput, PendudukUncheckedCreateWithoutKkInput> | PendudukCreateWithoutKkInput[] | PendudukUncheckedCreateWithoutKkInput[]
    connectOrCreate?: PendudukCreateOrConnectWithoutKkInput | PendudukCreateOrConnectWithoutKkInput[]
    upsert?: PendudukUpsertWithWhereUniqueWithoutKkInput | PendudukUpsertWithWhereUniqueWithoutKkInput[]
    createMany?: PendudukCreateManyKkInputEnvelope
    set?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    disconnect?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    delete?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    connect?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    update?: PendudukUpdateWithWhereUniqueWithoutKkInput | PendudukUpdateWithWhereUniqueWithoutKkInput[]
    updateMany?: PendudukUpdateManyWithWhereWithoutKkInput | PendudukUpdateManyWithWhereWithoutKkInput[]
    deleteMany?: PendudukScalarWhereInput | PendudukScalarWhereInput[]
  }

  export type PendudukUncheckedUpdateManyWithoutKkNestedInput = {
    create?: XOR<PendudukCreateWithoutKkInput, PendudukUncheckedCreateWithoutKkInput> | PendudukCreateWithoutKkInput[] | PendudukUncheckedCreateWithoutKkInput[]
    connectOrCreate?: PendudukCreateOrConnectWithoutKkInput | PendudukCreateOrConnectWithoutKkInput[]
    upsert?: PendudukUpsertWithWhereUniqueWithoutKkInput | PendudukUpsertWithWhereUniqueWithoutKkInput[]
    createMany?: PendudukCreateManyKkInputEnvelope
    set?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    disconnect?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    delete?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    connect?: PendudukWhereUniqueInput | PendudukWhereUniqueInput[]
    update?: PendudukUpdateWithWhereUniqueWithoutKkInput | PendudukUpdateWithWhereUniqueWithoutKkInput[]
    updateMany?: PendudukUpdateManyWithWhereWithoutKkInput | PendudukUpdateManyWithWhereWithoutKkInput[]
    deleteMany?: PendudukScalarWhereInput | PendudukScalarWhereInput[]
  }

  export type RTCreateNestedOneWithoutPendudukInput = {
    create?: XOR<RTCreateWithoutPendudukInput, RTUncheckedCreateWithoutPendudukInput>
    connectOrCreate?: RTCreateOrConnectWithoutPendudukInput
    connect?: RTWhereUniqueInput
  }

  export type KKCreateNestedOneWithoutAnggotaInput = {
    create?: XOR<KKCreateWithoutAnggotaInput, KKUncheckedCreateWithoutAnggotaInput>
    connectOrCreate?: KKCreateOrConnectWithoutAnggotaInput
    connect?: KKWhereUniqueInput
  }

  export type KKCreateNestedOneWithoutKepala_keluargaInput = {
    create?: XOR<KKCreateWithoutKepala_keluargaInput, KKUncheckedCreateWithoutKepala_keluargaInput>
    connectOrCreate?: KKCreateOrConnectWithoutKepala_keluargaInput
    connect?: KKWhereUniqueInput
  }

  export type SuratPengajuanCreateNestedManyWithoutPendudukInput = {
    create?: XOR<SuratPengajuanCreateWithoutPendudukInput, SuratPengajuanUncheckedCreateWithoutPendudukInput> | SuratPengajuanCreateWithoutPendudukInput[] | SuratPengajuanUncheckedCreateWithoutPendudukInput[]
    connectOrCreate?: SuratPengajuanCreateOrConnectWithoutPendudukInput | SuratPengajuanCreateOrConnectWithoutPendudukInput[]
    createMany?: SuratPengajuanCreateManyPendudukInputEnvelope
    connect?: SuratPengajuanWhereUniqueInput | SuratPengajuanWhereUniqueInput[]
  }

  export type KKUncheckedCreateNestedOneWithoutKepala_keluargaInput = {
    create?: XOR<KKCreateWithoutKepala_keluargaInput, KKUncheckedCreateWithoutKepala_keluargaInput>
    connectOrCreate?: KKCreateOrConnectWithoutKepala_keluargaInput
    connect?: KKWhereUniqueInput
  }

  export type SuratPengajuanUncheckedCreateNestedManyWithoutPendudukInput = {
    create?: XOR<SuratPengajuanCreateWithoutPendudukInput, SuratPengajuanUncheckedCreateWithoutPendudukInput> | SuratPengajuanCreateWithoutPendudukInput[] | SuratPengajuanUncheckedCreateWithoutPendudukInput[]
    connectOrCreate?: SuratPengajuanCreateOrConnectWithoutPendudukInput | SuratPengajuanCreateOrConnectWithoutPendudukInput[]
    createMany?: SuratPengajuanCreateManyPendudukInputEnvelope
    connect?: SuratPengajuanWhereUniqueInput | SuratPengajuanWhereUniqueInput[]
  }

  export type EnumJenisKelaminFieldUpdateOperationsInput = {
    set?: $Enums.JenisKelamin
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableEnumStatusWargaFieldUpdateOperationsInput = {
    set?: $Enums.StatusWarga | null
  }

  export type NullableEnumGolDarahFieldUpdateOperationsInput = {
    set?: $Enums.GolDarah | null
  }

  export type NullableEnumStatusPerkawinanFieldUpdateOperationsInput = {
    set?: $Enums.StatusPerkawinan | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RTUpdateOneWithoutPendudukNestedInput = {
    create?: XOR<RTCreateWithoutPendudukInput, RTUncheckedCreateWithoutPendudukInput>
    connectOrCreate?: RTCreateOrConnectWithoutPendudukInput
    upsert?: RTUpsertWithoutPendudukInput
    disconnect?: RTWhereInput | boolean
    delete?: RTWhereInput | boolean
    connect?: RTWhereUniqueInput
    update?: XOR<XOR<RTUpdateToOneWithWhereWithoutPendudukInput, RTUpdateWithoutPendudukInput>, RTUncheckedUpdateWithoutPendudukInput>
  }

  export type KKUpdateOneWithoutAnggotaNestedInput = {
    create?: XOR<KKCreateWithoutAnggotaInput, KKUncheckedCreateWithoutAnggotaInput>
    connectOrCreate?: KKCreateOrConnectWithoutAnggotaInput
    upsert?: KKUpsertWithoutAnggotaInput
    disconnect?: KKWhereInput | boolean
    delete?: KKWhereInput | boolean
    connect?: KKWhereUniqueInput
    update?: XOR<XOR<KKUpdateToOneWithWhereWithoutAnggotaInput, KKUpdateWithoutAnggotaInput>, KKUncheckedUpdateWithoutAnggotaInput>
  }

  export type KKUpdateOneWithoutKepala_keluargaNestedInput = {
    create?: XOR<KKCreateWithoutKepala_keluargaInput, KKUncheckedCreateWithoutKepala_keluargaInput>
    connectOrCreate?: KKCreateOrConnectWithoutKepala_keluargaInput
    upsert?: KKUpsertWithoutKepala_keluargaInput
    disconnect?: KKWhereInput | boolean
    delete?: KKWhereInput | boolean
    connect?: KKWhereUniqueInput
    update?: XOR<XOR<KKUpdateToOneWithWhereWithoutKepala_keluargaInput, KKUpdateWithoutKepala_keluargaInput>, KKUncheckedUpdateWithoutKepala_keluargaInput>
  }

  export type SuratPengajuanUpdateManyWithoutPendudukNestedInput = {
    create?: XOR<SuratPengajuanCreateWithoutPendudukInput, SuratPengajuanUncheckedCreateWithoutPendudukInput> | SuratPengajuanCreateWithoutPendudukInput[] | SuratPengajuanUncheckedCreateWithoutPendudukInput[]
    connectOrCreate?: SuratPengajuanCreateOrConnectWithoutPendudukInput | SuratPengajuanCreateOrConnectWithoutPendudukInput[]
    upsert?: SuratPengajuanUpsertWithWhereUniqueWithoutPendudukInput | SuratPengajuanUpsertWithWhereUniqueWithoutPendudukInput[]
    createMany?: SuratPengajuanCreateManyPendudukInputEnvelope
    set?: SuratPengajuanWhereUniqueInput | SuratPengajuanWhereUniqueInput[]
    disconnect?: SuratPengajuanWhereUniqueInput | SuratPengajuanWhereUniqueInput[]
    delete?: SuratPengajuanWhereUniqueInput | SuratPengajuanWhereUniqueInput[]
    connect?: SuratPengajuanWhereUniqueInput | SuratPengajuanWhereUniqueInput[]
    update?: SuratPengajuanUpdateWithWhereUniqueWithoutPendudukInput | SuratPengajuanUpdateWithWhereUniqueWithoutPendudukInput[]
    updateMany?: SuratPengajuanUpdateManyWithWhereWithoutPendudukInput | SuratPengajuanUpdateManyWithWhereWithoutPendudukInput[]
    deleteMany?: SuratPengajuanScalarWhereInput | SuratPengajuanScalarWhereInput[]
  }

  export type KKUncheckedUpdateOneWithoutKepala_keluargaNestedInput = {
    create?: XOR<KKCreateWithoutKepala_keluargaInput, KKUncheckedCreateWithoutKepala_keluargaInput>
    connectOrCreate?: KKCreateOrConnectWithoutKepala_keluargaInput
    upsert?: KKUpsertWithoutKepala_keluargaInput
    disconnect?: KKWhereInput | boolean
    delete?: KKWhereInput | boolean
    connect?: KKWhereUniqueInput
    update?: XOR<XOR<KKUpdateToOneWithWhereWithoutKepala_keluargaInput, KKUpdateWithoutKepala_keluargaInput>, KKUncheckedUpdateWithoutKepala_keluargaInput>
  }

  export type SuratPengajuanUncheckedUpdateManyWithoutPendudukNestedInput = {
    create?: XOR<SuratPengajuanCreateWithoutPendudukInput, SuratPengajuanUncheckedCreateWithoutPendudukInput> | SuratPengajuanCreateWithoutPendudukInput[] | SuratPengajuanUncheckedCreateWithoutPendudukInput[]
    connectOrCreate?: SuratPengajuanCreateOrConnectWithoutPendudukInput | SuratPengajuanCreateOrConnectWithoutPendudukInput[]
    upsert?: SuratPengajuanUpsertWithWhereUniqueWithoutPendudukInput | SuratPengajuanUpsertWithWhereUniqueWithoutPendudukInput[]
    createMany?: SuratPengajuanCreateManyPendudukInputEnvelope
    set?: SuratPengajuanWhereUniqueInput | SuratPengajuanWhereUniqueInput[]
    disconnect?: SuratPengajuanWhereUniqueInput | SuratPengajuanWhereUniqueInput[]
    delete?: SuratPengajuanWhereUniqueInput | SuratPengajuanWhereUniqueInput[]
    connect?: SuratPengajuanWhereUniqueInput | SuratPengajuanWhereUniqueInput[]
    update?: SuratPengajuanUpdateWithWhereUniqueWithoutPendudukInput | SuratPengajuanUpdateWithWhereUniqueWithoutPendudukInput[]
    updateMany?: SuratPengajuanUpdateManyWithWhereWithoutPendudukInput | SuratPengajuanUpdateManyWithWhereWithoutPendudukInput[]
    deleteMany?: SuratPengajuanScalarWhereInput | SuratPengajuanScalarWhereInput[]
  }

  export type PendudukCreateNestedOneWithoutSurat_pengajuanInput = {
    create?: XOR<PendudukCreateWithoutSurat_pengajuanInput, PendudukUncheckedCreateWithoutSurat_pengajuanInput>
    connectOrCreate?: PendudukCreateOrConnectWithoutSurat_pengajuanInput
    connect?: PendudukWhereUniqueInput
  }

  export type EnumJenisSuratFieldUpdateOperationsInput = {
    set?: $Enums.JenisSurat
  }

  export type NullableEnumStatusPengajuanFieldUpdateOperationsInput = {
    set?: $Enums.StatusPengajuan | null
  }

  export type PendudukUpdateOneRequiredWithoutSurat_pengajuanNestedInput = {
    create?: XOR<PendudukCreateWithoutSurat_pengajuanInput, PendudukUncheckedCreateWithoutSurat_pengajuanInput>
    connectOrCreate?: PendudukCreateOrConnectWithoutSurat_pengajuanInput
    upsert?: PendudukUpsertWithoutSurat_pengajuanInput
    connect?: PendudukWhereUniqueInput
    update?: XOR<XOR<PendudukUpdateToOneWithWhereWithoutSurat_pengajuanInput, PendudukUpdateWithoutSurat_pengajuanInput>, PendudukUncheckedUpdateWithoutSurat_pengajuanInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumJenisKelaminFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[]
    notIn?: $Enums.JenisKelamin[]
    not?: NestedEnumJenisKelaminFilter<$PrismaModel> | $Enums.JenisKelamin
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumStatusWargaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusWarga | EnumStatusWargaFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusWarga[] | null
    notIn?: $Enums.StatusWarga[] | null
    not?: NestedEnumStatusWargaNullableFilter<$PrismaModel> | $Enums.StatusWarga | null
  }

  export type NestedEnumGolDarahNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.GolDarah | EnumGolDarahFieldRefInput<$PrismaModel> | null
    in?: $Enums.GolDarah[] | null
    notIn?: $Enums.GolDarah[] | null
    not?: NestedEnumGolDarahNullableFilter<$PrismaModel> | $Enums.GolDarah | null
  }

  export type NestedEnumStatusPerkawinanNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPerkawinan | EnumStatusPerkawinanFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusPerkawinan[] | null
    notIn?: $Enums.StatusPerkawinan[] | null
    not?: NestedEnumStatusPerkawinanNullableFilter<$PrismaModel> | $Enums.StatusPerkawinan | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumJenisKelaminWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[]
    notIn?: $Enums.JenisKelamin[]
    not?: NestedEnumJenisKelaminWithAggregatesFilter<$PrismaModel> | $Enums.JenisKelamin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisKelaminFilter<$PrismaModel>
    _max?: NestedEnumJenisKelaminFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusWargaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusWarga | EnumStatusWargaFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusWarga[] | null
    notIn?: $Enums.StatusWarga[] | null
    not?: NestedEnumStatusWargaNullableWithAggregatesFilter<$PrismaModel> | $Enums.StatusWarga | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusWargaNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusWargaNullableFilter<$PrismaModel>
  }

  export type NestedEnumGolDarahNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GolDarah | EnumGolDarahFieldRefInput<$PrismaModel> | null
    in?: $Enums.GolDarah[] | null
    notIn?: $Enums.GolDarah[] | null
    not?: NestedEnumGolDarahNullableWithAggregatesFilter<$PrismaModel> | $Enums.GolDarah | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGolDarahNullableFilter<$PrismaModel>
    _max?: NestedEnumGolDarahNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusPerkawinanNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPerkawinan | EnumStatusPerkawinanFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusPerkawinan[] | null
    notIn?: $Enums.StatusPerkawinan[] | null
    not?: NestedEnumStatusPerkawinanNullableWithAggregatesFilter<$PrismaModel> | $Enums.StatusPerkawinan | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusPerkawinanNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusPerkawinanNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumJenisSuratFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisSurat | EnumJenisSuratFieldRefInput<$PrismaModel>
    in?: $Enums.JenisSurat[]
    notIn?: $Enums.JenisSurat[]
    not?: NestedEnumJenisSuratFilter<$PrismaModel> | $Enums.JenisSurat
  }

  export type NestedEnumStatusPengajuanNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPengajuan | EnumStatusPengajuanFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusPengajuan[] | null
    notIn?: $Enums.StatusPengajuan[] | null
    not?: NestedEnumStatusPengajuanNullableFilter<$PrismaModel> | $Enums.StatusPengajuan | null
  }

  export type NestedEnumJenisSuratWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisSurat | EnumJenisSuratFieldRefInput<$PrismaModel>
    in?: $Enums.JenisSurat[]
    notIn?: $Enums.JenisSurat[]
    not?: NestedEnumJenisSuratWithAggregatesFilter<$PrismaModel> | $Enums.JenisSurat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisSuratFilter<$PrismaModel>
    _max?: NestedEnumJenisSuratFilter<$PrismaModel>
  }

  export type NestedEnumStatusPengajuanNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPengajuan | EnumStatusPengajuanFieldRefInput<$PrismaModel> | null
    in?: $Enums.StatusPengajuan[] | null
    notIn?: $Enums.StatusPengajuan[] | null
    not?: NestedEnumStatusPengajuanNullableWithAggregatesFilter<$PrismaModel> | $Enums.StatusPengajuan | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatusPengajuanNullableFilter<$PrismaModel>
    _max?: NestedEnumStatusPengajuanNullableFilter<$PrismaModel>
  }

  export type RolesCreateWithoutUsersInput = {
    name: string
    description?: string | null
  }

  export type RolesUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type RolesCreateOrConnectWithoutUsersInput = {
    where: RolesWhereUniqueInput
    create: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
  }

  export type AdminCreateWithoutUserInput = {
    nama_lengkap: string
    no_hp?: string | null
    alamat?: string | null
  }

  export type AdminUncheckedCreateWithoutUserInput = {
    id?: number
    nama_lengkap: string
    no_hp?: string | null
    alamat?: string | null
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type AdminCreateManyUserInputEnvelope = {
    data: AdminCreateManyUserInput | AdminCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RTCreateWithoutUserInput = {
    nomor_rt: number
    nama_lengkap: string
    no_hp?: string | null
    alamat?: string | null
    penduduk?: PendudukCreateNestedManyWithoutRtInput
  }

  export type RTUncheckedCreateWithoutUserInput = {
    id_rt?: number
    nomor_rt: number
    nama_lengkap: string
    no_hp?: string | null
    alamat?: string | null
    penduduk?: PendudukUncheckedCreateNestedManyWithoutRtInput
  }

  export type RTCreateOrConnectWithoutUserInput = {
    where: RTWhereUniqueInput
    create: XOR<RTCreateWithoutUserInput, RTUncheckedCreateWithoutUserInput>
  }

  export type RTCreateManyUserInputEnvelope = {
    data: RTCreateManyUserInput | RTCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RolesUpsertWithoutUsersInput = {
    update: XOR<RolesUpdateWithoutUsersInput, RolesUncheckedUpdateWithoutUsersInput>
    create: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    where?: RolesWhereInput
  }

  export type RolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: RolesWhereInput
    data: XOR<RolesUpdateWithoutUsersInput, RolesUncheckedUpdateWithoutUsersInput>
  }

  export type RolesUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminUpsertWithWhereUniqueWithoutUserInput = {
    where: AdminWhereUniqueInput
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type AdminUpdateWithWhereUniqueWithoutUserInput = {
    where: AdminWhereUniqueInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateManyWithWhereWithoutUserInput = {
    where: AdminScalarWhereInput
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyWithoutUserInput>
  }

  export type AdminScalarWhereInput = {
    AND?: AdminScalarWhereInput | AdminScalarWhereInput[]
    OR?: AdminScalarWhereInput[]
    NOT?: AdminScalarWhereInput | AdminScalarWhereInput[]
    id?: IntFilter<"Admin"> | number
    user_id?: IntNullableFilter<"Admin"> | number | null
    nama_lengkap?: StringFilter<"Admin"> | string
    no_hp?: StringNullableFilter<"Admin"> | string | null
    alamat?: StringNullableFilter<"Admin"> | string | null
  }

  export type RTUpsertWithWhereUniqueWithoutUserInput = {
    where: RTWhereUniqueInput
    update: XOR<RTUpdateWithoutUserInput, RTUncheckedUpdateWithoutUserInput>
    create: XOR<RTCreateWithoutUserInput, RTUncheckedCreateWithoutUserInput>
  }

  export type RTUpdateWithWhereUniqueWithoutUserInput = {
    where: RTWhereUniqueInput
    data: XOR<RTUpdateWithoutUserInput, RTUncheckedUpdateWithoutUserInput>
  }

  export type RTUpdateManyWithWhereWithoutUserInput = {
    where: RTScalarWhereInput
    data: XOR<RTUpdateManyMutationInput, RTUncheckedUpdateManyWithoutUserInput>
  }

  export type RTScalarWhereInput = {
    AND?: RTScalarWhereInput | RTScalarWhereInput[]
    OR?: RTScalarWhereInput[]
    NOT?: RTScalarWhereInput | RTScalarWhereInput[]
    id_rt?: IntFilter<"RT"> | number
    user_id?: IntNullableFilter<"RT"> | number | null
    nomor_rt?: IntFilter<"RT"> | number
    nama_lengkap?: StringFilter<"RT"> | string
    no_hp?: StringNullableFilter<"RT"> | string | null
    alamat?: StringNullableFilter<"RT"> | string | null
  }

  export type UsersCreateWithoutRoleInput = {
    username: string
    email: string
    password: string
    admin?: AdminCreateNestedManyWithoutUserInput
    rt?: RTCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutRoleInput = {
    id?: number
    username: string
    email: string
    password: string
    admin?: AdminUncheckedCreateNestedManyWithoutUserInput
    rt?: RTUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutRoleInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput>
  }

  export type UsersCreateManyRoleInputEnvelope = {
    data: UsersCreateManyRoleInput | UsersCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutRoleInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutRoleInput, UsersUncheckedUpdateWithoutRoleInput>
    create: XOR<UsersCreateWithoutRoleInput, UsersUncheckedCreateWithoutRoleInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutRoleInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutRoleInput, UsersUncheckedUpdateWithoutRoleInput>
  }

  export type UsersUpdateManyWithWhereWithoutRoleInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutRoleInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    id?: IntFilter<"Users"> | number
    username?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role_id?: IntNullableFilter<"Users"> | number | null
  }

  export type UsersCreateWithoutAdminInput = {
    username: string
    email: string
    password: string
    role?: RolesCreateNestedOneWithoutUsersInput
    rt?: RTCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutAdminInput = {
    id?: number
    username: string
    email: string
    password: string
    role_id?: number | null
    rt?: RTUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutAdminInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAdminInput, UsersUncheckedCreateWithoutAdminInput>
  }

  export type UsersUpsertWithoutAdminInput = {
    update: XOR<UsersUpdateWithoutAdminInput, UsersUncheckedUpdateWithoutAdminInput>
    create: XOR<UsersCreateWithoutAdminInput, UsersUncheckedCreateWithoutAdminInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutAdminInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutAdminInput, UsersUncheckedUpdateWithoutAdminInput>
  }

  export type UsersUpdateWithoutAdminInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: RolesUpdateOneWithoutUsersNestedInput
    rt?: RTUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    rt?: RTUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutRtInput = {
    username: string
    email: string
    password: string
    role?: RolesCreateNestedOneWithoutUsersInput
    admin?: AdminCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutRtInput = {
    id?: number
    username: string
    email: string
    password: string
    role_id?: number | null
    admin?: AdminUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutRtInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRtInput, UsersUncheckedCreateWithoutRtInput>
  }

  export type PendudukCreateWithoutRtInput = {
    nik: string
    nama: string
    password: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    alamat: string
    status_warga?: $Enums.StatusWarga | null
    tempat_lahir: string
    agama?: string | null
    pekerjaan?: string | null
    pendidikan_terakhir?: string | null
    gol_darah?: $Enums.GolDarah | null
    status_perkawinan?: $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: Date | string | null
    hubungan_dalam_keluarga?: string | null
    kewarganegaraan?: string | null
    no_paspor?: string | null
    no_kitap?: string | null
    nama_ayah?: string | null
    nama_ibu?: string | null
    kk?: KKCreateNestedOneWithoutAnggotaInput
    kk_kepala?: KKCreateNestedOneWithoutKepala_keluargaInput
    surat_pengajuan?: SuratPengajuanCreateNestedManyWithoutPendudukInput
  }

  export type PendudukUncheckedCreateWithoutRtInput = {
    id_penduduk?: number
    nik: string
    nama: string
    password: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    alamat: string
    status_warga?: $Enums.StatusWarga | null
    id_kk?: number | null
    tempat_lahir: string
    agama?: string | null
    pekerjaan?: string | null
    pendidikan_terakhir?: string | null
    gol_darah?: $Enums.GolDarah | null
    status_perkawinan?: $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: Date | string | null
    hubungan_dalam_keluarga?: string | null
    kewarganegaraan?: string | null
    no_paspor?: string | null
    no_kitap?: string | null
    nama_ayah?: string | null
    nama_ibu?: string | null
    kk_kepala?: KKUncheckedCreateNestedOneWithoutKepala_keluargaInput
    surat_pengajuan?: SuratPengajuanUncheckedCreateNestedManyWithoutPendudukInput
  }

  export type PendudukCreateOrConnectWithoutRtInput = {
    where: PendudukWhereUniqueInput
    create: XOR<PendudukCreateWithoutRtInput, PendudukUncheckedCreateWithoutRtInput>
  }

  export type PendudukCreateManyRtInputEnvelope = {
    data: PendudukCreateManyRtInput | PendudukCreateManyRtInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutRtInput = {
    update: XOR<UsersUpdateWithoutRtInput, UsersUncheckedUpdateWithoutRtInput>
    create: XOR<UsersCreateWithoutRtInput, UsersUncheckedCreateWithoutRtInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutRtInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutRtInput, UsersUncheckedUpdateWithoutRtInput>
  }

  export type UsersUpdateWithoutRtInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: RolesUpdateOneWithoutUsersNestedInput
    admin?: AdminUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutRtInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    admin?: AdminUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PendudukUpsertWithWhereUniqueWithoutRtInput = {
    where: PendudukWhereUniqueInput
    update: XOR<PendudukUpdateWithoutRtInput, PendudukUncheckedUpdateWithoutRtInput>
    create: XOR<PendudukCreateWithoutRtInput, PendudukUncheckedCreateWithoutRtInput>
  }

  export type PendudukUpdateWithWhereUniqueWithoutRtInput = {
    where: PendudukWhereUniqueInput
    data: XOR<PendudukUpdateWithoutRtInput, PendudukUncheckedUpdateWithoutRtInput>
  }

  export type PendudukUpdateManyWithWhereWithoutRtInput = {
    where: PendudukScalarWhereInput
    data: XOR<PendudukUpdateManyMutationInput, PendudukUncheckedUpdateManyWithoutRtInput>
  }

  export type PendudukScalarWhereInput = {
    AND?: PendudukScalarWhereInput | PendudukScalarWhereInput[]
    OR?: PendudukScalarWhereInput[]
    NOT?: PendudukScalarWhereInput | PendudukScalarWhereInput[]
    id_penduduk?: IntFilter<"Penduduk"> | number
    nik?: StringFilter<"Penduduk"> | string
    nama?: StringFilter<"Penduduk"> | string
    password?: StringFilter<"Penduduk"> | string
    jenis_kelamin?: EnumJenisKelaminFilter<"Penduduk"> | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFilter<"Penduduk"> | Date | string
    alamat?: StringFilter<"Penduduk"> | string
    no_rt?: IntNullableFilter<"Penduduk"> | number | null
    status_warga?: EnumStatusWargaNullableFilter<"Penduduk"> | $Enums.StatusWarga | null
    id_kk?: IntNullableFilter<"Penduduk"> | number | null
    tempat_lahir?: StringFilter<"Penduduk"> | string
    agama?: StringNullableFilter<"Penduduk"> | string | null
    pekerjaan?: StringNullableFilter<"Penduduk"> | string | null
    pendidikan_terakhir?: StringNullableFilter<"Penduduk"> | string | null
    gol_darah?: EnumGolDarahNullableFilter<"Penduduk"> | $Enums.GolDarah | null
    status_perkawinan?: EnumStatusPerkawinanNullableFilter<"Penduduk"> | $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: DateTimeNullableFilter<"Penduduk"> | Date | string | null
    hubungan_dalam_keluarga?: StringNullableFilter<"Penduduk"> | string | null
    kewarganegaraan?: StringNullableFilter<"Penduduk"> | string | null
    no_paspor?: StringNullableFilter<"Penduduk"> | string | null
    no_kitap?: StringNullableFilter<"Penduduk"> | string | null
    nama_ayah?: StringNullableFilter<"Penduduk"> | string | null
    nama_ibu?: StringNullableFilter<"Penduduk"> | string | null
  }

  export type PendudukCreateWithoutKk_kepalaInput = {
    nik: string
    nama: string
    password: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    alamat: string
    status_warga?: $Enums.StatusWarga | null
    tempat_lahir: string
    agama?: string | null
    pekerjaan?: string | null
    pendidikan_terakhir?: string | null
    gol_darah?: $Enums.GolDarah | null
    status_perkawinan?: $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: Date | string | null
    hubungan_dalam_keluarga?: string | null
    kewarganegaraan?: string | null
    no_paspor?: string | null
    no_kitap?: string | null
    nama_ayah?: string | null
    nama_ibu?: string | null
    rt?: RTCreateNestedOneWithoutPendudukInput
    kk?: KKCreateNestedOneWithoutAnggotaInput
    surat_pengajuan?: SuratPengajuanCreateNestedManyWithoutPendudukInput
  }

  export type PendudukUncheckedCreateWithoutKk_kepalaInput = {
    id_penduduk?: number
    nik: string
    nama: string
    password: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    alamat: string
    no_rt?: number | null
    status_warga?: $Enums.StatusWarga | null
    id_kk?: number | null
    tempat_lahir: string
    agama?: string | null
    pekerjaan?: string | null
    pendidikan_terakhir?: string | null
    gol_darah?: $Enums.GolDarah | null
    status_perkawinan?: $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: Date | string | null
    hubungan_dalam_keluarga?: string | null
    kewarganegaraan?: string | null
    no_paspor?: string | null
    no_kitap?: string | null
    nama_ayah?: string | null
    nama_ibu?: string | null
    surat_pengajuan?: SuratPengajuanUncheckedCreateNestedManyWithoutPendudukInput
  }

  export type PendudukCreateOrConnectWithoutKk_kepalaInput = {
    where: PendudukWhereUniqueInput
    create: XOR<PendudukCreateWithoutKk_kepalaInput, PendudukUncheckedCreateWithoutKk_kepalaInput>
  }

  export type PendudukCreateWithoutKkInput = {
    nik: string
    nama: string
    password: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    alamat: string
    status_warga?: $Enums.StatusWarga | null
    tempat_lahir: string
    agama?: string | null
    pekerjaan?: string | null
    pendidikan_terakhir?: string | null
    gol_darah?: $Enums.GolDarah | null
    status_perkawinan?: $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: Date | string | null
    hubungan_dalam_keluarga?: string | null
    kewarganegaraan?: string | null
    no_paspor?: string | null
    no_kitap?: string | null
    nama_ayah?: string | null
    nama_ibu?: string | null
    rt?: RTCreateNestedOneWithoutPendudukInput
    kk_kepala?: KKCreateNestedOneWithoutKepala_keluargaInput
    surat_pengajuan?: SuratPengajuanCreateNestedManyWithoutPendudukInput
  }

  export type PendudukUncheckedCreateWithoutKkInput = {
    id_penduduk?: number
    nik: string
    nama: string
    password: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    alamat: string
    no_rt?: number | null
    status_warga?: $Enums.StatusWarga | null
    tempat_lahir: string
    agama?: string | null
    pekerjaan?: string | null
    pendidikan_terakhir?: string | null
    gol_darah?: $Enums.GolDarah | null
    status_perkawinan?: $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: Date | string | null
    hubungan_dalam_keluarga?: string | null
    kewarganegaraan?: string | null
    no_paspor?: string | null
    no_kitap?: string | null
    nama_ayah?: string | null
    nama_ibu?: string | null
    kk_kepala?: KKUncheckedCreateNestedOneWithoutKepala_keluargaInput
    surat_pengajuan?: SuratPengajuanUncheckedCreateNestedManyWithoutPendudukInput
  }

  export type PendudukCreateOrConnectWithoutKkInput = {
    where: PendudukWhereUniqueInput
    create: XOR<PendudukCreateWithoutKkInput, PendudukUncheckedCreateWithoutKkInput>
  }

  export type PendudukCreateManyKkInputEnvelope = {
    data: PendudukCreateManyKkInput | PendudukCreateManyKkInput[]
    skipDuplicates?: boolean
  }

  export type PendudukUpsertWithoutKk_kepalaInput = {
    update: XOR<PendudukUpdateWithoutKk_kepalaInput, PendudukUncheckedUpdateWithoutKk_kepalaInput>
    create: XOR<PendudukCreateWithoutKk_kepalaInput, PendudukUncheckedCreateWithoutKk_kepalaInput>
    where?: PendudukWhereInput
  }

  export type PendudukUpdateToOneWithWhereWithoutKk_kepalaInput = {
    where?: PendudukWhereInput
    data: XOR<PendudukUpdateWithoutKk_kepalaInput, PendudukUncheckedUpdateWithoutKk_kepalaInput>
  }

  export type PendudukUpdateWithoutKk_kepalaInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    status_warga?: NullableEnumStatusWargaFieldUpdateOperationsInput | $Enums.StatusWarga | null
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    pendidikan_terakhir?: NullableStringFieldUpdateOperationsInput | string | null
    gol_darah?: NullableEnumGolDarahFieldUpdateOperationsInput | $Enums.GolDarah | null
    status_perkawinan?: NullableEnumStatusPerkawinanFieldUpdateOperationsInput | $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hubungan_dalam_keluarga?: NullableStringFieldUpdateOperationsInput | string | null
    kewarganegaraan?: NullableStringFieldUpdateOperationsInput | string | null
    no_paspor?: NullableStringFieldUpdateOperationsInput | string | null
    no_kitap?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ayah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ibu?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: RTUpdateOneWithoutPendudukNestedInput
    kk?: KKUpdateOneWithoutAnggotaNestedInput
    surat_pengajuan?: SuratPengajuanUpdateManyWithoutPendudukNestedInput
  }

  export type PendudukUncheckedUpdateWithoutKk_kepalaInput = {
    id_penduduk?: IntFieldUpdateOperationsInput | number
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_rt?: NullableIntFieldUpdateOperationsInput | number | null
    status_warga?: NullableEnumStatusWargaFieldUpdateOperationsInput | $Enums.StatusWarga | null
    id_kk?: NullableIntFieldUpdateOperationsInput | number | null
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    pendidikan_terakhir?: NullableStringFieldUpdateOperationsInput | string | null
    gol_darah?: NullableEnumGolDarahFieldUpdateOperationsInput | $Enums.GolDarah | null
    status_perkawinan?: NullableEnumStatusPerkawinanFieldUpdateOperationsInput | $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hubungan_dalam_keluarga?: NullableStringFieldUpdateOperationsInput | string | null
    kewarganegaraan?: NullableStringFieldUpdateOperationsInput | string | null
    no_paspor?: NullableStringFieldUpdateOperationsInput | string | null
    no_kitap?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ayah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ibu?: NullableStringFieldUpdateOperationsInput | string | null
    surat_pengajuan?: SuratPengajuanUncheckedUpdateManyWithoutPendudukNestedInput
  }

  export type PendudukUpsertWithWhereUniqueWithoutKkInput = {
    where: PendudukWhereUniqueInput
    update: XOR<PendudukUpdateWithoutKkInput, PendudukUncheckedUpdateWithoutKkInput>
    create: XOR<PendudukCreateWithoutKkInput, PendudukUncheckedCreateWithoutKkInput>
  }

  export type PendudukUpdateWithWhereUniqueWithoutKkInput = {
    where: PendudukWhereUniqueInput
    data: XOR<PendudukUpdateWithoutKkInput, PendudukUncheckedUpdateWithoutKkInput>
  }

  export type PendudukUpdateManyWithWhereWithoutKkInput = {
    where: PendudukScalarWhereInput
    data: XOR<PendudukUpdateManyMutationInput, PendudukUncheckedUpdateManyWithoutKkInput>
  }

  export type RTCreateWithoutPendudukInput = {
    nomor_rt: number
    nama_lengkap: string
    no_hp?: string | null
    alamat?: string | null
    user?: UsersCreateNestedOneWithoutRtInput
  }

  export type RTUncheckedCreateWithoutPendudukInput = {
    id_rt?: number
    user_id?: number | null
    nomor_rt: number
    nama_lengkap: string
    no_hp?: string | null
    alamat?: string | null
  }

  export type RTCreateOrConnectWithoutPendudukInput = {
    where: RTWhereUniqueInput
    create: XOR<RTCreateWithoutPendudukInput, RTUncheckedCreateWithoutPendudukInput>
  }

  export type KKCreateWithoutAnggotaInput = {
    no_kk: string
    alamat: string
    rt: string
    rw: string
    kode_pos?: string | null
    desa_kelurahan: string
    kecamatan: string
    kabupaten_kota: string
    provinsi: string
    kepala_keluarga: PendudukCreateNestedOneWithoutKk_kepalaInput
  }

  export type KKUncheckedCreateWithoutAnggotaInput = {
    id_kk?: number
    no_kk: string
    kepala_keluarga_id: number
    alamat: string
    rt: string
    rw: string
    kode_pos?: string | null
    desa_kelurahan: string
    kecamatan: string
    kabupaten_kota: string
    provinsi: string
  }

  export type KKCreateOrConnectWithoutAnggotaInput = {
    where: KKWhereUniqueInput
    create: XOR<KKCreateWithoutAnggotaInput, KKUncheckedCreateWithoutAnggotaInput>
  }

  export type KKCreateWithoutKepala_keluargaInput = {
    no_kk: string
    alamat: string
    rt: string
    rw: string
    kode_pos?: string | null
    desa_kelurahan: string
    kecamatan: string
    kabupaten_kota: string
    provinsi: string
    anggota?: PendudukCreateNestedManyWithoutKkInput
  }

  export type KKUncheckedCreateWithoutKepala_keluargaInput = {
    id_kk?: number
    no_kk: string
    alamat: string
    rt: string
    rw: string
    kode_pos?: string | null
    desa_kelurahan: string
    kecamatan: string
    kabupaten_kota: string
    provinsi: string
    anggota?: PendudukUncheckedCreateNestedManyWithoutKkInput
  }

  export type KKCreateOrConnectWithoutKepala_keluargaInput = {
    where: KKWhereUniqueInput
    create: XOR<KKCreateWithoutKepala_keluargaInput, KKUncheckedCreateWithoutKepala_keluargaInput>
  }

  export type SuratPengajuanCreateWithoutPendudukInput = {
    jenis_surat: $Enums.JenisSurat
    keterangan?: string | null
    tanggal_pengajuan?: Date | string | null
    tanggal_proses?: Date | string | null
    tanggal_pengambilan?: Date | string | null
    status?: $Enums.StatusPengajuan | null
  }

  export type SuratPengajuanUncheckedCreateWithoutPendudukInput = {
    id_surat?: number
    jenis_surat: $Enums.JenisSurat
    keterangan?: string | null
    tanggal_pengajuan?: Date | string | null
    tanggal_proses?: Date | string | null
    tanggal_pengambilan?: Date | string | null
    status?: $Enums.StatusPengajuan | null
  }

  export type SuratPengajuanCreateOrConnectWithoutPendudukInput = {
    where: SuratPengajuanWhereUniqueInput
    create: XOR<SuratPengajuanCreateWithoutPendudukInput, SuratPengajuanUncheckedCreateWithoutPendudukInput>
  }

  export type SuratPengajuanCreateManyPendudukInputEnvelope = {
    data: SuratPengajuanCreateManyPendudukInput | SuratPengajuanCreateManyPendudukInput[]
    skipDuplicates?: boolean
  }

  export type RTUpsertWithoutPendudukInput = {
    update: XOR<RTUpdateWithoutPendudukInput, RTUncheckedUpdateWithoutPendudukInput>
    create: XOR<RTCreateWithoutPendudukInput, RTUncheckedCreateWithoutPendudukInput>
    where?: RTWhereInput
  }

  export type RTUpdateToOneWithWhereWithoutPendudukInput = {
    where?: RTWhereInput
    data: XOR<RTUpdateWithoutPendudukInput, RTUncheckedUpdateWithoutPendudukInput>
  }

  export type RTUpdateWithoutPendudukInput = {
    nomor_rt?: IntFieldUpdateOperationsInput | number
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneWithoutRtNestedInput
  }

  export type RTUncheckedUpdateWithoutPendudukInput = {
    id_rt?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    nomor_rt?: IntFieldUpdateOperationsInput | number
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KKUpsertWithoutAnggotaInput = {
    update: XOR<KKUpdateWithoutAnggotaInput, KKUncheckedUpdateWithoutAnggotaInput>
    create: XOR<KKCreateWithoutAnggotaInput, KKUncheckedCreateWithoutAnggotaInput>
    where?: KKWhereInput
  }

  export type KKUpdateToOneWithWhereWithoutAnggotaInput = {
    where?: KKWhereInput
    data: XOR<KKUpdateWithoutAnggotaInput, KKUncheckedUpdateWithoutAnggotaInput>
  }

  export type KKUpdateWithoutAnggotaInput = {
    no_kk?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    rt?: StringFieldUpdateOperationsInput | string
    rw?: StringFieldUpdateOperationsInput | string
    kode_pos?: NullableStringFieldUpdateOperationsInput | string | null
    desa_kelurahan?: StringFieldUpdateOperationsInput | string
    kecamatan?: StringFieldUpdateOperationsInput | string
    kabupaten_kota?: StringFieldUpdateOperationsInput | string
    provinsi?: StringFieldUpdateOperationsInput | string
    kepala_keluarga?: PendudukUpdateOneRequiredWithoutKk_kepalaNestedInput
  }

  export type KKUncheckedUpdateWithoutAnggotaInput = {
    id_kk?: IntFieldUpdateOperationsInput | number
    no_kk?: StringFieldUpdateOperationsInput | string
    kepala_keluarga_id?: IntFieldUpdateOperationsInput | number
    alamat?: StringFieldUpdateOperationsInput | string
    rt?: StringFieldUpdateOperationsInput | string
    rw?: StringFieldUpdateOperationsInput | string
    kode_pos?: NullableStringFieldUpdateOperationsInput | string | null
    desa_kelurahan?: StringFieldUpdateOperationsInput | string
    kecamatan?: StringFieldUpdateOperationsInput | string
    kabupaten_kota?: StringFieldUpdateOperationsInput | string
    provinsi?: StringFieldUpdateOperationsInput | string
  }

  export type KKUpsertWithoutKepala_keluargaInput = {
    update: XOR<KKUpdateWithoutKepala_keluargaInput, KKUncheckedUpdateWithoutKepala_keluargaInput>
    create: XOR<KKCreateWithoutKepala_keluargaInput, KKUncheckedCreateWithoutKepala_keluargaInput>
    where?: KKWhereInput
  }

  export type KKUpdateToOneWithWhereWithoutKepala_keluargaInput = {
    where?: KKWhereInput
    data: XOR<KKUpdateWithoutKepala_keluargaInput, KKUncheckedUpdateWithoutKepala_keluargaInput>
  }

  export type KKUpdateWithoutKepala_keluargaInput = {
    no_kk?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    rt?: StringFieldUpdateOperationsInput | string
    rw?: StringFieldUpdateOperationsInput | string
    kode_pos?: NullableStringFieldUpdateOperationsInput | string | null
    desa_kelurahan?: StringFieldUpdateOperationsInput | string
    kecamatan?: StringFieldUpdateOperationsInput | string
    kabupaten_kota?: StringFieldUpdateOperationsInput | string
    provinsi?: StringFieldUpdateOperationsInput | string
    anggota?: PendudukUpdateManyWithoutKkNestedInput
  }

  export type KKUncheckedUpdateWithoutKepala_keluargaInput = {
    id_kk?: IntFieldUpdateOperationsInput | number
    no_kk?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    rt?: StringFieldUpdateOperationsInput | string
    rw?: StringFieldUpdateOperationsInput | string
    kode_pos?: NullableStringFieldUpdateOperationsInput | string | null
    desa_kelurahan?: StringFieldUpdateOperationsInput | string
    kecamatan?: StringFieldUpdateOperationsInput | string
    kabupaten_kota?: StringFieldUpdateOperationsInput | string
    provinsi?: StringFieldUpdateOperationsInput | string
    anggota?: PendudukUncheckedUpdateManyWithoutKkNestedInput
  }

  export type SuratPengajuanUpsertWithWhereUniqueWithoutPendudukInput = {
    where: SuratPengajuanWhereUniqueInput
    update: XOR<SuratPengajuanUpdateWithoutPendudukInput, SuratPengajuanUncheckedUpdateWithoutPendudukInput>
    create: XOR<SuratPengajuanCreateWithoutPendudukInput, SuratPengajuanUncheckedCreateWithoutPendudukInput>
  }

  export type SuratPengajuanUpdateWithWhereUniqueWithoutPendudukInput = {
    where: SuratPengajuanWhereUniqueInput
    data: XOR<SuratPengajuanUpdateWithoutPendudukInput, SuratPengajuanUncheckedUpdateWithoutPendudukInput>
  }

  export type SuratPengajuanUpdateManyWithWhereWithoutPendudukInput = {
    where: SuratPengajuanScalarWhereInput
    data: XOR<SuratPengajuanUpdateManyMutationInput, SuratPengajuanUncheckedUpdateManyWithoutPendudukInput>
  }

  export type SuratPengajuanScalarWhereInput = {
    AND?: SuratPengajuanScalarWhereInput | SuratPengajuanScalarWhereInput[]
    OR?: SuratPengajuanScalarWhereInput[]
    NOT?: SuratPengajuanScalarWhereInput | SuratPengajuanScalarWhereInput[]
    id_surat?: IntFilter<"SuratPengajuan"> | number
    id_penduduk?: IntFilter<"SuratPengajuan"> | number
    jenis_surat?: EnumJenisSuratFilter<"SuratPengajuan"> | $Enums.JenisSurat
    keterangan?: StringNullableFilter<"SuratPengajuan"> | string | null
    tanggal_pengajuan?: DateTimeNullableFilter<"SuratPengajuan"> | Date | string | null
    tanggal_proses?: DateTimeNullableFilter<"SuratPengajuan"> | Date | string | null
    tanggal_pengambilan?: DateTimeNullableFilter<"SuratPengajuan"> | Date | string | null
    status?: EnumStatusPengajuanNullableFilter<"SuratPengajuan"> | $Enums.StatusPengajuan | null
  }

  export type PendudukCreateWithoutSurat_pengajuanInput = {
    nik: string
    nama: string
    password: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    alamat: string
    status_warga?: $Enums.StatusWarga | null
    tempat_lahir: string
    agama?: string | null
    pekerjaan?: string | null
    pendidikan_terakhir?: string | null
    gol_darah?: $Enums.GolDarah | null
    status_perkawinan?: $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: Date | string | null
    hubungan_dalam_keluarga?: string | null
    kewarganegaraan?: string | null
    no_paspor?: string | null
    no_kitap?: string | null
    nama_ayah?: string | null
    nama_ibu?: string | null
    rt?: RTCreateNestedOneWithoutPendudukInput
    kk?: KKCreateNestedOneWithoutAnggotaInput
    kk_kepala?: KKCreateNestedOneWithoutKepala_keluargaInput
  }

  export type PendudukUncheckedCreateWithoutSurat_pengajuanInput = {
    id_penduduk?: number
    nik: string
    nama: string
    password: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    alamat: string
    no_rt?: number | null
    status_warga?: $Enums.StatusWarga | null
    id_kk?: number | null
    tempat_lahir: string
    agama?: string | null
    pekerjaan?: string | null
    pendidikan_terakhir?: string | null
    gol_darah?: $Enums.GolDarah | null
    status_perkawinan?: $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: Date | string | null
    hubungan_dalam_keluarga?: string | null
    kewarganegaraan?: string | null
    no_paspor?: string | null
    no_kitap?: string | null
    nama_ayah?: string | null
    nama_ibu?: string | null
    kk_kepala?: KKUncheckedCreateNestedOneWithoutKepala_keluargaInput
  }

  export type PendudukCreateOrConnectWithoutSurat_pengajuanInput = {
    where: PendudukWhereUniqueInput
    create: XOR<PendudukCreateWithoutSurat_pengajuanInput, PendudukUncheckedCreateWithoutSurat_pengajuanInput>
  }

  export type PendudukUpsertWithoutSurat_pengajuanInput = {
    update: XOR<PendudukUpdateWithoutSurat_pengajuanInput, PendudukUncheckedUpdateWithoutSurat_pengajuanInput>
    create: XOR<PendudukCreateWithoutSurat_pengajuanInput, PendudukUncheckedCreateWithoutSurat_pengajuanInput>
    where?: PendudukWhereInput
  }

  export type PendudukUpdateToOneWithWhereWithoutSurat_pengajuanInput = {
    where?: PendudukWhereInput
    data: XOR<PendudukUpdateWithoutSurat_pengajuanInput, PendudukUncheckedUpdateWithoutSurat_pengajuanInput>
  }

  export type PendudukUpdateWithoutSurat_pengajuanInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    status_warga?: NullableEnumStatusWargaFieldUpdateOperationsInput | $Enums.StatusWarga | null
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    pendidikan_terakhir?: NullableStringFieldUpdateOperationsInput | string | null
    gol_darah?: NullableEnumGolDarahFieldUpdateOperationsInput | $Enums.GolDarah | null
    status_perkawinan?: NullableEnumStatusPerkawinanFieldUpdateOperationsInput | $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hubungan_dalam_keluarga?: NullableStringFieldUpdateOperationsInput | string | null
    kewarganegaraan?: NullableStringFieldUpdateOperationsInput | string | null
    no_paspor?: NullableStringFieldUpdateOperationsInput | string | null
    no_kitap?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ayah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ibu?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: RTUpdateOneWithoutPendudukNestedInput
    kk?: KKUpdateOneWithoutAnggotaNestedInput
    kk_kepala?: KKUpdateOneWithoutKepala_keluargaNestedInput
  }

  export type PendudukUncheckedUpdateWithoutSurat_pengajuanInput = {
    id_penduduk?: IntFieldUpdateOperationsInput | number
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_rt?: NullableIntFieldUpdateOperationsInput | number | null
    status_warga?: NullableEnumStatusWargaFieldUpdateOperationsInput | $Enums.StatusWarga | null
    id_kk?: NullableIntFieldUpdateOperationsInput | number | null
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    pendidikan_terakhir?: NullableStringFieldUpdateOperationsInput | string | null
    gol_darah?: NullableEnumGolDarahFieldUpdateOperationsInput | $Enums.GolDarah | null
    status_perkawinan?: NullableEnumStatusPerkawinanFieldUpdateOperationsInput | $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hubungan_dalam_keluarga?: NullableStringFieldUpdateOperationsInput | string | null
    kewarganegaraan?: NullableStringFieldUpdateOperationsInput | string | null
    no_paspor?: NullableStringFieldUpdateOperationsInput | string | null
    no_kitap?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ayah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ibu?: NullableStringFieldUpdateOperationsInput | string | null
    kk_kepala?: KKUncheckedUpdateOneWithoutKepala_keluargaNestedInput
  }

  export type AdminCreateManyUserInput = {
    id?: number
    nama_lengkap: string
    no_hp?: string | null
    alamat?: string | null
  }

  export type RTCreateManyUserInput = {
    id_rt?: number
    nomor_rt: number
    nama_lengkap: string
    no_hp?: string | null
    alamat?: string | null
  }

  export type AdminUpdateWithoutUserInput = {
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RTUpdateWithoutUserInput = {
    nomor_rt?: IntFieldUpdateOperationsInput | number
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    penduduk?: PendudukUpdateManyWithoutRtNestedInput
  }

  export type RTUncheckedUpdateWithoutUserInput = {
    id_rt?: IntFieldUpdateOperationsInput | number
    nomor_rt?: IntFieldUpdateOperationsInput | number
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    penduduk?: PendudukUncheckedUpdateManyWithoutRtNestedInput
  }

  export type RTUncheckedUpdateManyWithoutUserInput = {
    id_rt?: IntFieldUpdateOperationsInput | number
    nomor_rt?: IntFieldUpdateOperationsInput | number
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    no_hp?: NullableStringFieldUpdateOperationsInput | string | null
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersCreateManyRoleInput = {
    id?: number
    username: string
    email: string
    password: string
  }

  export type UsersUpdateWithoutRoleInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateManyWithoutUserNestedInput
    rt?: RTUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    admin?: AdminUncheckedUpdateManyWithoutUserNestedInput
    rt?: RTUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type PendudukCreateManyRtInput = {
    id_penduduk?: number
    nik: string
    nama: string
    password: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    alamat: string
    status_warga?: $Enums.StatusWarga | null
    id_kk?: number | null
    tempat_lahir: string
    agama?: string | null
    pekerjaan?: string | null
    pendidikan_terakhir?: string | null
    gol_darah?: $Enums.GolDarah | null
    status_perkawinan?: $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: Date | string | null
    hubungan_dalam_keluarga?: string | null
    kewarganegaraan?: string | null
    no_paspor?: string | null
    no_kitap?: string | null
    nama_ayah?: string | null
    nama_ibu?: string | null
  }

  export type PendudukUpdateWithoutRtInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    status_warga?: NullableEnumStatusWargaFieldUpdateOperationsInput | $Enums.StatusWarga | null
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    pendidikan_terakhir?: NullableStringFieldUpdateOperationsInput | string | null
    gol_darah?: NullableEnumGolDarahFieldUpdateOperationsInput | $Enums.GolDarah | null
    status_perkawinan?: NullableEnumStatusPerkawinanFieldUpdateOperationsInput | $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hubungan_dalam_keluarga?: NullableStringFieldUpdateOperationsInput | string | null
    kewarganegaraan?: NullableStringFieldUpdateOperationsInput | string | null
    no_paspor?: NullableStringFieldUpdateOperationsInput | string | null
    no_kitap?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ayah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ibu?: NullableStringFieldUpdateOperationsInput | string | null
    kk?: KKUpdateOneWithoutAnggotaNestedInput
    kk_kepala?: KKUpdateOneWithoutKepala_keluargaNestedInput
    surat_pengajuan?: SuratPengajuanUpdateManyWithoutPendudukNestedInput
  }

  export type PendudukUncheckedUpdateWithoutRtInput = {
    id_penduduk?: IntFieldUpdateOperationsInput | number
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    status_warga?: NullableEnumStatusWargaFieldUpdateOperationsInput | $Enums.StatusWarga | null
    id_kk?: NullableIntFieldUpdateOperationsInput | number | null
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    pendidikan_terakhir?: NullableStringFieldUpdateOperationsInput | string | null
    gol_darah?: NullableEnumGolDarahFieldUpdateOperationsInput | $Enums.GolDarah | null
    status_perkawinan?: NullableEnumStatusPerkawinanFieldUpdateOperationsInput | $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hubungan_dalam_keluarga?: NullableStringFieldUpdateOperationsInput | string | null
    kewarganegaraan?: NullableStringFieldUpdateOperationsInput | string | null
    no_paspor?: NullableStringFieldUpdateOperationsInput | string | null
    no_kitap?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ayah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ibu?: NullableStringFieldUpdateOperationsInput | string | null
    kk_kepala?: KKUncheckedUpdateOneWithoutKepala_keluargaNestedInput
    surat_pengajuan?: SuratPengajuanUncheckedUpdateManyWithoutPendudukNestedInput
  }

  export type PendudukUncheckedUpdateManyWithoutRtInput = {
    id_penduduk?: IntFieldUpdateOperationsInput | number
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    status_warga?: NullableEnumStatusWargaFieldUpdateOperationsInput | $Enums.StatusWarga | null
    id_kk?: NullableIntFieldUpdateOperationsInput | number | null
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    pendidikan_terakhir?: NullableStringFieldUpdateOperationsInput | string | null
    gol_darah?: NullableEnumGolDarahFieldUpdateOperationsInput | $Enums.GolDarah | null
    status_perkawinan?: NullableEnumStatusPerkawinanFieldUpdateOperationsInput | $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hubungan_dalam_keluarga?: NullableStringFieldUpdateOperationsInput | string | null
    kewarganegaraan?: NullableStringFieldUpdateOperationsInput | string | null
    no_paspor?: NullableStringFieldUpdateOperationsInput | string | null
    no_kitap?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ayah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ibu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PendudukCreateManyKkInput = {
    id_penduduk?: number
    nik: string
    nama: string
    password: string
    jenis_kelamin: $Enums.JenisKelamin
    tanggal_lahir: Date | string
    alamat: string
    no_rt?: number | null
    status_warga?: $Enums.StatusWarga | null
    tempat_lahir: string
    agama?: string | null
    pekerjaan?: string | null
    pendidikan_terakhir?: string | null
    gol_darah?: $Enums.GolDarah | null
    status_perkawinan?: $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: Date | string | null
    hubungan_dalam_keluarga?: string | null
    kewarganegaraan?: string | null
    no_paspor?: string | null
    no_kitap?: string | null
    nama_ayah?: string | null
    nama_ibu?: string | null
  }

  export type PendudukUpdateWithoutKkInput = {
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    status_warga?: NullableEnumStatusWargaFieldUpdateOperationsInput | $Enums.StatusWarga | null
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    pendidikan_terakhir?: NullableStringFieldUpdateOperationsInput | string | null
    gol_darah?: NullableEnumGolDarahFieldUpdateOperationsInput | $Enums.GolDarah | null
    status_perkawinan?: NullableEnumStatusPerkawinanFieldUpdateOperationsInput | $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hubungan_dalam_keluarga?: NullableStringFieldUpdateOperationsInput | string | null
    kewarganegaraan?: NullableStringFieldUpdateOperationsInput | string | null
    no_paspor?: NullableStringFieldUpdateOperationsInput | string | null
    no_kitap?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ayah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ibu?: NullableStringFieldUpdateOperationsInput | string | null
    rt?: RTUpdateOneWithoutPendudukNestedInput
    kk_kepala?: KKUpdateOneWithoutKepala_keluargaNestedInput
    surat_pengajuan?: SuratPengajuanUpdateManyWithoutPendudukNestedInput
  }

  export type PendudukUncheckedUpdateWithoutKkInput = {
    id_penduduk?: IntFieldUpdateOperationsInput | number
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_rt?: NullableIntFieldUpdateOperationsInput | number | null
    status_warga?: NullableEnumStatusWargaFieldUpdateOperationsInput | $Enums.StatusWarga | null
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    pendidikan_terakhir?: NullableStringFieldUpdateOperationsInput | string | null
    gol_darah?: NullableEnumGolDarahFieldUpdateOperationsInput | $Enums.GolDarah | null
    status_perkawinan?: NullableEnumStatusPerkawinanFieldUpdateOperationsInput | $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hubungan_dalam_keluarga?: NullableStringFieldUpdateOperationsInput | string | null
    kewarganegaraan?: NullableStringFieldUpdateOperationsInput | string | null
    no_paspor?: NullableStringFieldUpdateOperationsInput | string | null
    no_kitap?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ayah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ibu?: NullableStringFieldUpdateOperationsInput | string | null
    kk_kepala?: KKUncheckedUpdateOneWithoutKepala_keluargaNestedInput
    surat_pengajuan?: SuratPengajuanUncheckedUpdateManyWithoutPendudukNestedInput
  }

  export type PendudukUncheckedUpdateManyWithoutKkInput = {
    id_penduduk?: IntFieldUpdateOperationsInput | number
    nik?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    jenis_kelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    tanggal_lahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_rt?: NullableIntFieldUpdateOperationsInput | number | null
    status_warga?: NullableEnumStatusWargaFieldUpdateOperationsInput | $Enums.StatusWarga | null
    tempat_lahir?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    pekerjaan?: NullableStringFieldUpdateOperationsInput | string | null
    pendidikan_terakhir?: NullableStringFieldUpdateOperationsInput | string | null
    gol_darah?: NullableEnumGolDarahFieldUpdateOperationsInput | $Enums.GolDarah | null
    status_perkawinan?: NullableEnumStatusPerkawinanFieldUpdateOperationsInput | $Enums.StatusPerkawinan | null
    tanggal_perkawinan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hubungan_dalam_keluarga?: NullableStringFieldUpdateOperationsInput | string | null
    kewarganegaraan?: NullableStringFieldUpdateOperationsInput | string | null
    no_paspor?: NullableStringFieldUpdateOperationsInput | string | null
    no_kitap?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ayah?: NullableStringFieldUpdateOperationsInput | string | null
    nama_ibu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SuratPengajuanCreateManyPendudukInput = {
    id_surat?: number
    jenis_surat: $Enums.JenisSurat
    keterangan?: string | null
    tanggal_pengajuan?: Date | string | null
    tanggal_proses?: Date | string | null
    tanggal_pengambilan?: Date | string | null
    status?: $Enums.StatusPengajuan | null
  }

  export type SuratPengajuanUpdateWithoutPendudukInput = {
    jenis_surat?: EnumJenisSuratFieldUpdateOperationsInput | $Enums.JenisSurat
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengajuan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_proses?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_pengambilan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumStatusPengajuanFieldUpdateOperationsInput | $Enums.StatusPengajuan | null
  }

  export type SuratPengajuanUncheckedUpdateWithoutPendudukInput = {
    id_surat?: IntFieldUpdateOperationsInput | number
    jenis_surat?: EnumJenisSuratFieldUpdateOperationsInput | $Enums.JenisSurat
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengajuan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_proses?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_pengambilan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumStatusPengajuanFieldUpdateOperationsInput | $Enums.StatusPengajuan | null
  }

  export type SuratPengajuanUncheckedUpdateManyWithoutPendudukInput = {
    id_surat?: IntFieldUpdateOperationsInput | number
    jenis_surat?: EnumJenisSuratFieldUpdateOperationsInput | $Enums.JenisSurat
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    tanggal_pengajuan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_proses?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggal_pengambilan?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumStatusPengajuanFieldUpdateOperationsInput | $Enums.StatusPengajuan | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}