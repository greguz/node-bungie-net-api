# Fireteam

These methods can be accessed from `fireteam` property of a `BungieApi` instance.

```javascript
import { BungieApi } from 'bungie.net'

// Create the root API instance
const api = new BungieApi(options)

// Access the method
await api.fireteam.getActivePrivateClanFireteamCount(groupId)
```

## `getActivePrivateClanFireteamCount(groupId)`

Gets a count of all active non-public fireteams for the specified clan. Maximum value returned is 25.

- `groupId` `<BigInt>` | `<number>` | `<string>` The group id of the clan.
- Returns: `<Promise>`

URL: `GET /Platform/Fireteam/Clan/{groupId}/ActiveCount/`

Source: [Fireteam.GetActivePrivateClanFireteamCount](https://bungie-net.github.io/#Fireteam.GetActivePrivateClanFireteamCount)

## `getAvailableClanFireteams(groupId, platform, activityType, dateRange, slotFilter, publicOnly, page, [searchParams])`

Gets a listing of all of this clan's fireteams that are have available slots. Caller is not checked for join criteria so caching is maximized.

- `groupId` `<BigInt>` | `<number>` | `<string>` The group id of the clan.
- `platform` `<number>` See [FireteamPlatform](./Enums.md#FireteamPlatform) enum. The platform filter.
- `activityType` `<BigInt>` | `<number>` | `<string>` The activity type to filter by.
- `dateRange` `<number>` See [FireteamDateRange](./Enums.md#FireteamDateRange) enum. The date range to grab available fireteams.
- `slotFilter` `<number>` See [FireteamSlotSearch](./Enums.md#FireteamSlotSearch) enum. Filters based on available slots
- `publicOnly` `<number>` See [FireteamPublicSearchOption](./Enums.md#FireteamPublicSearchOption) enum. Determines public/private filtering.
- `page` `<BigInt>` | `<number>` | `<string>` Zero based page
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.langFilter]` `<string>` An optional language filter.
- Returns: `<Promise>`

URL: `GET /Platform/Fireteam/Clan/{groupId}/Available/{platform}/{activityType}/{dateRange}/{slotFilter}/{publicOnly}/{page}/`

Source: [Fireteam.GetAvailableClanFireteams](https://bungie-net.github.io/#Fireteam.GetAvailableClanFireteams)

## `searchPublicAvailableClanFireteams(platform, activityType, dateRange, slotFilter, page, [searchParams])`

Gets a listing of all public fireteams starting now with open slots. Caller is not checked for join criteria so caching is maximized.

- `platform` `<number>` See [FireteamPlatform](./Enums.md#FireteamPlatform) enum. The platform filter.
- `activityType` `<BigInt>` | `<number>` | `<string>` The activity type to filter by.
- `dateRange` `<number>` See [FireteamDateRange](./Enums.md#FireteamDateRange) enum. The date range to grab available fireteams.
- `slotFilter` `<number>` See [FireteamSlotSearch](./Enums.md#FireteamSlotSearch) enum. Filters based on available slots
- `page` `<BigInt>` | `<number>` | `<string>` Zero based page
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.langFilter]` `<string>` An optional language filter.
- Returns: `<Promise>`

URL: `GET /Platform/Fireteam/Search/Available/{platform}/{activityType}/{dateRange}/{slotFilter}/{page}/`

Source: [Fireteam.SearchPublicAvailableClanFireteams](https://bungie-net.github.io/#Fireteam.SearchPublicAvailableClanFireteams)

## `getMyClanFireteams(groupId, platform, includeClosed, page, [searchParams])`

Gets a listing of all fireteams that caller is an applicant, a member, or an alternate of.

- `groupId` `<BigInt>` | `<number>` | `<string>` The group id of the clan. (This parameter is ignored unless the optional query parameter groupFilter is true).
- `platform` `<number>` See [FireteamPlatform](./Enums.md#FireteamPlatform) enum. The platform filter.
- `includeClosed` `<boolean>` If true, return fireteams that have been closed.
- `page` `<BigInt>` | `<number>` | `<string>` Deprecated parameter, ignored.
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.groupFilter]` `<boolean>` If true, filter by clan. Otherwise, ignore the clan and show all of the user's fireteams.
  - `[searchParams.langFilter]` `<string>` An optional language filter.
- Returns: `<Promise>`

URL: `GET /Platform/Fireteam/Clan/{groupId}/My/{platform}/{includeClosed}/{page}/`

Source: [Fireteam.GetMyClanFireteams](https://bungie-net.github.io/#Fireteam.GetMyClanFireteams)

## `getClanFireteam(groupId, fireteamId)`

Gets a specific fireteam.

- `groupId` `<BigInt>` | `<number>` | `<string>` The group id of the clan.
- `fireteamId` `<BigInt>` | `<number>` | `<string>` The unique id of the fireteam.
- Returns: `<Promise>`

URL: `GET /Platform/Fireteam/Clan/{groupId}/Summary/{fireteamId}/`

Source: [Fireteam.GetClanFireteam](https://bungie-net.github.io/#Fireteam.GetClanFireteam)

