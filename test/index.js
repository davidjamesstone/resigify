var fn = require('./template.html')

var html = fn({id: 1, i: 1, fromUser: 'userX', profileImageUrl: '/', text: 'text'})

document.getElementById('mount').innerHTML = html
