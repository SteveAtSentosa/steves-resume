// TODO
// * production build working on dig ocean
// * production node server up an running on DO
// * get rid of muiTheme
// * icon tab thingy
// * additional screen shots
// refereince github repo


import React, { createElement as ce } from 'react';
import PT from 'prop-types';
import css from './style/habu-configured';
import Paper from 'material-ui/Paper';
import { Paragraph, Skillset, Company, Project, Bullet, ScreenShot } from './ResumeHelpers.js';

//*****************************************************************************
// The Resume Component
//*****************************************************************************

export default function Resume(props) {

  const cn = {
    name: css('fz:2em', 'c:@text.dark'),
    contact: css('fz:90%', 'c:@text.light'),
    repo: css('fz:90%', 'c:@text.light'),
    header: css('mt:40', 'mb:5', 'c:@text.dark', 'fz:120%')
  };

  return(
    ce(Paper,{ className:css('m:20','p:20') }

    , ce('div', { className:cn.name}, 'Steven Saunders')
    , ce('div', { className:cn.contact }, 'Founder, Sentosa Technology Consultants')
    , ce('div', { className:cn.contact }
      , ce('a',{href:'mailto:steve@sentosatech.com'},'steve@sentosatech.com')
      , ce('span',0,' | ')
      , ce('a',{href:'https://www.linkedin.com/in/steven-saunders-783a355'},'Linkedin')
      , ce('span',0,' | 303-809-8043')
    )
    , ce('div', { className:cn.repo }
      , ce('span',0, 'I wrote the code for this resume in React, the github repo is')
      , ce('a',{href:'https://github.com/SteveAtSentosa/steves-resume'},' here')
    )

    // Overview

    , ce('div', { className:cn.header}, 'Overview')
    , ce(Paper, { className:css('p:20', 'bgc:@bg.lightGray', 'fz:90%') }
      , ce(Paragraph,{text:'I founded Sentosa Technologies 9 years ago, with a focus on providing software development services to the cable television industry.  Over the years I, and my team, have worked on a wide variety of cable focused applications ranging from video to advanced advertising to security to broadband.'})
      , ce(Paragraph,{last:true, text:'The last 3 years I personally have focused on developing modern, data driven, responsive Javascript based web front end applications, in both the Angular and React frameworks.  I love the blend of visual and technical challenges that this type of development entails.'})
      )

    // Technologies

    , ce('div', { className:cn.header}, 'Technologies')
    , ce(Paper, { className:css('p:20', 'bgc:@bg.lightGray', 'fz:90%') }
      , ce(Skillset
        , { header:'Languages'
        , skills : [
          { name: 'Javascript'
          , description: '3+ years modern full featured front end web application development'
          }
          , { name: 'C++'
          , description: '10+ years of developing graphics, video, and image processing applications'
          }
          , { name: 'Java'
          , description: '3+ years of developing set top apps and back end web services'
          }
          , { name: 'Also'
          , description: 'HTML, CSS, PHP'
          }
        ]})
      , ce(Skillset
        , { header:'Web Front End Frameworks and Tools'
        , skills : [
          { name: 'Development'
          , description: 'React, React Router, Redux, Angular, webpack, grunt, npm, node.js'
          }
          , { name: 'Testing'
          , description: 'Selenium, nightwatch, jest'
          }
        ]})
      , ce(Skillset
        , { last: true
        , header:'Application Domains'
        , skills : [
          { description: 'MPEG video, video streaming, set top guide and VOD apps, security (DCAS/Blockchain),  business services (MEF), advanced advertising, broadband capacity forecasting, and others'
          }
        ]})
      )

    // Work History

    , ce('div', { className:cn.header}, 'Work History')
    , ce(Paper, { className:css('p:20', 'bgc:@bg.lightGray') }

      // Sentosa

      , ce(Company
        , { name: 'Sentosa Technologies'
        , title: 'Founder and Principal'
        , dateRange: '2007 - present'
        , roles :
          [ 'Currently about 15 folks on staff, annual revenue ~$2M'
          , 'I focus on writing great software for my customers in addition to growing my team and the business'
          ]
        , first: true
        })

        , ce('div', {className:css('fz:90%', 'c:@text.light', 'mt:20', 'mb:10')}
          , 'Sampling of Projects That I Have Personally Worked On'
        )
        , ce(Project,
          { name:'Web Front End Development: Metro Ethernet Service Platform'
          , customer: 'Kyrio/CableLabs'
          , dateRange: 'July 2016 - June 2017 (1 year)'
          , activities:
            [ 'I coded ~30,000 lines of React.js based Javascript and inline css in creating web interfaces for issue tracking, network adjacency, labeling, service site management, task management, and others'
            , 'Supporting technologies: Redux, React Router, webpack, node.js, REST, npm, git'
            , 'Unit and end to end testing based on Selenium, nightwatch, and Jest'
            ]
          , screenShots :
              { header: 'Metro Ethernet Service Platform'
              , shots : [
                { title: 'Problem Tickets', imagePath: 'http://i.imgur.com/ATyhlmn.png'},
                { title: 'Ticket Labels', imagePath: 'http://i.imgur.com/PwIYE8f.png'}
              ]
            }
          }
        )
        , ce(Project,
          { name:'Web Front End Development: Content Portal and Blockchain Navigator'
          , customer: 'CableLabs'
          , dateRange: 'Jan 2016 - June 2016 (6 months)'
          , activities:
            [ 'I coded ~12,000 lines of Angular based Javascript, css and HTML  in creating web interfaces for Block Chain explorer, content provider portal, content distributor portal, blockchain transaction manger, and others'
            , 'Supporting technologies: less, npm, grunt, node.js, REST, git'
            ]

          , screenShots :
              { header: 'Content Sharing Web App'
              , shots : [
                { title: 'Social Content Portal', imagePath: 'http://i.imgur.com/0zHkQuR.png'},
                { title: 'Content Purchase', imagePath: 'http://i.imgur.com/PwIYE8f.png'}
              ]
            }
          }
        )
        , ce(Project,
          { name:'Web Front End Development: Virtual Metro Ethernet  and Home Networking Service Activation'
          , customer: 'CableLabs'
          , dateRange: 'April 2015 – December 2015 (9 months)'
          , activities:
            [ 'I coded ~10,000 lines of Angular based Javascript, css and HTML in creating a web interface to create virtual Metro Ethernet services based on selected topology and performance parameters'
            , 'I coded Angular based web UI to activate virtual home networking functionality'
            , 'Also wrote java based backend prototypes for these applications'
            , 'Supporting technologies: npm, grunt, bower, node.js, REST, git'
            ]
          }
        )
        , ce(Project,
          { name:'Other Projects'
          , activities:
            [ 'Open Cable Application Platform reference implementation (Java coding)'
            , 'HBO Single sing-on (SAML/Java Coding)'
            , 'HLS Streaming for DirectTV NFL Live (managed)'
            , 'Embedded webkit integration (managed)'
            ]
          }
        )

        // Independent Consultant

        , ce(Company
          , { name: 'Independent Consultant'
          , title: 'Software Developer'
          , dateRange: '2006 - 2007'
          })
        , ce(Project,
          { name:'Downloadable Conditional Access (as specified by PolyCipher)'
          , customer: 'Time Warner Cable'
          , dateRange: '2006-2007'
          , activities: [ 'Developed to C/C++ based set top downloadable conditional access clent and server' ]
          }
        )
        , ce(Project,
          { name:'DOCSIS Network Capacity Forecasting'
          , customer: 'Cox Communications'
          , dateRange: 'June 2007 - Dec 2007'
          , activities: [ 'Developed PHP based broadband network growth, usage, and capacity simulator' ]
          }
        )

        // Digeo

        , ce(Company
          , { name: 'Digeo'
          , title: 'Director of Firmware Development'
          , dateRange: '2005 - 2006'
          , roles : [ 'Digeo designed and developed advanced set top silicon, firmware, hardware and software' ]
          })
        , ce(Project,
          { name:'Firmware Team Management'
          , activities:
            [ 'Conducted scheduling, risk assessment, hiring, performance reviews, etc'
            , 'Created STB and firmware testing group, including test procedures'
            , 'Coordinated with other development and program management groups'
            ]
          }
        )

        // CableLabs

        , ce(Company
          , { name: 'CableLabs'
          , title: 'Director of Home Networking'
          , dateRange: '2000 - 2005'
          , roles : [ 'CableLabs is a research and development consortium jointly funded by cable companies' ]

          }
        )
        , ce(Project,
          { name:'CableHome Lead Architect'
          , activities:
            [ 'Drove CableHome effort, a cable based industry wide home networking management, security, QoS, and video distribution specification'
            , 'Participated in many standards bodies including ITU, SCTE, UPnP, promoting the CableHome agenda'
            , 'Spoke at many industry events, primarily  covering home networking and home video distribution'
            , 'Wrote several home networking focused articles and strategic reports'
            ]
          }
        )
        , ce(Project,
          { name:'Next Generate Network Architecture (NGNA)'
          , activities:
            [ 'Lead team providing recommendations for video streaming in the home'
            , 'Contributed to home networking portion of industry wide NGNA document'
            ]
          }
        )
        , ce(Project,
          { name:'Open Cable Application Platform (OCAP)'
          , activities:
            [ 'Contributed to the OCAP spec, and test suite (Java based)'
            ]
          }
        )

        // Vexcel

        , ce(Company
          , { name: 'Vexcel Imaging'
          , title: 'Software Engineer, Manager of Software Team'
          , dateRange: '1996 - 2000'
          , roles : [ 'Vexcel designed and manufactured aerial photography scanners and image processing software' ]
          }
        )
        , ce(Project,
          { name:'Software Developer'
          , dateRange: '1996-1998'
          , activities:
            [ 'Developed scanner control and digitization software (C++)'
            , 'Developed scanner calibration and correction software (C++)'
            , 'Developed aerial photography image processing software (C++)'
            ]
          }
        )
        , ce(Project,
          { name:'Software Team Manager'
          , dateRange: '1998-2000'
          , activities:
            [ 'Conducted scheduling, risk assessment, hiring, performance reviews, etc'
            , 'Continued with software development contributions as well '
            ]
          }
        )
        , ce(Project,
          { name:'Interim Director of Manufacturing'
          , dateRange: 'Part of 2000'
          , activities:
            [ 'Took on leadership of the manufacturing team after VP of manufacturing was laid off']
          }
        )

        // SDRC / Autotrol

        , ce(Company
          , { name: 'Structural Dynamics Research Corporation (SDRC)'
          , title: 'Software Engineer'
          , dateRange: '1990 - 1995'
          , roles :
            [ 'SDRC Develops advanced engineering modeling, graphics and analysis software'
            ]
          }
        )
        , ce(Project,
          { name:'Software Engineer'
          , activities:
            [ 'Developed finite element meshing and analysis software (C Based)'
            , 'Developed engineering material database and selection capability (C Based)'
            , 'Contributed to various graphical processing and display efforts'
            ]
          }
        )
      )

      // Work History

      , ce('div', { className:cn.header}, 'Education')
      , ce(Paper, { className:css('p:20', 'bgc:@bg.lightGray') }
        , ce(Project,
          { name:'Colorado State University'
          , activities:
            [ 'BS: Mechanical Engineering'
            , 'Graduate course work: graphics, advanced dynamics, and statistical thermodynamics'
            ]
          }
        )
        , ce(Project,
          { name:'Ongoing (over the years)'
          , activities:
            [ 'Graduate coursework: differential equations, engineering analysis, object oriented programming'
            , 'Online courswork (pluralsite.com, sitepoint.com, etc): Javasript, angular, react'
            ]
          }
        )

      )
    )
  );
}
