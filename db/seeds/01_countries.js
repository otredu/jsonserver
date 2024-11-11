/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('country').del()
  await knex('country').insert( [
    {   name:"Finland",
        capital:"Helsinki",
        population:5491817,
        flag:"https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg"
    },
    {   name:"Sweden",
        capital:"Stockholm",
        population:9894888,
        flag:"https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg"
    },
    {   name:"Norway",
        capital:"Oslo",
        population:5223256,
        flag:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg"
    },
    {   name:"Denmark",
        capital:"Copenhagen",
        population:5717014,
        flag:"https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg"
    },
    {   name:"Iceland",
        capital:"Reykjavík",
        population:334300,
        flag:"https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg"
    }]);
};
