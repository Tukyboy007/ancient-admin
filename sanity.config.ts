import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'Travel',

  projectId: 'pr9z5y3j',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), getStartedPlugin()],

  schema: {
    types: schemaTypes,
  },
})
