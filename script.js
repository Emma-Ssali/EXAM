$('.nav ul li').click(function() {

    $(this).addClass("active").siblings().remove
    Class('active');
})

const tabBtn = document.querySelectorAll('.nav ul li');

const tab = document.querySelectorAll('.tab');

function tabs(panelIndex) {
    tab.forEach(function(node) {
        node.computedStyleMap.display = 'none';    
    });
}
tabs(0);