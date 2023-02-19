// Here we Will, Execute different type of star pattern. 

// 1. Print Square type star pattern.


function sqarestar() {

    var numofcols = 10
    var numofrowa = 5

    for (var i = 1; i <= numofrowa; i++) {
        for (var j = 1; j <= numofcols;) {
            document.write("*")
            j++;
        }
        document.write('<br/>')
        // debugger
    }

}
sqarestar()
// 2. Increasing Triangle star pattern.

reversetar()
function reversetar() {

    var numofcols = 10
    var numofrowa = 5

    for (var i = 1; i <= numofrowa; i++) {
        for (var j = 1; j <= i;) {
            document.write("*")
            j++;
        }
        document.write('<br/>')
        // debugger
    }

}
// 3. Decreasing Traingle star pattern.

function decresestar(){
    var numofcols = 10
    var numofrowa = 5

    for(var i=1; i<=numofrowa;i++){
       for(var j=i; j<=numofrowa; j++){
         document.write("*")
       }
       document.write('<br/>')

    } 
}
decresestar()

