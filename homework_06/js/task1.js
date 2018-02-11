/* Task1: Find type of triangle and calculate square 

a, b, c - sides of triangle
sP - semiperimeter
square - square of triangle
*/

(function() {

    var a = Number(prompt("Enter value first triangle side: ", "0"));
    var b = Number(prompt("Enter value second triangle side: ", "0"));
    var c = Number(prompt("Enter value third triangle side: ", "0"));
    var square, triangleType;
   
   // Function is finding square of triangle
    function findSquare(side1, side2, side3) {
        var sP = (side1 + side2 + side3) / 2;
        var s = Math.sqrt(sP*(sP - side1)*(sP - side2)*(sP - side3));
        return s;
    }

    // Function is checking triangle type
    function checkTriangleType() {
        if((a*b)/2===square || (a*c)/2===square || (b*c)/2===square) {
            return 'right triangle';
        } else
        if (a===b && a===c && b===c) {
            return triangleType = 'equilateral';
        } else 
        if (a===b || a===c || b===c) {
            return 'isosceles';
        } else if ((a!=b && a!=c && b!=c)) {
            return 'scalene ';
        }
    }

    // Function is checking for correctness input data and execute output data in console
    function isCorrerctAndExecute() {
        // Checking each side of triangle for negative numbers, zero, string, empty line. Checking sum of sides.
        if (a<=0 || b<=0 || c<=0 || isNaN(a) || isNaN(b) || isNaN(c) || a+b<=c || a+c<=b || b+c<=a) {
            console.log('Incorrect data! The value of any side of triangle could not be "negative number", "zero", "string" or "empty line". Sum of two any side could not be less then the third side.');
            return;
        } else {
            // Execute function findSquare
            square = findSquare(a, b, c);
            // Checking square of triangle for a zero
            if (square === 0) {
                console.log('Incorrect data! The triangle with input sides does not exist!');
                return;
            }
            // Checking square of triangle by integer or float numbers
            if (square % 2 === 0) {
                square = square;
            } else {
                square = square.toFixed(2);
            }
            // Execute function checkTriangleType
            triangleType = checkTriangleType();
            console.log('Type of triangle is ' + triangleType +' and square is ' + square);
        }
    }

// Execute function isCorrerctAndExecute
isCorrerctAndExecute();

})();