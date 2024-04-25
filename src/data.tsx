import React, { useState } from 'react';

export interface RadioOption {
    label: string;
    value: string;
  }
  
export interface DataRow {
    label: string;
    radioOptions: RadioOption[];
  }
  
export const UIData: DataRow[] = [
    { 
        "label": "Azure Work", 
        "radioOptions": [
            { "label": "By Project", "value": "Give me all projects where I used Azure" },
            { "label": "By Year", "value": "Work done with Azure for each project in years" },
            { "label": "Highlights", "value": "Contribution highlights specific to Azure" }
      ], 
    },
    { 
        "label": ".NET Work", 
        "radioOptions": [
            { "label": "WPF", "value": "Please list WPF work done for clients" },
            { "label": "Option B", "value": "optionB" },
            { "label": "Option C", "value": "optionC" }
      ],  
    },
    { 
        "label": "Architecture", 
        "radioOptions": [
            { "label": "System", "value": "Please give me a summary of System Architecture Work" },
            { "label": "Option B", "value": "optionB" },
            { "label": "Option C", "value": "optionC" }
      ], 
    },
];

export const  resumeText = `DrFit Cloud Architecture 🔎
Domain Driven Design & Architecture – Patterns 🔎
Azure cloud hosted DDD & pattern-based architecture is highly scalable for the potentially large numbers of users around the world. Core domain sub domains identified, distilled further into bounded contexts which are then mapped to implementation patterns. Generic & Supporting domains are also identified and mapped to already implemented patterns. Besides the largely Tactical DDD, important elements of Strategic-DDD like CI/CD and upstream-downstream Context Mapping were identified. 
Infrastructure – Shared IaC 
	Your atypical AAD, Key Vault, Monitoring & Insights resources, shared resources like ACR, AAD B2C for custom identity management & Azure Search were also provisioned 
Fitness Mobile Application – Xamarin
	Support for indoor bike sessions, outdoor runs, indoor gym circuit training, indoor and outdoor bootcamps. Vital here is the proprietary tech developed for a real time view of multiple participant progress with custom map overlays and markers
	UI build around Xamarin Forms with MVVMCross + lots of useful nuget packages with Skia Sharpnado doing some of the heavy lifting
	iWatch & iOS IoT device sensor data streaming was managed by carefully developed low latency managers able to stream JSON to the cloud. Custom integration of IoT Edge BLE Smart Trainer with IoT Gateway such as iOS & Droid devices
Workout Data Streaming
	IoT + Service Bus 🔎 Workout data is streamed live from sensors on IoT devices to Azure IoT hubs, routed via ASA to the correct Service Bus Topic based on the IoT device time zone, province and city 
	Stream Analytics 🔎 Data from IoT hubs is routed to ASA for sensor data Anomaly detection and then queued to Service Bus Topics. Evaluated Kafka against Service Bus but decided to go with Service Bus
API Management – AKS Microservices 🔎
	All our Functions are rolled out via containers running in an AKS cluster behind an internal load balancer. Azure API Gateway subnet is setup to resource provides routing, offloading and security management plus throttling & aggregation features for future needs
	DrFit Microservices 🔎framework is all based around durable orchestrations and functions with minimal effort handling of any key vault secured and non-secured configuration information, storage, logging, extensions to the underlying IoC/DI AutoFac facilities
•	Onboarding domain - Notifications, Device, Azure Resources Access keys/tokens, Role and Account Management
•	Messaging domain – Endpoints, Routing/Channels & Systems Management
•	Front End Workout domain – Workout Selection, Workout Tracking, Workout History, Workout Groups & more
	Logic Apps
•	Onboarding flows & more
DrFitAdmin – App Services
	Phase I, Node.js + React based Admin Application load balanced using Azure Front Door 
DrFitBot – Bot Services 🔎
	Full Chatbot integration into the Xamarin app via the web chat channel required some challenging Xamarin side customizations
	Azure Chatbot supported Virtual Trainer. In addition to QnA the Multi-turn Bot uses the Dispatch Tool for best match determination including from LUIS apps 
	A more conversational style using the latest Bot Framework tech such as adaptive dialogs, LUIS, LG and skillbots is under development currently.

Fitness Guidance – Databricks/Spark Machine Learning
	WIP - Intelligent fitness training guidance via Azure ML models developed using collected health, motion and location data. The general idea is to test out these models with Spark + Power BI and then fold these models into the Chat Bot backend
DevOps
	CI/CD pipelines are mostly built using the classic pipeline UI but later in the engagement resources like AKS clusters and Chat Bots are rolled out using Terraform and YAML builds & deployments
Testing
	Built a WPF based Azure IoT/Azure Service Bus Explorer from scratch to monitor data streaming in real time
DR/HA
	Chat Bot – Provided by a full alternate provisioning in another Azure region and DNS load balancing via Azure Traffic Manager
	API Management + Azure Functions on AKS - Provided by a full alternate provisioning in another Azure region and DNS load balancing via Azure Traffic Manager
	Azure IoT – In addition to the OOTB intra-region HA the plan is to leverage the Manual Failover provided by Azure at no extra cost with a periodic Manual Failover test
	Azure Service Bus – For now using partitioned service bus topics in the standard SKU. The plan for DR is to switch to the Premium SKU which supports primary-secondary namespace pairing via geo-replication with the existing namespace before the upgrade transparently becoming the paired alias for client connections
	Stream Analytics – Besides the OOTB SLA via MS geographically paired regions, additional options are TBD
	Cosmos DB – Accomplished by leveraging the OOTB multiple region replication support by associating multiple regions with the global Cosmos DB resource and connecting with multi-master mode enabled
	Web Apps in App Services – Azure Front Door is ideal for HTTP level routing with global failover. There have been some discussions about load balancing Azure API Management via AFD but no final plan yet


Built applications for Monitoring & Managing Deep Sea Wells from Oil Rigs 
-	Mobile Application (currently working on)
o	Working on a POC where an Android Studio Iguana built application that connects via Bluetooth to an intelligent Arduino based Camera to pick images and video which is then sent to the ChatGPT GPT-Pro vision API for analysis 
-	Solutions Architect
o	Multiple POC’s for deep evaluation of Uno, MS Orleans, Azure resources. Some of the POC’s were ultimately integrated into the main projects.
o	Setup testing infra using a combination of MSTest, Moq, Fakes, Jest depending on the framework being used

-	Real Time Services
-	.NET 7 based Windows Services to support reading/writing to oil well valve devices over different protocols like OPC UA, Modbus
o	IOT devices are almost all sensors and control boards on the different kinds of valves that go into deep sea wells. 
o	Monitor multiple kinds of Pressure, Temperature, Position & Flow sensors 
o	Monitor surface cabinets for power or network failures. These cabinets house redundant PC hardware that hosts all our applications 
-	High-volume real-time Notifications and Subscriptions support via a combination of SignalR, MS Orleans Observables & EF Triggers

-	User Interface / HMI
-	WPF .NET 7 based multiple Thick Client Deep Sea Well Device Network Configuration Management Applications
o	Thick client WPF based Network Composer Application
o	Thick client WPF based Configuration generation tool
o	Python based Application Release Tool

-	React based multiple Deep-Sea Oil Well Redundancy Management HMI Applications
o	ASP.Net Core with React Frontend 
o	Multiple thin client applications with a React UI using react plugins & libraries to support hosting applications in the same HMI shell
-	Clustering / Queues / Monitoring
o	Always On SQL Server partitions-based DB design for IoT data recording and reporting performance
o	MS Orleans hosted grains backend with custom Orleans Dashboard Extensions for Monitoring
o	Integrated RabbitMQ pipeline for super high volume IoT data instead of overloading the API

-	Microservices API
o	Roughly 6 microservices domains hosted in and ASP.NET API balanced in the back with MS Orleans Silo Grains

-	ML
o	Copilot VS 2022 & VS Code integration testing for possible adoption by team
o	Work with CodiumAI VS Code integration for automatic Test Generation
o	Building Azure ML models using the tremendous amount of real time data collected from Well Devices

-	Azure IaaS / DevOps
o	Hosting configured on Azure VM’s (Dev & Stage)
o	Setup Azure CI/CD around 9 Azure Pipelines 
o	Everything SCRUM around ADO 
-	Release Documentation
o	Hosting deployment docs
o	SQL Servers Always On provisioning docs
o	Parallel Architecture Documentation 

Contribution Highlights
Incorporate MS Orleans with custom framework & dashboards
1-click PowerShell for SQL Server AlwaysOn deploys
SQL Server table partitioning
High Volume EF Trigger-Orleans Events-SignalR subscriptions
WPF/React/Services API redundancy
Scalable Multithreaded IoT Services
Ocelot API management
RabbitMq Queuing
Redis Cache
Reusable React contexts, functional components & Effects
Reusable WPF User controls
Extended EF migrations framework for User Story aligned seamless schema/data change sync
Prometheus, Grafana & AlertManager implementation in progress for consistent cross app diagnostics, monitoring and trending graphs
Global Team Mentoring

Port of Long Beach (O365/Azure/SharePoint - Architect, Admin, Lead)                                                  May 2020 – Jul 2022, Long Beach
Worked 2nd time around with POLB 
The migration of about a dozen SP applications to O365 involved a full analysis of the migration effort, sort of an MVP approach, and out of this analysis a detailed 3 level project plan was created and executed!

OnPrem SP2013/ SP 2016/ SP2019 
o	Day to day Administration
o	Help IT with SharePoint day to day admin work, patches and updates, farm provisioning 
o	Major upgrade to SP 2019 from SP 2013 - Road map, approach and Zero down execution
o	SQL Server 2005-2008 upgrade to SQL Server 2012-2014 and eventually to SQL Server 2019
o	Maintain and develop NET & SharePoint applications, both new as well as upgrades and any and all related activities like provide time estimates to the PMO. DEV/STAGE/PROD rollout planning, approvals and coordinate deployments!
LOB Integration
o	MS CRM-Dynamics AX integration 
Azure IaaS – Migration
o	Handled by POLB internal IM support, some coordination/consulting with me 
O365 Power Automate & Flow
o	New Power App built for tracking time off for the Program Management Division
o	SP Designer & VS Workflows from different POLB Divisions migrated to Power Automate/Flow
SP Online
o	PaaS infrastructure sizing
o	Migration effort leveraged OOTB O365 Lists & Libraries, Webparts, 
o	Mostly SPFx with JSOM 
Disaster Recovery / High Availability
o	Prepared Technical Architecture Diagrams of about 11 applications 
o	Developed DR Test Procedures for all 11 applications, procedures fleshed out steps for non-integration testing of applications
o	Coordinated and met with the core DR Team on a regular basis
Azure PaaS
o	Azure Data Factory to convert the large number of SSRS reports to run in the cloud
o	Azure Functions & Logic Apps to move some of the more complex on-prem webpart logic to the cloud 
o	Azure Webapps utilized to provision and host migrated ASP.NET web services 

Contribution Highlights
Successful first PowerApps implementation
Migrate SP Designer WF to Power Automate
Migrate Integration with Dynamics CRM and AX
On-Prem classic Webparts to SP Online SPFx conversion 
Convince POLB to convert from ADF to SSRS

Avoca Group (OnPrem to Azure/O365 Migration Architect/Lead)                                                                        Jul 2019 – Apr 2020, New Jersey
Office365 - Knowledge Center Portal                 
o	Re-architected and developed the company’s core revenue generator SP2013 Knowledge Portal as a modern SP Online SPFx React driven portal around a hub-based topology around OOTB Fabric core & fabric react components, PnPJS fluent API, page layouts, modern Lists/Libs, an MMS Taxonomy all brought together in a collection of communication sites 
o	Aggregated content surfaced via custom react-redux SPFx extensions & webparts using Dynamic Data Connections
o	Some SP2013On-prem content surfaced using classic SharePoint REST API’s
o	OOTB Search webparts were branched from Git and customized to meet Avoca’s Domain Driven Design requirements
o	Managed the On-Prem Rackspace hosted SP infrastructure covering day to day admin, governance, development and deployments while the migration was in process
Azure PaaS – Migration                                   
o	Migrated core infrastructure like AD to AAD, setup optimum Azure & O365 licensing. Users migrated using MS Graph API’s
API Management – Microservices              
o	Azure API Gateway resource provides routing, offloading and security management plus throttling & aggregation features for future needs
o	Azure Functions
	Data Migration, for copying SP library and taxonomy data among different sites
Power Platform – Automate & Apps                                 
o	Low code approach to allow these Avoca to make changes easily internally
o	Power Apps
	Data Import is the UI for configuring & triggering the Data Sync Logic App
	Accounts UI forms for user account and NING-AAD sync management
o	Power Automate
	NING RPA, Robotic Process Automation to support functionalities not provide by NING API’s
	AAD Sync, flow when syncing user/member information from AAD to NING
Social Media Business Collaboration - NING                    
o	Business social media platform allows users to create their own communities and social networks around specific interests with their own visual design, choice of features and member data. Ning provides several core features, including opportunities for monetization, integration with other social networks, chat, email services, forums, polls and analytics.
o	Migrated Avoca from GetSat Chat and business social media platform to NING social media platform including content migration using custom programs. Since the company that owned GetSat shut down with 4 weeks’ notice the migration schedule was super aggressive. 
o	Halfway thru the migration to Yammer ran into a big showstopper, no support for non AAD external users since Jan 2020. Immediately reviewed other 3rd party social media business collaboration offerings like Workplace by Facebook, Asana Monday.com. NING came closest to match Avoca’s requirements
Azure ML/Bot Services                                      
o	Power Virtual Agent provisioned 1st gen QnA style multi-turn Chat Bot built to allow some key Avoca big pharma clients to get answers to their questions very quickly
o	Initially only about 50 of the 5K plus documents were indexed by Azure Search and setup in a knowledge base
o	A more conversational style using Bot Framework tech such as adaptive dialogs, LUIS, LG and skillbots is under development currently. Integration with KC Portal is built around SPFx & MS BOT framework

Contribution Highlights
API first approach extensive use
AD to AAD migration of 700+ users
Power Virtual Agent BOT very popular
RPA leveraged for Ning integration
Excel & SharePoint knowledgebase moved to Azure Cognitive Services
Rapid workaround to Ning adoption for show stopper conversion to Yammer from GetSat

Ingram Micro (Senior Developer)                                                                                       Jan 2019 – Jun 2019, Irvine
Worked on supplementing IM360, the internal MS Dynamics 365 system built around Microsoft Power Platform to automate sales quotes/processes and 360° customer managements particularly the integration with Cisco’s CCW system
-	Power Apps Components
o	Resolve issues with the Grid component
o	Implement cXml over WebApi based integration of Quotes with Cisco’s order management system
o	Punchout to Cisco’s CCW system including the Authentication integrated into IM360 via OCI Version 3.0
o	After order completion on Cisco’s system the shopping cart is transferred back to IM360 via an OCI message sent via the hookurl provided during the initial punchout connection phase

Insight/Microsoft (Azure & Mobile Senior Architect/Developer)                                                                                  Aug 2017 – Sep 2018, Phoenix 
-	Azure ML
o	Specialty Foods - Working on an engagement building and training ML models leveraging 15 years of SQL Server data for intelligent online upselling and cross selling both for customer warm and cold starts. Provisioning the relevant Azure DevOps and CI/CD plumbing as well. Minor enhancements to the existing ASP.Net-jQuery B2C portal to surface the data science upsell results was a part of this engagement 
o	POC for Los Angeles City + USC i3 Consortium - Live IoT feed of data from LAX parking lots used to show real time parking availability, predicted parking availability based on a simple ML Model and alternate private parking nearby
o	American Airlines - Conduct Azure AI & Cognitive Services Workshops for participants in preparation for the American Airlines Hack wars 2019
o	American Airlines - 1000 Participant Hackathon - Provide guidance to multiple American Airlines teams for architecting and developing working solution around MS Chatbot Tooling, LUIS, Azure machine Learning Studio!
-	Azure PaaS
o	NIC - Pretty significant project for NIC for SQL Server Data replication from multiple Azure subscriptions to a BI subscription. Full DevOps CI/CS pipeline was configured with complex ARM templates for the hundreds of Logic Apps, Service Bus topics, Event Grid subscriptions and webhooks. Custom Azure Functions also developed
-	Azure Monitoring / Insights
o	Oxy Petroleum - Prepare a detailed topology for provisioning Network Performance & Application Insights based monitoring for Occidental Petroleum with sample Dashboards built around Azure Monitoring, Log Analytics plus the 3 monitors bundled as NPM
-	Bot Services
o	Houston School District - Helping accelerate development and deliveries for various software components of an MS effort around Safe Spaces which is a part of the overall Connected Cities vision https://www.microsoft.com/en-us/enterprise/citynext. My responsibility specifically was for the Xamarin Native iOS & Droid apps as well as the chatbot integration.  Azure IoT devices in the schools were the back bone of this solution based on the open-source Project Edison effort. 
o	Navy Federal Credit Unions - Build a series of ChatBot skills for the bank to handle multiple aspects of customer banking needs like account info, direct deposits, money transfers via Zelle and more. Worked closely on a daily basis with the Microsoft Bot Framework & Composer Teams to coordinate resolving issues found in the MS Bot Tech stack as we built out the LUIS, QnA based bot skills. Also worked with the Navy’s security, Azure Cloud and other teams to help minimize any security vulnerabilities as well as confirm to the tight Navy and Banking security guidelines and mandates. Web Chat and a Live Person fronted Direct Line channels Support added

Contribution Highlights
MS Safe / Connected cities implementation for the Houston School District
Conduct Azure Cognitive Services workshops for American Airlines
Help in a 1000+ participant American Airlines Hackathon
Gain ML experience with 2 client projects
Gain experience with a very large Logic Apps client engagement

US Federal Reserve  (Architect, Team Lead)                 Jan 2017 – Jul 2017, San Francisco, CA
	Mobile First & Managed Azure - Part of the team to set this practice up for the 12th district to carry out the Cloud & Mobile First strategy within the tight security guidelines of the federal banking system for Mac/Windows hard and soft tooling selection and approval, AirWatch and VS App Center adoption, Managed Microsoft Azure & Enterprise Mobility Governance/Cost/Services
	Conference App Suite - App Styling and content in On-Prem SP2013 with data in On-Prem SQL Server. Backend NET Windows Service to send out registration, reminder emails and calendar invites. Angular Admin Application for Content Management. ASP.NET Core hand held bar code scanner application for badging in. First integration effort with the Fed Mulesoft API gateway.
	Fed Ambassador App - Datastore is an SP Online Portal and leverages the Azure Key vault and Azure Storage. Auth is all OAuth and Azure Push Notification Service is used to send out user notifications
	IAM Mobile App - An OKTA style SSO facilitating mobile application deployed internally on Fed Bank Phones
Xamarin Forms, ASP.NET Core, MuleSoft, SP 2013, SQL Server, Windows Services, Azure App Service, Azure Keyvault, Azure Storage, Azure Functions, Azure Notifications, Angular 2, OCR, OAuth
SDKs & Tooling – AirWatch and VS App Center, VS 2013/2015, MVVMCross

Willdan Group  (Architect, Team Lead)           Aug 2016 – Dec  2016,  Anaheim CA
Willdan provides consulting and implementation services across energy, infrastructure and transportation, municipal engineering, planning, and staff augmentation; economic and financial analysis, and homeland security and emergency management
	BSA - Working directly for the Director of IT draw up a final report for executive management which included a list of all the different software applications big and small and the associated technologies running across all divisions of Willdan Group in the various offices around the US. Also captured end user pain points, application TCO including support level, source code availability and other many parameters like mission criticality of applications 
	Architect: Assist IT in technology & vendor selection for inhouse replacement applications, planning and sizing Office 365 resources and federated Azure AD with Okta SSO, Site Topology security matrix along with the O365 Governance strategy
	O365 Migration – Plan + design O365 portals for migrating the Internal Willdan Portal and the internal Willdan Helpdesk-Asset management application including best practices. Work with Dev team in migrating these to O365
	Salesforce Integration - Identify O365 integration approaches with Salesforce using man in the middle REST API’s to surface Apex methods, 
	ADP Integration - Employee account data import into Azure AD and integration with 
	Deltek Costpoint Integration - Migrate all CostPoint Accounting Documents storage to O365 
	Fishbowl Warehouse Management System Integration – Upgrade the Excel Forms UI and integrate with FishBowl API’s
	SP Online Migration – Migrate the Internal WordPress based ordering system, internal intranet ASP.NET Webster Portal to SP2013 Online. O365 Search customizations was an important part of the projects
-	Excel Forms application upgrade to support integration with Fishbowl warehouse management system
Office 365 Cloud, Azure, Salesforce, SharePoint 2010, ASP.NET MVC, WCF, Angular 1, jQuery, OneDrive/Google Drive/Drobox API’s, MS Excel Forms

Port of Long Beach (DevOps - Architect, Admin & Lead)                                                      Jan 2016 – Jul 2016, Long Beach, CA
-	SP2010 / SP2013 Governance
o	Help IT with SharePoint day to day admin work, patches and updates, farm provisioning, planning and execution of SQL Server 2005-2008 upgrade to SQL Server 2012-2014,
o	NET & SharePoint application Prod rollout planning, approvals and the actual deployments!
o	Provision Office Server & Project Server
-	SP2010 to SP2013 Migration 
o	Migration of 4 SP2010 ASP.NET finance, risk management, Maintenance division applications to SP2013
o	Work with IT on SP2010 administration support for the internal POLB IM team including SP2013 infrastructure and farm sizing 
o	Supplement IT with SP2013 Sizing & Provisioning, stand up SP2013 with all service applications for Dev. Help Establish basic SharePoint governance practices. 
-	SP Applications 
o	Develop Applications using Webparts, CSOM, ASP.NET, WCF, jQuery/Angular
	Finance Division Application with Visual Studio Workflows for Grant Management and Approval Process. 
	Develop MS CRM search app
	AD management and search app, 
	Application to manage exemptions from certain POLB charges for all incoming container shipments using data received from US Customs. 
	iCash Application for Port Payments iCash Application, 
	Water Meter management app,
o	Enhance and migrate an SP2010 Hazard Management Division application to SP2013. UI enhancements & Search customization
-	Office Server & LOB Integrations
o	MS CRM customizations of entities and migration to 2016 version and integration with SP2013 to surface data from CRM
o	Integration of internal iCash application with ACH, Check and Wire transactions and check scans with Union Bank Web Services
o	MS-Excel-Dynamics AX On-Prem migration to 2016 from SP 2013 and integration with SP2013
-	SSRS / PerformancePoint Business Intelligence
o	SSRS reports backend SPROCS performance optimization and SQL Server jobs also needed tweaking.
o	Setup a separate portal dashboard with about 26 charts which used Performance Point & Excel Services
-	Nintex / SharePoint Workflows
o	Migrate Nintex workflows to SP 2013 Workflows

Contribution Highlights
Super smooth SP2010 to SP2013 migration
LOB Apps MS Dynamics 365 CRM & AX integration reworked fairly quickly
Nintex WF to SP2013  WF migrations
Built a 100+ API’s interface around Office OpenXml
Extended Visual Studio with Tooling for Office Document based code generation

ACOM.Com (Large Azure Migration & Xamarin Architect)                                                                   Feb 2014 – Dec 2015, Long Beach
ACOM provides solutions in the End-to-end AP automation to process all your B2B payments space
-	Xamarin Forms/Event Grid/Push Notification Service/Azure Functions
o	Phase 1 of ACOM Control & Monitoring App involved pushing mission critical alerts and metrics down to a mobile platform over the Azure Push Notification Service (PNS)
o	Develop a new Event Grid custom topic publisher output for the MS Diagnostics Event Flow aggregator SDK. Introduce a new extensible architecture which ties Event Grid custom topics to filtered subscriptions by corresponding Azure Function micro services for Azure Push Notifications, SendGrid email, Twilio SMS and other notification channels!
o	The backend compute is all Azure V2 .NET Core Functions which share a common library for logging, key vault, configuration, azure storage and authentication management
-	Azure PaaS-SaaS 
o	Provision Azure AAD with RBAC & migrate everyone in the CA and Vietnam office to AAD with MFA with a native Windows 10 AAD sign on. 
o	Consolidate Google docs and local network storage all to AAD SSO OneDrive storage with MFA
o	Move everyone to Office 365
o	Standup and configure ADFS infrastructure between On-Prem and Azure IaaS for SSO (no MFA)
-	Azure App Services with Monitoring/Insights/Functions/Logic Apps
o	Dashboards consolidate all activity logs, diagnostic logs, metrics both OOTB and custom ACOM
o	Different dashboards for hot, warm and cold monitoring and analysis
o	Leverage Azure Monitor, Application Insights and Azure Log Analytics (OMS) to build the shared dashboards with access managed by Azure Monitor RBAC
o	Setup auto scaling Azure alerts for key resources like DB’s, memory, CPU load and more and wire into Twilio SMS
o	Develop custom Azure Timer Functions to monitor and auto scale Azure SQL Server databases, to monitor Cloud App and App Service end point status and these feed activity, metrics and alert information to Azure Monitor
o	Logic apps assembled to handle simple workflows like sending emails
-	Azure Service Bus/Service Fabric
o	Setup VSTS CI/CD builds for all C++ and .NET C# sources for the services, DB and lower-level OCR layers of an engine acquired by ACOM (VS 2008 for the C++ layer). 
o	containers are hosted on Azure Service Fabric till support for Windows containers is released on AKS. 
o	VSTS CI/CD build & release enabled ARM template provisioned Azure Service Fabric Applications to run the Stateful .NET OCR Server engine, Guest Exe OCR .Net client & Guest Exe Data Capture .Net client. The Server engine internal collections were migrated to Azure Service Fabric Reliable collections. 
o	Integration with the ACOM payables product leveraged Azure Functions triggered by Azure Service Bus Queue submissions
 
-	Azure IaaS
o	Azure Traffic Manager configuration for quick and automatic redirects of Uri’s
o	IaaS-PaaS as code - Develop PowerShell scripts for JIT App Service, Cloud App, Service Bus, Key vault, Redis and other Azure resource provisioning, things that could not be handled by ARM templates
o	Develop a few ARM templates to provision IaaS-PaaS resources
-	Azure Security & Compliance
o	All Auth and access control is handled using OAuth (OpenID) via the new Azure AD v2 endpoint and MSAL with Microsoft Graph for client apps
o	DNS Migration to Azure DNS using PowerShell Azure Resource Template API’s
o	Password Policy tweaks using PowerShell MSO
o	Access Policy - Interview & assess needs of different groups like professional services and secure access to Azure SQL Server with AAD SSO + MFA access from SSMS 17.3.
o	Blob Audit and threat detection configuration on Azure SQL Servers including Geo Replication
o	API Access Security using Azure Key vault key rotation and App Services Environments for inbound IP control
o	Move from custom table-based tenant auth to an Azure B2C based auth leveraging MSAL
-	Visual Studio Team Services
o	Develop custom migration software for migration of all VSTS artifacts like Tasks, Work Items, Groups and History using MS Graph, OAuth2 and TFS API’s 
o	Azure AD v2 endpoint and ADAL used for validating both MS and AAD accounts in code
-	Azure Cost Optimization
o	Azure Elastic Pools
o	Full audit of resource usage and resource levelling across all 4 Azure Subscriptions with cost analytics data surfaced via dashboards
o	Production App Service Plan tuning
o	Provision extra Azure subscriptions and all resources for OEM partners purchasing ACOM Cloud solutions 
-	CI/CD
o	Setup builds and release scripts for CI/CD using VSTS build and release tooling
-	LOB Integrations
o	Helpdesk Software Zendesk Integration and Configure ZenDesk for Azure AAD SSO with MFA
o	Develop an Azure hosted custom REST API to act as a proxy to allow ACOM customer application support pages integration 
-	Azure Web Apps & Functions
o	Understand existing ACOM custom cloud application code so that I am able to provide onshore support for day to day needs which includes 2 Java portal Azure Cloud application, 4 Worker Roles, 2 Service Bus applications and other App Service ASP.NET applications
o	Swap in Azure Redis as a caching framework instead of the old session-based caching
o	Develop custom Azure Functions for blob storage replication from West Coast to East Coast
o	Develop Azure HTTP Request Functions to empower help desk to create DNS entries by using AAD secured REST API calls 
-	Azure Data Factory/ Synapse Analytics
o	Setup ARM template-based Azure SQL Data Warehouse with elastic queries across Azure Storage and multiple ACOM customer databases. Initial warehouse data load accomplished using ADF ARM template deployed pipelines
-	Offshore Software Engineering Training
o	Take chunks of existing common code and refactor it completely for best software engineering practices
o	Fly to Vietnam and hold onsite training classes in software techniques and tooling
o	Setup and configure SonarCube
o	Full code reviews 

Contribution Highlights
Full multilocation On-prem to Azure migration of about a 1000 users
Onsite training in Vietnam
Mobile App built for Infra management by non IT staff
Help pass Fintech industry compliance audits
ZenDesk integration
Azure Traffic Manager successfully adopted
Custom VS Team Services Migration
Purchase and integrate 3rd party .Net based OCR engine for check scanning
Reports built around Synapse analytics & Power BI for hundreds of client SQL Server databases
Guide Offshore/OnShore team

QTC/Lockheed/Leidos (SharePoint, Solution Architect, Senior Developer)                             Apr 2013 – Jan 2014, Diamond Bar CA
Healthcare software for VA Authority, VA Providers and VA Examinees.
-	SP2010/Angular Apps/Workflows
o	Migrate 2000+ VA Provider doctor SP2010 portal to a responsive Portal built on the ASP.NET MVC stack. Co-navigation across the external and internal Citrix hosted medical record viewers implemented using Microsoft SignalR
o	Migrate the SP2010 B2C VA Examinee Portal to ASP.NET MVC with Angular 1. Tricky AD-SSO integration of the F5 DMZ hosted sites via Kerberos 
o	Feature enhance SP2010 VA Staff Portal to comply with the latest VA administration contract requirements. Added SSRS reports, REST Web Services, Webparts and more including Timer jobs for automatic 
o	Enhance SP2010 Workflows
-	SharePoint SSRS 
o	SSRS connection failure fault tolerance using the SSRS web services API. 
o	Performance improvements to both SSRS Reports, the server’s hardware and the backend PL/SQL Materialized Views + SPROCS was an important highlight of this release. 
o	Scale out and scale up the SSRS infrastructure
-	SharePoint LOB Integration
o	Integration of SP2010 with MS CRM 2015 to surface data out of CRM and update contacts in CRM
o	F5 Load Balancer integrated SSO 
o	MS CRM integration work
-	SharePoint Governance
o	Work closely with IT when scaling up and scaling out some of the intranet farms, selecting patches-CU’s
o	Assist with infrastructure sizing, design and performance issues, PROD rollout planning, approvals and issues
-	CI/CD
o	Continuous Integration with a mix of TFS based Automated Builds and Deployments and Jenkins. Loads of PowerShell scripting
o	Setup Web and Load tests around JMeter 
-	Xamarin
o	Build a replacement Medical Records PDF viewer Xamarin mobile app to replace the existing Citrix SSO Receiver. The App was used by the QTC network of VA Medical Providers to view VA Examinee Medical Records. 
o	Backend was a secure REST API hosted in Lockheed’s data center.
-	POC’s
o	Helped counsel the infrastructure & technology selection group led by the CEO with department managers by coding POC’s for major technology decisions like Angular, SignalR, Xamarin adoption
o	Platform choices like SP2013 vs full-stack 
o	Demonstrating tooling like Jenkins for CI or VS2017 benefits
o	JMeter vs Telerik Test Studio 
-	DevOps & Support
o	Help the PMO towards compiling a work breakdown to prepare project plan SCRUM cycles complete with user stories and tasks - requirement analysis, identify LOB application integration approach, involve IT for infrastructure sizing tasks and SSO, rope in QA for test cycle tasks,
o	TFS Upgrade support 
o	PowerShell and Jenkins script development, 
o	Mentor both onshore and offshore Dev’s on bottlenecks and stoppers on a day-to-day basis
o	Help QA with release issues
 
Contribution Highlights
2000 VA providers migrated to an Angular / ASP.Net portal
Show Stopper SSR performance issues mitigated
SP2010 to MS CRM integration for licensing cost savings
Cumbersome PDF viewer Citrix SSO based receiver app replaced with Xamarin mobile App
Mentor Onshore/Offshore teams

IncWorx (SharePoint Chief Architect, Developer, Admin)                                                                  Mar 2010 – Mar 2013, Chicago
My Responsibilities: Pre-Sales Support: Craft the technical sections of responses to RFP’s and participate in pre-sales presentation’s,
Architect: Handle scope meetings and SP20XX technology stack element selection and sign off, couple of non SP20XX engagements except as mentioned below, assist PMO with project plan around waterfall SDLC, assist clients with hardware sizing for farm provisioning, 
Developer: Manage Dev teams both in Chicago and off shore including code reviews, involved in all aspects of SharePoint Portal including development of WebParts/Workflows/Timers/App Store/Search/InfoPath/Nintex, Silverlight Apps, SQL Server SPROCs, PPS BI Dashboards & SSRS Reports, Deployments: SharePoint application rollout planning, approvals and the actual deployments! Admin: About 60% of the clients needed SP20XX Admin support as a part of SLAs with IncWorx

Client List
-	Pathway Capital Management
-	Allied Health Services
-	Vintage Senior
-	Polsinelli
-	Aux Sable (4 projects)
-	Harry Winston
-	Idaho Power Company
-	Fieldwork (2 projects), 
-	Process Retail Group (2 projects)
-	Hagerty Insurance
-	Heartland Crop Insurance (Silverlight, Leadtools Scan-OCR API’s, WCF RIA, CI Jenkins)
-	New York Blower
-	PLZ Aerospace Corp, 
-	Walla Walla University
-	Effective Data (Biztalk-Sterling)
-	Melaleuca
-	Vanity Fair Corporation
-	Vizio (3 projects - SQL Server Master Data Services, SAP integration, VSTO Excel)
  o	Vizio Creative Services - Project Approval Process using Custom Workflow with custom WF activities & associated InfoPath forms. Hosted WCF Services, Custom Ribbon Actions, Custom PDF Report generation using iTextSharp
  o	Vizio SQL Server 2012 Master Data Services - Consolidate all corporate Master Data spread redundantly across multiple LOB applications like Pricing Bulletins, TM1, Reseller Selection Excel document libraries & SAP. Management of this data was facilitated via SP2010 BDC Services. MS Excel add-ins developed using VSTO to facilitate editing of MDS data by users in different departments using MS-office
  o	Vizio Marketing Pricing - Supply chain extension and SAP integration project to help automate agreeing on price points and the management of the flow of all the contractual paperwork for Vizio products for large retailers like Walmart, Costco, Target. 

-	Time Warner Cable
-	McGladrey & Pullen
-	Quantum
-	Mercy Hospital Group (2 projects)
-	Ensynch ONE BI
-	Los Angeles Sherriff, 
-	DaVita
-	Nucor Steel (2 projects)
-	General Dynamics, 
-	City of Safford
-	Server Farm Provisioning; Governance Planning and SharePoint IT Administration; Claims with ADFS, Kerberos, FBA, Multi AD; Site Templates, Page Layouts; Master Pages, MMS Navigation; Responsive Design – html5,JQuery; Search Display Templates; MySites/profile, Social Media, Yammer; Custom/Extended Web Parts; Client-SP Object LINQ, .NET, JS Silverlight; InfoPath Forms and Code Behind; Custom WorkFlows/Forms; SharePoint Content Catalog; Migration from SP2007, SP2010; BDC Line of Business Integration; SSRS, Performance Point Dashboard; Custom Timer Jobs, Event Handlers; Deployment Scripts, Code; Documentation and Training; Development Team TOK, LOB Integration, SP2013App Store
 
Feb 09-Feb 10                      Edwards Life Sciences / EV1000 Critical Care Monitor (Senior Developer)
The EV1000 monitoring system is a monitoring platform that displays intermittent and continuous hemodynamic measurements related to blood flow, fluid status, and organ function for use on critically ill patients anywhere critical care is provided in an acute care setting, most often in an ICU or hospital environment.
 NET 3.5/ WPF UI application on real time embedded windows XP talking to embedded Linux with major emphasis on  UI performance along with data communications and data storage optimization
NET 3.5/ WPF, Embedded Windows XP
Jul 07-Jan 09                       Hyundai / Kia Motors – Multiple Projects     (Architect/Developer)
                                             Hyundai Dealer Application. Changes and enhancement to this mission critical application
                                             Hyundai Inner Circle B2C enterprise application with substantial integration using SOA silos with LOB systems like Oracle Financials as a part of the loan request management 
                                             Hyundai USA Site Assisted in multiple areas of the SDLC. WCF Restful services stack (dealer locator, vehicle, leads etc.). Content Management using Interwoven. Flash AS3 performance improvements (BYO, Navigation, Key Landing Pages). Load and Stress Testing. Google Search Appliance Integration
                                             SharePoint 2010 BI - Software Practice Revenue Reporting and BI Showcase Project                     
                                             BI reports and dashboards to facilitate quick views of quota, pipeline and backlog revenues for 
executive management measured by sales leaders, practice directors, practice etc across different time and account dimensions with drilldown capabilities. Scorecards, KPI’s, analytic reports, analytic charts, filters and dashboards developed using PPS Dashboard Designer 
BI PPS, SSRS/SSAS, Excel Services,  PowerPivot
                                                      Net 3.0 + C#, WCF+REST, WPF, WF, ASP.NET with MVC, AJAX, jQuery and many PlugIns, Flex with AS3, JDK 1.4+, SOA Silos, TFS 2005/2008, Rackable hardware sizing, Interwoven CMS, MOSS CMS, Biztalk 2006, WSS/MOSS 07, SQL Server 200X, Oracle 9i

Jun 06-Jun 07                        Western Digital, Lake Forest, CA – Multiple Projects   (Architect/Developer)
WDC.Com Net 2.0 Move from Classic ASP Moved WDC to .NET 2.0 from classic ASP, to position them to leverage all that NET 2.0 technologies have to offer. Localization (9 languages), themes, custom security providers, custom sitemap providers, custom web controls and extensions to Microsoft web controls, composite controls
Google Mini Integration Integrated the Google search engine running on a Linux appliance into the WDC site. 
Net Framework 2.0, Atlas AJAX Framework, SQL Server 2005, JavaScript/DHTML, XML 2.0/XSLT 1.0, ASP.NET 2.0, .Net Web Services, ADO.Net 2.0, C# 2.0, Google Appliance
Dec 04-May 06                      Volt, Inc., Orange, CA – Multiple Projects   (Senior Developer)
Real Time Data Transmission Biztalk/IWay and SQL Server Notifications based quasi real time system to replace the existing nightly batch based for data transmission between the corporate recruitment management system and the back office Peoplesoft ERP system. Loggers based on SQL Server 2005 brokering and XML queries,  Microsoft EDRA and custom tree, grid, forms and cross page navigation WSS connected webparts.
FOEI (front office electronic interface) facilitates automated interchange of HR information (candidate requests, fulfillment etc) between the Volt HR system (voltTrack) and HR systems for customers Caterpillar, Verizon, Medtronic, Microsoft, 3M, Raytheon, Swift 
Net Framework 1.1/2.0, Biztalk 2004/2006, IWAY/Biztalk Enterprise Adapters, Microsoft CRM SDK 3.0, SQL Server 2000/2005, SQL Server Notification Services, SQL Server Reporting Services, SQL Server Integration Services, Oracle 9.21i/10g, Enterprise Development Reference Architecture 1.1/2.0, Enterprise Library 1.1/2.0, Windows SharePoint Services SDK, SharePoint Office Portal Server SDK, Infragistics Volumes, Visual Studio Tools For Office, JavaScript/DHTML, XML/XSLT, .Net Web Services, .Net Enterprise Services, ASP.Net 1.1/2.0, ADO.Net, .Net Windows Forms, C#, 1.0/2.0 VB.NET , MSI SDK, Visual Studio Automation.
Apr 04-Nov 04                     ABC Disney, Los Angeles, CA                                       (Developer)
Advanced Listing Web Part replaces the existing SPS 2003 Listing Web Part which has many limitations. The new Web Part can be used for both WSS and SPS, binds to standard WSS lists (with some custom field extensions), allows using 
both WSS site groups and SPS audiences for security management
SharePoint 2003. NET 2.0

Feb 01-Mar 04                      Deloitte & Touché, Woodland Hills, CA and New York, NY – Multiple Projects   (Senior Developer)
Task Scheduler, multithreaded, dynamically load balanced NT service hosted scheduler developed using the .NET framework with real time web based UI for management of job scheduling, aborting and reporting with a rich choice of filters like job status monitoring. 
Pool Selection, credit/loan securitization web application port of a client server C++/MFC application for Royal Bank of Canada, Wells Fargo, FleetOne, and GE Capital. Featured, end to end XML transport with published XML schemas for data management, Oracle and SQL Server support.
Net Framework 1.1, Infragistics, SQL Server 2000, SQLXML, RegEx, Commerce Server 2002, VBScript/JavaScript/DHTML, XML/XSLT, .Net Web Services, .Net Enterprise Services, ASP.Net, ADO.Net, .Net Windows Forms, Visual Studio Tools For Office, PDF Library, JavaScript/DHTML, XML/XSLT, C#, MSI SDK, Visual Studio Automation
LightYear Framework - Large (thousands) set of JavaScript behaviors (HTC) like SOAP proxy, Common services, Print Services, Form services for data entry. Most of these services followed the Model-View-Controller architecture. 
 LightYear OraclePort - Developed a hybrid language with support for both PL/SQL and T-SQL constructs to facilitate a common codebase for SPs for SQL Server Stored and Oracle.
Rational Suite, Behaviors(HTC), XML DOM, DHTML DOM, JavaScript, IIS 5.x, OPTools.h++ Java, C++, PL/SQL, Java Stored Procs, SQLJ, ADO, Query Analyzer, OleDB., ASP

Jan 00- Jan 01                        Universal Studios, Universal City, CA           (Developer)
ELabs - Intranet to track companies, contacts, ongoing projects, potential e-initiatives with technology companies. Central control point for document management and categorization, n, press releases or scheduled events. Site wide search, link export, cookie based user preferences and Status reports provided data about ongoing/planned projects. 
ASP, XML DOM, DHTML DOM, VBScript, JavaScript, VB, IIS 4.01+, SQL Server


`;

