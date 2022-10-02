// テストはここに来ます。このパッケージが拡張機能として使用されるときにはコンパイルされません。
input.onButtonPressed(Button.A, function () {
    music.setTempo(120)
    nerds.playMelodyArray(haruichiban, MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    music.setTempo(120)
    nerds.playMelodyArray(kirakiraboshi, MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    music.setTempo(180)
    // nerds.playMelodyArray(kirakiraboshi, MelodyOptions.Once)
    nerds.playMelodyArray(kirakiraboshi2, MelodyOptions.Once)
})
let haruichiban: string[] = []
haruichiban = nerds.stringToMelodyArray(
    "d5:2,d5:2,r:2,d5:4,c5:2,a4:2,a4:2,c5:2,c5:2,r:2,c5:4,a4:2,g4:2,f4:2," +
    "g4:1,r:1,g4:1,r:1,g4:1,r:1,g4:1,r:1,g4:1,r:1,e4:2,c4:2,d4:2")
let kirakiraboshi: string[] = []
kirakiraboshi = nerds.stringToMelodyArray(
    "c4:4,c4:4,g4:4,g4:4,a4:4,a4:4,g4:4,r:4," +
    "f4:4,f4:4,e4:4,e4:4,d4:4,d4:4,c4:4,r:4," +
    "g4:4,g4:4,f4:4,f4:4,e4:4,e4:4,d4:4,r:4," +
    "g4:4,g4:4,f4:4,f4:4,e4:4,e4:4,d4:4,r:4," +
    "c4:4,c4:4,g4:4,g4:4,a4:4,a4:4,g4:4,r:4," +
    "f4:4,f4:4,e4:4,e4:4,d4:4,d4:4,c4:4")
let kirakiraboshi2: string[] = []
kirakiraboshi2 = nerds.stringToMelodyArray(
    "g4:4,g4:4,d5:4,d5:4,e5:4,e5:4,d5:4,r:4," +
    "c5:4,c5:4,b4:4,b4:4,a4:4,a4:4,g4:4,r:4," +
    "d5:4,d5:4,c5:4,c5:4,b4:4,b4:4,a4:4,r:4," +
    "d5:4,d5:4,c5:4,c5:4,b4:4,b4:4,a4:4,r:4," +
    "g4:4,g4:4,d5:4,d5:4,e5:4,e5:4,d5:4,r:4," +
    "c5:4,c5:4,b4:4,b4:4,a4:4,a4:4,g4:4")
