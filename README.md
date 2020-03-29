# Não utilize mais! Está depreciado! Foi criado apenas como testes iniciais do Storage há milianos atrás!

# localDatabase.js
Usa o HTML5 localStorage para lidar com armazenamento de dados offline.
Esse é meu primeiro teste no github. Então, se você achou interessante a ideia desse projeto (que já está utilizável em sua versão 1.0), por favor comente como melhorar e faça suas contribuições, se possível. Obrigado!

## Usage
* Certifique-se de que já tem incluído o JQuery em suas tags head
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
```

* Inclua o script em suas tags head
```html
<script src="localDatabase.min.js"></script>
```

* Em qualquer campo dos formulários, basta adicionar o atributo localDatabase.

### Exemplos
```html
<input type="text" name="meuCampo" value="" localDatabase />
```
Quando um usuário alterar o valor desse campo, ele automaticamente é salvo offline, e esse valor será exibido ao usuário quando a página for recarregada. 

Em um outro exemplo abaixo, você pode definir o nome da variável a ser usada no localStorage. Por padrão, o atributo ```name``` é usado.
```html
<input type="text" name="meuCampo" value="" localDatabase="minhaVariavel" />
```

### Javascript Object

localDatabase é um *javascript object*, e por tanto, ele também possuí métodos quem podem ser acessados via Javascript, por exemplo:

```javascript
localDatabase.setVar('minhaVariavel', 'ValorTeste'); //Definir Variável
localDatabase.getVar('minhaVariavel'); //return string|int valor da variável
localDatabase.delVar('minhaVariavel'); //Deletar Variável
console.log(localDatabase.data); //Conteúdo do localDatabase (apenas para visualizar)
```


