let temp: number;
if (input.buttonIsPressed(Button.A)) {
    while (true) {
        temp = input.temperature()
        led.plotBarGraph(temp, 50)
        serial.writeValue("Temperatura", temp)
    }
}

