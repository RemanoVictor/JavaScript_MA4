

const container = document.createElement('div');
    container.setAttribute('class', 'container');
    document.body.appendChild(container);


let content = fetch('https://jsonplaceholder.typicode.com/todos')
.then(function(result){
    return result.json()
})

.then(function(resultJSON){
 
       resultJSON.forEach(todoCard => {
           
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
        
            const h1 = document.createElement('h1');
            h1.textContent = " Title: " + todoCard.title;

            const p1 = document.createElement('p');
            p1.textContent = " User ID: " + todoCard.userId;

            const p2 = document.createElement("p");
            p2.textContent = " ID: " + todoCard.id;

            const p3 = document.createElement('p');
            p3.textContent = " Completed: " + todoCard.completed;
        
            
        
            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);
          
            

       });
console.log(container);

});