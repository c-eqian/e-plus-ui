import path from "path";
import fs from "fs";

export function generateSidebar(type:string='base'):any[] {
    const dir = path.resolve(__dirname, `../../components/${type}`); // Markdown 文件目录，根据你的实际情况修改
    const sidebar:object[] = [];

    fs.readdirSync(dir).forEach((filename:string) => {
        const filePath = path.join(dir, filename);
        const stats = fs.statSync(filePath);

        if (stats.isFile() && path.extname(filename) === '.md') {
            const content = fs.readFileSync(filePath, 'utf-8');
            const title = getTitle(content);
            sidebar.push({
                text: title,
                link: `/components/${type}/` + filename.replace('.md', '')
            });
        }
    });

    return sidebar;
}

function getTitle(content:any):string {
    const match = content.match(/^#\s+(.*)/m);
    if (match && match.length > 1) {
        return match[1];
    }
    return '';
}