const { authenticate } = require('@feathersjs/authentication').hooks;
const convertMarkdown = require('../../hooks/convertMarkdown')
const attachChildrenPosts = require('../../hooks/attachChildrenPosts')
const excludeChildrenPosts = require('../../hooks/excludeChildrenPosts')


module.exports = {
  before: {
    all: [],
    find: [ excludeChildrenPosts ],
    get: [],
    create: [/*authenticate('jwt'), */convertMarkdown],
    // update: [authenticate('jwt')],
    // patch: [authenticate('jwt')],
    // remove: [authenticate('jwt')]
  },

  after: {
    all: [],
    find: [ attachChildrenPosts ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
