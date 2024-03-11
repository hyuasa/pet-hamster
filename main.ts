input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.happy.playUntilDone()
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Heart)
})
basic.showIcon(IconNames.Heart)
