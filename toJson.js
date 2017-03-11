const SqliteToJson = require('sqlite-to-json');
const sqlite3 = require('sqlite3');
const exporter = new SqliteToJson({
  client: new sqlite3.Database('./sqlite.db')
});
exporter.save('t_poetry', './data/poetry.json', function (err) {
  // no error and you're good. 
});