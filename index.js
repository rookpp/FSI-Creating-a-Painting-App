const painting = document.querySelector('.painting')
let colorselect= 'blue'
painting.addEventListener('click', function(e){
	e.target.style.backgroundColor = colorselect
})
const palette = document.querySelector('.palette')
palette.addEventListener('click',function(a){colorselected(a)})

function colorselected(SELECT){
    console.log(SELECT.target.id)
    colorselect = SELECT.target.id;

}
