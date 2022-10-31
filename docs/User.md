# User

These methods can be accessed from `user` property of a `BungieApi` instance.

```javascript
import { BungieApi } from 'bungie.net'

// Create the root API instance
const api = new BungieApi(options)

// Access the method
await api.user.getBungieNetUserById(id)
```

## `getBungieNetUserById(id)`

Loads a bungienet user by membership id.

- `id` `<string>` | `<number>` The requested Bungie.net membership id.
- Returns: `<Promise>`

URL: `GET /Platform/User/GetBungieNetUserById/{id}/`

Source: [User.GetBungieNetUserById](https://bungie-net.github.io/#User.GetBungieNetUserById)

## `getSanitizedPlatformDisplayNames(membershipId)`

Gets a list of all display names linked to this membership id but sanitized (profanity filtered). Obeys all visibility rules of calling user and is heavily cached.

- `membershipId` `<string>` | `<number>` The requested membership id to load.
- Returns: `<Promise>`

URL: `GET /Platform/User/GetSanitizedPlatformDisplayNames/{membershipId}/`

Source: [User.GetSanitizedPlatformDisplayNames](https://bungie-net.github.io/#User.GetSanitizedPlatformDisplayNames)

## `getCredentialTypesForTargetAccount(membershipId)`

Returns a list of credential types attached to the requested account

- `membershipId` `<string>` | `<number>` The user's membership id
- Returns: `<Promise>`

URL: `GET /Platform/User/GetCredentialTypesForTargetAccount/{membershipId}/`

Source: [User.GetCredentialTypesForTargetAccount](https://bungie-net.github.io/#User.GetCredentialTypesForTargetAccount)

## `getAvailableThemes()`

Returns a list of all available user themes.

- Returns: `<Promise>`

URL: `GET /Platform/User/GetAvailableThemes/`

Source: [User.GetAvailableThemes](https://bungie-net.github.io/#User.GetAvailableThemes)

## `getMembershipDataById(membershipId, membershipType)`

Returns a list of accounts associated with the supplied membership ID and membership type. This will include all linked accounts (even when hidden) if supplied credentials permit it.

- `membershipId` `<string>` | `<number>` The membership ID of the target user.
- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. Type of the supplied membership ID.
- Returns: `<Promise>`

URL: `GET /Platform/User/GetMembershipsById/{membershipId}/{membershipType}/`

Source: [User.GetMembershipDataById](https://bungie-net.github.io/#User.GetMembershipDataById)

## `getMembershipDataForCurrentUser()`

Returns a list of accounts associated with signed in user. This is useful for OAuth implementations that do not give you access to the token response.

- Returns: `<Promise>`

URL: `GET /Platform/User/GetMembershipsForCurrentUser/`

Source: [User.GetMembershipDataForCurrentUser](https://bungie-net.github.io/#User.GetMembershipDataForCurrentUser)

## `getMembershipFromHardLinkedCredential(crType, credential)`

Gets any hard linked membership given a credential. Only works for credentials that are public (just SteamID64 right now). Cross Save aware.

- `crType` `<number>` See [BungieCredentialType](./Enums.md#BungieCredentialType) enum. The credential type. 'SteamId' is the only valid value at present.
- `credential` `<string>` | `<number>` The credential to look up. Must be a valid SteamID64.
- Returns: `<Promise>`

URL: `GET /Platform/User/GetMembershipFromHardLinkedCredential/{crType}/{credential}/`

Source: [User.GetMembershipFromHardLinkedCredential](https://bungie-net.github.io/#User.GetMembershipFromHardLinkedCredential)

## `searchByGlobalNamePrefix(displayNamePrefix, page)`

[OBSOLETE] Do not use this to search users, use SearchByGlobalNamePost instead.

- `displayNamePrefix` `<string>` | `<number>` The display name prefix you're looking for.
- `page` `<string>` | `<number>` The zero-based page of results you desire.
- Returns: `<Promise>`

URL: `GET /Platform/User/Search/Prefix/{displayNamePrefix}/{page}/`

Source: [User.SearchByGlobalNamePrefix](https://bungie-net.github.io/#User.SearchByGlobalNamePrefix)

## `searchByGlobalNamePost(page, [body])`

Given the prefix of a global display name, returns all users who share that name.

- `page` `<string>` | `<number>` The zero-based page of results you desire.
- `[body]` `<Object>` Request body object.
- Returns: `<Promise>`

URL: `POST /Platform/User/Search/GlobalName/{page}/`

Source: [User.SearchByGlobalNamePost](https://bungie-net.github.io/#User.SearchByGlobalNamePost)

