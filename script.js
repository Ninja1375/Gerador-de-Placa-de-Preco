function updatePricePlate() {
 const promo = document.getElementById(
  'promo').value;
 const productType = document
  .getElementById('productType').value;
 const product = document
  .getElementById('product').value;
 const extra = document.getElementById(
  'extra').value;
 const price = document.getElementById(
  'price').value;
 const unit = document.getElementById(
  'unit').value;

 const pricePattern = /^d{1,3},d{2}$/;

 if (!pricePattern.test(price)) {
  alert(
   "Por favor, insira o preço no formato 99,99"
  );
  return;
 }

 document.getElementById('promoText')
  .textContent = promo;
 document.getElementById(
   'productTypeText').textContent =
  productType;
 document.getElementById('productText')
  .textContent = product;
 document.getElementById('extraText')
  .textContent = extra;
 document.getElementById('priceText')
  .textContent = price;
 document.getElementById('unitText')
  .textContent = unit;
}

function downloadImage() {
 html2canvas(document.getElementById(
  'pricePlate')).then(canvas => {
  let link = document.createElement(
   'a');
  link.download =
   'placa_de_preco.png';
  link.href = canvas.toDataURL(
   'image/png');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
 }).catch(err => {
  console.error(
   "Erro ao gerar a imagem: ", err);
 });
}
