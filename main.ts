input.onButtonPressed(Button.A, function () {
    if (spillStartet == _true) {
        gammelTerningkast = terningkast
        terningkast = randint(0, 9)
        if (gammelTerningkast >= terningkast) {
            basic.showIcon(IconNames.Heart)
        } else {
            basic.showIcon(IconNames.Ghost)
            GameOver = _true
            spillStartet = 0
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
    _true = 1
    _false = 0
    gammelTerningkast = 0
    terningkast = 0
    spillStartet = _false
    GameOver = _false
})
input.onButtonPressed(Button.B, function () {
    if (spillStartet == _true) {
        gammelTerningkast = terningkast
        terningkast = randint(0, 9)
        if (gammelTerningkast <= terningkast) {
            basic.showIcon(IconNames.Heart)
        } else {
            basic.showIcon(IconNames.Ghost)
            GameOver = _true
            spillStartet = 0
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    if (spillStartet == 0 && GameOver != _true) {
        terningkast = randint(0, 9)
        spillStartet = _true
    }
})
let GameOver = 0
let spillStartet = 0
let terningkast = 0
let gammelTerningkast = 0
let _false = 0
let _true = 0
_true = 1
_false = 0
gammelTerningkast = 0
terningkast = 0
spillStartet = _false
GameOver = _false
basic.forever(function () {
    if (GameOver == _true) {
        basic.showIcon(IconNames.Butterfly)
    } else {
        basic.showNumber(terningkast)
    }
})
