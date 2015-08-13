// var first = document.getElementById('1st'),
//     second = document.getElementById('2nd'),
//     imgs = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'];
// 
// var generate = function() {
//     first.src = imgs[Math.floor(Math.random() * imgs.length)];
//     second.src = imgs[Math.floor(Math.random() * imgs.length)];
//     console.log('generation...');
//     if(first === second) {
//         generate();
//     } else {
//         return first, second;
//     };
// };
// 
// document.addEventListener('click', generate);

/// ==================================================================================================================

function Img(source) {
    this.score = 0;
    this.source = source;
};

Img.prototype.incr = function() {
    this.score += 1;
};

var img1 = new Img('img/img1.jpg'),
    img2 = new Img('img/img2.jpg'),
    img3 = new Img('img/img3.jpg'),
    img4 = new Img('img/img4.jpg'),
    img5 = new Img('img/img5.jpg'),

    imgs = [img1, img2, img3, img4, img5];



var generate = function() {
    var firstImg = document.getElementById('1st'),
        secondImg = document.getElementById('2nd'),

        rand1 = Math.floor(Math.random() * imgs.length),
        rand2 = Math.floor(Math.random() * imgs.length);

    while(rand1 === rand2) {
        rand1 = Math.floor(Math.random() * imgs.length);
        rand2 = Math.floor(Math.random() * imgs.length);
    };

    var firstScore = imgs[rand1].score,
        secondScore = imgs[rand2].score;

    document.getElementById('1stScore').innerHTML = imgs[rand1].score;
    document.getElementById('2ndScore').innerHTML = imgs[rand2].score;
    firstImg.src = imgs[rand1].source;
    secondImg.src = imgs[rand2].source;

    if(rand1 === rand2) {console.log('EQUALLY');};
};

document.addEventListener('click', generate);