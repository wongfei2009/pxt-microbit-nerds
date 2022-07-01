enum ButtonAction {
    //% block=touched block.loc.ja="押した"
    Touched = 1,  // MICROBIT_BUTTON_EVT_DOWN
    //% block=released block.loc.ja="離した"
    Released = 2,  // MICROBIT_BUTTON_EVT_UP
    //% block=pressed block.loc.ja="クリックした"
    Pressed = 3,  // MICROBIT_BUTTON_EVT_CLICK
    //% block="long pressed" block.loc.ja="長くクリックした"
    LongPressed = 4,  // MICROBIT_BUTTON_EVT_LONG_CLICK
}


//% block="Nerds"
//% block.loc.ja="おたく" 
//% weight=10
//% color=#4682b4
//% icon="\uf164"
namespace nerds {






    // ----- Event

    //% block="on custom event from $id with value$val"
    //% block.loc.ja="カスタム・イベントが届いたとき 発生源$id 値$val"
    //% weight=200
    //% subcategory="event"
    export function customEventHandler(id: number, val: number, handler: () => void) {
        control.onEvent(id, val, handler)
    }

    //% block="raise custom event from source$id with value$val"
    //% block.loc.ja="カスタム・イベントを発生させる 発生源$id 値$val"
    //% weight=100
    //% subcategory="event"
    export function customEventFire(id: number, val: number) {
        control.raiseEvent(id, val)
    }

    //% block="event timestamp(uSec)"
    //% block.loc.ja="イベントのタイムスタンプ（μ秒）"
    //% weight=50
    //% subcategory="event"
    export function customEventTimestamp() {
        return control.eventTimestamp()
    }

    //% block="event value"
    //% block.loc.ja="イベントの値"
    //% weight=40
    //% subcategory="event"
    export function customEventValue() {
        return control.eventValue()
    }





    // ----- Button

    //% block="on button $button $action"
    //% block.loc.ja="ボタン $button を $action とき"
    //% weight=200
    //% subcategory="button"
    export function onButton(button: Button, action: ButtonAction, handler: () => void) {
        control.onEvent(button, action, handler)
    }










}
