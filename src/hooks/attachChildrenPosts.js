
module.exports = async function attachChildrenPosts(context) {
  if (context.params.attachChildren === false) {
    return
  }

  const allPosts = (await context.app.service('posts').find({
    attachChildren: false,
    includeAll: true
  })).data

  context.result.data.map(result => {
    result.children = allPosts.filter(p => p.parentId === result._id.toString())
  })

  return context
}