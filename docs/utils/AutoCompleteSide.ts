/*
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-18 21:30:19
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-18 22:32:13
 */
import fs from 'fs';
import path from 'path';

export const getFiles = (dir: string = path.resolve(__dirname, '../components')): string[] => {
  const mdList: string[] = [];
  const isDir = (d: string) => {
    const stat = fs.statSync(d);
    if (stat.isDirectory()) {
      // 判断是不是目录
      const dirs = fs.readdirSync(d);
      dirs.forEach((value:any) => {
        // console.log('路径',path.resolve(dir,value));
        isDir(path.join(d, value));
      });
    } else if (stat.isFile()) { // 判断是不是文件
      const _file = d.split('\\');
      const mdFile = _file[_file.length - 1];
      if (mdFile.endsWith('.md') && !mdFile.startsWith('install')) {
        mdList.push(mdFile.replace('.md', ''));
      }
    }
  };
  if (fs.statSync(dir).isDirectory()) { isDir(dir); }
  return mdList;
};

// export function generateSidebar(type:string='base'):any[] {
//   const fs = require('fs');
//   const path = require('path');
//   const dir = path.resolve(__dirname, `../components/${type}`); // Markdown 文件目录，根据你的实际情况修改
//   const sidebar:object[] = [];
//
//   fs.readdirSync(dir).forEach((filename:string) => {
//     const filePath = path.join(dir, filename);
//     const stats = fs.statSync(filePath);
//
//     if (stats.isFile() && path.extname(filename) === '.md') {
//       const content = fs.readFileSync(filePath, 'utf-8');
//       const title = getTitle(content);
//       sidebar.push({
//         text: title,
//         link: `/components/${type}/` + filename.replace('.md', '')
//       });
//     }
//   });
//
//   return sidebar;
// }
//
// function getTitle(content:any):string {
//   const match = content.match(/^#\s+(.*)/m);
//   if (match && match.length > 1) {
//     return match[1];
//   }
//   return '';
// }