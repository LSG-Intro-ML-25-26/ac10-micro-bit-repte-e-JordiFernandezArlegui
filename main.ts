let temp: number;
let accX: number;
let accY: number;
let x = 2
let y = 2
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        while (true) {
            temp = input.temperature()
            led.plotBarGraph(temp, 50)
            serial.writeValue("Temperatura", temp)
            if (input.buttonIsPressed(Button.B)) {
                break
            }
            
        }
    }
    
    if (input.buttonIsPressed(Button.B)) {
        led.stopAnimation()
        while (true) {
            led.plot(x, y)
            basic.pause(50)
            led.unplot(x, y)
            accX = input.acceleration(Dimension.X)
            accY = input.acceleration(Dimension.Y)
            //  Moviment X
            if (accX <= -150 && x > 0) {
                x -= 1
            } else if (accX >= 150 && x < 4) {
                x += 1
            }
            
            //  Moviment Y
            if (accY <= -150 && y > 0) {
                y -= 1
            } else if (accY >= 150 && y < 4) {
                y += 1
            }
            
            if (input.buttonIsPressed(Button.A)) {
                break
            }
            
        }
    }
    
}
