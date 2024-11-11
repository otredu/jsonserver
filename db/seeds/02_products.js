/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('product').del()
  await knex('product').insert([
    {id: 1, name: 'lippis', description: "musta lippis", price: 55, img: "https://shmector.com/_ph/14/188299862.png"},
    {id: 2, name: 't-paita', description: "sininen t-paita", price: 45, img: "https://reserve.freesvg.org/img/samarreta.png"},
    {id: 3, name: 'huppari', description: "musta huppari", price: 80, img: "https://vectorportal.com/storage/hoodieback20_7748.jpg"},
  ]);
};
