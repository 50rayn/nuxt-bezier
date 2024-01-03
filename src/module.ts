import { defineNuxtModule, addComponent } from '@nuxt/kit'

const COMPONENTS = [
  'FadeTransition',
  'ZoomCenterTransition',
  'ZoomXTransition',
  'ZoomYTransition',
  'SlideXLeftTransition',
  'SlideXRightTransition',
  'SlideYUpTransition',
  'SlideYDownTransition',
  'ScaleTransition',
  'CollapseTransition',
] as const;

type PartialComponents =  (typeof COMPONENTS)[number]

export interface ModuleOptions {
  prefix?: string
  components?: PartialComponents[]
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-bezier',
    configKey: 'nuxtBezier'
  },
  defaults: {
    prefix: ''
  },
  setup (options, nuxt) {
    let componentsToRegister: PartialComponents[]

    if (Array.isArray(options.components) && options.components.every(name => COMPONENTS.includes(name))) {
      componentsToRegister = options.components;
    } else if (options.components !== undefined) {
      throw new Error('Invalid "components" provided for nuxtBezier module. Please provide a valid array of component names.');
    } else {
      componentsToRegister = [...COMPONENTS];
    }

    nuxt.options.css.push('@noction/vue-bezier/styles')

    for (const componentName of componentsToRegister) {
      addComponent({
        name: `${options.prefix}${componentName}`,
        filePath: '@noction/vue-bezier',
        export: componentName
      })
      .catch(error => {
        console.error(`Error registering component "${componentName}":`, error);
      })
    }
  }
})
