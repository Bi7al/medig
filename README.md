# MediG - Comprehensive Healthcare Platform

MediG is a full-stack healthcare platform enabling users to browse doctors by department, book appointments, and purchase medications online. Built with Next.js, React, and Tailwind CSS, it features a responsive design optimized for both desktop and mobile users.

## Overview

This is a modern, responsive healthcare web application built with [Next.js](https://nextjs.org/) and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Tech Stack

- **Framework**: Next.js 14.2.7 with App Router
- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Material-UI (MUI)
- **Animations**: Framer Motion
- **Charts**: MUI X-Charts

## Features

- **Responsive Design**: Optimized for desktop and mobile (layout shifts at 768px)
- **Department Browsing**: Browse doctors organized by medical departments
- **Doctor Listings**: View comprehensive doctor information and specialties
- **Appointment Booking**: Online appointment scheduling system
- **Online Pharmacy**: Purchase medications directly through the platform

## Project Structure

```
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Home landing page
│   ├── booking/           # Appointment booking page
│   ├── doctorspanel/      # Doctor department listing
│   └── pharmacy/          # Online pharmacy portal
├── Components/            # Reusable React components
│   ├── Navbar.tsx         # Navigation header
│   ├── Footer.tsx         # Footer
│   ├── Doctors/           # Doctor-related components
│   ├── Home/              # Home page sections
│   └── Meds/              # Pharmacy components
└── public/                # Static assets
```

## Getting Started

