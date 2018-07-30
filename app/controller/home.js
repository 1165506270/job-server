'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }
  async login() {
    const body = this.ctx.request.body
    console.log(body)
    const user = await this.ctx.service.user.find(body.user);
    this.ctx.body = {
      code: 200,
      user
    }
  }
}

module.exports = HomeController;
