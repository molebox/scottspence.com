/** @jsx h */
import { h } from 'preact'
import MobileNav from './mobile-nav.js'
import Nav from './nav.js'

export default function Header() {
  return (
    <header>
      <Nav />
      <MobileNav />
    </header>
  )
}
