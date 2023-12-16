let item = 0
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.ShowString("Hello", 0, 0)
basic.forever(function () {
    item += 1
    I2C_LCD1602.ShowNumber(item, 0, 1)
    basic.pause(1000)
})
