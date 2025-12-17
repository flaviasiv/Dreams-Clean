# Security Policy - Dreams-Clean Website

## Overview

This document outlines the security measures implemented for the Dreams-Clean website and provides guidelines for maintaining security best practices.

## Security Measures Implemented

### 1. Content Security Policy (CSP)

We have implemented a comprehensive Content Security Policy via `.htaccess` to prevent Cross-Site Scripting (XSS) attacks and other code injection vulnerabilities.

**Allowed Sources:**
- **Scripts:** Self-hosted, Google Analytics, Google Tag Manager, reCAPTCHA, Elfsight, CDN resources (jsDelivr, unpkg)
- **Styles:** Self-hosted, Google Fonts, CSS libraries from CDNs
- **Images:** Self-hosted and all HTTPS sources (for user-generated content)
- **Fonts:** Self-hosted and Google Fonts
- **Connections:** Google Analytics, Formspree, Google Tag Manager
- **Frames:** Google services (reCAPTCHA, Tag Manager)
- **Forms:** Self and Formspree.io

### 2. HTTP Security Headers

The following security headers are configured in `.htaccess`:

| Header | Value | Purpose |
|--------|-------|---------|
| `X-Frame-Options` | DENY | Prevents clickjacking attacks |
| `X-Content-Type-Options` | nosniff | Prevents MIME type sniffing |
| `Referrer-Policy` | strict-origin-when-cross-origin | Controls referrer information |
| `Permissions-Policy` | Restrictive | Disables unnecessary browser features |
| `Strict-Transport-Security` | 1 year | Forces HTTPS connections |
| `X-XSS-Protection` | 1; mode=block | Legacy XSS protection |

### 3. File Protection

- `.htaccess` configuration prevents directory browsing
- Sensitive files (`.env`, `.git`, configuration files) are blocked from public access
- `.gitignore` prevents committing sensitive data

### 4. Performance & Security

- GZIP compression enabled for faster load times
- Browser caching configured for static assets
- HTTPS enforced (requires SSL certificate)

## Public vs. Private Information

### ✅ Public Information (Safe to Expose)

The following identifiers are **public-facing** and meant to be in client-side code:

- **Google Analytics ID:** `G-B5RDPEQ8SE`
- **Google Tag Manager ID:** `GTM-5RCMRFCZ`
- **reCAPTCHA Site Key:** `6LcGiJQrAAAAAMx-tdlnHiLIuQ0PYDDBG7QMvyzX`
- **Formspree Form ID:** `mzzplddb`
- **Elfsight App ID:** `8e92152d-2ce7-40d9-a5ff-0e237cd9b752`

These are client-side identifiers required for services to function. The actual sensitive data (admin access, secret keys) is managed on the respective platforms and never exposed in frontend code.

### ❌ Private Information (Never Commit)

The following should **NEVER** be committed to version control or exposed:

- API secret keys
- Database credentials
- Admin passwords
- Private encryption keys
- OAuth client secrets
- reCAPTCHA secret key (different from site key)

## Third-Party Service Security

### Google Analytics & Tag Manager
- Analytics tracking is anonymous by default
- No personally identifiable information (PII) is sent without consent
- Data is processed according to Google's privacy policy

### Formspree
- Form submissions are transmitted over HTTPS
- Form endpoint is public but protected by reCAPTCHA
- Email notifications sent securely to configured address
- No sensitive data stored in frontend code

### reCAPTCHA Enterprise
- Protects contact form from spam and abuse
- Only the public site key is in the code
- Secret key is managed server-side by Google

### Elfsight Reviews Widget
- Third-party widget loaded over HTTPS
- App ID is public and safe to expose
- Widget operates in sandboxed environment

## Security Best Practices

### For Developers

1. **Never commit sensitive data:**
   - Use `.gitignore` to exclude `.env`, `node_modules`, etc.
   - Review changes before committing
   - Use `git status` to check staged files

2. **Keep dependencies updated:**
   - Regularly update third-party libraries
   - Monitor for security vulnerabilities
   - Use `npm audit` if dependencies are added

3. **Validate user input:**
   - Form validation is handled by HTML5 attributes
   - Server-side validation by Formspree
   - reCAPTCHA protects against bots

4. **Use HTTPS only:**
   - Ensure SSL certificate is active on Hostinger
   - Enable HTTPS redirect in `.htaccess` (commented by default)
   - Test with `https://` prefix

### For Content Managers

1. **Uploading media:**
   - Scan files for viruses before uploading
   - Use compressed images to improve performance
   - Avoid uploading documents with sensitive information

2. **Managing content:**
   - Don't include personal information unnecessarily
   - Follow privacy policy guidelines
   - Keep contact information up to date

## Hosting Configuration (Hostinger)

### Required Steps

1. **Enable .htaccess:**
   - Ensure `.htaccess` file is uploaded to root directory
   - Verify Apache `mod_headers` and `mod_rewrite` are enabled
   - Contact Hostinger support if headers don't apply

2. **SSL Certificate:**
   - Install SSL certificate via Hostinger control panel
   - Enable HTTPS redirect (uncomment in `.htaccess`)
   - Test with SSL Labs: https://www.ssllabs.com/ssltest/

3. **Verify Security Headers:**
   - Use https://securityheaders.com to test your domain
   - Ensure all headers are present
   - Aim for A+ grade

### Testing Checklist

After deploying security updates:

- [ ] Website loads correctly over HTTPS
- [ ] Google Analytics tracking works
- [ ] Google Tag Manager fires properly
- [ ] Contact form submits successfully
- [ ] reCAPTCHA challenges work
- [ ] Elfsight reviews widget displays
- [ ] No CSP violations in browser console (F12 → Console)
- [ ] Security headers present (check with securityheaders.com)
- [ ] No 500 errors from `.htaccess` configuration

## Reporting Security Issues

If you discover a security vulnerability, please report it responsibly:

1. **Do NOT** open a public GitHub issue
2. Email: contact@dreams-cleaning.com
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

We will respond within 48 hours and work to resolve the issue promptly.

## Compliance

### GDPR & Privacy

- Privacy policy available at `/privacypolicy.html`
- Cookie policy available at `/cookies.html`
- Terms and conditions at `/termsandconditions.html`
- Users can opt out of tracking via browser settings
- Contact information provided for data requests

### Data Collection

**What we collect:**
- Contact form submissions (name, email, address, service selection)
- Analytics data (page views, device info, location - anonymized)
- Cookies for analytics and functionality

**What we DON'T collect:**
- Credit card information
- Social security numbers
- Passwords or credentials
- Medical or health information

## Future Security Enhancements

### Recommended Improvements

1. **Subresource Integrity (SRI):**
   - Add integrity hashes to CDN resources
   - Ensures scripts haven't been tampered with
   - Example: `<script src="..." integrity="sha384-..." crossorigin="anonymous">`

2. **CSP Nonces/Hashes:**
   - Replace `'unsafe-inline'` with nonces for inline scripts
   - Requires build process or server-side rendering
   - Significantly improves CSP security

3. **Automated Security Scanning:**
   - Set up automated vulnerability scanning
   - Monitor for outdated dependencies
   - Regular penetration testing

4. **Rate Limiting:**
   - Implement rate limiting on contact form
   - Prevent brute force attempts
   - Configure via Hostinger or Cloudflare

5. **WAF (Web Application Firewall):**
   - Consider Cloudflare free tier
   - DDoS protection
   - Additional security rules

## Resources

- [OWASP Security Guidelines](https://owasp.org/)
- [Mozilla Security Headers](https://infosec.mozilla.org/guidelines/web_security)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
- [Security Headers Checker](https://securityheaders.com/)
- [SSL Labs Test](https://www.ssllabs.com/ssltest/)

---

**Last Updated:** 2025-12-17
**Version:** 1.0
**Contact:** contact@dreams-cleaning.com
