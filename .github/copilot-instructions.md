# Copilot Instructions for simple-vcard

## Project Overview
This repository contains a simple mobile-first landing page that displays basic contact information and networking links in a vCard format. The project focuses on creating a clean, responsive personal contact page.

## Development Guidelines

### Code Style & Standards
- Follow modern web development best practices
- Prioritize mobile-first responsive design
- Use semantic HTML5 elements
- Write clean, accessible CSS
- Optimize for performance and fast loading

### Technology Stack
- HTML5 for structure
- CSS3 for styling (prefer vanilla CSS or modern CSS features)
- Minimal JavaScript if needed
- Focus on simplicity and maintainability

### Key Principles
1. **Mobile-First Design**: Always start with mobile layout and progressively enhance for larger screens
2. **Accessibility**: Ensure the vCard is accessible to all users (semantic markup, alt text, proper contrast)
3. **Performance**: Keep the page lightweight and fast-loading
4. **SEO-Friendly**: Use proper meta tags and structured data for contact information
5. **Cross-Browser Compatibility**: Support modern browsers with graceful degradation

### File Organization
- Keep the project structure simple and flat
- Use descriptive filenames
- Separate concerns (HTML, CSS, JS in separate files when needed)
- Include proper documentation in README.md

### Contact Information Features
When working on contact features, consider:
- Phone numbers should be clickable (tel: links)
- Email addresses should be clickable (mailto: links)
- Social media links should open in new tabs
- Include proper microdata or JSON-LD for contact information
- Consider vCard download functionality (.vcf file generation)

### CSS Guidelines
- Use CSS Grid or Flexbox for layout
- Implement CSS custom properties (variables) for theming
- Follow BEM methodology for class naming if using classes
- Prefer CSS over JavaScript for animations and interactions
- Use relative units (rem, em, %) for responsive design

### Testing Considerations
- Test on multiple device sizes
- Validate HTML and CSS
- Check accessibility with screen readers
- Verify all contact links work correctly
- Test performance on slow connections

## Common Tasks
When asked to implement features, prioritize:
1. Contact information display and formatting
2. Social media integration
3. Responsive design improvements
4. Accessibility enhancements
5. Performance optimizations
6. Clean, semantic markup

## Examples of Good Practices
- Use `<address>` element for contact information
- Implement proper heading hierarchy (h1, h2, etc.)
- Add ARIA labels where needed
- Use CSS Grid for card layouts
- Implement proper focus states for keyboard navigation