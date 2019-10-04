// JavaScript source code
setInterval(function () { testerFunction();  }, 500);
//testerFunction();


function testerFunction() {
    //greenbuild
    changeColumnColor('clickable Passed', '#51e0b5');
    //changeColumnColor('clickable jobStatuses', '#51e0b5');

    //redbuild
    changeColumnColor('clickable Failed', '#e61ee6');

    changeColumnColor('testResultLink', 'red');
    changeColor('testResultLink tooltipedElement', 'white');

    
    //Header
    //changeColumnColor('th', 'black');
}

function changeColumnColor(column, color) {
    var cols = document.getElementsByClassName(column);
    for (i = 0; i < cols.length; i++) {
        cols[i].style.backgroundColor = color;
    }

}

function changeColor(column, color) {
    var cols = document.getElementsByClassName(column);
    for (i = 0; i < cols.length; i++) {
        cols[i].style.color = color;
    }

}

