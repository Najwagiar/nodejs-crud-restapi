import db from "../config/db.js";

// Menampilkan semua produk
// SELECT * FROM products
export const getProducts = (req, res) => {
    const sql = `
        SELECT products.*, categories.name AS category_name
        FROM products
        JOIN categories ON products.category_id = categories.id
    `;

    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ message: err });

        res.status(200).json(results);
    });
};

// Menyimpan produk
// INSERT INTO products (category_id, name, price) VALUES (?, ?, ?)
export const insertProduct = (req, res) => {
    const { category_id, name, price } = req.body;

    db.query(
        "INSERT INTO products (category_id, name, price) VALUES (?, ?, ?)",
        [category_id, name, price],
        (err) => {
            if (err) return res.status(500).json({ message: err });

            res.status(201).json({ message: "Produk berhasil ditambahkan!" });
        }
    );
};

// Menampilkan produk berdasarkan ID
// SELECT * FROM products WHERE id = ?
export const showProduct = (req, res) => {
    const { id } = req.params;

    db.query(
        "SELECT * FROM products WHERE id = ?",
        [id],
        (err, results) => {
            if (err) return res.status(500).json({ message: err });

            if (results.length === 0) {
                return res.status(404).json({ message: "Produk tidak ditemukan!" });
            }

            res.json(results[0]);
        }
    );
};

// Update produk
// UPDATE products SET category_id=?, name=?, price=? WHERE id=?
export const updateProduct = (req, res) => {
    const { id } = req.params;
    const { category_id, name, price } = req.body;

    db.query(
        "UPDATE products SET category_id=?, name=?, price=? WHERE id=?",
        [category_id, name, price, id],
        (err) => {
            if (err) return res.status(500).json({ message: err });

            res.json({ message: "Produk berhasil diupdate!" });
        }
    );
};

// Hapus produk
// DELETE FROM products WHERE id=?
export const deleteProduct = (req, res) => {
    const { id } = req.params;

    db.query(
        "DELETE FROM products WHERE id = ?",
        [id],
        (err) => {
            if (err) return res.status(500).json({ message: err });

            res.json({ message: "Produk berhasil dihapus!" });
        }
    );
};