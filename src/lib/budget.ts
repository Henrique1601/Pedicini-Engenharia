export type ObraTipo = "residencial" | "comercial" | "reforma" | "pavimentacao";
export type Padrao = "economico" | "medio" | "alto";

// Valores de referência por m² (R$) — estimativa aproximada baseada no CUB/SP
export const RATES: Record<ObraTipo, Record<Padrao, number>> = {
  residencial: { economico: 2200, medio: 3200, alto: 4800 },
  comercial: { economico: 2000, medio: 2900, alto: 4200 },
  reforma: { economico: 1200, medio: 1900, alto: 3000 },
  pavimentacao: { economico: 180, medio: 260, alto: 380 },
};

export function estimate(tipo: ObraTipo, area: number, padrao: Padrao) {
  const base = RATES[tipo][padrao] * area;
  return { min: Math.round(base * 0.9), max: Math.round(base * 1.1) };
}

export const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
