// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "This page features some of my projects that can be publicly shared. The links point to YouTube videos of my presentation on these projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "This page lists most of my publications. For a current and comprehensive list, please visit my Google Scholar page.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a brief CV highlighting my education and work experience. For a detailed CV, please e-mail me.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "I am passionate about teaching and mentoring. This page lists the courses that I have taught / co-taught / assisted in teaching. I have also mentored several graduate and undergraduate students.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Public repositories with Nishanth&#39;s contributions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "news-nishanth-has-successfully-defended-his-ph-d-the-degree-will-be-conferred-at-uw-madison-s-may-2023-commencement-nishanth-will-be-continuing-as-a-post-doctoral-research-associate-with-prof-severson-at-wempec",
          title: 'Nishanth has successfully defended his Ph.D. The degree will be conferred at UW-Madison’s...',
          description: "",
          section: "News",},{id: "news-nishanth-has-joined-the-aerospace-electric-machines-laboratory-at-ge-research-in-niskayuna-ny",
          title: 'Nishanth has joined the Aerospace Electric Machines Laboratory at GE Research in Niskayuna,...',
          description: "",
          section: "News",},{id: "news-nishanth-is-serving-as-the-publicity-chair-and-a-track-chair-at-ieee-iemdc-2025",
          title: 'Nishanth is serving as the publicity chair and a track chair at IEEE...',
          description: "",
          section: "News",},{id: "news-two-papers-published-in-the-ieee-transactions-on-industry-applications-march-april-2024-issue-f-nishanth-j-van-de-ven-and-e-l-severson-evaluation-of-torque-dense-electric-machine-technology-for-off-highway-vehicle-electrification-in-ieee-transactions-on-industry-applications-vol-60-no-2-pp-3062-3074-march-april-2024-f-nishanth-a-khamitov-and-e-l-severson-design-of-electric-machine-windings-to-independently-control-multiple-airgap-harmonics-in-ieee-transactions-on-industry-applications-vol-60-no-2-pp-3039-3050-march-april-2024",
          title: 'Two papers published in the IEEE Transactions on Industry Applications, March-April 2024 issue:...',
          description: "",
          section: "News",},{id: "news-nishanth-is-serving-as-the-short-courses-and-tutorials-chair-and-track-chair-at-ieee-itec-eats-2025",
          title: 'Nishanth is serving as the short courses and tutorials chair and track chair...',
          description: "",
          section: "News",},{id: "news-nishanth-joins-the-oak-ridge-national-laboratory-as-a-distinguished-staff-fellow",
          title: 'Nishanth joins the Oak Ridge National Laboratory as a Distinguished Staff Fellow.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement4/";
            },},{id: "news-nishanth-has-been-selected-for-the-fy25-cohort-of-the-prestigious-early-career-development-program-at-ornl",
          title: 'Nishanth has been selected for the FY25 cohort of the prestigious early-career development...',
          description: "",
          section: "News",},{id: "news-new-paper-on-multi-material-am-enabled-high-speed-synr-machine-in-the-ieee-transactions-on-industry-applications",
          title: 'New paper on Multi-material AM-enabled high-speed SynR machine in the IEEE Transactions on...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-new-ldrd-funding-us-700k-to-develop-sustainable-multi-harmonic-electric-machines",
          title: 'New LDRD funding (~US$ 700k) to develop sustainable multi-harmonic electric machines.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-three-manuscripts-accepted-at-ieee-iemdc-2025",
          title: 'Three manuscripts accepted at IEEE IEMDC 2025.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement11/";
            },},{id: "projects-integrated-electro-hydraulic-machine",
          title: 'Integrated Electro-hydraulic Machine',
          description: "Off-highway Vehicle Electrification - 20 ton excavator bucket.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-3d-printed-axial-flux-stator",
          title: '3D printed axial flux stator',
          description: "3D printed e-machines with eddy-current limiting features",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-multi-harmonic-electric-machines",
          title: 'Multi-harmonic Electric Machines',
          description: "Technique to unlock additional degrees of freedom in e-Machines",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%69%73%68%61%6E%74%68@%69%65%65%65.%6F%72%67", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ngadiyar93", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/nishanth-21193", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-4826-7524", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Fnu-Nishanth/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=CPd0z5gAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
