/**
 * Valid token value types.
 */
export type Token = string | BungieToken | BungieTokenJson;

export declare class BungieToken {
  /**
   * Creates a new token from different sources.
   */
  static from(token: Token): BungieToken;
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
  toJSON(): BungieTokenJson;
  /**
   * Returns the raw token value.
   */
  valueOf(): string;
}

/**
 * JSON representation of an instance of a BungieToken.
 */
export interface BungieTokenJson {
  $token: unknown;
}
