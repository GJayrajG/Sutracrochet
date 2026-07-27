# \# Sutra Crochet \& Fine Jewelry Store

# 

# A fast, modern e-commerce and showcase website for \*\*Sutra\*\*, built using \[Astro](https://astro.build/), integrated with \[Decap CMS](https://decapcms.org/) for content management, and powered by \[Snipcart](https://snipcart.com/) for online shopping.

# 

# \---

# 

# \## 🚀 Features

# 

# \- \*\*Astro Architecture:\*\* Built for lightning-fast site performance and low JavaScript overhead.

# \- \*\*Dynamic Content:\*\* Automatically loads product cards and patterns from local Markdown files (`/products/\*.md`) using Astro’s eager file globbing.

# \- \*\*Headless CMS Integration:\*\* Integrated with Decap CMS at `/admin` for editing products, descriptions, prices, and media.

# \- \*\*Seamless E-commerce:\*\* Shopping cart, checkout, and item management handled securely via Snipcart.

# \- \*\*Custom UI Design:\*\*

# &#x20; - Dark-mode visual theme with gold accent palette (`#CDA047`).

# &#x20; - Hover-expandable collapsible sidebar navigation.

# &#x20; - Custom responsive product card grid layouts.

# &#x20; - Custom contact form and floating interactive action buttons.

# 

# \---

# 

# \## 🛠️ Tech Stack

# 

# \- \*\*Framework:\*\* Astro (vlatest)

# \- \*\*CMS:\*\* Decap CMS

# \- \*\*Payments / E-Commerce:\*\* Snipcart

# \- \*\*Styling:\*\* Custom CSS with CSS Variables

# \- \*\*Language:\*\* HTML / CSS / JavaScript / Markdown

# 

# \---

# 

# \## 📁 Project Structure

# 

# ```text

# sutracrochet-store/

# ├── public/

# │   ├── admin/

# │   │   ├── index.html       # Decap CMS entry point

# │   │   └── config.yml       # Decap CMS configuration

# │   └── images/              # Static assets and product images

# ├── src/

# │   ├── layouts/

# │   │   └── Layout.astro     # Base HTML layout (Sidebar, Snipcart scripts)

# │   ├── pages/

# │   │   └── index.astro      # Main storefront landing page

# │   └── products/            # Product catalog Markdown files

# ├── styles.css               # Global project styles \& variable definitions

# ├── astro.config.mjs

# └── package.json

