



// ----------------------------------------------------- Globals

const focalLengths = [5, 16, 24, 35, 50, 75, 100]
let currentFocalLength = 0
let standardLength = 1
let lesser = 0
let greater = 1

let minYear = 1900
let maxYear = 2025
let deepFilter = document.getElementById('deepFilterID')
let focalRingButton = document.getElementById('focalRingButtonID')
deepFilter.innerHTML = 1900

let mouseX = 0
let mouseY = 0

let yearsList = [minYear]
const yearsLength = yearsList.length;






// ----------------------------------------------------- Handling Filters
let a = minYear
for (; a < maxYear; a++){

    const para = document.createElement('button')
    para.classList.add("deepFilter")
    para.id = ("deepFilter" + (a + 1))
    
    let node = document.createTextNode(a + 1)
    para.appendChild(node);
    para.addEventListener("click", function(){rangeSelector(para.id.replace("deepFilter", ""))})

 
    const element = document.getElementById('yearContainerID');
    element.appendChild(para);

}





let yearRange = []
let filterList = []

const lowestValue  = Math.min(...yearRange);
const greatestValue  = Math.max(...yearRange);

let tracker = 0


var allList = document.querySelectorAll(".deepFilter ")







function rangeSelector(a){

    yearRange.sort(function(x, y){return x - y});
    if (yearRange.length < 2){
        yearRange.push(a)
    } else {
        x = yearRange.at(0)
        y = yearRange.at(1)
        if (a <= x){  
            yearRange.splice(0, 1, a)
        } else if(a >= y) {
            yearRange.splice(1, 1, a)
            
        } else if (yearRange[0] < a && a< yearRange[1]){
            
            middle = Math.abs((y - x) / 2)
            console.log(middle)
            if ((Number(x) + Number(middle)) > a){
                console.log('lowest changed')
                yearRange.splice(0, 1, a)
            } else {
                console.log('highest changed')
                yearRange.splice(1, 1, a)
            }
        }
    }

    yearRange.sort(function(x, y){return x - y});
    
    
    for (let i = 0; i < allList.length; i ++){
        a = Number((allList[i]).innerHTML)

        
        if (yearRange[0] <= a && a <= yearRange[1]){


            (allList[i]).style.color = 'white';
            (allList[i]).style.backgroundColor = 'black';

        } else {
            (allList[i]).style.color = 'black';
            (allList[i]).style.backgroundColor = 'white';

        }

    } console.log(yearRange)


} 







// querySelector USE IT !!!!!!!!!!!!!!!!
 

// ----------------------------------------------------- Handling Image

function changeImage(){
    const focalImage = document.getElementById('focalImage')
    // sourceLink = focalImage.src;
    // mmLocation = sourceLink.indexOf("mm")
    // fileFocalLength = ((sourceLink.slice(mmLocation - 3, mmLocation)).replace(/\D/g, '')) + "mm.png"
    // focalImage.src = "images/" + fileFocalLength
    focalImage.src = "images/" + standardLength + "mm.png"

    
}

// ----------------------------------------------------- Handling Focal Value
function nearestStandardLength(a){

    if (a < 100){
        L = lesser
        G = greater

        mean = Math.abs((focalLengths[lesser] + focalLengths[greater]) / 2)
        if (a > focalLengths[greater]){
            lesser += 1
            greater += 1
            nearestStandardLength(a)

        
        } else if (a < mean){
            standardLength = focalLengths[lesser]
            lesser = 0
            greater = 1
        } else if (a > mean){
            standardLength = focalLengths[greater]
            lesser = 0
            greater = 1
        }     
    } else {standardLength = 100}   
    return standardLength
}   
function FocalLength(){
    currentFocalLength += 1
    const mm = "mm"
    standardLength.toString 
    return standardLength + mm
}

// ----------------------------------------------------- Handling REAL Slider
let focalRing = document.getElementById('detailContainer')



console.log(focalRing)
document.addEventListener('mousemove', e =>{
    mouseX = e.clientX
    mouseY = e.clientY
    if (beingHeld == true){
        console.log('logged')
   
        
     





    }



})

let beingHeld = false

function handlingFocalRing(a){


    a.addEventListener('mousedown', () => {
        beingHeld = true


    });


    document.addEventListener('mouseup', () => {
        beingHeld = false


})
    }






// ----------------------------------------------------- Handling Slider



let slider = document.getElementById("myRange");
let output = document.getElementById("focalLength");


slider.addEventListener("input", function() {
    const value = this.value
    output.innerHTML = nearestStandardLength(value) + " mm"
    changeImage()
})


// ----------------------------------------------------- Testing Stuff
function TestButton(){

}

