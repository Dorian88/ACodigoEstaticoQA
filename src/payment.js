// Este archivo contiene MALA calidad de código intencionalmente.
// - Variables sin usar (unused variables)
// - Números mágicos (magic numbers)
// - Alta complejidad ciclomática y cognitiva (muchos if/else anidados)

function processPayment(userType, amount, hasDiscount) {
    let result = 0;
    
    // Code Smell: Variable no usada
    let debugMessage = "Iniciando calculo"; 
    
    if (userType === "premium") {
        if (amount > 100) {
            if (hasDiscount) {
                // Code Smell: Números mágicos (0.8)
                result = amount * 0.8; 
            } else {
                result = amount * 0.9;
            }
        } else {
            result = amount * 0.95;
        }
    } else if (userType === "regular") {
        if (amount > 100) {
            if (hasDiscount) {
                result = amount * 0.9;
            } else {
                result = amount * 0.95;
            }
        } else {
            result = amount;
        }
    } else {
        // En caso de que el usuario sea null o desconocido
        if (amount > 200) {
            result = amount * 0.95;
        } else {
            result = amount;
        }
    }
    
    return result;
}

module.exports = { processPayment };
