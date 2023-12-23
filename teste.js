document.addEventListener('DOMContentLoaded', function () {
    const abas = document.querySelectorAll('.aba');
    const carrinho = document.getElementById('lista-carrinho');
    const totalCarrinho = document.getElementById('total-carrinho');
  
    abas.forEach(aba => {
      aba.addEventListener('click', function () {
        abas.forEach(a => a.classList.remove('ativa'));
        this.classList.add('ativa');
        atualizarCatalogo(this);
      });
    });
  
    function atualizarCatalogo(aba) {
      const produtos = aba.querySelectorAll('li');
      carrinho.innerHTML = '';
  
      produtos.forEach(produto => {
        const novoItem = document.createElement('li');
        novoItem.textContent = produto.textContent;
        carrinho.appendChild(novoItem);
      });
  
      calcularTotalCarrinho();
    }
  
    function calcularTotalCarrinho() {
      const itensCarrinho = carrinho.querySelectorAll('li');
      let total = 0;
  
      itensCarrinho.forEach(item => {
        const preco = parseInt(item.textContent.match(/R\$ (\d+)/)[1]);
        total += preco;
      });
  
      totalCarrinho.textContent = `Total: R$ ${total}`;
    }
  });
  