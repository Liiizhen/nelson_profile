> 🌐 Language / 语言切换：**English** | [中文](./README.md)

# Personal Website Edit Guide (Zero Coding Experience Required)

> **Three steps is all it takes:**
> 1. Set up your tools (one-time only)
> 2. Download the website code to your computer
> 3. Edit content → Save → Upload

---

## Step 1: Install Tools (One-time setup)

You need to install three pieces of software:

### 1. Git (for downloading code from GitHub and uploading changes)

Download: https://git-scm.com/downloads

**Windows:**
- Click "Download for Windows"
- Run the installer and click Next through all steps

**Mac:**
- Open Terminal (press `Command+Space`, type "Terminal", press Enter)
- Run the following command:
  ```
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```
- Once that finishes, run:
  ```
  brew install git
  ```

**Verify the installation:** Type `git --version` in Terminal. If you see something like `git version 2.xx.x`, you're good.

---

### 2. Node.js (for running the website locally to preview changes)

Download: https://nodejs.org/en

- Click the green **LTS (Recommended)** button
- Run the installer and click Next through all steps

**Verify the installation:** Type `node --version` in Terminal. If you see something like `v20.x.x`, you're good.

---

### 3. VS Code (code editor — think of it as Word for code)

Download: https://code.visualstudio.com

- Click "Download for Windows" or "Download for Mac"
- Run the installer and click Next through all steps

---

## Step 2: Download the Website Code (One-time only)

### 2.1 Set up your Git identity (one-time only)

Open Terminal and run these two commands (replace the values in quotes with your own info):

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

### 2.2 Clone the repository

```bash
git clone https://github.com/your-github-username/your-repo-name.git
```

After this completes, a folder with your repo name will appear on your computer — that's the entire website.

### 2.3 Enter the project folder and install dependencies

```bash
cd your-repo-name
npm install
```

This will take a minute or two. A lot of text will scroll by — that's normal. Just wait for it to finish.

### 2.4 Preview the website locally

```bash
npm run dev
```

Then open your browser and go to **http://localhost:3000**. You'll see your website exactly as it appears online. Changes you save will automatically refresh in the browser.

> **To stop the preview:** Press `Ctrl+C` in Terminal

---

## Step 3: Edit the Website Content

Open the project folder in VS Code: click **File → Open Folder** → select your project folder.

### Editing text content (name, bio, experience, projects, etc.)

You only need to edit one file: `data/data.ts`

The file has two sections — Chinese (`zh`) and English (`en`). **You need to update both.**

**① Personal info** (around the `name` / `tagline` / `summary` lines):

| Field | What it controls |
|-------|-----------------|
| `name` | Your full name |
| `tagline` | Job title shown below your name |
| `summary` | Bio paragraph |
| `email` | Email address |
| `keywords` | Tag chips (comma-separated inside square brackets) |

**② Projects / Experience** (`projects` and `timeline` sections):

| Field | What it controls |
|-------|-----------------|
| `title` | Project name |
| `role` | Your role |
| `venue` | Company / context |
| `description` | Description text |
| `tags` | Skill tags |
| `period` | Date range |
| `org` | Company / university name |
| `bullets` | Bullet points (each wrapped in quotes, separated by commas) |

**③ Skills** (`skillGroups` section):

| Field | What it controls |
|-------|-----------------|
| `label` | Skill category name |
| `skills` | List of skills in that category |

> ⚠️ **Important:**
> - Do not delete or modify structural characters like `"`, `,`, `:`
> - Chinese curly quotes (`"like this"`) cannot be used inside the string — replace them with `\"like this\"` (backslash before each quote)
> - Save with `Ctrl+S` (Mac: `Command+S`)

---

### Replacing the profile photo

1. Rename your photo to `portrait.jpg`
2. Drop it into `public/pics/`, replacing the existing file

> Recommended size: square, at least 500×500 px, under 1 MB.

---

### Replacing the resume PDF

1. Rename your resume to `resume.pdf` (or keep its current filename)
2. Drop it into `public/`, replacing the existing file

---

## Step 4: Add a New Project (with image, links, and PDF)

All projects live inside the `projects: [ ... ]` block in `data/data.ts`. There is one block under `en: { ... }` and one under `zh: { ... }`. **Update both.**

### 4.1 Full project structure

```ts
{
  title: "Project Title",
  role: "Your Role",
  venue: "Company / Context",
  description: "Describe what you did and what you achieved.",
  tags: ["Tag1", "Tag2", "Tag3"],
  image: "/pics/project-xxx.jpg",
  github: "https://github.com/your-username/repo-name",
  reportPdf: "/reports/my-report.pdf",
},
```

> `image`, `github`, and `reportPdf` are all **optional** — leave out any line you don't need.

---

### 4.2 Add a plain text project (no image or links)

Find the `projects: [` line. After the closing `}` of the last project, add a comma and paste:

```ts
{
  title: "My New Project",
  role: "Project Lead",
  venue: "Company / Course",
  description: "Write your project description here.",
  tags: ["Excel", "Data Analysis", "Python"],
},
```

> Every project must be separated from the next by a comma `,`.

---

### 4.3 Add a cover image to a project

**Step 1 — Prepare the image file**

- Drop the file (`.jpg` / `.png` / `.webp`) into `public/pics/`
- Use English filenames with no spaces, e.g. `project-xxx.jpg`
- Recommended size: 1200×675 px (16:9), under 1 MB

**Step 2 — Add the `image` field**

Add one line after `tags: [...]`:

```ts
image: "/pics/project-xxx.jpg",
```

Full example:

```ts
{
  title: "Project Title",
  role: "Your Role",
  venue: "Company / Context",
  description: "...",
  tags: ["Tag1", "Tag2"],
  image: "/pics/project-xxx.jpg",
},
```

After saving, the project card will show this image as a cover.

---

### 4.4 Add a GitHub link to a project

Add a `github` field with the full repository URL:

```ts
github: "https://github.com/your-username/repo-name",
```

Full example:

```ts
{
  title: "Project Title",
  role: "Independent Developer",
  venue: "Personal Project",
  description: "...",
  tags: ["Tag1", "Tag2"],
  image: "/pics/project-xxx.jpg",
  github: "https://github.com/your-username/repo-name",
},
```

After saving, a GitHub button will appear on the project card.

---

### 4.5 Add a PDF report link to a project

**Step 1 — Add the PDF file**

Drop the PDF into `public/reports/`, e.g. `my-report.pdf`.

**Step 2 — Add the `reportPdf` field**

```ts
reportPdf: "/reports/my-report.pdf",
```

Full example:

```ts
{
  title: "Project Title",
  role: "Your Role",
  venue: "Company / Context",
  description: "...",
  tags: ["Tag1", "Tag2"],
  image: "/pics/project-xxx.jpg",
  reportPdf: "/reports/my-report.pdf",
},
```

After saving, a "Read Report" button will appear on the project card.

---

### 4.6 Full example with image + GitHub + PDF

```ts
{
  title: "Project Title",
  role: "Your Role",
  venue: "Company / Context",
  description: "Describe what you did and what you achieved.",
  tags: ["Tag1", "Tag2", "Tag3"],
  image: "/pics/project-xxx.jpg",
  github: "https://github.com/your-username/repo-name",
  reportPdf: "/reports/my-report.pdf",
},
```

---

### 4.7 Delete a project

Select everything from the opening `{` to the closing `},` (including the comma) and press Delete.

> The last project in the list doesn't need a trailing comma, but having one won't cause an error.

---

## Step 5: Upload Changes to GitHub (required to go live)

After making edits, run these three commands in Terminal:

```bash
git add .
git commit -m "describe what you changed"
git push
```

| Command | What it does |
|---------|-------------|
| `git add .` | Stage all changes |
| `git commit -m "..."` | Save a snapshot with a description |
| `git push` | Upload to GitHub |

Vercel will automatically redeploy within **1–2 minutes**. Refresh your website URL to see the update.

---

## FAQ

**Q: Where do I find Terminal?**
- Mac → Press `Command+Space`, type "Terminal", press Enter
- Windows → Press `Win+R`, type `cmd`, press Enter; or search "Command Prompt" in the Start menu

**Q: `git push` asks me to log in — what do I do?**
Go to GitHub → your avatar → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token. Check the `repo` permission and generate. When Terminal asks for a password during push, paste this token (your GitHub username is the username).

**Q: I made a mistake — how do I undo?**
```bash
git restore data/data.ts
```
This restores the file to the state of your last push. Any unsaved changes will be lost.

**Q: Works locally but breaks on Vercel — why?**
Check the Vercel deployment log. The most common causes are:
- Chinese curly quotes not escaped (see the note above)
- Missing comma or quotation mark

**Q: I uploaded an image but it's not showing on the site — why?**
Check these:
- The image is in `public/pics/`
- The path in `data.ts` starts with a `/`, e.g. `"/pics/filename.jpg"`
- File names are case-sensitive: `Portrait.jpg` and `portrait.jpg` are different files

**Q: I pushed but the site hasn't updated — why?**
Open Vercel and check if a new deployment is in progress, or look at the deployment log for errors.

---

## File Structure Reference

```
your-project-folder/
├── data/
│   └── data.ts            ← ★ Most important: all text content lives here
├── public/
│   ├── pics/
│   │   ├── portrait.jpg   ← Profile photo
│   │   └── (project images go here, e.g. project-xxx.jpg)
│   ├── reports/
│   │   └── (report PDFs go here, e.g. my-report.pdf)
│   └── resume.pdf         ← Resume PDF
├── components/            (site section code — generally no need to edit)
└── app/                   (site framework code — generally no need to edit)
```
