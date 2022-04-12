import connection from "../database.js"

export function insert(userId, value, type) {
  return connection.query(`
    INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)
  `, [userId, value, type])
}

export function getEvents(id) {
  return connection.query(`
    SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC
  `, [id])
}