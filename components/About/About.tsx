import React, { FC, useEffect, useState } from 'react'
import Head from 'next/head'
import {
  Image,
  Spacer,
  Text,
  Button,
  FlexContainer,
  ExternalLink,
} from '@sharingexcess/designsystem'
import { team } from 'content/team'
import { useIsMobile } from 'hooks'
import { PageHeader } from 'components'
import { volunteering } from 'content'
import { useRouter } from 'next/router'
import { DONATE_LINK, PASTEL_COLORS } from 'utils/constants'
import Link from 'next/link'

export const About: FC = () => {
  const isMobile = useIsMobile()
  const [section, setSection] = useState('team')
  const router = useRouter()

  useEffect(() => {
    if (router?.query?.section && typeof router.query.section === 'string') {
      setSection(router.query.section)
    }
  }, [router.query])

  return (
    <div id="About">
      <Head>
        <title>About | Sharing Excess</title>
      </Head>
      <PageHeader
        image={isMobile ? '/headers/about_mobile.jpeg' : '/headers/about.jpeg'}
        label="ABOUT US"
        title={`Sharing Excess is using surplus\nto fight scarcity.`}
      />

      <Spacer height={isMobile ? 48 : 64} />

      <FlexContainer
        className="About-content-section"
        direction={isMobile ? 'vertical-reverse' : 'horizontal'}
        primaryAlign="start"
        secondaryAlign="center"
      >
        <Image src="/about/popup.gif" alt="About Sharing Excess" />
        <Spacer width={32} height={32} />
        <FlexContainer
          direction="vertical"
          primaryAlign={isMobile ? 'center' : 'start'}
          secondaryAlign={isMobile ? 'center' : 'start'}
        >
          <Text type="paragraph" color="black">
            In communities everywhere, food is going to waste while people
            suffer from food insecurity. This is a disconnect created by the
            logistical barriers between excess and scarcity. If solved, this
            connection could ensure food security for all people living on our
            planet.
          </Text>
          <Spacer height={24} />
          <Text type="paragraph" color="black">
            But as vast a problem as food waste is, the solution often boils
            down to simple last mile logistics and delivery.{' '}
            <span className="green">Sharing Excess</span> is meeting this
            challenge with the power of people, technology, and compassion.
          </Text>
        </FlexContainer>
      </FlexContainer>

      <Spacer height={isMobile ? 64 : 112} />

      <FlexContainer
        className="About-content-section"
        direction={isMobile ? 'vertical' : 'horizontal'}
        primaryAlign="start"
        secondaryAlign="center"
      >
        <FlexContainer
          direction="vertical"
          primaryAlign={isMobile ? 'center' : 'start'}
          secondaryAlign={isMobile ? 'center' : 'start'}
        >
          <Text type="paragraph" color="black">
            Founded in Philadelphia in 2018, Sharing Excess is scaling human
            compassion to meet a global challenge that has existed long before
            our mission was born. Our work addresses the crucial need for food
            by delivering regular surplus from grocery stores, restaurants,
            wholesalers, and farmers to communities in need.
          </Text>
          <Spacer height={24} />
          <Text type="paragraph" color="black">
            By embracing the imagination of students, change-makers, innovators,
            and entrepreneurs, we&apos;re changing a broken food system.
            Together with our partners, clever logistics, and custom software,
            our movement will eliminate the barriers between excess and
            scarcity.
          </Text>
        </FlexContainer>
        <Spacer width={32} height={32} />
        <Image src="/about/billboard.gif" alt="About Sharing Excess" />
      </FlexContainer>

      <Spacer height={isMobile ? 64 : 96} />

      <FlexContainer
        id="About-section-buttons"
        fullWidth
        direction={isMobile ? 'vertical' : 'horizontal'}
      >
        <Button
          type={section === 'team' ? 'primary' : 'secondary'}
          color="green"
          size="large"
          handler={() => setSection('team')}
          fullWidth={isMobile}
        >
          Meet the Team
        </Button>
        <Button
          type={section === 'history' ? 'primary' : 'secondary'}
          color="green"
          size="large"
          handler={() => setSection('history')}
          fullWidth={isMobile}
        >
          Our Story
        </Button>
      </FlexContainer>

      <Spacer height={isMobile ? 48 : 64} />

      {section === 'team' && (
        <section id="About-team">
          <FlexContainer
            id="About-section-header"
            secondaryAlign="center"
            primaryAlign="center"
          >
            <Image src="/about/team.png" alt="Sharing Excess Team" />
            <Text type="primary-header" color="white" shadow>
              Meet the team!
            </Text>
          </FlexContainer>

          <Spacer height={isMobile ? 24 : 48} />

          <Text type="paragraph" color="black">
            Sharing Excess is a lean startup team, proudly powered by passionate
            college students and recent grads. The crew consists of folks
            working in full-time, part-time, co-op, internship, and volunteer
            positions. Collaborating remotely around from anywhere, our work has
            proven that college students can play a vital role in solving one of
            the world&apos;s greatest problems.
          </Text>

          <Spacer height={isMobile ? 24 : 48} />

          <div className="About-team-members">
            {team.map((i, j) => (
              <div key={i.name} className="About-team-person">
                <Image
                  src={i.image}
                  alt={i.name}
                  classList={[PASTEL_COLORS[j % 5]]}
                />
                <Spacer height={12} />
                <Text type="subheader" color="green" align="center">
                  {i.name}
                </Text>
                <Text type="small" color="black" align="center">
                  {i.title}
                </Text>
              </div>
            ))}
          </div>

          <Spacer height={isMobile ? 64 : 128} />

          <FlexContainer direction="vertical">
            <Text type="secondary-header" color="green" align="center">
              Looking to get involved?!?
            </Text>

            <Spacer height={16} />

            <Text type="paragraph" color="black">
              Whether you can drive a car, organize volunteers, or write
              jAvAScRIPT, <strong>we can use your help!</strong> Use the forms
              below to reach out to our team and we&apos;ll be sure to get back
              to you as soon as humanly possible.
            </Text>
          </FlexContainer>
          <Spacer height={isMobile ? 16 : 32} />
          <section id="About-team-volunteer">
            {volunteering.map(c => (
              <div key={c.header}>
                <Spacer height={24} />
                <Text type="secondary-header" color="black" align="center">
                  {c.header}
                </Text>
                <Spacer height={8} />
                <Text type="small" color="grey" align="center">
                  {c.body}
                </Text>
                <Spacer height={16} />
                <Button type="primary" size="medium" color="green">
                  <Link href={c.link}>{c.button}</Link>
                </Button>
              </div>
            ))}
          </section>
        </section>
      )}

      {section === 'history' && (
        <section id="About-history">
          <FlexContainer
            id="About-section-header"
            secondaryAlign="center"
            primaryAlign="center"
          >
            <Image src="/about/history.png" alt="Sharing Excess Team" />
            <Text type="primary-header" color="white" shadow>
              How We Got Here
            </Text>
          </FlexContainer>

          <Spacer height={isMobile ? 24 : 48} />

          <FlexContainer
            className="About-content-section"
            direction={isMobile ? 'vertical-reverse' : 'horizontal'}
            primaryAlign="start"
            secondaryAlign="center"
          >
            <Image src="/about/history1.png" alt="About Sharing Excess" />
            <Spacer width={32} height={32} />
            <FlexContainer
              direction="vertical"
              primaryAlign={isMobile ? 'center' : 'start'}
              secondaryAlign={isMobile ? 'center' : 'start'}
            >
              <Text type="paragraph" color="black">
                Sharing Excess was formally established on March 29th, 2018,
                originally started as a movement of college students at Drexel
                University addressing food insecurity on campus and in the
                surrounding community of West Philadelphia. Founder, Evan
                Ehlers, created Sharing Excess after realizing he had fifty
                meals left in his college dining account with only two days left
                to use them.
              </Text>
              <Spacer height={24} />
              <Text type="paragraph" color="black">
                Rather than letting the meals go to waste, he decided to swipe
                them all out, pack them in his car, and drive around Center City
                Philadelphia, giving them out to anyone that needed one. This
                day changed his life forever, and he fell in love with the idea
                of putting excess food to good use– and felt that if he could
                get others to join, together they could create impactful change
                in their communities.
              </Text>
            </FlexContainer>
          </FlexContainer>

          <Spacer height={isMobile ? 64 : 112} />

          <FlexContainer
            className="About-content-section"
            direction={isMobile ? 'vertical' : 'horizontal'}
            primaryAlign="start"
            secondaryAlign="center"
          >
            <FlexContainer
              direction="vertical"
              primaryAlign={isMobile ? 'center' : 'start'}
              secondaryAlign={isMobile ? 'center' : 'start'}
            >
              <Text type="paragraph" color="black">
                Originally formed as a meal swipe donation program, Sharing
                Excess quickly became involved in “food rescue” after a local
                grocery store called to see if the young organization would be
                interested in picking up produce that was about to be discarded.
                Team members delivered the rescued food to a nearby shelter and
                began tracking their impact on spreadsheets.
              </Text>
              <Spacer height={24} />
              <Text type="paragraph" color="black">
                What started with one grocery store, quickly evolved into a
                network of hundreds of grocers, restaurants, farmers, and
                wholesalers over the following three years. This network has
                contributed millions of pounds of food excess to communities
                with the help of Sharing Excess and its volunteers.
              </Text>
            </FlexContainer>
            <Spacer width={32} height={32} />
            <Image src="/about/history2.png" alt="About Sharing Excess" />
          </FlexContainer>

          <Spacer height={isMobile ? 64 : 112} />

          <FlexContainer
            className="About-content-section"
            direction={isMobile ? 'vertical-reverse' : 'horizontal'}
            primaryAlign="start"
            secondaryAlign="center"
          >
            <Image src="/about/history3.png" alt="About Sharing Excess" />
            <Spacer width={32} height={32} />
            <FlexContainer
              direction="vertical"
              primaryAlign={isMobile ? 'center' : 'start'}
              secondaryAlign={isMobile ? 'center' : 'start'}
            >
              <Text type="paragraph" color="black">
                In 2020, Sharing Excess dramatically scaled up its operations to
                address an unprecedented amount of food insecurity caused by the
                global pandemic. The organization{' '}
                <strong>grew their operations by 300%</strong>, opened their
                first distribution facility in West Philadelphia, and delivered
                their millionth pound of food.
              </Text>
              <Spacer height={24} />
              <Text type="paragraph" color="black">
                Today, Sharing Excess delivers an average of{' '}
                <strong>100,000 pounds of food each week</strong> and is using
                it&apos;s in house technology to help other food rescue
                organizations do the same.
              </Text>
            </FlexContainer>
          </FlexContainer>

          <Spacer height={isMobile ? 32 : 64} />

          <Text type="paragraph" color="black">
            The ultimate vision of Sharing Excess is to use every available
            resource that is currently wasted or underutilized to cover basic
            needs for all living people.{' '}
            <strong>Food is just the beginning.</strong>
          </Text>

          <Spacer height={isMobile ? 32 : 64} />

          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/WvvAvifPIo8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <Spacer height={isMobile ? 32 : 64} />
          <FlexContainer fullWidth>
            <ExternalLink to={DONATE_LINK}>
              <Button size="large" color="green">
                Support Our Next Chapter
              </Button>
            </ExternalLink>
          </FlexContainer>
        </section>
      )}

      {section === 'partners' && (
        <section id="About-partners">
          <FlexContainer
            id="About-section-header"
            secondaryAlign="center"
            primaryAlign="center"
          >
            <Image src="/about/partners.png" alt="Sharing Excess Team" />
            <Text type="primary-header" color="white" shadow>
              Our Partners
            </Text>
          </FlexContainer>

          <Spacer height={isMobile ? 24 : 48} />

          <Text type="paragraph" color="black">
            It&apos;s actually just Evan&apos; family and nobody else and he has
            just managed to hide that this entire time... pretty cool :shrug:
          </Text>
        </section>
      )}
    </div>
  )
}
