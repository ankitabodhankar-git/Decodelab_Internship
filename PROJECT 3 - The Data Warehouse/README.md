# The Data Warehouse

A secure, managed MySQL database architecture built on AWS using Amazon RDS and Amazon EC2.

## 📌 Overview

This project demonstrates how a cloud-based application can store and manage structured data using a managed relational database.

I provisioned a private MySQL database on Amazon RDS, connected it to an Amazon EC2 compute environment, designed an `Interns` data model, inserted 20 records, and verified that the data remained persistent after reconnecting to the database.

## 🚀 Features

- Managed MySQL database using Amazon RDS
- Private database deployment with public access disabled
- EC2-to-RDS connectivity within an AWS VPC
- Security Group controlled access on TCP port `3306`
- Structured `Interns` relational table
- `PRIMARY KEY`, `AUTO_INCREMENT`, `NOT NULL`, and `UNIQUE` constraints
- 20 sample records with persistence verification
- Database structure and record-count verification
- Secure SSH access to the EC2 environment
- Practical troubleshooting of networking, SSH, SQL client, and database connectivity issues

---

## 🛠️ Tech Stack

**Cloud:** AWS  
**Compute:** Amazon EC2  
**Database:** Amazon RDS - MySQL  
**Networking:** Amazon VPC, AWS Security Groups  
**Database:** MySQL  
**Tools:** Linux, SSH, MySQL Client, SQL

---

## ⚙️ How It Works

1. Connect to EC2 using SSH.
2. Run the MySQL client from the EC2 environment.
3. Connect EC2 to the private RDS endpoint through TCP `3306`.
4. Select `DecodeLabsDB`.
5. Create and manage the `Interns` table.
6. Insert 20 records.
7. Verify the data using SQL queries.
8. Reconnect and verify data persistence.

---

## 🗄️ Database Design

**Database:** `DecodeLabsDB`

**Table:** `Interns`

| Column | Type | Constraint |
|---|---|---|
| `InternID` | INT | PRIMARY KEY, AUTO_INCREMENT |
| `Name` | VARCHAR(50) | NOT NULL |
| `Role` | VARCHAR(50) | NOT NULL |
| `Email` | VARCHAR(100) | UNIQUE, NOT NULL |

---

## 🔐 Security

- RDS public access disabled
- MySQL access restricted to TCP `3306`
- EC2-to-RDS communication controlled through Security Groups
- SSH restricted to the configured IP
- Database credentials excluded from GitHub

---

## 🧠 Challenges & How I Solved Them

### RDS Availability Zone Capacity
**Problem:** Initial provisioning failed because of insufficient capacity.

**Fix:** Selected another available Availability Zone and successfully created the RDS instance.

### EC2 → RDS Timeout
**Problem:** Initial MySQL connection timed out.

**Fix:** Checked VPC, port `3306`, and Security Groups, then configured the EC2-to-RDS connection.

### SSL Client Compatibility
**Problem:** The AWS-provided SSL option was not supported by the installed client.

**Fix:** Used the RDS CA certificate bundle with the supported SSL verification options.

### SSH Timeout
**Problem:** SSH stopped working after my public IP changed.

**Fix:** Updated the EC2 Security Group SSH rule to the current IP.

### SQL in PowerShell
**Problem:** Accidentally ran a MySQL query in PowerShell.

**Fix:** Reconnected to MySQL and executed the query from the MySQL prompt.

### Connection Reset
**Problem:** SSH session was unexpectedly reset.

**Fix:** Reconnected and verified that the RDS data was still available.

---

## 📚 What I Learned

- Managed database provisioning with Amazon RDS
- EC2-to-RDS private connectivity
- VPC and Security Group networking
- MySQL schema design and constraints
- SQL data insertion and validation
- Data persistence testing
- SSH and Linux administration
- SSL certificate-based database connectivity
- Systematic cloud troubleshooting

**Key takeaway:** Identify the failing layer — client, database, network, security, or server — before changing the configuration.

---

## 📸 Screenshots

The `screenshots/` folder contains:

- RDS provisioning
- RDS security configuration
- EC2-to-RDS connection
- 20 `Interns` records
- Database structure
- Persistence verification

---

## 👩‍💻 Author

**Ankita Bodhankar**

[LinkedIn](https://www.linkedin.com/in/ankita-bodhankar-114b12396/) 
