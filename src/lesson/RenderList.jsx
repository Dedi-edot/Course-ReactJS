function RenderList() {
  const Numbers = [1, 2, 3, 4, 5];
  const ListNumber = Numbers.map((number) => <li>{number}</li>);

  return (
    <div>
      <ul>{ListNumber}</ul>
    </div>
  );
}

export default RenderList;
