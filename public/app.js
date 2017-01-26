(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

const app = angular.module('BestBookApp', []);


function Book(title, author, price) {
  this.title = title;
  this.author = author;
  this.price = price;

  this.cover = null;
  this.id = null;
  this.added = null;

  this.isFavorite = false;

  return this;
}

app.controller('NewBookController', function($scope, BookService){
  $scope.title = '';
  $scope.author= '';
  $scope.price = 0;

  $scope.newBook = function () {
    console.log('new book!');
    console.log(`${$scope.author} wrote ${$scope.title} and wants ${$scope.price} dollars for it`);
    const brandNewBook = new Book($scope.title, $scope.author, $scope.price)
    BookService.add(brandNewBook);
  };

});


app.controller('ShowBooksController', function($scope, BookService){
  $scope.books = BookService.getAll();

  $scope.favoriteBook = function (target) {
    console.log(target);
    BookService.markAsFavorite(target);
  }

});


// TODO: make a service to store books, this is where AJAX will be. There is another service called http service.
// factories always return an object (services)

app.factory('BookService', function($http){
  const books = [];

  // books.push(new Book('whatever', 'famous author', 17.98));
  // books.push(new Book('test book2', 'famous author2', 18.98));
  // books.push(new Book('test book3', 'famous author3', 22.98));

  //promises are a pattern in js for organizing asynchronous operations (event based things). instead of using callbacks, promises let us describ the order using then( ) statements.

  $http.get('http://api.queencityiron.com/books').then(function(response){
    // const bookslist = response.data.books;
    // bookslist.map(function(each){
    //   books.push(each);
    // })

    angular.copy(response.data.books, books)

  });

  return {
    add(book) {
      books.push(book);
      console.log(books);

      //when there is a book you want to add to the array, you will post it with ajax.
      //optional second argument to $http functions that lets us customize whats happening if you dont like defaults.
      // $http.post('http://api.queencityiron.com/books', book); //or ->

      $http.post('http://api.queencityiron.com/books', {
        title: book.title,
        author: book.author,
      });
    },
    getAll(){
      return books;
    },
    markAsFavorite(entry){
      console.log(entry.title + " is now your fave");
      entry.isFavorite = true;
    }
  }
})

},{}]},{},[1]);
