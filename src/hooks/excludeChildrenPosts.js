
module.exports = async function excludeChildrenPosts(context) {
  if (context.params.includeAll) {
    return
  }

  // must not have parentId (before hook)
  context.params.query = {
    ...(context.params.query || {}),
    parentId: undefined
  }

  // must not have parentId (after hook)
  // context.result.data = context.result.data.filter(post => !post.parentId)
}