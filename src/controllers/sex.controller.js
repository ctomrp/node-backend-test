import {
  createSexService,
  deleteSexService,
  getSexService,
  getSexesService,
  updateSexService,
} from "../apis/sex.service.js";

export const getSexes = async (req, res) => {
  await getSexesService(req, res);
};

export const getSex = async (req, res) => {
  await getSexService(req, res);
};

export const createSex = async (req, res) => {
  await createSexService(req, res);
};

export const deleteSex = async (req, res) => {
  await deleteSexService(req, res);
};

export const updateSex = async (req, res) => {
  await updateSexService(req, res);
};
