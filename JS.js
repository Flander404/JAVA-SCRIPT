addEventListener('click', fn);

setTimeout(() => {
    removeEventListener('click', fn)
},5000)
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
    let textA;
    console.log(olcham);
    text.replaceWith(( function(){
        textA = document.createElement('textarea')
        textA.value = text.innerHTML;
        textA.style.width = olcham.width +'px'
        textA.style.height = olcham.height +'px'
        return textA;
    })())
    let div;
    textA.onkeydown = function(e){
        if(e.ctrlKey && e.key == 'Enter'){
            textA.replaceWith(( function(){
                div = document.createElement('div')
                div.innerHTML = textA.value;
                div.style.textAlign = 'center'
                div.style.border = '2px solid red'
                return div;
            })())   
        }
    }

}
// console.log(
//     
// );

// el.setAttribute(attr, val)   --- el ga attribute ornatish
// el.getAttribute(attr)    --- 
// el.hasAttribute(attr)
// el.removeAttribute(attr)
