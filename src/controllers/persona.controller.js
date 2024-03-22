import { pool } from '../db.js'

export const getPersonas = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM person')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

export const getPersona = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM person WHERE id = ?', [req.params.id])
        if(rows.length <= 0) return res.status(404).json({message: 'Person not found'})
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

export const createPersona = async (req, res) => {
    try {
        const {name, lastName} = req.body
        const [rows] = await pool.query('INSERT INTO person (name, last_name) VALUES (?, ?)', 
        [name, lastName])
        res.send({ 
            id: rows.insertId,
            name,
            lastName
         })        
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

export const deletePersona = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM person WHERE id = ?', [req.params.id])
        
        if(result.affectedRows <= 0) return res.status(404).json({message: 'Person not found'})
    
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

export const updatePersona = async (req, res) => {
    try {        
        const {id} = req.params
        const {name, lastName} = req.body
        const [result] = await pool.query('UPDATE person SET name = IFNULL(?, name), last_name = IFNULL(?, last_name) WHERE id = ?', [name, lastName, id])
    
        if(result.affectedRows == 0) return res.status(404).json({message: 'Person not found'})
    
        const [rows] = await pool.query('SELECT * FROM person WHERE id = ?', [id])
    
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
}
