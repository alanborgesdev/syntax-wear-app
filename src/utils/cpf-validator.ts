// Valida CPF usando o algoritmo oficial de dígitos verificadores
export function isValidCPF(cpf: string): boolean {
    const digits = cpf.replace(/\D/g, "");

    if (digits.length !== 11) return false;

    // Rejeita CPFs com todos os dígitos iguais (ex: 111.111.111-11)
    if (/^(\d)\1{10}$/.test(digits)) return false;

    const calcCheckDigit = (base: string, factor: number): number => {
        let sum = 0;
        for (let i = 0; i < base.length; i++) {
            sum += parseInt(base[i], 10) * (factor - i);
        }
        const remainder = (sum * 10) % 11;
        return remainder === 10 ? 0 : remainder;
    };

    const firstDigit = calcCheckDigit(digits.slice(0, 9), 10);
    const secondDigit = calcCheckDigit(digits.slice(0, 10), 11);

    return (
        firstDigit === parseInt(digits[9], 10) &&
        secondDigit === parseInt(digits[10], 10)
    );
}
