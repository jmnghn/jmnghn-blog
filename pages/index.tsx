import Layout from '#components/common/Lyaout'

export default function Home() {
  return (
    <div>
      <div className="bg-slate-900 w-screen h-screen flex items-center justify-center p-4 ">
        <div
          className="text-4xl font-semibold text-indigo-50 sm:text-5xl"
          style={{ lineHeight: '56px' }}
        >
          <p>
            Hello <div className="animate-waving-hand inline-block">👋🏻</div>,
          </p>
          <p>Thank you for coming.</p>
          <p>I&apos;m still building a blog. 🚧</p>
          <p>👷🏻 See you shortly.</p>
        </div>
      </div>
    </div>
  )
}

Home.Layout = Layout
