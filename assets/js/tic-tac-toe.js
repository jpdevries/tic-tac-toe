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
        $('#game-reads .whos-turn').text('Player 2');
        document.title = "Tic–Tac–Toe Player 1 (X)";
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
        $('#game-reads .whos-turn').text('Player 1');
        document.title = "Tic–Tac–Toe Player 2 (O)";
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
    $('.square input').prop('disabled',false);
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
      turn = 0;
      $('.square input').prop('disabled',false);
      if (xo == "X") {
        $('#tic-tac-form')[0].reset();
        updateBoardReads();
        setTimeout(function(){ // make sure this happens after the boards are updated
          $('.messages').html("<p>Player 1 wins</p>");
        },0);
      } else {
        $('#tic-tac-form')[0].reset();
        updateBoardReads();
        setTimeout(function(){ // make sure this happens after the boards are updated
          $('.messages').html("<p>Player 2 wins</p>");
        },0);
      }
    }
  }

});
