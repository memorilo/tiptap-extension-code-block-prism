import CodeBlock, { CodeBlockOptions } from '@tiptap/extension-code-block'

import { PrismPlugin } from './prism-plugin'

export interface CodeBlockPrismOptions extends CodeBlockOptions {
  defaultLanguage: string | null | undefined,
}

export const CodeBlockPrism = CodeBlock.extend<CodeBlockPrismOptions>({

  addProseMirrorPlugins() {
    return [
      ...this.parent?.() || [],
      PrismPlugin({
        name: this.name,
        defaultLanguage: this.options.defaultLanguage,
      }),
    ]
  },
})