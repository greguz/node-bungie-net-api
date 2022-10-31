import test from 'ava'
import got from 'got'
import nock from 'nock'

import { BungieApi } from './bungie.js'

test('BungieApi OAuth', async t => {
  const api = new BungieApi({
    apiKey: 'myapikey',
    clientId: 'myclientid',
    clientSecret: 'myclientsecret',
    url: 'https://www.zombo.com/'
  })

  t.truthy(api.app)
  t.truthy(api.communityContent)
  t.truthy(api.content)
  t.truthy(api.destiny2)
  t.truthy(api.fireteam)
  t.truthy(api.forum)
  t.truthy(api.groupV2)
  t.truthy(api.social)
  t.truthy(api.tokens)
  t.truthy(api.trending)
  t.truthy(api.user)

  t.is(api.apiKey, 'myapikey')
  t.is(api.clientId, 'myclientid')
  t.is(api.clientSecret, 'myclientsecret')
  t.is(api.url, 'https://www.zombo.com/')
  t.false(api.authorized)

  const scope = nock(api.url)
    .get('/oauth/authorize?client_id=myclientid&response_type=code&state=mystate')
    .reply(204)

  await got({
    method: 'GET',
    url: api.getAuthorizationUrl('mystate', '/oauth/authorize')
  })

  scope
    .post('/platform/app/oauth/token', 'grant_type=authorization_code&code=mycode')
    .basicAuth({
      user: api.clientId,
      pass: api.clientSecret
    })
    .reply(200, {
      access_token: '2YotnFZFEjr1zCsicMWpAA',
      token_type: 'Bearer',
      expires_in: 3600,
      refresh_token: 'tGzv3JOkF0XG5Qx2TlKWIA',
      refresh_expires_in: 7776000,
      membership_id: '4352344'
    })

  t.falsy(api.accessToken)
  t.falsy(api.refreshToken)

  const membershipId = await api.authorize('mycode')
  t.is(membershipId, '4352344')

  t.truthy(api.accessToken)
  t.is(api.accessToken.raw, '2YotnFZFEjr1zCsicMWpAA')

  t.truthy(api.refreshToken)
  t.is(api.refreshToken.raw, 'tGzv3JOkF0XG5Qx2TlKWIA')

  t.true(api.authorized)
})

test('BungieApi Platform Refresh', async t => {
  const api = new BungieApi({
    apiKey: 'myapikey',
    clientId: 'myclientid',
    clientSecret: 'myclientsecret',
    refreshToken: 'myrefreshtoken'
  })

  const scope = nock(api.url)

  scope
    .post('/platform/app/oauth/token', 'grant_type=refresh_token&refresh_token=myrefreshtoken')
    .reply(200, {
      token_type: 'Bearer',
      access_token: 'myaccesstoken',
      expires_in: 3600
    })

  scope
    .get('/Platform/User/GetMembershipsForCurrentUser/')
    .reply(400, {
      ErrorCode: 15,
      ErrorStatus: 'ValidationError',
      Message: 'Invalid request payload'
    })

  t.falsy(api.accessToken)

  const err = await t.throwsAsync(
    () => api.user.getMembershipDataForCurrentUser(),
    { code: 'BUNGIE_PLATFORM_ERROR' }
  )
  t.is(err.bungieCode, 15)
  t.is(err.bungieStatus, 'ValidationError')
  t.is(err.message, 'Invalid request payload')
  t.is(err.statusCode, 400)

  t.is(api.accessToken.raw, 'myaccesstoken')

  scope
    .get('/Platform/User/GetMembershipsForCurrentUser/')
    .reply(400, {
      ErrorCode: 1,
      Response: {
        hello: 'world'
      }
    })

  const response = await api.user.getMembershipDataForCurrentUser()
  t.deepEqual(response, { hello: 'world' })
})
