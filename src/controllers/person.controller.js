import { pool } from "../db.js";

export const getPersons = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM person");
    res.json(rows);
  } catch (error) {
    console.log("Error at getPersons:: ", error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const getPerson = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM person WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length <= 0)
      return res.status(404).json({ message: "Person not found" });
    res.json(rows[0]);
  } catch (error) {
    console.log("Error at getPerson:: ", error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const createPerson = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      dni,
      sex_id,
      phone_number,
      address,
      birth_date,
      email,
    } = req.body;
    const [result] = await pool.query(
      "INSERT INTO person (first_name, last_name, dni, sex_id, phone_number, address, birth_date, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        first_name,
        last_name,
        dni,
        sex_id,
        phone_number,
        address,
        birth_date,
        email,
      ]
    );

    const insertedId = result.insertId;

    res.status(201).json({
      id: insertedId,
      first_name,
      last_name,
      dni,
      sex_id,
      phone_number,
      address,
      birth_date,
      email,
    });
  } catch (error) {
    console.log("Error at createPerson:: ", error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const deletePerson = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM person WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "Person not found" });

    res.sendStatus(204);
  } catch (error) {
    console.log("Error at deletePerson:: ", error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const updatePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      first_name,
      last_name,
      dni,
      sex_id,
      phone_number,
      address,
      birth_date,
      email,
    } = req.body;

    const [result] = await pool.query(
      "UPDATE person SET first_name = IFNULL(?, first_name), last_name = IFNULL(?, last_name), dni = IFNULL(?, dni), sex_id = IFNULL(?, sex_id), phone_number = IFNULL(?, phone_number), address = IFNULL(?, address), birth_date = IFNULL(?, birth_date), email = IFNULL(?, email) WHERE id = ?",
      [
        first_name,
        last_name,
        dni,
        sex_id,
        phone_number,
        address,
        birth_date,
        email,
        id,
      ]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Person not found" });

    const [rows] = await pool.query("SELECT * FROM person WHERE id = ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    console.log("Error at updatePerson:: ", error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};
