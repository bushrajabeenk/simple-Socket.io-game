# simple-Socket.io-game

Tried building a simple socket.io game problem in a period of 3 hours as part of evaluation at Masai School.

Problem Statement

Create a web based two player game in nodejs with websockets
game has a very basic UI, feel free to use simple HTML/JS/CSS.
Whenever a player visits site, show him basic ui with following elements
page has 2 vertical sections, left hand side is the current player info, right hand is opponend
if opponent has not joined yet, show user a message "Waiting for opponent"
on users side, show his health, which is 100, and a button that says "attack"
this info is shown on left hand side, you cannot see opponents 'attack' button
but you can see his health.
refer this screenshot
when user clicks 'attack' opponents health decreases randomly by 1 to 5.
this information is updated in both the UI immediately.
when the opponent's health reaches to 0, show "User X Won" with users information like his name or anything else.
feel free to hardcode the names like User 1 and User 2 but it could be just simple prompt function whenever user joins.
Another thing is 'server' also attacks both the Users at once every 2 seconds.
Severs attack causes 1 damage.

Tech stack: 
* HTML
* JavaScript
* Node.js
* Express.js
* Socket.io
