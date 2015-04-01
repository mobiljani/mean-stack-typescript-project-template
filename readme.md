MEAN Stack VS2013 Template
-------
Live demo (continuous integration with GitHub ->  Azure Website): http://tsmeantemplate.azurewebsites.net

#### <i class="icon-file"></i> Prerequisites
> **Download and install the following:**
> 
> - Node.JS <i class="icon-download"></i><br/>
> https://nodejs.org/download
> - NTVS (Node Tools for Visual Studio)<br/>
> https://nodejstools.codeplex.com/releases/view/612573
> - TypeScript 1.4 for VS2013 <i class="icon-download"></i><br/>
> https://visualstudiogallery.msdn.microsoft.com/2d42d8dc-e085-45eb-a30b-3f7d50d55304
> - Task Runner & Explorer for VS2013 <i class="icon-download"></i><br/>
> https://visualstudiogallery.msdn.microsoft.com/8e1b4368-4afb-467a-bc13-9650572db708
> - NPM & Bower for VS2013 <i class="icon-download"></i><br/>
>  https://visualstudiogallery.msdn.microsoft.com/65748cdb-4087-497e-a394-2e3449c8e61e
> - Grunt Launcher for VS 2013 <i class="icon-download"></i><br/>
> https://visualstudiogallery.msdn.microsoft.com/dcbc5325-79ef-4b72-960e-0a51ee33a0ff

####<i class="icon-cog"></i>Instructions

From command prompt

 1. npm install bower -g
 2. npm install tslint -g
 3. npm install tsd -g
 3. In the "northwind" project directory run command: "npm install", this will download all npm packages for the project
 4. In the "northwind" project directory run command: "bower install", this will download all bower packages for the project.
 5. Compile and Run the northwind solution

***Note:** Steps 1-3 will is not needed for VS2015, since Bower, NPM, & TypeScript are built in. Unfortunately [NTVS](http://nodejstools.codeplex.com) is only available for VS2013 at the moment, and since this is a MEAN Stack example, we had to use VS2013.* We will migrate this sample to VS2015 as soon as NTVS is released for it.

*This project uses the AngularJS (Clean Code) Style guide* <br/>
**This project uses the Bootstrap UX/UI from the Visual Studio 2015 ASP.NET 5 Preview project template* <br/>

![enter image description here](https://lelong37.files.wordpress.com/2015/04/2015-04-01_8-15-581.png)

**Solution screenshot**

*Note: We are only committing the transpiled *.js, *.js.map files, and bower packages to support Azure Website continuous integration and deployment at the moment. We'll un-commit/remove these files/packages from the repository once we figure out how to run commands (e.g. bower install, tsc, etc.) post continuous integration build and pre-deployment.*

![enter image description here](https://lelong37.files.wordpress.com/2015/04/2015-04-01_13-08-532.png)
####<i class="icon-cog"></i>Coming Soon...!

 - Northwind MongoDb
 - Full CRUD examples with AngularJS, Kendo UI, Breeze.JS, Node.JS & TypeScript
 - Dynamic/Lazy Loading all AngularJS modules with RequireJS

<br/>
Feedback & comments: [@LeLong37](http://twitter.com/lelong37) @ Neudesic
<br/><br/>
***Powered by***

![enter image description here](https://download-codeplex.sec.s-msft.com/Download?ProjectName=nodejstools&DownloadId=761175&Build=20983)
<br/><br/>
![enter image description here](http://lelong37.files.wordpress.com/2015/04/azure2.png)
<br/><br/><br/>
![enter image description here](http://www.neudesic.com/wp-content/themes/neu/images/neudesic.png)

 

