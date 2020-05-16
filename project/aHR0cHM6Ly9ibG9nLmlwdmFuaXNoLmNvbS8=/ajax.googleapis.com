<!doctype html>
<html       lang="en"      dir="ltr">
  <head>
                    <meta name="google-signin-client-id" content="721724668570-nbkv1cfusk7kk4eni4pjvepaus73b13t.apps.googleusercontent.com">
    <meta name="google-signin-scope"
          content="profile email">
    <meta property="og:site_name" content="Google Developers">
    <meta property="og:type" content="website">
    
          <meta name="theme-color" content="#1a73e8">
    
    <meta charset="utf-8">
    <meta content="IE=Edge" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="manifest" href="/_pwa/developers/manifest.json"
          crossorigin="use-credentials">
    <link rel="preconnect" href="//www.gstatic.com" crossorigin>
    <link rel="preconnect" href="//fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="//fonts.googleapis.com" crossorigin>
    <link rel="preconnect" href="//apis.google.com" crossorigin>
    <link rel="preconnect" href="//www.google-analytics.com" crossorigin>
          <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Google+Sans:400,500|Roboto:400,400italic,500,500italic,700,700italic|Roboto+Mono:400,500,700|Material+Icons">
            <link rel="stylesheet" href="https://www.gstatic.com/devrel-devsite/prod/va70c25da2af7c102a85bdfc215259d86fc5b2e57f33cbc810a173f52e333a7a1/developers/css/app.css">
    
    <noscript>
            <link rel="stylesheet" href="https://www.gstatic.com/devrel-devsite/prod/va70c25da2af7c102a85bdfc215259d86fc5b2e57f33cbc810a173f52e333a7a1/developers/css/ce_bundle.css">
    </noscript>
    <link rel="shortcut icon" href="https://www.gstatic.com/devrel-devsite/prod/va70c25da2af7c102a85bdfc215259d86fc5b2e57f33cbc810a173f52e333a7a1/developers/images/favicon.png">
    <link rel="apple-touch-icon" href="https://www.gstatic.com/devrel-devsite/prod/va70c25da2af7c102a85bdfc215259d86fc5b2e57f33cbc810a173f52e333a7a1/developers/images/touchicon-180.png"><link rel="canonical" href="https://developers.google.com/speed/libraries"><link rel="search" type="application/opensearchdescription+xml"
            title="Google Developers" href="https://developers.google.com/s/opensearch.xml">      
<title>Hosted Libraries &nbsp;|&nbsp; Google Developers</title>

<meta property="og:title" content="Hosted Libraries &nbsp;|&nbsp; Google Developers">
  <meta name="description" content="A stable, reliable, high-speed, globally available content distribution network for the most popular open-source JavaScript libraries.">
  <meta property="og:description" content="A stable, reliable, high-speed, globally available content distribution network for the most popular open-source JavaScript libraries.">


  <meta property="og:url" content="https://developers.google.com/speed/libraries">

  <meta property="og:image" content="https://www.gstatic.com/devrel-devsite/prod/va70c25da2af7c102a85bdfc215259d86fc5b2e57f33cbc810a173f52e333a7a1/developers/images/opengraph/google-blue.png">
  <meta property="og:image:secure_url" content="https://www.gstatic.com/devrel-devsite/prod/va70c25da2af7c102a85bdfc215259d86fc5b2e57f33cbc810a173f52e333a7a1/developers/images/opengraph/google-blue.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="675">
  <meta property="og:locale" content="en">
  <meta name="twitter:card" content="summary_large_image">





  
  
  
  
  

    </head>
  <body type="article"
        theme="google-blue"
        class=""
        
        layout="docs"
                        pending>
    <devsite-progress type="indeterminate" id="app-progress"></devsite-progress>
      <section class="devsite-wrapper"><devsite-header>
      







<div class="devsite-header--inner">
  <div class="devsite-top-logo-row-wrapper-wrapper">
    <div class="devsite-top-logo-row-wrapper">
      <div class="devsite-top-logo-row">
        <button type="button" id="devsite-hamburger-menu"
          class="devsite-header-icon-button button-flat material-icons gc-analytics-event"
          data-category="Site-Wide Custom Events"
          data-label="Navigation menu button"
          visually-hidden
          aria-label="Open menu">
        </button>
        <div class="devsite-product-name-wrapper">
      
  
  <span class="devsite-product-name">
    <ul class="devsite-breadcrumb-list">
    <li class="devsite-breadcrumb-item
             devsite-has-google-wordmark">
                                  <a href="/speed/libraries"              class="devsite-breadcrumb-link gc-analytics-event"
              data-category="Site-Wide Custom Events"
              data-label="Upper Header"
              data-value="1"
          >
              <svg class="devsite-google-wordmark"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 148 48">
    <title>Google</title>
    <path class="devsite-google-wordmark-svg-path" d="M19.58,37.65c-9.87,0-18.17-8.04-18.17-17.91c0-9.87,8.3-17.91,18.17-17.91c5.46,0,9.35,2.14,12.27,4.94l-3.45,3.45c-2.1-1.97-4.93-3.49-8.82-3.49c-7.21,0-12.84,5.81-12.84,13.02c0,7.21,5.64,13.02,12.84,13.02c4.67,0,7.34-1.88,9.04-3.58c1.4-1.4,2.32-3.41,2.66-6.16H19.58v-4.89h16.47c0.18,0.87,0.26,1.92,0.26,3.06c0,3.67-1.01,8.21-4.24,11.44C28.93,35.9,24.91,37.65,19.58,37.65z M61.78,26.12c0,6.64-5.1,11.53-11.36,11.53s-11.36-4.89-11.36-11.53c0-6.68,5.1-11.53,11.36-11.53S61.78,19.43,61.78,26.12z M56.8,26.12c0-4.15-2.96-6.99-6.39-6.99c-3.43,0-6.39,2.84-6.39,6.99c0,4.11,2.96,6.99,6.39,6.99C53.84,33.11,56.8,30.22,56.8,26.12z M87.25,26.12c0,6.64-5.1,11.53-11.36,11.53c-6.26,0-11.36-4.89-11.36-11.53c0-6.68,5.1-11.53,11.36-11.53C82.15,14.59,87.25,19.43,87.25,26.12zM82.28,26.12c0-4.15-2.96-6.99-6.39-6.99c-3.43,0-6.39,2.84-6.39,6.99c0,4.11,2.96,6.99,6.39,6.99C79.32,33.11,82.28,30.22,82.28,26.12z M112.09,15.29v20.7c0,8.52-5.02,12.01-10.96,12.01c-5.59,0-8.95-3.76-10.22-6.81l4.41-1.83c0.79,1.88,2.71,4.1,5.81,4.1c3.8,0,6.16-2.36,6.16-6.77v-1.66h-0.18c-1.14,1.4-3.32,2.62-6.07,2.62c-5.76,0-11.05-5.02-11.05-11.49c0-6.51,5.28-11.57,11.05-11.57c2.75,0,4.93,1.22,6.07,2.58h0.18v-1.88H112.09z M107.64,26.16c0-4.06-2.71-7.03-6.16-7.03c-3.49,0-6.42,2.97-6.42,7.03c0,4.02,2.93,6.94,6.42,6.94C104.93,33.11,107.64,30.18,107.64,26.16z M120.97,3.06v33.89h-5.07V3.06H120.97z M140.89,29.92l3.93,2.62c-1.27,1.88-4.32,5.11-9.61,5.11c-6.55,0-11.28-5.07-11.28-11.53c0-6.86,4.77-11.53,10.71-11.53c5.98,0,8.91,4.76,9.87,7.34l0.52,1.31l-15.42,6.38c1.18,2.31,3.01,3.49,5.59,3.49C137.79,33.11,139.58,31.84,140.89,29.92zM128.79,25.77l10.31-4.28c-0.57-1.44-2.27-2.45-4.28-2.45C132.24,19.04,128.66,21.31,128.79,25.77z"/>
  </svg>Hosted Libraries        
  </a>
              </li>
  </ul>
  </span>
</div>
        <div class="devsite-top-logo-row-middle">
          <div class="devsite-header-upper-tabs">
                       </div>
          <devsite-search
    enable-signin    enable-search    enable-suggestions
      enable-query-completion        project-name="Hosted Libraries"    tenant-name="Google Developers"    project-scope="/speed/libraries"    url-scoped="https://developers.google.com/s/results/speed/libraries"        >
  <form class="devsite-search-form" action="https://developers.google.com/s/results" method="GET">
    <div class="devsite-search-container">
      <div class="devsite-searchbox">
                <input placeholder="Search"
          type="text"
          class="devsite-search-field devsite-search-query"
          name="q"
          value=""
          autocomplete="off"
                    aria-label="Search box">
        <div class="devsite-search-image material-icons" aria-hidden="true"></div>
      </div>
      <button type="button"
              search-open
              class="devsite-search-button devsite-header-icon-button button-flat material-icons"
              aria-label="Open search box"></button>
    </div>
  </form>
  <button type="button"
          search-close
          class="devsite-search-button devsite-header-icon-button button-flat material-icons"
          aria-label="Close search box"></button>
</devsite-search>

        </div>

        
        <devsite-language-selector>
  <devsite-select class="devsite-language-selector-menu">

    <select aria-label="            Select your language preference."
            class="devsite-language-selector-select"
            name="language"
            track-name="click"
            track-type="languageSelector">
                <option>Language</option>
              <option value="id"
              track-metadata-original-language="en"
              track-metadata-selected-language="id"
              track-name="changed"
              track-type="languageSelector"
            >
        Bahasa Indonesia
      </option>
          <option value="de"
              track-metadata-original-language="en"
              track-metadata-selected-language="de"
              track-name="changed"
              track-type="languageSelector"
            >
        Deutsch
      </option>
          <option value="en"
              track-metadata-original-language="en"
              track-metadata-selected-language="en"
              track-name="changed"
              track-type="languageSelector"
            >
        English
      </option>
          <option value="es"
              track-metadata-original-language="en"
              track-metadata-selected-language="es"
              track-name="changed"
              track-type="languageSelector"
            >
        Español
      </option>
          <option value="fr"
              track-metadata-original-language="en"
              track-metadata-selected-language="fr"
              track-name="changed"
              track-type="languageSelector"
            >
        Français
      </option>
          <option value="pt_br"
              track-metadata-original-language="en"
              track-metadata-selected-language="pt_br"
              track-name="changed"
              track-type="languageSelector"
            >
        Português – Brasil
      </option>
          <option value="ru"
              track-metadata-original-language="en"
              track-metadata-selected-language="ru"
              track-name="changed"
              track-type="languageSelector"
            >
        Русский
      </option>
          <option value="zh_cn"
              track-metadata-original-language="en"
              track-metadata-selected-language="zh_cn"
              track-name="changed"
              track-type="languageSelector"
            >
        中文 – 简体
      </option>
          <option value="ja"
              track-metadata-original-language="en"
              track-metadata-selected-language="ja"
              track-name="changed"
              track-type="languageSelector"
            >
        日本語
      </option>
          <option value="ko"
              track-metadata-original-language="en"
              track-metadata-selected-language="ko"
              track-name="changed"
              track-type="languageSelector"
            >
        한국어
      </option>
        </select>
  </devsite-select>
</devsite-language-selector>


        
                                      <devsite-user                                                                         
                        id="devsite-user"></devsite-user>
                         </div>    </div>  </div>
  <div class="devsite-collapsible-section
          devsite-header-no-lower-tabs
    ">
    <div class="devsite-header-background">
                              </div>  </div></div>

  </devsite-header>      <devsite-book-nav scrollbars hidden>
                  







<nav class="devsite-book-nav devsite-nav nocontent">
  <div class="devsite-mobile-header">
    <button type="button"
            id="devsite-close-nav"
            class="devsite-header-icon-button button-flat material-icons gc-analytics-event"
            data-category="Site-Wide Custom Events"
            data-label="Close navigation"
            aria-label="Close navigation">
    </button>
    <div class="devsite-product-name-wrapper">
      
          <span class="devsite-product-name">
        <ul class="devsite-breadcrumb-list">
    <li class="devsite-breadcrumb-item
             devsite-has-google-wordmark">
                                  <a href="/speed/libraries"              class="devsite-breadcrumb-link gc-analytics-event"
              data-category="Site-Wide Custom Events"
              data-label="Upper Header"
              data-value="1"
          >
              <svg class="devsite-google-wordmark"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 148 48">
    <title>Google</title>
    <path class="devsite-google-wordmark-svg-path" d="M19.58,37.65c-9.87,0-18.17-8.04-18.17-17.91c0-9.87,8.3-17.91,18.17-17.91c5.46,0,9.35,2.14,12.27,4.94l-3.45,3.45c-2.1-1.97-4.93-3.49-8.82-3.49c-7.21,0-12.84,5.81-12.84,13.02c0,7.21,5.64,13.02,12.84,13.02c4.67,0,7.34-1.88,9.04-3.58c1.4-1.4,2.32-3.41,2.66-6.16H19.58v-4.89h16.47c0.18,0.87,0.26,1.92,0.26,3.06c0,3.67-1.01,8.21-4.24,11.44C28.93,35.9,24.91,37.65,19.58,37.65z M61.78,26.12c0,6.64-5.1,11.53-11.36,11.53s-11.36-4.89-11.36-11.53c0-6.68,5.1-11.53,11.36-11.53S61.78,19.43,61.78,26.12z M56.8,26.12c0-4.15-2.96-6.99-6.39-6.99c-3.43,0-6.39,2.84-6.39,6.99c0,4.11,2.96,6.99,6.39,6.99C53.84,33.11,56.8,30.22,56.8,26.12z M87.25,26.12c0,6.64-5.1,11.53-11.36,11.53c-6.26,0-11.36-4.89-11.36-11.53c0-6.68,5.1-11.53,11.36-11.53C82.15,14.59,87.25,19.43,87.25,26.12zM82.28,26.12c0-4.15-2.96-6.99-6.39-6.99c-3.43,0-6.39,2.84-6.39,6.99c0,4.11,2.96,6.99,6.39,6.99C79.32,33.11,82.28,30.22,82.28,26.12z M112.09,15.29v20.7c0,8.52-5.02,12.01-10.96,12.01c-5.59,0-8.95-3.76-10.22-6.81l4.41-1.83c0.79,1.88,2.71,4.1,5.81,4.1c3.8,0,6.16-2.36,6.16-6.77v-1.66h-0.18c-1.14,1.4-3.32,2.62-6.07,2.62c-5.76,0-11.05-5.02-11.05-11.49c0-6.51,5.28-11.57,11.05-11.57c2.75,0,4.93,1.22,6.07,2.58h0.18v-1.88H112.09z M107.64,26.16c0-4.06-2.71-7.03-6.16-7.03c-3.49,0-6.42,2.97-6.42,7.03c0,4.02,2.93,6.94,6.42,6.94C104.93,33.11,107.64,30.18,107.64,26.16z M120.97,3.06v33.89h-5.07V3.06H120.97z M140.89,29.92l3.93,2.62c-1.27,1.88-4.32,5.11-9.61,5.11c-6.55,0-11.28-5.07-11.28-11.53c0-6.86,4.77-11.53,10.71-11.53c5.98,0,8.91,4.76,9.87,7.34l0.52,1.31l-15.42,6.38c1.18,2.31,3.01,3.49,5.59,3.49C137.79,33.11,139.58,31.84,140.89,29.92zM128.79,25.77l10.31-4.28c-0.57-1.44-2.27-2.45-4.28-2.45C132.24,19.04,128.66,21.31,128.79,25.77z"/>
  </svg>Hosted Libraries        
  </a>
              </li>
  </ul>
      </span>
    
</div>  </div>

  <div class="devsite-book-nav-wrapper">
    <div class="devsite-mobile-nav-top">
              <ul class="devsite-nav-list">
                      <li class="devsite-nav-item">
    <a href="/speed/libraries"
           class="devsite-nav-title gc-analytics-event
                            devsite-nav-active"
    
         data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Guides"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav"
     track-name="guides">
      <span class="devsite-nav-text" tooltip >
      Guides
   </span>
        </a>
  </li>

                    
                  </ul>
          </div>
      </div>
</nav>
              </devsite-book-nav>
      <section id="gc-wrapper">
        <main role="main" class="devsite-main-content"
                        has-toc>
          <devsite-toc class="devsite-nav"
            ></devsite-toc>
          <devsite-content>
                          


<article class="devsite-article">
  <article class="devsite-article-inner">        
    <div class="devsite-article-meta">
      <ul class="devsite-breadcrumb-list">
    <li class="devsite-breadcrumb-item
             ">
                    <a href="/"              class="devsite-breadcrumb-link gc-analytics-event"
              data-category="Site-Wide Custom Events"
              data-label="Breadcrumbs"
              data-value="1"
          >
            Home
      
  </a>
        </li>
    <li class="devsite-breadcrumb-item
             ">
                <div class="devsite-breadcrumb-guillemet material-icons" aria-hidden="true"></div>
                    <a href="/products"              class="devsite-breadcrumb-link gc-analytics-event"
              data-category="Site-Wide Custom Events"
              data-label="Breadcrumbs"
              data-value="2"
          >
            Products
      
  </a>
        </li>
    <li class="devsite-breadcrumb-item
             ">
                <div class="devsite-breadcrumb-guillemet material-icons" aria-hidden="true"></div>
                    <a href="/speed"              class="devsite-breadcrumb-link gc-analytics-event"
              data-category="Site-Wide Custom Events"
              data-label="Breadcrumbs"
              data-value="3"
          >
            Make the Web Faster
      
  </a>
        </li>
    <li class="devsite-breadcrumb-item
             ">
                <div class="devsite-breadcrumb-guillemet material-icons" aria-hidden="true"></div>
                    <a href="/speed/libraries"              class="devsite-breadcrumb-link gc-analytics-event"
              data-category="Site-Wide Custom Events"
              data-label="Breadcrumbs"
              data-value="4"
          >
            Hosted Libraries
      
  </a>
        </li>
  </ul>
                  <devsite-page-rating position="header" selected-rating="0" hover-rating-star="0">
    </devsite-page-rating>
  
          </div>

        
    <devsite-toc class="devsite-nav" devsite-toc-embedded
                 >
    </devsite-toc>

    <div class="devsite-article-body clearfix
      devsite-no-page-title"
            >

              
  <p>
    The Google Hosted Libraries is a stable, reliable, high-speed, globally
    available content distribution network for the most popular, open-source
    JavaScript libraries.
  </p>
  <p>
    Google works directly with the key stakeholders for each library effort
    and accepts the latest versions as they are released.
  </p>

  <h2 id="libraries" data-text="Libraries" tabindex="0">Libraries</h2>
  <p>
    To load a hosted library, copy and paste the HTML snippet for that
    library (shown below) in your web page. For instance, to load
    jQuery, embed the <code class="snippet" translate="no" dir="ltr">&lt;script
    src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"&gt;&lt;/script&gt;</code>
    snippet in your web page.
  </p>
  <p>
    We recommend that you load libraries from the CDN via HTTPS, even if your
    own website only uses HTTP. Nowadays, performance is fast, and caching
    works just the same. The CDN's files are served with
    <a href="http://www.w3.org/TR/cors/#access-control-allow-origin-response-header">CORS</a>
    and
    <a href="http://www.w3.org/TR/resource-timing/#cross-origin-resources">Timing-Allow</a>
    headers and allowed to be cached for 1 year.
  </p>

  <h3 id="d3.js" data-text="D3.js" tabindex="0">D3.js</h3>
  
  <dl>
    <dt>snippet:</dt>
    <dd>
      <code class="snippet" translate="no" dir="ltr">&lt;script
        src="https://ajax.googleapis.com/ajax/libs/d3js/5.15.1/d3.min.js"&gt;&lt;/script&gt;</code>
    </dd>

    <dt>site:</dt>
    <dd>
      <a href="https://d3js.org/">d3js.org</a>
    </dd>

    <dt>versions:</dt>
    <dd class="versions">
      5.15.1, 5.15.0, 5.14.2, 5.12.0, 5.11.0, 5.9.7, 5.9.2, 5.9.0, 5.8.0, 5.7.0, 4.13.0, 3.5.17
    </dd>

  </dl>
  <h3 id="dojo" data-text="Dojo" tabindex="0">Dojo</h3>
  
  <dl>
    <dt>snippet:</dt>
    <dd>
      <code class="snippet" translate="no" dir="ltr">&lt;script
        src="https://ajax.googleapis.com/ajax/libs/dojo/1.13.0/dojo/dojo.js"&gt;&lt;/script&gt;</code>
    </dd>

    <dt>site:</dt>
    <dd>
      <a href="http://dojotoolkit.org/">dojotoolkit.org</a>
    </dd>

    <dt>versions:</dt>
    <dd class="versions">
      1.13.0,
      1.12.3, 1.12.2, 1.12.1,
      1.11.5, 1.11.4, 1.11.3, 1.11.2, 1.11.1,
      1.10.9, 1.10.8, 1.10.7, 1.10.6, 1.10.5, 1.10.4, 1.10.3, 1.10.2, 1.10.1, 1.10.0,
      1.9.11, 1.9.10, 1.9.9, 1.9.8, 1.9.7, 1.9.6, 1.9.5, 1.9.4, 1.9.3, 1.9.2, 1.9.1, 1.9.0,
      1.8.14, 1.8.13, 1.8.12, 1.8.11, 1.8.10, 1.8.9, 1.8.8, 1.8.7, 1.8.6, 1.8.5, 1.8.4, 1.8.3, 1.8.2, 1.8.1, 1.8.0,
      1.7.12, 1.7.11, 1.7.10, 1.7.9, 1.7.8, 1.7.7, 1.7.6, 1.7.5, 1.7.4, 1.7.3, 1.7.2, 1.7.1, 1.7.0,
      1.6.5, 1.6.4, 1.6.3, 1.6.2, 1.6.1, 1.6.0,
      1.5.6, 1.5.5, 1.5.4, 1.5.3, 1.5.2, 1.5.1, 1.5.0,
      1.4.8, 1.4.7, 1.4.6, 1.4.5, 1.4.4, 1.4.3, 1.4.1, 1.4.0,
      1.3.2, 1.3.1, 1.3.0,
      1.2.3, 1.2.0,
      1.1.1
    </dd>
  </dl>
  <h3 id="ext-core" data-text="Ext Core" tabindex="0">Ext Core</h3>
  
  <dl>
    <dt>snippet:</dt>
    <dd>
      <code class="snippet" translate="no" dir="ltr">&lt;script
        src="https://ajax.googleapis.com/ajax/libs/ext-core/3.1.0/ext-core.js"&gt;&lt;/script&gt;</code>
    </dd>

    <dt>site:</dt>
    <dd>
      <a href="http://www.sencha.com/products/extcore">sencha.com/products/extcore</a>
    </dd>

    <dt>versions:</dt>
    <dd class="versions">
      3.1.0, 3.0.0
    </dd>
  </dl>
  <h3 id="hammer.js" data-text="Hammer.JS" tabindex="0">Hammer.JS</h3>
  
  <dl>
    <dt>snippet:</dt>
    <dd>
      <code class="snippet" translate="no" dir="ltr">&lt;script
        src="https://ajax.googleapis.com/ajax/libs/hammerjs/2.0.8/hammer.min.js"&gt;&lt;/script&gt;</code>
    </dd>

    <dt>site:</dt>
    <dd>
      <a href="http://hammerjs.github.io/">hammerjs.github.io</a>
    </dd>

    <dt>versions:</dt>
    <dd class="versions">
      2.0.8
    </dd>
  </dl>
  <h3 id="indefinite-observable" data-text="Indefinite Observable" tabindex="0">Indefinite Observable</h3>
  
  <dl>
    <dt>snippet:</dt>
    <dd>
      <code class="snippet" translate="no" dir="ltr">
        &lt;script type="module"&gt;<br />
        &nbsp;&nbsp;import { IndefiniteObservable } from "https://ajax.googleapis.com/ajax/libs/indefinite-observable/2.0.1/indefinite-observable.bundle.js";<br />
        &lt;/script&gt;
      </code>
    </dd>

    <dt>site:</dt>
    <dd>
      <a href="https://github.com/material-motion/indefinite-observable-js">https://github.com/material-motion/indefinite-observable-js</a>
    </dd>

    <dt>versions:</dt>
    <dd class="versions">
      2.0.1,
      1.0.1
    </dd>
  </dl>
  <h3 id="jquery" data-text="jQuery" tabindex="0">jQuery</h3>
  
  <dl>
    <dt>3.x snippet:</dt>
    <dd>
      <code class="snippet" translate="no" dir="ltr">&lt;script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"&gt;&lt;/script&gt;</code>
    </dd>

    <dt>2.x snippet:</dt>
    <dd>
      <code class="snippet" translate="no" dir="ltr">&lt;script
        src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"&gt;&lt;/script&gt;</code>
    </dd>

    <dt>1.x snippet:</dt>
    <dd>
      <code class="snippet" translate="no" dir="ltr">&lt;script
        src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"&gt;&lt;/script&gt;</code>
    </dd>

    <dt>site:</dt>
    <dd>
      <a href="http://jquery.com/">jquery.com</a>
    </dd>

    <dt>versions:</dt>
    <dd class="versions">
      3.5.1, 3.5.0, 3.4.1, 3.4.0, 3.3.1, 3.2.1, 3.2.0, 3.1.1, 3.1.0, 3.0.0,
      2.2.4, 2.2.3, 2.2.2, 2.2.1, 2.2.0, 2.1.4, 2.1.3, 2.1.1, 2.1.0, 2.0.3, 2.0.2, 2.0.1, 2.0.0,
      1.12.4, 1.12.3, 1.12.2, 1.12.1, 1.12.0, 1.11.3, 1.11.2, 1.11.1, 1.11.0, 1.10.2, 1.10.1,
      1.10.0, 1.9.1, 1.9.0, 1.8.3, 1.8.2, 1.8.1, 1.8.0, 1.7.2, 1.7.1, 1.7.0, 1.6.4, 1.6.3, 1.6.2,
      1.6.1, 1.6.0, 1.5.2, 1.5.1, 1.5.0, 1.4.4, 1.4.3, 1.4.2, 1.4.1, 1.4.0, 1.3.2, 1.3.1, 1.3.0,
      1.2.6, 1.2.3
    </dd>

    <dt>note:</dt>
    <dd>3.3.0, 2.1.2, 1.2.5 and 1.2.4 are not hosted due to their short and unstable lives in the wild.</dd>
  </dl>
  <h3 id="jquery-mobile" data-text="jQuery Mobile" tabindex="0">jQuery Mobile</h3>
  
  <dl>
    <dt>snippet:</dt>
    <dd>
      <code class="snippet" translate="no" dir="ltr">&lt;link
        rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css"&gt;<br>
        &lt;script src="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js"&gt;&lt;/script&gt;</code>
    </dd>

    <dt>site:</dt>
    <dd>
      <a href="http://jquerymobile.com/">jquerymobile.com</a>
    </dd>

    <dt>versions:</dt>
    <dd class="versions">
      1.4.5, 1.4.4, 1.4.3, 1.4.2, 1.4.1, 1.4.0
    </dd>

    <dt>note:</dt>
    <dd>This library depends on jQuery. You must also load jQuery before loading this module.</dd>
  </dl>
  <h3 id="jquery-ui" data-text="jQuery UI" tabindex="0">jQuery UI</h3>
  
  <dl>
    <dt>snippet:</dt>
    <dd>
      <code class="snippet" translate="no" dir="ltr">&lt;link
        rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css"&gt;<br>
        &lt;script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"&gt;&lt;/script&gt;</code>
    </dd>

    <dt>site:</dt>
    <dd>
      <a href="http://jqueryui.com/">jqueryui.com</a>
    </dd>

    <dt>versions:</dt>
    <dd class="versions">
      1.12.1, 1.12.0,
      1.11.4, 1.11.3, 1.11.2, 1.11.1, 1.11.0, 1.10.4, 1.10.3, 1.10.2,
      1.10.1, 1.10.0, 1.9.2, 1.9.1, 1.9.0, 1.8.24, 1.8.23, 1.8.22, 1.8.21,
      1.8.20, 1.8.19, 1.8.18, 1.8.17, 1.8.16, 1.8.15, 1.8.14, 1.8.13,
      1.8.12, 1.8.11, 1.8.10, 1.8.9, 1.8.8, 1.8.7, 1.8.6, 1.8.5, 1.8.4,
      1.8.2, 1.8.1, 1.8.0, 1.7.3, 1.7.2, 1.7.1, 1.7.0, 1.6.0, 1.5.3, 1.5.2
    </dd>

    <dt>note:</dt>
    <dd>This library depends on jQuery. You must also load jQuery before
      loading this module. Version 1.8.3 is not hosted due to its short
      life, and the alias <code translate="no" dir="ltr">1.8.3</code> actually loads 1.8.4.
    </dd>
  </dl>
  <h3 id="material-motion" data-text="Material Motion" tabindex="0">Material Motion</h3>
  
  <dl>
    <dt>snippet:</dt>
    <dd>
      <code class="snippet" translate="no" dir="ltr">
        &lt;script type="module"&gt;<br />
        &nbsp;&nbsp;import {<br />
        &nbsp;&nbsp;&nbsp;&nbsp;Draggable,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;Point2DSpring,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;Tossable,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;combineStyleStreams,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;getPointerEventStreamsFromElement,<br />
        &nbsp;&nbsp;} from "https://ajax.googleapis.com/ajax/libs/material-motion/0.1.0/material-motion.bundle.js";<br />
        &lt;/script&gt;
      </code>
    </dd>

    <dt>site:</dt>
    <dd>
      <a href="https://github.com/material-motion/material-motion-js">https://github.com/material-motion/material-motion-js</a>
    </dd>

    <dt>versions:</dt>
    <dd class="versions">
      0.1.0
    </dd>
  </dl>
  <h3 id="mootools" data-text="MooTools" tabindex="0">MooTools</h3>
  
  <dl>
    <dt>snippet:</dt>
    <dd>
      <code class="snippet" translate="no" dir="ltr">&lt;script
        src="https://ajax.googleapis.com/ajax/libs/mootools/1.6.0/mootools.min.js"&gt;&lt;/script&gt;</code>
    </dd>

    <dt>site:</dt>
    <dd>
      <a href="http://mootools.net/">mootools.net</a>
    </dd>

    <dt>versions:</dt>
    <dd class="versions">
      1.6.0, 1.5.2, 1.5.1, 1.5.0, 1.4.5, 1.4.4, 1.4.3,
      1.4.2, 1.4.1, 1.4.0, 1.3.2, 1.3.1, 1.3.0, 1.2.5, 1.2.4,
      1.2.3, 1.2.2, 1.2.1, 1.1.2, 1.1.1
    </dd>

    <dt>note:</dt>
    <dd>For versions 1.5.1 and earlier, the filename of the minified version is called mootools-yui-compressed.js instead of mintools.min.js.</dd>
  </dl>
  <h3 id="myanmar-tools" data-text="Myanmar Tools" tabindex="0">Myanmar Tools</h3>
  
  <dl>
    <dt>snippet:</dt>
    <dd>
      <code class="snippet" translate="no" dir="ltr">&lt;script
        src="https://ajax.googleapis.com/ajax/libs/myanmar-tools/1.1.3/zawgyi_detector.min.js"&gt;&lt;/script&gt;</code>
      <code class="snippet" translate="no" dir="ltr">&lt;script
        src="https://ajax.googleapis.com/ajax/libs/myanmar-tools/1.1.3/zawgyi_converter.min.js"&gt;&lt;/script&gt;</code>
    </dd>

    <dt>site:</dt>
    <dd>
      <a href="https://github.com/google/myanmar-tools/">https://github.com/google/myanmar-tools/</a>
    </dd>

    <dt>recommended versions:</dt>
    <dd class="versions">1.1.3</dd>

    <dt>all hosted versions:</dt>
    <dd class="versions">1.0.1</dd>
    <dd class="versions">1.1.0</dd>
    <dd class="versions">1.1.1</dd>
    <dd class="versions">1.1.3</dd>
  </dl>
  <h3 id="prototype" data-text="Prototype" tabindex="0">Prototype</h3>
  
  <dl>
    <dt>snippet:</dt>
    <dd>
      <code class="snippet" translate="no" dir="ltr">&lt;script
        src="https://ajax.googleapis.com/ajax/libs/prototype/1.7.3.0/prototype.js"&gt;&lt;/script&gt;</code>
    </dd>

    <dt>site:</dt>
    <dd>
      <a href="http://prototypejs.org/">prototypejs.org</a>
    </dd>

    <dt>versions:</dt>
    <dd class="versions">
      1.7.3.0, 1.7.2.0, 1.7.1.0, 1.7.0.0, 1.6.1.0, 1.6.0.3, 1.6.0.2
    </dd>
  </dl>
  <h3 id="script.aculo.us" data-text="script.aculo.us" tabindex="0">script.aculo.us</h3>
  
  <dl>
    <dt>snippet:</dt>
    <dd>
      <code class="snippet" translate="no" dir="ltr">&lt;script
        src="https://ajax.googleapis.com/ajax/libs/scriptaculous/1.9.0/scriptaculous.js"&gt;&lt;/script&gt;</code>
    </dd>

    <dt>site:</dt>
    <dd>
      <a href="http://script.aculo.us/">script.aculo.us</a>
    </dd>

    <dt>versions:</dt>
    <dd class="versions">
      1.9.0, 1.8.3, 1.8.2, 1.8.1
    </dd>

    <dt>note:</dt>
    <dd>
      This library depends on <code translate="no" dir="ltr">Prototype</code>. Before loading this module, you must load Prototype.
    </dd>
  </dl>
  <h3 id="shaka-player" data-text="Shaka Player" tabindex="0">Shaka Player</h3>
  
  <dl>
    <dt>snippet:</dt>
    <dd>
      <code class="snippet" translate="no" dir="ltr">&lt;script
        src="https://ajax.googleapis.com/ajax/libs/shaka-player/2.5.11/shaka-player.compiled.js"&gt;&lt;/script&gt;</code>
    </dd>

    <dt>site:</dt>
    <dd>
      <a href="https://github.com/google/shaka-player/">https://github.com/google/shaka-player/</a>
    </dd>

    <dt>recommended versions:</dt>
    <dd class="best versions">2.5.11, 2.4.7</dd>

    <dt>all hosted versions:</dt>
    <dd class="versions">2.5.11, 2.5.10, 2.5.9, 2.5.8, 2.5.7, 2.5.6, 2.5.5, 2.5.4, 2.5.3, 2.5.2, 2.5.1, 2.5.0, 2.5.0-beta3, 2.5.0-beta2, 2.5.0-beta, 2.4.7, 2.4.6, 2.4.5, 2.4.4, 2.4.3, 2.4.2, 2.4.1, 2.4.0, 2.3.10, 2.3.9, 2.3.8, 2.3.7, 2.3.6, 2.3.5, 2.3.4, 2.3.3, 2.3.2, 2.3.1, 2.3.0, 2.2.10, 2.2.9, 2.2.8, 2.2.7, 2.2.6, 2.2.5, 2.2.4, 2.2.1, 2.2.0, 2.1.9, 2.1.8, 2.1.7, 2.1.6, 2.1.5, 2.1.4, 2.1.3, 2.1.2, 2.1.1, 2.1.0, 2.0.9, 2.0.8, 2.0.6, 1.6.5</dd>
  </dl>
  <h3 id="spf" data-text="SPF" tabindex="0">SPF</h3>
  
  <dl>
    <dt>snippet:</dt>
    <dd>
      <code class="snippet" translate="no" dir="ltr">&lt;script
        src="https://ajax.googleapis.com/ajax/libs/spf/2.4.0/spf.js"&gt;&lt;/script&gt;</code>
    </dd>

    <dt>site:</dt>
    <dd>
      <a href="http://youtube.github.io/spfjs/">youtube.github.io/spfjs</a>
    </dd>

    <dt>versions:</dt>
    <dd class="versions">
      2.4.0, 2.3.2, 2.3.1, 2.3.0, 2.2.0, 2.1.2, 2.1.1, 2.1.0, 2.0.1, 2.0.0
    </dd>
  </dl>
  <h3 id="swfobject" data-text="SWFObject" tabindex="0">SWFObject</h3>
  
  <dl>
    <dt>snippet:</dt>
    <dd>
      <code class="snippet" translate="no" dir="ltr">&lt;script
        src="https://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js"&gt;&lt;/script&gt;</code>
    </dd>

    <dt>site:</dt>
    <dd>
      <a href="https://github.com/swfobject/swfobject">github.com/swfobject/swfobject</a>
    </dd>

    <dt>versions:</dt>
    <dd class="versions">
      2.2, 2.1
    </dd>
  </dl>
  <h3 id="three.js" data-text="three.js" tabindex="0">three.js</h3>
  
  <dl>
    <dt>snippet:</dt>
    <dd>
      <code class="snippet" translate="no" dir="ltr">&lt;script
        src="https://ajax.googleapis.com/ajax/libs/threejs/r84/three.min.js"&gt;&lt;/script&gt;</code>
    </dd>

    <dt>site:</dt>
    <dd>
      <a href="http://threejs.org/">threejs.org</a>
    </dd>

    <dt>versions:</dt>
    <dd class="versions">
      r84, r83, r82, r81, r80, r79, r78, r77, r76, r75, r74, r73, r72, r71, r70, r69, r68, r67, r49
    </dd>
  </dl>
  <h3 id="web-font-loader" data-text="Web Font Loader" tabindex="0">Web Font Loader</h3>
  
  <dl>
    <dt>snippet></dt>
    <dd>
      <code class="snippet" translate="no" dir="ltr">&lt;script
        src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"&gt;&lt;/script&gt;</code>
    </dd>

    <dt>site:</dt>
    <dd>
      <a href="https://github.com/typekit/webfontloader">github.com/typekit/webfontloader</a>
    </dd>

    <dt>versions:</dt>
    <dd class="versions">
      1.6.26, 1.6.16, 1.5.18, 1.5.10, 1.5.6, 1.5.3, 1.5.2, 1.5.0
    </dd>
  </dl>
  <h2 id="troubleshooting" data-text="Troubleshooting" tabindex="0">Troubleshooting</h2>
  <p>
    Seeing an outdated version? Make sure you're not using the "automatic version" links, like
    <code class="snippet" translate="no" dir="ltr">/jqueryui/1/...</code>, but instead use URLs referring to exact versions.
    Due to concerns over caching and lack of compatibility between even minor versions, we have
    deprecated and stopped updating the automatic version aliases some time ago, so they will
    forever refer to an old version (in order to not break existing sites that still use them).
  </p>
  <p>If you encounter problems:</p>
  <ul>
    <li>
      Look for typos. Remember that JavaScript is a case-sensitive language.
    </li>
    <li>
      Use a JavaScript debugger. In Chrome, use the
      <a href="https://developer.chrome.com/devtools">Chrome DevTools</a>. In
      Firefox, you can use the built-in
      <a href="https://developer.mozilla.org/en-US/docs/Tools">Firefox
      DevTools</a>. In IE, you can use the
      <a href="http://msdn.microsoft.com/library/ie/bg182326.aspx">F12
      developer tools</a>.
    </li>
  </ul>
          </div>

    
                      <devsite-page-rating position="footer" selected-rating="0" hover-rating-star="0">
    </devsite-page-rating>
  
                   
          </article>
</article>

<devsite-content-footer class="nocontent">
  <p>Except as otherwise noted, the content of this page is licensed under the <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 License</a>, and code samples are licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0 License</a>. For details, see the <a href="https://developers.google.com/site-policies">Google Developers Site Policies</a>. Java is a registered trademark of Oracle and/or its affiliates.</p>  <p>Last updated 2020-05-07.</p></devsite-content-footer>



                      </devsite-content>
        </main>
        <devsite-footer-promos class="devsite-footer">
                      
                  </devsite-footer-promos>
        <devsite-footer-linkboxes class="devsite-footer">
                      <nav class="devsite-footer-linkboxes nocontent">
    <ul class="devsite-footer-linkboxes-list">
        <li class="devsite-footer-linkbox ">
    <h3 class="devsite-footer-linkbox-heading">Community</h3>      <ul class="devsite-footer-linkbox-list">
                <li class="devsite-footer-linkbox-item">
                    <a href="http://groups.google.com/group/Google-AJAX-Search-API"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 1)"            >
                      Discussion Group
                    </a>
                  </li>
              </ul>
    </li>
        <li class="devsite-footer-linkbox ">
    <h3 class="devsite-footer-linkbox-heading">Product Info</h3>      <ul class="devsite-footer-linkbox-list">
                <li class="devsite-footer-linkbox-item">
                    <a href="/speed/libraries/terms"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 1)"            >
                      Terms of Service
                    </a>
                  </li>
              </ul>
    </li>
        <li class="devsite-footer-linkbox ">
    <h3 class="devsite-footer-linkbox-heading">Developer consoles</h3>      <ul class="devsite-footer-linkbox-list">
                <li class="devsite-footer-linkbox-item">
                    <a href="//console.developers.google.com"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 1)"            >
                      Google API Console
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="//console.cloud.google.com"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 2)"            >
                      Google Cloud Platform Console
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="//play.google.com/apps/publish"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 3)"            >
                      Google Play Console
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="//console.firebase.google.com"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 4)"            >
                      Firebase Console
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="//console.actions.google.com"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 5)"            >
                      Actions on Google Console
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="//cast.google.com/publish"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 6)"            >
                      Cast SDK Developer Console
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="//chrome.google.com/webstore/developer/dashboard"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 7)"            >
                      Chrome Web Store Dashboard
                    </a>
                  </li>
              </ul>
    </li>
      </ul>
  </nav>
                  </devsite-footer-linkboxes>
        <devsite-footer-utility class="devsite-footer">
                      
<div class="devsite-footer-utility nocontent">
    <nav class="devsite-footer-sites">
    <a href="https://developers.google.com/"
       class="devsite-footer-sites-logo-link gc-analytics-event"
       data-category="Site-Wide Custom Events"
       data-label="Footer Google Developers Link">
      <img class="devsite-footer-sites-logo"
           src="/_static/images/lockup-developers.svg"
           alt="Google Developers">
    </a>
    <ul class="devsite-footer-sites-list">
            <li class="devsite-footer-sites-item">
        <a href="//developer.android.com"
           class="devsite-footer-sites-link
                  gc-analytics-event"
           data-category="Site-Wide Custom Events"
                    data-label="Footer Android Link"
                  >
          Android
        </a>
      </li>
            <li class="devsite-footer-sites-item">
        <a href="//developer.chrome.com/home"
           class="devsite-footer-sites-link
                  gc-analytics-event"
           data-category="Site-Wide Custom Events"
                    data-label="Footer Chrome Link"
                  >
          Chrome
        </a>
      </li>
            <li class="devsite-footer-sites-item">
        <a href="//firebase.google.com"
           class="devsite-footer-sites-link
                  gc-analytics-event"
           data-category="Site-Wide Custom Events"
                    data-label="Footer Firebase Link"
                  >
          Firebase
        </a>
      </li>
            <li class="devsite-footer-sites-item">
        <a href="//cloud.google.com"
           class="devsite-footer-sites-link
                  gc-analytics-event"
           data-category="Site-Wide Custom Events"
                    data-label="Footer Google Cloud Platform Link"
                  >
          Google Cloud Platform
        </a>
      </li>
            <li class="devsite-footer-sites-item">
        <a href="/products"
           class="devsite-footer-sites-link
                  gc-analytics-event"
           data-category="Site-Wide Custom Events"
                    data-label="Footer All products Link"
                  >
          All products
        </a>
      </li>
          </ul>
  </nav>
  
  <nav class="devsite-footer-utility-links">
        <ul class="devsite-footer-utility-list">
            <li class="devsite-footer-utility-item
                 ">
                        <a class="devsite-footer-utility-link gc-analytics-event"
           href="/terms/site-terms"
           data-category="Site-Wide Custom Events"
           data-label="Footer Terms link"
         >
          Terms
        </a>
              </li>
            <li class="devsite-footer-utility-item
                 ">
                        <a class="devsite-footer-utility-link gc-analytics-event"
           href="//policies.google.com/privacy"
           data-category="Site-Wide Custom Events"
           data-label="Footer Privacy link"
         >
          Privacy
        </a>
              </li>
            <li class="devsite-footer-utility-item
                 devsite-footer-utility-button">
                <span class="devsite-footer-utility-description">Sign up for the Google Developers newsletter</span>
                        <a class="devsite-footer-utility-link gc-analytics-event"
           href="//services.google.com/fb/forms/googledevelopersnewsletter/?utm_medium=referral&amp;utm_source=google-products&amp;utm_team=googledevs&amp;utm_campaign=201611-newsletter-launch"
           data-category="Site-Wide Custom Events"
           data-label="Footer Subscribe link"
         >
          Subscribe
        </a>
              </li>
          </ul>
    
    <devsite-language-selector>
  <devsite-select class="devsite-language-selector-menu">

    <select aria-label="            Select your language preference."
            class="devsite-language-selector-select"
            name="language"
            track-name="click"
            track-type="languageSelector">
                <option>Language</option>
              <option value="id"
              track-metadata-original-language="en"
              track-metadata-selected-language="id"
              track-name="changed"
              track-type="languageSelector"
            >
        Bahasa Indonesia
      </option>
          <option value="de"
              track-metadata-original-language="en"
              track-metadata-selected-language="de"
              track-name="changed"
              track-type="languageSelector"
            >
        Deutsch
      </option>
          <option value="en"
              track-metadata-original-language="en"
              track-metadata-selected-language="en"
              track-name="changed"
              track-type="languageSelector"
            >
        English
      </option>
          <option value="es"
              track-metadata-original-language="en"
              track-metadata-selected-language="es"
              track-name="changed"
              track-type="languageSelector"
            >
        Español
      </option>
          <option value="fr"
              track-metadata-original-language="en"
              track-metadata-selected-language="fr"
              track-name="changed"
              track-type="languageSelector"
            >
        Français
      </option>
          <option value="pt_br"
              track-metadata-original-language="en"
              track-metadata-selected-language="pt_br"
              track-name="changed"
              track-type="languageSelector"
            >
        Português – Brasil
      </option>
          <option value="ru"
              track-metadata-original-language="en"
              track-metadata-selected-language="ru"
              track-name="changed"
              track-type="languageSelector"
            >
        Русский
      </option>
          <option value="zh_cn"
              track-metadata-original-language="en"
              track-metadata-selected-language="zh_cn"
              track-name="changed"
              track-type="languageSelector"
            >
        中文 – 简体
      </option>
          <option value="ja"
              track-metadata-original-language="en"
              track-metadata-selected-language="ja"
              track-name="changed"
              track-type="languageSelector"
            >
        日本語
      </option>
          <option value="ko"
              track-metadata-original-language="en"
              track-metadata-selected-language="ko"
              track-name="changed"
              track-type="languageSelector"
            >
        한국어
      </option>
        </select>
  </devsite-select>
</devsite-language-selector>

  </nav>
</div>
                  </devsite-footer-utility>
      </section></section>
    <devsite-sitemask></devsite-sitemask>
    <devsite-snackbar                   ></devsite-snackbar>    <devsite-tooltip ></devsite-tooltip>
    <devsite-heading-link></devsite-heading-link>
    <devsite-analytics>
              <script type="application/json" analytics>[{"metrics": {"ratings_value": "metric1", "ratings_count": "metric2"}, "dimensions": {"dimension6": "en", "dimension4": "Hosted Libraries", "dimension5": "en", "dimension3": false, "dimension1": "Signed out", "dimension8": null}, "gaid": "UA-24532603-1"}]</script>
<script type="application/json" gtm>{}</script>
          </devsite-analytics>
            <script>
    (function(d,e,v,s,i,t,E){d['GoogleDevelopersObject']=i;
    t=e.createElement(v);t.async=1;t.src=s;E=e.getElementsByTagName(v)[0];
    E.parentNode.insertBefore(t,E);})(window, document, 'script',
    'https://www.gstatic.com/devrel-devsite/prod/va70c25da2af7c102a85bdfc215259d86fc5b2e57f33cbc810a173f52e333a7a1/js/app_loader.js', '[1,"en",null,"/js/devsite_app.js","https://www.gstatic.com/devrel-devsite/prod/va70c25da2af7c102a85bdfc215259d86fc5b2e57f33cbc810a173f52e333a7a1","https://www.gstatic.com/devrel-devsite/prod/va70c25da2af7c102a85bdfc215259d86fc5b2e57f33cbc810a173f52e333a7a1/developers","https://developers-dot-devsite-v2-prod.appspot.com",1,null,["/_pwa/developers/manifest.json","/_static/images/video-placeholder.svg","https://www.gstatic.com/devrel-devsite/prod/va70c25da2af7c102a85bdfc215259d86fc5b2e57f33cbc810a173f52e333a7a1/developers/images/favicon.png","https://fonts.googleapis.com/css?family=Google+Sans:400,500|Roboto:400,400italic,500,500italic,700,700italic|Roboto+Mono:400,500,700|Material+Icons"],1]')
  </script>  </body>
</html>