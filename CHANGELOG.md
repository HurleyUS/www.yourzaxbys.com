# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Security

- Encrypted SSN fields using AES-256 encryption instead of storing plaintext (#11)
- Restricted email domains to company-approved domains only (#12)

### Fixed

- Employee ID validation and uniqueness enforcement (#12)
- SSN input masking and secure display in UI (#11)

### Changed

- Email domain whitelist for employee registration (#12)
- Employee ID format standardization (#12)

## [1.0.0] - 2024-10-15

### Added

- Comprehensive Zaxby's franchise management platform
- Performance analytics dashboard with real-time metrics
- HR management system with hiring, onboarding, and training workflows
- Uniform management and allocation tracking
- Maintenance ticket system and equipment management
- Catering CRM and local marketing tools
- Scrollable pitch deck landing page
- Privacy policy page for Google Cloud compliance
- Requirements documentation
- CTA button functionality with placeholder handlers

### Security

- Fixed XSS vulnerability in chart component CSS injection
- Added CSS sanitization for user-provided config values
- Replaced Node.js Buffer API with browser-compatible `atob()`
- Added comprehensive error handling to API routes

### Fixed

- Invalid Tailwind CSS classes in chart component
- Progress component accessibility (missing value prop)
- Type safety issues with `toLocaleString()` calls
- Premature redirects during async data loading
- Updated privacy policy dates for compliance
- Fixed repository URL in documentation

### Changed

- Updated project name and description in package.json
- Removed incorrect `bun` dependency
- Enhanced loading states for better UX
- Improved error handling throughout the application

### Technical

- Added proper type guards for runtime safety
- Implemented loading states to prevent race conditions
- Enhanced accessibility with proper ARIA attributes
- Added comprehensive error boundaries and logging

---

## [0.1.0] - 2024-01-01

### Added

- Initial Next.js project setup
- Basic UI components with Radix UI
- Convex backend integration
- Clerk authentication setup
- Sentry error monitoring
- Tailwind CSS styling system
