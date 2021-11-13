function menuFunction(x)
    {
        x.classList.toggle("change");
        if ($('.close')[0].style.display === 'block') {
            $('.close')[0].style.display = 'none';
            $('.burguer-container')[0].classList.remove('change')
        } else {
            $('.close')[0].style.display = 'block';
        }
    }
$(document).ready(function(){
    $('.burguer-container,' ).on('click', function(){
        $('.main-navigation').toggle('slow')
    })
})