(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var fn = require('./template.html')

var html = fn({id: 1, i: 1, fromUser: 'userX', profileImageUrl: '/', text: 'text'})

document.getElementById('mount').innerHTML = html

},{"./template.html":2}],2:[function(require,module,exports){
module.exports = function anonymous(obj
/**/) {
var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div id="', id ,'" class="', (i % 2 == 1 ? "even" : "odd") ,'">   <div>     <img src="', profileImageUrl ,'"/>   </div>   <div class="contents">     <p><b><a href="/', fromUser ,'">', fromUser ,'</a>:</b> ', text ,'</p>   </div> </div> ');}return p.join('');
}
},{}]},{},[1]);
