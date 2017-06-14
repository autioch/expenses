const MAX_VAR = 255; // eslint-disable-line no-magic-numbers
const LABEL = 50; // eslint-disable-line no-magic-numbers

module.exports = [{
  tableName: 'category',
  callback(table) {
    table.string('name', LABEL);
  }
}, {
  tableName: 'type',
  callback(table) {
    table.string('name', LABEL);
    table.integer('category_id').unsigned();
    table.foreign('category_id').references('category.id');
  }
}, {
  tableName: 'shop',
  callback(table) {
    table.string('name', LABEL);
    table.string('comment', MAX_VAR);
  }
}, {
  tableName: 'expense',
  callback(table) {
    table.integer('type_id').unsigned();
    table.integer('shop_id').unsigned();
    table.float('price');
    table.float('amount');
  }
}];
