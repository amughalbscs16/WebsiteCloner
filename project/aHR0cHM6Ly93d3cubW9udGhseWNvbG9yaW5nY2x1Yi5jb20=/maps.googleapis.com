<!doctype html>
<html       lang="en"      dir="ltr">
  <head>
                    <meta name="google-signin-client-id" content="721724668570-nbkv1cfusk7kk4eni4pjvepaus73b13t.apps.googleusercontent.com">
    <meta name="google-signin-scope"
          content="profile email">
    <meta property="og:site_name" content="Google Cloud">
    <meta property="og:type" content="website">
    
          <meta name="theme-color" content="#039be5">
    
    <meta charset="utf-8">
    <meta content="IE=Edge" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="manifest" href="/_pwa/cloud/manifest.json"
          crossorigin="use-credentials">
    <link rel="preconnect" href="//www.gstatic.com" crossorigin>
    <link rel="preconnect" href="//fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="//fonts.googleapis.com" crossorigin>
    <link rel="preconnect" href="//apis.google.com" crossorigin>
    <link rel="preconnect" href="//www.google-analytics.com" crossorigin>
          <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Google+Sans:400,500|Roboto:400,400italic,500,500italic,700,700italic|Roboto+Mono:400,500,700|Material+Icons">
            <link rel="stylesheet" href="https://www.gstatic.com/devrel-devsite/prod/va70c25da2af7c102a85bdfc215259d86fc5b2e57f33cbc810a173f52e333a7a1/cloud/css/app.css">
    
    <noscript>
            <link rel="stylesheet" href="https://www.gstatic.com/devrel-devsite/prod/va70c25da2af7c102a85bdfc215259d86fc5b2e57f33cbc810a173f52e333a7a1/cloud/css/ce_bundle.css">
    </noscript>
    <link rel="shortcut icon" href="https://www.gstatic.com/devrel-devsite/prod/va70c25da2af7c102a85bdfc215259d86fc5b2e57f33cbc810a173f52e333a7a1/cloud/images/favicons/onecloud/favicon.ico">
    <link rel="apple-touch-icon" href="https://www.gstatic.com/devrel-devsite/prod/va70c25da2af7c102a85bdfc215259d86fc5b2e57f33cbc810a173f52e333a7a1/cloud/images/favicons/onecloud/super_cloud.png"><link rel="canonical" href="https://cloud.google.com/maps-platform"><link rel="search" type="application/opensearchdescription+xml"
            title="Google Cloud" href="https://cloud.google.com/s/opensearch.xml">      
<title>Geo-location APIs &nbsp;|&nbsp; Google Maps Platform &nbsp;|&nbsp; Google Cloud</title>

<meta property="og:title" content="Geo-location APIs &nbsp;|&nbsp; Google Maps Platform &nbsp;|&nbsp; Google Cloud">
  <meta name="description" content="Choose Google Maps Platform to create immersive location experiences and make better business decisions with accurate real time data &amp; dynamic imagery.">
  <meta property="og:description" content="Choose Google Maps Platform to create immersive location experiences and make better business decisions with accurate real time data &amp; dynamic imagery.">


  <meta property="og:url" content="https://cloud.google.com/maps-platform">

  <meta property="og:image" content="https://cloud.google.com/images/social-icon-google-cloud-1200-630.png">
  <meta property="og:image:secure_url" content="https://cloud.google.com/images/social-icon-google-cloud-1200-630.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale" content="en">
  <meta name="twitter:card" content="summary_large_image">





  
    
    
    
    
    
    
    
    

    
    








 

















 
 
 
 























 




















    

    
    
    
    
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@id": "https://cloud.google.com/maps-platform/",
        "@type": "Organization",
        "name": "Google Maps Platform",
        "url": "https://cloud.google.com/maps-platform/",
        "logo": "/images/maps-platform/google-maps-lockup.svg",
        "brand": "Google Maps Platform",
        "parentOrganization": "Google Cloud",
        "sameAs": [
          "https://twitter.com/GMapsPlatform",
          "https://mapsplatform.googleblog.com/",
          "https://www.youtube.com/channel/UCvUhDKiW8p54inpbjR1bmvg",
          "https://en.wikipedia.org/wiki/Google_Maps#Google_Maps_API"
        ]
      }
    </script>
  

    </head>
  <body type="marketing"
        theme="cloud-theme"
        class=""
        
        layout="full"
                free-trial        pending>
    <devsite-progress type="indeterminate" id="app-progress"></devsite-progress>
      <section class="devsite-wrapper"><cloudx-track></cloudx-track>
<cloudx-utils-init></cloudx-utils-init>

<devsite-header keep-tabs-visible>
      







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
  <a href="/" class="devsite-site-logo-link gc-analytics-event"
   data-category="Site-Wide Custom Events" data-label="Site logo" track-type="globalNav"
   track-name="googleCloud" track-metadata-position="nav"
   track-metadata-eventDetail="nav">
  <img src="https://www.gstatic.com/devrel-devsite/prod/va70c25da2af7c102a85bdfc215259d86fc5b2e57f33cbc810a173f52e333a7a1/cloud/images/cloud-logo.svg" class="devsite-site-logo" alt="Google Cloud">
</a>

  <span class="devsite-product-name">
    <ul class="devsite-breadcrumb-list">
    <li class="devsite-breadcrumb-item
             devsite-has-google-wordmark">
                              </li>
  </ul>
  </span>
</div>
        <div class="devsite-top-logo-row-middle">
          <div class="devsite-header-upper-tabs">
                       </div>
          <devsite-search
    enable-signin    enable-search    enable-suggestions
      enable-query-completion        project-name="Google Maps Platform"    tenant-name="Google Cloud"                compact>
  <form class="devsite-search-form" action="https://cloud.google.com/s/results" method="GET">
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
          <option value="es_419"
              track-metadata-original-language="en"
              track-metadata-selected-language="es_419"
              track-name="changed"
              track-type="languageSelector"
            >
        Español – América Latina
      </option>
          <option value="fr"
              track-metadata-original-language="en"
              track-metadata-selected-language="fr"
              track-name="changed"
              track-type="languageSelector"
            >
        Français
      </option>
          <option value="it"
              track-metadata-original-language="en"
              track-metadata-selected-language="it"
              track-name="changed"
              track-type="languageSelector"
            >
        Italiano
      </option>
          <option value="nl"
              track-metadata-original-language="en"
              track-metadata-selected-language="nl"
              track-name="changed"
              track-type="languageSelector"
            >
        Nederlands
      </option>
          <option value="pt_br"
              track-metadata-original-language="en"
              track-metadata-selected-language="pt_br"
              track-name="changed"
              track-type="languageSelector"
            >
        Português – Brasil
      </option>
          <option value="tr"
              track-metadata-original-language="en"
              track-metadata-selected-language="tr"
              track-name="changed"
              track-type="languageSelector"
            >
        Türkçe
      </option>
          <option value="zh_cn"
              track-metadata-original-language="en"
              track-metadata-selected-language="zh_cn"
              track-name="changed"
              track-type="languageSelector"
            >
        中文 – 简体
      </option>
          <option value="zh_tw"
              track-metadata-original-language="en"
              track-metadata-selected-language="zh_tw"
              track-name="changed"
              track-type="languageSelector"
            >
        中文 – 繁體
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
    ">
    <div class="devsite-header-background">
                        <div class="devsite-product-id-row"
           hidden>
            <div class="devsite-product-description-row">
                                        </div>
                      </div>
                                      <div class="devsite-doc-set-nav-row">
                                    <ul class="devsite-breadcrumb-list">
    <li class="devsite-breadcrumb-item
             ">
                    <a href="/maps-platform"              class="devsite-breadcrumb-link gc-analytics-event"
              data-category="Site-Wide Custom Events"
              data-label="Lower Header"
              data-value="1"
          >
            Google Maps Platform
      
  </a>
        </li>
  </ul>
                                              <cloudx-tabs-nav class="lower-tabs">
    <div class="devsite-tabs-wrapper">
                        <tab  active>
            <a href="/maps-platform"
   class="gc-analytics-event "
   track-type="globalNav"
   track-metadata-position="nav"
   track-metadata-eventdetail="nav"
   track-name="overview"
   aria-label="Overview, selected"         data-category="Site-Wide Custom Events"
        data-label="Tab: Overview"
   >
  Overview
</a>

          </tab>
                                <tab  >
            <a href="/maps-platform/products"
   class="gc-analytics-event "
   track-type="globalNav"
   track-metadata-position="nav"
   track-metadata-eventdetail="nav"
   track-name="products"
           data-category="Site-Wide Custom Events"
        data-label="Tab: Products"
   >
  Products
</a>

          </tab>
                                <tab  >
            <a href="/maps-platform/pricing"
   class="gc-analytics-event "
   track-type="globalNav"
   track-metadata-position="nav"
   track-metadata-eventdetail="nav"
   track-name="pricing"
           data-category="Site-Wide Custom Events"
        data-label="Tab: Pricing"
   >
  Pricing
</a>

          </tab>
                                <tab  >
            <a href="//developers.google.com/maps/documentation/"
   class="gc-analytics-event "
   track-type="globalNav"
   track-metadata-position="nav"
   track-metadata-eventdetail="nav"
   track-name="documentation"
           data-category="Site-Wide Custom Events"
        data-label="Tab: Documentation"
   >
  Documentation
</a>

          </tab>
                                <tab  >
            <a href="/blog/products/maps-platform"
   class="gc-analytics-event "
   track-type="globalNav"
   track-metadata-position="nav"
   track-metadata-eventdetail="nav"
   track-name="blog"
           data-category="Site-Wide Custom Events"
        data-label="Tab: Blog"
   >
  Blog
</a>

          </tab>
                  </div>
  </cloudx-tabs-nav>

                                <div class="devsite-product-button-row">
      <a href="/contact"
      class="cta-button-secondary button
      "
                      track-type="contact"
              track-metadata-position="nav"
              track-name="sales"
              track-metadata-eventDetail="nav"
              >Contact us</a>    <a href="https://console.cloud.google.com/google/maps-apis/start"
      class="cta-button-primary button-primary button get-started-trigger
      "
                      track-metadata-position="nav"
              track-type="getStarted"
              track-name="mapsCta"
              track-metadata-eventDetail="nav"
              >Get started</a></div>
                  </div>
          </div>  </div></div>
  <link rel="stylesheet" href="/css/secondary-nav.css"> <a class="cloud-nav-drawer-toggle">Menu</a>


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
  <a href="/" class="devsite-site-logo-link gc-analytics-event"
   data-category="Site-Wide Custom Events" data-label="Site logo" track-type="globalNav"
   track-name="googleCloud" track-metadata-position="nav"
   track-metadata-eventDetail="nav">
  <img src="https://www.gstatic.com/devrel-devsite/prod/va70c25da2af7c102a85bdfc215259d86fc5b2e57f33cbc810a173f52e333a7a1/cloud/images/cloud-logo.svg" class="devsite-site-logo" alt="Google Cloud">
</a>
        <span class="devsite-product-name">
        <ul class="devsite-breadcrumb-list">
    <li class="devsite-breadcrumb-item
             devsite-has-google-wordmark">
                              </li>
  </ul>
      </span>
    
</div>  </div>

  <div class="devsite-book-nav-wrapper">
    <div class="devsite-mobile-nav-top">
              <ul class="devsite-nav-list">
                      <li class="devsite-nav-item">
                  <a href="/maps-platform"
           class="devsite-nav-title gc-analytics-event
                            devsite-nav-active"
    
         data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Google Maps Platform"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav"
     track-name="googleMapsPlatform">
      <span class="devsite-nav-text" tooltip >
      Google Maps Platform
   </span>
        </a>
  
  
                              <ul class="devsite-nav-responsive-tabs">
                                                                                                  <li class="devsite-nav-item">
                          <a href="/maps-platform"
           class="devsite-nav-title gc-analytics-event
                            devsite-nav-active"
    
         data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Overview"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav"
     track-name="overview">
      <span class="devsite-nav-text" tooltip >
      Overview
   </span>
        </a>
  
  
                    </li>
                                                                                                  <li class="devsite-nav-item">
                          <a href="/maps-platform/products"
           class="devsite-nav-title gc-analytics-event
                            "
    
         data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Products"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav"
     track-name="products">
      <span class="devsite-nav-text" tooltip >
      Products
   </span>
        </a>
  
  
                    </li>
                                                                                                  <li class="devsite-nav-item">
                          <a href="/maps-platform/pricing"
           class="devsite-nav-title gc-analytics-event
                            "
    
         data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Pricing"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav"
     track-name="pricing">
      <span class="devsite-nav-text" tooltip >
      Pricing
   </span>
        </a>
  
  
                    </li>
                                                                                                  <li class="devsite-nav-item">
                          <a href="//developers.google.com/maps/documentation/"
           class="devsite-nav-title gc-analytics-event
                            "
    
         data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Documentation"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav"
     track-name="documentation">
      <span class="devsite-nav-text" tooltip >
      Documentation
   </span>
        </a>
  
  
                    </li>
                                                                                                  <li class="devsite-nav-item">
                          <a href="/blog/products/maps-platform"
           class="devsite-nav-title gc-analytics-event
                            "
    
         data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Blog"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav"
     track-name="blog">
      <span class="devsite-nav-text" tooltip >
      Blog
   </span>
        </a>
  
  
                    </li>
                                  </ul>
                          </li>
                        <li class="devsite-nav-item">
    <a href="//cloud.google.com/console/google/maps-apis/overview"
           class="devsite-nav-title gc-analytics-event
                            "
    
         data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Console"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav"
     track-name="console">
      <span class="devsite-nav-text" tooltip >
      Console
   </span>
        </a>
  </li>

  
                                        <li class="devsite-nav-item">
    <a href="/contact"
           class="cta-button-secondary button"
    
                  track-type="contact"
              track-metadata-position="nav"
              track-name="sales"
              track-metadata-eventDetail="nav"
               data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Contact us"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav"
     track-name="contactUs">
      <span class="devsite-nav-text" tooltip >
      Contact us
   </span>
        </a>
  </li>

                        <li class="devsite-nav-item">
    <a href="https://console.cloud.google.com/google/maps-apis/start"
           class="cta-button-primary button-primary button get-started-trigger"
    
                  track-metadata-position="nav"
              track-type="getStarted"
              track-name="mapsCta"
              track-metadata-eventDetail="nav"
               data-category="Site-Wide Custom Events"
     data-label="Responsive Tab: Get started"
     track-type="navMenu"
     track-metadata-eventDetail="globalMenu"
     track-metadata-position="nav"
     track-name="getStarted">
      <span class="devsite-nav-text" tooltip >
      Get started
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
                        >
          <devsite-toc class="devsite-nav"
            disabled></devsite-toc>
          <devsite-content>
                          


<article class="devsite-article">
  <article class="devsite-article-inner"><style>
        /* Styles inlined from /css/junebug.css */
/* Components and overrides for /cloud migration */

/* H4 headings are in Google Sans */
h4 {
  font-family: 'Google Sans', 'Roboto', sans-serif;
}

/* Utility classes */
#cloud-site .jb-section-pad {
 padding-bottom: 50px;
 padding-top: 50px;
}

@media only screen and (min-width: 900px) {
  #cloud-site .jb-section-pad {
    padding-bottom: 100px;
    padding-top: 100px;
  }
  #cloud-site .jb-pad-left {
    padding-left: 40px;
  }

  #cloud-site .jb-pad-right {
    padding-right: 40px;
  }
}

#cloud-site .jb-bottom-flush {
  margin-bottom: 0;
  padding-bottom: 0;
}

#cloud-site .jb-top-flush {
  margin-top: 0;
  padding-top: 0;
}

/* Compliance pages */
#cloud-site .jb-background-compliance {
  background-color: #f6f6f6;
  color: #4a5960;
  text-align: center;
}

#cloud-site .jb-background-compliance .hero-title {
  color: #4a5960;
  text-transform: none;
}

#cloud-site .jb-compliance-sidebar-section .text-body {
  margin: 0;
}

.jb-compliance-sidebar-section ul {
  margin: 0;
  list-style-type: none;
  padding: 0;
}

.jb-compliance-sidebar-section ul li:last-of-type {
  margin-bottom: 0;
}

.jb-compliance-image {
  display: inline-block;
  vertical-align: text-top;
  width: 100px;
}

.jb-tag-container .tag {
  background-color: #f6f6f6;
  border-radius: 24px;
  display: inline-block;
  padding: 7px 12px;
  margin: 0 8px 8px 0;
}

.jb-related-section .flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.jb-related-section .flex > a {
  background: #f6f6f6;
  cursor: pointer;
  margin: 12px;
  transition: all 0.3s;
  width: 352px;
}

.jb-related-section .flex > a:hover,
.jb-related-section .flex > a:focus {
  box-shadow: -1px 5px 25px -5px rgba(0,0,0,0.8);
  text-decoration: none;
  transform: translate3d(0, -2px, 0);
}

.jb-related-section .flex > a .inner {
  color: #4a5960;
  min-height: 310px;
  padding: 28px 30px 0;
}

.jb-related-section .flex > a figure {
  height: 100px;
}

.jb-related-section .flex > a img {
  padding: 0;
}

.jb-related-section .flex p {
  font-size: 14px;
}

.jb-related-section .flex > a > span {
  display: block;
  border-top: 1px solid #e4e4e4;
  padding: 18px 30px;
}

.jb-related-section .flex > a.pseudo {
  visibility: hidden;
}

.jb-border-bottom {
  border-bottom: 1px solid #e4e4e4;
}

.jb-compliance-sidebar section {
  border-top: 1px solid #e4e4e4;
}

.jb-compliance-sidebar section:first-of-type {
  border-top: none;
}

.jb-compliance-body {
  margin: -32px 0 16px 0;
  padding-bottom: 16px;
  border-bottom: solid 1px #e4e4e4;
}

.jb-back-link {
  font-weight: 800;
}

.jb-back-link .material-icons {
  margin-right:20px;
  vertical-align: middle;
}

@media screen and (min-width: 900px) {
  .jb-compliance-body {
    margin: -40px 40px 0 0;
    padding-bottom: 0;
    border-bottom: none;
  }
  .jb-compliance-main {
    margin-bottom:80px;
    padding-bottom:80px;
  }
  .jb-compliance-sidebar {
    margin-top: 56px;
  }
}

@media screen and (min-width: 1024px) {
    #cloud-site .jb-background-compliance .hero-title {
      font-size: 48px;
      line-height: 72px;
      padding: 24px 0 16px 0;
  }

  #cloud-site .jb-background-compliance .hero-title,
  #cloud-site .jb-background-compliance .text-body {
    margin: 0 120px;
  }

  .jb-related-section h2 {
    font-size: 40px;
    line-height: 60px;
  }
}

@media screen and (min-width: 1440px) {
  #cloud-site .jb-background-compliance .hero-title,
  #cloud-site .jb-background-compliance .text-body {
    margin: 0 280px;
  }
}

/** Block links **/
.jb-link {
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
}

.jb-link-icon {
  display: inline-block;
  position: relative;
}

#cloud-site .jb-link-icon:after {
  background-repeat: no-repeat;
  background-size: contain;
  content: '';
  height: 16px;
  position: absolute;
  right: 0;
  width: 16px;
}

#cloud-site .jb-link-pdf {
  padding-left: 30px;
}

#cloud-site .jb-link-pdf:after {
  background-image: url('/images/icon-pdf.png');
  height: 18px;
  left: 0;
  top: 4px;
  width: 18px;
}

.jb-link .jb-link-arrow-forward .material-icons,
.jb-link .jb-link-download.material-icons {
  display: inline;
  padding-left: 5px;
}

#cloud-site .jb-link .jb-link-arrow-forward:after,
#cloud-site .jb-link .jb-link-download:after {
  content: none;
}

#cloud-site .jb-link-video {
  padding-right: 30px;
}

#cloud-site .jb-link-video:after {
  background-image: url('/images/icons/icon_video_youtube.svg');
  background-size: cover;
  height: 24px;
  right: 0;
  top: 0;
  width: 24px;
}

#cloud-site .jb-link-video-white:after {
  background-image: url('/images/icons/icon_video_youtube-white.svg');
}

/** Generic Styles */
.jb-headline {
  color: #414141;
  font-size: 24px;
  line-height: 32px;
  margin-top: 0;
}

@media (min-width: 601px) {
  .jb-headline {
    font-size: 40px;
    line-height: 50px;
  }
}

.jb-centered-content {
  margin-left: auto;
  margin-right: auto;
  max-width: 850px;
}

.jb-centered-content .jb-headline,
.jb-centered-content h2.jb-headline{
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
}

.jb-image-full-width {
  display: block;
}

.jb-padded-section-content {
  margin: auto;
  max-width: 876px;
}

/** Content Lightbox */
.jb-lb-content {
  bottom: 5%;
  left: 0;
  margin: 5% auto;
  right: 0;
  top: 10%;
  width: 900px;
}

/** Generic hero styles */
#cloud-site .jb-hero .hero-title {
  color: #424242;
  font-size: 48px;
  line-height: 1.2em;
  margin-bottom: 20px;
  overflow: visible;
  text-transform: none;
}

#cloud-site .jb-hero .text-body,
#cloud-site .jb-hero p {
  color: #616161;
}

@media (max-width: 600px) {
  #cloud-site .jb-hero .hero-title {
    font-size: 30px;
  }
}

/** hero with super cloud **/
#hero-supercloud {
  background: url('/images/products/supercloud_grey.svg') right center no-repeat;
  height: 291px;
  position: absolute;
  right: -50px;
  top: 40px;
  width: 360px;
  z-index: -1;
}

@media (max-width: 780px) {
  #hero-supercloud {
    display: none;
  }
}

@media (min-width: 1025px) {
  #hero-supercloud {
    right: 0;
  }
}

#cloud-site .jb-hero-icon {
  padding: 72px 20px 24px;
  position: relative;
}

#cloud-site .jb-hero .jb-hero-columns {
  padding: 70px 40px;
}

@media (min-width: 700px) {
  #cloud-site .jb-hero-icon {
    min-height: 365px;
    padding: 94px 20px 0;
  }

  .jb-hero-icon--wrap {
    max-width: 470px;
  }
}

/** centered hero text */
#cloud-site .jb-hero-centered .jb-hero-centered-wrap {
  margin-left: auto;
  margin-right: auto;
  max-width: 650px;
}

/* Hero sections with background image (with and without title card) */
#cloud-site .jb-hero-with-card,
#cloud-site .jb-hero-with-background-image {
  background-position: center right;
  background-repeat: no-repeat;
  background-size: cover;
}

#cloud-site .jb-hero-with-card {
  align-items: center;
  display: flex;
  min-height: 420px;
  padding: 0 0 0 40px;
}

#cloud-site .jb-hero-with-card .hero-subtitle {
  color: #424242;
  font-size: 16px;
}

#cloud-site .jb-hero .button {
  background: #4285f4;
  box-shadow: inherit;
  color: #fff;
}

#cloud-site .jb-hero .button:hover {
  background-color: #558ff1;
  box-shadow: 0 2px 1px -1px rgba(66,133,244,.2), 0 1px 1px 0 rgba(66,133,244,.14), 0 1px 3px 0 rgba(66,133,244,.12);
}



#cloud-site .jb-hero .button-secondary {
  background: #fff;
  border: 1px solid #dfdfdf;
  color: #4285f4;
  padding: 0 48px;
}

#cloud-site .jb-hero .button.button-secondary:hover {
  /* overwriting specificity */
  background-color: #f8fafe!important;
  box-shadow: inherit;
}

.jb-hero-card {
  background: #fff;
  max-width: 500px;
  padding: 50px;
}

.jb-hero-with-card .hero-title {
  margin-top: 0;
}

@media (max-width: 600px) {
  #cloud-site .jb-hero-with-card,
  #cloud-site .jb-hero-with-background-image {
    background-position: top right;
    background-size: 600px auto;
    padding: 120px 0 0 0;
  }

  #cloud-site .jb-hero-with-card {
    display: block;
    min-height: auto;
  }

  .jb-hero-card {
    padding: 20px 40px 0 40px;
    max-width: 100%;
  }

  .jb-hero-content {
    padding: 70px 40px 0 40px;
    max-width: 100%;
  }

  #cloud-site .jb-hero-with-background-image .hero-title,
  #cloud-site .jb-hero-with-background-image .hero-subtitle {
    color: #424242;
  }
}

/** column paragraphs with heading and text **/
.jb-titled-paragraph h3 {
  margin-top: 0;
}

.jb-titled-paragraph .jb-titled-paragraph-title {
  font-family: 'Roboto', Arial, sans-serif;
  font-size: 20px;
  font-weight: 700;
}

.jb-titled-paragraph p,
.jb-titled-paragraph ul {
  font-size: 14px;
  line-height: 24px;
}

@media only screen and (max-width: 900px) {
  #cloud-site .c4.jb-titled-paragraph {
    margin: 0;
    padding-bottom: 56px;
  }
}

@media (min-width: 901px) {
  .jb-columns .jb-titled-paragraph {
    padding-right: 5%;
  }
}

/** Get Started Section **/
#cloud-site .jb-get-started {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

#cloud-site .jb-get-started .text-body {
  margin-bottom: 35px;
}

.jb-get-started-title-wrap {
  width: calc(100% + 30px);
}

.jb-get-started-title {
  background: #4285f4;
  color: #fff;
  padding: 36px 24px;
}

.jb-get-started-title-text {
  font-size: 48px;
  font-weight: 400;
  line-height: 56px;
  margin: 0;
  max-width: 230px;
}

.jb-get-started-section {
  padding-top: 56px;
}

.jb-subhead {
  font-size: 18px;
  line-height: 23px;
  margin-top: 0;
}

.jb-get-started-heading {
  font-size: 22px;
  line-height: 33px;
  margin-top: 0;
}

@media only screen and (min-width: 601px) {
  .jb-get-started-title-wrap {
    margin: 0;
    width: 100%;
  }

  .jb-get-started-title {
    padding-bottom: 41px;
    padding-top: 41px;
  }

  .jb-get-started-section {
    flex-basis: 47.92401%;
    margin: 0 1.03799%;
    padding-right: 44px;
    padding-top: 60px;
    width: 47.92401%;
  }
}

@media only screen and (min-width: 1025px) {
  .jb-get-started-title-wrap,
  .jb-get-started-section {
    flex-basis: 30.2%;
    margin: 0 1.03799%;
    min-height: 370px;
    width: 30.2%;
  }

  .jb-get-started-section {
    padding-right: 0;
    padding-top: 58px;
  }

  .jb-get-started-section-small {
    flex-basis: 22%;
    width: 22%;
  }

  .jb-get-started-title {
    min-height: 370px;
    padding: 0 0 100%;
    position: relative;
  }

  .jb-get-started-title-text {
    left: 13%;
    position: absolute;
    top: 13%
  }
}

/** Product Cards */
.jb-products {
  background: #f7f7f7;
  padding-bottom: 15px;
  padding-top: 10px;
}

.jb-product-cards {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.jb-product-card {
  background: #fff;
  margin: 0 0 36px 0;
  overflow: auto;
  padding: 35px;
}

#cloud-site .jb-product-card-image {
  display: block;
  margin: 0 auto;
}

.jb-product-card-heading {
  color: #414141;
  font-size: 20px;
  line-height: 24px;
  margin: 20px 0 0;
}

.jb-product-card-list {
  list-style-type: none;
  margin-top: 25px;
  padding-left: 0;
}

.jb-product-card-list li {
  line-height: 18px;
  margin: 0 0 8px 0;
}

.jb-product-card-list .link {
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
}

@media (min-width: 901px) {
  .jb-product-card-heading {
    margin-top: 0;
  }

  .jb-product-card-list {
    margin-top: 35px;
    padding-left: 30px;
  }
}

/* Styled definition list */
.jb-styled-list {
  counter-reset: dl-counter;
}

#cloud-site .jb-styled-list-heading,
#cloud-site .jb-styled-list .jb-styled-list-content {
  color: #545454;
  font-size: 14px;
  line-height: 24px;
  padding-left: 30px;
}

#cloud-site .jb-styled-list-heading {
  font-weight: 700;
  position: relative;
}

#cloud-site .jb-styled-list-heading:before {
  color: #424242;
  content: counter(dl-counter);
  counter-increment: dl-counter;
  font-family: 'Google Sans', 'Roboto', sans-serif;
  font-size: 30px;
  left: 0;
  position: absolute;
  top: 8px;
}

#cloud-site .jb-styled-list-light .jb-styled-list-content,
#cloud-site .jb-styled-list-light .jb-styled-list-heading,
#cloud-site .jb-styled-list-light .jb-styled-list-heading:before {
  color: #fff;
}

#cloud-site .jb-styled-list-large .jb-styled-list-heading {
  font-size: 18px;
}

#cloud-site .jb-styled-list-large .jb-styled-list-content {
  font-size: 16px;
}

@media (min-width: 601px) {
  #cloud-site .jb-styled-list-heading,
  #cloud-site .jb-styled-list .jb-styled-list-content {
    padding-left: 50px;
  }

  #cloud-site .jb-styled-list-heading:before {
    font-size: 36px;
  }
}

/** Linked List */
.jb-linked-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.jb-linked-list .jb-link {
  margin-bottom: 10px;
}

/** Additional tabs styling (dependency on nodejs.css) */
.jb-tabs {
  margin-top: 30px;
}
.jb-tabs .jb-tabs-content-heading {
  font-family: 'Roboto', Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 0;
}

@media (max-width: 900px) {
  .jb-tabs .jb-tabs-content-inner {
    padding-bottom: 20px;
    padding-top: 20px;
  }
}

/** Footnotes */
.jb-footnotes {
  border-top: 1px solid rgba(0, 0, 0, .12);
  margin-top: 20px;
  padding-top: 20px;
}

/** Quote */
#cloud-site .jb-quote {
  margin-left: -15px;
  margin-right: -15px;
}

.jb-quote-blue .jb-quote-text:before,
.jb-quote-blue .jb-quote-text:after {
  color: #4285f4;
}

/** Blue Quote */
.jb-quote-blue .jb-quote-resource--action {
  background-color: #4285f4;
}

.jb-quote-blue .jb-quote-resource--action:hover,
.jb-quote-blue .jb-quote-resource--action:focus {
  background-color: #255fdb;
}

/** Yellow Quote */
.jb-quote-yellow .jb-quote-text:before,
.jb-quote-yellow .jb-quote-text:after {
  color: #fabc05;
}

.jb-quote-yellow .jb-quote-resource--action {
  background-color: #fabc05;
}

.jb-quote-yellow .jb-quote-resource--action:hover,
.jb-quote-yellow .jb-quote-resource--action:focus {
  background-color: #f9ab00;
}

/** Red Quote */
.jb-quote-red .jb-quote-text:before,
.jb-quote-red .jb-quote-text:after {
  color: #ff3c3b;
}

.jb-quote-red .jb-quote-resource--action {
  background-color: #ff3c3b;
}

.jb-quote-red .jb-quote-resource--action:hover,
.jb-quote-red .jb-quote-resource--action:focus {
  background-color: #ea4335;
}

.jb-quote .jb-quote-image {
  background-repeat: no-repeat;
  background-size: cover;
  height: 186px;
}

.jb-quote blockquote {
  color: #414141;
  padding: 0;
}

.jb-quote .jb-quote-tile {
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
}

.jb-quote .jb-quote-tile-floating {
  background: #fff;
  margin: 0 auto;
}

.jb-quote-background-grey .jb-quote-tile {
  background: #f7f7f7;
}

.jb-quote .jb-quote-body {
  margin: 30px 40px;
}

.jb-quote .jb-quote-text {
  font-family: 'Google Sans', 'Roboto', sans-serif;
  font-size: 20px;
  line-height: 28px;
  position: relative;
}

.jb-quote .jb-quote-text:before,
.jb-quote .jb-quote-text:after {
  font-family: 'Google Sans', 'Roboto', sans-serif;
  font-size: 50px;
  position: absolute;
}

.jb-quote .jb-quote-text:not(.jb-quote-hide-marks):before {
  content: '“';
  left: -25px;
  top: 6px;
}

.jb-quote .jb-quote-text:not(.jb-quote-hide-marks):after {
  bottom: -12px;
  content: '”';
  padding-left: 5px;
}

.jb-quote .jb-quote-author {
  display: block;
  font-size: 14px;
  font-style: normal;
  line-height: 18px;
  margin-top: 25px;
}

.jb-quote .jb-quote-resources {
  display: flex;
  min-height: 120px;
}

.jb-quote .jb-quote-resource {
  align-items: center;
  display: flex;
  flex: 1 1 50%;
  justify-content: center;
  max-height: 137px;
}

.jb-quote .jb-quote-resource--logo {
  background-color: #eee;
  padding: 26px;
}

.jb-quote .jb-quote-tile-floating .jb-quote-resource--logo {
  background-color: #f6f6f6;
}

.jb-quote .jb-quote-resource--logo img {
  object-fit: contain;
}

.jb-quote.jb-quote-background-grey .jb-quote-resource--logo {
  background: #fff;
}

.jb-quote .jb-quote-resource--action .jb-link {
  align-items: center;
  color: #fff;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
}

@media (min-width: 601px) {
  #cloud-site .jb-quote {
    margin-left: auto;
    margin-right: auto;
  }

  .jb-quote .jb-quote-image {
    height: 367px;
  }

  .jb-quote .jb-quote-tile-floating {
    margin-top: -120px;
    max-height: 700px;
    max-width: 550px;
  }
}

@media (min-width: 1025px) {
  .jb-quote .jb-quote-image {
    height: 500px;
  }

  .jb-quote .jb-quote-tile {
    flex-direction: row;
  }

  .jb-quote .jb-quote-tile-floating {
    max-width: 692px;
  }

  .jb-quote .jb-quote-body {
    flex: 1;
  }

  .jb-quote .jb-quote-tile-static .jb-quote-body {
    flex: 2;
    margin: 80px 50px 80px 60px;
  }

  .jb-quote .jb-quote-text:before,
  .jb-quote .jb-quote-text:after {
    font-size: 60px;
  }

  .jb-quote .jb-quote-text:before {
    left: -30px;
  }

  .jb-quote .jb-quote-resources {
    flex: 0 0 250px;
    flex-direction: column;
  }

  .jb-quote .jb-quote-tile-static .jb-quote-resources {
    flex-basis: 300px;
  }

  .jb-quote .jb-quote-resource {
    max-height: none;
  }
}

@media (min-width: 1281px) {
  .jb-quote .jb-quote-tile-floating {
    margin-top: -173px;
    max-width: 957px;
  }

  .jb-quote .jb-quote-body {
    margin: 70px 40px 70px 50px;
  }

  .jb-quote .jb-quote-tile-static .jb-quote-body {
    margin: 93px 120px 93px 135px;
  }

  .jb-quote .jb-quote-text {
    font-size: 30px;
    line-height: 40px;
  }

  .jb-quote .jb-quote-resources {
    flex-basis: 288px;
  }

  .jb-quote .jb-quote-tile-static .jb-quote-resources {
    flex-basis: 408px;
  }
}

/* Generic card with bottom link and container */
.jb-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px auto 0;
  max-width: 1200px;
}

.jb-card-container-bottom-flush {
  margin-bottom: -36px;
}

.jb-card {
  background: #fff;
  box-sizing: border-box;
  display: flex;
  flex: 0 0 300px;
  flex-direction: column;
  margin: 12px;
  padding: 24px;
  position: relative;
  text-decoration: none;
  transition: all 0.3s;
}

.jb-spacing-card {
  flex: 0 0 300px;
  height: 0;
  margin: 0 12px;
}

.jb-card-content h3 {
  font-size: 22px;
  line-height: 33px;
}

.jb-card-icon + .jb-card-content h3 {
  margin-top: 16px;
}

.jb-card-large .jb-card-content h3 {
  font-size: 24px;
  line-height: 36px;
  padding-bottom: 80px;
  margin: 0;
}

.jb-card-footer {
  align-self: end;
  margin-top: auto;
  padding-top: 20px;
}

.jb-card-footer .jb-link {
  display: block;
  margin-bottom: 14px;
}

.jb-card-footer .jb-link:last-child {
  margin-bottom: 0;
}

#cloud-site .jb-card img {
  padding: 0;
}

.jb-card-icon {
  align-items: center;
  display: flex;
  height: 52px;
  padding: 0;
}

.jb-icon {
  height: 32px;
  width: 32px;
}

.jb-card-large .jb-card-footer {
  border-top: solid 1px #f6f6f6;
  margin-left: -24px;
  margin-right: -24px;
  padding: 24px 24px 0 24px;
  width: 300px;
}

.jb-card-container-alt .jb-card-large .jb-card-footer {
  border-top: solid 1px #d8d8d8;
}

/* Badge container */
.jb-badge-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -25px 0;
}

.jb-badge-container a {
  display: flex;
  flex-direction: column;
  margin: 24px;
  text-align: center;
  width: 100px;
}

.jb-spacing-badge {
  margin: 0 24px;
  height: 0;
  width:  100px;
}

.jb-badge-container img {
  display: block;
  flex: 1 0;
  margin: auto;
  max-height: 92px;
  max-width: 92px;
  padding-bottom: 12px;
}

.jb-badge-container div {
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
}

@media (max-width: 1024px) {
  .jb-badge-container a {
    margin: 16px;
  }
  .jb-spacing-badge {
    margin: 0 16px;
  }
  .jb-product-card-list li {
    line-height: 30px;
  }
}

@media (max-width: 320px) {
  .jb-badge-container a {
    margin: 8px;
  }
  .jb-spacing-badge {
    margin: 0 8px;
  }
}

/* Split 2 color section */
.jb-split-section {
  display: flex;
}

.jb-split-section.blue,
.jb-split-section .blue {
  background: #498dfc;
  color: #fff;
}

.jb-split-section.grey,
.jb-split-section .grey{
  background: #f6f6f6;
  color: #424242;
}

#cloud-site .jb-left {
  padding-left: 96px;
  padding-right: 40px;
}

#cloud-site .jb-right {
  padding-left: 40px;
  padding-right: 40px;
}
/* colored background is on the right */
.jb-split-section-right .blue {
  position: relative;
}

.jb-split-section .blue .jb-link,
.jb-split-section .blue .jb-styled-list-heading,
.jb-split-section .blue .jb-styled-list-content {
  color: #fff;
}

.jb-split-section .white {
  background: #fff;
  color: #424242;
}

.jb-split-section > div {
  flex: 1;
}

.jb-left,
.jb-right {
  align-items: center;
  display: flex;
}

@media only screen and (max-width: 767px) {
  .jb-split-section {
    display: block;
  }

  #cloud-site .jb-left,
  #cloud-site .jb-right {
    padding-left: 30px;
    padding-right: 30px;
  }
}

.blue-section-cta {
  color: #ffffff;
  text-decoration: underline;
}

/* Solutions pages */
#cloud-site .jb-hero-solutions {
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
}

.jb-hero-solutions .jb-hero-content {
  max-width: 412px;
}

#cloud-site .jb-hero-solutions .hero-subtitle {
  color: #424242;
  font-size: 16px;
}

.jb-card-section-blurb {
  font-size: 16px;
  line-height: 24px;
  margin: auto;
  max-width: 700px;
}

.jb-card-container-alt .jb-card {
  background: #f6f6f6;
}

.jb-card-container-4up .jb-card {
  flex: 0 0 260px;
}

.jb-partner-card .jb-card-icon {
  height: 72px;
}

.jb-headline-underlined:after {
  background-color: #2b85e7;
  content: '';
  display: block;
  height: 6px;
  margin-top: 27px;
  width: 60px;
}

.jb-solutions-title {
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 8px;
}

.jb-solutions-container {
  margin-top: -50px;
}

.jb-solutions-block {
  margin-top: 50px;
}

.jb-solutions-subtitle {
  font-size: 30px;
  line-height: 36px;
}

#cloud-site .jb-solutions-block-content > p {
  margin-top: 16px;
}

.jb-separator {
  border-top:1px solid #f6f6f6;
  margin: 0 -25px;
}

@media only screen and (min-width: 900px) {
  #cloud-site .jb-solutions-block-content > p {
    margin-top: 0;
  }

  .jb-solutions-block-content {
    padding-left: 28px;
  }

  #cloud-site .jb-hero-solutions {
    padding: 90px 64px 70px 126px;
  }

  .jb-solutions-subtitle {
    font-size: 30px;
    line-height: 36px;
  }
}

@media only screen and (max-width: 1024px) {
  #cloud-site .jb-hero-solutions {
    background-size: 100% auto;
    background-position: top right;
    padding: 50px 0 0 0;
  }

  .jb-hero-solutions .jb-hero-content {
    background: #fff;
    margin-top: 30%;
    max-width: 100%;
    padding: 10px 50px 0;
  }
}

@media only screen and (max-width: 600px) {
  .jb-hero-solutions {
    margin-left: -16px;
    margin-right: -16px;
  }

  .jb-hero-solutions .jb-hero-content {
    padding: 0 20px 40px;
    max-width: 100%;
  }
}

/** Salesforce specific */
.salesforce .jb-hero {
  margin-top: -40px;
}

.salesforce .jb-hero-bg {
  background: url('/images/salesforce/hero-image-mobile.jpg') no-repeat center right;
  background-size: cover;
  height: 182px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.salesforce .jb-logo-wrapper {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 310px;
  min-height: 182px;
  padding: 0 10px;
  position: relative;
}

.salesforce .jb-hero-content {
  margin-bottom: 30px;
  padding: 0;
}

#cloud-site.salesforce .jb-hero-subtitle {
  margin-top: 32px;
  text-align: center;
}

@media (min-width: 600px) {
  .salesforce .jb-hero-bg {
    height: 317px;
  }

  .salesforce .jb-logo-wrapper {
    min-height: 317px;
  }
}

@media (min-width: 1024px) {
  .salesforce .jb-hero,
  .salesforce .jb-hero-bg {
    height: 420px;
  }

  .salesforce .jb-hero-content {
    margin-left: 36px;
    max-width: 530px;
    padding: 80px 0 125px;
    position: relative;
  }

  .salesforce .jb-logo-wrapper {
    margin-left: 0;
    min-height: 0;
  }

  #cloud-site.salesforce .jb-hero .jb-hero-subtitle {
    color: #fff;
    text-align: left;
  }

  .salesforce .jb-hero .jb-hero-subtitle a {
    color: #fff;
    text-decoration: underline;
  }
}

@media (min-width: 1280px) {
  .salesforce .jb-hero-bg {
    background-image: url('/images/salesforce/hero-image_2x.png');
  }
}

/** Methodology Specific */
.jb-methodology-item {
  margin-top: 45px;
}

.jb-methodology-image {
  margin-bottom: 15px;
}

.jb-methodology-header {
  color: #414141;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 8px;
  margin-top: 0;
}

.jb-methodology-subheader {
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
  margin-top: 0;
}

@media (min-width: 1024px) {
  .jb-methodology-list {
    display: flex;
  }

  .jb-methodology-item {
    flex: 1;
    margin-left: 1.03799%;
    margin-right: 1.03799%;
  }

  .jb-methodology-header {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 0;
    padding-bottom: 45px;
    position: relative;
  }

  .jb-methodology-header:before {
    border-color: transparent transparent transparent #4285f4;
    border-style: solid;
    border-width: 6px 0 6px 12px;
    content: '';
    display: block;
    height: 0;
    left: 92%;
    margin-top: 42px;
    position: absolute;
    width: 0;
  }

  .jb-methodology-header:after {
    background-color: #4285f4;
    content: '';
    display: block;
    height: 4px;
    margin-top: 20px;
    position: absolute;
    width: 92%;
  }

  .jb-methodology-item:nth-child(2) .jb-methodology-header {
    overflow: visible;
  }

  .jb-methodology-item:nth-child(2) .jb-methodology-header::before {
    left: 205%;
  }

  .jb-methodology-item:nth-child(2) .jb-methodology-header::after {
    width: 205%;
  }

  .jb-methodology-item:nth-child(3) .jb-methodology-header::before,
  .jb-methodology-item:nth-child(3) .jb-methodology-header::after {
    display: none;
  }

}

/* Press page */
.jb-press-content {
  margin: 0 auto;
  max-width: 1024px;
}

.jb-press-flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* Press Bio Cards */
.jb-bio-card-container {
  margin: 32px -24px 0;
}

.jb-bio-card {
  background: #fff;
  flex: 1 0 400px;
  margin: 24px 12px 0;
  max-width: 100%;
  padding: 32px 40px 0;
}

.jb-bio-spacing-card {
  flex: 1 0 400px;
  height: 0;
  margin: 24px 12px 0;
  padding: 0 40px 0;
}

.jb-bio-card-content {
  display: flex;
  justify-content: space-between;
}

.jb-bio-card h3 {
  font-size: 20px;
  line-height: 38px;
  margin: 0;
}

.jb-bio-card-image {
  flex-shrink: 0;
}

.jb-image-caption {
  font-size: 20px;
  line-height: 28px;
}

#cloud-site .jb-bio-card-image img {
  padding: 0 0 0 12px;
}

.jb-bio-card-footer {
  border-top: solid 1px #f6f6f6;
  display: flex;
  justify-content: space-between;
  margin: 0 -40px;
  padding: 20px 40px;
}

.jb-bio-card-footer a {
  display: block;
}

.jb-bio-card .devsite-dialog-button {
  color: #039be5;
  cursor: pointer;
}

/* Press Logo Cards */
.jb-logo-card {
  background: #fff;
  display: flex;
  flex: 1 0 320px;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 5px 0;
  max-width: 100%;
  padding: 32px 0 0;
}

.jb-logo-card-footer {
  border-top: solid 1px #f6f6f6;
  flex: 0 0;
  padding: 20px 40px;
}

.jb-logo-card-content img {
  width: 100%;
}

.jb-logo-card-container {
  margin: 22px -5px 0;
 }

@media screen and (max-width: 640px) {
  .jb-logo-card-container {
    margin: 22px 0 0;
  }

  .jb-logo-card {
    margin: 10px 0 0;
  }
}

.jb-press-section {
  margin-bottom: 100px;
 }

.jb-press-section-side {
  flex: 0 0 450px;
  max-width: 100%;
}

.jb-press-section-main {
  flex: 1 0 450px;
  max-width: 100%;
  padding-right: 20px;
}

#cloud-site .jb-press-section-side img,
#cloud-site .jb-logo-card-content img {
  padding: 0;
}

.jb-press-bio {
  left: 50%;
  margin-left: -380px;
  padding: 0;
  top: 0;
  width: 760px;
}

.jb-press-bio-image {
  width: 100%;
}

.jb-press-bio .devsite-dialog-contents {
  margin: auto;
  max-width: 448px;
}

.jb-press-bio .devsite-dialog-close {
  cursor: pointer;
  font-size: 40px;
  position: absolute;
  top: 20px;
  right: 20px;
}

@media only screen and (max-width: 800px) {
  div.jb-press-bio {
    left: 50%;
    margin-left: -45%;
    width: 90%;
  }
}

/* Why google page styles */
.jb-customer-logo-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 52px auto;
  max-width: 1024px;
}

#cloud-site .jb-customer-logo-container img {
  display: block;
  flex: 0;
  margin: -1px;
  padding: 0;
}

.jb-security-heading {
  font-size: 24px;
  line-height: 36px;
}

        </style><style>
        /* Styles inlined from /css/maps-platform.css */
.contact-form .hidden,
.devsite-footer .devsite-footer-utility-button {
  display: none;
}

.contact-form select,
.contact-form input[type="email"],
.contact-form input[type="text"] {
  border: none;
  border-bottom: 2px solid #ebebeb;
  margin-top: 50px;
  padding: 0 0 5px 2px;
  width: 100%;
}

.contact-form input[type="tel"] {
  border: none;
  padding: 5px 0 5px 2px;
  width: 100%;
}

.contact-form .i18n_phone_number_input {
  margin-bottom: 0;
  margin-top: 45px;
}

.contact-form .i18n_phone_number_input tr:first-child {
  border: none;
  border-bottom: 2px solid #ebebeb;
}

.contact-form th.i18n_phone_number_input-menu.i18n_phone_number_input-loRes {
  background: none;
  height: 0;
  padding: 0;
}

.contact-form .goog-inline-block.i18n-phone-select-country-dropdown {
  line-height: 0;
}

.contact-form .i18n_phone_number_input-input {
  padding: 0;
}

.contact-form .error {
  color: #f00;
  font-style: italic;
  padding-left: 2px;
}

.contact-form .contact-form__select {
  height: 20px;
  max-width: none;
}

.contact-form .contact-form__input::placeholder,
.contact-form .contact-form__select {
  color: #212121;
  font: 16px/20px Roboto, sans-serif;
}

@media only screen and (min-width: 1280px) {
  .contact-form .is-3__xl:nth-child(3n+1) {
    grid-column-start: 1;
  }
}

        </style><style>
        /* Styles inlined from /css/maps/maps-platform.css */
.user-guide-hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.maps-table-row-highlight td {
  background: #d4d4d4;
  text-transform: uppercase;
}

.maps-underline {
  text-decoration: underline;
}

/* Smb frequently-asked-questions*/
#cloud-site .frequently-asked-questions .qa-item .question {
  margin-bottom: 24px;
}

/* Devsite standard site footer */
footer.devsite-footer-linkboxes,
.devsite-footer-linkboxes {
  height: 0;
  overflow: hidden;
}
devsite-language-selector {
  z-index: 1003;
}
.cloud-carousel__slide {
  overflow: hidden;
}

.devsite-dialog.devsite-henhouse-dialog {
  /*
   * This will override the padding set on regular DevSite dialog and allow the
   * iframe to span the whole page.
   */
  max-height: 100%;
  max-width: 100%;
}

.devsite-henhouse-dialog {
  height: 467px !important;
  width: 600px !important;
}

/* Button full-width */
@media handheld and (max-width: 480px),
    screen and (max-device-width: 480px),
    screen and (max-width: 780px) {
  #cloud-site .button {
    width: 100%;
  }
}

/* Modal */
.hh-modal {
  display: none;
}

.hh-modal.show {
  display: inline-block;
}

.hh-buttons .devsite-dialog-continue {
  display: none;
}

.hh-buttons .hh-default-button {
  display: none;
}

.hh-buttons .show {
  display: inline-block;
}

.hh-modal__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
  pointer-events: none;
  overflow: auto;
}

.hh-modal__container {
  max-width: 700px;
  width: 100%;
  height: auto;
  background: white;
  left: 0;
  top: 0;
  right: 0;
  margin: auto;
  pointer-events: all;
}

.hh-modal__header {
  margin: 25px 40px 50px;
  display: flex;
  align-items: center;
}

.hh-modal__content {
  padding: 0 40px 0;
  text-align: left;
}

.hh-modal__content input:focus {
  outline: #18417e;
  outline-style: auto;
}

.hh-modal__step-list {
  padding: 0 15px;
  font-size: 16px;
}

.hh-modal__step-list li {
  margin: 0;
  opacity: 0.6;
  padding-top: 10px;
}

.hh-modal__title {
  font-size: 24px;
}

.hh-modal__step-list li:first-child {
  font-weight: 500;
  opacity: 1;
}

.hh-modal__logo {
  display: block;
  margin-right: 0px;
  width: 48px;
  padding-right: 24px;
  height: auto;
}

/* Options */
.hh-options__container {
  display: flex;
  margin-top: 40px;
}

.hh-options__option {
  display: flex;
  flex-basis: 33%;
}

.hh-options__copy {
  position: relative;
}

.hh-options__title {
  margin: 0;
  font-size: 16px;
  line-height: initial;
  color: #565656;
}

.hh-options__copy p {
  margin: 0;
  font-size: 14px;
  line-height: initial;
  color: #9a9a9a;
}

.hh-options__copy:hover .hh-tooltip {
  display: block;
}

.hh-options__copy label {
  font-size: 18px;
  line-height: initial;
  margin-bottom: 10px;
  font-weight: 500;
  color: #464646;
  position: relative;
}


/* Buttons */
.hh-buttons {
  text-align: right;
  margin: 40px;
}

.hh-buttons__signed-in {
  color: #7bc62d;
  font-weight: 500;
  margin-bottom: 10px;
  display: none;
}

.hh-buttons__no-charge-msg {
    text-align: left;
    color: #9a9a9a;
    font-size: 12px;
    width: 350px;
    margin-left: 20px;
    float: left;
    line-height: 1.2;
}

/* Tooltip */
.hh-tooltip {
  display: none;
  position: absolute;
  background: white;
  box-shadow: #dedede 0 0 12px 1px;
  top: -80px;
  left: 40%;
  border-radius: 3px;
  padding: 10px 15px;
  z-index: 100;
  pointer-events: none;
  width: 300px;
}

.hh-tooltip__list {
  margin-bottom: 10px;
  padding: 0;
  list-style: none;
  font-weight: 500;
}

.hh-tooltip__list li {
  margin: 0;
  font-size: 14px;
  color: #6d6d6d;
}

.hh-tooltip__list:last-child {
  margin-bottom: 0;
}

.devsite-nav-list > .devsite-nav-item-heading:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.hh-api_label {
  margin-top: 10px;
  font-size: 16px;
  color: #464646;
}

.hh-api_list {
  padding: 0;
  list-style: none;
  font-weight: 500;
}

.hh-api_list li {
  margin: 0;
  font-size: 14px;
  color: #9a9a9a;
}

@media (max-width: 496px) {
  cloudx-jump-menu[open] {
    top: 113px;
  }
}

.maps-banner {
  align-items: center;
  background-color: #34a853;
  color: #fff;
  display: flex;
  font-family: Google Sans, Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  justify-content: center;
  padding: 10px;
}

        </style><style>
        /* Styles inlined from /css/multi-page2.css */
/* NEW COMPONENTIZED STYLES - MUST INCLUDE jb CLASS */

.maps-carousel .jb-customer-logo-container .jb-customer-logo {
  width: 160px;
  height: 160px;
}

.maps-carousel .jb-quote-image {
  margin: 0 calc(50% - 50vw);
}

.maps-carousel .jb-quote-text .lt-quote {
  color: #2b85e7;
  font-size: 60px;
  margin-left: -31px;
  vertical-align: middle;
}

.maps-carousel .jb-quote-text .rt-quote {
  color: #2b85e7;
  font-size: 60px;
  margin-left: 5px;
  vertical-align: middle;
}

.maps-carousel .jb-quote .jb-quote-resource--logo img {
  width: 170px;
}

#cloud-site .maps-cta-section .jb-hero-solutions {
  padding: 120px 64px 120px 126px;
}

.maps-carousel i.material-icons {
  color: #000;
}

.jb-quote-resources i.material-icons {
  color: #fff;
}

@media only screen and (max-width: 1024px) {
  #cloud-site .maps-cta-section .jb-hero-solutions {
    padding: 50px 0 0;
  }
}

#cloud-site .maps-cta-section .jb-hero .hero-title {
  color: #fff;
}

#cloud-site .jb-hero .button.button-plain {
  background: #fff;
  border: 1px solid #dfdfdf;
  color: #4285f4;
}

#cloud-site .jb-hero .button.button-plain:hover {
  background: #f8fafe;
}

.jb-hero-solutions.maps-full-bleed .jb-hero-content {
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
}

.jb-hero-solutions.maps-full-bleed .jb-hero-content .hero-title {
  max-width: 500px;
}

.jb-hero-solutions.maps-full-bleed .jb-hero-content .hero-subtitle {
  max-width: 412px;
}

.maps-std-section .jb-quote .jb-quote-image {
  background-position: center;
}

@media screen and (max-width: 1280px) {
  .maps-carousel .jb-quote-text .lt-quote {
    font-size: 40px;
    margin-left: -21px;
  }

  .maps-carousel .jb-quote-text .rt-quote {
    font-size: 40px;
    margin-left: 3px;
  }
}

@media only screen and (max-width: 1024px) {
  #cloud-site .maps-cta-section .jb-hero .hero-title {
    color: #424242;
  }

  .maps-cta-section .jb-hero-solutions .jb-hero-content {
    padding: 20px 50px 40px;
  }
}

/* END NEW COMPONENTIZED STYLES - MUST INCLUDE jb CLASS */

/* DEMO STYLES */
.iframe-large {
  height: 700px;
  min-width: 100%;
}

.iframe-small {
  height: 475px;
   min-width: 100%;
}

.kd-buttonbar {
  height: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  .kd-tabbutton {
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
    max-width: none;
  }
}
/* END DEMO STYLES */


/* DEMO STYLES */
.iframe-large {
  height: 700px;
  min-width: 100%;
}

.iframe-small {
  height: 475px;
   min-width: 100%;
}

.kd-buttonbar {
  height: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.kd-buttonbar .kd-tabbutton {
  -webkit-box-flex: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  max-width: none;
}

/* END DEMO STYLES */

.devsite-full-width-page .devsite-main-content {
  max-width: 1400px;
  padding: 0;
}

#cloud-site .full-bleed-right {
  margin-right: -10000px;
  padding-right: 10000px;
}

#cloud-site .full-bleed-right2 {
  margin: 0 calc(50% - 50vw) 0 300px;
}

html,
body {
  background-color: transparent;
}

.left-sidebar-container {
  background: #fff;
  bottom: 0;
  -webkit-box-shadow: 2px 0 2px rgba(0,0,0,0.1);
          box-shadow: 2px 0 2px rgba(0,0,0,0.1);
  line-height: 1.6em;
  position: absolute;
  top: 0;
  z-index: 1;
}

.left-sidebar-container,
.left-sidebar {
  min-width: 300px;
  width: 300px;
}

.left-sidebar {
  overflow:auto;
  position: fixed;
}

.left-sidebar::-webkit-scrollbar {
  height: 16px;
  width: 8px;
}
.left-sidebar::-webkit-scrollbar-button {
  height: 0;
  width: 0;
}
.left-sidebar::-webkit-scrollbar-button:start:decrement,
.left-sidebar::-webkit-scrollbar-button:end:increment {
  display: block;
}

.left-sidebar::-webkit-scrollbar-button:vertical:start:increment,
.left-sidebar::-webkit-scrollbar-button:vertical:end:decrement {
  display: none;
}
.left-sidebar::-webkit-scrollbar-track:vertical {
  background-clip: padding-box;
  border: 0 solid transparent;
}
.left-sidebar::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 1px 1px 0px rgba(0,0,0,0.1),
                      inset 0px -1px 0px  rgba(0,0,0,0.07);
  background-color: rgba(0, 0, 0, .2);
  min-height: 28px;
  padding-top: 100px;
}
.left-sidebar::-webkit-scrollbar-thumb:hover {
  -webkit-box-shadow: inset 1px 1px 1px rgba(0, 0, 0, .25);
  background-color: rgba(0, 0, 0, .4);
}
.left-sidebar::-webkit-scrollbar-thumb:active {
  -webkit-box-shadow: inset 1px 1px 3px rgba(0, 0, 0, .35);
  background-color: rgba(0, 0, 0, .5);
}
.left-sidebar::-webkit-scrollbar-thumb:vertical {
  border: 0 solid transparent;
  border-right: 5px solid transparent;
}
.left-sidebar::-webkit-scrollbar-track:hover {
   -webkit-box-shadow: inset 1px 0px 0px rgba(0, 0, 0, .1);
  background-color: rgba(0, 0, 0, .05);
}
.left-sidebar::-webkit-scrollbar-track:active {
  -webkit-box-shadow: inset 1px 0px 0px rgba(0, 0, 0, .14),
                      inset -1px -1px 0px  rgba(0, 0, 0, .07);
  background-color: rgba(0, 0, 0, .05);
}

.left-sidebar .title {
  color: #414141;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2em;
  padding: 66px 52px 19px 24px;
}

.left-sidebar .nav-links a {
  padding: 17px 52px 17px 24px;
}

#cloud-site .left-sidebar .nav-links a,
#cloud-site  .left-sidebar .nav-links a:visited {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: #757575;
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  line-height: 1em;
  text-decoration: none;
}

#cloud-site  .left-sidebar .nav-links a:hover {
  background: #f5f5f5;
  color: #757575;
  text-decoration: none;
}

#cloud-site .left-sidebar .nav-links a.selected {
  color: #0091ea;
}

#cloud-site .left-sidebar .nav-links a.sublink {
  font-weight: 400;
  line-height: 1.6em;
  padding-bottom: 12px;
  padding-left: 44px;
  padding-top: 12px;
}

.article-content {
  margin-left: 300px;
}

header.header {
  padding-top: 60px;
  padding-bottom: 80px;
}

.header .hero-title {
  color: #414141;
  font-size: 48px;
  line-height: 1.3em;
  margin-bottom: 30px;
}

.header .hero-title.white-text {
  color: #fff;
}

.header .hero-subtitle {
  color: #8a8a8a;
  font-family: Roboto,sans-serif;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5em;
  margin: 0 0 24px;
  padding-bottom: 0;
  width: 40%;
}

.header .hero-subtitle.full-width {
  width: 100%;
}

.header .hero-subtitle.white-text {
  color: #fff;
}

.header .hero-subtitle.header-page-links {
  margin-bottom: 0;
}

.maps-home-hero {
  background-image: url(https://screenshot.googleplex.com/wU56XxwhPxO.png);
  background-position: bottom;
  background-size: cover;
  margin-right: calc(50% - 50vw);
}

.maps-platform-hero .cta-container {
  margin-top: 16px;
}

.with-padding {
  padding-left: 4.65%;
  padding-right: 4.65%;
}

.with-margin {
  margin-left: 4.65%;
  margin-right: 4.65%;
}

.multi-section.small.top-pad {
  padding-top: 70px;
}

.multi-section.top-pad {
  padding-top: 80px;
}

.multi-section.top-pad-less {
  padding-top: 30px;
}

.section-container {
  padding: 80px 0;
}

.section-container.no-top-pad {
  padding-top: 0;
}

.section-container.small {
  padding: 70px 0;
}

.section.with-border {
  border-bottom: 1px solid #c6c6c6;
}

.multi-section .section {
  padding-bottom: 80px;
}


.section .title,
.section.alternate .title,
.section h1.title,
.section h2.title {
  color: #424242;
  font-weight: 300;
  letter-spacing: initial;
  margin: 0;
  margin-bottom: 32px;
  overflow: initial;
  padding: 0;
  -o-text-overflow: initial;
     text-overflow: initial;
}

.section .title.f-medium,
.section.alternate .title.f-medium ,
.section h1.title.f-medium,
.section h2.title.f-medium {
  font-weight: 400;
}

.section .title,
.section h1.title,
.section.alternate .title {
  font-size: 36px;
  line-height: 1.3;
}

.metrics-heading {
  color: #4285f4;
  font-size: 36px;
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 7px;
}

.section.alternate .title {
  margin-bottom: 16px;
}

.section h2.title {
  border: none;
  font-size: 24px;
  line-height: 1.5;
  padding-right: 0 !important;
}

.section .title.with-desc,
.section h1.title.with-desc,
.section h2.title.with-desc {
  margin-bottom: 6px;
}

.section .title.title-center {
  margin-bottom: 40px;
  text-align: center;
}

.section .title.no-margin {
  margin-bottom: 0;
}

.section .title.large-margin,
.section .desc.large-margin {
  margin-bottom: 60px;
}

.section .sub-title {
  margin-bottom: 32px;
}

.section .desc {
  color: #747474;
  font-size: 16px;
  line-height: 1.8em;
}

.alternate-left > *, .alternate-right > * {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  margin: 0;
}

.alternate-right > .img-container {
  margin-left: 52px;
  text-align: center;
}

.alternate-right > .img-container.is-r-precode {
  position: relative;
}

.section.alternate .alternate-right.no-top-pad {
  padding-top: 0;
}

.section.alternate .alternate-left.no-pad,
.section.alternate .alternate-right.no-pad {
  padding: 0;
}

.img-container.is-r-precode .code-container {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.img-container.is-r-precode .code-container pre {
  height: 100%;
  margin: 0;
  width: 100%;
}

.section.alternate .img-w-title-wrap .title > .img-container {
  display: none;
}

.bulleted-image-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.bulleted-image-list li {
  color: #747474;
  font-size: 16px;
  line-height: 1.8;
  margin: 0 0 16px 0;
  padding-left: 54px;
  position: relative;
}

.bulleted-image-list li:last-child {
  margin-bottom: 0;
}

.bulleted-image-list li:before {
  background: url("/images/storage/green-checkmark.svg") no-repeat;
  content: '';
  display: block;
  height: 24px;
  left: 0;
  position: absolute;
  top: 0;
  width: 24px;
}

.table-container.plain-table {
  padding: 10px;
  background: #fafafa;
}

#cloud-site .plain-table table {
  background: transparent;
  border-collapse: collapse;
  border-radius: initial;
  border: none;
  -webkit-box-shadow: none;
          box-shadow: none;
  margin-bottom: 0;
}

#cloud-site .plain-table table thead th,
#cloud-site .plain-table table tbody td {
  background: transparent;
  border: none;
  color: #424242;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  padding: 26px 40px 26px 10px;
  text-transform: initial;
}

#cloud-site .plain-table table thead th:first-of-type,
#cloud-site .plain-table table tbody tr td:first-of-type {
  min-width: 180px;
  font-weight: 500;
}


#cloud-site .plain-table tr {
  background: transparent;
  border: 0;
  border-bottom: 1px solid #e6e6e6;
}

#cloud-site .plain-table tbody tr:last-child {
  border-bottom: none;
}

.plain-table .devsite-table-wrapper {
  margin: 0;
}

.table-caption {
  margin-top:15px;
}

#cloud-site .cta-container .button {
  margin: 0 16px 0 0;
}

.partners-select-box {
  color: #424242;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 28px;
}

.partners-select-box md-select {
  margin: 0;
}

.partners-select-box .md-select-value,
.partners-select-box md-select:not([disabled]):focus .md-select-value {
  padding-left: 10px;
  padding-bottom: 6px;
}

.partners-select-box md-select:not([disabled]):focus .md-select-value {
  border-bottom-color: #0091ea;
}

md-select-menu md-content md-option[selected],
md-select-menu md-content md-option[selected]:focus {
  color: #0091ea;
}


/* Cards */

.flex-card-container {
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin-bottom: -24px;
  margin-right: -24px;
}

.flex-card.bg-light-gray {
  background-color: #fafafa;
}

.flex-card.bg-gray {
  background-color: #f6f6f6;
}

.flex-card {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  margin-bottom: 24px;
  margin-right: 24px;
}

a.flex-card,
.maps-metrics div.flex-card {
  -webkit-transition: -webkit-transform 0.3s,-webkit-box-shadow 0.3s;
  transition: -webkit-transform 0.3s,-webkit-box-shadow 0.3s;
  -o-transition: transform 0.3s,box-shadow 0.3s;
  transition: transform 0.3s,box-shadow 0.3s;
  transition: transform 0.3s,box-shadow 0.3s,-webkit-transform 0.3s,-webkit-box-shadow 0.3s;
}

a.flex-card:hover,
a.flex-card:focus,
.maps-pricing-carousel div.flex-card {
  -webkit-box-shadow: 0 4px 4px rgba(0,0,0,0.24), 0 0 4px rgba(0,0,0,0.12), 0 6px 18px rgba(0,0,0,0.12);
          box-shadow: 0 4px 4px rgba(0,0,0,0.24), 0 0 4px rgba(0,0,0,0.12), 0 6px 18px rgba(0,0,0,0.12);
  cursor: pointer;
  text-decoration: none;
  -webkit-transform: translate3d(0, -2px, 0);
          transform: translate3d(0, -2px, 0);
}

.maps-pricing-carousel div.flex-card {
  border-radius: 10px;
  cursor: inherit;
}

.flex-card .upper-title {
  color: #9b9b9b;
  font-size: 14px;
  font-weight: 500;
  line-height: 1em;
  margin-bottom: 14px;
  opacity: 0.7;
  text-transform: uppercase;
}

.flex-card .title {
  color: #414141;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 20px;
}

.flex-card .card-content {
  border-bottom: 1px solid #e4e4e4;
  padding: 32px 24px 28px 24px;
}

.flex-card .cta {
  color: #0091ea;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 1.1;
  padding: 18px 24px;
}


.partner-cards .flex-card .img-container,
.quickstart-cards .flex-card .img-container {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 32px;
  min-height: 74px;
}

.image-top-cards .flex-card .img-container {
  margin-top: 12px;
  margin-bottom: 32px;
}

.partner-cards .flex-card .img-container img {
  max-width: 100px;
  max-height: 60px;
}

.sticky-image-cards.flex-card-container {
  font-size: 0;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  line-height: 0;
  margin: 0;
}

.sticky-image-cards .flex-card {
  -webkit-box-flex: initial;
      -ms-flex: initial;
          flex: initial;
  margin: 0;
}

.quickstart-cards .flex-card {
  border-left: 3px solid #fb8c00;
}

.quickstart-cards .flex-card.blue-border {
  border-left-color: #4285f4;
}

.quickstart-cards .card-content {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

.features .flex-card-container {
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin-bottom: -50px;
  margin-right: -52px;
}

.features .flex-card {
  background: transparent;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  margin-bottom: 50px;
  margin-right: 52px;
  min-width: 300px;
}

.features .flex-card .title-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 26px;
}

.features .flex-card .title {
  margin-bottom: 16px;
}

.features .flex-card .img-container {
  margin-right: 24px;
}

.features .flex-card .img-container img {
  max-height: 48px;
}

.key-features .flex-card-container {
  margin-bottom: -80px;
}

.key-features .flex-card {
  margin-bottom: 80px;
}

.key-features .vert-align {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.features .flex-card .title,
.thumb-top-bleed-cards .flex-card .title {
  color: #424242;
  font-size: 24px;
  font-weight: 300;
  line-height: 1.5;
}

.features .flex-card .desc,
.thumb-top-bleed-cards .features .flex-card .desc {
  color: #747474;
  font-size: 16px;
  line-height: 1.8;
}

.thumb-top-bleed-cards .flex-card,
.partner-cards .flex-card,
.image-top-cards .flex-card,
.quickstart-cards .flex-card,
.key-features .flex-card,
.docs-cards .flex-card {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.thumb-top-bleed-cards .flex-card .title {
  margin-bottom: 20px;
}

.thumb-top-bleed-cards .flex-card img {
  width: 100%;
}

.thumb-top-bleed-cards .flex-card .card-content {
  border-bottom: none;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  padding: 42px 42px 0px 42px;
}

.thumb-top-bleed-cards .flex-card .cta {
  padding: 28px 42px;
  text-transform: uppercase;
}

.bg-img-cards .flex-card {
  background-position: right bottom;
  background-repeat: no-repeat;
  padding: 60px 52px 20px;
}

.bg-img-cards .flex-card {
  background-color: white;
  color: #747474;
  font-size: 16px;
  line-height: 1.8;
}

.bg-img-cards .flex-card .title {
  font-size: 36px;
  font-weight: 300;
  line-height: 1.3;
  margin-bottom: 22px;
}

.bg-img-cards .flex-card .body {
  width: 50%;
}

.bg-img-cards .flex-card .body .title,
.bg-img-cards .flex-card .customers .title {
  color: #424242;
  font-size: 24px;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 12px;
}

.bg-img-cards .customers .img-container {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  min-height: 84px;
}

.bg-img-cards .customers .img-container img {
  margin: 20px 40px 20px 0;
  max-height: 55px;
  max-width: 80px;
}

.bg-img-cards .body-sec {
  margin-bottom: 60px;
}

.bg-img-cards .common-use-case {
  margin-bottom: 50px;
}

.arrow-cards .flex-card .card-content {
  border: none;
}

.arrow-cards .flex-card .cta {
  padding: 0 24px 24px;
}

.docs-cards .flex-card .card-content,
.partner-cards .flex-card .card-content,
.image-top-cards .flex-card .card-content {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

.bleed-left-cards .flex-card {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.bleed-left-cards .flex-card .img-container {
  font-size: 0;
  line-height: 0;
}

.bleed-left-cards .flex-card .card-content {
  border: none;
  padding-left: 40px;
}

.image-wrap-right-cards .flex-card .card-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap-reverse;
      flex-wrap: wrap-reverse;
}

.image-wrap-right-cards .flex-card .img-container {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  min-width: 198px;
  padding-left: 24px;
}

.cross-4 .flex-card {
  min-width: 20%;
}

.cross-3 .flex-card {
  min-width: 27%;
}

.cross-2 .flex-card,
.cross-2-1 .flex-card {
  min-width: 40%;
}

.cross-1 .flex-card {
  min-width: 86%;
}

.flex-card.ready-to-go {
  background-size: cover;
  height: 350px;
}

.flex-card.ready-to-go-maps {
  background-image: url(https://screenshot.googleplex.com/Pki7xB5Wcb4.png);
}

.flex-card.ready-to-go-routes {
  background-image: url(https://screenshot.googleplex.com/x3AJsPvPpvA.png);
}

.flex-card.ready-to-go .title,
.flex-card.ready-to-go .body{
  color: #fff;
}

.banner-section-container {
  color: #424242;
  padding-bottom: 80px;
  padding-top: 80px;
  text-align: center;
}

.plain-banner-bottom .main {
  font-size: 48px;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 30px;
}

.plain-banner-bottom .body-title {
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2em;
  margin-bottom: 12px;
}

.plain-banner-bottom .body {
  color: #616161;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8em;
  margin-bottom: 40px;
}

.carousel-outer {
  padding-left: 70px;
  padding-right: 70px;
  position: relative;
  -webkit-transition: height linear 0.318s;
  -o-transition: height linear 0.318s;
  transition: height linear 0.318s;
}

.carousel-outer > .left-arrow,
.carousel-outer > .right-arrow {
  background: url(/images/locations/icons/left-arrow.svg) no-repeat;
  background-position: center;
  bottom: 0;
  cursor: pointer;
  outline: none;
  position: absolute;
  top: 0;
  width: 50px;
}

.carousel-outer > .right-arrow {
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}

.carousel-outer > .left-arrow {
  left: 0;
}

.carousel-outer > .right-arrow {
  right: 0;
}

.carousel-outer > .left-arrow:hover,
.carousel-outer > .right-arrow:hover {
  background-color: rgba(0,0,0,0.02);
}

.carousel-inner {
  height: 100%;
  overflow: hidden;
  position: relative;
}

.c-item {
  left: 100%;
  position: absolute;
  width: 100%;
}

.c-item.selected {
  position: relative;
  left: 0;
}

.c-item.selected,
.c-item.is-left.selected-remove,
.c-item.is-left.selected-add,
.c-item.is-right.selected-remove,
.c-item.right.selected-add {
  -webkit-transition: left linear 0.318s;
  -o-transition: left linear 0.318s;
  transition: left linear 0.318s;
}

.c-item.is-left.selected-remove,
.c-item.is-left {
  left: -100%;
}

.c-item.selected.selected-add {
  left: 0;
  position: absolute;
  z-index: 10;
}

.customer-quote-container {
  color: #4a5960;
  font-size: 24px;
  font-weight: 300;
  line-height: 1.8;
  text-align: center;
}

.customer-quote-container .img-container {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  min-height: 140px;
}

.customer-quote-container .customer-logo img {
  height: 50px;
}

.my-carousel-item {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
}

.my-carousel .img-right {
  margin: 0 auto;
}

.my-carousel-item .customer-quote-container {
  -ms-flex-preferred-size: 55%;
      flex-basis: 55%;
  text-align: left;
}

.customer-quote-container .quote-by {
  color: #9d9d9d;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;
  margin-top: 20px;
}

.customer-quote-container .customer-uses {
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
}

.customer-quote-container .customer-link {
  display: block;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
}

/* Modal CSS Styles */

.maps-video-dialog {
  left: 0;
  margin: auto;
  max-width: 960px;
  padding: 0;
  right: 0;
  top: 20px;
  width: 100%;
}

.partner-card-modal-x {
  cursor: pointer;
  float: right;
  font-size: 36px;
  font-weight: 300;
  margin: 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
      transform: rotate(45deg);
  -webkit-transform-origin: 12px 8px;
  -ms-transform-origin: 12px 8px;
      transform-origin: 12px 8px;
  width: 15px;
}

.maps-dialog-contents {
  overflow: hidden;
  padding: 5px;
}

.maps-video-frame {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.maps-video-wrapper {
  height: 0;
  margin-top: 25px;
  padding-bottom: 56.25%;
  padding-top: 25px;
  position: relative;
}

.maps-customer-quote {
  font-family: "Google Sans", "Arial", "sans-serif";
  font-size: 32px;
  line-height: 42px;
}

.maps-quote-start {
  margin-left: -35px;
  vertical-align: top;
}

.maps-quote-end {
  vertical-align: top;
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}

.maps-full-bleed {
  margin: 0 calc(50% - 50vw);
}

.maps-benefits .benefit-img {
  width: 400px;
}

.maps-benefits .unity-img {
  width: 100%;
}

.maps-benefits .unity-logo {
  margin-top: 30px;
  width: 120px;
}

.maps-benefits .copy {
  -ms-flex-preferred-size: 55%;
      flex-basis: 55%;
}

.maps-benefits .img-right {
  -ms-flex-preferred-size: 35%;
      flex-basis: 35%;
  text-align: right;
}

.maps-benefits .img-left-smaller,
.maps-benefits .img-right-smaller {
  -ms-flex-preferred-size: 35%;
      flex-basis: 35%;
  text-align: center;
}

.maps-benefits .img-left-smaller img,
.maps-benefits .img-right-smaller img {
  width: 300px;
}

.maps-benefits .img-left {
  -ms-flex-preferred-size: 35%;
      flex-basis: 35%;
  text-align: left;
}

.maps-benefits .benefit-title {
  color: #626262;
  font-family: "Google Sans", "Arial", "sans-serif";
  font-size: 24px;
  font-weight: 500;
  line-height: initial;
  margin-right: 50px;
  margin-top: 30px;
}

.maps-benefits .benefit-text {
  color: #8c8c8c;
  font-family: Roboto,sans-serif;
  font-size: 16px;
  line-height: 22px;
  margin-right: 50px;
  margin-top: 20px;
}

.maps-benefits .copy-right .benefit-title,
.maps-benefits .copy-right .benefit-text,
.maps-benefits .copy-right .unity-logo {
  margin-left: 40px;
}

.maps-bg-gray {
  background-color: #f8f9fa;
}

.maps-bg-darkgray {
  background-color: #f0f0f0;
  padding-top: 60px;
}

.maps-iframe-container {
  height: 950px;
  min-width: 100%;
}

.maps-demo-container {
  height: 700px;
  min-width: 100%;
}

.maps-header {
  background-position: right;
  background-size: cover;
}

.maps-header-routes {
  background-image: url(/images/maps-platform/routes_hero_2x.jpg);
}

.maps-header-places {
  background-image: url(/images/maps-platform/places_hero_2x.jpg);
}

.maps-header-maps {
  background-image: url(/images/maps-platform/maps_hero_2x.jpg);
}

.maps-video-header,
#cloud-site .maps-platform-hero {
  position: relative;
  min-height: 60vh;
  /* max-height: should be there for taller screens*/
}

.maps-video-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.maps-video-header .header-content,
.maps-platform-hero .jb-hero-content {
  width: 100%;
}

#cloud-site .maps-platform-hero .hero-title,
#cloud-site .maps-platform-hero .hero-subtitle {
  color: #fff;
}

.maps-video-header .bg-header-video {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.maps-video-header .bg-header-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
  z-index: -1;
}

.maps-header .hero-title {
  margin: 30px 0 10px;
}

.maps-ctas {
  background-image: url(https://screenshot.googleplex.com/HqosZQ5k9ON.png);
}

.maps-gaming-ctas {
  background-image: url(/images/maps-platform/get-started_3.jpg);
}

.maps-ctas .hero-title {
  color: #fff;
  margin-bottom: 20px;
  margin-top: 70px;
}

.maps-metrics,
.maps-features {
  padding-top: 30px;
  padding-bottom: 30px;
}

.maps-std-section .flex,
.maps-metrics .flex {
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.maps-metrics .metric-block {
  -ms-flex-preferred-size: 24%;
      flex-basis: 24%;
  text-align: center;
}

/* Don't need this?
.maps-metrics .left-just .metric-block {
  text-align: left;
}
*/

.maps-metrics.maps-metrics-home {
  background: #1a73e8;
}

.maps-features-block {
  -ms-flex-preferred-size: 30%;
      flex-basis: 30%;
  margin-bottom: 30px;
  text-align: left;
}

.maps-features-comment {
  -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
  margin-bottom: 30px;
  text-align: center;
}

.maps-demo {
  padding-bottom: 30px;
  padding-top: 30px;
}

.maps-metrics .metric-title {
  color: #626262;
  font-family: "Google Sans", "Arial", "sans-serif";
  font-size: 36px;
  font-weight: 600;
  line-height: initial;
}

.maps-pricing-carousel .maps-metrics .metric-title {
  font-size: 42px;
}

.maps-metrics.maps-metrics-home .metric-title {
  color: #fff;
}

.maps-subtitle {
  font-family: "Google Sans", "Arial", "sans-serif";
  font-size: 22px;
  letter-spacing: .5px;
  margin-bottom: 20px;
  color: #626262;
  font-weight: 600;
}

.maps-solutions .cta {
  color: #0091ea;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 1.1;
  text-transform: uppercase;
}

.maps-copy {
  font-family: Roboto,sans-serif;
  font-size: 16px;
  margin-bottom: 20px;
  color: #626262;
}

.maps-copy-large {
  color: #8a8a8a;
  font-family: Roboto,sans-serif;
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 20px;
}

.maps-copy-large ul {
  margin-top: -8px;
}

.maps-copy-title {
  font-family: Roboto,sans-serif;
  font-size: 16px;
  margin-bottom: 5px;
  color: #626262;
  font-weight: 600;
}

.maps-metrics-home .maps-copy,
.maps-metrics-home .maps-subtitle {
  color: #fff;
}

.maps-std-section .maps-pricing-carousel .centered-subtitle {
  margin-bottom: 0;
}

.maps-pricing-carousel {
  padding-bottom: 80px;
}

.maps-pricing-carousel .maps-metrics {
  padding: 30px 80px;
}

.maps-pricing-carousel .maps-subtitle {
  font-size: 26px;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 40px;
}

.maps-pricing-carousel .maps-subtitle:nth-of-type(2) {
  margin-top: -10px;
}

.maps-pricing-carousel .flex-card .card-content {
  border-bottom: 0;
}

.maps-pricing-carousel .flex-card.flex-card-empty {
  background: initial;
    -webkit-box-shadow: initial;
          box-shadow: initial;
  cursor: pointer;
  text-decoration: none;
  -webkit-transform:  initial;
          transform:  initial;
}

.maps-pricing-carousel .maps-metrics {
  background-color: inherit;
  box-shadow: inherit;
}

.maps-pricing-carousel div.flex-card.cross-2 {
  box-shadow: inherit;
  margin: 0;
}

.maps-pricing-carousel .maps-metrics.cross-2 {
  padding: 30px;
}

.maps-metrics .metric-block.maps-pricing-metric {
  background-color: #fff;
  flex-basis: 50%;
}

.flex-card .card-content.maps-pricing-metric {
  padding: 40px 24px;
}

.flex-card .card-content.maps-pricing-copy {
  padding: 80px 50px 50px;
}

#cloud-site .maps-metrics .maps-pricing-metric h3 {
  margin: 20px 0 10px;
}

.maps-pricing-carousel .maps-metrics .maps-pricing-metric .metric-title {
    font-size: 54px;
}

.maps-pricing-carousel .maps-pricing-metric .maps-subtitle {
    margin-bottom: 20px;
}

.maps-metrics .metric-block.maps-pricing-copy {
  background-color: #f4f4f4;
  flex-basis:50%;
  text-align: left;
}

.maps-no-vert-pad {
  padding-bottom: 0;
  padding-top: 0;
}

.maps-std-section .centered-heading {
  color: #626262;
  font-family: "Google Sans", "Arial", "sans-serif";
  font-size: 36px;
  font-weight: 500;
  line-height: initial;
  margin-bottom: 60px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
}

.maps-std-section .centered-heading-wsub {
  margin-bottom: 0;
}


/* Don't need this?
.maps-std-section .centered-heading.left-just {
  padding-left: 0;
  text-align: left;
}
*/

.maps-std-section .centered-subtitle {
  color: #8c8c8c;
  font-family: Roboto,sans-serif;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 50px;
  margin: 10px auto 40px;
  max-width: 750px;
  text-align: center;
}

.maps-products {
  padding-top: 30px;
}

.maps-products img {
  margin-bottom: 20px;
}

.maps-carousel {
  margin-left: auto;
  margin-right: auto;
  max-width: 1600px;
}

.maps-carousel-item {
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
  display: block;
  width: 100%;
}

.maps-carousel-item-inner {
background-color: #f6f6f6;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
height: 400px;
left: 0;
margin: 0 auto;
right: 0;
top: 300px;
width: 75%;
z-index: 2;
-webkit-transform: translateY(-200px);
    -ms-transform: translateY(-200px);
        transform: translateY(-200px);
margin-bottom: -200px;
}

.my-carousel-item .customer-quote-container.maps-quote-container {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-preferred-size: 70%;
      flex-basis: 70%;
  padding: 40px 70px;
}

.maps-carousel-logo {
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-preferred-size: 30%;
      flex-basis: 30%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.maps-carousel-logo-img {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
  margin: 0 auto;
  max-width: 150px;
}

.maps-carousel-watch {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background-color: #2b85e7;
  -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
}

.maps-carousel-watch:hover {
  background-color: #2a62d7;
}

.maps-carousel-watch-text {
  color: #fff;
  font-family: "Google Sans", "Arial", "sans-serif";
  font-size: 16px;
  font-weight: 600;
  margin: 0 auto;
  text-transform: uppercase;
}

.maps-carousel-watch-text img {
  vertical-align: middle;
}

.centered-heading.maps-docs-heading {
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 30px;
  margin-top: 0;
}

.maps-customer-quote .lt-quote {
  color: #2b85e7;
  font-size: 60px;
  margin-left: -31px;
  vertical-align: middle;
}

.maps-customer-quote .rt-quote {
  color: #2b85e7;
  font-size: 60px;
  margin-left: 5px;
  vertical-align: middle;
}

#cloud-site .cta-container .button.maps-docs-button {
  background-color: #fff;
  border: 1px solid #dfdfdf;
  color: #4285f4;
}

#cloud-site .cta-container .button.maps-docs-button:hover {
  background-color: #f8fafe;
}

#cloud-site .button.button-cloud.maps-hero-cta {
  background: #4285f4 16px 12px no-repeat;
  color: #fff;
  padding-left: 48px;
}

#cloud-site header.maps-header h1 {
  font-size: 48px;
  line-height: 1.3em;
  margin: 30px 0 10px;
  text-transform: inherit;
}

#cloud-site header.maps-header h2 {
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5em;
  margin: 0 0 24px;
}

#cloud-site .maps-metrics h3 {
  margin: 16px 0 3px;
}

#cloud-site .maps-features .flex,
#cloud-site .maps-metrics .flex {
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

#cloud-site header.maps-full-bleed {
  margin: 0 calc(50% - 50vw);
  max-width: inherit
}

#cloud-site header.maps-header.maps-ctas h1 {
  margin-bottom: 20px;
  margin-top: 70px;
}


#cloud-site .customers.maps-customers .flex {
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

#cloud-site .customers.maps-customers .flex > div {
  -ms-flex-preferred-size: 30%;
      flex-basis: 30%;
  height: inherit;
  width: inherit;
  background: #fff;
  margin: 8px;
}

.maps-customers .customers-title {
  font-size: 20px;
  font-weight: 500;
}

.maps-customers .company-logo {
  display: block;
  height: 30px;
  margin: auto 0 0;
  -o-object-fit: contain;
     object-fit: contain;
  -o-object-position: left;
     object-position: left;
}

.maps-customers a.offical-site {
  display: block;
  font-weight: 500;
  margin-top: 10px;
  text-transform: uppercase;
}

.maps-view-docs {
  padding-top: 0;
  padding-bottom: 20px;
}

.maps-flex-wrap {
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}

.maps-video-symbol {
  background-image: url(https://screenshot.googleplex.com/LqbX2vQd8yM.png);
  display:inline-block;
  height: 35px;
  margin-right: 5px;
  margin-top: -2px;
  vertical-align: middle;
  width:40px;
}

.general-hero__video {
    height: 100%;
    left: 0;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: 50% 50%;
    object-position: 50% 50%;
    position: absolute;
    top: 0;
    width: 100%;
    -webkit-filter: brightness(0.6);
    filter: brightness(0.6);
}

.maps-logo-card {
  width: 164px;
}

.flex-card-container.sticky-image-cards.maps-logo-cards {
  max-width: 1000px;
}

#cloud-site .button.button-cloud.maps-hero-cta.maps-white-cta {
  background-color: #fff;
  border: 1px solid #dfdfdf;
  color: #4285f4;
}

#cloud-site .button.button-cloud.maps-hero-cta.maps-white-cta:hover {
  background-color: #f8fafe;
}


#cloud-site .customers.maps-customers .flex .maps-customer-card {
    -ms-flex-preferred-size: 30%;
        flex-basis: 30%;
    height: inherit;
    width: inherit;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
}

.maps-customer-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  height: unset;
  flex-grow: 1;
}

.maps-gaming-hero-container {
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
}

@media screen and (max-width: 1439px) {
  .maps-carousel-item-inner {
    width: 90%;
  }

  .maps-customer-quote {
    font-size: 28px;
    line-height: 32px;
  }

  .maps-customer-quote .lt-quote,
  .maps-customer-quote .rt-quote  {
    font-size: 50px;
  }

  .maps-customer-quote .lt-quote {
    margin-left: -25px;
  }
}

@media screen and (max-width: 1024px) {
  .devsite-expand-section-nav,
  .devsite-nav-responsive-back {
    margin: 12px 16px 12px 0;
  }

  .left-sidebar-container {
    display: none !important;
  }

  .article-content {
    margin-left: 0px;
  }

  .bg-img-cards .flex-card {
    background-image: none;
  }

  .bg-img-cards .flex-card .body {
    width: initial;
  }

  .with-padding.maps-carousel {
    padding-left: 0;
    padding-right: 0;
  }

  .maps-full-bleed .carousel-outer {
    padding-left: 50px;
    padding-right: 50px;
  }

  .my-carousel-item .customer-quote-container.maps-quote-container {
    padding: 40px 50px;
  }

  .maps-video-header,
  #cloud-site .maps-platform-hero {
    min-height: inherit;
  }

  .maps-platform-hero .jb-hero-content {
    padding-bottom: 40px;
  }

  #cloud-site .maps-platform-hero .hero-title,
  #cloud-site .maps-platform-hero .hero-subtitle {
    color: #424242;
  }

  #cloud-site .maps-video-header .hero-title,
  #cloud-site .maps-video-header .hero-subtitle {
    color: #fff;
  }
}


@media (max-width: 840px) {
  header.header {
    padding-top: 44px;
    padding-bottom: 50px;
  }

  .header .hero-title {
    font-size: 40px;
    margin-bottom: 8px;
  }

  .header .hero-subtitle {
    font-size: 18px;
    line-height: 1.6em;
    margin-bottom: 28px;
  }

  .bulleted-image-list li {
    margin-bottom: 14px;
    padding-left: 44px;
  }

  .cross-4 .flex-card,
  .cross-3 .flex-card {
    min-width: 40%;
  }

  .cross-2-1 .flex-card {
    min-width: 86%;
  }

  .with-padding {
    padding-left: 5.2%;
    padding-right: 5.2%;
  }

  .with-margin {
    margin-left: 5.2%;
    margin-right: 5.2%;
  }

  .section-container {
    padding: 70px 0;
  }
  .multi-section.top-pad {
    padding-top: 70px;
  }
  .multi-section .section {
    padding-bottom: 70px;
  }

  .section-container.small {
    padding: 60px 0;
  }

  .section .title.large-margin,
  .section .desc.large-margin {
    margin-bottom: 32px;
  }

  .section .title.with-desc {
    margin-bottom: 8px;
  }

  .alternate-right.img-wrap > .img-container,
  .alternate-left.img-wrap > .img-container {
    margin-left: 0;
    margin-top: 40px;
    min-width: 100%;
  }

  .img-w-title-wrap > .img-container {
    display: none;
  }

  .section.alternate .img-w-title-wrap .title {
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
    font-size: 30px;
    line-height: 1.4em;
    margin-bottom: 16px;
  }
  .section.alternate .img-w-title-wrap .title > .img-container {
    display: initial;
    margin-left: 44px;
  }
  .section.alternate .img-w-title-wrap .title > * {
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
  }

  .img-container.is-r-precode .code-container {
    position: initial;
  }

  .img-container.is-r-precode .code-container pre {
    height: auto;
    width: auto;
  }

  #cloud-site .features-table table thead th,
  #cloud-site .features-table table tbody td {
    font-size: 14px;
    padding: 20px 40px 20px 10px;
  }

  .scrollable-img-cont {
    overflow-x: auto;
    padding-bottom: 15px;
  }

  .scrollable-img-cont img {
    max-width: 750px;
  }

  .flex-card-container.bg-img-cards {
    margin-bottom: -24px;
  }

  .bg-img-cards .flex-card {
    margin-bottom: 24px;
    padding: 50px 44px 30px;
  }

  .bg-img-cards .customers .img-container {
    min-height: 56px;
  }

  .banner-section-container {
    padding-bottom: 70px;
    padding-top: 70px;
  }

  .plain-banner-bottom .main {
    font-size: 40px;
    line-height: 1.3;
    margin-bottom: 30px;
  }

  .plain-banner-bottom .body-title {
    margin-bottom: 14px;
  }

  #cloud-site .full-bleed-right {
    margin-right: -20px;
    padding-right: 37px;
  }

  .desc-maps {
    -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
            order: 2;
  }

  .img-container.img-container-maps {
    -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
    margin: 0 0 20px;
    -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
            order: 1;
    text-align: center;
  }

  .maps-customer-quote {
    font-size: 24px;
    line-height: 30px;
  }

  .maps-pricing-carousel .cross-3 .flex-card {
    flex-grow: 0;
    min-width: 44%;
  }

  .maps-pricing-carousel .flex-card-container {
    justify-content: space-around;
  }

  .maps-metrics .metric-block.maps-pricing-metric,
  .maps-metrics .metric-block.maps-pricing-copy {
    flex-basis: 100%;
  }

  .maps-metrics .maps-pricing-copy .maps-copy {
    margin: 0px;
    text-align: left;
  }

  .maps-pricing-carousel .maps-metrics.cross-2 {
    padding: 30px 0;
  }

  .flex-card .card-content.maps-pricing-copy {
    padding: 50px 40px;
  }
}


@media (max-width: 780px) {
  #cloud-site .cta-container .button {
    margin: 0 0 16px 0;
  }

  #cloud-site .cta-container .button:last-child {
    margin-bottom: 0;
  }

  .bg-img-cards .flex-card .body {
    width: initial;
  }

  .maps-header {
    height: 250px;
  }

  .maps-header .l-max-width-standard {
    margin-top: 230px;
  }

  .maps-video-header {
    min-height: 120px;
  }

  .maps-video-header .hero-title,
  .maps-video-header .hero-subtitle {
    color: #424242;
  }

  .maps-video-header .bg-header-video {
    max-height: 30%;
  }

  .maps-video-header .bg-header-video video {
    object-position: top right;
  }

  .maps-video-header .header-content {
    background-color: #fff;
    margin-top: 32%;
    padding-top: 10px;
  }

  .maps-platform-hero .jb-hero-content {
    padding-top: 10px;
  }

  .header .hero-subtitle {
    width: 80%;
  }

  .maps-metrics .metric-block {
    -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
  }

  .maps-metrics .maps-copy {
    display: block;
    -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
    max-width: 400px;
    text-align: center;
    margin: 20px auto;
  }

  .maps-benefits .img-left,
  .maps-benefits .img-left-smaller,
  .maps-benefits .img-right,
  .maps-benefits .img-right-smaller {
    -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
    text-align: center;
  }

  .maps-benefits .copy {
    -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
            order: 2;
  }

  .maps-benefits .benefit-title,
  .maps-benefits .benefit-text {
    margin-left: 40px;
  }

  .maps-customer-quote {
    font-size: 22px;
    line-height: 26px;
  }

  .my-carousel-item .customer-quote-container.maps-quote-container {
    -ms-flex-preferred-size: 50%;
        flex-basis: 50%;
        padding: 40px;
  }

  .maps-carousel-logo {
    -ms-flex-preferred-size: 35%;
        flex-basis: 35%;
        flex-direction: row;
  }

  .maps-customer-quote .lt-quote,
  .maps-customer-quote .rt-quote  {
    font-size: 35px;
  }

  .maps-customer-quote .lt-quote {
    margin-left: -20px;
  }

  #cloud-site .customers.maps-customers .flex {
    padding-left: 5.2%;
    padding-right: 5.2%;
  }

  #cloud-site .customers.maps-customers .flex .maps-customer-card {
    -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
    margin-bottom: 50px;
  }

  #cloud-site .maps-header .button.button-cloud.maps-hero-cta.maps-white-cta {
    border: 1px solid #c7c6c6;
  }

  .maps-ctas {
    height: 45vh;
  }

  .maps-header.maps-ctas .l-max-width-standard {
    margin-top: 0;
  }

  .maps-carousel-item-inner {
    flex-direction: column;
  }

  .customer-quote-container .quote-by {
    line-height: .6;
  }

  #cloud-site .maps-video-header .hero-title,
  #cloud-site .maps-video-header .hero-subtitle {
    color: #424242;
  }

  /* Don't need this?
  .maps-metrics .left-just .maps-copy {
    margin: 20px 0;
    max-width: 100%;
    text-align: left;
  }
  */
}

/** Mobile View kicks in at 600 */
@media (max-width: 600px) {
  .header .hero-subtitle {
    margin-bottom: 30px;
  }

  .section-container {
    padding: 60px 0;
  }

  .section-container.small {
    padding: 50px 0;
  }

  .section.alternate .img-w-title-wrap .title > .img-container {
    margin-bottom: 36px;
    margin-left: 0;
    min-width: 100%;
  }

  .partners-with-menu-selection .section-container {
    padding-top: 0;
  }

  .bulleted-image-list li {
    padding-left: 40px;
    margin-bottom: 16px;
  }

  .image-wrap-right-cards .flex-card .img-container {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    margin-bottom: 32px;
    min-height: 74px;
    min-width: 100%;
    padding-left: 0;
  }

  .cross-4 .flex-card,
  .cross-3 .flex-card,
  .cross-2 .flex-card {
    min-width: 80%;
  }

  .banner-bottom-section {
    padding: 60px 0;
  }

  .plain-banner-bottom .main {
    margin-bottom: 20px;
  }

  .plain-banner-bottom .body-title {
    margin-bottom: 14px;
  }

  .plain-banner-bottom .body {
    margin-bottom: 30px;
  }

  #cloud-site .is-visible-inline-mobile {
    display: inline !important;
  }

  .is-hidden-mobile-600 {
    display: none !important;
  }

  .maps-customer-quote {
    font-size: 16px;
    line-height: 18px;
  }

  .my-carousel-item .customer-quote-container.maps-quote-container {
    padding: 30px 25px;
  }

  .customer-quote-container .quote-by {
    font-size: 13px;
    line-height: 1.2;
    margin-top: 8px;
  }

  .maps-customer-quote .lt-quote, .maps-customer-quote .rt-quote {
    font-size: 30px;
  }

  .maps-customer-quote .lt-quote {
    margin-left: -15px;
  }

  .maps-video-symbol {
    height: 35px;
    vertical-align: middle;
    width: 50px;
    background-repeat: no-repeat;
    margin: 0 auto;
    display: block;
    text-align: center;
  }

  .maps-carousel-logo-img {
    max-width: 110px;
  }

  .maps-features-block {
    -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
  }
}

.product-card-header {
  border-radius: 5px 5px 0 0;
  padding: 30px 20px;
  position: relative;
  display: block;
  overflow: visible;
  font-size: 28px;
  color: #fff;
}

.product-card-header-maps {
  background-color: #1b9956;
}

.product-card-header-routes {
  background-color: #4285f4;
}

.product-card-header-places {
  background-color: #ea4236;
}

.product-card-header-navsdk {
  background-color: #ffbc42;
}

.product-card-header img {
  height: 104px;
  position: absolute;
  right: 0;
  top: -20px;
}

.product-card-header-navsdk img {
  top: -16px;
}

.thumb-top-bleed-cards .flex-card .product-card-header img {
  width: inherit;
}

.thumb-top-bleed-cards .flex-card .card-content.product-card-content {
  padding: 20px;
}

.thumb-top-bleed-cards .product-card-content ul {
  line-height: 20px;
  list-style: none;
  padding-left: 0;
}

.thumb-top-bleed-cards .flex-card .cta.product-card-cta {
  padding: 20px;
  text-transform: capitalize;
}

.cta.product-card-cta .obround-button {
  border: 2px solid #0091ea;
  border-radius: 30px;
  display: inline-block;
  padding: 10px 15px 9px;
  -webkit-transition: .2s;
  -o-transition: .2s;
  transition: .2s;
}

.cta.product-card-cta .obround-button:hover {
  color: #fff;
  background-color: #0091ea;
}

        </style>        
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
                    <a href="/maps-platform"              class="devsite-breadcrumb-link gc-analytics-event"
              data-category="Site-Wide Custom Events"
              data-label="Breadcrumbs"
              data-value="2"
          >
            Google Maps Platform
      
  </a>
        </li>
  </ul>
          </div>

        
    <devsite-toc class="devsite-nav" devsite-toc-embedded
                 disabled>
    </devsite-toc>

    <div class="devsite-article-body clearfix
      devsite-no-page-title"
            >

              
  <article id="cloud-site" class="l-fixed-width maps-hero-modifier">
    
    <!-- HERO TEMPLATE -->
    
    
    
    

    

<header class="hero jb-hero jb-hero-solutions maps-full-bleed maps-platform-hero"
        style="background-image: url(/images/maps-platform/maps_hero4_2x.jpg);">
    <div class="jb-hero-content">
      <h1 class="hero-title" id="welcome-to-google-maps-platform" data-text="Welcome to  Google Maps Platform" tabindex="0">Welcome to <br> Google Maps Platform</h1>
      
      <div class="hero-subtitle">Explore where real-world insights and immersive location experiences can take your business
      
    </div>
      
      
      <div class="hero-additional-content">
      <div class="cta-container">
        <a href="https://console.cloud.google.com/google/maps-apis/start"
           class="cloud-button cloud-button--primary maps-hero-cta get-started-trigger"
           track-type="getStarted" track-name="buttonClick" track-metadata-eventDetail="hero">
           Get Started
        </a>
      </div>
      </div>
      
    </div>
</header>

      <div class="multi-section maps-metrics maps-full-bleed maps-metrics-home">
        <section class="alternate with-padding l-max-width-standard">
          <div class="flex">
            <div class="metric-block">
              <h3 class="metric-title" id="99" data-text="99%" tabindex="0">99%</h3>
              <div class="maps-subtitle">coverage of the world</div>
              <div class="maps-copy">
                Build with reliable, comprehensive data for over 200 countries and territories.</div>
            </div>
            <div class="metric-block">
              <h3 class="metric-title" id="25-million" data-text="25 million" tabindex="0">25 million</h3>
              <div class="maps-subtitle">updates daily</div>
              <div class="maps-copy">Count on accurate, real-time location information.</div>
            </div>
            <div class="metric-block">
              <h3 class="metric-title" id="1-billion" data-text="1 billion" tabindex="0">1 billion</h3>
              <div class="maps-subtitle">
                monthly active users</div>
              <div class="maps-copy">Scale confidently, backed by our infrastructure.</div>
            </div>
          </div>
        </section>
      </div>
      <div id="products" class="multi-section maps-full-bleed maps-bg-darkgray maps-std-section maps-products">
        <section class="section with-padding l-max-width-standard">
          <h3 class="centered-heading left-just" id="explore-products" data-text="Explore products" tabindex="0">Explore products</h3>
          <div class="flex-card-container thumb-top-bleed-cards cross-3">
            <a href="/maps-platform/maps"
               class="flex-card"
               track-type="exploreProductsCard"
               track-name="cardClick"
               track-metadata-eventDetail="bodyExploreProductsMaps">
              <img src="/images/maps-platform/complementary_maps9.png"
                   srcset="https://cloud.google.com/images/maps-platform/complementary_maps9_2x.png 2x"
                   alt="">
              <div class="card-content product-card-content">
                <div class="maps-subtitle">Maps</div>
                <div class="desc">
                  Build customized, agile experiences that bring the real world to your users with
                  static and dynamic maps, Street View imagery, and 360° views.
                </div>
              </div>
              <div class="cta product-card-cta">
                <div>LEARN MORE</div>
              </div>
            </a>
            <a href="/maps-platform/routes"
               class="flex-card"
               track-type="exploreProductsCard"
               track-name="cardClick"
               track-metadata-eventDetail="bodyExploreProductsRoutes">
              <img src="/images/maps-platform/complementary_routes8.png"
                   srcset="https://cloud.google.com/images/maps-platform/complementary_routes9_2x.png 2x"
                   alt="">
              <div class="card-content product-card-content">
                <div class="maps-subtitle">Routes</div>
                <div class="desc">
                   Help your users find the best way to get from A to Z with comprehensive data and real-time traffic.
                </div>
              </div>
              <div class="cta product-card-cta">
                <div>LEARN MORE</div>
              </div>
            </a>
            <a href="/maps-platform/places"
               class="flex-card"
               track-type="exploreProductsCard"
               track-name="cardClick"
               track-metadata-eventDetail="bodyExploreProductsPlaces">
              <img src="/images/maps-platform/complementary_places8.png"
                   srcset="https://cloud.google.com/images/maps-platform/complementary_places8_2x.png"
                   alt="">
              <div class="card-content product-card-content">
                <div class="maps-subtitle">Places</div>
                <div class="desc">
                  Help users discover the world with rich location data for over 150 million places.
                  Enable them to find specific places using phone numbers, addresses, and real-time
                  signals.
                </div>
              </div>
              <div class="cta product-card-cta">
                <div>LEARN MORE</div>
              </div>
            </a>
          </div>
        </section>
      </div>
      <div class="multi-section maps-features maps-full-bleed maps-std-section">
        <section class="alternate with-padding l-max-width-standard maps-solutions">
          <h3 class="centered-heading left-just" id="explore-industry-solutions" data-text="Explore industry solutions" tabindex="0">Explore industry solutions</h3>
          <div class="flex maps-flex-wrap">
            <div class="maps-features-block">
              <div class="maps-subtitle">Ridesharing</div>
              <div class="maps-copy">
                Integrate Google Maps directly into your ridesharing app to decrease navigation
                friction for your drivers and improve wait times for your customers.</div>
              <a class="cta"
                 href="/maps-platform/ridesharing"
                 track-type="learnMoreRidesharing"
                 track-name="linkClick"
                 track-metadata-eventDetail="body">Learn more</a>
            </div>
            <div class="maps-features-block">
              <div class="maps-subtitle">Gaming</div>
              <div class="maps-copy">Create immersive, real-world games with millions of
                customizable 3D structures, up-to-date global data, and seamless integration with
                Unity.</div>
              <a class="cta"
                 href="/maps-platform/gaming"
                 track-type="learnMoreGaming"
                 track-name="linkClick"
                 track-metadata-eventDetail="body">Learn more</a>
            </div>
            <div class="maps-features-block">
              <div class="maps-subtitle">Asset tracking</div>
              <div class="maps-copy">Improve business efficiencies by locating vehicles and assets
                in real time, visualizing where assets have traveled, and routing vehicles with
                complex trips. </div>
              <a class="cta"
                 href="/maps-platform/asset-tracking"
                 track-type="learnMoreAssetTracking"
                 track-name="linkClick"
                 track-metadata-eventDetail="body">Learn more</a>
            </div>
          </div>
        </section>
      </div>
      <div class="multi-section maps-bg-darkgray maps-full-bleed maps-std-section top-pad-less">
        <section class="section with-padding maps-carousel">
          <h3 class="centered-heading" id="businesses-building-withgoogle-maps-platform" data-text="Businesses building withGoogle Maps Platform" tabindex="0">Businesses building with<br>Google Maps Platform</h3>
          <div class="my-carousel">
            
            

<div class="cloud-carousel
    
    
    
    
    
    
    ">
  <div class="cloud-carousel__slide-deck-container">
    <div class="cloud-carousel__slide-deck" role="group">
      
        
              <div class="cloud-carousel__slide">
                
                
                
                
                
                
                
                
                
                
                
                
                
                

<section class="l-max-width-standard jb-quote jb-quote-blue jb-quote-background-grey">
  
    <div class="jb-quote-image" style="background-image: url(/images/maps-platform/homepage__0002_allstate_background.jpg)"></div>
  
  <div class="jb-quote-tile jb-quote-tile-floating">
    <blockquote class="jb-quote-body">
      <p class="jb-quote-text jb-quote-hide-marks">
        <span class="lt-quote">&ldquo;</span> We looked at everything
                from customization capabilities and the ability to draw layers to accessing Street
                View and point-of-view manipulation, and Google Maps Platform met our every need. The
                alternatives didn’t come up to par, so it was a
                no-brainer.<span class="rt-quote">&rdquo;</span>
      </p>
      
        <cite class="jb-quote-author">
          Elizabeth Schreier, Director of Digital and Social
                Engagement, Allstate
        </cite>
      
      
    </blockquote>

    <div class="jb-quote-resources">
      
        <div class="jb-quote-resource jb-quote-resource--logo">
          <img alt="Allstate" src="/images/maps-platform/allstate_logo.svg" srcset="https://cloud.google.com/images/maps-platform/allstate_logo.svg 2x">
        </div>
      

      
        <div class="jb-quote-resource jb-quote-resource--action">
          <a
            href="/customers/allstate"
            class="jb-link   "
            
            track-type="readMore" track-name="tileClick" track-metadata-eventDetail="bodyAllstate"
             >
            
              <span class="jb-link-icon jb-link-arrow-forward">Read More
              
                <i class="material-icons notranslate" translate="no">arrow_forward</i>
              
              </span>
            
          </a>
        </div>
      
    </div>
  </div>
</section>
              </div>
              <div class="cloud-carousel__slide">
                
                
                
                
                
                
                
                
                
                
                
                
                
                

<section class="l-max-width-standard jb-quote jb-quote-blue jb-quote-background-grey">
  
    <div class="jb-quote-image" style="background-image: url(/images/maps-platform/sunsurveyor_background.jpg)"></div>
  
  <div class="jb-quote-tile jb-quote-tile-floating">
    <blockquote class="jb-quote-body">
      <p class="jb-quote-text jb-quote-hide-marks">
        <span class="lt-quote">&ldquo;</span> The Android API, which includes Street View, was particularly helpful. It allowed me to overlay the path of the sun and moon on any Street View location anywhere in the world.<span class="rt-quote">&rdquo;</span>
      </p>
      
        <cite class="jb-quote-author">
          Adam Ratana, Developer, Sun Surveyor
        </cite>
      
      
    </blockquote>

    <div class="jb-quote-resources">
      
        <div class="jb-quote-resource jb-quote-resource--logo">
          <img alt="SunSurveyor" src="/images/maps-platform/sunsurveyor_logo.png" srcset="https://cloud.google.com/images/maps-platform/sunsurveyor_logo_2x.png 2x">
        </div>
      

      
        <div class="jb-quote-resource jb-quote-resource--action">
          <a
            href="/customers/sun-surveyor"
            class="jb-link   "
            
             track-type="readMore" track-name="tileClick"
                   track-metadata-eventDetail="bodySunSurveyor"
             >
            
              <span class="jb-link-icon jb-link-arrow-forward">Read More
              
                <i class="material-icons notranslate" translate="no">arrow_forward</i>
              
              </span>
            
          </a>
        </div>
      
    </div>
  </div>
</section>
              </div>
              <div class="cloud-carousel__slide">
                
                
                
                
                
                
                
                
                
                
                
                
                
                

<section class="l-max-width-standard jb-quote jb-quote-blue jb-quote-background-grey">
  
    <div class="jb-quote-image" style="background-image: url(/images/maps-platform/homepage__0000_redfin_background.jpg)"></div>
  
  <div class="jb-quote-tile jb-quote-tile-floating">
    <blockquote class="jb-quote-body">
      <p class="jb-quote-text jb-quote-hide-marks">
        <span class="lt-quote">&ldquo;</span> Our customers and agents
                rely on our technology, so we need to create reliable and efficient tools that help
                streamline the buying and selling process. Google Maps Platform has helped us do that
                with its maps, local search, and other tools like traffic
                navigation.<span class="rt-quote">&rdquo;</span>
      </p>
      
        <cite class="jb-quote-author">
          Curtis Howell, Senior Product Manager for Customer
                Engagement, Redfin
        </cite>
      
      
    </blockquote>

    <div class="jb-quote-resources">
      
        <div class="jb-quote-resource jb-quote-resource--logo">
          <img alt="Redfin" src="/images/maps-platform/redfin_logo.png" srcset="https://cloud.google.com/images/maps-platform/redfin_logo.png 2x">
        </div>
      

      
        <div class="jb-quote-resource jb-quote-resource--action">
          <a
            href="/customers/redfin"
            class="jb-link   "
            
             track-type="readMore" track-name="tileClick"
                   track-metadata-eventDetail="bodyRedfin"
             >
            
              <span class="jb-link-icon jb-link-arrow-forward">Read More
              
                <i class="material-icons notranslate" translate="no">arrow_forward</i>
              
              </span>
            
          </a>
        </div>
      
    </div>
  </div>
</section>
              </div>
              <div class="cloud-carousel__slide">
                
                
                
                
                
                
                
                
                
                
                
                
                
                

<section class="l-max-width-standard jb-quote jb-quote-blue jb-quote-background-grey">
  
    <div class="jb-quote-image" style="background-image: url(/images/maps-platform/homepage__0004_dpd-background.jpg)"></div>
  
  <div class="jb-quote-tile jb-quote-tile-floating">
    <blockquote class="jb-quote-body">
      <p class="jb-quote-text jb-quote-hide-marks">
        <span class="lt-quote">&ldquo;</span> Google Maps Platform’s live tracking makes waiting for a parcel
                an interactive experience. Every recipient can ensure their delivery fits into their
                daily routine.<span class="rt-quote">&rdquo;</span>
      </p>
      
        <cite class="jb-quote-author">
          Stefan Müller, IT Project Manager, DPD
        </cite>
      
      
    </blockquote>

    <div class="jb-quote-resources">
      
        <div class="jb-quote-resource jb-quote-resource--logo">
          <img alt="DPD" src="/images/maps-platform/dpd_logo.svg" srcset="https://cloud.google.com/images/maps-platform/dpd_logo.svg 2x">
        </div>
      

      
        <div class="jb-quote-resource jb-quote-resource--action">
          <a
            href="/customers/dpd-uk"
            class="jb-link   "
            
             track-type="readMore" track-name="tileClick"
                   track-metadata-eventDetail="bodyDPD"
             >
            
              <span class="jb-link-icon jb-link-arrow-forward">Read More
              
                <i class="material-icons notranslate" translate="no">arrow_forward</i>
              
              </span>
            
          </a>
        </div>
      
    </div>
  </div>
</section>
              </div>
              <div class="cloud-carousel__slide">
                
                
                
                
                
                
                
                
                
                
                
                
                
                

<section class="l-max-width-standard jb-quote jb-quote-blue jb-quote-background-grey">
  
    <div class="jb-quote-image" style="background-image: url(/images/maps-platform/homepage__0003_allianz-background.jpg)"></div>
  
  <div class="jb-quote-tile jb-quote-tile-floating">
    <blockquote class="jb-quote-body">
      <p class="jb-quote-text jb-quote-hide-marks">
        <span class="lt-quote">&ldquo;</span> Google Maps Platform was
                almost a foregone conclusion due to its familiarity, reliability, accuracy,
                flexibility, ongoing innovation, and relationships with other data providers. It met
                all our requirements and provided virtually limitless integration
                capabilities.<span class="rt-quote">&rdquo;</span>
      </p>
      
        <cite class="jb-quote-author">
          Dean Peck, Senior Business Solutions Analyst and Project
                Manager
        </cite>
      
      
    </blockquote>

    <div class="jb-quote-resources">
      
        <div class="jb-quote-resource jb-quote-resource--logo">
          <img alt="Allianz" src="/images/maps-platform/Allianz.svg" srcset="https://cloud.google.com/images/maps-platform/Allianz.svg 2x">
        </div>
      

      
        <div class="jb-quote-resource jb-quote-resource--action">
          <a
            href="/customers/allianz"
            class="jb-link   "
            
            track-type="readMore" track-name="tileClick"
                   track-metadata-eventDetail="bodyAllianz"
             >
            
              <span class="jb-link-icon jb-link-arrow-forward">Read More
              
                <i class="material-icons notranslate" translate="no">arrow_forward</i>
              
              </span>
            
          </a>
        </div>
      
    </div>
  </div>
</section>
              </div>
            
      
    </div>
  </div>
  <div class="cloud-carousel__controls ">
    <div class="cloud-carousel__arrow left-arrow">
      <img src="https://www.gstatic.com/images/icons/material/system/2x/keyboard_arrow_left_black_36dp.png" alt="" />
    </div>
    <div class="cloud-carousel__arrow right-arrow">
      <img src="https://www.gstatic.com/images/icons/material/system/2x/keyboard_arrow_right_black_36dp.png" alt="" />
    </div>
    <div class="cloud-carousel__nuggets">
      <div class="cloud-carousel__nugget"></div>
    </div>
  </div>
</div>



          </div>

          <div class="jb-customer-logo-container">
            <a href="/customers/allstate">
              <img class="jb-customer-logo" src="/images/maps-platform/allstate-boxed.png" alt="Allstate logo">
            </a>
            <a href="/customers/sun-surveyor">
              <img class="jb-customer-logo" src="/images/maps-platform/sunsurveyor_boxed.png" alt="Sun Surveyor logo">
            </a>
            <a href="/customers/redfin">
              <img class="jb-customer-logo" src="/images/maps-platform/redfin-boxed.png" alt="Redfin logo">
            </a>
            <a href="/customers/dpd-uk">
              <img class="jb-customer-logo" src="/images/maps-platform/dpd-boxed.png" alt="DPD logo">
            </a>
            <a href="/customers/allianz">
              <img class="jb-customer-logo" src="/images/maps-platform/allianz-boxed.png" alt="Allianz logo">
            </a>
          </div>
        </section>
      </div>

      <!-- HERO TEMPLATE -->
      
      
      
      

      <div class="maps-cta-section">
        

<header class="hero jb-hero jb-hero-solutions maps-full-bleed"
        style="background-image: url(/images/maps-platform/homepage_footer2_2x.jpg);">
    <div class="jb-hero-content">
      <h1 class="hero-title" id="start-building-with-google-maps-platform" data-text="Start building with Google Maps Platform" tabindex="0">Start building with Google Maps Platform</h1>
      
      <div class="hero-subtitle">
        
      </div>
      
      
      <div class="hero-additional-content">
        <a href="https://console.cloud.google.com/google/maps-apis/start"
           class="cloud-button cloud-button--primary maps-hero-cta get-started-trigger"
           track-type="getStarted" track-name="buttonClick" track-metadata-eventDetail="body">
           Get Started
        </a>
        </div>
      
    </div>
</header>
      </div>
      <section class="cloud-section newsletter">
        <div class="contact-form cloud-grid">
  <div class="is-10 is-1--offset">
    <cloudx-form action="https://app-sj24.marketo.com/index.php/leadCapture/save"
                 isOnPageThankYou>
      <cloudx-form-dynamic-content form-submitted-is="false">
        <div>
          <div class="cloud-grid--alternate">
            <div class="cloud-grid__col is-8">
              <h1 class="cloud-headline2" id="in-your-inbox" data-text="In your inbox" tabindex="0">In your inbox</h1>
              <p class="cloud-body-text">
                Subscribe to the Google Maps Platform newsletter today to receive product updates,
                insights, news, and more.
              </p>
            </div>
          </div>
          <div class="cloud-grid cloud-section__header--small">
            <div class="cloud-grid__col is-6 is-3__xl">
              <cloudx-form-input-text
                  type="text"
                  name="FirstName"
                  placeholder="First name"
                  aria-label="First name"
                  className="contact-form__input"
                  required>
              </cloudx-form-input-text>
              <div class="errors">
                <cloudx-form-dynamic-content
                    FirstName-valid-is="false">
                  <span class="error">
                    This is required
                  </span>
                </cloudx-form-dynamic-content>
              </div>
            </div>
            <div class="cloud-grid__col is-6 is-3__xl">
              <cloudx-form-input-text
                  type="text"
                  name="LastName"
                  placeholder="Last name"
                  aria-label="Last name"
                  className="contact-form__input"
                  required>
              </cloudx-form-input-text>
              <div class="errors">
                <cloudx-form-dynamic-content
                    LastName-valid-is="false">
                  <span class="error">
                    This is required
                  </span>
                </cloudx-form-dynamic-content>
              </div>
            </div>
            <div class="cloud-grid__col is-6 is-3__xl">
              <cloudx-form-input-text
                  className="contact-form__input"
                  type="email"
                  name="Email"
                  placeholder="Business email"
                  aria-label="Business email"
                  required>
              </cloudx-form-input-text>
              <div class="errors">
                <cloudx-form-dynamic-content
                    Email-valid-is="false">
                  <span class="error">
                    This is required
                  </span>
                </cloudx-form-dynamic-content>
              </div>
            </div>
            <div class="cloud-grid__col is-6 is-3__xl">
              <cloudx-form-input-text
                  type="text"
                  name="Company"
                  placeholder="Company name"
                  aria-label="Company name"
                  className="contact-form__input"
                  required>
              </cloudx-form-input-text>
              <div class="errors">
                <cloudx-form-dynamic-content
                    Company-valid-is="false">
                  <span class="error">
                    This is required
                  </span>
                </cloudx-form-dynamic-content>
              </div>
            </div>
            <div class="cloud-grid__col is-6 is-3__xl">
              <cloudx-form-input-text
                  type="text"
                  name="Title"
                  placeholder="Job title"
                  aria-label="Job title"
                  className="contact-form__input"
                  required>
              </cloudx-form-input-text>
              <div class="errors">
                <cloudx-form-dynamic-content
                    Title-valid-is="false">
                  <span class="error">
                    This is required
                  </span>
                </cloudx-form-dynamic-content>
              </div>
            </div>
            <div class="cloud-grid__col is-6 is-3__xl">
              <cloudx-form-input-phonenumber
                  name="Phone"
                  placeholder="Phone"
                  user-country="PK"
                  className="contact-form__input"
                  required>
              </cloudx-form-input-phonenumber>
              <div class="errors">
                <cloudx-form-dynamic-content
                    Phone-valid-is="false">
                  <span class="error">
                    This is required
                  </span>
                </cloudx-form-dynamic-content>
              </div>
            </div>
            <div class="cloud-grid__col is-6 is-3__xl">
              <div class="select-box">
                <cloudx-form-input-select
                    name="Industry"
                    placeholder="Industry name"
                    className="contact-form__select"
                    required>
                  <option selected="" value="">Select Industry</option>
                  <option value="Automotive">Automotive</option>
                  <option value="Business Services">Business Services</option>
                  <option value="Education">Education</option>
                  <option value="Energy, Chemicals &amp; Utilities">Energy, Chemicals &amp; Utilities</option>
                  <option value="Farming, Forestry, Fishing">Farming, Forestry, Fishing</option>
                  <option value="Financial Services">Financial Services</option>
                  <option value="Fleet Management">Fleet Management</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Government">Government</option>
                  <option value="Health &amp; Social Care">Health &amp; Social Care</option>
                  <option value="Holding Companies">Holding Companies</option>
                  <option value="IoT">IoT</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Media &amp; Entertainment">Media &amp; Entertainment</option>
                  <option value="Mining &amp Construction">Mining &amp; Construction</option>
                  <option value="Non-profit">Non-profit</option>
                  <option value="Ridesharing and Local Deliveries">Ridesharing and Local Deliveries</option>
                  <option value="Retail &amp; e-Commerce">Retail &amp; e-Commerce</option>
                  <option value="Software &amp; Services">Software &amp; Services</option>
                  <option value="Telecommunications">Telecommunications</option>
                  <option value="Technology">Technology</option>
                  <option value="Travel">Travel</option>
                  <option value="Transportation">Transportation</option>
                </cloudx-form-input-select>
              </div>
            </div>
            <div class="cloud-grid__col is-6 is-3__xl">
              <div class="select-box">
                


  
<cloudx-form-input-select
  name="CountryCode"
  
    className="contact-form__select"
  
  value="PK"
  required
  >
  
  <option value="AF">Afghanistan</option>
  <option value="AL">Albania</option>
  <option value="DZ">Algeria</option>
  <option value="AS">American Samoa</option>
  <option value="AD">Andorra</option>
  <option value="AO">Angola</option>
  <option value="AI">Anguilla</option>
  <option value="AQ">Antarctica</option>
  <option value="AG">Antigua and Barbuda</option>
  <option value="AR">Argentina</option>
  <option value="AM">Armenia</option>
  <option value="AW">Aruba</option>
  <option value="AC">Ascension Island</option>
  <option value="AU">Australia</option>
  <option value="AT">Austria</option>
  <option value="AZ">Azerbaijan</option>
  <option value="BS">Bahamas</option>
  <option value="BH">Bahrain</option>
  <option value="BD">Bangladesh</option>
  <option value="BB">Barbados</option>
  <option value="BY">Belarus</option>
  <option value="BE">Belgium</option>
  <option value="BZ">Belize</option>
  <option value="BJ">Benin</option>
  <option value="BM">Bermuda</option>
  <option value="BT">Bhutan</option>
  <option value="BO">Bolivia</option>
  <option value="BA">Bosnia and Herzegovina</option>
  <option value="BW">Botswana</option>
  <option value="BV">Bouvet Island</option>
  <option value="BR">Brazil</option>
  <option value="IO">British Indian Ocean Territory</option>
  <option value="VG">British Virgin Islands</option>
  <option value="BN">Brunei</option>
  <option value="BG">Bulgaria</option>
  <option value="BF">Burkina Faso</option>
  <option value="BI">Burundi</option>
  <option value="KH">Cambodia</option>
  <option value="CM">Cameroon</option>
  <option value="CA">Canada</option>
  <option value="CV">Cape Verde</option>
  <option value="KY">Cayman Islands</option>
  <option value="CF">Central African Republic</option>
  <option value="TD">Chad</option>
  <option value="CL">Chile</option>
  <option value="CN">China</option>
  <option value="CX">Christmas Island</option>
  <option value="CC">Cocos [Keeling] Islands</option>
  <option value="CO">Colombia</option>
  <option value="KM">Comoros</option>
  <option value="CD">Congo [DRC]</option>
  <option value="CG">Congo [Republic]</option>
  <option value="CK">Cook Islands</option>
  <option value="CR">Costa Rica</option>
  <option value="CI">Côte d’Ivoire</option>
  <option value="HR">Croatia</option>
  <option value="CW">Curaçao</option>
  <option value="CY">Cyprus</option>
  <option value="CZ">Czech Republic</option>
  <option value="DK">Denmark</option>
  <option value="DJ">Djibouti</option>
  <option value="DM">Dominica</option>
  <option value="DO">Dominican Republic</option>
  <option value="EC">Ecuador</option>
  <option value="EG">Egypt</option>
  <option value="SV">El Salvador</option>
  <option value="GQ">Equatorial Guinea</option>
  <option value="ER">Eritrea</option>
  <option value="EE">Estonia</option>
  <option value="ET">Ethiopia</option>
  <option value="FK">Falkland Islands [Islas Malvinas]</option>
  <option value="FO">Faroe Islands</option>
  <option value="FJ">Fiji</option>
  <option value="FI">Finland</option>
  <option value="FR">France</option>
  <option value="GF">French Guiana</option>
  <option value="PF">French Polynesia</option>
  <option value="TF">French Southern Territories</option>
  <option value="GA">Gabon</option>
  <option value="GM">Gambia</option>
  <option value="GE">Georgia</option>
  <option value="DE">Germany</option>
  <option value="GH">Ghana</option>
  <option value="GI">Gibraltar</option>
  <option value="GR">Greece</option>
  <option value="GL">Greenland</option>
  <option value="GD">Grenada</option>
  <option value="GP">Guadeloupe</option>
  <option value="GU">Guam</option>
  <option value="GT">Guatemala</option>
  <option value="GN">Guinea</option>
  <option value="GW">Guinea-Bissau</option>
  <option value="GY">Guyana</option>
  <option value="HT">Haiti</option>
  <option value="HM">Heard Island and McDonald Islands</option>
  <option value="HN">Honduras</option>
  <option value="HK">Hong Kong</option>
  <option value="HU">Hungary</option>
  <option value="IS">Iceland</option>
  <option value="IN">India</option>
  <option value="ID">Indonesia</option>
  <option value="IQ">Iraq</option>
  <option value="IE">Ireland</option>
  <option value="IL">Israel</option>
  <option value="IT">Italy</option>
  <option value="JM">Jamaica</option>
  <option value="JP">Japan</option>
  <option value="JO">Jordan</option>
  <option value="KZ">Kazakhstan</option>
  <option value="KE">Kenya</option>
  <option value="KI">Kiribati</option>
  <option value="KW">Kuwait</option>
  <option value="KG">Kyrgyzstan</option>
  <option value="LA">Laos</option>
  <option value="LV">Latvia</option>
  <option value="LB">Lebanon</option>
  <option value="LS">Lesotho</option>
  <option value="LR">Liberia</option>
  <option value="LY">Libya</option>
  <option value="LI">Liechtenstein</option>
  <option value="LT">Lithuania</option>
  <option value="LU">Luxembourg</option>
  <option value="MO">Macau</option>
  <option value="MK">Macedonia [FYROM]</option>
  <option value="MG">Madagascar</option>
  <option value="MW">Malawi</option>
  <option value="MY">Malaysia</option>
  <option value="MV">Maldives</option>
  <option value="ML">Mali</option>
  <option value="MT">Malta</option>
  <option value="MH">Marshall Islands</option>
  <option value="MQ">Martinique</option>
  <option value="MR">Mauritania</option>
  <option value="MU">Mauritius</option>
  <option value="YT">Mayotte</option>
  <option value="MX">Mexico</option>
  <option value="FM">Micronesia</option>
  <option value="MD">Moldova</option>
  <option value="MC">Monaco</option>
  <option value="MN">Mongolia</option>
  <option value="ME">Montenegro</option>
  <option value="MS">Montserrat</option>
  <option value="MA">Morocco</option>
  <option value="MZ">Mozambique</option>
  <option value="MM">Myanmar</option>
  <option value="NA">Namibia</option>
  <option value="NR">Nauru</option>
  <option value="NP">Nepal</option>
  <option value="NL">Netherlands</option>
  <option value="AN">Netherlands Antilles</option>
  <option value="NC">New Caledonia</option>
  <option value="NZ">New Zealand</option>
  <option value="NI">Nicaragua</option>
  <option value="NE">Niger</option>
  <option value="NG">Nigeria</option>
  <option value="NU">Niue</option>
  <option value="NF">Norfolk Island</option>
  <option value="MP">Northern Mariana Islands</option>
  <option value="NO">Norway</option>
  <option value="OM">Oman</option>
  <option value="PK">Pakistan</option>
  <option value="PW">Palau</option>
  <option value="PS">Palestine</option>
  <option value="PA">Panama</option>
  <option value="PG">Papua New Guinea</option>
  <option value="PY">Paraguay</option>
  <option value="PE">Peru</option>
  <option value="PH">Philippines</option>
  <option value="PN">Pitcairn Islands</option>
  <option value="PL">Poland</option>
  <option value="PT">Portugal</option>
  <option value="PR">Puerto Rico</option>
  <option value="QA">Qatar</option>
  <option value="RE">Réunion</option>
  <option value="RO">Romania</option>
  <option value="RU">Russia</option>
  <option value="RW">Rwanda</option>
  <option value="BL">Saint Barthélemy</option>
  <option value="SH">Saint Helena</option>
  <option value="KN">Saint Kitts and Nevis</option>
  <option value="LC">Saint Lucia</option>
  <option value="MF">Saint Martin</option>
  <option value="PM">Saint Pierre and Miquelon</option>
  <option value="VC">Saint Vincent and the Grenadines</option>
  <option value="WS">Samoa</option>
  <option value="SM">San Marino</option>
  <option value="ST">São Tomé and Príncipe</option>
  <option value="SA">Saudi Arabia</option>
  <option value="SN">Senegal</option>
  <option value="RS">Serbia</option>
  <option value="SC">Seychelles</option>
  <option value="SL">Sierra Leone</option>
  <option value="SG">Singapore</option>
  <option value="SX">Sint Maarten</option>
  <option value="SK">Slovakia</option>
  <option value="SI">Slovenia</option>
  <option value="SB">Solomon Islands</option>
  <option value="SO">Somalia</option>
  <option value="ZA">South Africa</option>
  <option value="GS">South Georgia and the South Sandwich Islands</option>
  <option value="KR">South Korea</option>
  <option value="SS">South Sudan</option>
  <option value="ES">Spain</option>
  <option value="LK">Sri Lanka</option>
  <option value="SD">Sudan</option>
  <option value="SR">Suriname</option>
  <option value="SJ">Svalbard and Jan Mayen</option>
  <option value="SZ">Swaziland</option>
  <option value="SE">Sweden</option>
  <option value="CH">Switzerland</option>
  <option value="TW">Taiwan</option>
  <option value="TJ">Tajikistan</option>
  <option value="TZ">Tanzania</option>
  <option value="TH">Thailand</option>
  <option value="TL">Timor-Leste</option>
  <option value="TG">Togo</option>
  <option value="TK">Tokelau</option>
  <option value="TO">Tonga</option>
  <option value="TT">Trinidad and Tobago</option>
  <option value="TN">Tunisia</option>
  <option value="TR">Turkey</option>
  <option value="TM">Turkmenistan</option>
  <option value="TC">Turks and Caicos Islands</option>
  <option value="TV">Tuvalu</option>
  <option value="UM">U.S. Outlying Islands</option>
  <option value="VI">U.S. Virgin Islands</option>
  <option value="UG">Uganda</option>
  <option value="UA">Ukraine</option>
  <option value="AE">United Arab Emirates</option>
  <option value="GB">United Kingdom</option>
  <option value="US">United States</option>
  <option value="UY">Uruguay</option>
  <option value="UZ">Uzbekistan</option>
  <option value="VU">Vanuatu</option>
  <option value="VA">Vatican City</option>
  <option value="VE">Venezuela</option>
  <option value="VN">Vietnam</option>
  <option value="WF">Wallis and Futuna</option>
  <option value="EH">Western Sahara</option>
  <option value="YE">Yemen</option>
  <option value="ZM">Zambia</option>
  <option value="ZW">Zimbabwe</option>
</cloudx-form-input-select>
              </div>
            </div>
          </div>
          <div class="flex is-12">
            <cloudx-form-input-checkbox
                name="Opt_In__c"
                trueValue="Yes"
                falseValue="No"
                required>
            </cloudx-form-input-checkbox>
            <label class="cloud-body-text__small">
              Yes, sign me up to receive communications from Google Maps Platform and Google Cloud.
            </label>
          </div>
          <div>
            <p class="cloud-body-text__small">
              Your information will be used in accordance with Google's privacy policy. You may opt
              out at any time.
            </p>
          </div>
          <div class="bottom submit l-space-top-4 is-12">
            <cloudx-form-submit-button
                className="cloud-button cloud-button--primary"
                disableWhenInvalid
                track-type="contact"
                track-name="submitAttempt"
                track-metadata-eventDetail="stayInTheLoop"
                track-metadata-position="body">
              Subscribe
            </cloudx-form-submit-button>
          </div>

          <div class="hidden">
            <cloudx-form-input-utm
                name="Utm_Medium__c"
                utmParamName="utm_medium">
            </cloudx-form-input-utm>
            <cloudx-form-input-utm
                name="Utm_Campaign__c"
                utmParamName="utm_campaign">
            </cloudx-form-input-utm>
            <cloudx-form-input-utm
                name="Utm_Source__c"
                utmParamName="utm_source">
            </cloudx-form-input-utm>
            <cloudx-form-input-utm
                name="Utm_Content__c"
                utmParamName="utm_content">
            </cloudx-form-input-utm>
            <cloudx-form-input-utm
                name="Utm_Term__c"
                utmParamName="utm_term">
            </cloudx-form-input-utm>
            <cloudx-form-input-hidden
                name="Lead_Source_Description__c"
                value="Newsletter - Google Maps Platform">
            </cloudx-form-input-hidden>
            <cloudx-form-input-hidden
                name="formid"
                value="7809">
            </cloudx-form-input-hidden>
            <cloudx-form-input-hidden
                name="munchkinId"
                value="808-GJW-314">
            </cloudx-form-input-hidden>
            <cloudx-form-input-hidden
                name="LeadSource"
                value="">
            </cloudx-form-input-hidden>
            <cloudx-form-input-hidden
                name="Product_Family__c"
                value="Google Maps Platform">
            </cloudx-form-input-hidden>
            <cloudx-form-input-hidden
                name="_mktoReferrer"
                value="https://cloud.google.com/maps-platform/">
            </cloudx-form-input-hidden>
            <cloudx-form-input-hidden-referrer
                name="Temp_Field_30day_1__c">
            </cloudx-form-input-hidden-referrer>
          </div>
        </div>
      </cloudx-form-dynamic-content>

      <cloudx-form-dynamic-content form-submitted-is="true">
        <div class="is-12">
          <h2 class="cloud-headline1" id="thank-you." data-text="Thank you." tabindex="0">Thank you.</h2>
          <p>
            You are now subscribed.
          </p>
        </div>
      </cloudx-form-dynamic-content>
    </cloudx-form>
  </div>
</div>
      </section>
  </article>

  <div id="enable-billing-modal-dialog" class="hh-modal">
  <div class="hh-modal__wrapper">
    <div class="hh-modal__container">
      <div class="hh-modal__header">
        <img class="hh-modal__logo" src="/images/maps-platform/maps-icon.svg" alt="Google Maps Logo">
        <div class="hh-modal__title">Enable Google Maps Platform</div>
      </div>


      <div class="hh-modal__content">
        <p>To enable APIs or set up billing, we'll guide you through a few tasks:</p>
        <ol class="hh-modal__step-list">
          <li>Pick product(s) below</li>
          <li>Select a project</li>
          <li>Set up your billing</li>
        </ol>
        <div class="hh-options__container">
          <div class="hh-options__option">
            <div class="hh-options__check">
              <input id="hh-maps" data-products="maps" type="checkbox">
            </div>
            <div class="hh-options__copy">
              <label for="hh-maps">
                Maps
                <div class="hh-tooltip">
                  <div class="hh-tooltip__title">Features included:</div>
                  <ul class="hh-tooltip__list">
                    <li>Maps</li>
                    <li>Streetview</li>
                  </ul>
                  <div class="hh-tooltip__title">APIs included:</div>
                  <ul class="hh-tooltip__list">
                    <li>Maps JavaScript API</li>
                    <li>Maps Static API</li>
                    <li>Street View API</li>
                    <li>Maps SDK for Android</li>
                    <li>Maps SDK for iOS</li>
                  </ul>
                </div>
              </label>
              <p>Build customized map experiences that bring the real world to your users.</p>
            </div>
          </div>
          <div class="hh-options__option">
            <div class="hh-options__check">
              <input id="hh-routes" data-products="routes" type="checkbox">
            </div>
            <div class="hh-options__copy">
              <label for="hh-routes">
                Routes
                <div class="hh-tooltip">
                  <div class="hh-tooltip__title">Features included:</div>
                  <ul class="hh-tooltip__list">
                    <li>Directions</li>
                    <li>Distance Matrix</li>
                    <li>Roads</li>
                  </ul>
                  <div class="hh-tooltip__title">APIs included:</div>
                  <ul class="hh-tooltip__list">
                    <li>Directions API</li>
                    <li>Distance Matrix API</li>
                    <li>Roads API</li>
                    <li>Maps JavaScript API</li>
                  </ul>
                </div>
              </label>
              <p>Give your users the best way to get from A to Z.</p>
            </div>
          </div>
          <div class="hh-options__option">
            <div class="hh-options__check">
              <input id="hh-places" data-products="places" type="checkbox">
            </div>
            <div class="hh-options__copy">
              <label for="hh-places">
                Places
                <div class="hh-tooltip">
                  <div class="hh-tooltip__title">Features included:</div>
                  <ul class="hh-tooltip__list">
                    <li>Place Details</li>
                    <li>Current Place</li>
                    <li>Find Place</li>
                    <li>Geocoding</li>
                    <li>Geolocation</li>
                    <li>Time Zone</li>
                  </ul>
                  <div class="hh-tooltip__title">APIs included:</div>
                  <ul class="hh-tooltip__list">
                    <li>Places Library, Maps JavaScript API</li>
                    <li>Places API</li>
                    <li>Geocoding API</li>
                    <li>Geolocation API</li>
                    <li>Time Zone API</li>
                    <li>Elevation API</li>
                  </ul>
                </div>
              </label>
              <p>Help users discover the world with rich details.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="hh-buttons">
        <button class="button button-white devsite-dialog-close">Cancel</button>
        <button class="button button-blue button-disabled hh-default-button">Continue</button>

        <a
          data-api-id="maps-backend.googleapis.com"
          data-henhouse-extra-api-ids="static-maps-backend.googleapis.com,street-view-image-backend.googleapis.com,maps-android-backend.googleapis.com,maps-ios-backend.googleapis.com,streetviewpublish.googleapis.com,maps-embed-backend.googleapis.com"
          class="gc-analytics-event button button-blue devsite-dialog-continue"
          data-hh-variation="maps"
          data-category="getKey"
          data-action="buttonClick"
          data-label="body"
          track-type="mapsConversion"
          track-name="enableBillingGetAPIKey"
          track-metadata-eventDetail="pickProductsClickContinue,maps"
          data-henhouse-link-docs="/maps/documentation/android-api/start"
          data-henhouse-link-support="/maps/documentation/android-api/support"
          data-henhouse-enable-maps-flow="true"
          data-henhouse-header-text="Enable Google Maps Platform"
          data-henhouse-billing-consoleUI="MAPS"
          data-henhouse-platforms-list="ANDROID"
          data-henhouse-use-updated-header="true"
          data-henhouse-header-logo-url="/images/maps-platform/maps-icon.svg"
          data-products-maps="static-maps-backend.googleapis.com,street-view-image-backend.googleapis.com,maps-android-backend.googleapis.com,maps-ios-backend.googleapis.com,streetviewpublish.googleapis.com,maps-embed-backend.googleapis.com"
          data-products-routes="directions-backend.googleapis.com,distance-matrix-backend.googleapis.com,roads.googleapis.com"
          data-products-places="places-backend.googleapis.com,geocoding-backend.googleapis.com,geolocation.googleapis.com,timezone-backend.googleapis.com,elevation-backend.googleapis.com"
          data-products-maps-routes="static-maps-backend.googleapis.com,street-view-image-backend.googleapis.com,maps-android-backend.googleapis.com,maps-ios-backend.googleapis.com,streetviewpublish.googleapis.com,maps-embed-backend.googleapis.com,directions-backend.googleapis.com,distance-matrix-backend.googleapis.com,roads.googleapis.com"
          data-products-routes-places="directions-backend.googleapis.com,distance-matrix-backend.googleapis.com,roads.googleapis.com,places-backend.googleapis.com,geocoding-backend.googleapis.com,geolocation.googleapis.com,timezone-backend.googleapis.com,elevation-backend.googleapis.com"
          data-products-maps-places="static-maps-backend.googleapis.com,street-view-image-backend.googleapis.com,maps-android-backend.googleapis.com,maps-ios-backend.googleapis.com,streetviewpublish.googleapis.com,maps-embed-backend.googleapis.com,places-backend.googleapis.com,geocoding-backend.googleapis.com,geolocation.googleapis.com,timezone-backend.googleapis.com,elevation-backend.googleapis.com"
          data-products-maps-routes-places="static-maps-backend.googleapis.com,street-view-image-backend.googleapis.com,maps-android-backend.googleapis.com,maps-ios-backend.googleapis.com,streetviewpublish.googleapis.com,maps-embed-backend.googleapis.com,directions-backend.googleapis.com,distance-matrix-backend.googleapis.com,roads.googleapis.com,places-backend.googleapis.com,geocoding-backend.googleapis.com,geolocation.googleapis.com,timezone-backend.googleapis.com,elevation-backend.googleapis.com"
        >Continue</a>

      </div>
    </div>
  </div>
</div>

<cloudx-maps-platform>
  <div class="devsite-dialog maps-platform" id="enable-billing-modal-dialog"></div>
</cloudx-maps-platform>
      <cloudx-experiments
      type="MapsExpCream"
      path="/virtual/MapsExpCream/configureExperiment"
      variant="0"
      location="PK">
    </cloudx-experiments>
  
  <cloudx-experiments
    type="MapsExpTrampoline"
    path="/virtual/MapsExpTrampoline/configureExperiment"
    variant="0"
    location="PK">
  </cloudx-experiments>
          </div>

    
              
          </article>
</article>




                      </devsite-content>
        </main>
        <devsite-footer-promos class="devsite-footer">
                      
                  </devsite-footer-promos>
        <devsite-footer-linkboxes class="devsite-footer">
                      <nav class="devsite-footer-linkboxes nocontent">
    <ul class="devsite-footer-linkboxes-list">
        <li class="devsite-footer-linkbox ">
    <h3 class="devsite-footer-linkbox-heading">Why Google</h3>      <ul class="devsite-footer-linkbox-list">
                <li class="devsite-footer-linkbox-item">
                    <a href="/why-google-cloud/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 1)"            track-type="footer link"track-name="choosing google cloud"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/why-google-cloud/"track-metadata-child_headline="why google"track-metadata-module="footer">
                      Choosing Google Cloud
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/security/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 2)"            track-type="footer link"track-name="trust and security"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/security/"track-metadata-child_headline="why google"track-metadata-module="footer">
                      Trust and security
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/open-cloud/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 3)"            track-type="footer link"track-name="open cloud"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/open-cloud/"track-metadata-child_headline="why google"track-metadata-module="footer">
                      Open cloud
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/infrastructure/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 4)"            track-type="footer link"track-name="global infrastructure"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/infrastructure/"track-metadata-child_headline="why google"track-metadata-module="footer">
                      Global infrastructure
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/customers/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 5)"            track-type="footer link"track-name="customers and case studies"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/customers/"track-metadata-child_headline="why google"track-metadata-module="footer">
                      Customers and case studies
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/analyst-reports/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 6)"            track-type="footer link"track-name="analyst reports"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/analyst-reports/"track-metadata-child_headline="why google"track-metadata-module="footer">
                      Analyst reports
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/whitepapers/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 7)"            track-type="footer link"track-name="whitepapers"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/whitepapers/"track-metadata-child_headline="why google"track-metadata-module="footer">
                      Whitepapers
                    </a>
                  </li>
              </ul>
    </li>
        <li class="devsite-footer-linkbox ">
    <h3 class="devsite-footer-linkbox-heading">Products and pricing</h3>      <ul class="devsite-footer-linkbox-list">
                <li class="devsite-footer-linkbox-item">
                    <a href="/pricing/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 1)"            track-type="footer link"track-name="gcp pricing"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/pricing/"track-metadata-child_headline="products and pricing"track-metadata-module="footer">
                      GCP pricing
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="//gsuite.google.com/pricing.html"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 2)"            track-type="footer link"track-name="gsuite pricing"track-metadata-position="footer"track-metadata-eventDetail="gsuite.google.com/pricing.html"track-metadata-child_headline="products and pricing"track-metadata-module="footer">
                      G Suite pricing
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/maps-platform/pricing/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 3)"            track-type="footer link"track-name="maps platform pricing"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/maps-platform/pricing/"track-metadata-child_headline="products and pricing"track-metadata-module="footer">
                      Maps Platform pricing
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/products/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 4)"            track-type="footer link"track-name="see all products"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/products/"track-metadata-child_headline="products and pricing"track-metadata-module="footer">
                      See all products
                    </a>
                  </li>
              </ul>
    </li>
        <li class="devsite-footer-linkbox ">
    <h3 class="devsite-footer-linkbox-heading">Solutions</h3>      <ul class="devsite-footer-linkbox-list">
                <li class="devsite-footer-linkbox-item">
                    <a href="/solutions/infrastructure-modernization/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 1)"            track-type="footer link"track-name="infrastructure modernization"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/solutions/infrastructure-modernization/"track-metadata-child_headline="solutions"track-metadata-module="footer">
                      Infrastructure modernization
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/solutions/data-management/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 2)"            track-type="footer link"track-name="data management"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/solutions/data-management"track-metadata-child_headline="solutions"track-metadata-module="footer">
                      Data management
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/solutions/application-modernization/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 3)"            track-type="footer link"track-name="application development"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/solutions/application-modernization/"track-metadata-child_headline="solutions"track-metadata-module="footer">
                      Application modernization
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/solutions/smart-analytics/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 4)"            track-type="footer link"track-name="smart analytics"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/solutions/smart-analytics/"track-metadata-child_headline="solutions"track-metadata-module="footer">
                      Smart analytics
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/solutions/ai/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 5)"            track-type="footer link"track-name="artificial intelligence"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/solutions/ai/"track-metadata-child_headline="solutions"track-metadata-module="footer">
                      Artificial Intelligence
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/solutions/security/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 6)"            track-type="footer link"track-name="security"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/solutions/security/"track-metadata-child_headline="solutions"track-metadata-module="footer">
                      Security
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/solutions/productivity-collaboration/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 7)"            track-type="footer link"track-name="productivity and work transformation"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/solutions/productivity-collaboration/"track-metadata-child_headline="solutions"track-metadata-module="footer">
                      Productivity & work transformation
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/solutions/#industry-solutions"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 8)"            track-type="footer link"track-name="industry solutions"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/solutions/#industry-solutions"track-metadata-child_headline="solutions"track-metadata-module="footer">
                      Industry solutions
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/solutions/devops/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 9)"            track-type="footer link"track-name="devops solutions"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/solutions/devops/"track-metadata-child_headline="solutions"track-metadata-module="footer">
                      DevOps solutions
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/solutions/#role-based-solutions-smb"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 10)"            track-type="footer link"track-name="small business solutions"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/solutions/#role-based-solutions-smb"track-metadata-child_headline="solutions"track-metadata-module="footer">
                      Small business solutions
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/solutions/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 11)"            track-type="footer link"track-name="see all solutions"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/solutions/"track-metadata-child_headline="solutions"track-metadata-module="footer">
                      See all solutions
                    </a>
                  </li>
              </ul>
    </li>
        <li class="devsite-footer-linkbox ">
    <h3 class="devsite-footer-linkbox-heading">Resources</h3>      <ul class="devsite-footer-linkbox-list">
                <li class="devsite-footer-linkbox-item">
                    <a href="/docs/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 1)"            track-type="footer link"track-name="gcp documentation"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/docs/"track-metadata-child_headline="resources"track-metadata-module="footer">
                      GCP documentation
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/gcp/getting-started/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 2)"            track-type="footer link"track-name="gcp quickstarts"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/gcp/getting-started/"track-metadata-child_headline="resources"track-metadata-module="footer">
                      GCP quickstarts
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/marketplace/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 3)"            track-type="footer link"track-name="google cloud marketplace"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/marketplace/"track-metadata-child_headline="resources"track-metadata-module="footer">
                      Google Cloud Marketplace
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="//gsuite.google.com/marketplace/?_ga=2.9626741.-1361126772.1534457455"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 4)"            track-type="footer link"track-name="g suite marketplace"track-metadata-position="footer"track-metadata-eventDetail="gsuite.google.com/marketplace/?_ga=2.9626741.-1361126772.1534457455"track-metadata-child_headline="resources"track-metadata-module="footer">
                      G Suite Marketplace
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/support-hub/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 5)"            track-type="footer link"track-name="support"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/support-hub/"track-metadata-child_headline="resources"track-metadata-module="footer">
                      Support
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/docs/tutorials/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 6)"            track-type="footer link"track-name="tutorials"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/docs/tutorials/"track-metadata-child_headline="resources"track-metadata-module="footer">
                      Tutorials
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/training/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 7)"            track-type="footer link"track-name="training"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/training/"track-metadata-child_headline="resources"track-metadata-module="footer">
                      Training
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/certifications/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 8)"            track-type="footer link"track-name="certifications"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/certifications/"track-metadata-child_headline="resources"track-metadata-module="footer">
                      Certifications
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="//developers.google.com"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 9)"            track-type="footer link"track-name="google developers"track-metadata-position="footer"track-metadata-eventDetail="developers.google.com"track-metadata-child_headline="resources"track-metadata-module="footer">
                      Google Developers
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/developers/startups/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 10)"            track-type="footer link"track-name="google cloud for startups"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/developers/startups/"track-metadata-child_headline="resources"track-metadata-module="footer">
                      Google Cloud for Startups
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="//status.cloud.google.com"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 11)"            track-type="footer link"track-name="system status"track-metadata-position="footer"track-metadata-eventDetail="status.cloud.google.com"track-metadata-child_headline="resources"track-metadata-module="footer">
                      System status
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/release-notes"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 12)"            track-type="footer link"track-name="release notes"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/release-notes/"track-metadata-child_headline="resources"track-metadata-module="footer">
                      Release Notes
                    </a>
                  </li>
              </ul>
    </li>
        <li class="devsite-footer-linkbox ">
    <h3 class="devsite-footer-linkbox-heading">Engage</h3>      <ul class="devsite-footer-linkbox-list">
                <li class="devsite-footer-linkbox-item">
                    <a href="/contact/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 1)"            track-type="footer link"track-name="contact sales"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/contact/"track-metadata-child_headline="engage"track-metadata-module="footer">
                      Contact sales
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="//cloud.withgoogle.com/partners"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 2)"            track-type="footer link"track-name="find a partner"track-metadata-position="footer"track-metadata-eventDetail="cloud.withgoogle.com/partners"track-metadata-child_headline="engage"track-metadata-module="footer">
                      Find a Partner
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/partners/become-a-partner/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 3)"            track-type="footer link"track-name="become a partner"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/partners/become-a-partner/"track-metadata-child_headline="engage"track-metadata-module="footer">
                      Become a Partner
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/blog/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 4)"            track-type="footer link"track-name="blog"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/blog/"track-metadata-child_headline="engage"track-metadata-module="footer">
                      Blog
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/events/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 5)"            track-type="footer link"track-name="events"track-metadata-position="footer"track-metadata-eventDetail="cloud.withgoogle.com/events"track-metadata-child_headline="engage"track-metadata-module="footer">
                      Events
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="//www.gcppodcast.com"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 6)"            track-type="footer link"track-name="podcast"track-metadata-position="footer"track-metadata-eventDetail="www.gcppodcast.com"track-metadata-child_headline="engage"track-metadata-module="footer">
                      Podcast
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/community/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 7)"            track-type="footer link"track-name="community"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/community/"track-metadata-child_headline="engage"track-metadata-module="footer">
                      Community
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="/press/"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 8)"            track-type="footer link"track-name="press center"track-metadata-position="footer"track-metadata-eventDetail="cloud.google.com/press/"track-metadata-child_headline="engage"track-metadata-module="footer">
                      Press center
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="//www.youtube.com/googlecloud"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 9)"            track-type="footer link"track-name="google cloud on youtube"track-metadata-position="footer"track-metadata-eventDetail="www.youtube.com/googlecloud"track-metadata-child_headline="engage"track-metadata-module="footer">
                      Google Cloud on YouTube
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="//www.youtube.com/googlecloudplatform"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 10)"            track-type="footer link"track-name="gcp on youtube"track-metadata-position="footer"track-metadata-eventDetail="www.youtube.com/googlecloudplatform"track-metadata-child_headline="engage"track-metadata-module="footer">
                      GCP on YouTube
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="//www.youtube.com/gsuite"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 11)"            track-type="footer link"track-name="g suite on YouTube"track-metadata-position="footer"track-metadata-eventDetail="www.youtube.com/gsuite/"track-metadata-child_headline="engage"track-metadata-module="footer">
                      G Suite on YouTube
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="//twitter.com/googlecloud"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 12)"            track-type="footer link"track-name="follow on twitter"track-metadata-position="footer"track-metadata-eventDetail="twitter.com/googlecloud"track-metadata-child_headline="engage"track-metadata-module="footer">
                      Follow on Twitter
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="//userresearch.google.com/?reserved=1&amp;utm_source=website&amp;Q_Language=en&amp;utm_medium=own_srch&amp;utm_campaign=CloudWebFooter&amp;utm_term=0&amp;utm_content=0&amp;productTag=clou&amp;campaignDate=jul19&amp;pType=devel&amp;referral_code=jk212693"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 13)"            track-type="footer link"track-name="join user research"track-metadata-position="footer"track-metadata-eventDetail="userresearch.google.com/?reserved=1&amp;utm_source=website&amp;Q_Language=en&amp;utm_medium=own_srch&amp;utm_campaign=CloudWebFooter&amp;utm_term=0&amp;utm_content=0&amp;productTag=clou&amp;campaignDate=jul19&amp;pType=devel&amp;referral_code=jk212693"track-metadata-child_headline="engage"track-metadata-module="footer">
                      Join User Research
                    </a>
                  </li>
                <li class="devsite-footer-linkbox-item">
                    <a href="//careers.google.com/cloud"
             class="devsite-footer-linkbox-link gc-analytics-event"
             data-category="Site-Wide Custom Events"
                         data-label="Footer Link (index 14)"            track-type="footer link"track-name="we are hiring join google cloud"track-metadata-position="footer"track-metadata-eventDetail="careers.google.com/cloud"track-metadata-child_headline="engage"track-metadata-module="footer">
                      We're hiring. Join Google Cloud!
                    </a>
                  </li>
              </ul>
    </li>
      </ul>
  </nav>
                  </devsite-footer-linkboxes>
        <devsite-footer-utility class="devsite-footer">
                      
<div class="devsite-footer-utility nocontent">
  
  <nav class="devsite-footer-utility-links">
        <ul class="devsite-footer-utility-list">
            <li class="devsite-footer-utility-item
                 ">
                        <a class="devsite-footer-utility-link gc-analytics-event"
           href="//about.google/"
           data-category="Site-Wide Custom Events"
           data-label="Footer About Google link"
                    track-type="footer link"
                    track-metadata-position="footer"
                    track-metadata-eventDetail="//about.google/"
                    track-name="about google"
                    track-metadata-module="utility footer"
         >
          About Google
        </a>
              </li>
            <li class="devsite-footer-utility-item
                 ">
                        <a class="devsite-footer-utility-link gc-analytics-event"
           href="//policies.google.com/privacy"
           data-category="Site-Wide Custom Events"
           data-label="Footer Privacy link"
                    track-type="footer link"
                    track-metadata-position="footer"
                    track-metadata-eventDetail="//policies.google.com/privacy"
                    track-name="privacy"
                    track-metadata-module="utility footer"
         >
          Privacy
        </a>
              </li>
            <li class="devsite-footer-utility-item
                 ">
                        <a class="devsite-footer-utility-link gc-analytics-event"
           href="//www.google.com/intl/en/policies/terms/regional.html"
           data-category="Site-Wide Custom Events"
           data-label="Footer Site terms link"
                    track-type="footer link"
                    track-metadata-position="footer"
                    track-metadata-eventDetail="//www.google.com/intl/en/policies/terms/regional.html"
                    track-name="site terms"
                    track-metadata-module="utility footer"
         >
          Site terms
        </a>
              </li>
            <li class="devsite-footer-utility-item
                 ">
                        <a class="devsite-footer-utility-link gc-analytics-event"
           href="/product-terms/"
           data-category="Site-Wide Custom Events"
           data-label="Footer Google Cloud terms link"
                    track-type="footer link"
                    track-metadata-position="footer"
                    track-metadata-eventDetail="/product-terms/"
                    track-name="google cloud terms"
                    track-metadata-module="utility footer"
         >
          Google Cloud terms
        </a>
              </li>
            <li class="devsite-footer-utility-item
                 devsite-footer-utility-button">
                <span class="devsite-footer-utility-description">Sign up for the Google Cloud newsletter</span>
                        <a class="devsite-footer-utility-link gc-analytics-event"
           href="/newsletter/"
           data-category="Site-Wide Custom Events"
           data-label="Footer Subscribe link"
                    track-type="footer link"
                    track-metadata-position="footer"
                    track-metadata-eventDetail="/newsletter/"
                    track-name="subscribe"
                    track-metadata-module="utility footer"
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
          <option value="es_419"
              track-metadata-original-language="en"
              track-metadata-selected-language="es_419"
              track-name="changed"
              track-type="languageSelector"
            >
        Español – América Latina
      </option>
          <option value="fr"
              track-metadata-original-language="en"
              track-metadata-selected-language="fr"
              track-name="changed"
              track-type="languageSelector"
            >
        Français
      </option>
          <option value="it"
              track-metadata-original-language="en"
              track-metadata-selected-language="it"
              track-name="changed"
              track-type="languageSelector"
            >
        Italiano
      </option>
          <option value="nl"
              track-metadata-original-language="en"
              track-metadata-selected-language="nl"
              track-name="changed"
              track-type="languageSelector"
            >
        Nederlands
      </option>
          <option value="pt_br"
              track-metadata-original-language="en"
              track-metadata-selected-language="pt_br"
              track-name="changed"
              track-type="languageSelector"
            >
        Português – Brasil
      </option>
          <option value="tr"
              track-metadata-original-language="en"
              track-metadata-selected-language="tr"
              track-name="changed"
              track-type="languageSelector"
            >
        Türkçe
      </option>
          <option value="zh_cn"
              track-metadata-original-language="en"
              track-metadata-selected-language="zh_cn"
              track-name="changed"
              track-type="languageSelector"
            >
        中文 – 简体
      </option>
          <option value="zh_tw"
              track-metadata-original-language="en"
              track-metadata-selected-language="zh_tw"
              track-name="changed"
              track-type="languageSelector"
            >
        中文 – 繁體
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
              <script type="application/json" analytics>[{"metrics": {}, "dimensions": {"dimension0": 39300020}, "gaid": ""}]</script>
<script type="application/json" gtm>{"parameters": {"freeTrialEligibleUser": "True", "language": {"requested": "en", "served": "en"}, "projectName": "Google Maps Platform", "scriptsafe": null, "signedIn": "False", "internalUser": "False"}, "tags": ["GTM-5CVQBG"]}</script>
          </devsite-analytics>
          <cloudx-recaptcha></cloudx-recaptcha>
    <script>
    (function(d,e,v,s,i,t,E){d['GoogleDevelopersObject']=i;
    t=e.createElement(v);t.async=1;t.src=s;E=e.getElementsByTagName(v)[0];
    E.parentNode.insertBefore(t,E);})(window, document, 'script',
    'https://www.gstatic.com/devrel-devsite/prod/va70c25da2af7c102a85bdfc215259d86fc5b2e57f33cbc810a173f52e333a7a1/js/app_loader.js', '[2,"en",null,"/js/devsite_app.js","https://www.gstatic.com/devrel-devsite/prod/va70c25da2af7c102a85bdfc215259d86fc5b2e57f33cbc810a173f52e333a7a1","https://www.gstatic.com/devrel-devsite/prod/va70c25da2af7c102a85bdfc215259d86fc5b2e57f33cbc810a173f52e333a7a1/cloud","https://cloud-dot-devsite-v2-prod.appspot.com",1,null,["/_pwa/cloud/manifest.json","/_static/images/video-placeholder.svg","https://www.gstatic.com/devrel-devsite/prod/va70c25da2af7c102a85bdfc215259d86fc5b2e57f33cbc810a173f52e333a7a1/cloud/images/favicons/onecloud/favicon.ico","https://www.gstatic.com/devrel-devsite/prod/va70c25da2af7c102a85bdfc215259d86fc5b2e57f33cbc810a173f52e333a7a1/cloud/images/cloud-logo.svg","https://fonts.googleapis.com/css?family=Google+Sans:400,500|Roboto:400,400italic,500,500italic,700,700italic|Roboto+Mono:400,500,700|Material+Icons"],1]')
  </script>  </body>
</html>