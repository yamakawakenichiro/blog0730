import Image from "next/image"
import Container from "components/container"
import Hero from "components/hero"
import PostBody from "components/post-body"
import Contact from "components/contact"
import Accordion from "components/accordion"
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "components/two-column"

import eyecatch from "images/about.jpg"
import Meta from "components/meta"

export default function About() {
  return (
    <Container>
      <Meta
        pageTitle="アバウト"
        pageDesc="About development activities"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero title="About" subtitle="About development activities" />
      <figure>
        <Image
          src={eyecatch}
          alt=""
          width={1920}
          height={960}
          sizes="(min-width:1152px)1152px,100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          priority
        />
      </figure>
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <h1>タグに直接</h1>
            <p>
              タグに直接 className を付けると確実にスタイルを適用できる Container コンポーネントが section や article
              などに変えてもOK（意味論的に） もし Container の中で children
              にスタイルがうまく継承されないなら、CSS構成やレイアウト構造を少し見直す必要があるかも コードの構成か
              CSSファイルの内容をもう少し教えてくれれば、もっとピンポイントにアドバイスできるよ 😄
              pタグでボックスから文字がはみ出てしまう。
              文字がボックスからはみ出す原因は、長い単語や連続した文字列が改行されないことが多いです。特に英語や数字がスペースなしで続いていると、CSSが「どこで折り返せばいいか分からない」状態になります
            </p>
            <p>そして、</p>
            <h2>like</h2>
            <h2>linke</h2>
            <p>そして、</p>
            <p>
              タグに直接 className を付けると確実にスタイルを適用できる Container コンポーネントが section や article
              などに変えてもOK（意味論的に） もし Container の中で children
              にスタイルがうまく継承されないなら、CSS構成やレイアウト構造を少し見直す必要があるかも コードの構成か
              CSSファイルの内容をもう少し教えてくれれば、もっとピンポイントにアドバイスできるよ 😄
              pタグでボックスから文字がはみ出てしまう。
              文字がボックスからはみ出す原因は、長い単語や連続した文字列が改行されないことが多いです。特に英語や数字がスペースなしで続いていると、CSSが「どこで折り返せばいいか分からない」状態になります
            </p>
            <p>
              タグに直接 className を付けると確実にスタイルを適用できる Container コンポーネントが section や article
              などに変えてもOK（意味論的に） もし Container の中で children
              にスタイルがうまく継承されないなら、CSS構成やレイアウト構造を少し見直す必要があるかも コードの構成か
              CSSファイルの内容をもう少し教えてくれれば、もっとピンポイントにアドバイスできるよ 😄
              pタグでボックスから文字がはみ出てしまう。
              文字がボックスからはみ出す原因は、長い単語や連続した文字列が改行されないことが多いです。特に英語や数字がスペースなしで続いていると、CSSが「どこで折り返せばいいか分からない」状態になります
            </p>
            <h2>FAQ</h2>
            <Accordion heading="プログラミングのポイントについて">
              <p>
                プログラミングのポイントは、作りたいものを作ることです。楽しいことから思いつき、目標とゴールを決め、そこに向かってさまざまな課題を設定していきながら、プログラムを作っていきます。
              </p>
            </Accordion>
            <Accordion heading="古代語の解読について">
              <p>
                古代語を解読するのに必要なのは、書かれた文字そのものだけです。古代の世界観や思考方法。それらを読み取ってこそ古代の世界観が理解できてきます。
              </p>
            </Accordion>
            <Accordion heading="公開リポジトリの活用について">
              <p>
                公開リポジトリを活用すると、全世界のどこからでもアクセスし、開発者が関連するプロジェクトのタスクを利用することができます。
              </p>
            </Accordion>
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  )
}
