# Security Sentinel AI

Security Sentinel AI is an AI-assisted code security review tool built with React, Vite, Groq API, and Llama 3.3.

It helps developers review code snippets and identify common security risks such as SQL Injection, Cross-Site Scripting (XSS), hardcoded secrets, path traversal, and unsafe coding patterns.

Live Demo: https://security-sentinel-ai.vercel.app/

## Overview

This project combines frontend development, AI integration, and secure coding awareness.

Users can paste a code snippet into the application, run an AI-powered analysis, and receive structured feedback about potential vulnerabilities, severity level, explanation, and suggested remediation.

The goal of this project is not to replace professional security tools, but to demonstrate how AI can support developers in understanding common security risks and improving code quality.

## Tech Stack

* React
* Vite
* JavaScript
* CSS
* Groq API
* Llama 3.3
* Prompt engineering
* API integration
* OWASP security concepts
* Vercel deployment

## Features

* AI-assisted code security review
* Detection-oriented feedback for common vulnerabilities
* Severity-based vulnerability explanation
* Developer-friendly remediation guidance
* Clean and responsive user interface
* Fast frontend experience with Vite
* API integration with Groq-hosted LLM model
* Local analysis history management
* Error and loading state handling
* Deployed live demo with Vercel

## Security Topics Covered

The application is designed to reason about common software security issues, including:

* SQL Injection
* Cross-Site Scripting (XSS)
* Hardcoded secrets
* Path traversal
* Open redirect risks
* Unsafe dynamic code execution
* Error disclosure
* Weak authentication or authorization patterns
* General insecure coding practices

## How It Works

```text
User Code Input
↓
React Frontend
↓
Prompt Construction
↓
Groq API / Llama 3.3
↓
Structured Security Feedback
↓
User Interface Result
```

The frontend sends the user-provided code snippet to the AI model with a structured security-analysis prompt.

The response is displayed in a readable format so developers can understand the possible issue, why it matters, and how it could be improved.

## What This Project Demonstrates

* Building a modern React application with Vite
* Integrating an external AI API into a frontend project
* Designing prompts for structured security analysis
* Handling async API requests, loading states, and errors
* Presenting AI-generated results in a clean UI
* Applying OWASP and secure coding concepts
* Deploying a frontend application with Vercel
* Building an AI-assisted developer tool with security-focused use cases

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* A Groq API key

### Installation

Clone the repository:

```bash
git clone https://github.com/emreyildirim-33/security-sentinel-ai.git
cd security-sentinel-ai
```

Install dependencies:

```bash
npm install
```

Create an environment file:

```bash
touch .env
```

Add your Groq API key:

```env
VITE_GROQ_API_KEY=your_api_key_here
```

Run the development server:

```bash
npm run dev
```

The application will run locally at:

```text
http://localhost:5173
```

## Deployment

This project is deployed on Vercel.

Live Demo: https://security-sentinel-ai.vercel.app/

## Notes

This project focuses on AI-assisted security review, frontend AI integration, structured prompt design, and clear vulnerability feedback presentation.

For production use, API calls should ideally be routed through a backend proxy to avoid exposing API keys on the client side.

The tool is intended for first-pass security awareness and developer guidance, not as a replacement for professional penetration testing or enterprise-grade static analysis tools.

## Repository

GitHub: https://github.com/emreyildirim-33/security-sentinel-ai
