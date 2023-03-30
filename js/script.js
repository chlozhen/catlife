const answer1 = 'PURR-ple'
const answer2 = 'Just kitten!'
const answer3 = 'A cat-astrophe.'
const clear = 'Click on a joke to reveal the answer!'

function revealAnswer(ans) {
    $('#answer-text').empty().prepend(ans)
}

$('.joke1').on('click', function () {
    revealAnswer(answer1)
})

$('.joke2').on('click', function () {
    revealAnswer(answer2)
})

$('.joke3').on('click', function () {
    revealAnswer(answer3)
})

$('.answer').on('click', function () {
    revealAnswer(clear)
})
