
//% block="Nerds"
//% block.loc.ja="おたく" 
//% weight=10
//% color=#696969
//% icon="\uf164"
namespace nerds {




    // ----- Button

    //% block="on button $button $action"
    //% block.loc.ja="ボタン $button が $action とき"
    //% weight=200
    //% subcategory="button"
    export function onButton(button: Button, action: TouchButtonEvent, handler: () => void) {
        control.onEvent(button, action, handler)
    }






    // ----- Event

    //% block="on event from $id with value$val"
    //% block.loc.ja="イベントが届いたとき 発生源$id 値$val"
    //% weight=200
    //% subcategory="event"
    export function eventHandler(id: number, val: number, handler: () => void) {
        control.onEvent(id, val, handler)
    }

    //% block="raise event from source$id with value$val"
    //% block.loc.ja="イベントを発生させる 発生源$id 値$val"
    //% weight=100
    //% subcategory="event"
    export function eventFire(id: number, val: number) {
        control.raiseEvent(id, val)
    }

    //% block="event timestamp(uSec)"
    //% block.loc.ja="イベントのタイムスタンプ（μ秒）"
    //% weight=50
    //% subcategory="event"
    export function eventTimestamp() {
        return control.eventTimestamp()
    }

    //% block="event value"
    //% block.loc.ja="イベントの値"
    //% weight=40
    //% subcategory="event"
    export function eventValue() {
        return control.eventValue()
    }


    // ----- i2c

    //% block="i2c read number at address $address of format $format repeated $repeat"
    //% block.loc.ja="i2c 値を読み込む アドレス$address フォーマット$format 繰り返し$repeat"
    //% weight=200
    //% subcategory="i2c"
    export function i2cReadNumber(address: number, format: NumberFormat, repeat: boolean) {
        return pins.i2cReadNumber(address, format, repeat)
    }

    //% block="i2c write number at address $address with value $value of format $format repeated $repeat"
    //% block.loc.ja="i2c 値を書き出す アドレス$address 値$value フォーマット$format 繰り返し$repeat"
    //% weight=100
    //% subcategory="i2c"
    export function i2cWriteNumber(address: number, value: number, format: NumberFormat, repeat: boolean) {
        pins.i2cWriteNumber(address, value, format, repeat)
    }









}
