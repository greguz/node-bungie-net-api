# BungieToken

## API

### `new BungieToken(token, [expires])`

The `BungieToken` constructor function.

- `token` `<string>` The raw token string
- `[expires]` `<number>` Expiration date in milliseconds since the Unix time epoch. Defaults to `0` (always valid).
- Returns: `<BungieToken>`

### `BungieToken::raw`

Gets the raw token string.

- Returns: `<string>`

### `BungieToken::expires`

Expiration date in milliseconds since the Unix time epoch.

- Returns: `<number>`

### `BungieToken::expired`

Returns `true` when a valid expirations date is set and its date is passed.

- Returns: `<boolean>`

### `BungieToken::valid`

- Returns: `<boolean>`

### `BungieToken::valueOf()`

Alias for `.raw` getter.

- Returns: `<string>`
