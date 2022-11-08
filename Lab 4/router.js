const fs = require("fs");

const customReadFile = (file, res) => {
  fs.readFile(`./${file}`, (errors, data) => {
    if (errors) {
      console.log("Error reading the file...");
    }
    res.end(data);
  });
};

const httpStatus = require("http-status-codes"),
  htmlContentType = {
    "Content-Type": "text/html",
  };
const routes = {
  GET: {},
  POST: {},
};

exports.handle = (req, res) => {
  try {
    if (routes[req.method][req.url]) {
      routes[req.method][req.url](req, res);
    } else {
      res.writeHead(httpStatus.StatusCodes.NOT_FOUND, htmlContentType);
      customReadFile("views/404.html", res);
    }
  } catch (ex) {
    console.log("error: " + ex);
  }
};

exports.get = (url, action) => {
  routes["GET"][url] = action;
};

exports.post = (url, action) => {
  routes["POST"][url] = action;
};
