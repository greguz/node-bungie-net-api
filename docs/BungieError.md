# BungieError

Bungie.net related errors are represented by a custom `Error` class: `BungieError`.

```javascript
import { BungieError } from 'bungie.net'

// This is just an example, but you can use the constructor for other purposes.
const err = new BungieError('My message.', 'MY_CODE')

if (err instanceof BungieError) {
  console.log(err.code) // "MY_CODE"
  console.log(err.message) // "My message."
  console.log(err.stack) // Stack trace as always
}
```

There is also a Platform-Request-specific error: `BungiePlatformError`.

The `BungiePlatformError` extends the `BungieError` class, and It adds all response info of a `"/Platform"` response.

```javascript
import { BungieError, BungiePlatformError } from 'bungie.net'

// This error is correctly constructed during a Bungie.net request.
// This is just an example to show the error's properties.
const err = new BungiePlatformError({}, 500)

if (err instanceof BungiePlatformError) {
  console.log(err instanceof BungieError) // true
  console.log(err.code) // BUNGIE_PLATFORM_ERROR
  console.log(err.message) // HTTP response message
  console.log(err.statusCode) // HTTP response status code
  console.log(err.bungieCode) // PlatformErrorCodes enum value
  console.log(err.bungieStatus) // Exception state message
  console.log(err.data) // HTTP response details
}
```
