const heading = ()=>{
    const content = document.querySelector("#content");
    
    const heading = document.createElement('h1');
    heading.innerText = 'Things i need to do!!!';
    content.appendChild(heading);
    console.log("heading loaded");
}

export default heading