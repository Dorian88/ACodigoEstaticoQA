// Este es el código REFACTORIZADO. 
// Tiene mejor mantenibilidad, baja complejidad cognitiva y menos code smells.

// Solución a Magic Numbers: Definir constantes con nombres claros.
const DISCOUNT_RATES = {
    premium: { high: 0.8, normal: 0.9, low: 0.95 },
    regular: { high: 0.9, normal: 0.95, low: 1 },
    guest:   { high: 0.95, low: 1 }
};

function processPayment(userType, amount, hasDiscount) {
    const type = userType || "guest";
    const rates = DISCOUNT_RATES[type] || DISCOUNT_RATES.guest;

    if (type === "guest") {
        return amount > 200 ? amount * rates.high : amount * rates.low;
    }

    if (amount > 100) {
        return amount * (hasDiscount ? rates.high : rates.normal);
    }
    
    return amount * rates.low;
}

module.exports = { processPayment };
