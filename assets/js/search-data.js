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
          description: "Given 2 or 3 images of line drawing, find a bunch of line in 3D such that when look at a certain direction will see the given image",
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
            },},{id: "todos-blast-messages-push-ups-excersize-morning-30-min-wow-you-re-weak-haircut-booking-monday-at-12-00pm-aberdeen-plan-thursday-add-date-alerts-get-it-here-eye-degree-appointment-just-yeet-your-ass-here-check-car-practice-time-learn-more-cooking",
          title: 'blast messages push-ups / excersize morning 30 min Wow; you’re weak haircut booking...',
          description: "",
          section: "Todos",},{id: "todos-cook-vegtables-swim-ticket-hotel-singapore-code-perspective-orthogonal-projections",
          title: 'cook vegtables   swim   ticket/hotel Singapore   code perspective/orthogonal projections',
          description: "",
          section: "Todos",},{id: "todos-investigate-if-perspective-works-better-or-not-look-at-singapore-and-nearby-to-decide-if-you-fly-back-immediately-after-conference",
          title: 'Investigate if perspective works better or not look at singapore and nearby to...',
          description: "",
          section: "Todos",},{id: "todos-checkout-big-aunty-water-drinking-thing-fill-out-the-form-do-sis-s-img-amp-gt-drawing-half-done",
          title: 'checkout big aunty water drinking thing fill out the form do sis’s img...',
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
