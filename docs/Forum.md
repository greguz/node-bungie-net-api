# Forum

These methods can be accessed from `forum` property of a `BungieApi` instance.

```javascript
import { BungieApi } from 'bungie.net'

// Create the root API instance
const api = new BungieApi(options)

// Access the method
await api.forum.getTopicsPaged(page, pageSize, group, sort, quickDate, categoryFilter, searchParams)
```

## `getTopicsPaged(page, pageSize, group, sort, quickDate, categoryFilter, [searchParams])`

Get topics from any forum.

- `page` `<BigInt>` | `<number>` | `<string>` Zero paged page number
- `pageSize` `<BigInt>` | `<number>` | `<string>` Unused
- `group` `<BigInt>` | `<number>` | `<string>` The group, if any.
- `sort` `<number>` See [ForumTopicsSortEnum](./Enums.md#ForumTopicsSortEnum) enum. The sort mode.
- `quickDate` `<number>` See [ForumTopicsQuickDateEnum](./Enums.md#ForumTopicsQuickDateEnum) enum. A date filter.
- `categoryFilter` `<number>` See [ForumTopicsCategoryFiltersEnum](./Enums.md#ForumTopicsCategoryFiltersEnum) enum. A category filter
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.locales]` `<string>` Comma seperated list of locales posts must match to return in the result list. Default 'en'
  - `[searchParams.tagstring]` `<string>` The tags to search, if any.
- Returns: `<Promise>`

URL: `GET /Platform/Forum/GetTopicsPaged/{page}/{pageSize}/{group}/{sort}/{quickDate}/{categoryFilter}/`

Source: [Forum.GetTopicsPaged](https://bungie-net.github.io/#Forum.GetTopicsPaged)

## `getCoreTopicsPaged(page, sort, quickDate, categoryFilter, [searchParams])`

Gets a listing of all topics marked as part of the core group.

- `page` `<BigInt>` | `<number>` | `<string>` Zero base page
- `sort` `<number>` See [ForumTopicsSortEnum](./Enums.md#ForumTopicsSortEnum) enum. The sort mode.
- `quickDate` `<number>` See [ForumTopicsQuickDateEnum](./Enums.md#ForumTopicsQuickDateEnum) enum. The date filter.
- `categoryFilter` `<number>` See [ForumTopicsCategoryFiltersEnum](./Enums.md#ForumTopicsCategoryFiltersEnum) enum. The category filter.
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.locales]` `<string>` Comma seperated list of locales posts must match to return in the result list. Default 'en'
- Returns: `<Promise>`

URL: `GET /Platform/Forum/GetCoreTopicsPaged/{page}/{sort}/{quickDate}/{categoryFilter}/`

Source: [Forum.GetCoreTopicsPaged](https://bungie-net.github.io/#Forum.GetCoreTopicsPaged)

## `getPostsThreadedPaged(parentPostId, page, pageSize, replySize, getParentPost, rootThreadMode, sortMode, [searchParams])`

Returns a thread of posts at the given parent, optionally returning replies to those posts as well as the original parent.

- `parentPostId` `<BigInt>` | `<number>` | `<string>`
- `page` `<BigInt>` | `<number>` | `<string>`
- `pageSize` `<BigInt>` | `<number>` | `<string>`
- `replySize` `<BigInt>` | `<number>` | `<string>`
- `getParentPost` `<boolean>`
- `rootThreadMode` `<boolean>`
- `sortMode` `<number>` See [ForumPostSortEnum](./Enums.md#ForumPostSortEnum) enum.
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.showbanned]` `<string>` If this value is not null or empty, banned posts are requested to be returned
- Returns: `<Promise>`

URL: `GET /Platform/Forum/GetPostsThreadedPaged/{parentPostId}/{page}/{pageSize}/{replySize}/{getParentPost}/{rootThreadMode}/{sortMode}/`

Source: [Forum.GetPostsThreadedPaged](https://bungie-net.github.io/#Forum.GetPostsThreadedPaged)

## `getPostsThreadedPagedFromChild(childPostId, page, pageSize, replySize, rootThreadMode, sortMode, [searchParams])`

Returns a thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent.

- `childPostId` `<BigInt>` | `<number>` | `<string>`
- `page` `<BigInt>` | `<number>` | `<string>`
- `pageSize` `<BigInt>` | `<number>` | `<string>`
- `replySize` `<BigInt>` | `<number>` | `<string>`
- `rootThreadMode` `<boolean>`
- `sortMode` `<number>` See [ForumPostSortEnum](./Enums.md#ForumPostSortEnum) enum.
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.showbanned]` `<string>` If this value is not null or empty, banned posts are requested to be returned
- Returns: `<Promise>`

URL: `GET /Platform/Forum/GetPostsThreadedPagedFromChild/{childPostId}/{page}/{pageSize}/{replySize}/{rootThreadMode}/{sortMode}/`

Source: [Forum.GetPostsThreadedPagedFromChild](https://bungie-net.github.io/#Forum.GetPostsThreadedPagedFromChild)

## `getPostAndParent(childPostId, [searchParams])`

Returns the post specified and its immediate parent.

- `childPostId` `<BigInt>` | `<number>` | `<string>`
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.showbanned]` `<string>` If this value is not null or empty, banned posts are requested to be returned
- Returns: `<Promise>`

URL: `GET /Platform/Forum/GetPostAndParent/{childPostId}/`

Source: [Forum.GetPostAndParent](https://bungie-net.github.io/#Forum.GetPostAndParent)

## `getPostAndParentAwaitingApproval(childPostId, [searchParams])`

Returns the post specified and its immediate parent of posts that are awaiting approval.

- `childPostId` `<BigInt>` | `<number>` | `<string>`
- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.showbanned]` `<string>` If this value is not null or empty, banned posts are requested to be returned
- Returns: `<Promise>`

URL: `GET /Platform/Forum/GetPostAndParentAwaitingApproval/{childPostId}/`

Source: [Forum.GetPostAndParentAwaitingApproval](https://bungie-net.github.io/#Forum.GetPostAndParentAwaitingApproval)

## `getTopicForContent(contentId)`

Gets the post Id for the given content item's comments, if it exists.

- `contentId` `<BigInt>` | `<number>` | `<string>`
- Returns: `<Promise>`

URL: `GET /Platform/Forum/GetTopicForContent/{contentId}/`

Source: [Forum.GetTopicForContent](https://bungie-net.github.io/#Forum.GetTopicForContent)

## `getForumTagSuggestions([searchParams])`

Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.

- `[searchParams]` `<Object>` Request querystring parameters object.
  - `[searchParams.partialtag]` `<string>` The partial tag input to generate suggestions from.
- Returns: `<Promise>`

URL: `GET /Platform/Forum/GetForumTagSuggestions/`

Source: [Forum.GetForumTagSuggestions](https://bungie-net.github.io/#Forum.GetForumTagSuggestions)

## `getPoll(topicId)`

Gets the specified forum poll.

- `topicId` `<BigInt>` | `<number>` | `<string>` The post id of the topic that has the poll.
- Returns: `<Promise>`

URL: `GET /Platform/Forum/Poll/{topicId}/`

Source: [Forum.GetPoll](https://bungie-net.github.io/#Forum.GetPoll)

## `getRecruitmentThreadSummaries([body])`

Allows the caller to get a list of to 25 recruitment thread summary information objects.

- `[body]` `<number[]>` Request body object.
- Returns: `<Promise>`

URL: `POST /Platform/Forum/Recruit/Summaries/`

Source: [Forum.GetRecruitmentThreadSummaries](https://bungie-net.github.io/#Forum.GetRecruitmentThreadSummaries)

