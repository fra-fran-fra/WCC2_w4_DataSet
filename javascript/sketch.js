let weather;
let loudWar;

function setup() {
  createCanvas(500, 500);

  //no animation / interaction chart
  noLoop();
  angleMode(DEGREES);

  fetch("./json/loudnessWar.json").then(function (response) {
    return response.json();
  }).then(function (data) {

    console.log(data);

    loudWar = data.content;

    //using no Loop? you can just call your function once the data is loaded
    drawChart();

  }).catch(function (err) {
    console.log(`Something went wrong: ${err}`);
  });

}

function draw() {
  background(200);

}

function parseLufs(_array) {
  let arrayParsed = [];

  for (let i = 0; i < _array.length; i++) {
    let itemToParse = _array[i];
    let itemParsed = parseInt(itemToParse);
    arrayParsed.push(itemParsed);
  }

  return arrayParsed;
}

function drawChart() {

  let blabla = parseLufs(loudWar.lufs);

  for (let i = 0; i < blabla.length; i++) {
    ellipse(blabla[i] * -10, 300, 300, 300);
  }



  // let myString = loudWar.lufs[0];
  // let myParse = parseInt(myString);
  // ellipse(100, myParse, 100, 100);


}