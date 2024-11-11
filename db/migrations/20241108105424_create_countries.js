/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('country', t => {
        t.increments('id').primary()
        t.string('name').notNullable()
        t.string('capital').notNullable()
        t.integer('population').notNullable()
        t.string('flag').notNullable()
    })
    .createTable('product', t => {
        t.increments('id').primary()
        t.string('name').notNullable()
        t.string('description').notNullable()
        t.decimal('price').notNullable()
        t.string('img').notNullable()
    })
    .createTable('order', t => {
        t.increments('id').primary()
        t.string('firstname').notNullable()
        t.string('lastname').notNullable()
        t.string('address').notNullable()
        t.decimal('email').notNullable()
    })
    .createTable('orderitem', t => {
        t.increments('id').primary()
        t.integer('amount').notNullable()
        t.integer('product_id').unsigned().references('id').inTable('order').notNull().onDelete('cascade')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
