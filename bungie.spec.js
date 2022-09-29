import test from 'ava'
import got from 'got'
import nock from 'nock'

import { BungieApi } from './bungie.js'

test('BungieApi oauth', async t => {
  const api = new BungieApi({
    apiKey: 'myapikey',
    clientId: 'myclientid',
    clientSecret: 'myclientsecret',
    url: 'https://www.zombo.com/'
  })

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
      user: api.clientId || 'nope',
      pass: api.clientSecret || 'nope'
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
  t.truthy(api.refreshToken)
})
