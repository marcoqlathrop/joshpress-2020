import React from "react"
import { css, Styled } from "theme-ui"
import Header from "gatsby-theme-blog/src/components/header"
import RecentPosts from "../RecentPosts"

export const OtherWritingSection = () => (
  <section id="writing-other">
    <Styled.h2>I've Also Written Quite A Bit About Writing Code</Styled.h2>
    <dl>
      <dt>Torque Mag: A WPEngine Publication</dt>
      <dd>
        For many years I wrote about WordPress development and community for
        WPEngine's community site.
      </dd>
      <dd>
        <a href="https://torquemag.io/author/joshp/">Torque</a>
      </dd>
      <dt>DEV</dt>
      <dd>
        Recently I've been sharing short posts about JavaScript, TypeScript, PHP
        and WordPress development on dev.to
      </dd>
      <dd>
        <a href="https://dev.to/shelob9">My Dev Posts</a>
      </dd>
      <dt>Envato Tuts+</dt>
      <dd>I wrote about WordPress development for Tuts+ many years ago.</dd>
      <dd>
        <a href="https://tutsplus.com/authors/josh-pollock">My Tuts+ Posts</a>
      </dd>
    </dl>
  </section>
)
export default ({ children, ...props }) => {
  return (
    <Styled.root>
      <div>
        <Header title={"Writing"} {...props} />
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            py: 4,
          })}
        >
          <section id="writing">
            <Styled.h2>I've Written Quite A Bit About Writing Code</Styled.h2>
            <Styled.h3>Recent Posts</Styled.h3>
            <RecentPosts />
          </section>
          <OtherWritingSection />
        </div>
      </div>
    </Styled.root>
  )
}
