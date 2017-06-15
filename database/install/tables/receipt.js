module.exports = {
  name: 'receipt',
  setup(table) {
    table.integer('shop_id').unsigned();
    table.foreign('shop_id').references('shop.id');

    table.timestamp('added');
  },
  references: ['shop']
};
