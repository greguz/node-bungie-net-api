# Social

## getFriendList()

Returns your Bungie Friend list

- Returns: `<Promise>`

URL: `GET /Social/Friends/`

Source: [Social.GetFriendList](https://bungie-net.github.io/#Social.GetFriendList)

## getFriendRequestList()

Returns your friend request queue.

- Returns: `<Promise>`

URL: `GET /Social/Friends/Requests/`

Source: [Social.GetFriendRequestList](https://bungie-net.github.io/#Social.GetFriendRequestList)

## issueFriendRequest(membershipId, [body])

Requests a friend relationship with the target user. Any of the target user's linked membership ids are valid inputs.

- `membershipId` `<*>` The membership id of the user you wish to add.
- `[body]` `<*>` Request body object.
- Returns: `<Promise>`

URL: `POST /Social/Friends/Add/{membershipId}/`

Source: [Social.IssueFriendRequest](https://bungie-net.github.io/#Social.IssueFriendRequest)

## acceptFriendRequest(membershipId, [body])

Accepts a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.

- `membershipId` `<*>` The membership id of the user you wish to accept.
- `[body]` `<*>` Request body object.
- Returns: `<Promise>`

URL: `POST /Social/Friends/Requests/Accept/{membershipId}/`

Source: [Social.AcceptFriendRequest](https://bungie-net.github.io/#Social.AcceptFriendRequest)

## declineFriendRequest(membershipId, [body])

Declines a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.

- `membershipId` `<*>` The membership id of the user you wish to decline.
- `[body]` `<*>` Request body object.
- Returns: `<Promise>`

URL: `POST /Social/Friends/Requests/Decline/{membershipId}/`

Source: [Social.DeclineFriendRequest](https://bungie-net.github.io/#Social.DeclineFriendRequest)

## removeFriend(membershipId, [body])

Remove a friend relationship with the target user. The user must be on your friend list, though no error will occur if they are not.

- `membershipId` `<*>` The membership id of the user you wish to remove.
- `[body]` `<*>` Request body object.
- Returns: `<Promise>`

URL: `POST /Social/Friends/Remove/{membershipId}/`

Source: [Social.RemoveFriend](https://bungie-net.github.io/#Social.RemoveFriend)

## removeFriendRequest(membershipId, [body])

Remove a friend relationship with the target user. The user must be on your outgoing request friend list, though no error will occur if they are not.

- `membershipId` `<*>` The membership id of the user you wish to remove.
- `[body]` `<*>` Request body object.
- Returns: `<Promise>`

URL: `POST /Social/Friends/Requests/Remove/{membershipId}/`

Source: [Social.RemoveFriendRequest](https://bungie-net.github.io/#Social.RemoveFriendRequest)

## getPlatformFriendList(friendPlatform, page)

Gets the platform friend of the requested type, with additional information if they have Bungie accounts. Must have a recent login session with said platform.

- `friendPlatform` `<*>` The platform friend type.
- `page` `<*>` The zero based page to return. Page size is 100.
- Returns: `<Promise>`

URL: `GET /Social/PlatformFriends/{friendPlatform}/{page}/`

Source: [Social.GetPlatformFriendList](https://bungie-net.github.io/#Social.GetPlatformFriendList)

