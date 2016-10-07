# localDatabase.js
Usa o HTML5 localStorage para lidar com armazenamento de dados offline.
Esse é meu primeiro teste no github. Então, se você achou interessante a ideia desse projeto (que já está utilizável em sua versão 1.0), por favor comente como melhorar e faça suas contribuições, se possível. Obrigado!

## Usage
1. Certifique-se de que já tem incluído o JQuery em suas tags head
  ```
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  ```
2. Inclua o script em suas tags head
  ```
  <script src="localDatabase.min.js"></script>
  ```
3. Em qualquer campo dos formulários, basta adicionar o atributo localDatabase.

### Exemplos
```
<input type="text" name="meuCampo" value="" localDatabase />
```
Quando um usuário alterar o valor desse campo, ele automaticamente é salvo offline, e esse valor será exibido ao usuário quando a página for recarregada. 

Em um outro exemplo abaixo, você pode definir o nome da variável a ser usada no localStorage. Por padrão, o atributo ```name``` é usado.
```
<input type="text" name="meuCampo" value="" localDatabase="minhaVariavel" />
```
