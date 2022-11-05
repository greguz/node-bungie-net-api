# BungieApi

```javascript
import { BungieApi } from 'bungie.net'

// Create the root API instance
const api = new BungieApi(options)
```

## API

### `new BungieApi(options)`

- `options` `<Object>`
  - `apiKey` `<string>` Bungie.NET [App](https://www.bungie.net/en/Application) key. Required.
  - `[url]` `<string>` Defaults to `"https://www.bungie.net/"`.
  - `[clientId]` `<string>` App's client identifier.
  - `[clientSecret]` `<string>` App's client secret.
  - `[refreshToken]` `<string>` | [`<BungieToken>`](./BungieToken.md) Preload a refresh token.
  - `[accessToken]` `<string>` | [`<BungieToken>`](./BungieToken.md) Preload an access token.

### `BungieApi::url`

Gets the currenlty configured Bungie.net server URL. Defaults to `"https://www.bungie.net/"`.

### `BungieApi::apiKey`

Gets the configured API key.

### `BungieApi::clientId`

Gets the configured OAuth client identifier. Can be `undefined`.

### `BungieApi::clientSecret`

Gets the configured OAuth client secret. Can be `undefined`.

### `BungieApi::accessToken`

Gets the current access token. This value can change when a valid refresh token is used.

### `BungieApi::refreshToken`

Gets the current refresh token.

### `BungieApi::authorize(code)`

Perform an authorization request with the retrieved after the OAuth redirect. See [OAuth](./OAuth.md) section for more details.

### `BungieApi::getAuthorizationUrl(state, [altUrl])`

Constructs the authorization URL where this user will land to authorize the Bungie.net App. See [OAuth](./OAuth.md) section for more details.

- `state` `<string>` Private state value.
- `[altUrl]` `<string>` Server-relative URL for the OAuth authorization page. Defaults to `"en/oauth/authorize"`.
- Returns: `<string>`

### `BungieApi::resetCredentials()`

Remove all saved authorization info.

### `BungieApi::setAccessToken(accessToken)`

Set a new access token. This operation will reset the refresh token.

- `accessToken` `<string>` | [`<BungieToken>`](./BungieToken.md) todo
- Returns: `<undefined>`

### `BungieApi::setRefreshToken(refreshToken, [accessToken])`

Set a new refresh token. An access token could be provided as inizialization, otherwise It will be created during the first request.

- `accessToken` `<string>` | [`<BungieToken>`](./BungieToken.md) todo
- `[refreshToken]` `<string>` | [`<BungieToken>`](./BungieToken.md) todo
- Returns: `<undefined>`

### [`BungieApi::app`](./App.md)

Exposes all `App`-related API routes. See its [docs](./App.md) for more details.

### [`BungieApi::communityContent`](./CommunityContent.md)

Exposes all `CommunityContent`-related API routes. See its [docs](./CommunityContent.md) for more details.

### [`BungieApi::content`](./Content.md)

Exposes all `Content`-related API routes. See its [docs](./Content.md) for more details.

### [`BungieApi::destiny2`](./Destiny2.md)

Exposes all `Destiny2`-related API routes. See its [docs](./Destiny2.md) for more details.

### [`BungieApi::fireteam`](./Fireteam.md)

Exposes all `Fireteam`-related API routes. See its [docs](./Fireteam.md) for more details.

### [`BungieApi::forum`](./Forum.md)

Exposes all `Forum`-related API routes. See its [docs](./Forum.md) for more details.

### [`BungieApi::groupV2`](./GroupV2.md)

Exposes all `GroupV2`-related API routes. See its [docs](./GroupV2.md) for more details.

### [`BungieApi::social`](./Social.md)

Exposes all `Social`-related API routes. See its [docs](./Social.md) for more details.

### [`BungieApi::tokens`](./Tokens.md)

Exposes all `Tokens`-related API routes. See its [docs](./Tokens.md) for more details.

### [`BungieApi::trending`](./Trending.md)

Exposes all `Trending`-related API routes. See its [docs](./Trending.md) for more details.

### [`BungieApi::user`](./User.md)

Exposes all `User`-related API routes. See its [docs](./User.md) for more details.
