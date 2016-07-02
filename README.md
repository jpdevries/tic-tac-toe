# tic-tac-toe
Tic-Tac-Toe in HTML5. Keyboard and Screen Reader Accessible.

## Demo
[Play Tic-Tac-Toe](https://jpdevries.github.io/tic-tac-toe/) with a friend. 


## Keyboard Accessible
Implicit keyboard accessible is provided by the use of the `<input type="checkbox">` element. Each "cell" of the game board is a custom styled `<input type="checkbox">` and recieved keyboard focused, can be tabbed through, and checked using the spacebar&nbsp;key.
![](http://j4p.us/290F360Q1E2T/Screen%20Shot%202016-07-03%20at%201.07.51%20AM.png)

## Screen Reader Support
Forcefully hidden (`display:none`) text along with `aria-describedby` is used to describe the game to screen readers. As the game is played and users take turns the hidden text is updated and read aloud each time a game "cell" recieves&nbsp;focus.

![](http://j4p.us/0Q3340090g3Z/Screen%20Shot%202016-07-03%20at%201.18.17%20AM.png)
![](http://j4p.us/0c0n1P302W0C/Screen%20Shot%202016-07-03%20at%201.20.26%20AM.png)

## Progressive Enhancement
The `<noscript>` tag is used to remind users to enable JavaScript for the game. Since the game is enhanced from a semantic `<form>`, the game could technically be played through syncrounous form submissions however that is not demonstrated&nbsp;here.


