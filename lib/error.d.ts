/**
 * Bungie.NET related custom error representation.
 */
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
