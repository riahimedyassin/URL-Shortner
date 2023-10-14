const resHolder = document.querySelector("#res")

const handleFetch=async() => {
    let generated = ""
    const link = document.querySelector('#link')
    fetch("http://localhost:3000/seturl",{
        method:'post',
        body: JSON.stringify({
            url : link.value
        }
        ),
        headers: {
            "Content-type": "application/json"
          }
    }).then((res)=> {
        return res.json()
    }).then(data=> {
        resHolder.value = "http://localhost:3000/request.html?id="+data['data']
    }) 
    .catch(err=> {
        console.log(err)
    })
}


