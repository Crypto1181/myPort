const PROJECTS = [
  {
    id: "forex-trading",
    title: "Custom Forex Trading App with Live Market Data",
    category: "fintech",
    categoryLabel: "Fintech & Trading",
    image: "assets/forex_trading.png",
    role: "Lead Full-Stack Developer",
    summary: "Developed a comprehensive Forex trading application featuring live market data feeds, interactive charting, and secure user authentication. Built the cross-platform frontend with Flutter for high performance on both iOS and Android. Engineered the backend using Node.js and Express to handle real-time WebSocket connections and API integrations with external market data providers.",
    deliverables: "High-performance Flutter trading UI, real-time WebSocket live ticker updates, interactive candlestick charting with multiple timeframes, secure biometric & multi-factor authentication, and Node.js microservice architecture.",
    tags: ["Flutter", "Dart", "Node.js", "Express.js", "WebSockets", "API Integration", "Mobile App Development", "Fintech"]
  },
  {
    id: "crypto-wallet",
    title: "Crypto Wallet & Portfolio Tracking Application",
    category: "fintech",
    categoryLabel: "Fintech & Crypto",
    image: "assets/crypto_wallet.png",
    role: "Mobile App Developer",
    summary: "Built a secure cryptocurrency portfolio tracker allowing users to monitor their digital assets in real-time. Implemented Firebase for secure user authentication and database management. The app features dynamic UI components, custom price alerts, and historical data charts. Ensured a seamless user experience across devices using Flutter and Dart.",
    deliverables: "Multi-currency portfolio tracker, allocation pie charts and moving average graphs, dynamic price alert triggers, Firebase Auth & Firestore database synchronization, and responsive cross-platform UI.",
    tags: ["Flutter", "Dart", "Firebase", "Mobile App Development", "UI/UX Design", "Crypto", "Fintech"]
  },
  {
    id: "finance-budget",
    title: "Personal Finance & Budget Management Mobile App",
    category: "fintech",
    categoryLabel: "Fintech & Personal Finance",
    image: "assets/finance_budget.png",
    role: "Full-Stack Developer",
    summary: "Designed and developed a cross-platform budgeting application to help users track daily expenses, categorize spending, and visualize financial goals. Utilized Supabase for the backend database to ensure rapid data retrieval and syncing across user devices. Created responsive, visually appealing data dashboards using custom Flutter widgets.",
    deliverables: "Daily expense and income tracker, category spending insights, multi-card balance management, Supabase real-time synchronization, and custom animated Flutter dashboard widgets.",
    tags: ["Flutter", "Dart", "Supabase", "API Integration", "Mobile App Development", "UI/UX Design", "Personal Finance"]
  },
  {
    id: "p2p-payment",
    title: "Secure P2P Payment & Remittance Application",
    category: "fintech",
    categoryLabel: "Fintech & Payments",
    image: "assets/p2p_payment.png",
    role: "Back-End Developer / API Specialist",
    summary: "Architected the backend infrastructure for a peer-to-peer payment app facilitating fast and secure money transfers. Built robust RESTful APIs using Node.js and Express, integrated with third-party payment gateways. Utilized MongoDB (Mongoose) for flexible, secure data storage and transaction logging, ensuring high scalability and data integrity.",
    deliverables: "High-throughput RESTful payment APIs, third-party payment gateway integration, end-to-end encryption with QR-code scanning, transaction ledger audit logging, and MongoDB scalable database schema.",
    tags: ["Node.js", "Express.js", "MongoDB", "API Integration", "Backend Development", "Payment Gateways", "Fintech"]
  },
  {
    id: "trading-analytics",
    title: "Algorithmic Trading Analytics Web Dashboard",
    category: "fintech",
    categoryLabel: "Fintech & Analytics",
    image: "assets/trading_analytics.jpg",
    role: "Full-Stack Web Developer",
    summary: "Developed a web-based analytics dashboard for traders to backtest strategies and analyze market trends. Built the frontend with HTML, CSS, and modern JavaScript for a responsive layout. The backend was powered by Python to process complex datasets and execute technical analysis algorithms, delivering insights through a clean REST API.",
    deliverables: "Responsive web trading terminal, backtesting algorithm engine with Python, real-time market depth and trend indicators, token swap widgets, and RESTful API data pipeline.",
    tags: ["Python", "JavaScript", "HTML", "CSS", "Web Development", "Fintech", "Trading Analytics"]
  },
  {
    id: "dating-app",
    title: "Location-Based Dating App with Swipe & Chat",
    category: "social",
    categoryLabel: "Mobile App & Social",
    image: "assets/dating_app.jpg",
    role: "Lead Full-Stack Developer",
    summary: "Engineered a comprehensive dating application featuring a swipe-based matching algorithm, precise geolocation filtering, and real-time messaging. Built the responsive frontend using Flutter to ensure smooth 60fps card gestures and instant photo rendering. The backend utilized Firebase to handle real-time chat infrastructure, secure user authentication, and location-based database queries.",
    deliverables: "High-performance Flutter UI with swipe gestures, geolocation proximity algorithm, Firebase real-time chat, push notifications, and secure user profiles.",
    tags: ["Flutter", "Dart", "Firebase", "Geolocation", "Real-Time Chat", "Mobile App Development", "UI/UX Design"]
  },
  {
    id: "ecommerce-store",
    title: "Cross-Platform E-commerce Mobile Storefront",
    category: "ecommerce",
    categoryLabel: "Mobile App & E-commerce",
    image: "assets/ecommerce.png",
    role: "Full-Stack App Developer",
    summary: "Designed and developed a complete mobile e-commerce solution featuring product catalogs, advanced search filtering, and a secure shopping cart. Utilized Flutter for a seamless shopping experience and integrated Supabase for product database management and secure user authentication. Implemented Stripe API for PCI-compliant payment processing.",
    deliverables: "Product discovery catalog, multi-criteria search filtering, cart state management, Supabase database synchronization, and Stripe checkout.",
    tags: ["Flutter", "Dart", "Supabase", "Stripe API", "API Integration", "Mobile App Development", "E-commerce"]
  },
  {
    id: "ai-chatbot",
    title: "AI-Powered Customer Support Chatbot Interface",
    category: "ai",
    categoryLabel: "AI & Mobile Interface",
    image: "assets/ai_chatbot.png",
    role: "Full-Stack Developer",
    summary: "Integrated advanced LLM capabilities into a cross-platform mobile support application. Built the chat interface with Flutter, ensuring a natural conversational UI with typing indicators and Markdown rendering. The backend was powered by Python to communicate with external AI APIs, processing user queries and returning context-aware responses with minimal latency.",
    deliverables: "Conversational mobile client, context-window memory handling, low-latency streaming responses, and Python backend bridge.",
    tags: ["Flutter", "Dart", "Python", "API Integration", "LLM APIs", "Mobile App Development", "Conversational UI"]
  },
  {
    id: "task-management",
    title: "Cross-Platform Task & Project Management App",
    category: "productivity",
    categoryLabel: "Productivity & SaaS",
    image: "assets/task_management.png",
    role: "Mobile App Developer",
    summary: "Created a productivity application enabling users to organize tasks, set deadlines, and collaborate on projects. Leveraged Firebase for real-time synchronization, ensuring that task updates instantly reflected across all logged-in devices. Designed a clean, drag-and-drop interface within Flutter to optimize user workflow.",
    deliverables: "Interactive task board, real-time multi-device sync, deadline alerts, local SQLite offline caching, and responsive cross-platform layouts.",
    tags: ["Flutter", "Dart", "Firebase", "State Management", "UI/UX Design", "Mobile App Development"]
  },
  {
    id: "vpn-app",
    title: "Secure Custom VPN Application for iOS & Android",
    category: "security",
    categoryLabel: "Security & Networking",
    image: "assets/vpn_app.png",
    role: "Mobile App Developer",
    summary: "Engineered a custom Virtual Private Network (VPN) client application allowing users to connect to global servers securely. Focused on an intuitive, one-tap connection interface using Flutter. Integrated secure tunneling protocols and subscription management APIs to handle premium user tiers and bandwidth monitoring.",
    deliverables: "Native Android & iOS VPN channel bridges, one-tap connection UI with live latency and bandwidth telemetry, kill-switch, and tier subscriptions.",
    tags: ["Flutter", "Dart", "Native App Development", "API Integration", "UI/UX Design", "Mobile App Bug Fix"]
  }
];

const featuredGrid = document.getElementById("featured-grid");
const workGrid = document.getElementById("work-grid");
const modal = document.getElementById("case-modal");
const views = document.querySelectorAll(".view");
const sideLinks = document.querySelectorAll(".side-link");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebar-overlay");
const menuToggle = document.getElementById("menu-toggle");

function cardTemplate(project) {
  return `
    <button class="project-card" type="button" data-project="${project.id}" data-category="${project.category}" aria-label="Open ${project.title} case study">
      <div class="card-img-wrap">
        <img src="${project.image}" alt="${project.title}" loading="lazy" />
      </div>
      <div class="project-body">
        <div class="card-meta-line">
          <span class="card-cat">${project.categoryLabel}</span>
          <span class="card-role-tag">${project.role}</span>
        </div>
        <h3 class="card-title">${project.title}</h3>
        <span class="case-link">→ View Case Study</span>
      </div>
    </button>
  `;
}

function renderGrids() {
  if (featuredGrid) {
    
    featuredGrid.innerHTML = PROJECTS.slice(0, 6).map(cardTemplate).join("");
  }
  if (workGrid) {
   
    workGrid.innerHTML = PROJECTS.map(cardTemplate).join("");
  }
}

function openCase(id) {
  const project = PROJECTS.find((item) => item.id === id);
  if (!project) return;
  document.getElementById("modal-image").src = project.image;
  document.getElementById("modal-image").alt = project.title;
  document.getElementById("modal-category").textContent = project.categoryLabel;
  
  const roleEl = document.getElementById("modal-role");
  if (roleEl) roleEl.textContent = `Role: ${project.role}`;

  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-body").textContent = project.summary;

  const delivEl = document.getElementById("modal-deliverables");
  if (delivEl) delivEl.textContent = project.deliverables;

  document.getElementById("modal-tags").innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join("");
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeCase() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

function setView(name) {
  const target = name.replace("#", "") || "overview";
  views.forEach((view) => {
    const active = view.id === target;
    view.hidden = !active;
    view.classList.toggle("is-active", active);
  });
  sideLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.view === target);
  });
  closeSidebar();
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  if (history.replaceState) {
    history.replaceState(null, "", `#${target}`);
  }
}

function closeSidebar() {
  sidebar.classList.remove("is-open");
  overlay.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
}

function openSidebar() {
  sidebar.classList.add("is-open");
  overlay.hidden = false;
  menuToggle.setAttribute("aria-expanded", "true");
}


renderGrids();
setView(location.hash || "overview");


document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-view]");
  if (nav) {
    event.preventDefault();
    setView(nav.dataset.view);
    return;
  }

  const card = event.target.closest("[data-project]");
  if (card) {
    openCase(card.dataset.project);
    return;
  }

  if (event.target.closest("[data-close-modal]")) {
    closeCase();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeCase();
  }
});

window.addEventListener("hashchange", () => setView(location.hash));

menuToggle.addEventListener("click", () => {
  if (sidebar.classList.contains("is-open")) closeSidebar();
  else openSidebar();
});
overlay.addEventListener("click", closeSidebar);


// Filter buttons in Work view
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("is-active"));
    btn.classList.add("is-active");
    const filter = btn.dataset.filter;
    if (!workGrid) return;
    workGrid.querySelectorAll(".project-card").forEach((card) => {
      const category = card.dataset.category || (PROJECTS.find((p) => p.id === card.dataset.project) || {}).category;
      const show = filter === "all" || category === filter;
      card.hidden = !show;
      card.style.display = show ? "flex" : "none";
    });
  });
});


const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = document.getElementById("form-name").value.trim();
    const email = document.getElementById("form-email").value.trim();
    const subject = document.getElementById("form-subject").value.trim();
    const message = document.getElementById("form-message").value.trim();
    const success = document.getElementById("form-success");
    const error = document.getElementById("form-error");
    const submit = document.getElementById("form-submit-btn");

    success.hidden = true;
    error.hidden = true;

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !validEmail || !message) {
      error.textContent = "Please fill in your name, a valid email address, and a message.";
      error.hidden = false;
      return;
    }

    submit.querySelector(".btn-text").hidden = true;
    submit.querySelector(".btn-loading").hidden = false;
    submit.disabled = true;

    const emailSubject = subject
      ? `[Portfolio] ${subject} - from ${name}`
      : `[Portfolio] New Project Inquiry from ${name}`;

    try {
      const response = await fetch("https://formsubmit.co/ajax/owotutufatai104@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: emailSubject,
          message: message,
          _subject: emailSubject,
          _captcha: "false",
          _template: "table"
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok || data.success === "true" || data.success === true) {
        success.textContent = "Thanks! Your message has been sent directly to owotutufatai104@gmail.com. I will reply within 24 hours.";
        success.hidden = false;
        form.reset();
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      console.warn("Direct submission notice:", err);
      // Fallback: If blocked by adblocker, network, or first-time setup, offer mailto client link
      const mailtoUrl = `mailto:owotutufatai104@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
      error.innerHTML = `Could not deliver automatically. <a href="${mailtoUrl}" style="color: var(--cream); text-decoration: underline; font-weight: 600;">Click here to send directly via your Email app ↗</a>`;
      error.hidden = false;
    } finally {
      submit.querySelector(".btn-text").hidden = false;
      submit.querySelector(".btn-loading").hidden = true;
      submit.disabled = false;
    }
  });
}

// Current Year
const yearElem = document.getElementById("year");
if (yearElem) {
  yearElem.textContent = new Date().getFullYear();
}
