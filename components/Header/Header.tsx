import React, { FC, useEffect, useState } from 'react'
import { Button, Image, ExternalLink } from '@sharingexcess/designsystem'
import { PageLinks } from './Header.children'
import Head from 'next/head'
import Link from 'next/link'
import { useWidth } from 'hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useScrollPosition } from 'hooks/useScrollPosition'
import { hotjar } from 'react-hotjar'

const BACKGROUND_THRESHOLD = 200

export const Header: FC = () => {
  const width = useWidth()
  const scroll = useScrollPosition()
  const [prevScroll, setPrevScroll] = useState(scroll)
  const [background, setBackground] = useState(false)
  const isCondensed = width && width < 1000
  const [menu, setMenu] = useState(false)
  const [position, setPosition] = useState(0)

  useEffect(() => {
    hotjar.initialize(2723482, 6)
  }, [])

  useEffect(() => {
    // handle scroll up to top of page, switch to transparent header
    if (scroll < BACKGROUND_THRESHOLD) {
      setBackground(false)
      setPosition(0)
    }
    // handle scroll down page, switch to white header
    if (scroll > BACKGROUND_THRESHOLD && scroll > prevScroll) {
      setBackground(true)
    }
    // handle scroll down
    if (scroll > prevScroll && scroll > 0) {
      setPosition(Math.max(-100, position - 20))
    }
    // handle scroll up, but not to top of page
    if (scroll > BACKGROUND_THRESHOLD && scroll < prevScroll) {
      setBackground(true)
      setPosition(0)
    }
    setPrevScroll(scroll)
  }, [scroll]) // eslint-disable-line

  const toggleMenu = () => setMenu(currMenu => !currMenu)

  return (
    <>
      <Head>
        <title>Sharing Excess | Let&apos;s Free Food!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/logos/green.png" />
      </Head>
      <header
        id="Header"
        className={background ? 'with-background' : ''}
        style={{ top: position }}
      >
        <Link href="/">
          <a id="Header-logo">
            <Image src="/logos/green.png" alt="Sharing Excess Logo" />
          </a>
        </Link>
        {!isCondensed && <PageLinks color={background ? 'black' : 'white'} />}
        <Button
          type="primary"
          id="Header-donate"
          color={background ? 'green' : 'white'}
        >
          <Link href="/donate">Donate</Link>
        </Button>
        <ExternalLink to="https://sharingexcess.web.app">
          <Button
            type="secondary"
            color={background ? 'green' : 'white'}
            id="Header-sign-in"
          >
            Sign In
          </Button>
        </ExternalLink>
        {isCondensed && (
          <Button type="tertiary" id="Header-menu-button" handler={toggleMenu}>
            <FontAwesomeIcon icon={faBars} id="Header-menu-icon" />
          </Button>
        )}
        {menu ? (
          <aside id="Header-menu">
            <Button
              type="tertiary"
              id="Header-menu-button"
              handler={toggleMenu}
            >
              <FontAwesomeIcon icon={faBars} id="Header-menu-icon" />
            </Button>
            <PageLinks color="black" />
          </aside>
        ) : null}
      </header>
    </>
  )
}
