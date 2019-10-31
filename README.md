# My Diary
Its an Online Diary that helps users pen down thier thoughts with ease
## Installation
Clone the repo to your local Machine
Cd to the directory of the folder `./MyDiary`
Run `npm install` to install all the dependencies
Run `npm start` to start the project to the live server
### Prerequisites
- Node 
### Tech / Frameworks Used
- Git 
- Express
## Running the tests
- To run test `npm test`
### Api Routes
| HTTP VERB    | ENDPOINT                | FUNCTIONALITY            |
| :---         |     :---:               |          ---:            |
| POST         | api/v1/entries          | Add an Entry to diary    |
| PUT          | api/v1/entries/:id      | Update an Entry          |
| DELETE       | api/v1/entries/:id      | Delete an Entry          |
| GET          | api/v1/entries          | Get all entrie in diary  |
| GET          | api/v1/entries/:id      | Get an Entry             |
| POST         | api/v1/user/auth/signup | Create a user            |
| POST         | api/v1/user/auth/login  | Sign in a user           |

