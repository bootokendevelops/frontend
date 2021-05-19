import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
export default function Roadmap() {

  return (
      <div id='roadmap'>
      <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Phase-1"
            iconStyle={{ background: 'yellow', color: '#fff' }}
        >
          <p>
                Core Development
          </p>
            <p>
                Launch
            </p>
            <p>
                Marketing
            </p>
            <p>
                Blockfolio Listing
            </p>
            <p>
                Coingecko Listing
            </p>
            <p>
                CoinMarketCap Listing
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Phase-2"
            iconStyle={{ background: 'yellow', color: '#fff' }}

        >
          <p>
            First Donation
          </p>
            <p>
                Integrating swap transactions into the site
            </p>
            <p>
                Integrating staking options into the site
            </p>
            <p>
                NFT marketing into the site
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Phase-3"
            iconStyle={{ background: 'yellow', color: '#fff' }}

        >
          <p>
              Additional CEX Applications
          </p>
            <p>
                Additional CEX Applications
            </p>
            <p>
                Larger scale marketing
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Phase-4"
            iconStyle={{ background: 'yellow', color: '#fff' }}

        >
          <p>
              Will be listed on major exchanges
          </p>
        </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={{ background: 'green', color: '#fff' }}

          >
          </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
  );
}
