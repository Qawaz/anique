import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import styled from "@emotion/styled"
import {css, Global} from "@emotion/react"
import {Heading, AniqueSystemThemeProvider} from "@qawaz/anique";

const GlobalStyles = css`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
`

const IndexPage: React.FC<PageProps> = (props) => {
    return (
        <>
            <AniqueSystemThemeProvider>
                <Container>
                    <Header>
                        <Heading element={"h1"}>Anique</Heading>
                    </Header>
                </Container>
            </AniqueSystemThemeProvider>
        </>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
