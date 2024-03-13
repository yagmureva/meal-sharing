const express = require("express");
const router = express.Router();
const knex = require("../database");
router.get("/", async (request, response) => {
  try {
    const reservations = await knex("reservations");
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    await knex("reservations").insert({
      number_of_guests: request.body.number_of_guest,
      meal_id: request.body.meal_id,
      created_date: new Date(),
      contact_phonenumber: request.body.phone_number,
      contact_name: request.body.name,
      contact_email: request.body.email,
    });
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const reservations = await knex("reservations").where({
      id: Number(request.params.id),
    });
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  try {
    const reservations = await knex("reservations")
      .where({ id: Number(request.params.id) })
      .update(request.body);
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});
router.delete("/:id", async (request, response) => {
  try {
    const reservations = await knex("reservations")
      .where({ id: Number(request.params.id) })
      .del();
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});
module.exports = router;
