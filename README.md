# ASatu - Web

ASatu - Sosial Media pusat informasi kondisi jalan raya

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Backend Dev Note

## Table of Contents

- [API Documentation](#api-documentation)
  - [Endpoint](#endpoint)
  - [Body](#body)
- [Progress Logs and Notes](#progress-logs-and-notes)

## API Documentation

### Endpoint

| Method   | Endpoints                       | Action                                            |
| -------- | ------------------------------- | ------------------------------------------------- |
| `GET`    | `/api/user`                     | To retrieve a list of user **(DEV only)**         |
| `POST`   | `/api/user/register`            | To register a new user accoun [<Body>](#Register) |
| `GET`    | `/api/user/:userId`             | To retrieve a user profile                        |
| `GET`    | `/api/user/:userId/posts`       | To retrieve a list of posts from user             |
| `GET`    | `/api/user/:userId/comments`    | To retrieve a list of comments from user          |
| `GET`    | `/api/user/:userId/contributes` | To retrieve a list of contributions from user     |
| `POST`   | `/api/post`                     | To create a post [<Body>](#Post)                  |
| `GET`    | `/api/post`                     | To retrieve a list of all posts                   |
| `GET`    | `/api/post/:postId`             | To retrieve a post                                |
| `GET`    | `/api/post/:postId/comments`    | To retrieve a list of comments from post          |
| `POST`   | `/api/vote/upvote`              | To make a upvote [<Body>](#Vote)                  |
| `DELETE` | `/api/vote/upvote`              | To cancel the upvote [<Body>](#Vote)              |
| `POST`   | `/api/vote/downvote`            | To make a downvote [<Body>](#Vote)                |
| `DELETE` | `/api/vote/downvote`            | To cancel the downvote [<Body>](#Vote)            |
| `POST`   | `/api/comment`                  | To create a comment [<Body>](#Comment)            |
| `PATCH`  | `/api/comment`                  | To edit a comment [<Body>](#Comment)              |
| `POST`   | `/api/contribute`               | To request a contribution [<Body>](#Contribute)   |
| `PATCH`  | `/api/contribute`               | To accept contribution [<Body>](#Contribute)      |

### Body

#### Register

```
{
	email: string,
	username: string,
	name: string,
	password: string
}
```

#### Post

```
{
	author: number,
	body: string,
	location?: string, // string location ex: Magelang, Kota Magelang, Jawa Tengah
	geoLocation?: string, // the latitude and longitude coordinates from GPS
}
** location and geoLocation is optional
```

#### Vote

```
To create a comment
{
	userId: number,
	postId: number
}
```

```
To edit a comment
{
	id: number // vote id
}
```

#### Comment

```
To make a comment
{
	userId: number,
	postId: number,
	body: string,
	parent?: number // If the comment is a sub comment then fill in the parent's comment ID. else don't fill it in
}

```

```
To edit a comment
{
	id: number,
	body: string
}
```

#### Contribute

```
To request a contribution
{
	userId: number,
	postId: number
}

```

```
To accept contribution
{
	id: number // contribution id
}
```

## Progress Logs and Notes

### 18-07-2024

- setting database
- install plugins [prisma, prisma-client, next-auth, bcrypt]
- create model [user, post, vote, comment, contributor]
- create api route
- api just functionally, not yet modified with system needs
- authentication not yet tested

### 26-08-2024

- base responsive layout
- side nav
- bottom nav (for mobile)
- add package @svgr/webpack


## Credit

- Vectors and icons by Solar Icons in CC Attribution License via <a href="https://www.svgrepo.com/author/Solar%20Icons/" target="_blank">SVG Repo</a>
