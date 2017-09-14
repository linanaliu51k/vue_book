const http = require('http');
const url = require('url');
const fs = require('fs');
const sliders = require('./sliders.js');
function read(callback) {
    fs.readFile('./book.json', 'utf-8', function (err, data) {
        if (err || data === '') {
            callback([]);
        }
        callback(JSON.parse(data));
    });
}
function write(data, callback) {
    fs.writeFile('./book.json', JSON.stringify(data), callback);
}
http.createServer(function(req, res) {
    let {pathname, query} = url.parse(req.url, true);
    let id = query.id;
    if (pathname == '/api/sliders') {
        res.end(JSON.stringify(sliders));
    }
    if (pathname == '/api/hot') {
        read(function (data) {
            data = data.reverse().slice(0, 6);
            res.end(JSON.stringify(data));
        })
    }
    if (pathname == '/api/book') {
        switch (req.method) {
            case 'GET':
                if (id) {
                    read(function (books) {
                        var onebook = books.find(book=>book.id==id);
                        res.end(JSON.stringify(onebook));
                    })
                } else {
                    read(function (data) {
                        data = data.reverse();
                        res.end(JSON.stringify(data));
                    })
                }
                break;
            case 'POST':
                var str = '';
                req.on('data', function (chunk) {
                    str += chunk;
                })
                req.on('end', function () {
                    let book = JSON.parse(str);
                    read(function (books) {
                        book.id = books.length ? books[books.length-1].id + 1 : 1;
                        books.push(book);
                        write(books, function() {
                            res.end(JSON.stringify({}));
                        });
                    });
                });
                break;
            case 'PUT':
                var str = '';
                req.on('data', function (chunk) {
                    str += chunk;
                })
                req.on('end', function () {
                    let getBook = JSON.parse(str);
                    read(function (books) {
                        books = books.map(book=>{
                            if (id == book.id) {
                                return getBook;
                            }
                            return book;
                        });
                        write(books, function() {
                            res.end(JSON.stringify({}));
                        });
                    });
                });
                break;
            case 'DELETE':
                if (id) {
                    read(function (books) {
                        books = books.filter(book=>book.id!=id);
                        write(books, function() {
                            res.end(JSON.stringify({}));
                        });
                    });
                }
                break;
        }
    }
}).listen('8888');
