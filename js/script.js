function show(elementID) {
    // showing a "page" elements when clicked
    // reference: http://jsfiddle.net/H4dbJ/
    var ele = document.getElementById(elementID);
    if (!ele) {
        alert("no such element");
        return;
    }
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    ele.style.display = 'block';
}

function setButtonState(headerID, buttonClass, activeClass) {
    // Add active class to the current button (highlight it)
    var header = document.getElementById(headerID);
    var btns = header.getElementsByClassName(buttonClass);
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName(activeClass);
            current[0].className = current[0].className.replace(" " + activeClass, "");
            this.className += " " + activeClass;
        });
    }
}

function magnify(imgID, zoom) {
    // allow users to use a magnify an image
    // reference: https://www.w3schools.com/howto/howto_js_image_magnifier_glass.asp
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);

    /* Create magnifier glass: */
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");

    /* Insert magnifier glass: */
    img.parentElement.insertBefore(glass, img);

    /* Set background properties for the magnifier glass: */
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

    /* Execute a function when someone moves the magnifier glass over the image: */
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);

    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
        var pos, x, y;
        /* Prevent any other actions that may occur when moving over the image */
        e.preventDefault();
        /* Get the cursor's x and y positions: */
        pos = getCursorPos(e);
        x = pos.x;
        y = pos.y;
        /* Prevent the magnifier glass from being positioned outside the image: */
        if (x >= img.width - (w / zoom)) { x = img.width - (w / zoom); }
        if (x <= w / zoom) { x = w / zoom; }
        if (y >= img.height - (h / zoom)) { y = img.height - (h / zoom); }
        if (y <= h / zoom) { y = h / zoom; }
        /* Set the position of the magnifier glass: */
        glass.style.left = (x - w) + "px";
        glass.style.top = (y - h) + "px";
        /* Display what the magnifier glass "sees": */
        glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }

    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /* Get the x and y positions of the image: */
        a = img.getBoundingClientRect();
        /* Calculate the cursor's x and y coordinates, relative to the image: */
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /* Consider any page scrolling: */
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
    }
}

function revealAnswer(ans) {
    // Reveal answer text
    $('#answer-text').empty().prepend(ans)
}

function removeActive(jokes) {
    // Remove any active classes
    $.each(jokes, function (index, value) {
        const ele = document.getElementById(value)
        if (ele.classList.contains('active') == true) {
            $('#' + value).removeClass('active')
        }
    });
}

// Set page buttons
setButtonState("page_Header", "page_btn", "page_active")

// Initiate magnifying mechanism
magnify("miaprofile", 3)
magnify("ellaprofile", 3)

// Get joke answers and clear them
const answer1 = 'PURR-ple'
const answer2 = 'Just kitten!'
const answer3 = 'A cat-astrophe.'
const answer4 = 'They tend to be cheetahs.'
const clear = 'Hover over a gif for a cat joke, click for the answer!'
const jokes = ["joke1_answer", "joke2_answer", "joke3_answer", "joke4_answer"]

$('.joke1').on('click', function () {
    removeActive(jokes)
    revealAnswer(answer1)
    $('#joke1_answer').addClass('active')
})

$('.joke2').on('click', function () {
    removeActive(jokes)
    revealAnswer(answer2)
    $('#joke2_answer').addClass('active')
})

$('.joke3').on('click', function () {
    removeActive(jokes)
    revealAnswer(answer3)
    $('#joke3_answer').addClass('active')
})

$('.joke4').on('click', function () {
    removeActive(jokes)
    revealAnswer(answer4)
    $('#joke4_answer').addClass('active')
})

$('.answer').on('click', function () {
    removeActive(jokes)
    revealAnswer(clear)
})

// Gallery layout changes (reference: https://www.w3schools.com/howto/howto_js_image_grid.asp)
var elements = document.getElementsByClassName("gallery_col");
var i;

// Full-width images
function large() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "100%";
        elements[i].style.msFlex = "100%";
    }
}

// Two images side by side
function medium() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "50%";
        elements[i].style.msFlex = "50%";
    }
}

// Four images side by side
function small() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "25%";
        elements[i].style.msFlex = "25%";
    }
}

setButtonState("gallery_Header", "gallery_btn", "gallery_active")



