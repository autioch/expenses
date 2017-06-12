module.exports = {
  extends: 'qb',
  'rules': {
    'no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'all',
      'ignoreRestSiblings': false,
      'argsIgnorePattern': 'req'
    }]
  }
};
