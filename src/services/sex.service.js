import { pool } from "../db.js";

export async function getSexesService(req, res) {
  try {
    const [rows] = await pool.query("SELECT * FROM sex");
    res.json(rows);
  } catch (error) {
    console.log("Error at getSexes:: ", error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
}

export async function getSexService(req, res) {
  try {
    const [rows] = await pool.query("SELECT * FROM sex WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length <= 0)
      return res.status(404).json({ message: "Sex not found" });
    res.json(rows[0]);
  } catch (error) {
    console.log("Error at getSex:: ", error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
}

export async function createSexService(req, res) {
  try {
    const { name } = req.body;
    const [rows] = await pool.query("INSERT INTO sex (name) VALUES (?)", [
      name,
    ]);
    res.send({
      id: rows.insertId,
      name,
    });
  } catch (error) {
    console.log("Error at createSex:: ", error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
}

export async function deleteSexService(req, res) {
  try {
    const [result] = await pool.query("DELETE FROM sex WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "Sex not found" });

    res.sendStatus(204);
  } catch (error) {
    console.log("Error at deleteSex:: ", error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
}

export async function updateSexService(req, res) {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const [result] = await pool.query(
      "UPDATE sex SET name = IFNULL(?, name) WHERE id = ?",
      [name, id]
    );

    if (result.affectedRows == 0)
      return res.status(404).json({ message: "Sex not found" });

    const [rows] = await pool.query("SELECT * FROM sex WHERE id = ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    console.log("Error at updateSex:: ", error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
}
