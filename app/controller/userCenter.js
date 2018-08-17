'use strict';

const Controller = require('egg').Controller;

class UserCenterController extends Controller {
  async login() {
    const {type, username, password} = this.ctx.request.body
    let code = 0; //记录本次登录的结果  1：登录成功； 0： 登录失败
    let user;
    if(type === 1) { //判断本次登录的用户类型， 1：求职者； 2：企业
      user = await this.ctx.service.jobSeekerUserCenter.userfind(username);
    } else {
      user = await this.ctx.service.companyUserCenter.userfind(username);
    }
    if(user.password === password){
      this.ctx.body = {
        code,
        user
      }
    } else {
      this.ctx.body = {
        code
      }
    }
  }
}

module.exports = UserCenterController;
