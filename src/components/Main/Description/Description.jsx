import React from 'react';

import {
  DescriptionContainer,
  DescriptionContent,
  DescriptionBlock,
  DescriptionNumber,
  DescriptionAccent,
  DescriptionName,
  DescriptionText,
  DescriptionImageImg,
  DescritpionImage,
  DescriptionInfo,
} from './Description.styled';

import CalendarMob from "../../../images/mainPage/mobile_calendar.png";
import CalendarMob2x from '../../../images/mainPage/mobile_calendar@2x.png';
import CalendarTab from '../../../images/mainPage/tablet_calendar.png';
import CalendarTab2x from '../../../images/mainPage/tablet_calendar@2x.png';
import CalendarDt from '../../../images/mainPage/desktop_calendar@2x.png';
import CalendarDt2x from '../../../images/mainPage/desktop_calendar@2x.png';

import SideBarMob from '../../../images/mainPage/mobile_sidebar.png';
import SideBarMob2x from '../../../images/mainPage/mobile_sidebar@2x.png';
import SideBarTab from '../../../images/mainPage/tablet_sidebar.png';
import SideBarTab2x from '../../../images/mainPage/tablet_sidebar@2x.png';
import SideBarDt from '../../../images/mainPage/desktop_sidebar.png';
import SideBarDt2x from '../../../images/mainPage/desktop_sadebar@2x.png';

import TasksMob from '../../../images/mainPage/mobile_task_all.png';
import TasksMob2x from '../../../images/mainPage/mobile_task_all@2x.png';
import TasksTab from '../../../images/mainPage/tablet_task_all.png';
import TasksTab2x from '../../../images/mainPage/tablet_task_all@2x.png';
import TasksDt from '../../../images/mainPage/desktop_tasks_all.png';
import TasksDt2x from '../../../images/mainPage/desktop_task_all@2x.png';



const Description = () => {
  return (
    <>
      <DescriptionContainer>
        <DescriptionContent>
          <DescriptionBlock>
            <DescriptionInfo>
              <DescriptionNumber>1.</DescriptionNumber>
              <DescriptionAccent>calendar</DescriptionAccent>
              <DescriptionName>view</DescriptionName>
              <DescriptionText>
                GooseTrack's Calendar view provides a comprehensive overview of
                your schedule, displaying all your tasks, events, and
                appointments in a visually appealing and intuitive layout.
              </DescriptionText>
            </DescriptionInfo>

            <DescritpionImage>
              <source
                srcSet={`${CalendarDt} 1x, ${CalendarDt2x} 2x`}
                media="(min-width: 1440px)"
              />
              <source
                srcSet={`${CalendarTab} 1x, ${CalendarTab2x} 2x`}
                media="(min-width: 768px)"
              />

              <source srcSet={`${CalendarMob} 1x, ${CalendarMob2x} 2x`} />
              <DescriptionImageImg
                src={CalendarMob}
                alt="Table calendars of three different types"
              />
            </DescritpionImage>
          </DescriptionBlock>

          <DescriptionBlock>
            <DescriptionInfo>
              <DescriptionNumber>2.</DescriptionNumber>
              <DescriptionName>sidebar</DescriptionName>
              <DescriptionText>
                GooseTrack offers easy access to your account settings,
                calendar, and filters. The "My Account" section allows you to
                manage your profile information and preferences, while the
                calendar provides a quick and convenient way to view your
                upcoming events and tasks.
              </DescriptionText>
            </DescriptionInfo>
            <DescritpionImage>
              <source
                srcSet={`${SideBarDt} 1x, ${SideBarDt2x} 2x`}
                media="(min-width: 1440px)"
              />
              <source
                srcSet={`${SideBarTab} 1x, ${SideBarTab2x} 2x`}
                media="(min-width: 768px)"
              />

              <source srcSet={`${SideBarMob} 1x, ${SideBarMob2x} 2x`} />
              <DescriptionImageImg
                src={SideBarMob}
                alt="User panel with dark and light themes"
              />
            </DescritpionImage>
          </DescriptionBlock>

          <DescriptionBlock>
            <DescriptionInfo>
              <DescriptionNumber>3.</DescriptionNumber>
              <DescriptionAccent>all in</DescriptionAccent>
              <DescriptionName>one</DescriptionName>
              <DescriptionText>
                GooseTrack is an all-in-one productivity tool that helps you
                stay on top of your tasks, events, and deadlines. Say goodbye to
                scattered to-do lists and hello to streamlined productivity with
                GooseTrack.
              </DescriptionText>
            </DescriptionInfo>
            <DescritpionImage>
              <source
                srcSet={`${TasksDt} 1x, ${TasksDt2x} 2x`}
                media="(min-width: 1440px)"
              />
              <source
                srcSet={`${TasksTab} 1x, ${TasksTab2x} 2x`}
                media="(min-width: 768px)"
              />

              <source srcSet={`${TasksMob} 1x, ${TasksMob2x} 2x`} />
              <DescriptionImageImg
                src={TasksMob}
                alt="Part of the screen with the calendar and scheduled tasks"
              />
            </DescritpionImage>
          </DescriptionBlock>
        </DescriptionContent>
      </DescriptionContainer>
    </>
  );
};

export default Description;
