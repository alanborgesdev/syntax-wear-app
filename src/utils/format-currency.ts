/**
 * Formata um valor numérico no padrão de moeda brasileira (BRL - R$).
 *
 * @param value - O valor numérico a ser formatado.
 * @param options - Opções adicionais para customização via Intl.NumberFormatOptions (opcional).
 * @returns String formatada como moeda (ex: "R$ 150,00").
 */
export function formatCurrency(
    value: number,
    options?: Intl.NumberFormatOptions
): string {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        ...options,
    }).format(value);
}

export const currencyFormat = formatCurrency;
export default formatCurrency;
