# node-bungie-net-api

Yet another Bungie.NET API client for Node.js

## Features

- **OAuth support**
- **Support both Private and Public Apps**
- **Automatic token refresh**
- **TypeScript support**

## ESM

This project is written with native [ESM](https://nodejs.org/api/esm.html).

If you are using old Node.js versions, or simply `require()` and `exports`, this project will not for you out of the box.
You can still use tools like [Babel](https://babeljs.io/) to convert this project to other formats.

## Install

```
npm install bungie.net
```

## Example

```javascript
import { BungieApi } from 'bungie.net'

const api = new BungieApi({
  apiKey: 'myapikey',
  clientId: 'myclientid',
  clientSecret: 'myclientsecret'
})

const manifest = await api.getManifest()

// redirect the user to this url...
const url = api.getAuthorizationUrl('MySecretState')

// wait for callback with the authorization code and your state...
const code = 'CallbackRequestQuerystringCode'

const membershipId = await api.authorize(code)

console.log(api.accessToken.raw) // raw token value
console.log(api.accessToken.expires) // expiration date (ms)
console.log(api.accessToken.expired) // false

const isPrivate = !!api.refreshToken // true is app is private
```
