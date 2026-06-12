let N = 5;
let tr = 2 * N - 1;

for (let row = 1; row <= tr; row++) 
    {
    let v = 0;
    if (row <= N) 
        {
        v = row;
    } else {
        v = tr - row + 1;
    }
    
    let rowStr = "";

    let leftLength = v;
    for (let j = 0; j < leftLength; j++) 
        {
        if (row <= N) 
            {
            if (j % 2 === 0) 
                {
                rowStr = rowStr + v + " ";
            } else 
                {
                rowStr = rowStr + (10 - v) + " ";
            }
        } else 
            {
            if (j % 2 === 0) 
                {
                rowStr = rowStr + (10 - v) + " ";
            } else 
                {
                rowStr = rowStr+ v + " ";
            }
        }
    }

    let spaces = (N - v) * 2; 
    for (let s = 0; s < spaces; s++)
         {
        rowStr = rowStr + "  "; 
    }

    let rightLength = v; 
    for (let j = 0; j < rightLength; j++) 
        {
        if (row <= N) 
            {
            if (j % 2 === 0) 
                {
                rowStr = rowStr + (10 - v) + " ";
            } else 
                {
                rowStr = rowStr + v + " ";
            }
        } else
             {
            if (j % 2 === 0) 
                {
                rowStr = rowStr + v + " ";
            } else 
                {
                rowStr = rowStr + (10 - v) + " ";
            }
        }
    }

    console.log(rowStr);
}