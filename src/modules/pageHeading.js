const heading = ()=>{
    
    const heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.innerText = 'Things i need to do!!!';

    const headingDiv = document.querySelector(".headingDiv");
    headingDiv.appendChild(heading);
    console.log("heading loaded");
}

export default heading