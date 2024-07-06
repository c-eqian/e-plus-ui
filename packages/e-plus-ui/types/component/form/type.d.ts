import type { ColProps, FormItemRule } from 'element-plus';
import type { Ref } from 'vue';
/**
 * 扩展参数
 */
export type FormExtraPropsType = {
    [k: string]: any;
};
/**
 * 扩展validator方法，支持自定义校验前置
 */
export interface FormItemRules<T = any> extends FormItemRule {
    validatorFn?: (model: T) => FormItemRule['validator'];
}
/**
 * el-基础控件
 */
export type FormItemType = 'text' | 'number' | 'input-number' | 'input' | 'select' | 'switch' | 'textarea' | 'date' | 'date-time' | 'daterange' | 'time-picker' | 'time-range' | 'date-time-range' | 'checkbox-group' | 'radio-group' | 'cascade';
/**
 * 配置数据
 * 组件， select、cascade
 */
export interface IFormOptions extends FormExtraPropsType {
    /**
     * 配置项值
     */
    value: any;
    /**
     * 标签
     */
    label: string;
    /**
     * 子节点
     */
    children?: IFormOptions[];
}
/**
 * 列宽配置
 */
export type IFormItemCol = Partial<Pick<ColProps, 'span' | 'sm' | 'xs' | 'md' | 'lg' | 'xl'>> | number;
export interface IFormConfig<T = any> {
    /**
     * 表单model
     * 建议使用响应式方法
     */
    model: Ref<{
        [P in keyof T]: T[P];
    }>;
    /**
     * 标签的长度，例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。
     * 可以使用 auto。
     */
    labelWidth?: string | number;
    /**
     * 用于控制该表单内组件的尺寸
     */
    size?: '' | 'large' | 'default' | 'small';
}
/**
 * form-item配置
 */
export interface IFormItemConfig<T = any> {
    /**
     * 标签名称
     */
    label?: string;
    /**
     * 参数
     */
    prop?: keyof T extends infer E ? (E extends string ? E : string) : string;
    /**
     * 表单组件宽度
     */
    width?: string;
    /**
     * 插槽名称
     */
    slotKey?: string;
    /**
     * form-item表单的类型
     * 目前暂不支持上传类型组件，如需要，则建议使用插槽
     */
    type?: FormItemType;
    /**
     * 栅格的布局方式
     */
    col?: IFormItemCol;
    /**
     * 表单校验规则
     */
    rules?: FormItemRules<T> | FormItemRules<T>[] | boolean;
    /**
     * 输入框描述
     */
    placeholder?: string;
    /**
     * 启用状态-是否可以编辑
     * 需要配置operationType使用
     */
    disabled?: boolean;
    /**
     * 是否只读
     * 需要配置operationType使用
     */
    readOnly?: boolean;
    /**
     * 日期时间范围占位符
     * 长度应该为2
     */
    dateTimeRange?: string[];
    /**
     * el 额外参数
     */
    elExtraPros?: FormExtraPropsType;
    /**
     * 是否一直禁用，为true时，处于不可编辑状态，disabled将会失效
     */
    alwaysDisabled?: boolean;
    /**
     * 是否一直禁用，为true时，处于不可编辑状态，readOnly将会失效
     */
    alwaysReadOnly?: boolean;
    /**
     * 下拉框、级联配置
     * 同
     */
    options?: IFormOptions[] | Ref<IFormOptions[]>;
    /**
     *日期时间可选范围： 是否可选在今天之后（包含今天）
     */
    isThanNow?: boolean;
    /**
     *日期时间可选范围： 是否可选在今天之前（包含今天）
     */
    isLessNow?: boolean;
    /**
     * 自定义限制日期时间范围
     * @param time
     */
    disableDateTimeRange?: (time: Date) => boolean;
    /**
     * 回车
     * @param value 当前值
     */
    enter?: (value: any) => void;
    /**
     * 值改变时的方法
     * @param value 当前值
     */
    change?: (value: any) => void;
}
/**
 * 表达上下文
 */
export interface FormContext {
    /**
     * form 数据对象
     */
    model: IFormConfig['model'];
}
