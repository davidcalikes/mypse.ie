# MyPSE.ie (My Passport for Special Education)

## Overview

MyPSE.ie is a full stack web application, designed to support pupils with Special Educational Needs (SEN), during educational transitions.  

<img src="../docs/readme_images/mypse_mockup_w.png">

<br>

For SEN pupils, parents and school staff, periods that involve the transitioning of pupils between learning environments can be extremely challenging.

It is common practice during transitions within the Irish education system, that SEN pupils provide their new place of education with a document that will allow new teachers and support workers access to vital information about their care needs, learning supports, communication difficulties and more.  

Commonly referred to as 'passports', these documents can make an immeasurable difference into understanding and providing care for SEN pupils during periods of transition.

MyPSE.ie allows authenticated and authorised pupils and parents to design, view and update passports that reflect not only each individual pupil's special educational needs, but also a nuanced overview of their personality and style. Teachers can then view the passports that have been assigned to them by entering their unique registration number issued by the Irish Teaching Council.

To protect pupils against data breaches and identity theft, MyPSE.ie will only allow passports to be created for pupils or by pupils who have been added to a separate database table by their school administration.

Utilising the power of coding frameworks like Django and Bootstrap, MyPSE.ie has been rapidly, yet thoughtfully designed to provide users with an enjoyable and meaningful experience as they securely access, create and organise SEN passports.

<br>

[Live project:](https://mypse.herokuapp.com/)

<br>

# Contents

* [Planning & Research](https://github.com/davidcalikes/mypse.ie#planning--research)
    * [Research](https://github.com/davidcalikes/mypse.ie#research)
    * [Research Summary](https://github.com/davidcalikes/mypse.ie#research-summary)
    * [User Experience Design](https://github.com/davidcalikes/mypse.ie#user-experience-design)
    * [Target Audience](https://github.com/davidcalikes/mypse.ie#target-audience)
    * [User Stories](https://github.com/davidcalikes/mypse.ie#user-stories)
    * [Objectives](https://github.com/davidcalikes/mypse.ie#objectives-of-mypseie)
    * [Approach](https://github.com/davidcalikes/mypse.ie#approach)
    * [Data Flow](https://github.com/davidcalikes/mypse.ie#data-flow)
    * [Database Schema](https://github.com/davidcalikes/mypse.ie#database-schema)

* [Agile](https://github.com/davidcalikes/mypse.ie#agile)
* [Visual Design](https://github.com/davidcalikes/mypse.ie#visual-design)
    * [Wireframes](https://github.com/davidcalikes/mypse.ie#wireframes)
    * [Color Scheme](https://github.com/davidcalikes/mypse.ie#color-scheme)
    * [Nav & Footer Gradient](https://github.com/davidcalikes/mypse.ie#nav-and-footer-gradient)
    * [Background Gradient](https://github.com/davidcalikes/mypse.ie#background-gradient)
    * [Typography](https://github.com/davidcalikes/mypse.ie#typography)
    * [Naming The App](https://github.com/davidcalikes/mypse.ie#naming-the-app)

* [Features](https://github.com/davidcalikes/mypse.ie#features)
    * [Existing Features](https://github.com/davidcalikes/mypse.ie#existing-features)
        * [Features present across all pages](https://github.com/davidcalikes/mypse.ie#features-present-across-all-pages)
            * [The Navbar](https://github.com/davidcalikes/mypse.ie#the-navbar)
            * [Nav Logo](https://github.com/davidcalikes/mypse.ie#nav-logo)
            * [Menu Links](https://github.com/davidcalikes/mypse.ie#menu-links)
            * [Animated Buttons](https://github.com/davidcalikes/mypse.ie#animated-buttons)
            * [User Status Indicator](https://github.com/davidcalikes/mypse.ie#user-status-indicator)
            * [Collapsed Menu](https://github.com/davidcalikes/mypse.ie#collapsed-menu)
            * [Footer](https://github.com/davidcalikes/mypse.ie#the-footer)
        * [Individual Pages](https://github.com/davidcalikes/mypse.ie#individual-pages)
            * [Home Page](https://github.com/davidcalikes/mypse.ie#home-page)
            * [About Page](https://github.com/davidcalikes/mypse.ie#about-page)
            * [Learn More](https://github.com/davidcalikes/mypse.ie#learn-more-page)
        * [User Guides](https://github.com/davidcalikes/mypse.ie#user-guides)
        * [Sample Passports](https://github.com/davidcalikes/mypse.ie#sample-passports)
        * [Feedback Messages](https://github.com/davidcalikes/mypse.ie#feedback-messages)
        * [User Authentication](https://github.com/davidcalikes/mypse.ie#registration-page)
        * [Pupil Enrolment System](https://github.com/davidcalikes/mypse.ie#pupil-list-page)
        * [Passport Creation System](https://github.com/davidcalikes/mypse.ie#passport-list-page)
        * [Loading Modal](https://github.com/davidcalikes/mypse.ie#loading-modal)
        * [Teacher Passport Access](https://github.com/davidcalikes/mypse.ie#teacher-pupil-list-page)
        * [Admin Panel](https://github.com/davidcalikes/mypse.ie#admin-panel)
        * [Security](https://github.com/davidcalikes/mypse.ie#added-url-security-feature)

    * [Future Features](https://github.com/davidcalikes/mypse.ie#future-features)

* [Testing](https://github.com/davidcalikes/mypse.ie#testing)
* [Deployment](https://github.com/davidcalikes/mypse.ie#deployment)
    * [Database](https://github.com/davidcalikes/mypse.ie#database)
    * [Deploying to Heroku](https://github.com/davidcalikes/mypse.ie#deploying-to-heroku)
    * [Forking MyPSE.ie](https://github.com/davidcalikes/mypse.ie#forking-the-github-repository)
    * [Cloning MyPSE.ie](https://github.com/davidcalikes/mypse.ie#forking-the-github-repository)

* [Technologies](https://github.com/davidcalikes/mypse.ie#technologies)
    * [Software](https://github.com/davidcalikes/mypse.ie#software)

* [Media](https://github.com/davidcalikes/mypse.ie#media)

* [Credits](https://github.com/davidcalikes/mypse.ie#credits)

* [Thanks](https://github.com/davidcalikes/mypse.ie#thanks)

<br>


# Planning & Research

## Research

Due to the sensitive nature of this project and the potential vulnerability of its users, I was acutely aware that
I could not begin to develop such an application without
thoroughly and extensively researching the many complex challenges that
SEN pupils and their support networks face during periods of transition.

Whilst waiting for feedback from educational bodies, teachers and administrators was initially frustrating and time consuming, I feel the application is much more suited for use in the real world as a result of this.

Because of the exhaustive nature of the planning research, I have divided it up into more readable sections below.

<details>

<summary>
Use Case.</summary><br>
Working as a Special Needs Assistant in various Special Education settings for the past fifteen years, I have witnessed first-hand the challenges faced by SEN pupils as they make transitions throughout their school lives. I have also bore witness to the exponential increase in technological innovation and implimentation within this field. The importance of every support availiable to children with special educational needs requires very little emphasis. I don't feel I need to make the case for SEN 'passports' as a continuing concept here. I do feel however, that a web application designed to create, update, organise and share passports would offer manifold advantages over sharing traditional physical documents.


<br>

<img src="../docs/readme_images/planning1.png">

_A traditional passport template._

<br>

I have outlined the following benefits:

1. Access to pupil passports would be more convenient for all users. 
<br>

2. Pupil passports would become uniform in design and layout, maximising effective and efficient use.
<br>

3. Passports would only have to be created once, requiring just simple, minor updates before further pupil transitions.
<br>

4. Parents and Teacher users can organise and manage multiple passports from the same application.
<br>

5. Passports can be easily updated in real time, meaning pupils and parents can include information they may have forgotten to include initially.
<br>

6. Users can learn about SEN passports, create them and share them all from a single, efficient application.
<br>

7. Users can protect their data by removing access to their passport when they transition to a new educational setting.

8. Digital passports can include a rich variety of content including images, stylised text and hyperlinks to resources, media and other important information that is beyond the scope of traditional physical passports.
<br>
</details>


<details>
    <summary>Business Case.
    <br>
    </summary><br>

1. There are currently no dedicated apps available that can offer pupils, parents, teachers and schools the ability to create and share pupil passports.
<br>

2. A dedicated app could be easily integrated into many existing school intranet systems such as 'Aladdin' or 'VS Ware' via URL link.
<br>

3. There has been a marked rise in diagnosis of children with Special Educational Needs [globally](https://blogs.ucl.ac.uk/cdld/2022/04/04/why-the-rise-in-number-of-sen-children-especially-in-the-early-years/)
<br>
</details>

<details>
    <summary>NCSE Consultation.
    <br>
    </summary>
<br>

[The National Council for Special Education](https://ncse.ie/about-us) is the independent statutory body responsible for improving ??????the delivery of education services to persons with special educational needs arising from disabilities with particular emphasis on children???, in Ireland.

The NSCE provides a wide range of extensive resources, support and guidelines for persons within special education environments. One of the many ways the NCSE can offer support is during periods of transition.

The NCSE's expertise and authority on this subject made their website my first port of call. 

The information most relevant to my project was found within the following guidelines:

On page 11 of the excellent: 'CHANGING SCHOOLS, Moving from Primary to Post-Primary School' NCSE document (02156), It is stated that:

 ???Parents and schools should exchange relevant information to assist planning for students with special education needs.??? 

 <img src="../docs/readme_images/planning3.png"><br>
_Screenshot from NCSE's 'Changing Schools' document._

I also found this text within the same document to be remarkably similar if not identical to what a user story for a parent might look like for this project if re-ordered slightly.

<img src="../docs/readme_images/planning4.png"><br>
_Screenshot from NCSE's 'Changing Schools' document with potential user story._

For example: "As a parent... I would like to share my knowledge and experience... to help the post-primary plan..."

In addition to the above, the NCSE doesn't just provide support for pupils during transitions between primary and secondary schools but also provides guidelines for other transitions which can be found [here.](https://ncse.ie/transitions-2)

I was curious to find out if MyPSE.ie could serve pupils involved across this whole spectrum of educational transitions. Including:

* Transitions between similar types of school.
* Transitions between classes within the same school.
* Transitions between primary and special schools.
* Transitions between early education and school (starting school)
* Other educational transitions

Naturally, and perhaps, somewhat naively, I thought I'd reach out to the NCSE in person.

Initially, I wanted to find out if an app like MyPSE.ie already existed perhaps as an underused feature of already existing software. I also wanted to know if the NCSE could advise me on the best way to approach the early part of the app's development.

<img src="../docs/readme_images/planning5.png"><br>
_Email to NCSE Screenshot._

 I sent multiple emails to several departments outlining a basic proposal over a three week period only to receive a solitary email in which the NCSE stated categorically, that they would not be able to offer any me any feedback whatsoever.

<img src="../docs/readme_images/planning6.png"><br>
_NCSE response._

Given the potential benefits of the project, I couldn???t understand why the NCSE were so reluctant to offer any advice or even constructive criticism of the app so I attempted to call the only person from the NCSE who actually replied to my many attempted communications, Caroline McKeown to ask for clarification on this issue.

During a productive phone call, I was informed that the NCSE could not commit to or be seen to endorse any project involving SEN pupils without conferring with any and all stakeholders in such a property including The HSE (Health Service Executive), The Department of Education and Skills and others. 

Whilst this refusal might have at first been disheartening, I am extremely grateful to the NCSE for having someone take the time to inform me about the relationships between governing bodies and how legally complex they can be. It also raised a pertinent question about software currently used within Irish schools. It was also suggested that with the exception of 'Esinet' administration software, educational and communication software is implemented at the discretion of each school.

</details>

<details>
    <summary>Software in Irish Schools
    <br>
    </summary>
<br>
Despite my initial disappointment with the NCSE's response (or lacktherof) to my emails, I quickly refocused my attention to other useful sources of information that might benefit the project. If I was going to have to develop the app without any official guidance or input from governing bodies I would have to come up with a strategy that would allow schools themselves to provide access to the passport functionality of the app allowing pupil and parent users to control and manipulate the flow of information between themselves and their assigned teachers. 

In order to do this, I would need to familiarise myself with the administrative processes and software systems used by schools during the transfer of enrolment details and successful pupil transitions. 

Luckily, the secretary at my current place of work, St Mary's Special School, Drumcar, is extremely approachable. Susan Hynes - one of the supporting heroes of this project - was always available and enthusiastic about helping me understand the systems and applications involved during the process of a pupil transition, whilst at no point revealing any privileged information. I was mainly concerned with what administrative software is currently used by the admin staff at St Mary???s and its provenance. 

I discovered the following:

For the transfer of pupils (enrolment) between schools, all Irish Special Schools use a web app called ???POD??? (Primary Online Data) within the Department Of Education???s ???Esinet??? umbrella application.

<img src="../docs/readme_images/planning7.png"><br>
_Screenshot of Esinet software._

The first thing I noticed when I Susan sent me the above image was the tab marked 'PERSONAL' in the main 'Enrolment History' section.

<img src="../docs/readme_images/planning8.png"><br>
_Screenshot of Personal tab._

As you can see from the following image though, this tab does not contain any biographical or useful information in relation to the successful transition of a pupil. I was confident that myPSE.ie's purpose is not already being fulfilled by this software.

The ???POD??? app solely manages a pupil???s enrolment within a Primary-Level Education Setting. It contains no biographical information regarding a pupil???s personal life or educational ability. All Primary-Level Schools (Including Special Needs Schools) are required to use this app and it is the sole property of the Department of Education. As shown in the example image above, ???POD??? provides the school administration with the enrolment history of any given pupil and includes enrolment dates and the class teacher for each year. Any given pupil can only be enrolled at one school at a time. When a School enrols a pupil they are then automatically removed from their previous Schools role book. I decided that this type of feature could be implemented for the adding and removing of teacher access to a pupil passport within the myPSE.ie app. 

In addition to the above I also thought it might prove unnecessary to include the pupil history of previous schools within the myPSE.ie project as the School Administration already has access to this data.

It became apparent at this stage, that department issued pupil ID numbers and school roll numbers would work perfectly as unique keys within the MyPSE.ie data models. Using real world ID numbers like this has many advantages, including easy authentication of pupils and future-proofing later versions of the app.

As a parent myself, and an SNA with 15 years experience and still employed in a ???Special Educational Environment???, I am aware of the many software solutions available to mainstream schools and parents that are used on an every day basis.

<img src="../docs/readme_images/planning9.png"><br>
_School software examples._

I referenced the above apps when considering the structural and UI elements of myPSE.ie.

Rather than doing a deep dive here I thought it would be more efficient to include only aspects of these apps that have influenced or inspired MyPSE.ie's design and functionality directly.

For example:

Class Dojo has an attractive, high contrast, mobile-friendly 
login page which allows users to login based on their 
relationship to the pupil/student.

<img src="../docs/readme_images/planning10.png"><br>
_Class Dojo Login._

I thought that implementing a similar approach to user login would benefit MyPSE.ie's users, as they would be familiar with the concept of selecting a user role at login. 

Time constraints would restrict this option to a simple dropdown menu but the concept is what I considered to be most important initially.

I loved the subtle alternation of color between records in the esinet system. I thought this was an elegant way to separate entries and I replicated the style in MyPSE.ie's pupil record list template.  

<img src="../docs/readme_images/planning11.png"><br>
_Alternating styling for list of records._


???Aladdin' is a useful communication app that allows schools, teachers and pupils to communicate, share teaching and homework plans, share and log daily attendance as well as many other practical and useful features. This app could potentially be used to send the url of a pupils myPSE.ie passport or even just specific sections of the document to help teachers better understand specific issues relating to the needs of a given pupil. Aladdin's multi-purpose approach to managing daily school life influenced MyPSE's multi-user, multi-layered functionality.

At this stage it's worth pointing out that these apps are indeed multi-dimensional and have communication channels dedicated to informing teachers of SEN pupils needs and issues in real time. So I understand why this might seem confusing to people reading this documentation that are unfamiliar with special education transitions.

What MyPSE.ie offers is information for reference during periods of transition.Passports are by no means the be all and end all of teacher-parent communication. They do however play a vital role in providing a general overview of an SEN pupil at a time when more detailed information is not forthcoming and working relationships and routines have yet to be developed.

Of all of these apps I inspected, Seesaw had the most effect regarding visual style and I based a lot of my UI design choices on its simple, high-contrast approach.

Further into my research, I discovered other applications that heavily influenced my thinking during the initial development of MyPSE.ie. I discuss these in the 'Interviews.' tab below.

</details>

<details>
    <summary>Interviews/Design Thinking.
    <br>
    </summary>
<br>

Working in a special education environment when developing an app for SEN pupils has it's advantages as evidenced earlier in this document by Susan Hynes and in [other projects](https://github.com/davidcalikes/Marvelous-Matching) I have developed. 

I was conscious however, that working on a project with feedback coming from the teachers and pupils of just one school would be sub-optimal to say the least. I was determined not to let any bias (positive or negative), influence the design of the application. I didn't want the research for MyPSE.ie to be based on people that might just be telling me what I wanted to hear or those who might base their responses to questions on what they thought of me as an individual.
    
So I reached out (via telephone) to a local school in my area: St Josephs National School, Kingscourt, and arranged with Christina Meade, a teacher from 'Cairde' (St Joseph's ASD Unit) to arrange a quick telephone survey about MyPSE.ie.

I consulted with St Mary's Vice Principle Declan McCoy as I formulated questions for Christina. In a somewhat fortunate twist of fate Declan provided me with information that came up during a recent teacher-training course that took place earlier that week. While discussing software in schools during the training a course instructor divulged that 
[Google Workspace For Education](https://edu.google.com/workspace-for-education/editions/education-fundamentals/) has "some integrated passport functionality". 

One of the sticking points that administrators where having difficulty with was the transfer of access priveleges to the assigned teacher and protecting the data of the pupil.

Whilst I was initially disappointed that I had not known about this GWSE feature, I came around to realising that the unique proposition of MyPSE.ie doesn't lie simply in the digitisation of pupil passports and that if anything, for Google to include passport functionality in its suite of education platforms only serves to strengthen the business case for a dedicated app like MyPSE.ie.

I also liked the idea of solving an issue that even Google users seemed to be having problems with. Declan was also kind enough to help me formulate some of the research questions for Christina Meade.

I have listed the full questions and responses below:

1.  Q -- "How would you describe your experiences with pupil passports?"
<br>
    A -- "If we recieve a pupil passport (we sometimes don't), its usually a folder or poly pocket containing a few A4 sheets of background information on the child (pupil). They are never the same, and it can be hard to make sense of some of them. Sometimes there are scrapbook style folders that contain family pictures and artwork from the child and you can tell that effort has been made by whoever put them together. Those are the ones that you get the most out of. 

2.  Q -- "Do you find the information contained within pupil passports useful?"
<br>
    A -- "Not really, it can be hard to find to be honest. I suppose any extra background information is welcome but it would't always be there when you went looking for it. I don't think parents are aware what information to include and sometimes include information that isn't relevant, incomplete or outdated.

3.  Q -- "Do you provide parents with a template for transition passports during the pre-enrolment period?"
<br>
    A -- "Yes, It's something that we've been doing since I started working here, its an A4 sheet but I'd have to look for it I don't have one on me at the moment."

4.  Q -- "Do you think the passport template you provide for transitions is missing anything?"
<br>
    A -- "No from what I remember its laid out quite well, the problem is more parents not sending them back or not following the template. I do like it when the scrapbooks are sent in though, and the more pictures the better."

5.  Q -- "How would a web application that allowed users to create and securely share digital passports be of benefit?"
<br>
    A -- "I think it would make it easier if they were all in the one place and you could access them from your phone or iPad. I think the inconvenience is something that puts a lot of parents off. It might make them more likely to actually make a passport in the first place if they can make one on a website."

6.  Q -- "What concerns would you have about using a web app that shared pupil passports"
<br>
    A -- "Security obviously. Is that something you could do? I think some of the older teachers might still prefer to use the actual documents but most people have at least a smartphone these days. There might be issues about data protection as well so you'd probably have to look into that."
 
Although I was tempted to ask follow up questions after each response, especially after the first question where I really wanted Christina to elaborate more on instances where passports have proved useful but I only asked the questions I had prepared for the interview. I didn't want try and manipulate the answers I wanted out of the interview.

I appreciate Christina for taking the time to answer the questions. I followed up the interview a week later and we discussed what I gleaned from the interview via email.

I laid out what I thought were key features that the first (Minimum Viable Product) Version of MyPSE.ie should contain in order to address the issues raised during the interview.

* Users should be authenticated before they can create passports.
* Creating a passport should be made simple (a single form) to encourage users to use the platform.
* Passports should contain photographs and the layout should be the same for each pupil in order to quickly and easily access information.
* The app should be accessible from virtually any device with a modern web browser.
* Teachers should be given the option to print physical passports. (Time permitting)

<img src="../docs/readme_images/planning12.png"><br>
_Email Response from Christina._

As I mentioned above, working in a special needs school has it's advantages when approaching a project like this. Working as an SNA however makes some things slightly more difficult. It is teachers in schools that have the (legal) 'duty of care' for a pupil within a school and are therefore entitled to access confidential information that an SNA is not. As is clear from Christina's response the issue with the transfer and removal of access to pupil passports is something that I didnt initially recognise as a major problem.

Here is where I think a rigorous approach to planning has resulted in a much more robust application.

The next step during the planning stage of MyPSE.ie was a meeting with Richard Wells. Richard has been my assigned mentor since I began my studies with the [Code Institute](https://codeinstitute.net/ie/full-stack-software-development-diploma/)

During our meeting we discussed the idea and while Richard admitted he liked the proposal he touched upon a point that I had (yet again) not considered. 

Many SEN pupils are highly capable and could easily (with guidance and support) create and style their own passports. Up to this point, I had been focused so heavily on the types of pupils I have been working with for the past 15 years (pupils within the moderate to severe and profound range of intellectual disability), I had completely ignored an entire user group that could benefit from the app. As usual, I am immensely grateful to Richard for his wisdom and guidance through my continuing education in software development.

So with some haste I arranged a meeting with a teacher from a mainstream school whom I knew to teach SEN pupils.

Unfortunatly, there was no guarding against bias here. I would just have to try and be aware of my questioning and pay as much attention to the responses as possible. I also had no time or expert support like I had with Declan to formulate a new set of questions.  

The teacher in question: Aine Lynch of St Joseph's Secondary School in Rush Co.Dublin (yes both schools where really called St Joseph's) Has been a friend of mine for the past 20 years since I first moved to Ireland. A fellow musician, Aine is the year 6 head, a classroom teacher and a [SET](https://ncse.ie/special-classes) Class teacher.

Notes made during our discussion.

* MyPSE.ie would be of more benefit to St Joseph's than the current passport system. Aine told me that teachers and admin staff at St Joseph's use software called [VSWARE](https://www.vsware.ie/) The information contained within this software most relevant to pupil transitions is limited to a single text field.

* While Aine appreciated the concept of MyPSE.ie she was concerned about having yet another app to manage on top of a growing number of apps. Aine also thought that most other teachers would share this concern. MyPSE.ie being a standalone app might be a disadvantage in this case so an option to embed the app in future should be something to consider.

* While almost all of the SEN pupils who attend St Joseph's (Rush) would have the capability to create a passport online they would need what Aine describes as "scaffolding". In other words a step-by-step guide that they could follow whilst creating their passports.

* Aine also came up with an idea to allow pupils the option to customise their passports. This runs counter my own idea of making the passports uniform to make it easier to find information.

* Aine informed me that out of 900 pupils in ST Joseph's, 300 of those pupils are classed as having Special Eduacational Needs.
 
I'm grateful to Aine for her meeting me and helping extend the scope of the project. It would be dishonest of me to say I wasn't beginning to feel anxious at this stage in the project. But looking back now I think the product is much more inclusive and beneficial to pupil users because of Aine's valuable feedback.

The next area of research was tricky. I have made many friends over the years working as an SNA and have a number of former pupils and parents that I was sure would have been glad to help me gain perspective from a different user viewpoint. But for two reasons I decided not to go down this route. Firstly, as I have already mentioned, I wanted to protect the proposal against biased responses and secondly I felt a little uneasy and borderline exploitative just thinking about it from an ethical standpoint.

So I decided to use what I had learned during the 'design thinking' section of the Code Institute's LMS course content and put together a 'persona template'.

What's remarkable here, is how similar the persona template is to a pupil passport. 

<img src="../docs/readme_images/planning13.png"><br>
_Code Institute - Persona Template._

Here is the template I created. I wanted to make a template for a non-verbal user first. The reasoning behind this was that it is those who cannot speak for themselves that stand to benefit the most from MyPSE.ie. 

Persona Name: 
* John Osawa

Age:
* 11

Job/Role: 
* Pupil

Status:
* Minor

Other Information:
* non-verbal.
* non-ambulant (requires a wheelchair).
* has epilepsy.

Goals:
* To be respected and treated with dignity.
* To be included, despite my disabilities.
* Academic achievement.

Pain Point/Concerns:
* People sometimes fail to consider what I want because I can't verbalise it for myself.
* I'm afraid I might be excluded from fun activities because I can't let them know when I want to take part
* I love swimming but people I'm anxious they wont know that in my new school

Likes/Dislikes

* I don't like it when people ignore or talk about me and assume I can't understand them just because I have disabilities. 

* I like it when people take the time to talk to me and patiently allow me to communicate with them.

* I like when people really know me and what I like and need. It saves me a great deal of frustration. You might know I like football, but do you know my favorite team is FC Barcelona?

Empathetic excercises like this are second nature to an SNA. It is I suppose, the app's raison d'??tre.

## Problem Statement

<br>

The following problem statement was created as a result of developing this persona,

"To help facilitate successful educational transitions, pupils, parents and teachers should share vital information, so they can better understand a pupil's desires, needs and personality."

</details>

<br>

## Research Summary

* The decision to utilise software in Irish schools is at the discretion of each individual school administration.

* A digital 'passports' web app has both a real-world, practical use case and real-world business use case.

* The primary goal of the app should be to create a viable solution to the problem contained in the problem statement created during the planning stages of development. 

* The app should be 'standalone' and available for instant, easy adoption by any Irish school.

* Authentication should be required for CRUD interactions.

* The site admin panel should be used sparingly for sit maintenance by vetted personnel and should not be required to submit pupil records or passports. 

* Users should be instructed to select their user 'role' at registration.

* The application should use existing, 'real-world' ID numbers to ensure passports are genuine and to future-proof later versions of the app.

* Relevant sections of the app should reflect the design and layout of traditional style passports, and similar education based software to provide users with a sense of familiarity and confidence.

* Users should be instructed to select their user 'role' at login.

* Teachers access privileges should be revoked when a new teacher is assigned to a pupil.

* Pupil and parent users should be able to style the text content of their passports to better express the personality and tastes of the pupil.

* Users should be provided with visual feedback and guidance about how to use the app. 



<br>

## User Experience Design

### Target Audience

MyPSE.ie aims to provide its service to all Irish based SEN School Pupils and their representatives. The application also benefits teachers and schools within the Irish education system.
<br>

### Target Audience summary

* Users who are SEN pupils that are making educational transitions.

* Users who are parents of SEN pupils that are making educational transitions.

* Users who are teachers of SEN pupils making educational transitions.

* Users who are school administrators that want to facilitate SEN pupils who are making educational transitions.

<br>

## User Stories

#### __General User Stories__

* As a User, I would like the app to be intuitive and easy to navigate in order to access information efficiently.

* As a User I would like to login/logout easily depending on my user role in order to easily access information.

* As a User I want to be Informed when I have submitted a task or action within the app so I can be confident it has been successfully completed.

* As a User I want the app to be easy to read, consistent in design and pleasing to the eye so I will have a positive user experience.

* As a User I would like to access an About page in order to learn more about myPSE.ie

<br>

#### __User Stories__: *Site Owner*


* As a Site Owner, I would like to prevent the ability to create a passport unless a pupils details have been registered by their school in order to prevent misuse of the site.

* As a Site Owner, I would like to limit the number of passports to one passport per pupil in order to prevent misuse of the site and prevent misidentification of the pupil.

* As a Site Owner, I would like to restrict access to passports to authorised and authenticated users only in order to protect pupil data. 

* As a Site Owner, I would like to restrict access to passports based on user role in order to protect pupil data.

* As a Site Owner I would like to automate the transfer of passport teacher permissions in order to protect user data.

* As a Site Owner I would like to automatically delete passports when pupil is no longer enrolled in school in order to protect user data.

<br>

#### __User Stories__: *Role -- School Admin*

* As a School Administrator, I would like to create pupil records in order to facilitate the use of myPSE.ie  passports.

* As a School Administrator, I would like to securely login and out of the application in order to prevent unauthorised access to pupil information. 

* As a School Administrator, I would like to view a list of Enrolled Pupils in order to maintain a record of pupils who can benefit from myPSE.ie.

* As a School Administrator, I would like to update and delete pupil details in order to maintain accurate records.

<br>

#### __User Stories__: *Role -- Parent*

* As a Parent, I would like to create a ???passport??? for my SEN child to support them during educational transitions.

* As a Parent, I would like to securely login and out of the application in order to prevent unauthorised access to my child???s data.

* As a Parent, I would like to view a list created passports in order to keep track of and access them. 

* As a Parent, I would like to select, edit and delete any Passports I have created in order to maintain accurate data, as well as protect my child???s data.

* As a Parent I would like the User Experience of myPSE.ie to be intuitive and illicit a positive emotional response in order to encourage repeat visits to the app.

* As a Parent, I would like to customise my child???s passport to reflect their personality and tastes in order to provide a more accurate profile of my child. 

* As a Parent, I would like the option to print a ???printer-friendly??? version of my child???s passport in order to provide people outwith the education system with information that will help during a non-educational transition. (Respite facilities, youth clubs, sports teams etc.)

<br>

#### __User Stories__: *Role -- SEN Pupil*

* As an SEN Pupil I would like to create a passport to help others understand my needs, personality, tastes and abilities so they are better informed and equipped to assist me as I transition between Special Educational environments.

* As an SEN Pupil, I would like to securely login and out of the application in order to prevent unauthorised access to my data.

* As an SEN Pupil, I would like the User Experience of myPSE.ie to be intuitive and illicit a positive emotional response in order to encourage repeat visits to the app.

* As an SEN Pupil, I would like to view and edit my passport in order to maintain accurate data across time.

* As an SEN Pupil, I would like myPSE.ie to provide me with the ability to delete my own Passport as is my right.

* As an SEN Pupil, I would like  to customise my passport to reflect my personality and tastes in order to help people understand me.

* As an SEN Pupil, I would like the option to print a ???printer friendly??? version of my passport in order to provide people outwith the education system with information that will help during a non-educational transition. (Respite facilities, youth clubs, sports teams etc.)

<br>

#### __User Stories__: *Role -- Teacher*

* As a Teacher, I would like to securely login and out of the application in order to prevent unauthorised access to pupil data.

* As a Teacher, I would like to view a list of all passports assigned to my Teacher ID number in order to 
conveniently access their passports.

* As a Teacher, I would like to view the passports of children transitioning into my class in order to prepare supports, staff and educational resources to better facilitate their transition.

<br>

## Objectives of MyPSE.ie

<br>

* To make MyPSE.ie a viable solution to an existing problem.

* To make the purpose of the app obvious to the user.

* To provide users with an enjoyable, intuitive and easy to use interface.

* To provide users with a positive user experience, underwritten by feelings of familiarity, confidence and security.

* To provide a positive user experience whilst protecting user data.

<br>

## Approach

* The information will be displayed to the user logically and informed by planning and research.

* The app will be created following the principles of user experience design.

* The app's functionality will depend on the 'role of the user.

* The app will be simple to use and provide visual feedback for all users.

* The app will include an extensive guidance section including printable documents.

* The app will allow SEN pupils and their representatives to create personal, stylised passport documents.

* The app will follow strict data privacy guidelines

<br>

<img src="../docs/readme_images/data_basic_structure.png"><br>
_Basic App Structure_

## Data Flow

In order for MyPSE.ie to function as a stand alone application, I had to consider how to verify the identity of the SEN pupils who benefit from it. I wanted to do this for two reasons. Firstly to protect against identity theft and data breaches. Secondly, to make sure that anyone who creates a passport using MyPSE.ie is doing so for all of the correct reasons. I became hyper-conscious of how simple it might be to create a 'fake' passport using images found online as I was creating the sample passports for reference purposes. Should an individual be able to create a passport without verification, hypothetically they could misuse it in order to gain access or influence in other areas of special education, the health service or other areas of public life.

<img src="../docs/readme_images/data_flow_chart.png"><br>
_Flow Chart_

## Database Schema

<img src="../docs/readme_images/data_database_schema.png"><br>
_Flow Chart_

There are two 'real-world' data sources I have used to help me create my custom data models for this project. The Enrolled Pupils List data table has fields derived from the Department of Education's POD (Primary Online Database) application. 

<img src="../docs/readme_images/planning7.png"><br>
_POD application_

As I mentioned in the planning section earlier, the 'pupil id' and 'school roll no' fields provide unique identifiers for both schools and pupils. At the moment school roll numbers are only validated by REGEX validator code but I thought this was a good enough security measure for the moment as anyone trying to add a pupil record would at least have to know the unique format of a valid school roll number before they can create a pupil record. In future versions of the app, this field could be linked to a separate data table containing the roll number of every Irish school. The pupil ID field is a unique identifier for every school pupil in Ireland. The idea behind using this was to guarantee that as long as school administrators used this number, they wouldn't have to come up with their own system for creating and storing separate, unique pupil id numbers. Another advantage would be that schools, teachers, pupils and their parents would have one less number to remember.

The Passport custom data model was created using the fields from the 4 schools "Planner for Teachers of Special Education Classes". This was in order to narrow the scope of information to only the most vital fields required. The Excellent 4 schools planner was produced in accordance with NCSE and Department of Education guidelines so it also meant that MyPSE.ie passports would conform to these guidelines by proxy and I could be confident the passports would contain everything required and nothing superfluous. 

<img src="../docs/readme_images/data_4schools_planner.png"><br>
_4 Schools Planner Passport_

The relationships between the data tables are designed in order to solve the problem regarding the transfer of teacher access to pupil passports. To conform to privacy policy, only one teacher can be assigned access to a pupils transition document at any given time. To solve this issue, MyPSE.ie puts the pupils and parents in command of who can view their passports and when. They can even revoke access altogether if they choose. When pupils become enrolled in the MyPSE.ie Enrolled Pupil List data table they are given a Physical Document by their school administration staff containing the Teacher ID number of their assigned teacher. This ensures they will have complete control over who views their passport and also that they can transfer teacher privileges instantly upon future educational transitions.

<br>

# Agile

MyPSE.ie was developed using the Agile Development Methodology. A detailed overview of the Agile process is availiable [here.](../docs/AGILE.md)

<br>

# Visual Design

## Wireframes

I designed wireframes for reference as I began to develop the application. They are instructive as to how I wanted the app to display across multiple device widths. I deviated slightly from the original design as I had to add extra views and templates to request security information etc but for the most part the essence of the site and how I initially wanted to display it is evident here. 

Because this was my first time using Django as a project framework and my first time creating a full stack application, I was unsure at the beginning of how I would approach the CRUD functionality of the app. Initially I had envisioned a blank template passport that a user could edit one field at a time without requiring to resubmit the entire form. Unfortunately, this was beyond my current skillset given the short period of time I had to complete the project. 

<img src="../docs/readme_images/wireframes_home.png"><br>
_Home Page Wireframe_

<img src="../docs/readme_images/wireframes_about.png"><br>
_About Page Wireframe_

<img src="../docs/readme_images/wireframes_login.png"><br>
_Login Page Wireframe_

<img src="../docs/readme_images/wireframes_school_admin.png"><br>
_School Admin Wireframe_

I deviated from both the pupil record and passport list wireframes by creating a more user friendly and visually pleasing layout for each page.

<img src="../docs/readme_images/wireframes_add_pupil.png"><br>
_Add_Pupil Form Wireframe_

<img src="../docs/readme_images/wireframes_passport_list.png"><br>
_Passport List Wireframe_

<img src="../docs/readme_images/wireframes_add_passport.png"><br>
_Passport Form Wireframe_

<img src="../docs/readme_images/wireframes_passport.png"><br>
_Passport Wireframe_

Due to the scope of this application and how similar many of the pages are, I thought it unnecessary to include every single page here. Take the passport page for example. The passport layout will be the same for every user type except for minor visual/functional changes such as the removal of edit/delete buttons for teachers.


## Color Scheme

<img src="../docs/readme_images/visual_colors.png"><br>
_MyPSE.ie Color Scheme_

The colors used throughout the site are listed above. They are positive colors without being brash and are evocative of the Irish tricolor flag. (MyPSE.ie being an exclusively Irish enterprise) 

The contrasting dark magenta color was used as a natural compliment to the greens and is used as an indicator for hover pseudo elements, overwriting the default blue of bootstrap.

## Nav and Footer Gradient

<img src="../docs/readme_images/visual_gradient1.png"><br>
_MyPSE.ie Nav & Footer Gradient_

The Nav and Footer elements of the site have a white to green gradient set on a textured 'scribble' background. The gradient from neutral white to positive green (for go!) symbolises the 'transition' of SEN pupils and the textured background informs their often tumultuous nature.

The nav gradient reduces in severity across smaller screen widths in order to maintain a high contrast ratio for the MyPSE.ie logo.

## Background Gradient

<img src="../docs/readme_images/visual_gradient2.png"><br>
_MyPSE.ie Background Gradient_

The background gradient of MyPSE.ie features a subtle vertical waves pattern. This is designed to look similar to the watermarked paper of a traditional travel passport. (See example below)

<img src="../docs/readme_images/visual_waves_example.png"><br>
_Watermarked paper example_

The reasoning behind this was to project a sense of fun and adventure into the transition process as well as being suggestive of bureaucratic competence and security.

<br>

## Typography

*  There are two fonts used throughout the application.

    * Lato: A strong, elegant font for heading elements to project a professional, secure application. 
   
    * Helvetica: A clear, familiar and accessible font is used in paragraph text.

    The fonts were imported to the stylesheet via Google fonts.

<br>

## Naming The App

I researched many naming options for the application but many of the names I considered were already established apps or unavailable as .ie domains.

A .ie domain was required to communicate the app's area of operation.

I originally wanted to call the app "Class Pass" but a quick google search led me to a globally recognised gym class management app of the same name.

<img src="../docs/readme_images/visual_naming1.png"><br>
_ClassPass_

There is also a women-only gym in Cork city occupying the classpass.ie domain.

I abandoned this idea and then tried to come up with an acronym which would include the title letters of each of the following words.

* P for Passport

* S for Special

* E for Education

* T for transitions

S.T.E.P was the obvious choice here, as it could imply progression and assistance but it didn't work as a coherent sentence when laid out. Special Transitions Education Passports was confusing and illogical. In any case when I Googled "STEP app" the search returned yet another established fitness application. 

<img src="../docs/readme_images/visual_naming2.png"><br>
_STEP app_

Eventually MyPSE.ie was chosen. A lot of Irish public service applications use the prefix 'My' for apps that provide services (MyGov, MyID, MyWelfare etc.) so I decided this would perfectly communicate both the personal and administrative nature of the application. I also liked the rhyming qualities of the letter 'E' in PSE and the 'e' from the .ie extension. 

This is already practiced by the following Irish websites and is a nice, subtle way of making a domain name instantly more memorable.

<img src="../docs/readme_images/visual_naming_123.png"><br>
_123.ie_

<img src="../docs/readme_images/visual_naming_RIP.png"><br>
_RIP.ie_

I made an application to purchase the MyPSE.ie domain name and was successful.

<img src="../docs/readme_images/visual_naming_final.png"><br>
_MyPSE.ie Domain Registration_

<br>

# Features

## Existing Features

### Features present across all pages

<br>

## The Navbar

The navbar is present across all pages of the app and sticks to the top of the page as a user scrolls downwards, providing an optimal navigational experience.

<img src="../docs/readme_images/feat_nav_bar.png"><br>
_MyPSE.ie Nav Bar_

<br>

## Nav Logo

The highly stylised navbar for the app contains a CSS designed Logo in the upper left corner of the app that returns users to the home page when clicked. 

<img src="../docs/readme_images/feat_nav_logo.png"><br>
_MyPSE.ie Nav Logo_

<br>

## Menu Links

The Menu Links are arranged from left to right in order of importance to first time visitors of MyPSE.ie.

<img src="../docs/readme_images/feat_nav_menu_logout.png"><br>
_MyPSE.ie Nav Menu_

<br>

## Animated Buttons

Each link in the menu has a custom CSS animation that activates when hovered over providing a pleasing visual user experience.

<img src="../docs/readme_images/feat_nav_menu_buttons.png"><br>
_MyPSE.ie Nav Menu_

The Menu Contains links to the Home, About, Login and Register pages for Logged out or unregistered users. Upon Login users are presented with different options depending on their user type.

<img src="../docs/readme_images/feat_nav_menu_loggedin.png"><br>
_MyPSE.ie Nav Menu_

When logged in the user is presented with a Logout link instead and the register link is removed. There is a link to the relevant user list (pupil list, passport list etc.) as well as a user status indicator that provides visual feedback for the user.

<br>

## User Status Indicator

<img src="../docs/readme_images/feat_nav_menu_indicator.png"><br>
_MyPSE.ie User Status Indicator_

The user status indicator informs the user of their login status, role and username.

<br>

## Collapsed Menu

At smaller screen widths, the nav bar collapses into a burger style dropdown menu to enhance user experience on mobile and tablet devices.

<img src="../docs/readme_images/feat_nav_menu_collapse.png"><br>
_MyPSE.ie Collapsible Menu_

<br>

## The Footer

<img src="../docs/readme_images/feat_footer.png"><br>
_MyPSE.ie Footer_

The Footer section hugs the bottom of each page of the site and contains Copyright and Developer information including social links that open in a new tab.

<br>

## Existing Features (cont)

### Individual Pages

<br>

## Home Page

The Home page or landing page, is the first page of the app. The upper section contains the nav bar, hero image and heading text that make the site's purpose instantly obvious to the user. Teaser content can be seen at the base of the upper page encouraging users to scroll.

<img src="../docs/readme_images/feat_pages_home_upper.png"><br>
_MyPSE.ie Home Page with Hero Image and heading text_

<br>

The lower section of the home page contains three 'cards' that offer more insight to the functions of MyPSE.ie. Each card contains brightly colored images and inviting links that encourage users to login or visit the about page for more information.

<img src="../docs/readme_images/feat_pages_home_lower.png"><br>
_MyPSE.ie Lower Home Page with info cards, links and footer_

<br>

## About Page

The About page contains information and resources for users that compliment the application and is available to view for authenticated and visiting users. The upper section contains the nav bar, heading image and heading text. There is also a small paragraph of text that provides instructions for the user. Teaser content can be seen at the base of the upper page encouraging users to scroll.

<img src="../docs/readme_images/feat_pages_about_upper.png"><br>
_MyPSE.ie About Page with Heading Image and info text content_

<br>

The lower section of the About page contains three 'cards' that offer links and resources to assist users during their operation of MyPSE.ie. Each card contains relevant images and links that encourage users to download user guides, sample passports or learn more about SEN transition passports.

<img src="../docs/readme_images/feat_pages_about_lower.png"><br>
_MyPSE.ie Lower About Page with info cards, downloads and link to Learn More Page_

<br>

## Learn More Page

The Learn More page contains information regarding the important role that SEN passports have during educational transitions for SEN pupils, parents and teachers. The lower section lists the advantages of MyPSE.ie specifically.

<img src="../docs/readme_images/feat_pages_learn_more.png"><br>
_MyPSE.ie Learn More Page_

<br>

## User Guides

User guides can be downloaded via link from the About page in PDF format. This is to provide useful guidance for all authenticated MyPSE.ie users who wish to interact with application data. 

<img src="../docs/readme_images/feat_downloads_user_guides.png"><br>
_MyPSE.ie User Guide Screenshot_

<br>

## Sample Passports

Sample Passports can be downloaded via link from the About page in PDF format. This is to provide inspiration for all authenticated MyPSE.ie users who wish to create a passport but would like a handy reference document to assist them. 

<img src="../docs/readme_images/feat_downloads_samples.png"><br>
_MyPSE.ie Sample Passports Screenshot_

<br>

## Registration page

A key feature of MyPSE.ie is the assignment of user roles to users at the point of registration. On the Registration page, users can choose to create an account as a SEN pupil, parent, teacher or school administrator.

Once they have created an account with their chosen role they are redirected to a list page containing information pertinent to their user type.

<img src="../docs/readme_images/feat_pages_registration.png"><br>
_MyPSE.ie Registration Form_

<br>

## Sign In Page

The Login page has a simple form that allows already registered users to log in and access data.

<img src="../docs/readme_images/feat_pages_login.png"><br>
_MyPSE.ie Registration Form_


## Sign Out

The Sign out page allows users to logout at the end of their session.

<img src="../docs/readme_images/feat_pages_logout.png"><br>
_MyPSE.ie Sign out Form on tablet device_

<br>

## Feedback Messages

MyPSE.ie provides consistent visual feedback via stylish alert messages to all authenticated users who manipulate data using the application. The messages are programmed to appear for successful authentication actions as well as successful data submissions and submission errors then disappear after a few seconds.

<img src="../docs/readme_images/feat_feedback_messages_logged_out.png"><br>
_MyPSE.ie Sign out Form on tablet device_

<br>

## Pupil List Page

The Pupil List Page is only available to users with the user role of 'school' (or admin). School Administrators are redirected to this page immediately upon login and can return to the page via the 'Pupil List' Link in the Nav Bar should they visit another page while logged in.

The Upper Section of the Pupil List page contains a heading image and header text as well as a link to download a printable id form in PDF format which opens in a new tab when clicked.

<img src="../docs/readme_images/feat_pages_pupil_list_ID_form.png"><br>
_MyPSE.ie Pupil ID Form_

 The Pupil List Page also provides links to all of the records that a given School Administrator has created. The links are displayed in a list which is styled in an alternating pattern making them easily differentiated to the user.

<img src="../docs/readme_images/feat_pages_pupil_list_upper.png"><br>
_MyPSE.ie Upper Pupil List Page_

The lower section of the Pupil List Page features links that navigate through pages of records if the list contains more than nine objects. There is also a visual indicator provided that informs the user of the number of pupil list pages.

School administrators can also add new pupil records to the pupil record list by clicking on the "add pupil record button" which opens the Pupil Record Form page.

<img src="../docs/readme_images/feat_pages_pupil_list_lower.png"><br>
_MyPSE.ie Lower Pupil List Page_

<br>

## Pupil Record Form Page

The Pupil Record Form page contains a standard form for the enrolment of pupils on the MyPSE.ie Pupil List Data Sheet. This is so the identity of a pupil can be confirmed before a passport can be created by them or for them. The list contains heading text that contains instructions on how to successfully complete the form. A genuine school administrator will have access to pupil ID numbers and School Roll numbers so will know the format that is required. If someone who is not a school administrator tries to submit a form they are unlikely to know the formats of pupils identification let alone their actual ID numbers. This security measure lessens the likelyhood that bad actors can misuse the site.

This page is also used to edit existing records via a link in the Pupil Record Page.

<img src="../docs/readme_images/feat_pages_pupil_record_form.png"><br>
_MyPSE.ie Upper Pupil Record Form Page_

The Lower Pupil Record Form Page contains a button for submitting the form as well as a cancel without saving button that returns the user to the previous page.

<img src="../docs/readme_images/feat_pages_lower_pupil_record_form.png"><br>
_MyPSE.ie Lower Pupil Record Form Page_

<br>

## Pupil Record Page

The pupil record page contains the MyPSE.ie enrolment information for a given pupil. The form contains a link to edit pupil record via a pre-populated instance of the Pupil Record Form. There is also a link to delete the record via the Delete Pupil Record page.

<img src="../docs/readme_images/feat_pages_pupil_record.png"><br>
_MyPSE.ie Pupil Record Page_

<br>

## Delete Pupil Record Page

The delete pupil record page contains buttons to delete pupil information and is accessed via a specific pupil record page. The page contains a warning regarding the action and a success message when the record is deleted. The user is returned to the school admin list upon successful deletion.

<img src="../docs/readme_images/feat_pages_delete_record.png"><br>
_MyPSE.ie Delete Pupil Record Page_

*** NB Deleting a pupil record removes a users ability to create a new passport. It does not delete a pupil's passport if one exists but should a pupil decide to delete their own passport after their enrolment file has been removed they will require re-enrolment via a new school administration. ***

An almost identical page is used via the Passport Page to delete pupil passports.

## Passport List Page

The Passport List Page is only available to users with the user role of 'Parent/Pupil', (or admin). Parent users are redirected to this page immediately upon login and can return to the page via the 'Pupil List' Link in the Nav Bar should they visit another page while logged in. Pupil users are redirected to this page after they successfully create or edit their passports. 

The Upper Section of the Pupil List page contains a heading image and header text as well and is consistent in style with the rest of the site.

<img src="../docs/readme_images/feat_pages_upper_passport_list.png"><br>
_MyPSE.ie Upper Passport List Page_

The Lower Passport List Page contains 'card' style passport holders that link to any number of passports that parent users have created and any single passports that pupil users have created. The cards, which contain the name and image of the passport holder are displayed from left to right to the user and paginate if the list contains more than three objects. There is a link at the bottom of each card for users to access each document. For parent users there is a button above the footer that allows access to add new passports. For pupil users, this disappears after they have created one passport.

<img src="../docs/readme_images/feat_pages_lower_passport_list.png"><br>
_MyPSE.ie Lower Passport List Page_

<br>

## Pupil ID Check Page

The Pupil ID check is the key security feature of the MyPSE.ie application. The page presents the users an input field that queries the Pupil Records Data table. If a matching Pupil ID is found to the one submitted users can click on the link provided to begin creating a pupil passport. The pupil ID check page is available to both pupil and parent users via the add passport link in the passport list page. The page features a heading image and text that informs the user they cannot create a passport without a valid ID.

<img src="../docs/readme_images/feat_pages_pupil_id_check.png"><br>
_MyPSE.ie Pupil ID Check page_

## Passport Form Page

The Passport Form Page contains the main form for submitting a pupil passport to the MyPSE.ie Passports data table. The page has heading text and instructions for the users at the top of the form. 
<img src="../docs/readme_images/feat_pages_passport_form.png"><br>
_MyPSE.ie Passport Form page_

The form also contains the following key features:

* Text form fields for clerical inputs like 'pupil' and 'teacher' fields.
These fields are important as they are what authorise teacher users to access passports. Pupils fill these fields out using the information contained in the physical form provided by their school administration staff.

* Custom JavaScript functionality that ensures users cannot change their pupil ID from the one they submitted during the authorisation check.

<img src="../docs/readme_images/feat_pages_passport_form_js.png"><br>
_MyPSE.ie JavaScript ID Check Function_

* Cloudinary Image Fields that allow users to upload multiple images to compliment their passports.

Image Fields
<img src="../docs/readme_images/feat_pages_passport_form_images.png"><br>
_MyPSE.ie JavaScript ID Check Function_

* Summernote text editors on every passport text field allowing users greater freedom of self expression when creating text content. Summernote fields hav no character limit to allow users the maximum scope available to accurately communicate a pupils transitional needs.

<img src="../docs/readme_images/feat_pages_passport_form_summernote.png"><br>
_MyPSE.ie Summernote_

The passport form can be submitted via a link at the bottom of the page.
A pre-populated instance of the form is also used form is used to edit passport data via a link form the base of the passport. 

<br>

## Passport Page

The Passport Page is available to Pupil, Parent and Teacher Users.

Pupils and Parent users can access passports via the passport list page and authorised Teacher users can access passports via the Teacher pupil list page after they confirm the pupil's ID number.

<img src="../docs/readme_images/feat_pages_passport.png"><br>
_MyPSE.ie Passport Page_

Passports are displayed in a layout similar to that of the 4 schools template referenced in the planning section in order to provide users with a sense of familiarity and confidence. Text is displayed using whatever style the user submits during the creation of the passports due to the WYSIWYG qualities of Summernote. 

<img src="../docs/readme_images/feat_pages_passport_summernote.png"><br>
_MyPSE.ie Summernote Passport Text_

Links to the edit and delete passport pages are available at the base of the passport page. These links are not available to Teacher users.

<br>

## Loading Modal

The Loading modal is an element that displays while the passport form is being submitted. This feature was included as there can be a significant delay when submitting passport data if large images are included in the passport design.

<img src="../docs/readme_images/feat_loading_modal.png"><br>
_MyPSE.ie loading_modal_

The Loading modal features a rotating MyPSE.ie logo and 'Loading' heading text. The modal covers the whole screen to prevent user interruptions. This feature provides visual feedback for the user in two ways. First of all if the logo animation stops during a rotation it will indicate to the user that the loading process is no longer taking place and that the page has crashed. In addition, the heading text provides unambiguous visual feedback regarding the process currently underway. 

## Teacher Pupil List Page

The Teacher Pupil List Page is only available to authenticated 'Teacher' users who are redirected to the page direct from login. Teachers can return to the page should they navigate away from it by way of the 'Pupil Passports' link in the nav bar.

The Upper Teacher Passport list page contains a heading image and text feedback to instruct the user. Teacher users can access a list of pupil passports to which they have been assigned by submitting their official Irish Teaching Council Number. Using the teaching council number ensures that no other Teacher user can view the pupil passport.

<img src="../docs/readme_images/feat_pages_teacher_passport_list.png"><br>
_MyPSE.ie Teacher Passport List_

Clicking an individual link will bring the teacher user to the Teacher Pupil ID page.

<br>

## Teacher Pupil ID Check Page

The Teacher Pupil ID Page is only available to Teacher users. Similar to the Pupil ID Page, the pupil's id must be valid before the Teacher user can access the passport. This is to prevent Parent Or Pupil users, who have access to Teacher ID numbers from accessing the passports of other pupils by creating a teacher account and using a teacher ID number to display a list of pupils assigned to that teacher. This extra security check ensures that Teachers must have both Teacher and Pupil ID numbers, meaning if a pupil or parent user does create a Teacher account, the only passports they will be able to access are passports they have both ID numbers for. (Their own)

<img src="../docs/readme_images/feat_pages_teacher_pupil_check.png"><br>
_MyPSE.ie Teacher Pupil ID Check_

Clicking an individual link will bring the teacher user to the Teacher Pupil ID page.

<br>

## Admin Panel

MyPSE.ie's Admin Panel Utilises Django's Built in Admin functionality. The Admin panel has been designed to be used by Garda vetted site administrators for database and record maintenance only and is not required to create user records or passports. Admin Users can access and edit all data on the application's database. Summernote form fields are also included in the Admin Passports Form page to maintain a consistency of use across the site.

The Admin panel was not used to create user groups and permissions as I didn't want school admin, parents and pupils users to have access to and the ability to alter the records and passports that did not belong to them.

<img src="../docs/readme_images/feat_admin.png"><br>
_MyPSE.ie Admin Panel_

<br>

## Added URL Security Feature

MyPSE.ie has an added security feature that prevents unauthorised user access and form submission.

This feature ensures that users who are authenticated, but not authorised to view pages ouside the scope of their own user role cannot access pupil record and passport forms by navigating to the page directly via URL input. 

<img src="../docs/readme_images/feat_security_urls.png"><br>
_MyPSE.ie Invalid URL Referer Message_

<br>

## Future Features

There are a number of features that will be integrated into the MyPSE.ie application in future releases.

These include:

* Deploy to the MyPSE.ie domain. This application was developed as my fourth Portfolio Project Submission (Full Stack Frameworks) for the Code Institute's Full Stack Software Development with eCommerce Diploma course. After the project has been assessed I will consider deploying the site to the MyPSE.ie domain based on the feedback of the CI assessment team.

* The security of the school enrolment procedure could be significantly improved by linking to an existing real-world database or creating another data table containing the roll number of every school in the state. 

* One-click authorisation for teacher users by extending user model. To improve the user experience of teachers, the app will provide a feature that allows teachers to remember the pupil ID numbers of all pupils after each number is initially provided. This will allow teacher users to access passports more efficiently and encourage repeat visits to the app while maintaining the security of the pupil's data.

* Print physical passports. In MyPSE.ie v2.0 I hope to include the ability for users to print physical documents that contain only certain elements of the passports page and do not include sensitive information, such as pupil or teacher ID numbers.

* Email authentication and automated messaging. Utilising an API, the site would be greatly improved by adding email authentication and could alert users to activity on the site. Alert messages via email could be used for the following:

    * When a pupil has been enrolled on or removed from the system.
    
    * When a pupil has created a passport.

    * When a teacher has been assigned to or removed from a passport.

    * When a teacher views a passport.

* Supporting videos. A series of instructional videos that help explain the value of SEN passports and MyPSE.ie would provide extra assistance to all users and would improve accessibility for some users. 

<br>

# Testing

The app was conscientiously tested during and post development.
The testing results for MyPSE.ie are available [here.](https://github.com/davidcalikes/mypse.ie/blob/main/docs/TESTING.md)

<br>

# Deployment

MyPSE.ie was deployed to heroku during the early stages of development. I wanted to make sure the database and static files were all accessible from the beginning of the project so I wouldn't have to worry about deployment issues closer to releasing the app.

The live site can be viewed [here:](https://mypse.herokuapp.com/)

<img src="../docs/readme_images/deploy_early_benefit.png"><br>
_Early Deployment Screenshot_

<br>

## Database

### ElephantSQL

To create a managed postgres datasbase go to [ElephantSQL](https://www.elephantsql.com/) and Signup/Signin to your account.

* Click on 'Create New Instance'.

<img src="../docs/readme_images/deploy_elephant1.png"><br>
_ElephantSQL_

* Name your database, choose the 'Tiny Turtle' payment plan and click 'Select Region'.

<img src="../docs/readme_images/deploy_elephant_2.png"><br>
_ElephantSQL_

* Choose your region and then create the database. instance.

* In the instances page, click the name of your chosen database.

* In the details section of the following page copy the postgres url.

<img src="../docs/readme_images/deploy_elephant_3.png"><br>
_ElephantSQL_

You can now use this URL when linking the database to the project's GitHub repository.

<br>

## Deploying to Heroku

* Signup/Signin to Heroku.

* Create a new app from the Heroku dashboard.

<img src="../docs/readme_images/deploy_heroku1.png"><br>
_Heroku Deployment_

* Give the app a unique name and enter the region of operation then click 'create app'.

* From your newly created app choose the settings tab and navigate to 'Reveal Config Vars'.

* Paste the ElephantSQL Database url into the DATABASE_URL environment variable.

<img src="../docs/readme_images/deploy_heroku2.png"><br>
_Heroku Deployment_

* Create an env.py file in the root directory of your Django project. (At the same directory level as requirements.txt and manage.py)

The file should look like the image below, with the os library imported at the top of the file.

<img src="../docs/readme_images/deploy_env1.png"><br>
_env.py_

* Paste the ElephantSQL url for the DATABASE_URL value.

* Add the following libraries to the settings.py file: Import Path from pathlib, dj_database_url and os.

<img src="../docs/readme_images/deploy_env3.png"><br>
_settings.py_

* Create a secret key to replace the insecure SECRET_KEY variable in the settings.py file. Link the secure key in env.py to the settings.py SECRET_KEY variable with the following code: SECRET_KEY = os.environ.get('SECRET_KEY')

* Add your secret key to HEROKU Config Vars.

* Link the DATABASES value to the env.py file with the following code: DATABASES = {
    'default': dj_database_url.parse(os.environ.get('DATABASE_URL'))
    }

* You can now migrate the app models to the new database using the command: "python3 manage.py makemigrations" then Python3 manage.py migrate.


The final part of setting up the env.py file concerns static files. To manage the static files for the project execute the following steps:

* Signup/Signin to [Cloudinary](https://cloudinary.com/)

* Copy the 'cloudinary url' from your account dashboard and paste it as the CLOUDINARY_URL value in env.py.

* Add the CLOUDINARY_URL to the Config Vars in Heroku.

* Also Add the DISABLE_COLLECTSTATIC Key with the value of 1

* Change the static file settings in Django by altering the following.

 * The STATIC_URL
 * STATICFILES_STORAGE
 * STATICFILES_DIRS
 * STATIC_ROOT
 * MEDIA URL
 * DEFAULT_FILE_STORAGE

 The STATIC section of settings.py should resemble the following image:

 <img src="../docs/readme_images/deploy_env3.png"><br>
_STATIC settings.

* Change the TEMPLATES 'DIRS' Setting in Settings.py to [TEMPLATES_DIR] TEMPLATES configuration for the project should resemble the following image:

 <img src="../docs/readme_images/deploy_env4.png"><br>
_TEMPLATES Setting in settings.py

* Back nearer the top of the settings.py file add the Setting TEMPLATES_DIR = os.path.join(BASE_DIR, 'templates')

* Create 3 new folders for static files, media files and HTML templates. (At the same directory level as requirements.txt and manage.py.)

* Create a Procfile(capital P) and add the following: web: gunicorn NAME_OF_THE_APP_GOES_HERE.wsgi 

* Add the app name and herokuapp.com to the list of ALLOWED_HOSTS.

* Add and commit the changes to GitHub.

* Remove DISABLE_COLLECTSTATIC from Heroku Config Vars

* Deploy via the 'Deploy Main Branch' button in the Deployment page of HEROKU.

* If you receive an success message, you can click the link provided to view the app in the web browser.

<br>

## Forking the GitHub Repository

If you want to make an independent copy of the MyPSE.ie GitHub repository please follow these steps:

* Signup/Signin to GitHub.

* Follow this link to the MyPSE.ie repository: https://github.com/davidcalikes/mypse.ie

* Click on the 'Fork' button at the top-right of the page.

<img src="../docs/readme_images/deploy_1.png"><br>
_Forking the repo_

* A copy of the MyPSE.ie repository should now be available in your list of GitHub repositories.

Forking the GitHub repo will not affect the original codebase. 

<br>

## Cloning the GitHub Repository

If you want to contribute to the MyPSE.ie project, You can clone the MyPSE.ie repo. A clone creates a linked copy of the repository that will run on a local machine which can then be synchronized with the original repo. To clone MyPSE.ie please follow these steps:

* Signup/Signin to GitHub.

* Follow this link to the MyPSE.ie repository: https://github.com/davidcalikes/mypse.ie

* Click on the <> Code button near the top-right of the page.

* Access the 'Code' menu from above the main directory window and choose a preferred cloning option by selecting either HTTPS or GitHub CLI. An SSH key is required should you prefer that option. 

* Press the overlapping squares icon to copy the link to the repository.

<img src="../docs/readme_images/deploy_2.png"><br>
_Cloning the repo_

* Open the code editor of your choice.

* Create a new working directory for the cloned repo.

* Use the 'git clone command and paste in the copied link.

* Press enter and the repo will be cloned locally to your machine.

* Setup and activate your local development environment.

* Install the project requirements using the command -- pip3 install -r requirements.txt

* Create a Heroku app for your Clone and add the appropriate Config Vars using the [aforementioned instructions](https://github.com/davidcalikes/mypse.ie#deploying-to-heroku).

* Create an env.py file that includes the appropriate DATABSE_URL, SECRET_KEY and CLOUDINARY_URL settings.

* Add 'localhost' to ALLOWED_HOSTS in settings.py

* Use the command -- python3 manage.py makemigrations followed by -- python3 manage.py migrate to setup a local copy of the project database.

* Use the command python3 manage.py runserver to run the app on a development server.

# Technologies

MyPSE.ie was developed using the following languages, frameworks and dependencies.

* Python (Version 3.8.11) The requirements.txt file contains all of the projects Python packages.

* Django was the main python framework used while developing MYPSE.ie.

* Django AllAuth was used for user account management/authentication.

* Bootstrap (Version 5.01) was used to rapidly develop the layout, responsivity and core frontend elements of MyPSE.ie.

* ElephantSQL was implemented as the postgres, database management system for MyPSE.ie

* HTML was used in developing the templates for MyPSE.ie.

* CSS was used to add custom styling to the site, overriding many of Bootstrap's core style rules.

* JavaScript was used to implement interactivity and manipulatethe DOM from the front end.

* Font Awesome Instructive icons were used to provide visual feedback in many areas. 

* Heroku. MyPSE.ie was deployed to the cloud-based hosting service Heroku.

<br>

## Software

### Gitpod

Gitpod was used as the primary development environment for this application. As the scope of this project was considerable from the beginning of development, I thought it would be wise to have a system in place that supporting devs could access remotely.


### Git & GitHub

The version control and storage system used for MyPSE.ie is Git and GitHub respectively. 

### Lucidchart

I created a flowchart during the planning of MyPSE.ie using Lucidchart.


### DrawSQL

I used DrawSQL to create the database schema during the planning stages of the project.


### Adobe Photoshop CS6

I am moderately skilled at using Photoshop and created many of the graphics, page-heading images and logo's on display throughout the site.


### Tiny PNG

For resizing larger image files


### WebP Converter

For converting images to nextgen web formats.


### Balsamiq

I used Balsamiq to create wireframes for the project.


### Sejda HTML to PDF Converter

I created the sample passport PDF files using the Sejda software available [here.](https://www.sejda.com/html-to-pdf)


### Other Notable Resources

* Diffchecker -- To compare code in a web browser when searching for bugs and subtle changes.

* Grammarly -- To check the spelling and grammar of the text content of MyPSE.ie and its documentation.

* Apple Pages -- To create PDF User Guides.

<br>

# Media

The following images, of which I personally hold the copyright, were taken at my current place of work, with permission. 

<img src="../docs/readme_images/credits_1.png"><br>


<img src="../docs/readme_images/credits_2.png"><br>

I used the Lamh image on the sample passport from the Lamh organisations [Facebook page.](https://www.facebook.com/centralremedialclinic/photos/today-is-the-first-ever-l%C3%A1mhday2020-l%C3%A1mh-is-a-manual-sign-system-used-by-childre/1648213428680495/)

The transparent textures used as backgrounds were from https://www.transparenttextures.com/

The warning logo used was downloaded from: https://www.subpng.com/png-v5sg3x/download.html

All other images used throughout the development of this site were downloaded from [Pexels.com](https://www.pexels.com/photo/photo-of-woman-teaching-935943/) and are free to use.

<br>

# Credits

### Bootstrap

The Bootstrap template from which MyPSE.ie is loosely base was from this [StartBootstrap](https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/dist/index.html) repo.


### Custom User Tutorials & Articles

The following video tutorial and articles were referenced when creating my custom user authorisation feature. 

* https://www.youtube.com/watch?v=Z6QMPAcS6E8

* https://stackoverflow.com/questions/29803608/add-users-to-groups-in-django

* https://testdriven.io/blog/django-custom-user-model/

* https://stackoverflow.com/questions/42006246/django-all-auth-role-based-signup

* https://www.youtube.com/watch?v=8jyyuBaZwVU&list=PLOLrQ9Pn6cayYycbeBdxHUFrzTqrNE7Pe&index=14


### Django AllAuth Adapter

When adapting Django AllAuth to accept user roles I referenced the following article on [Stack Overflow](https://stackoverflow.com/questions/66735981/django-allauth-custom-signup-form-doesnt-save-all-of-the-fields)


### Choices

In users.models.py the 'choices' code created was based on code found within this article.

https://medium.com/djangotube/django-roles-groups-and-permissions-introduction-a54d1070544


### Dynamic Page Titles

When creating page titles for the project I referenced the following:
<br>

 [Article 1](https://iheanyi.com/journal/2020/04/04/dynamic-page-titles-in-django/)

 [Article 2](https://www.forgepackages.com/guides/page-titles/)

 <br>

 ### Summernote

 I consulted the summernote [documentation](https://summernote.org/deep-dive/) when customising the editor toolbar

 
 ### Search Function

 I implemented the code in this article when searching through lists of objects.

https://stackoverflow.com/questions/13416502/django-search-form-in-class-based-listview

 ### Nav Button Styling

 I used part of this code when creating the button animations.

 https://uiverse.io/cssbuttons-io/stale-rattlesnake-87
 
 ### Head Code

 I used parts of the head element code of this [repository](https://github.com/MattBCoding/pp4-the-pantry#Epics) as placeholder code at the beginning of development.

 ### Restricting page views

 I referenced the following when restricting access.

 * https://stackoverflow.com/questions/69027744/django-admin-add-entry-to-specific-groups

 * https://stackoverflow.com/questions/59408167/list-of-current-user-objects-in-django-listview


 ### Pagination

 This video helped me with my paginated lists.

 https://www.youtube.com/watch?v=Is4hHfHDN-k


 ### REGEX

 This Article on w3schools helped me find the correct REGEX validator expressions for my field inputs.

 https://www.w3schools.com/tags/att_input_pattern.asp

 ### Agile

 The general structure and approach to the creation of Epics, User Stories and Boards etc was inspired by [favoureats](https://github.com/siobhanlgorman/favoureats) by @siobhanlgorman

<br>

# Thanks

### Caroline McKeown

I'd like to thank Caroline for her response to the inquiries I made to the NCSE.

<br>

### Christina Meade.

Having a teacher to consult outside of my personal network was invaluable during the course of this project. Christina was thoughtful and positive about the app from the beginning and her feedback was much appreciated.

<br>

### Mr Declan McCoy: Vice Principal, St Mary's Special School.

I'd like to thank Declan who is always supportive when I approach him for advice. This is the second project he has advised me on and his knowledge of the Irish Education System was of massive benefit whilst planning and througout the duration of the development.

<br>

### Susan Hynes

Always keen to help on the school administrative end, Susan helped me understand the software used when welcoming transitioning pupils.

<br>

### Natasha Kane

My sounding board on a daily basis during this project. Thanks Tash.

<br>

### Michelle Calikes

I am hugely thankful for the time my wife has afforded me to work on this project. Thank you Michelle (Yet again!) from the bottom of my heart.

<br>

### Kasia Boguka: Code Institute Cohort Facilitator.

I'd like to thank Kasia for all of her guidance through the course so far.

<br>

### Richard Wells: Code Institute Mentor.

This project could not have been completed without the mentorship and guidance of Richard. Twice he came to the rescue during the development of MyPSE.ie and for that I will be forever grateful.


 




