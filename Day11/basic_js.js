function outer() {
    let count = 0;
    function inner() { 
        count++;
        console.log(count);
    }
    return inner; 
}

const counter = outer();
counter();
counter();
counter();
counter();

function createCount(ib) {
    let b=ib;
     {
        function deposit(a){
            b+=a;
            console.log(b);
        }
        function withdraw(a){
            b-=a;
            console.log(b);
        }
        function checkbalance(){
            console.log(b);
        }
        return{deposit , withdraw, checkbalance};
    };
}

const acc = createCount(2000);
acc.deposit(500);
acc.withdraw(1000);


function multiplier(factor){
    return function(number){
        return factor*number;
    }
}
const t=multiplier(3);
console.log(t(10));