# Tech Rig Compliance Landing Page

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Deploy with default settings

## Features

- Mobile-first responsive design
- Fast loading with Next.js optimizations
- Lead capture form with validation
- Testimonials carousel with touch support
- FAQ accordion with Schema markup
- Floating CTA buttons on mobile
- Click-to-call functionality throughout

## Customization

### Adding Your Logo
Place your logo file in the `public` folder and update the Hero component to reference it.

### Updating Content
- Edit testimonials in `components/Testimonials.tsx`
- Update FAQs in `components/FAQ.tsx`
- Modify hero text in `components/Hero.tsx`

### Form Submissions
Currently logs to console. To integrate with your CRM/email service, update the API endpoint in `app/api/submit-lead/route.ts`

## Performance Optimizations

- Static generation for fast page loads
- Optimized images with next/image
- Minimal JavaScript bundle
- Tailwind CSS for efficient styling
- Lazy loading for below-fold content