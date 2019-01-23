function chirp(n) {
  //basecase
  if (n === 0) {
    return '';
  }
  //return concatenating strings
  return chirp(--n) + 'chirp ';
}

$(document).ready(function () {
  $("#result").html(chirp(3));
});