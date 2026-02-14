const { replaceInFileSync } = require('replace-in-file');
const fs = require('fs');

try {
  if (fs.existsSync('dist/index.html')) {
    fs.copyFileSync('dist/index.html', 'dist/404.html');
    console.log('✅ 404.html criado com sucesso!');
  }
} catch (err) {
  console.error('❌ Erro ao criar 404.html:', err);
}

const options = {
  files: 'dist/**/*.js',
  from: /%5C/g,
  to: '/',
};

try {
  const results = replaceInFileSync(options); 
  console.log('✅ Build web corrigido com sucesso! Arquivos alterados:', results.filter(r => r.hasChanged).length);
} catch (error) {
  console.error('❌ Erro ao corrigir build:', error);
}