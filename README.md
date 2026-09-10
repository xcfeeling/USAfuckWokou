# 前线 1996 · 英雄突围

面向桌面浏览器的三维射击小游戏。当前版本为 V15，包含可选 Q 版英雄、武器拾取与切换、手雷、六个战场及 16 关固定战役。最终结算展示胜利图片，并根据实际战斗用时奖励得分。

## 目录

- `work/river-game/`：游戏源码、依赖清单及构建脚本。
- `outputs/cloudflare-pages/`：当前版本的完整静态页面和资源。

## 本地运行

需要 Node.js 22 或更高版本。

```powershell
cd work/river-game
npm ci
npm run build
node server.mjs
```

浏览器打开 `http://127.0.0.1:4173/`。静态资源已随仓库提供，无需重新下载纹理。

方向键或 WASD 移动并控制朝向，空格射击，数字 1 至 4 切换武器，G 投掷手雷，E 使用英雄技能，Shift 闪避，P 暂停。最终战紧急支援就绪时按 N 召唤核弹。

## Cloudflare Pages

框架预设选择 None，仓库根目录保留默认设置，构建输出目录为 `outputs/cloudflare-pages`。

仓库已包含静态构建结果，也可使用以下构建命令更新页面：

```sh
npm --prefix work/river-game ci && npm --prefix work/river-game run build
```

## 资源来源

场景纹理来源记录在 `outputs/cloudflare-pages/assets/sources.json`。第三方库许可见 `outputs/cloudflare-pages/LICENSES.txt`。
