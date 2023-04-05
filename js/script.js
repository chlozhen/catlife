const answer1 = 'PURR-ple'
const answer2 = 'Just kitten!'
const answer3 = 'A cat-astrophe.'
const answer4 = 'They tend to be cheetahs.'
const clear = 'Hover over a gif for a joke, click for the answer!'



function revealAnswer(ans) {
    $('#answer-text').empty().prepend(ans)
}

function show(elementID) {
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

function magnify(imgID, zoom) {
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

function keep(elementID) {
    var ele = document.getElementById(elementID);
    
}


magnify("miaprofile", 2)
magnify("ellaprofile", 2)

$('.joke1').on('click', function () {
    revealAnswer(answer1)
    keep("joke1_answer")
})

$('.joke2').on('click', function () {
    revealAnswer(answer2)
})

$('.joke3').on('click', function () {
    revealAnswer(answer3)
})

$('.joke4').on('click', function () {
    revealAnswer(answer4)
})

$('.answer').on('click', function () {
    revealAnswer(clear)
})



