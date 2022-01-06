import { CounterButton } from "ui"

interface Props {
  data: any
}
export default function Store(props: Props) {
  console.warn("Hey! This is Home.", props.data)
  return (
    <div>
      <h1>Store</h1>
      {props.data.map((el: any) => (
        <div key={el.id}>{el.dummy}</div>
      ))}
      <CounterButton />
    </div>
  )
}

export async function getStaticProps() {
  const res = [
    {
      id: 1,
      dummy: "dummy 1",
      createdAt: "2021-12-22T08:51:12.000Z",
      updatedAt: "2021-12-22T08:51:12.000Z",
    },
    {
      id: 2,
      dummy: "dummy 2",
      createdAt: "2021-12-22T08:51:12.000Z",
      updatedAt: "2021-12-22T08:51:12.000Z",
    },
    {
      id: 3,
      dummy: "dummy 3",
      createdAt: "2021-12-22T08:51:12.000Z",
      updatedAt: "2021-12-22T08:51:12.000Z",
    },
    {
      id: 4,
      dummy: "dummy 4",
      createdAt: "2021-12-22T08:51:12.000Z",
      updatedAt: "2021-12-22T08:51:12.000Z",
    },
    {
      id: 5,
      dummy: "dummy 5",
      createdAt: "2021-12-22T08:51:12.000Z",
      updatedAt: "2021-12-22T08:51:12.000Z",
    },
    {
      id: 6,
      dummy: "dummy 6",
      createdAt: "2021-12-22T08:51:12.000Z",
      updatedAt: "2021-12-22T08:51:12.000Z",
    },
    {
      id: 7,
      dummy: "dummy 7",
      createdAt: "2021-12-22T08:51:12.000Z",
      updatedAt: "2021-12-22T08:51:12.000Z",
    },
    {
      id: 8,
      dummy: "dummy 8",
      createdAt: "2021-12-22T08:51:12.000Z",
      updatedAt: "2021-12-22T08:51:12.000Z",
    },
    {
      id: 9,
      dummy: "dummy 9",
      createdAt: "2021-12-22T08:51:12.000Z",
      updatedAt: "2021-12-22T08:51:12.000Z",
    },
    {
      id: 10,
      dummy: "dummy 10",
      createdAt: "2021-12-22T08:51:12.000Z",
      updatedAt: "2021-12-22T08:51:12.000Z",
    },
    {
      id: 11,
      dummy: "dummy 11",
      createdAt: "2021-12-22T08:51:12.000Z",
      updatedAt: "2021-12-22T08:51:12.000Z",
    },
    {
      id: 12,
      dummy: "dummy 12",
      createdAt: "2021-12-22T08:51:12.000Z",
      updatedAt: "2021-12-22T08:51:12.000Z",
    },
    {
      id: 13,
      dummy: "dummy 13",
      createdAt: "2021-12-22T08:51:12.000Z",
      updatedAt: "2021-12-22T08:51:12.000Z",
    },
    {
      id: 14,
      dummy: "dummy 14",
      createdAt: "2021-12-22T08:51:12.000Z",
      updatedAt: "2021-12-22T08:51:12.000Z",
    },
    {
      id: 15,
      dummy: "dummy 15",
      createdAt: "2021-12-22T08:51:12.000Z",
      updatedAt: "2021-12-22T08:51:12.000Z",
    },
    {
      id: 16,
      dummy: "dummy 16",
      createdAt: "2021-12-22T08:51:12.000Z",
      updatedAt: "2021-12-22T08:51:12.000Z",
    },
    {
      id: 17,
      dummy: "dummy 17",
      createdAt: "2021-12-22T08:51:12.000Z",
      updatedAt: "2021-12-22T08:51:12.000Z",
    },
    {
      id: 18,
      dummy: "dummy 18",
      createdAt: "2021-12-22T08:51:12.000Z",
      updatedAt: "2021-12-22T08:51:12.000Z",
    },
    {
      id: 19,
      dummy: "dummy 19",
      createdAt: "2021-12-22T08:51:12.000Z",
      updatedAt: "2021-12-22T08:51:12.000Z",
    },
    {
      id: 20,
      dummy: "dummy 20",
      createdAt: "2021-12-22T08:51:12.000Z",
      updatedAt: "2021-12-22T08:51:12.000Z",
    },
  ]
  const data = res

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}
