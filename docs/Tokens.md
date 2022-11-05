# Tokens

These methods can be accessed from `tokens` property of a `BungieApi` instance.

```javascript
import { BungieApi } from 'bungie.net'

// Create the root API instance
const api = new BungieApi(options)

// Access the method
await api.tokens.forceDropsRepair()
```

## `forceDropsRepair()`

Twitch Drops self-repair function - scans twitch for drops not marked as fulfilled and resyncs them.

- Returns: `<Promise>`

URL: `POST /Platform/Tokens/Partner/ForceDropsRepair/`

Source: [Tokens.ForceDropsRepair](https://bungie-net.github.io/#Tokens.ForceDropsRepair)

## `claimPartnerOffer([body])`

Claim a partner offer as the authenticated user.

- `[body]` `<Object>` Request body object.
  - `[body.PartnerOfferId]` `<string>`
  - `[body.BungieNetMembershipId]` `<number>`
  - `[body.TransactionId]` `<string>`
- Returns: `<Promise>`

URL: `POST /Platform/Tokens/Partner/ClaimOffer/`

Source: [Tokens.ClaimPartnerOffer](https://bungie-net.github.io/#Tokens.ClaimPartnerOffer)

## `applyMissingPartnerOffersWithoutClaim(partnerApplicationId, targetBnetMembershipId)`

Apply a partner offer to the targeted user. This endpoint does not claim a new offer, but any already claimed offers will be applied to the game if not already.

- `partnerApplicationId` `<number>` The partner application identifier.
- `targetBnetMembershipId` `<number>` The bungie.net user to apply missing offers to. If not self, elevated permissions are required.
- Returns: `<Promise>`

URL: `POST /Platform/Tokens/Partner/ApplyMissingOffers/{partnerApplicationId}/{targetBnetMembershipId}/`

Source: [Tokens.ApplyMissingPartnerOffersWithoutClaim](https://bungie-net.github.io/#Tokens.ApplyMissingPartnerOffersWithoutClaim)

## `getPartnerOfferSkuHistory(partnerApplicationId, targetBnetMembershipId)`

Returns the partner sku and offer history of the targeted user. Elevated permissions are required to see users that are not yourself.

- `partnerApplicationId` `<number>` The partner application identifier.
- `targetBnetMembershipId` `<number>` The bungie.net user to apply missing offers to. If not self, elevated permissions are required.
- Returns: `<Promise>`

URL: `GET /Platform/Tokens/Partner/History/{partnerApplicationId}/{targetBnetMembershipId}/`

Source: [Tokens.GetPartnerOfferSkuHistory](https://bungie-net.github.io/#Tokens.GetPartnerOfferSkuHistory)

## `getPartnerRewardHistory(targetBnetMembershipId, partnerApplicationId)`

Returns the partner rewards history of the targeted user, both partner offers and Twitch drops.

- `targetBnetMembershipId` `<number>` The bungie.net user to return reward history for.
- `partnerApplicationId` `<number>` The partner application identifier.
- Returns: `<Promise>`

URL: `GET /Platform/Tokens/Partner/History/{targetBnetMembershipId}/Application/{partnerApplicationId}/`

Source: [Tokens.GetPartnerRewardHistory](https://bungie-net.github.io/#Tokens.GetPartnerRewardHistory)

## `getBungieRewardsForUser(membershipId)`

Returns the bungie rewards for the targeted user.

- `membershipId` `<number>` bungie.net user membershipId for requested user rewards. If not self, elevated permissions are required.
- Returns: `<Promise>`

URL: `GET /Platform/Tokens/Rewards/GetRewardsForUser/{membershipId}/`

Source: [Tokens.GetBungieRewardsForUser](https://bungie-net.github.io/#Tokens.GetBungieRewardsForUser)

## `getBungieRewardsForPlatformUser(membershipId, membershipType)`

Returns the bungie rewards for the targeted user when a platform membership Id and Type are used.

- `membershipId` `<number>` users platform membershipId for requested user rewards. If not self, elevated permissions are required.
- `membershipType` `<number>` See [BungieMembershipType](./Enums.md#BungieMembershipType) enum. The target Destiny 2 membership type.
- Returns: `<Promise>`

URL: `GET /Platform/Tokens/Rewards/GetRewardsForPlatformUser/{membershipId}/{membershipType}/`

Source: [Tokens.GetBungieRewardsForPlatformUser](https://bungie-net.github.io/#Tokens.GetBungieRewardsForPlatformUser)

## `getBungieRewardsList()`

Returns a list of the current bungie rewards

- Returns: `<Promise>`

URL: `GET /Platform/Tokens/Rewards/BungieRewards/`

Source: [Tokens.GetBungieRewardsList](https://bungie-net.github.io/#Tokens.GetBungieRewardsList)

