#Anime List Backend

## Setup
### Required
- MongoDB

### [Homebrew](http://brew.sh/)

Homebrew will help you install MongoDB

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### [MongoDB](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)

* First run brew update to update your brew packages.

  ```bash
  brew update
  ```
* Next run `brew install` for **MongoDB**

  ```bash
  brew install mongodb
  ```

* Then you'll need a directory for **MongoDB** to save data.

  ```bash
  sudo mkdir -p /data/db
  ```

* Finally make sure you have permission to read and write to this directory.

  ```bash
  sudo chown -R $USER /data/db
  ```

### [Robomongo](https://robomongo.org/)

OPTIONAL: Robomongo is a great utility that will connect with MongoDB and gives you a GUI of your app's no-sql db.
Definitely helps productivity.
MongoDB defaults to localhost:27017 just follow the steps Robomongo directs

### Initialize
1. `npm install`
2. `mongod` **When you are done make sure to kill this process! Otherwise it will continue running and kill your memory!**
3. Open another terminal and run `npm start`

## Tech
- MongoDB
- Express

Open backend for now to store a single list

## API
- `/anime-list` get all anime from the list
- `/anime-list/new` create a new anime item
- `/anime-list/:id`
  - GET a specific item using `_id`
  - PUT update a specific item using `_id`
  - DELETE a specific item

### Headers
- Allows `X-Mashape-Key`

## TODO
- Set up auth signup/login
