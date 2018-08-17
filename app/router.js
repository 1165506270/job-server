'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.userCenter.index);
  router.post('/login', controller.userCenter.login);
  router.post('/register', controller.userCenter.register);
};
