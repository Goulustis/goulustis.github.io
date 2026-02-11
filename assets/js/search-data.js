// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-todos",
          title: "todos",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/todos/";
          },
        },{id: "nav-interesting-reads",
          title: "Interesting Reads",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/interesting_reads/";
          },
        },{id: "nav-useful-links",
          title: "Useful links",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/userful_links/";
          },
        },{id: "post-interesting-front",
      
        title: "Interesting front",
      
      description: "Interesting front",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/interesting_front/";
        
      },
    },{id: "post-how-to-tell-a-story",
      
        title: "How to tell a story",
      
      description: "How to tell a story",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/story_telling/";
        
      },
    },{id: "post-setup-ssl-for-https",
      
        title: "Setup SSL for HTTPS",
      
      description: "Setup SSL for HTTPS",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/ssl_setup/";
        
      },
    },{id: "post-successful-company-policies",
      
        title: "Successful company policies",
      
      description: "Successful company policies",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/successful_company_policies/";
        
      },
    },{id: "post-bayer-meeting-recollection",
      
        title: "Bayer meeting recollection",
      
      description: "Bayer meeting recollection",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/bayer_meeting_recollection/";
        
      },
    },{id: "post-siggraph-asia-2025-overview",
      
        title: "Siggraph Asia 2025 Overview",
      
      description: "Siggraph Asia 2025 Overview",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/siggraph_asia_overview/";
        
      },
    },{id: "post-joining-tangled-up",
      
        title: "Joining Tangled Up",
      
      description: "Joining Tangled-up",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/joining_tangled_up/";
        
      },
    },{id: "post-social-media-amp-video-game-ideas",
      
        title: "Social media &amp; Video game ideas",
      
      description: "Random ideas tonight",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/ideas/";
        
      },
    },{id: "post-setting-up-ssh-key",
      
        title: "Setting up ssh key",
      
      description: "How to setup ssh key for fast login",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/ssh_key_setup/";
        
      },
    },{id: "post-adding-a-grub-entry",
      
        title: "Adding a grub entry",
      
      description: "How to add a grub entry",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/adding_boot_entry_grub/";
        
      },
    },{id: "post-dealing-with-duo-booting-when-middle-fingered",
      
        title: "Dealing with Duo-booting when middle-fingered",
      
      description: "Describes a way to duo boot when the hardware refuses to boot into grub",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/windows_duo_boot_blog/";
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-multi-view-wire-art-mvwa-relaxed",
          title: 'Multi-View wire art(MVWA) Relaxed',
          description: "Find 3D lines whose projections reproduce the given 2–3 line drawings.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-ubc-sauder-course-advising-chatbot",
          title: 'UBC Sauder Course Advising Chatbot',
          description: "A chatbot that can answer question about your undergrad sauder courses",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-image-to-line-art",
          title: 'Image To Line Art',
          description: "Takes any generic image and turn it into line art",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "todos-none-bros",
          title: 'None bros',
          description: "",
          section: "Todos",},{
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
