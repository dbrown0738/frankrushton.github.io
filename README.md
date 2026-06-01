# Frank Rushton Neighborhood Association Website

A modern static website for the Frank Rushton Neighborhood Association, built with plain HTML, CSS, and vanilla JavaScript — no build tools required.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About |
| `events.html` | Events |
| `newsletter.html` | Newsletter |
| `resources.html` | Resources |
| `contact.html` | Contact |
| `style.css` | Global stylesheet |
| `nav.js` | Mobile navigation toggle |

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `frank-rushton-na`)
2. Upload all files in this folder to the repository root
3. Go to **Settings → Pages**
4. Under **Source**, select **Deploy from a branch**
5. Choose `main` branch, `/ (root)` folder, and click **Save**
6. Your site will be live at `https://<your-username>.github.io/<repo-name>/`

## Customizing Content

- **Events**: Edit `events.html` to add, remove, or update event cards
- **Newsletter Archive**: Edit `newsletter.html` to link to real PDF issues
- **Board Members**: Edit `about.html` to update names and roles
- **Resources**: Edit `resources.html` to add or remove links
- **Contact Info**: Edit `contact.html` to update the email, address, and meeting details
- **Colors/Fonts**: All design tokens are CSS variables at the top of `style.css`

## Contact Form Note

The contact form in `contact.html` shows a success message client-side for demonstration. To make it actually send emails, integrate a service like:
- [Formspree](https://formspree.io) — free tier available, just change the form action
- [Netlify Forms](https://www.netlify.com/products/forms/) — if hosting on Netlify
- [EmailJS](https://www.emailjs.com) — client-side email sending

## License

© Frank Rushton Neighborhood Association. All rights reserved.
