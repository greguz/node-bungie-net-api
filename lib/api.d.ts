import type { Got, Options as GotOptions } from "got";

import type { BungieToken, Token } from "./token.js";

import type { App } from "./components/App.js";
import type { CommunityContent } from "./components/CommunityContent.js";
import type { Content } from "./components/Content.js";
import type { Destiny2 } from "./components/Destiny2.js";
import type { Fireteam } from "./components/Fireteam.js";
import type { Forum } from "./components/Forum.js";
import type { GroupV2 } from "./components/GroupV2.js";
import type { Social } from "./components/Social.js";
import type { Tokens } from "./components/Tokens.js";
import type { Trending } from "./components/Trending.js";
import type { User } from "./components/User.js";

export interface BungieApiOptions {
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
  /**
   * Load a User's refresh token.
   */
  refreshToken?: Token;
  /**
   * Load a User's access token.
   */
  accessToken?: Token;
}

export declare class BungieApi {
  /**
   * Internal [Got.js](https://github.com/sindresorhus/got) instance used to communicate to Bungie.NET servers.
   * This instance carries the current authorization status internally.
   */
  readonly got: Got;
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
   * Returns true when a valid access token is set.
   */
  get authorized(): boolean;
  /**
   * Get the current access token.
   */
  readonly accessToken: BungieToken | undefined;
  /**
   * Get the current refresh token.
   */
  readonly refreshToken: BungieToken | undefined;
  /**
   *
   */
  readonly app: App;
  /**
   *
   */
  readonly communityContent: CommunityContent;
  /**
   *
   */
  readonly content: Content;
  /**
   *
   */
  readonly destiny2: Destiny2;
  /**
   *
   */
  readonly fireteam: Fireteam;
  /**
   *
   */
  readonly forum: Forum;
  /**
   *
   */
  readonly groupV2: GroupV2;
  /**
   *
   */
  readonly social: Social;
  /**
   *
   */
  readonly tokens: Tokens;
  /**
   *
   */
  readonly trending: Trending;
  /**
   *
   */
  readonly user: User;
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
   * Make a Platform (API) request.
   */
  requestPlatform<T = any>(options: GotOptions): Promise<T>;
  /**
   * Remove all tokens.
   */
  resetCredentials(): void;
  /**
   * Load a new access token.
   */
  setAccessToken(accessToken: Token): void;
  /**
   * Load a new refresh token and optionally an access token.
   * The access token will be automatically generated if the refresh token is valid.
   */
  setRefreshToken(refreshToken: Token, accessToken?: Token): void;
}
