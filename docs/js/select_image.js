var CHOICES = [];

var CHOICES_CIRCLES_RED = [
    "circle_fill_red.svg",
    "circle_open_red.svg",
//    "circle_strip_red.svg",
];
var CHOICES_CIRCLES_BLUE = [
    "circle_fill_blue.svg",
    "circle_open_blue.svg",
//    "circle_strip_blue.svg",
];
var CHOICES_CIRCLES_GREEN = [
    "circle_fill_green.svg",
    "circle_open_green.svg",
//"circle_strip_green.svg",
];

CHOICES = CHOICES.concat(
    CHOICES_CIRCLES_RED,
    CHOICES_CIRCLES_BLUE,
    CHOICES_CIRCLES_GREEN,

);

var update_your_card = function () {
    var random_index = Math.random();
    random_index *= CHOICES.length;
    random_index = Math.floor(random_index);
    var image_choice = CHOICES[random_index];

    var timestamp = new Date().getTime();
    image_choice_uri = "img/" + image_choice + "?t=" + timestamp;

    var img = document.getElementById("your_card");
    img.src = image_choice_uri;
    img.alt = image_choice;
}


var show_choices = function() {
    CHOICES.forEach(choice => {
        var container = document.getElementById("game-card-options-circles");
        container.innerHTML += '<div class="col game-card-small"><img src="img/' + choice + '"/>'+choice+'</div>'
    });
};

