# 老美大战倭寇

支持电脑和手机浏览器的三维射击小游戏。当前版本为 V17，包含可选 Q 版英雄、武器拾取与切换、手雷、六个战场及 16 关固定战役。最终结算展示胜利图片，并根据实际战斗用时奖励得分。死亡和通关结算均可提交昵称与战绩，进入全网共享的“抗日榜单”。

## 目录

- `work/river-game/`：游戏源码、依赖清单及构建脚本。
- `outputs/cloudflare-pages/`：当前版本的页面、资源与排行榜接口 `_worker.js`。
- [最新 Cloudflare 部署包](outputs/laomei-dazhan-wokou-cloudflare.zip?raw=true)：可直接上传的完整 ZIP。

## 本地运行

需要 Node.js 22.13 或更高版本，推荐 Node.js 24。

```powershell
cd work/river-game
npm ci
npm run build
node server.mjs
```

浏览器打开 `http://127.0.0.1:4173/`。静态资源已随仓库提供，无需重新下载纹理。

本地服务使用 `.local/leaderboard.sqlite` 持久保存本地榜单，与线上 D1 数据隔离，该目录不会提交或打包。可通过环境变量 `PORT` 改端口，通过 `LEADERBOARD_DATABASE` 指定本地数据库路径。

方向键或 WASD 移动并控制朝向，空格射击，数字 1 至 4 切换武器，G 投掷手雷，E 使用英雄技能，Shift 闪避，P 暂停。最终战紧急支援就绪时按 N 召唤核弹。

手机访问会自动显示左下摇杆，拖动控制移动速度与朝向，松手停止移动。右下射击按钮支持按住连射，可与摇杆同时操作；点按背包切换武器，点按手雷、闪避和英雄技能按钮释放能力。横竖屏均有独立布局，切到后台时自动暂停。手机默认使用流畅画质，画质偏好与电脑端分别保存。

V17 小幅提高各关敌军总数和血量，保留原有同屏敌人数上限。开局仍配备无限子弹手枪和 2 枚手雷，第一关第 2 次击杀保留步枪补给。普通武器随机掉率为 22%，连续 6 次击杀未掉落时提供保底，地面最多保留 5 件武器。普通敌人的手雷掉率为 6%，前 6 关每关最多随机掉落 1 枚，后续每关最多 2 枚；普通章节首领另有手雷奖励。携带和地面待拾取的手雷合计最多 3 枚，满额时不再生成。

## Cloudflare Pages

首次配置时，在同一 Cloudflare 账号内创建 D1 数据库 `kangri-leaderboard`，进入现有 Pages 项目的 Settings → Bindings，添加生产环境的 D1 绑定，变量名必须为 `LEADERBOARD_DB`，数据库选择 `kangri-leaderboard`。此配置只需做一次。

下载上面的部署包，在同一个 Pages 项目中新建生产部署并上传 ZIP。入口 `index.html`、接口 `_worker.js` 和路由 `_routes.json` 均位于压缩包根目录。首次打开结算榜单时会自动创建 `leaderboard_scores` 表及排名索引，无需执行 SQL。后续更新 ZIP 会保留 D1 内的成绩。

ZIP 直传使用 Pages 的 `_worker.js` 高级模式，不依赖控制台编译 `functions` 目录。只有 `/api/*` 请求进入接口，游戏页面和美术资源仍直接通过静态资源服务加载。

从 Git 仓库部署时，框架预设选择 None，仓库根目录保留默认设置，构建输出目录为 `outputs/cloudflare-pages`。

仓库已包含静态构建结果，也可使用以下构建命令更新页面：

```sh
npm --prefix work/river-game ci && npm --prefix work/river-game run build
```

## 排行榜规则

榜单展示前 50 名，按总分降序排列，同分时用时更短者优先。通关总分为基础战绩加时间奖励，死亡结算使用当时的基础战绩。同一浏览器通过随机玩家标识保留最高成绩，再次提交可以更新昵称；清除浏览器数据或更换设备会生成新的玩家标识，昵称不作为登录凭证。

接口在 `GET /api/leaderboard` 和 `POST /api/leaderboard`，使用绑定访问 D1，不在前端保存数据库凭据。服务端检查昵称、关卡、得分上限和请求大小，并重新计算时间奖励。战斗数据仍由客户端上报，这是一份休闲游戏排行榜，不是能够防止修改客户端作弊的竞技认证系统。

## 资源来源

场景纹理来源记录在 `outputs/cloudflare-pages/assets/sources.json`。第三方库许可见 `outputs/cloudflare-pages/LICENSES.txt`。
