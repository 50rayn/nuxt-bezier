import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  ignores: [
    'dist/',
    '**/dist/**/',
    '.nuxt/',
    '**/.nuxt/**/',
    '.output/',
    '**/.output/**/',
  ],
  rules: {
    'ts/consistent-type-definitions': ['error', 'type'],
  },
})
