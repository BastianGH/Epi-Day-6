module.exports = {
    objectsDeeplyEqual: function(cmp1, cmp2 ){
        let item1 = cmp1;
        let item2 = cmp2;
        console.log(item1);
        console.log(item2);
        console.log(typeof(item1));
        console.log(typeof(item2));
        let flip ;
        if ( typeof(item1) === 'object' ) {
            if ( typeof(item1) == typeof(item2) ) {
                if ( item1[0] == undefined ) {
                    let NewFirst = [];
                    let NewSecond = [];
                    function ObjectScanner(Obj, NewArray){
                        let i=0;
                        for ( i in Obj){
                            NewArray.push(i);
                            NewArray.push(Obj[i]);
                            console.log(NewArray);
                            i++;
                        }          
                    }
                    ObjectScanner(item1, NewFirst);
                    console.log("item1 = "+NewFirst);
                    ObjectScanner(item2, NewSecond);
                    console.log("item2 = "+NewSecond);
                    let  flip = true;
                    //module.exports.objectsDeeplyEqual(NewFirst, NewSecond);
                }else if ( item1===null ) { console.log(true +" 1") 
                }else if ( item1.length===item2.length) {
                    for ( j=0 ; j<item1.length ;j++ ) {
                    console.log(item1[j], item2[j]);
                    let R = module.exports.objectsDeeplyEqual(item1[j], item2[j]);
                    console.log("j ="+j);
                    if ( !R ) { j = j+NewFirst.length; };
                    }
                }else console.log("HARDSTUCK");
                    flip = false;
                }else console.log(false+" 2") 
        }if ( item1 == item2 ) {
            console.log(true+" 2");
            return true;
        }else console.log(false+" 3")
    }
}