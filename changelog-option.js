const compareFunc = require('compare-func');

// import compareFunc from 'compare-func';
module.exports = {
  writerOpts: {
    transform: (commit, context) => {
      const newCommit = Object.assign({}, commit);
      let discard = true;
      const issues = [];

      newCommit.notes.forEach((note) => {
        note.title = 'BREAKING CHANGES';
        discard = false;
      });
      if (newCommit.type === 'feat') {
        newCommit.type = '✨ Features | 新功能';
      } else if (newCommit.type === 'fix') {
        newCommit.type = '🐛 Bug Fixes | Bug 修复';
      }
      // else if (newCommit.type === 'perf') {
      //   newCommit.type = '⚡ Performance Improvements | 性能优化';
      // }
      else if (newCommit.type === 'revert' || newCommit.revert) {
        newCommit.type = '⏪ Reverts | 回退';
      } else if (discard) {
        return;
      }
      // else if (commit.type === 'docs') {
      //   commit.type = '📝 Documentation | 文档'
      // }
      // else if (commit.type === 'style') {
      //   commit.type = '💄 Styles | 风格'
      // }
      // else if (commit.type === 'refactor') {
      //   commit.type = '♻ Code Refactoring | 代码重构'
      // }
      // else if (commit.type === 'test') {
      //   commit.type = '✅ Tests | 测试'
      // }
      // else if (commit.type === 'build') {
      //   commit.type = '👷‍ Build System | 构建'
      // }
      // else if (commit.type === 'ci') {
      //   commit.type = '🔧 Continuous Integration | CI 配置'
      // }
      // else if (commit.type === 'chore') {
      //   commit.type = '🎫 Chores | 其他更新'
      // }

      if (newCommit.scope === '*') {
        newCommit.scope = '';
      }

      if (typeof newCommit.hash === 'string') {
        newCommit.hash = newCommit.hash.substring(0, 7);
      }

      if (typeof newCommit.subject === 'string') {
        let url = context.repository
          ? `${context.host}/${context.owner}/${context.repository}`
          : context.repoUrl;

        if (url) {
          url = `${url}/issues/`;
          // Issue URLs.
          newCommit.subject = newCommit.subject.replace(
            /#([0-9]+)/g,
            (_, issue) => {
              issues.push(issue);
              return `[#${issue}](${url}${issue})`;
            }
          );
        }

        if (context.host) {
          // User URLs.
          newCommit.subject = newCommit.subject.replace(
            /\B@([a-z0-9](?:-?[a-z0-9/]){0,38})/g,
            (_, username) => {
              if (username.includes('/')) {
                return `@${username}`;
              }
              return `[@${username}](${context.host}/${username})`;
            }
          );
        }
      }

      // remove references that already appear in the subject
      newCommit.references = newCommit.references.filter((reference) => {
        if (issues.indexOf(reference.issue) === -1) {
          return true;
        }
        return false;
      });
      return newCommit;
    },
    groupBy: 'type',
    commitGroupsSort: 'title',
    commitsSort: ['scope', 'subject'],
    noteGroupsSort: 'title',
    notesSort: compareFunc,
  },
};
