terms = $("span.TermText.notranslate.lang-en")
meanings = $("span.TermText.notranslate.lang-zh-CN")
data = []
for (i = 0; i < terms.length; i++) {
    data.push([terms[i].innerHTML, meanings[i].innerHTML])
}
fisherYatesShuffle(data)
dataStr = ''
data.forEach(function(entry) { dataStr += [entry[0], entry[1]].join('$') + '\n' })
console.save(dataStr)