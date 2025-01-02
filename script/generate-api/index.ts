import { writeFileSync } from 'fs';
import { resolve } from 'node:path';
import chalk from 'chalk';
import consola from 'consola';
import fs from 'fs-extra';
import { apiDocs, outDir } from '../paths';
import type {
  HtmlTagAttribute,
  HtmlTagEvent,
  HtmlTagSlot,
  JSONSchemaForWebTypes
} from '../web-types/types';
const NORMAL_LIST = ['boolean', 'number', 'string'];
function prettierDefault(item: any) {
  if ((Array.isArray(item.value.type) || NORMAL_LIST.includes(item.value.type)) && item.default) {
    return `\`${(item.default || '').replaceAll("'", '')}\``;
  }
  return '-';
}
function funcToFunction(func: string) {
  return func === 'func' ? 'function' : func;
}
const replaceSplice = (str: unknown) => {
  if (Array.isArray(str)) {
    return funcToFunction(str[0].replaceAll('|', ' \\| ').replaceAll('"', ''));
  }
  if (typeof str === 'string') {
    return funcToFunction(str.replaceAll('|', ' \\| ').replaceAll('"', ''));
  }
  return funcToFunction((str as string) ?? '');
};

function clearLineBreak(text: unknown) {
  if (typeof text == 'string') {
    return text.replace(/\\\\n/g, '').replace(/\\n/g, '').replace('/\\/g', '');
  }
  return text ?? '';
}
function parameterMd(attributes: HtmlTagAttribute[]) {
  let table = `## Parameter 参数\n`;
  table += '| 参数 | 类型 | 可选 | 描述 | 默认值 |\n';
  table += '| --- | --- | --- | --- | --- |\n';
  attributes.forEach(attribute => {
    table += `| ${attribute.name} | \`${replaceSplice((attribute.value as any)?.type)}\` | \`${attribute.required ?? false}\` | ${clearLineBreak(attribute.description) ?? ''} | ${prettierDefault(attribute)}\n`;
  });
  return table;
}
function slotsMd(slots: HtmlTagSlot[]) {
  let table = `## Slots 插槽\n`;
  table += '| 插槽名 | 描述 |\n';
  table += '|  ---  | --- |\n';
  slots.forEach(slot => {
    table += `| \`${slot.name}\` | - |\n`;
  });
  return table;
}
function eventsMd(events: HtmlTagEvent[]) {
  let table = `## Events 事件\n`;
  table += '| 事件名 | 类型 |  描述 |\n';
  table += '| --- | --- |  --- |\n';
  events.forEach(event => {
    table += `| ${event.name} | - | ${clearLineBreak(event.description)} |\n`;
  });
  return table;
}
/**
 * 生成API文档
 */
export const generateApi = async () => {
  const typesJsonPath = resolve(outDir, 'web-types.json');
  const typesJson: JSONSchemaForWebTypes = await fs.readJSON(typesJsonPath);

  const data = typesJson.contributions.html?.tags?.map(tag => {
    const { name, events = [], slots = [], attributes = [] } = tag;
    const paramsTable = attributes.length === 0 ? '' : parameterMd(attributes);
    const slotsTable = slots.length === 0 ? '' : slotsMd(slots);
    const eventsTable = events.length === 0 ? '' : eventsMd(events);
    const title = `# ${name}\n`;
    return {
      name,
      markdown: title + paramsTable + slotsTable + eventsTable
    };
  });
  await fs.ensureDir(apiDocs);
  data?.forEach(item => {
    const outputFilePath = resolve(apiDocs, `${item.name}.md`);
    writeFileSync(outputFilePath, item.markdown, 'utf-8');
    consola.success(`Generating ${chalk.blue(`${item.name}`)} for ${item.name}.md`);
  });
};
await generateApi();
