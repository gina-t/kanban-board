# kanban-board

Add authentication with JSON Web Token to an existing Kanban board application.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing Guidelines](#contributing-guidelines)
- [Testing](#testing)
- [Authors and Acknowledgements](#authors-and-acknowledgements)


## Description

A full stack single page app created with Vite, React, Typescript, Sequelise, JSON Web Token.

## Installation

1. Clone the repository

```zsh

git clone git@github.com:gina-t/kanban-board.git

```

2. There are 3 separate package.json to manage dependencies: Root, Client, and Server.

3. Root package.json

```zsh

npm install sequelize pg jsonwebtoken bcrypt 
npm install --save-dev prettier eslint-config-prettier

```
4. Server package.json

```zsh

cd server
npm install dotenv express

```

5. Client package.json

```zsh

cd client
npm install jwt-decode react react-dom react-router-dom vite

```

6. Download PostgreSQL from https://www.postgresql.org/download/ for your OS and generate a password

7. Generate a secure random string to use as JWT secret key and store in .env file. In root directory:

```zsh

node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

```

## Usage

### screenshot 1
### screenshot 2
### screenshot 3

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributing Guidelines

Create a new branch for the commit and start a pull request.

## Testing


## Authors and Acknowledgements

[email] (ginadrcoder@gmail.com)


## Questions

For enquiries, please contact me at:

[email] (ginadrcoder@gmail.com)
[github] (https://github.com/gina-t)


