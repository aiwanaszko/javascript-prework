var computerMove, randomNumber;


highlightBlock('@a9-_yRgQ#nIpT^8VE-O');
randomNumber = Math.floor(Math.random() * 3 + 1);
highlightBlock('YhI@AVc|,HARk6D+jK]p');
console.log(('wylosowana liczba to: ' + randomNumber));
highlightBlock('pp3@S^s3NIhR^gaqxp)M');
if (randomNumber == '1') {
  highlightBlock('mg|[eR(S`J!v!(NI)An@');
  computerMove = 'kamień';
} else if (randomNumber == '2') {
  highlightBlock('JX?-xBexvaQ^!pe]pZ]a');
  computerMove = 'papier';
} else {
  highlightBlock('X%q)1G|u}T}dgAE:?nlt');
  computerMove = 'nozyce';
}
highlightBlock('s,:*4I!(;CZB-g(y[0S@');
printMessage(('Mój ruch: ' + computerMove));


var playerMove, playerInput;


highlightBlock('~`Ep/l$#PjmD!dUeUpL.');
playerInput = window.prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
highlightBlock('mu~TyzqPG_k]oEIN@73j');
console.log(('Wpisana odpowiedź to: ' + playerInput));
highlightBlock('v0?FGL$cTC]ShO!Mz-r7');
if (playerInput == '1') {
  highlightBlock('9Moipc!`=fIYWCzA1M3R');
  playerMove = 'kamień';
  highlightBlock('DNg(c|}aL94X12.T6|1X');
  printMessage(('Twój ruch: ' + playerMove));
} else if (playerInput == '2') {
  highlightBlock('F8VIe%M4A(hvUr%gK[hh');
  playerMove = 'papier';
  highlightBlock('4Ls5o*PD6HlYGRqs1KyV');
  printMessage(('Twój ruch: ' + playerMove));
} else if (playerInput == '3') {
  highlightBlock('B=I.JrGmUy)ur^Qyz]R7');
  playerMove = 'nozyce';
  highlightBlock(';+rSHE*bnx|@,;|R947s');
  printMessage(('Twój ruch: ' + playerMove));
} else {
  highlightBlock('Lq@~F(Q`dfTzjq]X)+`?');
  playerMove = 'nieznany ruch';
  highlightBlock('wvH7lcd?4x#fC8Qr?HMC');
  printMessage(('Error! Wpisz 1, 2 albo 3.' + ''));
}
