> 🌐 Language / 语言切换：[English](./README_EN.md) | **中文**

# 个人网站修改教程（完全零基础版）

> **你需要做的事情只有三步**
> 1. 准备工具（只需要做一次）
> 2. 把网站代码下载到电脑上
> 3. 修改内容 → 保存 → 上传

---

## 第一步：准备工具（只需要安装一次，以后不用再装）

你需要安装三个软件：

### 1. Git（用来从 GitHub 下载代码、上传改动）

下载地址：https://git-scm.com/downloads

**Windows 用户：**
- 点击 "Download for Windows"
- 下载后双击安装，一路点 Next 即可

**Mac 用户：**
- 打开终端（按 `Command+空格`，输入"终端"回车）
- 输入以下命令并回车：
  ```
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```
- 等安装完成后，再输入：
  ```
  brew install git
  ```

**验证是否安装成功：** 在终端输入 `git --version`，出现类似 `git version 2.xx.x` 说明成功。

---

### 2. Node.js（用来在本地运行网站，预览效果）

下载地址：https://nodejs.org/zh-cn

- 点击绿色的 **LTS（推荐版本）** 按钮下载
- 下载后双击安装，一路点 Next 即可

**验证是否安装成功：** 在终端输入 `node --version`，出现类似 `v20.x.x` 说明成功。

---

### 3. VS Code（代码编辑器，用来修改文件，像 Word 一样）

下载地址：https://code.visualstudio.com

- 点击 "Download for Windows" 或 "Download for Mac"
- 下载后双击安装，一路点 Next 即可

---

## 第二步：把网站代码下载到电脑上（只需要做一次）

### 2.1 配置 Git 身份（只做一次）

打开终端，依次输入以下两行命令（把引号里的内容换成你的信息）：

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱@example.com"
```

### 2.2 下载代码（克隆仓库）

在终端输入：

```bash
git clone https://github.com/你的GitHub用户名/你的仓库名.git
```

命令执行完后，你的电脑上会出现一个和仓库同名的文件夹，里面就是整个网站的所有代码。

### 2.3 进入项目文件夹并安装依赖

```bash
cd 你的仓库名
npm install
```

等待一两分钟，屏幕会显示很多文字，这是在自动下载网站运行所需的程序包，不用管它，等它停下来就好。

### 2.4 在本地预览网站

```bash
npm run dev
```

然后打开浏览器，访问 **http://localhost:3000**，你就能看到和线上一模一样的网站了！修改文件后，浏览器会自动刷新，实时看到效果。

> **关闭预览：** 在终端按 `Ctrl+C`（Mac 也是 `Ctrl+C`）

---

## 第三步：修改网站内容

用 VS Code 打开项目文件夹：点击菜单 **文件 → 打开文件夹** → 选择你的项目文件夹。

### 修改文字内容（姓名、简介、经历、项目等）

只需要修改这一个文件：`data/data.ts`

里面的内容分为中文（`zh`）和英文（`en`）两部分，**两处都要改**。

**① 个人信息**（`name` / `tagline` / `summary` 那几行）：

| 字段 | 含义 |
|------|------|
| `name` | 姓名 |
| `tagline` | 职业头衔（显示在姓名下方） |
| `summary` | 个人简介段落 |
| `email` | 邮箱 |
| `keywords` | 关键词标签（方括号里用逗号分隔） |

**② 项目 / 经历**（`projects` 和 `timeline` 两个区块）：

| 字段 | 含义 |
|------|------|
| `title` | 项目名称 |
| `role` | 你的角色 |
| `venue` | 公司 / 场合 |
| `description` | 描述文字 |
| `tags` | 技能标签 |
| `period` | 时间段 |
| `org` | 公司 / 学校名称 |
| `bullets` | 要点列表（每条用引号包裹，逗号分隔） |

**③ 技能**（`skillGroups` 区块）：

| 字段 | 含义 |
|------|------|
| `label` | 技能分类名称 |
| `skills` | 该分类下的技能列表 |

> ⚠️ **注意：**
> - 修改文字时，不要删除或修改引号（`"`）、逗号（`,`）、冒号（`:`）等符号
> - 中文弯引号（`"这样的"`）不能直接用，改成 `\"这样的\"`（前后各加反斜杠）
> - 改完后按 `Ctrl+S`（Mac 是 `Command+S`）保存

---

### 修改头像照片

1. 把你的照片重命名为 `portrait.jpg`
2. 放入 `public/pics/` 文件夹，替换掉原来的文件

> 建议照片尺寸：正方形，500×500 像素以上，文件大小不超过 1MB。

---

### 修改简历 PDF

1. 把你的简历 PDF 重命名为 `resume.pdf`（或保持原文件名）
2. 放入 `public/` 文件夹，替换掉原来的文件

---

## 第四步：添加新项目（含图片预览和项目链接）

所有项目都在 `data/data.ts` 文件的 `projects: [ ... ]` 区块里。中文版在 `zh: { ... }` 下，英文版在 `en: { ... }` 下，**两处都要改**。

### 4.1 一个完整项目的结构

```ts
{
  title: "项目名称",
  role: "你的角色",
  venue: "公司 / 场合",
  description: "项目描述，介绍你做了什么、取得了什么成果。",
  tags: ["标签1", "标签2", "标签3"],
  image: "/pics/项目图片.jpg",
  github: "https://github.com/你的用户名/仓库名",
  reportPdf: "/reports/报告文件.pdf",
},
```

> `image`、`github`、`reportPdf` 都是**可选的**，不需要就不写那一行。

---

### 4.2 添加一个新项目（纯文字，无图片无链接）

找到 `projects: [` 这一行，在最后一个项目的右花括号 `}` 后面加一个逗号，然后另起一行粘贴：

```ts
{
  title: "我的新项目",
  role: "项目负责人",
  venue: "某公司 / 某课程",
  description: "在这里写项目描述。",
  tags: ["Excel", "数据分析", "Python"],
},
```

> 注意：每个项目之间要用逗号 `,` 隔开。

---

### 4.3 给项目添加图片预览

**第一步：准备图片文件**

- 把图片文件（支持 `.jpg` / `.png` / `.webp`）放入 `public/pics/`
- 建议命名规范：全英文、无空格，例如 `project-tiktok.jpg`
- 建议图片尺寸：宽 1200px、高 675px（16:9），文件大小不超过 1MB

**第二步：在项目里加上 `image` 字段**

在对应项目的 `tags: [...]` 那行后面加一行：

```ts
image: "/pics/project-xxx.jpg",
```

完整示例：

```ts
{
  title: "项目名称",
  role: "你的角色",
  venue: "公司 / 场合",
  description: "...",
  tags: ["标签1", "标签2"],
  image: "/pics/project-xxx.jpg",
},
```

保存后，项目卡片上就会显示这张图片作为封面。

---

### 4.4 给项目添加 GitHub 链接

在项目里加一行 `github` 字段，填入完整的 GitHub 仓库地址：

```ts
github: "https://github.com/你的GitHub用户名/仓库名",
```

完整示例：

```ts
{
  title: "项目名称",
  role: "独立开发者",
  venue: "个人项目",
  description: "...",
  tags: ["标签1", "标签2"],
  image: "/pics/project-xxx.jpg",
  github: "https://github.com/你的GitHub用户名/仓库名",
},
```

保存后，项目卡片上会出现一个可点击的 GitHub 按钮。

---

### 4.5 给项目添加报告 PDF 链接

**第一步：放入 PDF 文件**

把 PDF 文件放入 `public/reports/`，例如命名为 `my-report.pdf`。

**第二步：在项目里加上 `reportPdf` 字段**

```ts
reportPdf: "/reports/my-report.pdf",
```

完整示例：

```ts
{
  title: "项目名称",
  role: "你的角色",
  venue: "公司 / 场合",
  description: "...",
  tags: ["标签1", "标签2"],
  image: "/pics/project-xxx.jpg",
  reportPdf: "/reports/my-report.pdf",
},
```

保存后，项目卡片上会出现一个"阅读报告"按钮。

---

### 4.6 同时拥有图片 + GitHub + 报告的完整示例

```ts
{
  title: "项目名称",
  role: "你的角色",
  venue: "公司 / 场合",
  description: "项目描述，介绍你做了什么、取得了什么成果。",
  tags: ["标签1", "标签2", "标签3"],
  image: "/pics/project-xxx.jpg",
  github: "https://github.com/你的GitHub用户名/仓库名",
  reportPdf: "/reports/my-report.pdf",
},
```

---

### 4.7 删除一个项目

找到要删除的项目，选中从 `{` 开始到 `},` 结束的所有内容（含逗号），直接按 Delete 键删除即可。

> 删除后检查一下：最后一个项目末尾不需要逗号，但有逗号也不报错。

---

## 第五步：把改动上传到 GitHub（改动才能生效到线上网站）

每次修改完成后，在终端依次输入以下三条命令：

```bash
git add .
git commit -m "更新了xxx内容"
git push
```

| 命令 | 作用 |
|------|------|
| `git add .` | 把所有改动打包准备好 |
| `git commit -m "..."` | 给这次改动写备注（引号里换成你改了什么） |
| `git push` | 上传到 GitHub |

上传完成后，Vercel 会在 **1-2 分钟内**自动重新部署，刷新你的网站地址就能看到更新后的内容。

---

## 常见问题

**Q：终端在哪里？**
- Mac → 按 `Command+空格`，输入"终端"回车打开
- Windows → 按 `Win+R`，输入 `cmd` 回车；或在开始菜单搜索"命令提示符"

**Q：`git push` 提示需要登录怎么办？**
在 GitHub 网站 → 头像 → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token，勾选 `repo` 权限，生成后复制。在终端 push 时，用户名填你的 GitHub 用户名，密码填这个 token。

**Q：改错了怎么恢复？**
```bash
git restore data/data.ts
```
这会把该文件恢复到上次上传时的状态（未上传的改动会丢失）。

**Q：本地预览正常但线上报错怎么办？**
去 Vercel 后台查看报错信息，最常见的原因是：
- 中文弯引号没有转义（见上方注意事项）
- 少了逗号或引号

**Q：图片上传后网站显示不出来？**
检查以下几点：
- 图片是否放在 `public/pics/` 文件夹下
- `data.ts` 里写的路径是否为 `"/pics/文件名.jpg"`（注意开头有斜杠）
- 文件名大小写要一致，`Portrait.jpg` 和 `portrait.jpg` 是不同文件

**Q：已经 `git push` 了但网站没更新？**
打开 Vercel 后台，查看是否有新的部署正在进行，或查看部署日志里有没有报错。

---

## 文件结构速查

```
你的项目文件夹/
├── data/
│   └── data.ts            ← ★ 最重要：所有文字内容都在这里改
├── public/
│   ├── pics/
│   │   ├── portrait.jpg   ← 头像照片
│   │   └── （项目图片放这里，例如 project-xxx.jpg）
│   ├── reports/
│   │   └── （报告 PDF 放这里，例如 my-report.pdf）
│   └── resume.pdf         ← 简历 PDF
├── components/            （网站各个区块的代码，一般不需要改）
└── app/                   （网站框架代码，一般不需要改）
```
