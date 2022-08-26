
module.exports = {
    range: function(start, end, step) {
        let r = [];
        if  ( step > 0 && start<end )
        {
            for ( i=start; i<=end ; i+= step )
            {
                console.log(i);            
                r.push(i);    
            }
        }else if ( step < 0 && start>end )
        {
            for ( i=start; i>=end ; i+= step )
            {
                console.log(i);            
                r.push(i);    
            } 
        }else console.log("POLICE DE LA BOUCLE INFINI, LES MAINS SUR LA TETE TOUT DE SUITE !")
        
    return console.log(r);
    }
}