# Trending

## getTrendingCategories()

Returns trending items for Bungie.net, collapsed into the first page of items per category. For pagination within a category, call GetTrendingCategory.

- Returns: `<Promise>`

URL: `GET /Trending/Categories/`

Source: [Trending.GetTrendingCategories](https://bungie-net.github.io/#Trending.GetTrendingCategories)

## getTrendingCategory(categoryId, pageNumber)

Returns paginated lists of trending items for a category.

- `categoryId` `<*>` The ID of the category for whom you want additional results.
- `pageNumber` `<*>` The page # of results to return.
- Returns: `<Promise>`

URL: `GET /Trending/Categories/{categoryId}/{pageNumber}/`

Source: [Trending.GetTrendingCategory](https://bungie-net.github.io/#Trending.GetTrendingCategory)

## getTrendingEntryDetail(trendingEntryType, identifier)

Returns the detailed results for a specific trending entry. Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.

- `trendingEntryType` `<*>` The type of entity to be returned.
- `identifier` `<*>` The identifier for the entity to be returned.
- Returns: `<Promise>`

URL: `GET /Trending/Details/{trendingEntryType}/{identifier}/`

Source: [Trending.GetTrendingEntryDetail](https://bungie-net.github.io/#Trending.GetTrendingEntryDetail)

