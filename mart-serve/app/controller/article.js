"use strict";

const Controller = require("egg").Controller;

class ArticleController extends Controller {
  async list() {
    const result = await this.ctx.service.article.list(this.ctx.query);
    if (result.length) {
      this.ctx.status = 200;
      this.ctx.body = {
        code: 1,
        msg: "找到数据了",
        result,
      };
    } else {
      this.ctx.body = {
        code: 0,
        msg: "没有更多数据了！",
        result: [],
      };
    }
  }

  async add() {
    console.log(this.ctx.request.body)
    const result = await this.service.article.add(this.ctx.request.body);
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: "添加成功！",
      };
    } else {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
        msg: "添加失败！",
      };
    }
  }

  async edit() {
    if (!this.ctx.request.body.aid) {
      return (this.ctx.body = {
        code: 0,
        msg: "不能为空aid！",
      });
    }
    const result = await this.service.article.edit(this.ctx.request.body);
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: "更新成功！",
      };
    } else {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
        msg: "更新失败！",
      };
    }
  }

  async del() {
    if (!this.ctx.request.query.aid) {
      return (this.ctx.body = {
        code: 0,
        msg: "不能为空aid！",
      });
    }
    const result = await this.service.article.delete(this.ctx.query);
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: "删除成功！",
      };
    } else {
      this.ctx.status = 406;
      this.ctx.body = {
        code: 0,
        msg: "删除失败！",
      };
    }
  }
}

module.exports = ArticleController;
