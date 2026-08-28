# 🌍 Project 1 — The Global Launch

## DecodeLabs Internship — Cloud Computing (AWS/Azure)

**Project Status:** ✅ Completed  
**Cloud Platform:** Amazon Web Services (AWS)  
**Cloud Service:** Amazon S3  
**Region:** Asia Pacific (Mumbai) — `ap-south-1`  
**Project Type:** Static Website Cloud Deployment

---

## 🔗 Live Demo

### 🌐 [View Live Portfolio](http://ankita-bodhankar-portfolio.s3-website.ap-south-1.amazonaws.com)

**AWS S3 Website:**  
http://ankita-bodhankar-portfolio.s3-website.ap-south-1.amazonaws.com

---

## 📌 Project Overview

**The Global Launch** is the first cloud deployment project of my DecodeLabs Cloud Computing internship.

The objective was to take a personal portfolio website and host it globally using **cloud object storage**, without provisioning or maintaining a traditional web server.

Instead of using an EC2 instance or virtual machine, I used **Amazon S3 Static Website Hosting** to store and serve the website's static files.

The project demonstrates a practical cloud deployment workflow involving:

- Cloud object storage
- Static website hosting
- S3 bucket configuration
- Public access configuration
- Bucket policies
- Website deployment
- Cloud-based testing and verification

---

## 🎯 Project Objective

The project scenario required a freelance developer to provide a personal portfolio website that could be accessed publicly over the internet without maintaining an expensive traditional server.

### Main objectives

- Create an AWS S3 storage bucket
- Upload the portfolio website
- Host HTML, CSS and JavaScript files using S3
- Configure static website hosting
- Configure the required public access
- Create an S3 bucket policy
- Deploy the website to the cloud
- Generate a publicly accessible website endpoint
- Test the deployed website
- Document the complete deployment

---

# 🧑‍💻 What I Built

I developed and deployed a responsive personal developer portfolio containing:

- Personal introduction
- About section
- Technical skills
- Projects
- Education
- Achievements
- Contact information
- Resume download
- Custom 404 error page

### Website Technologies
🛠️ Tech Stack
Frontend
      HTML5
      CSS3
      JavaScript
Cloud
      Amazon S3
      S3 Static Website Hosting
      S3 Bucket Policy
Tools
      Visual Studio Code
     Git
     GitHub
     Web Browser
---

# 🏗️ Cloud Architecture

```text
                         INTERNET
                            │
                            ▼
                    ┌───────────────┐
                    │     USER      │
                    └───────┬───────┘
                            │
                            │ HTTP Request
                            ▼
                 ┌──────────────────────┐
                 │      AMAZON S3       │
                 │                      │
                 │ Static Website       │
                 │ Hosting              │
                 └──────────┬───────────┘
                            │
             ┌──────────────┼──────────────┐
             │              │              │
             ▼              ▼              ▼
        index.html      style.css      script.js
                                           │
                                           ▼
                                        assets/
                                           │
                                           ▼
                                      Resume PDF
