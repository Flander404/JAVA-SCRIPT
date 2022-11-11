addEventListener('click', fn);

let oldtar;
function fn(ev) {
    let tar = ev.target.closest('.all-img img');
    if (!tar) return;

    oldtar ? oldtar.style.border = '' : '';

    let src = tar.getAttribute('src');

    document.querySelector('.show img').setAttribute('src', src);

    tar.style.border = '5px solid green';
    oldtar = tar;
}
let text = document.querySelector('.text')
text.onclick = function(e){
    let olcham = text.getBoundingClientRect()
    console.log(olcham);
    text.replaceWith(( function(){
        let textA = document.createElement('textarea')
        textA.value = text.innerHTML;
        textA.style.width = olcham.width +'px'
        textA.style.height = olcham.height +'px'
        return textA;
    })())
}
// console.log(
//     
// );

// el.setAttribute(attr, val)   --- el ga attribute ornatish
// el.getAttribute(attr)    --- 
// el.hasAttribute(attr)
// el.removeAttribute(attr)
