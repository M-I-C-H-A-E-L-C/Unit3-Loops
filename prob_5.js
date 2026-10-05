function multiplicationTable(Tablenumber){
    let table = [];
    let tables = [];
    for (let r = 1; r <= Tablenumber; r++){
         for (let c = 1; c <= Tablenumber; c++){
            Number = (c * r);  
            table.push(Number);   
        }
        
        tables.push(table.join(" ")); // ("\n", table);
        table = [];
        
    }
    result = tables.join("\n");
    console.log(String(result));
}
multiplicationTable(4);
