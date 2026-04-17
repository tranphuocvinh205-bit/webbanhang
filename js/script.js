let count = 0;
const cartCountElement = document.getElementById('cart-count');
const addButtons = document.querySelectorAll('.add-to-cart');

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        cartCountElement.innerText = count;
        alert('Đã thêm áo vào giỏ hàng!');
    });
});
