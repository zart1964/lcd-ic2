I2C_LCD1602.LcdInit(39)
I2C_LCD1602.BacklightOff()
basic.pause(500)
I2C_LCD1602.BacklightOn()
I2C_LCD1602.ShowString("OSOYOO", 0, 0)
I2C_LCD1602.ShowString("\"Hello\"", 3, 1)
I2C_LCD1602.off()
basic.pause(500)
I2C_LCD1602.on()
basic.forever(function () {
	
})
