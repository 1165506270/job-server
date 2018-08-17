
const Service = require('egg').Service;

class JobSeekerUserCenterService extends Service {
    async userfind(username) {
      // 假如 我们拿到用户 id 从数据库获取用户详细信息
      const result = await this.app.mysql.select('USERLIST');

      const user = await this.app.mysql.get('USERLIST', {USER_NAME: username});
      console.log(user, result, Number(username));
      return { user };
    }
  }

module.exports = JobSeekerUserCenterService;