function js() {
    const about = document.getElementById("about");
    const projects = document.getElementById("projects");
    about.addEventListener('click', () => {
        console.log("Hello About")
        window.location="index.html"
        
    })

    projects.addEventListener('click', () => {
        console.log("Hello Projects")
        window.location="projects.html"
        
    })
}


js()