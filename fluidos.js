const m2 = "m²";
const m3 = "m³";
const roh = "ρ";

const massaEspecifica = (massa, volume) => {
  const massaEspecifica = massa / volume;

  return massaEspecifica;
};

const massaDaAgua = "1000";
const volumeDaAgua = "1";

console.log(`${roh} = m/v`);
console.log(`----------------------------------------------------------------`);
console.log(`Massa da Agua = ${massaDaAgua} Kg`);
console.log(`Volume da Agua = ${volumeDaAgua} ${m3}`);
console.log(
  `Densidade da Agua(${roh}) = ${massaEspecifica(
    massaDaAgua,
    volumeDaAgua
  )} Kg/ ${m3}`
);
console.log(`----------------------------------------------------------------`);

const pressaoDeUmFluido = (forca, area) => {
  const pressao = forca / area;

  return pressao;
};

const forca = 200;
const area = 5;
console.log(`P = F/A`);
console.log(`----------------------------------------------------------------`);
console.log(`Força = ${forca} N`);
console.log(`Área = ${area} ${m2}`);
console.log(`Pressão do Liquido = ${pressaoDeUmFluido(forca, area)} Pa`);
console.log(`----------------------------------------------------------------`);

const pressaoDependendoDaAltura = () => {};
