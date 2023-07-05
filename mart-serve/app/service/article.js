/*
 * @Author: heinan
 * @Date: 2020-07-15 10:23:53
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-05 16:30:48
 */
"use strict";

const Service = require("egg").Service;
const { idCreator } = require("../utils");

class ArticleService extends Service {
  async list({ pagesize, pagecount }) {
    const $sql =
      pagesize && pagecount
        ? `select * from article limit ${(pagecount - 1) * pagesize},${
            pagesize * pagecount
          }`
        : `SELECT * FROM article`;
    return await this.ctx.app.mysql.query($sql);
  }

  async add({ title, author, sentence, create_time, publish_time, status }) {
    const aid = idCreator().slice(0, 20);
    const $params = [
      aid,
      title,
      author,
      sentence,
      create_time,
      publish_time,
      status,
    ];
    const $sql =
      "insert into article (aid,title, author, sentence, create_time, publish_time, `status` ) values (?,?,?,?,?,?,?)";
    return await this.ctx.app.mysql.query($sql, $params);
  }

  async edit({
    aid,
    title,
    author,
    sentence,
    create_time,
    publish_time,
    status,
  }) {
    const $sql =
      "UPDATE `mart`.`article` SET `title`=?, `author`=?, `sentence`=?, `create_time`=?, `publish_time`=?, `status`=? WHERE  `aid`=?";
    const $params = [
      title,
      author,
      sentence,
      create_time,
      publish_time,
      status,
      aid,
    ];
    return await this.ctx.app.mysql.query($sql, $params);
  }
  async delete({ aid }) {
    const $sql = "DELETE FROM `mart`.`article` WHERE  `aid`=?";
    return await this.ctx.app.mysql.query($sql, [aid]);
  }
}

module.exports = ArticleService;
