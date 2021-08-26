module.exports = {
  'package.json': ['npm run lint:prettier'],
  '*.js': ['npm run lint:eslint', 'npm run lint:prettier'],
  '*.css': ['npm run lint:stylelint', 'npm run lint:prettier'],
  '*.md': ['npm run lint:markdownlint', 'npm run lint:prettier'],
};
