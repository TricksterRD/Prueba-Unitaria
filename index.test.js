const sayHello = require('./index');

test('Debe retornar "Hola Mundo"', () => {
    expect(sayHello()).toBe("Hola Mundo");
});
