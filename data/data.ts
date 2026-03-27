// ─── 1. 类型定义 Types ────────────────────────────────────────────────────────
export type Lang = "en" | "zh";

export type ProjectVideo =
  | { type: "local"; src: string }
  | { type: "youtube"; videoId: string; pageUrl?: string }
  | { type: "bilibili"; bvid: string; pageUrl?: string }
  | null;

export interface Project {
  title: string;
  role?: string;
  venue?: string;
  description: string;
  tags: string[];
  video?: ProjectVideo;  
  image?: string;        
  reportPdf?: string;    
  github?: string;       
}

export type TimelineType = "experience" | "education" | "opensource";

export interface TimelineItem {
  period: string;
  role: string;
  org: string;
  location: string;
  type?: TimelineType;  // 控制图标渲染的关键字段
  typeLabel?: string;   // 控制页面显示的文字
  bullets?: string[];
  link?: string;
}

// ─── 2. 双语数据基座 i18n ───────────────────────────────────────────────────
export const i18n = {
  // ───────────────── ENGLISH ──────────────────────────────────────────────────
  en: {
    ui: {
      nav: { projects: "Projects", experience: "Experience", skills: "Skills" },
      hero: { availability: "Open to PhD positions & research internships — 2026/2027", github: "GitHub", resume: "Resume PDF", email: "Email", scroll: "scroll" },
      sections: { projects: "Featured Works & Research", experience: "Education & Experience", skills: "Skills" },
      card: { watchDemo: "Watch Demo", readReport: "Read Report", demoSoon: "demo coming soon" },
      timeline: { industry: "Industry", education: "Education", opensource: "Open Source" },
      footer: { builtWith: "Built with Next.js & Framer Motion" },
    },
    profile: {
      name: "Nelson Tian",
      nameShort: "NT",
      email: "lunshuo.tian@student.unsw.edu.au",
      github: "https://github.com/Liiizhen",
      resume: "/Nelson Tian-CV.pdf",
      tagline: "AI Perception Researcher & Open-Source Developer",
      summary: "Building perception systems that see, understand, and act in the physical world. Focused on 3D Computer Vision, Embodied AI, and Autonomous Navigation — from lab research to production robotics.",
      keywords: ["3D Computer Vision", "Embodied AI", "Autonomous Navigation"],
    },
    projects: [
      {
        title: "Click-to-Model: Real-Time Interactive Object Modeling & Robust 6D Pose Tracking",
        role: "Core Developer · 3rd Author",
        venue: "Submitted to IROS 2026",
        description: "End-to-end interactive perception framework for unseen objects without CAD models. Users click to select objects; the system builds a Gaussian-based model in real time and tracks 6D pose robustly. Achieves 97% RSR at 19 FPS on standard benchmarks.",
        tags: ["PyTorch", "Gaussian Splatting", "6D Pose", "OpenCV", "C++", "ROS"],
        video: { type: "local", src: "/demo/CLM_demo.mp4" },
        reportPdf: "/reports/IROS26_1812_MS.pdf",
      },
      {
        title: "End-to-End Voice-Controlled Grasping System",
        role: "Perception Algorithm Engineer Intern",
        venue: "Industry @ Dobot",
        description: "Deployed Qwen-7B VLM locally under 9 GB VRAM via quantization and KV-cache tuning. Integrated real-time YOLO-Seg + SORT pipeline for target detection and tracking. Code merged to the official Dobot GitHub repository.",
        tags: ["Qwen-7B", "VLM", "YOLO-Seg", "SORT", "Python", "ROS"],
        video: { type: "local", src: "/demo/voice_txt_command_demo.mp4" },
        github: "https://github.com/Dobot-Arm/voice_txt_command",
      },
      {
        title: "Autonomous Driving & Object Recognition on Limo Robot",
        role: "Project Lead",
        venue: "Robotics Systems Project",
        description: "Full autonomous navigation stack on a physical Limo robot: GMapping SLAM for environment mapping, AMCL localization, Pure Pursuit path following, and real-time YOLO-based traffic light detection — all integrated in ROS.",
        tags: ["ROS", "SLAM", "YOLO", "C++", "Python", "Embedded Linux"],
        video: { type: "local", src: "/demo/Limo_demo.mp4" },
      },
      {
        title: "OpenCV Fractal ArUco Detection (GSoC)",
        role: "Open Source Contributor",
        venue: "Open Source @ OpenCV",
        description: "Engineered Fractal ArUco marker detection from scratch for the OpenCV objdetect module. Optimized the core algorithm structure and patched existing vulnerabilities, boosting keypoint matching capability by 28%. Contributed via PR #27934.",
        tags: ["C++", "OpenCV", "Algorithms", "Marker Detection"],
        image: "/pics/fractal.jpg",
        reportPdf: "/reports/Fractal_ArUco.pdf",
        github: "https://github.com/opencv/opencv/pull/27934",
      },
      {
        title: "OpenCV ArUco Module Optimization",
        role: "Open Source Contributor",
        venue: "Open Source @ OpenCV",
        description: "Evaluated 1,200+ samples to systematically benchmark ArUco3 detection performance. Optimized default parameters of the ArUco3 detector, improving robustness across lighting and scale conditions. Contributed via PR #28645, merged into OpenCV mainline.",
        tags: ["C++", "OpenCV", "ArUco", "Benchmarking"],
        image: "/pics/aruco.png",
        reportPdf: "/reports/Optimization of ArUco Functions in OpenCV.pdf",
        github: "https://github.com/opencv/opencv/pull/28645",
      },
      {
        title: "Explainable AI in PCGRL via Action-Perturbation Saliency Maps",
        role: "Lead Researcher",
        venue: "Course Research Project",
        description: "Novel action-perturbation saliency method using output probability distribution gradients (measured by Euclidean distance) to explain agent decisions in Procedural Content Generation. Accelerated saliency computation by 10× compared to naive baselines.",
        tags: ["PyTorch", "Reinforcement Learning", "XAI", "Python"],
        image: "/pics/xpcgrl.png",
        reportPdf: "/reports/XPCGRL20240615.pdf",
        github: "https://github.com/Liiizhen/xpcgrl.git",
      }

    ] as Project[],
    timeline: [
      // ── EDUCATION ──
      {
        period: "Sep 2025 - Sep 2026", role: "Master of Information Technology (AI)", org: "UNSW Sydney", location: "Sydney, Australia", 
        type: "education", typeLabel: "Education", bullets: ["Focus: 3D Vision, Deep Learning, and Autonomous Systems."],
      },
      {
        period: "Aug 2021 - Jul 2025", role: "Bachelor of Engineering (Computer Science)", org: "SUSTech", location: "Shenzhen, China", 
        type: "education", typeLabel: "Education", bullets: ["Solid foundation in Algorithm Design and Robotics Engineering."],
      },
      // ── INTERNSHIP (INDUSTRY) ──
      {
        period: "Jan 2026 - Mar 2026", role: "Perception Algorithm Engineer Intern", org: "Dobot", location: "Shenzhen, China", 
        type: "experience", typeLabel: "Industry",
        bullets: [
          "Developed end-to-end voice-controlled perception systems for Atom robots.",
          "Optimized VLM deployment and KV-cache for edge devices."
        ],
      },
      // ── OPEN SOURCE ──
      {
        period: "Mar 2025 - Aug 2025", role: "Open Source Contributor (GSoC)", org: "OpenCV", location: "Remote", 
        type: "opensource", typeLabel: "Open Source",
        bullets: ["Implemented Fractal ArUco detection from scratch; improved matching by 28%."],
        link: "https://github.com/opencv/opencv/pull/27934",
      },
      {
        period: "Sep 2024 - Jan 2025", role: "Open Source Contributor", org: "OpenCV", location: "Remote", 
        type: "opensource", typeLabel: "Open Source",
        bullets: ["Benchmarked 1.2k samples and optimized ArUco3 default parameters."],
        link: "https://github.com/opencv/opencv/pull/28645",
      },
    ] as TimelineItem[],
    skillGroups: [
      { label: "Languages", skills: ["C / C++", "Python", "TypeScript", "CUDA"] },
      { label: "Frameworks", skills: ["PyTorch", "ROS / ROS2", "OpenCV", "JAX", "Next.js"] },
      { label: "Research Areas", skills: ["6D Pose Estimation", "3D Computer Vision", "Embodied AI", "Reinforcement Learning", "SLAM", "Gaussian Splatting"] },
      { label: "Tools & Infra", skills: ["Docker", "Linux", "Git", "WandB", "TensorRT", "ONNX"] },
    ],
  },

  // ───────────────── CHINESE ──────────────────────────────────────────────────
  zh: {
    ui: {
      nav: { projects: "项目", experience: "经历", skills: "技能" },
      hero: { availability: "正在寻找 PhD 及研究实习机会 — 2026/2027", github: "GitHub", resume: "简历 PDF", email: "邮件联系", scroll: "向下滚动" },
      sections: { projects: "精选项目与研究", experience: "教育与经历", skills: "技能" },
      card: { watchDemo: "观看演示", readReport: "阅读报告", demoSoon: "演示视频即将上线" },
      timeline: { industry: "工业界", education: "教育", opensource: "开源" },
      footer: { builtWith: "使用 Next.js & Framer Motion 构建" },
    },
    profile: {
      name: "Nelson Tian",
      nameShort: "NT",
      email: "lunshuo.tian@student.unsw.edu.au",
      github: "https://github.com/Liiizhen",
      resume: "/Nelson_Tian_CV.pdf",
      tagline: "AI 感知算法研究员 & 开源开发者",
      summary: "构建能够感知、理解并与物理世界交互的智能系统。专注于三维计算机视觉、具身智能与自主导航——从学术研究到生产级机器人落地。",
      keywords: ["三维计算机视觉", "具身智能", "自主导航"],
    },
    projects: [
      {
        title: "Click-to-Model：实时交互式物体建模与鲁棒 6D 位姿追踪",
        role: "核心开发者 · 第三作者",
        venue: "投稿至 IROS 2026",
        description: "面向未见物体的端到端交互感知框架，无需 CAD 模型。用户点击即可选定目标，系统实时构建基于高斯的三维模型并进行鲁棒 6D 位姿追踪。在标准基准测试上达到 97% RSR，运行速度 19 FPS。",
        tags: ["PyTorch", "Gaussian Splatting", "6D Pose", "OpenCV", "C++", "ROS"],
        video: { type: "local", src: "/demo/CLM_demo.mp4" },
        reportPdf: "/reports/IROS26_1812_MS.pdf",
      },
      {
        title: "端到端语音控制抓取系统",
        role: "感知算法工程师（实习）",
        venue: "工业界 @ 越疆科技",
        description: "通过量化与 KV-cache 调优，在 9GB 显存限制下完成 Qwen-7B VLM 本地化部署。集成基于 YOLO-Seg + SORT 的实时目标检测与追踪流水线。代码已合并至 Dobot 官方 GitHub 仓库。",
        tags: ["Qwen-7B", "VLM", "YOLO-Seg", "SORT", "Python", "ROS"],
        video: { type: "local", src: "/demo/voice_txt_command_demo.mp4" },
        github: "https://github.com/Dobot-Arm/voice_txt_command",
      },
      {
        title: "基于 Limo 机器人的自动驾驶与目标识别",
        role: "项目负责人",
        venue: "机器人系统项目",
        description: "在实体 Limo 机器人上构建完整自主导航栈：GMapping SLAM 建图、AMCL 定位、Pure Pursuit 路径控制，以及基于 YOLO 的实时交通灯检测——全部集成于 ROS 框架中。",
        tags: ["ROS", "SLAM", "YOLO", "C++", "Python", "Embedded Linux"],
        video: { type: "local", src: "/demo/Limo_demo.mp4" },
      },
      {
        title: "OpenCV Fractal ArUco 标记检测 (GSoC)",
        role: "开源贡献者",
        venue: "开源 @ OpenCV",
        description: "从零为 OpenCV objdetect 模块开发 Fractal ArUco 标记检测算法。优化核心算法结构并修复现有漏洞，使关键点匹配能力提升 28%。通过 PR #27934 贡献代码。",
        tags: ["C++", "OpenCV", "Algorithms", "Marker Detection"],
        image: "/pics/fractal.jpg",
        reportPdf: "/reports/Fractal_ArUco.pdf",
        github: "https://github.com/opencv/opencv/pull/27934",
      },
      {
        title: "OpenCV ArUco 模块参数优化",
        role: "开源贡献者",
        venue: "开源 @ OpenCV",
        description: "评估 1,200+ 个真实世界样本，系统性地对 ArUco3 检测器进行基准测试。优化 ArUco3 检测器的默认参数，显著提升其在不同光照与尺度条件下的鲁棒性。通过 PR #28645 贡献代码，已合并至 OpenCV 主线。",
        tags: ["C++", "OpenCV", "ArUco", "Benchmarking"],
        image: "/pics/aruco.png",
        reportPdf: "/reports/Optimization of ArUco Functions in OpenCV.pdf",
        github: "https://github.com/opencv/opencv/pull/28645",
      },
      {
        title: "基于动作扰动显著图的 PCGRL 可解释人工智能",
        role: "项目负责人",
        venue: "课程研究项目",
        description: "首创基于动作扰动的显著性计算方法，利用整个输出概率分布的梯度（通过欧氏距离衡量）来解释智能体的决策逻辑。相比基线方法将计算加速 10 倍。",
        tags: ["PyTorch", "Reinforcement Learning", "XAI", "Python"],
        image: "/pics/xpcgrl.png",
        reportPdf: "/reports/XPCGRL20240615.pdf",
        github: "https://github.com/Liiizhen/xpcgrl.git",
      }

    ] as Project[],
    timeline: [
      // ── 教育经历 ──
      {
        period: "2025.09 - 2026.09", role: "信息技术硕士（人工智能方向）", org: "新南威尔士大学（UNSW）", location: "澳大利亚·悉尼", 
        type: "education", typeLabel: "教育", bullets: ["主修：三维视觉、深度学习与自主系统。"],
      },
      {
        period: "2021.08 - 2025.07", role: "工学学士（计算机科学与技术）", org: "南方科技大学（SUSTech）", location: "广东·深圳", 
        type: "education", typeLabel: "教育", bullets: ["扎实的算法设计与机器人工程基础。"],
      },
      // ── 实习经历 ──
      {
        period: "2026.01 - 2026.03", role: "感知算法工程师（实习）", org: "越疆科技（Dobot）", location: "深圳", 
        type: "experience", typeLabel: "工业界",
        bullets: [
          "为 Atom 机器人开发端到端语音控制感知系统。",
          "针对边缘设备优化 VLM 部署与 KV-cache 性能。"
        ],
      },
      // ── 开源贡献 ──
      {
        period: "2025.03 - 2025.08", role: "开源贡献者（GSoC）", org: "OpenCV", location: "远程", 
        type: "opensource", typeLabel: "开源",
        bullets: ["从零实现 Fractal ArUco 检测算子；关键点匹配精度提升 28%。"],
        link: "https://github.com/opencv/opencv/pull/27934",
      },
      {
        period: "2024.09 - 2025.01", role: "开源贡献者", org: "OpenCV", location: "远程", 
        type: "opensource", typeLabel: "开源",
        bullets: ["通过 1.2k 真实样本测试并优化 ArUco3 默认参数。"],
        link: "https://github.com/opencv/opencv/pull/28645",
      },
    ] as TimelineItem[],
    skillGroups: [
      { label: "编程语言", skills: ["C / C++", "Python", "TypeScript", "CUDA"] },
      { label: "框架与库", skills: ["PyTorch", "ROS / ROS2", "OpenCV", "JAX", "Next.js"] },
      { label: "研究领域", skills: ["6D 位姿估计", "三维计算机视觉", "具身智能", "强化学习", "SLAM", "三维高斯泼溅"] },
      { label: "工具与基础设施", skills: ["Docker", "Linux", "Git", "WandB", "TensorRT", "ONNX"] },
    ],
  },
};

// ─── 3. 直接导出接口 ───────────────────────────
export const profile = i18n.en.profile;
export const projects = i18n.en.projects;
export const timeline = i18n.en.timeline;
export const skillGroups = i18n.en.skillGroups;
export const ui = i18n.en.ui;