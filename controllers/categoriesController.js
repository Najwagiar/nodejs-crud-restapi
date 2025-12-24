import db from "../config/db.js";

// Menampilkan semua kategori
// SELECT * FROM categories
export const getCategories = (req, res) => {
    db.query("SELECT * FROM categories", (err, results) => {

        if (err) return res.status(500).json({ message: err });

        res.status(200).json(results);
    });
};

// Menyimpan kategori
// INSERT INTO categories (name) VALUES (?)
export const insertCategory = (req, res) => {
    const { name } = req.body;

    db.query(
        "INSERT INTO categories (name) VALUES (?)",
        [name],
        (err, results) => {
            if (err) return res.status(500).json({ message: err });

            res.status(201).json({ message: "Kategori berhasil ditambahkan!" });
        }
    );
};

// Menampilkan kategori berdasarkan ID
// SELECT * FROM categories WHERE id = ?
export const showCategory = (req, res) => {
    const { id } = req.params;

    db.query(
        "SELECT * FROM categories WHERE id = ?",
        [id],
        (err, results) => {
            if (err) return res.status(500).json({ message: err });

            if (results.length === 0) {
                return res.status(404).json({ message: "Kategori tidak ditemukan!" });
            }

            res.json(results[0]);
        }
    );
};

// Update kategori
// UPDATE categories SET name=? WHERE id=?
export const updateCategory = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    db.query(
        "UPDATE categories SET name = ? WHERE id = ?",
        [name, id],
        (err) => {
            if (err) return res.status(500).json({ message: err });

            res.json({ message: "Kategori berhasil diupdate!" });
        }
    );
};

// Hapus kategori
// DELETE FROM categories WHERE id=?
export const deleteCategory = (req, res) => {
    const { id } = req.params;

    db.query(
        "DELETE FROM categories WHERE id = ?",
        [id],
        (err) => {
            if (err) return res.status(500).json({ message: err });

            res.json({ message: "Kategori berhasil dihapus!" });
        }
    );
};