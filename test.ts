// テストはここに来ます。このパッケージが拡張機能として使用されるときにはコンパイルされません。
input.onButtonPressed(Button.A, function () {
    music.setTempo(120)
    nerds.playNoteArray(haruichiban, MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    music.setTempo(120)
    nerds.playNoteArray(kirakiraboshi, MelodyOptions.Once)
})
input.onButtonPressed(Button.AB, function () {
    music.setTempo(240)
    nerds.playNoteArray(kirakiraboshi2, MelodyOptions.Once)
})
let haruichiban: string[] = []
haruichiban = nerds.stringToNoteArray(
    "d5:2,d5:2,r:2,d5:4,c5:2,a4:2,a4:2,c5:2,c5:2,r:2,c5:4,a4:2,g4:2,f4:2," +
    "g4:1,r:1,g4:1,r:1,g4:1,r:1,g4:1,r:1,g4:1,r:1,e4:2,c4:2,d4:2")
let kirakiraboshi: string[] = []
kirakiraboshi = nerds.stringToNoteArray(
    "c4:3,r:1,c4:3,r:1,g4:3,r:1,g4:3,r:1,a4:3,r:1,a4:3,r:1,g4:3,r:1,r:3,r:1," +
    "f4:3,r:1,f4:3,r:1,e4:3,r:1,e4:3,r:1,d4:3,r:1,d4:3,r:1,c4:3,r:1,r:3,r:1," +
    "g4:3,r:1,g4:3,r:1,f4:3,r:1,f4:3,r:1,e4:3,r:1,e4:3,r:1,d4:3,r:1,r:3,r:1," +
    "g4:3,r:1,g4:3,r:1,f4:3,r:1,f4:3,r:1,e4:3,r:1,e4:3,r:1,d4:3,r:1,r:3,r:1," +
    "c4:3,r:1,c4:3,r:1,g4:3,r:1,g4:3,r:1,a4:3,r:1,a4:3,r:1,g4:3,r:1,r:3,r:1," +
    "f4:3,r:1,f4:3,r:1,e4:3,r:1,e4:3,r:1,d4:3,r:1,d4:3,r:1,c4:3,r:1")
let kirakiraboshi2: string[] = []
kirakiraboshi2 = nerds.stringToNoteArray(
    "g4:3,r:1,g4:3,r:1,d5:3,r:1,d5:3,r:1,e5:3,r:1,e5:3,r:1,d5:3,r:1,r:3,r:1," +
    "c5:3,r:1,c5:3,r:1,b4:3,r:1,b4:3,r:1,a4:3,r:1,a4:3,r:1,g4:3,r:1,r:3,r:1," +
    "d5:3,r:1,d5:3,r:1,c5:3,r:1,c5:3,r:1,b4:3,r:1,b4:3,r:1,a4:3,r:1,r:3,r:1," +
    "d5:3,r:1,d5:3,r:1,c5:3,r:1,c5:3,r:1,b4:3,r:1,b4:3,r:1,a4:3,r:1,r:3,r:1," +
    "g4:3,r:1,g4:3,r:1,d5:3,r:1,d5:3,r:1,e5:3,r:1,e5:3,r:1,d5:3,r:1,r:3,r:1," +
    "c5:3,r:1,c5:3,r:1,b4:3,r:1,b4:3,r:1,a4:3,r:1,a4:3,r:1,g4:3,r:1")