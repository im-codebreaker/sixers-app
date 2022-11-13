module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'teams';
  db.schema.hasTable(tableName).then(exists => {
    if(!exists) {
      db.schema.createTable(tableName, table => {
        table.increments('id');
        table.string('abbreviation', 3).notNullable();
        table.string('name', 20).notNullable();
        table.string('city', 20).notNullable();
        table.string('arena', 50).notNullable();
        table.string('logo').notNullable();
        table.string('color',6).notNullable();
        table.string('alternateColor',6).notNullable();
        table.timestamp('createdAt');
        table.timestamp('updateddAt');
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });
  
  return db;
};
