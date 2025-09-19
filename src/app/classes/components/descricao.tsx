export function Descricao({ className }: Readonly<{ className?: string }>) {
  return (
    <div className={className}>
      Existem 7 classes, e para a primeira mesa o ideal é que cada jogador
      escolha uma classe diferente. Lembrando, o ideal não é obrigatório, você
      não precisa jogar em uma classe que não acha interessante apenas porquê as
      outras já foram escolhidas, isso pode ser negociado entre os jogadores e
      debatido com o mestre para que todos fiquem satisfeitos com suas escolhas.
      Aqui veremos os valores dos atributos como Pontos de Domínio, que definem
      os limites de suas habilidades como personagem. Por exemplo: você escolheu
      ser um Caçador de Sombras com o atributo de sabedoria 3, e sua habilidade
      “Presa Favorita” custa 1 ponto de domínio. Por conta do seu atributo, você
      só pode utilizar essa habilidade 3 vezes antes de precisar de um descanso
      para se recuperar. Vale lembrar que o uso das habilidades não diminuem o
      valor dos atributos, apenas limitam a quantidade de vezes que as
      habilidades podem ser usadas a partir do seu valor.
    </div>
  );
}
