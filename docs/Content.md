# Content

These methods can be accessed from `content` property of a `BungieApi` instance.

```javascript
import { BungieApi } from 'bungie.net'

// Create the root API instance
const api = new BungieApi(options)

// Access the method
await api.content.getContentType(type)
```

## `getContentType(type)`

Gets an object describing a particular variant of content.

- `type` `<string>`
- Returns: `<Promise>`

URL: `GET /Platform/Content/GetContentType/{type}/`

Source: [Content.GetContentType](https://bungie-net.github.io/#Content.GetContentType)

## `getContentById(id, locale, [searchParams])`

Returns a content item referenced by id

- `id` `<number>`
- `locale` `<string>`
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.head]` `<boolean>` false
- Returns: `<Promise>`

URL: `GET /Platform/Content/GetContentById/{id}/{locale}/`

Source: [Content.GetContentById](https://bungie-net.github.io/#Content.GetContentById)

## `getContentByTagAndType(tag, type, locale, [searchParams])`

Returns the newest item that matches a given tag and Content Type.

- `tag` `<string>`
- `type` `<string>`
- `locale` `<string>`
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.head]` `<boolean>` Not used.
- Returns: `<Promise>`

URL: `GET /Platform/Content/GetContentByTagAndType/{tag}/{type}/{locale}/`

Source: [Content.GetContentByTagAndType](https://bungie-net.github.io/#Content.GetContentByTagAndType)

## `searchContentWithText(locale, [searchParams])`

Gets content based on querystring information passed in. Provides basic search and text search capabilities.

- `locale` `<string>`
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.ctype]` `<string>` Content type tag: Help, News, etc. Supply multiple ctypes separated by space.
  - `[searchParams.currentpage]` `<number>` Page number for the search results, starting with page 1.
  - `[searchParams.head]` `<boolean>` Not used.
  - `[searchParams.searchtext]` `<string>` Word or phrase for the search.
  - `[searchParams.source]` `<string>` For analytics, hint at the part of the app that triggered the search. Optional.
  - `[searchParams.tag]` `<string>` Tag used on the content to be searched.
- Returns: `<Promise>`

URL: `GET /Platform/Content/Search/{locale}/`

Source: [Content.SearchContentWithText](https://bungie-net.github.io/#Content.SearchContentWithText)

## `searchContentByTagAndType(tag, type, locale, [searchParams])`

Searches for Content Items that match the given Tag and Content Type.

- `tag` `<string>`
- `type` `<string>`
- `locale` `<string>`
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.currentpage]` `<number>` Page number for the search results starting with page 1.
  - `[searchParams.head]` `<boolean>` Not used.
  - `[searchParams.itemsperpage]` `<number>` Not used.
- Returns: `<Promise>`

URL: `GET /Platform/Content/SearchContentByTagAndType/{tag}/{type}/{locale}/`

Source: [Content.SearchContentByTagAndType](https://bungie-net.github.io/#Content.SearchContentByTagAndType)

## `searchHelpArticles(searchtext, size)`

Search for Help Articles.

- `searchtext` `<string>`
- `size` `<string>`
- Returns: `<Promise>`

URL: `GET /Platform/Content/SearchHelpArticles/{searchtext}/{size}/`

Source: [Content.SearchHelpArticles](https://bungie-net.github.io/#Content.SearchHelpArticles)

## `rssNewsArticles(pageToken)`

Returns a JSON string response that is the RSS feed for news articles.

- `pageToken` `<string>` Zero-based pagination token for paging through result sets.
- Returns: `<Promise>`

URL: `GET /Platform/Content/Rss/NewsArticles/{pageToken}/`

Source: [Content.RssNewsArticles](https://bungie-net.github.io/#Content.RssNewsArticles)

