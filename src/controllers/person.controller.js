import {
  createPersonService,
  deletePersonService,
  getPersonService,
  getPersonsService,
  updatePersonService,
} from "../services/person.service.js";

export const getPersons = async (req, res) => {
  await getPersonsService(req, res);
};

export const getPerson = async (req, res) => {
  await getPersonService(req, res);
};

export const createPerson = async (req, res) => {
  await createPersonService(req, res);
};

export const deletePerson = async (req, res) => {
  await deletePersonService(req, res);
};

export const updatePerson = async (req, res) => {
  await updatePersonService(req, res);
};
