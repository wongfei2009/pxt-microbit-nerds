// テストはここに来ます。このパッケージが拡張機能として使用されるときにはコンパイルされません。
input.onButtonPressed(Button.A, function () {
    nerds.playCustomMelody(nerds.stringToMelody("c#6:4,d6:4"), MelodyOptions.Once)
})
