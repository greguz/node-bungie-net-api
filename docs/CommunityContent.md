# CommunityContent

These methods can be accessed from `communityContent` property of a `BungieApi` instance.

```javascript
import { BungieApi } from 'bungie.net'

// Create the root API instance
const api = new BungieApi(options)

// Access the method
await api.communityContent.getCommunityContent(sort, mediaFilter, page)
```

## `getCommunityContent(sort, mediaFilter, page)`

Returns community content.

- `sort` `<number>` See [CommunityContentSortMode](./Enums.md#CommunityContentSortMode) enum. The sort mode.
- `mediaFilter` `<number>` See [ForumTopicsCategoryFiltersEnum](./Enums.md#ForumTopicsCategoryFiltersEnum) enum. The type of media to get
- `page` `<string>` | `<number>` Zero based page
- Returns: `<Promise>`

URL: `GET /Platform/CommunityContent/Get/{sort}/{mediaFilter}/{page}/`

Source: [CommunityContent.GetCommunityContent](https://bungie-net.github.io/#CommunityContent.GetCommunityContent)

