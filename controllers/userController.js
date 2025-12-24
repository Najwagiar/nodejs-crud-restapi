import db from "../config/db.js";

// 1. Menampilkan data dari tabel
// sql ? SELECT * FROM users
export const getUsers = (req, res) => {
    db.query("SELECT  * FROM users", (err, results) => {
        // jika ada error
        if(err) res.status(500).json({err, results});

        //jika berhasil 
        res.json(results);
    });
};

// 2. Menyimpan data
// sql ? INSERT INTO users (name, emaiil, password) values (???)
export const insertUser = (req, res) => {
    const {name, email, password} = req.body;

    db.query("INSERT INTO users (name, email,password) VALUES (?, ?, ?)", 
        [name, email,password], (err, results) => {

        // Jika terjadi error
        if (err) res.status(500).json({ message: err});
        // Jika berhasil
        res.status(201).json({ message: "Data berhasil disimpan!" });

        }
    );
};

// 3. Menampilkan data berdasarkan id
// sql? SELECT * FROM users WHERE id=?
export const showUser = (req, res) => {
    const {id} = req.params;

    db.query("SELECT * FROM users WHERE id=?", [id], (err, result) => {
        //jika ada eror
        if (err) res.status(500).json({message: err});

        //jika data tidak ditemukan
        if (result.length === 0) {
            return res.status(400).json({message:"User tidak ditemukan"});
        }

        //jika ditemukan
        res.json(result[0]);
    });
};

// 4. Update data berdasarkan id
// sql ? UPDATE users SSET name=?, email=?, WHERE id=?
export const updateUser = (req, res) => {
    const { id }  = req.params;
    const { name, email } = req.body;

    db.query("UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?", [name, email,password, id], (err, results) => {
        // Jika terjadi error
        if (err) res.status(500).json({ message: err});
        // Jika berhasil
        res.json({ message: "Data berhasil diupdate!" });
    });
};


// 5. delete data berdasarkan id
export const deleteUser = (req, res) => {
    //jika ada eror
    if (err) res.status(500).json({ message: err });

    //jika berhasil
    res.json({ message: "data berhasil dihapus"});

};