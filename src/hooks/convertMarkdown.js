const remark = require('remark')
const html = require('remark-html')

module.exports = async function convertMarkdown(context) {
  // console.log('// context', context)

  if (context.data.body) {
    try {
      context.data.bodyHTML = (await remark().use(html).process(context.data.body)).toString()
    } catch (err) {
      throw new Error(`Could not convert Markdown: ${err.message}`)
    }
  }

  // DEBUGGING
  // context.result = context.data

  return context
}