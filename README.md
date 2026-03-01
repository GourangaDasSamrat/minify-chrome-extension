# Minify – One-Click Page Summaries

A powerful Chrome extension that leverages Google's Gemini AI to generate intelligent, contextual summaries of web pages with a single click.

## 📺 Demo

> **Video Tutorial**: [Watch on YouTube]()
> See Minify in action! This video demonstrates installation, configuration, and usage of all summary modes.

## ✨ Features

* **⚡ One-Click Summarization**: Instantly summarize any web page.
* **🎯 Multiple Summary Modes**:
* **Brief**: Quick 2-3 sentence overview.
* **Detailed**: Comprehensive summary with all key points.
* **Bullet Points**: 5-7 key insights in easy-to-scan format.


* **📋 Copy to Clipboard**: Quickly copy summaries for use elsewhere.
* **🌙 Dark Theme UI**: Modern, eye-friendly interface.
* **🔒 Secure API Storage**: Your Gemini API key is stored securely in Chrome's sync storage.
* **⚡ Fast Processing**: Powered by `gemini-2.0-flash` for quick results.

## 🚀 Quick Start

### 1. Installation

The easiest way to install is to download the latest `.zip` from the [Releases](https://github.com/GourangaDasSamrat/minify-chrome-extension/releases) page.

1. Download `minify-extension.zip`.
2. Unzip the folder.
3. Open Chrome and go to `chrome://extensions/`.
4. Enable **Developer mode**.
5. Click **Load unpacked** and select the unzipped folder.

### 2. Configure Your API Key

1. Get a Gemini API key from [Google AI Studio](https://aistudio.google.com/apikey).
2. Click the **Minify** icon in your browser and go to **Options**.
3. Paste your key and click **Save**.

## 📁 Project Structure

```text
.
├── .github/workflows/   # CI/CD (Auto-release on tags)
├── js/
│   ├── background.js    # Service worker
│   ├── content.js       # Text extraction logic
│   ├── options.js       # API Key management
│   └── popup.js         # UI logic
├── manifest.json        # Extension Manifest V3
├── options.html         # Settings UI
├── popup.html           # Main Extension UI
├── style.css            # Shared Styles
└── docs/                # Documentation & Policies

```

## 🔧 Development & Automation

### Release Workflow

This project uses **GitHub Actions** for automated releases. To trigger a new release:

1. Update the version in `manifest.json`.
2. Tag your commit: `git tag v1.x.x`.
3. Push the tag: `git push origin v1.x.x`.
4. The workflow will automatically bundle the extension into a ZIP and create a GitHub Release titled **Minify v1.x.x**.

### Local Development

1. Clone the repo: `git clone https://github.com/GourangaDasSamrat/minify-chrome-extension.git`
2. Make changes to the `js` or `css` files.
3. Reload the extension in `chrome://extensions/` to see changes.


## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](https://www.google.com/search?q=./docs/CONTRIBUTING.md) before submitting pull requests.

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes.
4. Push and open a Pull Request.

## ⚠️ Limitations

- Summary quality depends on the structure of the source webpage.
- Very large pages may be truncated before sending to the Gemini API.
- Requires a valid Gemini API key to function.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://www.google.com/search?q=./LICENSE) file for details.

---

**Made with ❤️ by [Gouranga Das Samrat**](https://gouranga.qzz.io/)
