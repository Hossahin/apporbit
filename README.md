# Tech Discovery Platform

A modern and community-driven platform where users can discover, share, and review the latest tech products including Web Apps, AI tools, Software, Games, and Mobile Apps. Inspired by [Product Hunt](https://producthunt.com), this platform empowers tech enthusiasts to contribute, engage, and explore innovative products.

---

## Project Overview

This platform provides a space for users to:

- Submit and showcase their tech products  
- Upvote products based on community feedback  
- Post honest and detailed reviews  
- Discover trending tools across various categories  

---

## Live Demo

[Visit the Live App](https://assignment-12-apporbit.web.app/)

---

## Authentication & User Roles

The system supports role-based access control with the following roles:

- **Users:** Can submit products, vote, and write reviews  
- **Moderators:** Can manage product submissions and moderate reviews  
- **Admins:** Have full control over users and platform statistics  

---

## Dashboard Routing

The dashboard interface dynamically adapts based on the authenticated user's role:

### User Dashboard
- My Profile – View and update personal profile  
- Add Product – Submit a new product  
- My Products – Manage your submitted products  

### Moderator Dashboard
- Review Queue – View and approve new products pending moderation  
- Reported Contents – Manage and resolve user-reported content  

### Admin Dashboard
- Statistics Page – View platform analytics and metrics  
- Manage Users – Manage all users and their roles  
- Manage Coupons – Create and manage discount coupons for premium access  

---

## Features

- Product submission system  
- Upvote functionality  
- Product reviews and ratings  
- Secure authentication  
- Role-based dashboards (User / Moderator / Admin)  
- Moderation tools for content review  
- Stripe-integrated payment system for premium access  
- Trending and featured product sections  

---

## Tech Stack

### Frontend
- React  
- React Router  
- Tailwind CSS  
- AOS (Animate On Scroll)  
- Swiper  
- React Icons  
- React CountUp  
- React Fast Marquee  
- React Dropzone  
- React Hook Form  
- React Simple Star Rating  
- React Spinners  
- React Tooltip  
- Recharts  
- Motion  
- Lottie React  

### Backend & Data
- Firebase (Authentication, Firestore, Hosting)  
- Axios (API calls)  
- Date-fns  
- TanStack React Query  

### Payments
- Stripe  
- @stripe/react-stripe-js  
- @stripe/stripe-js  

### UI Tools
- SweetAlert2  
- React Tag Input  

---

## Future Improvements

- Real-time review system  
- Analytics dashboard for product owners  
