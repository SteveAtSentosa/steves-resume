// TODO
// * production node server up an running locally
// * production node server up an running on DO
// * text in opening summaries smaller
// * fill out job descriptions
// * get rid of muiTheme
// * email address link
// * linkedin link
// * icon tab thingy
// * additional screen shots
// x steves-resume.com pointing to droplet


import React, { createElement as ce } from 'react';
import PT from 'prop-types';
import css from './style/habu-configured';
import Paper from 'material-ui/Paper';
import { Paragraph, Skillset, Company, Project, Bullet, ScreenShot } from './ResumeHelpers.js';

//*****************************************************************************
// The Resume Component
//*****************************************************************************

export default function Resume(props) {

  const { ticketScreenShotOpen } = props;
  const cn = {
    name: css('fz:2em', 'c:@text.dark'),
    contact: css('fz:90%', 'c:@text.light'),
    header: css('mt:40', 'mb:5', 'c:@text.dark', 'fz:130%')
  };

  return(
    ce(Paper,{ className:css('m:20','p:20') }

    , ce('div', { className:cn.name}, 'Steve Saunders')
    , ce('div', { className:cn.contact }, 'Founder, Sentosa Technology Consultants')
    , ce('div', { className:cn.contact }, 'steve@sentosatech.com | 303-809-8043 | linkedin')

    // Overview

    , ce('div', { className:cn.header}, 'Overview')
    , ce(Paper, { className:css('p:20', 'bgc:@bg.lightGray') }
      , ce(Paragraph,{text:'I founded Sentosa Technologies 9 years ago, with a focus on providing software development services to the cable television industry.  Over the years I, and my team, have worked on a wide variety of cable focused applications ranging from video to advanced advertising to security to broadband.'})
      , ce(Paragraph,{last:true, text:'The last 3 years I personally have focused on developing modern, data driven responsive javascript based web front end applications, in both the Angular and React frameworks.  I love the blend of visual and technical challenges that this type of development entails.'})
      )

    // Technologies

    , ce('div', { className:cn.header}, 'Technologies')
    , ce(Paper, { className:css('p:20', 'bgc:@bg.lightGray') }
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
          , description: 'React, React Router, Redux, Angular, webpack, npm, node.js'
          }
          , { name: 'Testing'
          , description: 'Selenium, nightwatch, jest'
          }
        ]})
      , ce(Skillset
        , { last: true
        , header:'Application Domains'
        , skills : [
          { description: 'MPEG video, video streaming, set top guide and VOD apps, security (DCAS/Blockchain),  business services (MEF), advanced advertising, broadband capacity forecasting, and others.'
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
        })

        , ce('div', {className:css('fs:80%', 'c:@text.normal', 'mb:10')}, 'Javascript/Web UI Project Sampling')

        , ce(Project,
          { name:'Web Front End Development: Metro Ethernet Service Platform'
          , customer: 'Kyrio/CableLabs'
          , dateRange: 'Jan 2016 - June 2016 (6 months)'
          , activities:
            [ 'I coded ~30,000 lines of React.js based Javascript and inline css in creating web interfaces for issue tracking, network adjacency, labeling, service site management, task management, and others'
            , 'Supporting technologies: Redux, React Router, webpack, node.js, REST, npm, git'
            , 'Unit and end to end testing based on Selenium, nightwatch, and Jest'
            ]
          , screenShots :
              { header: 'Metro Ethernet Service Platform'
              , shots : [
                { title: 'Problem Tickets', imagePath: './assets/screenshot-tickets-1.png'},
                { title: 'Ticket Labels', imagePath: './assets/screenshot-tickets-2.png'}
              ]
            }
          }
        )
        , ce(Project,
          { name:'Web Front End Development: Content Portal and Blockchain Navigator'
          , customer: 'CableLabs'
          , dateRange: 'July 2016 - June 2017 (1 year)'
          , activities:
            [ 'I coded ~12,000 lines of Angular based Javascript, css and HTML  in creating web interfaces for Block Chain explorer, content provider portal, content distributor portal, blockchain transaction manger, and others'
            , 'Supporting technologies: less, npm, grunt, node.js, REST, git'
            ]
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
          { name:'Other projects that I personally worked on'
          , activities:
            [ 'Open Cable Application Platform reference implementation (Java coding)'
            , 'HBO Single singon (SAML/Java Coding)'
            , 'HLS Streaming for DirectTV NFL Live (managed)'
            , 'Embeded webkit integration (managed)'
            ]
          }
        )

        // Independent Consultant

        , ce(Company
          , { name: 'Indpendend Conslutant'
          , title: 'Software Developer'
          , dateRange: '2006 - 2007'
          })
        , ce(Project,
          { name:'Downloadable Conditional Access (as specified by PolyCipher)'
          , customer: 'Time Warner Cable'
          , dateRange: '2006-2007 (1 year)'
          , activities: [ 'Contributed to C/C++ based set top downloadable conditional access clent and server' ]
          }
        )
        , ce(Project,
          { name:'DOCSIS Network Capacity Forecasting'
          , customer: 'Cox Communications'
          , dateRange: 'June 2007 - Dec 2007 (6 months)'
          , activities: [ 'Developed PHP based broadband network growth, usage, and capacity simulator' ]
          }
        )

        // Digeo

        , ce(Company
          , { name: 'Digeo'
          , title: 'Director of Firmware Development'
          , dateRange: '2005 - 2006'
          , roles : [ 'Managed firmware team for delivery of advanced multi room STB/DVR capability' ]
          })

          // CableLabs

        , ce(Company
          , { name: 'CableLabs'
          , title: 'Director of Home Networking'
          , dateRange: '2000 - 2005'
          , roles :
            [ 'Drove CableHome effort, an industry wide home networking management, security and QoS specification'
            , 'Participated in many standards bodies including ITU, SCTE, UPnP'
            , 'Contributed to cable industry Next Generate Network Archtiect (NGNA)'
            ]
          }
        )

        // Vexcel

        , ce(Company
          , { name: 'Vexcel Imaging'
          , title: 'Software Engineer, Manager of Software team'
          , dateRange: '1996 - 2000'
          , roles :
            [ 'Wrote C++ based image proccesing and scanner control software'
            , 'Managed Software Team'
            , 'Managed manufacturing deprtment on temporary assignemnt'
            ]
          }
        )

        // SDRC / Autotrol

        , ce(Company
          , { name: 'Autotrol & SDRC'
          , title: 'Software Engineer'
          , dateRange: '1990 - 1995'
          , roles :
            [ 'Developed C based graphics and engineering anaysis software (CAD)'
            ]
          }
        )
      )
    )
  );
}
