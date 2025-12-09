if input.button_is_pressed(Button.A):
    while True:
        temp = input.temperature()
        led.plot_bar_graph(temp, 50)
        serial.write_value("Temperatura", temp)
