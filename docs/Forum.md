# Forum

## getTopicsPaged(page, pageSize, group, sort, quickDate, categoryFilter, [searchParams])

Get topics from any forum.

- `page` `<*>` Zero paged page number
- `pageSize` `<*>` Unused
- `group` `<*>` The group, if any.
- `sort` `<*>` The sort mode.
- `quickDate` `<*>` A date filter.
- `categoryFilter` `<*>` A category filter
- `[searchParams]` `<*>` Request querystring parameters object.
- Returns: `<Promise>`

URL: `GET /Forum/GetTopicsPaged/{page}/{pageSize}/{group}/{sort}/{quickDate}/{categoryFilter}/`

Source: [Forum.GetTopicsPaged](https://bungie-net.github.io/#Forum.GetTopicsPaged)

## getCoreTopicsPaged(page, sort, quickDate, categoryFilter, [searchParams])

Gets a listing of all topics marked as part of the core group.

- `page` `<*>` Zero base page
- `sort` `<*>` The sort mode.
- `quickDate` `<*>` The date filter.
- `categoryFilter` `<*>` The category filter.
- `[searchParams]` `<*>` Request querystring parameters object.
- Returns: `<Promise>`

URL: `GET /Forum/GetCoreTopicsPaged/{page}/{sort}/{quickDate}/{categoryFilter}/`

Source: [Forum.GetCoreTopicsPaged](https://bungie-net.github.io/#Forum.GetCoreTopicsPaged)

## getPostsThreadedPaged(parentPostId, page, pageSize, replySize, getParentPost, rootThreadMode, sortMode, [searchParams])

Returns a thread of posts at the given parent, optionally returning replies to those posts as well as the original parent.

- `parentPostId` `<*>` 
- `page` `<*>` 
- `pageSize` `<*>` 
- `replySize` `<*>` 
- `getParentPost` `<*>` 
- `rootThreadMode` `<*>` 
- `sortMode` `<*>` 
- `[searchParams]` `<*>` Request querystring parameters object.
- Returns: `<Promise>`

URL: `GET /Forum/GetPostsThreadedPaged/{parentPostId}/{page}/{pageSize}/{replySize}/{getParentPost}/{rootThreadMode}/{sortMode}/`

Source: [Forum.GetPostsThreadedPaged](https://bungie-net.github.io/#Forum.GetPostsThreadedPaged)

## getPostsThreadedPagedFromChild(childPostId, page, pageSize, replySize, rootThreadMode, sortMode, [searchParams])

Returns a thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent.

- `childPostId` `<*>` 
- `page` `<*>` 
- `pageSize` `<*>` 
- `replySize` `<*>` 
- `rootThreadMode` `<*>` 
- `sortMode` `<*>` 
- `[searchParams]` `<*>` Request querystring parameters object.
- Returns: `<Promise>`

URL: `GET /Forum/GetPostsThreadedPagedFromChild/{childPostId}/{page}/{pageSize}/{replySize}/{rootThreadMode}/{sortMode}/`

Source: [Forum.GetPostsThreadedPagedFromChild](https://bungie-net.github.io/#Forum.GetPostsThreadedPagedFromChild)

## getPostAndParent(childPostId, [searchParams])

Returns the post specified and its immediate parent.

- `childPostId` `<*>` 
- `[searchParams]` `<*>` Request querystring parameters object.
- Returns: `<Promise>`

URL: `GET /Forum/GetPostAndParent/{childPostId}/`

Source: [Forum.GetPostAndParent](https://bungie-net.github.io/#Forum.GetPostAndParent)

## getPostAndParentAwaitingApproval(childPostId, [searchParams])

Returns the post specified and its immediate parent of posts that are awaiting approval.

- `childPostId` `<*>` 
- `[searchParams]` `<*>` Request querystring parameters object.
- Returns: `<Promise>`

URL: `GET /Forum/GetPostAndParentAwaitingApproval/{childPostId}/`

Source: [Forum.GetPostAndParentAwaitingApproval](https://bungie-net.github.io/#Forum.GetPostAndParentAwaitingApproval)

## getTopicForContent(contentId)

Gets the post Id for the given content item's comments, if it exists.

- `contentId` `<*>` 
- Returns: `<Promise>`

URL: `GET /Forum/GetTopicForContent/{contentId}/`

Source: [Forum.GetTopicForContent](https://bungie-net.github.io/#Forum.GetTopicForContent)

## getForumTagSuggestions([searchParams])

Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.

- `[searchParams]` `<*>` Request querystring parameters object.
- Returns: `<Promise>`

URL: `GET /Forum/GetForumTagSuggestions/`

Source: [Forum.GetForumTagSuggestions](https://bungie-net.github.io/#Forum.GetForumTagSuggestions)

## getPoll(topicId)

Gets the specified forum poll.

- `topicId` `<*>` The post id of the topic that has the poll.
- Returns: `<Promise>`

URL: `GET /Forum/Poll/{topicId}/`

Source: [Forum.GetPoll](https://bungie-net.github.io/#Forum.GetPoll)

## getRecruitmentThreadSummaries([body])

Allows the caller to get a list of to 25 recruitment thread summary information objects.

- `[body]` `<*>` Request body object.
- Returns: `<Promise>`

URL: `POST /Forum/Recruit/Summaries/`

Source: [Forum.GetRecruitmentThreadSummaries](https://bungie-net.github.io/#Forum.GetRecruitmentThreadSummaries)

