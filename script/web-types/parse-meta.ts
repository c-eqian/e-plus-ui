import { createChecker, type ComponentMeta, type MetaCheckerOptions } from 'vue-component-meta';
import { buildTsConfigPath } from '../paths';
import type { HtmlTag, VueComponentDoc } from './types';
const checkerOptions: MetaCheckerOptions = {
  forceUseTs: true,
  schema: { ignore: ['MyIgnoredNestedProps'] },
  printer: { newLine: 1 },
  rawType: true
};
const checker = createChecker(buildTsConfigPath, checkerOptions);
function pickProps(props: ComponentMeta['props']): HtmlTag['attributes'] {
  return props
    .filter(prop => !prop.global)
    .map(prop => {
      return {
        name: prop.name,
        required: prop.required,
        description: prop.description,
        type: {
          name: prop.type
        },
        default: prop.default
      };
    });
}
function pickSlots(slots: ComponentMeta['slots']): HtmlTag['slots'] {
  return slots.map(slot => {
    return {
      name: slot.name,
      description: slot.description,
      type: {
        name: slot.type
      }
    };
  });
}
function pickEvents(events: ComponentMeta['events']): HtmlTag['events'] {
  return events.map(event => {
    return {
      name: event.name,
      description: event.description,
      // todo 得到的结果是一个字符串数组， type: '[a: string]'
      type: {
        name: event.type
      }
    };
  });
}

export const defineParseMeta = () => {
  const parseList: Record<any, any> = {};
  function parseComponentMeta(componentPath: string) {
    const meta = checker.getComponentMeta(componentPath);
    if (!parseList[componentPath as any]) {
      parseList[componentPath as any] = {
        props: pickProps(meta.props),
        slots: pickSlots(meta.slots),
        events: pickEvents(meta.events)
      };
    }
  }
  function getList(componentPath: string): VueComponentDoc {
    return parseList[componentPath as any] ?? {};
  }
  return {
    parseComponentMeta,
    getList
  };
};
