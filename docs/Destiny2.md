# Destiny2

These methods can be accessed from `destiny2` property of a `BungieApi` instance.

```javascript
import { BungieApi } from 'bungie.net'

// Create the root API instance
const api = new BungieApi(options)

// Access the method
await api.destiny2.getDestinyManifest()
```

## `getDestinyManifest()`

Returns the current version of the manifest as a json object.

- Returns: `<Promise>`

URL: `GET /Platform/Destiny2/Manifest/`

Source: [Destiny2.GetDestinyManifest](https://bungie-net.github.io/#Destiny2.GetDestinyManifest)

## `getDestinyEntityDefinition(entityType, hashIdentifier)`

Returns the static definition of an entity of the given Type and hash identifier. Examine the API Documentation for the Type Names of entities that have their own definitions. Note that the return type will always *inherit from* DestinyDefinition, but the specific type returned will be the requested entity type if it can be found. Please don't use this as a chatty alternative to the Manifest database if you require large sets of data, but for simple and one-off accesses this should be handy.

- `entityType` `<string>` The type of entity for whom you would like results. These correspond to the entity's definition contract name. For instance, if you are looking for items, this property should be 'DestinyInventoryItemDefinition'. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is tentatively in final form, but there may be bugs that prevent desirable operation.
- `hashIdentifier` `<number>` The hash identifier for the specific Entity you want returned.
- Returns: `<Promise>`

URL: `GET /Platform/Destiny2/Manifest/{entityType}/{hashIdentifier}/`

Source: [Destiny2.GetDestinyEntityDefinition](https://bungie-net.github.io/#Destiny2.GetDestinyEntityDefinition)

## `searchDestinyPlayerByBungieName(membershipType, [body])`

Returns a list of Destiny memberships given a global Bungie Display Name. This method will hide overridden memberships due to cross save.

- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. A valid non-BungieNet membership type, or All. Indicates which memberships to return. You probably want this set to All.
- `[body]` `<Object>` Request body object.
  - `[body.displayName]` `<string>`
  - `[body.displayNameCode]` `<number>`
- Returns: `<Promise>`

URL: `POST /Platform/Destiny2/SearchDestinyPlayerByBungieName/{membershipType}/`

Source: [Destiny2.SearchDestinyPlayerByBungieName](https://bungie-net.github.io/#Destiny2.SearchDestinyPlayerByBungieName)

## `getLinkedProfiles(membershipType, membershipId, [searchParams])`

Returns a summary information about all profiles linked to the requesting membership type/membership ID that have valid Destiny information. The passed-in Membership Type/Membership ID may be a Bungie.Net membership or a Destiny membership. It only returns the minimal amount of data to begin making more substantive requests, but will hopefully serve as a useful alternative to UserServices for people who just care about Destiny data. Note that it will only return linked accounts whose linkages you are allowed to view.

- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. The type for the membership whose linked Destiny accounts you want returned.
- `membershipId` `<BigInt>` | `<number>` | `<string>` The ID of the membership whose linked Destiny accounts you want returned. Make sure your membership ID matches its Membership Type: don't pass us a PSN membership ID and the XBox membership type, it's not going to work!
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.getAllMemberships]` `<boolean>` (optional) if set to 'true', all memberships regardless of whether they're obscured by overrides will be returned. Normal privacy restrictions on account linking will still apply no matter what.
- Returns: `<Promise>`

URL: `GET /Platform/Destiny2/{membershipType}/Profile/{membershipId}/LinkedProfiles/`

Source: [Destiny2.GetLinkedProfiles](https://bungie-net.github.io/#Destiny2.GetLinkedProfiles)

## `getProfile(membershipType, destinyMembershipId, [searchParams])`

Returns Destiny Profile information for the supplied membership.

- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. A valid non-BungieNet membership type.
- `destinyMembershipId` `<BigInt>` | `<number>` | `<string>` Destiny membership ID.
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.components]` `<number[]>` A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
- Returns: `<Promise>`

URL: `GET /Platform/Destiny2/{membershipType}/Profile/{destinyMembershipId}/`

Source: [Destiny2.GetProfile](https://bungie-net.github.io/#Destiny2.GetProfile)

## `getCharacter(membershipType, destinyMembershipId, characterId, [searchParams])`

Returns character information for the supplied character.

- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. A valid non-BungieNet membership type.
- `destinyMembershipId` `<BigInt>` | `<number>` | `<string>` Destiny membership ID.
- `characterId` `<BigInt>` | `<number>` | `<string>` ID of the character.
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.components]` `<number[]>` A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
- Returns: `<Promise>`

URL: `GET /Platform/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/`

Source: [Destiny2.GetCharacter](https://bungie-net.github.io/#Destiny2.GetCharacter)

## `getClanWeeklyRewardState(groupId)`

Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.

- `groupId` `<BigInt>` | `<number>` | `<string>` A valid group id of clan.
- Returns: `<Promise>`

URL: `GET /Platform/Destiny2/Clan/{groupId}/WeeklyRewardState/`

Source: [Destiny2.GetClanWeeklyRewardState](https://bungie-net.github.io/#Destiny2.GetClanWeeklyRewardState)

## `getClanBannerSource()`

Returns the dictionary of values for the Clan Banner

- Returns: `<Promise>`

URL: `GET /Platform/Destiny2/Clan/ClanBannerDictionary/`

Source: [Destiny2.GetClanBannerSource](https://bungie-net.github.io/#Destiny2.GetClanBannerSource)

## `getItem(membershipType, destinyMembershipId, itemInstanceId, [searchParams])`

Retrieve the details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId. Non-instanced items, such as materials, have no useful instance-specific details and thus are not queryable here.

- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. A valid non-BungieNet membership type.
- `destinyMembershipId` `<BigInt>` | `<number>` | `<string>` The membership ID of the destiny profile.
- `itemInstanceId` `<BigInt>` | `<number>` | `<string>` The Instance ID of the destiny item.
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.components]` `<number[]>` A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
- Returns: `<Promise>`

URL: `GET /Platform/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Item/{itemInstanceId}/`

Source: [Destiny2.GetItem](https://bungie-net.github.io/#Destiny2.GetItem)

## `getVendors(membershipType, destinyMembershipId, characterId, [searchParams])`

Get currently available vendors from the list of vendors that can possibly have rotating inventory. Note that this does not include things like preview vendors and vendors-as-kiosks, neither of whom have rotating/dynamic inventories. Use their definitions as-is for those.

- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. A valid non-BungieNet membership type.
- `destinyMembershipId` `<BigInt>` | `<number>` | `<string>` Destiny membership ID of another user. You may be denied.
- `characterId` `<BigInt>` | `<number>` | `<string>` The Destiny Character ID of the character for whom we're getting vendor info.
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.components]` `<number[]>` A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
  - `[searchParams.filter]` `<number>` See [DestinyVendorFilter](./Enums.md#DestinyVendorFilter) enum. Indicates the type of filter to apply to Vendor results.
- Returns: `<Promise>`

URL: `GET /Platform/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/Vendors/`

Source: [Destiny2.GetVendors](https://bungie-net.github.io/#Destiny2.GetVendors)

## `getVendor(membershipType, destinyMembershipId, characterId, vendorHash, [searchParams])`

Get the details of a specific Vendor.

- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. A valid non-BungieNet membership type.
- `destinyMembershipId` `<BigInt>` | `<number>` | `<string>` Destiny membership ID of another user. You may be denied.
- `characterId` `<BigInt>` | `<number>` | `<string>` The Destiny Character ID of the character for whom we're getting vendor info.
- `vendorHash` `<number>` The Hash identifier of the Vendor to be returned.
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.components]` `<number[]>` A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
- Returns: `<Promise>`

URL: `GET /Platform/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/Vendors/{vendorHash}/`

Source: [Destiny2.GetVendor](https://bungie-net.github.io/#Destiny2.GetVendor)

## `getCollectibleNodeDetails(membershipType, destinyMembershipId, characterId, collectiblePresentationNodeHash, [searchParams])`

Given a Presentation Node that has Collectibles as direct descendants, this will return item details about those descendants in the context of the requesting character.

- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. A valid non-BungieNet membership type.
- `destinyMembershipId` `<BigInt>` | `<number>` | `<string>` Destiny membership ID of another user. You may be denied.
- `characterId` `<BigInt>` | `<number>` | `<string>` The Destiny Character ID of the character for whom we're getting collectible detail info.
- `collectiblePresentationNodeHash` `<number>` The hash identifier of the Presentation Node for whom we should return collectible details. Details will only be returned for collectibles that are direct descendants of this node.
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.components]` `<number[]>` A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
- Returns: `<Promise>`

URL: `GET /Platform/Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/Collectibles/{collectiblePresentationNodeHash}/`

Source: [Destiny2.GetCollectibleNodeDetails](https://bungie-net.github.io/#Destiny2.GetCollectibleNodeDetails)

## `transferItem([body])`

Transfer an item to/from your vault. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item. itshappening.gif

- `[body]` `<Object>` Request body object.
  - `[body.itemReferenceHash]` `<number>`
  - `[body.stackSize]` `<number>`
  - `[body.transferToVault]` `<boolean>`
  - `[body.itemId]` `<number>` The instance ID of the item for this action request.
  - `[body.characterId]` `<number>`
  - `[body.membershipType]` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum.
- Returns: `<Promise>`

URL: `POST /Platform/Destiny2/Actions/Items/TransferItem/`

Source: [Destiny2.TransferItem](https://bungie-net.github.io/#Destiny2.TransferItem)

## `pullFromPostmaster([body])`

Extract an item from the Postmaster, with whatever implications that may entail. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item.

- `[body]` `<Object>` Request body object.
  - `[body.itemReferenceHash]` `<number>`
  - `[body.stackSize]` `<number>`
  - `[body.itemId]` `<number>` The instance ID of the item for this action request.
  - `[body.characterId]` `<number>`
  - `[body.membershipType]` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum.
- Returns: `<Promise>`

URL: `POST /Platform/Destiny2/Actions/Items/PullFromPostmaster/`

Source: [Destiny2.PullFromPostmaster](https://bungie-net.github.io/#Destiny2.PullFromPostmaster)

## `equipItem([body])`

Equip an item. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.

- `[body]` `<Object>` Request body object.
  - `[body.itemId]` `<number>` The instance ID of the item for this action request.
  - `[body.characterId]` `<number>`
  - `[body.membershipType]` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum.
- Returns: `<Promise>`

URL: `POST /Platform/Destiny2/Actions/Items/EquipItem/`

Source: [Destiny2.EquipItem](https://bungie-net.github.io/#Destiny2.EquipItem)

## `equipItems([body])`

Equip a list of items by itemInstanceIds. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Any items not found on your character will be ignored.

- `[body]` `<Object>` Request body object.
  - `[body.itemIds]` `<number[]>`
  - `[body.characterId]` `<number>`
  - `[body.membershipType]` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum.
- Returns: `<Promise>`

URL: `POST /Platform/Destiny2/Actions/Items/EquipItems/`

Source: [Destiny2.EquipItems](https://bungie-net.github.io/#Destiny2.EquipItems)

## `setItemLockState([body])`

Set the Lock State for an instanced item. You must have a valid Destiny Account.

- `[body]` `<Object>` Request body object.
  - `[body.state]` `<boolean>`
  - `[body.itemId]` `<number>` The instance ID of the item for this action request.
  - `[body.characterId]` `<number>`
  - `[body.membershipType]` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum.
- Returns: `<Promise>`

URL: `POST /Platform/Destiny2/Actions/Items/SetLockState/`

Source: [Destiny2.SetItemLockState](https://bungie-net.github.io/#Destiny2.SetItemLockState)

## `setQuestTrackedState([body])`

Set the Tracking State for an instanced item, if that item is a Quest or Bounty. You must have a valid Destiny Account. Yeah, it's an item.

- `[body]` `<Object>` Request body object.
  - `[body.state]` `<boolean>`
  - `[body.itemId]` `<number>` The instance ID of the item for this action request.
  - `[body.characterId]` `<number>`
  - `[body.membershipType]` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum.
- Returns: `<Promise>`

URL: `POST /Platform/Destiny2/Actions/Items/SetTrackedState/`

Source: [Destiny2.SetQuestTrackedState](https://bungie-net.github.io/#Destiny2.SetQuestTrackedState)

## `getPostGameCarnageReport(activityId)`

Gets the available post game carnage report for the activity ID.

- `activityId` `<BigInt>` | `<number>` | `<string>` The ID of the activity whose PGCR is requested.
- Returns: `<Promise>`

URL: `GET /Platform/Destiny2/Stats/PostGameCarnageReport/{activityId}/`

Source: [Destiny2.GetPostGameCarnageReport](https://bungie-net.github.io/#Destiny2.GetPostGameCarnageReport)

## `reportOffensivePostGameCarnageReportPlayer(activityId, [body])`

Report a player that you met in an activity that was engaging in ToS-violating activities. Both you and the offending player must have played in the activityId passed in. Please use this judiciously and only when you have strong suspicions of violation, pretty please.

- `activityId` `<BigInt>` | `<number>` | `<string>` The ID of the activity where you ran into the brigand that you're reporting.
- `[body]` `<Object>` Request body object.
  - `[body.reasonCategoryHashes]` `<number[]>` So you've decided to report someone instead of cursing them and their descendants. Well, okay then. This is the category or categorie(s) of infractions for which you are reporting the user. These are hash identifiers that map to DestinyReportReasonCategoryDefinition entries.
  - `[body.reasonHashes]` `<number[]>` If applicable, provide a more specific reason(s) within the general category of problems provided by the reasonHash. This is also an identifier for a reason. All reasonHashes provided must be children of at least one the reasonCategoryHashes provided.
  - `[body.offendingCharacterId]` `<number>` Within the PGCR provided when calling the Reporting endpoint, this should be the character ID of the user that you thought was violating terms of use. They must exist in the PGCR provided.
- Returns: `<Promise>`

URL: `POST /Platform/Destiny2/Stats/PostGameCarnageReport/{activityId}/Report/`

Source: [Destiny2.ReportOffensivePostGameCarnageReportPlayer](https://bungie-net.github.io/#Destiny2.ReportOffensivePostGameCarnageReportPlayer)

## `getHistoricalStatsDefinition()`

Gets historical stats definitions.

- Returns: `<Promise>`

URL: `GET /Platform/Destiny2/Stats/Definition/`

Source: [Destiny2.GetHistoricalStatsDefinition](https://bungie-net.github.io/#Destiny2.GetHistoricalStatsDefinition)

## `searchDestinyEntities(type, searchTerm, [searchParams])`

Gets a page list of Destiny items.

- `type` `<string>` The type of entity for whom you would like results. These correspond to the entity's definition contract name. For instance, if you are looking for items, this property should be 'DestinyInventoryItemDefinition'.
- `searchTerm` `<string>` The string to use when searching for Destiny entities.
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.page]` `<number>` Page number to return, starting with 0.
- Returns: `<Promise>`

URL: `GET /Platform/Destiny2/Armory/Search/{type}/{searchTerm}/`

Source: [Destiny2.SearchDestinyEntities](https://bungie-net.github.io/#Destiny2.SearchDestinyEntities)

## `getHistoricalStats(membershipType, destinyMembershipId, characterId, [searchParams])`

Gets historical stats for indicated character.

- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. A valid non-BungieNet membership type.
- `destinyMembershipId` `<BigInt>` | `<number>` | `<string>` The Destiny membershipId of the user to retrieve.
- `characterId` `<BigInt>` | `<number>` | `<string>` The id of the character to retrieve. You can omit this character ID or set it to 0 to get aggregate stats across all characters.
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.dayend]` `<string>` Last day to return when daily stats are requested. Use the format YYYY-MM-DD. Currently, we cannot allow more than 31 days of daily data to be requested in a single request.
  - `[searchParams.daystart]` `<string>` First day to return when daily stats are requested. Use the format YYYY-MM-DD. Currently, we cannot allow more than 31 days of daily data to be requested in a single request.
  - `[searchParams.groups]` `<number[]>` Group of stats to include, otherwise only general stats are returned. Comma separated list is allowed. Values: General, Weapons, Medals
  - `[searchParams.modes]` `<number[]>` Game modes to return. See the documentation for DestinyActivityModeType for valid values, and pass in string representation, comma delimited.
  - `[searchParams.periodType]` `<number>` See [PeriodType](./Enums.md#PeriodType) enum. Indicates a specific period type to return. Optional. May be: Daily, AllTime, or Activity
- Returns: `<Promise>`

URL: `GET /Platform/Destiny2/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/`

Source: [Destiny2.GetHistoricalStats](https://bungie-net.github.io/#Destiny2.GetHistoricalStats)

## `getHistoricalStatsForAccount(membershipType, destinyMembershipId, [searchParams])`

Gets aggregate historical stats organized around each character for a given account.

- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. A valid non-BungieNet membership type.
- `destinyMembershipId` `<BigInt>` | `<number>` | `<string>` The Destiny membershipId of the user to retrieve.
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.groups]` `<number[]>` Groups of stats to include, otherwise only general stats are returned. Comma separated list is allowed. Values: General, Weapons, Medals.
- Returns: `<Promise>`

URL: `GET /Platform/Destiny2/{membershipType}/Account/{destinyMembershipId}/Stats/`

Source: [Destiny2.GetHistoricalStatsForAccount](https://bungie-net.github.io/#Destiny2.GetHistoricalStatsForAccount)

## `getActivityHistory(membershipType, destinyMembershipId, characterId, [searchParams])`

Gets activity history stats for indicated character.

- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. A valid non-BungieNet membership type.
- `destinyMembershipId` `<BigInt>` | `<number>` | `<string>` The Destiny membershipId of the user to retrieve.
- `characterId` `<BigInt>` | `<number>` | `<string>` The id of the character to retrieve.
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.count]` `<number>` Number of rows to return
  - `[searchParams.mode]` `<number>` See [DestinyActivityModeType](./Enums.md#DestinyActivityModeType) enum. For historical reasons, this list will have both D1 and D2-relevant Activity Modes in it. Please don't take this to mean that some D1-only feature is coming back!
  - `[searchParams.page]` `<number>` Page number to return, starting with 0.
- Returns: `<Promise>`

URL: `GET /Platform/Destiny2/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/Activities/`

Source: [Destiny2.GetActivityHistory](https://bungie-net.github.io/#Destiny2.GetActivityHistory)

## `getUniqueWeaponHistory(membershipType, destinyMembershipId, characterId)`

Gets details about unique weapon usage, including all exotic weapons.

- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. A valid non-BungieNet membership type.
- `destinyMembershipId` `<BigInt>` | `<number>` | `<string>` The Destiny membershipId of the user to retrieve.
- `characterId` `<BigInt>` | `<number>` | `<string>` The id of the character to retrieve.
- Returns: `<Promise>`

URL: `GET /Platform/Destiny2/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/UniqueWeapons/`

Source: [Destiny2.GetUniqueWeaponHistory](https://bungie-net.github.io/#Destiny2.GetUniqueWeaponHistory)

## `getDestinyAggregateActivityStats(membershipType, destinyMembershipId, characterId)`

Gets all activities the character has participated in together with aggregate statistics for those activities.

- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. A valid non-BungieNet membership type.
- `destinyMembershipId` `<BigInt>` | `<number>` | `<string>` The Destiny membershipId of the user to retrieve.
- `characterId` `<BigInt>` | `<number>` | `<string>` The specific character whose activities should be returned.
- Returns: `<Promise>`

URL: `GET /Platform/Destiny2/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/AggregateActivityStats/`

Source: [Destiny2.GetDestinyAggregateActivityStats](https://bungie-net.github.io/#Destiny2.GetDestinyAggregateActivityStats)

## `getPublicMilestoneContent(milestoneHash)`

Gets custom localized content for the milestone of the given hash, if it exists.

- `milestoneHash` `<number>` The identifier for the milestone to be returned.
- Returns: `<Promise>`

URL: `GET /Platform/Destiny2/Milestones/{milestoneHash}/Content/`

Source: [Destiny2.GetPublicMilestoneContent](https://bungie-net.github.io/#Destiny2.GetPublicMilestoneContent)

## `getPublicMilestones()`

Gets public information about currently available Milestones.

- Returns: `<Promise>`

URL: `GET /Platform/Destiny2/Milestones/`

Source: [Destiny2.GetPublicMilestones](https://bungie-net.github.io/#Destiny2.GetPublicMilestones)

## `awaInitializeRequest([body])`

Initialize a request to perform an advanced write action.

- `[body]` `<Object>` Request body object.
  - `[body.type]` `<number>` See [AwaType](./Enums.md#AwaType) enum. Type of advanced write action.
  - `[body.affectedItemId]` `<number>` Item instance ID the action shall be applied to. This is optional for all but a new AwaType values. Rule of thumb is to provide the item instance ID if one is available.
  - `[body.membershipType]` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. Destiny membership type of the account to modify.
  - `[body.characterId]` `<number>` Destiny character ID, if applicable, that will be affected by the action.
- Returns: `<Promise>`

URL: `POST /Platform/Destiny2/Awa/Initialize/`

Source: [Destiny2.AwaInitializeRequest](https://bungie-net.github.io/#Destiny2.AwaInitializeRequest)

## `awaProvideAuthorizationResult([body])`

Provide the result of the user interaction. Called by the Bungie Destiny App to approve or reject a request.

- `[body]` `<Object>` Request body object.
  - `[body.selection]` `<number>` See [AwaUserSelection](./Enums.md#AwaUserSelection) enum. Indication of the selection the user has made (Approving or rejecting the action)
  - `[body.correlationId]` `<string>` Correlation ID of the request
  - `[body.nonce]` `<string[]>` Secret nonce received via the PUSH notification.
- Returns: `<Promise>`

URL: `POST /Platform/Destiny2/Awa/AwaProvideAuthorizationResult/`

Source: [Destiny2.AwaProvideAuthorizationResult](https://bungie-net.github.io/#Destiny2.AwaProvideAuthorizationResult)

## `awaGetActionToken(correlationId)`

Returns the action token if user approves the request.

- `correlationId` `<string>` The identifier for the advanced write action request.
- Returns: `<Promise>`

URL: `GET /Platform/Destiny2/Awa/GetActionToken/{correlationId}/`

Source: [Destiny2.AwaGetActionToken](https://bungie-net.github.io/#Destiny2.AwaGetActionToken)

