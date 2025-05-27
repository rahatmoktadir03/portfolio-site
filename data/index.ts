export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Approach", link: "#approach" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "City Map Visualizer",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/map.png",
    iconLists: [
      "/remix.svg",
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/webgl.svg",
      "/mapbox.svg",
    ],
    link: "https://citywide-visualizer.vercel.app/",
  },
  {
    id: 2,
    title: "TumorScope",
    des: "Analyze MRI scans and detect brain tumors with precision using deep learning. TumorScope offers intuitive insights and model explanations in real time.",
    img: "/p2.svg",
    iconLists: [
      "/groq.svg",
      "/python.svg",
      "/stream.svg",
      "/pandas.svg",
      "/tensor.svg",
      "/keras.svg",
    ],
    link: "https://github.com/rahatmoktadir03/tumor-scope",
  },
  {
    id: 3,
    title: "US-Bank Customer Churn Prediction",
    des: "Leverage machine learning to anticipate customer behavior and reduce churn. Analyze key indicators, visualize trends, and make data-driven retention strategies.",
    img: "/p3.svg",
    iconLists: [
      "/replit.svg",
      "/python.svg",
      "/gemini.svg",
      "/numpy.svg",
      "/scikit.svg",
      "/chatgpt.svg",
    ],
    link: "https://github.com/rahatmoktadir03/customer-churn-prediction",
  },
  {
    id: 4,
    title: "PixelQuest",
    des: "Dive into discussions, share insights, and connect with fellow gamers on PixelQuest — a vibrant community built for gaming enthusiasts.",
    img: "/pixel.png",
    iconLists: ["/re.svg", "/js.svg", "/supa.svg", "/netlify.svg", "/vite.svg"],
    link: "https://github.com/rahatmoktadir03/hobby-hub",
  },
  {
    id: 5,
    title: "Pixel to Point Cloud",
    des: "Transform 2D images into detailed 3D point clouds using advanced neural rendering techniques. A visual leap into spatial understanding.",
    img: "/cloud.png",
    iconLists: [
      "/next.svg",
      "/opencv.svg",
      "/python.svg",
      "/jupyter.svg",
      "/numpy.svg",
    ],
    link: "https://rahatmoktadir03.github.io/pixel-to-point-cloud/landing.html",
  },
  {
    id: 6,
    title: "Flashcard Fusion",
    des: "Boost your learning with intelligent flashcards. Generate, review, and retain knowledge with AI-assisted precision.",
    img: "/flashcard.png",
    iconLists: [
      "/re.svg",
      "/js.svg",
      "/stripe.svg",
      "/fire.svg",
      "/material.svg",
    ],
    link: "https://flashcardapp-alpha.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Rahat was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rahat's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rahat is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "",
    img: "",
    nameImg: "",
  },
  {
    id: 2,
    name: "",
    img: "",
    nameImg: "",
  },
  {
    id: 3,
    name: "",
    img: "",
    nameImg: "",
  },
  {
    id: 4,
    name: "",
    img: "",
    nameImg: "",
  },
  {
    id: 5,
    name: "",
    img: "",
    nameImg: "",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "CodePath Tech Fellow",
    desc: "Mentored students in web development, leading sessions and fostering a strong tech community.",
    className: "md:col-span-2",
    thumbnail: "/codepath.png",
  },
  {
    id: 2,
    title: "Headstarter Software Engineering Resident",
    desc: "Built AI and full-stack projects while receiving mentorship from engineers and growing a strong tech network.",
    className: "md:col-span-2",
    thumbnail: "/headstarter.jpeg",
  },
  {
    id: 3,
    title: "The Build Fellowship - Student Consultant",
    desc: "Mentored by a Build Fellow to engineer a 3D vision pipeline with stereo matching and point cloud generation using Python.",
    className: "md:col-span-2",
    thumbnail: "/build.jpeg",
  },
  {
    id: 4,
    title: "BASTA Fellow",
    desc: "Completing a 10-week career prep fellowship focused on supporting first-gen college students in tech.",
    className: "md:col-span-2",
    thumbnail: "/basta.jpeg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/rahatmoktadir03",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/rahat_x3/?next=%2F",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/rahatmoktadir/",
  },
];
