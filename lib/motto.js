var mottoes = [
  "Hear me roar",
  "Winder is coming",
  "Fire and blood",
  "We do not sow",
  "As high as honour",
];

exports.getMotto = function () {
  var id = Math.floor(Math.floor(Math.random()*mottoes.length));
  return mottoes[id];
}
