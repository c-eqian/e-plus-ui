// const modules:Record<string, string> = import.meta.glob('@/assets/face/**.gif', { eager: true });
export const emojiList = [
    { title: '[微笑]', name: 'weixiao.gif' },
    { title: '[嘻嘻]', name: 'xixi.gif' },
    { title: '[哈哈]', name: 'haha.gif' },
    { title: '[可爱]', name: 'keai.gif' },
    { title: '[可怜]', name: 'kelian.gif' },
    { title: '[挖鼻]', name: 'wabi.gif' },
    { title: '[吃惊]', name: 'chijing.gif' },
    { title: '[害羞]', name: 'haixiu.gif' },
    { title: '[挤眼]', name: 'jiyan.gif' },
    { title: '[闭嘴]', name: 'bizui.gif' },
    { title: '[鄙视]', name: 'bishi.gif' },
    { title: '[爱你]', name: 'aini.gif' },
    { title: '[泪]', name: 'lei.gif' },
    { title: '[偷笑]', name: 'touxiao.gif' },
    { title: '[亲亲]', name: 'qinqin.gif' },
    { title: '[生病]', name: 'shengbing.gif' },
    { title: '[太开心]', name: 'taikaixin.gif' },
    { title: '[白眼]', name: 'baiyan.gif' },
    { title: '[右哼哼]', name: 'youhengheng.gif' },
    { title: '[左哼哼]', name: 'zuohengheng.gif' },
    { title: '[嘘]', name: 'xu.gif' },
    { title: '[衰]', name: 'shuai.gif' },
    { title: '[吐]', name: 'tu.gif' },
    { title: '[哈欠]', name: 'haqian.gif' },
    { title: '[抱抱]', name: 'baobao.gif' },
    { title: '[怒]', name: 'nu.gif' },
    { title: '[疑问]', name: 'yiwen.gif' },
    { title: '[馋嘴]', name: 'chanzui.gif' },
    { title: '[拜拜]', name: 'baibai.gif' },
    { title: '[思考]', name: 'sikao.gif' },
    { title: '[汗]', name: 'han.gif' },
    { title: '[困]', name: 'kun.gif' },
    { title: '[睡]', name: 'shui.gif' },
    { title: '[钱]', name: 'qian.gif' },
    { title: '[失望]', name: 'shiwang.gif' },
    { title: '[酷]', name: 'ku.gif' },
    { title: '[色]', name: 'se.gif' },
    { title: '[哼]', name: 'heng.gif' },
    { title: '[鼓掌]', name: 'guzhang.gif' },
    { title: '[晕]', name: 'yun.gif' },
    { title: '[悲伤]', name: 'beishang.gif' },
    { title: '[抓狂]', name: 'zhuakuang.gif' },
    { title: '[黑线]', name: 'heixian.gif' },
    { title: '[阴险]', name: 'yinxian.gif' },
    { title: '[怒骂]', name: 'numa.gif' },
    { title: '[互粉]', name: 'hufen.gif' },
    { title: '[书呆子]', name: 'shudaizi.gif' },
    { title: '[愤怒]', name: 'fennu.gif' },
    { title: '[感冒]', name: 'ganmao.gif' },
    { title: '[心]', name: 'xin.gif' },
    { title: '[伤心]', name: 'shangxin.gif' },
    { title: '[猪]', name: 'zhu.gif' },
    { title: '[熊猫]', name: 'xiongmao.gif' },
    { title: '[兔子]', name: 'tuzi.gif' },
    { title: '[喔克]', name: 'ok.gif' },
    { title: '[耶]', name: 'ye.gif' },
    { title: '[棒棒]', name: 'good.gif' },
    { title: '[不]', name: 'no.gif' },
    { title: '[赞]', name: 'zan.gif' },
    { title: '[来]', name: 'lai.gif' },
    { title: '[弱]', name: 'ruo.gif' },
    { title: '[草泥马]', name: 'caonima.gif' },
    { title: '[神马]', name: 'shenma.gif' },
    { title: '[囧]', name: 'jiong.gif' },
    { title: '[浮云]', name: 'fuyun.gif' },
    { title: '[给力]', name: 'geili.gif' },
    { title: '[围观]', name: 'weiguan.gif' },
    { title: '[威武]', name: 'weiwu.gif' },
    { title: '[话筒]', name: 'huatong.gif' },
    { title: '[蜡烛]', name: 'lazhu.gif' },
    { title: '[蛋糕]', name: 'dangao.gif' },
    { title: '[发红包]', name: 'fahongbao.gif' }
];
export const initEmoji = () => {
    return emojiList.map(item=>{

        return {
            name: item.title,
            url:  new URL(`../assets/emoji/${item.name}`, import.meta.url).href
        }
    });
};
/**
 * 处理文本、表情转换
 * @param text
 */
export const useEmojiTransform = (text: string) => {
    const regex = /\[([^\]]+)\]/g;
    return text.replace(regex, (match, emojiTitle) => {
        console.log({ emojiTitle });
        const emoji = emojiList.find(e => e.title === match);
        if (emoji) {
            const url = new URL(`../assets/emoji/${emoji.name}`, import.meta.url).href;
            return `<span 
            class="emoji-img" 
            style="background-image: url(${url});width: 14px;
            height: 14px;background-size: 100%;background-position: 50% 50%;
            vertical-align: middle;display: inline-block;background-repeat: no-repeat;"
            >
            </span>`;
        }
        return match; // 如果找不到匹配的表情，则原样返回
    });
};
