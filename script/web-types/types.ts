export type Name = string;
export type Aliases = string[];
export type Description = string;
export type DocUrl = string;
export type HtmlAttributeDefault = string;
export type HtmlAttributeRequired = boolean;
export type ExtraType = {
  name?: string;
};
export type HtmlAttributeValue =
  | {
      kind: string;
    }
  | {
      kind: string;
      required?: boolean;
    }
  | {
      kind: string;
      items: [] | [string];
      required?: boolean;
    }
  | {
      kind: string;
      type: Type;
      required?: boolean;
    };
/**
 * 根据所选语言为类型语法指定类型。该类型可以由字符串表达式、具有导入列表和表达式的对象或可能类型的数组指定
 */
export type Type = string | ComplexType | (string | ComplexType)[];
/**
 * 允许指定实体的来源。对于Vue. js组件，这可能是一个类
 */
export type Source =
  | {
      /**
       * 相对于web类型JSON的文件路径
       */
      file: string;
      /**
       * 源符号（如类名）所在文件中的偏移量
       */
      offset: number;
    }
  | {
      /**
       * 导出符号的模块名称。可以省略，在这种情况下，它被假定为库的名称
       */
      module?: string;
      /**
       * 导出符号的名称
       */
      symbol: string;
    };
/**
 * 匹配整个内容的RegEx模式。语法应该至少适用于ECMA、Java和Python实现
 */
export type Pattern =
  | string
  | {
      regex?: string;
      'case-sensitive'?: boolean;
      [k: string]: unknown;
    };

export type JSONSchemaForWebTypes = {
  /**
   * 框架，其组件由库提供
   */
  framework: 'vue';
  /**
   * 包名称
   */
  name: string;
  /**
   * 版本号，一般来说就是包的版本
   */
  version: string;
  contributions: {
    html?: Html;
    [k: string]: unknown;
  };
  [k: string]: unknown;
};
export type Html = {
  /**
   * 指定类型的语言
   */
  'types-syntax'?: 'typescript';
  /**
   * 用于格式化描述的标记语言
   */
  'description-markup'?: 'html' | 'markdown' | 'none';
  tags?: HtmlTag[];
  attributes?: HtmlAttribute[];
  'vue-filters'?: HtmlVueFilter[];
};
export type HtmlTag = {
  name: Name;
  aliases?: Aliases;
  description?: Description;
  'doc-url'?: DocUrl;
  attributes?: HtmlTagAttribute[];
  source?: Source;
  events?: HtmlTagEvent[];
  slots?: HtmlTagSlot[];
  'vue-model'?: HtmlTagVueModel;
};
export type HtmlTagAttribute = {
  name: Name;
  description?: Description;
  'doc-url'?: DocUrl;
  default?: HtmlAttributeDefault;
  required?: HtmlAttributeRequired;
  value?: HtmlAttributeValue;
};
export type ComplexType = {
  /**
   * 解析类型表达式中的符号所需的导入语句列表
   */
  imports: string[];
  expression: string;
};
export type HtmlTagEvent = {
  name: Name;
  description?: Description;
  'doc-url'?: DocUrl;
  arguments?: TypedEntity[];
};
export type TypedEntity = {
  name: Name;
  description?: Description;
  'doc-url'?: DocUrl;
  type?: Type;
};
export type HtmlTagSlot = {
  name: Name;
  pattern?: Pattern;
  description?: Description;
  'doc-url'?: DocUrl;
  /**
   * 指定插槽作用域的属性
   */
  'vue-properties'?: TypedEntity[];
};
export type HtmlTagVueModel = {
  prop?: string;
  event?: string;
};
export type HtmlAttribute = {
  name: Name;
  aliases?: Aliases;
  description?: Description;
  'doc-url'?: DocUrl;
  default?: HtmlAttributeDefault;
  required?: HtmlAttributeRequired;
  value?: HtmlAttributeValue;
  source?: Source;
  'vue-argument'?: HtmlAttributeVueArgument;
  'vue-modifiers'?: HtmlAttributeVueModifier[];
};
/**
 * 提供有关指令参数的信息
 */
export type HtmlAttributeVueArgument = {
  pattern?: Pattern;
  description?: Description;
  'doc-url'?: DocUrl;
  /**
   * 指令是否需要参数
   */
  required?: boolean;
};
export type HtmlAttributeVueModifier = {
  name: Name;
  pattern?: Pattern;
  description?: Description;
  'doc-url'?: DocUrl;
};
export type HtmlVueFilter = {
  name: Name;
  aliases?: Aliases;
  description?: Description;
  'doc-url'?: DocUrl;
  source?: Source;
  /**
   * 操作员管道左侧的表情类型
   */
  accepts?: string | ComplexType | (string | ComplexType)[];
  /**
   * 结果类型
   */
  returns?: string | ComplexType | (string | ComplexType)[];
  /**
   * 筛选器接受的参数列表。默认情况下，所有参数都是非可选的
   */
  arguments?: HtmlVueFilterArgument[];
};
export type HtmlVueFilterArgument = {
  name: Name;
  description?: Description;
  'doc-url'?: DocUrl;
  type?: Type;
  optional?: boolean;
};
