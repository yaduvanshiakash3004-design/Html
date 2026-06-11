let N = 5;
let totalRows = 2 * N - 1;

for (let r = 1; row <= totalRows; r++) {
    let v = 0;
    if (r <= N) {
        v = r;
    } else {
        v = totalRows - r + 1;
    }
    
    let rowStr = "";

    let leftLength = v;
    for (let j = 0; j < leftLength; j++) {
        if (r <= N) {
            if (j % 2 === 0) {
                rowStr += v + " ";
            } else {
                rowStr += (10 - v) + " ";
            }
        } else {
            if (j % 2 === 0) {
                rowStr += (10 - v) + " ";
            } else {
                rowStr += v + " ";
            }
        }
    }

    let spaces = (N - v) * 2; 
    for (let s = 0; s < spaces; s++) {
        rowStr += "  "; 
    }

    let rightLength = v; 
    for (let j = 0; j < rightLength; j++) {
        if (row <= N) {
            if (j % 2 === 0) {
                rowStr += (10 - v) + " ";
            } else {
                rowStr += v + " ";
            }
        } else {
            if (j % 2 === 0) {
                rowStr += v + " ";
            } else {
                rowStr += (10 - v) + " ";
            }
        }
    }

    console.log(rowStr);
}