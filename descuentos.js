function calcularPrecio(precio, descuento){
    var precioFinal = (precio*(100 - descuento))/100;
    return precioFinal
}

function clickDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecio(priceValue, discountValue);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento son: " + precioConDescuento;

}