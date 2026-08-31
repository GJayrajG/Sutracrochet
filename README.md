# SutraCrochet E-Commerce Platform

A bespoke, headless e-commerce website for handcrafted crochet items and fine jewelry.

## Project Overview

This project serves as the digital storefront for SutraCrochet. It is built on the **Astro** framework for enhanced performance and component-based architecture, integrated with **MongoDB Atlas** for modern cloud database management. It maintains a focus on a clean, dark-themed UI, responsive design, and seamless cart functionality.

## Tech Stack

*   **Frontend:** Astro, HTML5, CSS3
*   **Database:** MongoDB Atlas (Cloud NoSQL Database)
*   **E-Commerce:** Snipcart (Headless Cart API)
*   **Deployment:** Netlify / Static Host

## Key Features

*   **Static Site Generation:** Lightning-fast page loads powered by Astro with build-time data fetching.
*   **Cloud Database Integration:** Products are queried directly from MongoDB Atlas at build time.
*   **Responsive Navigation:** Collapsible sidebar for seamless browsing.
*   **Secure Checkout:** Integrated with Snipcart to handle transactions in Indian Rupees (INR).
*   **Custom Animations:** Pure CSS hover states and constrained, responsive product cards.

## Getting Started

### Prerequisites
- Node.js (>= 22.12.0)
- MongoDB Atlas cluster

### Setup
1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```env
   MONGODB_URI="your_mongodb_atlas_connection_string"
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```