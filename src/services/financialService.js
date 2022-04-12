import * as financialRepository from "../repositories/financialRepository.js"

export async function insertEvent(userId, value, type) {
  await financialRepository.insert(userId, value, type)
}

export async function getEvents(id) {
  await financialRepository.getEvents(id)
}