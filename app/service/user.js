
const Service = require('egg').Service;

class UserService extends Service {
  async find(username) {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const result = await this.app.mysql.insert('posts', { title: 'Hello World' });

    console.log(user, result, Number(username));
    return { user };
  }
  async register({ username, password, type }) {
    const user = await this.app.mysql.get('jobhunter_userinfo', { username, password });
    // 判断插入成功
    const insertSuccess = result.affectedRows === 1;
    if (insertSuccess) {
      return {
        code: 1,
      };
    }
    return {
      code: 0,
    };
  }
}

module.exports = UserService;
