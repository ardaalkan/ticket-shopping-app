import TicketItem from "../components/TicketItem";

const TicketsPage = () => {
  const events = [
    {
      id: 1,
      artist: "Container Enthusiasm",
      name: "Talk Docker to Me Tour",
      date: "10/1/2022, 7:00:00 PM",
      price: 49.99,
      imgUrl: "logos/Container-Enthusiasm-TalkDocker-To-Me.png",
    },
    {
      id: 2,
      artist: "Digital Cowboys",
      name: "Binary Bovine Tour",
      date: "11/1/2022, 7:30:00 PM",
      price: 59.99,
      imgUrl: "logos/DigitalCowboys_BinaryBovine.png",
    },
    {
      id: 3,
      artist: "Git Outta My Hub",
      name: "Code Empire Tour",
      date: "12/1/2022, 8:00:00 PM",
      price: 39.99,
      imgUrl: "logos/GitOuttaMyHub-CodeEmpire.png",
    },
    {
      id: 4,
      artist: "Network Firewall Squad",
      name: "For Those About to Block Tour",
      date: "3/8/2022, 8:40:00 PM",
      price: 69.99,
      imgUrl:
        "logos/Network-Firewall-Squad---For-Those-About-to-Block,-We-Salute-You.png",
    },
  ];

  return (
    <div>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Image
              </th>
              <th scope="col" className="py-3 px-6">
                Event
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <TicketItem event={event} key={event.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketsPage;
