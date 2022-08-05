radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        music.playTone(523, music.beat(BeatFraction.Half))
        basic.showIcon(IconNames.StickFigure)
    } else {
        led.plotBrightness(2, 2, 10)
        basic.pause(200)
    }
    basic.clearScreen()
})
radio.setGroup(1)
basic.showIcon(IconNames.Happy)
basic.clearScreen()
