const { Service } = require('feathers-knex');

exports.Teams = class Teams extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'teams'
    });
  }
};
