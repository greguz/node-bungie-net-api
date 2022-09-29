import type { Got } from "got";

export * from "./lib/enum.d.js";

export interface BungieApiOptions extends CredentialsOptions {
  /**
   * Required Bungie.NET [App](https://www.bungie.net/en/Application) key.
   */
  apiKey: string;
  /**
   * Alternative Bungie.NET URL.
   *
   * @default "https://www.bungie.net/"
   */
  url?: string;
  /**
   * App's client identifier.
   */
  clientId?: string;
  /**
   * App's client secret.
   */
  clientSecret?: string;
}

export interface CredentialsOptions {
  /**
   * Load a User's refresh token.
   */
  refreshToken?: string | BungieToken;
  /**
   * Load a User's access token.
   */
  accessToken?: string | BungieToken;
}

export declare class BungieApi {
  /**
   * Internal [Got.js](https://github.com/sindresorhus/got) instance used to communicate to Bungie.NET servers.
   * This instance carries the current authorization status internally.
   */
  get got(): Got;
  /**
   * Configured Bungie.NET server URL.
   */
  readonly url: string;
  /**
   * Configured App's API key.
   */
  readonly apiKey: string;
  /**
   * Configured App's client identifier.
   */
  readonly clientId: string | undefined;
  /**
   * Configured App's client secret.
   */
  readonly clientSecret: string | undefined;
  /**
   * Current refresh token.
   */
  readonly refreshToken: BungieToken | undefined;
  /**
   * Current access token.
   */
  readonly accessToken: BungieToken | undefined;
  /**
   * @constructor
   */
  constructor(options: BungieApiOptions);
  /**
   * Makes and authorization request.
   * This will set a new access token.
   * If the Bungie.NET Application type is `Private`, then a refresh token will also set.
   * Resolves with the User's membership identifier.
   */
  authorize(code: string): Promise<string>;
  /**
   * Get the required authorization URL to initiate an OAuth request.
   * You need to redirect the user to this URL.
   */
  getAuthorizationUrl(state: string, altUrl?: string): string;
  /**
   * Load or reset some User's credentials.
   */
  setCredentials(options?: CredentialsOptions): void;
  /**
   * Load a refresh token, and optionally an access token.
   */
  setRefreshToken(
    refreshToken: string | BungieToken,
    accessToken?: string | BungieToken
  ): void;
  /**
   * Load an access token.
   */
  setAccessToken(accessToken: string | BungieToken): void;
  /**
   * Refresh manually the current access token.
   */
  refreshAccessToken(): Promise<void>;
  /**
   * Make a Platform (API) request.
   */
  requestPlatform(options: object): Promise<unknown>;
  /**
   * Get current Manifest.
   */
  getManifest(): Promise<unknown>;
  /**
   * Get current memberships for the currently authorized user.
   * Needs authorization.
   */
  getMembershipsForCurrentUser(): Promise<unknown>;
  /**
   * Get profile info for the currently authorized user.
   * Needs authorization.
   */
  getProfile(
    membershipType: number,
    membershipId: string,
    components: number[]
  ): Promise<unknown>;
  /**
   * Needs authorization.
   */
  getVendor(
    membershipType: number,
    membershipId: string,
    characterId: string,
    vendorHash: string,
    components: number[]
  ): Promise<unknown>;
  /**
   * Needs authorization.
   */
  getVendors(
    membershipType: number,
    membershipId: string,
    characterId: string,
    vendorHash: string,
    components: number[]
  ): Promise<unknown>;
}

export declare class BungieToken {
  /**
   * Creates a new token from different sources.
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
   * Returns `true` id this token is expired.
   */
  get expired(): boolean;
  /**
   * Returns `true` id this token is **not** expired.
   */
  get valid(): boolean;
  /**
   * @constructor
   */
  constructor(token: string, expires: number);
  /**
   * Returns a custom JSON representation of this token.
   */
  toJSON(): unknown;
  /**
   * Returns the raw token value.
   */
  valueOf(): string;
}

export declare class BungieError extends Error {
  /**
   * Custom error code for Bungie.NET-related errors.
   */
  code: string;
  /**
   * @constructor
   */
  constructor(message?: string, code?: string);
}

export declare class BungiePlatformError extends BungieError {
  /**
   * This error represents a Platform request error.
   */
  code: "BUNGIE_PLATFORM_ERROR";
  /**
   * See [ErrorCode](https://bungie-net.github.io/#/components/schemas/Exceptions.PlatformErrorCodes) enum.
   */
  bungieCode: number;
  /**
   * Bungie error status description.
   */
  bungieStatus: string;
  /**
   * Additional error details.
   */
  data: Record<string, any>;
  /**
   * TODO: what is that?
   */
  throttleSeconds?: number;
  /**
   * HTTP response status code.
   */
  statusCode: number;
  /**
   * @constructor
   */
  constructor(body: object, statusCode: number);
}
