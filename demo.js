require('./sinq.js')()

var meuArray = [];
meuArray.push({
  meuNome: 'Luana',
  meuCurso: 'Engenharia'
});

meuArray.push({
  meuNome: 'Pedro',
  meuCurso: 'Engenharia'
});

meuArray.push({
  meuNome: 'Fernanda',
  meuCurso: 'Engenharia'
});

meuArray.push({
  meuNome: 'Ana',
  meuCurso: 'Matemática'
});

console.log('\n#meuArray')
console.log(meuArray)

meuArray.orderBy('meuNome')

console.log('\n#OrderBy')
console.log(meuArray)

console.log('\n#select')
console.log(meuArray.select( m => { return { Nome: m.meuNome } }))

console.log('\n#groupBy')
console.log(meuArray.groupBy( m => m.meuCurso ))

console.log('\n#all')
console.log(meuArray.all(m => m.meuCurso))
