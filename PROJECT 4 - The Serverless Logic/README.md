
# PROJECT 4 — The Serverless Logic

## CloudCost — Serverless Cost Calculator

A Python-based serverless cost calculation service built using AWS Lambda and Amazon API Gateway.

This project was developed as part of the DecodeLabs Cloud Computing Internship.

The original assignment required a serverless function that accepts two numbers and returns their sum. I extended the implementation into a structured cost-calculation API while keeping the original calculation requirement at its core.

---

## 1. Project Overview

CloudCost demonstrates how a lightweight, event-driven backend operation can be implemented using AWS serverless services.

The service accepts structured cost information, validates the request, calculates the total cost, and returns a structured JSON response.

The API is exposed through Amazon API Gateway and protected using AWS IAM authentication.

Amazon CloudWatch is used for execution logging and basic observability.

---

## 2. Problem Statement

Cloud environments frequently involve small calculations related to:

- Compute usage
- Storage usage
- Service costs
- Usage processing
- Billing workflows
- Lightweight backend operations

For small event-driven workloads, maintaining an always-running server may introduce unnecessary infrastructure management.

The goal of this project was to implement the calculation logic using serverless compute and expose it through a controlled API interface.

---

## 3. Solution

I built a serverless cost calculation service that:

1. Receives a structured JSON request.
2. Authenticates the API request using IAM.
3. Routes the request through API Gateway.
4. Executes the calculation using AWS Lambda.
5. Validates required fields.
6. Validates cost values.
7. Calculates the total using Python `Decimal`.
8. Returns a structured JSON response.
9. Records execution information in CloudWatch.

---

## 4. Architecture

```text
Client / API Consumer
        |
        | HTTPS POST
        v
Amazon API Gateway
        |
        | IAM Authentication
        v
AWS Lambda
Python 3.14
        |
        +--> Request Validation
        |
        +--> Business Validation
        |
        +--> Cost Calculation
        |
        +--> JSON Response
        |
        v
Amazon CloudWatch
Execution Logs & Monitoring
