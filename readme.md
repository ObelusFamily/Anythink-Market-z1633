# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup
1) Install Docker
2) Verify Docker is installed by running the commands docker -v and docker-compose -v in your terminal. They should return the version numbers and info.
3) Once verified, check the backend by visiting http://localhost:3000/api/ping
4) Then, check the frontend by visting http://localhost:3001/register , you should be able to create a new user if everything is working properly.

