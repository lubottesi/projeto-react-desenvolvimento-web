# React Mini Apps

A single-page React app with five small tools, each on its own route and reachable from the header tabs:

- **To-Do List** - add, complete and remove tasks
- **Click Counter**
- **Tic-Tac-Toe** - two players on the same screen
- **Calculator**
- **CEP Search** - looks up a Brazilian postal code (CEP) using the [ViaCEP](https://viacep.com.br) API and shows the street, neighborhood and city

Built for a web development course.

**Live:** https://projeto-react-desenvolvimento-web.vercel.app

## Stack

- React 19 (Create React App)
- React Router 7
- CSS
- ViaCEP API

## Running locally

```bash
npm install
npm start
```

Then go to http://localhost:3000.

## Structure

```
src/
  App.js          # header tabs and routes
  components/     # toDoList, clickCounter, ticTacToe, calculator, cepSearch
```
