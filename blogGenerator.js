const blogIdGenerator = function*() {
    let uniqueId = 1
    while(true){
        yield uniqueId
        uniqueId++
    }
}

const blogIdFactory = blogIdGenerator()

function blogObjectFactory (title, author, entry, ...tags) {
    return Object.create(null, {
        "id": {
            enumerable: true,
            value: blogIdFactory.next().value
        },
        "title":{
            enumerable: true,
            value: title
        },
        "author": {
            enumerable: true,
            value: author
        },
        "entry": {
            enumerable: true,
            value: entry
        },
        "tags": {
            enumerable: true,
            value: tags
        },
        "published": {
            enumerable: true,
            value: Date.now()
        }

    })

}




