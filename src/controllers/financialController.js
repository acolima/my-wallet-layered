import * as financialService from "../services/financialService.js"

export async function insertEvent(req, res) {
  const { user } = res.locals
  const { value, type } = req.body

  await financialService.insertEvent(user.id, value, type)

  res.sendStatus(201);
}

export async function getEvents(req, res) {
  const { user } = res.locals

  const events = await financialService.getEvents(user.id)

  res.send(events.rows);
}

export async function calculateSum(req, res) {
  const { user } = res.locals

  const events = await financialService.getEvents(user.id)

  const sum = events.rows.reduce(
    (total, event) =>
      event.type === "INCOME" ? total + event.value : total - event.value,
    0
  );

  res.send({ sum });
}