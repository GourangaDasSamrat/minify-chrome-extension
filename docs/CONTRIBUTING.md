# Contributing to Minify

First off, thank you for considering contributing to Minify! It's people like you that make Minify such a great tool. We welcome contributions from everyone and are grateful for even the smallest of fixes.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Workflow](#development-workflow)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Community](#community)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainer.

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:

- Google Chrome browser (v88 or higher)
- A code editor (VS Code, Sublime Text, etc.)
- Git installed on your machine
- Basic knowledge of JavaScript, HTML, and CSS
- Familiarity with Chrome Extension development (helpful but not required)

### Setting Up Your Development Environment

1. **Fork the Repository**

   Click the "Fork" button at the top right of the repository page.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/YOUR-USERNAME/minify-extension.git
   cd minify-extension
   ```

3. **Add Upstream Remote**

   ```bash
   git remote add upstream https://github.com/GourangaDasSamrat/minify-chrome-extension
   ```

4. **Load Extension in Chrome**

   - Navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the cloned directory

5. **Configure API Key**
   - Get a Gemini API key from [Google AI Studio](https://aistudio.google.com/apikey)
   - Configure it in the extension options

## 🤔 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include as many details as possible:

**Bug Report Template:**

```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:

1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**

- OS: [e.g., Windows 10, macOS 12.0]
- Chrome Version: [e.g., 120.0.6099.109]
- Extension Version: [e.g., 1.0.0]

**Additional context**
Any other relevant information.
```

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

**Enhancement Template:**

```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
What you want to happen.

**Describe alternatives you've considered**
Any alternative solutions or features.

**Additional context**
Mockups, examples, or additional information.
```

### Your First Code Contribution

Unsure where to begin? Look for issues labeled:

- `good first issue` - Simple issues for newcomers
- `help wanted` - Issues that need assistance
- `bug` - Bug fixes needed
- `enhancement` - Feature requests

## 💻 Development Workflow

### Branch Naming Convention

Use descriptive branch names with prefixes:

- `feature/` - New features (e.g., `feature/export-summary`)
- `fix/` - Bug fixes (e.g., `fix/api-error-handling`)
- `docs/` - Documentation (e.g., `docs/update-readme`)
- `refactor/` - Code refactoring (e.g., `refactor/popup-logic`)
- `test/` - Adding tests (e.g., `test/content-extraction`)

### Development Process

1. **Create a Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**

   - Write clean, readable code
   - Follow the style guidelines
   - Test thoroughly

3. **Test Your Changes**

   - Load the extension in Chrome
   - Test all affected functionality
   - Test on different types of web pages
   - Verify API interactions work correctly

4. **Commit Your Changes**

   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Keep Your Fork Updated**

   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

6. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

## 🎨 Style Guidelines

### JavaScript Style Guide

- Use **ES6+** features (const, let, arrow functions, template literals)
- Use **2 spaces** for indentation
- Use **semicolons** at the end of statements
- Use **camelCase** for variable and function names
- Use **PascalCase** for class names
- Write **descriptive variable names** (avoid single letters except in loops)

**Example:**

```javascript
// Good
const getSummaryType = () => {
  const summaryType = document.getElementById("summary-type").value;
  return summaryType;
};

// Avoid
var x = () => {
  var y = document.getElementById("summary-type").value;
  return y;
};
```

### HTML/CSS Style Guide

- Use **semantic HTML5** elements
- Use **2 spaces** for indentation
- Use **kebab-case** for CSS classes
- Use **CSS custom properties** (variables) defined in `:root`
- Keep CSS organized by component

**Example:**

```html
<!-- Good -->
<div class="form-group">
  <label for="api-key">API Key</label>
  <input id="api-key" type="password" />
</div>

<!-- Avoid -->
<div class="formGroup">
  <label>API Key</label>
  <input type="password" />
</div>
```

### Code Comments

- Write comments for complex logic
- Use JSDoc for function documentation
- Keep comments up-to-date with code changes

**Example:**

```javascript
/**
 * Extracts article text from the current page
 * @returns {string} The extracted text content
 */
function getArticleText() {
  // Check for article tag first (most reliable)
  const article = document.querySelector("article");
  if (article) return article.innerText;

  // Fallback to collecting all paragraphs
  const paragraphs = Array.from(document.querySelectorAll("p"));
  return paragraphs.map((p) => p.innerText).join("\n");
}
```

## 📝 Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(popup): add export summary to PDF feature

fix(content): improve article text extraction for news sites

docs(readme): update installation instructions

refactor(api): simplify Gemini API error handling

style(css): improve dark theme contrast ratios
```

### Best Practices

- Use the imperative mood ("add" not "added")
- Keep subject line under 72 characters
- Capitalize the subject line
- Don't end subject line with a period
- Separate subject from body with a blank line
- Wrap body at 72 characters
- Use body to explain what and why, not how

## 🔄 Pull Request Process

### Before Submitting

- [ ] Test your changes thoroughly
- [ ] Update documentation if needed
- [ ] Follow the style guidelines
- [ ] Write meaningful commit messages
- [ ] Ensure no console errors or warnings
- [ ] Check that the extension loads without errors

### Submitting a Pull Request

1. **Push Your Changes**

   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create Pull Request**

   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Select your feature branch
   - Fill out the PR template

3. **PR Template**

   ```markdown
   ## Description

   Brief description of changes

   ## Type of Change

   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation update
   - [ ] Refactoring
   - [ ] Performance improvement

   ## Testing

   How you tested these changes

   ## Screenshots (if applicable)

   Add screenshots for UI changes

   ## Checklist

   - [ ] My code follows the style guidelines
   - [ ] I have tested my changes
   - [ ] I have updated documentation
   - [ ] My commits follow the convention
   - [ ] I have checked for console errors
   ```

### Review Process

1. **Maintainer Review**: A maintainer will review your PR within 1-2 weeks
2. **Feedback**: Address any requested changes
3. **Approval**: Once approved, your PR will be merged
4. **Recognition**: Your contribution will be acknowledged

### After Your PR is Merged

- Delete your feature branch (optional)
- Update your local main branch
- Celebrate your contribution! 🎉

## 🌟 Recognition

Contributors will be recognized in:

- The project README
- Release notes
- GitHub contributors page

## 💬 Community

### Communication Channels

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General questions and ideas
- **Pull Requests**: Code contributions and reviews

### Getting Help

If you need help:

1. Check existing documentation
2. Search closed issues for similar problems
3. Ask in GitHub Discussions
4. Open a new issue with the `question` label

## 📚 Resources

### Learning Resources

- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)
- [Gemini API Documentation](https://ai.google.dev/docs)
- [JavaScript MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)

### Useful Tools

- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Extension Reload](https://chrome.google.com/webstore/detail/extensions-reloader/fimgfedafeadlieiabdeeaodndnlbhid) - For quick testing

## ❓ Questions?

Don't hesitate to ask questions. We're here to help!

**Preferred Contact:**

- Open a GitHub Discussion for general questions
- Comment on relevant issues for specific concerns
- Email: [your-email@example.com] for private matters

---

## 🙏 Thank You!

Your contributions make Minify better for everyone. We appreciate your time and effort in helping improve this project!

**Happy Contributing! 🚀**

---

_This contributing guide is adapted from open-source contribution best practices and the [Contributor Covenant](https://www.contributor-covenant.org/)._
