// OpenAIService.tsx
import React, { useEffect, useRef } from 'react';
import  { OpenAI } from 'openai';

const  resumeText1 = `Halliburton (Azure & Desktop Solution Architect/Team Lead)                                                              Aug 2022 –  Mid Jan 2024, Houston
Built applications for Monitoring & Managing Deep Sea Wells from Oil Rigs with effort split across about 20% DevOps + Documentation work, 30% Solutions Architecture work and 50% coding as a Team Lead work
Solutions Architect
Multiple POC’s for deep evaluation of Uno, MS Orleans, Azure resources. Some of the POC’s were ultimately integrated into the main projects.
Setup testing infra using a combination of MSTest, Moq, Fakes, Jest depending on the framework being used

Real Time Services
.NET 7 based Windows Services to support reading/writing to oil well valve devices over different protocols like OPC UA, Modbus
IOT devices are almost all sensors and control boards on the different kinds of valves that go into deep sea wells. 
Monitor multiple kinds of Pressure, Temperature, Position & Flow sensors 
Control valve positions via microcontroller boards embedded into the valves
Monitor surface cabinets for power or network failures. These cabinets house redundant PC hardware that hosts all our applications & services
High-volume real-time Notifications and Subscriptions support via a combination of SignalR, MS Orleans Observables & EF Triggers

User Interface / HMI
WPF .NET 7 based multiple Thick Client Deep Sea Well Device Network Configuration Management Applications
Thick client WPF based Network Composer Application
Thick client WPF based Configuration generation tool
Python based Application Release Tool

React based multiple Deep-Sea Oil Well Redundancy Management HMI Applications
ASP.Net Core with React Frontend 
Multiple thin client applications with a React UI using react plugins & libraries to support hosting applications in the same HMI shell
Clustering / Queues / Monitoring
Always On SQL Server partitions-based DB design for IoT data recording and reporting performance
MS Orleans hosted grains backend with custom Orleans Dashboard Extensions for Monitoring
Integrated RabbitMQ pipeline for super high volume IoT data instead of overloading the API

Microservices API
Roughly 6 microservices domains hosted in and ASP.NET API balanced in the back with MS Orleans Silo Grains

ML
Copilot VS 2022 & VS Code integration testing for possible adoption by team
Work with CodiumAI VS Code integration for automatic Test Generation
Building Azure ML models using the tremendous amount of real time data collected from Well Devices

Azure IaaS / DevOps
Hosting configured on Azure VM’s (Dev & Stage)
Setup Azure CI/CD around 9 Azure Pipelines 
Everything SCRUM around ADO 

Documentation
Hosting deployment docs
SQL Servers Always On provisioning docs
Parallel Architecture Documentation 
Prepare all release documentation including docs for security reviews, export compliance and more such as

Port of Long Beach (O365/Azure/SharePoint - Architect, Admin, Lead)                                                  May 2020 – Jul 2022, Long Beach
Worked 2nd time around with POLB 
The migration of about a dozen SP applications to O365 involved a full analysis of the migration effort, sort of an MVP approach, and out of this analysis a detailed 3 level project plan was created and executed!

OnPrem SP2013/ SP 2016/ SP2019 
Day to day Administration
Help IT with SharePoint day to day admin work, patches and updates, farm provisioning 
Major upgrade to SP 2019 from SP 2013 - Road map, approach and Zero down execution
SQL Server 2005-2008 upgrade to SQL Server 2012-2014 and eventually to SQL Server 2019
Maintain and develop NET & SharePoint applications, both new as well as upgrades and any and all related activities like provide time estimates to the PMO. DEV/STAGE/PROD rollout planning, approvals and coordinate deployments!
LOB Integration
MS CRM-Dynamics AX integration 
Azure IaaS – Migration
Handled by POLB internal IM support, some coordination/consulting with me 
O365 Power Automate & Flow
New Power App built for tracking time off for the Program Management Division
SP Designer & VS Workflows from different POLB Divisions migrated to MS Flow
SP Online
PaaS infrastructure sizing
Migration effort leveraged OOTB O365 Lists & Libraries, Webparts, 
Mostly SPFx with JSOM 
Disaster Recovery / High Availability
Prepared Technical Architecture Diagrams of about 11 applications 
Developed DR Test Procedures for all 11 applications, procedures fleshed out steps for non-integration testing of applications
Coordinated and met with the core DR Team on a regular basis
Azure PaaS
Azure Data Factory to convert the large number of SSRS reports to run in the cloud
Azure Functions & Logic Apps to move some of the more complex on-prem webpart logic to the cloud 
Azure Webapps utilized to provision and host migrated ASP.NET web services 

Avoca Group (OnPrem to Azure/O365 Migration Architect/Lead)                                                                        Oct 2018 – Apr 2020, New Jersey
Office365 - Knowledge Center Portal                 
Re-architected and developed the company’s core revenue generator SP2013 Knowledge Portal as a modern SP Online SPFx React driven portal around a hub-based topology around OOTB Fabric core & fabric react components, PnPJS fluent API, page layouts, modern Lists/Libs, an MMS Taxonomy all brought together in a collection of communication sites 
Aggregated content surfaced via custom react-redux SPFx extensions & webparts using Dynamic Data Connections
Some SP2013On-prem content surfaced using classic SharePoint REST API’s
OOTB Search webparts were branched from Git and customized to meet Avoca’s Domain Driven Design requirements
Managed the On-Prem Rackspace hosted SP infrastructure covering day to day admin, governance, development and deployments while the migration was in process
Azure PaaS – Migration                                   
Migrated core infrastructure like AD to AAD, setup optimum Azure & O365 licensing. Users migrated using MS Graph API’s
API Management – Microservices              
Azure API Gateway resource provides routing, offloading and security management plus throttling & aggregation features for future needs
Azure Functions
Data Migration, for copying SP library and taxonomy data among different sites
Accounts, functions ride on top of MS Graph API and NING user API 
Power Platform – Automate & Apps                                 
Low code approach to allow these Avoca to make changes easily internally
Power Apps
Data Import is the UI for configuring & triggering the Data Sync Logic App
Accounts UI forms for user account and NING-AAD sync management
Power Automate
NING RPA, Robotic Process Automation to support functionalities not provide by NING API’s
AAD Sync, flow when syncing user/member information from AAD to NING
Social Media Business Collaboration - NING                    
Business social media platform allows users to create their own communities and social networks around specific interests with their own visual design, choice of features and member data. Ning provides several core features, including opportunities for monetization, integration with other social networks, chat, email services, forums, polls and analytics.
Migrated Avoca from GetSat Chat and business social media platform to NING social media platform including content migration using custom programs. Since the company that owned GetSat shut down with 4 weeks’ notice the migration schedule was super aggressive. 
Halfway thru the migration to Yammer ran into a big showstopper, no support for non AAD external users since Jan 2020. Immediately reviewed other 3rd party social media business collaboration offerings like Workplace by Facebook, Asana Monday.com. NING came closest to match Avoca’s requirements
Azure ML/Bot Services                                      
Power Virtual Agent provisioned 1st gen QnA style multi-turn Chat Bot built to allow some key Avoca big pharma clients to get answers to their questions very quickly
Initially only about 50 of the 5K plus documents were indexed by Azure Search and setup in a knowledge base
A more conversational style using Bot Framework tech such as adaptive dialogs, LUIS, LG and skillbots is under development currently. Integration with KC Portal is built around SPFx & MS BOT framework

Insight (Azure & Mobile Senior Architect/Developer)                                                                                  Aug 2017 – Sep 2018, Phoenix 
Azure ML
Specialty Foods - Working on an engagement building and training ML models leveraging 15 years of SQL Server data for intelligent online upselling and cross selling both for customer warm and cold starts. Provisioning the relevant Azure DevOps and CI/CD plumbing as well. Minor enhancements to the existing ASP.Net-jQuery B2C portal to surface the data science upsell results was a part of this engagement 
POC for Los Angeles City + USC i3 Consortium - Live IoT feed of data from LAX parking lots used to show real time parking availability, predicted parking availability based on a simple ML Model and alternate private parking nearby
American Airlines - Conduct Azure AI & Cognitive Services Workshops for participants in preparation for the American Airlines Hack wars 2019
American Airlines - 1000 Participant Hackathon - Provide guidance to multiple American Airlines teams for architecting and developing working solution around MS Chatbot Tooling, LUIS, Azure machine Learning Studio!
Azure PaaS
NIC - Pretty significant project for NIC for SQL Server Data replication from multiple Azure subscriptions to a BI subscription. Full DevOps CI/CS pipeline was configured with complex ARM templates for the hundreds of Logic Apps, Service Bus topics, Event Grid subscriptions and webhooks. Custom Azure Functions also developed
Azure Monitoring / Insights
Oxy Petroleum - Prepare a detailed topology for provisioning Network Performance & Application Insights based monitoring for Occidental Petroleum with sample Dashboards built around Azure Monitoring, Log Analytics plus the 3 monitors bundled as NPM
Bot Services
Houston School District - Helping accelerate development and deliveries for various software components of an MS effort around Safe Spaces which is a part of the overall Connected Cities vision https://www.microsoft.com/en-us/enterprise/citynext. My responsibility specifically was for the Xamarin Native iOS & Droid apps as well as the chatbot integration.  Azure IoT devices in the schools were the back bone of this solution based on the open-source Project Edison effort. 
`;

interface OpenAIServiceProps {
  fileContents: string;
  question: string;
  setResponse: React.Dispatch<React.SetStateAction<string>>;
};

const OpenAIService: React.FC<OpenAIServiceProps> =  ({ fileContents, question, setResponse  }) => {
  const responseRef = useRef<string>();
  const apiKey: string = process.env.REACT_APP_OPENAI_APP_API_KEY ?? '';
  console.log('API Key:', apiKey);

   useEffect(() => {
    const getOpenAIResponse = async () => {
      if(fileContents === '' || question === '') return;

      if (!apiKey) {
        console.error('OpenAI API key not found');
        return null;
      }
    
      responseRef.current = '';  
      const openai = new OpenAI({ apiKey:apiKey, dangerouslyAllowBrowser: true });
      try {
        const chatCompletion = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages: [ { "role": "system", "content": resumeText1 }, { "role": "user", "content": question } ], 
          max_tokens: 250,  // Max amount of tokens the AI will respond with
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
          temperature: 1, // lower is more coherent and conservative, higher is more creative and diverse.
          stream: true,
        });
        
        for await (const chunk of chatCompletion) {
         responseRef.current = responseRef.current! + chunk.choices[0]?.delta?.content;
         console.log(responseRef.current);
         setResponse(responseRef.current);
        }
        
      } catch (error) {
        console.error('Error:', error);
      }
    }

    getOpenAIResponse();
  }, [fileContents, question]);

  return null;
};

export default OpenAIService;
