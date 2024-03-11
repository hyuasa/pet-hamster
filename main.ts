input.onLogoEvent(TouchButtonEvent.Touched, function on_logo_touched() {
    basic.showIcon(IconNames.Happy)
    soundExpression.happy.playUntilDone()
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    basic.showIcon(IconNames.Sad)
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Heart)
})
basic.showIcon(IconNames.Heart)
