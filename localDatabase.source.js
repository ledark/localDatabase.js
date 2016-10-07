var localDatabase = {

	//Core Resources
	isDisponivel: function() {
		//Você pode Forçar o Uso de Cookies Ativando/Desativando os comentários da Linha Abaixo
		//return false;
		
		if (typeof localStorage !== 'undefined') {
			return true;
		} else {
			return false;
		}
	}
	
	//Core Setter
,	set: function(data) {
		if( this.isDisponivel() === true ) {
			localStorage.setItem( 'localDatabase', data );
		} else {
			document.cookie = "localDatabase="+data+"; expires=Thu, 18 Dec 2030 12:00:00 UTC";
		}
	}
	
	//Core Deltree
,	del: function() {
		if( this.isDisponivel() === true ) {
			localStorage.setItem( 'localDatabase', '' );
		} else {
			document.cookie = "localDatabase=; expires=Thu, 01 Jan 1970 00:00:00 UTC"; 
		}
	}

	//Core Getter
,	get: function() {
		if( this.isDisponivel() === true ) {
			
			var localDatabaseData = localStorage.getItem( 'localDatabase' );
			if(localDatabaseData == '' || localDatabaseData == 'undefined' || localDatabaseData == 'null' || localDatabaseData == null) {
				localDatabaseData = JSON.stringify([{campo1: '', campo2: ''}]);
			}			
			return localDatabaseData;
		} else {
			return this.getCookie("localDatabase");
		}	
	}
	
	//Apenas em caso de Cookie Engine: Getter
,	getCookie: function() {
		var cname = "localDatabase";
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length,c.length);
			}
		}
		return "";
	} 
	
	//Apenas em caso de Cookie Engine: Setter [Deprecate]
,	setCookie: function(cvalue, exdays) {
		var cname = "localDatabase";
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}	

	//Apenas em caso de Cookie Engine: isExists [Deprecate]
,	isCookied: function() {
		if( this.getCookie("localDatabase") != "" ) {
			return true;
		} else {
			return false;
		}
	} 	
	
	//Usos mais Comuns: Definir Variável 
,	setVar: function(nome, valor) {
		var objRaw = this.get();
		var dados = JSON.parse( objRaw );
		eval("dados[0]."+nome+" = valor;");
		localDatabase.set( JSON.stringify(dados) );
	}

	//Usos mais Comuns: Recuperar Variável 
,	getVar: function(nome) {
		var objRaw = this.get();
		var dados = JSON.parse( objRaw );
		eval("var item = dados[0]."+nome+";");
		return item;
	}

	//Usos mais Comuns: Deletar Variável 
,	delVar: function(nome) {
		var objRaw = this.get();
		var dados = JSON.parse( objRaw );
		eval("delete dados[0]."+nome+";");
		localDatabase.set( JSON.stringify(dados) );
	}

	//Limpar todas as Variáveis
,	clear: function() {
		this.del();
		this.delVar('campo1');
		this.delVar('campo2');
	}

	
};

/*
//Exemplos
var a = localDatabase.isCookied();
console.log( a );

localDatabase.setCookie('Isso foi Cookiado! hehe');
var b = localDatabase.getCookie();
console.log( b );


localDatabase.setVar('nome', 'value');
localDatabase.getVar('nome');

Nos campos de formulário você pode o atributo localDatabase="nome", e sempre que esse campo for alterado, ele armazenará e carregará o valor do campo
Se o atributo for vazio, então ele usa o atributo name como parâmetro para coletar o valor.



*/

$(function(){
	$('[localDatabase]')
		.on('change', function(){
			var nome = $(this).attr('localDatabase');
			if(nome == '' || nome == undefined ) nome = $(this).attr('name');
			var valor = $(this).val();
			localDatabase.setVar(nome, valor);
		})
		;
	$('[localDatabase]').each(function(){
		var nome = $(this).attr('localDatabase');
		if(nome == '' || nome == undefined ) nome = $(this).attr('name');
		var valor = localDatabase.getVar(nome);
		$(this).val(valor);
	});
});
