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

- `page` `<string>` | `<number>` Zero paged page number
- `pageSize` `<string>` | `<number>` Unused
- `group` `<string>` | `<number>` The group, if any.
- `sort` `<number>` See [ForumTopicsSortEnum](./Enums.md#ForumTopicsSortEnum) enum. The sort mode.
- `quickDate` `<number>` See [ForumTopicsQuickDateEnum](./Enums.md#ForumTopicsQuickDateEnum) enum. A date filter.
- `categoryFilter` `<number>` See [ForumTopicsCategoryFiltersEnum](./Enums.md#ForumTopicsCategoryFiltersEnum) enum. A category filter
- `[searchParams]` `<Object>` Request querystring parameters object.
- Returns: `<Promise>`

URL: `GET /Platform/Forum/GetTopicsPaged/{page}/{pageSize}/{group}/{sort}/{quickDate}/{categoryFilter}/`

Source: [Forum.GetTopicsPaged](https://bungie-net.github.io/#Forum.GetTopicsPaged)

## `getCoreTopicsPaged(page, sort, quickDate, categoryFilter, [searchParams])`

Gets a listing of all topics marked as part of the core group.

- `page` `<string>` | `<number>` Zero base page
- `sort` `<number>` See [ForumTopicsSortEnum](./Enums.md#ForumTopicsSortEnum) enum. The sort mode.
- `quickDate` `<number>` See [ForumTopicsQuickDateEnum](./Enums.md#ForumTopicsQuickDateEnum) enum. The date filter.
- `categoryFilter` `<number>` See [ForumTopicsCategoryFiltersEnum](./Enums.md#ForumTopicsCategoryFiltersEnum) enum. The category filter.
- `[searchParams]` `<Object>` Request querystring parameters object.
- Returns: `<Promise>`

URL: `GET /Platform/Forum/GetCoreTopicsPaged/{page}/{sort}/{quickDate}/{categoryFilter}/`

Source: [Forum.GetCoreTopicsPaged](https://bungie-net.github.io/#Forum.GetCoreTopicsPaged)

## `getPostsThreadedPaged(parentPostId, page, pageSize, replySize, getParentPost, rootThreadMode, sortMode, [searchParams])`

Returns a thread of posts at the given parent, optionally returning replies to those posts as well as the original parent.

- `parentPostId` `<string>` | `<number>` 
- `page` `<string>` | `<number>` 
- `pageSize` `<string>` | `<number>` 
- `replySize` `<string>` | `<number>` 
- `getParentPost` `<boolean>` 
- `rootThreadMode` `<boolean>` 
- `sortMode` `<number>` See [ForumPostSortEnum](./Enums.md#ForumPostSortEnum) enum. 
- `[searchParams]` `<Object>` Request querystring parameters object.
- Returns: `<Promise>`

URL: `GET /Platform/Forum/GetPostsThreadedPaged/{parentPostId}/{page}/{pageSize}/{replySize}/{getParentPost}/{rootThreadMode}/{sortMode}/`

Source: [Forum.GetPostsThreadedPaged](https://bungie-net.github.io/#Forum.GetPostsThreadedPaged)

## `getPostsThreadedPagedFromChild(childPostId, page, pageSize, replySize, rootThreadMode, sortMode, [searchParams])`

Returns a thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent.

- `childPostId` `<string>` | `<number>` 
- `page` `<string>` | `<number>` 
- `pageSize` `<string>` | `<number>` 
- `replySize` `<string>` | `<number>` 
- `rootThreadMode` `<boolean>` 
- `sortMode` `<number>` See [ForumPostSortEnum](./Enums.md#ForumPostSortEnum) enum. 
- `[searchParams]` `<Object>` Request querystring parameters object.
- Returns: `<Promise>`

URL: `GET /Platform/Forum/GetPostsThreadedPagedFromChild/{childPostId}/{page}/{pageSize}/{replySize}/{rootThreadMode}/{sortMode}/`

Source: [Forum.GetPostsThreadedPagedFromChild](https://bungie-net.github.io/#Forum.GetPostsThreadedPagedFromChild)

## `getPostAndParent(childPostId, [searchParams])`

Returns the post specified and its immediate parent.

- `childPostId` `<string>` | `<number>` 
- `[searchParams]` `<Object>` Request querystring parameters object.
- Returns: `<Promise>`

URL: `GET /Platform/Forum/GetPostAndParent/{childPostId}/`

Source: [Forum.GetPostAndParent](https://bungie-net.github.io/#Forum.GetPostAndParent)

## `getPostAndParentAwaitingApproval(childPostId, [searchParams])`

Returns the post specified and its immediate parent of posts that are awaiting approval.

- `childPostId` `<string>` | `<number>` 
- `[searchParams]` `<Object>` Request querystring parameters object.
- Returns: `<Promise>`

URL: `GET /Platform/Forum/GetPostAndParentAwaitingApproval/{childPostId}/`

Source: [Forum.GetPostAndParentAwaitingApproval](https://bungie-net.github.io/#Forum.GetPostAndParentAwaitingApproval)

## `getTopicForContent(contentId)`

Gets the post Id for the given content item's comments, if it exists.

- `contentId` `<string>` | `<number>` 
- Returns: `<Promise>`

URL: `GET /Platform/Forum/GetTopicForContent/{contentId}/`

Source: [Forum.GetTopicForContent](https://bungie-net.github.io/#Forum.GetTopicForContent)

## `getForumTagSuggestions([searchParams])`

Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.

- `[searchParams]` `<Object>` Request querystring parameters object.
- Returns: `<Promise>`

URL: `GET /Platform/Forum/GetForumTagSuggestions/`

Source: [Forum.GetForumTagSuggestions](https://bungie-net.github.io/#Forum.GetForumTagSuggestions)

## `getPoll(topicId)`

Gets the specified forum poll.

- `topicId` `<string>` | `<number>` The post id of the topic that has the poll.
- Returns: `<Promise>`

URL: `GET /Platform/Forum/Poll/{topicId}/`

Source: [Forum.GetPoll](https://bungie-net.github.io/#Forum.GetPoll)

## `getRecruitmentThreadSummaries([body])`

Allows the caller to get a list of to 25 recruitment thread summary information objects.

- `[body]` `<Object>` Request body object.
- Returns: `<Promise>`

URL: `POST /Platform/Forum/Recruit/Summaries/`

Source: [Forum.GetRecruitmentThreadSummaries](https://bungie-net.github.io/#Forum.GetRecruitmentThreadSummaries)

