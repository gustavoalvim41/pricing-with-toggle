const pricing = document.getElementById('btn-pricing-options');
const basic = document.getElementById('price-basic');
const professional = document.getElementById('price-professional');
const master = document.getElementById('price-master');

const changePricing = (value) => {
	if (value == 1) {
		basic.innerText = '199.99';
		professional.innerText = '249.99';
		master.innerText = '399.99';
	} else {
		basic.innerText = '19.99';
		professional.innerText = '24.99';
		master.innerText = '39.99';
	}
}