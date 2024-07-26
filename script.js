const botaoConverter = document.querySelector("#button-converter")
const selectConverterMoeda = document.querySelector("#converter-para")
const imgBandeiraConvertida = document.querySelector("#bandeira-moeda")

let pValorOriginal = document.querySelector(".valor-original")
let pValorConvertido = document.querySelector(".valor-convertido")


// Função de quando apertar o botão de converter

botaoConverter.addEventListener("click", converterMoedas)

async function converterMoedas() {

    const inputValor = document.querySelector("#valor-a-converter").value

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(res => res.json())

    const valorAtualDolar = data.USDBRL.high
    const valorAtualEuro = data.EURBRL.high
    const valorAtualBitcoin = data.BTCBRL.high

    pValorOriginal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValor)


    if (selectConverterMoeda.value == "dolar") {

        pValorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor / valorAtualDolar)

    }

    if (selectConverterMoeda.value == "euro") {
        pValorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor / valorAtualEuro)
    }

    if (selectConverterMoeda.value == "bitcoin") {
        pValorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 6,
        }).format(inputValor / valorAtualBitcoin)
    }


}


// Função de quando trocar o valor do select (trocar a moeda que será convertida)

selectConverterMoeda.addEventListener("change", TrocarMoeda)

function TrocarMoeda() {

    let imgBandeiraConvertida = document.querySelector("#bandeira-moeda-convertida")
    let pNomeMoedaConvertida = document.querySelector(".nome-moeda-convertido")


    // DOLAR

    if (selectConverterMoeda.value == "dolar") {

        pNomeMoedaConvertida.textContent = "Dólar"
        imgBandeiraConvertida.src = "./assets/moeda-dolar.svg"

        converterMoedas()

    }

    // EURO

    if (selectConverterMoeda.value == "euro") {

        pNomeMoedaConvertida.textContent = "Euro"
        imgBandeiraConvertida.src = "./assets/moeda-euro.svg"

        converterMoedas()
    }

    // BITCOIN

    if (selectConverterMoeda.value == "bitcoin") {

        pNomeMoedaConvertida.textContent = "Bitcoin"
        imgBandeiraConvertida.src = "./assets/moeda-bitcoin.svg"

        converterMoedas()
    }

}