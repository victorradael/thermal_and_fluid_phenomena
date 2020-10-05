// 1- Segundo a Agência Nacional de Petróleo (ANP), o etanol fornecido pelas bombas de abastecimentos em postos
// de combustı́veis deve ter uma densidade ρ et entre 0,805 g/cm³ e 0,811 g/cm³ . Para verificar se existe adulteração
// no combustı́vel, instala-se um densı́metro que consiste de um cilindro com duas esferas de densidades diferentes,
// ligeiramente maior e menor do que ρ et . Na Figura abaixo podemos ver três amostras de combustı́vel. Uma amostra
// é de etanol puro e as outras duas amostras são misturas.

// AMOSTRA I - As duas esferas estão no fundo do recipiente
// AMOSTRA II - As duas esferas estão flutuando no recipiente
// AMOSTRA III - Uma das esferas esta flutuando e a outra esta no fundo do recipiente

//(a) Relacione as densidades do etanol e das duas esferas.

// Supõe-se que as esferas tem densidade:
// ESFERA 1: 0,800 g/cm³; --> levemente menor que a minima prevista pelo enunciado
// ESFERA 2: 0,820 g/cm³; --> levemente maior que a maxima prevista pelo enunciado

//(b) Qual amostra está dentro dos padrões estabelecido pela ANP? Explique seu raciocı́nio.

// A amostra que esta dentro dos padroes estabelecidos pela ANP, eh a amostra III,
// pois a esfera com a densidade levemente superior ao maximo previsto esta localizada
// ao fundo do recipiente e a esfera com a densidade levemente inferior ao minimo previsto
// encontra-se flutuando no recipiente.

//(c) Relacione as densidades do etanol e das duas misturas.

// A Amostra I possui densidade inferior ao mino previsto, e o que indica isso eh
// o fato das duas esferas terem afundado no recipiente. Ja na Amostra II a densidade
// excede o maximo previsto, o que faz com que as duas esferas flutuem no recipiente.

//-----------------------------------------------------------------------------------------

// 2- Um cubo de alumı́nio (ρ = 2, 70 × 10 −3 kg/m³ ) de massa 1, 00 × 10 −3 kg é colocado em um tanque. Adiciona-se
// água (ρ = 1, 00 × 10 −3 kg/m³ ) no tanque até que metade do cubo fique submerso.

//(a) Qual é a força normal que atua sobre o cubo?

//massa do cubo
const massa_do_cubo = 1 * Math.pow(10, -3);
console.log("Massa do Cubo: " + massa_do_cubo + " kg");

//forca gravitacional no Cubo
const forca_gravitacional_cubo = massa_do_cubo * 9.81;
console.log("Força gravitacional no Cubo: " + massa_do_cubo + " N");

// massa especifica do cubo
const massa_especifica_do_cubo = 2.7 * Math.pow(10, -3);
console.log(
  "Massa especifica do Cubo: " + massa_especifica_do_cubo + " kg/ m³"
);

// dada a equacao  p = m/V --> massa_especifica_do_cubo = massa_do_cubo/Volume
const volume_cubo = massa_do_cubo / massa_especifica_do_cubo;
console.log("Volume do Cubo: " + volume_cubo + " m³");

// massa especifica da agua
const massa_especifica_da_agua = 1 * Math.pow(10, -3);
console.log(
  "Massa especifica da agua: " + massa_especifica_da_agua + " kg/ m³"
);

// levando em consideração o principio de Arquimedes
// Quando um corpo esta total ou parcialmente submerso em um fluido,
// uma força de empuxo Fe exercida pelo fluido age sobre o corpo. A força
// é dirigida para cima e tem módulo dado por Fe = mfg onde mf é a massa do
// fluido deslocado pelo corpo;

const volume_de_agua_deslocado_pelo_cubo = volume_cubo / 2;
console.log(
  "Volume de agua deslocada pelo cubo: " +
    volume_de_agua_deslocado_pelo_cubo +
    " m³"
);

// p = m/V
const massa_de_agua_deslocada_pelo_cubo =
  volume_de_agua_deslocado_pelo_cubo * massa_especifica_da_agua;
console.log(
  "Massa agua deslocada pelo cubo: " + massa_de_agua_deslocada_pelo_cubo + " kg"
);

// g = 9,81 m/s² --> Fe = mfg

const Fe = massa_de_agua_deslocada_pelo_cubo * 9.81;
console.log("Força de empuxo exercida pela agua: " + Fe + " N");

// Força Normal eh o mesmo que o peso aparente que eh o mesmo que fazer
// o peso gravitacional menos a força de empuxo --> PESOap = peso - Fe
const pesoAp = forca_gravitacional_cubo - Fe;
console.log("---------------------------------------------------------------");
console.log("(a) Força normal que atua sobre o cubo: " + pesoAp + " N");
console.log("---------------------------------------------------------------");

//(b) Em seguida, uma quantidade de mercúrio (ρ = 13, 6 × 10 −3 kg/m 3 ) é lentamente escoada para o tanque e se
// deposita no fundo dele. Qual a profundidade da camada de mercúrio depositada para que a força normal no cubo se
// anule?

// massa especifica do mercurio
const massa_especifica_do_mercurio = 13.6 * Math.pow(10, -3);
console.log(
  "Massa especifica do mercurio: " + massa_especifica_do_mercurio + " kg/ m³"
);

// Fe_agua + Fe_mercurio tem que ser igual a força peso do cubo
