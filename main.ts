basic.forever(function () {
    if (input.temperature() > 35) {
        basic.showIcon(IconNames.Sad)
    } else if (input.temperature() < 5) {
        basic.showIcon(IconNames.Chessboard)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
