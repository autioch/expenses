module.exports = {
  name: 'expense',
  setup(table) {
    table.integer('receipt_id').unsigned();
    table.foreign('receipt_id').references('receipt.id');
    table.integer('type_id').unsigned();
    table.foreign('type_id').references('type.id');

    table.float('price');
    table.float('amount');
  },
  references: ['type', 'receipt']
};
