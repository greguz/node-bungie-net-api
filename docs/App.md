# App

## getApplicationApiUsage(applicationId, [searchParams])

Get API usage by application for time frame specified. You can go as far back as 30 days ago, and can ask for up to a 48 hour window of time in a single request. You must be authenticated with at least the ReadUserData permission to access this endpoint.

- `applicationId` `<*>` ID of the application to get usage statistics.
- `[searchParams]` `<*>` Request querystring parameters object.
- Returns: `<Promise>`

URL: `GET /App/ApiUsage/{applicationId}/`

Source: [App.GetApplicationApiUsage](https://bungie-net.github.io/#App.GetApplicationApiUsage)

## getBungieApplications()

Get list of applications created by Bungie.

- Returns: `<Promise>`

URL: `GET /App/FirstParty/`

Source: [App.GetBungieApplications](https://bungie-net.github.io/#App.GetBungieApplications)

