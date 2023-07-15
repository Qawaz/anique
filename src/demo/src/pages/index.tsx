import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import styled from "@emotion/styled"
import {AniqueSystemThemeProvider, H1, Link} from "@qawaz/anique";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 0.5em;
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
                        <H1>Anique</H1>
                    </Header>
                    <p>
                        Anique is a UI component library build with React & Emotion, This is is docs site
                        At the moment You can view Anique components in the storybook as this site is under development
                    </p>
                    <Link href={"./storybook"}>Anique Storybook</Link>
                </Container>
            </AniqueSystemThemeProvider>
        </>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Anique | UI Component Library</title>
