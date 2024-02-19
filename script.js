const botaoConverter = document.querySelector("#button-converter")
const selectConverterMoeda = document.querySelector("#converter-para")
const imgBandeiraConvertida = document.querySelector("#bandeira-moeda")

let pValorOriginal = document.querySelector(".valor-original")
let pValorConvertido = document.querySelector(".valor-convertido")


// Função de quando apertar o botão de converter

botaoConverter.addEventListener("click", converterMoedas)

function converterMoedas() {

    const inputValor = document.querySelector("#valor-a-converter").value

    console.log(selectConverterMoeda.value)

    // Valores das moedas do dia 19/02/24

    const valorAtualDolar = 4.96
    const valorAtualEuro = 5.35
    const valorAtualBitcoin = 257015.52



    pValorOriginal.textContent = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValor)


    if (selectConverterMoeda.value == "dolar") {

        pValorConvertido.textContent = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor / valorAtualDolar)

    }

    if (selectConverterMoeda.value == "euro") {
        pValorConvertido.textContent = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor / valorAtualEuro)
    }

    if (selectConverterMoeda.value == "bitcoin") {
        pValorConvertido.textContent = new Intl.NumberFormat("de-DE", {
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