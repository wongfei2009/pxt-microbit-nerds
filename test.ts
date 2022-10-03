// テストはここに来ます。このパッケージが拡張機能として使用されるときにはコンパイルされません。
input.onButtonPressed(Button.A, function () {
    // let tempo = music.tempo()
    music.setTempo(240)
    nerds.playNoteArray(haruichiban2, MelodyOptions.Once)
    // music.setTempo(tempo)
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
    "d5:2,d5:4,d5:4,c5:2,a4:2,a4:2,c5:2,c5:4,c5:4,a4:2,g4:2,f4:2," +
    "g4:2,g4:2,g4:2,g4:2,g4:2,e4:2,c4:2,d4:10,r:2," +
    "d5:2,d5:4,d5:4,c5:2,a4:2,a4:2,c5:2,c5:4,c5:4,a4:2,g4:2,f4:2," +
    "g4:2,g4:8,g4:2,e4:2,c4:2,d4:10,r:2," +
    "a4:4,c5:2,c5:2,d5:8,c5:2,a4:2,a4:2,c5:2,a4:2,r:4," +
    "a4:2,r:2,a4:2,g4:2,g4:2,r:2,g4:2,e4:2,e4:2,e4:2,c4:2,d4:2,r:4," +
    "g4:4,g4:2,g4:2,f4:2,g4:2,a4:2,c5:2,r:2,a4:2,r:4," +
    "d5:4,d5:2,d5:2,d5:2,d5:2,a4:2,a4:2,c5:2,c5:4,r:2," +
    "g4:2,g4:2,g4:2,g4:2,f4:2,g:4.r:1,a4:2,c5:2,r:2,a4:2,r:4," +
    "a4:2,a4:2,a4:2,a4:2,c5:2,g4:2,r:2,a4:4,r:4," +
    "a4:4,c5:2,c5:2,d5:8,c5:2,a4:2,a4:2,c5:2,a4:2,r:4," +
    "a4:2,r:2,a4:2,g4:2,g4:2,g4:2,g4:2,e4:2,c4:4,d4:2,r:4," +
    "a4:4,c5:2,c5:2,d5:8,c5:2,a4:2,a4:2,c5:2,a4:2,r:4," +
    "a4:2,r:2,a4:2,g4:2,g4:2,g4:2,g4:2,e4:2,c4:4,d4:2,r:2," +
    "")
let haruichiban2: string[] = []
haruichiban2 = nerds.stringToNoteArray(
    "d5:2,r:1,d5:4,r:1,d5:4,r:1,c5:2,r:1,a4:2,r:1,a4:2,r:1,c5:2,r:1,c5:4,r:1,c5:4,r:1,a4:2,r:1,g4:2,r:1,f4:2,r:1," +
    "g4:2,r:1,g4:2,r:1,g4:2,r:1,g4:2,r:1,g4:2,r:1,e4:2,r:1,c4:2,r:1,d4:10,r:1,r:2,r:1," +
    "d5:2,r:1,d5:4,r:1,d5:4,r:1,c5:2,r:1,a4:2,r:1,a4:2,r:1,c5:2,r:1,c5:4,r:1,c5:4,r:1,a4:2,r:1,g4:2,r:1,f4:2,r:1," +
    "g4:2,r:1,g4:8,r:1,g4:2,r:1,e4:2,r:1,c4:2,r:1,d4:10,r:1,r:2,r:1," +
    "a4:4,r:1,c5:2,r:1,c5:2,r:1,d5:8,r:1,c5:2,r:1,a4:2,r:1,a4:2,r:1,c5:2,r:1,a4:2,r:1,r:4,r:1," +
    "a4:2,r:1,r:2,r:1,a4:2,r:1,g4:2,r:1,g4:2,r:1,r:2,r:1,g4:2,r:1,e4:2,r:1,e4:2,r:1,e4:2,r:1,c4:2,r:1,d4:2,r:1,r:4,r:1," +
    "g4:4,r:1,g4:2,r:1,g4:2,r:1,f4:2,r:1,g4:2,r:1,a4:2,r:1,c5:2,r:1,r:2,r:1,a4:2,r:1,r:4,r:1," +
    "d5:4,r:1,d5:2,r:1,d5:2,r:1,d5:2,r:1,d5:2,r:1,a4:2,r:1,a4:2,r:1,c5:2,r:1,c5:4,r:1,r:2,r:1," +
    "g4:2,r:1,g4:2,r:1,g4:2,r:1,g4:2,r:1,f4:2,r:1,g:4.r:1,r:1,a4:2,r:1,c5:2,r:1,r:2,r:1,a4:2,r:1,r:4,r:1," +
    "a4:2,r:1,a4:2,r:1,a4:2,r:1,a4:2,r:1,c5:2,r:1,g4:2,r:1,r:2,r:1,a4:4,r:1,r:4,r:1," +
    "a4:4,r:1,c5:2,r:1,c5:2,r:1,d5:8,r:1,c5:2,r:1,a4:2,r:1,a4:2,r:1,c5:2,r:1,a4:2,r:1,r:4,r:1," +
    "a4:2,r:1,r:2,r:1,a4:2,r:1,g4:2,r:1,g4:2,r:1,g4:2,r:1,g4:2,r:1,e4:2,r:1,c4:4,r:1,d4:2,r:1,r:4,r:1," +
    "a4:4,r:1,c5:2,r:1,c5:2,r:1,d5:8,r:1,c5:2,r:1,a4:2,r:1,a4:2,r:1,c5:2,r:1,a4:2,r:1,r:4,r:1," +
    "a4:2,r:1,r:2,r:1,a4:2,r:1,g4:2,r:1,g4:2,r:1,g4:2,r:1,g4:2,r:1,e4:2,r:1,c4:4,r:1,d4:2,r:1,r:2,r:1," +    "")

let kirakiraboshi: string[] = []
kirakiraboshi = nerds.stringToNoteArray(
    "c4:4,r:1,c4:4,r:1,g4:4,r:1,g4:4,r:1,a4:4,r:1,a4:4,r:1,g4:4,r:1,r:4,r:1," +
    "f4:4,r:1,f4:4,r:1,e4:4,r:1,e4:4,r:1,d4:4,r:1,d4:4,r:1,c4:4,r:1,r:4,r:1," +
    "g4:4,r:1,g4:4,r:1,f4:4,r:1,f4:4,r:1,e4:4,r:1,e4:4,r:1,d4:4,r:1,r:4,r:1," +
    "g4:4,r:1,g4:4,r:1,f4:4,r:1,f4:4,r:1,e4:4,r:1,e4:4,r:1,d4:4,r:1,r:4,r:1," +
    "c4:4,r:1,c4:4,r:1,g4:4,r:1,g4:4,r:1,a4:4,r:1,a4:4,r:1,g4:4,r:1,r:4,r:1," +
    "f4:4,r:1,f4:4,r:1,e4:4,r:1,e4:4,r:1,d4:4,r:1,d4:4,r:1,c4:4")
let kirakiraboshi2: string[] = []
kirakiraboshi2 = nerds.stringToNoteArray(
    "g4:4,r:1,g4:4,r:1,d5:4,r:1,d5:4,r:1,e5:4,r:1,e5:4,r:1,d5:4,r:1,r:4,r:1," +
    "c5:4,r:1,c5:4,r:1,b4:4,r:1,b4:4,r:1,a4:4,r:1,a4:4,r:1,g4:4,r:1,r:4,r:1," +
    "d5:4,r:1,d5:4,r:1,c5:4,r:1,c5:4,r:1,b4:4,r:1,b4:4,r:1,a4:4,r:1,r:4,r:1," +
    "d5:4,r:1,d5:4,r:1,c5:4,r:1,c5:4,r:1,b4:4,r:1,b4:4,r:1,a4:4,r:1,r:4,r:1," +
    "g4:4,r:1,g4:4,r:1,d5:4,r:1,d5:4,r:1,e5:4,r:1,e5:4,r:1,d5:4,r:1,r:4,r:1," +
    "c5:4,r:1,c5:4,r:1,b4:4,r:1,b4:4,r:1,a4:4,r:1,a4:4,r:1,g4:4")