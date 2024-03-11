def on_logo_touched():
    basic.show_icon(IconNames.HAPPY)
    soundExpression.happy.play_until_done()
    basic.show_icon(IconNames.HEART)
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

def on_gesture_shake():
    basic.show_icon(IconNames.SAD)
    soundExpression.giggle.play_until_done()
    basic.show_icon(IconNames.HEART)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

basic.show_icon(IconNames.HEART)