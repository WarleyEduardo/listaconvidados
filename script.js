
             var convidados  =  JSON.parse(localStorage.getItem("convidados")) || [];  
             var elLista = document.getElementById("lista")
             var elCampo = document.getElementById("campo")
             var elBotao = document.getElementById("botao")
             var elDivListaConvidados = document.getElementById("div-lista");
             
			   
               var alterarTamanho = (sinal) => {	
					
				   let tamanho = elDivListaConvidados.clientHeight;
				   if (sinal === '+')				   
					   elDivListaConvidados.style.height = `${tamanho + 10}px`
				   else
                        elDivListaConvidados.style.height = `${tamanho - 10}px`;
			   }

	     	    var adicionarConvidado = ()=>{
				
				
				   var nome = elCampo.value
				   if (!nome) 
				   {alert('informe o nome do convidado') }
				   else 
				   {				
				     nome = nome.padEnd(30,"-");
				     convidados.push({nome:nome})
				      elCampo.value = "";
					   listarConvidados()
					   salvarConvidados()
			       }
			     }

			   function salvarConvidados (){

			    	localStorage.setItem("convidados",JSON.stringify(convidados))
			   }

		     function listarConvidados ()	{
				 elLista.innerHTML = "";
				 elDivListaConvidados.style.height = '80px'; 
		      for (const convidado of convidados){
			   var elConvidado = document.createElement("li");
				var elNome = document.createTextNode(convidado.nome)
				alterarTamanho('+');	  
			   var elExcluir = document.createElement("a");			 
			   elExcluir.setAttribute("href","#")	
			    elExcluir.onclick = function (){
				convidados = convidados.filter(function(item){

					return item.nome !== convidado.nome
				})

				listarConvidados()				
				salvarConvidados()
			   }		 
			   
			    elExcluirTexto = document.createTextNode("Excluir");
			   elExcluir.appendChild(elExcluirTexto)
			   elConvidado.appendChild(elNome);
               elConvidado.appendChild(elExcluir);
			   elLista.appendChild(elConvidado);

			  
		    }
		    }

           listarConvidados();

		   elBotao.onclick = adicionarConvidado;
