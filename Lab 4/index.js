const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
const router = require("./router");
const fs = require("fs");

const customReadFile = (file, res) => {
  fs.readFile(`./${file}`, (errors, data) => {
    if (errors) {
      var date = new Date();
      console.log("Error reading the file ", file, " at ", date);
    } 
    res.end(data);
  });
};

router.get("/lab1.css", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("public/css/lab1.css", res);
});

router.get("/", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("views/index.html", res);
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

router.get("/books.html", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("views/books.html", res);
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

router.get("/contact.html", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("views/contact.html", res);
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

router.get("/survey.html", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("views/survey.html", res);
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

router.get("/books/percy-jackson-and-the-lightening-thief.html", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("views/books/percy-jackson-and-the-lightening-thief.html", res);
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

router.get("/the-lightning-thief-215x300.png", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("public/images/the-lightning-thief-215x300.png", res);
});

router.get("/books/percy-jackson-and-the-sea-of-monsters.html", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("views/books/percy-jackson-and-the-sea-of-monsters.html", res);
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

router.get("/the-sea-of-monsters-3D-215x300.png", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("public/images/the-sea-of-monsters-3D-215x300.png", res);
});

router.get("/books/percy-jackson-and-the-titan's-curse.html", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("views/books/percy-jackson-and-the-titan's-curse.html", res);
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

router.get("/the-titans-curse-3D-215x300.png", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("public/images/the-titans-curse-3D-215x300.png", res);
});

router.get("/books/percy-jackson-and-the-battle-of-the-labyrinth.html", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("views/books/percy-jackson-and-the-battle-of-the-labyrinth.html", res);
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

router.get("/the-battle-of-the-labyrinth-3D-215x300.png", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("public/images/the-battle-of-the-labyrinth-3D-215x300.png", res);
});

router.get("/books/percy-jackson-and-the-last-olympian.html", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("views/books/percy-jackson-and-the-last-olympian.html", res);
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

router.get("/the-last-olympian-3D-215x300.png", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("public/images/the-last-olympian-3D-215x300.png", res);
});

router.post("/", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  res.end("POSTED");
});

http.createServer(router.handle).listen(3000);
console.log(`The server is listening on port number: ${port}`);