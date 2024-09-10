const form = document.querySelector("form");
const inp = form.querySelector("input[type=number]");
const resp = form.querySelector("#message");

console.log(form, inp, resp)

form.addEventListener("submit", (e)=>{
	e.preventDefault();
	
	resp.innerText = mes(inp.value - 1);
})

function mes(num=0){
	return ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][num];
}
