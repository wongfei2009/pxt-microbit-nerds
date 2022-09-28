
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



    // ----- I2C

    //% block="i2c read number at address $address of format $format repeated $repeat"
    //% block.loc.ja="I2C 値を読み込む アドレス$address フォーマット$format 繰り返し$repeat"
    //% weight=200
    //% subcategory="serial"
    //% group="I2C"
    export function i2cReadNumber(address: number, format: NumberFormat, repeat: boolean) {
        return pins.i2cReadNumber(address, format, repeat)
    }

    //% block="i2c write number at address $address with value $value of format $format repeated $repeat"
    //% block.loc.ja="I2C 値を書き出す | アドレス$address 値$value フォーマット$format 繰り返し$repeat"
    //% weight=100
    //% subcategory="serial"
    //% group="I2C"
    export function i2cWriteNumber(address: number, value: number, format: NumberFormat, repeat: boolean) {
        pins.i2cWriteNumber(address, value, format, repeat)
    }



    // ----- SPI

    //% block="spi set pins MOSI$mosi MISO$miso SCK$sck"
    //% block.loc.ja="SPI 端子を決める MOSI$mosi MISO$miso SCK$sck"
    //% weight=200
    //% subcategory="serial"
    //% group="SPI"
    export function spiPins(mosi: DigitalPin, miso: DigitalPin, sck: DigitalPin) {
        pins.spiPins(mosi, miso, sck)
    }

    //% block="spi format bits$bit mode$mode"
    //% block.loc.ja="SPI 形式を設定する ビット数$bit モード$mode"
    //% weight=190
    //% subcategory="serial"
    //% group="SPI"
    export function spiFormat(bit: number, mode: number) {
        pins.spiFormat(bit, mode)
    }

    //% block="spi frequency$f"
    //% block.loc.ja="SPI 周波数を設定する（Hz） $f"
    //% weight=180
    //% subcategory="serial"
    //% group="SPI"
    export function spiFrequency(f: number) {
        pins.spiFrequency(f)
    }

    //% block="spi write $value"
    //% block.loc.ja="SPI 書き出す $value"
    //% weight=170
    //% subcategory="serial"
    //% group="SPI"
    export function spiWrite(value: number) {
        return pins.spiWrite(value)
    }






    // ----- Melody

    //% block="play custom melody %melodyArray | repeating %options"
    //% block.loc.ja="カスタム・メロディを鳴らす %melodyArray | 繰り返し %options"
    //% weight=200
    //% subcategory="melody"
    //% group=""
    export function playCustomMelody(melodyArray: string[], options: MelodyOptions = 1) {
        music.startMelody(melodyArray, options)
    }

    //% block="make custom melody from string %stringMelody"
    //% block.loc.ja="文字列からカスタム・メロディを作る %stringMelody"
    //% weight=210
    //% subcategory="melody"
    //% group=""
    export function stringToMelody(stringMelody: string) {
        if (stringMelody.length <= 0) return []

        let octave = 4
        let duration = 4
        let currentOctave = octave
        let currentDuration = duration


        let melody: string[] = []

        let cmd = stringMelody.toLowerCase().split(",")
        for (let i = 0; i < cmd.length; i++) {
            let note = cmd[i]
            let index = 0
            let out = ""

            if (!(note[index] >= "a" && note[index] <= "g" || note[index] == "r")) continue

            out += note[index]
            index++

            if (note[index] == "#") {
                out += note[index]
                index++
            }

            let args = note.substr(index, note.length - index)
            if (args.length <= 0) {
                octave = currentOctave
                duration = currentDuration
            }
            else {
                if (args.includes(":")) {
                    let arg = args.split(":")
                    octave = parseInt(arg[0])
                    if (Number.isNaN(octave)) octave = currentOctave
                    duration = parseInt(arg[1])
                    if (Number.isNaN(duration)) duration = currentDuration
                }
                else {
                    octave = parseInt(args)

                    
                    if (Number.isNaN(octave)) octave = currentOctave
                    duration = currentDuration
                }
            }

            out += octave + ":" + duration

            basic.showString(out)

            if (currentOctave   != octave  ) currentOctave = octave
            if (currentDuration != duration) currentDuration = duration

            

            melody.push(out);
        }

        return melody
    }


}
