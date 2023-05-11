function Calculadora() {
  this.display = document.querySelector('.display');
  this.inicia = () => {
    this.capturaClicks();
    this.capturaEnter();
  }

  this.capturaEnter = () => {
    document.addEventListener('keypress', e => {
      if(e.keyCode !== 13) return;
      this.realizaConta();
    });
  };

  this.capturaClicks = () => {
    document.addEventListener('click', event => {
      const el = event.target;
      if(el.classList.contains('btn-num')) this.addNumdisplay(el);
      if(el.classList.contains('btn-clear')) this.clear();
      if(el.classList.contains('btn-del')) this.del();
      if(el.classList.contains('btn-eq')) this.realizaConta();
    });
  };  

  this.addNumdisplay = el =>  {
    this.display.value += el.innerText;
    this.display.focus();}
  this.clear = () =>  this.display.value = '';
  this.del = () => this.display.value = this.display.value.slice(0, -1);

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);

      if (!conta) {
        alert('Conta inválida.');
      }
      this.display.value = conta;

    } catch (e) {
      alert('Conta inválida.')
    }
  }


}

const calculadora = new Calculadora();
calculadora.inicia();