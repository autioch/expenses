module.exports = {
  name: 'type',
  setup(table) {
    table.integer('category_id').unsigned();
    table.foreign('category_id').references('category.id');
  },
  references: ['category']
};
