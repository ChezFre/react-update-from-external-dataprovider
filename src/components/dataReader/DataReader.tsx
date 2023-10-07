import { useData } from "../../dataProvider";

const DataReader = () => {
  const data = useData();

  return (
    <ul>
      {data?.map(({ ...props }, index: number) => (
        <li key={index}>{JSON.stringify(props, null, 2)}</li>
      ))}
    </ul>
  );
};

export { DataReader };
