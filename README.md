# node-bungie-net-api

Yet another Bungie.NET API client for Node.js

## Features

- **OAuth support**
- **Support both Private and Public Apps**
- **Automatic token refresh**
- **TypeScript support**
- **Full API surface**: all API are dynamically generated using the official [OpenAPI](https://github.com/Bungie-net/api) specs file.

## OpenAPI

v2.16.0

## Install

```
npm install bungie.net
```

## Example

```javascript
import { BungieApi, DestinyComponentType } from 'bungie.net'

const api = new BungieApi({
  apiKey: 'myapikey',
  clientId: 'myclientid',
  clientSecret: 'myclientsecret'
})

async function foo () {
  // This request does not require user authorization
  const manifest = await api.destiny2.getDestinyManifest()

  // Redirect the user to this url...
  const url = api.getAuthorizationUrl('MySecretState')

  // Wait for callback with the authorization code and your state...
  const code = 'CallbackRequestQuerystringCode'

  await api.authorize(code)

  console.log(api.accessToken.raw) // raw token value
  console.log(api.accessToken.expires) // expiration date (ms)
  console.log(api.accessToken.expired) // false

  if (api.refreshToken) {
    // If the app is private and everything is configured correctly,
    // you'll also get a refresh token from the authorization request
    console.log(api.refreshToken.raw)
    console.log(api.refreshToken.expires)
    console.log(api.refreshToken.expired)
  }

  // Having an access token, you can request protected resources
  const memberships = await api.user.getMembershipDataForCurrentUser()

  const membershipType = memberships.destinyMemberships[0].membershipType
  const membershipId = memberships.destinyMemberships[0].membershipId

  // Get characters from the current authorized profile
  const characters = await api.destiny2.getProfile(
    membershipType,
    membershipId,
    {
      components: [
        DestinyComponentType.Characters // enum
      ]
    }
  )

  // Grab first characted data
  const characterId = Object.keys(characters.characters.data)[0]
  const characterData = characters.characters.data[characterId]

  // Banshee
  const vendorHash = '672118013'

  // Get vendor data
  const vendorData = await api.destiny2.getVendor(membershipType, membershipId, characterId, vendorHash, {
    components: [
      DestinyComponentType.VendorSales,
      DestinyComponentType.ItemPerks
    ]
  })
}

foo().catch(err => console.error(err))
```
