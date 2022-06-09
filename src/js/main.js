const inputPrice = document.querySelector('#price')
const inputPeople = document.querySelector('#people')
const inputTip = document.querySelector('#tip')
const btn = document.querySelector('.count')
const pError = document.querySelector('.error')
const pInfo = document.querySelector('.cost-info')
const pSpan = document.querySelector('.cost')

const kamil = () => {
	if (inputPrice.value == '' || inputPeople.value == '' || inputTip.value == '') {
		pError.textContent = 'Uzupełnij wszystkie pola'
		pInfo.style.display = 'none'
	} else {
		pError.textContent = ''
		kamil2()
	}
}
const kamil2 = () => {
	const newPrice = parseFloat(inputPrice.value)
	const newPeople = parseInt(inputPeople.value)
	const newTip = parseFloat(inputTip.value)

	const sum = (newPrice + newPrice * newTip) / newPeople
	pInfo.style.display = 'block'

	pSpan.textContent = sum.toFixed(2)
}

btn.addEventListener('click', kamil)
