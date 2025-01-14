function exibeValorArray(){
    //debugger
    const people = [
        {
            name: "Jhon",
            phone: "+5555986324595",
            email: "jones@gmail.com"
        },
        {
            name: "Pietra",
            phone: "+5555986012547",
            email: "pie@gmail.com"
        }
    ];
    
    const arrayElement = document.getElementById("array");
    arrayElement.innerHTML = "";

    people.forEach(person => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = person.name;
        row.appendChild(nameCell);

        const phoneCell = document.createElement("td");
        phoneCell.textContent = person.phone;
        row.appendChild(phoneCell);

        const email = document.createElement("td");
        email.textContent = person.email;
        row.appendChild(email);

        arrayElement.appendChild(row);
    });

    

    //
    //console.log(people.map(person => person.name));*/
    
    /*for(const person of people){
        for(const prop in person){
        console.log("Prop: ", prop);
        }
    }
    
    // mas eu posso sim acessr o valor person[prop]
    for(const person of people){
        for (const prop in person){
        console.log("Prop - value: ", person[prop]);
        }
    }*/
}