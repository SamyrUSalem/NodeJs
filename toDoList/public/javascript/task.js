const setTagAsDone = async (element, id) => {
    event.preventDefault()
    try {
        let headers = new Headers({ "Content-Type": "application/json" }) //Estou devolvendo Json
        let body = JSON.stringify({ task: { done: element.checked } }) //Estou indo no elemento e verificando o done    
        let response = await fetch(`/tasks/${id}?_method=put`, { headers: headers, body: body, method: "PUT" }) //Estou chamando o backend
        let data = await response.json() //Estou convertendo em json a respostada dada pelo back
        let task = data.task
        let parent = element.parentNode //Dessa forma, irei coletar a div q esta separando as tasks

        if (task.done) {
            element.checked = true
            parent.classList.add("has-text-success")
            parent.classList.add("is-italic")
        } else {
            parent.classList.remove("has-text-success")
            parent.classList.remove("is-italic")
        }
    } catch (error) {
        alert("Error")
    }
}