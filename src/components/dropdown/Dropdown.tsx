const Dropdown = ({ onSelectChange }: any) => {
  return (
    <div className="flex w-full text-center justify-center mt-16">
      Set Limit:
      <div className="">
        <select className="w-36" onChange={onSelectChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};
export default Dropdown;