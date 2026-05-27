(function () {
  var b = window.MITL_BASE || '';
  var path = window.location.pathname;
  var file = path.split('/').pop().toLowerCase();
  var inNewsDir = path.indexOf('/news/') !== -1;

  var homeActive    = file === 'index.html' || file === '';
  var courseActive  = file.indexOf('course') === 0;
  var newsActive    = file === 'news.html' || inNewsDir;
  var aboutActive   = file === 'about.html';
  var contactActive = file === 'contact.html';

  function a(cond) { return cond ? ' class="active"' : ''; }

  var PHONE_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>';
  var EMAIL_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>';
  var FB_SVG = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>';
  var IG_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>';
  var LI_SVG = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>';
  var YT_SVG = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#0B2545"/></svg>';
  var SHIELD_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><polyline points="9 12 11 14 15 10"/></svg>';
  var MENU_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';

  var header =
    '<div class="topbar">' +
      '<div class="container">' +
        '<div class="topbar-meta">' +
          '<span>' + PHONE_SVG + '+94 78 486 6002</span>' +
          '<span>' + EMAIL_SVG + 'info@mitl.university</span>' +
        '</div>' +
        '<div class="topbar-social">' +
          '<a href="#" aria-label="Facebook">' + FB_SVG + '</a>' +
          '<a href="#" aria-label="Instagram">' + IG_SVG + '</a>' +
          '<a href="#" aria-label="LinkedIn">' + LI_SVG + '</a>' +
          '<a href="#" aria-label="YouTube">' + YT_SVG + '</a>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<header class="site-header">' +
      '<div class="container">' +
        '<a class="brand" href="' + b + 'index.html">' +
          '<img src="' + b + 'assets/mitl-logo (1).png" alt="MITL Campus" />' +
          '<span class="brand-text">' +
            '<span class="brand-name">MITL Campus</span>' +
            '<span class="brand-tag">The turning point in your life</span>' +
          '</span>' +
        '</a>' +
        '<nav class="nav" aria-label="Primary">' +
          '<a href="' + b + 'index.html"' + a(homeActive) + '>Home</a>' +
          '<a href="' + b + 'courses.html"' + a(courseActive) + '>Courses</a>' +
          '<a href="' + b + 'news.html"' + a(newsActive) + '>News</a>' +
          '<a href="' + b + 'about.html"' + a(aboutActive) + '>About Us</a>' +
          '<a href="' + b + 'contact.html"' + a(contactActive) + '>Contact</a>' +
          '<a href="https://www.certitrust.lk/" target="_blank" rel="noopener" class="nav-verify" title="Verify a MITL certificate">' + SHIELD_SVG + 'Certificate Verification</a>' +
          '<a href="' + b + 'contact.html#apply" class="nav-cta">Apply Now</a>' +
        '</nav>' +
        '<button class="menu-toggle" aria-label="Menu">' + MENU_SVG + '</button>' +
      '</div>' +
    '</header>';

  var footer =
    '<footer class="site-footer">' +
      '<div class="container">' +
        '<div class="footer-grid">' +
          '<div>' +
            '<div class="footer-brand">' +
              '<img src="' + b + 'assets/mitl-logo (1).png" alt="MITL Campus" />' +
              '<span class="footer-brand-name">MITL Campus</span>' +
            '</div>' +
            '<p class="footer-about">A premier platform for professional education in Sri Lanka — delivering industry-recognized diplomas, language programmes and international academic pathways.</p>' +
          '</div>' +
          '<div>' +
            '<h4>Quick Links</h4>' +
            '<ul class="footer-list">' +
              '<li><a href="' + b + 'index.html">Home</a></li>' +
              '<li><a href="' + b + 'courses.html">Courses</a></li>' +
              '<li><a href="' + b + 'news.html">News</a></li>' +
              '<li><a href="' + b + 'about.html">About Us</a></li>' +
              '<li><a href="' + b + 'contact.html">Contact</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h4>Programmes</h4>' +
            '<ul class="footer-list">' +
              '<li><a href="' + b + 'course-business.html">Diploma in Business</a></li>' +
              '<li><a href="' + b + 'course-it.html">Diploma in IT</a></li>' +
              '<li><a href="' + b + 'course-engineering.html">Diploma in Engineering</a></li>' +
              '<li><a href="' + b + 'course-jlpt.html">JLPT Japanese</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h4>Get in touch</h4>' +
            '<p class="footer-contact">' +
              '<strong>Address</strong><br/>No. 215/25, Colombo Road, Raththanapitiya, Boralesgamuwa, Sri Lanka<br/><br/>' +
              '<strong>Phone</strong> <a href="tel:+94784866002">+94 78 486 6002</a><br/>' +
              '<strong>Email</strong> <a href="mailto:info@mitl.university">info@mitl.university</a>' +
            '</p>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<div>© 2026 MITL Campus. All rights reserved.</div>' +
          '<div class="footer-socials">' +
            '<a href="#" aria-label="Facebook">' + FB_SVG + '</a>' +
            '<a href="#" aria-label="Instagram">' + IG_SVG + '</a>' +
            '<a href="#" aria-label="LinkedIn">' + LI_SVG + '</a>' +
            '<a href="#" aria-label="YouTube">' + YT_SVG + '</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</footer>';

  var headerRoot = document.getElementById('header-root');
  var footerRoot = document.getElementById('footer-root');
  if (headerRoot) headerRoot.outerHTML = header;
  if (footerRoot) footerRoot.outerHTML = footer;
})();
