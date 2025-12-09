x = 2
y = 2

while True:
    if input.button_is_pressed(Button.A):
        while True:
            temp = input.temperature()
            led.plot_bar_graph(temp, 50)
            serial.write_value("Temperatura", temp)
            if input.button_is_pressed(Button.B):
                break

    if input.button_is_pressed(Button.B):
        led.stop_animation()
        while True:
            led.plot(x, y)        
            basic.pause(50)
            led.unplot(x, y)
            
            accX = input.acceleration(Dimension.X)
            accY = input.acceleration(Dimension.Y)
            
            # Moviment X
            if accX <= -150 and x > 0:
                x -= 1
            elif accX >= 150 and x < 4:
                x += 1
            
            # Moviment Y
            if accY <= -150 and y > 0:
                y -= 1
            elif accY >= 150 and y < 4:
                y += 1
            if input.button_is_pressed(Button.A):
                break