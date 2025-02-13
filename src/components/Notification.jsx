
const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">Team INDRA</h6>

        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            <li>We are Team Indra, a passionate and ambitious student rocketry team pushing the boundaries of innovation and engineering excellence. </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;
