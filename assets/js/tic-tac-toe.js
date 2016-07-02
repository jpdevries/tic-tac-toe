/**
* From Thinkful Curric
*/

$(function() {
  updateBoardReads();

  var turn = 0;

  $('.square input').on("focus", function() {
    var square = $(this).closest('.square');
    $('#game-reads .current-square').text('on ' + $(square).find('label').clone().find('span').remove().end().text().slice(0, -1).toLowerCase());
  }).on("change", function() {
    $(this).focus();
    $(this).prop('disabled', true);
    var square = $(this).closest('.square');
    if ($(square).hasClass("empty")) {
      if (turn % 2 == 0) {
        $(square).removeClass("empty");
        $(square).attr("data-check", "X");
        $(this).val("X");
        $(this).closest('td').find('label span').text("X");
        $('#game-reads .whos-turn').text('Player 1');
        check("X");
        turn += 1;
        if (turn === 9) {
          alert("no one wins;");
          location.reload();
        }
        $('.messages').html("<p>Player 2's turn (O)</p>");
      } else {
        $(square).removeClass("empty");

        $(square).attr("data-check", "O");
        $(this).val("O");
        $(this).closest('td').find('label span').text("O");
        $('#game-reads .whos-turn').text('Player 2');
        check("O");
        turn += 1;
        if (turn === 9) {
          alert("no one wins;");
          location.reload();
        }
        $('.messages').html("<p>Player 1's turn (X)</p>");
      };
    }

    updateBoardReads();
  });

  $('#tic-tac-form').on('reset',function(e){
    updateBoardReads();
  });


});

function updateBoardReads() {
  $('.board-reads').html(
    jQuery.map($('.square'), function(n, i) {
      return $('<span>').text($(n).find('label').text() + '. ');
    })
  );
}

function check(xo) {
  var answers = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
  ];

  var won = false;
  var userMoves = [];

  for (var i = 0; i < answers.length; i += 1) {
    for (var j = 0; j < answers[i].length; j += 1) {
      if ($(".square").eq(answers[i][j]).attr("data-check") === xo) {
        userMoves.push(answers[i][j]);
      }
    }

    if (userMoves.length === 3) {
      won = true;
    } else {
      userMoves = [];
    }
  }

  if (won) {
    if (xo == "X") {
      setTimeout(function() { // prevents a weird glitch where the last x or o doesn't show until the alert is dismissed
        alert("Player 1 wins");
      }, 0);
      $('#tic-tac-form')[0].reset();
      updateBoardReads();
    } else {
      setTimeout(function() {
        alert("Player 2 wins");
      }, 0);
      $('#tic-tac-form')[0].reset();
      updateBoardReads();
    }

  }
}
