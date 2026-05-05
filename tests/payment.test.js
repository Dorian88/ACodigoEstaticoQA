const { processPayment } = require('../src/payment');

describe('Payment Processing', () => {
    test('Calcula descuento para usuario premium mayor a 100 con descuento extra', () => {
        expect(processPayment("premium", 150, true)).toBe(120); // 150 * 0.8
    });

    test('Calcula precio base para usuario regular menor o igual a 100 sin descuento', () => {
        expect(processPayment("regular", 50, false)).toBe(50); // 50 * 1
    });
    
    // Dejaremos intencionalmente algunos casos sin probar (ej. "usuario desconocido")
    // Esto provocará que SonarCloud detecte que la cobertura NO es del 100%.
});
