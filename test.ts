// テストはここに来ます。このパッケージが拡張機能として使用されるときにはコンパイルされません。
input.onButtonPressed(Button.A, function () {
    // music.setTempo(120)
    nerds.playCustomMelody(haruichiban, MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    music.setTempo(240)
    nerds.playCustomMelody(kirakiraboshi, MelodyOptions.Once)
})
let haruichiban: string[] = []
haruichiban = nerds.stringToMelody(
    "d5:2,d5:2,r:2,d5:4,c5:2,a4:2,a4:2,,c5:2,c5:2,r:2,c5:4,a4:2,g4:2,f4:2," + 
    "g4:1,r:1,g4:1,r:1,g4:1,r:1,g4:1,r:1,g4:1,r:1,e4:2,c4:2,d4:2")
let kirakiraboshi: string[] = []
kirakiraboshi = nerds.stringToMelody(
    "g4:4,g4:4,d5:4,d5:4,e5:4,e5:4,d5:4,r:4," + 
    "c5:4,c5:4,b4:4,b4:4,a4:4,a4:4,g4:4,r:4," +
    "d5:4,d5:4,c5:4,c5:4,b4:4,b4:4,a4:4,r:4," + 
    "d5:4,d5:4,c5:4,c5:4,b4:4,b4:4,a4:4,r:4," +
    "g4:4,g4:4,d5:4,d5:4,e5:4,e5:4,d5:4,r:4," +
    "c5:4,c5:4,b4:4,b4:4,a4:4,a4:4,g4:4,r:4")
