import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { StyledTab } from '../../components'

function CharsOverview () {
  const TabOverview = () => {
    return (
      <Tabs defaultActiveKey="construct" id="overview-tab" className="mb-3">
        <Tab eventKey="construct" title="All Character">
        </Tab>
        <Tab eventKey="overview" title="Overview">
          <h3 className="text-white bg-danger text-center">Construct Overview</h3>
          <div className="my-4">
            <h4 className="text-white">About Constructs</h4>
            <p>Constructs are designed for the majority of the game&apos;s content and possess default className ratings of B-Rank, A-Rank, and S-Rank.</p>
            <p>
              Constructs have three predesignated classes: Attacker (dealing damage), Tank (weakening enemies), and Support (healing and buffing allies). They cannot be deployed in the same team as Compositers.
            </p>
          </div>
          <div className="my-4">
            <h4 className="text-white">Obtaining Constructs</h4>
            <p>
              With the exception of B-Rank characters, Constructs are predominantly acquired through R&D.
            </p>
            <ul>
              <li>B-Rank Constructs are given automatically via story progression.</li>
              <li>A-Rank Constructs are guaranteed every 10 pulls.</li>
              <li>S-Rank Constructs are guaranteed at a minimum of 60 pulls.</li>
            </ul>
          </div>
          <div className="my-4">
            <h4 className="text-white">Duplicates</h4>
            <p>
              In the case that you pull a duplicate of a character you already own, the duplicate will be converted into Inver-Shards. The amount of Shards you obtain depends on the base rarity of the character you pulled, regardless of how much you have increased their rank previously.
            </p>
            <ul>
              <li>B-Rank Construct duplicates give 6 Inver-Shards</li>
              <li>A-Rank Construct duplicates gives 18 Inver-Shards.</li>
              <li>S-Rank Construct duplicates give 30 Inver-Shards</li>
            </ul>
          </div>
          <div className="my-4">
            <h4 className="text-white">Promotion</h4>
            <p>
              Every five levels, a Construct can be promoted by spending Cogs, greatly improving overall stats. The total cost of fully promoting a character is a hefty 542,500 Cogs. These promotion ranks are named the following: Private, Sergeant, Elite, Task Force, Ace, and Hero.
            </p>
          </div>
          <div className="mb-4 border border-top border-white" />
        </Tab>
      </Tabs>
    )
  }

  return (
    <div className="container-fluid bg-color">
      <h2>Characters List</h2>
      <StyledTab>
        <TabOverview />
      </StyledTab>
    </div>
  )
}

export default CharsOverview
