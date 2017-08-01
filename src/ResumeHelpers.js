import React, { createElement as ce } from 'react';
import PT from 'prop-types';
import css from './style/habu-configured';
import compose from 'ramda/src/compose';
import withState from 'recompose/withState';
import BulletIcon from 'material-ui/svg-icons/content/send';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

//*****************************************************************************
// Paragraph Component
//*****************************************************************************

Paragraph.propTypes = {
  text: PT.string.isRequired,
  last: PT.bool
};

Paragraph.defaultProps = {
  last: false
};

export function Paragraph({text,last}) {
  return ce('div', { className:css('fz:95%', 'c:@text.normal', last?'':'pb:10') }, text);
}

//*****************************************************************************
// Skillset Component
//*****************************************************************************

const skillShape = {
  name: PT.string,
  description: PT.string.isRequired
};

Skillset.propTypes = {
  header: PT.string,
  skills: PT.arrayOf(PT.shape(skillShape).isRequired),
  last: PT.bool
};

Skillset.defaultProps = {
  last: false
};

export function Skillset({header, skills, last}) {

  const cn = {
    root: last ? '' : css('mb:25'),
    header: css('c:@text.accent', 'mb:5'),
    name: css('c:@text.dark', 'fw:b', 'mr:15', 'fz:95%'),
    description: css('c:@text.normal'),
  };

  return ( ce('div', { className:cn.root }
    , ce('div', { className:cn.header}, header)
    , skills.map( (skill,key)=>
      ce('div', { key }
        , skill.name && ce('span', {className:cn.name}, skill.name )
        , ce('span', {className:cn.description}, skill.description )
    ))
  ));
}

//*****************************************************************************
// Company Component
//*****************************************************************************

Company.propTypes = {
  name: PT.string.isRequired,
  title: PT.string.isRequired,
  dateRange: PT.string,
  roles: PT.arrayOf(PT.string)
};

export function Company ({name, title, dateRange, roles}) {

  const cn = {
    root: css('mb:20'),
    name: css('c:@text.dark', 'fz:110%', 'mb:0', 'fw:b'),
    title: css('c:@text.normal', 'fz:90%', 'fw:b', 'mr:10'),
    dateRange: css('c:@text.light', 'fz:75%'),
    roles: css('c:@text.normal', 'fz:85%'),
  };

  return ( ce('div', { className:cn.root }
  , ce('div', {className:cn.name}, name)
  , ce('div', 0
    , ce('span', { className:cn.title }, title)
    , ce('span', {className:cn.dateRange}, dateRange)
    , roles && roles.map((role,key)=> ce('div', { className:cn.roles, key }, role))
    )
  ));
}

//*****************************************************************************
// Project Component
//*****************************************************************************

export const Project = compose(
  withState('screenShotsOpen', 'setScreenShotsOpen', false)
)(ProjectRaw);

const screenShotShape = {
  title: PT.string,
  imagePath: PT.string
};

const screenShotsShape = {
  header: PT.string,
  shots: PT.arrayOf(PT.shape(screenShotShape))
};

Project.propTypes = {
  name: PT.string,
  customer: PT.string,
  dateRange: PT.string,
  activities: PT.arrayOf(PT.string),
  screenShots: PT.shape(screenShotsShape)
};

function ProjectRaw(props) {

  const { name, customer, dateRange, activities, screenShots } = props;
  const { screenShotsOpen, setScreenShotsOpen } = props;

  const cn = {
    root: css('mb:20', 'fz:90%'),
    name: css('c:@text.accent'),
    cust: css('c:@text.normal', 'mb:5')
  };

  return ( ce('div', {className:cn.root }
    , ce('div',{className:cn.name}, name)
    , ( customer || dateRange ) &&
      ce('div', {className:cn.cust}, `Customer: ${customer} | ${dateRange}`)
    , activities.map((activity,key)=>ce(Bullet,{key,text:activity}))

    , screenShots && ce('div', 0
      , ce(RaisedButton
        , { style: { height:24, marginTop: 5 }
        , labelStyle: {fontSize:'75%'}
        , label: 'Screen Shots'
        , labelColor: '#EEE'
        , backgroundColor: '#FFA100'
        , onTouchTap: ()=>setScreenShotsOpen(true)
        }
      )
      , ce(Dialog
        , { modal: true
        , autoScrollBodyContent: true
        , contentStyle:{maxWidth: 960}
        , open: screenShotsOpen }
          , ce(ScreenShot, {screenShots, onClose:()=>setScreenShotsOpen(false)})
      )
    )
  ));
}

//*****************************************************************************
// Bullet Component
//*****************************************************************************

Bullet.propTypes = {
  text: PT.string
};

export function Bullet({text}) {

  const cn = {
    root: css('d:fx', 'mb:3'),
    bullet: css('w:12', 'h:12', 'mr:5', 'pt:1'),
    text: css('c:@text.light'),
  };

  return ( ce('div', {className:cn.root}
    , ce('div', {className:cn.bullet}, ce(BulletIcon,{className:cn.bullet, color:'#CCC'}))
    , ce('div', {className:cn.text},text)
  ));
}

//*****************************************************************************
// ScreenShot Component
//*****************************************************************************

ScreenShot.propTypes = {
  screenShots: PT.shape(screenShotsShape),
  onClose: PT.func
};

ScreenShot.defaultProps = {
  onClose: ()=>console.log('NYI')
};

export function ScreenShot({screenShots, onClose}) {
  const { header, shots } = screenShots;
  return ( ce('div', 0
    , ce('div',{className:css('d:fx', 'jc:sb', 'mb:10')}
      , ce('div', {className:css('fz:130%')},header)
      , ce(CloseIcon, {onTouchTap:onClose})
      )
    , shots.map((shot,key)=> ce('div',{key}
      , ce(Divider, {className:css('mt:25')})
      , ce('div', {className:css('c@text.accent', 'mt:15',' mb:5')},shot.title)
      , ce(Paper,{className:css('p:10'), zDepth:3}
        ,ce('img', {src:require(`${shot.imagePath}`),width:'100%'}))
      )
    )
  ));
}
