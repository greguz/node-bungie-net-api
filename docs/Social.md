# Social

These methods can be accessed from `social` property of a `BungieApi` instance.

```javascript
import { BungieApi } from 'bungie.net'

// Create the root API instance
const api = new BungieApi(options)

// Access the method
await api.social.getFriendList()
```

## `getFriendList()`

Returns your Bungie Friend list

- Returns: `<Promise>`

URL: `GET /Platform/Social/Friends/`

Source: [Social.GetFriendList](https://bungie-net.github.io/#Social.GetFriendList)

## `getFriendRequestList()`

Returns your friend request queue.

- Returns: `<Promise>`

URL: `GET /Platform/Social/Friends/Requests/`

Source: [Social.GetFriendRequestList](https://bungie-net.github.io/#Social.GetFriendRequestList)

## `issueFriendRequest(membershipId, [body])`

Requests a friend relationship with the target user. Any of the target user's linked membership ids are valid inputs.

- `membershipId` `<string>` | `<number>` The membership id of the user you wish to add.
- `[body]` `<Object>` Request body object.
- Returns: `<Promise>`

URL: `POST /Platform/Social/Friends/Add/{membershipId}/`

Source: [Social.IssueFriendRequest](https://bungie-net.github.io/#Social.IssueFriendRequest)

## `acceptFriendRequest(membershipId, [body])`

Accepts a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.

- `membershipId` `<string>` | `<number>` The membership id of the user you wish to accept.
- `[body]` `<Object>` Request body object.
- Returns: `<Promise>`

URL: `POST /Platform/Social/Friends/Requests/Accept/{membershipId}/`

Source: [Social.AcceptFriendRequest](https://bungie-net.github.io/#Social.AcceptFriendRequest)

## `declineFriendRequest(membershipId, [body])`

Declines a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.

- `membershipId` `<string>` | `<number>` The membership id of the user you wish to decline.
- `[body]` `<Object>` Request body object.
- Returns: `<Promise>`

URL: `POST /Platform/Social/Friends/Requests/Decline/{membershipId}/`

Source: [Social.DeclineFriendRequest](https://bungie-net.github.io/#Social.DeclineFriendRequest)

## `removeFriend(membershipId, [body])`

Remove a friend relationship with the target user. The user must be on your friend list, though no error will occur if they are not.

- `membershipId` `<string>` | `<number>` The membership id of the user you wish to remove.
- `[body]` `<Object>` Request body object.
- Returns: `<Promise>`

URL: `POST /Platform/Social/Friends/Remove/{membershipId}/`

Source: [Social.RemoveFriend](https://bungie-net.github.io/#Social.RemoveFriend)

## `removeFriendRequest(membershipId, [body])`

Remove a friend relationship with the target user. The user must be on your outgoing request friend list, though no error will occur if they are not.

- `membershipId` `<string>` | `<number>` The membership id of the user you wish to remove.
- `[body]` `<Object>` Request body object.
- Returns: `<Promise>`

URL: `POST /Platform/Social/Friends/Requests/Remove/{membershipId}/`

Source: [Social.RemoveFriendRequest](https://bungie-net.github.io/#Social.RemoveFriendRequest)

## `getPlatformFriendList(friendPlatform, page)`

Gets the platform friend of the requested type, with additional information if they have Bungie accounts. Must have a recent login session with said platform.

- `friendPlatform` `<number>` See [PlatformFriendType](./Enums.md#PlatformFriendType) enum. The platform friend type.
- `page` `<string>` | `<number>` The zero based page to return. Page size is 100.
- Returns: `<Promise>`

URL: `GET /Platform/Social/PlatformFriends/{friendPlatform}/{page}/`

Source: [Social.GetPlatformFriendList](https://bungie-net.github.io/#Social.GetPlatformFriendList)

