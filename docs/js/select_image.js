var CHOICES = [];

var CHOICES_ARROW = [
    "arrow_fill_blue.svg",
    "arrow_fill_green.svg",
    "arrow_fill_red.svg",
    "arrow_open_blue.svg",
    "arrow_open_green.svg",
    "arrow_open_red.svg",
];

var CHOICES_CIRCLE = [
    "circle_fill_blue.svg",
    "circle_fill_green.svg",
    "circle_fill_red.svg",
    "circle_open_blue.svg",
    "circle_open_green.svg",
    // "circle_open_red.svg",
    // "circle_strip_blue.svg",
    // "circle_strip_green.svg",
    // "circle_strip_red.svg",
];

var CHOICES_SQUARE = [
    "square_fill_blue.svg",
    "square_fill_green.svg",
    "square_fill_red.svg",
    "square_open_blue.svg",
    "square_open_green.svg",
    "square_open_red.svg",
];

var CHOICES_STAR = [
    "star_fill_blue.svg",
    "star_fill_green.svg",
    "star_fill_red.svg",
    "star_open_blue.svg",
    "star_open_green.svg",
    "star_open_red.svg",
];

CHOICES = CHOICES.concat(
    CHOICES_ARROW,
    CHOICES_CIRCLE,
    CHOICES_SQUARE,
    CHOICES_STAR,
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


var format_choice_html = function(choice) {
    // return '<div class="col game-card-small"><img src="img/' + choice + '"/>' + choice + '</div>';
    return '<div class="col game-card-small"><img src="img/' + choice + '"/></div>';

}

var show_choices = function() {
    CHOICES_CIRCLE.forEach(choice => {
        document
        .getElementById("game-card-options-circles")
        .innerHTML += format_choice_html(choice)
    })
    CHOICES_SQUARE.forEach(choice => {
        document
        .getElementById("game-card-options-squares")
        .innerHTML += format_choice_html(choice)
    })
    CHOICES_STAR.forEach(choice => {
        document
        .getElementById("game-card-options-stars")
        .innerHTML += format_choice_html(choice)
    })
    CHOICES_ARROW.forEach(choice => {
        document
        .getElementById("game-card-options-arrows")
        .innerHTML += format_choice_html(choice)
    })

};

