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

- `type` `<string>` | `<number>` 
- Returns: `<Promise>`

URL: `GET /Platform/Content/GetContentType/{type}/`

Source: [Content.GetContentType](https://bungie-net.github.io/#Content.GetContentType)

## `getContentById(id, locale, [searchParams])`

Returns a content item referenced by id

- `id` `<string>` | `<number>` 
- `locale` `<string>` | `<number>` 
- `[searchParams]` `<Object>` Request querystring parameters object.
- Returns: `<Promise>`

URL: `GET /Platform/Content/GetContentById/{id}/{locale}/`

Source: [Content.GetContentById](https://bungie-net.github.io/#Content.GetContentById)

## `getContentByTagAndType(tag, type, locale, [searchParams])`

Returns the newest item that matches a given tag and Content Type.

- `tag` `<string>` | `<number>` 
- `type` `<string>` | `<number>` 
- `locale` `<string>` | `<number>` 
- `[searchParams]` `<Object>` Request querystring parameters object.
- Returns: `<Promise>`

URL: `GET /Platform/Content/GetContentByTagAndType/{tag}/{type}/{locale}/`

Source: [Content.GetContentByTagAndType](https://bungie-net.github.io/#Content.GetContentByTagAndType)

## `searchContentWithText(locale, [searchParams])`

Gets content based on querystring information passed in. Provides basic search and text search capabilities.

- `locale` `<string>` | `<number>` 
- `[searchParams]` `<Object>` Request querystring parameters object.
- Returns: `<Promise>`

URL: `GET /Platform/Content/Search/{locale}/`

Source: [Content.SearchContentWithText](https://bungie-net.github.io/#Content.SearchContentWithText)

## `searchContentByTagAndType(tag, type, locale, [searchParams])`

Searches for Content Items that match the given Tag and Content Type.

- `tag` `<string>` | `<number>` 
- `type` `<string>` | `<number>` 
- `locale` `<string>` | `<number>` 
- `[searchParams]` `<Object>` Request querystring parameters object.
- Returns: `<Promise>`

URL: `GET /Platform/Content/SearchContentByTagAndType/{tag}/{type}/{locale}/`

Source: [Content.SearchContentByTagAndType](https://bungie-net.github.io/#Content.SearchContentByTagAndType)

## `searchHelpArticles(searchtext, size)`

Search for Help Articles.

- `searchtext` `<string>` | `<number>` 
- `size` `<string>` | `<number>` 
- Returns: `<Promise>`

URL: `GET /Platform/Content/SearchHelpArticles/{searchtext}/{size}/`

Source: [Content.SearchHelpArticles](https://bungie-net.github.io/#Content.SearchHelpArticles)

## `rssNewsArticles(pageToken)`

Returns a JSON string response that is the RSS feed for news articles.

- `pageToken` `<string>` | `<number>` Zero-based pagination token for paging through result sets.
- Returns: `<Promise>`

URL: `GET /Platform/Content/Rss/NewsArticles/{pageToken}/`

Source: [Content.RssNewsArticles](https://bungie-net.github.io/#Content.RssNewsArticles)

