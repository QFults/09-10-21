const mysql = require('mysql2')

const db = mysql.createConnection('mysql://root:rootroot@localhost:3306/users_db')

// db.query('SELECT * FROM users', (err, users) => {
//   if (err) { console.log(err) }
//   console.log(users)
// })

// let username = 'johndoe'

// db.query('SELECT * FROM users WHERE username = ?', username, (err, users) => {
//   if (err) { console.log(err) }
//   console.log(users)
// })

// let username = 'johndoe'

// db.query('SELECT * FROM users WHERE ? AND ?', [{ username }, { age: 45 }], (err, users) => {
//   if (err) { console.log(err) }
//   console.log(users)
// })

// const user = {
//   username: 'jamieddoe',
//   email: 'jamiedoe@gmail.com',
//   age: 50,
//   signedIn: false
// }

// db.query('INSERT INTO users SET ?', user, err => {
//   if (err) { console.log(err) }
//   console.log('users created!')
// })

// const updates = { age: 51, signedIn: true }
// const where = { username: 'jamieddoe' }

// db.query('UPDATE users SET ? WHERE ?', [updates, where], err => {
//   if (err) { console.log(err) }
//   console.log('user updated!')
// })

// db.query('DELETE FROM users WHERE ?', { username: 'jamieddoe' }, err => {
//   if (err) { console.log(err) }
//   console.log('user deleted!')
// })
