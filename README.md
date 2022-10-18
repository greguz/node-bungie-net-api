# node-bungie-net-api

Yet another Bungie.NET API client for Node.js

## Features

- **OAuth support**
- **Support both Private and Public Apps**
- **Automatic token refresh**
- **TypeScript support**

## Install

```
npm install bungie.net
```

## Example

```javascript
import { BungieApi, ComponentType } from 'bungie.net'

const api = new BungieApi({
  apiKey: 'myapikey',
  clientId: 'myclientid',
  clientSecret: 'myclientsecret'
})

async function foo () {
  const manifest = await api.getManifest()

  // redirect the user to this url...
  const url = api.getAuthorizationUrl('MySecretState')

  // wait for callback with the authorization code and your state...
  const code = 'CallbackRequestQuerystringCode'

  await api.authorize(code)

  console.log(api.accessToken.raw) // raw token value
  console.log(api.accessToken.expires) // expiration date (ms)
  console.log(api.accessToken.expired) // false

  if (api.refreshToken) {
    // if the app is private and everything is configured correctly,
    // you'll also get a refresh token from the authorization request
    console.log(api.refreshToken.raw)
    console.log(api.refreshToken.expires)
    console.log(api.refreshToken.expired)
  }

  // having an access token, you can request protected resources
  const memberships = await api.getMembershipsForCurrentUser()

  const membershipType = memberships.destinyMemberships[0].membershipType
  const membershipId = memberships.destinyMemberships[0].membershipId

  // get characters from the current authorized profile
  const characters = await api.getProfile(
    membershipType,
    membershipId,
    [
      ComponentType.Characters // enum
    ]
  )

  console.log({ characters })
}

foo().catch(err => console.error(err))
```
