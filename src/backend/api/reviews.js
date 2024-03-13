const express = require("express");
const router = express.Router();
const knex = require("../database");
router.get("/", async (request, response) => {
  try {
    const reviews = await knex("reviews");
    response.json(reviews);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    await knex("reviews").insert({
      meal_id: request.body.meal_id,
      title: request.body.title,
      description: request.body.description,
      stars: request.body.stars,
      created_date: new Date(),
    });
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const reviews = await knex("reviews").where({
      id: Number(request.params.id),
    });
    response.json(reviews);
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  try {
    const reviews = await knex("reviews")
      .where({ id: Number(request.params.id) })
      .update(request.body);
    response.json(reviews);
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const reviews = await knex("reviews")
      .where({ id: Number(request.params.id) })
      .del();
    response.json(reviews);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
