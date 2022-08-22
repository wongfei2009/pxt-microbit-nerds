nerds.spiPins(DigitalPin.P15, DigitalPin.P14, DigitalPin.P13)
nerds.spiFormat(8, 3)
nerds.spiFrequency(1000000)
let result = nerds.spiWrite(143)
