  let votoSim = 0;
  let votoNao = 0;

  function votouSim(sim) {
  	votoSim += sim;
  	// alert(votoSim);

  	document.querySelector(".sim").style.width = votoSim+"rem";
  	document.querySelector(".sim").innerHTML = votoSim;

  }


  function votouNao(nao){
    votoNao += nao;

  
    document.querySelector(".nao").style.width = votoNao+"rem";	
    document.querySelector(".nao").innerHTML = votoNao;
  }