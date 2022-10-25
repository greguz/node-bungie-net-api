# Fireteam

## getActivePrivateClanFireteamCount(groupId)

Gets a count of all active non-public fireteams for the specified clan. Maximum value returned is 25.

- `groupId` `<*>` The group id of the clan.
- Returns: `<Promise>`

URL: `GET /Fireteam/Clan/{groupId}/ActiveCount/`

Source: [Fireteam.GetActivePrivateClanFireteamCount](https://bungie-net.github.io/#Fireteam.GetActivePrivateClanFireteamCount)

## getAvailableClanFireteams(groupId, platform, activityType, dateRange, slotFilter, publicOnly, page, [searchParams])

Gets a listing of all of this clan's fireteams that are have available slots. Caller is not checked for join criteria so caching is maximized.

- `groupId` `<*>` The group id of the clan.
- `platform` `<*>` The platform filter.
- `activityType` `<*>` The activity type to filter by.
- `dateRange` `<*>` The date range to grab available fireteams.
- `slotFilter` `<*>` Filters based on available slots
- `publicOnly` `<*>` Determines public/private filtering.
- `page` `<*>` Zero based page
- `[searchParams]` `<*>` Request querystring parameters object.
- Returns: `<Promise>`

URL: `GET /Fireteam/Clan/{groupId}/Available/{platform}/{activityType}/{dateRange}/{slotFilter}/{publicOnly}/{page}/`

Source: [Fireteam.GetAvailableClanFireteams](https://bungie-net.github.io/#Fireteam.GetAvailableClanFireteams)

## searchPublicAvailableClanFireteams(platform, activityType, dateRange, slotFilter, page, [searchParams])

Gets a listing of all public fireteams starting now with open slots. Caller is not checked for join criteria so caching is maximized.

- `platform` `<*>` The platform filter.
- `activityType` `<*>` The activity type to filter by.
- `dateRange` `<*>` The date range to grab available fireteams.
- `slotFilter` `<*>` Filters based on available slots
- `page` `<*>` Zero based page
- `[searchParams]` `<*>` Request querystring parameters object.
- Returns: `<Promise>`

URL: `GET /Fireteam/Search/Available/{platform}/{activityType}/{dateRange}/{slotFilter}/{page}/`

Source: [Fireteam.SearchPublicAvailableClanFireteams](https://bungie-net.github.io/#Fireteam.SearchPublicAvailableClanFireteams)

## getMyClanFireteams(groupId, platform, includeClosed, page, [searchParams])

Gets a listing of all fireteams that caller is an applicant, a member, or an alternate of.

- `groupId` `<*>` The group id of the clan. (This parameter is ignored unless the optional query parameter groupFilter is true).
- `platform` `<*>` The platform filter.
- `includeClosed` `<*>` If true, return fireteams that have been closed.
- `page` `<*>` Deprecated parameter, ignored.
- `[searchParams]` `<*>` Request querystring parameters object.
- Returns: `<Promise>`

URL: `GET /Fireteam/Clan/{groupId}/My/{platform}/{includeClosed}/{page}/`

Source: [Fireteam.GetMyClanFireteams](https://bungie-net.github.io/#Fireteam.GetMyClanFireteams)

## getClanFireteam(groupId, fireteamId)

Gets a specific fireteam.

- `groupId` `<*>` The group id of the clan.
- `fireteamId` `<*>` The unique id of the fireteam.
- Returns: `<Promise>`

URL: `GET /Fireteam/Clan/{groupId}/Summary/{fireteamId}/`

Source: [Fireteam.GetClanFireteam](https://bungie-net.github.io/#Fireteam.GetClanFireteam)

