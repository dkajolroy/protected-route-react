const friend = [
  {
    _id: "cdc88cd",
    name: "Kajol Roy",
    dataOfBirth: "",
    friends: ["cdc88rcd"],
  },
  {
    _id: "cdc88rcd",
    name: "Minal Roy",
    dataOfBirth: "",
    friends: ["cdc88cd"],
  },
];

function Friends() {
  return (
    <div className="d-grid gap-2 w-75 mx-auto">
      {friend.map((item, i) => (
        <div
          className="d-flex bg-secondary py-2 px-2 justify-content-between"
          key={i}
        >
          <h4 className="text-light">{item.name}</h4>
          <button className="btn btn-primary">Send Request</button>
        </div>
      ))}
    </div>
  );
}

export default Friends;
