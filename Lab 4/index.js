const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
const router = require("./router");
const fs = require("fs");

const customReadFile = (file, res) => {
  fs.readFile(`./${file}`, (errors, data) => {
    if (errors) {
      console.log("Error reading the file...", file);
    } else {
      console.log("Successfully outputting ", file);
    }
    res.end(data);
  });
};

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

router.get("/books/percy-jackson-and-the-sea-of-monsters.html", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("views/books/percy-jackson-and-the-sea-of-monsters.html", res);
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

router.get("/books/percy-jackson-and-the-titan's-curse.html", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("views/books/percy-jackson-and-the-titan's-curse.html", res);
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

router.get("/books/percy-jackson-and-the-battle-of-the-labyrinth.html", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("views/books/percy-jackson-and-the-battle-of-the-labyrinth.html", res);
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

router.get("/books/percy-jackson-and-the-last-olympian.html", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  customReadFile("views/books/percy-jackson-and-the-last-olympian.html", res);
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

router.post("/", (req, res) => {
  res.writeHead(httpStatus.StatusCodes.OK);
  res.end("POSTED");
});


const app = http.createServer(router.handle);
app.on("request", (req, res) => {
  let url = req.url;
  if (url.indexOf(".html") !== -1) {
    res.writeHead(httpStatus.StatusCodes.OK, {
      "Content-Type": "text/html"
    });
    customReadFile(`./views${url}`, res);
  } else if (url.indexOf(".js") !== -1) {
    res.writeHead(httpStatus.StatusCodes.OK, {
      "Content-Type": "text/javascript"
    });
    customReadFile(`./public/js${url}`, res);
  } else if (url.indexOf(".css") !== -1) {
    res.writeHead(httpStatus.StatusCodes.OK, {
      "Content-Type": "text/css"
    });
    customReadFile(`public/css${url}`, res);
  } else if (url.indexOf(".png") !== -1) {
    res.writeHead(httpStatus.StatusCodes.OK, {
      "Content-Type": "image/png"
    });
    customReadFile(`public/images${url}`, res);
  }
});
app.listen(3000);
console.log(`The server is listening on port number: ${port}`);