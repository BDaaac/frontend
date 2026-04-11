import { GetServerSideProps } from "next"

export default function AboutSSR({ time }: { time: string }) {
  return <h1>SSR Page time: {time}</h1>
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      time: new Date().toISOString()
    }
  }
}