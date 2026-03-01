# Security Policy

## 🔒 Our Commitment to Security

Security is a top priority for the Minify project. We take the security of our users' data and privacy seriously and are committed to ensuring that this extension is safe to use.

## 📋 Table of Contents

- [Supported Versions](#supported-versions)
- [Security Features](#security-features)
- [Reporting a Vulnerability](#reporting-a-vulnerability)
- [Security Best Practices](#security-best-practices)
- [Data Privacy](#data-privacy)
- [Third-Party Services](#third-party-services)
- [Known Limitations](#known-limitations)
- [Security Updates](#security-updates)

## 🛡️ Supported Versions

We release security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

**Note**: We always recommend using the latest version of Minify to ensure you have the most recent security patches and improvements.

## 🔐 Security Features

### Built-in Security Measures

1. **Secure API Key Storage**

   - API keys are stored using Chrome's `storage.sync` API
   - Keys are encrypted at rest by Chrome
   - Keys are never transmitted to any server except Google's Gemini API
   - No logging or tracking of API keys

2. **Minimal Permissions**

   - Only requests necessary Chrome permissions
   - `activeTab`: Limited to current tab only
   - `scripting`: Used only for content extraction
   - `storage`: Isolated storage for API keys
   - No access to browser history, bookmarks, or other sensitive data

3. **Content Security**

   - No execution of arbitrary code from external sources
   - All JavaScript is bundled with the extension
   - No inline scripts or eval() usage
   - Strict Content Security Policy (CSP)

4. **Network Security**

   - HTTPS-only connections to Gemini API
   - No third-party analytics or tracking
   - No data sent to servers other than Google's API
   - API requests are made directly from the extension

5. **Data Privacy**
   - Article text is processed temporarily and never stored
   - No user tracking or analytics
   - No cookies or persistent identifiers
   - No telemetry or usage data collection

## 🚨 Reporting a Vulnerability

We take all security vulnerabilities seriously. If you discover a security issue, please follow responsible disclosure practices.

### How to Report

**For security vulnerabilities, please DO NOT open a public GitHub issue.**

Instead, please report security vulnerabilities via one of these methods:

1. **Private Security Advisory** (Preferred)

   - Go to the [Security Advisory page](https://github.com/gouranga-das-samrat/minify-extension/security/advisories)
   - Click "Report a vulnerability"
   - Fill out the form with details

2. **Direct Email**
   - Email: [your-email@example.com]
   - Subject: "[SECURITY] Minify Vulnerability Report"
   - Include "SECURITY" in the subject line

### What to Include

Please provide the following information in your report:

```markdown
**Vulnerability Type**
(e.g., XSS, API key exposure, permission escalation)

**Affected Component**
(e.g., popup.js, content script, manifest.json)

**Severity**
Critical / High / Medium / Low

**Description**
A clear description of the vulnerability

**Steps to Reproduce**

1. Step one
2. Step two
3. See vulnerability

**Impact**
What an attacker could potentially do

**Proof of Concept**
Code, screenshots, or video demonstration (if applicable)

**Suggested Fix**
Your recommendations for fixing the issue (optional)

**Environment**

- Extension Version:
- Chrome Version:
- Operating System:
```

### Response Timeline

| Stage                   | Timeline                          |
| ----------------------- | --------------------------------- |
| **Initial Response**    | Within 48 hours                   |
| **Severity Assessment** | Within 1 week                     |
| **Fix Development**     | 1-4 weeks (depending on severity) |
| **Patch Release**       | As soon as fix is verified        |
| **Public Disclosure**   | 30 days after patch release       |

### Severity Levels

- **Critical**: Immediate threat to user security (API key theft, remote code execution)
- **High**: Significant security risk (data exposure, permission bypass)
- **Medium**: Moderate security concern (information disclosure, CSRF)
- **Low**: Minor security issue (non-sensitive info leak, minor logic flaw)

## ✅ Security Best Practices

### For Users

1. **API Key Safety**

   - Never share your Gemini API key with anyone
   - Use API keys only with this extension
   - Rotate keys regularly if exposed
   - Monitor API usage in Google AI Studio

2. **Extension Installation**

   - Only install from official sources
   - Verify the extension author before installation
   - Keep the extension updated
   - Review permissions before granting

3. **General Browser Security**
   - Keep Chrome updated to the latest version
   - Use strong passwords for your Google account
   - Enable two-factor authentication
   - Be cautious of phishing attempts

### For Developers

1. **Code Security**

   - Never commit API keys or sensitive data
   - Use `.gitignore` for local configuration files
   - Sanitize all user inputs
   - Validate data from external sources
   - Use secure coding practices

2. **Dependency Management**

   - Regularly audit dependencies for vulnerabilities
   - Keep libraries up to date
   - Minimize external dependencies
   - Use only trusted sources (CDNJS for Bootstrap Icons)

3. **Testing**
   - Test with various API key formats
   - Test error handling for API failures
   - Verify permission boundaries
   - Check for XSS vulnerabilities in content display

## 🔍 Data Privacy

### What Data We Collect

**We collect ZERO personal data. Specifically:**

- ✅ **API Key**: Stored locally in Chrome sync storage (encrypted by Chrome)
- ❌ **Article Content**: NOT stored, only processed temporarily
- ❌ **Summaries**: NOT stored, displayed only in popup
- ❌ **User Behavior**: NO tracking or analytics
- ❌ **Browsing History**: NO access or collection
- ❌ **Personal Information**: NO collection whatsoever

### Data Flow

```
User's Browser → Extract Article Text → Send to Gemini API → Display Summary
                                              ↓
                                    (Temporary processing only)
                                              ↓
                                    (No storage, no logging)
```

### Third-Party Data Sharing

- **Google Gemini API**: Article text is sent for summarization
  - Governed by [Google's Privacy Policy](https://policies.google.com/privacy)
  - API requests include only article content, no user identifiers
  - See Google's [Gemini API Terms](https://ai.google.dev/terms)

## 🔗 Third-Party Services

### Google Gemini API

- **Purpose**: AI-powered text summarization
- **Data Sent**: Article text content only
- **Data Stored**: According to Google's retention policies
- **Security**: HTTPS encrypted connections
- **Privacy Policy**: [Google Privacy Policy](https://policies.google.com/privacy)

### Bootstrap Icons

- **Purpose**: UI icons
- **Source**: Loaded from CDNJS (CDN)
- **Data Sent**: None
- **Security**: HTTPS only, subresource integrity (SRI) recommended

## ⚠️ Known Limitations

### Current Security Considerations

1. **API Key Storage**

   - API keys are stored in Chrome sync storage
   - While encrypted by Chrome, they sync across devices
   - Users should treat keys as sensitive credentials

2. **Content Extraction**

   - Extension can read all page content when activated
   - This is necessary for summarization but requires user trust
   - Limited to pages where user explicitly clicks the extension

3. **API Communication**

   - Article text is sent to Google's servers
   - Subject to Google's data handling practices
   - Users should avoid summarizing sensitive documents

4. **Extension Permissions**
   - `<all_urls>` permission required for universal content access
   - Only used when user actively requests a summary
   - Cannot be more restrictive due to Chrome Extension limitations

### Mitigations

- Extension only activates on user action (clicking icon)
- No background processing or automatic data collection
- Clear privacy policy and user documentation
- Open-source code for transparency and auditing

## 🔄 Security Updates

### Update Policy

- Security patches are released as soon as fixes are verified
- Critical vulnerabilities are prioritized for immediate release
- Users are notified through Chrome Web Store updates
- Security advisories are posted on GitHub

### Version History

| Version | Date | Security Updates                       |
| ------- | ---- | -------------------------------------- |
| 1.0.0   | 2025 | Initial release with security measures |

### Staying Informed

- Watch the GitHub repository for security advisories
- Enable automatic extension updates in Chrome
- Check the [Releases page](https://github.com/gouranga-das-samrat/minify-extension/releases) for changelogs

## 🛠️ Security Audit

### Self-Audit Checklist

We regularly review:

- [ ] Permission usage and justification
- [ ] API key storage and encryption
- [ ] Network communication security
- [ ] Content Security Policy (CSP)
- [ ] Input validation and sanitization
- [ ] Error handling and information disclosure
- [ ] Third-party dependency vulnerabilities
- [ ] Code injection prevention

### External Audits

We welcome security researchers to audit our code:

- All code is open-source and available for review
- Security researchers who find and responsibly disclose vulnerabilities may be acknowledged in release notes
- Bounty program: Currently not available (open-source project)

## 📞 Contact

### Security Team

For security-related inquiries:

- **Security Email**: [your-email@example.com]
- **Response Time**: Within 48 hours
- **PGP Key**: Available upon request

### General Contact

For non-security issues:

- **GitHub Issues**: [Project Issues](https://github.com/gouranga-das-samrat/minify-extension/issues)
- **General Email**: [your-email@example.com]
- **Portfolio**: [gouranga.qzz.io](https://gouranga.qzz.io/)

## 🙏 Acknowledgments

We would like to thank the following security researchers and contributors:

_No security vulnerabilities reported yet. Be the first to help make Minify more secure!_

---

## 📚 Additional Resources

- [Chrome Extension Security Best Practices](https://developer.chrome.com/docs/extensions/mv3/security/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Google's Security Standards](https://www.google.com/about/appsecurity/)
- [Responsible Disclosure Guidelines](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html)

---

**Version**: 1.0

---

_Thank you for helping keep Minify and its users safe!_ 🔒
