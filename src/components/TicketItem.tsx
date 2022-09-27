export default function TicketItem({ event }: any) {
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <img
          src={event.imgUrl}
          alt="walpaper"
          className="w-36 h-26 rounded-lg mt-3 mb-3 min-h-[145px] min-w-[145px] ml-6"
        />
        <td className="py-4 px-6">{event.name}</td>
        <td className="py-4 px-6">{event.artist}</td>
        <td className="py-4 px-6">{event.price}</td>
        <td>
          <button className="text-gray-400 bg-gray-600 p-2 rounded-lg hover:bg-gray-700">
            Add Cart
          </button>
        </td>
      </tr>
    </>
  );
}
