function search_appears() {
    let a = document.getElementsByClassName('search')[0];
    a.classList.toggle('search_active')
}

function div_moved() {
    let b = document.getElementsByClassName('center')[0];
    b.classList.toggle('div_moved');
    let c = document.getElementsByClassName('list')[0];
    c.classList.toggle('list_appears');
}