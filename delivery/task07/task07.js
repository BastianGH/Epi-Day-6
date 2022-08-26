module.exports = {
    arrayFiltering: function(array, test){
        let NewArray = [];
            for ( i=0; i<array.length; i++ ) {
            if ( test(array[i]) ) { NewArray.push(array[i])
            }
        };
        return NewArray;
    }
}