let result = []

fetch('test.xml').then(response => {
    return response.text()
}).then(xmlString => {
    const xmlDocument = new DOMParser().parseFromString(xmlString, 'text/xml')
    const tests = xmlDocument.querySelectorAll('Tests Test')

    for(const test of tests) {
        const name = test.querySelector('Name').textContent
        const output = test.querySelector('Output').textContent

        result.push(name, ' - ', output)

        const p = document.createElement('p')
        p.textContent = `${name} - ${output}`
        document.body.appendChild(p)
    }
})