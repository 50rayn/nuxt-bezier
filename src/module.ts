import { addComponent, defineNuxtModule, useLogger } from '@nuxt/kit'

const COMPONENTS = [
  'BlurTransition',
  'ClipPathTransition',
  'DissolveTransition',
  'FadeSlideTransition',
  'PushTransition',
  'RotateTransition',
  'ScaleTransition',
  'WipeTransition',
  'ZoomTransition',
  'DissolveListTransition',
  'ScaleListTransition',
] as const

export interface ModuleOptions {
  /**
   * Prefix for all transition components
   * @default ''
   */
  prefix?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-bezier',
    configKey: 'nuxtBezier',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  defaults: {
    prefix: '',
  },
  setup(options, nuxt) {
    const logger = useLogger('nuxt-bezier')

    nuxt.options.css.push('@noction/vue-bezier/styles')

    for (const componentName of COMPONENTS) {
      addComponent({
        name: `${options.prefix}${componentName}`,
        filePath: '@noction/vue-bezier',
        export: componentName,
      })
    }

    logger.success(`Registered ${COMPONENTS.length} transition components`)
  },
})
