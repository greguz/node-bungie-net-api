import type { Got } from "got";

export interface BungieApiOptions {
  /**
   *
   */
  apiKey: string;
  /**
   *
   */
  url?: string;
  /**
   *
   */
  clientId?: string;
  /**
   *
   */
  clientSecret?: string;
  /**
   *
   */
  refreshToken?: string | BungieToken;
  /**
   *
   */
  accessToken?: string | BungieToken;
}

export declare class BungieApi {
  /**
   *
   */
  get got(): Got;
  /**
   *
   */
  readonly url: string;
  /**
   *
   */
  readonly apiKey: string;
  /**
   *
   */
  readonly clientId: string | undefined;
  /**
   *
   */
  readonly clientSecret: string | undefined;
  /**
   *
   */
  readonly refreshToken: BungieToken | undefined;
  /**
   *
   */
  readonly accessToken: BungieToken | undefined;
  /**
   *
   */
  constructor(options: BungieApiOptions);
  /**
   * Makes and authorization request.
   * This will set a new access token.
   * If the Bungie.NET Application type is `Private`, then a refresh token will also set.
   * Resolves with the User's membership identifier.
   */
  authorize (code: string): Promise<string>
  /**
   *
   */
  getAuthorizationUrl (state: string, altUrl?: string): string
}

export declare class BungieToken {
  /**
   *
   */
  static from(token: any, expiresInSeconds?: number): BungieToken;
  /**
   * Raw token value.
   */
  readonly raw: string;
  /**
   * Expiring date.
   */
  readonly expires: number;
  /**
   *
   */
  get expired(): boolean;
  /**
   *
   */
  get valid(): boolean;
  /**
   *
   */
  constructor(token: string, expires: number);
  /**
   *
   */
  toJSON(): unknown;
  /**
   *
   */
  valueOf(): string;
}

export declare class BungieError extends Error {
  /**
   *
   */
  code: string
  /**
   *
   */
  constructor (message?: string, code?: string)
}

export declare class BungiePlatformError extends BungieError {
  /**
   *
   */
  code: 'BUNGIE_PLATFORM_ERROR'
  /**
   *
   */
  bungieCode: number
  /**
   *
   */
  bungieStatus: string
  /**
   *
   */
  data: Record<string, any>
  /**
   *
   */
  throttleSeconds?: number
  /**
   *
   */
  statusCode: number
  /**
   *
   */
  constructor (body: object, statusCode: number)
}
