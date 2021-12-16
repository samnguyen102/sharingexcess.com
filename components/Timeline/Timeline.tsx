import React, { FC } from 'react'
import { Text, Spacer } from '@sharingexcess/designsystem'

export const Timeline: FC = () => {
  const sections: any = [
    {
      title: 'section 1',
      description:
        'Sharing Excess receives a 26-foot refrigerated truck from GIANT',
      body: 'In communities everywhere, food is going to waste while people suffer from food insecurity. This is a disconnect created by the logistical barriers between excess and scarcity. If solved, this connection could ensure food security for all people living on our planet. But as vast a problem as food waste is, the solution often boils down to simple last mile logistics and delivery. Sharing Excess is meeting this challenge with the power of people, technology, and compassion.',
      image: '/campus/drexel.png',
    },
    {
      title: 'section 2',
      description:
        'Sharing Excess officially partners with the Philadelphia Wholesale Produce Market',
      body: 'In communities everywhere, food is going to waste while people suffer from food insecurity. This is a disconnect created by the logistical barriers between excess and scarcity. If solved, this connection could ensure food security for all people living on our planet. But as vast a problem as food waste is, the solution often boils down to simple last mile logistics and delivery. Sharing Excess is meeting this challenge with the power of people, technology, and compassion.',
      image: '/logos/green.png',
    },
    {
      title: 'section 3',
      description: 'Sharing Excess gets funded by The Shawn Mendes Foundation',
      body: 'In communities everywhere, food is going to waste while people suffer from food insecurity. This is a disconnect created by the logistical barriers between excess and scarcity. If solved, this connection could ensure food security for all people living on our planet. But as vast a problem as food waste is, the solution often boils down to simple last mile logistics and delivery. Sharing Excess is meeting this challenge with the power of people, technology, and compassion.',
      image: '/logos/green.png',
    },
    {
      title: 'section 4',
      description:
        'Sharing Excess receives a 26-foot refrigerated truck from GIANT',
      body: 'In communities everywhere, food is going to waste while people suffer from food insecurity. This is a disconnect created by the logistical barriers between excess and scarcity. If solved, this connection could ensure food security for all people living on our planet. But as vast a problem as food waste is, the solution often boils down to simple last mile logistics and delivery. Sharing Excess is meeting this challenge with the power of people, technology, and compassion.',
      image: '/logos/green.png',
    },
    {
      title: 'section 5',
      description: 'Sharing Excess gets a billboard',
      body: 'In communities everywhere, food is going to waste while people suffer from food insecurity. This is a disconnect created by the logistical barriers between excess and scarcity. If solved, this connection could ensure food security for all people living on our planet. But as vast a problem as food waste is, the solution often boils down to simple last mile logistics and delivery. Sharing Excess is meeting this challenge with the power of people, technology, and compassion.',
      image: '/logos/green.png',
    },
  ]

  function TimelineSection({ section }) {
    return (
      <section className="Timeline-section">
        <div className="Timeline-section-text">
          <Text type="primary-header" align="left" color="green">
            {section.title}
          </Text>
          <Text type="subheader" align="left">
            {section.description}
          </Text>
          {section.body}
        </div>
        <div className="timeline-section-image">{section.image}</div>
      </section>
    )
  }

  return (
    <div id="Timeline">
      {sections.map((section: any) => (
        <TimelineSection key={section.title} section={section} />
      ))}
    </div>
  )
}
