var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  highlightBlock('q,59@5.Ia[t%YG;jQyE_');
  highlightBlock('80,8eP6[.t,CXK%S4Sy!');
  console.log(('wywołano funkcję getMoveName z argumentem: ' + argMoveId));
  highlightBlock('D[EvvuHeu)O$(M4,Ps7@');
  if (argMoveId == 1) {
    highlightBlock('%:l+Wi?k;uOINX{{6B5`');
    return 'kamień';
  } else if (argMoveId == 2) {
    highlightBlock('t-+Uj/;EPo[Lc_vs_SG!');
    return 'papier';
  } else if (argMoveId == 3) {
    highlightBlock('-}8G^}76LKnr9ImUhjDO');
    return 'nozyce';
  } else {
    highlightBlock('xYZNH(j~1AWIt=}0:dA!');
    printMessage(('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".'));
    highlightBlock('b^2aH1YJm/cs/Q1g4UCX');
    return 'kamień';
  }
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  highlightBlock('uhT!+.Tbq*rLa6R80]$Q');
  highlightBlock('(U[YX54]nR8UMzkf9nMT');
  console.log(('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove));
  highlightBlock('iokA9q5HJ^VkJNqlUuHB');
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    highlightBlock('wd0[_cer3(WD`ADS/}KH');
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nozyce' && argComputerMove == 'papier') {
    highlightBlock('/[RGu8D%EWz8pR7e0@j?');
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nozyce') {
    highlightBlock('k_Vh//pTI#koVd9IIcfU');
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    highlightBlock('17Fbi^!^tGC%zf+JFIu`');
    printMessage('Remis!');
  } else {
    highlightBlock('9*2B@SXUOx13T!S?ETUx');
    printMessage('Przegrywasz');
  }
  highlightBlock('DbgF4#ZabH^xu=:Z!DkK');
  printMessage(('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove));
}


highlightBlock('@VOTX6VQ*o$yjM+_@R19');
playerInput = window.prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
highlightBlock('s==g|p%vx)tAJTb(iC%J');
console.log(('wybór ruchu gracza to: ' + playerInput));
highlightBlock('`be:2/e4d?V`g:oc,h;m');
playerMove = getMoveName(playerInput);
highlightBlock('E_4c18.k3[98ns-NlMFf');
console.log(('ruch gracza to: ' + playerMove));
highlightBlock('QRwxlkF2REl^}L,PeYVf');
randomNumber = Math.floor(Math.random() * 3 + 1);
highlightBlock(']^re%`lj}s2C}OzA3PpT');
console.log(('wylosowana liczba to: ' + randomNumber));
highlightBlock('|MR8iBOo1KR:pd$QrVe/');
computerMove = getMoveName(randomNumber);
highlightBlock('!S,TbAE#@kVA[:fhDK%J');
console.log(('ruch komputera to: ' + computerMove));
highlightBlock('1azObqcq*/81copZ%f(x');
displayResult(playerMove, computerMove);
