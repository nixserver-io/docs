"use strict";(self.webpackChunknixserver_io_docs=self.webpackChunknixserver_io_docs||[]).push([[667],{550:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var n=i(4848),s=i(8453);const t={title:"Quick start guide",hide_title:!0,sidebar_position:2,slug:"/quickstart"},o=void 0,a={id:"getting_started/quickstart",title:"Quick start guide",description:"Quick start: Deploying your first service",source:"@site/docs/getting_started/quickstart.md",sourceDirName:"getting_started",slug:"/quickstart",permalink:"/docs/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/nixserver-io/nixserver/tree/main/docs/app/docs/getting_started/quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Quick start guide",hide_title:!0,sidebar_position:2,slug:"/quickstart"},sidebar:"tutorialSidebar",previous:{title:"Installing Nixserver",permalink:"/docs/getting_started/installation"},next:{title:"Managing your services",permalink:"/docs/manage_service"}},c={},d=[{value:"Quick start: Deploying your first service",id:"quick-start-deploying-your-first-service",level:2},{value:"1. Creating the project directory",id:"1-creating-the-project-directory",level:3},{value:"2. Creating a service",id:"2-creating-a-service",level:3},{value:"3. Configuring the service",id:"3-configuring-the-service",level:3},{value:"4. Deploying the service",id:"4-deploying-the-service",level:3}];function l(e){const r={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"quick-start-deploying-your-first-service",children:"Quick start: Deploying your first service"}),"\n",(0,n.jsx)(r.p,{children:"In this guide, we will walk through the process of deploying a service using Nixserver, a tool for managing and deploying services on a server. We will be deploying Sonarr, an open-source PVR that can monitor multiple RSS feeds for new episodes of your favorite shows and will grab, sort, and rename them."}),"\n",(0,n.jsx)(r.h3,{id:"1-creating-the-project-directory",children:"1. Creating the project directory"}),"\n",(0,n.jsx)(r.p,{children:"Open a terminal on your server, and run the following from your home directory:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"nixserver init\n"})}),"\n",(0,n.jsxs)(r.p,{children:["This creates a new directory called ",(0,n.jsx)(r.code,{children:"nixserver-config"})," in your home directory. This directory contains all the\nconfiguration files for Nixserver. It's also a git repository, so you can use git to manage your configuration."]}),"\n",(0,n.jsxs)(r.p,{children:["Change into the ",(0,n.jsx)(r.code,{children:"nixserver-config"})," directory:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"cd nixserver-config\n"})}),"\n",(0,n.jsx)(r.h3,{id:"2-creating-a-service",children:"2. Creating a service"}),"\n",(0,n.jsxs)(r.p,{children:["Create your first service, the ",(0,n.jsx)(r.code,{children:"sonarr"})," service:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"nixserver create sonarr\n"})}),"\n",(0,n.jsx)(r.h3,{id:"3-configuring-the-service",children:"3. Configuring the service"}),"\n",(0,n.jsxs)(r.p,{children:["Open the ",(0,n.jsx)(r.code,{children:"sonarr"})," configuration, at ",(0,n.jsx)(r.code,{children:"services/sonarr/configuration.nix"}),", in your favorite text editor and add the following:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:'{\n  services.sonarr.enable = true;\n\n# Set the user and group to ensure the service has the permissions it needs to read and write its config files\n  services.sonarr.user = "nixserver-service";\n  services.sonarr.group = "nixserver-service";\n}\n'})}),"\n",(0,n.jsx)(r.p,{children:"That's all the configuration you need to run Sonarr. You can add more configuration if you want, but this is all\nyou need to get started."}),"\n",(0,n.jsxs)(r.p,{children:["We now want to configure the service to persist data, mount additional volumes, and map the ports. Open ",(0,n.jsx)(r.code,{children:"services/sonarr/service.yaml"})," and add the\nfollowing:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-yaml",children:"appdata:\n  - /var/lib/sonarr\nmounts:\n  - /path/to/downloads:/downloads\n  - /path/to/shows:/shows\nports:\n  - 8989:8989\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Make sure to change the ",(0,n.jsx)(r.code,{children:"/path/to/downloads"})," & ",(0,n.jsx)(r.code,{children:"/path/to/shows"})," to be the actual paths of your downloads and shows directories."]}),"\n",(0,n.jsx)(r.p,{children:"That's it! You've configured your first service. Now you can deploy it to your server:"}),"\n",(0,n.jsx)(r.h3,{id:"4-deploying-the-service",children:"4. Deploying the service"}),"\n",(0,n.jsx)(r.p,{children:"Run the following command to deploy sonarr."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"nixserver deploy sonarr\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Open your browser and go to ",(0,n.jsx)(r.code,{children:"http://your-server-ip:8989"})," and you should see the Sonarr authentication page where you can set your username and password. Visit Sonarr's quick start guide at ",(0,n.jsx)(r.code,{children:"https://wiki.servarr.com/sonarr/quick-start-guide"})," for information on how to configure sonarr once you have the service deployed."]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);