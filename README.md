#Anime List Backend

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
