
//% block="Nerds"
//% block.loc.ja="おたく" 
//% weight=100
//% color=#4682b4
//% icon="\uf1d8"
namespace nerds {

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

}
