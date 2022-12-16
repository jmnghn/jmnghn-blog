import SEO from '../SEO'

const Head = () => {
  return (
    <SEO>
      <meta key="charset" charSet="UTF-8" />
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <link rel="icon" href="/favicon.ico" />
    </SEO>
  )
}

export default Head
