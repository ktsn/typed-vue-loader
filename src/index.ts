import { transform } from 'typed-vue-template'

function loader (this: any, contents: string): string {
  return transform(contents, this.resourcePath)
}

export = loader
