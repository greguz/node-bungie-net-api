# Tokens

## forceDropsRepair([body])

Twitch Drops self-repair function - scans twitch for drops not marked as fulfilled and resyncs them.

- `[body]` `<*>` Request body object.
- Returns: `<Promise>`

URL: `POST /Tokens/Partner/ForceDropsRepair/`

Source: [Tokens.ForceDropsRepair](https://bungie-net.github.io/#Tokens.ForceDropsRepair)

## claimPartnerOffer([body])

Claim a partner offer as the authenticated user.

- `[body]` `<*>` Request body object.
- Returns: `<Promise>`

URL: `POST /Tokens/Partner/ClaimOffer/`

Source: [Tokens.ClaimPartnerOffer](https://bungie-net.github.io/#Tokens.ClaimPartnerOffer)

## applyMissingPartnerOffersWithoutClaim(partnerApplicationId, targetBnetMembershipId, [body])

Apply a partner offer to the targeted user. This endpoint does not claim a new offer, but any already claimed offers will be applied to the game if not already.

- `partnerApplicationId` `<*>` The partner application identifier.
- `targetBnetMembershipId` `<*>` The bungie.net user to apply missing offers to. If not self, elevated permissions are required.
- `[body]` `<*>` Request body object.
- Returns: `<Promise>`

URL: `POST /Tokens/Partner/ApplyMissingOffers/{partnerApplicationId}/{targetBnetMembershipId}/`

Source: [Tokens.ApplyMissingPartnerOffersWithoutClaim](https://bungie-net.github.io/#Tokens.ApplyMissingPartnerOffersWithoutClaim)

## getPartnerOfferSkuHistory(partnerApplicationId, targetBnetMembershipId)

Returns the partner sku and offer history of the targeted user. Elevated permissions are required to see users that are not yourself.

- `partnerApplicationId` `<*>` The partner application identifier.
- `targetBnetMembershipId` `<*>` The bungie.net user to apply missing offers to. If not self, elevated permissions are required.
- Returns: `<Promise>`

URL: `GET /Tokens/Partner/History/{partnerApplicationId}/{targetBnetMembershipId}/`

Source: [Tokens.GetPartnerOfferSkuHistory](https://bungie-net.github.io/#Tokens.GetPartnerOfferSkuHistory)

## getPartnerRewardHistory(targetBnetMembershipId, partnerApplicationId)

Returns the partner rewards history of the targeted user, both partner offers and Twitch drops.

- `targetBnetMembershipId` `<*>` The bungie.net user to return reward history for.
- `partnerApplicationId` `<*>` The partner application identifier.
- Returns: `<Promise>`

URL: `GET /Tokens/Partner/History/{targetBnetMembershipId}/Application/{partnerApplicationId}/`

Source: [Tokens.GetPartnerRewardHistory](https://bungie-net.github.io/#Tokens.GetPartnerRewardHistory)

## getBungieRewardsForUser(membershipId)

Returns the bungie rewards for the targeted user.

- `membershipId` `<*>` bungie.net user membershipId for requested user rewards. If not self, elevated permissions are required.
- Returns: `<Promise>`

URL: `GET /Tokens/Rewards/GetRewardsForUser/{membershipId}/`

Source: [Tokens.GetBungieRewardsForUser](https://bungie-net.github.io/#Tokens.GetBungieRewardsForUser)

## getBungieRewardsForPlatformUser(membershipId, membershipType)

Returns the bungie rewards for the targeted user when a platform membership Id and Type are used.

- `membershipId` `<*>` users platform membershipId for requested user rewards. If not self, elevated permissions are required.
- `membershipType` `<*>` The target Destiny 2 membership type.
- Returns: `<Promise>`

URL: `GET /Tokens/Rewards/GetRewardsForPlatformUser/{membershipId}/{membershipType}/`

Source: [Tokens.GetBungieRewardsForPlatformUser](https://bungie-net.github.io/#Tokens.GetBungieRewardsForPlatformUser)

## getBungieRewardsList()

Returns a list of the current bungie rewards

- Returns: `<Promise>`

URL: `GET /Tokens/Rewards/BungieRewards/`

Source: [Tokens.GetBungieRewardsList](https://bungie-net.github.io/#Tokens.GetBungieRewardsList)

