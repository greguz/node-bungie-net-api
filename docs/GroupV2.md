# GroupV2

These methods can be accessed from `groupV2` property of a `BungieApi` instance.

```javascript
import { BungieApi } from 'bungie.net'

// Create the root API instance
const api = new BungieApi(options)

// Access the method
await api.groupV2.getAvailableAvatars()
```

## `getAvailableAvatars()`

Returns a list of all available group avatars for the signed-in user.

- Returns: `<Promise>`

URL: `GET /Platform/GroupV2/GetAvailableAvatars/`

Source: [GroupV2.GetAvailableAvatars](https://bungie-net.github.io/#GroupV2.GetAvailableAvatars)

## `getAvailableThemes()`

Returns a list of all available group themes.

- Returns: `<Promise>`

URL: `GET /Platform/GroupV2/GetAvailableThemes/`

Source: [GroupV2.GetAvailableThemes](https://bungie-net.github.io/#GroupV2.GetAvailableThemes)

## `getUserClanInviteSetting(mType)`

Gets the state of the user's clan invite preferences for a particular membership type - true if they wish to be invited to clans, false otherwise.

- `mType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. The Destiny membership type of the account we wish to access settings.
- Returns: `<Promise>`

URL: `GET /Platform/GroupV2/GetUserClanInviteSetting/{mType}/`

Source: [GroupV2.GetUserClanInviteSetting](https://bungie-net.github.io/#GroupV2.GetUserClanInviteSetting)

## `getRecommendedGroups(groupType, createDateRange)`

Gets groups recommended for you based on the groups to whom those you follow belong.

- `groupType` `<number>` See [GroupType](./Enums.md#GroupType) enum. Type of groups requested
- `createDateRange` `<number>` See [GroupDateRange](./Enums.md#GroupDateRange) enum. Requested range in which to pull recommended groups
- Returns: `<Promise>`

URL: `POST /Platform/GroupV2/Recommended/{groupType}/{createDateRange}/`

Source: [GroupV2.GetRecommendedGroups](https://bungie-net.github.io/#GroupV2.GetRecommendedGroups)

## `groupSearch([body])`

Search for Groups.

- `[body]` `<Object>` Request body object.
  - `[body.name]` `<string>`
  - `[body.groupType]` `<number>` See [GroupType](./Enums.md#GroupType) enum.
  - `[body.creationDate]` `<number>` See [GroupDateRange](./Enums.md#GroupDateRange) enum.
  - `[body.sortBy]` `<number>` See [GroupSortBy](./Enums.md#GroupSortBy) enum.
  - `[body.groupMemberCountFilter]` `<number>`
  - `[body.localeFilter]` `<string>`
  - `[body.tagText]` `<string>`
  - `[body.itemsPerPage]` `<number>`
  - `[body.currentPage]` `<number>`
  - `[body.requestContinuationToken]` `<string>`
- Returns: `<Promise>`

URL: `POST /Platform/GroupV2/Search/`

Source: [GroupV2.GroupSearch](https://bungie-net.github.io/#GroupV2.GroupSearch)

## `getGroup(groupId)`

Get information about a specific group of the given ID.

- `groupId` `<BigInt>` | `<number>` | `<string>` Requested group's id.
- Returns: `<Promise>`

URL: `GET /Platform/GroupV2/{groupId}/`

Source: [GroupV2.GetGroup](https://bungie-net.github.io/#GroupV2.GetGroup)

## `getGroupByName(groupName, groupType)`

Get information about a specific group with the given name and type.

- `groupName` `<string>` Exact name of the group to find.
- `groupType` `<number>` See [GroupType](./Enums.md#GroupType) enum. Type of group to find.
- Returns: `<Promise>`

URL: `GET /Platform/GroupV2/Name/{groupName}/{groupType}/`

Source: [GroupV2.GetGroupByName](https://bungie-net.github.io/#GroupV2.GetGroupByName)

## `getGroupByNameV2([body])`

Get information about a specific group with the given name and type. The POST version.

- `[body]` `<Object>` Request body object.
  - `[body.groupName]` `<string>`
  - `[body.groupType]` `<number>` See [GroupType](./Enums.md#GroupType) enum.
- Returns: `<Promise>`

URL: `POST /Platform/GroupV2/NameV2/`

Source: [GroupV2.GetGroupByNameV2](https://bungie-net.github.io/#GroupV2.GetGroupByNameV2)

## `getGroupOptionalConversations(groupId)`

Gets a list of available optional conversation channels and their settings.

- `groupId` `<BigInt>` | `<number>` | `<string>` Requested group's id.
- Returns: `<Promise>`

URL: `GET /Platform/GroupV2/{groupId}/OptionalConversations/`

Source: [GroupV2.GetGroupOptionalConversations](https://bungie-net.github.io/#GroupV2.GetGroupOptionalConversations)

## `editGroup(groupId, [body])`

Edit an existing group. You must have suitable permissions in the group to perform this operation. This latest revision will only edit the fields you pass in - pass null for properties you want to leave unaltered.

- `groupId` `<BigInt>` | `<number>` | `<string>` Group ID of the group to edit.
- `[body]` `<Object>` Request body object.
  - `[body.name]` `<string>`
  - `[body.about]` `<string>`
  - `[body.motto]` `<string>`
  - `[body.theme]` `<string>`
  - `[body.avatarImageIndex]` `<number>`
  - `[body.tags]` `<string>`
  - `[body.isPublic]` `<boolean>`
  - `[body.membershipOption]` `<number>`
  - `[body.isPublicTopicAdminOnly]` `<boolean>`
  - `[body.allowChat]` `<boolean>`
  - `[body.chatSecurity]` `<number>`
  - `[body.callsign]` `<string>`
  - `[body.locale]` `<string>`
  - `[body.homepage]` `<number>`
  - `[body.enableInvitationMessagingForAdmins]` `<boolean>`
  - `[body.defaultPublicity]` `<number>`
- Returns: `<Promise>`

URL: `POST /Platform/GroupV2/{groupId}/Edit/`

Source: [GroupV2.EditGroup](https://bungie-net.github.io/#GroupV2.EditGroup)

## `editClanBanner(groupId, [body])`

Edit an existing group's clan banner. You must have suitable permissions in the group to perform this operation. All fields are required.

- `groupId` `<BigInt>` | `<number>` | `<string>` Group ID of the group to edit.
- `[body]` `<Object>` Request body object.
  - `[body.decalId]` `<number>`
  - `[body.decalColorId]` `<number>`
  - `[body.decalBackgroundColorId]` `<number>`
  - `[body.gonfalonId]` `<number>`
  - `[body.gonfalonColorId]` `<number>`
  - `[body.gonfalonDetailId]` `<number>`
  - `[body.gonfalonDetailColorId]` `<number>`
- Returns: `<Promise>`

URL: `POST /Platform/GroupV2/{groupId}/EditClanBanner/`

Source: [GroupV2.EditClanBanner](https://bungie-net.github.io/#GroupV2.EditClanBanner)

## `editFounderOptions(groupId, [body])`

Edit group options only available to a founder. You must have suitable permissions in the group to perform this operation.

- `groupId` `<BigInt>` | `<number>` | `<string>` Group ID of the group to edit.
- `[body]` `<Object>` Request body object.
  - `[body.InvitePermissionOverride]` `<boolean>` Minimum Member Level allowed to invite new members to group Always Allowed: Founder, Acting Founder True means admins have this power, false means they don't Default is false for clans, true for groups.
  - `[body.UpdateCulturePermissionOverride]` `<boolean>` Minimum Member Level allowed to update group culture Always Allowed: Founder, Acting Founder True means admins have this power, false means they don't Default is false for clans, true for groups.
  - `[body.HostGuidedGamePermissionOverride]` `<number>` Minimum Member Level allowed to host guided games Always Allowed: Founder, Acting Founder, Admin Allowed Overrides: None, Member, Beginner Default is Member for clans, None for groups, although this means nothing for groups.
  - `[body.UpdateBannerPermissionOverride]` `<boolean>` Minimum Member Level allowed to update banner Always Allowed: Founder, Acting Founder True means admins have this power, false means they don't Default is false for clans, true for groups.
  - `[body.JoinLevel]` `<number>` Level to join a member at when accepting an invite, application, or joining an open clan Default is Beginner.
- Returns: `<Promise>`

URL: `POST /Platform/GroupV2/{groupId}/EditFounderOptions/`

Source: [GroupV2.EditFounderOptions](https://bungie-net.github.io/#GroupV2.EditFounderOptions)

## `addOptionalConversation(groupId, [body])`

Add a new optional conversation/chat channel. Requires admin permissions to the group.

- `groupId` `<BigInt>` | `<number>` | `<string>` Group ID of the group to edit.
- `[body]` `<Object>` Request body object.
  - `[body.chatName]` `<string>`
  - `[body.chatSecurity]` `<number>` See [ChatSecuritySetting](./Enums.md#ChatSecuritySetting) enum.
- Returns: `<Promise>`

URL: `POST /Platform/GroupV2/{groupId}/OptionalConversations/Add/`

Source: [GroupV2.AddOptionalConversation](https://bungie-net.github.io/#GroupV2.AddOptionalConversation)

## `editOptionalConversation(groupId, conversationId, [body])`

Edit the settings of an optional conversation/chat channel. Requires admin permissions to the group.

- `groupId` `<BigInt>` | `<number>` | `<string>` Group ID of the group to edit.
- `conversationId` `<BigInt>` | `<number>` | `<string>` Conversation Id of the channel being edited.
- `[body]` `<Object>` Request body object.
  - `[body.chatEnabled]` `<boolean>`
  - `[body.chatName]` `<string>`
  - `[body.chatSecurity]` `<number>`
- Returns: `<Promise>`

URL: `POST /Platform/GroupV2/{groupId}/OptionalConversations/Edit/{conversationId}/`

Source: [GroupV2.EditOptionalConversation](https://bungie-net.github.io/#GroupV2.EditOptionalConversation)

## `getMembersOfGroup(groupId, [searchParams])`

Get the list of members in a given group.

- `groupId` `<BigInt>` | `<number>` | `<string>` The ID of the group.
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.memberType]` `<number>` See [RuntimeGroupMemberType](./Enums.md#RuntimeGroupMemberType) enum. The member levels used by all V2 Groups API. Individual group types use their own mappings in their native storage (general uses BnetDbGroupMemberType and D2 clans use ClanMemberLevel), but they are all translated to this in the runtime api. These runtime values should NEVER be stored anywhere, so the values can be changed as necessary.
  - `[searchParams.nameSearch]` `<string>` The name fragment upon which a search should be executed for members with matching display or unique names.
- Returns: `<Promise>`

URL: `GET /Platform/GroupV2/{groupId}/Members/`

Source: [GroupV2.GetMembersOfGroup](https://bungie-net.github.io/#GroupV2.GetMembersOfGroup)

## `getAdminsAndFounderOfGroup(groupId)`

Get the list of members in a given group who are of admin level or higher.

- `groupId` `<BigInt>` | `<number>` | `<string>` The ID of the group.
- Returns: `<Promise>`

URL: `GET /Platform/GroupV2/{groupId}/AdminsAndFounder/`

Source: [GroupV2.GetAdminsAndFounderOfGroup](https://bungie-net.github.io/#GroupV2.GetAdminsAndFounderOfGroup)

## `editGroupMembership(groupId, membershipType, membershipId, memberType)`

Edit the membership type of a given member. You must have suitable permissions in the group to perform this operation.

- `groupId` `<BigInt>` | `<number>` | `<string>` ID of the group to which the member belongs.
- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. Membership type of the provide membership ID.
- `membershipId` `<BigInt>` | `<number>` | `<string>` Membership ID to modify.
- `memberType` `<number>` See [RuntimeGroupMemberType](./Enums.md#RuntimeGroupMemberType) enum. New membertype for the specified member.
- Returns: `<Promise>`

URL: `POST /Platform/GroupV2/{groupId}/Members/{membershipType}/{membershipId}/SetMembershipType/{memberType}/`

Source: [GroupV2.EditGroupMembership](https://bungie-net.github.io/#GroupV2.EditGroupMembership)

## `kickMember(groupId, membershipType, membershipId)`

Kick a member from the given group, forcing them to reapply if they wish to re-join the group. You must have suitable permissions in the group to perform this operation.

- `groupId` `<BigInt>` | `<number>` | `<string>` Group ID to kick the user from.
- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. Membership type of the provided membership ID.
- `membershipId` `<BigInt>` | `<number>` | `<string>` Membership ID to kick.
- Returns: `<Promise>`

URL: `POST /Platform/GroupV2/{groupId}/Members/{membershipType}/{membershipId}/Kick/`

Source: [GroupV2.KickMember](https://bungie-net.github.io/#GroupV2.KickMember)

## `banMember(groupId, membershipType, membershipId, [body])`

Bans the requested member from the requested group for the specified period of time.

- `groupId` `<BigInt>` | `<number>` | `<string>` Group ID that has the member to ban.
- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. Membership type of the provided membership ID.
- `membershipId` `<BigInt>` | `<number>` | `<string>` Membership ID of the member to ban from the group.
- `[body]` `<Object>` Request body object.
  - `[body.comment]` `<string>`
  - `[body.length]` `<number>` See [IgnoreLength](./Enums.md#IgnoreLength) enum.
- Returns: `<Promise>`

URL: `POST /Platform/GroupV2/{groupId}/Members/{membershipType}/{membershipId}/Ban/`

Source: [GroupV2.BanMember](https://bungie-net.github.io/#GroupV2.BanMember)

## `unbanMember(groupId, membershipType, membershipId)`

Unbans the requested member, allowing them to re-apply for membership.

- `groupId` `<BigInt>` | `<number>` | `<string>`
- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. Membership type of the provided membership ID.
- `membershipId` `<BigInt>` | `<number>` | `<string>` Membership ID of the member to unban from the group
- Returns: `<Promise>`

URL: `POST /Platform/GroupV2/{groupId}/Members/{membershipType}/{membershipId}/Unban/`

Source: [GroupV2.UnbanMember](https://bungie-net.github.io/#GroupV2.UnbanMember)

## `getBannedMembersOfGroup(groupId)`

Get the list of banned members in a given group. Only accessible to group Admins and above. Not applicable to all groups. Check group features.

- `groupId` `<BigInt>` | `<number>` | `<string>` Group ID whose banned members you are fetching
- Returns: `<Promise>`

URL: `GET /Platform/GroupV2/{groupId}/Banned/`

Source: [GroupV2.GetBannedMembersOfGroup](https://bungie-net.github.io/#GroupV2.GetBannedMembersOfGroup)

## `abdicateFoundership(groupId, membershipType, founderIdNew)`

An administrative method to allow the founder of a group or clan to give up their position to another admin permanently.

- `groupId` `<BigInt>` | `<number>` | `<string>` The target group id.
- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. Membership type of the provided founderIdNew.
- `founderIdNew` `<BigInt>` | `<number>` | `<string>` The new founder for this group. Must already be a group admin.
- Returns: `<Promise>`

URL: `POST /Platform/GroupV2/{groupId}/Admin/AbdicateFoundership/{membershipType}/{founderIdNew}/`

Source: [GroupV2.AbdicateFoundership](https://bungie-net.github.io/#GroupV2.AbdicateFoundership)

## `getPendingMemberships(groupId)`

Get the list of users who are awaiting a decision on their application to join a given group. Modified to include application info.

- `groupId` `<BigInt>` | `<number>` | `<string>` ID of the group.
- Returns: `<Promise>`

URL: `GET /Platform/GroupV2/{groupId}/Members/Pending/`

Source: [GroupV2.GetPendingMemberships](https://bungie-net.github.io/#GroupV2.GetPendingMemberships)

## `getInvitedIndividuals(groupId)`

Get the list of users who have been invited into the group.

- `groupId` `<BigInt>` | `<number>` | `<string>` ID of the group.
- Returns: `<Promise>`

URL: `GET /Platform/GroupV2/{groupId}/Members/InvitedIndividuals/`

Source: [GroupV2.GetInvitedIndividuals](https://bungie-net.github.io/#GroupV2.GetInvitedIndividuals)

## `approveAllPending(groupId, [body])`

Approve all of the pending users for the given group.

- `groupId` `<BigInt>` | `<number>` | `<string>` ID of the group.
- `[body]` `<Object>` Request body object.
  - `[body.message]` `<string>`
- Returns: `<Promise>`

URL: `POST /Platform/GroupV2/{groupId}/Members/ApproveAll/`

Source: [GroupV2.ApproveAllPending](https://bungie-net.github.io/#GroupV2.ApproveAllPending)

## `denyAllPending(groupId, [body])`

Deny all of the pending users for the given group.

- `groupId` `<BigInt>` | `<number>` | `<string>` ID of the group.
- `[body]` `<Object>` Request body object.
  - `[body.message]` `<string>`
- Returns: `<Promise>`

URL: `POST /Platform/GroupV2/{groupId}/Members/DenyAll/`

Source: [GroupV2.DenyAllPending](https://bungie-net.github.io/#GroupV2.DenyAllPending)

## `approvePendingForList(groupId, [body])`

Approve all of the pending users for the given group.

- `groupId` `<BigInt>` | `<number>` | `<string>` ID of the group.
- `[body]` `<Object>` Request body object.
  - `[body.memberships]` `<Object[]>`
    - `[body.memberships[].membershipType]` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. Type of the membership. Not necessarily the native type.
    - `[body.memberships[].membershipId]` `<number>` Membership ID as they user is known in the Accounts service
    - `[body.memberships[].displayName]` `<string>` Display Name the player has chosen for themselves. The display name is optional when the data type is used as input to a platform API.
    - `[body.memberships[].bungieGlobalDisplayName]` `<string>` The bungie global display name, if set.
    - `[body.memberships[].bungieGlobalDisplayNameCode]` `<number>` The bungie global display name code, if set.
  - `[body.message]` `<string>`
- Returns: `<Promise>`

URL: `POST /Platform/GroupV2/{groupId}/Members/ApproveList/`

Source: [GroupV2.ApprovePendingForList](https://bungie-net.github.io/#GroupV2.ApprovePendingForList)

## `approvePending(groupId, membershipType, membershipId, [body])`

Approve the given membershipId to join the group/clan as long as they have applied.

- `groupId` `<BigInt>` | `<number>` | `<string>` ID of the group.
- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. Membership type of the supplied membership ID.
- `membershipId` `<BigInt>` | `<number>` | `<string>` The membership id being approved.
- `[body]` `<Object>` Request body object.
  - `[body.message]` `<string>`
- Returns: `<Promise>`

URL: `POST /Platform/GroupV2/{groupId}/Members/Approve/{membershipType}/{membershipId}/`

Source: [GroupV2.ApprovePending](https://bungie-net.github.io/#GroupV2.ApprovePending)

## `denyPendingForList(groupId, [body])`

Deny all of the pending users for the given group that match the passed-in .

- `groupId` `<BigInt>` | `<number>` | `<string>` ID of the group.
- `[body]` `<Object>` Request body object.
  - `[body.memberships]` `<Object[]>`
    - `[body.memberships[].membershipType]` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. Type of the membership. Not necessarily the native type.
    - `[body.memberships[].membershipId]` `<number>` Membership ID as they user is known in the Accounts service
    - `[body.memberships[].displayName]` `<string>` Display Name the player has chosen for themselves. The display name is optional when the data type is used as input to a platform API.
    - `[body.memberships[].bungieGlobalDisplayName]` `<string>` The bungie global display name, if set.
    - `[body.memberships[].bungieGlobalDisplayNameCode]` `<number>` The bungie global display name code, if set.
  - `[body.message]` `<string>`
- Returns: `<Promise>`

URL: `POST /Platform/GroupV2/{groupId}/Members/DenyList/`

Source: [GroupV2.DenyPendingForList](https://bungie-net.github.io/#GroupV2.DenyPendingForList)

## `getGroupsForMember(membershipType, membershipId, filter, groupType)`

Get information about the groups that a given member has joined.

- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. Membership type of the supplied membership ID.
- `membershipId` `<BigInt>` | `<number>` | `<string>` Membership ID to for which to find founded groups.
- `filter` `<number>` See [GroupsForMemberFilter](./Enums.md#GroupsForMemberFilter) enum. Filter apply to list of joined groups.
- `groupType` `<number>` See [GroupType](./Enums.md#GroupType) enum. Type of group the supplied member founded.
- Returns: `<Promise>`

URL: `GET /Platform/GroupV2/User/{membershipType}/{membershipId}/{filter}/{groupType}/`

Source: [GroupV2.GetGroupsForMember](https://bungie-net.github.io/#GroupV2.GetGroupsForMember)

## `recoverGroupForFounder(membershipType, membershipId, groupType)`

Allows a founder to manually recover a group they can see in game but not on bungie.net

- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. Membership type of the supplied membership ID.
- `membershipId` `<BigInt>` | `<number>` | `<string>` Membership ID to for which to find founded groups.
- `groupType` `<number>` See [GroupType](./Enums.md#GroupType) enum. Type of group the supplied member founded.
- Returns: `<Promise>`

URL: `GET /Platform/GroupV2/Recover/{membershipType}/{membershipId}/{groupType}/`

Source: [GroupV2.RecoverGroupForFounder](https://bungie-net.github.io/#GroupV2.RecoverGroupForFounder)

## `getPotentialGroupsForMember(membershipType, membershipId, filter, groupType)`

Get information about the groups that a given member has applied to or been invited to.

- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. Membership type of the supplied membership ID.
- `membershipId` `<BigInt>` | `<number>` | `<string>` Membership ID to for which to find applied groups.
- `filter` `<number>` See [GroupPotentialMemberStatus](./Enums.md#GroupPotentialMemberStatus) enum. Filter apply to list of potential joined groups.
- `groupType` `<number>` See [GroupType](./Enums.md#GroupType) enum. Type of group the supplied member applied.
- Returns: `<Promise>`

URL: `GET /Platform/GroupV2/User/Potential/{membershipType}/{membershipId}/{filter}/{groupType}/`

Source: [GroupV2.GetPotentialGroupsForMember](https://bungie-net.github.io/#GroupV2.GetPotentialGroupsForMember)

## `individualGroupInvite(groupId, membershipType, membershipId, [body])`

Invite a user to join this group.

- `groupId` `<BigInt>` | `<number>` | `<string>` ID of the group you would like to join.
- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. MembershipType of the account being invited.
- `membershipId` `<BigInt>` | `<number>` | `<string>` Membership id of the account being invited.
- `[body]` `<Object>` Request body object.
  - `[body.message]` `<string>`
- Returns: `<Promise>`

URL: `POST /Platform/GroupV2/{groupId}/Members/IndividualInvite/{membershipType}/{membershipId}/`

Source: [GroupV2.IndividualGroupInvite](https://bungie-net.github.io/#GroupV2.IndividualGroupInvite)

## `individualGroupInviteCancel(groupId, membershipType, membershipId)`

Cancels a pending invitation to join a group.

- `groupId` `<BigInt>` | `<number>` | `<string>` ID of the group you would like to join.
- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. MembershipType of the account being cancelled.
- `membershipId` `<BigInt>` | `<number>` | `<string>` Membership id of the account being cancelled.
- Returns: `<Promise>`

URL: `POST /Platform/GroupV2/{groupId}/Members/IndividualInviteCancel/{membershipType}/{membershipId}/`

Source: [GroupV2.IndividualGroupInviteCancel](https://bungie-net.github.io/#GroupV2.IndividualGroupInviteCancel)

